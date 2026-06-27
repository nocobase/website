---
title: "NocoBase v2.1.0-alpha.46: Di chuyển các trang cài đặt Người dùng và Vai trò & Quyền sang v2"
description: "Ghi chú phát hành của v2.1.0-alpha.46"
---

### 🎉 Tính năng mới

- **[client-v2]** Đã thêm `TypedVariableInput` để các trường cổng SMTP và chế độ bảo mật trong plugin email v2 có thể chấp nhận các hằng số đã được định kiểu hoặc biến `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) bởi @Molunerfinn
- **[Kiểm soát truy cập]** Đã chuyển các trang cài đặt Người dùng và Vai trò & Quyền hạn sang v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) bởi @jiannx

### 🚀 Cải tiến

- **[server]** Trình khách hiện đại hiện được phục vụ tại `/v/` thay vì `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) bởi @Molunerfinn
- **[ai]** Đã nâng cấp `xlsx` để tránh các vấn đề bảo mật. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) bởi @mytharcher
- **[client]** Đã cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp sẵn. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) bởi @gchust
- **[cli]** Đã cải thiện hướng dẫn khởi tạo và tự cập nhật. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) bởi @chenos
- **[undefined]** Đã cập nhật tài liệu Nhúng NocoBase cho plugin mã nguồn mở. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) bởi @zhangzhonghe
  Tham khảo: [Nhúng NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Phòng ban]** Đã thêm trang cài đặt v2 để quản lý phòng ban, thành viên phòng ban và phân công phòng ban cho người dùng. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) bởi @jiannx
- **[Xác thực: SAML 2.0]** Các chuyển hướng đăng nhập SAML/CAS hiện tuân theo tiền tố của trình khách hiện đại. bởi @Molunerfinn
- **[Hành động: Nhập bản ghi Pro]** Đã nâng cấp `xlsx` để tránh các vấn đề bảo mật. bởi @mytharcher
- **[Xác thực: OIDC]** Các chuyển hướng đăng nhập OIDC hiện tuân theo tiền tố của trình khách hiện đại. bởi @Molunerfinn
- **[Luồng công việc: Phê duyệt]** Đã điều chỉnh các quy tắc xác thực cho trình kích hoạt phê duyệt và cấu hình nút để đảm bảo các trường liên quan đến giao diện người dùng tồn tại. bởi @mytharcher

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi các cột bảng v2 trở nên vô hình khi độ rộng cột tùy chỉnh được đặt thành 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) bởi @katherinehhh
  - Đã điều chỉnh tất cả các bộ chọn trường quan hệ để giới hạn các trường liên kết ở mức tối đa hai cấp. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) bởi @jiannx
  - Đã sửa lỗi lưu quy tắc liên kết menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) bởi @zhangzhonghe
  - Đã sửa lỗi khoảng cách quá mức phía trên các khối trên trang v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) bởi @zhangzhonghe
  - Đã giữ nguyên các giá trị trường được gán. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) bởi @katherinehhh
- **[client]**

  - Đã sửa lỗi khi lưu trường quan hệ dạng cây trong một mẫu biểu mẫu được tham chiếu. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) bởi @zhangzhonghe
  - Đã sửa lỗi dữ liệu trường quan hệ đã chọn không được hiển thị trên thiết bị di động. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) bởi @zhangzhonghe
  - Đã sửa lỗi các khối có thể xuất hiện không chính xác như đã bị xóa sau khi làm mới trang. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) bởi @zhangzhonghe
  - Đã sửa lỗi hành vi quy tắc liên kết hành động bản ghi không chính xác trong các khối bảng. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) bởi @gchust
  - Đã sửa lỗi các trường trở thành chỉ đọc khi được hiển thị lại sau khi bị ẩn bởi các quy tắc liên kết. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) bởi @katherinehhh
- **[flow-engine]**

  - Đã sửa lỗi trang bị treo khi đặt giá trị trường cho một biểu mẫu con. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) bởi @gchust
  - Đã sửa lỗi cửa sổ bật lên hiển thị dữ liệu giao diện người dùng cũ sau khi chuyển đổi công tắc chế độ cấu hình giao diện người dùng. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) bởi @gchust
  - Đã sửa lỗi tìm kiếm trường bị xóa khi di chuột qua các trường quan hệ. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) bởi @zhangzhonghe
