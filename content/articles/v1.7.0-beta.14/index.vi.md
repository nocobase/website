---
title: "NocoBase v1.7.0-beta.14: Đã thêm mô-đun bản địa hóa"
description: "Ghi chú phát hành của v1.7.0-beta.14"
---

### 🎉 Tính năng mới

- **[Lưu trữ lược đồ UI]** Đã thêm mô-đun bản địa hóa cho UISchema, cho phép tùy chỉnh bản dịch cho tiêu đề và mô tả lược đồ ([#6574](https://github.com/nocobase/nocobase/pull/6574)) bởi @chenos

### 🚀 Cải tiến

- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher

- **[client]**
  - Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher

  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher

- **[Workflow]** Tối ưu hóa logic lưu công việc ([#6613](https://github.com/nocobase/nocobase/pull/6613)) bởi @mytharcher

- **[Trình xử lý lỗi]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66

- **[Giới hạn IP]** Cập nhật nội dung thông báo giới hạn IP. bởi @sheldon66

- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ biến toàn cục trong cấu hình lưu trữ bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới do không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe

  - Vấn đề dữ liệu với khối Gantt trong bộ sưu tập dạng cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh

  - Khoảng trống giữa tiêu đề trang cấu hình mẫu khối và menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) bởi @gchust

  - Quy tắc với điều kiện 'any' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh

  - Thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh

  - Lỗi phân tích biến khi tham số URL chứa ký tự Trung Quốc ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh

  - Vấn đề hiển thị nhãn trường để tránh bị cắt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh

- **[Hành động: Xuất bản ghi]** Thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh

- **[Người dùng]** Vấn đề phân tích lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile

- **[Di động]** Trường chọn đơn với bộ lọc 'contains' trên di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh

- **[Kiểm soát truy cập]** Sửa logic tính toán hợp nhất vai trò ([#6605](https://github.com/nocobase/nocobase/pull/6605)) bởi @aaaaaajie

- **[Khối: mẫu]** Sửa đổi và xóa cùng các trường từ mẫu và khối, sau khi tạo khối từ mẫu, có thể gây ra lỗi hiển thị ([#6626](https://github.com/nocobase/nocobase/pull/6626)) bởi @gchust

- **[Trình quản lý email]**
  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx

  - Sửa lỗi quyền quản lý email không thể xem danh sách email bởi @jiannx

- **[Lưu trữ tệp: S3(Pro)]**
  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx

  - Ném lỗi cho người dùng khi tải logo lên bộ nhớ S3 Pro (đặt làm mặc định) bởi @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher

- **[Trình quản lý di chuyển]** Thời gian tạo nhật ký di chuyển hiển thị không chính xác trong một số môi trường bởi @gchust
