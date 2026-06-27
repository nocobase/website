---
title: "NocoBase 0.21：圖表與工作流程的多資料來源支援"
description: "NocoBase 0.21 引入了圖表和工作流程的多資料來源支援，優化了工作流程觸發事件，並新增了多種欄位類型，提升了靈活性和效能。"
---

## 公告

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## 新功能

### 圖表支援多資料來源

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[更多資訊，請參閱 [資料視覺化] 文件](https://docs.nocobase.com/handbook/data-visualization)

### 工作流程支援多資料來源

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[更多資訊，請參閱 [工作流程] 文件](https://docs.nocobase.com/handbook/workflow)

### 工作流程觸發事件最佳化

觸發器名稱變更：

| 原始名稱                 | 變更為            |
| ----------------------------- | --------------------- |
| 表單事件、操作事件 | 操作後事件 |
| 排程任務               | 排程事件      |
| 請求攔截器          | 操作前事件  |
| 審核                      | 審核事件       |

以下事件的觸發模式配置已強化：

#### 操作後事件

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[更多資訊，請參閱 [工作流程 - 操作後事件] 文件](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### 操作前事件

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[更多資訊，請參閱 [工作流程 - 操作前事件] 文件](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### 自訂品牌外掛

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[更多資訊，請參閱 [自訂品牌] 文件](https://docs.nocobase.com/handbook/custom-brand)

### 支援 nanoid 欄位

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[更多資訊，請參閱 [nanoid 欄位] 文件](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### 支援 uuid 欄位

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[更多資訊，請參閱 [uuid 欄位] 文件](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### 支援 unix 時間戳欄位

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[更多資訊，請參閱 [Unix 時間戳欄位] 文件](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### 數字類型欄位支援格式化配置

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[更多資訊，請參閱 [欄位配置 / 特定屬性設定 / 數字元件] 文件](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### 支援子路徑部署

新增 `APP_PUBLIC_PATH` 環境變數以支援子路徑部署。例如：

```
APP_PUBLIC_PATH=/nocobase/
```

透過網址 [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/) 在本機存取

Nginx 代理範例：

```
server {
    listen 80;
    server_name your_domain.com;  # 將 your_domain.com 替換為您的網域

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

現在，您可以透過 http://your\_domain.com/nocobase/ 存取。

### 區塊效能最佳化

#### 支援骨架螢幕效果

區塊卡片

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

看板卡片

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

表格儲存格

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### 區塊配置的分散式處理

先前，整個頁面上任何 Schema 的變更都會導致整個頁面重新渲染。現在，每個區塊的 Schema 都是獨立的。

```
<SchemaComponent distributed schema={} />
```

Grid 元件也支援分散式處理。

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## 不相容的變更

### UI Schema 的各種 useProps 已取代為 x-use-decorator-props 和 x-use-component-props

x-use-decorator-props 和 x-use-component-props 是非侵入式的，且所有元件皆支援。
