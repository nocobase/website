---
title: "NocoBase v2.1.0-alpha.9: Cho phép thêm nhân viên AI trong popup của bảng con"
description: "Ghi chú phát hành v2.1.0-alpha.9"
---

### 🎉 Tính năng mới

- **[AI nhân viên]** Cho phép thêm AI nhân viên trong popup của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile

- **[AI: MCP server]** Thêm plugin MCP server mới để cho phép xây dựng hệ thống NocoBase và hỗ trợ các quy trình nghiệp vụ. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) bởi @2013xile

### 🚀 Cải tiến

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) bởi @gaston98765

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi xác thực phía máy chủ cho trường ngày tháng ([#8867](https://github.com/nocobase/nocobase/pull/8867)) bởi @2013xile

- **[client]**
  - Sửa lỗi trường có thể kết nối không hiển thị khi liên kết khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe

  - Sửa lỗi thêm khối dữ liệu hoặc làm mới trang gây ra làm mới hai lần. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust

  - Sửa lỗi giá trị mặc định của một số trường không có hiệu lực sau khi làm mới trang. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) bởi @gchust

  - Sửa lỗi chiều cao khối bảng không hợp lệ ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx

- **[Bản địa hóa]**
  - localizationTexts: ngoại lệ quyền truy cập giao diện bị thiếu ([#8861](https://github.com/nocobase/nocobase/pull/8861)) bởi @jiannx

  - Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx

- **[Bản nháp biểu mẫu]** Sửa lỗi dữ liệu bản nháp biểu mẫu bị mất khi popup được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust

- **[Mẫu giao diện]** Sửa lỗi xảy ra khi sử dụng mẫu khối biểu mẫu chỉnh sửa và khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust

- **[AI: Cơ sở tri thức]** Ngăn không cho xóa cơ sở dữ liệu vector và bộ nhớ vector đang được sử dụng. bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx

- **[Trình quản lý email]** Điều chỉnh chức năng trả lời và trả lời tất cả người nhận, sửa lỗi thêm trường bảng không thành công và các vấn đề khác bởi @jiannx

- **[Trình quản lý di chuyển]** Sửa lỗi không thể chọn bảng hệ thống trong quy tắc tùy chỉnh bởi @cgyrock
