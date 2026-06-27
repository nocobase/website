---
title: "NocoBase v2.0.0-beta.10: Tối ưu nút truy cập AI"
description: "Ghi chú phát hành phiên bản v2.0.0-beta.10"
---

### 🚀 Cải tiến

- **[client]** Hỗ trợ chỉ định thời điểm chạy luồng sự kiện. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) bởi @gchust
- **[AI employees]**

  - Tối ưu hóa nút truy cập AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) bởi @heziqiang
  - Ẩn builder AI trong danh sách truy cập.<br/> Tối ưu hóa luồng tích hợp LLM.<br/> Cập nhật tài liệu về mô hình AI gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) bởi @heziqiang
- **[Notification: In-app message]** Khắc phục sự cố hiệu năng khi gửi thông báo trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - thành phần nhập số không hiển thị giá trị ([#8410](https://github.com/nocobase/nocobase/pull/8410)) bởi @chenos
  - sửa lỗi dữ liệu chọn xếp tầng không bị xóa sau khi gửi thành công trong biểu mẫu tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh
  - sửa lỗi nút gửi khi bỏ qua xác thực bắt buộc không hoạt động nếu đã bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh
  - giải quyết vấn đề nút gửi xuất hiện trong cửa sổ bật lên chọn tệp của trường liên kết một-một ([#8398](https://github.com/nocobase/nocobase/pull/8398)) bởi @katherinehhh
  - sửa lỗi giải quyết vấn đề cài đặt bố cục trong khối thẻ lưới không có hiệu lực ([#8399](https://github.com/nocobase/nocobase/pull/8399)) bởi @katherinehhh
  - sửa lỗi ngăn gán giá trị khi nhập ký tự Trung Quốc vào trường số ([#8397](https://github.com/nocobase/nocobase/pull/8397)) bởi @katherinehhh
- **[Collection field: Many to many (array)]** Sửa lỗi khi nối thêm quan hệ nhiều-nhiều(mảng) cấp hai trong truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock
- **[Multi-space]**

  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx
  - Màu sắc của bộ chọn không gian theo chủ đề bởi @jiannx
