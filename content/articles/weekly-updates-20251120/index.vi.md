---
title: "NocoBase 每周更新：添加 AI 员工用于配置图表"
description: "本周更新包括：添加 AI 员工用于配置图表，优化工具栏样式以防止图标被遮挡，以及更多。"
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/en/blog/v1.9.8)

*Ngày phát hành: 2025-11-19*

### 🐛 Sửa lỗi

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu ngoài không tồn tại bởi @mytharcher
- **[In mẫu]** phân tích các biến trong bộ lọc bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa lỗi khi điều kiện cạnh tranh xảy ra trong quá trình xử lý phê duyệt đồng thời bởi nhiều người phê duyệt có thể khiến một nút workflow thực thi nhiều hơn một lần bởi @mytharcher

### [v1.9.7](https://www.nocobase.com/en/blog/v1.9.7)

*Ngày phát hành: 2025-11-18*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) bởi @zhangzhonghe
- **[server]** Sửa lỗi trong chế độ tách dịch vụ khi các tin nhắn hàng đợi chưa đăng ký không thể được xuất bản ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher
- **[Workflow]**

  - Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher
  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ không chính xác trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa namespace của ngôn ngữ locale cần được sử dụng để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher
- **[Kiểm soát truy cập]** Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi kích thước trang của kênh thông báo tải không đủ lớn, khiến danh sách không được tải hoàn chỉnh bởi @mytharcher
  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động bởi @zhangzhonghe
  - Sửa định dạng ngày trên thẻ danh sách phê duyệt trong trung tâm việc cần làm để hiển thị ngày và giờ đầy đủ bởi @mytharcher
  - Sửa lỗi hiệu năng xảy ra khi truy vấn danh sách các bản ghi phê duyệt trong quá trình gửi phê duyệt bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/en/blog/v2.0.0-alpha.42)

*Ngày phát hành: 2025-11-19*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tiêu đề và mô tả không được hiển thị trong khối JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) bởi @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/en/blog/v2.0.0-alpha.41)

*Ngày phát hành: 2025-11-19*

### 🎉 Tính năng mới

