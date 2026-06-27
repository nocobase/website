---
title: "NocoBase 0.12: Công cụ xây dựng plugin mới"
description: "NocoBase 0.12 giới thiệu công cụ xây dựng plugin mới để sử dụng trong sản xuất liền mạch, cập nhật phương pháp cài đặt và hợp nhất @nocobase/app-client và @nocobase/app-server thành @nocobase-app."
---

## Tính năng mới

* Công cụ xây dựng plugin mới. Các plugin được xây dựng sẽ có thể sử dụng trực tiếp trên môi trường sản phẩm mà không cần xây dựng lại lần thứ hai.

## Nâng cấp ứng dụng

### Nâng cấp cài đặt Docker

Không thay đổi, tham khảo [Hướng dẫn nâng cấp Docker Image](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose) để nâng cấp.

### Nâng cấp cài đặt mã nguồn

Công cụ xây dựng plugin đã được nâng cấp mới, cần xóa bộ nhớ đệm sau khi kéo mã nguồn mới.

```
git pull # Kéo mã nguồn mới.
yarn clean # Xóa bộ nhớ đệm.
```

Để biết thêm chi tiết, xem [Hướng dẫn nâng cấp nguồn Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone).

### Nâng cấp cài đặt create-nocobase-app

Tải xuống lại phiên bản mới qua `yarn create` và cập nhật cấu hình .env, xem [hướng dẫn nâng cấp phiên bản chính](https://docs-cn.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app) để biết thêm chi tiết.

## Thay đổi không tương thích

### @nocobase/app-client và @nocobase/app-server được hợp nhất thành @nocobase-app

Các ứng dụng được cài đặt qua create-nocobase-app không còn có thư mục packages/app, và mã tùy chỉnh trong packages/app cần được chuyển đến plugin tùy chỉnh.

### Đường dẫn dist/client của ứng dụng đã thay đổi.

Nếu bạn đang tự cấu hình nginx, bạn sẽ cần điều chỉnh tương tự

```
server {
- root /app/nocobase/packages/app/client/dist;
+ root /app/nocobase/node_modules/@nocobase/app/dist/client;

  location / {
-       root /app/nocobase/packages/app/client/dist;
+       root /app/nocobase/node_modules/@nocobase/app/dist/client;
        try_files $uri $uri/ /index.html;
        add_header Last-Modified $date_gmt;
        add_header Cache-Control 'no-store, no-cache';
        if_modified_since off;
        expires off;
        etag off;
    }
}
```

### Các plugin của bên thứ ba cần được xây dựng lại

Tham khảo hướng dẫn nâng cấp plugin bên thứ ba bên dưới

## Hướng dẫn nâng cấp plugin bên thứ ba

### Thư mục plugin phải có cả thư mục `src/client` và `src/server`.

```
// src/client/index.ts
import { Plugin } from '@nocobase/client';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

```
// src/server/index.ts
import { Plugin } from '@nocobase/server';

class MyPlugin extends Plugin {
  async load() {
    // ...
  }
}

export default MyPlugin;
```

Mã demo cụ thể có thể tham khảo: [sample-hello](https://github.com/nocobase/nocobase/tree/main/packages/samples/hello)

### Đa ngôn ngữ của plugin đặt trong thư mục `src/locale`

Cả frontend và backend, các tệp dịch đa ngôn ngữ được đặt trong thư mục `src/locale`, do đó plugin không cần tự tải các gói đa ngôn ngữ.

### Điều chỉnh phụ thuộc của plugin

Các phụ thuộc của plugin được chia thành phụ thuộc riêng và phụ thuộc toàn cục. Các phụ thuộc toàn cục được sử dụng trực tiếp trên toàn cầu và sẽ không được đóng gói vào sản phẩm plugin, trong khi các phụ thuộc riêng sẽ được đóng gói vào sản phẩm. Sau khi plugin được xây dựng, môi trường sản phẩm có thể cắm và chạy, không cần cài đặt phụ thuộc hoặc xây dựng lại lần thứ hai. Các điều chỉnh đối với phụ thuộc của plugin bao gồm:

* Đặt các gói liên quan đến `@nocobase/*` vào `peerDependencies` và chỉ định số phiên bản là `0.x`;
* Đặt các phụ thuộc khác vào `devDependencies`, không phải `dependencies`, vì plugin sẽ trích xuất tất cả các phụ thuộc cần thiết cho môi trường sản phẩm sau khi đóng gói.

```
{
  "devDependencies": {
    "@formily/react": "2.x",
    "@formily/shared": "2.x",
    "ahooks": "3.x",
    "antd": "5.x",
    "dayjs": "1.x",
    "i18next": "22.x",
    "react": "18.x",
    "react-dom": "18.x",
    "react-i18next": "11.x"
  },
  "peerDependencies": {
    "@nocobase/actions": "0.x",
    "@nocobase/client": "0.x",
    "@nocobase/database": "0.x",
    "@nocobase/resourcer": "0.x",
    "@nocobase/server": "0.x",
    "@nocobase/test": "0.x",
    "@nocobase/utils": "0.x"
  }
}
```

### Đường dẫn đầu ra của plugin đã được thay đổi từ `lib` thành `dist`

Cấu trúc thư mục dist

```
|- dist
  |- client       # Phía client, umd
    |- index.js
    |- index.d.ts
  |- server       # Phía server, cjs
    |- index.js
    |- index.d.ts
    |- others
  |- locale       # Gói đa ngôn ngữ
  |- node_modules # Phụ thuộc server
```

Các điều chỉnh liên quan khác bao gồm:

Điều chỉnh tham số main của package.json

```
{
  - "main": "./lib/server/index.js",
  + "main": "./dist/server/index.js",
}
```

client.d.ts

```
export * from './dist/client';
export { default } from './dist/client';
```

client.js

```
module.exports = require('./dist/client/index.js');
```

server.d.ts

```
export * from './dist/server';
export { default } from './dist/server';
```

server.js

```
module.exports = require('./dist/server/index.js');
```
