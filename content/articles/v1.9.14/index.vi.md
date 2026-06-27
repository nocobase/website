---
title: "NocoBase v1.9.14: Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa xác thực"
description: "Ghi chú phát hành phiên bản v1.9.14"
---

### 🎉 Tính năng mới

- **[Auth: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa xác thực bởi @heziqiang

### 🚀 Cải tiến

- **[client]** Sử dụng ba ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher

- **[Trường bộ sưu tập: Markdown(Vditor)]** Điều chỉnh độ rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[database]** Sửa: loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự dịch chuyển do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu

- **[client]** Sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh

- **[Workflow]**
  - Sửa lỗi các thực thi đã chuẩn bị không được gửi vào hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher

  - Sửa lỗi tác vụ liên kết đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher

  - Sửa lỗi một số menu tác vụ workflow không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher

  - Sửa lỗi số lượng tác vụ không hiển thị do sử dụng sai nhà cung cấp ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Sửa lỗi số lượng tác vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]**
  - Cài đặt trường bộ lọc cho các bộ sưu tập nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile

  - Giải quyết vấn đề truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock

- **[Hành động: Nhập bản ghi]** Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock
