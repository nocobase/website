---
title: "NocoBase v1.8.5：新增更多可計算介面"
description: "v1.8.5 版本發行說明"
---

### 🚀 改進

- **[集合欄位：公式]** 新增更多可計算的介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher

- **[工作流程]** 當因狀態不應執行時，改用記錄日誌而非拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher

- **[工作流程：審批]** 支援在相關資料被刪除時一併刪除審批 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 附件欄位無法在連結規則中選為變數的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe

  - 修復 iOS 上下拉選單元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe

  - 編輯表單中，當選擇欄位同時設定值與選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh

  - 篩選折疊：為欄位設定預設值後，頁面初始化時未觸發篩選 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe

  - 在看板排序欄位中使用列表區塊賦值時發生錯誤 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh

  - 切換子選單時，瀏覽器分頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe

  - 彈出動作：切換分頁後頁面顯示不如預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe

- **[acl]** 修正在角色聯合模式下，刪除包含根角色的角色時發生的錯誤 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie

- **[多應用管理]** 修正驗證選項出現在非預期位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher

- **[認證]** 修復登入頁面無法滾動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe

- **[工作流程：審批]** 修正提交審批時的關聯問題 by @mytharcher
