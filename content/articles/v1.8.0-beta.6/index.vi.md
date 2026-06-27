---
title: "NocoBase v1.8.0-beta.6: Thêm biến môi trường để kiểm soát phương thức xuất nhật ký kiểm toán"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.6"
---

### 🎉 Tính năng mới

- **[Nhật ký kiểm toán]** Thêm biến môi trường `AUDIT_LOGGER_TRANSPORT` để kiểm soát phương thức xuất nhật ký kiểm toán bởi @2013xile

### 🚀 Cải tiến

- **[client]** Ngăn chặn việc di chuyển nhóm menu vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) bởi @zhangzhonghe

- **[Lịch]** hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh

- **[Trường bộ sưu tập: Markdown(Vditor)]** hỗ trợ nhấp vào ảnh để phóng to trong chế độ xem trước Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) bởi @katherinehhh

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều(nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie

- **[Bình luận]** hỗ trợ phân trang trong khối bình luận bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh

  - Khắc phục sự cố quy tắc liên kết gây ra vòng lặp vô hạn ([#7050](https://github.com/nocobase/nocobase/pull/7050)) bởi @zhangzhonghe

  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh

  - Sửa gợi ý kích thước tải lên ([#7057](https://github.com/nocobase/nocobase/pull/7057)) bởi @mytharcher

  - Sửa: sử dụng optional chaining để từ chối yêu cầu một cách an toàn trong APIClient khi handler có thể là undefined ([#7054](https://github.com/nocobase/nocobase/pull/7054)) bởi @sheldon66

  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh

  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe

  - Các tùy chọn trường chọn không hoạt động trong quy tắc liên kết biểu mẫu bộ lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh

  - Quy tắc xác thực biểu mẫu bộ lọc khiến nút lọc trở nên vô hiệu ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe

  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) bởi @zhangzhonghe

  - Sửa lỗi tham số khối bộ lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) bởi @zhangzhonghe

  - Đã giải quyết sự cố khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) bởi @aaaaaajie

  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher

  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) bởi @zhangzhonghe

- **[database]** sửa: thêm trường creator và updater bị thiếu trong import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) bởi @aaaaaajie

- **[undefined]** Loại bỏ phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API bởi @aaaaaajie

- **[Hành động: Nhập bản ghi]**
  - Đã sửa lỗi import xlsx để hạn chế trường textarea chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie

  - Sửa lỗi import bảng con thất bại khi có liên quan đến trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie

  - Đã sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi import dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) bởi @aaaaaajie

- **[Trực quan hóa dữ liệu]**
  - hiển thị không chính xác trường ngày between trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh

  - Trường nhóm checkbox trong biểu đồ nên hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile

- **[Tài liệu API]** các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt

- **[Luồng công việc]**
  - Sửa lỗi `toJSON()` gây ra lỗi trong bộ kích hoạt lịch trình ([#7037](https://github.com/nocobase/nocobase/pull/7037)) bởi @mytharcher

  - Sửa lỗi xảy ra trong hành động thực thi thủ công khi bộ kích hoạt không được cấu hình đúng ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher

  - Sửa lỗi giao diện khi luồng công việc không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) bởi @mytharcher

  - Sửa lỗi sự kiện bộ sưu tập ở chế độ tạo hoặc cập nhật không kích hoạt khi tạo mà không có trường thay đổi ([#7015](https://github.com/nocobase/nocobase/pull/7015)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Loại bỏ phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) bởi @aaaaaajie

- **[Di động]** Tối ưu hóa các vấn đề lag popup trên di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) bởi @zhangzhonghe

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm có điều kiện. bởi @aaaaaajie

- **[Luồng công việc: JavaScript]** Sửa require cho đường dẫn tương đối bởi @mytharcher

- **[In mẫu]** Sửa lỗi phân tích quyền và thêm kiểm tra không tìm thấy dữ liệu. bởi @sheldon66

- **[Luồng công việc: Phê duyệt]**
  - Để tránh lỗi trường undefined bởi @mytharcher

  - Sửa lỗi xảy ra khi luồng công việc bị xóa bởi @mytharcher

  - Sửa biến kích hoạt bởi @mytharcher

  - Tải lại liên kết tệp từ ảnh chụp nhanh để tránh URL hết hạn bởi @mytharcher

  - Sửa lỗi API khi làm mới trang chi tiết bởi @mytharcher

- **[WeCom]** Thêm kiểm tra đường dẫn callback trong middleware gateway bởi @2013xile
