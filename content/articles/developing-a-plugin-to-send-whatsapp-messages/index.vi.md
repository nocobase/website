---
title: "Phát triển Plugin gửi tin nhắn WhatsApp trong NocoBase"
description: "Mục tiêu của bài viết này là trình bày các bước tạo plugin trong NocoBase để đáp ứng nhu cầu cụ thể."
---

📝 **Lưu ý:** Bài viết này được cập nhật lần cuối vào ngày 23 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Bài blog này được thực hiện bởi Leandro Martins và được xuất bản lần đầu tại [Phát triển Plugin gửi tin nhắn WhatsApp trong NocoBase](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase).

Mục tiêu của bài viết này là trình bày các bước tạo một plugin trong NocoBase để đáp ứng các nhu cầu cụ thể. Chúng ta sẽ đề cập đến thiết kế kiến trúc, tạo cấu trúc cơ bản, kích hoạt plugin, định nghĩa và tạo collections, tạo endpoint, xây dựng giao diện cấu hình, tích hợp với workflows và xuất plugin.

Trong bài viết này, chúng ta sẽ sử dụng các công nghệ sau: NocoBase, PostgreSQL và Docker. Các công cụ này cần được cấu hình sẵn. Để biết hướng dẫn cài đặt, hãy tham khảo hướng dẫn riêng mà tôi đã viết [tại đây](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase).

---

💬 Này, bạn đang đọc blog NocoBase. NocoBase là nền tảng phát triển no-code/low-code mở rộng nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

## Kiến trúc Plugin

