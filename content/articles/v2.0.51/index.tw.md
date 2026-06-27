---
title: "NocoBase v2.0.51：修正審批表單的必填驗證行為"
description: "v2.0.51 版本發布說明"
---

### 🚀 改善

- **[工作流程：審批]** 修正審批表單的必填驗證行為，由 @zhangzhonghe 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 修正 JS 欄位設為唯讀後，無法再編輯 JS 程式碼的問題。（[#9404](https://github.com/nocobase/nocobase/pull/9404)）by @gchust

  - 修正子表格欄位指派在欄位連動規則中無法生效的問題。（[#9412](https://github.com/nocobase/nocobase/pull/9412)）by @gchust

  - 修正 v2 頁面分頁在儲存設定後無法立即同步的問題（[#9396](https://github.com/nocobase/nocobase/pull/9396)）by @zhangzhonghe

  - 修正新增表單中關聯欄位的預設值彈窗顯示異常的問題。（[#9408](https://github.com/nocobase/nocobase/pull/9408)）by @gchust

- **[密碼策略]** 修正永久鎖定的使用者在服務重啟後仍可登入的問題，由 @2013xile 提供

- **[動作：匯入記錄 Pro]** 修正日期欄位的重複檢查總是失敗的問題，由 @mytharcher 提供

- **[工作流程：審批]** 修正審批工作流程設定中選取記錄抽屜被遮蔽的問題，由 @zhangzhonghe 提供
