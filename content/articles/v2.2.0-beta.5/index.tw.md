---
title: "NocoBase v2.2.0-beta.5：新增環境配置的 schema 版本記錄"
description: "v2.2.0-beta.5 版本發布說明"
---

### 🚀 功能改進

* **[cli]** 新增環境設定的 schema 版本記錄。([#9782](https://github.com/nocobase/nocobase/pull/9782)) @chenos
* **[檔案管理]** 改善 PDF 預覽：跨來源 PDF 檔案現在使用瀏覽器原生預覽，而同來源 PDF 檔案則繼續使用 PDF.js 渲染。([#9796](https://github.com/nocobase/nocobase/pull/9796)) @mytharcher

### 🐛 錯誤修復

* **[client-v2]**
  * 修復區塊轉換為模板後，事件流程設定無法再修改的問題。([#9585](https://github.com/nocobase/nocobase/pull/9585)) @gchust
  * 修復 v2 篩選表單中複選框下拉選項未顯示翻譯文字的問題。([#9792](https://github.com/nocobase/nocobase/pull/9792)) @katherinehhh
  * 修復 v2 表格關聯欄位的標題欄位使用時間、日期或日期時間欄位時，顯示與格式設定不正確的問題。([#9785](https://github.com/nocobase/nocobase/pull/9785)) @katherinehhh
* **[流程引擎]** 修復 AI 建置期間，彈出視窗內當前記錄表單與詳細資料中資料不正確的問題。([#9788](https://github.com/nocobase/nocobase/pull/9788)) @gchust
* **[工作流：自訂操作事件]** 修復動作面板 v2 觸發工作流按鈕在未綁定工作流時，仍顯示成功並發送請求的問題。([#9798](https://github.com/nocobase/nocobase/pull/9798)) @mytharcher
* **[AI 員工]** 修復 AI 員工無法正確填寫子表格資料的問題。([#9801](https://github.com/nocobase/nocobase/pull/9801)) @gchust
