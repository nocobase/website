---
title: "NocoBase v2.2.0-beta.5: Thêm bản ghi phiên bản schema cho cấu hình môi trường"
description: "Ghi chú phát hành của v2.2.0-beta.5"
---

### 🚀 Cải tiến

* **[cli]** Đã thêm bản ghi phiên bản schema cho cấu hình môi trường. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) bởi @chenos
* **[File manager]** Cải thiện xem trước PDF: các tệp PDF từ nguồn gốc khác (cross-origin) hiện sử dụng tính năng xem trước mặc định của trình duyệt, trong khi các tệp PDF cùng nguồn gốc (same-origin) tiếp tục được hiển thị bằng PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) bởi @mytharcher

### 🐛 Sửa lỗi

* **[client-v2]**
  * Đã sửa lỗi không thể thay đổi cài đặt luồng sự kiện sau khi một khối được chuyển đổi thành mẫu. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) bởi @gchust
  * Đã sửa lỗi các tùy chọn hộp kiểm thả xuống trong biểu mẫu lọc v2 không hiển thị văn bản đã dịch. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) bởi @katherinehhh
  * Đã sửa lỗi hiển thị và cài đặt định dạng không chính xác khi trường tiêu đề của trường quan hệ bảng v2 sử dụng trường thời gian, ngày tháng hoặc ngày giờ. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) bởi @katherinehhh
* **[Flow engine]** Đã sửa lỗi dữ liệu không chính xác trong biểu mẫu bản ghi hiện tại và dữ liệu chi tiết bên trong cửa sổ bật lên trong quá trình xây dựng AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) bởi @gchust
* **[Workflow: Custom action event]** Đã sửa lỗi các nút kích hoạt workflow của bảng hành động v2 vẫn hiển thị thành công và gửi yêu cầu khi không có workflow nào được liên kết. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) bởi @mytharcher
* **[AI employees]** Đã sửa lỗi nhân viên AI không thể điền chính xác dữ liệu bảng con. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) bởi @gchust
