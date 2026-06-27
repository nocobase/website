---
title: "NocoBase v1.9.0-alpha.5：新增簽名相關配置選項"
description: "v1.9.0-alpha.5 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 為 Input、TextArea、URL 及 InputNumber 元件新增「自動聚焦」選項，啟用後可在頁面初次渲染時自動聚焦輸入欄位 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

- **[認證：SAML 2.0]** 新增簽章相關設定選項 by @2013xile

### 🚀 改進

- **[工作流：JavaScript]** 將快取改為應用程式快取，以避免叢集模式下的錯誤 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正變數原始字串隨表單一併提交的問題 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe

  - 修正滑鼠懸停在動作面板時，工具提示顯示 [object Object] 的問題 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh

  - 在篩選表單中使用變數設定欄位預設值時，若變數值為空，輸入框會顯示原始變數字串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe

- **[未定義]** 將新外掛加入預設清單 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher

- **[集合：樹狀結構]** 修正樹狀集合的路徑同步邏輯 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

- **[Office 檔案預覽器]** 支援僅提供 URL 的 `.docx`、`.xlsx` 及 `.pptx` 檔案進行預覽 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher

- **[工作流：動態計算節點]** 修正舊版 API 導致的錯誤 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher

- **[工作流：審核]** 為新增及委派的項目新增任務標題 by @mytharcher

- **[電子郵件管理員]** 支援同一封郵件寄送給多人 by @jiannx
