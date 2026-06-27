---
title: "NocoBase v2.1.0-beta.33: Bổ sung hỗ trợ client v2 cho khối Markdown"
description: "Ghi chú phát hành v2.1.0-beta.33"
---

### 🎉 Tính năng mới

- **[Khối: Markdown]** Đã thêm hỗ trợ client v2 cho khối Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) bởi @jiannx

- **[Khối: Danh sách]** Khối danh sách hỗ trợ client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) bởi @jiannx

- **[Lịch]** Đã thêm hỗ trợ client v2 cho plugin Lịch. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) bởi @jiannx

- **[Khối: Cây]** Đã thêm hỗ trợ client-v2 cho khối bộ lọc dạng cây. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) bởi @jiannx

### 🚀 Cải tiến

- **[flow-engine]** Đã thêm thông báo xác nhận thay đổi chưa lưu khi đóng trang cấu hình luồng sự kiện có dữ liệu chưa được lưu. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) bởi @gchust

- **[Trình quản lý nguồn dữ liệu]** Tối ưu hóa API mô hình hóa dữ liệu để hỗ trợ tạo bộ sưu tập nhận xét bằng AI, cấu hình trường quan hệ cho nguồn dữ liệu bên ngoài và thiết lập quy tắc xác thực trường ([#9480](https://github.com/nocobase/nocobase/pull/9480)) bởi @2013xile

- **[Khối: GridCard]** Đã cập nhật plugin thẻ lưới để hỗ trợ client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) bởi @jiannx

- **[Khối: iframe]** Đã thêm hỗ trợ v2 cho khối iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) bởi @jiannx

- **[Nhân viên AI]** Tối ưu hóa tương tác và hiệu suất hội thoại song song của nhân viên AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã thêm cài đặt "Sau khi gửi thành công" cho các hành động gửi biểu mẫu. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) bởi @jiannx

  - Sửa lỗi ngăn mở chỉnh sửa nhanh cho các trường quan hệ trong bảng ([#9469](https://github.com/nocobase/nocobase/pull/9469)) bởi @katherinehhh

  - Đã sửa lỗi các trường quan hệ chỉ hiển thị trong bảng con không hiển thị hoặc không thể nhấp sau khi làm mới. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) bởi @jiannx

  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust

  - Sửa lỗi các trường chọn nhiều trong khối dữ liệu v2 phải hiển thị nhãn tùy chọn thay vì giá trị ([#9472](https://github.com/nocobase/nocobase/pull/9472)) bởi @katherinehhh

- **[client-v2]**
  - Sửa lỗi danh sách tùy chọn trường tiêu đề bị trống cho các trường quan hệ trong khối bảng ([#9490](https://github.com/nocobase/nocobase/pull/9490)) bởi @katherinehhh

  - Giữ lại các nhóm trống sau khi lọc menu v1 trong bố cục v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) bởi @zhangzhonghe

- **[flow-engine]** Đã sửa lỗi menu con trường quan hệ không ổn định trong menu mô hình con ([#9417](https://github.com/nocobase/nocobase/pull/9417)) bởi @jiannx

- **[Trình quản lý tệp]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher

- **[Nhân viên AI]** Đã sửa lỗi tải plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) bởi @cgyrock

- **[Khối: Biểu mẫu nhiều bước]** Sửa lỗi thanh cuộn khi bật chiều cao đầy đủ trong khối biểu mẫu bước v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) bởi @katherinehhh

- **[Quy trình làm việc: Webhook]** Sửa lỗi tạo nút phản hồi bị chặn bởi xác thực cấu hình `statusCode` bởi @mytharcher

- **[Trường bộ sưu tập: Chữ ký]** Giải quyết vấn đề hiển thị hộp chữ ký trên thiết bị di động bởi @chenzhizdt
