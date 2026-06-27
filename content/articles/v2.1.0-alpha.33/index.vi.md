---
title: "NocoBase v2.1.0-alpha.33: thêm biến ngôn ngữ người dùng hiện tại trong v2"
description: "Ghi chú phát hành của v2.1.0-alpha.33"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm biến ngôn ngữ người dùng hiện tại trong v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) bởi @katherinehhh

  - Thêm hỗ trợ quy tắc liên kết cho các mục menu trang ([#9304](https://github.com/nocobase/nocobase/pull/9304)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[client-v2]** Lọc các menu v1 trong bố cục v2 và chỉ hiển thị menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) bởi @zhangzhonghe

- **[Departments]** Tối ưu hóa kiểu danh sách phòng ban bằng cách thêm biểu tượng và điều chỉnh khoảng cách ([#9435](https://github.com/nocobase/nocobase/pull/9435)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi xây dựng plugin thất bại khi mã client v1 import mục `/client-v2` của plugin khác. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) bởi @Molunerfinn

- **[client]**
  - Sửa lỗi gián đoạn khiến quy tắc liên kết nút hành động không có hiệu lực. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) bởi @gchust

  - Ẩn thành phần bảng con cho các trường liên kết nhiều-nhiều trong bảng con v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) bởi @katherinehhh

- **[Graph collection manager]** Sửa lỗi bố cục tự động của giao diện đồ họa gây ra lỗi bộ lọc hành động cập nhật ([#9421](https://github.com/nocobase/nocobase/pull/9421)) bởi @katherinehhh

- **[Block: Tree]** Cải thiện cài đặt khối bộ lọc cây và sửa lỗi liên kết không được hỗ trợ, dự phòng trường tiêu đề và hành vi đặt lại tìm kiếm. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) bởi @jiannx
