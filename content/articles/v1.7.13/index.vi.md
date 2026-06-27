---
title: "NocoBase v1.7.13: Chiều rộng vùng chứa logo thích ứng với loại nội dung"
description: "Ghi chú phát hành phiên bản v1.7.13"
---

### 🚀 Cải tiến

- **[client]** Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038

- **[Quy trình: Phê duyệt]** Thêm tùy chọn trường bổ sung cho danh sách người được chỉ định lại bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh

  - Mất dấu thập phân sau khi chuyển thành phần số tiền từ mask sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh

  - Hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh

- **[Trường bộ sưu tập: Chuỗi]** Sửa lỗi tính toán chuỗi bigint dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher

- **[Trình quản lý sao lưu]** Lỗi lệnh không xác định khi khôi phục bản sao lưu MySQL trên nền tảng windows bởi @gchust
