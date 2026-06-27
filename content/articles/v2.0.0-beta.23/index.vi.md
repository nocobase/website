---
title: "NocoBase v2.0.0-beta.23: hỗ trợ chiều cao khối có thể cấu hình"
description: "Ghi chú phát hành của v2.0.0-beta.23"
---

### 🎉 Tính năng mới

- **[Khối: GridCard]** hỗ trợ cấu hình chiều cao khối ([#8583](https://github.com/nocobase/nocobase/pull/8583)) bởi @katherinehhh

- **[Thao tác: Chỉnh sửa hàng loạt]** chỉnh sửa hàng loạt 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) bởi @jiannx

### 🚀 Cải tiến

- **[client]**
  - Bảng 2.0 hỗ trợ sắp xếp kéo thả ([#8540](https://github.com/nocobase/nocobase/pull/8540)) bởi @jiannx

  - Di chuyển cài đặt gán trường và giá trị mặc định sang cấu hình cấp biểu mẫu. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) bởi @chenos

- **[Bản địa hóa]** tự động tạo các khóa i18n bị thiếu ([#8588](https://github.com/nocobase/nocobase/pull/8588)) bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - sửa lỗi dữ liệu đã lọc không chính xác trong dropdown liên kết khi trường tiêu đề là khóa ngoại ([#8619](https://github.com/nocobase/nocobase/pull/8619)) bởi @katherinehhh

  - Sửa lỗi trường tệp đính kèm liên kết đã xóa không được lưu sau khi gửi trong biểu mẫu chỉnh sửa ([#8616](https://github.com/nocobase/nocobase/pull/8616)) bởi @katherinehhh

  - Sửa lỗi tùy chọn thành phần trường không được làm mới theo thời gian thực khi trường liên kết chuyển đổi chế độ ([#8611](https://github.com/nocobase/nocobase/pull/8611)) bởi @katherinehhh

  - Sửa lỗi các cột bảng không hiển thị lại sau khi nhấp vào Chạy trong trình chỉnh sửa cột JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) bởi @gchust

  - sửa lỗi không thể khôi phục dữ liệu đã chọn trong thành phần trường bộ chọn bản ghi sau khi chỉnh sửa ([#8610](https://github.com/nocobase/nocobase/pull/8610)) bởi @katherinehhh

- **[Trình quản lý tệp]** sửa lỗi thành phần trường tệp vẫn có thể mở hộp thoại chọn khi bị vô hiệu hóa ([#8617](https://github.com/nocobase/nocobase/pull/8617)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi chính tả ECharts bởi @heziqiang

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi thiếu giá trị từ cửa sổ bật lên chi tiết của "Đơn của tôi" bởi @mytharcher

  - Sửa lỗi xảy ra khi thực thi ở chế độ lưu trước bởi @mytharcher
