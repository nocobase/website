---
title: "NocoBase 每週更新：支援自訂聚合變數"
description: "本週更新包括：新增事件佇列以處理佇列中的訊息，並支援從外部資料來源按需載入集合。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**本週我們發布了 [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0)，改進了身份驗證、支援自訂統計變數、升級了郵件管理，並優化了工作流程與行動端互動。**

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知問題。主要供測試用戶收集回饋並進一步優化功能。適合希望提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*發布日期：2025-07-09*

#### 🐛 錯誤修復

- **[client]**

  - 表單中關聯欄位集合內的複選框欄位顯示不正確 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修復點擊按鈕無法開啟彈窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[工作流：人工節點]** 修復使用變數時拋出錯誤的問題 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[範本列印]** 為 rootDataType 欄位添加遷移腳本 by @jiannx
- **[工作流：審批]** 修復當無審批人時，已審批分支未執行的問題 by @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*發布日期：2025-07-07*

#### 🐛 錯誤修復

- **[client]**

  - 欄位變更後，依賴此欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修復設定表格列寬無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修復複製按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
  - 修復在配置欄位中儲存一對一關聯時發生的錯誤。([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
- **[undefined]** 修復 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[檔案管理器]**

  - 修復 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
  - 修復因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
- **[公開表單]** 修復公開表單中「僅日期」欄位無法選擇日期的問題。([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[工作流]** 修復在行動裝置上需要多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[工作流：審批]**

  - 修復撤回後關聯未載入的問題 by @mytharcher
  - 因超時移除修補 schema 的事務 by @mytharcher
  - 修復審批被刪除時拋出錯誤的問題 by @mytharcher
  - 修復提交時更新關聯的問題 by @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*發布日期：2025-07-03*

#### 🚀 改進

- **[database]** 支援從環境變數添加連線池選項 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 透過排除 JSON 欄位來改善執行列表的載入效能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 為節點測試添加日誌 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[多應用管理器]** 為多應用管理添加篩選支援 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流：審批]** 將時間軸中的時間改為絕對時間 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 在連線檢視中設定欄位 displayName 無效 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 詳細區塊子表格中的背景顏色樣式問題 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 工作流人工節點 UI 配置：聯動規則無法選擇當前表單變數 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - 關聯欄位預設值覆蓋子表格中的現有資料 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - 引用 $nForm 變數時，Markdown 未即時反映變更 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - 基於 'x-acl-action' 設定的容錯處理 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** 使用「精確日期」變數篩選「僅日期」或「日期時間（無時區）」欄位時的問題 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[工作流]** 修復循環導入拋出錯誤的問題 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[密碼策略]** 支援永久鎖定使用者帳戶 by @2013xile
- **[工作流：子流程]** 修復叢集模式下的問題 by @mytharcher
- **[工作流：審批]**

  - 從篩選器中移除不可篩選的欄位 by @mytharcher
  - 添加表單佈局設定 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*發布日期：2025-07-07*

#### 🎉 新功能

- **[server]** 添加事件佇列以處理佇列中的訊息 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 改進

- **[工作流]** 將通用元件移至基礎插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 欄位變更後，依賴此欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修復設定表格列寬無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修復複製按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
  - 修復在配置欄位中儲存一對一關聯時發生的錯誤。([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
- **[undefined]** 修復 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[日曆]** 在日曆區塊中將預設週起始日設為「星期一」 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh
- **[工作流]** 修復在行動裝置上需要多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[檔案管理器]**

  - 修復因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
  - 修復 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
- **[工作流：人工節點]** 修復錯誤導入變數的問題 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher
- **[公開表單]** 修復公開表單中「僅日期」欄位無法選擇日期的問題。([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[工作流：審批]**

  - 因超時移除修補 schema 的事務 by @mytharcher
  - 修復撤回後關聯未載入的問題 by @mytharcher
  - 修復審批被刪除時拋出錯誤的問題 by @mytharcher
  - 修復提交時更新關聯的問題 by @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*發布日期：2025-07-03*

#### 🎉 新功能

- **[client]**

  - 支援外部資料來源 SQL Server 的 BIT 欄位。([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
  - 支援自訂聚合變數 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
    參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** 支援商業授權 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[資料來源管理器]** ✨ 支援從外部資料來源按需載入資料表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[授權設定]** 添加授權設定並在下載插件前驗證授權 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx
- **[身份驗證]** 支援「忘記密碼」功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  參考：[忘記密碼](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[操作：批次更新]** 支援在更新區塊資料後重新整理其他資料區塊中的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe
- **[資料來源：外部 SQL Server]**

  - 為外部資料來源添加 SQL Server BIT 欄位支援 by @aaaaaajie
  - 支援從外部資料來源按需載入資料表 by @aaaaaajie
- **[自訂變數]** 支援自訂聚合變數 by @zhangzhonghe
  參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[郵件管理器]**

  - 支援刪除郵件 by @jiannx
  - 支援郵件同步間隔設定 by @jiannx
  - 支援大量發送 by @jiannx

#### 🚀 改進

- **[client]**

  - 支援透過掃描 QR Code 填寫輸入欄位 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 根據裝置類型而非頁面寬度決定是否顯示行動端元件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe
  - 支援 Markdown 區塊內容的本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 根據裝置類型而非頁面寬度決定是否顯示行動端佈局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe
- **[非同步任務管理器]** 改善匯出期間任務建立的效能 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[行動端]** 適配行動裝置的通知彈窗樣式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[郵件管理器]**

  - 支援在同一主題內分別回覆和轉發郵件 by @jiannx
  - schema 實現後郵件發送並支援 AI by @jiannx
  - 支援彈窗中的預設發送值，支援收件人模糊搜尋，並修復問題 by @jiannx
  - 完成大量發送功能 by @jiannx
  - 功能改進與問題修復 by @jiannx

#### 🐛 錯誤修復

- **[cli]**

  - 安裝插件時調整授權複製 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
  - 下載插件時出現未定義錯誤 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
- **[client]**

  - 清除徽章值後，UI 未更新 ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe
  - 點擊篩選按鈕時出錯 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
  - 修復目前使用者資料為空的問題 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 透過彈窗連結開啟的頁面內容顯示不正確 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
  - 將其他 props 傳遞給 Variable.Input 元件。([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - 如果包含關聯欄位，另存為範本操作將失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
- **[database]** 使字串欄位的 eq 運算子與數字類型相容 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[build]** 修復 plugin-workflow-javascript 中的客戶端執行時錯誤，process 未定義錯誤 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[資料來源管理器]** 修復按需載入資料來源與資料表前綴配置組合導致「ConnectionManager.getConnection was called after the connection manager was closed」錯誤的問題。([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
- **[plugin-service-platform]** 調整授權文字 by @jiannx
- **[自訂變數]** 清除徽章值後，UI 未更新 by @zhangzhonghe
- **[郵件管理器]**

  - 附件不顯示 by @jiannx
  - 郵件刪除錯誤 by @jiannx
  - 郵件刪除失敗 by @jiannx
  - 設定彈窗不顯示 by @jiannx
  - 回覆抽屜不可見 by @jiannx
  - 收件人模糊搜尋支援關聯欄位 by @jiannx
  - 為 mailmessagelabelsMailmessages 添加「id」欄位 by @jiannx
  - 郵件模糊搜尋以建立唯一篩選器 by @jiannx
  - 表格「mailmessagelabels_mailmessages」的多個主鍵 by @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*發布日期：2025-07-03*

#### 🚀 改進

- **[database]** 支援從環境變數添加連線池選項 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 透過排除 JSON 欄位來改善執行列表的載入效能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 為節點測試添加日誌 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[多應用管理器]** 為多應用管理添加篩選支援 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流：審批]** 將時間軸中的時間改為絕對時間 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 引用 $nForm 變數時，Markdown 未即時反映變更 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
  - 詳細區塊子表格中的背景顏色樣式問題 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 工作流人工節點 UI 配置：聯動規則無法選擇當前表單變數 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
  - 在連線檢視中設定欄位 displayName 無效 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 關聯欄位預設值覆蓋子表格中的現有資料 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
  - 基於 'x-acl-action' 設定的容錯處理 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
- **[utils]** 使用「精確日期」變數篩選「僅日期」或「日期時間（無時區）」欄位時的問題 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[工作流]** 修復循環導入拋出錯誤的問題 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[密碼策略]** 支援永久鎖定使用者帳戶 by @2013xile
- **[工作流：子流程]** 修復叢集模式下的問題 by @mytharcher
- **[工作流：審批]**

  - 從篩選器中移除不可篩選的欄位 by @mytharcher
  - 添加表單佈局設定 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*發布日期：2025-07-07*

#### 🎉 新功能

- **[server]** 添加事件佇列以處理佇列中的訊息 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) by @mytharcher

#### 🚀 改進

- **[工作流]** 將通用元件移至基礎插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 欄位變更後，依賴此欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe
  - 修復設定表格列寬無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe
  - 修復在配置欄位中儲存一對一關聯時發生的錯誤。([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie
  - 修復複製按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe
- **[undefined]** 修復 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher
- **[檔案管理器]**

  - 修復因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher
  - 修復 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher
- **[公開表單]** 修復公開表單中「僅日期」欄位無法選擇日期的問題。([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh
- **[日曆]** 在日曆區塊中將預設週起始日設為「星期一」 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) by @katherinehhh
- **[工作流：人工節點]** 修復錯誤導入變數的問題 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) by @mytharcher
- **[工作流]** 修復在行動裝置上需要多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe
- **[工作流：審批]**

  - 修復提交時更新關聯的問題 by @mytharcher
  - 修復審批被刪除時拋出錯誤的問題 by @mytharcher
  - 修復撤回後關聯未載入的問題 by @mytharcher
- **[郵件管理器]**

  - 選取行後，設定「已讀」和「未讀」 by @jiannx
  - 子郵件內容無法被篩選 by @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*發布日期：2025-07-04*

#### 🐛 錯誤修復

- **[工作流：審批]** 因超時移除修補 schema 的事務 by @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*發布日期：2025-07-03*

#### 🚀 改進

- **[郵件管理器]** 支援在同一主題內分別回覆和轉發郵件 by @jiannx

#### 🐛 錯誤修復

- **[client]**

  - 詳細區塊子表格中的背景顏色樣式問題 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh
  - 引用 $nForm 變數時，Markdown 未即時反映變更 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh
- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[資料來源管理器]** 修復按需載入資料來源與資料表前綴配置組合導致「ConnectionManager.getConnection was called after the connection manager was closed」錯誤的問題。([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
