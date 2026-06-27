---
title: "NocoBase v2.0.0-alpha.65: thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ bản"
description: "Ghi chú phát hành của v2.0.0-alpha.65"
---

### 🎉 Tính năng mới

- **[test]** Thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ bản ([#8343](https://github.com/nocobase/nocobase/pull/8343)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**
  - Trình soạn thảo văn bản đa dạng hỗ trợ điều chỉnh cỡ chữ, điều chỉnh kích thước ảnh và xuống dòng mềm ([#8401](https://github.com/nocobase/nocobase/pull/8401)) bởi @jiannx

  - Hỗ trợ chỉ định thời điểm chạy luồng sự kiện. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) bởi @gchust

  - Cải thiện hiệu suất hiển thị danh sách plugin manager bằng cách chuyển sang css webkit gốc cho dấu ba chấm văn bản ([#8391](https://github.com/nocobase/nocobase/pull/8391)) bởi @mytharcher

- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ nhiều hàm hơn ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher

- **[cli]** Hỗ trợ cấu hình URL gốc CDN qua biến môi trường ([#8384](https://github.com/nocobase/nocobase/pull/8384)) bởi @chenos

- **[flow-engine]** Thêm `rowOrder` vào GridModel để đảm bảo thứ tự hàng nhất quán ([#8371](https://github.com/nocobase/nocobase/pull/8371)) bởi @zhangzhonghe

- **[Flow engine]** Hỗ trợ giải quyết giá trị của các trường trong bản ghi biểu mẫu hiện tại ngay cả khi chúng chưa được thêm vào biểu mẫu chỉnh sửa. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) bởi @gchust

- **[AI employees]**
  - Tối ưu hóa nút truy cập AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) bởi @heziqiang

  - Thay đổi kết quả của workflow caller thành `execution.output`, bằng cách sử dụng rõ ràng output node, kết quả có thể ổn định ([#8423](https://github.com/nocobase/nocobase/pull/8423)) bởi @mytharcher

  - Ẩn builder ai trong danh sách truy cập.<br/> Tối ưu hóa luồng tích hợp LLM.<br/> Cập nhật tài liệu về mô hình ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) bởi @heziqiang

  - Hỗ trợ Anthropic và Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) bởi @heziqiang

- **[Notification: In-app message]** Sửa lỗi hiệu suất khi gửi thông báo trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi chiều cao modal phím tắt vượt quá chiều cao khung nhìn ([#8437](https://github.com/nocobase/nocobase/pull/8437)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết nút hàng trong bảng ảnh hưởng đến trạng thái của các nút trong biểu mẫu popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) bởi @zhangzhonghe

  - Sửa lỗi trạng thái cột hành động trong bảng bị nhiễu khi chuyển trang. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) bởi @gchust

  - Thêm khả năng chịu lỗi cho action schema, để tránh trang bị sập khi nhấp vào nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher

  - Sửa lỗi trường tiêu đề không cập nhật khi trường liên kết được đặt ở chế độ chỉ đọc trong biểu mẫu tạo ([#8413](https://github.com/nocobase/nocobase/pull/8413)) bởi @katherinehhh

  - Sửa lỗi thành phần số không hiển thị giá trị ([#8410](https://github.com/nocobase/nocobase/pull/8410)) bởi @chenos

  - Sửa lỗi cài đặt trường tiêu đề biến mất sau khi đặt URL đính kèm và sau đó chuyển sang trường khác trong mục biểu mẫu ([#8418](https://github.com/nocobase/nocobase/pull/8418)) bởi @katherinehhh

  - Sửa lỗi với nút gửi khi bỏ qua xác thực bắt buộc không hoạt động khi bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh

  - Sửa lỗi cài đặt bố cục trong khối thẻ lưới không có hiệu lực ([#8399](https://github.com/nocobase/nocobase/pull/8399)) bởi @katherinehhh

  - Sửa lỗi dữ liệu chọn xếp tầng không bị xóa sau khi gửi thành công trong biểu mẫu tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh

  - Sửa lỗi ngăn gán giá trị khi nhập ký tự Trung Quốc vào trường số ([#8397](https://github.com/nocobase/nocobase/pull/8397)) bởi @katherinehhh

  - Giải quyết vấn đề nút gửi xuất hiện trong popup chọn tệp của trường liên kết một-một ([#8398](https://github.com/nocobase/nocobase/pull/8398)) bởi @katherinehhh

  - Sửa lỗi logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh

- **[flow-engine]** Sửa lỗi các bước của luồng sự kiện động chạy hai lần khi mở popup bằng cách nhấp vào nút. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) bởi @gchust

- **[Flow engine]** Sửa lỗi giải quyết biến không chính xác khi filterByTk là một mảng. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) bởi @gchust

- **[File manager]** Sửa lỗi URL tệp được tạo không chính xác cho các tệp được tải lên bộ nhớ S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) bởi @mytharcher

- **[Collection field: Many to many (array)]** Sửa lỗi khi nối các quan hệ nhiều-nhiều (mảng) cấp hai trong truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock

- **[Workflow]**
  - Sửa lỗi ID schema không được cập nhật trong nút đã sao chép ([#8396](https://github.com/nocobase/nocobase/pull/8396)) bởi @mytharcher

  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh vấn đề xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher

- **[Block: template (deprecated)]** Sửa lỗi không thể truy cập trang chỉnh sửa cho các mẫu kế thừa (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) bởi @gchust

- **[Data source: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi xảy ra khi phương thức không có trong ngữ cảnh bởi @mytharcher

- **[Multi-space]**
  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx

  - Màu sắc của bộ chọn không gian theo chủ đề bởi @jiannx

- **[Template print]**
  - Sửa lỗi popup cấu hình mẫu bị che khuất bởi @zhangzhonghe

  - hỗ trợ trường không gian bởi @jiannx

  - hiển thị trường không gian trong phiên bản 2.0 bởi @jiannx

- **[File storage: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher

- **[Workflow: Approval]**
  - Sửa lỗi bản ghi không chính xác được tải do tham số sai bởi @mytharcher

  - Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher

- **[Email manager]**
  - Sửa lỗi chuỗi hội thoại bởi @jiannx

  - Thêm bộ lọc vào trang quản lý bởi @jiannx
