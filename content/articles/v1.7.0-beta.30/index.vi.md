---
title: "NocoBase v1.7.0-beta.30: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.30"
---

### 🐛 Sửa lỗi

- **[client]**
  - Khi thành phần trường quan hệ của biểu mẫu bộ lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe

  - Bộ chọn bảng trong biểu mẫu bộ lọc, kiểu hiển thị bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe

  - Trong các trang con lồng nhau, danh sách khối không hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe

  - Trường liên kết nhiều không gửi được khi hiển thị các trường từ bộ sưu tập liên kết ([#6833](https://github.com/nocobase/nocobase/pull/6833)) bởi @katherinehhh

  - Không thể kéo các nút khác vào nút sao chép ([#6822](https://github.com/nocobase/nocobase/pull/6822)) bởi @katherinehhh

  - Vấn đề kiểu thanh phân trang của bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh

- **[database]** Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher

- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh
