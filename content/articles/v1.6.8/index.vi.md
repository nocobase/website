---
title: "NocoBase v1.6.8: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.6.8"
---

### 🐛 Sửa lỗi

- **[server]** Lệnh nâng cấp có thể gây ra lỗi workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust

- **[client]** Chiều cao của bảng con trong biểu mẫu được thiết lập cùng với chiều cao của biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh

- **[Xác thực]**
  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos

  - Cắt bỏ khoảng trắng trong các tùy chọn xác thực ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile

- **[Khối: Bản đồ]** Vấn đề quản lý khóa của khối bản đồ gây ra lỗi yêu cầu do ký tự ẩn ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh

- **[Trình quản lý sao lưu]** Việc khôi phục có thể gây ra lỗi thực thi workflow bởi @gchust

- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile
