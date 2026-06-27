---
title: "NocoBase v2.1.0-alpha.36: Bổ sung hỗ trợ client v2 cho khối Markdown"
description: "Ghi chú phát hành của v2.1.0-alpha.36"
---

### 🎉 Tính năng mới

- **[Khối: Markdown]** Bổ sung hỗ trợ client v2 cho khối Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) bởi @jiannx

- **[Khối: Danh sách]** Khối danh sách hỗ trợ client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) bởi @jiannx

### 🚀 Cải tiến

- **[flow-engine]** Thêm thông báo xác nhận thay đổi chưa lưu khi đóng trang cấu hình luồng sự kiện có dữ liệu chưa được lưu. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) bởi @gchust

- **[cli]** Cải thiện trải nghiệm dòng lệnh NocoBase CLI bằng cách chuyển đổi quy trình thiết lập và quản lý sang Inquirer, đồng thời sửa các vấn đề liên quan đến cài đặt, kỹ năng và thời gian chạy Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) bởi @chenos

- **[Trình quản lý nguồn dữ liệu]** Tối ưu hóa API mô hình hóa dữ liệu để hỗ trợ tạo bộ sưu tập nhận xét bằng AI, cấu hình trường quan hệ cho nguồn dữ liệu bên ngoài và thiết lập quy tắc xác thực trường ([#9480](https://github.com/nocobase/nocobase/pull/9480)) bởi @2013xile

- **[Khối: GridCard]** Cập nhật plugin thẻ lưới để hỗ trợ client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) bởi @jiannx

- **[Khối: iframe]** Bổ sung hỗ trợ v2 cho khối iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trường quan hệ chỉ hiển thị trong bảng con không hiển thị hoặc không thể nhấp sau khi làm mới. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) bởi @jiannx

  - Thêm cài đặt "Sau khi gửi thành công" cho hành động gửi biểu mẫu. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) bởi @jiannx

- **[client-v2]** Sửa lỗi danh sách tùy chọn trường tiêu đề trống đối với trường quan hệ trong khối bảng ([#9490](https://github.com/nocobase/nocobase/pull/9490)) bởi @katherinehhh

- **[flow-engine]** Sửa lỗi menu con trường quan hệ không ổn định trong menu mô hình con ([#9417](https://github.com/nocobase/nocobase/pull/9417)) bởi @jiannx

- **[Trình quản lý tệp]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher

- **[Trường bộ sưu tập: Chữ ký]** Khắc phục sự cố hiển thị hộp chữ ký trên thiết bị di động bởi @chenzhizdt
