---
title: "NocoBase v1.5.0 正式發布"
description: "核心優化、大規模數據導入/導出、郵件管理、模板打印等功能全面提升系統性能與用戶體驗。"
---

## 核心優化

### 單行文字欄位支援連結

開啟模式支援抽屜、對話框與頁面。

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### 關聯區塊支援關聯/解除關聯操作

現在您可以直接在關聯區塊中執行關聯與解除關聯操作。

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### 工作流程除錯

您現在可以在配置工作流程時直接觸發以進行除錯。

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### 改善行動裝置日期元件的互動

針對行動裝置上的日期相關元件，強化了互動體驗。

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### 前端效能優化

* 優化初始畫面載入速度。
* 將前端建置工具改為 **rspack**。
* 減少各插件套件入口檔案的打包體積。
* 提升大型資料表格的渲染效能。
* 減少選單切換時的卡頓感。
* 引入新的 `lazy` 與 `useLazy` 函式庫，支援按需載入。

以下是 `lazy` 與 `useLazy` 的簡要使用說明：

```ts
import { lazy, useLazy } from '@nocobase/client';

// 匯出單一元件：
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// 匯出多個元件：
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// 匯出預設元件：
const ThemeList = lazy(() => import('./components/ThemeList'));

// 回傳一個 Hook：
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// 回傳一個函式庫：
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## 新插件

### 匯入專業版 (Import Pro)

支援在獨立執行緒中進行非同步匯入操作。此功能可匯入大量資料，並提供更佳的效能。

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

參考文件：[匯入專業版](https://docs.nocobase.com/handbook/action-import-pro)

### 匯出專業版 (Export Pro)

支援在獨立執行緒中進行非同步匯出操作，可處理大規模資料匯出以及附件匯出。

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

參考文件：[匯出專業版](https://docs.nocobase.com/handbook/action-export-pro)

### 範本列印 (Template Print)

範本列印插件允許您使用 Word、Excel 或 PowerPoint（支援 `.docx`、`.xlsx` 與 `.pptx` 格式）編輯範本檔案。透過在範本中設定佔位符與邏輯結構，您可以動態產生預設格式的檔案，例如 `.docx`、`.xlsx`、`.pptx`，甚至 `.pdf`。此功能廣泛適用於建立各種商業文件，包括報價單、發票、合約等。

**主要特色**

* **多格式支援**：相容於 Word、Excel 與 PowerPoint 範本，滿足多樣化的文件產生需求。
* **動態資料填充**：根據定義的佔位符與邏輯，自動填入文件內容。
* **彈性的範本管理**：輕鬆新增、編輯、刪除與分類範本，便於維護與使用。
* **豐富的範本語法**：支援基本取代、陣列存取、迴圈、條件輸出等範本語法，實現複雜的文件產生。
* **格式化器支援**：提供條件輸出、日期格式化、數字格式化等功能，提升文件的清晰度與專業性。
* **高效的輸出選項**：支援直接產生 PDF，方便分享與列印。

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

參考文件：[範本列印](https://docs.nocobase.com/handbook/action-template-print)

### 稽核日誌 (Audit Logger)

此插件用於記錄與追蹤系統中的使用者活動以及資源操作歷史。

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

參考文件：[稽核日誌](https://docs.nocobase.com/handbook/audit-logger)

### 工作流程：子流程 (Workflow: Subflow)

此功能允許一個工作流程呼叫另一個流程。您可以使用目前工作流程中的變數作為子流程的輸入，然後將子流程的輸出作為後續節點的變數。

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

參考文件：[工作流程：子流程](https://docs.nocobase.com/handbook/workflow-subflow)

### 電子郵件管理員 (Email Manager)

將您的 Google 或 Microsoft 電子郵件帳戶整合至 NocoBase，以傳送、接收、檢視與管理電子郵件。此外，電子郵件可直接嵌入頁面中。

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

參考文件：[電子郵件管理員](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### 檔案儲存：S3 (專業版) (File Storage: S3 (Pro))

支援相容於 S3 協定的檔案儲存類型，包括 Amazon S3、阿里雲 OSS、騰訊雲 COS、MinIO 等。此插件也支援檔案直接上傳與私有存取。

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

參考文件：[檔案儲存：S3 (專業版)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
