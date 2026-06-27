---
title: "NocoBase v2.0.11：支援在子流程中為自訂動作觸發器傳遞變數的自訂上下文資料"
description: "v2.0.11 版本發行說明"
---

### 🎉 新功能

- **[工作流：自訂操作事件]** 支援自訂上下文資料，以便在子流程中將變數傳遞給自訂操作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758))，作者：@mytharcher

### 🚀 改進

- **[客戶端]** 當編輯表單區塊或詳情區塊沒有可用資料時，顯示提示訊息。([#8790](https://github.com/nocobase/nocobase/pull/8790))，作者：@gchust

- **[流程引擎]** 修正了新的 runjs 程式碼在執行前會解析變數表達式的問題。([#8762](https://github.com/nocobase/nocobase/pull/8762))，作者：@gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 修正檢視關閉後彈出連結導航被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752))，作者：@zhangzhonghe

  - 停用為多對多（陣列）關聯記錄新增區塊的功能，以防止錯誤。([#8779](https://github.com/nocobase/nocobase/pull/8779))，作者：@gchust

  - 修正了在關聯欄位彈出視窗中編輯資料後，原始資料區塊未重新整理的問題。([#8782](https://github.com/nocobase/nocobase/pull/8782))，作者：@gchust

  - 修正設計模式下分頁標籤被裁剪的問題，並確保最小標籤寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771))，作者：@zhangzhonghe

  - 修正設定模式下對連動隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773))，作者：@zhangzhonghe

  - 修正子表格欄位隱藏切換及連續刪除欄位時 UI 更新延遲的問題 ([#8755](https://github.com/nocobase/nocobase/pull/8755))，作者：@zhangzhonghe

  - 修正更新記錄表單中出現兩次必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761))，作者：@jiannx

- **[資料庫]**
  - 修正集合檢視範本中缺少「簡單分頁」選項的問題。([#8778](https://github.com/nocobase/nocobase/pull/8778))，作者：@cgyrock

  - 數值欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768))，作者：@2013xile

- **[未定義]** 修正升級後系統提示找不到 plugin-block-reference 的問題。([#8757](https://github.com/nocobase/nocobase/pull/8757))，作者：@gchust

- **[操作：匯出記錄]** 修正 Excel 檔案中數值型別欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774))，作者：@cgyrock

- **[區塊：列表]** 修正列表區塊欄位無法使用目前記錄變數的問題。([#8784](https://github.com/nocobase/nocobase/pull/8784))，作者：@gchust

- **[工作流]** 修正核准節點中拖曳區塊時，節點拖曳佔位符顯示錯誤的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763))，作者：@mytharcher

- **[UI 範本]**
  - 修正詳情區塊和編輯表單區塊重複使用目前記錄區塊範本時，可能導致資料無法正確載入的問題。([#8775](https://github.com/nocobase/nocobase/pull/8775))，作者：@gchust

  - 修正範本區塊事件流程中對屬性所做的變更未生效的問題。([#8765](https://github.com/nocobase/nocobase/pull/8765))，作者：@gchust

- **[資料來源：主要]**
  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767))，作者：@2013xile

  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766))，作者：@2013xile

- **[AI 員工]**
  - 修正 dashscope/deepseek/kimi 無法讀取上傳文件檔案的問題。([#8732](https://github.com/nocobase/nocobase/pull/8732))，作者：@cgyrock

  - 修正使用 deepseek 推理模型時的工具呼叫錯誤。([#8741](https://github.com/nocobase/nocobase/pull/8741))，作者：@cgyrock

- **[多空間]** 修正使用主鍵建立資料時的空間權限錯誤，作者：@jiannx
