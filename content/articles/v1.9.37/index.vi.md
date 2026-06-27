---
title: "NocoBase v1.9.37: Cập nhật phiên bản math.js để hỗ trợ thêm nhiều hàm"
description: "Ghi chú phát hành v1.9.37"
---

### 🚀 Cải tiến

- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ thêm nhiều hàm ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher

- **[Notification: In-app message]** Sửa lỗi hiệu năng khi gửi thông báo trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi dữ liệu chọn xếp tầng không bị xóa sau khi gửi thành công trong biểu mẫu tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh

  - Thêm khả năng chịu lỗi cho lược đồ hành động, để tránh trang bị treo khi nhấn nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher

  - Sửa lỗi nút gửi khi bỏ qua xác thực trường bắt buộc không hoạt động nếu đã bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh

- **[Collection field: Many to many (array)]** Sửa lỗi khi nối thêm quan hệ nhiều-nhiều (mảng) cấp hai trong truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock

- **[Workflow]** Sửa lỗi ID lược đồ không được cập nhật trong nút đã sao chép ([#8396](https://github.com/nocobase/nocobase/pull/8396)) bởi @mytharcher
