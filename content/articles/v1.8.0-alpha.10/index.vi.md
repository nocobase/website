---
title: "NocoBase v1.8.0-alpha.10: Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài"
description: "Ghi chú phát hành của v1.8.0-alpha.10"
---

### 🎉 Tính năng mới

- **[Trình quản lý nguồn dữ liệu]** ✨ Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài ([#6979](https://github.com/nocobase/nocobase/pull/6979)) bởi @aaaaaajie

- **[Luồng công việc: Nút yêu cầu HTTP]** Hỗ trợ yêu cầu `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) bởi @shushu992

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài bởi @aaaaaajie

### 🐛 Sửa lỗi

- **[client]**
  - Khi các biến tham số truy vấn URL trống, các điều kiện phạm vi dữ liệu không bị loại bỏ ([#7104](https://github.com/nocobase/nocobase/pull/7104)) bởi @zhangzhonghe

  - Giới hạn phạm vi không chính xác trên các trường ngày tháng có thời gian ([#7107](https://github.com/nocobase/nocobase/pull/7107)) bởi @katherinehhh

- **[Thiết bị di động]** Sửa lỗi chỉ số z của cửa sổ bật lên trên thiết bị di động ([#7110](https://github.com/nocobase/nocobase/pull/7110)) bởi @zhangzhonghe

- **[Lịch]** Sự cố trường ngày tháng trong biểu mẫu tạo nhanh của khối lịch ([#7106](https://github.com/nocobase/nocobase/pull/7106)) bởi @katherinehhh

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi API biến cũ gây ra lỗi bởi @mytharcher

  - Sửa kiểu hiển thị trên thiết bị di động bởi @mytharcher

  - Sửa lỗi xảy ra khi bộ sưu tập liên quan đến phê duyệt bị xóa bởi @mytharcher

- **[Trình quản lý email]** Tệp đính kèm không hiển thị bởi @jiannx
