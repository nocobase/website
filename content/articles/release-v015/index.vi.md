---
title: "NocoBase 0.15：Trình quản lý cài đặt plugin mới"
description: "NocoBase 0.15 giới thiệu trình quản lý cài đặt plugin mới với cấu hình plugin được cải thiện, quy trình đăng ký hợp lý hóa và một số cập nhật để nâng cao trải nghiệm người dùng."
---

## Tính năng

![Trình quản lý cài đặt plugin](https://static-docs.nocobase.com/36c65785e5b8bb5eb39419a87e684eea.png)

## Thay đổi đột phá

### API đăng ký trang cấu hình plugin

Trước đây, trang cấu hình plugin được đăng ký bằng `SettingsCenterProvider`, và bây giờ cần được đăng ký thông qua plugin.

* Trường hợp 1: Trang gốc chỉ có một Tab

Khi trang chỉ có một Tab, phiên bản mới sẽ xóa Tab đó, chỉ giữ lại tiêu đề và biểu tượng của trang.

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab",
              component: HelloPluginSettingPage,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Bây giờ cần thay đổi thành:

```
class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: HelloPluginSettingPage,
      // Không cần truyền tham số này nếu là plugin mới
      aclSnippet: "pm.hello.tab1",
    });
  }
}
```

`Hello Tab` của `tab1` đã bị xóa.

Tham số `aclSnippet` `pm.hello.tab1` tương ứng với khóa của đối tượng `settings` gốc:

```
<SettingsCenterProvider
  settings={{
    hello: {
      // `hello` này tương ứng với `hello` trong `pm.hello.tab1`
      tabs: {
        tab1: {
          // Ở đây, `tab1` tương ứng với `tab1` trong `pm.hello.tab1`
        },
      },
    },
  }}
></SettingsCenterProvider>
```

* Trường hợp 2: Trang gốc có nhiều Tab

```
const HelloProvider = React.memo(props => {
  return (
    <SettingsCenterProvider
      settings={{
        hello: {
          title: "Hello",
          icon: "ApiOutlined",
          tabs: {
            tab1: {
              title: "Hello tab1",
              component: HelloPluginSettingPage1,
            },
            tab2: {
              title: "Hello tab2",
              component: HelloPluginSettingPage2,
            },
          },
        },
      }}
    >
      {props.children}
    </SettingsCenterProvider>
  );
});
```

Bây giờ cần thay đổi thành:

```
import { Outlet } from "react-router-dom";

class HelloPlugin extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add("hello", {
      title: "Hello",
      icon: "ApiOutlined",
      Component: Outlet,
    });

    this.app.pluginSettingsManager.add("hello.tab1", {
      title: "Hello tab1",
      Component: HelloPluginSettingPage1,
    });

    this.app.pluginSettingsManager.add("hello.tab2", {
      title: "Hello tab2",
      Component: HelloPluginSettingPage1,
    });
  }
}
```

Lấy thông tin định tuyến tương ứng với pluginSettingsManager

```
const baseName = app.pluginSettingsManager.getRouteName("hello");
// admin.settings.hello
const basePath = app.pluginSettingsManager.getRoutePath("hello"); // /admin/settings.
// /admin/settings/hello
```

Nếu có chuyển hướng liên kết bên trong trang cấu hình plugin, bạn cần thay đổi tương ứng, ví dụ:

```
navigate("/admin/settings/hello/1").navigate("/admin/settings/hello/2");

// Có thể thay đổi thành
const basePath = app.pluginSettingsManager.getRoutePath("hello");
navigate(`${basePath}/1`);
navigate(`${basePath}/2`);
```

Để biết thêm thông tin, hãy xem [trình quản lý cài đặt plugin](https://docs.nocobase.com/development/client).

## Nhật ký thay đổi

Để xem nhật ký thay đổi đầy đủ, vui lòng tham khảo [Changelog](https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md).
