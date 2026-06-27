---
title: "NocoBase v2.1.0-alpha.2: Thêm kiểm soát ACL cho API phê duyệt"
description: "Ghi chú phát hành phiên bản v2.1.0-alpha.2"
---

### 🎉 Tính năng mới

- **[Quy trình công việc: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher
- **[Xác thực: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[AI: Cơ sở tri thức]** Tối ưu hóa đầu ra xây dựng để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock
- **[Đa không gian]** Kiểm soát quyền truy cập đa không gian qua acl bởi @jiannx
- **[Hành động: Xuất bản ghi Pro]** Cải thiện phạm vi dữ liệu hành động xuất dựa trên bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]**

  - Xóa hỗ trợ cho trường JS bởi @zhangzhonghe
  - Đơn giản hóa tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher
  - Triển khai kiểm soát truy cập cho API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher
  - Thêm logic sửa chữa cho đối tượng đồng bộ sau khi di chuyển bởi @mytharcher
- **[Xác thực: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các bộ xác thực hiện có dựa trên di động bởi @2013xile

### 🐛 Sửa lỗi

- **[Đa không gian]**

  - thêm script di chuyển để xóa x-ready-pretty trong trường không gian bởi @jiannx
  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx
  - Màu sắc của bộ chọn không gian theo chủ đề bởi @jiannx
  - xóa thuộc tính read-pretty cho trường không gian bởi @jiannx
- **[Thành phần trường: mặt nạ]** Sửa lỗi cửa sổ cài đặt trường mặt nạ không thể tải tất cả vai trò người dùng một cách chính xác. bởi @gchust
- **[Hành động: Nhập bản ghi Pro]**

  - Sửa lỗi quy trình công việc được kích hoạt bởi nhập không đồng bộ bị trì hoãn thực thi bởi @mytharcher
  - Sửa số đếm trong kết quả nhập và bản dịch thông báo bởi @mytharcher
- **[AI: Cơ sở tri thức]** Sửa lỗi hệ thống không thể khởi động sau khi xây dựng bởi @cgyrock
- **[Nguồn dữ liệu: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi khi phương thức không có trong ngữ cảnh bởi @mytharcher
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi tham số và tải trọng không chính xác khi kích hoạt quy trình công việc tùy chỉnh bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất không đồng bộ trong khi ứng dụng chính không bật plugin nhập/xuất pro bởi @cgyrock
- **[Quy trình công việc: Webhook]**

  - Sửa lỗi 404 khi gửi POST đến URL webhook trong ứng dụng con bởi @mytharcher
  - Sửa lỗi thiếu dữ liệu body khi không cấu hình phân tích body bởi @mytharcher
- **[Quy trình công việc: Luồng con]** Sửa đường dẫn route của liên kết quy trình công việc bởi @mytharcher
- **[In mẫu]**

  - sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh
  - sửa lỗi các trường có cùng khóa dẫn đến lỗi hiển thị bởi @jiannx
  - Sửa lỗi cửa sổ cấu hình mẫu bị che khuất bởi @zhangzhonghe
  - xóa nút footer khỏi cấu hình mẫu in bởi @katherinehhh
  - Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx
  - hỗ trợ trường không gian bởi @jiannx
  - hiển thị trường không gian trong phiên bản 2.0 bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher
- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi chính tả ECharts bởi @heziqiang
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi khi phê duyệt bản ghi đã bị xóa bởi @mytharcher
  - Sửa lỗi khi thực thi ở chế độ trước khi lưu bởi @mytharcher
  - Sửa lỗi dữ liệu phê duyệt không hiển thị trong cửa sổ chi tiết bản ghi nếu chế độ quy trình công việc được đặt thành "Trước khi lưu" bởi @mytharcher
  - Thêm khả năng chịu lỗi khi quy trình công việc bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Sửa lỗi thiếu giá trị từ cửa sổ chi tiết của "Đơn của tôi" bởi @mytharcher
  - Sửa lỗi trong cửa sổ bản ghi phê duyệt phiên bản 1.x bởi @mytharcher
  - Sửa lỗi hiệu suất do trường JSON trong quá trình tải danh sách (MySQL) bởi @mytharcher
  - Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher
  - Sửa lỗi đồng thời khiến việc thực thi bị tiếp tục lặp lại bởi @mytharcher
  - Sửa lỗi xây dựng do thiếu phụ thuộc bởi @mytharcher
  - Sửa lỗi tải bản ghi không chính xác do tham số sai bởi @mytharcher
  - Sửa lỗi trả phê duyệt về nút trước đó nhưng lại trả về điểm bắt đầu bởi @mytharcher
  - Sửa lỗi khi thêm vai trò cho người dùng nếu quy trình công việc của đối tượng bị vô hiệu hóa bởi @mytharcher
  - Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher
  - Sửa lỗi trường không hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe
  - Sửa lỗi trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher
- **[Trình quản lý email]**

  - sửa chuỗi hội thoại bởi @jiannx
  - Sửa lỗi liên kết trả lời Outlook đôi khi bị ngắt kết nối bởi @jiannx
  - nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải tệp đính kèm thất bại bởi @jiannx
  - Sửa lỗi email trong cùng một hộp thư giữa nhiều người dùng và tối ưu hóa hiệu suất bởi @jiannx
  - thêm bộ lọc vào quản lý bởi @jiannx
  - hiển thị nút trả lời tất cả và phạm vi dữ liệu hỗ trợ lọc tin nhắn con. bởi @jiannx
  - Sửa lỗi cửa sổ cấu hình email bị che khuất bởi @zhangzhonghe
- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số di động bởi @2013xile
- **[Trình quản lý di chuyển]** Sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock
