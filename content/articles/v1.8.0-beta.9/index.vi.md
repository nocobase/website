---
title: "NocoBase v1.8.0-beta.9: Tự động ẩn thanh tác vụ của khối thẻ lưới khi trống"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.9"
---

### 🚀 Cải tiến

- **[client]**
  - Tự động ẩn thanh hành động của thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe

  - Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038

- **[Xác thực]** Xóa các tùy chọn trình xác thực khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh

  - Điều kiện kiểu dáng trên các trường cột của bảng con không được áp dụng chính xác ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh

  - Mất dấu thập phân sau khi chuyển thành phần số tiền từ mặt nạ sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh

  - Biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh

  - Lọc qua các trường bộ sưu tập quan hệ trong biểu mẫu lọc không hợp lệ ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe

  - Hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh

- **[database]** hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile

- **[Trường bộ sưu tập: Chuỗi]** Sửa lỗi tính toán chuỗi bigint dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher

- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe
