---
title: "NocoBase v1.9.0-beta.14: Công khai biến `approvalId` để sử dụng từ các trình kích hoạt phê duyệt"
description: "Ghi chú phát hành của v1.9.0-beta.14"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hiển thị biến `approvalId` để sử dụng từ các trình kích hoạt phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Tối ưu hóa phương pháp tải tài nguyên l10n để ngăn chặn chặn vòng lặp sự kiện ([#7653](https://github.com/nocobase/nocobase/pull/7653)) bởi @2013xile

- **[cache]** Tránh chi phí hiệu suất do nhân bản bộ lọc Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) bởi @2013xile

- **[Hành động: Nhập bản ghi]** Cải thiện thông báo lỗi khi thiếu tiêu đề bảng ([#7656](https://github.com/nocobase/nocobase/pull/7656)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Ngăn chặn việc ngắt từ nhãn trong nhãn formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) bởi @katherinehhh

- **[Workflow]** Sửa lỗi logger báo lỗi khi ứng dụng dừng ([#7639](https://github.com/nocobase/nocobase/pull/7639)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi hết thời gian giao dịch do giao dịch không rollback đúng cách khi xảy ra lỗi cơ sở dữ liệu sau khi gửi phê duyệt bởi @mytharcher

  - Sửa lỗi số lượng nhiệm vụ không được cập nhật sau khi thêm người được gán bởi @mytharcher

  - Sửa lỗi biến không được phân tích trong biểu mẫu gửi phê duyệt bởi @mytharcher

- **[Trình quản lý email]** bắt lỗi đồng bộ bởi @jiannx
