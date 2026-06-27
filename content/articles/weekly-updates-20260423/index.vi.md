---
title: "每周更新｜提升AI员工解析上传文档的能力"
description: "这是NocoBase在2026年4月16日至4月23日期间的功能更新与改进摘要。"
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/en/blog/v2.0.41)

*Ngày phát hành: 2026-04-22*

### 🎉 Tính năng mới

- **[Auth: OIDC]** thuộc tính ánh xạ hỗ trợ trường tùy chỉnh bởi @chenzhizdt
- **[DingTalk]** DingTalk: thông báo, tự động đăng nhập trong DingTalk và đồng bộ người dùng. bởi @chenzhizdt

### 🚀 Cải tiến

- **[ai]** Nhân viên AI và cơ sở tri thức hiện hỗ trợ thêm các loại tệp để tải lên (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) bởi @cgyrock
- **[undefined]** Thêm bản dịch tiếng Ả Rập cho phần hướng dẫn và điều hướng ([#9141](https://github.com/nocobase/nocobase/pull/9141)) bởi @saraTabbane

### 🐛 Sửa lỗi

- **[data-source-manager]** Sửa lỗi trường phần trăm bị đặt lại thành số khi đồng bộ lại nguồn dữ liệu bên ngoài ([#9178](https://github.com/nocobase/nocobase/pull/9178)) bởi @jiannx
- **[client]**

  - Đã sửa lỗi giá trị mặc định sẽ không có hiệu lực sau khi tạo bản ghi. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) bởi @gchust
  - Sửa lỗi nút Thêm tab quá gần với cạnh phải ([#9177](https://github.com/nocobase/nocobase/pull/9177)) bởi @zhangzhonghe
- **[Departments]** Đã sửa lỗi đồng bộ phòng ban lặp lại không thể cập nhật thứ tự sắp xếp phòng ban ([#9173](https://github.com/nocobase/nocobase/pull/9173)) bởi @2013xile
- **[Data source: Main]** Đã sửa lỗi đồng bộ trường từ cơ sở dữ liệu cho các view được kết nối khi tên collection khác với tên view trong cơ sở dữ liệu ([#9155](https://github.com/nocobase/nocobase/pull/9155)) bởi @2013xile
- **[Workflow: JavaScript]** Sửa lỗi bảo mật của tập lệnh thực thi ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher
- **[AI: Knowledge base]** Sửa lỗi cơ sở dữ liệu vector không được đồng bộ khi xóa tài liệu cơ sở tri thức. bởi @cgyrock
- **[WeCom]** Đã sửa lỗi thiếu thứ tự phòng ban khi đồng bộ phòng ban từ WeCom bởi @2013xile

### [v2.0.40](https://www.nocobase.com/en/blog/v2.0.40)

*Ngày phát hành: 2026-04-20*

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi cập nhật giá trị bảng con thông qua gán trường dẫn đến nhiễm bẩn dữ liệu. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) bởi @gchust
- **[data-source-manager]** Đã sửa lỗi trường tuần tự có thể bị thay đổi thành chuỗi sau khi đồng bộ cơ sở dữ liệu ([#9143](https://github.com/nocobase/nocobase/pull/9143)) bởi @2013xile
- **[File manager]** Trả về null khi thiếu URL xem trước ([#9104](https://github.com/nocobase/nocobase/pull/9104)) bởi @gaston98765
- **[Workflow: JavaScript]** Sửa lỗi bảo mật của tập lệnh thực thi ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher
- **[Departments]**

  - Đã sửa lỗi danh sách phòng ban trong quản lý phòng ban không tuân theo thứ tự trường `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) bởi @2013xile
  - Đã sửa lỗi thiếu hoặc giá trị phòng ban chính cũ sau khi lưu phòng ban người dùng ([#9156](https://github.com/nocobase/nocobase/pull/9156)) bởi @2013xile

### [v2.0.39](https://www.nocobase.com/en/blog/v2.0.39)

*Ngày phát hành: 2026-04-18*

### 🚀 Cải tiến

- **[Departments]** Hiển thị trường khóa ngoại `parentId` của collection phòng ban trong giao diện người dùng ([#9130](https://github.com/nocobase/nocobase/pull/9130)) bởi @2013xile

### 🐛 Sửa lỗi

- **[data-source-manager]** Đã sửa lỗi đồng bộ trường collection tệp xóa trường `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) bởi @2013xile
- **[client]**

  - Đã sửa lỗi thành phần trường liên kết không chính xác trong cài đặt giá trị trường. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) bởi @gchust
  - Sửa lỗi chiều cao và chiều rộng quá lớn của các tab trong chế độ cấu hình trang ([#9144](https://github.com/nocobase/nocobase/pull/9144)) bởi @zhangzhonghe
- **[database]** Đã sửa lỗi rủi ro SQL injection trong tải nhanh đệ quy cây và khởi tạo sắp xếp phạm vi ([#9133](https://github.com/nocobase/nocobase/pull/9133)) bởi @2013xile
- **[Data visualization]** Đã sửa lỗi sắp xếp khối biểu đồ để sử dụng các thước đo và chiều đã được đặt bí danh trong các truy vấn tổng hợp ([#9131](https://github.com/nocobase/nocobase/pull/9131)) bởi @2013xile
- **[Collection: SQL]** Đã sửa lỗi thiếu xác thực SQL khi cập nhật collection SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) bởi @2013xile

### [v2.0.38](https://www.nocobase.com/en/blog/v2.0.38)

*Ngày phát hành: 2026-04-16*

### 🎉 Tính năng mới

- **[AI employees]** Cải thiện khả năng phân tích tài liệu đã tải lên của nhân viên AI ([#9126](https://github.com/nocobase/nocobase/pull/9126)) bởi @cgyrock

### 🚀 Cải tiến

- **[logger]** Thêm thông tin `referer` vào nhật ký yêu cầu ([#9110](https://github.com/nocobase/nocobase/pull/9110)) bởi @2013xile
- **[undefined]** Đồng bộ tài liệu về biến môi trường và chế độ cụm đã dịch với các bản cập nhật tiếng Trung mới nhất. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) bởi @mytharcher
- **[AI employees]** Sau khi chọn khối nhân viên AI, điền tệp đính kèm biểu mẫu vào khu vực tải lên ([#9127](https://github.com/nocobase/nocobase/pull/9127)) bởi @cgyrock
- **[Workflow: Manual node]** Sử dụng `simplePagination` trên các collection liên quan đến tác vụ workflow để cải thiện hiệu suất danh sách ([#9117](https://github.com/nocobase/nocobase/pull/9117)) bởi @mytharcher
- **[Workflow: Approval]** Sử dụng `simplePagination` trên collection `approvals` và `approvalRecords` để cải thiện hiệu suất danh sách bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi các tùy chọn tùy chọn của trường chọn đơn trong cấu hình quy tắc trường bị trống ([#9119](https://github.com/nocobase/nocobase/pull/9119)) bởi @jiannx
  - Đã sửa lỗi cài đặt giá trị mặc định không chính xác cho bảng con trong biểu mẫu. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) bởi @gchust
- **[Notification: In-app message]** Sửa lỗi thành phần chọn người nhận hoạt động không chính xác ([#9123](https://github.com/nocobase/nocobase/pull/9123)) bởi @mytharcher
- **[AI employees]** Sửa lỗi cài đặt baseURL của dịch vụ LLM google-gen-ai không có hiệu lực ([#9107](https://github.com/nocobase/nocobase/pull/9107)) bởi @cgyrock
- **[Email manager]** Xóa lời nhắc đóng biểu mẫu sau khi gửi email thành công bởi @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/en/blog/v2.1.0-beta.14)

*Ngày phát hành: 2026-04-20*

### 🎉 Tính năng mới

- **[Calendar]** khối lịch v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) bởi @jiannx
- **[AI employees]** Cải thiện khả năng phân tích tài liệu đã tải lên của nhân viên AI ([#9126](https://github.com/nocobase/nocobase/pull/9126)) bởi @cgyrock
- **[Block: Tree]** Thêm khối bộ lọc cây ([#9016](https://github.com/nocobase/nocobase/pull/9016)) bởi @jiannx
- **[Email manager]** gmail hỗ trợ gửi email với bí danh bởi @jiannx

### 🚀 Cải tiến

- **[undefined]**

  - Thêm bản dịch tiếng Ả Rập cho phần hướng dẫn và điều hướng ([#9141](https://github.com/nocobase/nocobase/pull/9141)) bởi @saraTabbane
  - Đồng bộ tài liệu về biến môi trường và chế độ cụm đã dịch với các bản cập nhật tiếng Trung mới nhất. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) bởi @mytharcher
  - Thêm bản dịch tiếng Ả Rập cho trang chủ tài liệu ([#9043](https://github.com/nocobase/nocobase/pull/9043)) bởi @gaston98765
  - Đã thêm tính nhất quán của Mục lục (TOC) trên các README đã được bản địa hóa ([#9038](https://github.com/nocobase/nocobase/pull/9038)) bởi @gaston98765
  - Thêm Mục lục vào README tiếng Pháp ([#9037](https://github.com/nocobase/nocobase/pull/9037)) bởi @saraTabbane
  - Tài liệu: thêm bản dịch tiếng Ả Rập cho các trang giới thiệu bắt đầu ([#9044](https://github.com/nocobase/nocobase/pull/9044)) bởi @gaston98765
- **[logger]** Thêm thông tin `referer` vào nhật ký yêu cầu ([#9110](https://github.com/nocobase/nocobase/pull/9110)) bởi @2013xile
- **[client]** thêm công tắc xác minh bắt buộc biểu mẫu ([#9060](https://github.com/nocobase/nocobase/pull/9060)) bởi @jiannx
- **[database]** Tối ưu hóa truy vấn đếm repository bằng cách chỉ bật distinct khi có includes. ([#9094](https://github.com/nocobase/nocobase/pull/9094)) bởi @mytharcher
- **[Departments]** Hiển thị trường khóa ngoại `parentId` của collection phòng ban trong giao diện người dùng ([#9130](https://github.com/nocobase/nocobase/pull/9130)) bởi @2013xile
- **[AI employees]** Sau khi chọn khối nhân viên AI, điền tệp đính kèm biểu mẫu vào khu vực tải lên ([#9127](https://github.com/nocobase/nocobase/pull/9127)) bởi @cgyrock
- **[Workflow: Manual node]** Sử dụng `simplePagination` trên các collection liên quan đến tác vụ workflow để cải thiện hiệu suất danh sách ([#9117](https://github.com/nocobase/nocobase/pull/9117)) bởi @mytharcher
- **[Workflow: Approval]** Sử dụng `simplePagination` trên collection `approvals` và `approvalRecords` để cải thiện hiệu suất danh sách bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi cập nhật giá trị bảng con thông qua gán trường dẫn đến nhiễm bẩn dữ liệu. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) bởi @gchust
  - Sửa lỗi chiều cao và chiều rộng quá lớn của các tab trong chế độ cấu hình trang ([#9144](https://github.com/nocobase/nocobase/pull/9144)) bởi @zhangzhonghe
  - Đã sửa lỗi thành phần trường liên kết không chính xác trong cài đặt giá trị trường. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) bởi @gchust
  - Đã sửa lỗi các tùy chọn tùy chọn của trường chọn đơn trong cấu hình quy tắc trường bị trống ([#9119](https://github.com/nocobase/nocobase/pull/9119)) bởi @jiannx
  - Đã sửa lỗi cài đặt giá trị mặc định không chính xác cho bảng con trong biểu mẫu. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) bởi @gchust
  - sửa lỗi bảng con thêm trường nhiều-nhiều bị lỗi ([#9070](https://github.com/nocobase/nocobase/pull/9070)) bởi @jiannx
  - Đã sửa lỗi cửa sổ bật lên chọn bản ghi từ nút chọn của bảng con không thể phân giải chính xác các giá trị biến mục cha. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) bởi @gchust
- **[data-source-manager]**

  - Đã sửa lỗi trường tuần tự có thể bị thay đổi thành chuỗi sau khi đồng bộ cơ sở dữ liệu ([#9143](https://github.com/nocobase/nocobase/pull/9143)) bởi @2013xile
  - Đã sửa lỗi đồng bộ trường collection tệp xóa trường `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) bởi @2013xile
- **[database]** Đã sửa lỗi rủi ro SQL injection trong tải nhanh đệ quy cây và khởi tạo sắp xếp phạm vi ([#9133](https://github.com/nocobase/nocobase/pull/9133)) bởi @2013xile
- **[undefined]** Sửa lỗi hiển thị trong khối tài nguyên tùy chỉnh khi tài nguyên không tồn tại ([#9095](https://github.com/nocobase/nocobase/pull/9095)) bởi @Molunerfinn
- **[utils]** Thêm kiểm soát bảo mật cho việc gửi yêu cầu HTTP máy chủ, để tránh SSRF có thể xảy ra ([#9079](https://github.com/nocobase/nocobase/pull/9079)) bởi @mytharcher
  Tham khảo: [Biến môi trường](https://docs.nocobase.com/get-started/installation/env)
- **[flow-engine]**

  - Đã sửa lỗi không thể thêm trường nhiều-một từ nguồn dữ liệu bên ngoài trong khối bảng ([#9068](https://github.com/nocobase/nocobase/pull/9068)) bởi @jiannx
  - Sửa lỗi observer ngẫu nhiên khi khả năng hiển thị trang thay đổi ([#9067](https://github.com/nocobase/nocobase/pull/9067)) bởi @zhangzhonghe
- **[Data source: Main]** Đã sửa lỗi đồng bộ trường từ cơ sở dữ liệu cho các view được kết nối khi tên collection khác với tên view trong cơ sở dữ liệu ([#9155](https://github.com/nocobase/nocobase/pull/9155)) bởi @2013xile
- **[File manager]** Trả về null khi thiếu URL xem trước ([#9104](https://github.com/nocobase/nocobase/pull/9104)) bởi @gaston98765
- **[Departments]**

  - Đã sửa lỗi thiếu hoặc giá trị phòng ban chính cũ sau khi lưu phòng ban người dùng ([#9156](https://github.com/nocobase/nocobase/pull/9156)) bởi @2013xile
  - Đã sửa lỗi danh sách phòng ban trong quản lý phòng ban không tuân theo thứ tự trường `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) bởi @2013xile
- **[Workflow: JavaScript]** Sửa lỗi bảo mật của tập lệnh thực thi ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher
- **[Collection: SQL]** Đã sửa lỗi thiếu xác thực SQL khi cập nhật collection SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) bởi @2013xile
- **[Data visualization]** Đã sửa lỗi sắp xếp khối biểu đồ để sử dụng các thước đo và chiều đã được đặt bí danh trong các truy vấn tổng hợp ([#9131](https://github.com/nocobase/nocobase/pull/9131)) bởi @2013xile
- **[Notification: In-app message]** Sửa lỗi thành phần chọn người nhận hoạt động không chính xác ([#9123](https://github.com/nocobase/nocobase/pull/9123)) bởi @mytharcher
- **[AI employees]** Sửa lỗi cài đặt baseURL của dịch vụ LLM google-gen-ai không có hiệu lực ([#9107](https://github.com/nocobase/nocobase/pull/9107)) bởi @cgyrock
- **[Notification manager]** Tối ưu hóa hiệu suất gửi thông báo trong ứng dụng trong các kịch bản workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) bởi @mytharcher
- **[Access control]** Đã sửa lỗi xóa giá trị quan hệ bằng mảng rỗng có thể thất bại dưới ACL ([#9059](https://github.com/nocobase/nocobase/pull/9059)) bởi @2013xile
- **[Collection field: Code]** Sửa giao diện người dùng của các trường mã ([#9061](https://github.com/nocobase/nocobase/pull/9061)) bởi @2013xile
- **[Email manager]** Xóa lời nhắc đóng biểu mẫu sau khi gửi email thành công bởi @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/en/blog/v2.1.0-alpha.20)

*Ngày phát hành: 2026-04-20*

### 🎉 Tính năng mới

- **[Workflow]** Thêm trường nhật ký cho các công việc, để hiển thị nội dung nhật ký của một số nút để gỡ lỗi ([#9165](https://github.com/nocobase/nocobase/pull/9165)) bởi @mytharcher

### 🚀 Cải tiến

- **[undefined]** Thêm bản dịch tiếng Ả Rập cho phần hướng dẫn và điều hướng ([#9141](https://github.com/nocobase/nocobase/pull/9141)) bởi @saraTabbane
- **[cli]** Cải thiện đầu ra trợ giúp CLI API được tạo và nhóm lệnh ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi cập nhật giá trị bảng con thông qua gán trường dẫn đến nhiễm bẩn dữ liệu. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) bởi @gchust
- **[data-source-manager]** Đã sửa lỗi trường tuần tự có thể bị thay đổi thành chuỗi sau khi đồng bộ cơ sở dữ liệu ([#9143](https://github.com/nocobase/nocobase/pull/9143)) bởi @2013xile
- **[cli]** Đã sửa lỗi đăng nhập OAuth CLI trên Windows do URL ủy quyền quá dài ([#9159](https://github.com/nocobase/nocobase/pull/9159)) bởi @2013xile
- **[Departments]** Đã sửa lỗi thiếu hoặc giá trị phòng ban chính cũ sau khi lưu phòng ban người dùng ([#9156](https://github.com/nocobase/nocobase/pull/9156)) bởi @2013xile
- **[Data source: Main]** Đã sửa lỗi đồng bộ trường từ cơ sở dữ liệu cho các view được kết nối khi tên collection khác với tên view trong cơ sở dữ liệu ([#9155](https://github.com/nocobase/nocobase/pull/9155)) bởi @2013xile
- **[File manager]** Trả về null khi thiếu URL xem trước ([#9104](https://github.com/nocobase/nocobase/pull/9104)) bởi @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/en/blog/v2.1.0-alpha.19)

*Ngày phát hành: 2026-04-19*

### 🎉 Tính năng mới

- **[cli-v1]** giải quyết đường dẫn lưu trữ từ env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) bởi @chenos
- **[Calendar]** khối lịch v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) bởi @jiannx

### 🚀 Cải tiến

- **[cli]** Cải thiện dự phòng trợ giúp `nb api` và thống nhất thông báo cảnh báo cho các lỗi khởi động runtime ([#9153](https://github.com/nocobase/nocobase/pull/9153)) bởi @2013xile
- **[Departments]** Hiển thị trường khóa ngoại `parentId` của collection phòng ban trong giao diện người dùng ([#9130](https://github.com/nocobase/nocobase/pull/9130)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi chiều cao và chiều rộng quá lớn của các tab trong chế độ cấu hình trang ([#9144](https://github.com/nocobase/nocobase/pull/9144)) bởi @zhangzhonghe
- **[database]** Đã sửa lỗi rủi ro SQL injection trong tải nhanh đệ quy cây và khởi tạo sắp xếp phạm vi ([#9133](https://github.com/nocobase/nocobase/pull/9133)) bởi @2013xile
- **[Workflow: JavaScript]** Sửa lỗi bảo mật của tập lệnh thực thi ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher
- **[IdP: OAuth]** Đã sửa lỗi đăng ký client OAuth và làm mới token thất bại sau khi khởi động lại dịch vụ ([#9139](https://github.com/nocobase/nocobase/pull/9139)) bởi @2013xile
- **[Departments]** Đã sửa lỗi danh sách phòng ban trong quản lý phòng ban không tuân theo thứ tự trường `sort` ([#9150](https://github.com/nocobase/nocobase/pull/9150)) bởi @2013xile
- **[Collection: SQL]** Đã sửa lỗi thiếu xác thực SQL khi cập nhật collection SQL ([#9134](https://github.com/nocobase/nocobase/pull/9134)) bởi @2013xile
- **[Data visualization]** Đã sửa lỗi sắp xếp khối biểu đồ để sử dụng các thước đo và chiều đã được đặt bí danh trong các truy vấn tổng hợp ([#9131](https://github.com/nocobase/nocobase/pull/9131)) bởi @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/en/blog/v2.1.0-alpha.18)

*Ngày phát hành: 2026-04-17*

### 🐛 Sửa lỗi

- **[data-source-manager]** Đã sửa lỗi đồng bộ trường collection tệp xóa trường `preview` ([#9129](https://github.com/nocobase/nocobase/pull/9129)) bởi @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/en/blog/v2.1.0-alpha.17)

*Ngày phát hành: 2026-04-17*

### 🎉 Tính năng mới

- **[cli]** tái cấu trúc NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) bởi @chenos
- **[AI employees]** Cải thiện khả năng phân tích tài liệu đã tải lên của nhân viên AI ([#9126](https://github.com/nocobase/nocobase/pull/9126)) bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**

  - Đồng bộ tài liệu về biến môi trường và chế độ cụm đã dịch với các bản cập nhật tiếng Trung mới nhất. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) bởi @mytharcher
  - Tài liệu: thêm bản dịch tiếng Ả Rập cho các trang giới thiệu bắt đầu ([#9044](https://github.com/nocobase/nocobase/pull/9044)) bởi @gaston98765
  - Thêm bản dịch tiếng Ả Rập cho trang chủ tài liệu ([#9043](https://github.com/nocobase/nocobase/pull/9043)) bởi @gaston98765
- **[logger]** Thêm thông tin `referer` vào nhật ký yêu cầu ([#9110](https://github.com/nocobase/nocobase/pull/9110)) bởi @2013xile
- **[client]** thêm công tắc xác minh bắt buộc biểu mẫu ([#9060](https://github.com/nocobase/nocobase/pull/9060)) bởi @jiannx
- **[Workflow: Manual node]** Sử dụng `simplePagination` trên các collection liên quan đến tác vụ workflow để cải thiện hiệu suất danh sách ([#9117](https://github.com/nocobase/nocobase/pull/9117)) bởi @mytharcher
- **[AI employees]** Sau khi chọn khối nhân viên AI, điền tệp đính kèm biểu mẫu vào khu vực tải lên ([#9127](https://github.com/nocobase/nocobase/pull/9127)) bởi @cgyrock
- **[Workflow: Approval]** Sử dụng `simplePagination` trên collection `approvals` và `approvalRecords` để cải thiện hiệu suất danh sách bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi các tùy chọn tùy chọn của trường chọn đơn trong cấu hình quy tắc trường bị trống ([#9119](https://github.com/nocobase/nocobase/pull/9119)) bởi @jiannx
  - Đã sửa lỗi thành phần trường liên kết không chính xác trong cài đặt giá trị trường. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) bởi @gchust
  - Đã sửa lỗi cài đặt giá trị mặc định không chính xác cho bảng con trong biểu mẫu. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) bởi @gchust
- **[utils]** Thêm kiểm soát bảo mật cho việc gửi yêu cầu HTTP máy chủ, để tránh SSRF có thể xảy ra ([#9079](https://github.com/nocobase/nocobase/pull/9079)) bởi @mytharcher
  Tham khảo: [Biến môi trường](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** Sửa lỗi xác thực của các nút workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) bởi @mytharcher
- **[Notification: In-app message]** Sửa lỗi thành phần chọn người nhận hoạt động không chính xác ([#9123](https://github.com/nocobase/nocobase/pull/9123)) bởi @mytharcher
- **[IdP: OAuth]** Đã sửa lỗi truy cập OAuth cho các yêu cầu API thông thường ([#9120](https://github.com/nocobase/nocobase/pull/9120)) bởi @2013xile
- **[AI employees]**

  - Đã sửa lỗi sắp xếp truy vấn tổng hợp bị ACL loại bỏ ([#9099](https://github.com/nocobase/nocobase/pull/9099)) bởi @2013xile
  - Sửa lỗi cài đặt baseURL của dịch vụ LLM google-gen-ai không có hiệu lực ([#9107](https://github.com/nocobase/nocobase/pull/9107)) bởi @cgyrock
- **[Email manager]** Xóa lời nhắc đóng biểu mẫu sau khi gửi email thành công bởi @jiannx
