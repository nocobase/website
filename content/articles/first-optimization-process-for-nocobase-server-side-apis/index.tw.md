---
title: "NocoBase 伺服器端 API 的首次優化流程"
description: "探索 NocoBase 伺服器端 API 的全面優化流程。本詳細指南涵蓋效能測試、程式碼分析以及策略性改進，以提升 API 效率。了解各種中介軟體和快取策略對效能的影響，並探討所實現的重大增強。適合希望在複雜場景中優化 API 效能的開發人員。"
---

## 背景

有使用者透過 [GitHub issue](https://github.com/nocobase/nocobase/issues/2912) 回報 NocoBase 的系統吞吐量不盡理想。考量到產品正處於快速迭代階段，團隊目前優先處理系統功能面的改善，對於效能方面的特定優化投入較少。然而，隨著 NocoBase 逐步進入生產環境且使用者規模擴大，效能問題也逐漸浮現。我們必須加強關注並啟動優化工作。

當然，對於 NocoBase 這類產品，實際應用場景往往較為複雜，且使用者習慣差異甚大。效能優化需要針對不同場景進行具體且分階段的分析，無法在一次優化中全面解決所有問題。

本次優化重點在於對系統的伺服器端 API 效能進行初步評估，並針對性地進行基礎改善。

## 效能測試

### 說明

NocoBase 使用 Koa + Sequelize 作為底層框架。我們設計了幾個測試場景作為基準進行比較分析：

* **Koa + Sequelize：** 代表基礎框架，反映理論上的最佳效能，儘管實際場景可能會有些妥協。
* **Koa + @nocobase/database：** @nocobase/database 是基於 Sequelize 的資料庫操作抽象層。
* **Koa + @nocobase/resourcer：** @nocobase/resourcer 負責路由與分派層。
* **Koa + @nocobase/server：** @nocobase/server 作為 NocoBase 伺服器。
* **Koa + Nocobase：** 這是完整的 NocoBase 程式，包含內建插件。

此效能測試並非模擬生產環境進行詳盡的壓力測試，而是專注於分層測試以比較數據，找出影響 API 效能的主要因素。測試主要在我的個人電腦上進行，規格如下：

* **作業系統：** MacOS 14.0
* **CPU：** 10 核心
* **記憶體：** 32GB
* **資料庫：** PostgreSQL (Docker, 最新版本)
* **NocoBase 執行方式：** `yarn start -d`

測試的 API 端點為 `/api/users:list`，等同於對 `users` 資料表執行 `select ... limit 20` 和 `count` 語句。具體程式碼可參考[此處](https://github.com/nocobase/nocobase/tree/main/benchmark)。

每個測試場景皆使用指令 `wrk -t20 -c20 -d1m` 進行評估。

### Koa + Sequelize

RPS: 6938.71

```
> $ wrk -t20 -c20 -d1m http://localhost:13020/ 
Running 1m test @ http://localhost:13020/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    0.88ms  38.10ms   97.01%
    Req/Sec   348.52     30.22   434.00     84.53%
  416831 requests in 1.00m, 141.52MB read
Requests/sec:   6938.71
Transfer/sec:      2.36MB
```

資料庫 CPU > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   125.63%   196.7MiB / 7.748GiB   2.48%     11.6GB / 15.8GB   76.4MB / 2.81GB   11
```

PostgreSQL 通常只使用一個 CPU 核心，表示效能瓶頸在資料庫端。

### Koa + @nocobase/database

RPS: 5487.29

```
> $ wrk -t20 -c20 -d1m http://localhost:13010/                   
Running 1m test @ http://localhost:13010/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.66ms  795.89us  32.80ms   91.85%
    Req/Sec   275.53     21.87   434.00     82.60%
  329784 requests in 1.00m, 121.71MB read
Requests/sec:   5487.29
Transfer/sec:      2.03MB
```

資料庫 CPU > 100%

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   102.99%   197.7MiB / 7.748GiB   2.49%     12.3GB / 16.6GB   76.5MB / 2.82GB   11
```

效能略有下降，但仍在可接受範圍，且資料庫大致已滿載運作。

### Koa + @nocobase/resourcer

RPS: 4787.94

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13040/api/users:list'
Running 1m test @ http://localhost:13040/api/users
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.20ms    0.92ms  30.97ms   88.29%
    Req/Sec   240.48     18.01   333.00     80.79%
  287757 requests in 1.00m, 120.47MB read
Requests/sec:   4787.94
Transfer/sec:      2.00MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O         BLOCK I/O         PIDS
80393e7580c1   postgres   87.72%    197.3MiB / 7.748GiB   2.49%     12.6GB / 17GB   76.5MB / 2.82GB   11
```

效能進一步下降，且資料庫尚未達到滿載。我們稍後會分析原因。

### Koa + @nocobase/server

RPS: 2285.86

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13030/api/users:list'                                                   
Running 1m test @ http://localhost:13030/api/users:list
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.80ms    2.05ms  93.25ms   97.23%
    Req/Sec   114.80      9.27   300.00     93.35%
  137358 requests in 1.00m, 87.90MB read
Requests/sec:   2285.86
Transfer/sec:      1.46MB
```

```
CONTAINER ID   NAME       CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O         PIDS
80393e7580c1   postgres   47.82%    197.5MiB / 7.748GiB   2.49%     13.2GB / 17.7GB   76.9MB / 3.15GB   11
```

與 Koa + @nocobase/resourcer 的測試數據相比，效能大約下降了 50%，表示主要的效能瓶頸已從資料庫轉移到程式本身。

### Nocobase

RPS: 580.48

```
> $ wrk -t20 -c20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg' 
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY3MjA3MCwiZXhwIjoxNzAyMjc2ODcwfQ.ISmvJ7cc2XhlNO3xB6O2gndvwKS2Xs71Fo2bXuRpmfg
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    34.44ms    3.85ms  97.95ms   85.18%
    Req/Sec    29.03      3.94    50.00     85.04%
  34886 requests in 1.00m, 26.25MB read
Requests/sec:    580.48
Transfer/sec:    447.27KB
```

NocoBase 的整體效能顯著下降，這在測試前是預料之中的。這是因為介面會經過許多插件的中介軟體，涉及認證、權限檢查和資料庫查詢。值得注意的是，到目前為止尚未實作快取，這將是本次優化的關鍵重點。

## 程式碼分析與優化

### Sequelize -> database -> resourcer

從底層的 Sequelize 到 database，再到 resourcer，雖然每一層都帶來一些效能開銷，但對於單一進程來說仍在可接受範圍。這主要是因為對程式邏輯進行了額外的封裝。由於目前的優化重點並非一次性達成完整解決方案，這部分將暫時維持現狀，未來若有需要再另行調整。

### resourcer -> server

從 resourcer 到 server，效能衰減超過一半，表示此處確實存在問題。因此，我們從這裡開始分析。與 resourcer 相比，server 引入了額外的應用程式層級中介軟體（請參閱 [`helper.ts`](https://github.com/nocobase/nocobase/blob/main/packages/core/server/src/helper.ts)）。檢視程式碼後，大多數邏輯似乎相對直接，沒有明顯會顯著影響效能的部分。因此，我決定收集與中介軟體時間消耗相關的數據，以獲取更多資訊。

#### perf\_hooks

NodeJS 透過 [perf\_hooks](https://nodejs.org/api/perf_hooks.html#perf_hooksperformance) 提供效能測試 API。這些 API 提供了比單純計算執行時間更豐富的指標。在我們的情境中，重點仍然是仔細審查每個中介軟體所花費的時間。透過使用 `perf_hooks.createHistogram` 建構直方圖，我們可以執行壓力測試，並仔細記錄每個中介軟體的執行時間。這種方法使我們能夠在壓力測試期間獲得關鍵統計數據，例如最小值、最大值和中位數執行時間。例如：

```
{
  "i18n": {
    "count": 12455,
    "min": 1875,
    "max": 927231,
    "mean": 4867.227137695704,
    "exceeds": 0,
    "stddev": 10258.399954791737,
    "percentiles": {
      "0": 1875,
      "50": 3250,
      "75": 5372,
      "100": 926720
    }
  }
}
```

對結果進行排序後，有兩個中介軟體元件對效能的影響特別顯著：日誌記錄和 `i18n`。

#### 日誌記錄

預設情況下，NocoBase 會同時將日誌輸出到檔案和終端機。參考 Node.js 關於[程序 I/O](https://nodejs.org/api/process.html#a-note-on-process-io) 的文件，

> **警告**：同步寫入會阻塞事件循環，直到寫入完成。

在我的測試環境中，這兩種輸出很可能都是同步的，而且由於每個請求和回應都會記錄日誌，這無可避免地會對效能產生一些影響。考慮到介面日誌是必要的，我們暫時維持目前的配置。然而，在生產環境中，通常只保留檔案日誌。因此，在未來的測試中，我們可以考慮停用終端機日誌以減少一些效能開銷。在生產環境中，根據需要調整日誌級別也是一個可行的選項。

#### i18n

負責管理在地化資源的 `i18n` 中介軟體顯示出顯著的時間消耗，主要瓶頸在於以下程式碼行：

```
const i18n = ctx.app.i18n.cloneInstance({ initImmediate: false });
```

目前為了在不同請求中隔離語言資源而複製 i18n 實例的做法相當耗時。為了優化，可以實作基於語言的單例模式，允許對相同語言重複使用現有實例，而不是為每個請求重新載入它們。

### server -> NocoBase

從簡單的 server 轉換到完整的 NocoBase，效能有顯著下降。如前所述，完整的 NocoBase 包含許多內建插件，引入了許多路由層級的中介軟體，包括認證和權限。遵循前面討論的方法，我們使用 `perf_hooks` 來測量這些中介軟體所花費的時間。結果突顯了兩個影響最大的中介軟體及其主要執行邏輯：

* `authManager.middleware` - 使用者認證中介軟體
  1. 檢查使用者 token 是否在黑名單中。
  2. 取得目前使用的認證方法。
  3. 根據認證方法取得使用者資訊。
* `acl.setCurrentRole` - 用於設定權限模組中角色資訊的中介軟體
  * 根據目前使用者 ID 取得關聯的角色資訊，並設定使用者角色。

這兩個中介軟體在其主要邏輯中都會為每個請求執行資料庫查詢。為了解決這個問題，我們引入了快取機制。

#### 快取策略

##### 儲存

NocoBase 目前同時使用記憶體快取和 Redis 快取。對於相對靜態的數據，例如系統認證方法，我們將其儲存在記憶體中。與使用者資訊相關的數據則遵循預設的儲存配置，允許使用者選擇 Redis 作為預設儲存方式。

##### 按需快取 + Hook 更新

認證方法、使用者資訊和角色等數據通常屬於讀取密集型、寫入極少的類型。我們實作了按需快取策略，第一次請求觸發資料庫查詢，並將結果快取起來。後續請求則使用快取的結果。為了確保資料一致性，我們引入了 hook 來監聽任何資料庫變更，並同步更新快取。

##### 布隆過濾器

對於 token 黑名單查詢，我們需要將使用者 token 與黑名單中的 token 進行比對，按需快取並不適用。相反地，在程式啟動期間，我們會將黑名單 token 預先載入到快取中。為了節省記憶體空間，我們使用布隆過濾器來快取黑名單。布隆過濾器可以準確判斷一個值是否不存在，但對於值的存在與否則有誤判的機率。布隆過濾器會先檢查使用者 token 是否在黑名單中。如果布隆過濾器表示存在，我們會進行二次資料庫查詢以確保準確性。

##### LRU

NocoBase 的記憶體快取預設使用最近最少使用 (LRU) 策略進行快取回收。使用者可以配置快取策略，例如設定快取空間的上限。對於 Redis 使用者，可以根據需要配置自訂的快取策略，例如 LRU 或 LFU。

#### 其他優化

除了前面提到的中介軟體優化之外，某些中介軟體，例如 db2resource 和 ACLMiddleware，也會影響效能。為了進一步分析潛在的效能瓶頸，並且目前沒有直接的優化任務，我們計劃啟用 inspector 來檢查系統在運行時的 CPU profile。

```
# 啟用 inspector
NODE_ARGS=--inspect yarn start
```

透過使用 wrk 持續向 API 發送請求，並在 Chrome DevTools 中擷取特定時間範圍內的 CPU profile，我們可以得到類似以下的結果。

![Chrome DevTools](https://static-docs.nocobase.com/fdfa998ef9c4067b2b302551f6ab950d.webp)

檢查 profile 後，我們發現 db2resource 中用於解析路由的某些邏輯（例如使用 pathToRegexp）對效能有顯著影響，這解釋了先前測試中路由層效能進一步下降的原因。在 ACLMiddleware 中，與權限處理相關的操作（例如 miniMatch）也顯示出較長的執行時間。針對這些方面，我們已經實作了一些初步的優化，例如為重複計算快取變數。更廣泛的優化將在未來的迭代中進行。

## 總結

### 優化結果

在此次優化工作中，我們專注於：

* 使用變數來快取中介軟體中耗時的操作，例如 `i18n` 實例建立和權限檢查。
* 為涉及頻繁資料庫查詢的中介軟體操作引入適當的快取機制。

此外，我們建議在生產環境中根據需求調整日誌輸出級別和方式，以減輕日誌列印對 API 效能的影響。

在實施這些優化後，重新測試完整的 NocoBase 應用程式顯示 API 效能有顯著提升。

```
> $ wrk -c20 -t20 -d1m 'http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0'
Running 1m test @ http://localhost:13000/api/users:list?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTY5NzU5MCwiZXhwIjoxNzAyMzAyMzkwfQ.Fs7ccoBKi2F2MPOCO5kpJHTH_mnVhqkFVQmlBzgBza0
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.60ms    2.62ms 103.80ms   96.32%
    Req/Sec   105.44     11.62   393.00     83.66%
  126047 requests in 1.00m, 60.10MB read
  Non-2xx or 3xx responses: 2
Requests/sec:   2097.31
Transfer/sec:      1.00MB
```

### 持續優化

本次的優化過程存在一定的局限性：

一方面，我們只測試了簡單的請求。在實際業務場景中，過濾、變數解析、複雜事務等方面可能會帶來額外的效能挑戰，需要進一步優化。

另一方面，我們專注於優化對效能影響較大的部分，其他方面仍有改進空間。

未來，我們將持續優化 NocoBase 的效能。如果您在使用過程中遇到效能問題，歡迎提供具體案例進行分析和優化。您的回饋對於處理實際使用場景非常有價值。

## 參考資料

* [快取最佳實踐 | Amazon Web Services](https://aws.amazon.com/cn/caching/best-practices/)
* [布隆過濾器](https://redis.io/docs/data-types/probabilistic/bloom-filter/)
* [效能測量 API | Node.js v21.4.0 文件](https://nodejs.org/api/perf_hooks.html#perf_hookscreatehistogramoptions)
* [除錯 - 入門 | Node.js](https://nodejs.org/en/guides/debugging-getting-started)
