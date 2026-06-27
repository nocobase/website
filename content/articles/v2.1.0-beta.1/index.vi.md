---
title: "NocoBase v2.1.0-beta.1: Tái cấu trúc giám sát ứng dụng để hỗ trợ quản lý đa ứng dụng trên các tình huống khác nhau"
description: "Ghi chú phát hành của v2.1.0-beta.1"
---

### 🎉 Tính năng mới

- **[server]** Tái cấu trúc bộ giám sát ứng dụng để hỗ trợ quản lý đa ứng dụng trong các tình huống khác nhau ([#8043](https://github.com/nocobase/nocobase/pull/8043)) bởi @2013xile

### 🚀 Cải tiến

- **[client]**
  - Cải thiện giao diện gán trường ngày/giờ để hỗ trợ chọn ngày/giờ tương đối. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) bởi @gchust

  - Hỗ trợ chỉ định trường tiêu đề cho trường quan hệ khi gán trường. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) bởi @gchust

### 🐛 Sửa lỗi

- **[flow-engine]**
  - Sửa lỗi không thể mở rộng menu con của trường bộ lọc khi có từ khóa tìm kiếm. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) bởi @gchust

  - Sửa lỗi thao tác xóa cột không hoạt động trong chế độ chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8560](https://github.com/nocobase/nocobase/pull/8560)) bởi @katherinehhh

- **[client]**
  - Sửa lỗi gán một bản ghi đơn lẻ vào trường quan hệ nhiều-nhiều cho kết quả không chính xác. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) bởi @gchust

  - Phân tích cú pháp ngày bằng bộ chọn ngày và thêm xác thực độ mạnh mật khẩu, v.v. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) bởi @jiannx

  - Sửa lỗi khoảng cách do các thao tác liên kết ẩn trong cột thao tác của bảng ([#8646](https://github.com/nocobase/nocobase/pull/8646)) bởi @zhangzhonghe

  - Sửa lỗi `Action.Modal` không thể đóng sau một số tương tác ([#8642](https://github.com/nocobase/nocobase/pull/8642)) bởi @mytharcher

  - Sửa lỗi cú pháp phân giải khi mục markdown hiển thị Liquid không hợp lệ ([#8637](https://github.com/nocobase/nocobase/pull/8637)) bởi @katherinehhh

  - Sửa lỗi yêu cầu phân tích backend không cần thiết cho các thuộc tính trường to-many trong khối biểu mẫu. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) bởi @gchust

  - Sửa lỗi thiếu định dạng số cho trường công thức số và cài đặt định dạng ngày cho trường công thức ngày ([#8625](https://github.com/nocobase/nocobase/pull/8625)) bởi @katherinehhh

  - Sửa lỗi hiển thị đường viền trên cùng không đầy đủ trên mục biểu mẫu đầu tiên ([#8623](https://github.com/nocobase/nocobase/pull/8623)) bởi @katherinehhh

  - Sửa lỗi: ẩn "Bật bảng dạng cây" và "Mở rộng tất cả các hàng theo mặc định" cho các bộ sưu tập không phải dạng cây ([#8566](https://github.com/nocobase/nocobase/pull/8566)) bởi @katherinehhh

- **[utils]** Sửa lỗi bảo mật của công cụ đánh giá `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) bởi @mytharcher

- **[AI employees]**
  - Sửa lỗi liên kết trích dẫn từ tìm kiếm web AI không được hiển thị trong hộp chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) bởi @cgyrock

  - Sửa lỗi tham số API openai bị lỗi ([#8633](https://github.com/nocobase/nocobase/pull/8633)) bởi @cgyrock

- **[Template print]** Sửa lỗi các trường có cùng khóa dẫn đến lỗi hiển thị bởi @jiannx

- **[Workflow: Approval]**
  - Sửa lỗi xảy ra khi phê duyệt bản ghi đã bị xóa bởi @mytharcher

  - Sửa lỗi dữ liệu phê duyệt không hiển thị trong popup chi tiết bản ghi nếu chế độ workflow được đặt là "Trước khi lưu" bởi @mytharcher
