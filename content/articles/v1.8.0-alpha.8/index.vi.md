---
title: "NocoBase v1.8.0-alpha.8: Hỗ trợ sao chép nội dung trường văn bản chỉ với một cú nhấp chuột"
description: "Ghi chú phát hành của phiên bản v1.8.0-alpha.8"
---

### 🎉 Tính năng mới

- **[Sao chép văn bản]** Hỗ trợ sao chép nội dung trường văn bản chỉ bằng một cú nhấp chuột ([#6954](https://github.com/nocobase/nocobase/pull/6954)) bởi @zhangzhonghe

- **[Trình quản lý email]** hỗ trợ xóa email bởi @jiannx

### 🚀 Cải tiến

- **[client]**
  - Thêm tùy chọn "trống" và "không trống" vào quy tắc liên kết trường checkbox ([#7073](https://github.com/nocobase/nocobase/pull/7073)) bởi @katherinehhh

  - Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038

- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện hiệu suất tạo tác vụ trong quá trình xuất dữ liệu ([#7078](https://github.com/nocobase/nocobase/pull/7078)) bởi @aaaaaajie

- **[Luồng công việc: Phê duyệt]** Thêm tùy chọn trường bổ sung cho danh sách người được chỉ định lại bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - mất dấu thập phân sau khi chuyển thành phần số tiền từ mask sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh

  - hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh

  - Sau khi tạo trường quan hệ ngược, tùy chọn "Tạo trường quan hệ ngược trong bảng dữ liệu đích" trong cài đặt trường liên kết đã không được chọn. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) bởi @aaaaaajie

  - bộ chọn trường liên kết không xóa dữ liệu đã chọn sau khi gửi ([#7067](https://github.com/nocobase/nocobase/pull/7067)) bởi @katherinehhh

- **[server]** Không thể đọc thuộc tính của undefined (đang đọc 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) bởi @chenos

- **[Kiểm soát truy cập]** Đã sửa lỗi ứng dụng chặn truy cập khi không có vai trò mặc định ([#7059](https://github.com/nocobase/nocobase/pull/7059)) bởi @aaaaaajie

- **[Trình quản lý nguồn dữ liệu]** Các thay đổi về phạm vi hiện có hiệu lực ngay lập tức cho tất cả các vai trò liên quan. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) bởi @aaaaaajie

- **[Luồng công việc: Nút lặp]** Sửa lỗi nhánh lặp chạy khi điều kiện không thỏa mãn ([#7063](https://github.com/nocobase/nocobase/pull/7063)) bởi @mytharcher

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi biến của url chuyển hướng không được phân tích cú pháp bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Sửa lỗi thống kê việc cần làm không được cập nhật khi quá trình thực thi bị hủy bởi @mytharcher

- **[Trình quản lý email]** xóa email thất bại bởi @jiannx

- **[Trình quản lý sao lưu]** lỗi lệnh không xác định khi khôi phục bản sao lưu MySQL trên nền tảng windows bởi @gchust
