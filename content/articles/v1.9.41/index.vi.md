---
title: "NocoBase v1.9.41: Sửa đường dẫn route của liên kết workflow"
description: "Ghi chú phát hành phiên bản v1.9.41"
---

### 🚀 Cải tiến

- **[client]** Hỗ trợ vô hiệu hóa các tham số thêm mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Workflow]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi collection, để tránh lỗi xảy ra khi collection bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher

- **[Quản lý tệp]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, để tránh đường dẫn truy cập ra ngoài thư mục gốc ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher

- **[Workflow: Luồng con]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher
