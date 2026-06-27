---
title: "NocoBase v2.0.0-alpha.44: hỗ trợ bộ chọn xếp tầng cho trường liên kết bộ sưu tập dạng cây"
description: "Ghi chú phát hành của v2.0.0-alpha.44"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm hỗ trợ tạo nhanh cho trường chọn liên kết ([#7887](https://github.com/nocobase/nocobase/pull/7887)) bởi @katherinehhh

  - Hỗ trợ bộ chọn xếp tầng cho trường liên kết bộ sưu tập dạng cây ([#7846](https://github.com/nocobase/nocobase/pull/7846)) bởi @katherinehhh

- **[Telemetry]** Thêm plugin mới: Telemetry, plugin đo từ xa dựa trên OpenTelemetry cung cấp các chỉ số CPU, bộ nhớ và yêu cầu HTTP với hỗ trợ xuất HTTP bởi @2013xile

### 🚀 Cải tiến

- **[telemetry]** Hỗ trợ kiểm soát chỉ số nào được xuất ([#7938](https://github.com/nocobase/nocobase/pull/7938)) bởi @2013xile

- **[Trình quản lý tác vụ bất đồng bộ]** Các tác vụ bất đồng bộ cho ứng dụng con chỉ nên khởi động các ứng dụng con mục tiêu trong Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Xóa hành động bảng cây khỏi khối bộ sưu tập không phải dạng cây ([#7931](https://github.com/nocobase/nocobase/pull/7931)) bởi @katherinehhh

  - Sửa giao diện trường hiển thị nhiều-một thay vì một-một cho belongsTo trong cấu hình nguồn dữ liệu bên ngoài ([#7936](https://github.com/nocobase/nocobase/pull/7936)) bởi @cgyrock

- **[flow-engine]** Sửa lỗi hiển thị biểu tượng thanh công cụ bị lệch trong nút khối chi tiết ([#7929](https://github.com/nocobase/nocobase/pull/7929)) bởi @zhangzhonghe

- **[Workflow]** Sửa lỗi khi cập nhật số lượng tác vụ vô tình đặt lại trạng thái của biểu mẫu đang được điền ([#7937](https://github.com/nocobase/nocobase/pull/7937)) bởi @mytharcher

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi trường M2M (mảng) khi tạo/cập nhật dữ liệu liên quan ([#7926](https://github.com/nocobase/nocobase/pull/7926)) bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** sửa lỗi khi sửa đổi tùy chọn nhập của trình tải lên không có hiệu lực bởi @katherinehhh
