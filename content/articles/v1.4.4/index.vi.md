---
title: "NocoBase v1.4.4: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.4.4"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trường dữ liệu từ nguồn bên ngoài không hiển thị trong khối bảng ([#5825](https://github.com/nocobase/nocobase/pull/5825)) bởi @katherinehhh

  - Sửa lỗi hiển thị cho các trường kế thừa trong cấu hình biểu mẫu ([#5822](https://github.com/nocobase/nocobase/pull/5822)) bởi @katherinehhh

  - Sửa lỗi các trường kế thừa không xuất hiện trong danh sách trường và không thể ghi đè ([#5800](https://github.com/nocobase/nocobase/pull/5800)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Sửa lỗi khi định dạng các trường ngày tháng có múi giờ trong MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) bởi @2013xile

- **[Luồng công việc]**
  - Sửa lỗi giao dịch qua các nguồn dữ liệu gây ra lỗi sự kiện collection ([#5818](https://github.com/nocobase/nocobase/pull/5818)) bởi @mytharcher

  - Sửa lỗi thiếu kiểu ngày tháng trong cấu hình lịch trình dựa trên trường ngày ([#5816](https://github.com/nocobase/nocobase/pull/5816)) bởi @mytharcher

- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi cập nhật trường m2m dạng mảng trong collection quan hệ đơn không có hiệu lực ([#5820](https://github.com/nocobase/nocobase/pull/5820)) bởi @2013xile

- **[Lịch]**
  - Sửa lỗi khi nhấp vào ngày trống trong lịch ([#5803](https://github.com/nocobase/nocobase/pull/5803)) bởi @katherinehhh

  - Sửa lỗi khi đóng cửa sổ popup mở qua 'Khối Lịch' khiến tất cả popup đều đóng ([#5793](https://github.com/nocobase/nocobase/pull/5793)) bởi @zhangzhonghe

- **[Biểu mẫu công khai]** Sửa lỗi đường dẫn quét mã QC không chính xác trong biểu mẫu công khai của ứng dụng con ([#5799](https://github.com/nocobase/nocobase/pull/5799)) bởi @katherinehhh
