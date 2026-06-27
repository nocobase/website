---
title: "NocoBase v2.0.55: Cảnh báo khi lưu tên bảng trùng lặp vào cơ sở dữ liệu vector"
description: "Ghi chú phát hành phiên bản v2.0.55"
---

### 🚀 Cải tiến

- **[AI nhân viên]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock

- **[AI: Kiến thức nền tảng]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi không thể phân giải biến bản ghi popup hiện tại trong luồng sự kiện nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust

  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust

- **[Quản lý tệp]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile

- **[WEB client]** Dọn dẹp dữ liệu khối sau khi xóa menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) bởi @gchust

- **[AI nhân viên]** Sửa lỗi đọc tệp OSS của AI nhân viên ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock

- **[Hành động: Nhập bản ghi]** Sửa lỗi bản ghi nhập trên các trường dạng ngày hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url đính kèm bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** sửa lỗi xử lý múi giờ cho nhập xlsx pro bởi @mytharcher
