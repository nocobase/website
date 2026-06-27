---
title: "NocoBase v2.1.0-beta.35: Chia sẻ đánh giá điều kiện giữa ứng dụng v1 và v2"
description: "Ghi chú phát hành của v2.1.0-beta.35"
---

### 🚀 Cải tiến

- **[client]** Chia sẻ đánh giá điều kiện giữa ứng dụng v1 và v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) bởi @zhangzhonghe

- **[Bản địa hóa]** Cải thiện các tác vụ dịch thuật bản địa hóa Lina với phạm vi dịch, cài đặt ngôn ngữ tham chiếu và chỉnh sửa nhanh ([#9521](https://github.com/nocobase/nocobase/pull/9521)) bởi @2013xile

- **[Quy trình: Phê duyệt]** Cải thiện các phê duyệt liên quan với thẻ dòng thời gian bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[undefined]** Căn chỉnh đường dẫn cấu hình nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) bởi @chenos

- **[cli-v1]** Đã sửa lỗi khởi động phát triển create-nocobase-app bằng cách tái sử dụng các shell ứng dụng đã đóng gói trong khi cho phép phát triển plugin cục bộ. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) bởi @Molunerfinn

- **[client]**
  - Sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe

  - Sửa lỗi biểu mẫu bộ lọc không thể sử dụng các biến biểu mẫu hiện tại ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe

- **[Xác thực]** Ngăn máy chủ bị sập khi mã thông báo xác thực WebSocket tham chiếu đến một bộ xác thực có plugin loại xác thực bị gỡ tải hoặc thiếu. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) bởi @Molunerfinn

- **[Lịch]**
  - Sửa lỗi các mục khác của lịch không thể hiển thị đầy đủ ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe

  - Đã sửa kiểu con trỏ cho các mục sự kiện trong lớp phủ nhiều sự kiện của lịch ([#9519](https://github.com/nocobase/nocobase/pull/9519)) bởi @jiannx

- **[Cài đặt giấy phép]** Giải quyết các phụ thuộc đóng gói được liên kết tượng trưng ([#9518](https://github.com/nocobase/nocobase/pull/9518)) bởi @chenos
