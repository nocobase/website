---
title: "NocoBase v1.8.0 正式發布"
description: "改進身份驗證流程，支援自定義統計變數與郵件管理升級，優化工作流程體驗與行動端互動"
---

## 新功能

### 忘記密碼 – 支援郵件找回

使用者現在可以透過電子郵件找回密碼。在 **設定 > 認證 > 忘記密碼** 中啟用此功能，設定郵件通知頻道，並自訂密碼重設郵件（支援變數與 HTML 格式）。

![忘記密碼 – 支援郵件找回.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

參考：[忘記密碼](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### 自訂聚合變數

支援建立統計變數，例如計數、總和與平均值。這些變數可用於選單徽章、頁面標籤等區域，讓介面更直觀且資訊更豐富。

![自訂聚合變數.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

參考：[自訂變數](https://docs.nocobase.com/handbook/custom-variables)

### 郵件管理

郵件管理模組已全面升級，現在支援郵件刪除、批次發送、同步間隔設定以及多項使用者體驗改善。

![郵件管理.png](https://static-docs.nocobase.com/image-9dyulg.png)

### 資料來源

支援外部資料來源中的 SQL Server BIT 欄位，並啟用從外部來源按需載入資料表。

![資料來源.png](https://static-docs.nocobase.com/image-rml96b.png)

### 文字複製

支援一鍵複製文字欄位內容。

![文字複製.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [工作流：HTTP 請求節點] 支援 `multipart/form-data` 類型

在工作流中設定 HTTP 請求節點時，現在可以選取 `multipart/form-data` 內容類型。啟用後，請求主體接受表單資料提交——包括 `file` 欄位——以支援檔案上傳等情境。

![工作流.png](https://static-docs.nocobase.com/image-gutu74.png)

### [工作流：審批] 審批節點結果支援產生審批記錄變數

審批節點的執行結果現在可作為後續節點的變數使用，並自動記錄狀態與相關資料。

![工作流：審批](https://static-docs.nocobase.com/20250614095052.png)

參考：[節點結果](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## 改進

### 掃描填入輸入

通用文字輸入元件現在包含 **啟用掃描** 選項。啟用後，輸入欄位右側會出現掃描按鈕，允許透過掃描裝置輸入資料。您也可以設定是否允許手動輸入。

![掃描填入輸入.png](https://static-docs.nocobase.com/image-u7gfro.png)

參考：[啟用掃描](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Markdown 區塊支援在地化

Markdown 內容現在支援使用 `{{t 'xxx'}}` 語法插入多語言文字，以實現在地化。

![Markdown 區塊支援在地化.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

參考：[在地化](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### 選單連結支援在新視窗開啟

選單連結新增了 **「在新視窗開啟」** 選項，讓您可以自訂連結的開啟方式。

![選單連結支援在新視窗開啟.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### 日曆區塊支援設定週起始日

您現在可以自訂日曆檢視的週起始日，選擇星期日或星期一，以符合不同地區的偏好與習慣。

![日曆區塊支援設定週起始日.png](https://static-docs.nocobase.com/image-uu5ubi.png)

參考：[週起始日](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Markdown (Vditor) 檢視模式支援圖片點擊放大

在檢視模式下，Markdown 內容中的圖片可以點擊放大，提升閱讀體驗。

![Markdown (Vditor) 檢視模式支援圖片點擊放大.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### 工作流模組功能與效能全面強化

- 支援依更多欄位篩選工作流，提升搜尋效率
- 最佳化行動裝置顯示樣式，提升使用者體驗
- 排除 JSON 欄位載入，顯著提升執行計畫列表載入效能
- 新增節點測試執行的日誌 API
- 調整 `getCollectionFieldOptions` 方法的 API 介面，增強靈活性

![工作流模組.png](https://static-docs.nocobase.com/image-5b3byb.png)

### 審批流程功能強化與體驗改善

- 新增轉交與加簽人員選擇清單的設定選項，支援顯示更多欄位資訊以協助更精準的選取
- 調整時間軸中的時間顯示為絕對時間，提升可讀性
- 從工作流外掛匯入審批相關資料表，防止本地資料表被覆寫
- 調整變數 API 介面結構，增強靈活性與一致性

![審批流程.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### 支援透過環境變數設定資料庫連線池選項

可透過環境變數靈活設定資料庫連線池參數，提升部署靈活性。

![支援透過環境變數設定資料庫連線池選項.png](https://static-docs.nocobase.com/image-tz87as.png)

### 評論區塊支援分頁

支援評論的分頁載入，以提升大量資料情境下的載入效能與閱讀體驗。

![評論區塊支援分頁.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### 行動裝置體驗改善

- 通知彈窗已適配行動裝置樣式
- 最佳化行動裝置佈局偵測邏輯，提升響應式準確性
