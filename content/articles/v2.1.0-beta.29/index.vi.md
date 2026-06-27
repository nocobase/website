---
title: "NocoBase v2.1.0-beta.29: thêm tùy chọn giới hạn phạm vi ngày cho trường ngày trong biểu mẫu v2"
description: "Ghi chú phát hành v2.1.0-beta.29"
---

### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn giới hạn phạm vi ngày cho trường ngày tháng trong biểu mẫu v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) bởi @katherinehhh

- **[flow-engine]** Di chuyển `plugin-environment-variables` sang client-v2 với trang cài đặt dựa trên React và biến runtime `$env` được đăng ký toàn cục; thêm mục nhập client-v2 vào `plugin-file-manager` với trang cấu hình lưu trữ dựa trên React và trường tải lên, hành động tải lên và xem trước dựa trên FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi mã JS không thể chỉnh sửa sau khi trường JS được đặt ở chế độ chỉ đọc. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) bởi @gchust

  - Sửa lỗi tab trang v2 không đồng bộ ngay sau khi lưu cài đặt ([#9396](https://github.com/nocobase/nocobase/pull/9396)) bởi @zhangzhonghe

  - Đã sửa lỗi gán trường trong bảng con không có hiệu lực trong quy tắc liên kết trường. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) bởi @gchust

  - Đã sửa lỗi cửa sổ bật lên giá trị mặc định cho trường liên kết trong biểu mẫu tạo hiển thị không chính xác. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) bởi @gchust

- **[Trường bộ sưu tập: Markdown(Vditor)]** Sửa lỗi chú thích trường markdown bị ẩn trong bố cục biểu mẫu ngang ([#9420](https://github.com/nocobase/nocobase/pull/9420)) bởi @katherinehhh

- **[Thiết bị di động (không dùng nữa)]** Sửa lỗi cửa sổ bật lên thông báo trên di động không thể đóng hoặc cuộn ([#9424](https://github.com/nocobase/nocobase/pull/9424)) bởi @zhangzhonghe

- **[WEB client]** Sửa lỗi lọc loại tuyến đường khi sử dụng nhãn đã dịch ([#9425](https://github.com/nocobase/nocobase/pull/9425)) bởi @zhangzhonghe

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường JS xuất hiện trong cài đặt quy trình phê duyệt bởi @zhangzhonghe
