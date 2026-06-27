---
title: "NocoBase v2.1.5: Bổ sung hỗ trợ gửi tệp đính kèm trong nút gửi thư quy trình làm việc"
description: "Ghi chú phát hành phiên bản v2.1.5"
---

### 🎉 Tính năng mới

- **[Workflow: Nút Mailer]** Đã thêm hỗ trợ gửi tệp đính kèm trong nút mailer của workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) bởi @mytharcher

### 🚀 Cải tiến

- **[client-v2]** Phạm vi dữ liệu cột trường quan hệ trong bảng con biểu mẫu hiện hỗ trợ biến mục hiện tại. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) bởi @gchust
- **[undefined]** Đã thống nhất tên tài liệu tiếng Trung của plugin kiểm soát phiên bản thành “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) bởi @cgyrock
- **[Trình quản lý tệp]** Đã thêm hỗ trợ văn bản có thể chọn vào bản xem trước PDF trong trình quản lý tệp đối với các PDF có văn bản nhúng. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) bởi @mytharcher
- **[Hành động: Chỉnh sửa hàng loạt]** Đã tối ưu hóa phương pháp tải cho các plugin hành động v2 và giữ nguyên thứ tự của các nút hành động đã được di chuyển. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) bởi @katherinehhh
- **[Kiểm soát phiên bản]** Đã thay đổi tên hiển thị tiếng Trung của plugin kiểm soát phiên bản thành “版本控制”. bởi @cgyrock

### 🐛 Sửa lỗi

- **[cli-v1]** Đã sửa lỗi khi chạy `yarn dev` sau khi nâng cấp các dự án được tạo bằng create-nocobase-app từ 2.0 lên 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) bởi @Molunerfinn
- **[client-v2]** Đã sửa lỗi tiến trình di chuyển không hiển thị chế độ xem tiến trình chuyên dụng. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) bởi @2013xile
- **[flow-engine]** Đã sửa lỗi nhập liệu IME tiếng Việt và tiếng Trung trong các trường văn bản một dòng và nhiều dòng v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) bởi @katherinehhh
- **[server]** Đã sửa lỗi xử lý tên plugin không an toàn trong `pm:enable` để ngăn ngừa rủi ro bao gồm tệp cục bộ trong quá trình phân giải plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) bởi @mytharcher
- **[Trình quản lý tệp]** Đã sửa lỗi xem trước PDF thất bại do tải module worker pdf.js bất thường. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) bởi @mytharcher
- **[Khối: Kanban]** Đã sửa lỗi khi mở các khối Lịch, Gantt và Kanban bên ngoài chế độ chỉnh sửa, vô tình lưu lại các hành động popup ẩn và gửi yêu cầu xóa lặp lại. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) bởi @jiannx
- **[Hành động: Xuất bản ghi Pro]** Đã cải thiện cài đặt chế độ xử lý và gợi ý giải thích cho v2 Import/Export Pro. bởi @katherinehhh
- **[Trình quản lý di chuyển]** Đã sửa lỗi có thể thất bại khi nhập các tệp dữ liệu di chuyển lớn. bởi @2013xile
- **[In mẫu]** Đã từ chối các loại tệp mẫu không được hỗ trợ trước khi bắt đầu in mẫu. bởi @2013xile
