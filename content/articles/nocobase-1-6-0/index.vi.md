---
title: "NocoBase v1.6.0 正式发布"
description: "集群模式部署、安全策略优化及迁移管理器，带来性能、安全性和用户体验的全面提升。"
---

## Tính năng mới

### Chế độ Cluster

Phiên bản Enterprise hỗ trợ triển khai chế độ cluster thông qua các plugin liên quan. Khi ứng dụng chạy ở chế độ cluster, nó có thể tận dụng nhiều phiên bản và xử lý đa lõi để cải thiện hiệu suất xử lý truy cập đồng thời.

![Ảnh chụp màn hình Chế độ Cluster](https://static-docs.nocobase.com/20241231010814.png)

Tham khảo: [Triển khai - Chế độ Cluster](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### Chính sách mật khẩu

Một chính sách mật khẩu được thiết lập cho tất cả người dùng, bao gồm các quy tắc về độ phức tạp của mật khẩu, thời hạn hiệu lực và chiến lược bảo mật đăng nhập, cùng với việc quản lý các tài khoản bị khóa.

![Ảnh chụp màn hình Chính sách mật khẩu](https://static-docs.nocobase.com/202412281329313.png)

Tham khảo: [Chính sách mật khẩu](https://docs.nocobase.com/handbook/password-policy)

### Chính sách Token

Chính sách bảo mật Token là một cấu hình chức năng được thiết kế để bảo vệ an ninh hệ thống và nâng cao trải nghiệm người dùng. Nó bao gồm ba mục cấu hình chính: "thời hạn phiên", "thời gian hiệu lực của token" và "giới hạn làm mới token đã hết hạn."

![Ảnh chụp màn hình Chính sách Token](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

Tham khảo: [Chính sách Token](https://docs.nocobase.com/handbook/token-policy)

### Hạn chế IP

NocoBase cho phép quản trị viên thiết lập danh sách cho phép hoặc danh sách chặn IP cho người dùng truy cập để hạn chế các kết nối mạng ngoài trái phép hoặc chặn các địa chỉ IP độc hại đã biết, từ đó giảm thiểu rủi ro bảo mật. Nó cũng hỗ trợ truy vấn nhật ký từ chối truy cập để xác định các IP rủi ro.

![Ảnh chụp màn hình Hạn chế IP](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

Tham khảo: [Hạn chế IP](https://docs.nocobase.com/handbook/IP-restriction)

### Biến và Bí mật

Cung cấp cấu hình và quản lý tập trung các biến môi trường và bí mật để lưu trữ dữ liệu nhạy cảm, tái sử dụng cấu hình, cách ly môi trường, v.v.

![Ảnh chụp màn hình Biến môi trường](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

Tham khảo: [Biến và Bí mật](https://docs.nocobase.com/handbook/environment-variables)

### Trình quản lý di chuyển

Tính năng này cho phép bạn di chuyển cấu hình ứng dụng từ môi trường này sang môi trường khác.

![Ảnh chụp màn hình Trình quản lý di chuyển](https://static-docs.nocobase.com/20250107105005.png)

Tham khảo:

- [Trình quản lý di chuyển](https://docs.nocobase.com/handbook/migration-manager)
- [Quản lý phát hành](https://docs.nocobase.com/handbook/release-management)

### Quản lý tuyến đường

- **Dữ liệu Menu được tách riêng và đổi tên thành Tuyến đường**: Dữ liệu menu đã được tách khỏi UI Schema và được đổi tên thành "tuyến đường." Nó được chia thành hai bảng, desktopRoutes và mobileRoutes, tương ứng với các tuyến đường trên máy tính và thiết bị di động.
- **Tối ưu hóa Menu giao diện người dùng với hỗ trợ thu gọn và phản hồi**: Menu giao diện người dùng hiện hỗ trợ chức năng thu gọn và thiết kế phản hồi để cải thiện trải nghiệm người dùng.

![Ảnh chụp màn hình Quản lý tuyến đường](https://static-docs.nocobase.com/20250107115449.png)

Tham khảo: [Tuyến đường](https://docs.nocobase.com/handbook/routes)

### Vai trò và Quyền hạn

- Hỗ trợ cấu hình quyền thao tác.
  ![Ảnh chụp màn hình Vai trò và Quyền hạn 1](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
- Hỗ trợ cấu hình quyền tab.

![Ảnh chụp màn hình Vai trò và Quyền hạn 2](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### Quản lý người dùng

Hỗ trợ tùy chỉnh biểu mẫu hồ sơ người dùng.

![Ảnh chụp màn hình Quản lý người dùng](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### Luồng công việc

Một mục nhập cho trung tâm việc cần làm của luồng công việc đã được thêm vào thanh công cụ toàn cục, cung cấp thông báo thời gian thực cho các nút thủ công và các tác vụ phê duyệt đang chờ xử lý.

![Ảnh chụp màn hình Luồng công việc](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### Luồng công việc: Sự kiện hành động tùy chỉnh

Hỗ trợ kích hoạt các sự kiện hành động tùy chỉnh trên toàn cục và trong các hành động hàng loạt.

![Ảnh chụp màn hình Sự kiện hành động tùy chỉnh](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### Luồng công việc: Phê duyệt

- Hỗ trợ chuyển giao trách nhiệm phê duyệt và thêm người phê duyệt bổ sung.
  ![Ảnh chụp màn hình Biểu mẫu phê duyệt](https://static-docs.nocobase.com/20241226232013.png)
- Cho phép người phê duyệt sửa đổi nội dung ứng dụng khi gửi phê duyệt.
  ![Ảnh chụp màn hình Sửa đổi phê duyệt](https://static-docs.nocobase.com/20241226232124.png)
- Hỗ trợ cấu hình một khối thông tin cơ bản trong giao diện phê duyệt.
- Tối ưu hóa kiểu dáng và tương tác của việc khởi tạo phê duyệt và xem các tác vụ đang chờ xử lý, với những cải tiến này cũng được tích hợp vào trung tâm việc cần làm của quy trình toàn cục.
  ![Ảnh chụp màn hình Trung tâm việc cần làm phê duyệt](https://static-docs.nocobase.com/20250310161203.png)
- Không còn phân biệt vị trí nơi phê duyệt được khởi tạo; khối trung tâm phê duyệt có thể khởi tạo và xử lý tất cả các phê duyệt.

### Luồng công việc: Nút ánh xạ biến JSON

Một nút chuyên dụng mới đã được thêm vào để ánh xạ dữ liệu JSON từ kết quả của nút thượng nguồn thành các biến.

![Ảnh chụp màn hình Nút ánh xạ biến JSON](https://static-docs.nocobase.com/20250113173635.png)

Tham khảo: [Ánh xạ biến JSON](https://docs.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### Cải tiến năng lực và Ví dụ Plugin


| Mở rộng                         | Ví dụ Plugin                                                  |
| ------------------------------- | ------------------------------------------------------------- |
| Trường đặt trước tùy chỉnh nguồn dữ liệu | @nocobase-sample/plugin-data-source-main-custom-preset-fields |
| Trường màu đăng ký Lịch         | @nocobase-sample/plugin-calendar-register-color-field         |
| Trường tiêu đề đăng ký Lịch     | @nocobase-sample/plugin-calendar-register-title-field         |
| Trường biểu thức đăng ký Công thức | @nocobase-sample/plugin-field-formula-register-expression-field |
| Trường nhóm đăng ký Kanban      | @nocobase-sample/plugin-kanban-register-group-field           |
| Đăng ký bộ lọc toán tử          | @nocobase-sample/plugin-register-filter-operator              |
| Mở rộng lưu trữ tệp            | @nocobase-sample/plugin-file-storage-demo                     |

## Thay đổi mang tính phá vỡ

### Cập nhật Chính sách Token

Trong phiên bản 1.6, một [Chính sách Token](https://docs.nocobase.com/handbook/token-policy) mới đã được giới thiệu. Khi xác thực thất bại, lỗi 401 sẽ được trả về cùng với chuyển hướng đến trang đăng nhập. Hành vi này khác với các phiên bản trước. Để bỏ qua kiểm tra, hãy tham khảo các ví dụ sau:

Yêu cầu Frontend:

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

Middleware Backend:

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### Hàm Unit Test agent.login thay đổi từ đồng bộ sang bất đồng bộ

Do một số thao tác bất đồng bộ cần thiết trong quá trình xác thực, hàm login trong test hiện là bất đồng bộ. Ví dụ:

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### API Mở rộng mới cho các mục cài đặt Trung tâm người dùng

API:

```TypeScript
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

Ví dụ:

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
