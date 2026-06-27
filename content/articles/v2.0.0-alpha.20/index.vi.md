---
title: "NocoBase v2.0.0-alpha.20: giới thiệu biểu đồ mới và các loại khối bổ sung"
description: "Ghi chú phát hành của v2.0.0-alpha.20"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ thiết lập quy tắc liên kết cho biểu mẫu con ([#7640](https://github.com/nocobase/nocobase/pull/7640)) bởi @zhangzhonghe

- **[Khối: Danh sách]** Thêm khối danh sách 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Thêm loại biểu đồ "Biểu đồ Donut" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) bởi @heziqiang

- **[Khối: Bảng hành động]** Thêm khối bảng hành động 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) bởi @katherinehhh

- **[Khối: GridCard]** Thêm khối thẻ lưới 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) bởi @katherinehhh

### 🚀 Cải tiến

- **[flow-engine]** Hỗ trợ bỏ qua bước chạy runjs bằng cách thêm skipRunJs=true vào chuỗi truy vấn URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) bởi @gchust

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi khi sao chép hoặc dán đoạn mã trong trình soạn thảo mã JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) bởi @gchust

- **[Flow engine]** Đã sửa lỗi giải quyết không chính xác biến bản ghi của cửa sổ bật lên cha. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) bởi @gchust

- **[Trực quan hóa dữ liệu]** Sửa lỗi thiếu tham số orders trong truy vấn dữ liệu biểu đồ ([#7636](https://github.com/nocobase/nocobase/pull/7636)) bởi @heziqiang

- **[Trình quản lý email]** Bắt lỗi đồng bộ bởi @jiannx
