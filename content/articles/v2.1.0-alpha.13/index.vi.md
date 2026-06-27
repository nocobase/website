---
title: "NocoBase v2.1.0-alpha.13: thêm biến js vào luồng sự kiện"
description: "Ghi chú phát hành của v2.1.0-alpha.13"
---

### 🎉 Tính năng mới

- **[client]** thêm biến js vào luồng sự kiện ([#8938](https://github.com/nocobase/nocobase/pull/8938)) bởi @jiannx

### 🚀 Cải tiến

- **[client]** hỗ trợ thiết lập kiểu trường thông qua runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) bởi @jiannx

- **[flow-engine]** Cải thiện xác thực schema cho api xây dựng giao diện. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) bởi @gchust

- **[Workflow: Sự kiện trước hành động]** Thêm quy tắc xác thực cho trình kích hoạt và nút ([#8971](https://github.com/nocobase/nocobase/pull/8971)) bởi @mytharcher

- **[Workflow]** Thêm biến cho tham số kích thước trang ([#8951](https://github.com/nocobase/nocobase/pull/8951)) bởi @mytharcher

- **[Workflow: Webhook]** Thêm xác thực cho API tạo trình kích hoạt / nút bởi @mytharcher

- **[Workflow: Luồng con]**
  - Thêm xác thực cho API tạo nút bởi @mytharcher

  - Thêm logic phòng vệ để tránh workflow bị treo khi xảy ra ngoại lệ bởi @mytharcher

- **[Workflow: Phê duyệt]** Thêm xác thực cho API trình kích hoạt / nút bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi ngoại lệ khi thêm nút con vào bảng cây trong cửa sổ bật lên ([#8872](https://github.com/nocobase/nocobase/pull/8872)) bởi @jiannx

- **[server]** Tránh xử lý tin nhắn đồng bộ sau khi ứng dụng dừng ([#8940](https://github.com/nocobase/nocobase/pull/8940)) bởi @mytharcher

- **[Hành động: Xuất bản ghi]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp ([#8893](https://github.com/nocobase/nocobase/pull/8893)) bởi @jiannx

- **[Trực quan hóa dữ liệu]** Đã sửa lỗi thống kê dữ liệu bất thường của biểu đồ vai trò gốc sau khi bật plugin không gian ([#8969](https://github.com/nocobase/nocobase/pull/8969)) bởi @jiannx

- **[Hành động: Nhập bản ghi]** Đã sửa lỗi nhập thất bại sau khi mở plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) bởi @jiannx

- **[Workflow: JavaScript]** Sửa lỗi bảo mật ([#8967](https://github.com/nocobase/nocobase/pull/8967)) bởi @mytharcher

- **[Nhân viên AI]** Điều chỉnh khoảng cách giữa các thành phần thẻ công cụ trong AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) bởi @cgyrock

- **[Flow engine]** Xóa sự kiện cũ được sao chép từ kho lưu trữ uiSchema để tránh lỗi khi kích hoạt ([#8957](https://github.com/nocobase/nocobase/pull/8957)) bởi @mytharcher

- **[Xác thực]** sửa acl để hỗ trợ các tham số lọc trạng thái tùy chỉnh ([#8918](https://github.com/nocobase/nocobase/pull/8918)) bởi @jiannx

- **[Hành động: Nhập bản ghi Pro]** giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp bởi @jiannx

- **[Trình quản lý email]** Đã sửa lỗi chữ ký bị ghi đè khi sử dụng mẫu bởi @jiannx
