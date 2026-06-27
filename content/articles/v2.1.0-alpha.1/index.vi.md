---
title: "NocoBase v2.1.0-alpha.1: Cải thiện giao diện gán trường ngày/giờ để hỗ trợ chọn ngày/giờ tương đối"
description: "Ghi chú phát hành của v2.1.0-alpha.1"
---

### 🎉 Tính năng mới

- **[Hành động: Chỉnh sửa hàng loạt]** chỉnh sửa hàng loạt 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) bởi @jiannx

### 🚀 Cải tiến

- **[client]**
  - Cải thiện giao diện gán giá trị cho trường ngày/giờ, hỗ trợ chọn ngày/giờ tương đối. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) bởi @gchust

  - Hỗ trợ chỉ định trường tiêu đề cho các trường liên kết khi gán giá trị. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) bởi @gchust

  - Bảng 2.0 hỗ trợ sắp xếp kéo thả ([#8540](https://github.com/nocobase/nocobase/pull/8540)) bởi @jiannx

  - Di chuyển cài đặt gán giá trị trường và giá trị mặc định vào cấu hình cấp biểu mẫu. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) bởi @chenos

- **[Bản địa hóa]** tự động tạo các khóa i18n bị thiếu ([#8588](https://github.com/nocobase/nocobase/pull/8588)) bởi @jiannx

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi không thể mở rộng menu con của trường bộ lọc khi có từ khóa tìm kiếm. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) bởi @gchust

- **[client]**
  - Sửa lỗi gán một bản ghi duy nhất cho trường quan hệ nhiều-nhiều cho kết quả không chính xác. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) bởi @gchust

  - Phân tích cú pháp ngày bằng bộ chọn ngày và thêm xác thực độ mạnh mật khẩu, v.v. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) bởi @jiannx

  - Sửa lỗi khoảng cách do các hành động liên kết bị ẩn trong cột hành động của bảng ([#8646](https://github.com/nocobase/nocobase/pull/8646)) bởi @zhangzhonghe

  - Sửa lỗi cú pháp phân giải khi mục markdown hiển thị Liquid không hợp lệ ([#8637](https://github.com/nocobase/nocobase/pull/8637)) bởi @katherinehhh

  - Sửa lỗi yêu cầu phân tích cú pháp không cần thiết từ phía máy chủ cho các thuộc tính trường quan hệ nhiều trong khối biểu mẫu. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) bởi @gchust

  - Sửa lỗi không thể đóng `Action.Modal` sau một số thao tác tương tác ([#8642](https://github.com/nocobase/nocobase/pull/8642)) bởi @mytharcher

  - Sửa lỗi thiếu định dạng số cho trường công thức số và cài đặt định dạng ngày cho trường công thức ngày ([#8625](https://github.com/nocobase/nocobase/pull/8625)) bởi @katherinehhh

  - Sửa lỗi hiển thị đường viền trên cùng không đầy đủ trên mục biểu mẫu đầu tiên ([#8623](https://github.com/nocobase/nocobase/pull/8623)) bởi @katherinehhh

  - Sửa lỗi trường tệp đính kèm liên kết đã xóa không được lưu sau khi gửi trong biểu mẫu chỉnh sửa ([#8616](https://github.com/nocobase/nocobase/pull/8616)) bởi @katherinehhh

  - Sửa lỗi dữ liệu được lọc không chính xác trong dropdown liên kết khi trường tiêu đề là khóa ngoại ([#8619](https://github.com/nocobase/nocobase/pull/8619)) bởi @katherinehhh

  - Sửa lỗi không thể khôi phục dữ liệu đã chọn trong thành phần trường chọn bản ghi sau khi chỉnh sửa ([#8610](https://github.com/nocobase/nocobase/pull/8610)) bởi @katherinehhh

  - Sửa lỗi tùy chọn thành phần trường không được làm mới theo thời gian thực khi trường liên kết chuyển đổi chế độ ([#8611](https://github.com/nocobase/nocobase/pull/8611)) bởi @katherinehhh

- **[utils]** Sửa lỗi bảo mật của công cụ đánh giá `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) bởi @mytharcher

- **[Nhân viên AI]**
  - Sửa lỗi liên kết trích dẫn từ tìm kiếm web AI không được hiển thị trong hộp chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) bởi @cgyrock

  - Sửa lỗi tham số API của openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) bởi @cgyrock

- **[Quản lý tệp]** sửa lỗi thành phần trường tệp vẫn có thể mở hộp thoại chọn khi bị vô hiệu hóa ([#8617](https://github.com/nocobase/nocobase/pull/8617)) bởi @katherinehhh