- **[Trực quan hóa dữ liệu]** thêm nhân viên AI để cấu hình biểu đồ ([#7815](https://github.com/nocobase/nocobase/pull/7815)) bởi @heziqiang

### 🚀 Cải tiến

- **[flow-engine]**

  - Hỗ trợ lắng nghe sự kiện thay đổi cây mô hình luồng trong flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) bởi @gchust
  - cải thiện việc giải quyết biến bản ghi hiện tại, giúp mở hộp thoại nhanh hơn ([#7895](https://github.com/nocobase/nocobase/pull/7895)) bởi @gchust
  - Tối ưu hóa cấu trúc API của các thư viện bên thứ ba trong ngữ cảnh runjs và thêm hỗ trợ cho thư viện biểu tượng Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) bởi @gchust
- **[database]** Tái cấu trúc plugin mã hóa trường để tăng cường bảo mật, hỗ trợ tạo và xoay vòng khóa ứng dụng, và khóa mã hóa cho từng trường. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) bởi @cgyrock
- **[Trường bộ sưu tập: Mã hóa]** Tối ưu hóa plugin mã hóa trường để hỗ trợ truy xuất dữ liệu với các IV độc lập bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các khối ẩn vẫn chiếm không gian trên trang. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) bởi @gchust
  - Sửa lỗi nút đặt lại trong nút bộ lọc xóa các điều kiện mặc định ([#7903](https://github.com/nocobase/nocobase/pull/7903)) bởi @zhangzhonghe
  - sửa lỗi kiểm tra quyền không chính xác cho các trường biểu mẫu con trong biểu mẫu mới ([#7902](https://github.com/nocobase/nocobase/pull/7902)) bởi @katherinehhh
- **[server]** Sửa lỗi trong chế độ tách dịch vụ khi các tin nhắn hàng đợi chưa đăng ký không thể được xuất bản ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher
- **[Workflow]**

  - Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher
  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ không chính xác trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa namespace của ngôn ngữ locale cần được sử dụng để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher
- **[Kiểm soát truy cập]** Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu ngoài không tồn tại bởi @mytharcher
- **[Bình luận]** sửa lỗi khi bình luận được trích dẫn trong khối bình luận không hiển thị bởi @katherinehhh
- **[In mẫu]** phân tích các biến trong bộ lọc bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa lỗi khi điều kiện cạnh tranh xảy ra trong quá trình xử lý phê duyệt đồng thời bởi nhiều người phê duyệt có thể khiến một nút workflow thực thi nhiều hơn một lần bởi @mytharcher

### [v2.0.0-alpha.40](https://www.nocobase.com/en/blog/v2.0.0-alpha.40)

*Ngày phát hành: 2025-11-18*

### 🚀 Cải tiến

- **[flow-engine]** Tối ưu hóa kiểu thanh công cụ để ngăn biểu tượng bị che khuất ([#7883](https://github.com/nocobase/nocobase/pull/7883)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi dữ liệu quyền ACL không được tải lại sau khi đăng xuất và đăng nhập. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) bởi @gchust
- **[client]** sửa lỗi trong cài đặt mục biểu mẫu ([#7867](https://github.com/nocobase/nocobase/pull/7867)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Chỉ sử dụng chế độ gỡ lỗi tài nguyên sql trong quá trình xem trước biểu đồ ([#7893](https://github.com/nocobase/nocobase/pull/7893)) bởi @heziqiang
- **[Đa không gian]** người dùng liên kết đa không gian bởi @jiannx
- **[Workflow: Phê duyệt]**

  - Sửa lỗi kích thước trang của kênh thông báo tải không đủ lớn, khiến danh sách không được tải hoàn chỉnh bởi @mytharcher
  - Sửa lỗi hiệu năng xảy ra khi truy vấn danh sách các bản ghi phê duyệt trong quá trình gửi phê duyệt bởi @mytharcher
  - Sửa định dạng ngày trên thẻ danh sách phê duyệt trong trung tâm việc cần làm để hiển thị ngày và giờ đầy đủ bởi @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/en/blog/v2.0.0-alpha.39)

*Ngày phát hành: 2025-11-17*

### 🚀 Cải tiến

- **[client]** Thích ứng các thành phần cho thiết bị di động ([#7870](https://github.com/nocobase/nocobase/pull/7870)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi cấu hình trường JS mặc định không sử dụng cài đặt chế độ hiển thị. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) bởi @gchust
  - Sửa lỗi các mẫu trùng lặp không xuất hiện, gây ra bởi việc kéo và sau đó xóa một mẫu được tham chiếu ([#7847](https://github.com/nocobase/nocobase/pull/7847)) bởi @zhangzhonghe
  - Sửa lỗi không thể đặt giá trị mặc định của trường ngày trong mô hình khối biểu mẫu bộ lọc. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) bởi @gchust
  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) bởi @zhangzhonghe
  - Sửa lỗi các thao tác chỉnh sửa nhanh trong khối bảng không cập nhật dữ liệu chính xác. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) bởi @gchust
  - Sửa lỗi trường văn bản đa dạng thức không thể nhập giá trị mặc định và trường đa lựa chọn không thể chọn nhiều tùy chọn cho giá trị mặc định. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) bởi @gchust
- **[Trình quản lý đa ứng dụng (không dùng nữa)]** Sau khi một ứng dụng con dừng, hãy xuất bản một tin nhắn đồng bộ hóa để thông báo cho các nút khác dừng ứng dụng con tương ứng ([#7849](https://github.com/nocobase/nocobase/pull/7849)) bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động bởi @zhangzhonghe
- **[Trình quản lý Email]** Lỗi làm mới ShadowHtml bởi @jiannx
