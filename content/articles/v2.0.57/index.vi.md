---
title: "NocoBase v2.0.57: Sửa lỗi đầu ra obfuscation của plugin server để tránh các biến toàn cục trình duyệt trong các bundle runtime Node.js"
description: "Ghi chú phát hành v2.0.57"
---

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi đầu ra obfuscation plugin máy chủ để tránh các biến toàn cục trình duyệt trong các gói runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn

- **[Workflow: Nút thủ công]** Sửa lỗi lưu tạm thời cho các tác vụ quy trình thủ công không lưu lại giá trị biểu mẫu đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher

- **[Nhân viên AI]** Sửa lỗi mô tả không chính xác của tên công cụ trong prompt ngữ cảnh công việc ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock

- **[Quản lý tệp]** Hiển thị bản xem trước PDF an toàn bằng PDF.js thay vì kết xuất PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher

- **[Xác thực: OIDC]** Sửa lỗi rò rỉ token khi callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Sửa lỗi API `jobs:resume` không được nút phê duyệt hỗ trợ bởi @mytharcher

  - Sửa lỗi rút lại phê duyệt để cập nhật dữ liệu nghiệp vụ đã gửi đồng thời tôn trọng quyền cập nhật của collection nguồn. bởi @mytharcher

  - Sửa lỗi công việc phê duyệt cũ khi quy trình phê duyệt bị kết thúc do lỗi nút không phải phê duyệt. bởi @mytharcher
