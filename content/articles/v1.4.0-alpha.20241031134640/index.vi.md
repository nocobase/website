---
title: "NocoBase v1.4.0-alpha.20241031134640: Thêm kênh thông báo WeCom"
description: "Ghi chú phát hành của v1.4.0-alpha.20241031134640"
---

### 🎉 Tính năng mới

- **[WeCom]** Thêm kênh thông báo WeCom bởi @chenzhizdt

### 🚀 Cải tiến

- **[client]** Khôi phục giá trị mặc định khi xóa tiêu đề trường ([#5549](https://github.com/nocobase/nocobase/pull/5549)) bởi @katherinehhh

- **[Trình quản lý thông báo]**
  - Thêm các thành phần UserSelect và UserAddition để hợp lý hóa việc phát triển các kênh thông báo ([#5553](https://github.com/nocobase/nocobase/pull/5553)) bởi @2013xile

  - Thêm API để lấy danh sách đăng ký loại kênh của plugin thông báo ([#5531](https://github.com/nocobase/nocobase/pull/5531)) bởi @mytharcher

  - Điều chỉnh tên đăng ký loại kênh của plugin thông báo ([#5532](https://github.com/nocobase/nocobase/pull/5532)) bởi @mytharcher

  - Thêm API của plugin trình quản lý thông báo để lấy tất cả các loại đã đăng ký ([#5529](https://github.com/nocobase/nocobase/pull/5529)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Cải thiện giao diện người dùng tin nhắn trong ứng dụng và thêm một số nhật ký. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[database]**
  - Sửa lỗi cập nhật tùy chọn collection với khóa mục tiêu bộ lọc ([#5558](https://github.com/nocobase/nocobase/pull/5558)) bởi @chareice

  - Sửa lỗi giá trị primaryKeyField sai trong sequelize khi làm việc với nhiều khóa mục tiêu bộ lọc ([#5556](https://github.com/nocobase/nocobase/pull/5556)) bởi @chareice

- **[client]**
  - Sửa lỗi các thành phần khung xương trong khối bảng không biến mất ([#5548](https://github.com/nocobase/nocobase/pull/5548)) bởi @zhangzhonghe

  - Sửa lỗi với hành động xóa, dấu ba chấm văn bản và hiển thị dữ liệu mới trong bảng con ([#5523](https://github.com/nocobase/nocobase/pull/5523)) bởi @katherinehhh

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi xóa nguồn dữ liệu ở trạng thái thất bại ([#5554](https://github.com/nocobase/nocobase/pull/5554)) bởi @chareice

- **[Thông báo: Email]**
  - Sửa lỗi truy vấn người dùng theo id trong thông báo email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) bởi @mytharcher

  - Sửa lỗi thiếu chủ đề trong thông báo email dựa trên id người dùng ([#5534](https://github.com/nocobase/nocobase/pull/5534)) bởi @mytharcher

  - Sửa lỗi đường dẫn trường phản ứng trong biểu mẫu động của thông báo email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) bởi @mytharcher

- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi thành phần chọn cho trường nhiều-nhiều (mảng) chỉ có một tùy chọn ([#5544](https://github.com/nocobase/nocobase/pull/5544)) bởi @2013xile

- **[Trình quản lý thông báo]** Sửa lỗi trang bị treo do sai loại kênh ([#5528](https://github.com/nocobase/nocobase/pull/5528)) bởi @mytharcher

- **[Quy trình công việc: Nút SQL]** Sửa lỗi sse gây ra “waitForLoadState(‘networkidle’)” hết thời gian chờ ([#5524](https://github.com/nocobase/nocobase/pull/5524)) bởi @hongboji

- **[Thành phần trường: mặt nạ]** Sửa lỗi dữ liệu gốc không thể hiển thị bằng cách nhấp chuột nếu thành phần ở trạng thái chỉ đọc bởi @gchust

- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi sse gây ra “waitForLoadState(‘networkidle’)” hết thời gian chờ bởi @hongboji

- **[WeCom]** Sửa lỗi phản hồi 404 không tìm thấy khi vào ứng dụng từ bảng điều khiển WeCom bởi @chenzhizdt
