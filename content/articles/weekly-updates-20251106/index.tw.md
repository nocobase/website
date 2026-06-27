---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援「資料儲存前」觸發模式、子表格新增分頁功能等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*發布日期：2025-11-05*

### 🚀 改進

- **[database]** 為 MariaDB 連線實例新增 `multipleStatements` 選項，以支援在單次查詢中調用多個語句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
- **[Workflow]** 支援工作流中的資料區塊使用合併明細設定選單 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 錯誤修復

- **[server]** 按應用程式名稱隔離發布-訂閱頻道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[client]** 修復「超出最大調用堆疊大小」錯誤 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
- **[database]** 當欄位名稱使用蛇形命名法（snake_case）時，索引欄位檢測不正確 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[Workflow]** 解決了叢集模式下工作流調度器無法正確識別空閒狀態的問題，這可能導致在插件準備就緒前觸發不必要的佇列事件消費 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
- **[Mobile (已棄用)]** 修復行動端日期欄位預設值彈窗無法選擇日期的問題 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
- **[Workflow: 審批]** 修復建立重複審批工作流時拋出的錯誤 by @mytharcher
- **[Email manager]** 為集合 mailMessages 新增索引 by @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*發布日期：2025-11-04*

### 🚀 改進

- **[Workflow: 審批]** 為委派和新增的審批人新增通知 by @mytharcher

### 🐛 錯誤修復

- **[Workflow]** 修復在服務拆分模式下，手動執行包含中斷節點的工作流會卡在待處理狀態的問題 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[Email manager]** 為索引新增遷移 by @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*發布日期：2025-11-04*

### 🐛 錯誤修復

- **[Workflow: 審批]** 不再支援在並行分支中建立審批節點，以避免流程狀態引起的問題 by @mytharcher
- **[Email manager]** 新增同步日誌 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*發布日期：2025-11-03*

### 🎉 新功能

- **[Workflow: 審批]** 支援「資料儲存前」的觸發模式 by @mytharcher

### 🚀 改進

- **[server]** 新增閘道器日誌 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
- **[Workflow: 通知節點]** 為通知節點新增 `ignoreFail` 選項，允許在通知發送失敗時繼續執行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復操作面板中的 QR 碼掃描聯動規則配置 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
  - 修復模態框內 iframe 區塊聯動規則失效的問題 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
- **[database]** 跳過 MySQL JSON 欄位的預設值同步 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[Workflow]**

  - 修復在服務拆分模式下，記憶體中待處理佇列處理不當導致部分工作流無法執行的問題 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
  - 修復使用 deferred 建立時執行狀態的值 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
  - 修復刪除開始分支的節點後，分支內保留的第一個節點的鍵被錯誤更改為新值的問題 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
- **[存取控制]** 修復 `resourceManager` 的中介軟體順序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile
- **[File manager]** 修復 `.msg` 檔案無法正常上傳的問題 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[Workflow: 人工節點]** 修復工作流停用後人工任務消失的問題 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
- **[Collection field: 中國行政區劃]** 當城市和區域名稱相同時資料匯入失敗 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[Workflow: 審批]**

  - 修復審批完成通知中狀態文字的翻譯問題，當用戶未設定語言偏好時，使用系統預設語言進行翻譯 by @mytharcher
  - 修復語言區域設定 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*發布日期：2025-11-05*

### 🚀 改進

- **[database]** 為 MariaDB 連線實例新增 `multipleStatements` 選項，以支援在單次查詢中調用多個語句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 錯誤修復

- **[flow-engine]** 修復了切換頁面後表格區塊中的操作按鈕未正確更新的問題，確保其功能與當前頁面的資料匹配。 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
- **[client]**

  - 修復「超出最大調用堆疊大小」錯誤 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
  - 修復關聯欄位標題欄位省略號未應用的問題 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  - 更新記錄操作的聯動規則不起作用 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
- **[database]** 當欄位名稱使用蛇形命名法（snake_case）時，索引欄位檢測不正確 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[Mobile (已棄用)]** 修復行動端日期欄位預設值彈窗無法選擇日期的問題 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*發布日期：2025-11-05*

### 🎉 新功能

- **[client]** 為子表格新增分頁支援 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 改進

