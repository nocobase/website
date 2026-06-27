---
title: "NocoBase v1.8.0-beta.12: Hỗ trợ thêm tùy chọn pool từ biến môi trường"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.12"
---

### 🚀 Cải tiến

- **[database]** Hỗ trợ thêm tùy chọn pool từ env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) bởi @mytharcher

- **[Workflow]**
  - Cải thiện hiệu suất tải danh sách thực thi bằng cách loại trừ trường JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) bởi @mytharcher

  - Thêm API log cho kiểm thử node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) bởi @mytharcher

- **[Trình quản lý đa ứng dụng]** thêm hỗ trợ bộ lọc cho quản lý đa ứng dụng ([#7124](https://github.com/nocobase/nocobase/pull/7124)) bởi @katherinehhh

- **[Workflow: Phê duyệt]** Thay đổi thời gian thành tuyệt đối trong dòng thời gian bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - markdown không phản ánh thay đổi theo thời gian thực khi tham chiếu biến $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) bởi @katherinehhh

  - vấn đề về màu nền trong bảng con trên khối chi tiết ([#7144](https://github.com/nocobase/nocobase/pull/7144)) bởi @katherinehhh

  - Cấu hình UI node thủ công của Workflow: quy tắc liên kết không thể chọn biến của biểu mẫu hiện tại ([#7125](https://github.com/nocobase/nocobase/pull/7125)) bởi @zhangzhonghe

  - Thiết lập displayName trường trong view được kết nối không có hiệu lực ([#7130](https://github.com/nocobase/nocobase/pull/7130)) bởi @aaaaaajie

  - giá trị mặc định của trường liên kết ghi đè dữ liệu hiện có trong bảng con ([#7120](https://github.com/nocobase/nocobase/pull/7120)) bởi @katherinehhh

  - Khả năng chịu lỗi cho cài đặt dựa trên 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) bởi @mytharcher

- **[utils]** vấn đề lọc trên DateOnly hoặc Datetime (không có múi giờ) sử dụng biến Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) bởi @katherinehhh

- **[Workflow]** Sửa lỗi gây ra bởi import vòng lặp ([#7134](https://github.com/nocobase/nocobase/pull/7134)) bởi @mytharcher

- **[Chính sách mật khẩu]** Hỗ trợ khóa tài khoản người dùng vĩnh viễn bởi @2013xile

- **[Workflow: Luồng con]** Sửa lỗi trong chế độ cluster bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Loại bỏ các trường không thể lọc khỏi bộ lọc bởi @mytharcher

  - Thêm cài đặt bố cục biểu mẫu bởi @mytharcher
