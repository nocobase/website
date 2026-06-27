---
title: "NocoBase v1.7.8: Thêm biến môi trường để kiểm soát phương thức xuất nhật ký kiểm toán"
description: "Ghi chú phát hành phiên bản v1.7.8"
---

### 🎉 Tính năng mới

- **[Nhật ký kiểm toán]** Thêm biến môi trường `AUDIT_LOGGER_TRANSPORT` để kiểm soát phương thức xuất nhật ký kiểm toán bởi @2013xile

### 🚀 Cải tiến

- **[Lịch]** Hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều(nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie

### 🐛 Sửa lỗi

- **[client]**
  - Vấn đề tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh

  - Tùy chọn trường chọn không hoạt động trong quy tắc liên kết biểu mẫu lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh

  - Quy tắc xác thực biểu mẫu lọc khiến nút lọc không hiệu quả ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe

  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập bảng con thất bại khi có liên quan đến trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie

- **[Trực quan hóa dữ liệu]** Trường nhóm hộp kiểm trong biểu đồ nên hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile

- **[Luồng công việc]** Sửa lỗi xảy ra trong hành động thực thi thủ công khi trình kích hoạt không được cấu hình đúng ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher

- **[Luồng công việc: Phê duyệt]**
  - Tránh lỗi trường không xác định bởi @mytharcher

  - Sửa lỗi API khi làm mới trang chi tiết bởi @mytharcher

- **[WeCom]** Thêm kiểm tra đường dẫn callback trong middleware gateway bởi @2013xile