- **[undefined]** 更新圖表插件的英文文件 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
- **[telemetry]** 新增線上子應用程式數量等遙測指標 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
- **[Workflow]** 支援工作流中的資料區塊使用合併明細設定選單 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
- **[Multi-app manager (已棄用)]** 啟用使用佇列的非同步子應用程式啟動 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
- **[Data visualization]** 新增圖表資料時間格式選項 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
- **[Workflow: 審批]** 為委派和新增的審批人新增通知 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復了變數相關元件中枚舉類型的標籤未以正確語言顯示的問題。 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  - 修復設定前端驗證後缺少必填欄位指示符的問題 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  - 修復在編輯表單中清除無時區日期的問題 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  - 修復聯動規則的必填欄位驗證 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  - 解決在篩選器中刪除指定日期時出現無效日期的問題 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  - 修復 Markdown Vditor 欄位必填驗證失敗的問題 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  - 為篩選表單中的關聯欄位新增資料範圍配置 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  - 修復子表格欄位中的時間格式問題 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
- **[flow-engine]**

  - 當欄位篩選值設定為 false 時，帶有資料範圍的請求不正確 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  - 無法解析子表單當前物件變數的關聯欄位值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  - 修復：解決刪除最後一頁資料後的頁面請求參數問題 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
- **[server]** 按應用程式名稱隔離發布-訂閱頻道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[Block: GridCard]** 修復列表和網格卡片區塊之間的資料重複問題 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
- **[Multi-app manager (已棄用)]** 子應用程式狀態指標的集合不正確 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
- **[Workflow]**

  - 解決了叢集模式下工作流調度器無法正確識別空閒狀態的問題，這可能導致在插件準備就緒前觸發不必要的佇列事件消費 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
  - 修復在服務拆分模式下，手動執行包含中斷節點的工作流會卡在待處理狀態的問題 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[Workflow: 審批]**

  - 修復建立重複審批工作流時拋出的錯誤 by @mytharcher
  - 不再支援在並行分支中建立審批節點，以避免流程狀態引起的問題 by @mytharcher
- **[Email manager]**

  - 新增同步日誌 by @jiannx
  - 為索引新增遷移 by @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*發布日期：2025-11-03*

### 🎉 新功能

- **[Workflow: 審批]** 支援「資料儲存前」的觸發模式 by @mytharcher

### 🐛 錯誤修復

- **[client]** 無法載入當前表單變數的欄位 ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust
- **[Workflow: 審批]** 修復語言區域設定 by @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*發布日期：2025-11-02*

### 🚀 改進

- **[Workflow: 通知節點]** 為通知節點新增 `ignoreFail` 選項，允許在通知發送失敗時繼續執行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*發布日期：2025-11-02*

### 🐛 錯誤修復

- **[client]**

  - 解決了當前表單中的關聯欄位變數無法被正確識別的問題，確保表單中資料處理的準確性。 ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust
  - 解決了將陣列作為值或預設值分配給「toOne」欄位時導致錯誤的問題。這確保了變數解析結果的正確處理，提高了系統穩定性和準確性。 ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust
- **[存取控制]** 修復 `resourceManager` 的中介軟體順序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*發布日期：2025-11-01*

### 🚀 改進

- **[flow-engine]** 改進了複製 UID 失敗時顯示的錯誤訊息，提供了更清晰的解決問題說明。 ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

### 🐛 錯誤修復

- **[flow-engine]** 事件流程的步驟不應顯示在配置選單中 ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust
- **[client]** 修復了不可篩選的欄位被錯誤地列在篩選選項中的問題，確保僅顯示適用的欄位供選擇。 ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust
- **[Workflow]** 修復使用 deferred 建立時執行狀態的值 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
- **[AI employees]** 優化了 Gemini 的網路搜尋行為和用戶提示 ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock
- **[Action: 匯出記錄]** 解決匯出操作中可匯出欄位列表顯示的問題 ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh
- **[Action: 匯入記錄]** 解決可匯入欄位中欄位列表顯示的問題 ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh
- **[Action: 匯入記錄 Pro]** 解決可匯入欄位中欄位列表顯示的問題 by @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*發布日期：2025-10-31*

### 🎉 新功能

- **[client]** 事件流程：引入了新的預定義操作，以增強事件處理的自定義選項，允許用戶簡化工作流程並提高效率 ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

### 🚀 改進

- **[AI employees]** 改進 AI 員工互動邏輯並優化任務配置流程 ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

### 🐛 錯誤修復

- **[client]** 解決在集合中刪除關聯欄位時的 UI 問題 ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*發布日期：2025-10-30*

### 🚀 改進

- **[undefined]** 更新圖表概覽文件 ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang
- **[client]** 在 JS 程式碼編輯器中支援 JSX ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust
- **[AI employees]** AI 員工可以根據表格區塊元資料自主查詢資料 ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

### 🐛 錯誤修復

- **[client]**

  - 修復模態框內 iframe 區塊聯動規則失效的問題 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
  - 修復操作面板中的 QR 碼掃描聯動規則配置 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
- **[database]** 跳過 MySQL JSON 欄位的預設值同步 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[Workflow]** 修復在服務拆分模式下，記憶體中待處理佇列處理不當導致部分工作流無法執行的問題 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
