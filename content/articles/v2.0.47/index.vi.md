---
title: "NocoBase v2.0.47: Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO"
description: "Ghi chú phát hành phiên bản v2.0.47"
---

### 🎉 Tính năng mới

- **[AI nhân viên]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện hành vi kéo thả khối trên trang v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) bởi @zhangzhonghe

- **[AI nhân viên]** Điều chỉnh danh mục AI nhân viên ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock

- **[Quy trình: Phê duyệt]** Đánh dấu chế độ hiển thị liên kết tải từ DB là legacy bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Đã sửa lỗi bộ lọc datetime nguồn dữ liệu ngoài SQL Server có thể thất bại ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile

- **[client]**
  - Giữ nguyên giá trị null cho các phụ thuộc biến Data scope trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx

  - Chạy lại kết xuất cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx

  - Sửa lỗi trường biểu mẫu bộ lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe

  - Đã sửa lỗi ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx

- **[flow-engine]** Đã sửa lỗi trường ẩn hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust

- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng thất bại trong nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher

- **[Khối: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo để lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx

- **[AI nhân viên]** Sửa lỗi tích hợp AI nhân viên deepSeek V4 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) bởi @cgyrock

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher

- **[Quy trình: Phê duyệt]**
  - Sửa lỗi kiểu bởi @mytharcher

  - Sửa thời gian thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher
