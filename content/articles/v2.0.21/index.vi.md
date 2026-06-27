---
title: "NocoBase v2.0.21: Thêm danh sách thực thi bộ lọc"
description: "Ghi chú phát hành phiên bản v2.0.21"
---

### 🚀 Cải tiến

- **[Workflow]** Thêm danh sách lọc thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) của @mytharcher

- **[Workflow: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có collection nào được cấu hình trong trigger của @mytharcher

### 🐛 Sửa lỗi

- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành object khi vượt quá 100 mục ([#8908](https://github.com/nocobase/nocobase/pull/8908)) của @2013xile

- **[client]** Sửa lỗi người dùng không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) của @jiannx

- **[Hành động: Nhập bản ghi Pro]**
  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ của @mytharcher

  - Sửa lỗi khi có hơn ~30 cột gây ra lỗi nhập do luồng (stream) bị đọc trùng lặp của @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi đồng thời (concurrency) khi thêm người được gán (assignee) của @mytharcher
