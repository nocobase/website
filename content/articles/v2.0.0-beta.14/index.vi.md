---
title: "NocoBase v2.0.0-beta.14: Hỗ trợ dán tệp trong AI chat"
description: "Ghi chú phát hành của v2.0.0-beta.14"
---

### 🎉 Tính năng mới

- **[AI nhân viên]** Hỗ trợ dán tệp trong chat AI ([#8487](https://github.com/nocobase/nocobase/pull/8487)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**
  - Cải thiện biểu mẫu con nhiều-nhiều để khởi tạo với một mục mặc định và tránh tạo bản ghi khi để trống ([#8473](https://github.com/nocobase/nocobase/pull/8473)) bởi @katherinehhh

  - Cải thiện các nút tải lên và chỉnh sửa cho trường tệp đính kèm trong bảng con để hướng dẫn người dùng nhấp tải lên tốt hơn. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) bởi @katherinehhh

- **[flow-engine]** Cải thiện ctx.libs trong runjs để hỗ trợ tải theo nhu cầu, và thêm các thư viện được xác định trước: lodash, math, và formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) bởi @gchust

- **[Error handler]** Làm sạch lỗi tham chiếu SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) bởi @2013xile

- **[Workflow: Phê duyệt]** Triển khai kiểm soát truy cập cho API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi popover của trình soạn thảo văn bản giàu bị che khuất ([#8443](https://github.com/nocobase/nocobase/pull/8443)) bởi @zhangzhonghe

  - Sửa lỗi thời gian bị trùng lặp trong giá trị DateTime của bộ lọc ([#8484](https://github.com/nocobase/nocobase/pull/8484)) bởi @zhangzhonghe

  - Sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh

  - Sửa lỗi thông báo xác thực bắt buộc bị trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh

  - Lọc danh sách để loại bỏ trùng lặp ([#8431](https://github.com/nocobase/nocobase/pull/8431)) bởi @jiannx

  - Sửa lỗi menu cấu hình không hiển thị trong Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) bởi @zhangzhonghe

- **[database]**
  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos

  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos

- **[server]** Sửa phiên bản của `mathjs` trong các phụ thuộc chung ([#8475](https://github.com/nocobase/nocobase/pull/8475)) bởi @mytharcher

- **[flow-engine]** Sửa lỗi đóng popup nhúng gây ra lỗi sau khi mở liên tiếp cửa sổ cấu hình quy tắc liên kết và cấu hình luồng sự kiện. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) bởi @gchust

- **[Nguồn dữ liệu: Chính]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân thủ ràng buộc `onDelete: 'restrict'` của trường liên kết ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile

- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi workflow được kích hoạt bởi import bất đồng bộ bị trì hoãn thực thi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) bởi @mytharcher

- **[Khối: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe

- **[Mẫu UI]** Sửa lỗi khối mẫu tham chiếu không thể đặt phạm vi dữ liệu thông qua cài đặt luồng sự kiện. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) bởi @gchust

- **[Trình quản lý tệp]** Sửa lỗi tên tệp lấy từ request body trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher

- **[Hành động: Import bản ghi Pro]** Sửa lỗi workflow được kích hoạt bởi import bất đồng bộ bị trì hoãn thực thi bởi @mytharcher

- **[Workflow: Webhook]** Sửa lỗi dữ liệu body bị thiếu khi phân tích body chưa được cấu hình bởi @mytharcher

- **[In mẫu]** Xóa các nút chân trang khỏi cấu hình mẫu in bởi @katherinehhh

- **[Workflow: Phê duyệt]**
  - Sửa lỗi trả lại phê duyệt cho nút trước đó nhưng lại trả về điểm bắt đầu bởi @mytharcher

  - Sửa lỗi đồng thời khiến việc thực thi được tiếp tục lặp lại bởi @mytharcher

  - Sửa lỗi các trường không được hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe
