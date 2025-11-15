This blog was produced by Leandro Martins and was originally published at [Developing a Plugin to Send WhatsApp Messages in NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

The goal of this article is to demonstrate the steps for creating a plugin in NocoBase to meet specific needs. We will cover the architectural design, create the basic structure, activate the plugin, define and create collections, create an endpoint, build a configuration interface, integrate with workflows, and export the plugin.

For this article, we’ll use the following technologies: NocoBase, PostgreSQL, and Docker. These tools should already be configured. For installation instructions, refer to a separate guide I’ve written [here](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. →[ Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---



## Plugin Architecture

![Plugin Architecture.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Creating the Plugin Structure

To create the plugin, simply run the command below. You can find more details about the plugin structure, initial code, and commands in the [documentation](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Once created, the generated files will be located in the `packages` folder under the plugin's defined name, as shown in the image below. To better understand the folder structure, you can refer to the manual [here](https://docs.nocobase.com/development/app-ds).

![plugin's defined name.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Activating the Plugin

To activate the plugin, you can either go to the plugin screen and enable it using the toggle button, as shown in the image below, or run the command below.

```
yarn pm enable @my-project/plugin-hello
```

![Activating the Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Creating Collections

Collections are essential because they define the structure of the data stored in tables within your database. For this example, I created two collections, as described below.

1. **ProvideConfig**
   * **API Key**: Meta's API Key to access the WhatsApp API
   * **URL**: API URL
   * **Cell Phone From**: WhatsApp Business phone number
2. **MessageQueue**
   * **Content**: Message content
   * **Status**: Pending or Completed

In NocoBase, collections are located in the `/src/server/collections/` folder. The basic structure is shown below. For more details, refer to the documentation [here](https://docs.nocobase.com/development/server/collections).

```
##File: ProvideConfig
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

##File: MessageQueue
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

## Creating Endpoints

Endpoints allow external systems to interact with actions within your application, enabling integration between them. In this case, we will create an endpoint to schedule an execution that asynchronously calls the WhatsApp API to send a message.

To create the endpoint, you can use the `/src/server/plugin.ts` file and add the code within the `load` method, as shown in the example below. In the ACL (Access Control List), you define the permissions for the endpoint. Using the `resourceManager`, you register the endpoint with its method. Once configured, the endpoint will be available at:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

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

          //Save message in the queu status: pending

          //Recovery API Whataap paramters in database;

          //Try send message whats using API

          // If OK, update status: done Else: update status: error
        }
      }
    });

  }

...
```

## **Creating the Configuration Interface**

NocoBase allows you to create interfaces using React and Ant Design. In this case, I will create an interface within the plugin's settings area. This interface will enable defining the WhatsApp API settings and viewing the messages that have been sent along with their statuses, as shown in the images below.

![Creating the Configuration Interface.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

In the `/src/client` folder, you can create your interfaces using React and Ant Design. The code below gives an idea of the simple structure needed to create the screens shown in the images. For more details, you can check this link, where you'll find information on creating menus, screens, and routes.

```

##File: index.tsx
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

        //Retrive the data from api and set in inputs.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Action for update input in DB using API.
        console.log('Ok');
      }

      //Mock data with messages
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

      const instructions = (<><p>Instructions:</p>
        <ul>
          <li>The settings below are from Meta's messaging provider, and must be filled in with correct information to send messages automatically. For more details, visit: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>After configuring the settings below, to send messages, simply use the /api/sendMessage:post endpoint</li>
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

The code above generates the screen below for the created plugin. Some parts are commented out to keep the code concise.

![Creating the Configuration Interface.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Integrating with NocoBase Workflow**

There are several ways to use the endpoint created in the plugin to send messages. One of them is by triggering it within the NocoBase workflow. Essentially, this involves creating a workflow of the "HTTP Request" type and passing the data as shown in the image below.

![**Integrating with NocoBase Workflow.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Exporting the Plugin as a File**

To export the created plugin, simply run the command below. This will generate a `.tar` file that can be installed in other NocoBase instances. For more details, you can refer to the documentation [here](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Conclusion

The purpose of this article was to demonstrate the process of creating and the basic structure of a plugin in NocoBase. Some parts of the code can be rewritten and improved. Soon, I plan to add the project to a repository and share the revised plugin with the community.

**Related reading:**

* [Simplified Architecture Governance: Building an Application Catalog with NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [How to Backup and Restore NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [How to build apps with NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [How to upload a Docker image to an intranet server](https://www.nocobase.com/en/blog/load-docker-image)
* [First Optimization Process for NocoBase Server-Side APIs](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
