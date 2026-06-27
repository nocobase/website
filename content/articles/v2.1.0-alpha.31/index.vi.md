---
title: "NocoBase v2.1.0-alpha.31: thêm hành động liên kết và hủy liên kết vào khối liên kết"
description: "Ghi chú phát hành của v2.1.0-alpha.31"
---

### 🎉 Tính năng mới

- **[client]** Thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh

- **[Sao chép văn bản]** Hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh

- **[Nhân viên AI]** Nút nhân viên AI trong quy trình hỗ trợ tải tệp từ trường đính kèm. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) bởi @cgyrock

- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client-v2 cho các plugin khối ([#9297](https://github.com/nocobase/nocobase/pull/9297)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn

- **[Khối: Kanban]** Cải thiện khoảng cách trường chi tiết v2 nhất quán và làm cho khoảng cách thẻ kanban và cột thích ứng tốt hơn với cài đặt chủ đề. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) bởi @jiannx

- **[Quy trình: Phê duyệt]** Sửa hành vi xác thực trường bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe

  - Sửa lỗi kích hoạt quy trình hàng loạt trên bảng v2 để lựa chọn hàng được giữ nguyên sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx

  - Sửa lỗi trường `Ẩn (giá trị dự trữ)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor, và khôi phục hỗ trợ nhập giá trị khi gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx

  - Sửa lỗi thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh

  - Sửa lỗi tên tệp tải xuống không chính xác cho trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher

  - Sửa lỗi khi lọc các trường vô hướng với bộ lọc tùy chỉnh nhiều lựa chọn ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust

  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe

  - Sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh

  - Sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực đúng khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh

  - Sửa lỗi ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh

  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi giữa các trang đã lưu trong bộ nhớ đệm ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe

- **[flow-engine]** Sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu quy trình v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx

- **[server]**
  - Sửa lỗi yêu cầu khám phá OAuth của ứng dụng con bị định tuyến như yêu cầu của ứng dụng chính ([#9383](https://github.com/nocobase/nocobase/pull/9383)) bởi @2013xile

  - Xác thực tên gói plugin trước các thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos

- **[client-v2]**
  - Sửa lỗi khi chọn trường liên kết trong cài đặt trường. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) bởi @gchust

  - Sửa lỗi trang 404 xuất hiện chớp nhoáng sau khi ứng dụng khởi động ([#9365](https://github.com/nocobase/nocobase/pull/9365)) bởi @zhangzhonghe

  - Sửa lỗi giữ chỗ kéo thả khối trang v2 và vị trí thả ([#9361](https://github.com/nocobase/nocobase/pull/9361)) bởi @zhangzhonghe

  - Sửa lỗi một số trang v2 không tải được plugin từ xa ([#9369](https://github.com/nocobase/nocobase/pull/9369)) bởi @zhangzhonghe

- **[undefined]** Sửa các liên kết hỏng trong tài liệu đã dịch và bật tính năng phát hiện liên kết hỏng theo mặc định trong bản dựng tài liệu. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) bởi @Molunerfinn

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Ngăn chặn việc chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh

- **[AI: MCP server]** Sửa lỗi đóng gói MCP server để bao gồm các phụ thuộc thời gian chạy ([#9401](https://github.com/nocobase/nocobase/pull/9401)) bởi @2013xile

- **[Nguồn dữ liệu: Chính]** Sửa lỗi các bảng cơ sở dữ liệu đã nhập sử dụng tên bảng có tiền tố sai khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile

- **[Công cụ quy trình]** Sửa lỗi các khối do AI tạo ra không thể chuyển đổi từ mẫu tham chiếu trở lại thành mẫu trùng lặp. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) bởi @gchust

- **[Nhân viên AI]**
  - Sửa lỗi nút nhân viên AI đọc tệp đính kèm trường liên kết trong quy trình ([#9377](https://github.com/nocobase/nocobase/pull/9377)) bởi @cgyrock

  - Sửa lỗi nút nhân viên AI trong quy trình không kết thúc đúng cách sau khi gán công cụ. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) bởi @cgyrock

- **[Hành động: Yêu cầu tùy chỉnh]** Nâng cấp koa lên v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) bởi @chenos

- **[Khối: Kanban]**
  - Cải thiện kiểu dáng nhỏ gọn của thẻ Kanban và tối ưu hóa lựa chọn mẫu bật lên tạo nhanh. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) bởi @jiannx

  - Sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh

- **[Trường bộ sưu tập: Công thức]** Sửa lỗi trường công thức trong bảng con v2 không kích hoạt tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày luôn thất bại bởi @mytharcher

- **[Chính sách mật khẩu]** Sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile

- **[Quy trình: Phê duyệt]** Sửa lỗi cửa sổ chọn bản ghi bị che khuất trong cấu hình quy trình phê duyệt bởi @zhangzhonghe

- **[Trình quản lý email]** Sửa lỗi hiển thị tiêu đề danh tính thư bởi @jiannx

- **[Trình quản lý sao lưu]** Sửa lỗi thích ứng lược đồ pg bởi @Andrew1989Y
