---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：允許修改多個草稿、為閱讀狀態圖像添加更多內建尺寸設定，以及其他改進。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*發布日期：2025-05-09*

#### 🐛 錯誤修復

- **[database]** 因文字欄位值導致匯入失敗。([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
- **[client]** 隱藏欄位仍會顯示 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
- **[操作：匯出記錄]** 修復匯出長文字時的錯誤。([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[工作流：操作後事件]** 修復在 Handlebars 模板中無法存取使用者操作變數的問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[區塊：操作面板]** 深色模式下操作面板的顏色不正確 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[操作：匯出記錄 Pro]** 修復匯出長文字時的錯誤。by @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*發布日期：2025-05-13*

#### 🚀 改進

- **[工作流]** 允許修訂多個草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

#### 🐛 錯誤修復

- **[操作：匯出記錄]** 修復匯出巢狀關聯中的空值及附件 URL 的問題 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[工作流：人工節點]** 修復任務統計數量計算錯誤 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[工作流：測試套件]** 修復因需要預設插件而導致的測試案例失敗 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[資料視覺化]** 修復篩選巢狀 m2m 欄位時的錯誤 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[工作流：子流程]** 修復未定義的觸發器導致頁面崩潰 by @mytharcher
- **[檔案儲存：S3(Pro)]** 存取 URL 過期無效 by @jiannx
- **[工作流：審批]** 修復任務統計數量計算錯誤 by @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*發布日期：2025-05-15*

#### 🚀 改進

- **[client]** 為閱讀狀態圖片新增更多內建尺寸設定 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh

#### 🐛 錯誤修復

- **[檔案管理]**

  - 修復類型 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - 修復在沒有外鍵權限的情況下建立檔案記錄 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[操作：匯出記錄]** 改善在匯入/匯出欄位設定中刪除欄位時的效能 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
- **[資料視覺化]** 將圖表區塊新增至從區塊層級操作觸發的彈出視窗時，圖表區塊不顯示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
- **[操作：匯出記錄 Pro]** 改善在匯入/匯出 Pro 欄位設定中刪除欄位時的效能 by @katherinehhh
- **[檔案儲存：S3(Pro)]** 改為使用集合欄位來定位儲存位置 by @mytharcher
- **[備份管理器]** 修復建置中的類型錯誤 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*發布日期：2025-05-15*

#### 🎉 新功能

- **[client]** 操作連動規則支援「目前表單」變數 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[undefined]** 新增匯入插件的日誌 by @aaaaaajie
- **[操作：匯入記錄]** 新增匯入插件的日誌 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie

#### 🚀 改進

- **[client]** 為閱讀狀態圖片新增更多內建尺寸設定 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[集合欄位：附件(URL)]** 為附件 URL 欄位新增更多內建尺寸以用於閱讀狀態 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[工作流]** 允許修訂多個草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 詳情區塊中的按鈕連動問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - 在連動規則中切換運算子時清除右側值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - 連動條件中日期變數的運算子評估不正確 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - 在連動規則中切換時運算子遺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 連動規則值元件樣式改進 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 隱藏欄位仍會顯示 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
- **[database]** 因文字欄位值導致匯入失敗。([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
- **[資料視覺化]**

  - 將圖表區塊新增至從區塊層級操作觸發的彈出視窗時，圖表區塊不顯示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - 修復篩選巢狀 m2m 欄位時的錯誤 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[操作：匯出記錄]**

  - 改善在匯入/匯出欄位設定中刪除欄位時的效能 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - 修復匯出巢狀關聯中的空值及附件 URL 的問題 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
  - 修復匯出長文字時的錯誤。([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[檔案管理]** 修復在沒有外鍵權限的情況下建立檔案記錄 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[工作流]** 修復在任務中心直接開啟彈出連結時，返回導航失效的問題 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[操作：複製記錄]** 編輯複製資料時，第一次輸入點擊後模態框關閉 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[區塊：模板]** 儲存為繼承模板後，開啟彈出視窗時報錯 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[工作流：測試套件]** 修復因需要預設插件而導致的測試案例失敗 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[工作流：操作後事件]** 修復在 Handlebars 模板中無法存取使用者操作變數的問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[工作流：人工節點]** 修復任務統計數量計算錯誤 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[區塊：操作面板]** 深色模式下操作面板的顏色不正確 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[操作：匯出記錄 Pro]**

  - 改善在匯入/匯出 Pro 欄位設定中刪除欄位時的效能 by @katherinehhh
  - 修復匯出長文字時的錯誤。by @aaaaaajie
- **[工作流：子流程]** 修復未定義的觸發器導致頁面崩潰 by @mytharcher
- **[模板列印]**

  - 修復找不到格式化程式的問題。by @sheldon66
  - 修復找不到格式化程式 by @sheldon66
- **[檔案儲存：S3(Pro)]**

  - 改為使用集合欄位來定位儲存位置 by @mytharcher
  - 存取 URL 過期無效 by @jiannx
- **[工作流：審批]** 修復任務統計數量計算錯誤 by @mytharcher
