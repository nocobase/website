---
title: "NocoBase v1.8.17: Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một quy trình làm việc"
description: "Ghi chú phát hành phiên bản v1.8.17"
---

### 🎉 Tính năng mới

- **[Quy trình công việc: Phê duyệt]** Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một quy trình công việc bởi @mytharcher

### 🚀 Cải tiến

- **[Xác thực]** Đã loại bỏ tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile

- **[In mẫu]** hỗ trợ trường mảng m2m bởi @jiannx

### 🐛 Sửa lỗi

- **[Di động]** Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe

- **[Quy trình công việc]** Sửa lỗi dịch thuật tiêu đề trang trong trung tâm tác vụ quy trình công việc ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher

- **[Lịch]** tooltip của mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi bản dịch ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher

- **[Quản lý tệp]** Loại bỏ gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]**
  - Không dùng tham số có vấn đề `attachmentField` bởi @mytharcher

  - Sửa lỗi không thể sử dụng phương thức xác thực IAM để tải lên tệp bởi @mytharcher
