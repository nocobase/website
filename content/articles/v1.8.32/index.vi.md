---
title: "NocoBase v1.8.32: Các phương pháp tối ưu hóa việc tải tài nguyên bản địa hóa"
description: "Ghi chú phát hành phiên bản v1.8.32"
---

### 🚀 Cải tiến

- **[server]** Tối ưu hóa phương pháp tải tài nguyên l10n để tránh chặn vòng lặp sự kiện ([#7653](https://github.com/nocobase/nocobase/pull/7653)) bởi @2013xile

- **[cache]** Tránh chi phí hiệu năng do nhân bản bộ lọc Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) bởi @2013xile

- **[Hành động: Nhập bản ghi]** Cải thiện thông báo lỗi khi thiếu tiêu đề bảng ([#7656](https://github.com/nocobase/nocobase/pull/7656)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi khi xóa trường ngày tháng trong khối bộ lọc ([#7632](https://github.com/nocobase/nocobase/pull/7632)) bởi @katherinehhh

  - Ngăn chặn việc ngắt từ trong nhãn của formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) bởi @katherinehhh

  - Sửa lỗi giá trị mặc định của bảng con không hoạt động trong form chỉnh sửa dạng drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) bởi @katherinehhh

- **[Trường collection: Phân chia hành chính Trung Quốc]** Nhập dữ liệu thất bại khi thành phố và khu vực có cùng tên ([#7673](https://github.com/nocobase/nocobase/pull/7673)) bởi @2013xile

- **[Workflow]**
  - Sửa lỗi sau khi xóa một nút bắt đầu nhánh, khóa của nút đầu tiên được giữ lại trong nhánh đã bị thay đổi sai thành giá trị mới ([#7665](https://github.com/nocobase/nocobase/pull/7665)) bởi @mytharcher

  - Sửa lỗi logger báo lỗi khi ứng dụng dừng ([#7639](https://github.com/nocobase/nocobase/pull/7639)) bởi @mytharcher

- **[Quản lý tệp]** Sửa lỗi tệp `.msg` không thể tải lên đúng cách ([#7662](https://github.com/nocobase/nocobase/pull/7662)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Sửa lỗi siêu dữ liệu không được đồng bộ trên nhiều nút sau khi tạo trường liên kết ngược ([#7628](https://github.com/nocobase/nocobase/pull/7628)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi dịch thuật của văn bản trạng thái trong thông báo hoàn thành phê duyệt, sử dụng ngôn ngữ mặc định của hệ thống để dịch khi người dùng chưa đặt tùy chọn ngôn ngữ bởi @mytharcher

  - Sửa lỗi số lượng nhiệm vụ không được cập nhật sau khi thêm người được gán bởi @mytharcher
