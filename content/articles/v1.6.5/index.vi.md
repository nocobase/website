---
title: "NocoBase v1.6.5: Đơn giản hóa logic và API tạo URL tệp"
description: "Ghi chú phát hành phiên bản v1.6.5"
---

### 🚀 Cải tiến

- **[Trình quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]** Thay đổi sang cách đơn giản hơn để tạo URL tệp bởi @mytharcher

- **[Trình quản lý sao lưu]** Cho phép khôi phục sao lưu giữa phiên bản tiền phát hành và phiên bản chính thức của cùng một phiên bản bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - Trường văn bản đa dạng thức không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh

  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe

  - Nhấp vào nút đặt lại trên biểu mẫu bộ lọc không thể xóa các điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe

- **[Quy trình làm việc: Nút thủ công]**
  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher

  - Thay đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher

  - Sửa trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher

  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos

  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher

- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher

- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher

- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher

  - Sửa số lượng tác vụ dựa trên các hook bởi @mytharcher
