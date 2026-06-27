---
title: "NocoBase v2.1.0-beta.37: hỗ trợ xác thực cơ bản"
description: "Ghi chú phát hành của v2.1.0-beta.37"
---

### 🎉 Tính năng mới

- **[client-v2]** Thêm menu Bảo mật và trang cài đặt Chính sách Token vào admin v2; trung tâm người dùng hiện hỗ trợ Đổi mật khẩu. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) bởi @Molunerfinn

- **[cli]** hỗ trợ xác thực cơ bản ([#9558](https://github.com/nocobase/nocobase/pull/9558)) bởi @chenos

- **[Chính sách mật khẩu]** Di chuyển plugin-password-policy vào shell admin client-v2 với các trang cài đặt Chính sách mật khẩu / Người dùng bị khóa và thực thi quy tắc phía client trên biểu mẫu đổi mật khẩu của trung tâm người dùng. bởi @Molunerfinn

### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client v2 cho các khối biểu đồ. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) bởi @jiannx

- **[Quy trình làm việc]** Tái cấu trúc kiểm tra tính khả dụng của nút async-node ([#9532](https://github.com/nocobase/nocobase/pull/9532)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[build]**
  - Các tài sản văn bản trong bản build server hiện được sao chép dưới dạng tệp thay vì được chuyển đổi thành các mô-đun JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) bởi @Molunerfinn

  - Đã sửa đầu ra làm rối plugin server để tránh các biến toàn cục trình duyệt trong các gói runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn

- **[client-v2]** Đã sửa siêu dữ liệu ngôn ngữ trình duyệt để trang ứng dụng theo ngôn ngữ ứng dụng đã chọn thay vì được đánh dấu là tiếng Anh. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) bởi @Molunerfinn

- **[Quản lý tệp]** Hiển thị bản xem trước PDF an toàn với PDF.js thay vì hiển thị PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher

- **[Nhân viên AI]** Đã sửa mô tả không chính xác của tên công cụ trong lời nhắc ngữ cảnh công việc ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock

- **[Quy trình làm việc: Nút thủ công]** Đã sửa lỗi lưu tạm thời cho các tác vụ quy trình làm việc thủ công không lưu trữ các giá trị biểu mẫu đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher

- **[Xác thực: OIDC]** Đã sửa lỗi rò rỉ token khi các callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài bởi @2013xile

- **[Quy trình làm việc: Phê duyệt]**
  - Đã sửa lỗi rút lại phê duyệt để cập nhật dữ liệu kinh doanh đã gửi trong khi vẫn tôn trọng quyền cập nhật của bộ sưu tập nguồn. bởi @mytharcher

  - Sửa lỗi API `jobs:resume` không được nút phê duyệt hỗ trợ bởi @mytharcher

  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi các ủy quyền xảy ra đồng thời trên cùng một công việc phê duyệt. bởi @mytharcher

  - Đã sửa lỗi các việc cần làm phê duyệt cũ khi quy trình làm việc phê duyệt bị chấm dứt do lỗi nút không phải phê duyệt. bởi @mytharcher