![Kiến trúc Plugin.png](https://static-docs.nocobase.com/dfcb0082a99b45aa4334c8460708a50b.png)

## Tạo Cấu trúc Plugin

Để tạo plugin, chỉ cần chạy lệnh bên dưới. Bạn có thể tìm thấy thêm chi tiết về cấu trúc plugin, mã khởi tạo và các lệnh trong [tài liệu](https://docs.nocobase.com/development/your-fisrt-plugin).

```
yarn pm create @my-project/plugin-whatsapp
```

Sau khi tạo, các tệp được tạo sẽ nằm trong thư mục `packages` theo tên plugin đã định nghĩa, như trong hình bên dưới. Để hiểu rõ hơn về cấu trúc thư mục, bạn có thể tham khảo hướng dẫn [tại đây](https://docs.nocobase.com/development/app-ds).

![Tên plugin đã định nghĩa.png](https://static-docs.nocobase.com/c63fb5375b27a5c2520437df9bfbb253.png)

## Kích hoạt Plugin

Để kích hoạt plugin, bạn có thể vào màn hình plugin và bật nó bằng nút chuyển đổi, như trong hình bên dưới, hoặc chạy lệnh bên dưới.

```
yarn pm enable @my-project/plugin-hello
```

![Kích hoạt Plugin.png](https://static-docs.nocobase.com/12c6a36ffb3acdddd4e95a415d19460a.png)

## Tạo Collections

Collections rất cần thiết vì chúng định nghĩa cấu trúc của dữ liệu được lưu trữ trong các bảng trong cơ sở dữ liệu của bạn. Trong ví dụ này, tôi đã tạo hai collections, như được mô tả bên dưới.

1. **ProvideConfig**
   * **API Key**: Khóa API của Meta để truy cập WhatsApp API
   * **URL**: URL API
   * **Cell Phone From**: Số điện thoại WhatsApp Business
2. **MessageQueue**
   * **Content**: Nội dung tin nhắn
   * **Status**: Đang chờ xử lý hoặc Đã hoàn thành

Trong NocoBase, collections nằm trong thư mục `/src/server/collections/`. Cấu trúc cơ bản được hiển thị bên dưới. Để biết thêm chi tiết, hãy tham khảo tài liệu [tại đây](https://docs.nocobase.com/development/server/collections).

```
##Tệp: ProvideConfig
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

##Tệp: MessageQueue
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

## Tạo Endpoints

Endpoints cho phép các hệ thống bên ngoài tương tác với các hành động trong ứng dụng của bạn, cho phép tích hợp giữa chúng. Trong trường hợp này, chúng ta sẽ tạo một endpoint để lên lịch thực thi một tác vụ gọi bất đồng bộ WhatsApp API để gửi tin nhắn.

Để tạo endpoint, bạn có thể sử dụng tệp `/src/server/plugin.ts` và thêm mã trong phương thức `load`, như trong ví dụ bên dưới. Trong ACL (Danh sách kiểm soát truy cập), bạn định nghĩa các quyền cho endpoint. Sử dụng `resourceManager`, bạn đăng ký endpoint với phương thức của nó. Sau khi được cấu hình, endpoint sẽ khả dụng tại:[`http://localhost:13001/api/whatsapp:sendMessage`](http://localhost:13001/api/whatsapp:sendMessage)

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

          //Lưu tin nhắn vào hàng đợi với trạng thái: pending

          //Khôi phục các tham số API WhatsApp trong cơ sở dữ liệu;

          //Thử gửi tin nhắn WhatsApp bằng API

          // Nếu OK, cập nhật trạng thái: done Ngược lại: cập nhật trạng thái: error
        }
      }
    });

  }

...
```

## **Tạo Giao diện Cấu hình**

NocoBase cho phép bạn tạo giao diện bằng React và Ant Design. Trong trường hợp này, tôi sẽ tạo một giao diện trong khu vực cài đặt của plugin. Giao diện này sẽ cho phép định nghĩa các cài đặt WhatsApp API và xem các tin nhắn đã được gửi cùng với trạng thái của chúng, như trong các hình bên dưới.

![Tạo Giao diện Cấu hình.png](https://static-docs.nocobase.com/e52ce1228c1d80069b3a415f744eefb9.png)

Trong thư mục `/src/client`, bạn có thể tạo giao diện của mình bằng React và Ant Design. Mã bên dưới đưa ra ý tưởng về cấu trúc đơn giản cần thiết để tạo các màn hình hiển thị trong hình ảnh. Để biết thêm chi tiết, bạn có thể kiểm tra liên kết này, nơi bạn sẽ tìm thấy thông tin về cách tạo menu, màn hình và route.

```

##Tệp: index.tsx
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

        //Truy xuất dữ liệu từ api và đặt vào các input.
        const { data } = await this.app.apiClient.request({ url: 'ProvideConfig:get', params: { filterByTk: 1 } });
        setApiKey(data.data.api_key);
        setUrl(data.data.url);
        setCellPhoneFrom(data.data.celular_from);
      };

      const onClickSubmit = () => {

        //Hành động cập nhật input trong DB bằng API.
        console.log('Ok');
      }

      //Dữ liệu giả với các tin nhắn
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

      const instructions = (<><p>Hướng dẫn:</p>
        <ul>
          <li>Các cài đặt bên dưới là từ nhà cung cấp dịch vụ nhắn tin Meta và phải được điền thông tin chính xác để gửi tin nhắn tự động. Để biết thêm chi tiết, hãy truy cập: https://developers.facebook.com/docs/whatsapp/cloud-api</li>
          <li>Sau khi cấu hình các cài đặt bên dưới, để gửi tin nhắn, chỉ cần sử dụng endpoint /api/sendMessage:post</li>
        </ul>
      </>);

      const itemsTabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Tin nhắn',
          children: (<Table dataSource={dataSource} columns={columns} />),
        },
        {
          key: '2',
          label: 'Cấu hình',
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
                <Button type="primary" onClick={onClickSubmit}>Gửi</Button>
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

Mã trên tạo ra màn hình bên dưới cho plugin đã tạo. Một số phần được comment để giữ cho mã ngắn gọn.

![Tạo Giao diện Cấu hình.png](https://static-docs.nocobase.com/d0e00558051e08b313e118b34a6c1352.png)

## **Tích hợp với Workflow của NocoBase**

Có một số cách để sử dụng endpoint được tạo trong plugin để gửi tin nhắn. Một trong số đó là kích hoạt nó trong workflow của NocoBase. Về cơ bản, điều này liên quan đến việc tạo một workflow thuộc loại "HTTP Request" và truyền dữ liệu như trong hình bên dưới.

![**Tích hợp với Workflow của NocoBase.png](https://static-docs.nocobase.com/d02220eeba3f609f6d9f5174b954f42f.png)

## **Xuất Plugin dưới dạng Tệp**

Để xuất plugin đã tạo, chỉ cần chạy lệnh bên dưới. Điều này sẽ tạo ra một tệp `.tar` có thể được cài đặt trong các phiên bản NocoBase khác. Để biết thêm chi tiết, bạn có thể tham khảo tài liệu [tại đây](https://docs.nocobase.com/development/your-fisrt-plugin)[.](https://leandromartins.hashnode.dev/developing-a-plugin-to-send-whatsapp-messages-in-nocobase#)

```
yarn build @my-project/plugin-hello
yarn nocobase tar @my-project/plugin-hello
```

## Kết luận

Mục đích của bài viết này là trình bày quy trình tạo và cấu trúc cơ bản của một plugin trong NocoBase. Một số phần của mã có thể được viết lại và cải thiện. Trong thời gian tới, tôi dự định thêm dự án vào một kho lưu trữ và chia sẻ plugin đã được sửa đổi với cộng đồng.

**Bài đọc liên quan:**

* [Quản trị Kiến trúc Đơn giản hóa: Xây dựng Danh mục Ứng dụng với NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Cách Sao lưu và Khôi phục NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Làm thế nào để xây dựng ứng dụng với NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Cách tải hình ảnh Docker lên máy chủ nội bộ](https://www.nocobase.com/en/blog/load-docker-image)
* [Quy trình Tối ưu hóa Đầu tiên cho API Phía Máy chủ NocoBase](https://www.nocobase.com/en/blog/first-optimization-process-for-nocobase-server-side-apis)
