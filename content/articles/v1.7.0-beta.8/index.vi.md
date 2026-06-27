---
title: "NocoBase v1.7.0-beta.8: Hỗ trợ biến môi trường trong URL nút liên kết"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.8"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cài đặt kiểu cho trường với các tùy chọn cỡ chữ, độ đậm chữ và kiểu chữ ([#6489](https://github.com/nocobase/nocobase/pull/6489)) bởi @katherinehhh

- **[Biến và bí mật]** hỗ trợ biến môi trường trong URL của nút liên kết ([#6494](https://github.com/nocobase/nocobase/pull/6494)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** hỗ trợ khớp mờ cho các trường được chọn trong nút bộ lọc ([#6496](https://github.com/nocobase/nocobase/pull/6496)) bởi @katherinehhh

- **[Workflow: nút gửi thư]** Thêm mô tả cấu hình trường bảo mật. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) bởi @sheldon66

- **[WEB client]** thêm lời nhắc xác nhận thứ cấp cho Xóa bộ nhớ đệm ([#6505](https://github.com/nocobase/nocobase/pull/6505)) bởi @katherinehhh

- **[Thông báo: Email]** Thêm mô tả cấu hình trường bảo mật. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) bởi @sheldon66

- **[Trình quản lý Email]** hỗ trợ cấp quyền lại & tự động chọn tài khoản khi gửi email bởi @jiannx

### 🐛 Sửa lỗi

- **[server]** Lệnh nâng cấp có thể gây ra lỗi workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust

- **[client]**
  - Chiều cao của bảng con trong biểu mẫu được đặt cùng với chiều cao của biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh

  - Lỗi gửi trường thời gian trong ngôn ngữ tiếng Trung (cú pháp đầu vào không hợp lệ cho kiểu thời gian) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) bởi @katherinehhh

  - Độ trong suốt của nút hành động gây ra sự cố hiển thị cài đặt khi di chuột ([#6529](https://github.com/nocobase/nocobase/pull/6529)) bởi @katherinehhh

- **[Xác thực]**
  - Cắt bớt các tùy chọn xác thực ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile

  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos

- **[Khối: Bản đồ]**
  - Sự cố quản lý khóa của khối bản đồ gây ra lỗi yêu cầu do ký tự ẩn ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh

  - Các trường khóa bí mật không kích hoạt xác thực trong quản lý bản đồ ([#6509](https://github.com/nocobase/nocobase/pull/6509)) bởi @katherinehhh

- **[Trình quản lý tệp]** Không thể truy cập tệp được lưu trữ trong COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) bởi @chenos

- **[Hành động: Xuất bản ghi Pro]** Không thể xuất tệp đính kèm bởi @chenos

- **[Trình quản lý sao lưu]** Việc khôi phục có thể gây ra lỗi thực thi workflow bởi @gchust

- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Sửa lỗi bảng tiến trình khi công việc bị xóa bởi @mytharcher

  - Sửa lỗi xảy ra khi thêm kết quả nút truy vấn bởi @mytharcher

  - Sửa lỗi treo do người dùng null bởi @mytharcher
