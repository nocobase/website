---
title: "NocoBase v1.7.0-beta.2: hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết"
description: "Ghi chú phát hành của v1.7.0-beta.2"
---

### 🎉 Tính năng mới

- **[client]**
  - Khối bảng hỗ trợ ẩn cột chỉ mục (mặc định hiển thị) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) bởi @katherinehhh

  - Hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết ([#6338](https://github.com/nocobase/nocobase/pull/6338)) bởi @katherinehhh

  - Hỗ trợ cấu hình phạm vi ngày (min/max) cho trường thời gian trong quy tắc liên kết ([#6356](https://github.com/nocobase/nocobase/pull/6356)) bởi @katherinehhh

- **[Khối: Bảng hành động]** hỗ trợ xuống dòng cho tiêu đề hành động trong bảng hành động ([#6433](https://github.com/nocobase/nocobase/pull/6433)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Số trang không chính xác khi thêm dữ liệu sau khi thay đổi kích thước trang của bảng con ([#6437](https://github.com/nocobase/nocobase/pull/6437)) bởi @katherinehhh

  - Kiểu logo không nhất quán với phiên bản trước ([#6444](https://github.com/nocobase/nocobase/pull/6444)) bởi @zhangzhonghe

  - Giá trị trường chọn nhiều thay đổi và mất tùy chọn khi xóa bản ghi bảng con ([#6405](https://github.com/nocobase/nocobase/pull/6405)) bởi @katherinehhh

  - Lựa chọn phạm vi trường ngày loại trừ ngày tối đa ([#6418](https://github.com/nocobase/nocobase/pull/6418)) bởi @katherinehhh

  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không có hiệu lực ([#6415](https://github.com/nocobase/nocobase/pull/6415)) bởi @zhangzhonghe

  - Dữ liệu không được cập nhật trong cửa sổ popup mở qua nút Liên kết ([#6411](https://github.com/nocobase/nocobase/pull/6411)) bởi @zhangzhonghe

- **[Hành động: Chỉnh sửa hàng loạt]** Sửa lỗi workflow không thể được kích hoạt trong quá trình gửi chỉnh sửa hàng loạt ([#6440](https://github.com/nocobase/nocobase/pull/6440)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Các trường đã bị xóa xuất hiện khi thêm trường bộ lọc tùy chỉnh ([#6450](https://github.com/nocobase/nocobase/pull/6450)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Chuyển đổi nguồn dữ liệu trong quản lý vai trò không tải được các bộ sưu tập tương ứng ([#6431](https://github.com/nocobase/nocobase/pull/6431)) bởi @katherinehhh

- **[Hành động: Yêu cầu tùy chỉnh]** Lỗi xác thực quyền phía máy chủ của yêu cầu tùy chỉnh ([#6438](https://github.com/nocobase/nocobase/pull/6438)) bởi @katherinehhh

- **[Trình quản lý tệp]** Sửa một số vấn đề của trình quản lý tệp ([#6436](https://github.com/nocobase/nocobase/pull/6436)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]**
  - Tránh cấu hình người nhận sai truy vấn tất cả người dùng ([#6424](https://github.com/nocobase/nocobase/pull/6424)) bởi @sheldon66

  - Phân biệt màu nền danh sách tin nhắn trong ứng dụng với thẻ tin nhắn để tăng cường phân cấp trực quan và khả năng đọc. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) bởi @sheldon66

- **[Workflow: Nút thủ công]**
  - Thay đổi giới hạn phiên bản của migration thành `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) bởi @mytharcher

  - Sửa lỗi migration thiếu tiền tố bảng và logic schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) bởi @mytharcher
