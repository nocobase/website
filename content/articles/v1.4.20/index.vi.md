---
title: "NocoBase v1.4.20: Cho phép sắp xếp quy trình làm việc khi gắn với nút hành động"
description: "Ghi chú phát hành v1.4.20"
---

### 🎉 Tính năng mới

- **[client]** Thêm phương thức app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) bởi @chenos

### 🚀 Cải tiến

- **[client]**
  - Cho phép sắp xếp quy trình làm việc khi gắn vào nút hành động ([#6017](https://github.com/nocobase/nocobase/pull/6017)) bởi @mytharcher

  - Thay đổi liên kết tham khảo của các bộ đánh giá sang trang tài liệu ([#6021](https://github.com/nocobase/nocobase/pull/6021)) bởi @mytharcher

  - Hỗ trợ maxTagCount: 'responsive' trong thành phần dropdown đa lựa chọn ([#6007](https://github.com/nocobase/nocobase/pull/6007)) bởi @katherinehhh

  - Đặt thời gian kết thúc mặc định cho thành phần phạm vi thời gian trong khối bộ lọc thành 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) bởi @katherinehhh

- **[Hành động: Chỉnh sửa hàng loạt]** Tái cấu trúc nút gửi biểu mẫu chỉnh sửa hàng loạt: loại bỏ gán trường và quy tắc liên kết ([#6008](https://github.com/nocobase/nocobase/pull/6008)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi xác thực bắt buộc không hoạt động sau khi xóa dữ liệu trong trình soạn thảo văn bản đa dạng thức ([#6006](https://github.com/nocobase/nocobase/pull/6006)) bởi @katherinehhh

  - Sửa lỗi căn chỉnh sai khi các nút cột hành động bị ẩn ([#6014](https://github.com/nocobase/nocobase/pull/6014)) bởi @katherinehhh

  - Sửa lỗi nút Tạo Bộ sưu tập khi nhấp vào tab Bộ sưu tập trong trang API REST ([#5992](https://github.com/nocobase/nocobase/pull/5992)) bởi @katherinehhh

  - Sửa lỗi giải quyết vấn đề targetKey không thể chọn trường NanoID trong quan hệ một-nhiều ([#5999](https://github.com/nocobase/nocobase/pull/5999)) bởi @katherinehhh

  - Sửa kiểu của nút cài đặt trong giao diện thu gọn ([#6001](https://github.com/nocobase/nocobase/pull/6001)) bởi @katherinehhh

  - Sửa kiểu thành phần danh sách ([#5998](https://github.com/nocobase/nocobase/pull/5998)) bởi @mytharcher

  - Sửa lỗi các tiêu đề được bao gồm trong yêu cầu của client bị ghi đè ([#6009](https://github.com/nocobase/nocobase/pull/6009)) bởi @2013xile

  - Sửa lỗi foreignKey, targetKey và sourceKey nên hỗ trợ lọc theo ký tự tiếng Trung ([#5997](https://github.com/nocobase/nocobase/pull/5997)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập với các liên kết thuộc về nhiều quan hệ sử dụng target key khác nhau ([#6024](https://github.com/nocobase/nocobase/pull/6024)) bởi @chareice

- **[Khối: Bản đồ]** Sửa lỗi trường bản đồ trong khối chi tiết nên hiển thị dưới dạng khối bản đồ ([#6010](https://github.com/nocobase/nocobase/pull/6010)) bởi @katherinehhh

- **[Nhúng NocoBase]** Token để nhúng xung đột với xác thực bởi @chenos
