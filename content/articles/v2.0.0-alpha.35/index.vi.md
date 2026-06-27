---
title: "NocoBase v2.0.0-alpha.35: hỗ trợ thao tác trì hoãn trong mô hình luồng"
description: "Ghi chú phát hành của v2.0.0-alpha.35"
---

### 🚀 Cải tiến

- **[flow-engine]** Hỗ trợ thao tác trì hoãn trong mô hình luồng ([#7786](https://github.com/nocobase/nocobase/pull/7786)) của @gchust

- **[Workflow: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn việc khai thác có thể cấp quyền truy cập vào ngữ cảnh thực thi cấp trên của @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trang tiếp theo trống trong khối phân trang chi tiết đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) của @katherinehhh

  - Sửa lỗi chiều rộng của thao tác bảng và jsColumn không được áp dụng ([#7777](https://github.com/nocobase/nocobase/pull/7777)) của @katherinehhh

  - Phạm vi dữ liệu của khối không hoạt động nếu được thiết lập bởi luồng sự kiện trang ([#7788](https://github.com/nocobase/nocobase/pull/7788)) của @gchust

- **[Workflow]** Thêm `workflowId` làm dữ liệu định danh cho nhật ký của quy trình làm việc ([#7789](https://github.com/nocobase/nocobase/pull/7789)) của @mytharcher

- **[Workflow: Biến tùy chỉnh]** Sửa lỗi báo lỗi khi không có cấu hình trong nút biến của @mytharcher

- **[Trình quản lý email]** Bộ sưu tập mailMessages thêm chỉ mục của @jiannx
