---
title: "NocoBase v2.1.0-beta.9: Khắc phục sự cố không thể chọn bảng hệ thống trong quy tắc tùy chỉnh"
description: "Ghi chú phát hành của v2.1.0-beta.9"
---

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi chiều cao khối bảng không hợp lệ ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx

  - Đã sửa lỗi khi thêm khối dữ liệu hoặc làm mới trang gây ra tình trạng làm mới hai lần. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust

  - Đã sửa lỗi trường có thể kết nối không hiển thị khi liên kết khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe

- **[Mẫu giao diện]** Đã sửa lỗi xảy ra khi sử dụng khối biểu mẫu chỉnh sửa và mẫu khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust

- **[Bản nháp biểu mẫu]** Đã sửa lỗi dữ liệu bản nháp biểu mẫu bị mất khi cửa sổ bật lên được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust

- **[Bản địa hóa]** Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx

- **[Hành động: Nhập bản ghi Pro]** Đã sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx

- **[Trình quản lý email]** Điều chỉnh người nhận trả lời và trả lời tất cả, sửa lỗi thêm trường bảng không thành công và các vấn đề khác bởi @jiannx

- **[Trình quản lý di chuyển]** Sửa lỗi không thể chọn bảng hệ thống trong quy tắc tùy chỉnh bởi @cgyrock
