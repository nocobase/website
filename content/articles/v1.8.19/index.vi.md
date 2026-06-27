---
title: "NocoBase v1.8.19: Thêm loại mẫu nội tuyến cho cấu hình thông báo"
description: "Ghi chú phát hành v1.8.19"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher
- **[database]** Tối ưu hóa hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie
- **[Mobile]** Tối ưu hóa thành phần popup trên thiết bị di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[database]** Khắc phục sự cố khi đọc bảng ngoài Postgres bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie
- **[Block: template]** Giải quyết vấn đề các khối thư không hiển thị khi được đặt bên trong khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust
- **[Action: Nhập bản ghi Pro]** Không cho phép gán các trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie
- **[Workflow: Phê duyệt]** Khắc phục sự cố danh sách người dùng trống khi ký kết đồng thời bởi @mytharcher
- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` do pg_dump mới nhất tạo ra khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile
