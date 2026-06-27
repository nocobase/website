---
title: "NocoBase v1.7.0-beta.17: Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối"
description: "Ghi chú phát hành của v1.7.0-beta.17"
---

### 🎉 Tính năng mới

- **[Phòng ban]** Làm cho các plugin Phòng ban, URL tệp đính kèm và thông báo phản hồi quy trình làm việc trở nên miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos

- **[Hành động: Cập nhật hàng loạt]** Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[Quy trình làm việc]** Hỗ trợ URL popup cố định cho các tác vụ quy trình làm việc ([#6640](https://github.com/nocobase/nocobase/pull/6640)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Chuyển sang menu nhóm không được nhảy đến trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe

  - Biểu mẫu bộ lọc không được hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe

  - Sửa lỗi hình ảnh xem trước bị che khuất ([#6651](https://github.com/nocobase/nocobase/pull/6651)) bởi @zhangzhonghe

  - Trong biểu mẫu bộ lọc, khi nhấp vào nút lọc, nếu có trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe

  - Tùy chọn "cho phép nhiều" không hoạt động đối với trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh

  - Trong khối biểu mẫu, giá trị mặc định của cấu hình trường sẽ hiển thị dưới dạng chuỗi biến gốc rồi biến mất ([#6649](https://github.com/nocobase/nocobase/pull/6649)) bởi @zhangzhonghe

- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** chỉ cho phép các bộ sưu tập tệp có quyền truy cập URL công khai ([#6664](https://github.com/nocobase/nocobase/pull/6664)) bởi @katherinehhh

- **[Lưu trữ tệp: S3 (Pro)]**
  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 Pro bởi @jiannx

  - Sắp xếp ngôn ngữ bởi @jiannx

- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ URL cố định cho các mục phê duyệt trong trung tâm tác vụ bởi @mytharcher

- **[Trình quản lý di chuyển]** tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ popup biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust
