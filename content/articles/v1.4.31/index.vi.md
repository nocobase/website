---
title: "NocoBase v1.4.31: tối ưu hóa thành phần bộ lọc trong biểu mẫu lọc để khớp với cài đặt có thể lọc"
description: "Ghi chú phát hành v1.4.31"
---

### 🚀 Cải tiến

- **[client]** Tối ưu thành phần bộ lọc trong biểu mẫu lọc để khớp với cài đặt có thể lọc ([#6110](https://github.com/nocobase/nocobase/pull/6110)) bởi @katherinehhh

- **[Quản lý tệp]** Cho phép xóa tệp khi bản ghi tệp (tệp đính kèm) bị xóa ([#6127](https://github.com/nocobase/nocobase/pull/6127)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]**
  - Sửa lỗi lọc theo trường uuid ([#6138](https://github.com/nocobase/nocobase/pull/6138)) bởi @chareice

  - Sửa lỗi cập nhật collection không có khóa chính ([#6124](https://github.com/nocobase/nocobase/pull/6124)) bởi @chareice

- **[client]**
  - Trang quản lý nguồn dữ liệu báo lỗi ([#6141](https://github.com/nocobase/nocobase/pull/6141)) bởi @zhangzhonghe

  - Khi điều kiện của quy tắc liên kết liên quan đến các trường liên kết không được hiển thị, quy tắc liên kết của nút trở nên không hiệu quả ([#6140](https://github.com/nocobase/nocobase/pull/6140)) bởi @zhangzhonghe

  - Sửa lỗi hiển thị biến không chính xác trong biểu mẫu thêm nhanh trường liên kết ([#6119](https://github.com/nocobase/nocobase/pull/6119)) bởi @katherinehhh

  - Nội dung không được hiển thị trong popup thêm nhanh ([#6123](https://github.com/nocobase/nocobase/pull/6123)) bởi @zhangzhonghe

  - Sửa lỗi khối trường liên kết không yêu cầu dữ liệu ([#6125](https://github.com/nocobase/nocobase/pull/6125)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết trong bảng con/biểu mẫu con ảnh hưởng đến các khối trong popup trường liên kết ([#5543](https://github.com/nocobase/nocobase/pull/5543)) bởi @katherinehhh

- **[Trường collection: Phân cấp hành chính Trung Quốc]** Sửa lỗi quyền acl với chinaRegion ([#6137](https://github.com/nocobase/nocobase/pull/6137)) bởi @chareice

- **[Luồng công việc]** Sửa lỗi SQL được tạo không chính xác ([#6128](https://github.com/nocobase/nocobase/pull/6128)) bởi @mytharcher

- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi cập nhật trường nhiều-nhiều (mảng) trong biểu mẫu con không hoạt động ([#6136](https://github.com/nocobase/nocobase/pull/6136)) bởi @2013xile

- **[Di động]** Sửa lỗi select ở chế độ chỉ đọc có thể nhấp và vấn đề tràn văn bản trên di động ([#6130](https://github.com/nocobase/nocobase/pull/6130)) bởi @katherinehhh
