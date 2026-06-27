---
title: "NocoBase 0.21：图表和工作流的多数据源支持"
description: "NocoBase 0.21 引入了图表和工作流的多数据源支持，优化了工作流触发事件，并增加了多种新字段类型，提升了灵活性和性能。"
---

## Thông báo

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## Tính năng mới

### Hỗ trợ đa nguồn dữ liệu cho Biểu đồ

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[Để biết thêm thông tin, hãy xem tài liệu [Trực quan hóa dữ liệu]](https://docs.nocobase.com/handbook/data-visualization)

### Hỗ trợ đa nguồn dữ liệu cho quy trình làm việc

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[Để biết thêm thông tin, hãy xem tài liệu [Quy trình làm việc]](https://docs.nocobase.com/handbook/workflow)

### Tối ưu hóa Sự kiện Kích hoạt của quy trình làm việc

Thay đổi tên sự kiện kích hoạt:

| Tên gốc                       | Đổi thành              |
| ----------------------------- | ---------------------- |
| Sự kiện Biểu mẫu, Sự kiện Thao tác | Sự kiện Sau thao tác   |
| Tác vụ đã lên lịch            | Sự kiện Đã lên lịch    |
| Bộ chặn Yêu cầu               | Sự kiện Trước thao tác |
| Phê duyệt                     | Sự kiện Phê duyệt      |

Cải tiến cấu hình chế độ kích hoạt cho các sự kiện sau:

#### Sự kiện sau thao tác

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[Để biết thêm thông tin, hãy xem tài liệu [Quy trình làm việc - Sự kiện sau thao tác]](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### Sự kiện trước thao tác

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[Để biết thêm thông tin, hãy xem tài liệu [Quy trình làm việc - Sự kiện trước thao tác]](https://docs.nocobase.com/handbook/workflow-request-interceptor)

### Plugin Thương hiệu tùy chỉnh

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[Để biết thêm thông tin, hãy xem tài liệu [Xây dựng thương hiệu tùy chỉnh]](https://docs.nocobase.com/handbook/custom-brand)

### Hỗ trợ trường nanoid

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[Để biết thêm thông tin, hãy xem tài liệu [trường nanoid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### Hỗ trợ trường uuid

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[Để biết thêm thông tin, hãy xem tài liệu [trường uuid]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### Hỗ trợ trường unix timestamp

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[Để biết thêm thông tin, hãy xem tài liệu [Trường Unix timestamp]](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### Trường kiểu Số hỗ trợ cấu hình định dạng

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[Để biết thêm thông tin, hãy xem tài liệu [Cấu hình trường / Cài đặt thuộc tính cụ thể / Thành phần Số]](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### Hỗ trợ triển khai subpath

Đã thêm biến môi trường `APP_PUBLIC_PATH` để hỗ trợ triển khai subpath. Ví dụ:

```
APP_PUBLIC_PATH=/nocobase/
```

Truy cập cục bộ qua URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

Ví dụ proxy nginx:

```
server {
    listen 80;
    server_name your_domain.com;  # Thay your_domain.com bằng tên miền của bạn

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Giờ đây, bạn có thể truy cập qua http://your\_domain.com/nocobase/.

### Tối ưu hiệu suất khối

#### Hỗ trợ hiệu ứng màn hình xương

Thẻ Khối

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

Thẻ Kanban

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

Ô Bảng

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### Xử lý phân tán cấu hình khối

Trước đây, việc thay đổi bất kỳ Schema nào trên toàn bộ trang sẽ khiến toàn bộ trang phải kết xuất lại. Hiện tại, Schema của mỗi khối là độc lập.

```
<SchemaComponent distributed schema={} />
```

Thành phần Grid cũng hỗ trợ xử lý phân tán.

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## Các thay đổi không tương thích

### Nhiều useProps của UI Schema được thay thế bằng x-use-decorator-props và x-use-component-props

x-use-decorator-props và x-use-component-props không xâm phạm và được hỗ trợ bởi tất cả các thành phần.
