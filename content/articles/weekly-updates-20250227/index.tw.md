---
title: "NocoBase 每週更新：新增路由管理"
description: "本週更新包括：支援頁面標籤的權限配置、新增路由管理頁面等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要用於測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*發布日期：2025-02-20*

#### 🎉 新功能

- **[工作流]** 支援在工作流程中擴展指令群組 ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  參考：[擴展節點群組](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 錯誤修復

- **[客戶端]**

  - 行動裝置上關聯區塊的關聯操作彈窗問題 ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  - 篩選表單欄位中選擇器格式不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 在禁用模式下正確顯示 `<Variable.TextArea />` 元件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  - 修復上傳後遺失的檔案 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
- **[工作流]**

  - 修復工作流畫布中的樣式細節 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - 支援在變更密碼時觸發工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*發布日期：2025-02-21*

#### 🚀 改進

- **[工作流]** 在工作流畫布的節點卡片中隱藏節點 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

#### 🐛 錯誤修復

- **[檔案管理]** 升級 AWS SDK 版本以修復 MinIO 上傳錯誤 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*發布日期：2025-02-22*

#### 🐛 錯誤修復

- **[客戶端]** 修復逐個上傳時遺失已上傳檔案的問題 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
- **[工作流：動作前事件]** 修復回應訊息節點未顯示的錯誤訊息 by @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*發布日期：2025-02-24*

#### 🐛 錯誤修復

- **[備份管理]** 從本機還原操作對話框中的刪除圖示無法使用 by @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*發布日期：2025-02-24*

#### 🚀 改進

- **[檔案管理]**

  - 增加 URL 長度至 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - 上傳時的檔案名稱將從隨機改為原始名稱加上隨機後綴。 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
- **[區塊：操作面板]** 優化行動裝置樣式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[cli]** 改進 nocobase upgrade 命令的內部邏輯 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*發布日期：2025-02-26*

#### 🚀 改進

- **[備份管理]** 允許將備份還原到缺少某些外掛程式的應用程式 by @gchust

#### 🐛 錯誤修復

- **[客戶端]** 富文本欄位元件無法完全清除 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
- **[檔案管理]**

  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修復檔案集合的 `path` 欄位類型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*發布日期：2025-02-27*

#### 🎉 新功能

* [工作流] 支援在工作流程中擴展指令群組 ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  參考：[擴展節點群組](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [工作流：自訂動作事件] 支援全域或批次記錄觸發自訂動作事件 ([#272](https://github.com/nocobase/pro-plugins/pull/272)) by @mytharcher
* **[客戶端]**

  * 支援在集合中擴展預設欄位 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  * 支援擴展前端篩選運算子 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
  * 支援在區塊中設定描述屬性 ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
  * 新增 schemaSetting 以顯示附件的檔案名稱 ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh
* **[日曆]** 支援看板、日曆和公式欄位外掛程式的可選欄位擴展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
* **[本地化]** 桌面和行動路由的本地化 ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile
* **[區塊：操作面板]** 支援在行動操作面板中配置每行圖示數量 ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh
* **[WEB 客戶端]** 支援頁面標籤的權限配置並新增路由管理頁面 ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
  參考：[路由](https://docs.nocobase.com/handbook/routes)
* **[認證]** 支援 Token 安全配置 ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  參考：[Token 安全策略](https://docs.nocobase.com/handbook/token-policy)
* **[工作流：人工節點]** 在待辦區塊中新增任務標題欄 ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher
* **[變數與機密]** 支援配置動態環境變數與機密 ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 改進

* [集合欄位：Markdown(Vditor)] Vditor CDN 使用本地資源 ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos
* [工作流] 在工作流畫布的節點卡片中隱藏節點 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
* **[客戶端]** 擴展與改進用戶個人中心 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
* **[客戶端]**

  * 頁面標題預設使用路由標題 ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
  * 在 IconPicker 中新增更多圖示 ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
* **[伺服器]**

  * 將 AesEncryptor 移至核心 ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos
  * 1. 新增伺服器中間件以提取客戶端 IP 位址。
    2. 解決 IP 被封鎖時的無限重新載入問題。
    3. 在代理中新增 `X-Forwarded-For` HTTP 標頭以啟用本地除錯的轉發 ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66
* **[工作流]** 將綁定工作流設定移至外掛程式 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher
* **[資料來源管理]** 修改測試函數 login 為非同步並更新相關測試案例 ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66

#### 🐛 錯誤修復

* [客戶端]

  * 在嵌入頁面中無法開啟欄位連結彈窗 ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  * 關閉子頁面時，觸發多次區塊資料請求 ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  * 篩選表單欄位中選擇器格式不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  * UI 中關聯欄位子選單缺少唯一鍵 ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
  * 在禁用模式下正確顯示 `<Variable.TextArea />` 元件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  * 頁面上的水平捲軸問題 ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  * 修復郵件通道配置表單輸入欄位中的 HTML 標籤字元。 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  * 行動裝置上關聯區塊的關聯操作彈窗問題 ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  * 修復上傳後遺失的檔案 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  * 跳過 CurrentUserProvider 的認證錯誤。 ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
* [工作流：循環節點] 修復當節點內部處於待處理狀態時循環提前退出的問題 ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher
* [檔案管理] 升級 AWS SDK 版本以修復 MinIO 上傳錯誤 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
* [行動端] 權限配置表中的行動選單資料不完整 ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe
* [工作流]

  * 修復工作流畫布中的樣式細節 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  * 支援在變更密碼時觸發工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
* [資料視覺化] 當資料來源名稱包含連字號 `-` 時，篩選會發生錯誤 ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile
* [工作流：動作前事件] 修復回應訊息節點未顯示的錯誤訊息 ([#277](https://github.com/nocobase/pro-plugins/pull/277)) by @mytharcher
* **[客戶端]** 修復逐個上傳時遺失已上傳檔案的問題 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
* **[客戶端]** 修復在多對多關聯子表單中停用「允許複選」時，「從現有資料中選擇」選項仍然顯示的問題 ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
* **[認證]** 更新客戶端認證中間件邏輯以防止因並發導致的 Token 更新失敗 ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66
* **[WEB 客戶端]**

  * 升級後路由權限異常 ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe
  * 移除預設頁面標籤標題 ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe
* **[資料來源管理]** 使用 loginWithJti 更新認證相關測試案例並防止錯誤 ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
* **[多應用管理]** 僅以主應用程式開頭的子應用程式會隨主應用程式一起升級 ([#6133](https://github.com/nocobase/nocobase/pull/6133)) by @chenos
* **[認證]** 更新已發行 Token 和 Token 策略配置的遷移規則 ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66
* **[工作流]** 修復 DatePicker 元件的值類型 ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需多年的開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
