---
title: "每週更新｜開源商業插件及授權從 AGPL-3.0 變更為 Apache-2.0"
description: "這是 NocoBase 從 2026 年 2 月 13 日至 2 月 26 日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*發布日期：2026-02-26*

### 🐛 錯誤修復

- **[客戶端]** 在行動裝置上，先關閉選單再執行頁面跳轉 ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe
- **[AI LLM: GigaChat]** 修復 GigaChat 插件在 2.0 版本中無法運作的問題。([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock
- **[AI 員工]**

  - 使用 ContentBlock 統一 chatGPT API 的檔案輸入 ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock
  - 修復當用戶在未確認工具執行時發送新訊息導致的 AI 代理錯誤 ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock
- **[AI: 知識庫]** 修復 AI 知識庫插件啟動錯誤。 by @cgyrock
- **[郵件管理器]** 圖片渲染錯誤 by @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*發布日期：2026-02-25*

### 🎉 新功能

- **[未定義]**

  - 新增實驗性的「引用區塊」插件，允許透過引用或複製來重用現有區塊。([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust
  - 表單草稿 by @chenos
- **[acl]** 開源商業插件並將授權條款從 AGPL-3.0 更新為 Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) by @chenos
- **[客戶端]**

  - 支援為頁面、頁面標籤頁、彈窗和彈窗標籤頁設定瀏覽器分頁標題 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  - 支援在表單區塊中設定關聯集合欄位的欄位 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
  - 支援設定資料載入模式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
  - 新增子表格（彈窗編輯）欄位元件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
  - 建立集合時，可更改預設 id 欄位類型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock
  - 在多對多子表單中新增新增/選擇/解除關聯設定的支援 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
  - 支援在主題編輯器中自訂全域樣式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  - 支援在詳情區塊中設定預設排序規則 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  - 支援為數字欄位設定資料類型（選項：double, float, decimal）([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
  - 支援表格中的欄位排序 ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh
  - 為關聯欄位選擇器新增快速建立支援 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh
  - 支援樹集合關聯欄位的級聯選擇器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh
  - 支援表格欄位操作的拖曳 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
  - 為子表格新增分頁支援 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh
  - 事件流程：引入新的預定義操作以增強事件處理的自訂選項，允許用戶簡化工作流程並提高效率 ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe
  - 新增 2.0 Markdown 區塊 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh
  - 支援為子表單設定聯動規則 ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe
  - 新增對表格行點擊事件監聽器的支援，使用戶能夠在點擊表格中的行時執行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
  - 新增對自訂變數的支援 ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe
  - 新增「目前裝置類型」變數 ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe
- **[流程引擎]** 支援 env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
- **[伺服器]** 重構應用程式管理器以支援跨不同場景的多應用管理 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile
- **[測試]** 為基礎任務管理器新增進程級並發控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock
- **[操作：批次編輯]** 批次編輯 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx
- **[區塊：網格卡片]**

  - 支援可設定的區塊高度 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
  - 新增 2.0 網格卡片區塊 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh
- **[操作：複製記錄]** 新增 2.0 複製操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
-


由於篇幅限制，完整發行說明請參考下方連結。

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*發布日期：2026-02-24*

### 🚀 改進

- **[存取控制]** 提供 sanitize API 以過濾操作中的關聯值 ([#8601](https://github.com/nocobase/nocobase/pull/8601)) by @2013xile

### 🐛 錯誤修復

- **[工作流：審批]** 在審批操作中清理關聯值，以避免任何超出權限的資料操作 by @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*發布日期：2026-02-22*

### 🐛 錯誤修復

- **[日曆]** 修復日曆本地化和日期格式問題 ([#8498](https://github.com/nocobase/nocobase/pull/8498)) by @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*發布日期：2026-02-16*

### 🐛 錯誤修復

- **[AI 員工]** 修復使用 AI 員工時瀏覽器記憶體不足的問題 ([#8653](https://github.com/nocobase/nocobase/pull/8653)) by @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*發布日期：2026-02-13*

### 🐛 錯誤修復

- **[客戶端]** 修復在編輯表單中提交後，已清除的關聯附件欄位未被儲存的問題 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
- **[工具]** 修復 `formula.js` 評估引擎的安全性問題 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher
- **[工作流：審批]** 修復當工作流模式設定為「儲存前」時，審批資料未顯示在記錄詳情彈窗中的問題 by @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*發布日期：2026-02-22*

### 🐛 錯誤修復

- **[日曆]** 修復日曆本地化和日期格式問題 ([#8498](https://github.com/nocobase/nocobase/pull/8498)) by @sembaev-a-a
- **[AI 員工]** 修復使用 AI 員工時瀏覽器記憶體不足的問題 ([#8653](https://github.com/nocobase/nocobase/pull/8653)) by @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*發布日期：2026-02-14*

### 🎉 新功能

- **[伺服器]** 重構應用程式管理器以支援跨不同場景的多應用管理 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile

### 🚀 改進

- **[客戶端]**
  - 改進日期/時間欄位指派 UI，支援選擇相對日期/時間。([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust
  - 支援在指派欄位時為關聯欄位指定標題欄位。([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復當存在搜尋關鍵字時，篩選欄位子選單無法展開的問題。([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust
  - 修復在配置了 createModelOptions 的彈窗子表格編輯中，欄位刪除操作無效的問題 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
- **[客戶端]**

  - 修復將單一記錄指派給多對多關聯欄位時產生錯誤結果的問題。([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust
  - 使用日期選擇器解析日期並新增密碼強度驗證等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx
  - 修復表格操作欄中隱藏連結操作導致的間距問題 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe
  - 修復 `Action.Modal` 在某些互動後無法關閉的問題 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher
  - 修復當 Markdown 項目渲染無效 Liquid 時的解析語法錯誤 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh
  - 修復表單區塊中對多欄位屬性的不必要後端解析請求。([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust
  - 修復數字公式欄位缺少數字格式以及日期公式欄位缺少日期格式設定的問題 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh
  - 修復第一個表單項目頂部邊框渲染不完整的問題 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh
  - 修復：對非樹集合隱藏「啟用樹表格」和「預設展開所有行」選項 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
- **[工具]** 修復 `formula.js` 評估引擎的安全性問題 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher
- **[AI 員工]**

  - 修復 AI 網路搜尋的引用連結未顯示在聊天框中的問題 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock
  - 修復 openai API 參數錯誤 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock
- **[範本列印]** 修復相同鍵值的欄位導致渲染錯誤的問題 by @jiannx
- **[工作流：審批]**

  - 修復審批已刪除記錄時拋出錯誤的問題 by @mytharcher
  - 修復當工作流模式設定為「儲存前」時，審批資料未顯示在記錄詳情彈窗中的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*發布日期：2026-02-25*

### 🎉 新功能

- **[acl]** 開源商業插件並將授權條款從 AGPL-3.0 更新為 Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) by @chenos

### 🚀 改進

- **[未定義]** 更新 AI 員工文件 ([#8690](https://github.com/nocobase/nocobase/pull/8690)) by @heziqiang

### 🐛 錯誤修復

- **[客戶端]**

  - 統一行動裝置上表格和網格卡片的分頁行為 ([#8691](https://github.com/nocobase/nocobase/pull/8691)) by @zhangzhonghe
  - 圖表區塊篩選無效 ([#8671](https://github.com/nocobase/nocobase/pull/8671)) by @chenos
- **[AI 員工]** aiTools:list API 返回 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) by @chenos
- **[本地化]** 改進對缺失 i18n 鍵的處理 ([#8673](https://github.com/nocobase/nocobase/pull/8673)) by @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*發布日期：2026-02-16*

### 🐛 錯誤修復

- **[AI 員工]** 修復使用 AI 員工時瀏覽器記憶體不足的問題 ([#8653](https://github.com/nocobase/nocobase/pull/8653)) by @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*發布日期：2026-02-15*

### 🎉 新功能

- **[工作流：審批]** 為審批 API 新增 ACL 控制 by @mytharcher
- **[認證：釘釘]** 允許使用 `unionId` 綁定用戶 by @2013xile

### 🚀 改進

- **[AI: 知識庫]** 優化建置輸出以減少 plugin-ai-knowledge-base 的套件大小。 by @cgyrock
- **[多空間]** 多空間權限控制存取 acl by @jiannx
- **[操作：匯出記錄 Pro]** 根據選取的記錄或資源篩選器改進匯出操作資料範圍 by @katherinehhh
- **[工作流：審批]**

  - 移除對 JS 欄位的支援 by @zhangzhonghe
  - 簡化查詢參數並提升效能 by @mytharcher
  - 為 API 實作存取控制以防止未經授權的資料操作 by @mytharcher
  - 遷移後為同步受眾新增修復邏輯 by @mytharcher
- **[認證：釘釘]** 使用 `userid` 作為用戶關聯的預設鍵，同時保持與依賴手機號碼的現有認證器相容 by @2013xile

### 🐛 錯誤修復

- **[多空間]**

  - 新增遷移腳本以移除空間欄位中的 x-ready-pretty by @jiannx
  - 新增關聯資料時的相關空間 by @jiannx
  - 空間選擇器顏色跟隨主題 by @jiannx
  - 移除空間欄位的 read-pretty 屬性 by @jiannx
- **[欄位元件：遮罩]** 修復遮罩欄位設定彈窗無法正確載入所有用戶角色的問題。 by @gchust
- **[操作：匯入記錄 Pro]**

  - 修復非同步匯入觸發的工作流延遲執行的問題 by @mytharcher
  - 修復匯入結果中的計數數字和訊息翻譯 by @mytharcher
- **[AI: 知識庫]** 修復建置後系統無法啟動的問題 by @cgyrock
- **[資料來源：REST API]** 為請求上下文新增容錯處理，以避免在方法不在上下文中時拋出錯誤 by @mytharcher
- **[工作流：自訂操作事件]** 修復觸發自訂工作流時參數和負載不正確的問題 by @mytharcher
- **[操作：匯出記錄 Pro]** 修復當子應用程式執行非同步匯入/匯出任務而主應用程式未啟用匯入/匯出 Pro 插件時的錯誤 by @cgyrock
- **[工作流：Webhook]**

  - 修復向子應用程式的 Webhook URL 發送 POST 請求時拋出 404 錯誤的問題 by @mytharcher
  - 修復未配置正文解析時正文資料遺失的問題 by @mytharcher
- **[工作流：子流程]** 修復工作流連結的路由路徑 by @mytharcher
- **[範本列印]**

  - 修復範本列印操作配置中的欄位列表顯示問題 by @katherinehhh
  - 修復相同鍵值的欄位導致渲染錯誤的問題 by @jiannx
  - 修復被遮擋的配置範本彈出視窗問題 by @zhangzhonghe
  - 從列印範本配置中移除頁尾按鈕 by @katherinehhh
  - 修復當角色聯合時列印按鈕權限邏輯不正確的問題。 by @jiannx
  - 支援空間欄位 by @jiannx
  - 在 2.0 版本中顯示空間欄位 by @jiannx
- **[檔案儲存：S3(Pro)]** 修復檔案重新命名模式無效的問題 by @mytharcher
- **[資料視覺化：ECharts]** 修復 ECharts 拼寫錯誤 by @heziqiang
- **[工作流：審批]**

  - 修復審批已刪除記錄時拋出錯誤的問題 by @mytharcher
  - 修復在「儲存前」模式下執行時拋出錯誤的問題 by @mytharcher
  - 修復當工作流模式設定為「儲存前」時，審批資料未顯示在記錄詳情彈窗中的問題 by @mytharcher
  - 為已刪除的工作流新增容錯處理，以避免在任務列表中載入錯誤 by @mytharcher
  - 修復「我的申請」詳情彈窗中缺少值的問題 by @mytharcher
  - 修復 1.x 審批記錄彈窗中拋出錯誤的問題 by @mytharcher
  - 修復 JSON 欄位在列表載入時導致的效能問題 (MySQL) by @mytharcher
  - 修復載入詳情記錄時 ID 不正確的問題 by @mytharcher
  - 修復並發導致執行重複恢復的問題 by @mytharcher
  - 修復因缺少依賴導致的建置錯誤 by @mytharcher
  - 修復因參數錯誤導致載入不正確記錄的問題 by @mytharcher
  - 修復將審批退回至上一個節點但卻返回至起始節點的問題 by @mytharcher
  - 修復當受眾工作流被停用時，為用戶新增角色拋出錯誤的問題 by @mytharcher
  - 修復因缺少 `ValueBlock.Result` 元件導致值區塊不顯示的問題 by @mytharcher
  - 修復審批任務卡片上欄位未顯示的問題 by @zhangzhonghe
  - 修復任務中心篩選欄位無法正常運作的問題 by @mytharcher
- **[郵件管理器]**

  - 修復對話鏈 by @jiannx
  - 修復 Outlook 回覆連結偶爾斷開的問題 by @jiannx
  - 選取文字時正文不會折疊。修復下載附件失敗的問題 by @jiannx
  - 修復多個用戶之間同一信箱的郵件問題並優化效能 by @jiannx
  - 為管理頁面新增篩選器 by @jiannx
  - 顯示全部回覆按鈕，資料範圍支援篩選子訊息。 by @jiannx
  - 修復郵件配置彈窗被遮擋的問題 by @zhangzhonghe
- **[企業微信]** 修復當手機號碼缺失時用戶無法自動註冊的問題 by @2013xile
- **[遷移管理器]** 修復因記錄遷移錯誤異常中包含過大的 SQL 語句而導致的潛在進程凍結問題 by @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*發布日期：2026-02-14*

### 🎉 新功能

- **[操作：批次編輯]** 批次編輯 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 改進

- **[客戶端]**

  - 改進日期/時間欄位指派 UI，支援選擇相對日期/時間。([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust
  - 支援在指派欄位時為關聯欄位指定標題欄位。([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust
  - 表格 2.0 支援拖曳排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  - 將欄位指派和預設值設定移至表單層級配置。([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
- **[本地化]** 自動建立缺失的 i18n 鍵 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 錯誤修復

- **[流程引擎]** 修復當存在搜尋關鍵字時，篩選欄位子選單無法展開的問題。([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust
- **[客戶端]**

  - 修復將單一記錄指派給多對多關聯欄位時產生錯誤結果的問題。([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust
  - 使用日期選擇器解析日期並新增密碼強度驗證等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx
  - 修復表格操作欄中隱藏連結操作導致的間距問題 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe
  - 修復當 Markdown 項目渲染無效 Liquid 時的解析語法錯誤 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh
  - 修復表單區塊中對多欄位屬性的不必要後端解析請求。([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust
  - 修復 `Action.Modal` 在某些互動後無法關閉的問題 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher
  - 修復數字公式欄位缺少數字格式以及日期公式欄位缺少日期格式設定的問題 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh
  - 修復第一個表單項目頂部邊框渲染不完整的問題 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh
  - 修復在編輯表單中提交後，已清除的關聯附件欄位未被儲存的問題 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
  - 修復當標題欄位是外來鍵時，關聯下拉選單中篩選資料不正確的問題 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  - 修復編輯後無法恢復記錄選擇器欄位元件中已選資料的問題 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
  - 修復當關聯欄位切換模式時，欄位元件選項未即時重新整理的問題 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
- **[工具]** 修復 `formula.js` 評估引擎的安全性問題 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher
- **[AI 員工]**

  - 修復 AI 網路搜尋的引用連結未顯示在聊天框中的問題 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock
  - 修復 openai API 參數錯誤 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock
- **[檔案管理器]** 修復檔案欄位元件在停用時仍可開啟選擇器對話框的問題 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
