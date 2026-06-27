---
title: "NocoBase v2.0.52: thêm biến ngôn ngữ người dùng hiện tại trong v2"
description: "Ghi chú phát hành của v2.0.52"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm biến ngôn ngữ người dùng hiện tại trong v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) bởi @katherinehhh

  - Thêm tùy chọn giới hạn phạm vi ngày cho trường ngày tháng trong biểu mẫu v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** Loại trừ các bản ghi đã được liên kết trong hộp thoại chọn liên kết của khối bảng một-nhiều ([#9448](https://github.com/nocobase/nocobase/pull/9448)) bởi @katherinehhh

- **[Phòng ban]** Tối ưu hóa kiểu danh sách phòng ban bằng cách thêm biểu tượng và điều chỉnh khoảng cách ([#9435](https://github.com/nocobase/nocobase/pull/9435)) bởi @katherinehhh

- **[AI: Cơ sở tri thức]** Định danh duy nhất cho cơ sở tri thức có thể được cấu hình tại thời điểm tạo bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust

  - Đã sửa lỗi không thể chọn tùy chọn cho trường chọn của liên kết. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) bởi @gchust

  - Đã sửa lỗi phạm vi dữ liệu khối mục tiêu được thiết lập không chính xác khi bỏ chọn dữ liệu hàng trong luồng sự kiện khối bảng. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) bởi @gchust

  - Sửa lỗi yêu cầu bảng trùng lặp khi bộ lọc biểu mẫu có giá trị mặc định ([#9423](https://github.com/nocobase/nocobase/pull/9423)) bởi @zhangzhonghe

  - Đã sửa quy tắc liên kết V2 để hỗ trợ thiết lập các tùy chọn có thể chọn cho trường ([#9399](https://github.com/nocobase/nocobase/pull/9399)) bởi @jiannx

  - sửa lỗi khi thay đổi trường tiêu đề của trường liên kết trong khối bảng v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) bởi @katherinehhh

  - Đã sửa lỗi gián đoạn khiến quy tắc liên kết nút hành động không có hiệu lực. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) bởi @gchust

  - ẩn thành phần bảng con cho các trường liên kết nhiều-nhiều trong bảng con v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) bởi @katherinehhh

- **[server]** sửa(file-manager): buộc tải xuống các tệp nội dung hoạt động trong bộ nhớ local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) bởi @mytharcher

- **[Nhân viên AI]** Đã sửa lỗi Ollama test flight yêu cầu nhập khóa ([#9450](https://github.com/nocobase/nocobase/pull/9450)) bởi @cgyrock

- **[Trình quản lý đồ thị bộ sưu tập]** sửa lỗi bố cục tự động của giao diện đồ họa gây ra lỗi bộ lọc hành động cập nhật ([#9421](https://github.com/nocobase/nocobase/pull/9421)) bởi @katherinehhh

- **[Quy trình làm việc]** sửa: khôi phục văn bản trợ giúp trong hộp thoại liên kết quy trình làm việc FlowModel cho các sự kiện hành động tùy chỉnh và thao tác ([#9447](https://github.com/nocobase/nocobase/pull/9447)) bởi @mytharcher

- **[Phòng ban]** sửa xung đột dịch thuật giữa nút thêm người dùng và thêm phòng ban trong cài đặt Người dùng & Quyền hạn ([#9456](https://github.com/nocobase/nocobase/pull/9456)) bởi @katherinehhh

- **[Trường bộ sưu tập: Markdown(Vditor)]** sửa lỗi chú thích trường markdown bị ẩn trong bố cục biểu mẫu ngang ([#9420](https://github.com/nocobase/nocobase/pull/9420)) bởi @katherinehhh

- **[WEB client]** Sửa lỗi lọc loại tuyến đường khi sử dụng nhãn đã dịch ([#9425](https://github.com/nocobase/nocobase/pull/9425)) bởi @zhangzhonghe

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi trường JS xuất hiện trong cài đặt quy trình phê duyệt bởi @zhangzhonghe

  - Sửa bố cục biểu mẫu phê duyệt trên thiết bị di động bởi @zhangzhonghe

  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền nhiệm vụ phê duyệt. bởi @mytharcher

- **[Trình quản lý sao lưu]** Đã sửa lỗi sao lưu thất bại với lỗi khi không tìm thấy tệp. bởi @gchust
