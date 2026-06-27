---
title: "NocoBase v1.9.0-alpha.16: Hỗ trợ xoay ảnh khi xem trước"
description: "Ghi chú phát hành phiên bản v1.9.0-alpha.16"
---

### 🚀 Cải tiến

- **[client]**
  - Hỗ trợ xoay ảnh khi xem trước ([#7523](https://github.com/nocobase/nocobase/pull/7523)) bởi @mytharcher

  - Thêm hỗ trợ bản địa hóa cho tooltip & tiêu đề mục nhóm ([#7485](https://github.com/nocobase/nocobase/pull/7485)) bởi @katherinehhh

- **[Bộ điều hợp hàng đợi RabbitMQ]** Cải thiện xử lý kết nối RabbitMQ và logic xử lý tin nhắn bởi @sdp-ncd

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi menu con thanh bên không thể đánh dấu chính xác ([#7520](https://github.com/nocobase/nocobase/pull/7520)) bởi @duannyuuu

  - Sửa lỗi popover cấu hình biểu tượng menu bị che khuất ([#7515](https://github.com/nocobase/nocobase/pull/7515)) bởi @zhangzhonghe

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi tin nhắn gần đây không hiển thị khi mở popup thông báo ([#7514](https://github.com/nocobase/nocobase/pull/7514)) bởi @mytharcher

- **[Luồng công việc]** Sửa lỗi điều kiện danh sách luồng công việc không chính xác khi tải ngữ cảnh trường liên kết trong cấu hình luồng công việc đã ràng buộc ([#7516](https://github.com/nocobase/nocobase/pull/7516)) bởi @mytharcher

- **[Luồng công việc: Nút vòng lặp]** Sửa lỗi quy trình tiến tới mục tiếp theo không chính xác ngay cả khi điều kiện nút vòng lặp không được thỏa mãn ([#7521](https://github.com/nocobase/nocobase/pull/7521)) bởi @mytharcher

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi xảy ra khi xóa dữ liệu từ nguồn dữ liệu bên ngoài bởi @mytharcher

  - Sửa lỗi trường công thức trong biểu mẫu phê duyệt không tự động cập nhật bởi @mytharcher
