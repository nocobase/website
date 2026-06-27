---
title: "NocoBase v2.0.46: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v2.0.46"
---

### 🐛 Sửa lỗi

- **[client]**
  - Đã khắc phục sự cố khi giá trị mặc định không được áp dụng khi thêm lại một bản ghi sau khi nó đã bị xóa khỏi bảng con. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) bởi @gchust

  - Đặt chiều cao tối đa cho popover và các biện pháp bảo vệ cuộn để khu vực gửi luôn có thể truy cập được ([#9226](https://github.com/nocobase/nocobase/pull/9226)) bởi @jiannx

- **[Xác thực]** Đã khắc phục sự cố các phiên cũ vẫn hoạt động sau khi thay đổi mật khẩu ([#9261](https://github.com/nocobase/nocobase/pull/9261)) bởi @2013xile

- **[Nguồn dữ liệu: MariaDB bên ngoài]** Đã khắc phục lỗi kiểm thử thất bại do import module không đúng cách bởi @mytharcher
