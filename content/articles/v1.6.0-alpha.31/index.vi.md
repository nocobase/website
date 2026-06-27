---
title: "NocoBase v1.6.0-alpha.31: tương thích với các cài đặt kiểm soát truy cập nút lịch sử"
description: "Ghi chú phát hành của v1.6.0-alpha.31"
---

### 🎉 Tính năng mới

- **[client]** Tương thích với cài đặt kiểm soát truy cập nút lịch sử ([#6376](https://github.com/nocobase/nocobase/pull/6376)) bởi @katherinehhh

- **[Workflow: Tin nhắn phản hồi]** Hỗ trợ sử dụng trong trình kích hoạt hành động bởi @mytharcher

### 🚀 Cải tiến

- **[Auth: API keys]** Thêm cấu hình kiểm tra bảo mật token cho xác thực khóa API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) bởi @sheldon66

- **[Workflow: Nút thủ công]** Điều chỉnh giao diện trung tâm tác vụ workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Bộ nhớ đệm trình duyệt không chính xác sau khi chạy lệnh `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) bởi @gchust

- **[client]**
  - Sự cố ngữ cảnh chủ đề FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) bởi @katherinehhh

  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không có hiệu lực ([#6400](https://github.com/nocobase/nocobase/pull/6400)) bởi @zhangzhonghe

- **[auth]** Xử lý người dùng không tồn tại với lỗi 401 và cập nhật thông báo ngôn ngữ ([#6381](https://github.com/nocobase/nocobase/pull/6381)) bởi @sheldon66

- **[Block: template]** Tùy chọn lưu dưới dạng mẫu không hiển thị trong khối dữ liệu trang ([#6398](https://github.com/nocobase/nocobase/pull/6398)) bởi @gchust

- **[Workflow: Nút thủ công]** Tránh xung đột khóa duy nhất ([#6407](https://github.com/nocobase/nocobase/pull/6407)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Lỗi khi chỉnh sửa trường trong nguồn dữ liệu bên ngoài ([#6402](https://github.com/nocobase/nocobase/pull/6402)) bởi @katherinehhh

- **[Trình chỉnh sửa chủ đề]** Chuyển đổi chủ đề thất bại sau nhiều lần chuyển đổi liên tiếp ([#6387](https://github.com/nocobase/nocobase/pull/6387)) bởi @katherinehhh

- **[WEB client]** Trang trống sau khi chuyển đổi vai trò ([#6388](https://github.com/nocobase/nocobase/pull/6388)) bởi @aaaaaajie

- **[Workflow: Phê duyệt]**
  - Tránh cấu hình người được gán sai truy vấn tất cả người dùng bởi @mytharcher

  - Sửa tham số thứ tự khi thêm người được gán bởi @mytharcher

- **[WeCom]** Sửa liên kết nhắc đăng nhập và lỗi đăng nhập dingtalk bởi @chenzhizdt
