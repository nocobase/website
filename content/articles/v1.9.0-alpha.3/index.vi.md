---
title: "NocoBase v1.9.0-alpha.3: Hỗ trợ hiển thị bảng do plugin định nghĩa trong nguồn dữ liệu chính"
description: "Ghi chú phát hành của v1.9.0-alpha.3"
---

### 🎉 Tính năng mới

- **[Nguồn dữ liệu: Chính]** Hỗ trợ hiển thị các bảng do plugin định nghĩa trong nguồn dữ liệu chính. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) bởi @aaaaaajie

- **[Quy trình làm việc: nút tính toán ngày tháng]** Hỗ trợ chạy thử nút bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Trình chọn màu: Thêm bốn màu được đề xuất ([#7226](https://github.com/nocobase/nocobase/pull/7226)) bởi @zhangzhonghe

- **[Quy trình làm việc]** Làm cho việc so sánh tương thích với các giá trị ngày tháng ([#7237](https://github.com/nocobase/nocobase/pull/7237)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Quy tắc kiểu không hoạt động trên cột hành động của bảng ([#7225](https://github.com/nocobase/nocobase/pull/7225)) bởi @katherinehhh

  - Tránh chọn các trường không phải liên kết trong appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) bởi @mytharcher

  - Sửa lỗi: Không thể giải quyết 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) bởi @zhangzhonghe

  - Khi xóa một menu, dữ liệu tương ứng trong bảng uiSchemas không bị xóa ([#7232](https://github.com/nocobase/nocobase/pull/7232)) bởi @zhangzhonghe

- **[database]** Sửa lỗi khi bật phân trang đơn giản cho các bảng nguồn dữ liệu bên ngoài ([#7222](https://github.com/nocobase/nocobase/pull/7222)) bởi @aaaaaajie

- **[Trường bộ sưu tập: Sắp xếp]** Thiếu lựa chọn trường sắp xếp khi sao chép bản ghi ([#7116](https://github.com/nocobase/nocobase/pull/7116)) bởi @katherinehhh

- **[Quy trình làm việc: Quy trình con]** Sửa lỗi xảy ra khi tín hiệu thu hồi đến nhưng quá trình thực thi đang chờ không nằm trên phiên bản hiện tại bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi nhiều cấp độ liên kết khi gửi phê duyệt bởi @mytharcher

  - Thêm khả năng chịu lỗi cho phê duyệt đã bị xóa trong danh sách bản ghi bởi @mytharcher

- **[Trình quản lý email]** Tối ưu hiệu suất danh sách tin nhắn email bởi @jiannx
