---
title: "NocoBase v1.9.0-beta.8: Hỗ trợ tùy chỉnh màu menu bên"
description: "Ghi chú phát hành phiên bản v1.9.0-beta.8"
---

### 🚀 Cải tiến

- **[auth]** Hỗ trợ sử dụng dấu chấm (`.`) trong tên người dùng ([#7504](https://github.com/nocobase/nocobase/pull/7504)) bởi @2013xile

- **[client]** Thêm hỗ trợ bản địa hóa cho tooltip & tiêu đề mục nhóm ([#7485](https://github.com/nocobase/nocobase/pull/7485)) bởi @katherinehhh

- **[Quy trình làm việc: Nút thủ công]** Hỗ trợ xem và tiếp tục các tác vụ thủ công đang chờ xử lý trong các quy trình làm việc đã bị vô hiệu hóa ([#7493](https://github.com/nocobase/nocobase/pull/7493)) bởi @mytharcher

- **[Lịch]** Hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch ([#7508](https://github.com/nocobase/nocobase/pull/7508)) bởi @katherinehhh

- **[Trình chỉnh sửa chủ đề]** Thêm hỗ trợ tùy chỉnh màu menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu

- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi cửa sổ cấu hình biểu tượng nút bị che/khuất ([#7506](https://github.com/nocobase/nocobase/pull/7506)) bởi @zhangzhonghe

  - Sửa lỗi cửa sổ cấu hình biểu tượng menu bị che khuất ([#7515](https://github.com/nocobase/nocobase/pull/7515)) bởi @zhangzhonghe

  - Sửa lỗi thành phần Popover bị chồng lấp/che khuất ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe

- **[Thông báo: Tin nhắn trong ứng dụng]**
  - Sửa lỗi phân tích cú pháp liên kết thông báo không chính xác ([#7509](https://github.com/nocobase/nocobase/pull/7509)) bởi @mytharcher

  - Sửa lỗi tin nhắn gần đây không được hiển thị khi mở cửa sổ thông báo ([#7514](https://github.com/nocobase/nocobase/pull/7514)) bởi @mytharcher

- **[Quy trình làm việc]**
  - Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký quy trình làm việc ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher

  - Sửa lỗi logic đăng ký không chính xác trên hàng đợi tác vụ nền trong quy trình làm việc khiến thông điệp thực thi bị xử lý sai ([#7507](https://github.com/nocobase/nocobase/pull/7507)) bởi @mytharcher

- **[Nguồn dữ liệu: REST API]** Sửa quy tắc xác thực URL REST API bởi @katherinehhh

- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher

- **[In mẫu]** Hỗ trợ trường chinaRegions bởi @jiannx

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi trường công thức trong biểu mẫu phê duyệt không tự động cập nhật bởi @mytharcher

  - Sửa lỗi xảy ra khi xóa dữ liệu từ nguồn dữ liệu bên ngoài bởi @mytharcher
