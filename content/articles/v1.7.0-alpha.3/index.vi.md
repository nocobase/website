---
title: "NocoBase v1.7.0-alpha.3: Hỗ trợ thao tác bảng nội tuyến với chế độ chỉ biểu tượng"
description: "Ghi chú phát hành v1.7.0-alpha.3"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ thao tác trên bảng nội dòng với chế độ chỉ hiển thị biểu tượng, hiển thị tên thao tác khi di chuột ([#6451](https://github.com/nocobase/nocobase/pull/6451)) bởi @katherinehhh

### 🚀 Cải tiến

- **[Quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]**
  - Thay đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe

  - Thay đổi sang cách đơn giản hơn để tạo URL tệp bởi @mytharcher

- **[Trình quản lý sao lưu]** Cho phép khôi phục bản sao lưu giữa phiên bản tiền phát hành và phiên bản chính thức của cùng một phiên bản bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - Thiếu trường trong cấu hình quy tắc liên kết ([#6488](https://github.com/nocobase/nocobase/pull/6488)) bởi @katherinehhh

  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe

  - Trường văn bản đa dạng thức không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh

  - Kiểu nhập liệu không đúng cho cài đặt giá trị mặc định của biểu mẫu ([#6490](https://github.com/nocobase/nocobase/pull/6490)) bởi @gchust

  - Nhấn nút đặt lại trên biểu mẫu bộ lọc không thể xóa điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe

- **[Quy trình làm việc: Nút thủ công]**
  - Thay đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher

  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher

  - Sửa trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher

  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos

  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher

- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher

- **[Biến và bí mật]** Các nút không được hiển thị trong ngăn kéo tạo biến mới ([#6485](https://github.com/nocobase/nocobase/pull/6485)) bởi @gchust

- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher

- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe

- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher

  - Sửa số lượng tác vụ dựa trên các hook bởi @mytharcher
