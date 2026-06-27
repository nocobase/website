---
title: "NocoBase v1.9.0-alpha.15: Sử dụng logger hệ thống tiêu chuẩn cho hàng đợi tin nhắn"
description: "Ghi chú phát hành phiên bản v1.9.0-alpha.15"
---

### 🚀 Cải tiến

- **[auth]** Hỗ trợ sử dụng dấu chấm (`.`) trong tên người dùng ([#7504](https://github.com/nocobase/nocobase/pull/7504)) bởi @2013xile
- **[server]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher
- **[snowflake-id]** Thay đổi ID của các bảng hệ thống có khóa chính tự động tăng nhưng không có định danh duy nhất thành ID dạng Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) bởi @2013xile
- **[Lịch]** Hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch ([#7508](https://github.com/nocobase/nocobase/pull/7508)) bởi @katherinehhh
- **[Quy trình: Nút thủ công]** Hỗ trợ xem và tiếp tục các tác vụ thủ công đang chờ xử lý trong các quy trình đã bị vô hiệu hóa ([#7493](https://github.com/nocobase/nocobase/pull/7493)) bởi @mytharcher
- **[Trình chỉnh sửa giao diện]** Thêm hỗ trợ tùy chỉnh màu sắc cho menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu
- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi cửa sổ cấu hình biểu tượng nút bị che khuất/chồng lấn ([#7506](https://github.com/nocobase/nocobase/pull/7506)) bởi @zhangzhonghe
  - Sửa lỗi thành phần Popover bị chồng lấn/che khuất ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe
  - Trường readonly select/multiselect/date/richtext vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh
- **[Quy trình]**

  - Sửa lỗi logic đăng ký không chính xác trên hàng đợi tác vụ nền trong quy trình khiến thông điệp thực thi bị xử lý sai ([#7507](https://github.com/nocobase/nocobase/pull/7507)) bởi @mytharcher
  - Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký quy trình ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi phân tích cú pháp liên kết thông báo không chính xác ([#7509](https://github.com/nocobase/nocobase/pull/7509)) bởi @mytharcher
- **[Nguồn dữ liệu: REST API]** Sửa quy tắc xác thực URL REST API bởi @katherinehhh
- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher
- **[In mẫu]** Hỗ trợ trường chinaRegions bởi @jiannx
- **[Trình quản lý email]** Sửa lỗi tiêu đề rác bởi @jiannx
