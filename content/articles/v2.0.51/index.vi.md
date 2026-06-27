---
title: "NocoBase v2.0.51: Sửa hành vi xác thực bắt buộc cho biểu mẫu phê duyệt"
description: "Ghi chú phát hành v2.0.51"
---

### 🚀 Cải tiến

- **[Quy trình phê duyệt]** Sửa lỗi hành vi xác thực trường bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi không thể chỉnh sửa mã JS sau khi trường JS được đặt ở chế độ chỉ đọc. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) bởi @gchust

  - Sửa lỗi gán giá trị trường trong bảng con không có hiệu lực trong quy tắc liên kết trường. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) bởi @gchust

  - Sửa lỗi tab trang v2 không đồng bộ ngay sau khi lưu cài đặt ([#9396](https://github.com/nocobase/nocobase/pull/9396)) bởi @zhangzhonghe

  - Sửa lỗi cửa sổ bật lên giá trị mặc định cho trường liên kết trong biểu mẫu tạo hiển thị không chính xác. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) bởi @gchust

- **[Chính sách mật khẩu]** Sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày tháng luôn thất bại bởi @mytharcher

- **[Quy trình phê duyệt]** Sửa lỗi cửa sổ chọn bản ghi bị che khuất trong cấu hình quy trình phê duyệt bởi @zhangzhonghe
