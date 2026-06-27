---
title: "NocoBase v1.3.55: Sử dụng biểu tượng có ý nghĩa chính xác hơn cho trình khởi tạo khối"
description: "Ghi chú phát hành v1.3.55"
---

### 🚀 Cải tiến

- **[client]** Sử dụng các biểu tượng có ý nghĩa chính xác hơn cho bộ khởi tạo khối ([#5757](https://github.com/nocobase/nocobase/pull/5757)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa các trường hợp E2E dựa trên các biểu tượng đã thay đổi ([#5768](https://github.com/nocobase/nocobase/pull/5768)) bởi @mytharcher

  - Sửa trường chọn (select field) hiển thị trống khi dữ liệu rỗng ([#5762](https://github.com/nocobase/nocobase/pull/5762)) bởi @katherinehhh

- **[database]** Sửa lỗi cập nhật giá trị liên kết hasOne/belongsTo khi không có khóa ngoại ([#5754](https://github.com/nocobase/nocobase/pull/5754)) bởi @chareice

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi hiển thị sai khóa nguồn ([#5771](https://github.com/nocobase/nocobase/pull/5771)) bởi @katherinehhh

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]**
  - Cho phép tất cả vai trò kích hoạt sự kiện hành động tùy chỉnh trong các nguồn dữ liệu bên ngoài bởi @mytharcher

  - Sửa nguồn dữ liệu mặc định là chính bởi @mytharcher

  - Sửa lỗi nguồn dữ liệu khi không khớp bởi @mytharcher

  - Sửa lỗi trình kích hoạt hành động tùy chỉnh không kích hoạt trên liên kết bởi @mytharcher
