---
title: "NocoBase v1.7.0-beta.5: Hỗ trợ thao tác bảng nội tuyến với chế độ chỉ biểu tượng"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.5"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ thao tác trên bảng nội dòng với chế độ chỉ hiển thị biểu tượng, hiển tên thao tác khi di chuột ([#6451](https://github.com/nocobase/nocobase/pull/6451)) bởi @katherinehhh

### 🚀 Cải tiến

- **[Quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]**
  - Đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe

  - Chuyển sang cách đơn giản để tạo URL tệp bởi @mytharcher

- **[Trình quản lý sao lưu]** Cho phép khôi phục sao lưu giữa phiên bản tiền phát hành và phiên bản chính thức của cùng một phiên bản bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe

  - Trường văn bản đa dạng thức không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh

  - Nhấn nút đặt lại trên biểu mẫu bộ lọc không thể xóa điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe

- **[Quy trình làm việc: Nút thủ công]**
  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher

  - Đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher

  - Sửa trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher

  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher

  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos

- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher

- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher

- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe

- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher

  - Sửa số lượng tác vụ dựa trên các hook bởi @mytharcher
