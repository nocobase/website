---
title: "NocoBase v2.1.0-beta.23: Thêm trường người tạo và người cập nhật cho quy trình làm việc"
description: "Ghi chú phát hành phiên bản v2.1.0-beta.23"
---

### 🎉 Tính năng mới

- **[Workflow]** Thêm trường người tạo và người cập nhật cho quy trình làm việc ([#9217](https://github.com/nocobase/nocobase/pull/9217)) bởi @mytharcher

### 🚀 Cải tiến

- **[Không xác định]**
  - Cải thiện hướng dẫn cài đặt AI Agent để ngăn Agent bỏ qua trình hướng dẫn `--ui` và tự động phát hiện trình quản lý phiên bản Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) bởi @Molunerfinn

  - Cập nhật tài liệu AI yêu cầu NocoBase >= 2.1.0-beta.20 và khuyến nghị phiên bản beta mới nhất. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) bởi @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) bởi @Molunerfinn

- **[client-v2]** Tách client v2 khỏi client v1 và loại bỏ sự phụ thuộc của nó vào client v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[Không xác định]** Sửa lỗi trình chuyển đổi ngôn ngữ tạo URL không chính xác (ví dụ: `/cn/es/` thay vì `/es/`) trên trang tài liệu. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) bởi @Molunerfinn

- **[client]** Đặt chiều cao tối đa cho popover và các biện pháp bảo vệ cuộn để khu vực gửi luôn có thể truy cập được ([#9226](https://github.com/nocobase/nocobase/pull/9226)) bởi @jiannx

- **[Trực quan hóa dữ liệu]** Sửa lỗi bộ chọn trường trống trong cấu hình truy vấn biểu đồ trên các trang luồng ([#9276](https://github.com/nocobase/nocobase/pull/9276)) bởi @2013xile

- **[Xác thực]** Sửa lỗi các phiên cũ vẫn hoạt động sau khi thay đổi mật khẩu ([#9261](https://github.com/nocobase/nocobase/pull/9261)) bởi @2013xile
