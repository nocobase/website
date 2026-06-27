---
title: "NocoBase v2.0.38: Cải thiện khả năng phân tích tài liệu tải lên của nhân viên AI"
description: "Ghi chú phát hành phiên bản v2.0.38"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]** Cải thiện khả năng phân tích tài liệu đã tải lên của nhân viên AI ([#9126](https://github.com/nocobase/nocobase/pull/9126)) của @cgyrock

### 🚀 Cải tiến

- **[logger]** Thêm thông tin `referer` vào nhật ký yêu cầu ([#9110](https://github.com/nocobase/nocobase/pull/9110)) của @2013xile

- **[undefined]** Đồng bộ tài liệu về biến môi trường và chế độ cụm đã được dịch với bản cập nhật tiếng Trung mới nhất. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) của @mytharcher

- **[Nhân viên AI]** Sau khi chọn khối nhân viên AI, điền tệp đính kèm biểu mẫu vào khu vực tải lên ([#9127](https://github.com/nocobase/nocobase/pull/9127)) của @cgyrock

- **[Quy trình làm việc: Nút thủ công]** Sử dụng `simplePagination` trên các bộ sưu tập liên quan đến tác vụ quy trình làm việc để cải thiện hiệu suất danh sách ([#9117](https://github.com/nocobase/nocobase/pull/9117)) của @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Sử dụng `simplePagination` trên bộ sưu tập `approvals` và `approvalRecords` để cải thiện hiệu suất danh sách của @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi các tùy chọn tùy chọn của trường chọn đơn trong cấu hình quy tắc trường bị trống ([#9119](https://github.com/nocobase/nocobase/pull/9119)) của @jiannx

  - Đã sửa lỗi cài đặt giá trị mặc định không chính xác cho bảng con trong biểu mẫu. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) của @gchust

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi thành phần chọn người nhận hoạt động không chính xác ([#9123](https://github.com/nocobase/nocobase/pull/9123)) của @mytharcher

- **[Nhân viên AI]** Sửa lỗi cài đặt baseURL của dịch vụ LLM google-gen-ai không có hiệu lực ([#9107](https://github.com/nocobase/nocobase/pull/9107)) của @cgyrock

- **[Trình quản lý email]** Xóa lời nhắc đóng biểu mẫu sau khi email được gửi thành công của @jiannx
