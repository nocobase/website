---
title: "NocoBase 1.0.0-alpha.15：新插件與改進的「配置操作」互動"
description: "NocoBase v1.0.0-alpha.15 引入了 LDAP 認證、自定義操作觸發器、甘特圖和看板支援等功能。此更新還改進了「配置操作」互動，並修復了多項錯誤以提升平台效能。"
---

## 新功能

### 認證插件：LDAP 認證

支援使用者透過 LDAP 伺服器憑證登入 NocoBase。更多資訊請參閱[認證：LDAP](https://docs.nocobase.com/handbook/auth-ldap)文件。

![](https://static-docs.nocobase.com/202405191513995.png)

### 工作流插件：自訂操作觸發器

當 CRUD 操作無法滿足您的需求時，您可以使用工作流的自訂操作觸發器來編排自己的資料處理邏輯。更多資訊請參閱[工作流 / 自訂操作觸發器](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)文件。

![](https://static-docs.nocobase.com/202405191515770.png)

### 表格區塊支援固定欄位

![](https://static-docs.nocobase.com/202405191512587.png)

### 支援在彈出視窗中新增甘特圖與看板

![](https://static-docs.nocobase.com/202405191512280.png)

### 詳情區塊支援聯動規則

允許設定欄位的顯示與隱藏屬性。

![](https://static-docs.nocobase.com/202405191513781.png)

### 工作流 HTTP 請求節點支援 `application/www-x-form-urlencoded` 格式資料

![](https://static-docs.nocobase.com/202405191514472.png)

### 工作流 HTTP 請求節點輸入框支援字串模板

![](https://static-docs.nocobase.com/202405191514748.png)

### 開發用插件範例

檢視[插件範例](https://docs.nocobase.com/plugin-samples)文件。

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## 改進

### 改進「配置操作」互動

所有操作都顯示在下拉選單的單一列表中，不再區分「啟用操作」與「自訂」。

* 只能新增一次的操作：此類操作保留開關效果。
* 可重複新增的操作：此類操作不再使用開關互動，可多次新增。
* 合併相似操作
  * 「新增」與「新增記錄」
  * 「提交」與「儲存記錄」

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### 統一工作流 HTTP 請求節點結果的資料格式：

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### 重新組織工作流手冊

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## 修復

### 日誌插件現在僅顯示當前應用程式的日誌

當有多個應用程式時：

* 日誌插件僅顯示當前應用程式的日誌檔案列表。
* 工作流與自訂請求資料夾放置在應用程式資料夾內。

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

其他主要修復包括：

* 圖表在按日期欄位查詢彙總資料時，未將日期欄位轉換為用戶端時區。[fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* 視圖重新整理問題，與資料庫同步後需退出並重新進入視圖。[fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* 樹形表格區塊在新增子節點時未摺疊所有節點。[fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* 資料表標題欄位設定無效。[fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Bigint 欄位在唯讀模式下遺失精度。[fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* 停止子應用程式後，未關閉開啟的日誌檔案。[fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* 工作流彙總節點關聯資料模型選擇錯誤。[fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* 工作流 HTTP 請求節點在同步模式下，「忽略錯誤」選項無效。[fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* 工作流 HTTP 請求節點值輸入框溢出。[fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* 特殊字元導致工作流 HTTP 請求節點掛起。[fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* 修正主題編輯器中設定 marginBlock 影響表單欄位間距的問題。[fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* 修正點擊頁面右上角「授權」選項時重新導向錯誤的問題。[PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* 修正將篩選表單儲存為區塊模板時，欄位運算子無效的問題。[PR #4390](https://github.com/nocobase/nocobase/pull/4390)
