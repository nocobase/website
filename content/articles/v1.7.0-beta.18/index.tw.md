---
title: "NocoBase v1.7.0-beta.18：新增程式碼介面"
description: "v1.7.0-beta.18 版本發行說明"
---

### 🎉 新功能

- **[集合欄位：代碼]** 新增代碼介面，由 @mytharcher 提供

### 🚀 改進

- **[create-nocobase-app]** 將部分依賴升級至最新版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673))，由 @chenos 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 繼承欄位顯示於目前集合欄位指派清單中 ([#6666](https://github.com/nocobase/nocobase/pull/6666))，由 @katherinehhh 提供

  - 設定預設值時變數輸入的樣式問題 ([#6668](https://github.com/nocobase/nocobase/pull/6668))，由 @katherinehhh 提供

- **[建置]** 當外掛依賴某些 AMD 函式庫時，建置輸出不正確 ([#6665](https://github.com/nocobase/nocobase/pull/6665))，由 @gchust 提供

- **[區塊：iframe]** 當 iframe 區塊設定為全高時出現垂直捲軸 ([#6675](https://github.com/nocobase/nocobase/pull/6675))，由 @katherinehhh 提供

- **[存取控制]** 修正將角色模型序列化至快取時拋出的錯誤 ([#6674](https://github.com/nocobase/nocobase/pull/6674))，由 @mytharcher 提供

- **[工作流程]** 修正從 MySQL 拋出的遷移錯誤 ([#6667](https://github.com/nocobase/nocobase/pull/6667))，由 @mytharcher 提供

- **[電子郵件管理員]** 修正無法同步、無主旨顯示及其他小錯誤，由 @jiannx 提供
