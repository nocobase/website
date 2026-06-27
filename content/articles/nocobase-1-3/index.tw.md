---
title: "NocoBase 1.3：REST API 資料來源、行動版 v2 及更多功能"
description: "NocoBase 1.3 引入了 REST API 和 MSSQL 資料來源、支援透過 URL 開啟彈出視窗、動態配置欄位元件、增強的行動版、企業微信認證、多對多陣列，以及工作流程中新增的日期計算節點。"
---

從 1.3 版本開始，NocoBase 提供兩個主要分支：**main** 和 **next**。

- **main** 分支（beta 版本）專注於錯誤修復，為使用者提供穩定的版本。
- **next** 分支（alpha 版本）包含一些尚未發布的新功能。此版本不穩定，旨在讓開發者或測試人員提前體驗新功能或進行相容性測試。

1.3 beta 版本的新功能包括：

## 核心功能

### 支援透過 URL 開啟彈出視窗

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

參考文件：

- [彈出視窗](https://docs.nocobase.com/handbook/ui/pop-up)

### 支援將彈出視窗作為頁面開啟

彈出視窗操作新增了「頁面」選項。

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

參考文件：

- [彈出視窗](https://docs.nocobase.com/handbook/ui/pop-up)

### 欄位支援設定樣式屬性

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

參考文件：

- [欄位設定 / 樣式](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown 和 iframe HTML 支援 Handlebars 模板引擎

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

參考文件：

- [Markdown Handlebars 模板引擎](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Iframe HTML Handlebars 模板引擎](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### 支援動態設定欄位元件

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

參考文件：

- [欄位設定 / 欄位元件](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [外掛範例 / 帶值的欄位元件](https://docs.nocobase.com/plugin-samples/field/value)

## 外掛

### REST API 資料來源

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

參考文件：

- [資料來源 / REST API 資料來源](https://docs.nocobase.com/handbook/data-source-rest-api)

### MSSQL 外部資料來源

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

參考文件：

- [資料來源 / 外部資料庫 / 外部 MSSQL](https://docs.nocobase.com/handbook/data-source-external-mssql)

### 行動版 V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

參考文件：

- [行動版](https://docs.nocobase.com/handbook/mobile)

### 多對多（陣列）

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

參考文件：

- [多對多（陣列）](https://docs.nocobase.com/handbook/field-m2m-array)

### 認證：企業微信

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

參考文件：

- [認證：企業微信](https://docs.nocobase.com/handbook/wecom/auth)

### 工作流程：日期計算節點

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

參考文件：

- [工作流程：日期計算節點](https://docs.nocobase.com/handbook/workflow-date-calculation)

## 重要變更

### 環境變數 `DB_TIMEZONE` 更改為 `TZ`

新增了 `TZ` 環境變數，用於設定應用程式的時區，預設值為作業系統的時區。舊的 `DB_TIMEZONE` 仍保持相容性，但已棄用。

參考：

- [環境變數 / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
