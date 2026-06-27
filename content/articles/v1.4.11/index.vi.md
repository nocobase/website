---
title: "NocoBase v1.4.11: Tối ưu hóa các mục cấu hình thành phần"
description: "Ghi chú phát hành phiên bản v1.4.11"
---

### 🚀 Cải tiến

- **[client]** Hỗ trợ thêm nhiều component cho mục cấu hình 'Hiển thị dấu ba chấm khi nội dung bị tràn' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) bởi @zhangzhonghe

- **[database]** Thêm `firstOrCreate` & `updateOrCreate` vào kho lưu trữ quan hệ (relation repository) ([#5894](https://github.com/nocobase/nocobase/pull/5894)) bởi @chareice

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi thiếu tham số x-data-source trong mẫu yêu cầu trùng lặp cho khối nguồn dữ liệu bên ngoài ([#5882](https://github.com/nocobase/nocobase/pull/5882)) bởi @katherinehhh

  - Sửa lỗi thanh cuộn ngang trong bảng thuộc plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) bởi @katherinehhh

  - Sửa lỗi đôi khi xuất hiện thêm tùy chọn 'N/A' trong danh sách thả xuống của trường liên kết ([#5878](https://github.com/nocobase/nocobase/pull/5878)) bởi @zhangzhonghe

  - Sửa lỗi tạo view trong PG, khắc phục lỗi khi chọn view giữa các schema ([#5881](https://github.com/nocobase/nocobase/pull/5881)) bởi @katherinehhh

  - Sửa lỗi kiểu nhóm (group styles) trong khối biểu mẫu khi bố cục được đặt theo chiều ngang ([#5884](https://github.com/nocobase/nocobase/pull/5884)) bởi @katherinehhh

- **[Người dùng]**
  - Sửa lỗi biểu mẫu không được đặt lại sau khi thêm hoặc chỉnh sửa người dùng trong quản lý người dùng. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) bởi @2013xile

  - Sửa lỗi cài đặt phân trang bị đặt lại sau khi chỉnh sửa và gửi hồ sơ người dùng trên trang quản lý người dùng sau khi chuyển trang hoặc thay đổi kích thước trang. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi lọc với Collection nguồn dữ liệu bên ngoài ([#5890](https://github.com/nocobase/nocobase/pull/5890)) bởi @chareice

- **[Biểu mẫu công khai]** Sửa lỗi chuyển đổi chủ đề toàn cục ảnh hưởng đến chủ đề trang xem trước biểu mẫu công khai ([#5883](https://github.com/nocobase/nocobase/pull/5883)) bởi @katherinehhh
