---
title: "NocoBase v2.0.0-alpha.41: thêm nhân viên AI để cấu hình biểu đồ"
description: "Ghi chú phát hành của v2.0.0-alpha.41"
---

### 🎉 Tính năng mới

- **[Trực quan hóa dữ liệu]** Thêm nhân viên AI để cấu hình biểu đồ ([#7815](https://github.com/nocobase/nocobase/pull/7815)) bởi @heziqiang

### 🚀 Cải tiến

- **[flow-engine]**
  - Hỗ trợ lắng nghe sự kiện thay đổi cây mô hình luồng trong flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) bởi @gchust

  - Cải thiện việc phân giải biến bản ghi hiện tại, giúp mở hộp thoại nhanh hơn ([#7895](https://github.com/nocobase/nocobase/pull/7895)) bởi @gchust

  - Tối ưu hóa cấu trúc API của các thư viện bên thứ ba trong ngữ cảnh runjs và bổ sung hỗ trợ cho thư viện biểu tượng Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) bởi @gchust

- **[database]** Tái cấu trúc plugin mã hóa trường để tăng cường bảo mật, hỗ trợ tạo và xoay vòng khóa ứng dụng, cũng như khóa mã hóa cho từng trường. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) bởi @cgyrock

- **[Trường bộ sưu tập: Mã hóa]** Tối ưu hóa plugin mã hóa trường để hỗ trợ truy xuất dữ liệu với IV độc lập bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi các khối ẩn vẫn chiếm không gian trên trang. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) bởi @gchust

  - Sửa lỗi nút đặt lại trong nút bộ lọc xóa các điều kiện mặc định ([#7903](https://github.com/nocobase/nocobase/pull/7903)) bởi @zhangzhonghe

  - Sửa lỗi kiểm tra quyền không chính xác cho các trường biểu mẫu con trong biểu mẫu mới ([#7902](https://github.com/nocobase/nocobase/pull/7902)) bởi @katherinehhh

- **[server]** Sửa lỗi trong chế độ tách dịch vụ khiến các tin nhắn hàng đợi chưa đăng ký không thể được xuất bản ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher

- **[Workflow]**
  - Sửa lỗi gây ra khi lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher

  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ sai trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Sửa namespace của ngôn ngữ locale cần sử dụng để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher

- **[Kiểm soát truy cập]** Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi gây ra khi lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại bởi @mytharcher

- **[Bình luận]** sửa lỗi khi bình luận được trích dẫn trong khối bình luận không hiển thị bởi @katherinehhh

- **[In mẫu]** phân tích các biến trong bộ lọc bởi @jiannx

- **[Workflow: Phê duyệt]** Sửa lỗi khi các điều kiện cạnh tranh xảy ra trong quá trình xử lý phê duyệt đồng thời bởi nhiều người phê duyệt có thể khiến một nút workflow thực thi nhiều hơn một lần bởi @mytharcher
