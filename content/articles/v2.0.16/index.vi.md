---
title: "NocoBase v2.0.16: Sửa lỗi trường có thể kết nối không hiển thị khi liên kết khối dữ liệu dưới nguồn dữ liệu bên ngoài"
description: "Ghi chú phát hành v2.0.16"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi không hiển thị các trường có thể kết nối khi liên kết khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe

  - Sửa lỗi chiều cao khối bảng không có hiệu lực ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx

  - Sửa lỗi khi thêm khối dữ liệu hoặc làm mới trang gây ra làm mới hai lần. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust

- **[Mẫu giao diện]** Sửa lỗi xảy ra khi sử dụng mẫu khối biểu mẫu chỉnh sửa và khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust

- **[Bản nháp biểu mẫu]** Sửa lỗi dữ liệu bản nháp biểu mẫu bị mất khi cửa sổ popup được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust

- **[Bản địa hóa]** Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx
