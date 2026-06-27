---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ mô hình Gemini-3"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ mô hình Gemini-3 với chữ ký suy nghĩ gọi hàm, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/en/blog/v1.9.36)

*Ngày phát hành: 2026-01-10*

### 🚀 Cải tiến

- **[client]** Cải thiện hiệu suất hiển thị danh sách plugin manager bằng cách chuyển sang css webkit gốc cho dấu ba chấm văn bản ([#8391](https://github.com/nocobase/nocobase/pull/8391)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[File manager]** Sửa lỗi URL tệp được tạo không chính xác cho các tệp được tải lên bộ nhớ S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) bởi @mytharcher
- **[File storage: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher
- **[Workflow: Approval]** Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher

### [v1.9.35](https://www.nocobase.com/en/blog/v1.9.35)

*Ngày phát hành: 2026-01-09*

### 🚀 Cải tiến

- **[Workflow: Approval]** Đơn giản hóa tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher

### 🐛 Sửa lỗi

- **[Workflow: Webhook]** Sửa lỗi trả về lỗi 404 khi đăng lên URL webhook trong ứng dụng con bởi @mytharcher

### [v1.9.34](https://www.nocobase.com/en/blog/v1.9.34)

*Ngày phát hành: 2026-01-08*

### 🚀 Cải tiến

- **[Access control]** Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau ([#7856](https://github.com/nocobase/nocobase/pull/7856)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các trường liên kết từ nguồn dữ liệu bên ngoài không tải dữ liệu liên kết trong khối biểu mẫu ([#8356](https://github.com/nocobase/nocobase/pull/8356)) bởi @katherinehhh
  - Sửa lỗi các trường liên kết không chính xác trong thành phần `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) bởi @mytharcher
- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in nhật ký hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock
- **[Workflow: Loop node]** Sửa lỗi nút thất bại trong nhánh điều kiện không thể chuyển trạng thái lên nút nhánh cấp trên ([#8360](https://github.com/nocobase/nocobase/pull/8360)) bởi @mytharcher
- **[Data source: Main]** Siêu dữ liệu bộ sưu tập view nên bao gồm các tùy chọn trường nguồn ([#8337](https://github.com/nocobase/nocobase/pull/8337)) bởi @2013xile
- **[Workflow]**

  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe
  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh vấn đề xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher
  - Sửa lỗi trang thực thi bị crash khi workflow bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher
- **[Action: Import records]** Sửa lỗi thông báo lỗi không chính xác khi xảy ra lỗi ràng buộc duy nhất trong quá trình nhập XLSX không đồng bộ ([#8342](https://github.com/nocobase/nocobase/pull/8342)) bởi @cgyrock
- **[Access control]**

  - Cho phép các trường liên kết sử dụng các khóa mục tiêu để liên kết ([#8352](https://github.com/nocobase/nocobase/pull/8352)) bởi @2013xile
  - Sửa lỗi nguồn dữ liệu được giải quyết không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile
- **[Data source: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi khi phương thức không có trong ngữ cảnh bởi @mytharcher
- **[Action: Export records Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất không đồng bộ trong khi ứng dụng chính không bật plugin import/export pro bởi @cgyrock
- **[Workflow: Approval]** Sửa lỗi các trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/en/blog/v2.0.0-beta.10)

*Ngày phát hành: 2026-01-14*

### 🚀 Cải tiến

- **[client]** Hỗ trợ chỉ định thời điểm chạy luồng sự kiện. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) bởi @gchust
- **[AI employees]**

  - Tối ưu hóa nút truy cập AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) bởi @heziqiang
  - Ẩn builder ai trong danh sách truy cập.<br/> Tối ưu hóa luồng tích hợp LLM.<br/> Cập nhật tài liệu về mô hình ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) bởi @heziqiang
- **[Notification: In-app message]** Sửa lỗi hiệu suất khi gửi thông báo trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - thành phần nhập số không hiển thị giá trị ([#8410](https://github.com/nocobase/nocobase/pull/8410)) bởi @chenos
  - sửa lỗi dữ liệu chọn xếp tầng không bị xóa sau khi gửi thành công trong biểu mẫu tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh
  - sửa lỗi với nút gửi khi bỏ qua xác thực bắt buộc không hoạt động khi bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh
  - giải quyết vấn đề nút gửi xuất hiện trong cửa sổ bật lên chọn tệp của trường liên kết một-một ([#8398](https://github.com/nocobase/nocobase/pull/8398)) bởi @katherinehhh
  - sửa lỗi giải quyết vấn đề cài đặt bố cục trong khối thẻ lưới không có hiệu lực ([#8399](https://github.com/nocobase/nocobase/pull/8399)) bởi @katherinehhh
  - sửa lỗi ngăn gán giá trị khi nhập ký tự Trung Quốc trong trường số ([#8397](https://github.com/nocobase/nocobase/pull/8397)) bởi @katherinehhh
- **[Collection field: Many to many (array)]** Sửa lỗi khi thêm các quan hệ nhiều-nhiều(mảng) cấp hai trong các truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock
- **[Multi-space]**

  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx
  - Màu sắc bộ chọn không gian theo chủ đề bởi @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/en/blog/v2.0.0-beta.9)

*Ngày phát hành: 2026-01-12*

### 🚀 Cải tiến

- **[client]** Cải thiện hiệu suất hiển thị danh sách plugin manager bằng cách chuyển sang css webkit gốc cho dấu ba chấm văn bản ([#8391](https://github.com/nocobase/nocobase/pull/8391)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[File manager]** Sửa lỗi URL tệp được tạo không chính xác cho các tệp được tải lên bộ nhớ S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) bởi @mytharcher
- **[Workflow]** Sửa lỗi ID lược đồ không được cập nhật trong nút trùng lặp ([#8396](https://github.com/nocobase/nocobase/pull/8396)) bởi @mytharcher
- **[File storage: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher
- **[Template print]** Sửa lỗi cửa sổ bật lên cấu hình mẫu bị che khuất bởi @zhangzhonghe
- **[Workflow: Approval]** Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/en/blog/v2.0.0-beta.8)

*Ngày phát hành: 2026-01-09*

### 🚀 Cải tiến

- **[cli]** hỗ trợ cấu hình URL cơ sở CDN qua env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) bởi @chenos
- **[AI employees]** Hỗ trợ Anthropic và Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]** sửa logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh
- **[Workflow: Approval]** Sửa lỗi bản ghi không chính xác được tải do tham số sai bởi @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/en/blog/v2.0.0-beta.7)

*Ngày phát hành: 2026-01-09*

### 🎉 Tính năng mới

- **[test]** thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ bản ([#8343](https://github.com/nocobase/nocobase/pull/8343)) bởi @cgyrock
- **[AI employees]** Hỗ trợ mô hình Gemini-3 với chữ ký suy nghĩ gọi hàm ([#8377](https://github.com/nocobase/nocobase/pull/8377)) bởi @heziqiang

### 🚀 Cải tiến

- **[flow-engine]** Thêm `rowOrder` vào GridModel để đảm bảo thứ tự hàng nhất quán ([#8371](https://github.com/nocobase/nocobase/pull/8371)) bởi @zhangzhonghe
- **[AI employees]**

  - Hỗ trợ chỉnh sửa tùy chỉnh và tự động cập nhật lời nhắc hệ thống ([#8378](https://github.com/nocobase/nocobase/pull/8378)) bởi @heziqiang
  - Cải thiện xử lý lỗi AI cho các dịch vụ và mô hình LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) bởi @heziqiang
- **[File manager]** Thêm tùy chọn yêu cầu để tìm nạp tệp OSS ở phía máy chủ nếu cần thêm tham số hoặc tiêu đề ([#8372](https://github.com/nocobase/nocobase/pull/8372)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi trường liên kết vẫn có thể mở cửa sổ bật lên sau khi chuyển từ thành phần chọn bản ghi sang thành phần chọn. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) bởi @gchust
  - Đã sửa lỗi các quy tắc liên kết không được chạy lại sau khi thay đổi phân trang cho khối chi tiết, khối biểu mẫu chỉnh sửa và khối danh sách. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) bởi @gchust
  - Đã sửa lỗi các trường của bảng con/biểu mẫu con đã cấu hình không hiển thị trong quá trình chuyển đổi qua lại giữa các thành phần trường. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) bởi @gchust
- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in nhật ký hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock
- **[Block: template (deprecated)]** Đã sửa lỗi không thể truy cập trang chỉnh sửa cho các mẫu kế thừa (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) bởi @gchust
- **[Workflow]**

  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh vấn đề xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher
  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe
  - Sửa lỗi trang thực thi bị crash khi workflow bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher
- **[Access control]** Sửa lỗi nguồn dữ liệu được giải quyết không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile
- **[Data source: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi khi phương thức không có trong ngữ cảnh bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/en/blog/v2.0.0-alpha.64)

*Ngày phát hành: 2026-01-08*

### 🎉 Tính năng mới

- **[AI employees]** Hỗ trợ mô hình Gemini-3 với chữ ký suy nghĩ gọi hàm ([#8377](https://github.com/nocobase/nocobase/pull/8377)) bởi @heziqiang

### 🚀 Cải tiến

- **[AI employees]**

  - Cải thiện xử lý lỗi AI cho các dịch vụ và mô hình LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) bởi @heziqiang
  - Hỗ trợ chỉnh sửa tùy chỉnh và tự động cập nhật lời nhắc hệ thống ([#8378](https://github.com/nocobase/nocobase/pull/8378)) bởi @heziqiang
- **[File manager]** Thêm tùy chọn yêu cầu để tìm nạp tệp OSS ở phía máy chủ nếu cần thêm tham số hoặc tiêu đề ([#8372](https://github.com/nocobase/nocobase/pull/8372)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in nhật ký hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock
- **[client]**

  - Đã sửa lỗi trường liên kết vẫn có thể mở cửa sổ bật lên sau khi chuyển từ thành phần chọn bản ghi sang thành phần chọn. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) bởi @gchust
  - Đã sửa lỗi các quy tắc liên kết không được chạy lại sau khi thay đổi phân trang cho khối chi tiết, khối biểu mẫu chỉnh sửa và khối danh sách. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) bởi @gchust
  - Đã sửa lỗi các trường của bảng con/biểu mẫu con đã cấu hình không hiển thị trong quá trình chuyển đổi qua lại giữa các thành phần trường. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) bởi @gchust
- **[Workflow]**

  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe
  - Sửa lỗi trang thực thi bị crash khi workflow bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher
- **[Access control]** Sửa lỗi nguồn dữ liệu được giải quyết không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile
