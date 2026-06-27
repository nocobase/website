---
title: "NocoBase v1.3.40-beta: Thêm tùy chọn bỏ qua xác minh SSL"
description: "Ghi chú phát hành phiên bản v1.3.40-beta"
---

### 🎉 Tính năng mới

- **[Auth: OIDC]** Thêm tùy chọn cho phép bỏ qua xác thực SSL bởi @2013xile

### 🚀 Cải tiến

- **[client]** Hiển thị hộp kiểm không được chọn ở trạng thái vô hiệu hóa cho các trường chưa được chọn ([#5503](https://github.com/nocobase/nocobase/pull/5503)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi toán tử chuỗi "contains" và "does not contain" không xử lý đúng giá trị `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) bởi @2013xile

- **[client]** Sửa quy tắc liên kết để đánh giá chính xác các biến tham số URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) bởi @katherinehhh

- **[Block: Map]** Sửa lỗi một số bản đồ hiển thị không chính xác khi có nhiều bản đồ do gọi nhiều lần phương thức `load` của AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) bởi @Cyx649312038
