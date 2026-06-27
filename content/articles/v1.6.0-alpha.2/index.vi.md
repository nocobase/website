---
title: "NocoBase v1.6.0-alpha.2: Hỗ trợ bật popup mở liên kết trên trường readPretty"
description: "Ghi chú phát hành v1.6.0-alpha.2"
---

### 🎉 Tính năng mới

- **[client]**
  - Hỗ trợ bật popup mở liên kết trên trường readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) bởi @katherinehhh

  - Hỗ trợ thao tác liên kết và hủy liên kết trong khối liên kết ([#5695](https://github.com/nocobase/nocobase/pull/5695)) bởi @katherinehhh

- **[server]** Thêm trình quản lý kiểm toán ([#5601](https://github.com/nocobase/nocobase/pull/5601)) bởi @chenzhizdt

- **[Workflow]** hỗ trợ kích hoạt workflow thủ công ([#5664](https://github.com/nocobase/nocobase/pull/5664)) bởi @mytharcher

- **[Workflow: Sự kiện trước hành động]** hỗ trợ kích hoạt workflow thủ công bởi @mytharcher

### 🚀 Cải tiến

- **[client]**
  - Triển khai tải theo yêu cầu cho các thành phần front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) bởi @gchust

  - Cải thiện hiệu suất hiển thị trang và hỗ trợ chức năng giữ trạng thái trang ([#5515](https://github.com/nocobase/nocobase/pull/5515)) bởi @zhangzhonghe

- **[Trường bộ sưu tập: Sắp xếp]** thêm mô tả plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) bởi @mytharcher

- **[Nhúng NocoBase]** Cải thiện hiệu suất hiển thị trang bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi không thể sử dụng biến đúng cách trong các khối nguồn dữ liệu bên thứ ba ([#5782](https://github.com/nocobase/nocobase/pull/5782)) bởi @zhangzhonghe

  - Sửa lỗi giá trị trường liên kết bị rỗng trong mẫu khối. Sửa lỗi phạm vi dữ liệu khối sử dụng biến không hoạt động đúng trong các nguồn dữ liệu bên thứ ba ([#5777](https://github.com/nocobase/nocobase/pull/5777)) bởi @zhangzhonghe

  - Sửa lỗi thuộc tính động của thành phần không hoạt động với tải chậm ([#5776](https://github.com/nocobase/nocobase/pull/5776)) bởi @gchust

  - Sửa thông báo cảnh báo trong React khi tải hook động trong môi trường phát triển ([#5758](https://github.com/nocobase/nocobase/pull/5758)) bởi @gchust

- **[Trực quan hóa dữ liệu]** Sửa lỗi các thành phần trường bộ lọc của khối biểu đồ không hiển thị ([#5769](https://github.com/nocobase/nocobase/pull/5769)) bởi @2013xile
