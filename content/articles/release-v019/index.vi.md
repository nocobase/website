---
title: "NocoBase 0.19：优化应用流程"
description: "NocoBase 0.19 引入了遥测、应用备份与恢复、命令行优化以及多项内核改进，以增强安装、启动和升级流程。"
---

## Tính năng mới

### Telemetry

* Tài liệu phát triển: [https://docs.nocobase.com/development/server/telemetry](https://docs.nocobase.com/development/server/telemetry)
* API lõi: [https://docs.nocobase.com/api/telemetry/telemetry](https://docs.nocobase.com/api/telemetry/telemetry)
* Plugin Prometheus: [https://docs.nocobase.com/handbook/telemetry-prometheus](https://docs.nocobase.com/handbook/telemetry-prometheus)

### Sao lưu và phục hồi ứng dụng

* Tài liệu plugin: [https://docs.nocobase.com/handbook/backup-restore](https://docs.nocobase.com/handbook/backup-restore)

## Tối ưu hóa lõi

### Tối ưu hóa dòng lệnh

Đối với NocoBase 0.19 trở lên, các lệnh tùy chỉnh của plugin phải được đặt trong thư mục `src/server/commands/*.ts` của plugin với nội dung sau:

```
export default function(app) {
  app.command('custom1').action();
}
```

Luồng thực thi của dòng lệnh:

![Luồng thực thi của dòng lệnh](https://static-docs.nocobase.com/c5b5296293a4f445511c9f8778148480.jpg)

Cấu hình đặc biệt của Command

* `ipc()` Khi ứng dụng đang chạy, dòng lệnh gửi lệnh qua ipc để vận hành phiên bản ứng dụng đang chạy, khi không cấu hình ipc(), một phiên bản ứng dụng mới sẽ được tạo và sau đó thực hiện thao tác (sẽ không can thiệp vào phiên bản ứng dụng đang chạy)
* `auth()` thực hiện xác minh cơ sở dữ liệu, nếu cấu hình cơ sở dữ liệu không chính xác, lệnh này sẽ không được thực thi.
* `preload()` có tải trước cấu hình ứng dụng hay không, tức là thực thi app.load()

Điều này có thể được cấu hình theo cách sử dụng thực tế của lệnh, ví dụ như sau:

```
app.command('a').ipc().action()
app.command('a').auth().action()
app.command('a').preload().action()
```

### Tối ưu hóa quy trình cài đặt

![Tối ưu hóa quy trình cài đặt](https://static-docs.nocobase.com/8f257e6f5e0cd73de3a2e3dc2c61f39e.webp)

### Tối ưu hóa quy trình khởi động

![Tối ưu hóa quy trình khởi động](https://static-docs.nocobase.com/a73c3b50195c2899db30672ae8e86af3.webp)

### Tối ưu hóa quy trình nâng cấp

![Tối ưu hóa quy trình nâng cấp](https://static-docs.nocobase.com/ba16f9f55c2a8bc5f7694b84077bea7b.webp)

Các bản di trú nâng cấp được phân loại thành beforeLoad, afterSync và afterLoad:

* beforeLoad: Được thực thi trước khi tải từng module, chia làm ba giai đoạn:
  * Trước khi tải các module lõi
  * Trước khi tải các plugin đã cài đặt sẵn
  * Trước khi tải các plugin khác
* afterSync: Được thực thi sau khi đồng bộ cấu hình bảng dữ liệu với cơ sở dữ liệu, chia làm ba giai đoạn:
  * Sau khi đồng bộ các bảng lõi với cơ sở dữ liệu
  * Sau khi đồng bộ các bảng plugin đã cài đặt sẵn với cơ sở dữ liệu
  * Sau khi đồng bộ các bảng plugin khác với cơ sở dữ liệu
* afterLoad: Chỉ được thực thi sau khi ứng dụng đã tải hoàn toàn.

```
export default class extends Migration {
  // Khi nào thực hiện di trú
  on = 'beforeLoad';
  // Chỉ thực thi khi đáp ứng số phiên bản ứng dụng sau.
  appVersion = '<=0.13.0-alpha.5';
  // Chỉ thực thi khi đáp ứng số phiên bản plugin sau.
  pluginVersion = '<=0.13.0-alpha.5';
  // Tập lệnh nâng cấp.
  async up() {}
}
```

### Thêm lệnh create-migration

Tạo một tệp di trú

```
yarn nocobase create-migration -h

Usage: nocobase create-migration [options] <name>

Options:
  --pkg <pkg>  package name
  --on [on]    Options include beforeLoad, afterSync and afterLoad
  -h, --help   display help for command
```

Ví dụ

```
$ yarn nocobase create-migration update-ui --pkg=@nocobase/plugin-client

2024-01-07 17:33:13 [info ] add app main into supervisor   
2024-01-07 17:33:13 [info ] migration file in /nocobase/packages/plugins/@nocobase/plugin-client/src/server/migrations/20240107173313-update-ui.ts
✨  Done in 5.02s.
```

Một tệp di trú sẽ được tạo trong `src/server/migrations` của gói plugin `@nocobase/plugin-client` với tên `20240107173313-update-ui.ts` và nội dung ban đầu như sau:

```
import { Migration } from '@nocobase/server';

export default class extends Migration {
  on = 'afterLoad'; // 'beforeLoad' | 'afterSync' | 'afterLoad'
  appVersion = '<0.18.0-alpha.10';

  async up() {
    // coding
  }
}
```

### Các thư mục theo quy ước của plugin

```
|- /plugin-sample-hello
  |- /dist             # Thư mục chứa plugin đã biên dịch
  |- /src              # Mã nguồn của plugin
    |- /client
      |- plugin.ts
      |- index.ts      # Điểm vào phía client
    |- /locale         # Thư mục quy ước cho các tệp đa ngôn ngữ dùng chung giữa frontend và backend
    |- /swagger        # Thư mục quy ước cho tài liệu Swagger
    |- /server
      |- collections   # Thư mục quy ước cho cấu hình bảng dữ liệu của plugin
      |- commands      # Thư mục quy ước cho các lệnh tùy chỉnh
      |- migrations    # Thư mục quy ước cho các tệp di trú
      |- plugin.ts     # Lớp Plugin
      |- index.ts      # Điểm vào phía server
    |- index.ts
  |- .npmignore
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```

Tối ưu hóa quy trình kiểm thử

Cung cấp các phương thức `createMockServer()` và `startMockServer()` thân thiện hơn để viết các trường hợp kiểm thử:

* `createMockServer()` Nhanh chóng tạo và khởi động một ứng dụng.
* `startMockServer()` Nhanh chóng khởi động một ứng dụng (không cần cài đặt lại).

```
import { createMockServer } from '@nocobase/server';

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await createMockServer({
      plugins: ['nocobase'],
    });
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Các thay đổi phá vỡ

### Thay đổi cấu hình Collections, commands, migrations thành thư mục theo quy ước

Ví dụ 1: Collections được tải bởi importCollections, mã bị xóa trực tiếp và tệp cấu hình collections phải được đặt trong thư mục `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.importCollections(resolve(__dirname, 'collections'));
  }
}
```

Ví dụ 2: Collections được tải thông qua this.db.import, mã bị xóa trực tiếp, tệp cấu hình collections phải được đặt trong thư mục `src/server/collections`

```
export class AuthPlugin extends Plugin {
  async load() {
-   await this.db.import({
-     directory: resolve(__dirname, 'collections')
-   });
  }
}
```

Ví dụ 3: Một collection được định nghĩa bởi db.collection() được khuyến nghị đặt trong thư mục `src/server/collections`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.collection({
-     name: 'examples',
-   });
  }
}
```

Thêm một tệp `src/server/collections/examples.ts` mới với nội dung sau:

```
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Ví dụ 4: Xóa db.addMigrations() và đặt tệp di trú trong thư mục `src/server/migrations`.

```
export class AuthPlugin extends Plugin {
  async load() {
-   this.db.addMigrations({
-     namespace: 'auth',
-     directory: resolve(__dirname, 'migrations'),
-     context: {
-       plugin: this,
-     },
-   });
  }
}
```

Ví dụ 5: Tùy chỉnh dòng lệnh

```
export class MyPlugin extends Plugin {
  load() {
-   this.app
-      .command('echo')
-      .option('-v, --version');
-      .action(async ([options]) => {
-        console.log('Hello World!');
-        if (options.version) {
-          console.log('Current version:', app.getVersion());
-        }
-      });
-  }
}
```

Thêm một tệp `src/server/collections/echo.ts` mới với nội dung sau:

```
export default function(app) {
  app
    .command('echo')
    .option('-v, --version');
    .action(async ([options]) => {
      console.log('Hello World!');
      if (options.version) {
        console.log('Current version:', await app.version.get());
      }
    });
}
```
