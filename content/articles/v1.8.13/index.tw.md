---
title: "NocoBase v1.8.13：新增簽名相關配置選項"
description: "v1.8.13 版本發布說明"
---

### 🎉 新功能

- **[認證：SAML 2.0]** 新增簽章相關設定選項，由 @2013xile 提供

### 🚀 功能改善

- **[工作流程：JavaScript]** 將快取改為應用程式快取，以避免叢集模式下的錯誤，由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在動作面板中懸停時，工具提示顯示 [object Object] 的問題 ([#7322](https://github.com/nocobase/nocobase/pull/7322))，由 @katherinehhh 提供

  - 在篩選表單中使用變數設定欄位預設值時，若變數值為空，輸入框將顯示原始變數字串 ([#7335](https://github.com/nocobase/nocobase/pull/7335))，由 @zhangzhonghe 提供

- **[集合：樹狀結構]** 修正樹狀集合的路徑同步邏輯 ([#7330](https://github.com/nocobase/nocobase/pull/7330))，由 @ChimingLiu 提供
