---
title: "NocoBase v1.8.0-beta.7: Hỗ trợ sao chép nội dung trường văn bản chỉ với một cú nhấp chuột"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.7"
---

### 🎉 Tính năng mới

- **[Sao chép văn bản]** Hỗ trợ sao chép nội dung trường văn bản chỉ với một cú nhấp chuột ([#6954](https://github.com/nocobase/nocobase/pull/6954)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[Máy chủ]** Không thể đọc thuộc tính của undefined (đang đọc 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) bởi @chenos

- **[Máy khách]**
  - Bộ chọn trường liên kết không xóa dữ liệu đã chọn sau khi gửi ([#7067](https://github.com/nocobase/nocobase/pull/7067)) bởi @katherinehhh

  - Sau khi tạo trường quan hệ ngược, tùy chọn "Tạo trường quan hệ ngược trong bảng dữ liệu mục tiêu" trong cài đặt trường liên kết đã không được chọn. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) bởi @aaaaaajie

- **[Kiểm soát truy cập]** Đã sửa lỗi ứng dụng chặn truy cập khi không có vai trò mặc định ([#7059](https://github.com/nocobase/nocobase/pull/7059)) bởi @aaaaaajie

- **[Quy trình làm việc: Nút vòng lặp]** Sửa lỗi nhánh vòng lặp chạy khi điều kiện không được thỏa mãn ([#7063](https://github.com/nocobase/nocobase/pull/7063)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Các thay đổi về phạm vi hiện có hiệu lực ngay lập tức cho tất cả các vai trò liên quan. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) bởi @aaaaaajie

- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi biến của url chuyển hướng không được phân tích cú pháp bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi biến kích hoạt khi lọc theo loại bởi @mytharcher

  - Sửa lỗi thống kê công việc không được cập nhật khi thực thi bị hủy bởi @mytharcher
