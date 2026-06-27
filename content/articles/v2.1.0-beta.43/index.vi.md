---
title: "NocoBase v2.1.0-beta.43: Cập nhật tài liệu Embed NocoBase cho plugin mã nguồn mở"
description: "Ghi chú phát hành v2.1.0-beta.43"
---

### 🎉 Tính năng mới

- **[client-v2]** Thêm `TypedVariableInput` để các trường cổng SMTP và chế độ bảo mật của plugin email v2 có thể chấp nhận hằng số đã định kiểu hoặc biến `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) bởi @Molunerfinn

- **[Kiểm soát truy cập]** Đã chuyển các trang cài đặt Người dùng và Vai trò & Quyền sang v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) bởi @jiannx

### 🚀 Cải tiến

- **[undefined]** Cập nhật tài liệu Nhúng NocoBase cho plugin mã nguồn mở ([#9642](https://github.com/nocobase/nocobase/pull/9642)) bởi @zhangzhonghe
Tham khảo: [Nhúng NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp sẵn. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) bởi @gchust

- **[cli]** Cải thiện hướng dẫn khởi tạo và tự cập nhật ([#9633](https://github.com/nocobase/nocobase/pull/9633)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi khối có thể hiển thị sai là đã bị xóa sau khi làm mới trang ([#9662](https://github.com/nocobase/nocobase/pull/9662)) bởi @zhangzhonghe

  - Sửa hành vi quy tắc liên kết hành động bản ghi không chính xác trong khối bảng. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) bởi @gchust

  - (quy tắc liên kết) sửa lỗi trường trở thành chỉ đọc khi được hiển thị sau khi bị ẩn ([#9649](https://github.com/nocobase/nocobase/pull/9649)) bởi @katherinehhh

- **[cli]** Sửa mẫu nginx để phục vụ tài nguyên `.mjs` với kiểu MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) bởi @mytharcher

- **[database]** Sửa lỗi nhập giá trị mật khẩu dạng số có thể thất bại ([#9635](https://github.com/nocobase/nocobase/pull/9635)) bởi @2013xile

- **[flow-engine]**
  - Sửa lỗi cửa sổ bật lên hiển thị dữ liệu UI cũ sau khi chuyển đổi công tắc chế độ cấu hình UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) bởi @gchust

  - Sửa lỗi tìm kiếm trường bị xóa khi di chuột qua các trường liên kết ([#9646](https://github.com/nocobase/nocobase/pull/9646)) bởi @zhangzhonghe

- **[client-v2]** Giữ nguyên giá trị trường được gán ([#9640](https://github.com/nocobase/nocobase/pull/9640)) bởi @katherinehhh

- **[Quản lý tệp]** Sửa xác thực đường dẫn lưu trữ tệp cục bộ để ngăn các đường dẫn không an toàn thoát khỏi thư mục gốc lưu trữ đã cấu hình. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) bởi @mytharcher

- **[Khối: Gantt]** Cải thiện vị trí chú thích công cụ gantt để tránh che khuất thanh tác vụ và căn chỉnh nhãn tác vụ nhất quán bên trong và bên ngoài thanh ([#9638](https://github.com/nocobase/nocobase/pull/9638)) bởi @jiannx

- **[Kiểm soát truy cập]** Sửa lỗi quyền không đầy đủ khi đăng nhập lần đầu nếu vai trò hợp nhất là mặc định ([#9632](https://github.com/nocobase/nocobase/pull/9632)) bởi @2013xile

- **[Cài đặt giấy phép]** Sửa lỗi trang cài đặt giấy phép bị treo trong thời gian dài khi kiểm tra đăng nhập pkg chậm hoặc không thể truy cập ([#9650](https://github.com/nocobase/nocobase/pull/9650)) bởi @hongboji

- **[Workflow: JavaScript]** Làm rõ rằng chế độ hỗ trợ mô-đun JavaScript của Workflow là không an toàn và không phải là ranh giới quyền ([#9629](https://github.com/nocobase/nocobase/pull/9629)) bởi @mytharcher
Tham khảo: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Chính sách mật khẩu]** Sửa lỗi xác thực chính sách mật khẩu có thể thất bại đối với giá trị mật khẩu dạng số bởi @2013xile
