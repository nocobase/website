---
title: "NocoBase v2.1.0-beta.27: Nhân viên AI có thể tìm kiếm tài liệu đóng gói bằng lệnh Bash"
description: "Ghi chú phát hành của v2.1.0-beta.27"
---

### 🎉 Tính năng mới

- **[server]** Nhân viên AI có thể tìm kiếm tài liệu đã được đóng gói bằng lệnh Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) bởi @2013xile

- **[Nhân viên AI]** Node nhân viên AI trong quy trình làm việc hỗ trợ tải tệp từ các trường đính kèm. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) bởi @cgyrock

- **[Sao chép văn bản]** Hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher

- **[Khối: Kanban]** Cải thiện tính nhất quán về khoảng cách trường chi tiết v2 và làm cho khoảng cách thẻ kanban và cột thích ứng tốt hơn với cài đặt chủ đề. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) bởi @jiannx

- **[Nhân viên AI]** Cải thiện công cụ chỉnh sửa RunJS của Nathan và giảm độ trễ trong các cuộc trò chuyện AI dài ([#9311](https://github.com/nocobase/nocobase/pull/9311)) bởi @2013xile

- **[Quy trình làm việc: Phê duyệt]** Sửa hành vi xác thực trường bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu luồng v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx

- **[client]**
  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe

  - Sửa lỗi khi lọc các trường vô hướng với bộ lọc đa lựa chọn tùy chỉnh ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe

  - Sửa lỗi tên tệp tải xuống không chính xác cho các trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher

  - Sửa lỗi thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh

  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe

  - Sửa lỗi các trường `Ẩn (giá trị dự trữ)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor và khôi phục hỗ trợ nhập giá trị để gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx

  - Sửa lỗi kích hoạt quy trình làm việc hàng loạt bảng v2 để lựa chọn hàng vẫn nhất quán sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx

- **[client-v2]**
  - Sửa lỗi khi chọn trường liên kết trong cài đặt trường. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) bởi @gchust

  - Sửa lỗi trang 404 xuất hiện sau khi ứng dụng khởi động ([#9365](https://github.com/nocobase/nocobase/pull/9365)) bởi @zhangzhonghe

- **[server]** Sửa lỗi yêu cầu khám phá OAuth của ứng dụng con bị định tuyến như yêu cầu của ứng dụng chính ([#9383](https://github.com/nocobase/nocobase/pull/9383)) bởi @2013xile

- **[Nguồn dữ liệu: Chính]** Sửa lỗi bảng cơ sở dữ liệu đã nhập sử dụng sai tên bảng có tiền tố khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Ngăn chặn việc chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh

- **[AI: Máy chủ MCP]** Sửa lỗi đóng gói máy chủ MCP để bao gồm các phụ thuộc thời gian chạy ([#9401](https://github.com/nocobase/nocobase/pull/9401)) bởi @2013xile

- **[Công cụ luồng]** Sửa lỗi các khối do AI tạo ra không thể chuyển đổi từ mẫu tham chiếu trở lại mẫu trùng lặp. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) bởi @gchust

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày luôn thất bại bởi @mytharcher

- **[Chính sách mật khẩu]** Sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi cửa sổ chọn bản ghi bị che khuất trong cấu hình quy trình làm việc phê duyệt bởi @zhangzhonghe

- **[Trình quản lý sao lưu]** Sửa lỗi thích ứng lược đồ pg bởi @Andrew1989Y