- **[cli]** Đã sửa mẫu nginx để phục vụ các tài nguyên `.mjs` với kiểu MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) bởi @mytharcher
- **[database]** Đã sửa lỗi nhập giá trị mật khẩu dạng số có thể thất bại. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) bởi @2013xile
- **[Bộ sưu tập: SQL]**

  - Đã chặn quyền truy cập Bộ sưu tập SQL vào siêu dữ liệu PostgreSQL nhạy cảm. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi bản địa hóa trường nhiều khoảng trắng trong trình quản lý nguồn dữ liệu v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) bởi @jiannx
- **[Nhân viên AI]**

  - Đã ẩn lỗi nhà cung cấp LLM thô khỏi các thông báo giao diện người dùng. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) bởi @cgyrock
  - Các nút nhân viên AI trong luồng công việc hiện có thể sử dụng mô hình mặc định. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) bởi @cgyrock
  - Đã sửa lỗi xác thực URL cơ sở của nhà cung cấp AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) bởi @cgyrock
  - Đã sửa lỗi `ctx.get` trong các nút luồng công việc nhân viên AI. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) bởi @cgyrock
- **[Hành động: Sao chép bản ghi]** Đã sửa lỗi trạng thái nút không được đặt lại khi gửi bản ghi trùng lặp thất bại. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) bởi @katherinehhh
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Đã sửa lỗi hành động kích hoạt luồng công việc bị thiếu trong danh sách nút bảng hành động workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) bởi @katherinehhh
- **[Lịch]** Đã sửa lỗi màu sự kiện lịch không được hiển thị từ trường màu đã cấu hình trên trang v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) bởi @jiannx
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã sửa lỗi rủi ro SQL injection trong bộ lọc dấu thời gian của kênh thông báo trong ứng dụng. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) bởi @mytharcher
- **[Công cụ luồng]**

  - Đã sửa lỗi kéo các tab cửa sổ bật lên để sắp xếp lại không hoạt động. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) bởi @gchust
  - Đã sửa lỗi sửa đổi một khối sau khi sao chép mẫu của nó có thể vô tình ảnh hưởng đến nội dung của khối gốc. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) bởi @gchust
- **[Cài đặt giấy phép]** Đã sửa lỗi trang cài đặt giấy phép có thể bị treo trong thời gian dài khi kiểm tra đăng nhập pkg chậm hoặc không thể truy cập. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) bởi @hongboji
- **[Kiểm soát truy cập]** Đã sửa lỗi quyền không đầy đủ khi đăng nhập lần đầu khi vai trò hợp nhất là vai trò mặc định. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) bởi @2013xile
- **[Khối: Gantt]** Đã cải thiện vị trí chú giải công cụ Gantt để tránh che khuất các thanh nhiệm vụ và căn chỉnh nhãn nhiệm vụ nhất quán bên trong và bên ngoài thanh. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) bởi @jiannx
- **[Luồng công việc: JavaScript]** Đã làm rõ rằng chế độ hỗ trợ mô-đun JavaScript của Luồng công việc là không an toàn và không phải là ranh giới quyền. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) bởi @mytharcher
  Tham khảo: [Luồng công việc JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Trình quản lý tệp]** Đã sửa lỗi xác thực đường dẫn lưu trữ tệp cục bộ để ngăn các đường dẫn không an toàn thoát khỏi thư mục gốc lưu trữ đã cấu hình. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) bởi @mytharcher
- **[Chính sách mật khẩu]**

  - Đã sửa lỗi đăng nhập thất bại che giấu lỗi thực sự với thông báo "argument #1 unsupported type undefined" khi lỗi cơ bản không có mã trạng thái. bởi @Molunerfinn
  - Đã sửa lỗi xác thực chính sách mật khẩu có thể thất bại đối với các giá trị mật khẩu dạng số. bởi @2013xile
- **[Nguồn dữ liệu: REST API]** Đã sửa lỗi xây dựng khai báo plugin nguồn dữ liệu REST API thất bại do khai báo kiểu client-v2 của trình quản lý nguồn dữ liệu không khớp. bởi @katherinehhh
