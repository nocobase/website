---
title: "NocoBase v1.8.0-alpha.12: Hỗ trợ thêm tùy chọn pool từ biến môi trường"
description: "Ghi chú phát hành phiên bản v1.8.0-alpha.12"
---

### 🚀 Cải tiến

- **[database]** Hỗ trợ thêm tùy chọn pool từ env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) bởi @mytharcher

- **[Workflow]**
  - Cải thiện hiệu suất tải danh sách thực thi bằng cách loại trừ trường JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) bởi @mytharcher

  - Thêm API log cho việc kiểm thử node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Thay đổi thời gian thành tuyệt đối trong dòng thời gian bởi @mytharcher

### 🐛 Sửa lỗi

- **[utils]** Vấn đề lọc trên DateOnly hoặc Datetime (không có múi giờ) khi sử dụng biến Ngày chính xác ([#7113](https://github.com/nocobase/nocobase/pull/7113)) bởi @katherinehhh

- **[cli]**
  - Lỗi undefined khi tải plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) bởi @jiannx

  - Điều chỉnh việc sao chép giấy phép khi cài đặt plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) bởi @jiannx

- **[client]**
  - Khả năng chịu lỗi cho các cài đặt dựa trên 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) bởi @mytharcher

  - Thiết lập displayName trường trong chế độ xem được kết nối không có hiệu lực ([#7130](https://github.com/nocobase/nocobase/pull/7130)) bởi @aaaaaajie

  - Cấu hình UI node thủ công của Workflow: quy tắc liên kết không thể chọn biến Biểu mẫu hiện tại ([#7125](https://github.com/nocobase/nocobase/pull/7125)) bởi @zhangzhonghe

- **[Workflow]** Sửa lỗi gây ra bởi vòng lặp import ([#7134](https://github.com/nocobase/nocobase/pull/7134)) bởi @mytharcher

- **[plugin-commercial]**
  - Chế độ phát triển không hiển thị popup giấy phép bởi @jiannx

  - Tạm thời đóng popup xác minh giấy phép bởi @jiannx

  - Điều chỉnh logic xác minh giấy phép và hỗ trợ khớp tên miền pan bởi @jiannx

- **[Chính sách mật khẩu]** Hỗ trợ khóa tài khoản người dùng vĩnh viễn bởi @2013xile

- **[Workflow: Luồng con]** Sửa lỗi trong chế độ cụm bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Thêm cài đặt bố cục biểu mẫu bởi @mytharcher

  - Loại bỏ các trường không thể lọc khỏi bộ lọc bởi @mytharcher
