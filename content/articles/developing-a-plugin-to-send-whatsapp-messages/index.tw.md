---
title: "在 NocoBase 中開發發送 WhatsApp 訊息的插件"
description: "本文旨在展示在 NocoBase 中創建插件以滿足特定需求的步驟。"
---

📝 備註：本文最後更新於 2026 年 1 月 23 日。我們會定期更新資訊，確保您掌握最新見解！😊

本篇部落格由 Leandro Martins 撰寫，原文發表於 [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase)。

本文旨在示範在 NocoBase 中建立插件以滿足特定需求的步驟。我們將涵蓋架構設計、建立基本結構、啟用插件、定義與建立資料表、建立端點、建置設定介面、與工作流程整合，以及匯出插件。

本文將使用以下技術：NocoBase、PostgreSQL 和 Docker。這些工具應已預先配置完成。安裝說明請參考我撰寫的另一份指南 [這裡](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)。

---

💬 嘿，您正在閱讀 NocoBase 部落格。NocoBase 是擴展性最強的 AI 驅動無程式碼/低程式碼開發平台，用於建構企業應用程式、內部工具及各類系統。它完全自託管、基於插件且對開發者友善。→[ 在 GitHub 上探索 NocoBase](https://github.com/nocobase/nocobase)

---

## 插件架構

![Plugin Architecture.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## 建立插件結構

要建立插件，只需執行以下指令。您可以在[文件](https://docs.nocobase.com/development/your-fisrt-plugin)中找到更多關於插件結構、初始程式碼和指令的詳細資訊。

```
yarn pm create @my-project/plugin-whatsapp
```

建立完成後，產生的檔案將位於 `packages` 資料夾中，並以插件定義的名稱命名，如下圖所示。若要更深入了解資料夾結構，請參考[此處](https://docs.nocobase.com/development/app-ds)的手冊。

![plugin's defined name.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## 啟用插件

要啟用插件，您可以前往插件畫面並使用切換按鈕啟用它，如下圖所示，或執行以下指令。

```
yarn pm enable @my-project/plugin-hello
```

![Activating the Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## 建立資料表

資料表至關重要，因為它們定義了資料庫中表格儲存資料的結構。在此範例中，我建立了兩個資料表，說明如下。

1. **ProvideConfig**
   * **API Key**：Meta 的 API 金鑰，用於存取 WhatsApp API
   * **URL**：API 網址
   * **Cell Phone From**：WhatsApp Business 電話號碼
2. **MessageQueue**
   * **Content**：訊息內容
   * **Status**：待處理或已完成

在 NocoBase 中，資料表位於 `/src/server/collections/` 資料夾。基本結構如下所示。更多詳細資訊請參考[此處](https://docs.nocobase.com/development/server/collections)的文件。

```
##檔案：ProvideConfig
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'ProvideConfig',
  fields: [
    { type: 'string', name: 'api_key' },
    { type: 'string', name: 'url' },
    { type: 'string', name: 'cell_phone_from' },
  ],
},
);

##檔案：MessageQueue
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'MessageQueue',
  fields: [
    { type: 'string', name: 'content' },
    { type: 'string', name: 'status' }
  ],
},
);
```

## 建立端點

端點允許外部系統與應用程式內的動作互動，從而實現它們之間的整合。在此案例中，我們將建立一個端點來排程執行，非同步呼叫 WhatsApp API 以發送訊息。

要建立端點，您可以使用 `/src/server/plugin.ts` 檔案，並在 `load` 方法中加入程式碼，如下例所示。在 ACL（存取控制清單）中，您定義端點的權限。使用 `resourceManager`，您註冊端點及其方法。配置完成後，端點將可在以下網址使用：[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

```
import { Plugin } from '@nocobase/server';

export class PluginHelloServer extends Plugin {

  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.acl.allow('whatsapp', '*', 'public');

    this.app.resourceManager.define({
      name: 'whatsapp',
      actions: {
        async sendMessage(ctx, next) {

          //將訊息儲存到佇列，狀態：待處理

          //從資料庫中擷取 WhatsApp API 參數；

          //嘗試使用 API 發送 WhatsApp 訊息

          //如果成功，更新狀態：已完成；否則更新狀態：錯誤
        }
      }
    });

  }

...
```

## **建立設定介面**

NocoBase 允許您使用 React 和 Ant Design 建立介面。在此案例中，我將在插件的設定區域內建立一個介面。此介面將允許定義 WhatsApp API 設定，並檢視已發送的訊息及其狀態，如下圖所示。

![Creating the Configuration Interface.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

在 `/src/client` 資料夾中，您可以使用 React 和 Ant Design 建立介面。以下程式碼提供了建立圖中所示畫面所需簡單結構的概念。更多詳細資訊，您可以查看此連結，其中包含建立選單、畫面和路由的資訊。

```

##檔案：index.tsx
import { Plugin } from '@nocobase/client';
import { Alert, Button, Form, Input, Table, Tabs, TabsProps } from 'antd';
import React, { useState } from 'react';

/**
 *
 */
export class PluginWhatsappClient extends Plugin {

  async afterAdd() {
    // await this.app.pm.add()
  }

  async beforeLoad() {
  }

  async load() {

    // this.app.addComponents({})
    // this.app.addScopes({})
    // this.app.addProvider()
    // this.app.addProviders()
    // this.app.router.add()

    const PluginWhatsAppTabs = () => {

      const [apiKey, setApiKey] = useState();
      const [url, setUrl] = useState();
      const [cellPhoneFrom, setCellPhoneFrom] = useState();

      const onChange = async (key: string) => {

        //從 API 擷取資料並設定到輸入框中。
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //使用 API 更新資料庫中輸入框的動作。
        console.log('Ok');
      }

      //包含訊息的模擬資料
      const dataSource = [
        {
          key: '1',
          content: 'Olá bem vindo',
          date: '24/12/2024',
          status: 'Pendente',
        },
        {
          key: '2',
          content: 'Olá bem vindo',
          date: '23/12/2024',
          status: 'Enviado',
        }
      ];

      const columns = [
        {
          title: 'Content',
          dataIndex: 'content',
          key: 'content',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
      ];

      const instructions = (<><p>說明：</p>
        <ul>
          <li>以下設定來自 Meta 的訊息提供者，必須填入正確資訊才能自動發送訊息。更多詳細資訊，請造訪：https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>配置以下設定後，要發送訊息，只需使用 /api/sendMessage:post 端點</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Messages',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Configurations',
          children: (<>
            <p><Alert message={instructions} type="error" /></p>
            <Form layout="vertical">
              <Form.Item label="* API Key Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="xxxxxxxxxx" value={apiKey} />
              </Form.Item>
              <Form.Item label="* URL API Meta:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="domain.com..." value={url} />
              </Form.Item>
              <Form.Item label="* Cell phone from:" style={{ fontWeight: 'bold' }}>
                <Input placeholder="5554899991234" value={cellPhoneFrom} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={onClickSubmit}>Submit</Button>
              </Form.Item>
            </Form></>
          ),
        }
      ];

      return (<Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange}/>)

    }

    this.app.pluginSettingsManager.add('whatsapp', {
      title: 'WhatsApp',
      icon: 'WhatsAppOutlined',
      Component: PluginWhatsAppTabs,
      sort: 100,
    });
  }
}

export default PluginWhatsappClient;
```

上述程式碼為建立的插件產生了以下畫面。部分程式碼已被註解以保持簡潔。

![Creating the Configuration Interface.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **與 NocoBase 工作流程整合**

有多種方式可以使用插件中建立的端點來發送訊息。其中之一是在 NocoBase 工作流程中觸發它。本質上，這是建立一個「HTTP 請求」類型的工作流程，並如下圖所示傳遞資料。

![**Integrating with NocoBase Workflow.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **將插件匯出為檔案**

要匯出建立的插件，只需執行以下指令。這將產生一個 `.tar` 檔案，可以安裝到其他 NocoBase 實例中。更多詳細資訊，請參考[此處](https://docs.nocobase.com/development/your-fisrt-plugin)的文件[。](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## 結論

本文旨在示範在 NocoBase 中建立插件及其基本結構的過程。部分程式碼可以重寫和改進。我計劃近期將專案新增到儲存庫中，並與社群分享修改後的插件。

**相關閱讀：**

* [簡化架構治理：使用 NocoBase 建立應用程式目錄](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [如何備份和還原 NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [如何使用 NocoBase 建構應用程式？](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [如何將 Docker 映像上傳到內網伺服器](https://www.nocobase.com/en/blog/load-docker-image)
* [NocoBase 伺服器端 API 的首次最佳化流程](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
