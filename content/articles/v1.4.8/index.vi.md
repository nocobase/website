---
title: "NocoBase v1.4.8: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.4.8"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi mẫu dữ liệu trong biểu mẫu bộ lọc được cấu hình trong bộ chọn bản ghi trường liên kết ([#5837](https://github.com/nocobase/nocobase/pull/5837)) bởi @katherinehhh

  - Sửa lỗi mẫu chuỗi Markdown không tải được dữ liệu của dữ liệu liên kết (Nguồn dữ liệu bên ngoài) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) bởi @katherinehhh

- **[Đồng bộ hóa dữ liệu người dùng]** Bỏ qua các loại dữ liệu không được hỗ trợ trong quá trình đồng bộ hóa thay vì báo lỗi. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) bởi @chenzhizdt

- **[Trình quản lý sao lưu]**
  - Khắc phục tình trạng cửa sổ tải xuống hiện chậm đối với các tệp sao lưu lớn bởi @gchust

  - Khắc phục sự cố khi khôi phục ứng dụng con sao lưu khiến tất cả ứng dụng khởi động lại bởi @gchust
