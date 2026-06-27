---
title: "NocoBase v1.7.0-beta.1: tương thích với các cài đặt kiểm soát truy cập nút lịch sử"
description: "Ghi chú phát hành của v1.7.0-beta.1"
---

### 🎉 Tính năng mới

- **[client]** Tương thích với cài đặt kiểm soát truy cập nút lịch sử ([#6376](https://github.com/nocobase/nocobase/pull/6376)) bởi @katherinehhh

- **[Workflow: Sự kiện sau hành động]** Hỗ trợ sử dụng nút kết thúc để xác định trạng thái ([#6399](https://github.com/nocobase/nocobase/pull/6399)) bởi @mytharcher

- **[Workflow: Tin nhắn phản hồi]** Hỗ trợ sử dụng trong trình kích hoạt hành động bởi @mytharcher

### 🚀 Cải tiến

- **[Workflow]** Sửa lỗi API 401 khi chưa đăng nhập ([#6412](https://github.com/nocobase/nocobase/pull/6412)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Điều chỉnh giao diện trung tâm tác vụ workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) bởi @mytharcher

- **[Trình quản lý email]** Sử dụng cùng cấu trúc và kiểu phần tử trong toàn cục cho nút thanh công cụ bởi @mytharcher

- **[Workflow: Phê duyệt]** Điều chỉnh giao diện trung tâm tác vụ bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Không thể di chuyển trang vào một nhóm ([#6413](https://github.com/nocobase/nocobase/pull/6413)) bởi @zhangzhonghe

  - Menu cấp sâu không hiển thị biểu tượng ([#6410](https://github.com/nocobase/nocobase/pull/6410)) bởi @zhangzhonghe

  - Vấn đề ngữ cảnh chủ đề FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) bởi @katherinehhh

- **[Workflow: Nút thủ công]** Tránh xung đột khóa duy nhất ([#6407](https://github.com/nocobase/nocobase/pull/6407)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Lỗi khi chỉnh sửa trường trong nguồn dữ liệu bên ngoài ([#6402](https://github.com/nocobase/nocobase/pull/6402)) bởi @katherinehhh

- **[Xác thực]** Người dùng không có vai trò nên chuyển hướng đến trang thông báo lỗi. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) bởi @sheldon66

- **[Workflow: Sự kiện hành động tùy chỉnh]** Thiếu cấu hình quy tắc liên kết cho nút 'Kích hoạt Workflow' bởi @katherinehhh

- **[Trình quản lý sao lưu]** Thiếu dữ liệu khóa mã hóa khi khôi phục sao lưu bởi @gchust

- **[Workflow: Phê duyệt]** Tránh xung đột khóa duy nhất bởi @mytharcher
