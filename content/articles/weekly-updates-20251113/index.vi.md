---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ kéo thả cho các thao tác cột bảng, thêm nguồn dữ liệu SQL biểu đồ, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*Ngày phát hành: 2025-11-12*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi các mẫu trùng lặp không xuất hiện, do kéo và sau đó xóa một mẫu tham chiếu ([#7847](https://github.com/nocobase/nocobase/pull/7847)) bởi @zhangzhonghe
- **[utils]** Bật tính năng hợp nhất đối tượng trong chiến lược giao nhau ([#7840](https://github.com/nocobase/nocobase/pull/7840)) bởi @chenos
- **[Trực quan hóa dữ liệu: ECharts]** sửa lỗi với cấu hình labelType của ECharts bởi @heziqiang
- **[Trình quản lý email]** đồng bộ trạng thái đã đọc của Microsoft mail mà không có dấu thời gian bởi @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*Ngày phát hành: 2025-11-10*

### 🐛 Sửa lỗi

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi các trường của bộ sưu tập chính không bị loại trừ khi tải lại dữ liệu liên kết bởi @mytharcher
- **[Trình quản lý email]** Sửa lỗi hình ảnh dự phòng và đồng bộ trong outlook bởi @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*Ngày phát hành: 2025-11-10*

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Tối ưu hóa logic kiểm soát quyền cho các thao tác trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile
- **[Quy trình làm việc: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn việc khai thác có thể cấp quyền truy cập vào ngữ cảnh thực thi cấp trên bởi @mytharcher
- **[Xác thực: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi sau khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi tin nhắn sẽ gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher
- **[client]** sửa lỗi trang trống tiếp theo trong khối chi tiết phân trang đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) bởi @katherinehhh
- **[Quy trình làm việc]**

  - Thêm `workflowId` làm dữ liệu định danh cho nhật ký của quy trình làm việc ([#7789](https://github.com/nocobase/nocobase/pull/7789)) bởi @mytharcher
  - Sửa lỗi plugin quy trình làm việc vẫn tiêu thụ sự kiện hàng đợi khi nó không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher
- **[Người dùng]** Làm mới chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) bởi @2013xile
- **[Quy trình làm việc: Biến tùy chỉnh]** Sửa lỗi báo lỗi khi không có cấu hình trong nút biến bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*Ngày phát hành: 2025-11-12*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ kéo thả cho các thao tác cột trong bảng ([#7842](https://github.com/nocobase/nocobase/pull/7842)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]** thêm nguồn dữ liệu SQL cho biểu đồ ([#7830](https://github.com/nocobase/nocobase/pull/7830)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]** Đã thêm hỗ trợ cho thư viện Day.js trong ngữ cảnh kịch bản RunJS, cho phép thao tác ngày và giờ dễ dàng hơn. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) bởi @gchust

### 🐛 Sửa lỗi

- **[utils]**

  - Sửa lỗi "Invalid filter item type" trên nút lọc ([#7838](https://github.com/nocobase/nocobase/pull/7838)) bởi @zhangzhonghe
  - Bật tính năng hợp nhất đối tượng trong chiến lược giao nhau ([#7840](https://github.com/nocobase/nocobase/pull/7840)) bởi @chenos
  - Sửa lỗi 'Unrecognized operation' trong luồng sự kiện ([#7835](https://github.com/nocobase/nocobase/pull/7835)) bởi @zhangzhonghe
- **[client]**

  - Sửa lỗi các quy tắc liên kết cho các nút hành động trên hàng trong khối bảng không được thực thi lại sau khi dữ liệu hàng được cập nhật, đảm bảo các quy tắc hiện được áp dụng lại đúng cách khi có thay đổi. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) bởi @gchust
  - Sửa lỗi khi xem trước mã trong trình soạn thảo mã nếu mã chứa cú pháp jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) bởi @gchust
- **[undefined]** Sửa lỗi kiểu dáng không chính xác trên trang chủ tài liệu plugin ở chế độ tối. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) bởi @gchust
- **[Trình quản lý tệp]** sửa lỗi cấu hình trường trong khối bảng ([#7843](https://github.com/nocobase/nocobase/pull/7843)) bởi @katherinehhh
- **[Nhân viên AI]** Ẩn nút trò chuyện của nhân viên AI trên các trang v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) bởi @cgyrock
- **[Trực quan hóa dữ liệu: ECharts]** sửa lỗi với cấu hình labelType của ECharts bởi @heziqiang
- **[Trình quản lý email]**

  - sửa lỗi bản nháp bởi @jiannx
  - đồng bộ trạng thái đã đọc của Microsoft mail mà không có dấu thời gian bởi @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*Ngày phát hành: 2025-11-11*

### 🚀 Cải tiến

- **[client]**

  - thêm phiên bản thông tin trang vào ngữ cảnh công cụ luồng ([#7826](https://github.com/nocobase/nocobase/pull/7826)) bởi @gchust
  - cải thiện Trình soạn thảo Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) bởi @katherinehhh
  - thích ứng với trường tableoid trong 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** cập nhật chú thích mẫu mã cho mẹo cảnh báo và sự kiện ([#7814](https://github.com/nocobase/nocobase/pull/7814)) bởi @heziqiang
- **[Kiểm soát truy cập]** Tối ưu hóa logic kiểm soát quyền cho các thao tác trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile
- **[Xác thực: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi sau khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi tin nhắn sẽ gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher
- **[client]**

  - biến bộ sưu tập hiện tại không nên được chọn từ bộ chọn biến của thành phần lọc ([#7818](https://github.com/nocobase/nocobase/pull/7818)) bởi @gchust
  - Sửa lỗi 'value.replace is not a function' trong trường quan hệ của biểu mẫu lọc ([#7824](https://github.com/nocobase/nocobase/pull/7824)) bởi @zhangzhonghe
  - Sửa tham số không chính xác trong callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) bởi @zhangzhonghe
- **[công cụ luồng]** Sửa lỗi các thay đổi đối với luồng sự kiện chỉ có hiệu lực sau khi làm mới trang. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) bởi @gchust
- **[Quy trình làm việc]** Sửa lỗi plugin quy trình làm việc vẫn tiêu thụ sự kiện hàng đợi khi nó không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi các trường của bộ sưu tập chính không bị loại trừ khi tải lại dữ liệu liên kết bởi @mytharcher
- **[Trình quản lý email]** Sửa lỗi hình ảnh dự phòng và đồng bộ trong outlook bởi @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*Ngày phát hành: 2025-11-10*

### 🚀 Cải tiến

- **[công cụ luồng]** Tối ưu hóa kiểu dáng thanh công cụ cho các tab trang ([#7795](https://github.com/nocobase/nocobase/pull/7795)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[công cụ luồng]**

  - Sửa lỗi các biến trong trường liên kết của biểu mẫu con không được giải quyết chính xác khi trường được sửa đổi thông qua giao diện người dùng. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) bởi @gchust
  - lỗi trong biểu mẫu chỉnh sửa cho các bản ghi có nhiều khóa chính ([#7798](https://github.com/nocobase/nocobase/pull/7798)) bởi @gchust
  - Sửa lỗi một số cấu hình nhất định cho hành động "Mở Xem" không được áp dụng, đảm bảo hành động hiện hoạt động như mong đợi cho tất cả các cấu hình đã chỉ định. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) bởi @gchust
- **[client]**

  - Sửa lỗi trường chọn bộ sưu tập không thể chọn bộ sưu tập chính xác ([#7794](https://github.com/nocobase/nocobase/pull/7794)) bởi @katherinehhh
  - không thể ẩn cột hành động của khối bảng ([#7804](https://github.com/nocobase/nocobase/pull/7804)) bởi @gchust
  - hỗ trợ chọn toàn bộ đối tượng biến trong lời nhắc của nhân viên AI ([#7791](https://github.com/nocobase/nocobase/pull/7791)) bởi @gchust
- **[Người dùng]** Làm mới chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) bởi @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*Ngày phát hành: 2025-11-06*

### 🚀 Cải tiến

- **[công cụ luồng]** hỗ trợ thao tác trì hoãn trong mô hình luồng ([#7786](https://github.com/nocobase/nocobase/pull/7786)) bởi @gchust
- **[Quy trình làm việc: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn việc khai thác có thể cấp quyền truy cập vào ngữ cảnh thực thi cấp trên bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi trang trống tiếp theo trong khối chi tiết phân trang đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) bởi @katherinehhh
  - sửa lỗi chiều rộng của thao tác bảng và jsColumn không được áp dụng ([#7777](https://github.com/nocobase/nocobase/pull/7777)) bởi @katherinehhh
  - phạm vi dữ liệu của khối không hoạt động nếu được đặt bởi luồng sự kiện trang ([#7788](https://github.com/nocobase/nocobase/pull/7788)) bởi @gchust
- **[Quy trình làm việc]** Thêm `workflowId` làm dữ liệu định danh cho nhật ký của quy trình làm việc ([#7789](https://github.com/nocobase/nocobase/pull/7789)) bởi @mytharcher
- **[Quy trình làm việc: Biến tùy chỉnh]** Sửa lỗi báo lỗi khi không có cấu hình trong nút biến bởi @mytharcher
- **[Trình quản lý email]** bộ sưu tập MailMessages thêm chỉ mục bởi @jiannx
