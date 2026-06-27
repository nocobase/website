---
title: "NocoBase v1.9.4: Tối ưu hóa logic kiểm soát quyền cho các thao tác trên trường liên kết"
description: "Ghi chú phát hành phiên bản v1.9.4"
---

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Tối ưu hóa logic kiểm soát quyền cho các thao tác trên trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile

- **[Workflow: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn khả năng khai thác để truy cập vào ngữ cảnh thực thi cấp trên bởi @mytharcher

- **[Auth: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi sau khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi tin nhắn gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher

- **[client]** Sửa lỗi trang tiếp theo trống trong khối chi tiết phân trang đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) bởi @katherinehhh

- **[Workflow]**
  - Thêm `workflowId` làm dữ liệu định danh cho nhật ký của workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) bởi @mytharcher

  - Sửa lỗi plugin workflow vẫn tiêu thụ sự kiện hàng đợi khi không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher

- **[Người dùng]** Làm mới chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) bởi @2013xile

- **[Workflow: Biến tùy chỉnh]** Sửa lỗi báo lỗi khi không có cấu hình trong nút biến bởi @mytharcher
