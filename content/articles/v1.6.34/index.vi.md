---
title: "NocoBase v1.6.34: Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi nhập cài đặt"
description: "Ghi chú phát hành v1.6.34"
---

### 🎉 Tính năng mới

- **[Hành động: Nhập bản ghi Pro]**
  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi cài đặt nhập bởi @aaaaaajie

  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi cài đặt nhập bởi @aaaaaajie

### 🚀 Cải tiến

- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh

  - Cài đặt chiều cao khối không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh

- **[undefined]** Sử dụng Node 20 do yêu cầu của gói commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher

- **[database]** Đã sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong liên kết nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie

- **[Hành động: Xuất bản ghi]** Đã sửa lỗi xuất các mối quan hệ lồng nhau không chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie

- **[Trình quản lý nguồn dữ liệu]** Giải quyết vấn đề sắp xếp kéo và thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos

- **[Tài liệu API]** Thêm thông tin sub-app bị thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos

- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết vấn đề hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66

- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Tránh lỗi do thứ tự tải plugin bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]**
  - Sửa url xem trước và tham số tải lên bởi @mytharcher

  - Sửa tham số tải lên bị trùng lặp bởi @mytharcher

- **[Khối: Biểu mẫu nhiều bước]** Sửa kiểu dữ liệu bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher

  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher
