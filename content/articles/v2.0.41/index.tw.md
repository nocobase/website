---
title: "NocoBase v2.0.41：映射屬性支援自訂欄位"
description: "v2.0.41 版本發行說明"
---

### 🎉 新功能

- **[認證：OIDC]** 映射屬性支援自訂欄位，作者：@chenzhizdt

- **[釘釘]** 釘釘：通知、釘釘內自動登入及使用者同步。作者：@chenzhizdt

### 🚀 改進

- **[ai]** AI 員工與知識庫現在支援上傳更多檔案類型（.xlsx、.xls、.csv、.md、.json）（[#9172](https://github.com/nocobase/nocobase/pull/9172)），作者：@cgyrock

- **[undefined]** 為指南章節與導覽新增阿拉伯語翻譯（[#9141](https://github.com/nocobase/nocobase/pull/9141)），作者：@saraTabbane

### 🐛 錯誤修復

- **[資料來源管理員]** 修正在重新同步外部資料來源時，百分比欄位被重設為數值的問題（[#9178](https://github.com/nocobase/nocobase/pull/9178)），作者：@jiannx

- **[客戶端]**
  - 修正建立記錄後預設值不會生效的問題。（[#9185](https://github.com/nocobase/nocobase/pull/9185)），作者：@gchust

  - 修正「新增分頁」按鈕過於靠近右邊緣的問題（[#9177](https://github.com/nocobase/nocobase/pull/9177)），作者：@zhangzhonghe

- **[部門]** 修正重複同步部門時無法更新部門排序順序的問題（[#9173](https://github.com/nocobase/nocobase/pull/9173)），作者：@2013xile

- **[資料來源：主要]** 修正當集合名稱與資料庫檢視表名稱不同時，從資料庫同步欄位至已連結檢視表的問題（[#9155](https://github.com/nocobase/nocobase/pull/9155)），作者：@2013xile

- **[工作流程：JavaScript]** 修正指令碼在 `node:vm` 模式下執行的安全性問題（[#9084](https://github.com/nocobase/nocobase/pull/9084)），作者：@mytharcher

- **[AI：知識庫]** 修正刪除知識庫文件時向量資料庫未同步的問題。作者：@cgyrock

- **[企業微信]** 修正從企業微信同步部門時缺少部門順序的問題，作者：@2013xile
