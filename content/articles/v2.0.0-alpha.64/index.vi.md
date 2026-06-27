---
title: "NocoBase v2.0.0-alpha.64: Hỗ trợ mô hình Gemini-3 với chữ ký gọi hàm"
description: "Ghi chú phát hành v2.0.0-alpha.64"
---

### 🎉 Tính năng mới

- **[AI nhân viên]** Hỗ trợ mô hình Gemini-3 với chữ ký suy luận gọi hàm ([#8377](https://github.com/nocobase/nocobase/pull/8377)) bởi @heziqiang

### 🚀 Cải tiến

- **[AI nhân viên]**
  - Cải thiện xử lý lỗi AI cho các dịch vụ LLM và mô hình ([#8351](https://github.com/nocobase/nocobase/pull/8351)) bởi @heziqiang

  - Hỗ trợ chỉnh sửa tùy chỉnh và tự động cập nhật prompt hệ thống ([#8378](https://github.com/nocobase/nocobase/pull/8378)) bởi @heziqiang

- **[Quản lý tệp]** Thêm tùy chọn yêu cầu để lấy tệp OSS phía máy chủ nếu cần tham số hoặc header bổ sung ([#8372](https://github.com/nocobase/nocobase/pull/8372)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in log hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock

- **[client]**
  - Sửa lỗi trường liên kết vẫn có thể mở popup sau khi chuyển từ thành phần chọn bản ghi sang thành phần chọn. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) bởi @gchust

  - Sửa lỗi quy tắc liên kết không được chạy lại sau khi thay đổi phân trang cho khối chi tiết, khối form chỉnh sửa và khối danh sách. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) bởi @gchust

  - Sửa lỗi các trường của bảng con/form con đã cấu hình không hiển thị khi chuyển đổi qua lại giữa các thành phần trường. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) bởi @gchust

- **[Workflow]**
  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe

  - Sửa lỗi trang thực thi bị crash khi workflow bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher

- **[Kiểm soát truy cập]** Sửa lỗi nguồn dữ liệu được phân giải không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile
