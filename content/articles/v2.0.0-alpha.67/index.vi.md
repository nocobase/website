---
title: "NocoBase v2.0.0-alpha.67: thêm thành phần trường bảng con (chỉnh sửa popup)"
description: "Ghi chú phát hành của v2.0.0-alpha.67"
---

### 🎉 Tính năng mới

- **[server]** Tái cấu trúc bộ giám sát ứng dụng để hỗ trợ quản lý đa ứng dụng trên các tình huống khác nhau ([#8043](https://github.com/nocobase/nocobase/pull/8043)) bởi @2013xile

- **[client]** Thêm thành phần trường bảng con (chỉnh sửa popup) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) bởi @katherinehhh

- **[AI employees]** Hỗ trợ dán tệp trong chat AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**
  - Cải thiện các nút tải lên và chỉnh sửa cho trường tệp đính kèm trong bảng con để hướng dẫn người dùng nhấp tải lên tốt hơn. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) bởi @katherinehhh

  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8473](https://github.com/nocobase/nocobase/pull/8473)) bởi @katherinehhh

  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8458](https://github.com/nocobase/nocobase/pull/8458)) bởi @katherinehhh

- **[flow-engine]** Cải thiện ctx.libs trong runjs để hỗ trợ tải theo nhu cầu và thêm các thư viện được xác định trước: lodash, math và formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) bởi @gchust

- **[server]** Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) bởi @2013xile

- **[File manager]** Thêm trình xem trước có thể mở rộng cho trình quản lý tệp ([#8501](https://github.com/nocobase/nocobase/pull/8501)) bởi @mytharcher

- **[Office File Previewer]** Thêm nhiều loại tệp hơn để xem trước trên Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) bởi @mytharcher

- **[Error handler]** Làm sạch lỗi tham chiếu SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) bởi @2013xile

- **[Action: Export records]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên ([#8442](https://github.com/nocobase/nocobase/pull/8442)) bởi @katherinehhh

- **[Action: Export records Pro]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh

- **[Workflow: Approval]** Triển khai kiểm soát truy cập cho các API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi thời gian trùng lặp trong giá trị DateTime của bộ lọc ([#8506](https://github.com/nocobase/nocobase/pull/8506)) bởi @zhangzhonghe

  - Sửa lỗi thời gian trùng lặp trong giá trị DateTime của bộ lọc ([#8484](https://github.com/nocobase/nocobase/pull/8484)) bởi @zhangzhonghe

  - Sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh

  - Sửa lỗi popover của trình soạn thảo văn bản giàu bị che khuất ([#8443](https://github.com/nocobase/nocobase/pull/8443)) bởi @zhangzhonghe

  - Lọc danh sách để loại bỏ trùng lặp ([#8431](https://github.com/nocobase/nocobase/pull/8431)) bởi @jiannx

  - Sửa lỗi thông báo xác thực bắt buộc trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh

  - Sửa lỗi menu cấu hình không hiển thị trong Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) bởi @zhangzhonghe

  - Sửa lỗi dữ liệu chi tiết con ở chế độ chỉ đọc không thể hiển thị chính xác trong biểu mẫu chỉnh sửa ([#8469](https://github.com/nocobase/nocobase/pull/8469)) bởi @katherinehhh

  - Sửa lỗi popup "Biến tùy chỉnh" bị che khuất ([#8463](https://github.com/nocobase/nocobase/pull/8463)) bởi @zhangzhonghe

  - Sửa lỗi cài đặt sắp xếp nhóm trường collection không có hiệu lực. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) bởi @katherinehhh

  - Sửa lỗi nút "Cài đặt cột" của bảng không hoạt động ([#8441](https://github.com/nocobase/nocobase/pull/8441)) bởi @zhangzhonghe

  - Sửa lỗi popup chọn của trường liên kết tệp có z-index không chính xác và cấu hình popup không thể lưu chính xác. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) bởi @gchust

  - Sửa lỗi khi chỉnh sửa collection trong giao diện đồ họa ([#8451](https://github.com/nocobase/nocobase/pull/8451)) bởi @katherinehhh

- **[database]**
  - Sửa lỗi khi lọc với toán tử `empty` sau khi tải lại collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) bởi @2013xile

  - Sửa lỗi: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos

  - Sửa lỗi: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos

- **[server]** Sửa phiên bản của `mathjs` trong các phụ thuộc chung ([#8475](https://github.com/nocobase/nocobase/pull/8475)) bởi @mytharcher

- **[flow-engine]**
  - Sửa lỗi đóng popup nhúng gây ra lỗi sau khi mở liên tiếp popup cấu hình quy tắc liên kết và cấu hình luồng sự kiện. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) bởi @gchust

  - Sửa lỗi nhấp liên tục vào menu cấu hình có thể mở nhiều popup cấu hình. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) bởi @gchust

  - Sửa lỗi các biến trong tham số mã runjs được giải quyết trước khi thực thi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) bởi @gchust

  - Sửa lỗi không thể chọn biến popup trong popup tạo nhanh của bộ chọn dữ liệu. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) bởi @gchust

- **[AI employees]** Sửa lỗi cấu hình trường có thể chọn không nhất quán giữa mô hình hóa AI và quản lý nguồn dữ liệu ([#8488](https://github.com/nocobase/nocobase/pull/8488)) bởi @cgyrock

- **[Data source: Main]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân thủ ràng buộc trường liên kết `onDelete: 'restrict'` ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile

- **[Block: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe

- **[Async task manager]** Sửa lỗi workflow được kích hoạt bởi import không đồng bộ bị trì hoãn thực thi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) bởi @mytharcher

- **[File manager]** Sửa lỗi tên tệp lấy từ nội dung yêu cầu trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher

- **[UI templates]** Sửa lỗi khối mẫu tham chiếu không thể đặt phạm vi dữ liệu thông qua cài đặt luồng sự kiện. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) bởi @gchust

- **[Mobile (deprecated)]]** Plugin di động không còn được hỗ trợ (được thay thế bởi plugin ui-layout từ phiên bản 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) bởi @chenos

- **[Action: Import records Pro]** Sửa lỗi workflow được kích hoạt bởi import không đồng bộ bị trì hoãn thực thi bởi @mytharcher

- **[Workflow: Webhook]** Sửa lỗi dữ liệu nội dung bị thiếu khi phân tích nội dung không được cấu hình bởi @mytharcher

- **[Template print]**
  - Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx

  - Xóa các nút chân trang khỏi cấu hình mẫu in bởi @katherinehhh

- **[Workflow: Approval]**
  - Sửa lỗi các trường không được hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe

  - Sửa lỗi trả lại phê duyệt cho nút trước đó nhưng lại trả về điểm bắt đầu bởi @mytharcher

  - Sửa lỗi đồng thời khiến việc thực thi được tiếp tục lặp lại bởi @mytharcher

  - Sửa lỗi lỗi được ném ra trong popup bản ghi phê duyệt 1.x bởi @mytharcher

- **[Email manager]**
  - Sửa lỗi popup cấu hình email bị che khuất bởi @zhangzhonghe

  - Sửa lỗi email trong cùng một hộp thư giữa nhiều người dùng và tối ưu hóa hiệu suất bởi @jiannx

- **[Migration manager]** Sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong các ngoại lệ lỗi di chuyển bởi @cgyrock
