---
title: "NocoBase v1.7.13：Logo 容器寬度自適應內容類型"
description: "v1.7.13 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** Logo 容器寬度根據內容類型自適應（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075))，作者：@Cyx649312038

- **[工作流：審批]** 為重新指派清單新增額外欄位選項，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 切換頁面時，子表格中的必填驗證訊息持續顯示 ([#7080](https://github.com/nocobase/nocobase/pull/7080))，作者：@katherinehhh

  - 金額組件從 mask 切換至 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077))，作者：@katherinehhh

  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074))，作者：@katherinehhh

- **[集合欄位：序號]** 修正基於字串的大整數序號計算 ([#7079](https://github.com/nocobase/nocobase/pull/7079))，作者：@mytharcher

- **[備份管理員]** 在 Windows 平台上還原 MySQL 備份時出現未知命令錯誤，作者：@gchust
