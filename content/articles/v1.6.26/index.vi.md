---
title: "NocoBase v1.6.26: Iframe block hỗ trợ cấu hình thuộc tính allow"
description: "Ghi chú phát hành v1.6.26"
---

### 🎉 Tính năng mới

- **[Khối: iframe]** Khối iframe hỗ trợ cấu hình thuộc tính allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) bởi @zhangzhonghe

- **[In mẫu]** Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]**
  - Trong các trang con lồng nhau, danh sách khối không hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe

  - Khi thành phần trường quan hệ của biểu mẫu lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe

  - Nhiều thông báo lỗi được hiển thị khi vi phạm quy tắc xác thực trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh

  - Vấn đề với cấu hình quy tắc liên kết trong biểu mẫu con (popup) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh

  - Sửa lỗi không thể chọn các trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe

  - Vấn đề về kiểu dáng thanh phân trang của bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh

  - Bộ chọn bảng trong biểu mẫu lọc, kiểu dáng bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe

- **[database]**
  - Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher

  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher

- **[Trường Collection: Tệp đính kèm (URL)]** Các trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Vấn đề liên kết hành động luồng công việc được kích hoạt bởi @katherinehhh
