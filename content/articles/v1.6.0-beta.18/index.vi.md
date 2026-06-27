---
title: "NocoBase v1.6.0-beta.18: Thêm cấu hình bảo mật token cho xác thực khóa API"
description: "Ghi chú phát hành v1.6.0-beta.18"
---

### 🚀 Cải tiến

- **[Auth: API keys]** Thêm kiểm tra cấu hình bảo mật token cho xác thực API key. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[server]** Bộ nhớ đệm trình duyệt không chính xác sau khi chạy lệnh `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) bởi @gchust

- **[auth]** Xử lý người dùng không tồn tại với lỗi 401 và cập nhật thông báo ngôn ngữ ([#6381](https://github.com/nocobase/nocobase/pull/6381)) bởi @sheldon66

- **[WEB client]** Trang bị trống sau khi chuyển đổi vai trò ([#6388](https://github.com/nocobase/nocobase/pull/6388)) bởi @aaaaaajie

- **[Trình chỉnh sửa giao diện]** Chuyển đổi giao diện thất bại sau nhiều lần chuyển đổi liên tiếp ([#6387](https://github.com/nocobase/nocobase/pull/6387)) bởi @katherinehhh

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa tham số thứ tự khi thêm người được ủy quyền bởi @mytharcher

  - Tránh truy vấn tất cả người dùng khi cấu hình người được ủy quyền sai bởi @mytharcher

- **[WeCom]** Sửa lỗi liên kết đăng nhập và lỗi đăng nhập dingtalk bởi @chenzhizdt
