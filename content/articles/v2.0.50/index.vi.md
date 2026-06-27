---
title: "NocoBase v2.0.50: hỗ trợ tùy chọn \"Hiển thị nút sao chép\" cho trường văn bản chỉ đọc"
description: "Ghi chú phát hành phiên bản v2.0.50"
---

### 🎉 Tính năng mới

- **[client]** Thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh

- **[Sao chép văn bản]** Hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh

### 🚀 Cải tiến

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn

- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu luồng v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx

- **[client]**
  - Đã sửa lỗi trường `Ẩn (giá trị dự phòng)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor, và khôi phục hỗ trợ nhập giá trị để gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx

  - Sửa lỗi tên tệp tải xuống không chính xác cho trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher

  - Đã sửa lỗi kích hoạt quy trình hàng loạt bảng v2 để lựa chọn hàng luôn nhất quán sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx

  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe

  - sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh

  - sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực đúng khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh

  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi giữa các trang đã lưu trong bộ nhớ đệm ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe

  - sửa lỗi thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh

  - sửa lỗi ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh

  - Đã sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust

  - Sửa lỗi khi lọc các trường vô hướng bằng bộ lọc đa lựa chọn tùy chỉnh ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe

- **[server]** xác thực tên gói plugin trước các thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos

- **[Trình quản lý nguồn dữ liệu]** ngăn chặn việc chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh

- **[Nguồn dữ liệu: Chính]** Đã sửa lỗi các bảng cơ sở dữ liệu đã nhập sử dụng tên bảng có tiền tố sai khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile

- **[Thông báo: Tin nhắn trong ứng dụng]** Đã sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher

- **[Khối: Kanban]** sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh

- **[Trường bộ sưu tập: Công thức]** sửa lỗi trường công thức trong bảng con v2 không được kích hoạt để tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh
