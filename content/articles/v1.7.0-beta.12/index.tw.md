---
title: "NocoBase v1.7.0-beta.12：新增 onScanSuccess 回呼"
description: "v1.7.0-beta.12 版本發布說明"
---

### 🎉 新功能

- **[區塊：操作面板]** 新增 onScanSuccess 回呼，用於處理掃描成功並退出相機介面。（[#6580](https://github.com/nocobase/nocobase/pull/6580)）by @sheldon66

### 🚀 改進

- **[非同步任務管理器]** 優化 Pro 中的匯入/匯出按鈕（[#6531](https://github.com/nocobase/nocobase/pull/6531)）by @chenos

- **[操作：匯出記錄 Pro]** 優化 Pro 中的匯入/匯出按鈕 by @katherinehhh

- **[遷移管理器]** 允許在遷移時跳過自動備份與還原 by @gchust

### 🐛 錯誤修復

- **[客戶端]** 同一表單中不同子表內同名關聯欄位的聯動衝突（[#6577](https://github.com/nocobase/nocobase/pull/6577)）by @katherinehhh

- **[日曆]** 週檢視中邊界日期遺漏資料（[#6587](https://github.com/nocobase/nocobase/pull/6587)）by @katherinehhh

- **[存取控制]** 登入時當前角色指派不正確（[#6581](https://github.com/nocobase/nocobase/pull/6581)）by @aaaaaajie

- **[操作：批次編輯]** 點擊批次編輯按鈕，設定彈出視窗後再次開啟，彈出視窗為空白（[#6578](https://github.com/nocobase/nocobase/pull/6578)）by @zhangzhonghe

- **[區塊：多步驟表單]** 修正當欄位與其他欄位關聯時，表單重置無效的錯誤 by @jiannx

- **[工作流程：審批]** 修正結構變更後審批節點配置不正確的問題 by @mytharcher
