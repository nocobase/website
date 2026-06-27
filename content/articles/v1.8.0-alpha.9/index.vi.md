---
title: "NocoBase v1.8.0-alpha.9: Thêm biến lịch sử phê duyệt vào kết quả nút"
description: "Ghi chú phát hành v1.8.0-alpha.9"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường BIT của SQL Server cho các nguồn dữ liệu bên ngoài. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) bởi @aaaaaajie

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Hỗ trợ trường BIT của SQL Server trong nguồn dữ liệu bên ngoài bởi @aaaaaajie

- **[Quy trình làm việc: Phê duyệt]** Thêm biến bản ghi phê duyệt vào kết quả nút bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Tự động ẩn thanh thao tác của khối thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe

- **[Xác minh]** Loại bỏ tùy chọn người xác minh khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile

- **[Quy trình làm việc]** Điều chỉnh API của `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) bởi @mytharcher

- **[Quy trình làm việc: Sự kiện trước hành động]** Điều chỉnh API biến bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Điều chỉnh API biến bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Chức năng căn chỉnh văn bản cột bảng không hoạt động ([#7094](https://github.com/nocobase/nocobase/pull/7094)) bởi @zhangzhonghe

  - Gán giá trị trường: Không thể xóa dữ liệu cho các trường quan hệ ([#7086](https://github.com/nocobase/nocobase/pull/7086)) bởi @zhangzhonghe

  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher

  - Điều kiện kiểu trên các trường cột bảng con không được áp dụng chính xác ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh

  - Lọc qua các trường bộ sưu tập quan hệ trong biểu mẫu lọc không hợp lệ ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe

  - Biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh

  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh

  - Lỗi khi nhấp vào nút lọc ([#7100](https://github.com/nocobase/nocobase/pull/7100)) bởi @zhangzhonghe

- **[database]** hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos

- **[Quy trình làm việc]**
  - Sửa lỗi thống kê bị xóa theo tầng bởi phiên bản quy trình làm việc không hiện tại ([#7103](https://github.com/nocobase/nocobase/pull/7103)) bởi @mytharcher

  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7099](https://github.com/nocobase/nocobase/pull/7099)) bởi @mytharcher

  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7091](https://github.com/nocobase/nocobase/pull/7091)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Khắc phục sự cố đăng nhập thất bại sau khi nhập hàng loạt tên người dùng và mật khẩu ([#7076](https://github.com/nocobase/nocobase/pull/7076)) bởi @aaaaaajie

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile

- **[Trình quản lý tệp]** Sửa lỗi trường tệp đính kèm không thể cập nhật trong quy trình phê duyệt ([#7093](https://github.com/nocobase/nocobase/pull/7093)) bởi @mytharcher

- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe

- **[Trường bộ sưu tập: Chuỗi]** Sửa lỗi tính toán chuỗi số nguyên lớn dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sử dụng so sánh thay vì logic ngầm để tránh các vấn đề về kiểu dữ liệu bởi @mytharcher

  - Chỉ người tham gia mới có thể xem (lấy) chi tiết phê duyệt bởi @mytharcher

- **[Trình quản lý email]** Lỗi xóa email bởi @jiannx
