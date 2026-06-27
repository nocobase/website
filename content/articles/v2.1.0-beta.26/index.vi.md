---
title: "NocoBase v2.1.0-beta.26: thêm hành động liên kết và hủy liên kết vào khối liên kết"
description: "Ghi chú phát hành của v2.1.0-beta.26"
---

### 🎉 Tính năng mới

- **[client]** Thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client-v2 cho các plugin khối ([#9297](https://github.com/nocobase/nocobase/pull/9297)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client-v2]**
  - Sửa lỗi một số trang v2 không tải được plugin từ xa ([#9369](https://github.com/nocobase/nocobase/pull/9369)) bởi @zhangzhonghe

  - Sửa lỗi vị trí giữ chỗ và thả khối khi kéo trên trang v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) bởi @zhangzhonghe

- **[client]**
  - Sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust

  - Sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực đúng khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh

  - Sửa lỗi ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh

  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi giữa các trang đã lưu cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe

  - Sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh

- **[server]** Xác thực tên gói plugin trước khi thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos

- **[undefined]** Sửa các liên kết hỏng trong tài liệu đã dịch và bật tính năng phát hiện liên kết hỏng theo mặc định trong quá trình xây dựng tài liệu. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) bởi @Molunerfinn

- **[Nhân viên AI]**
  - Sửa lỗi nút nhân viên AI đọc tệp đính kèm trường liên kết trong quy trình làm việc ([#9377](https://github.com/nocobase/nocobase/pull/9377)) bởi @cgyrock

  - Sửa lỗi nút nhân viên AI trong quy trình làm việc không kết thúc đúng cách sau khi gán công cụ. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) bởi @cgyrock

- **[Khối: Kanban]**
  - Cải thiện kiểu dáng gọn nhẹ của thẻ Kanban và tối ưu hóa lựa chọn mẫu cửa sổ bật lên tạo nhanh. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) bởi @jiannx

  - Sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh

  - Sửa lỗi các khối liên kết kanban sử dụng tham số tài nguyên thời gian chạy chưa được giải quyết trong ngữ cảnh cửa sổ bật lên hoặc trang phụ. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) bởi @jiannx

- **[Hành động: Yêu cầu tùy chỉnh]** Nâng cấp koa lên v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) bởi @chenos

- **[Trường bộ sưu tập: Công thức]** Sửa lỗi trường công thức trong bảng con v2 không được kích hoạt để tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh

- **[Trình quản lý email]** Sửa lỗi hiển thị tiêu đề danh tính thư bởi @jiannx
