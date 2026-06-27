---
title: "NocoBase v1.9.0-alpha.1: Thêm hàng đợi sự kiện để xử lý tin nhắn trong hàng đợi"
description: "Ghi chú phát hành v1.9.0-alpha.1"
---

### 🎉 Tính năng mới

- **[server]** Thêm hàng đợi sự kiện để xử lý tin nhắn trong hàng đợi ([#6819](https://github.com/nocobase/nocobase/pull/6819)) bởi @mytharcher

### 🚀 Cải tiến

- **[Workflow]** Di chuyển các thành phần chung sang plugin cơ sở ([#7140](https://github.com/nocobase/nocobase/pull/7140)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sau khi thay đổi trường, các phạm vi dữ liệu phụ thuộc vào trường này sẽ tự động xóa các giá trị đã chọn ([#7161](https://github.com/nocobase/nocobase/pull/7161)) bởi @zhangzhonghe

  - Sửa lỗi thiết lập độ rộng cột bảng không hiệu quả ([#7158](https://github.com/nocobase/nocobase/pull/7158)) bởi @zhangzhonghe

  - Sửa lỗi xảy ra khi lưu mối quan hệ một-một trong trường cấu hình. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) bởi @aaaaaajie

  - Sửa lỗi với biểu mẫu bộ lọc trong popup nút Sao chép ([#7154](https://github.com/nocobase/nocobase/pull/7154)) bởi @zhangzhonghe

- **[undefined]** Sửa e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) bởi @mytharcher

- **[File manager]**
  - Sửa lỗi build do gói ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) bởi @mytharcher

  - Sửa phát hiện mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) bởi @mytharcher

- **[Public forms]** Sửa lỗi trường Chỉ ngày không chọn được ngày trong biểu mẫu công khai. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) bởi @katherinehhh

- **[Calendar]** Đặt ngày bắt đầu tuần mặc định là 'thứ hai' trong khối lịch ([#7171](https://github.com/nocobase/nocobase/pull/7171)) bởi @katherinehhh

- **[Workflow: Manual node]** Sửa lỗi nhập biến không chính xác ([#7156](https://github.com/nocobase/nocobase/pull/7156)) bởi @mytharcher

- **[Workflow]** Sửa lỗi cần vuốt sang trái nhiều lần để quay lại trang trước trên thiết bị di động ([#7165](https://github.com/nocobase/nocobase/pull/7165)) bởi @zhangzhonghe

- **[Workflow: Approval]**
  - Sửa lỗi cập nhật liên kết khi gửi bởi @mytharcher

  - Sửa lỗi báo lỗi khi phê duyệt bị xóa bởi @mytharcher

  - Sửa lỗi liên kết không được tải sau khi rút lại bởi @mytharcher

- **[Email manager]**
  - sau khi chọn hàng, đặt "Đã đọc" và "Chưa đọc" bởi @jiannx

  - nội dung thư phụ không thể lọc được bởi @jiannx
