---
title: "NocoBase v1.8.23: Tối ưu hóa truy vấn đếm API danh sách"
description: "Ghi chú phát hành phiên bản v1.8.23"
---

### 🚀 Cải tiến

- **[database]** Tối ưu hóa truy vấn đếm trong API danh sách để giảm tiêu thụ tài nguyên. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) bởi @aaaaaajie

- **[Thông báo: Tin nhắn trong ứng dụng]** Hỗ trợ cấu hình thời gian trễ tự động đóng cho thông báo tin nhắn trong ứng dụng ([#7472](https://github.com/nocobase/nocobase/pull/7472)) bởi @mytharcher

- **[Quy trình: nút thông báo]** Hỗ trợ kiểm thử nút thông báo ([#7470](https://github.com/nocobase/nocobase/pull/7470)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Lỗi hiển thị trường liên kết khi chuyển sang thành phần thẻ trong khối biểu mẫu chỉnh sửa ([#7468](https://github.com/nocobase/nocobase/pull/7468)) bởi @katherinehhh

  - Vấn đề giới hạn thời gian khi ngày được chọn bằng minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) bởi @katherinehhh

- **[Mobile]** Trường ngày trên thiết bị di động không có múi giờ hiển thị sai ngày giờ ([#7473](https://github.com/nocobase/nocobase/pull/7473)) bởi @katherinehhh

- **[Biểu mẫu công khai]** Giá trị mặc định của trường trong biểu mẫu công khai không được áp dụng khi sử dụng biến ([#7467](https://github.com/nocobase/nocobase/pull/7467)) bởi @katherinehhh

- **[Thao tác: Nhập bản ghi]** Sửa lỗi hiển thị sai số thứ tự dòng khi nhập dữ liệu trùng lặp ([#7440](https://github.com/nocobase/nocobase/pull/7440)) bởi @aaaaaajie

- **[Bộ sưu tập: Cây]** Xóa các sự kiện cơ sở dữ liệu liên quan đến bộ sưu tập sau khi xóa bộ sưu tập dạng cây ([#7459](https://github.com/nocobase/nocobase/pull/7459)) bởi @2013xile

- **[Quy trình: Sự kiện thao tác tùy chỉnh]** Sửa lỗi sự kiện thao tác tùy chỉnh không thể thực thi thủ công ngay sau khi khởi tạo bởi @mytharcher

- **[Quy trình: Quy trình con]** Sửa lỗi quy trình con bị tiếp tục và thực thi nhiều lần bởi @mytharcher

- **[Quy trình: Phê duyệt]** Đối với người dùng không phải là người phê duyệt hiện tại, nút xem tương ứng trong bảng luồng quy trình sẽ không được hiển thị bởi @mytharcher
