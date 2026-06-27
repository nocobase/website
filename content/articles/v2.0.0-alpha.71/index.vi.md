---
title: "NocoBase v2.0.0-alpha.71: hỗ trợ chiều cao khối có thể cấu hình"
description: "Ghi chú phát hành của v2.0.0-alpha.71"
---

### 🎉 Tính năng mới

- **[client]**
  - Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, cửa sổ bật lên và tab cửa sổ bật lên ([#8590](https://github.com/nocobase/nocobase/pull/8590)) bởi @zhangzhonghe

  - Hỗ trợ cấu hình các trường của trường collection liên kết trong khối biểu mẫu ([#8578](https://github.com/nocobase/nocobase/pull/8578)) bởi @katherinehhh

- **[Khối: GridCard]** hỗ trợ cấu hình chiều cao khối ([#8583](https://github.com/nocobase/nocobase/pull/8583)) bởi @katherinehhh

- **[Thao tác: Sao chép bản ghi]** thêm thao tác sao chép 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) bởi @katherinehhh

- **[Quy trình làm việc: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng mô hình trường độc lập cho các trường liên kết trong biểu mẫu bộ lọc ([#8511](https://github.com/nocobase/nocobase/pull/8511)) bởi @zhangzhonghe

- **[Quy trình làm việc: CC]** Tái cấu trúc plugin CC quy trình làm việc để hỗ trợ kiến trúc FlowModel với khả năng tương thích v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]**
  - Sửa lỗi ngữ cảnh thực thi không chính xác cho "ctx.sql" trong JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) bởi @gchust

  - Sửa lỗi không thể tạo đối tượng Blob trong khối JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) bởi @gchust

- **[client]**
  - Sửa lỗi các cột bảng không hiển thị lại sau khi nhấp vào Chạy trong trình chỉnh sửa cột JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) bởi @gchust

  - Sửa lỗi tiềm ẩn "read hidden" render trong chế độ không cấu hình. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) bởi @gchust

  - sửa lỗi bảng con (chỉnh sửa nội tuyến) vẫn hiển thị các cột ở chế độ chỉnh sửa sau khi chuyển sang chế độ xem chỉ đọc trong biểu mẫu chỉnh sửa ([#8589](https://github.com/nocobase/nocobase/pull/8589)) bởi @katherinehhh

- **[Flow engine]** Sửa lỗi khi sử dụng mẫu khối ở chế độ “Sao chép” gây ra cửa sổ bật lên trống nếu nhấp vào một nút thao tác nào đó từ khối. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) bởi @gchust

- **[Thành phần trường: mask]** Sửa lỗi cửa sổ bật lên cài đặt trường mask không thể tải chính xác tất cả vai trò người dùng. bởi @gchust

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher
