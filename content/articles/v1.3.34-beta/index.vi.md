---
title: "NocoBase v1.3.34-beta: Cải tiến cấu hình trường biểu mẫu lọc"
description: "Ghi chú phát hành phiên bản v1.3.34-beta"
---

### 🎉 Tính năng mới

- **[test]** Trường liên kết trong biểu mẫu bộ lọc hỗ trợ cấu hình cho phép chọn nhiều ([#5451](https://github.com/nocobase/nocobase/pull/5451)) bởi @zhangzhonghe

- **[client]** Thêm biến có tên "Đối tượng cha" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) bởi @zhangzhonghe
Tham khảo: [Đối tượng cha](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi biến tham số tìm kiếm URL không được phân tích ([#5454](https://github.com/nocobase/nocobase/pull/5454)) bởi @zhangzhonghe

  - Sửa lỗi xóa dữ liệu khi chọn dữ liệu liên kết với phạm vi dữ liệu trong bảng con lồng nhau ([#5441](https://github.com/nocobase/nocobase/pull/5441)) bởi @katherinehhh

  - Sửa màu nền được chọn của hàng trong bảng ([#5445](https://github.com/nocobase/nocobase/pull/5445)) bởi @mytharcher

- **[Khối: Bản đồ]** Xóa cấu hình mức thu phóng cho trường bản đồ trong cột bảng ([#5457](https://github.com/nocobase/nocobase/pull/5457)) bởi @katherinehhh

- **[Quản lý tệp]** Sửa lỗi gọi hook quy tắc lưu trữ trên trường read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Sửa lỗi kiểm thử e2e thất bại do thành phần thay đổi ([#5437](https://github.com/nocobase/nocobase/pull/5437)) bởi @mytharcher
