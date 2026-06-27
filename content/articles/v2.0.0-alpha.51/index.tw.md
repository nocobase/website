---
title: "NocoBase v2.0.0-alpha.51：支援在主題編輯器中自訂全域樣式"
description: "v2.0.0-alpha.51 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 支援在主題編輯器中自訂全域樣式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - 支援在詳情區塊中設定預設排序規則 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - 支援為數字欄位設定資料類型（選項：double、float、decimal）([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

- **[集合欄位：序號]** 資料遷移後自動更新序號欄位 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 改進

- **[客戶端]**
  - 修復子表格在刪除行後分頁跳轉問題，並新增支援欄位驗證規則 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - 調整可編輯子表格中的大型欄位顯示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - 支援對溢出的 JSON 欄位內容顯示省略號 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

- **[流程引擎]**
  - 為 FlowModelRenderer 新增 useCache 選項 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - 新增 `removeModelWithSubModels` 方法以遞迴移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

- **[區塊：網格卡片]** 為網格卡片新增行數配置，並以自動計算取代 pageSize ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[稽核日誌]** 將唯一識別欄位更新為 `text` 類型，以防止大量編輯時識別碼長度溢位 by @2013xile

- **[遷移管理器]** 資料遷移後自動更新序號欄位 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修復已移除區塊中配置的欄位未從篩選區塊中刪除的問題。([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - 修復在非配置模式下隱藏按鈕時出現多餘間距的問題 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - 修復篩選表單區塊中重設按鈕文字無法修改的問題。([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - 修復使用 $in 或 $notIn 運算子篩選欄位時，欄位輸入不支援多值的問題。([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - 修復新增的資料區塊未自動出現在篩選表單區塊欄位選單中的問題。([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - 篩選表單中關聯欄位的配置選單不應顯示快速建立選項。([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - 修復列表區塊中關聯子表格的資料問題 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - 修復來自集合設定的數字欄位驗證規則未生效的問題 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - 修復篩選表單中的欄位受到後端欄位驗證規則限制的問題。([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - JSON 欄位快速編輯問題 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - 修復子表格編輯中大型欄位的顯示問題 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - 修復在關聯記錄選擇器中停用 allowMultiple 時，快速建立拋出錯誤的問題 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - 修復 JSON 欄位應以物件形式提交的問題 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - 修復無法使用 Enter 鍵觸發篩選動作的問題。([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

- **[流程引擎]**
  - 修復切換欄位元件後，選單中仍顯示前一個元件的配置選項的問題。([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - 在 FlowModelRenderer 中將 useEffect 移至條件式 return 之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - 修復不支援的關聯欄位出現在篩選操作欄位中的問題。([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

- **[acl]** 修復：acl.allow 執行過早 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[檔案管理器]**
  - 修復列表和網格卡片區塊中子詳細資料顯示不正確的問題 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - 修復附件欄位在 readPretty 子表格中未正確顯示的問題 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

- **[工作流]**
  - 修復刪除節點後執行畫布拋出錯誤的問題 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher

  - 修復節點上的 jobs 為 undefined 時執行頁面拋出錯誤的問題 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

- **[集合欄位：公式]** 修復公式欄位無法新增至篩選表單區塊的問題。([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[區塊：動作面板]** 優化動作面板區塊在列表佈局中的樣式 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[AI 員工]**
  - 解決資料來源角色名稱未編譯的問題 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - 修復部分目前記錄欄位無法在變數選擇元件中顯示的問題。([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

- **[動作：匯入記錄]** 匯入的欄位與 ACL 設定中的欄位不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

- **[存取控制]** 為外部資料來源的關聯操作新增權限檢查中介軟體 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[工作流：審批]**
  - 修復使用 ACL 範圍變數載入相關審批時無資料的問題 by @mytharcher

  - 修復受指派者表單中已填寫資料消失的問題 by @mytharcher

  - 修復在詳細抽屜中載入記錄相關審批時拋出權限錯誤的問題 by @mytharcher

  - 修復在包含順序和會簽的分支中流程不正確的問題 by @mytharcher

  - 修復列出審批時發生記憶體不足的問題 by @mytharcher

  - 修復在返回分支中審批記錄未包含在工作結果中的問題 by @mytharcher

  - 修復審批人彈出視窗未顯示標題的問題 by @zhangzhonghe

  - 修復在僅聯合角色模式下載入相關審批時拋出錯誤的問題 by @mytharcher

- **[電子郵件管理器]**
  - 處理異常資料 by @jiannx

  - 未同步 Gmail 排程狀態 by @jiannx
