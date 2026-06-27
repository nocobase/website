---
title: "NocoBase v1.4.17: Hỗ trợ sử dụng biến \"Bản ghi đã chọn trong bảng\" trong trường mảng m2m"
description: "Ghi chú phát hành v1.4.17"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ sử dụng biến "Bản ghi đã chọn trong bảng" trong các trường mảng m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) bởi @2013xile

### 🚀 Cải tiến

- **[undefined]** Bật plugin chủ đề theo mặc định ([#5957](https://github.com/nocobase/nocobase/pull/5957)) bởi @zhangzhonghe

- **[Nguồn dữ liệu: Chính]** Thêm xác thực trùng tên để ngăn người dùng tạo Bộ sưu tập trùng tên với Bộ sưu tập hệ thống ([#5962](https://github.com/nocobase/nocobase/pull/5962)) bởi @chareice

- **[Quy trình làm việc]** Tránh sử dụng sai biến phạm vi ngày tháng ở hầu hết các nơi trừ thành phần bộ lọc ([#5954](https://github.com/nocobase/nocobase/pull/5954)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]**
  - Đã sửa lỗi trong hành động xóa khi filterByTk với tham số filter không thể xóa dữ liệu ([#5976](https://github.com/nocobase/nocobase/pull/5976)) bởi @chareice

  - Các phương thức firstOrCreate và updateOrCreate của kho lưu trữ bị mất ngữ cảnh ([#5973](https://github.com/nocobase/nocobase/pull/5973)) bởi @chenos

- **[client]**
  - Sửa lỗi khi thêm trường quan hệ một-một trong biểu mẫu ([#5975](https://github.com/nocobase/nocobase/pull/5975)) bởi @katherinehhh

  - Sửa lỗi gán trường trong bảng con khi chọn lại dữ liệu sau khi xóa dữ liệu ([#5958](https://github.com/nocobase/nocobase/pull/5958)) bởi @katherinehhh

  - Sửa lỗi khối bảng do dữ liệu chứa trường tên 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) bởi @zhangzhonghe

- **[Nguồn dữ liệu: Chính]** Sửa các vấn đề tương thích kế thừa với trường unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) bởi @chareice

- **[Quy trình làm việc]** Sửa lỗi khối chi tiết con gây ra lỗi trong cấu hình giao diện nút thủ công ([#5953](https://github.com/nocobase/nocobase/pull/5953)) bởi @mytharcher
