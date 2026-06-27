---
title: "NocoBase v1.4.0 正式發布"
description: "公開表單、新資料來源及更多功能。"
---

##  主要新功能

### 簡化插件新增與更新流程

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* 插件列表現在直接從本地目錄讀取。
* 合併了新增與更新插件的流程。
* 介面支援批次啟用插件。
* 簡化了商業插件的下載與升級流程。

參考文件：

* [插件的安裝與升級](https://docs.nocobase.com/welcome/getting-started/plugin)
* [發佈說明 / 簡化插件新增與更新流程](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### 通知

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **通知：應用內訊息**
  支援使用者在 NocoBase 應用程式內接收即時訊息通知；
* **通知：電子郵件**
  用於發送電子郵件通知，內建 SMTP 傳輸。詳情；
* **通知：企業微信**
  透過企業微信頻道發送通知。

參考文件：

* [通知管理員](https://docs.nocobase.com/handbook/notification-manager)

### 使用者資料同步

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

參考文件：

* [使用者資料同步](https://docs.nocobase.com/handbook/user-data-sync)

### 備份管理員

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

參考文件：

* [備份管理員](https://docs.nocobase.com/handbook/backups)

### 公開表單

對外分享公開表單，以收集匿名使用者的資訊。

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

參考文件：

* [公開表單](https://docs.nocobase.com/handbook/public-forms)

### 資料來源：人大金倉資料庫

使用人大金倉資料庫作為資料來源，可作為主資料庫或外部資料庫。

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

參考文件：

* [資料來源：人大金倉資料庫](https://docs.nocobase.com/handbook/data-source-kingbase)

### 資料來源：外部 Oracle

使用外部 Oracle 資料庫作為資料來源。

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

參考文件：

* [外部資料來源：Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### 資料表欄位：附件（URL）

支援基於 URL 的附件。

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

參考文件：

* [資料表欄位：附件（URL）](https://docs.nocobase.com/handbook/field-attachment-url)

### 欄位元件：遮罩

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

參考文件：

* [欄位元件：遮罩](https://docs.nocobase.com/handbook/field-component-mask)

### 工作流程：JavaScript

JavaScript 節點允許使用者在工作流程中執行 JavaScript。腳本可以使用流程中上游節點的變數作為參數，腳本的返回值可用於下游節點。

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

參考文件：

* [工作流程節點 - JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### 資料視覺化：ECharts

新增 ECharts，支援漏斗圖、雷達圖等更多圖表，並提供更友善的配置。

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

參考文件：

* [資料視覺化：ECharts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### 區塊：多步驟表單

將包含許多欄位的表單分解為多個步驟，以減輕使用者的負擔。

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

參考文件：

* [區塊：多步驟表單](https://docs.nocobase.com/handbook/block-multi-step-from)

### 區塊：操作面板

設計用於容納各種快速操作，目前支援：

* 連結
* 掃描 QR Code
* 彈出視窗
* 自訂請求

支援網格與列表佈局

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

參考文件：

* [區塊：操作面板](https://docs.nocobase.com/handbook/block-action-panel)

## 已移除功能

### 已棄用的備份與還原插件

自 NocoBase v0.19 起，我們引入了 `@nocobase/plugin-backup-restore` 插件用於應用程式的備份與還原。然而，使用者回饋顯示其功能存在若干限制：

1. 無法備份與還原資料庫層級的中繼資料，例如資料庫欄位的預設值和唯一索引。
2. 無法在備份或還原過程中處理資料庫物件，如檢視表、預存程序、函數和觸發器。
3. 需要為每個插件表單單獨配置 `dumpRules`，通常需要插件開發者自訂邏輯以避免備份或還原過程失敗。
4. 備份分組的複雜設計增加了認知負擔，若選擇不當可能導致備份失敗或資料遺失。
5. 備份與還原過程發生在應用程式層，意味著如果應用程式無法啟動，該過程將失敗。

經過仔細考慮，從 v1.4 版本開始，我們決定棄用此插件。關於新的備份方案，請參閱下方文件。

參考文件：

* [如何備份與還原 NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
