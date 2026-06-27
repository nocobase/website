---
title: "NocoBase v1.5.7: Loại bỏ ghi log lỗi console cho các lần thử kết nối SSE"
description: "Ghi chú phát hành phiên bản v1.5.7"
---

### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Loại bỏ ghi lỗi console cho các lần kết nối lại SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]**
  - Thiếu cài đặt kéo thả trong modal thao tác tạo nhanh dữ liệu quan hệ ([#6201](https://github.com/nocobase/nocobase/pull/6201)) bởi @katherinehhh

  - Vấn đề với định dạng số có độ chính xác cao không được áp dụng ([#6202](https://github.com/nocobase/nocobase/pull/6202)) bởi @katherinehhh

  - Sửa lỗi khi xóa trường liên kết trong biểu mẫu nhưng giá trị trường không thực sự bị xóa khi gửi biểu mẫu ([#5540](https://github.com/nocobase/nocobase/pull/5540)) bởi @zhangzhonghe

  - Khối không làm mới sau khi gửi biểu mẫu ([#6206](https://github.com/nocobase/nocobase/pull/6206)) bởi @zhangzhonghe

  - Giá trị trường liên kết vẫn tồn tại khi gửi sau khi đặt lại trường quan hệ ([#6207](https://github.com/nocobase/nocobase/pull/6207)) bởi @katherinehhh

  - Hiển thị thao tác cập nhật cho các hàng không có quyền cập nhật trong bảng ([#6204](https://github.com/nocobase/nocobase/pull/6204)) bởi @katherinehhh

- **[Trường bộ sưu tập: Sắp xếp]** Sửa lỗi kiểu trường sắp xếp không được đăng ký trong nguồn dữ liệu bên ngoài ([#6212](https://github.com/nocobase/nocobase/pull/6212)) bởi @mytharcher

- **[Xác thực]** Vấn đề xác thực WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) bởi @2013xile

- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** Sửa URL yêu cầu không còn được dùng trong hook bởi @mytharcher
