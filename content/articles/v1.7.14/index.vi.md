---
title: "NocoBase v1.7.14: Tự động ẩn thanh tác vụ của khối thẻ lưới khi trống"
description: "Ghi chú phát hành phiên bản v1.7.14"
---

### 🚀 Cải tiến

- **[client]** Tự động ẩn thanh tác vụ của khối thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe

- **[Xác thực]** Loại bỏ tùy chọn trình xác thực khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile

### 🐛 Sửa lỗi

- **[database]** Hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos

- **[client]**
  - Biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh

  - Điều kiện kiểu dáng trên các trường cột của bảng con không được áp dụng đúng ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh

  - Lọc qua các trường bộ sưu tập quan hệ trong biểu mẫu lọc không có hiệu lực ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile

- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe
