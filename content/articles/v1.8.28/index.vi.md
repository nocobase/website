---
title: "NocoBase v1.8.28: Thêm nút in vào cửa sổ popup chi tiết trong khối phê duyệt tùy chỉnh"
description: "Ghi chú phát hành v1.8.28"
---

### 🚀 Cải tiến

- **[client]** Để lấy loại MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện loại MIME của tệp ở phía client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher

- **[Workflow]**
  - Hỗ trợ giới hạn số lượng nút tối đa trong một workflow thông qua biến môi trường ([#7542](https://github.com/nocobase/nocobase/pull/7542)) bởi @mytharcher

  - Thêm tùy chọn `keepBranch` khi xóa nút ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher

- **[Workflow: Nút lặp]** Hỗ trợ giới hạn số chu kỳ tối đa cho nút lặp thông qua biến môi trường ([#7543](https://github.com/nocobase/nocobase/pull/7543)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Thêm nút in vào popup chi tiết trong các khối phê duyệt tùy chỉnh bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa thay đổi kích thước trong quá trình xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher

  - Sửa lỗi thiếu thuộc tính động trong thành phần `AssignedField` gây ra lỗi tải tệp lên trong các nút "Tạo bản ghi" hoặc "Cập nhật bản ghi" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) bởi @mytharcher

- **[Biểu mẫu công khai]** Sửa lỗi quy tắc tải lên cho trường tệp trong biểu mẫu công khai không chính xác ([#7553](https://github.com/nocobase/nocobase/pull/7553)) bởi @mytharcher

- **[Lịch]** Sửa lỗi truy vấn dữ liệu do định danh duy nhất trong khối lịch ([#7562](https://github.com/nocobase/nocobase/pull/7562)) bởi @katherinehhh

- **[Xác thực: LDAP]** Sửa lỗi liên kết LDAP thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile
