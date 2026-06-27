---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Cải tiến và sửa lỗi quy trình làm việc, tối ưu hóa chức năng kéo thả, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Ngày phát hành: 2025-10-02*

### 🚀 Cải tiến

- **[client]** Hỗ trợ xoay ảnh khi xem trước ([#7523](https://github.com/nocobase/nocobase/pull/7523)) bởi @mytharcher
- **[Workflow]** Tách logic liên quan đến điều phối thành một bộ điều phối độc lập ([#7535](https://github.com/nocobase/nocobase/pull/7535)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi menu con thanh bên không thể đánh dấu đúng ([#7520](https://github.com/nocobase/nocobase/pull/7520)) bởi @duannyuuu
- **[Workflow: Nút vòng lặp]** Sửa lỗi quy trình tiến tới mục tiếp theo không chính xác ngay cả khi điều kiện nút vòng lặp không được thỏa mãn ([#7521](https://github.com/nocobase/nocobase/pull/7521)) bởi @mytharcher
- **[Workflow]**
  - Sửa lỗi thực thi trùng lặp do xử lý hàng đợi không đúng cách ([#7533](https://github.com/nocobase/nocobase/pull/7533)) bởi @mytharcher
  - Sửa lỗi điều kiện danh sách workflow không chính xác khi tải ngữ cảnh trường liên kết trong cấu hình workflow đã liên kết ([#7516](https://github.com/nocobase/nocobase/pull/7516)) bởi @mytharcher
  - Sửa lỗi tác vụ đã lên lịch dựa trên trường ngày tháng không kích hoạt sau khi bắt đầu ([#7524](https://github.com/nocobase/nocobase/pull/7524)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Ngày phát hành: 2025-10-09*

### 🚀 Cải tiến

* **[server]** Thêm xử lý vòng đời tắt máy an toàn cho ứng dụng ([#7536](https://github.com/nocobase/nocobase/pull/7536)) bởi @mytharcher
* **[Workflow: Nút vòng lặp]** Hỗ trợ giới hạn số chu kỳ tối đa cho nút vòng lặp thông qua biến môi trường ([#7543](https://github.com/nocobase/nocobase/pull/7543)) bởi @mytharcher
* **[Workflow]** Hỗ trợ giới hạn số nút tối đa trong một workflow thông qua biến môi trường ([#7542](https://github.com/nocobase/nocobase/pull/7542)) bởi @mytharcher
* **[Workflow: Phê duyệt]** Thêm nút in vào popup chi tiết trong các khối phê duyệt tùy chỉnh bởi @mytharcher

### 🐛 Sửa lỗi

* **[Trình quản lý email]** Ngoại lệ khi cấp lại quyền bởi @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Ngày phát hành: 2025-10-09*

### 🐛 Sửa lỗi

* **[client]** Sửa lỗi thiếu thuộc tính động trong thành phần `AssignedField` gây ra lỗi tải tệp trong các nút "Tạo bản ghi" hoặc "Cập nhật bản ghi" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) bởi @mytharcher
* **[Biểu mẫu công khai]** Sửa lỗi quy tắc tải lên cho trường tệp trong biểu mẫu công khai không chính xác ([#7553](https://github.com/nocobase/nocobase/pull/7553)) bởi @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Ngày phát hành: 2025-09-30*

### 🎉 Tính năng mới

* **[client]**
  * Khối bảng hỗ trợ thêm nút 'Cài đặt cột' để cấu hình thứ tự và khả năng hiển thị của cột ([#7204](https://github.com/nocobase/nocobase/pull/7204)) bởi @kerwin612
  * Hỗ trợ quy tắc xác thực trường ([#7297](https://github.com/nocobase/nocobase/pull/7297)) bởi @aaaaaajie
* **[Nguồn dữ liệu: Chính]**
  * Hỗ trợ đọc bảng từ nguồn dữ liệu chính ([#7238](https://github.com/nocobase/nocobase/pull/7238)) bởi @aaaaaajie
  * Hỗ trợ hiển thị các bảng do plugin định nghĩa trong nguồn dữ liệu chính. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) bởi @aaaaaajie

### 🚀 Cải tiến

* **[client]** Hỗ trợ xoay ảnh khi xem trước ([#7523](https://github.com/nocobase/nocobase/pull/7523)) bởi @mytharcher
* **[snowflake-id]** Thay đổi ID của các bảng hệ thống có khóa chính tự động tăng nhưng không có định danh duy nhất thành ID giống Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) bởi @2013xile
* **[Workflow]** Tách logic liên quan đến điều phối thành một bộ điều phối độc lập ([#7535](https://github.com/nocobase/nocobase/pull/7535)) bởi @mytharcher
* **[Bộ điều hợp hàng đợi RabbitMQ]** Cải thiện xử lý kết nối RabbitMQ và logic xử lý tin nhắn bởi @sdp-ncd
* **[Trình quản lý email]**
  * hỗ trợ đồng bộ hàng loạt bởi @jiannx
  * trình soạn thảo rich text hỗ trợ thay đổi kích thước ảnh bởi @jiannx

### 🐛 Sửa lỗi

* **[client]**
  * Sửa lỗi nút “Cài đặt cột” tải cột từ bảng bên trong hộp thoại modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) bởi @kerwin612
  * Sửa lỗi menu con thanh bên không thể đánh dấu đúng ([#7520](https://github.com/nocobase/nocobase/pull/7520)) bởi @duannyuuu
* **[Workflow]**
  * Sửa lỗi thực thi trùng lặp do xử lý hàng đợi không đúng cách ([#7533](https://github.com/nocobase/nocobase/pull/7533)) bởi @mytharcher
  * Sửa lỗi điều kiện danh sách workflow không chính xác khi tải ngữ cảnh trường liên kết trong cấu hình workflow đã liên kết ([#7516](https://github.com/nocobase/nocobase/pull/7516)) bởi @mytharcher
  * Sửa lỗi tác vụ đã lên lịch dựa trên trường ngày tháng không kích hoạt sau khi bắt đầu ([#7524](https://github.com/nocobase/nocobase/pull/7524)) bởi @mytharcher
* **[Workflow: Nút vòng lặp]** Sửa lỗi quy trình tiến tới mục tiếp theo không chính xác ngay cả khi điều kiện nút vòng lặp không được thỏa mãn ([#7521](https://github.com/nocobase/nocobase/pull/7521)) bởi @mytharcher
* **[Trình quản lý email]**
  * Chủ đề email rác bởi @jiannx
  * chủ đề rác bởi @jiannx
  * trình soạn thảo rich text hỗ trợ ngắt dòng mềm bởi @jiannx
  * Hỗ trợ cùng một email cho nhiều người bởi @jiannx
  * hiệu suất tối ưu danh sách tin nhắn email bởi @jiannx
  * sau khi chọn hàng, đặt “Đã đọc” và “Chưa đọc” bởi @jiannx
  * thêm trường rawId để tối ưu hiệu suất bởi @jiannx
  * thuộc tính ref trong html gây ra ngoại lệ hiển thị bởi @jiannx
  * nội dung thư phụ không thể được lọc bởi @jiannx
  * hỗ trợ đồng bộ lại bởi @jiannx
  * Phân biệt thủ công giữa chuyển tiếp và trả lời bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Ngày phát hành: 2025-10-10*

### 🐛 Sửa lỗi

- **[server]** Lỗi di chuyển khóa chính ([#7563](https://github.com/nocobase/nocobase/pull/7563)) bởi @2013xile
- **[client]**
  - Sửa lỗi không làm mới dữ liệu sau khi gửi biểu mẫu ([#7560](https://github.com/nocobase/nocobase/pull/7560)) bởi @zhangzhonghe
  - Sửa lỗi thiếu thuộc tính động trong thành phần `AssignedField` gây ra lỗi tải tệp trong các nút "Tạo bản ghi" hoặc "Cập nhật bản ghi" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) bởi @mytharcher
- **[Lịch]** sửa lỗi truy vấn dữ liệu do định danh duy nhất trong khối lịch ([#7562](https://github.com/nocobase/nocobase/pull/7562)) bởi @katherinehhh
- **[Khối: mẫu (không được dùng nữa)]** Sửa lỗi kích hoạt các yêu cầu không cần thiết cho các mẫu khối khi mở hoặc đóng modal ([#7561](https://github.com/nocobase/nocobase/pull/7561)) bởi @gchust
- **[Biểu mẫu công khai]** Sửa lỗi quy tắc tải lên cho trường tệp trong biểu mẫu công khai không chính xác ([#7553](https://github.com/nocobase/nocobase/pull/7553)) bởi @mytharcher
- **[Trình quản lý đa ứng dụng (không được dùng nữa)]** Sửa lỗi xác thực cổng trước khi di chuyển dữ liệu đa ứng dụng ([#7540](https://github.com/nocobase/nocobase/pull/7540)) bởi @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Ngày phát hành: 2025-10-05*

### 🚀 Cải tiến

* **[flow-engine]** Tối ưu hóa chức năng kéo và thả ([#7526](https://github.com/nocobase/nocobase/pull/7526)) bởi @zhangzhonghe
* **[Workflow: Nút vòng lặp]** Hỗ trợ giới hạn số chu kỳ tối đa cho nút vòng lặp thông qua biến môi trường ([#7543](https://github.com/nocobase/nocobase/pull/7543)) bởi @mytharcher
* **[Workflow]** Hỗ trợ giới hạn số nút tối đa trong một workflow thông qua biến môi trường ([#7542](https://github.com/nocobase/nocobase/pull/7542)) bởi @mytharcher
* **[Workflow: Phê duyệt]** Thêm nút in vào popup chi tiết trong các khối phê duyệt tùy chỉnh bởi @mytharcher

### 🐛 Sửa lỗi

* **[client]** Sửa lỗi hành động “Chạy” trong trình soạn thảo mã không hoạt động, đảm bảo người dùng có thể thực thi mã một cách chính xác. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) bởi @gchust
* **[Nhân viên AI]** Sửa lỗi trên trang cấu hình quyền của nhân viên AI ([#7548](https://github.com/nocobase/nocobase/pull/7548)) bởi @2013xile
* **[Workflow]** Sửa lỗi thêm workflow trong cấu hình nút workflow đã liên kết gây treo ứng dụng sau khi nhấp ([#7541](https://github.com/nocobase/nocobase/pull/7541)) bởi @mytharcher
* **[Trình quản lý email]** Ngoại lệ khi cấp lại quyền bởi @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Ngày phát hành: 2025-09-30*

### 🚀 Cải tiến

* **[Workflow]** Tách logic liên quan đến điều phối thành một bộ điều phối độc lập ([#7535](https://github.com/nocobase/nocobase/pull/7535)) bởi @mytharcher

### 🐛 Sửa lỗi

* **[Workflow]**
  * Sửa lỗi thực thi trùng lặp do xử lý hàng đợi không đúng cách ([#7533](https://github.com/nocobase/nocobase/pull/7533)) bởi @mytharcher
  * Sửa lỗi tác vụ đã lên lịch dựa trên trường ngày tháng không kích hoạt sau khi bắt đầu ([#7524](https://github.com/nocobase/nocobase/pull/7524)) bởi @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Ngày phát hành: 2025-09-30

### 🚀 Cải tiến

- **[server]** Thêm xử lý vòng đời tắt máy an toàn cho ứng dụng ([#7536](https://github.com/nocobase/nocobase/pull/7536)) bởi @mytharcher
