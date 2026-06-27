---
title: "NocoBase v2.0.0-alpha.63：AI编辑任务表单中的文本域自动调整大小"
description: "v2.0.0-alpha.63 版本发布说明"
---

### 🚀 Cải tiến

- **[client]**
  - Ngăn chặn việc render lại toàn bộ bảng khi cập nhật một ô ([#8349](https://github.com/nocobase/nocobase/pull/8349)) bởi @katherinehhh

  - Tự động thay đổi kích thước textarea trong biểu mẫu chỉnh sửa tác vụ AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) bởi @heziqiang

- **[Workflow: Phê duyệt]**
  - Thêm logic sửa chữa cho việc đồng bộ khán giả sau khi di chuyển bởi @mytharcher

  - Đơn giản hóa tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi quyền trường và hành động không được tính toán lại sau khi phân trang trong các khối chi tiết, danh sách và biểu mẫu. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) bởi @gchust

  - Sửa lỗi các trường liên kết từ nguồn dữ liệu bên ngoài không tải dữ liệu liên kết trong khối biểu mẫu ([#8356](https://github.com/nocobase/nocobase/pull/8356)) bởi @katherinehhh

- **[sdk]** Cải thiện triển khai chia sẻ token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) bởi @chenos

- **[Kiểm soát truy cập]** Cho phép các trường liên kết sử dụng khóa mục tiêu để liên kết ([#8352](https://github.com/nocobase/nocobase/pull/8352)) bởi @2013xile

- **[Workflow: Nút vòng lặp]** Sửa lỗi nút thất bại trong nhánh điều kiện không thể truyền trạng thái lên nút nhánh cấp trên ([#8360](https://github.com/nocobase/nocobase/pull/8360)) bởi @mytharcher

- **[Workflow: Webhook]** Sửa lỗi trả về mã lỗi 404 khi gửi POST đến URL webhook trong ứng dụng con bởi @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi xây dựng do thiếu phụ thuộc bởi @mytharcher

- **[Trình quản lý email]** Sửa lỗi liên kết trả lời Outlook thỉnh thoảng bị ngắt kết nối bởi @jiannx
