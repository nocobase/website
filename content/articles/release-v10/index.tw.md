---
title: "重大更新！NocoBase V1.0 正式發布"
description: "探索 NocoBase V1.0 的重大更新，包括新功能、插件以及顯著的性能提升。了解這個里程碑版本如何增強開發者的穩定性、安全性和功能性。獲取關於新主題編輯器、數據可視化改進以及完整更新日誌的詳細見解。了解升級流程，特別是如果您使用 SSO 插件，並探索這些變更對您項目的影響。"
---

## V1.0 里程碑

歷經 3 年開發，NocoBase 迎來了首個主要版本升級，從 0.x 版本過渡到 1.0。這是一個重要的里程碑。

* 在 0.x 階段：核心 API 和功能經歷了快速變更，每個新版本都可能引入不相容的變更。
* 在 1.x 階段：核心 API 已趨於穩定，NocoBase 將專注於在維持穩定性的同時，新增外掛程式、最佳化安全性並提升效能。

## 新功能

* 主題編輯器可設定頁面與彈出視窗的內距、區塊間距以及區塊圓角。
* 新增區塊時，資料表支援篩選。
* 關聯記錄支援排序。
* 改善資料視覺化的互動性。
* 支援在行動裝置上新增圖表區塊。
* 圖表篩選區塊支援設定欄位資料範圍。
* 新增更多變數，[詳情請見](https://docs.nocobase.com/handbook/ui/variables)。
* 可在彈出視窗中新增來自任何資料表的區塊。
* 工作流程：「操作後事件」可由關聯區塊內的按鈕觸發。
* 當彈出視窗內的資料變更時，自動重新整理父容器中的資料。
* 表格區塊效能顯著提升。
* 測試覆蓋率大幅增加。

## 新外掛程式

* 欄位：Markdown (Vditor)
  * 用於儲存 Markdown 並使用 Vditor 編輯器渲染，支援常見的 Markdown 語法，並支援上傳圖片、錄音等。同時允許即時渲染，所見即所得。
* 評論
  * 提供評論資料表範本和區塊，可為任何資料表新增評論功能。

## 完整更新日誌

* feat(plugin-workflow): 同步後重新整理列表 #4177
* feat(plugin-workflow): 在標題上以工具提示顯示工作流程金鑰 #4178
* test(plugin-workflow): 新增測試案例 #4199
* chore: api 快取控制標頭 #4203
* feat: 從本地載入 vditor 依賴 #4190
* test: 輸入數字分隔符測試 #4204
* fix: 數字欄位應支援分隔符設定 #4197
* fix(plugin-workflow): 優化體驗 #4195
* chore: 最佳化匯入與匯出的警告用語 #4196
* refactor: 外部資料來源資料表管理器 #4193
* fix: 環境變數錯誤 #4191
* fix: 關聯欄位的空值運算子 #4189
* chore: 新增 e2e 測試 #4184
* fix: vditor 版本 #4183
* refactor: 表單資料範本地區設定改善 #4188
* test: 新增自動化測試 #4098
* chore: 資料來源日誌實例 #4181
* chore: 在關聯儲存庫中獲取資料庫實例 #4179
* chore: 為變數新增 e2e 測試 #4152
* chore: 定義資料表除錯訊息 #4176
* chore: 檢視資料表中的不支援欄位 #4155
* feat: 新增外掛程式 plugin-field-markdown-vditor #4065
* fix: 批次編輯表單 acl 操作錯誤 #4166
* fix: 在關聯欄位中自動建立 uuid 外鍵 #4160
* fix(plugin-fm): 修正混淆的大小限制提示 #4153
* fix(users): 改善 users:updateProfile #4162
* fix(client): 獲取 api url #4161
* feat: 移除外掛程式 plugin-ui-routes-storage #4140
* fix: 鎖定 cytoscape 版本 #4158
* refactor: 資料表範本支援 presetFieldsDisabled #4159
* fix: 網格結構描述 #4157
* 客戶端單元測試 #4150
* fix: 更新多對多關聯，目標鍵非主鍵 #4146
* refactor: 表單資料範本地區設定改善 #4148
* fix(database): 陣列欄位中的欄位名稱 #4110
* test: 操作後重新整理 e2e 測試 #4147
* fix(custom-request): 支援設定內容類型 #4144
* chore: 棄用表單中的目前記錄變數 #4063
* feat(Theme): 新增一些 tokens #4137
* fix(client): 修正一些警告 #4143
* style: tableActionColumn 樣式改善 #4138
* fix: actionBar 樣式改善 #4123
* chore: 刪除衝突時的警告訊息 #4141
* fix(plugin-workflow-manual): 允許在無受指派者時通過節點 #4139
* chore: 資料來源管理器 api #4124
* fix(plugin-workflow-manual): 修正受指派者解析錯誤 #4125
* fix: 在資料表中載入關聯欄位 #4122
* perf: 移除所有 Skeleton 動畫 #4113
* test: 新增 e2e 測試 #4121
* chore(data-vi): 調整 api #4116
* fix: scheduleEventTrigger #4114
* feat(plugin-workflow): 為間隔排程新增檢查器 #4119
* feat: 為 DataBlockInitializer 新增 filterOtherRecordsCollection #4117
* refactor: 最佳化 CollectionField #4111
* fix: 改善排序欄位遷移 #4112
* fix: 欄位元件 #4102
* fix: 關聯選擇支援新增模式 #4108
* fix: createdBy 與 updatedBy 目標選項 #4109
* fix(linkage-rule): 連結規則支援空條件 #4103
* fix: 新增 SanitizedCollectionProvider #4100
* fix: 樹狀資料表目標錯誤 #4105
* fix: 新增 ClearCollectionFieldContext #4101
* feat: 改善表單區塊 #4099
* chore: 遷移可排序選項至排序欄位 #4011
* feat: 在 appends 中支援排序選項 #4056
* feat(data-vi): 允許圓餅圖接受負數，修正 T-4075 #4094
* fix(data-vi): 精確度轉換後數字變為字串 #4092
* fix: 編碼 url 參數 #4055
* test(plugin-workflow): 為重複觸發排程工作流程新增測試案例 #3817
* perf(LinkageRules): 解決延遲問題 #4090
* fix(subTable): 不應顯示「允許新增資料」選項 #4086
* fix: 遺失的欄位 #4083
* fix: 表格選擇分頁錯誤 #4078
* fix: 設定區塊資料範圍時重設頁面 #4081
* fix: 自訂請求角色列表 #4074
* fix: 解析 ISO 週 #4068
* fix(sourceId): 避免錯誤 #4077
* fix(sql-collection): 設定欄位時無法選擇介面 #4079
* fix: 使用來源欄位載入 #4075
* fix: 操作連結規則的刪除未即時生效 #4058
* fix(core): 修正公式評估器中的四捨五入錯誤 #4070
* test: 為資料載入模式新增 e2e 測試 #4069
* fix(filterForm): 避免重複名稱 #4071
* chore: 最佳化區塊標題 #4040
* fix: 在檢視中同步預設值 #4067
* fix(defaultValue): 修正重新整理頁面後預設值消失的問題 #4066
* refactor: 甘特圖區塊 #4059
* fix: 子表格大欄位應支援變數預設值 #4062
* chore(Theme): 將緊湊主題的預設字型大小設為 16 #4064
* test: 為操作新增 e2e 測試 #4053
* fix(variable): 遺失的變數與無效的翻譯 #4054
* test: 新增後端單元測試 #4000
* fix: 改善卡片項目 #4036
* chore(acl): 停用註冊關聯欄位操作 #4014
* fix(variable): 修正父記錄變數在資料範圍中報錯 #4039
* test(e2e): 新增欄位值斷言 #4034
* feat(Variable): 新增一個新變數 #4025
* feat: 使用專業版外掛程式執行 e2e 測試 #3890
* fix: 錯誤 #4038
* fix: 駝峰式欄位名稱的陣列運算子 #4032
* fix: scopeKeyOptions 應即時獲取 #4029
* fix(addText): 應使用 FormItemSchemaToolbar 而非 BlockSchema… #3963
* feat: 在資料來源管理器中註冊一次性鉤子 #4024
* fix: 程式碼片段 #4030
* fix: vitest 單一錯誤 #4031
* feat(data-vi): 改善使用者體驗 (參考 pr) #4013
* test: 新增前端單元測試 #3991
* feat: 在彈出視窗中支援「其他」選項 #4015
* fix(collection-manager): 覆蓋欄位後未重新整理 #4022
* chore: 新增匯出與匯入警告 #4027
* refactor: 第三方資料來源支援排序欄位分組排序編輯 #4023
* fix(plugin-acl): pm.acl.roles 程式碼片段 #4026
* test: 關聯名稱區塊 e2e 測試 #4021
* fix: 獲取 api url #4020
* fix(Sub-details): 欄位值為空時不顯示初始化按鈕 #4019
* fix: 初始化器使用 useAassociationName #4018
* fix(auth): 使用子目錄部署時的 cas 登入錯誤 #4017
* fix(TreeTable): 新增子項錯誤 #4008
* fix: 移除活動欄位不應清除值 #4012
* fix(plugin-acl): 資料來源角色程式碼片段 #4016
* fix: 全選後，批次更新提示未選資料 #4010
* refactor: 樹狀表格預設不啟用 #4001
* feat(plugin-workflow-action-trigger): 支援關聯操作觸發 #4007
* 更新 application.ts #4006
* fix: 標籤欄位設定 #4009
* fix(users): 因錯誤檢查國外電話號碼而移除電話驗證 #4005
* fix: 關聯區塊操作權限驗證失敗 #3994
* refactor: 表格排序的欄位無法選擇帶有 scopekey 的排序欄位 #3984
* fix(Form): 無效的 parentRecord #3998
* fix(plugin-workflow): 調整地區設定 #3993
* fix: 子表格支援 allowSelectExistingRecord 設定 #4004
* fix(auth): 直接輸入網址時找不到註冊頁面 #4002
* chore(database): 當欄位為唯一且值為空字串時設定為 null #3997
* chore(gateway): 使用原因訊息報告錯誤 #3999
* chore(error-handler): 顯示導致錯誤的訊息 #3996
* fix: 使用駝峰式資料表名稱還原 #3995
* refactor(plugin-workflow): 調整註解 #3990
* fix: 甘特圖折疊與展開 #3982
* fix(BulkForm): 切換至「變更為」時應為必填 #3965
* fix: 移動操作 #3985
* refactor: 排序欄位不應有 defaultValue #3986
* chore: 更新外掛程式的類別名稱 #3981
* feat(plugin-workflow-sync): 啟用多應用共享資料表時新增同步 #3969
* fix(localization): 首次進入時地區設定不正確 #3968
* chore: 調整並新增 api 註解 #3951
* refactor: 選擇選項配置 #3964
* fix(GridCard): 設定每行顯示的欄位數 #3960
* refactor: 僅數值公式欄位支援格式 #3962
* chore(plugin-workflow): 新增註解 #3959
* chore: 移除舊版公式外掛程式 #3939
* fix(LinkageRules): 應立即生效 #3958
* fix(Picker): 應顯示「允許新增資料」選項 #3957
* fix(connect-data-blocks): 應立即顯示在下拉選單中 #3953
* fix: 左側選單標題修改 #3956
* fix: 範本列表提供者錯誤 #3950
* refactor: nanoid 與 uuid 自動填入 #3955
* feat: 在 ui schema 儲存庫中獲取 getParentJsonSchema #3690
* fix: 使用 sequelize 驗證儲存 uuid 與 nano id 欄位值 #3952
* fix: throughCollection 支援模糊搜尋 #3949
* fix: getSourceKeyByAssocation #3947
* fix(RichText): 統一風格 #3946
* fix(connectDataBlocks): 應為 Grid 新增 FilterBlockProvider #3944
* chore: 為 Schema 新增 appVersion #3936
* fix: collectionFieldInterfaceSelect #3945
* fix: 修正範本的 sourceId #3941
* fix(collection manager): 資料表管理器 primarykey 與 nanoid 與 uuid 支援索引設定 #3943
* fix(plugin-formula-field): 修正元件上下文 #3937
* fix: nanoid availableTypes #3942
* fix: 自動產生預設值 #3940
* fix: 公式欄位計算錯誤 #3938
* fix: 公式欄位支援格式 #3928
* refactor: 統一標籤頁初始化器命名 #3932
* fix: 為 Lightbox 覆蓋層樣式新增 zIndex #3934
* fix(Table): 修正關聯欄位內容未顯示的問題 #3930
* fix(evaluators): 修正陣列扁平化 #3931
* refactor: 主要資料來源檢視資料表支援 filterTargetKey #3818
* fix: 公式欄位計算錯誤 #3929
* fix: 使用來源選項載入檢視資料表的 belongs to 關聯 #3912
* fix: 編輯表單未變更時關閉模態框不應出現未儲存警告 #3920
* fix(Collapse): 修正 chinaRegions 的錯誤 #3925
* fix: 數字顯示格式 #3924
* fix(defaultValue): 設定預設值時應立即生效 #3923
* feat: 操作支援 refreshDataBlockRequest 配置 #3882
* refactor: formBlockProvider 與 detailBlockProvider #3898
* feat(data-vi): 允許為行動客戶端新增圖表 #3922
* chore: 新增 API 註解 #3919
* fix: 修正 Pagination #3921
* test(plugin-error-handler): 中介軟體 #3909
* fix: 更新外掛程式 #3895
* fix: 甘特圖區塊分頁 #3918
* fix: source id 為 null #3917
* fix(Table): 修正 Pagination #3916
* fix: 獲取正確的 sourceId #3897
* fix(DataScope): 修正儲存後未立即生效的問題 #3910
* fix: 選擇欄位選項 initialValue #3911
* fix: 外部連結點擊 #3908
* fix(inputNumber): inputNumber 精度遺失 #3902
* feat(plugin-workflow-action-trigger): 新增全域操作事件 #3883
* docs: 新增 api 註解 #3868
* fix: vitest 配置錯誤 #3907
* fix: 表格固定錯誤 #3901
* fix: 列表資料未定義錯誤 #3905
* fix: 延遲渲染錯誤 #3886
* fix: 排序參數遺失 #3906
* refactor: 將 useProps 變更為 x-use-component-props #3853
* fix(withDynamicSchemaProps): 將深層合併變更為淺層合併 #3899
* fix: 歷史區塊新增列印按鈕，點擊列印按鈕報錯 #3900
* fix: tar 錯誤 #3891
* chore: 將 bigInt 作為字串類型回傳 #3887
* feat(data-vi): 圖表篩選欄位的資料範圍 #3894
* feat: 調整新增選單 #3884
* fix(plugin-custom-request): 修正編輯按鈕對話框 #3893
* fix: 設定資料範圍時遺失 fieldNames #3892
* fix: 開發環境新增生產外掛程式時的依賴檢查錯誤 #3848
* fix: 工作流程標籤頁不存在 #3889
* fix: 關聯欄位支援資料範圍連結 #3888
* fix: templateBlockProvider 支援關聯欄位附加 #3866
* chore: 主要資料來源 api #3880
* feat: 執行帶覆蓋率的 vitest #3802
* fix: 避免重複選單鍵 #3885
* fix(data-vi): 雙軸圖表顯示異常 #3881
* fix: 當篩選條件為空物件時拒絕更新 #3777
* chore: 使用主鍵屬性更新欄位 #3852
* refactor: uuid 與 nanoid 支援預設值配置 #3830
* feat: 表格效能 #3791
* fix: setFormValueChanged 未定義 #3879
* fix(client): 修正篩選動態元件中的 diabled #3874
* fix(plugin-workflow-parallel): 修正地區設定 #3876
* fix(formula-field): 公式欄位設定表單值變更 #3873
* fix: formBlockProvider 區塊顯示 #3877
* refactor(plugin-workflow): 變更為 #3871
* fix: 看板卡片模態框顯示異常 #3863
* fix: filterTargetKey 僅支援檢視資料表 #3872

## 外掛程式變更

以下外掛程式不再以開源版本提供（已在生產環境中使用這些外掛程式的使用者，請聯絡我們進行升級）：

* @nocobase/plugin-auth-cas：透過 CAS 協定進行身分驗證。
* @nocobase/plugin-auth-odic：透過 OIDC (OpenID Connect) 協定進行身分驗證。
* @nocobase/plugin-auth-saml：透過 SAML 2.0 進行身分驗證。

以下外掛程式已棄用，將在未來版本中移除：

* @nocobase/plugin-audit-logs：已棄用，暫時不移除，新版本中不會安裝。
* @nocobase/plugin-snapshot-field：已棄用，暫時不移除，新版本中不會安裝。
* @nocobase/plugin-charts：請改用 @nocobase/plugin-data-visualization。
* @nocobase/plugin-excel-formula-field：請改用 @nocobase/plugin-field-formula。
* @nocobase/plugin-math-formula-field：請改用 @nocobase/plugin-field-formula。
* @nocobase/plugin-ui-routes-storage：已棄用，前端路由可直接在前端擴展。

完整的外掛程式列表，請參閱：[https://www.nocobase.com/plugins.html](https://www.nocobase.com/plugins.html)

## 程式碼註解

為提供更好的開發體驗，我們為一些特殊的 API 新增了註解：

* `@internal`：通常用於標識內部實作細節或非設計為公開使用的方法，但存在於程式碼內部使用。
* `@experimental`：用於標識實驗性功能或 API。這些 API 仍處於開發和測試階段，可能會發生重大變更，甚至在未來版本中被移除或取代。
* `@deprecated`：用於標識程式碼中已棄用的功能、方法或 API。雖然它們仍然可用，但可能在未來版本中被移除，或者有更好的替代方案可用。

## 授權協議

NocoBase 採用 AGPL-3.0 和商業授權雙重授權。詳情請參閱 [NocoBase 授權協議](https://cn.nocobase.com/agreement-cn.html)。

## 升級指南

* 升級前務必備份您的資料庫！務必備份您的資料庫！務必備份您的資料庫！
* 您也可以備份整個專案程式碼。

由於 Auth: CAS、Auth: OIDC、Auth: SAML 三個 SSO 外掛程式已從開源程式碼中移除，升級將分為兩種情況。

### 如果您未使用 SSO 外掛程式

請依照[常規方法](https://docs.nocobase.com/welcome/getting-started/upgrading)進行升級。

### 如果您正在使用 SSO 外掛程式

請依照以下步驟進行升級：

#### 1. 升級應用程式

請參考 [NocoBase 升級概述](https://docs.nocobase.com/welcome/getting-started/upgrading)，將 NocoBase 升級至最新版本。

如果您之前啟用了 CAS、OIDC、SAML 外掛程式，在升級過程中會看到以下提示：

命令列升級終端提示：

![20240428212151](https://static-docs.nocobase.com/20240428212151.png)

Docker 版本介面提示：

![20240428194926](https://static-docs.nocobase.com/20240428194926.png)

#### 2. 移除外掛程式或取得外掛程式 1.0 版本？

***如果您選擇移除外掛程式並繼續升級：***

根據提示移除外掛程式

```
# 主應用程式
yarn pm remove cas oidc saml --force
# 如果是子應用程式，請加上 --app 參數
yarn pm remove cas oidc saml --force --app=sub-app1
```

繼續升級

```
yarn nocobase upgrade
```

***如果您選擇將外掛程式更新至 1.0 版本***

請聯絡 NocoBase 團隊以取得外掛程式的 1.0 版本，並繼續升級。

#### 3. CAS、OIDC、SAML 外掛程式升級流程

此時，應用程式介面已無法存取，因此我們需要手動升級。

1. 使用您的帳戶登入 [service.nocobase.com](https://service.nocobase.com/) 下載最新版本的外掛程式。
2. 將外掛程式解壓縮至指定目錄
   * CAS 外掛程式解壓縮至 `./storage/plugins/@nocobase/plugin-auth-cas`
   * OIDC 外掛程式解壓縮至 `./storage/plugins/@nocobase/plugin-auth-oidc`
   * SAML 外掛程式解壓縮至 `./storage/plugins/@nocobase/plugin-auth-saml`
3. 升級應用程式
   * 對於 Docker 版本，只需重新啟動容器
   * 對於原始碼或 create-nocobase-app 版本
     1. 下載依賴 `yarn install`
     2. 執行升級命令 `yarn nocobase upgrade`
     3. 重新啟動應用程式
