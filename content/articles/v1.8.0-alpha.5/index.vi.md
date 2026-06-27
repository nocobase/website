---
title: "NocoBase v1.8.0-alpha.5: Hỗ trợ điền trường nhập liệu qua quét mã QR"
description: "Ghi chú phát hành phiên bản v1.8.0-alpha.5"
---

### 🚀 Cải tiến

- **[client]**
  - Hỗ trợ điền vào trường nhập liệu thông qua quét mã QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) bởi @katherinehhh

  - Hỗ trợ bản địa hóa nội dung khối Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) bởi @katherinehhh

  - Cấm di chuyển menu nhóm vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) bởi @zhangzhonghe

- **[Trường Collection: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều(nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie

- **[Lịch]** Hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh

- **[Trường Collection: Markdown(Vditor)]** Hỗ trợ nhấp vào ảnh để phóng to trong chế độ xem trước Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Vấn đề tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh

  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe

  - Vấn đề tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh

  - Quy tắc xác thực biểu mẫu bộ lọc khiến nút lọc trở nên vô hiệu ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe

  - Vấn đề tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh

  - Các tùy chọn trường chọn không hoạt động trong quy tắc liên kết biểu mẫu bộ lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh

  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) bởi @zhangzhonghe

  - Sửa lỗi tham số khối bộ lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) bởi @zhangzhonghe

  - Sửa lỗi dữ liệu người dùng hiện tại bị trống ([#7016](https://github.com/nocobase/nocobase/pull/7016)) bởi @zhangzhonghe

  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) bởi @zhangzhonghe

  - Đã giải quyết vấn đề khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) bởi @aaaaaajie

  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]**
  - Hiển thị không chính xác trường ngày tháng trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh

  - Các trường nhóm hộp kiểm trong biểu đồ nên hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile

- **[Hành động: Nhập bản ghi]**
  - Đã sửa lỗi nhập xlsx để hạn chế trường textarea chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie

  - Sửa lỗi nhập bảng con thất bại khi có liên quan đến trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie

  - Đã sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi nhập dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) bởi @aaaaaajie

- **[Tài liệu API]** Các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt

- **[Luồng công việc]**
  - Sửa lỗi `toJSON()` gây ra lỗi trong bộ kích hoạt lịch trình ([#7037](https://github.com/nocobase/nocobase/pull/7037)) bởi @mytharcher

  - Sửa lỗi xảy ra trong hành động thực thi thủ công khi bộ kích hoạt không được cấu hình đúng ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher

  - Sửa lỗi giao diện khi luồng công việc không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) bởi @mytharcher

  - Sửa lỗi sự kiện collection ở chế độ tạo hoặc cập nhật không kích hoạt khi tạo mà không có trường thay đổi ([#7015](https://github.com/nocobase/nocobase/pull/7015)) bởi @mytharcher

- **[Di động]** Tối ưu hóa vấn đề lag popup trên di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) bởi @zhangzhonghe

- **[Trình quản lý nguồn dữ liệu]** Loại bỏ phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) bởi @aaaaaajie

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm có điều kiện. bởi @aaaaaajie
