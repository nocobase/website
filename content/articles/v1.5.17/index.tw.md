---
title: "NocoBase v1.5.17：錯誤修復"
description: "v1.5.17 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 在沒有評論集合的情況下建立評論區塊時發生錯誤 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) - @katherinehhh

  - 點擊樹狀區塊節點時發生錯誤 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) - @zhangzhonghe

  - 點擊左側選單後，子頁面異常關閉 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) - @zhangzhonghe

  - 當表達式值為空時，不清除欄位值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) - @zhangzhonghe

- **[集合欄位：序號]** 修正在唯讀模式下序號欄位未停用的問題 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) - @mytharcher

- **[檔案管理]** 修正繼承集合的遷移問題 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) - @mytharcher

- **[存取控制]** 在集合權限中使用多對多欄位作為資料範圍時，資料記錄不正確 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) - @2013xile

- **[區塊：看板]** 在彈出式看板區塊中使用彈出記錄變數時，資料篩選不正確 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) - @katherinehhh

- **[區塊：樹狀]** 點擊樹狀區塊節點時發生錯誤 - @zhangzhonghe
