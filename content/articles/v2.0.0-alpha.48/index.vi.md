---
title: "NocoBase v2.0.0-alpha.48: Thêm khối bản đồ 2.0"
description: "Ghi chú phát hành của v2.0.0-alpha.48"
---

### 🎉 Tính năng mới

- **[Khối: Bản đồ]** Thêm khối bản đồ 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) bởi @katherinehhh

- **[Xác thực: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa được xác thực bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]**
  - Tránh lỗi xảy ra khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher

  - Khắc phục lỗi khi thêm bản ghi con trong khối bảng cây liên kết ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh

  - Sửa lỗi hiển thị khi trường markdown bị rút gọn ở chế độ HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) bởi @katherinehhh

  - Sửa lỗi kết quả tìm kiếm không đầy đủ trong bộ chọn xếp tầng ([#7990](https://github.com/nocobase/nocobase/pull/7990)) bởi @katherinehhh

  - Sửa lỗi trạng thái tab trang và route không tương ứng ([#7991](https://github.com/nocobase/nocobase/pull/7991)) bởi @zhangzhonghe

  - Sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh

- **[database]** Sửa: Loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự thay đổi do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu

- **[Workflow]**
  - Sửa lỗi các thực thi đã chuẩn bị không được gửi vào hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher

  - Sửa lỗi một số menu tác vụ workflow không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher

  - Sửa lỗi liên kết tác vụ dẫn đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Cài đặt trường bộ lọc cho các bộ sưu tập nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock

- **[Hành động: Nhập bản ghi]** Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock

- **[Workflow: Nút thủ công]** Sửa lỗi số lượng tác vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher

  - Sửa lỗi bình luận trong kết quả công việc bị null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher
