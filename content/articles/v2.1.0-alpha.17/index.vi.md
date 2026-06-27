---
title: "NocoBase v2.1.0-alpha.17: tái cấu trúc CLI NocoBase"
description: "Ghi chú phát hành của v2.1.0-alpha.17"
---

### 🎉 Tính năng mới

- **[cli]** Tái cấu trúc NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) bởi @chenos

- **[AI employees]** Cải thiện khả năng phân tích tài liệu tải lên của AI employees ([#9126](https://github.com/nocobase/nocobase/pull/9126)) bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**
  - Đồng bộ tài liệu về biến môi trường và chế độ cụm đã dịch với các bản cập nhật tiếng Trung mới nhất. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) bởi @mytharcher

  - Tài liệu: thêm bản dịch tiếng Ả Rập cho các trang giới thiệu bắt đầu ([#9044](https://github.com/nocobase/nocobase/pull/9044)) bởi @gaston98765

  - Thêm bản dịch tiếng Ả Rập cho trang chủ tài liệu ([#9043](https://github.com/nocobase/nocobase/pull/9043)) bởi @gaston98765

- **[logger]** Thêm thông tin `referer` vào nhật ký yêu cầu ([#9110](https://github.com/nocobase/nocobase/pull/9110)) bởi @2013xile

- **[client]** Thêm công tắc xác thực bắt buộc cho biểu mẫu ([#9060](https://github.com/nocobase/nocobase/pull/9060)) bởi @jiannx

- **[Workflow: Manual node]** Sử dụng `simplePagination` trên các bộ sưu tập liên quan đến tác vụ workflow để cải thiện hiệu suất danh sách ([#9117](https://github.com/nocobase/nocobase/pull/9117)) bởi @mytharcher

- **[AI employees]** Sau khi chọn khối AI employee, điền tệp đính kèm biểu mẫu vào khu vực tải lên ([#9127](https://github.com/nocobase/nocobase/pull/9127)) bởi @cgyrock

- **[Workflow: Approval]** Sử dụng `simplePagination` trên bộ sưu tập `approvals` và `approvalRecords` để cải thiện hiệu suất danh sách bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi các tùy chọn không bắt buộc của trường chọn đơn trong cấu hình quy tắc trường bị trống ([#9119](https://github.com/nocobase/nocobase/pull/9119)) bởi @jiannx

  - Đã sửa lỗi thành phần trường liên kết không chính xác trong cài đặt giá trị trường. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) bởi @gchust

  - Đã sửa lỗi cài đặt giá trị mặc định không chính xác cho bảng con trong biểu mẫu. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) bởi @gchust

- **[utils]** Thêm kiểm soát bảo mật cho việc gửi yêu cầu HTTP từ máy chủ, để tránh SSRF có thể xảy ra ([#9079](https://github.com/nocobase/nocobase/pull/9079)) bởi @mytharcher
Tham khảo: [Biến môi trường](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** Sửa lỗi xác thực của các nút workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) bởi @mytharcher

- **[Notification: In-app message]** Sửa lỗi thành phần chọn người nhận hoạt động không chính xác ([#9123](https://github.com/nocobase/nocobase/pull/9123)) bởi @mytharcher

- **[IdP: OAuth]** Đã sửa lỗi truy cập OAuth cho các yêu cầu API thông thường ([#9120](https://github.com/nocobase/nocobase/pull/9120)) bởi @2013xile

- **[AI employees]**
  - Đã sửa lỗi sắp xếp truy vấn tổng hợp bị ACL loại bỏ ([#9099](https://github.com/nocobase/nocobase/pull/9099)) bởi @2013xile

  - Sửa lỗi cài đặt baseURL của dịch vụ LLM google-gen-ai không có hiệu lực ([#9107](https://github.com/nocobase/nocobase/pull/9107)) bởi @cgyrock

- **[Email manager]** Xóa lời nhắc đóng biểu mẫu sau khi email được gửi thành công bởi @jiannx
