---
title: "NocoBase v2.0.0-beta.21: hỗ trợ cấu hình các trường của trường collection liên kết trong khối biểu mẫu"
description: "Ghi chú phát hành của v2.0.0-beta.21"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình các trường của trường collection liên kết trong khối biểu mẫu ([#8578](https://github.com/nocobase/nocobase/pull/8578)) bởi @katherinehhh

- **[Hành động: Sao chép bản ghi]** Thêm hành động sao chép phiên bản 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) bởi @katherinehhh

- **[Workflow]** Hỗ trợ sao chép, dán và di chuyển nút bằng cách kéo thả trên canvas workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) bởi @mytharcher

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện tính năng tự động hoàn thành và gợi ý mã trong trình soạn thảo mã JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) bởi @gchust

- **[Workflow: Phê duyệt]** Loại bỏ hỗ trợ cho trường JS bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi tiềm ẩn "đọc ẩn" khi render trong chế độ không cấu hình. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) bởi @gchust

  - Sửa lỗi bảng con (chỉnh sửa nội tuyến) vẫn hiển thị cột ở chế độ chỉnh sửa sau khi chuyển sang chế độ xem chỉ đọc trong biểu mẫu chỉnh sửa ([#8589](https://github.com/nocobase/nocobase/pull/8589)) bởi @katherinehhh

- **[Flow engine]** Sửa lỗi khi sử dụng mẫu khối ở chế độ "Sao chép" gây ra cửa sổ popup trống khi nhấp vào nút hành động từ khối. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) bởi @gchust

- **[Khối: Bản đồ]** Sửa lỗi trùng lặp tùy chọn cấu hình 'Lưu làm mẫu' trong khối bản đồ ([#8584](https://github.com/nocobase/nocobase/pull/8584)) bởi @katherinehhh
