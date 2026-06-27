---
title: "NocoBase v1.6.17: Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc"
description: "Ghi chú phát hành phiên bản v1.6.17"
---

### 🚀 Cải tiến

- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher

- **[client]**
  - Hỗ trợ tìm kiếm trường trong thành phần Filter ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher

  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher

- **[Error handler]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66

- **[IP restriction]** Cập nhật nội dung thông báo giới hạn IP. bởi @sheldon66

- **[File storage: S3(Pro)]** Hỗ trợ biến toàn cục trong cấu hình lưu trữ bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Quy tắc với điều kiện 'any' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh

  - Vấn đề dữ liệu với khối Gantt trong bộ sưu tập dạng cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh

  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới do không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe

  - Lỗi phân tích biến khi tham số URL chứa ký tự tiếng Trung ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh

- **[Users]** Vấn đề phân tích cú pháp lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile

- **[Mobile]** Trường chọn đơn với bộ lọc 'contains' trên thiết bị di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh

- **[Action: Export records]** Thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh

- **[Email manager]** Sửa lỗi quyền quản lý email không thể xem danh sách email bởi @jiannx

- **[File storage: S3(Pro)]** Báo lỗi cho người dùng khi tải logo lên bộ lưu trữ S3 Pro (đặt làm mặc định) bởi @mytharcher

- **[Workflow: Approval]** Sửa lỗi `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher

- **[Migration manager]** Thời gian tạo nhật ký di chuyển hiển thị không chính xác trong một số môi trường bởi @gchust
