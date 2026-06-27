---
title: "NocoBase v2.1.0-alpha.22: Thêm API để kiểm tra tạo node"
description: "Ghi chú phát hành của v2.1.0-alpha.22"
---

### 🎉 Tính năng mới

- **[Workflow]** Thêm API để kiểm tra việc tạo node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) bởi @mytharcher

### 🚀 Cải tiến

- **[cli]** Thêm tính năng theo dõi nguồn gốc yêu cầu CLI trong nhật ký yêu cầu và nhật ký kiểm toán ([#9223](https://github.com/nocobase/nocobase/pull/9223)) bởi @2013xile

- **[Kiểm soát truy cập]** thêm một số API mới cho kỹ năng acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) bởi @Andrew1989Y

- **[Workflow: Phê duyệt]**
  - Thêm xác thực cho việc tạo node phê duyệt bởi @mytharcher

  - Thêm chỉ mục trên các cột bản ghi phê duyệt để cải thiện hiệu suất cho các thao tác danh sách và gửi bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Công tắc ẩn sắp xếp trường quan hệ ([#9220](https://github.com/nocobase/nocobase/pull/9220)) bởi @jiannx

- **[database]** Đã sửa lỗi trường số thập phân có xác thực có thể từ chối đầu vào số hợp lệ ([#9204](https://github.com/nocobase/nocobase/pull/9204)) bởi @2013xile

- **[Nhân viên AI]** Sửa lỗi thiếu giá trị trường URL cho tệp đính kèm trong các lựa chọn biểu mẫu của nhân viên AI. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) bởi @cgyrock

- **[Người dùng]** Đã sửa lỗi các trường được cấu hình động trong Chỉnh sửa hồ sơ không tải được dữ liệu người dùng mới nhất ([#9205](https://github.com/nocobase/nocobase/pull/9205)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi không thể xóa sắp xếp nhóm trên các trường sắp xếp của nguồn dữ liệu bên ngoài ([#9203](https://github.com/nocobase/nocobase/pull/9203)) bởi @2013xile
