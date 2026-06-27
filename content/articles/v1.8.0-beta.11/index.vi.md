---
title: "NocoBase v1.8.0-beta.11: Hỗ trợ yêu cầu `multipart/form-data`"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.11"
---

### 🎉 Tính năng mới

- **[Workflow: Node yêu cầu HTTP]** Hỗ trợ yêu cầu `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) bởi @shushu992

### 🚀 Cải tiến

- **[Workflow]**
  - Tối ưu giao diện di động ([#7040](https://github.com/nocobase/nocobase/pull/7040)) bởi @mytharcher

  - Điều chỉnh API của `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) bởi @mytharcher

- **[Biểu mẫu công khai]** Tối ưu hiệu suất của các thành phần ngày tháng trong biểu mẫu công khai ([#7117](https://github.com/nocobase/nocobase/pull/7117)) bởi @zhangzhonghe

- **[Workflow: Sự kiện trước hành động]** Điều chỉnh API biến bởi @mytharcher

- **[Workflow: Phê duyệt]** Điều chỉnh API biến bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Giới hạn phạm vi không chính xác trên các trường ngày tháng có thời gian ([#7107](https://github.com/nocobase/nocobase/pull/7107)) bởi @katherinehhh

  - Khi biến tham số truy vấn URL trống, các điều kiện phạm vi dữ liệu không bị xóa ([#7104](https://github.com/nocobase/nocobase/pull/7104)) bởi @zhangzhonghe

- **[Workflow]**
  - Sửa tham số tải bản ghi trong tác vụ ([#7123](https://github.com/nocobase/nocobase/pull/7123)) bởi @mytharcher

  - Sửa kiểm tra thực thi không chính xác trên số nguyên lớn ([#7099](https://github.com/nocobase/nocobase/pull/7099)) bởi @mytharcher

  - Sửa thống kê bị xóa theo tầng bởi phiên bản workflow không hiện tại ([#7103](https://github.com/nocobase/nocobase/pull/7103)) bởi @mytharcher

- **[Di động]** Sửa lỗi z-index của popup trên di động ([#7110](https://github.com/nocobase/nocobase/pull/7110)) bởi @zhangzhonghe

- **[WEB client]** Sửa lỗi khối dưới trang không hiển thị sau khi thiết lập quyền menu vai trò ([#7112](https://github.com/nocobase/nocobase/pull/7112)) bởi @aaaaaajie

- **[Lịch]** Vấn đề trường ngày tháng trong biểu mẫu tạo nhanh của khối lịch ([#7106](https://github.com/nocobase/nocobase/pull/7106)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** Khắc phục sự cố đăng nhập thất bại sau khi nhập hàng loạt tên người dùng và mật khẩu ([#7076](https://github.com/nocobase/nocobase/pull/7076)) bởi @aaaaaajie

- **[Workflow: Phê duyệt]**
  - Sửa lỗi xảy ra khi collection liên quan đến phê duyệt bị xóa bởi @mytharcher

  - Sửa giao diện di động bởi @mytharcher

  - Sửa tên biến người nộp đơn trong trigger bởi @mytharcher

  - Chỉ người tham gia mới có thể xem (lấy) chi tiết phê duyệt bởi @mytharcher

  - Sửa API biến cũ gây ra lỗi bởi @mytharcher
