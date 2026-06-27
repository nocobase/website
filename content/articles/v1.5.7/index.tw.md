---
title: "NocoBase v1.5.7：移除 SSE 連線重試的主控台錯誤記錄"
description: "v1.5.7 版本發布說明"
---

### 🚀 改進

- **[通知：應用程式內訊息]** 移除 SSE 連線重試時的 console 錯誤記錄。([#6205](https://github.com/nocobase/nocobase/pull/6205))，作者：@sheldon66

### 🐛 錯誤修復

- **[客戶端]**
  - 關聯資料快速新增操作模態框中缺少拖曳設定 ([#6201](https://github.com/nocobase/nocobase/pull/6201))，作者：@katherinehhh

  - 高精度數字格式未套用的問題 ([#6202](https://github.com/nocobase/nocobase/pull/6202))，作者：@katherinehhh

  - 修正表單中清除關聯欄位後，提交表單時該欄位值實際上未被清除的問題 ([#5540](https://github.com/nocobase/nocobase/pull/5540))，作者：@zhangzhonghe

  - 表單提交後區塊未重新整理 ([#6206](https://github.com/nocobase/nocobase/pull/6206))，作者：@zhangzhonghe

  - 關聯欄位重置後，提交時連結欄位值仍持續存在的問題 ([#6207](https://github.com/nocobase/nocobase/pull/6207))，作者：@katherinehhh

  - 表格中無更新權限的資料列仍顯示更新操作按鈕 ([#6204](https://github.com/nocobase/nocobase/pull/6204))，作者：@katherinehhh

- **[集合欄位：排序]** 修正排序欄位類型未在外部資料源中註冊的問題 ([#6212](https://github.com/nocobase/nocobase/pull/6212))，作者：@mytharcher

- **[驗證]** WebSocket 驗證問題 ([#6209](https://github.com/nocobase/nocobase/pull/6209))，作者：@2013xile

- **[集合欄位：附件(URL)]** 修正 hook 中已棄用的請求 URL，作者：@mytharcher
