---
title: "NocoBase v1.7.0-alpha.13：支援在二次確認標題與內容中使用變數"
description: "v1.7.0-alpha.13 版本發行說明"
---

### 🎉 新功能

- **[client]**
  - 支援在二次確認標題與內容中使用變數 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh

  - 支援在區塊中設定聯動規則以動態顯示/隱藏 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh

- **[undefined]** 為授權套件新增發布 CI ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

- **[區塊: iframe]** Iframe 區塊支援設定 allow 屬性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

- **[認證]** 支援「忘記密碼」功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
參考：[忘記密碼](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[檔案管理]** 功能：新增 `getFileStream` API 以支援檔案串流。([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

- **[操作: 自訂請求]** 支援在自訂請求操作的成功訊息中使用回應變數 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh

- **[範本列印]** 功能：支援在範本列印中使用 `{ label, value }` 選擇選項。 by @sheldon66

- **[區塊: 樹]** 篩選樹區塊支援聯動規則 by @katherinehhh

- **[資料視覺化: ECharts]** 為長條圖新增「Y 軸反向」設定 by @2013xile

### 🚀 改進

- **[client]**
  - RichText 元件支援 modules 與 formats 屬性 ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

  - 優化子表格新增按鈕樣式，並將分頁器對齊在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

  - 在操作圖示懸停時，以工具提示顯示按鈕標題 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh

  - 保留參考範本功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust

  - 調整上傳訊息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

- **[utils]** 增加篩選按鈕欄位清單的高度，並對欄位進行排序/分類 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

- **[檔案管理]** 新增 OSS 逾時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[資料視覺化]** 為欄位介面配置新增擴展 API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile

- **[密碼策略]** 將預設密碼到期時間改為永不到期 by @2013xile

- **[企業微信]** 更新使用者電子郵件時，優先使用企業郵箱而非個人郵箱 by @2013xile

### 🐛 錯誤修復

- **[database]**
  - 因文字欄位值導致匯入失敗。([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie

  - 修正在 MariaDB 下，當外鍵為 bigInt 時，belongs-to 關聯未在 appends 中載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

  - 避免資料型別非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

  - 為 SQL 集合與檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh

- **[client]**
  - 當顯示來自關聯集合的欄位時，多對多關聯欄位提交失敗 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

  - 無法將其他按鈕拖曳到複製按鈕上 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh

  - 篩選表單中的表格選擇器樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

  - 當篩選表單的關聯欄位元件改為資料選擇器時，缺少「允許複選」配置項 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊清單未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - 子表格在唯讀模式下的分頁欄樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

  - 在子表格中配置子表單（彈窗）聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - 當變數選擇需要非同步載入時，最後選取的選單遺失。([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust

  - 表單欄位違反驗證規則時顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - 修正篩選表單中無法選取一對多欄位子欄位作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - 將其他 props 傳遞給 Variable.Input 元件。([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66

  - 子表格中子表單（彈窗）聯動規則缺少欄位屬性設定 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh

  - 當顯示來自關聯集合的欄位時，關聯欄位未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - 在篩選表單中，切換欄位運算子後重新整理頁面導致錯誤 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe

  - 在摺疊區塊中，點擊關聯欄位搜尋框的清除按鈕不應刪除資料範圍 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe

  - 樹表格中新增子記錄按鈕的對齊問題 ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh

  - 禁止將選單移動到頁面頁籤之前或之後 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

  - 表格區塊在篩選時顯示重複資料 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe

  - URL 查詢參數運算子問題 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh

  - 當 writableView 為 false 時，檢視集合僅支援匯出操作 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh

  - 從表單中關聯表格擷取多對多陣列欄位資料不正確 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile

  - 在新增表單的子表單/子表格中顯示關聯欄位時，意外建立關聯資料 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh

- **[create-nocobase-app]** 暫時透過降級至 2.5.6 來修正 mariadb 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos

- **[操作: 匯出記錄]** 修正匯出長文字的錯誤。([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie

- **[集合欄位: 附件(URL)]** 附件（URL）欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

- **[驗證]** 修正遷移腳本的問題 ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile

- **[認證]** 不允許變更認證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[操作: 自訂請求]** 自訂請求回應設定為變數時顯示不正確 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

- **[區塊: 操作面板]** 啟用僅圖示模式時，操作面板圖示遺失 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh

- **[工作流: 自訂操作事件]** 觸發的工作流操作聯動問題 by @katherinehhh

- **[工作流: 日期計算節點]** 修正不支援 `Intl` API 的舊版瀏覽器錯誤 by @mytharcher

- **[範本列印]** 修正：更正權限驗證邏輯以防止未授權操作。 by @sheldon66

- **[檔案儲存: S3(Pro)]** 存取 URL 過期無效 by @jiannx

- **[區塊: 樹]** 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 by @zhangzhonghe
