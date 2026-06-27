---
title: "NocoBase v1.7.0 正式發布"
description: "增強權限管理、優化系統性能，並開源插件以全面提升功能與用戶體驗"
---

## 新功能

### 角色聯合

角色聯合是一種權限管理模式。根據系統設定，系統開發者可選擇使用「獨立角色」、「允許角色聯合」或「允許角色聯合」，以滿足不同的權限需求。

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

參考：[角色聯合](https://docs.nocobase.com/handbook/acl/manual)

### 驗證與雙重驗證 (2FA)

原有的驗證碼功能已升級為全面的驗證管理系統，支援多種驗證方式（如 TOTP）。系統同時支援雙重驗證 (2FA)，在登入時除了密碼之外，還需要額外的驗證步驟，大幅提升帳號安全性。

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

參考：

* [驗證](https://docs.nocobase.com/handbook/verification)
* [雙重驗證](https://docs.nocobase.com/handbook/two-factor-authentication)
* [TOTP 驗證器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### 範本列印

範本列印現在支援動態圖片與條碼渲染。

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

參考：[範本列印](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### 多關鍵字篩選

多關鍵字篩選外掛為 NocoBase 平台增添了強大的文字篩選功能，讓您能使用多個關鍵字來篩選資料，大幅提升資料查詢的靈活性與效率。

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)

### 日期篩選支援相對日期範圍選擇

支援依自訂時間偏移（日/週/月/季/年）及特定日期進行篩選，實現更靈活的時間範圍查詢。

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### 左側變數

條件中的左側變數用於定義連動規則中的「被判斷對象」，即條件將評估此變數的值，以決定是否應觸發連動行為。

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

參考：[左側變數](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### 繼承範本

當您希望區塊遵循範本的基本更新，但又允許特定變更時，繼承範本是理想的選擇。區塊會繼承範本的設定，並可對其進行擴展或覆蓋。區塊中未更改的設定將隨範本自動更新。

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

參考：[繼承範本](https://docs.nocobase.com/handbook/block-template#inherited-template)

### 區塊連動規則

區塊連動規則允許使用者動態控制區塊的可見性，實現區塊層級的元素顯示管理。

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

參考：[區塊連動規則](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### 提交成功後

提交成功後，支援刷新其他區塊的資料，並可帶參數導航至詳情頁面。

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

參考：[提交成功後](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### 工作流程分類管理

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### 部門與附件 URL 開源外掛

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## 改進

### 連動規則屬性增強

* 可選欄位現在支援可配置選項
* 日期欄位現在支援設定日期範圍

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

參考：[欄位連動規則](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### 進階匯入

匯入配置現在支援使用多個欄位來唯一識別記錄，並支援在匯入時選擇覆蓋或忽略空白儲存格。

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

參考：[進階匯入](https://docs.nocobase.com/handbook/action-import-pro)

### 匯出 XLSX 效能最佳化

* 解決匯出大型資料表時的記憶體溢出與應用程式凍結問題
* 解決匯出資料有機率出現重複資料的問題
* 基於索引、唯一約束及索引策略最佳化匯出資料的查詢
* 新增匯出並發佇列，並可透過環境變數設定並發數量。

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

參考：

* [並發匯出](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [關於效能](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### 匯入 XLSX 檔案效能最佳化

* 將原有的單行匯入策略改為批次插入
* 重構重複識別機制。從單行處理改為批次處理，同時保持更新邏輯與觸發工作流程不變

參考：[關於效能](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### 工作流程執行效率提升 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
