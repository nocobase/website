---
title: "NocoBase v1.7.0-alpha.14：支援商業授權"
description: "v1.7.0-alpha.14 版本發行說明"
---

### 🎉 新功能

- **[client]**

  - 單行文字欄位支援輸入多個關鍵字進行篩選 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
    參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - 操作連動規則支援「當前表單」變數 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[build]** 支援商業授權 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[undefined]** 新增匯入插件的日誌 by @aaaaaajie
- **[動作：匯入記錄]** 新增匯入插件的日誌 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie
- **[plugin-commercial]** 支援商業版 by @jiannx
- **[多關鍵字篩選]** 單行文字欄位支援輸入多個關鍵字進行篩選 by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[範本列印]**

  - 在範本列印中新增支援批量列印。 by @sheldon66
  - 在範本列印中新增支援批量列印。 by @sheldon66

### 🚀 改進

- **[undefined]** 建置完整的 Docker 映像 ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[client]**

  - 優化頁面隨著使用時間變慢的問題 ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
  - 為閱讀狀態圖片新增更多內建尺寸設定 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[工作流]**

  - 新增所有遺漏的 en-US 語言包鍵值 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher
  - 允許修訂多個草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher
- **[集合欄位：附件(URL)]** 為附件 URL 欄位新增更多內建尺寸以用於閱讀狀態 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[郵件管理員]**

  - 修復同步錯誤及其他不易使用的問題 by @jiannx
  - 新增草稿管理，支援下屬郵件檢視 by @jiannx

### 🐛 錯誤修復

- **[client]**

  - 停用連動規則對操作按鈕無效 ([#6896](https://github.com/nocobase/nocobase/pull/6896)) by @katherinehhh
  - 刪除最後一個項目後頁面未正確重新導向 ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - 彈窗中的級聯元件初始未載入關聯資料 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - 在子表單中暴露關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 資料選擇器表格的資料範圍中缺少當前表單變數 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 連動規則中操作符變更時清除右側值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - 連動規則中切換時操作符遺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - 詳細區塊中的按鈕連動問題 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - 連動條件中日期變數的操作符評估不正確 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - 隱藏欄位仍會顯示 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 二次確認中變數解析與 {{title}} 資料不相容 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 連動規則值元件樣式改進 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
- **[database]** 處理欄位匯入時的空字串儲存格以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[build]** 修復 plugin-workflow-javascript 中的客戶端執行時錯誤，處理 undefined 錯誤 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[檔案管理員]**

  - 修復非圖片檔案的預覽 URL ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
  - 修復類型 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - 修復在沒有外鍵權限的情況下建立檔案記錄 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[區塊：操作面板]**

  - 從掃描器讀取路由 basename 以適應桌面環境。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
  - 深色模式下操作面板的顏色不正確 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[AI 整合]** 在 LLM 服務配置與驗證配置頁面之間切換時內容未顯示 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流：人工節點]**

  - 因插件從內建列表中移除而修復測試案例 ([#6895](https://github.com/nocobase/nocobase/pull/6895)) by @mytharcher
  - 修復顯示未處理項目時的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
  - 修復任務統計數字計算錯誤 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[工作流]**

  - 修復集合事件的堆疊限制運作不正確 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
  - 修復在任務中心直接開啟彈出連結時返回導航無效 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[資料視覺化]**

  - 當圖表區塊新增到從區塊層級操作觸發的彈窗時未顯示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - 修復篩選巢狀 m2m 欄位時的錯誤 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[動作：匯出記錄]**

  - 改善在匯入/匯出欄位設定中刪除欄位時的效能 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - 修復匯出巢狀關聯及附件 URL 中的空值 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[區塊：範本]** 儲存為繼承範本後，開啟彈窗時發生錯誤 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[動作：複製記錄]** 編輯複製資料時，第一次輸入點擊即關閉彈窗 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[工作流：測試套件]** 因缺少預設插件而修復失敗的測試案例 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[工作流：操作後事件]** 修復在 Handlebars 範本中無法存取使用者操作變數 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[plugin-commercial]**

  - 修復商業版日誌發送至 CRM 及文字翻譯 by @jiannx
  - 使用原型鏈實現 withCommercial 函數 by @jiannx
- **[動作：匯出記錄 Pro]**

  - 改善在匯入/匯出 Pro 欄位設定中刪除欄位時的效能 by @katherinehhh
  - 修復匯出長文字的錯誤。 by @aaaaaajie
- **[工作流：子流程]** 修復未定義觸發器導致頁面崩潰 by @mytharcher
- **[範本列印]**

  - 修復找不到格式化程式的問題。 by @sheldon66
  - 修復找不到格式化程式 by @sheldon66
- **[檔案儲存：S3(Pro)]**

  - 存取 URL 過期無效 by @jiannx
  - 改為使用集合欄位定位儲存空間 by @mytharcher
- **[工作流：審批]**

  - 修復任務統計數字計算錯誤 by @mytharcher
  - 修復委派及新增至其他審批人的審批人範圍 by @mytharcher
- **[郵件管理員]**

  - 修復 ts 錯誤 by @jiannx
  - 列表 API 支援主旨合併 by @jiannx
- **[備份管理員]** 修復建置中的類型錯誤 by @mytharcher
