---
title: "NocoBase v1.6.21: Thêm API trì hoãn cho các tình huống mở không có độ trễ"
description: "Ghi chú phát hành phiên bản v1.6.21"
---

### 🚀 Cải tiến

- **[client]** Thêm API trì hoãn cho các tình huống mở không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher

- **[create-nocobase-app]** Nâng cấp một số phụ thuộc lên phiên bản mới nhất ([#6673](https://github.com/nocobase/nocobase/pull/6673)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher

  - Trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh

  - Sửa ngôn ngữ cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher

  - Tải chậm thiếu thành phần ui sẽ gây ra lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust

  - Thêm thành phần Password gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher

  - Các trường kế thừa hiển thị trong danh sách gán trường của bộ sưu tập hiện tại ([#6666](https://github.com/nocobase/nocobase/pull/6666)) bởi @katherinehhh

- **[database]** Sửa lỗi xây dựng CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie

- **[build]** Đầu ra xây dựng không chính xác khi plugin phụ thuộc vào một số thư viện AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) bởi @gchust

- **[Action: Import records]** Sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie

- **[Workflow: Manual node]** Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher

- **[Block: iframe]** Thanh cuộn dọc xuất hiện khi khối iframe được đặt chiều cao toàn phần ([#6675](https://github.com/nocobase/nocobase/pull/6675)) bởi @katherinehhh

- **[Workflow: Custom action event]** Sửa các trường hợp kiểm thử bởi @mytharcher

- **[Backup manager]** Lỗi hết thời gian xảy ra khi cố gắng khôi phục bản sao lưu chưa mã hóa bằng mật khẩu bởi @gchust
