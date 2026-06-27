---
title: "NocoBase v1.4.24: thành phần datePicker chỉ đọc đầu vào"
description: "Ghi chú phát hành v1.4.24"
---

### 🚀 Cải tiến

- **[client]** Input của component datePicker ở chế độ chỉ đọc ([#6061](https://github.com/nocobase/nocobase/pull/6061)) bởi @Cyx649312038

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi tải không chính xác các trường liên kết modal trong khối bảng ([#6060](https://github.com/nocobase/nocobase/pull/6060)) bởi @katherinehhh

  - Sửa lỗi kiểu hiển thị trong bảng con của khối chi tiết ([#6049](https://github.com/nocobase/nocobase/pull/6049)) bởi @katherinehhh

  - Sửa lỗi định dạng trường số ở chế độ readPretty ảnh hưởng đến chế độ chỉnh sửa ([#6050](https://github.com/nocobase/nocobase/pull/6050)) bởi @katherinehhh

  - Sửa lỗi kiểu ô tiêu đề bảng trong ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) bởi @katherinehhh

- **[database]** Sửa lỗi khi khởi tạo trường sắp xếp với khóa chính ([#6059](https://github.com/nocobase/nocobase/pull/6059)) bởi @chareice

- **[Trực quan hóa dữ liệu]** Loại bỏ mệnh đề `LIMIT` khi sử dụng hàm tổng hợp mà không đặt chiều trong truy vấn biểu đồ ([#6062](https://github.com/nocobase/nocobase/pull/6062)) bởi @2013xile

- **[Trình quản lý sao lưu]** Sửa lỗi tải xuống bản sao lưu cho người dùng chỉ đăng nhập vào ứng dụng con bởi @gchust
