---
title: "NocoBase v1.8.15：優化彈出式分頁切換時的效能"
description: "v1.8.15 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]**

  - 新增「前天」日期變數支援 ([#7359](https://github.com/nocobase/nocobase/pull/7359)) - 感謝 @katherinehhh
  - 優化切換彈出視窗分頁時的效能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) - 感謝 @zhangzhonghe
- **[工作流]**

  - 修正不穩定的測試案例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) - 感謝 @mytharcher
  - 任務卡片中的工作流標題將不再顯示刪除線，即使對應版本已停用 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) - 感謝 @mytharcher
- **[Office 檔案預覽器]** 新增支援預覽 `.odt` 檔案 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) - 感謝 @mytharcher
- **[備份管理員]** 改善 MySQL 資料庫備份操作的效能 - 感謝 @gchust

### 🐛 錯誤修復

- **[客戶端]**

  - 修正多欄表單佈局在行動裝置上無法轉換為單欄佈局的問題 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) - 感謝 @zhangzhonghe
  - 修正大量刪除資料集合時發生的錯誤 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) - 感謝 @aaaaaajie
  - 修正個別設定權限時，先前儲存的資料範圍未預先選取的問題 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) - 感謝 @aaaaaajie
- **[工作流]**

  - 重構「新增節點」選單，並修正其導致的工作流畫布渲染效能問題 ([#7363](https://github.com/nocobase/nocobase/pull/7363)) - 感謝 @mytharcher
  - 修正擷取單一待辦事項時篩選條件不正確的問題 ([#7366](https://github.com/nocobase/nocobase/pull/7366)) - 感謝 @mytharcher
  - 修正欄位選擇器中關鍵字比對的問題 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) - 感謝 @mytharcher
  - 避免在停止工作流時因發佈至事件佇列而引發錯誤 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) - 感謝 @mytharcher
- **[通知：站內訊息]** 修正站內訊息已接收但未在彈出視窗中顯示的問題 ([#7364](https://github.com/nocobase/nocobase/pull/7364)) - 感謝 @mytharcher
- **[行動裝置]** 解決行動裝置上日期選擇器在套用日期範圍限制時顯示異常的問題 ([#7362](https://github.com/nocobase/nocobase/pull/7362)) - 感謝 @katherinehhh
- **[檔案管理員]** 在檔案資料集合中新增 `storageId` 欄位以支援權限配置 ([#7351](https://github.com/nocobase/nocobase/pull/7351)) - 感謝 @mytharcher
- **[工作流：並行節點]** 修正 MySQL 環境下並行節點恢復後被暫停的問題 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) - 感謝 @mytharcher
- **[工作流：抄送]** 修正區塊無法被移除的問題 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) - 感謝 @mytharcher
- **[Office 檔案預覽器]** 支援僅提供 URL 的 `.docx`、`.xlsx` 和 `.pptx` 檔案進行預覽 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) - 感謝 @mytharcher
- **[資料視覺化]** 修正圖表篩選區塊中日期欄位預設值的日期變數問題 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) - 感謝 @katherinehhh
- **[工作流：審批]**

  - 修正聯動規則在審批原始詳情區塊中無法運作的問題 - 感謝 @mytharcher
  - 修正提交草稿時更新關聯資料的問題 - 感謝 @mytharcher
