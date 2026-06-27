---
title: "NocoBase 每週更新：範本列印新增批量列印支援"
description: "本週更新包括：單行文字欄位支援多關鍵字篩選、範本列印新增批量列印支援等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*發布日期：2025-05-18*

#### 🚀 改進

- **[工作流]** 新增所有遺漏的 en-US 語言包鍵值 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 錯誤修復

- **[資料庫]** 處理欄位匯入時的空字串儲存格，以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[客戶端]**

  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - 在子表單中暴露關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
- **[工作流]** 修正集合事件的堆疊限制運作不正確的問題 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[區塊：操作面板]** 從掃描器讀取路由基底名稱，以適應桌面環境。([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[工作流：人工節點]** 修正顯示未處理項目時的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[工作流：審批]** 修正委派人的受指派者範圍，並新增至其他受指派者 by @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*發布日期：2025-05-20*

#### 🐛 錯誤修復

- **[客戶端]**
  - 刪除最後一個項目後頁面未正確重新導向 ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - 模態框中的級聯元件初始未載入關聯資料 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*發布日期：2025-05-19*

#### 🎉 新功能

- **[客戶端]** 單行文字欄位支援輸入多個關鍵字進行篩選 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[多關鍵字篩選]** 單行文字欄位支援輸入多個關鍵字進行篩選 by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[範本列印]** 在範本列印中新增支援批量列印。by @sheldon66

#### 🚀 改進

- **[工作流]** 新增所有遺漏的 en-US 語言包鍵值 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 模態框中的級聯元件初始未載入關聯資料 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 在子表單中暴露關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 資料選擇器表格的資料範圍中缺少當前表單變數 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[資料庫]** 處理欄位匯入時的空字串儲存格，以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[工作流：人工節點]** 修正顯示未處理項目時的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[檔案管理員]** 修正型別 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[區塊：操作面板]** 從掃描器讀取路由基底名稱，以適應桌面環境。([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI 整合]** 在 LLM 服務配置與驗證配置頁面之間切換時，內容未顯示 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流]** 修正集合事件的堆疊限制運作不正確的問題 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[工作流：審批]** 修正委派人的受指派者範圍，並新增至其他受指派者 by @mytharcher
- **[備份管理員]** 修正建置時的型別錯誤 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*發布日期：2025-05-21*

#### 🎉 新功能

- **[客戶端]**

  - 單行文字欄位支援輸入多個關鍵字進行篩選 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
    參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - 操作連動規則支援「當前表單」變數 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[建置]** 支援商業授權 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[未定義]** 新增匯入外掛的日誌 by @aaaaaajie
- **[動作：匯入記錄]** 新增匯入外掛的日誌 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie
- **[plugin-commercial]** 支援商業功能 by @jiannx
- **[多關鍵字篩選]** 單行文字欄位支援輸入多個關鍵字進行篩選 by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[範本列印]**

  - 在範本列印中新增支援批量列印。by @sheldon66
  - 在範本列印中新增支援批量列印。by @sheldon66

#### 🚀 改進

- **[未定義]** 建置完整的 Docker 映像檔 ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[客戶端]**

  - 優化頁面隨著使用時間變慢的問題 ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
  - 為閱讀狀態圖片新增更多內建尺寸設定 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[工作流]**

  - 新增所有遺漏的 en-US 語言包鍵值 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher
  - 允許修訂多個草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher
- **[集合欄位：附件(URL)]** 為附件 URL 欄位新增更多內建尺寸，用於閱讀狀態 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[電子郵件管理員]**

  - 修正同步錯誤及其他不易使用的問題 by @jiannx
  - 新增草稿管理，支援下屬郵件檢視 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 停用連動規則對操作按鈕無效 ([#6896](https://github.com/nocobase/nocobase/pull/6896)) by @katherinehhh
  - 刪除最後一個項目後頁面未正確重新導向 ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - 模態框中的級聯元件初始未載入關聯資料 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - 在子表單中暴露關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 資料選擇器表格的資料範圍中缺少當前表單變數 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 在連動規則中切換運算子時清除右側值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - 在連動規則中切換時運算子遺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - 詳情區塊中的按鈕連動問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - 連動條件中日期變數的運算子評估不正確 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - 隱藏的欄位仍然顯示 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 連動規則值元件的樣式改進 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
- **[資料庫]** 處理欄位匯入時的空字串儲存格，以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[建置]** 修正 plugin-workflow-javascript 中的客戶端執行時期錯誤，處理未定義錯誤 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[檔案管理員]**

  - 修正非圖片檔案的預覽 URL ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
  - 修正型別 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - 修正建立檔案記錄時缺少外鍵權限 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[區塊：操作面板]**

  - 從掃描器讀取路由基底名稱，以適應桌面環境。([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
  - 在深色模式下操作面板的顏色不正確 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[AI 整合]** 在 LLM 服務配置與驗證配置頁面之間切換時，內容未顯示 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流：人工節點]**

  - 修正因外掛從內建清單中移除而導致的測試案例失敗 ([#6895](https://github.com/nocobase/nocobase/pull/6895)) by @mytharcher
  - 修正顯示未處理項目時的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
  - 修正任務上的統計數字計數錯誤 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[工作流]**

  - 修正集合事件的堆疊限制運作不正確的問題 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
  - 修正從任務中心直接開啟彈出連結時，返回導航無效的問題 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[資料視覺化]**

  - 當圖表區塊新增至從區塊層級操作觸發的彈出視窗時，圖表區塊未顯示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - 修正篩選巢狀 m2m 欄位時的錯誤 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[動作：匯出記錄]**

  - 改善在匯入/匯出欄位設定中刪除欄位時的效能 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - 修正匯出巢狀關聯和附件 URL 中的空值 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[區塊：範本]** 儲存為繼承範本後，開啟彈出視窗時發生錯誤 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[動作：複製記錄]** 編輯複製資料時，第一次點擊輸入框即關閉模態框 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[工作流：測試套件]** 修正因缺少預設外掛而導致的測試案例失敗 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[工作流：操作後事件]** 修正 Hanldebars 範本中無法存取使用者操作變數的問題 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[plugin-commercial]**

  - 修正商業日誌發送至 CRM 及文字翻譯 by @jiannx
  - 使用原型鏈實現 withCommercial 函數 by @jiannx
- **[動作：匯出記錄 Pro]**

  - 改善在匯入/匯出 Pro 欄位設定中刪除欄位時的效能 by @katherinehhh
  - 修正匯出長文字的錯誤。by @aaaaaajie
- **[工作流：子流程]** 修正未定義的觸發器導致頁面崩潰 by @mytharcher
- **[範本列印]**

  - 修正找不到格式化程式的問題。by @sheldon66
  - 修正找不到格式化程式 by @sheldon66
- **[檔案儲存：S3(Pro)]**

  - 存取 URL 過期無效 by @jiannx
  - 改為使用集合欄位來定位儲存空間 by @mytharcher
- **[工作流：審批]**

  - 修正任務上的統計數字計數錯誤 by @mytharcher
  - 修正委派人的受指派者範圍，並新增至其他受指派者 by @mytharcher
- **[電子郵件管理員]**

  - 修正 ts 錯誤 by @jiannx
  - 列表 API 支援主題合併 by @jiannx
- **[備份管理員]** 修正建置時的型別錯誤 by @mytharcher
