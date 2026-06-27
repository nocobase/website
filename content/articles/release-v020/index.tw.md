---
title: "NocoBase 0.20：支援多資料來源"
description: "NocoBase 0.20 引入了對多資料來源的支援、集合管理的調整、非 ID 主鍵、改進的使用者與權限介面，以及新的工作流節點，以增強靈活性與效能。"
---

## 新功能

### 支援多資料來源

新增「[資料來源管理](https://docs.nocobase.com/handbook/data-source-manager)」插件，用於管理資料來源的所有資料表和欄位。資料來源管理插件提供統一的介面來管理資料來源，本身不提供存取資料來源的能力，需要與各種資料來源插件搭配使用。目前已支援的資料來源包括：

* [主資料庫](https://docs.nocobase.com/handbook/data-source-main)：NocoBase 主資料庫，支援 MySQL、PostgreSQL、SQLite 等關聯式資料庫。
* [外部 MySQL 資料來源](https://docs.nocobase.com/handbook/data-source-external-mysql)：存取已有的 MySQL 資料庫作為資料來源。
* [外部 MariaDB 資料來源](https://docs.nocobase.com/handbook/data-source-external-mariadb)：存取已有的 MariaDB 資料庫作為資料來源。
* [外部 PostgreSQL 資料來源](https://docs.nocobase.com/handbook/data-source-external-postgres)：存取已有的 PostgreSQL 資料庫作為資料來源。

此外，還可以擴展更多資料來源，可以是常見類型的資料庫，也可以是提供 API（SDK）的平台。

![資料來源管理](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### 集合管理調整

將原「集合管理」移至「資料來源 > 主資料庫 > 配置」。

![主資料庫配置](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### 支援非 ID 欄位作為主鍵與關聯約束

建立集合時，可以選擇不建立 ID 欄位。

![預定義欄位](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

整數欄位可作為主鍵。

![整數欄位可作為主鍵](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

單行文字欄位也可作為主鍵。

![單行文字欄位也可作為主鍵](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

關聯約束支援選擇其他設定了唯一索引的非主鍵欄位。

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### 拖曳排序調整

新增「排序」類型欄位。排序欄位不再於建立集合時自動產生，需手動建立。

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

選擇欄位作為分組時，會先進行分組再排序。

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

在表格區塊中啟用拖曳排序時，需選擇排序欄位。

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

建立看板區塊時，需選擇排序欄位。

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### 使用者與權限介面調整

新增使用者管理介面，並將使用者與角色管理統一在一個選單下。

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

調整角色管理介面，方便管理使用者關聯的角色、權限、部門等。

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

將原「操作權限」移至「資料來源」頁籤。

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### 部門插件

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

按部門組織使用者，設定層級關係，關聯角色以控制權限，並在工作流程和表達式中將部門作為變數使用。

### 工作流程：審批

審批插件提供了專用的工作流程類型（觸發器）「發起審批」和「審批」節點。結合 NocoBase 獨特的自訂資料表和自訂區塊，可以快速靈活地建立和管理各種審批場景。

審批配置

![審批配置](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

審批流程

![審批流程](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

更多詳情請參閱文件：[工作流程審批](https://docs.nocobase.com/handbook/workflow-approval)

### 工作流程：結束流程節點

此節點在執行時立即結束當前工作流程的執行，並以節點中配置的狀態結束。通常用於特定的邏輯流程控制，在滿足某些邏輯條件後退出當前工作流程，不繼續執行後續處理。可類比為程式語言中的 return 指令，用於退出當前執行的函數。

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

更多詳情請參閱文件：[結束流程節點](https://docs.nocobase.com/handbook/workflow/nodes/end)

### 工作流程：自訂變數節點

可以在工作流程中宣告變數，或為先前宣告的變數賦值，通常用於儲存工作流程中的臨時資料。適用於需要儲存計算結果以供後續在分支外部（如迴圈、並行等）使用的場景。

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

更多詳情請參閱文件：[自訂變數節點](https://docs.nocobase.com/handbook/workflow-variable)

### 工作流程：請求攔截器

請求攔截器插件提供了一種攔截表單操作的機制，攔截事件在對應表單操作提交後、處理前觸發。如果觸發後續流程中執行了「結束流程」節點，或其他節點執行失敗（錯誤或其他未完成執行），則表單操作將被攔截，否則將正常執行預定操作。可用於業務驗證或邏輯檢查，以批准或攔截用戶端提交的新增、更新和刪除操作。

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

更多詳情請參閱文件：[請求攔截器](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### 工作流程：回應訊息節點

回應訊息節點用於在特定類型的工作流程（如請求攔截和表單事件）中，向客戶端提供自訂訊息的回饋。

節點配置

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

提示訊息

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

更多詳情請參閱文件：[回應訊息節點](https://docs.nocobase.com/handbook/workflow-response-message)

## 不相容的變更

### 名稱衝突的 API

在此次核心變更中，部分新版本的 API 與舊版本名稱衝突。這些衝突的舊版本 API 將在此版本中保留，但會統一加上 `_deprecated` 後綴。

| 原始 API                            | 已棄用的 API                      | 新 API                                                                                                      |
| ----------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                  | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                       | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                  | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager                | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

如果您正在使用上述相關 API，有兩種變更方式：

* 簡單替換：將原始 API 替換為帶有 `_deprecated` 後綴的 API，例如將 `useCollection()` 替換為 `useRecord_deprecated()`。
* 根據新文件使用新 API：雖然新 API 的名稱與舊 API 相同，但參數和回傳值有所不同。您需要參考新文件來調整對應的程式碼。

### 其他需要調整的 API

* `registerTemplate()` 改為 `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` 改為 `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` 改為 `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` 改為 `useCollectionManager_deprecated()`
* 使用 `ExtendCollectionsProvider` 擴展集合
* `RecordProvider` 在需要時需明確傳遞 parent 參數

## 變更範例

### 集合模板擴展

#### 定義

先前定義為物件，現在需要改為類別。例如：

之前：

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: '日曆集合',
  order: 2,
  color: 'orange',
  // ...
}
```

現在：

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = '日曆集合';
  order = 2;
  color = 'orange';
}
```

原物件的屬性變為類別成員。

#### 註冊

先前透過 `registerTemplate` 註冊，現在需要透過插件的 `dataSourceManager.addCollectionTemplates` 註冊。例如：

之前：

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

現在：

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### 欄位介面擴展

#### 定義

先前定義為物件，現在需要改為類別。例如：

之前：

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: '附件',
  // ...
}
```

現在：

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = '附件';
  // ...
}
```

原物件的屬性變為類別成員。

#### 註冊

先前透過 `registerField` 註冊，現在需要透過插件的 `dataSourceManager.addFieldInterfaces` 註冊，且無需再次傳遞 `CollectionManagerProvider`。例如：

之前：

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

現在：

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### 欄位介面群組擴展

先前透過 `registerGroup` 註冊，現在需要透過插件的 `dataSourceManager.addFieldInterfaceGroups` 註冊。例如：

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: '基於地圖的幾何',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('基於地圖的幾何'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` 改為 `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### 擴展集合，使用 `ExtendCollectionsProvider` 取代 `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### RecordProvider 的變更

先前未傳遞 parent 屬性時，會自動取得上一個 RecordProvider 的值作為 parent。現在需要明確傳遞 parent，當未傳遞 parent 時，parent 的值將為 undefined。

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

如果沒有歷史包袱，也可以直接使用 CollectionRecordProvider 來取代。

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️RecordProvider 與 CollectionRecordProvider 的差異
>
> * RecordProvider 已棄用，將在未來版本中移除。
> * RecordProvider 攜帶舊的 RecordContext，而 CollectionRecordProvider 則沒有。
