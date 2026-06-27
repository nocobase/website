---
title: "NocoBase v1.7.0-beta.19: Hỗ trợ biến ở vế trái của điều kiện quy tắc liên kết"
description: "Ghi chú phát hành v1.7.0-beta.19"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến ở vế trái của điều kiện quy tắc liên kết ([#6609](https://github.com/nocobase/nocobase/pull/6609)) bởi @katherinehhh

- **[Workflow: nút tính toán ngày]** Thêm hàm `changeTimezone` để thay đổi giá trị múi giờ nhằm định dạng bởi @mytharcher

### 🚀 Cải tiến

- **[client]**
  - Hỗ trợ các bản ghi bảng đã chọn trong yêu cầu tùy chỉnh ([#6647](https://github.com/nocobase/nocobase/pull/6647)) bởi @katherinehhh

  - Thêm API trì hoãn cho các tình huống mở không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi xây dựng CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie

- **[client]**
  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher

  - Sự cố hiển thị mô tả trường trong workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) bởi @katherinehhh

  - Sửa locale cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher

  - Trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh

  - Quy tắc liên kết tương thích với dữ liệu cũ ([#6686](https://github.com/nocobase/nocobase/pull/6686)) bởi @katherinehhh

  - Tải chậm thiếu thành phần UI sẽ gây lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust

  - Thêm thành phần Password gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher

- **[Workflow: nút thủ công]** Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa các trường hợp kiểm thử bởi @mytharcher

- **[Trình quản lý sao lưu]** Lỗi hết thời gian xảy ra khi cố gắng khôi phục bản sao lưu chưa mã hóa bằng mật khẩu bởi @gchust
