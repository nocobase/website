---
title: "NocoBase v2.1.0-beta.11: Thêm danh sách thực thi bộ lọc"
description: "Ghi chú phát hành của v2.1.0-beta.11"
---

### 🚀 Cải tiến

- **[Workflow]** Thêm danh sách lọc các lần thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có collection nào được cấu hình trong trigger bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi sự kiện vòng đời do worker gửi khiến ứng dụng đang chạy bị dừng ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher

- **[client]** Sửa lỗi người dùng không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) bởi @jiannx

- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành object khi vượt quá 100 phần tử ([#8908](https://github.com/nocobase/nocobase/pull/8908)) bởi @2013xile

- **[Hành động: Nhập bản ghi Pro]**
  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ bởi @mytharcher

  - Sửa lỗi khi có hơn ~30 cột gây ra lỗi nhập, do stream đã bị đọc trùng lặp bởi @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi đồng thời khi thêm người được giao bởi @mytharcher

- **[Trình quản lý di chuyển]** Sửa lỗi quá trình di chuyển bị gián đoạn do lỗi gây ra bởi môi trường đích chưa có bảng mới được tạo trong quá trình di chuyển tải lên. bởi @Andrew1989Y
