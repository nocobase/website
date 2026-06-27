---
title: "NocoBase v1.7.10：錯誤修復"
description: "v1.7.10 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復連動規則導致無限循環的問題 ([#7050](https://github.com/nocobase/nocobase/pull/7050))，作者 @zhangzhonghe

  - 修復：在 APIClient 中，當處理器可能為 undefined 時，使用可選鏈結安全地拒絕請求 ([#7054](https://github.com/nocobase/nocobase/pull/7054))，作者 @sheldon66

  - 在二級彈出表單中配置欄位時自動關閉問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052))，作者 @katherinehhh

- **[資料視覺化]** 圖表篩選器中日期區間欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051))，作者 @katherinehhh

- **[API 文件]** 非 NocoBase 官方外掛無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045))，作者 @chenzhizdt

- **[動作：匯入記錄]** 修正 xlsx 匯入，限制文字區域欄位不接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049))，作者 @aaaaaajie
