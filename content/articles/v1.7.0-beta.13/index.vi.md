---
title: "NocoBase v1.7.0-beta.13: Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt"
description: "Ghi chú phát hành của v1.7.0-beta.13"
---

### 🚀 Cải tiến

- **[database]**
  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher

  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher

- **[client]** hỗ trợ cấu hình hiển thị dấu hai chấm trong nhãn trường biểu mẫu dựa trên bố cục ([#6561](https://github.com/nocobase/nocobase/pull/6561)) bởi @katherinehhh

- **[Quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của bộ sưu tập lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher

- **[Luồng công việc]** Cải thiện mã ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]**
  - Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi đang cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher

  - Khi xóa bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile

- **[client]**
  - Sửa thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher

  - vấn đề cascade: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh

  - trường liên kết (chọn) hiển thị N/A khi hiển thị các trường của bộ sưu tập liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh

  - nút gửi và làm mới không hiển thị đúng chế độ chỉ biểu tượng ([#6592](https://github.com/nocobase/nocobase/pull/6592)) bởi @katherinehhh

- **[Biểu mẫu công khai]** Quyền xem bao gồm danh sách và lấy ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos

- **[Xác thực]** gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Vấn đề lọc theo trường trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile

- **[Luồng công việc]** Sửa tùy chọn đồng bộ hiển thị không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher

- **[Khối: Bản đồ]** xác thực quản lý bản đồ không được vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh

- **[Xác thực: OIDC]** Chuyển hướng không chính xác xảy ra khi đường dẫn callback là chuỗi 'null' bởi @2013xile

- **[Luồng công việc: Phê duyệt]**
  - Sửa biến client để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher

  - Sửa chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher
