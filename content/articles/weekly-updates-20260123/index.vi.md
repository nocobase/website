---
title: "Cập nhật hàng tuần: Thêm kiểm soát đồng thời cấp tiến trình vào Trình quản lý tác vụ cơ bản"
description: "Đây là bản tóm tắt các cập nhật tính năng và cải tiến của NocoBase từ ngày 15 tháng 1 đến ngày 22 tháng 1 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Ngày phát hành: 2026-01-21*

### 🐛 Sửa lỗi

- **[server]** Sửa phiên bản của `mathjs` trong các phụ thuộc chung ([#8475](https://github.com/nocobase/nocobase/pull/8475)) bởi @mytharcher
- **[client]** Sửa lỗi menu cấu hình không hiển thị trong Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi quy trình làm việc được kích hoạt bởi import bất đồng bộ bị trì hoãn thực thi ([#8478](https://github.com/nocobase/nocobase/pull/8478)) bởi @mytharcher
- **[Hành động: Import bản ghi Pro]** Sửa lỗi quy trình làm việc được kích hoạt bởi import bất đồng bộ bị trì hoãn thực thi bởi @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Ngày phát hành: 2026-01-20*

### 🚀 Cải tiến

- **[server]** Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) bởi @2013xile
- **[Trình xử lý lỗi]** Làm sạch các lỗi tham chiếu SQL ([#8464](https://github.com/nocobase/nocobase/pull/8464)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi cài đặt sắp xếp nhóm trường collection không có hiệu lực. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) bởi @katherinehhh
  - sửa lỗi khi chỉnh sửa collection trong giao diện đồ họa ([#8451](https://github.com/nocobase/nocobase/pull/8451)) bởi @katherinehhh
  - Sửa lỗi nút "Cài đặt cột" của bảng không hoạt động ([#8441](https://github.com/nocobase/nocobase/pull/8441)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết nút hàng của bảng ảnh hưởng đến trạng thái của các nút trong form popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) bởi @zhangzhonghe
- **[Mobile (không dùng nữa)]** Plugin mobile không còn được dùng nữa (được thay thế bởi plugin ui-layout từ phiên bản 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) bởi @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Ngày phát hành: 2026-01-15*

### 🚀 Cải tiến

- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ nhiều hàm hơn ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi hiệu năng khi gửi tin nhắn trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi dữ liệu select xếp tầng không được xóa sau khi gửi thành công trong form tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh
  - Thêm khả năng chịu lỗi cho action schema, để tránh trang bị crash khi nhấp vào nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher
  - sửa lỗi nút gửi khi bỏ qua xác thực bắt buộc không hoạt động khi bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh
- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi khi thêm quan hệ nhiều-nhiều(mảng) cấp hai trong các truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock
- **[Quy trình làm việc]** Sửa lỗi ID schema không được cập nhật trong nút đã sao chép ([#8396](https://github.com/nocobase/nocobase/pull/8396)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Ngày phát hành: 2026-01-19*

### 🚀 Cải tiến

- **[server]** Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) bởi @2013xile
- **[Hành động: Xuất bản ghi]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên ([#8442](https://github.com/nocobase/nocobase/pull/8442)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi popup "Biến tùy chỉnh" bị che khuất ([#8463](https://github.com/nocobase/nocobase/pull/8463)) bởi @zhangzhonghe
  - sửa lỗi khi chỉnh sửa collection trong giao diện đồ họa ([#8451](https://github.com/nocobase/nocobase/pull/8451)) bởi @katherinehhh
  - sửa lỗi cài đặt sắp xếp nhóm trường collection không có hiệu lực. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) bởi @katherinehhh
  - Sửa lỗi chiều cao modal phím tắt vượt quá chiều cao viewport ([#8437](https://github.com/nocobase/nocobase/pull/8437)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết nút hàng của bảng ảnh hưởng đến trạng thái của các nút trong form popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) bởi @zhangzhonghe
  - Sửa lỗi trạng thái cột hành động của bảng bị nhiễm khi chuyển trang. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) bởi @gchust
  - Sửa lỗi nút "Cài đặt cột" của bảng không hoạt động ([#8441](https://github.com/nocobase/nocobase/pull/8441)) bởi @zhangzhonghe
  - Sửa lỗi popup chọn của trường liên kết tệp có z-index không chính xác và cấu hình popup không thể lưu chính xác. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) bởi @gchust
- **[flow-engine]**

  - Sửa lỗi các biến trong tham số mã runjs được giải quyết trước khi thực thi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) bởi @gchust
  - Sửa lỗi không thể chọn biến popup trong popup tạo nhanh của bộ chọn dữ liệu. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) bởi @gchust
  - Sửa lỗi nhấp liên tục vào menu cấu hình có thể mở nhiều popup cấu hình. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) bởi @gchust
- **[Mobile (không dùng nữa)]** Plugin mobile không còn được dùng nữa (được thay thế bởi plugin ui-layout từ phiên bản 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) bởi @chenos
- **[Flow engine]** Sửa lỗi các biến chứa dấu gạch nối không thể được phân tích chính xác. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) bởi @gchust
- **[Trình quản lý email]** Sửa lỗi popup cấu hình email bị che khuất bởi @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Ngày phát hành: 2026-01-16*

### 🚀 Cải tiến

- **[Flow engine]** Hỗ trợ giải quyết giá trị của các trường trong bản ghi form hiện tại ngay cả khi chúng không được thêm vào form chỉnh sửa. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) bởi @gchust

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi các bước của luồng sự kiện động chạy hai lần khi mở popup bằng cách nhấp vào nút. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) bởi @gchust
- **[In mẫu]** hiển thị trường không gian trong phiên bản 2.0 bởi @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Ngày phát hành: 2026-01-15*

### 🚀 Cải tiến

- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ nhiều hàm hơn ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher
- **[client]** Trình soạn thảo văn bản giàu hỗ trợ điều chỉnh cỡ chữ, điều chỉnh kích thước hình ảnh và ngắt dòng mềm ([#8401](https://github.com/nocobase/nocobase/pull/8401)) bởi @jiannx
- **[Nhân viên AI]** Thay đổi kết quả của trình gọi quy trình làm việc thành `execution.output`, bằng cách sử dụng rõ ràng nút đầu ra, kết quả có thể ổn định ([#8423](https://github.com/nocobase/nocobase/pull/8423)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Thêm khả năng chịu lỗi cho action schema, để tránh trang bị crash khi nhấp vào nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher
  - sửa lỗi cài đặt trường tiêu đề biến mất sau khi đặt URL tệp đính kèm và sau đó chuyển sang trường khác trong mục form ([#8418](https://github.com/nocobase/nocobase/pull/8418)) bởi @katherinehhh
  - sửa lỗi trường tiêu đề không cập nhật khi trường liên kết được đặt ở chế độ chỉ đọc trong form tạo ([#8413](https://github.com/nocobase/nocobase/pull/8413)) bởi @katherinehhh
- **[Flow engine]** Sửa lỗi giải quyết biến không chính xác khi filterByTk là một mảng. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) bởi @gchust
- **[In mẫu]** hỗ trợ trường không gian bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Ngày phát hành: 2026-01-16*

### 🐛 Sửa lỗi

- **[Flow engine]** Sửa lỗi các biến chứa dấu gạch nối không thể được phân tích chính xác. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) bởi @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Ngày phát hành: 2026-01-16*

### 🎉 Tính năng mới

- **[test]** thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ sở ([#8343](https://github.com/nocobase/nocobase/pull/8343)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**

  - Trình soạn thảo văn bản giàu hỗ trợ điều chỉnh cỡ chữ, điều chỉnh kích thước hình ảnh và ngắt dòng mềm ([#8401](https://github.com/nocobase/nocobase/pull/8401)) bởi @jiannx
  - Hỗ trợ chỉ định thời điểm chạy luồng sự kiện. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) bởi @gchust
  - Cải thiện hiệu suất hiển thị danh sách trình quản lý plugin bằng cách chuyển sang css webkit gốc cho dấu ba chấm văn bản ([#8391](https://github.com/nocobase/nocobase/pull/8391)) bởi @mytharcher
- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ nhiều hàm hơn ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher
- **[cli]** hỗ trợ cấu hình URL cơ sở CDN qua env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) bởi @chenos
- **[flow-engine]** Thêm `rowOrder` vào GridModel để đảm bảo thứ tự hàng nhất quán ([#8371](https://github.com/nocobase/nocobase/pull/8371)) bởi @zhangzhonghe
- **[Flow engine]** Hỗ trợ giải quyết giá trị của các trường trong bản ghi form hiện tại ngay cả khi chúng không được thêm vào form chỉnh sửa. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) bởi @gchust
- **[Nhân viên AI]**

  - Tối ưu hóa nút nhập AI ([#8414](https://github.com/nocobase/nocobase/pull/8414)) bởi @heziqiang
  - Thay đổi kết quả của trình gọi quy trình làm việc thành `execution.output`, bằng cách sử dụng rõ ràng nút đầu ra, kết quả có thể ổn định ([#8423](https://github.com/nocobase/nocobase/pull/8423)) bởi @mytharcher
  - Ẩn builder ai trong danh sách mục nhập.<br/> Tối ưu hóa luồng tích hợp LLM.<br/> Cập nhật tài liệu về mô hình ai gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) bởi @heziqiang
  - Hỗ trợ Anthropic và Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) bởi @heziqiang
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi hiệu năng khi gửi tin nhắn trong ứng dụng đến số lượng lớn người dùng ([#8402](https://github.com/nocobase/nocobase/pull/8402)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi chiều cao modal phím tắt vượt quá chiều cao viewport ([#8437](https://github.com/nocobase/nocobase/pull/8437)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết nút hàng của bảng ảnh hưởng đến trạng thái của các nút trong form popup ([#8434](https://github.com/nocobase/nocobase/pull/8434)) bởi @zhangzhonghe
  - Sửa lỗi trạng thái cột hành động của bảng bị nhiễm khi chuyển trang. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) bởi @gchust
  - Thêm khả năng chịu lỗi cho action schema, để tránh trang bị crash khi nhấp vào nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher
  - sửa lỗi trường tiêu đề không cập nhật khi trường liên kết được đặt ở chế độ chỉ đọc trong form tạo ([#8413](https://github.com/nocobase/nocobase/pull/8413)) bởi @katherinehhh
  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) bởi @chenos
  - sửa lỗi cài đặt trường tiêu đề biến mất sau khi đặt URL tệp đính kèm và sau đó chuyển sang trường khác trong mục form ([#8418](https://github.com/nocobase/nocobase/pull/8418)) bởi @katherinehhh
  - sửa lỗi nút gửi khi bỏ qua xác thực bắt buộc không hoạt động khi bật xác nhận ([#8400](https://github.com/nocobase/nocobase/pull/8400)) bởi @katherinehhh
  - sửa lỗi giải quyết cài đặt bố cục trong khối thẻ lưới không có hiệu lực ([#8399](https://github.com/nocobase/nocobase/pull/8399)) bởi @katherinehhh
  - sửa lỗi dữ liệu select xếp tầng không được xóa sau khi gửi thành công trong form tạo ([#8403](https://github.com/nocobase/nocobase/pull/8403)) bởi @katherinehhh
  - sửa lỗi ngăn gán giá trị khi nhập ký tự Trung Quốc vào trường số ([#8397](https://github.com/nocobase/nocobase/pull/8397)) bởi @katherinehhh
  - giải quyết lỗi nút gửi xuất hiện trong popup chọn tệp của trường liên kết một-một ([#8398](https://github.com/nocobase/nocobase/pull/8398)) bởi @katherinehhh
  - sửa lỗi logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh
- **[flow-engine]** Sửa lỗi các bước của luồng sự kiện động chạy hai lần khi mở popup bằng cách nhấp vào nút. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) bởi @gchust
- **[Flow engine]** Sửa lỗi giải quyết biến không chính xác khi filterByTk là một mảng. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) bởi @gchust
- **[Trình quản lý tệp]** Sửa lỗi URL tệp được tạo không chính xác cho các tệp được tải lên bộ nhớ S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) bởi @mytharcher
- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi khi thêm quan hệ nhiều-nhiều(mảng) cấp hai trong các truy vấn liên kết ([#8406](https://github.com/nocobase/nocobase/pull/8406)) bởi @cgyrock
- **[Quy trình làm việc]**

  - Sửa lỗi ID schema không được cập nhật trong nút đã sao chép ([#8396](https://github.com/nocobase/nocobase/pull/8396)) bởi @mytharcher
  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh vấn đề xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher
- **[Khối: mẫu (không dùng nữa)]** Sửa lỗi không thể truy cập trang chỉnh sửa cho các mẫu kế thừa (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) bởi @gchust
- **[Nguồn dữ liệu: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi xảy ra khi phương thức không có trong ngữ cảnh bởi @mytharcher
- **[Đa không gian]**

  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx
  - Màu sắc của bộ chọn không gian theo chủ đề bởi @jiannx
- **[In mẫu]**

  - Sửa lỗi popup cấu hình mẫu bị che khuất bởi @zhangzhonghe
  - hỗ trợ trường không gian bởi @jiannx
  - hiển thị trường không gian trong phiên bản 2.0 bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi bản ghi không chính xác được tải do tham số sai bởi @mytharcher
  - Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher
- **[Trình quản lý email]**

  - sửa lỗi chuỗi hội thoại bởi @jiannx
  - Thêm bộ lọc vào trang quản lý bởi @jiannx
