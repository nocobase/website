---
title: "NocoBase v2.0.0-beta.16: Thêm API để di chuyển nút"
description: "Ghi chú phát hành của v2.0.0-beta.16"
---

### 🎉 Tính năng mới

- **[client]** thêm thành phần trường bảng con (chỉnh sửa popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) bởi @katherinehhh

- **[Workflow]** Thêm API để di chuyển node ([#8507](https://github.com/nocobase/nocobase/pull/8507)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]**
  - ngăn toàn bộ bảng render lại khi cập nhật một ô ([#8349](https://github.com/nocobase/nocobase/pull/8349)) bởi @katherinehhh

  - Cải thiện subform dạng to-many để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8458](https://github.com/nocobase/nocobase/pull/8458)) bởi @katherinehhh

- **[File manager]** Thêm trình xem trước có thể mở rộng cho file manager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) bởi @mytharcher

- **[Workflow]** Thay đổi đường dẫn route của các trang con workflow, để tất cả các trang workflow nằm dưới tiền tố `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi thời gian bị trùng lặp trong giá trị DateTime của bộ lọc ([#8506](https://github.com/nocobase/nocobase/pull/8506)) bởi @zhangzhonghe

  - Sửa lỗi ngăn không cho sử dụng biến biểu mẫu để gán giá trị trong quy tắc liên kết cho các trường subform dạng to-many đa cấp. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) bởi @gchust

  - Sửa lỗi dữ liệu không làm mới sau khi thay đổi qua nhiều cấp popup và qua nhiều block. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) bởi @gchust

  - sửa lỗi dữ liệu chi tiết con ở chế độ chỉ đọc không thể hiển thị chính xác trong biểu mẫu chỉnh sửa ([#8469](https://github.com/nocobase/nocobase/pull/8469)) bởi @katherinehhh

  - sửa logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh

  - sửa tham số bộ lọc không chính xác cho trường Select quan hệ trong bảng con có thể chỉnh sửa ([#8335](https://github.com/nocobase/nocobase/pull/8335)) bởi @katherinehhh

- **[flow-engine]** sửa lỗi FilterByTK khi filterTargetKey là một mảng một phần tử trong nguồn dữ liệu bên ngoài ([#8522](https://github.com/nocobase/nocobase/pull/8522)) bởi @katherinehhh

- **[AI employees]** sửa lỗi cấu hình trường có thể chọn không nhất quán giữa AI modeling và quản lý nguồn dữ liệu ([#8488](https://github.com/nocobase/nocobase/pull/8488)) bởi @cgyrock

- **[Email manager]** nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải xuống tệp đính kèm thất bại bởi @jiannx
