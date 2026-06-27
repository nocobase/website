---
title: "NocoBase v1.7.0-beta.31：新增匯入插件的日誌"
description: "v1.7.0-beta.31 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 操作連結規則支援「當前表單」變數 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) - @katherinehhh

- **[未定義]** 新增匯入插件的日誌 - @aaaaaajie

- **[操作：匯入記錄]** 新增匯入插件的日誌 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) - @aaaaaajie

### 🚀 改進

- **[客戶端]** 為閱讀狀態圖片新增更多內建尺寸設定 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) - @katherinehhh

- **[集合欄位：附件(URL)]** 為附件 URL 欄位新增更多內建尺寸以用於閱讀狀態 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) - @katherinehhh

- **[工作流]** 允許修訂多個草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 詳細區塊中的按鈕連結問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) - @katherinehhh

  - 在連結規則中切換運算子時清除右側值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) - @katherinehhh

  - 連結條件中日期變數的運算子評估不正確 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) - @katherinehhh

  - 在連結規則中切換時運算子遺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) - @katherinehhh

  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) - @katherinehhh

  - 連結規則值元件樣式改進 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) - @katherinehhh

  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) - @katherinehhh

  - 隱藏欄位仍會顯示 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) - @zhangzhonghe

- **[資料庫]** 因文字欄位值導致匯入失敗 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) - @aaaaaajie

- **[資料視覺化]**
  - 當圖表區塊新增至從區塊層級動作觸發的彈出視窗時無法顯示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) - @2013xile

  - 修正篩選巢狀多對多欄位時的錯誤 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) - @2013xile

- **[操作：匯出記錄]**
  - 改善在匯入/匯出欄位設定中刪除欄位時的效能 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) - @katherinehhh

  - 修正匯出巢狀關聯及附件 URL 中的空值 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) - @aaaaaajie

  - 修正匯出長文字的錯誤 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) - @aaaaaajie

- **[檔案管理]** 修正建立檔案記錄時缺少外鍵權限的問題 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) - @mytharcher

- **[工作流]** 修正直接在任務中心開啟彈出連結時返回按鈕失效的問題 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) - @mytharcher

- **[操作：複製記錄]** 編輯複製資料時，第一次點擊輸入框即關閉模態框 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) - @katherinehhh

- **[區塊：範本]** 儲存為繼承範本後，開啟彈出視窗時發生錯誤 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) - @gchust

- **[工作流：測試套件]** 修正因缺少預設外掛而導致的測試案例失敗 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) - @mytharcher

- **[工作流：動作後事件]** 修正 Handlebar 範本中無法存取使用者動作變數的問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) - @mytharcher

- **[工作流：人工節點]** 修正任務統計數字計算錯誤 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) - @mytharcher

- **[區塊：操作面板]** 深色模式下操作面板顏色不正確 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) - @zhangzhonghe

- **[操作：匯出記錄 Pro]**
  - 改善在匯入/匯出 Pro 欄位設定中刪除欄位時的效能 - @katherinehhh

  - 修正匯出長文字的錯誤 - @aaaaaajie

- **[工作流：子流程]** 修正未定義觸發器導致頁面崩潰的問題 - @mytharcher

- **[範本列印]**
  - 修正找不到格式化程式的問題 - @sheldon66

  - 修正找不到格式化程式的問題 - @sheldon66

- **[檔案儲存：S3(Pro)]**
  - 改為使用集合欄位來定位儲存位置 - @mytharcher

  - 存取 URL 過期時間無效 - @jiannx

- **[工作流：審批]** 修正任務統計數字計算錯誤 - @mytharcher
