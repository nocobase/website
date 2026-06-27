---
title: "每週更新｜提升AI員工解析上傳文件的能力"
description: "這是NocoBase從2026年4月16日至4月23日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*發布日期：2026-04-22*

### 🎉 新功能

- **[Auth: OIDC]** 映射屬性支援自訂欄位 by @chenzhizdt
- **[DingTalk]** 釘釘：通知、釘釘內自動登入及使用者同步。 by @chenzhizdt

### 🚀 改進

- **[ai]** AI 員工與知識庫現在支援上傳更多檔案類型（.xlsx, .xls, .csv, .md, .json）([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock
- **[undefined]** 為指南章節和導航新增阿拉伯語翻譯 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

### 🐛 錯誤修復

- **[data-source-manager]** 修正在重新同步外部資料來源時，百分比欄位被重設為數值型別的問題 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx
- **[client]**

  - 修正建立記錄後預設值不會生效的問題。([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust
  - 修正「新增標籤頁」按鈕過於靠近右邊緣的問題 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe
- **[Departments]** 修正重複同步部門時無法更新部門排序順序的問題 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile
- **[Data source: Main]** 修正當集合名稱與資料庫檢視表名稱不同時，從資料庫同步已連接檢視表的欄位問題 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
- **[Workflow: JavaScript]** 修正腳本在 `node:vm` 模式下執行的安全性問題 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[AI: Knowledge base]** 修正刪除知識庫文件時向量資料庫未同步的問題。 by @cgyrock
- **[WeCom]** 修正從企業微信同步部門時缺少部門順序的問題 by @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*發布日期：2026-04-20*

### 🐛 錯誤修復

- **[client]** 修正透過欄位賦值更新子表格值會導致資料汙染的問題。([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
- **[data-source-manager]** 修正資料庫同步後序號欄位可能變為字串型別的問題 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
- **[File manager]** 當預覽 URL 缺失時回傳 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
- **[Workflow: JavaScript]** 修正腳本在 `node:vm` 模式下執行的安全性問題 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[Departments]**

  - 修正部門管理中的部門列表未遵循 `sort` 欄位順序的問題 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
  - 修正儲存使用者部門後，主要部門值缺失或過時的問題 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*發布日期：2026-04-18*

### 🚀 改進

- **[Departments]** 在 UI 中顯示部門集合的 `parentId` 外鍵欄位 ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 錯誤修復

- **[data-source-manager]** 修正檔案集合欄位同步移除 `preview` 欄位的問題 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile
- **[client]**

  - 修正欄位值設定中關聯欄位元件不正確的問題。([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - 修正頁面配置模式下標籤頁高度和寬度過大的問題 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 修正遞迴樹狀結構預先載入與範圍排序初始化中的 SQL 注入風險 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[Data visualization]** 修正圖表區塊排序在聚合查詢中使用別名度量與維度的問題 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
- **[Collection: SQL]** 修正 SQL 集合更新時缺少 SQL 驗證的問題 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*發布日期：2026-04-16*

### 🎉 新功能

- **[AI employees]** 提升 AI 員工解析上傳文件的能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 改進

- **[logger]** 在請求日誌中新增 `referer` 資訊 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
- **[undefined]** 同步已翻譯的環境變數與叢集模式文件至最新的中文更新。([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
- **[AI employees]** AI 員工區塊選擇後，將表單附件填入上傳區域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
- **[Workflow: Manual node]** 在工作流程任務相關集合上使用 `simplePagination` 以獲得更好的列表效能 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
- **[Workflow: Approval]** 在 `approvals` 和 `approvalRecords` 集合上使用 `simplePagination` 以獲得更好的列表效能 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修正欄位規則配置中單選欄位的可選選項為空的問題 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  - 修正表單中子表格的預設值設定不正確的問題。([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
- **[Notification: In-app message]** 修正接收者選擇元件運作不正確的問題 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
- **[AI employees]** 修正 google-gen-ai 的 LLM 服務 baseURL 設定不生效的問題 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
- **[Email manager]** 移除郵件成功發送後的表單關閉提示 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*發布日期：2026-04-20*

### 🎉 新功能

- **[Calendar]** 行事曆區塊 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx
- **[AI employees]** 提升 AI 員工解析上傳文件的能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock
- **[Block: Tree]** 新增樹狀過濾區塊 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[Email manager]** Gmail 支援使用別名發送郵件 by @jiannx

### 🚀 改進

- **[undefined]**

  - 為指南章節和導航新增阿拉伯語翻譯 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane
  - 同步已翻譯的環境變數與叢集模式文件至最新的中文更新。([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
  - 為文件首頁新增阿拉伯語翻譯 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - 在各語言 README 中新增目錄一致性 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - 為法文 README 新增目錄 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - 文件：為入門介紹頁面新增阿拉伯語翻譯 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[logger]** 在請求日誌中新增 `referer` 資訊 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
- **[client]** 新增表單必填驗證開關 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx
- **[database]** 優化儲存庫計數查詢，僅在包含關聯時啟用 DISTINCT。([#9094](https://github.com/nocobase/nocobase/pull/9094)) by @mytharcher
- **[Departments]** 在 UI 中顯示部門集合的 `parentId` 外鍵欄位 ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile
- **[AI employees]** AI 員工區塊選擇後，將表單附件填入上傳區域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
- **[Workflow: Manual node]** 在工作流程任務相關集合上使用 `simplePagination` 以獲得更好的列表效能 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
- **[Workflow: Approval]** 在 `approvals` 和 `approvalRecords` 集合上使用 `simplePagination` 以獲得更好的列表效能 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修正透過欄位賦值更新子表格值會導致資料汙染的問題。([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
  - 修正頁面配置模式下標籤頁高度和寬度過大的問題 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
  - 修正欄位值設定中關聯欄位元件不正確的問題。([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - 修正欄位規則配置中單選欄位的可選選項為空的問題 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  - 修正表單中子表格的預設值設定不正確的問題。([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
  - 修正子表格新增多對多欄位錯誤 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  - 修正從子表格的選擇按鈕彈出的記錄選取彈窗無法正確解析父項目變數值的問題。([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
- **[data-source-manager]**

  - 修正資料庫同步後序號欄位可能變為字串型別的問題 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
  - 修正檔案集合欄位同步移除 `preview` 欄位的問題 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile
- **[database]** 修正遞迴樹狀結構預先載入與範圍排序初始化中的 SQL 注入風險 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[undefined]** 修正自訂資源區塊在資源不存在時的渲染錯誤 ([#9095](https://github.com/nocobase/nocobase/pull/9095)) by @Molunerfinn
- **[utils]** 為伺服器 HTTP 請求發送新增安全控制，以避免可能的 SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  參考：[環境變數](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - 修正無法在表格區塊中新增來自外部資料來源的多對一欄位的問題 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
  - 修正頁面可見性變更時的隨機觀察者錯誤 ([#9067](https://github.com/nocobase/nocobase/pull/9067)) by @zhangzhonghe
- **[Data source: Main]** 修正當集合名稱與資料庫檢視表名稱不同時，從資料庫同步已連接檢視表的欄位問題 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
- **[File manager]** 當預覽 URL 缺失時回傳 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
- **[Departments]**

  - 修正儲存使用者部門後，主要部門值缺失或過時的問題 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
  - 修正部門管理中的部門列表未遵循 `sort` 欄位順序的問題 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
- **[Workflow: JavaScript]** 修正腳本在 `node:vm` 模式下執行的安全性問題 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[Collection: SQL]** 修正 SQL 集合更新時缺少 SQL 驗證的問題 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
- **[Data visualization]** 修正圖表區塊排序在聚合查詢中使用別名度量與維度的問題 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
- **[Notification: In-app message]** 修正接收者選擇元件運作不正確的問題 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
- **[AI employees]** 修正 google-gen-ai 的 LLM 服務 baseURL 設定不生效的問題 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
- **[Notification manager]** 優化工作流程場景下的應用內通知發送效能 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
- **[Access control]** 修正使用空陣列清除關聯值在 ACL 下可能失敗的問題 ([#9059](https://github.com/nocobase/nocobase/pull/9059)) by @2013xile
- **[Collection field: Code]** 修正程式碼欄位的 UI 介面 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
- **[Email manager]** 移除郵件成功發送後的表單關閉提示 by @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*發布日期：2026-04-20*

### 🎉 新功能

- **[Workflow]** 為任務新增日誌欄位，以便顯示某些節點的日誌內容進行除錯 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

### 🚀 改進

- **[undefined]** 為指南章節和導航新增阿拉伯語翻譯 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane
- **[cli]** 改進生成的 API CLI 幫助輸出和 ACL 命令分組 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

### 🐛 錯誤修復

- **[client]** 修正透過欄位賦值更新子表格值會導致資料汙染的問題。([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
- **[data-source-manager]** 修正資料庫同步後序號欄位可能變為字串型別的問題 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
- **[cli]** 修正 Windows 上因授權 URL 過長導致的 CLI OAuth 登入失敗問題 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
- **[Departments]** 修正儲存使用者部門後，主要部門值缺失或過時的問題 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
- **[Data source: Main]** 修正當集合名稱與資料庫檢視表名稱不同時，從資料庫同步已連接檢視表的欄位問題 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
- **[File manager]** 當預覽 URL 缺失時回傳 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*發布日期：2026-04-19*

### 🎉 新功能

- **[cli-v1]** 從環境變數解析儲存路徑 ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[Calendar]** 行事曆區塊 v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

### 🚀 改進

- **[cli]** 改進 `nb api` 幫助資訊的回退機制，並統一執行引導失敗時的警告訊息 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[Departments]** 在 UI 中顯示部門集合的 `parentId` 外鍵欄位 ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 錯誤修復

- **[client]** 修正頁面配置模式下標籤頁高度和寬度過大的問題 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 修正遞迴樹狀結構預先載入與範圍排序初始化中的 SQL 注入風險 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[Workflow: JavaScript]** 修正腳本在 `node:vm` 模式下執行的安全性問題 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[IdP: OAuth]** 修正服務重啟後 OAuth 客戶端註冊和令牌重新整理失敗的問題 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
- **[Departments]** 修正部門管理中的部門列表未遵循 `sort` 欄位順序的問題 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
- **[Collection: SQL]** 修正 SQL 集合更新時缺少 SQL 驗證的問題 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
- **[Data visualization]** 修正圖表區塊排序在聚合查詢中使用別名度量與維度的問題 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*發布日期：2026-04-17*

### 🐛 錯誤修復

- **[data-source-manager]** 修正檔案集合欄位同步移除 `preview` 欄位的問題 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*發布日期：2026-04-17*

### 🎉 新功能

- **[cli]** 重構 NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
- **[AI employees]** 提升 AI 員工解析上傳文件的能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 改進

- **[undefined]**

  - 同步已翻譯的環境變數與叢集模式文件至最新的中文更新。([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
  - 文件：為入門介紹頁面新增阿拉伯語翻譯 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
  - 為文件首頁新增阿拉伯語翻譯 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
- **[logger]** 在請求日誌中新增 `referer` 資訊 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
- **[client]** 新增表單必填驗證開關 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx
- **[Workflow: Manual node]** 在工作流程任務相關集合上使用 `simplePagination` 以獲得更好的列表效能 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
- **[AI employees]** AI 員工區塊選擇後，將表單附件填入上傳區域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
- **[Workflow: Approval]** 在 `approvals` 和 `approvalRecords` 集合上使用 `simplePagination` 以獲得更好的列表效能 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修正欄位規則配置中單選欄位的可選選項為空的問題 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  - 修正欄位值設定中關聯欄位元件不正確的問題。([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - 修正表單中子表格的預設值設定不正確的問題。([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
- **[utils]** 為伺服器 HTTP 請求發送新增安全控制，以避免可能的 SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  參考：[環境變數](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** 修正工作流程節點的驗證問題 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
- **[Notification: In-app message]** 修正接收者選擇元件運作不正確的問題 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
- **[IdP: OAuth]** 修正一般 API 請求的 OAuth 存取問題 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
- **[AI employees]**

  - 修正聚合查詢排序被 ACL 丟棄的問題 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  - 修正 google-gen-ai 的 LLM 服務 baseURL 設定不生效的問題 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
- **[Email manager]** 移除郵件成功發送後的表單關閉提示 by @jiannx
