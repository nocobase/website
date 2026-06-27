---
title: "NocoBase v2.0.12: Thêm khóa cho sao lưu theo lịch trên các nút cụm"
description: "Ghi chú phát hành v2.0.12"
---

### 🚀 Cải tiến

- **[Redis lock adapter]** Tái cấu trúc do API của LockManager đã thay đổi trong kho lưu trữ chính bởi @mytharcher

- **[Trình quản lý sao lưu]** Thêm khóa cho việc sao lưu theo lịch trình trên các nút cụm bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Các khối v2 hiện chỉ hiển thị các hành động được hỗ trợ bởi nguồn dữ liệu hiện tại ([#8803](https://github.com/nocobase/nocobase/pull/8803)) bởi @zhangzhonghe

  - Sửa lỗi kiểu dáng của nút quay lại trên các trang con v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) bởi @zhangzhonghe

- **[lock-manager]** Sửa lỗi điều kiện cạnh tranh của trình quản lý khóa ([#8734](https://github.com/nocobase/nocobase/pull/8734)) bởi @mytharcher

- **[server]** Sửa lỗi trong truy vấn dữ liệu của các nguồn dữ liệu không phải cơ sở dữ liệu ([#8776](https://github.com/nocobase/nocobase/pull/8776)) bởi @cgyrock

- **[Kiểm soát truy cập]** Sửa lỗi sửa đổi dữ liệu nguồn dữ liệu API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) bởi @cgyrock

- **[Hành động: Xuất bản ghi]** Sửa lỗi trường belongsToArray bị trống trong file excel đã xuất ([#8787](https://github.com/nocobase/nocobase/pull/8787)) bởi @cgyrock
