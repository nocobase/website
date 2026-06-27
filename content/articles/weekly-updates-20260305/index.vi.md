---
title: "Cập nhật hàng tuần｜Nhân viên AI hiện hỗ trợ tìm kiếm tài liệu tích hợp với nhiều từ khóa"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 27 tháng 2 đến ngày 5 tháng 3 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Ngày phát hành: 2026-03-04*

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Đã sửa lỗi trò chuyện nhân viên AI khi bật kiến thức nền ([#8746](https://github.com/nocobase/nocobase/pull/8746)) bởi @cgyrock
- **[Công cụ luồng]** sửa lỗi sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) bởi @chenos
- **[Kiểm soát truy cập]** Phiên bản cơ sở dữ liệu được sử dụng khi thiết lập metadata ACL không chính xác ([#8747](https://github.com/nocobase/nocobase/pull/8747)) bởi @2013xile
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi kết quả truy vấn không hiển thị do các nút bị lọc theo loại bởi @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Ngày phát hành: 2026-03-03*

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi component CollectionField không hiển thị trong component DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher
  - Đã sửa lỗi khối dữ liệu không làm mới khi chuyển menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust
- **[database]** Sửa lỗi kiểm tra biểu thức chính quy tùy chỉnh trường thất bại trong v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx
- **[flow-engine]** Đã sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng định nghĩa. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust
- **[Quy trình làm việc: Phê duyệt]** Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Ngày phát hành: 2026-03-01*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[server]** Giải quyết vấn đề bộ nhớ đệm bằng cách thêm hash vào assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos
- **[Nhân viên AI]** Đã sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi quy trình làm việc hành động tùy chỉnh bị treo khi thực thi như một luồng con ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher
  - Sửa lỗi ném ra khi thực thi quy trình làm việc phê duyệt thủ công bởi @mytharcher
  - Sửa lỗi ném ra do giá trị `dataAfter` bị thiếu khi được thêm hoặc ủy quyền bởi @mytharcher
  - Sửa lỗi tham số appends lọc theo ACL bởi @mytharcher
  - Sửa lỗi ACL khi giá trị liên kết không nên được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Ngày phát hành: 2026-02-27*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Hỗ trợ tìm kiếm tài liệu tích hợp với nhiều từ khóa và đọc nhiều tài liệu trong một lần gọi công cụ duy nhất ([#8718](https://github.com/nocobase/nocobase/pull/8718)) bởi @2013xile

### 🚀 Cải tiến

- **[client]** hỗ trợ cấu hình tóm tắt cho bảng ([#8721](https://github.com/nocobase/nocobase/pull/8721)) bởi @chenos
- **[Nhúng NocoBase]** Cung cấp API làm sạch để lọc các giá trị liên kết trong hành động ([#8688](https://github.com/nocobase/nocobase/pull/8688)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** sửa i18n cho văn bản mục nhập biểu đồ plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) bởi @heziqiang
- **[Quy trình làm việc: JavaScript]** Sửa lỗi các trường hợp kiểm thử không thể chạy trên windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) bởi @mytharcher
- **[Nhân viên AI]** Giải quyết vấn đề tin nhắn AI hiển thị với độ dài 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) bởi @heziqiang
- **[In mẫu]** Sửa lỗi API ACL đã thay đổi nhưng không được điều chỉnh cho plugin bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher
- **[Quản lý email]** Sửa lỗi phân tích định dạng ID nội dung hình ảnh bởi @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Ngày phát hành: 2026-02-26*

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Đã sửa lỗi hội thoại AI khi sử dụng cơ sở dữ liệu MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) bởi @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Ngày phát hành: 2026-03-04*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi component CollectionField không hiển thị trong component DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher
  - Đã sửa lỗi khối dữ liệu không làm mới khi chuyển menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust
- **[flow-engine]** Đã sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng định nghĩa. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust
- **[database]** Sửa lỗi kiểm tra biểu thức chính quy tùy chỉnh trường thất bại trong v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx
- **[server]** Giải quyết vấn đề bộ nhớ đệm bằng cách thêm hash vào assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos
- **[Kiểm soát truy cập]** Phiên bản cơ sở dữ liệu được sử dụng khi thiết lập metadata ACL không chính xác ([#8747](https://github.com/nocobase/nocobase/pull/8747)) bởi @2013xile
- **[Nhân viên AI]**

  - Đã sửa lỗi trò chuyện nhân viên AI khi bật kiến thức nền ([#8746](https://github.com/nocobase/nocobase/pull/8746)) bởi @cgyrock
  - Đã sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock
- **[Công cụ luồng]** sửa lỗi sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) bởi @chenos
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi quy trình làm việc hành động tùy chỉnh bị treo khi thực thi như một luồng con ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi kết quả truy vấn không hiển thị do các nút bị lọc theo loại bởi @mytharcher
  - Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher
  - Sửa lỗi ném ra khi thực thi quy trình làm việc phê duyệt thủ công bởi @mytharcher
  - Sửa lỗi ném ra do giá trị `dataAfter` bị thiếu khi được thêm hoặc ủy quyền bởi @mytharcher
  - Sửa lỗi ACL khi giá trị liên kết không nên được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher
  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher
  - Sửa lỗi tham số appends lọc theo ACL bởi @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Ngày phát hành: 2026-02-27*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Hỗ trợ tìm kiếm tài liệu tích hợp với nhiều từ khóa và đọc nhiều tài liệu trong một lần gọi công cụ duy nhất ([#8718](https://github.com/nocobase/nocobase/pull/8718)) bởi @2013xile

### 🚀 Cải tiến

- **[client]** hỗ trợ cấu hình tóm tắt cho bảng ([#8721](https://github.com/nocobase/nocobase/pull/8721)) bởi @chenos
- **[Nhân viên AI]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang
- **[Nhúng NocoBase]** Cung cấp API làm sạch để lọc các giá trị liên kết trong hành động ([#8688](https://github.com/nocobase/nocobase/pull/8688)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Giải quyết vấn đề tin nhắn AI hiển thị với độ dài 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) bởi @heziqiang
- **[Trực quan hóa dữ liệu]** sửa i18n cho văn bản mục nhập biểu đồ plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) bởi @heziqiang
- **[Quy trình làm việc: JavaScript]** Sửa lỗi các trường hợp kiểm thử không thể chạy trên windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) bởi @mytharcher
- **[In mẫu]** Sửa lỗi API ACL đã thay đổi nhưng không được điều chỉnh cho plugin bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher
- **[Quản lý email]** Sửa lỗi phân tích định dạng ID nội dung hình ảnh bởi @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Ngày phát hành: 2026-02-26*

### 🚀 Cải tiến

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Đã sửa lỗi hội thoại AI khi sử dụng cơ sở dữ liệu MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) bởi @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Ngày phát hành: 2026-02-26*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Hỗ trợ tìm kiếm tài liệu tích hợp với nhiều từ khóa và đọc nhiều tài liệu trong một lần gọi công cụ duy nhất ([#8718](https://github.com/nocobase/nocobase/pull/8718)) bởi @2013xile

### 🚀 Cải tiến

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]** Trên thiết bị di động, đóng menu trước rồi thực hiện chuyển trang ([#8699](https://github.com/nocobase/nocobase/pull/8699)) bởi @zhangzhonghe
- **[AI LLM: GigaChat]** Đã sửa lỗi plugin GigaChat không hoạt động trong phiên bản 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) bởi @cgyrock
- **[Nhân viên AI]**

  - Đã sửa lỗi hội thoại AI khi sử dụng cơ sở dữ liệu MySQL. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) bởi @cgyrock
  - Thống nhất đầu vào tệp cho các API chatGPT sử dụng ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) bởi @cgyrock
  - Sửa lỗi tác nhân AI khi người dùng gửi tin nhắn mới mà không xác nhận thực thi công cụ ([#8697](https://github.com/nocobase/nocobase/pull/8697)) bởi @cgyrock
- **[AI: Kiến thức nền]** Đã sửa lỗi khởi động plugin kiến thức nền AI. bởi @cgyrock
- **[Quản lý email]** Lỗi hiển thị hình ảnh bởi @jiannx
