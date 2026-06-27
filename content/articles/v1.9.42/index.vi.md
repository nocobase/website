---
title: "NocoBase v1.9.42: Sửa lỗi không thể tự động đăng ký người dùng khi thiếu số điện thoại"
description: "Ghi chú phát hành phiên bản v1.9.42"
---

### 🚀 Cải tiến

- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định để liên kết người dùng, đồng thời duy trì khả năng tương thích với các bộ xác thực hiện có phụ thuộc vào số điện thoại di động bởi @2013xile

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Khắc phục sự cố hiệu suất do trường JSON trong quá trình tải danh sách (MySQL) gây ra bởi @mytharcher

- **[WeCom]** Khắc phục sự cố người dùng không thể tự động đăng ký khi thiếu số điện thoại di động bởi @2013xile
