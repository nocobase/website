---
title: "Cập nhật hàng tuần｜Cho phép thêm nhân viên AI trong cửa sổ bật lên của bảng con"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 13 đến ngày 19 tháng 3 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Ngày phát hành: 2026-03-18*

### 🚀 Cải tiến

- **[Workflow]** Sửa lỗi tắt máy an toàn không xử lý hết tất cả sự kiện ([#8894](https://github.com/nocobase/nocobase/pull/8894)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[AI employees]** Sửa lỗi URL được chỉ định cho dịch vụ LLM không có hiệu lực trong các lệnh gọi mô hình nhúng văn bản. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) bởi @cgyrock
- **[Action: Import records Pro]** Sửa lỗi sự kiện `beforeStop` trên ứng dụng con không được kích hoạt bởi @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Ngày phát hành: 2026-03-17*

### 🎉 Tính năng mới

- **[AI employees]**

  - Dọn dẹp dữ liệu điểm kiểm tra hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock
  - Cho phép thêm AI employees trong popup của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile
- **[App supervisor]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các hành động bắt đầu và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** cải thiện logic thêm pm ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos
- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust
- **[Async task manager]** Các tác vụ không đồng bộ được thêm vào để hỗ trợ worker trong việc đăng thông báo lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi popup “Chọn bản ghi” trong bảng con không tải được chính xác khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust
- **[AI employees]** Sửa lỗi biến không xác định tiềm ẩn trong các tập lệnh di chuyển nâng cấp plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock
- **[Action: Import records Pro]** Sửa lỗi các tác vụ không đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập không đồng bộ bởi @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Ngày phát hành: 2026-03-14*

### 🚀 Cải tiến

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) bởi @gaston98765

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi giá trị mặc định của một số trường không có hiệu lực sau khi làm mới trang. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) bởi @gchust
- **[database]** Sửa lỗi xác thực phía máy chủ cho trường ngày tháng ([#8867](https://github.com/nocobase/nocobase/pull/8867)) bởi @2013xile
- **[Localization]** localizationTexts: ngoại lệ quyền giao diện bị thiếu ([#8861](https://github.com/nocobase/nocobase/pull/8861)) bởi @jiannx
- **[AI: Knowledge base]** Ngăn không cho xóa cơ sở dữ liệu vector và bộ nhớ vector đang được sử dụng. bởi @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Ngày phát hành: 2026-03-12*

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các trường có thể kết nối không hiển thị khi liên kết các khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe
  - Sửa lỗi chiều cao khối bảng không hợp lệ ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx
  - Sửa lỗi thêm khối dữ liệu hoặc làm mới trang gây ra làm mới kép. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust
- **[UI templates]** Sửa lỗi xảy ra khi sử dụng mẫu khối biểu mẫu chỉnh sửa và khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust
- **[Form drafts]** Sửa lỗi dữ liệu nháp biểu mẫu bị mất khi popup được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust
- **[Localization]** Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx
- **[Action: Import records Pro]** Sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Ngày phát hành: 2026-03-12*

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi chiều cao khối bảng không hợp lệ ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx
  - Sửa lỗi thêm khối dữ liệu hoặc làm mới trang gây ra làm mới kép. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust
  - Sửa lỗi các trường có thể kết nối không hiển thị khi liên kết các khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe
- **[UI templates]** Sửa lỗi xảy ra khi sử dụng mẫu khối biểu mẫu chỉnh sửa và khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust
- **[Form drafts]** Sửa lỗi dữ liệu nháp biểu mẫu bị mất khi popup được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust
- **[Localization]** Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx
- **[Action: Import records Pro]** Sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx
- **[Email manager]** Điều chỉnh người nhận trả lời và trả lời tất cả, sửa lỗi thêm trường bảng thất bại và các vấn đề khác bởi @jiannx
- **[Migration manager]** Sửa lỗi không thể chọn bảng hệ thống trong các quy tắc tùy chỉnh bởi @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Ngày phát hành: 2026-03-14*

### 🎉 Tính năng mới

- **[AI employees]** Cho phép thêm AI employees trong popup của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile
- **[AI: MCP server]** Thêm plugin máy chủ MCP mới để cho phép xây dựng hệ thống NocoBase và hỗ trợ các quy trình làm việc kinh doanh. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) bởi @2013xile

### 🚀 Cải tiến

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) bởi @gaston98765

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi xác thực phía máy chủ cho trường ngày tháng ([#8867](https://github.com/nocobase/nocobase/pull/8867)) bởi @2013xile
- **[client]**

  - Sửa lỗi các trường có thể kết nối không hiển thị khi liên kết các khối dữ liệu dưới nguồn dữ liệu bên ngoài ([#8848](https://github.com/nocobase/nocobase/pull/8848)) bởi @zhangzhonghe
  - Sửa lỗi thêm khối dữ liệu hoặc làm mới trang gây ra làm mới kép. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) bởi @gchust
  - Sửa lỗi giá trị mặc định của một số trường không có hiệu lực sau khi làm mới trang. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) bởi @gchust
  - Sửa lỗi chiều cao khối bảng không hợp lệ ([#8842](https://github.com/nocobase/nocobase/pull/8842)) bởi @jiannx
- **[Localization]**

  - localizationTexts: ngoại lệ quyền giao diện bị thiếu ([#8861](https://github.com/nocobase/nocobase/pull/8861)) bởi @jiannx
  - Các mục không tìm thấy sẽ không được gửi ở trạng thái không chỉnh sửa của trang. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) bởi @jiannx
- **[Form drafts]** Sửa lỗi dữ liệu nháp biểu mẫu bị mất khi popup được mở nhiều lần. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) bởi @gchust
- **[UI templates]** Sửa lỗi xảy ra khi sử dụng mẫu khối biểu mẫu chỉnh sửa và khối chi tiết. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) bởi @gchust
- **[AI: Knowledge base]** Ngăn không cho xóa cơ sở dữ liệu vector và bộ nhớ vector đang được sử dụng. bởi @cgyrock
- **[Action: Import records Pro]** Sửa lỗi không thể chọn nhiều lựa chọn cho các trường trùng lặp trong cấu hình nhập. bởi @jiannx
- **[Email manager]** Điều chỉnh người nhận trả lời và trả lời tất cả, sửa lỗi thêm trường bảng thất bại và các vấn đề khác bởi @jiannx
- **[Migration manager]** Sửa lỗi không thể chọn bảng hệ thống trong các quy tắc tùy chỉnh bởi @cgyrock
