---
title: "NocoBase v1.6.15: Thêm tùy chọn trim cho trường văn bản"
description: "Ghi chú phát hành phiên bản v1.6.15"
---

### 🚀 Cải tiến

- **[database]**
  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher

  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher

- **[Quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của bộ sưu tập lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher

- **[Quy trình làm việc]** Cải thiện mã nguồn ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher

- **[client]**
  - Trường liên kết (chọn) hiển thị N/A khi hiển thị các trường của bộ sưu tập liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh

  - Sửa lỗi thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher

  - Vấn đề xếp tầng: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Vấn đề lọc theo các trường trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile

- **[Biểu mẫu công khai]** Quyền xem bao gồm danh sách và lấy ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos

- **[Xác thực]** Gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile

- **[Quy trình làm việc]** Sửa lỗi hiển thị tùy chọn đồng bộ không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher

- **[Khối: Bản đồ]** Xác thực quản lý bản đồ không được phép vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi biến client để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher

  - Sửa lỗi chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher
