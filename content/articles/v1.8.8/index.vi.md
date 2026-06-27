---
title: "NocoBase v1.8.8: Thêm chế độ \"Tất cả đã hoàn tất\" cho nút song song"
description: "Ghi chú phát hành v1.8.8"
---

### 🎉 Tính năng mới

- **[Workflow: Node song song]** Thêm chế độ "Tất cả đã hoàn tất" cho node song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher

- **[Bộ điều hợp hàng đợi Redis]** Thêm bộ điều hợp Redis cho hàng đợi sự kiện bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Cho phép hàng đợi đồng thời trong bộ nhớ hoạt động khi các mục đang xử lý chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher

- **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie

- **[Workflow: Node thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe

- **[Bộ điều hợp hàng đợi Redis]** Cho phép hàng đợi đồng thời hoạt động khi các mục đang xử lý chưa đầy cho bộ điều hợp Redis bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Thiếu biến đối tượng hiện tại trong quy tắc liên kết bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh

  - Cài đặt trường tiêu đề của bộ chọn dữ liệu không có hiệu lực ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe

  - Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie

  - Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe

  - Vấn đề hiển thị khi biến ngày không còn được dùng được sử dụng trong trường ngày của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh

- **[database]**
  - Khắc phục lỗi phân trang đơn giản tự động thất bại do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie

  - Sửa lỗi xuất tập dữ liệu lớn từ PostgreSQL bị thất bại ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie

  - Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie

- **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con khiến không thể đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi giữ lại các thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie

- **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe

- **[Workflow]** Sửa phiên bản sai của dependency ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher

- **[Nguồn dữ liệu: Oracle ngoài]** Sửa lỗi giữ lại các thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập bởi @aaaaaajie

- **[Workflow: Phê duyệt]** URL của nút Liên kết trỏ đến một popup trên trang hiện tại, nhưng nhấp vào lại hiển thị lỗi 404 bởi @zhangzhonghe

- **[Trình quản lý email]** Mối quan hệ giữa messages và labels collection bị bất thường trên mysql bởi @jiannx
