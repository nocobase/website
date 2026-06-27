---
title: "NocoBase v1.6.16: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.6.16"
---

### 🐛 Sửa lỗi

- **[client]**
  - Thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh

  - Sự cố hiển thị nhãn trường để tránh bị cắt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh

- **[database]** Khi xóa các bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm một trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile
