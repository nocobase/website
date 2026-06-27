---
title: "NocoBase v1.3.51: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.3.51"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi kiểm tra quyền trường không bị ảnh hưởng bởi ngữ cảnh trường liên kết ([#5672](https://github.com/nocobase/nocobase/pull/5672)) bởi @katherinehhh

  - Sửa lỗi quy tắc liên kết lưu thay đổi giá trị rỗng thành giá trị rỗng tĩnh ([#5667](https://github.com/nocobase/nocobase/pull/5667)) bởi @katherinehhh

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi khi truy xuất bản ghi trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) gây ra lỗi ([#5661](https://github.com/nocobase/nocobase/pull/5661)) bởi @2013xile

- **[Khối: Gantt]** Sửa lỗi khối gantt gọi sai khối lịch khi thêm mới ([#5673](https://github.com/nocobase/nocobase/pull/5673)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Sửa lỗi biến đổi dữ liệu không hoạt động trên chú thích trong biểu đồ hai trục ([#5649](https://github.com/nocobase/nocobase/pull/5649)) bởi @2013xile
