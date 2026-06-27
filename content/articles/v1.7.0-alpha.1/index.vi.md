---
title: "NocoBase v1.7.0-alpha.1: Hỗ trợ sử dụng nút kết thúc để xác định trạng thái"
description: "Ghi chú phát hành của v1.7.0-alpha.1"
---

### 🎉 Tính năng mới

- **[Workflow: Sự kiện sau hành động]** Hỗ trợ sử dụng nút kết thúc để xác định trạng thái ([#6399](https://github.com/nocobase/nocobase/pull/6399)) bởi @mytharcher

### 🚀 Cải tiến

- **[Workflow]** Sửa lỗi API 401 khi chưa đăng nhập ([#6412](https://github.com/nocobase/nocobase/pull/6412)) bởi @mytharcher

- **[Trình quản lý email]** Sử dụng cùng cấu trúc phần tử và kiểu dáng toàn cục cho nút trên thanh công cụ bởi @mytharcher

- **[Workflow: Phê duyệt]** Điều chỉnh giao diện trung tâm tác vụ bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Không thể di chuyển trang vào một nhóm ([#6413](https://github.com/nocobase/nocobase/pull/6413)) bởi @zhangzhonghe

  - Menu cấp sâu không hiển thị biểu tượng ([#6410](https://github.com/nocobase/nocobase/pull/6410)) bởi @zhangzhonghe

- **[Xác thực]** Người dùng không có vai trò sẽ được chuyển hướng đến trang thông báo lỗi. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) bởi @sheldon66

- **[Workflow: Sự kiện hành động tùy chỉnh]** Thiếu cấu hình quy tắc liên kết cho nút 'Kích hoạt Workflow' bởi @katherinehhh

- **[Trình quản lý sao lưu]** Thiếu dữ liệu khóa mã hóa trong quá trình khôi phục sao lưu bởi @gchust

- **[Workflow: Phê duyệt]** Tránh xung đột trên khóa duy nhất bởi @mytharcher
