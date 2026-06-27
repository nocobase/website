---
title: "NocoBase v1.8.24: quy trình làm việc hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt"
description: "Ghi chú phát hành v1.8.24"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher

- **[client]** Loại bỏ popover dấu ba chấm khỏi danh sách tệp ([#7479](https://github.com/nocobase/nocobase/pull/7479)) bởi @mytharcher

- **[Workflow]** Tối ưu hóa quy trình chuẩn bị workflow để hỗ trợ sử dụng dữ liệu nút đã được tải trước ([#7476](https://github.com/nocobase/nocobase/pull/7476)) bởi @mytharcher

- **[Trình chỉnh sửa chủ đề]** Thêm hỗ trợ tùy chỉnh màu sắc menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu

- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi thành phần Popover bị chồng lấp/che khuất ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe

  - Kiểm tra 'không rỗng' không chính xác cho trường số trong quy tắc liên kết ([#7477](https://github.com/nocobase/nocobase/pull/7477)) bởi @katherinehhh

  - Trường readonly select/multiselect/date/richtext vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh

- **[Workflow]** Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký workflow ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher

- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher

- **[Nguồn dữ liệu: REST API]** Sửa quy tắc xác thực URL API REST bởi @katherinehhh

- **[Workflow: Phê duyệt]** Sửa lỗi văn bản trạng thái trong thông báo hoàn tất phê duyệt không được dịch bởi @mytharcher
