---
title: "NocoBase v2.0.0-alpha.33：子表格新增分頁支援"
description: "v2.0.0-alpha.33 版本發布說明"
---

### 🎉 新功能

- **[client]** 子表格新增分頁支援 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 改進

- **[undefined]** 更新圖表插件的英文文件 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

- **[telemetry]** 新增線上子應用數量等遙測指標 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[Workflow]** 支援工作流程中的資料區塊使用合併明細設定選單 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

- **[Multi-app manager (deprecated)]** 啟用子應用程式的佇列非同步啟動 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

- **[Data visualization]** 新增圖表資料時間格式選項 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

- **[Workflow: Approval]** 為委派與新增的受託人新增通知 by @mytharcher

### 🐛 錯誤修復

- **[client]**
  - 修正變數相關元件中列舉類型的標籤未以正確語言顯示的問題。([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - 修正設定前端驗證後缺少必填欄位指示器的問題 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - 修正編輯表單中清除無時區日期時的問題 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - 修正連結規則的必填欄位驗證 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - 解決在篩選器中刪除指定日期時出現無效日期的問題 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - 修正 Markdown Vditor 欄位必填驗證失敗的問題 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - 為篩選表單中的關聯欄位新增資料範圍設定 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - 修正子表格欄位中的時間格式問題 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

- **[flow-engine]**
  - 當欄位篩選值設為 false 時，包含資料範圍的請求不正確 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - 無法解析子表單當前物件變數的關聯欄位值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - 修正：解決刪除最後一頁資料後頁面請求參數的問題 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

- **[server]** 依應用程式名稱隔離發布-訂閱頻道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher

- **[Block: GridCard]** 修正列表與網格卡片區塊之間的資料重複問題 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[Multi-app manager (deprecated)]** 子應用程式狀態指標的集合不正確 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

- **[Workflow]**
  - 解決叢集模式下工作流程調度器無法正確識別空閒狀態，可能導致外掛程式就緒前不必要的佇列事件消耗問題 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher

  - 修正服務拆分模式下，手動執行包含中斷節點的工作流程會卡在待處理狀態的問題 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher

- **[Workflow: Approval]**
  - 修正重複的核准工作流程時拋出錯誤 by @mytharcher

  - 不再支援在並行分支中建立核准節點，以避免流程狀態引起的問題 by @mytharcher

- **[Email manager]**
  - 新增同步日誌 by @jiannx

  - 新增索引遷移 by @jiannx
