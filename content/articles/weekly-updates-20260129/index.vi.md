---
title: "Cập nhật hàng tuần｜Hỗ trợ dán tệp trong trò chuyện AI"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 22 đến ngày 28 tháng 1 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/en/blog/v1.9.40)

*Ngày phát hành: 2026-01-25*

### 🚀 Cải tiến

- **[Trình xem trước tệp Office]** Thêm nhiều loại tệp hơn để xem trước trên Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh
  - Sửa lỗi thông báo xác thực bắt buộc bị trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh
- **[database]**

  - Sửa lỗi khi lọc với toán tử `empty` sau khi tải lại một bộ sưu tập ([#8496](https://github.com/nocobase/nocobase/pull/8496)) bởi @2013xile
  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos
- **[Trình quản lý tệp]** Sửa lỗi tên tệp lấy từ nội dung yêu cầu trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân theo ràng buộc `onDelete: 'restrict'` của trường liên kết ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile
- **[Khối: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe
- **[Luồng công việc: Webhook]** Sửa lỗi thiếu dữ liệu nội dung khi phân tích nội dung chưa được cấu hình bởi @mytharcher
- **[In mẫu]** Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi đồng thời khiến việc thực thi bị tiếp tục lại nhiều lần bởi @mytharcher
  - Sửa lỗi trả phê duyệt về nút trước đó nhưng lại quay về điểm bắt đầu bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi tiềm ẩn gây treo tiến trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/en/blog/v2.0.0-beta.17)

*Ngày phát hành: 2026-01-29*

### 🐛 Sửa lỗi

- **[client]** Sửa các lỗi đã biết liên quan đến lọc ([#8514](https://github.com/nocobase/nocobase/pull/8514)) bởi @zhangzhonghe
- **[Nhân viên AI]** Sửa lỗi hệ thống không thể khởi động sau khi xây dựng ([#8523](https://github.com/nocobase/nocobase/pull/8523)) bởi @cgyrock
- **[AI: Cơ sở kiến thức]** Sửa lỗi hệ thống không thể khởi động sau khi xây dựng bởi @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/en/blog/v2.0.0-beta.16)

*Ngày phát hành: 2026-01-27*

### 🎉 Tính năng mới

- **[client]** thêm thành phần trường bảng con (chỉnh sửa popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) bởi @katherinehhh
- **[Luồng công việc]** Thêm API để di chuyển nút ([#8507](https://github.com/nocobase/nocobase/pull/8507)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]**

  - ngăn toàn bộ bảng render lại khi cập nhật một ô ([#8349](https://github.com/nocobase/nocobase/pull/8349)) bởi @katherinehhh
  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8458](https://github.com/nocobase/nocobase/pull/8458)) bởi @katherinehhh
- **[Trình quản lý tệp]** Thêm trình xem trước có thể mở rộng cho trình quản lý tệp ([#8501](https://github.com/nocobase/nocobase/pull/8501)) bởi @mytharcher
- **[Luồng công việc]** Thay đổi đường dẫn route của các trang con luồng công việc, để tất cả các trang luồng công việc nằm dưới tiền tố `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi thời gian bị trùng lặp trong giá trị DateTime của bộ lọc ([#8506](https://github.com/nocobase/nocobase/pull/8506)) bởi @zhangzhonghe
  - Sửa lỗi ngăn việc sử dụng biến biểu mẫu để gán giá trị trong quy tắc liên kết cho các trường biểu mẫu con nhiều-nhiều nhiều cấp. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) bởi @gchust
  - Sửa lỗi dữ liệu không làm mới sau khi thay đổi qua nhiều popup nhiều cấp và qua nhiều khối. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) bởi @gchust
  - sửa lỗi dữ liệu chi tiết con ở chế độ chỉ đọc không thể hiển thị chính xác trong biểu mẫu chỉnh sửa ([#8469](https://github.com/nocobase/nocobase/pull/8469)) bởi @katherinehhh
  - sửa logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh
  - sửa tham số bộ lọc không chính xác cho trường Chọn liên kết trong bảng con có thể chỉnh sửa ([#8335](https://github.com/nocobase/nocobase/pull/8335)) bởi @katherinehhh
- **[flow-engine]** sửa lỗi FilterByTK khi filterTargetKey là một mảng một phần tử trong nguồn dữ liệu bên ngoài ([#8522](https://github.com/nocobase/nocobase/pull/8522)) bởi @katherinehhh
- **[Nhân viên AI]** sửa các vấn đề về cấu hình trường có thể chọn không nhất quán giữa mô hình hóa AI và quản lý nguồn dữ liệu ([#8488](https://github.com/nocobase/nocobase/pull/8488)) bởi @cgyrock
- **[Trình quản lý email]** nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải tệp đính kèm thất bại bởi @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/en/blog/v2.0.0-beta.15)

*Ngày phát hành: 2026-01-25*

### 🚀 Cải tiến

- **[Trình xem trước tệp Office]** Thêm nhiều loại tệp hơn để xem trước trên Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi khi lọc với toán tử `empty` sau khi tải lại một bộ sưu tập ([#8496](https://github.com/nocobase/nocobase/pull/8496)) bởi @2013xile
- **[In mẫu]** Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx
- **[Luồng công việc: Phê duyệt]** Sửa lỗi lỗi xảy ra trong popup bản ghi phê duyệt 1.x bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi tiềm ẩn gây treo tiến trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/en/blog/v2.0.0-beta.14)

*Ngày phát hành: 2026-01-23*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Hỗ trợ dán tệp trong AI chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**

  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8473](https://github.com/nocobase/nocobase/pull/8473)) bởi @katherinehhh
  - Cải thiện các nút tải lên và chỉnh sửa cho trường tệp đính kèm trong bảng con để hướng dẫn người dùng nhấp tải lên tốt hơn. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) bởi @katherinehhh
- **[flow-engine]** Cải thiện ctx.libs trong runjs để hỗ trợ tải theo yêu cầu và thêm các thư viện được xác định trước: lodash, math và formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) bởi @gchust
- **[Trình xử lý lỗi]** Làm sạch các lỗi tham chiếu SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) bởi @2013xile
- **[Luồng công việc: Phê duyệt]** Triển khai kiểm soát truy cập cho các API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi popover của trình soạn thảo văn bản giàu bị che khuất ([#8443](https://github.com/nocobase/nocobase/pull/8443)) bởi @zhangzhonghe
  - Sửa lỗi thời gian bị trùng lặp trong giá trị DateTime của bộ lọc ([#8484](https://github.com/nocobase/nocobase/pull/8484)) bởi @zhangzhonghe
  - sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh
  - Sửa lỗi thông báo xác thực bắt buộc bị trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh
  - lọc danh sách để loại bỏ trùng lặp ([#8431](https://github.com/nocobase/nocobase/pull/8431)) bởi @jiannx
  - Sửa lỗi menu cấu hình không hiển thị trong Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) bởi @zhangzhonghe
- **[database]**

  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos
- **[server]** Sửa phiên bản của `mathjs` trong các phụ thuộc chung ([#8475](https://github.com/nocobase/nocobase/pull/8475)) bởi @mytharcher
- **[flow-engine]** Sửa lỗi đóng một popup nhúng gây ra lỗi sau khi mở liên tiếp popup cấu hình quy tắc liên kết và popup cấu hình luồng sự kiện. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) bởi @gchust
- **[Nguồn dữ liệu: Chính]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân theo ràng buộc `onDelete: 'restrict'` của trường liên kết ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi luồng công việc được kích hoạt bởi nhập bất đồng bộ bị trì hoãn thực thi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) bởi @mytharcher
- **[Khối: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe
- **[Mẫu UI]** Sửa lỗi khối mẫu tham chiếu không thể đặt phạm vi dữ liệu thông qua cài đặt luồng sự kiện. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) bởi @gchust
- **[Trình quản lý tệp]** Sửa lỗi tên tệp lấy từ nội dung yêu cầu trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi luồng công việc được kích hoạt bởi nhập bất đồng bộ bị trì hoãn thực thi bởi @mytharcher
- **[Luồng công việc: Webhook]** Sửa lỗi thiếu dữ liệu nội dung khi phân tích nội dung chưa được cấu hình bởi @mytharcher
- **[In mẫu]** xóa các nút chân trang khỏi cấu hình mẫu in bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi trả phê duyệt về nút trước đó nhưng lại quay về điểm bắt đầu bởi @mytharcher
  - Sửa lỗi đồng thời khiến việc thực thi bị tiếp tục lại nhiều lần bởi @mytharcher
  - Sửa lỗi các trường không hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/en/blog/v2.0.0-alpha.68)

*Ngày phát hành: 2026-01-27*

### 🎉 Tính năng mới

- **[Luồng công việc]** Thêm API để di chuyển nút ([#8507](https://github.com/nocobase/nocobase/pull/8507)) bởi @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/en/blog/v2.0.0-alpha.67)

*Ngày phát hành: 2026-01-26*

### 🎉 Tính năng mới

- **[server]** Tái cấu trúc app supervisor để hỗ trợ quản lý nhiều ứng dụng trên các tình huống khác nhau ([#8043](https://github.com/nocobase/nocobase/pull/8043)) bởi @2013xile
- **[client]** thêm thành phần trường bảng con (chỉnh sửa popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) bởi @katherinehhh
- **[Nhân viên AI]** Hỗ trợ dán tệp trong AI chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**

  - Cải thiện các nút tải lên và chỉnh sửa cho trường tệp đính kèm trong bảng con để hướng dẫn người dùng nhấp tải lên tốt hơn. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) bởi @katherinehhh
  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8473](https://github.com/nocobase/nocobase/pull/8473)) bởi @katherinehhh
- **[flow-engine]** Cải thiện ctx.libs trong runjs để hỗ trợ tải theo yêu cầu và thêm các thư viện được xác định trước: lodash, math và formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) bởi @gchust
- **[server]** Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) bởi @2013xile
- **[Trình quản lý tệp]** Thêm trình xem trước có thể mở rộng cho trình quản lý tệp ([#8501](https://github.com/nocobase/nocobase/pull/8501)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Thêm nhiều loại tệp hơn để xem trước trên Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) bởi @mytharcher
- **[Trình xử lý lỗi]** Làm sạch các lỗi tham chiếu SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) bởi @2013xile
- **[Hành động: Xuất bản ghi]** Cải thiện phạm vi dữ liệu hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên ([#8442](https://github.com/nocobase/nocobase/pull/8442)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]** Cải thiện phạm vi dữ liệu hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]** Triển khai kiểm soát truy cập cho các API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi thời gian bị trùng lặp trong giá trị DateTime của bộ lọc ([#8484](https://github.com/nocobase/nocobase/pull/8484)) bởi @zhangzhonghe
  - sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh
  - Sửa lỗi popover của trình soạn thảo văn bản giàu bị che khuất ([#8443](https://github.com/nocobase/nocobase/pull/8443)) bởi @zhangzhonghe
  - lọc danh sách để loại bỏ trùng lặp ([#8431](https://github.com/nocobase/nocobase/pull/8431)) bởi @jiannx
  - Sửa lỗi thông báo xác thực bắt buộc bị trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh
  - Sửa lỗi menu cấu hình không hiển thị trong Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) bởi @zhangzhonghe
  - sửa lỗi dữ liệu chi tiết con ở chế độ chỉ đọc không thể hiển thị chính xác trong biểu mẫu chỉnh sửa ([#8469](https://github.com/nocobase/nocobase/pull/8469)) bởi @katherinehhh
  - Sửa lỗi popup "Biến tùy chỉnh" bị che khuất ([#8463](https://github.com/nocobase/nocobase/pull/8463)) bởi @zhangzhonghe
  - sửa lỗi cài đặt sắp xếp nhóm trường bộ sưu tập không có hiệu lực. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) bởi @katherinehhh
  - Sửa lỗi nút "Cài đặt cột" của bảng không hoạt động ([#8441](https://github.com/nocobase/nocobase/pull/8441)) bởi @zhangzhonghe
  - Sửa lỗi popup chọn của trường liên kết tệp có z-index không chính xác và cấu hình popup không thể lưu chính xác. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) bởi @gchust
  - sửa lỗi khi chỉnh sửa bộ sưu tập trong giao diện đồ họa ([#8451](https://github.com/nocobase/nocobase/pull/8451)) bởi @katherinehhh
- **[database]**

  - Sửa lỗi khi lọc với toán tử `empty` sau khi tải lại một bộ sưu tập ([#8496](https://github.com/nocobase/nocobase/pull/8496)) bởi @2013xile
  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos
- **[server]** Sửa phiên bản của `mathjs` trong các phụ thuộc chung ([#8475](https://github.com/nocobase/nocobase/pull/8475)) bởi @mytharcher
- **[flow-engine]**

  - Sửa lỗi đóng một popup nhúng gây ra lỗi sau khi mở liên tiếp popup cấu hình quy tắc liên kết và popup cấu hình luồng sự kiện. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) bởi @gchust
  - Sửa lỗi nhấp liên tục vào menu cấu hình có thể mở nhiều popup cấu hình. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) bởi @gchust
  - Sửa lỗi các biến trong tham số mã runjs được giải quyết trước khi thực thi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) bởi @gchust
  - Sửa lỗi không thể chọn biến popup trong popup tạo nhanh của bộ chọn dữ liệu. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) bởi @gchust
- **[Nhân viên AI]** sửa các vấn đề về cấu hình trường có thể chọn không nhất quán giữa mô hình hóa AI và quản lý nguồn dữ liệu ([#8488](https://github.com/nocobase/nocobase/pull/8488)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân theo ràng buộc `onDelete: 'restrict'` của trường liên kết ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile
- **[Khối: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi luồng công việc được kích hoạt bởi nhập bất đồng bộ bị trì hoãn thực thi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) bởi @mytharcher
- **[Trình quản lý tệp]** Sửa lỗi tên tệp lấy từ nội dung yêu cầu trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher
- **[Mẫu UI]** Sửa lỗi khối mẫu tham chiếu không thể đặt phạm vi dữ liệu thông qua cài đặt luồng sự kiện. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) bởi @gchust
- **[Di động (không dùng nữa)]** Plugin di động không còn được dùng nữa (được thay thế bằng plugin ui-layout từ phiên bản 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) bởi @chenos
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi luồng công việc được kích hoạt bởi nhập bất đồng bộ bị trì hoãn thực thi bởi @mytharcher
- **[Luồng công việc: Webhook]** Sửa lỗi thiếu dữ liệu nội dung khi phân tích nội dung chưa được cấu hình bởi @mytharcher
- **[In mẫu]**

  - Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx
  - xóa các nút chân trang khỏi cấu hình mẫu in bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi các trường không hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe
  - Sửa lỗi trả phê duyệt về nút trước đó nhưng lại quay về điểm bắt đầu bởi @mytharcher
  - Sửa lỗi đồng thời khiến việc thực thi bị tiếp tục lại nhiều lần bởi @mytharcher
  - Sửa lỗi lỗi xảy ra trong popup bản ghi phê duyệt 1.x bởi @mytharcher
- **[Trình quản lý email]**

  - Sửa lỗi popup cấu hình email bị che khuất bởi @zhangzhonghe
  - Sửa lỗi email trong cùng một hộp thư giữa nhiều người dùng và tối ưu hóa hiệu suất bởi @jiannx
- **[Trình quản lý di chuyển]** Sửa lỗi tiềm ẩn gây treo tiến trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock
