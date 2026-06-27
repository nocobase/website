---
title: "NocoBase v2.0.0-alpha.38: Hỗ trợ kéo thả cho các thao tác trên cột bảng"
description: "Ghi chú phát hành của v2.0.0-alpha.38"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ kéo thả cho các thao tác trên cột của bảng ([#7842](https://github.com/nocobase/nocobase/pull/7842)) của @zhangzhonghe

- **[Trực quan hóa dữ liệu]** thêm nguồn dữ liệu SQL cho biểu đồ ([#7830](https://github.com/nocobase/nocobase/pull/7830)) của @heziqiang

### 🚀 Cải tiến

- **[client]** Đã thêm hỗ trợ cho thư viện Day.js trong ngữ cảnh kịch bản RunJS, giúp việc thao tác ngày và giờ trở nên dễ dàng hơn. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) của @gchust

### 🐛 Sửa lỗi

- **[utils]**
  - Sửa lỗi "Invalid filter item type" trên nút lọc ([#7838](https://github.com/nocobase/nocobase/pull/7838)) của @zhangzhonghe

  - Cho phép hợp nhất đối tượng trong chiến lược intersect ([#7840](https://github.com/nocobase/nocobase/pull/7840)) của @chenos

  - Sửa lỗi 'Unrecognized operation' trong luồng sự kiện ([#7835](https://github.com/nocobase/nocobase/pull/7835)) của @zhangzhonghe

- **[client]**
  - Đã sửa lỗi các quy tắc liên kết cho các nút hành động trên hàng trong khối bảng không được thực thi lại sau khi dữ liệu hàng được cập nhật, đảm bảo các quy tắc hiện được áp dụng lại đúng cách khi có thay đổi. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) của @gchust

  - Đã sửa lỗi khi xem trước mã trong trình soạn thảo mã nếu mã chứa cú pháp jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) của @gchust

- **[undefined]** Sửa lỗi kiểu dáng không chính xác trên trang chủ tài liệu plugin ở chế độ tối. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) của @gchust

- **[Quản lý tệp]** sửa lỗi cấu hình trường trong khối bảng ([#7843](https://github.com/nocobase/nocobase/pull/7843)) của @katherinehhh

- **[Nhân viên AI]** Ẩn nút trò chuyện của nhân viên AI trên các trang v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) của @cgyrock

- **[Trực quan hóa dữ liệu: ECharts]** sửa lỗi với cấu hình labelType của ECharts bởi @heziqiang

- **[Quản lý email]**
  - sửa lỗi bản nháp bởi @jiannx

  - đồng bộ trạng thái đã đọc của email Microsoft mà không có dấu thời gian bởi @jiannx
