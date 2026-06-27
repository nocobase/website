---
title: "NocoBase v1.8.16: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.8.16"
---

### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Loại bỏ đầu ra nhật ký SQL qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Máy chủ]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile

- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do kiểu biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher

- **[Trình quản lý sao lưu]** Sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn tất bởi @gchust
