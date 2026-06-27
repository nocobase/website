---
title: "NocoBase v2.1.0-alpha.25: Hỗ trợ xóa phê duyệt bản nháp"
description: "Ghi chú phát hành của v2.1.0-alpha.25"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ xóa bản nháp phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[undefined]** Cập nhật tài liệu AI để yêu cầu NocoBase >= 2.1.0-beta.20 và khuyến nghị phiên bản beta mới nhất. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) bởi @Molunerfinn

- **[AI employees]** Cập nhật cấu hình tác vụ phím tắt của AI employee để sử dụng cùng thành phần cài đặt kỹ năng với cấu hình nút AI employee trong workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi giá trị mặc định không được áp dụng khi thêm lại bản ghi sau khi đã xóa khỏi bảng con. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) bởi @gchust

  - Lọc các khối tùy chọn không cần thiết trong hộp thoại chọn bật lên của các trường liên quan ([#9224](https://github.com/nocobase/nocobase/pull/9224)) bởi @jiannx

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập xlsx thất bại và báo lỗi không khớp tiêu đề ([#9253](https://github.com/nocobase/nocobase/pull/9253)) bởi @mytharcher

- **[Cài đặt giấy phép]** Cập nhật thông báo lưu giấy phép thành công ([#9251](https://github.com/nocobase/nocobase/pull/9251)) bởi @jiannx

- **[AI employees]** Đã sửa lỗi biến trong lời nhắc hệ thống của AI employee không có hiệu lực ([#9256](https://github.com/nocobase/nocobase/pull/9256)) bởi @cgyrock

- **[IdP: OAuth]** Đã sửa lỗi đăng nhập CLI OAuth thất bại và hạn chế đăng ký động chỉ với URL callback cục bộ ([#9248](https://github.com/nocobase/nocobase/pull/9248)) bởi @2013xile

- **[AI: Cơ sở tri thức]** Sửa lỗi xóa tài liệu cơ sở tri thức không xóa dữ liệu vector liên quan bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi nhập xlsx thất bại và báo lỗi không khớp tiêu đề bởi @mytharcher
