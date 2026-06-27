---
title: "Đơn giản hóa quy trình thêm và cập nhật plugin"
description: "Tìm hiểu cách bản cập nhật mới nhất của NocoBase đơn giản hóa việc quản lý plugin, cho phép cài đặt và cập nhật dễ dàng hơn."
---

Để cải thiện trải nghiệm quản lý plugin, chúng tôi vừa thực hiện những cập nhật đáng kể cho module quản lý plugin. Những cải tiến chính tập trung vào quy trình thêm và nâng cấp plugin. Xin lưu ý rằng các tính năng này chỉ khả dụng từ phiên bản 1.4.0-alpha trở lên. Nhánh `main` hiện tại là v1.3. Để trải nghiệm các tính năng mới này, vui lòng chuyển sang nhánh `next` (v1.4).

Các cập nhật cụ thể trong bản phát hành này [v1.4.0-alpha.20240914235554](https://github.com/nocobase/nocobase/releases/tag/v1.4.0-alpha.20240914235554) như sau:

## Danh sách plugin hiện được đọc trực tiếp từ plugin cục bộ

![4f331f688f18c4c3458b2dff15a9f208.png](https://static-docs.nocobase.com/4f331f688f18c4c3458b2dff15a9f208.png)

Danh sách plugin không còn đọc từ bảng plugin trong cơ sở dữ liệu nữa mà đọc trực tiếp từ các biến môi trường hoặc thư mục sau:

* Biến môi trường
  * `APPEND_PRESET_BUILT_IN_PLUGINS`
  * `APPEND_PRESET_LOCAL_PLUGINS`
* Thư mục plugin
  * `packages/plugins`: Plugin đang phát triển, phải bao gồm mã nguồn.
  * `storage/plugins`: Plugin độc lập, phải bao gồm plugin đã được biên dịch.

Các plugin được tổ chức dưới dạng gói npm với cấu trúc thư mục như sau:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello3/
      |- /plugin-hello4/
    |- /my-nocobase-plugin-hello3/
    |- /my-nocobase-plugin-hello4/
```

## Giải nén gói plugin

Giải nén trực tiếp gói plugin vào thư mục đã chỉ định, giao diện quản lý plugin sẽ tự động phát hiện. Ví dụ:

```bash
mkdir -p /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas && \
  tar -xvzf /downloads/plugin-auth-cas-1.3.15-beta.tgz \
  -C /my-nocobase/storage/plugins/@nocobase/plugin-auth-cas \
  --strip-components=1
```

Lệnh này đảm bảo plugin được giải nén vào `/my-nocobase/storage/plugins/@nocobase/plugin-auth-cas` mà không bao gồm thư mục `package`. Cấu trúc thư mục chính xác phải là:

```bash
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.js
./plugin-auth-cas/dist/server/auth.js
./plugin-auth-cas/client.js
./plugin-auth-cas/dist/constants.js
./plugin-auth-cas/dist/externalVersion.js
./plugin-auth-cas/dist/client/index.js
./plugin-auth-cas/dist/index.js
./plugin-auth-cas/dist/server/index.js
./plugin-auth-cas/dist/server/actions/login.js
./plugin-auth-cas/dist/server/plugin.js
./plugin-auth-cas/server.js
./plugin-auth-cas/dist/server/actions/service.js
./plugin-auth-cas/dist/locale/en-US.json
./plugin-auth-cas/dist/locale/ko_KR.json
./plugin-auth-cas/package.json
./plugin-auth-cas/dist/locale/zh-CN.json
./plugin-auth-cas/README.md
./plugin-auth-cas/README.zh-CN.md
./plugin-auth-cas/dist/server/migrations/20240425200816-change-locale-module.d.ts
./plugin-auth-cas/dist/server/auth.d.ts
./plugin-auth-cas/client.d.ts
./plugin-auth-cas/dist/constants.d.ts
./plugin-auth-cas/dist/client/index.d.ts
./plugin-auth-cas/dist/client/locale/index.d.ts
./plugin-auth-cas/dist/index.d.ts
./plugin-auth-cas/dist/server/index.d.ts
./plugin-auth-cas/dist/server/actions/login.d.ts
./plugin-auth-cas/dist/client/Options.d.ts
./plugin-auth-cas/dist/server/plugin.d.ts
./plugin-auth-cas/server.d.ts
./plugin-auth-cas/dist/server/actions/service.d.ts
./plugin-auth-cas/dist/client/SigninPage.d.ts
./plugin-auth-cas/LICENSE.txt
```

## Hợp nhất quy trình thêm và cập nhật plugin.

Trong giao diện, sử dụng nút "Thêm & Cập nhật" ở góc trên bên phải để thêm hoặc cập nhật.

![b5a4fd82955807dc18060772c6689f84.png](https://static-docs.nocobase.com/b5a4fd82955807dc18060772c6689f84.png)

Bạn cũng có thể sử dụng lệnh `pm add` để thêm hoặc cập nhật plugin. Quy trình như sau:

![01f3658240cd23353f25833453687df3.png](https://static-docs.nocobase.com/01f3658240cd23353f25833453687df3.png)

## Quy trình cài đặt cho plugin thương mại

Không cần tải từng plugin một; chỉ cần cấu hình các biến môi trường sau:

```Bash
NOCOBASE_PKG_URL=https://pkg.nocobase.com/
NOCOBASE_PKG_USERNAME=your-username   # tên người dùng nền tảng dịch vụ
NOCOBASE_PKG_PASSWORD=your-password   # mật khẩu nền tảng dịch vụ
```

Trong quá trình cài đặt hoặc nâng cấp ứng dụng, các plugin sẽ được tự động tải xuống và cập nhật (tự động phát hiện phiên bản).

```ts
yarn nocobase install
yarn nocobase upgrade
```

Ví dụ, nhật ký lệnh nâng cấp:

```Bash
nocobase git:(main) yarn nocobase upgrade
$ nocobase upgrade
WAIT: TypeScript compiling...
$ nocobase pkg download-pro
Download success: @nocobase/plugin-custom-brand@1.3.22-beta
Download success: @nocobase/plugin-verdaccio@1.3.22-beta
Download success: @nocobase/plugin-workflow-response-message@1.3.22-beta
Download success: @nocobase/plugin-workflow-request-interceptor@1.3.22-beta
Download success: @nocobase/plugin-workflow-json-query@1.3.22-beta
Download success: @nocobase/plugin-workflow-approval@1.3.22-beta
Download success: @nocobase/plugin-telemetry-prometheus@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-postgres@1.3.22-beta
Download success: @nocobase/plugin-embed@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mysql@1.3.22-beta
Download success: @nocobase/plugin-workflow-variable@1.3.22-beta
Download success: @nocobase/plugin-collection-fdw@1.3.22-beta
Download success: @nocobase/plugin-demo-platform@1.3.22-beta
Download success: @nocobase/plugin-departments@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mariadb@1.3.22-beta
Download success: @nocobase/plugin-auth-cas@1.3.22-beta
Download success: @nocobase/plugin-auth-saml@1.3.22-beta
Download success: @nocobase/plugin-auth-oidc@1.3.22-beta
Download success: @nocobase/plugin-comments@1.3.22-beta
Download success: @nocobase/plugin-workflow-custom-action-trigger@1.3.22-beta
Download success: @nocobase/plugin-auth-ldap@1.3.22-beta
Download success: @nocobase/plugin-block-tree@1.3.22-beta
Download success: @nocobase/plugin-auth-dingtalk@1.3.22-beta
Download success: @nocobase/plugin-data-source-rest-api@1.3.22-beta
Download success: @nocobase/plugin-data-source-external-mssql@1.3.22-beta
```

Đối với máy chủ mạng nội bộ, bạn có thể tải thư mục `storage/plugins` cục bộ lên máy chủ và sau đó chạy lệnh cài đặt hoặc nâng cấp NocoBase.

```bash
scp -r /nocobase1/storage/plugins user2@ip2:/nocobase2/storage/plugins

yarn nocobase install
# hoặc
yarn nocobase upgrade
```

## Xóa plugin

Vì danh sách plugin không còn đọc từ bảng plugin trong cơ sở dữ liệu nữa mà đọc trực tiếp từ plugin cục bộ, việc xóa một plugin đơn giản chỉ là xóa thư mục plugin đó. Nói cách khác, xóa thư mục plugin đồng nghĩa với việc loại bỏ plugin.
