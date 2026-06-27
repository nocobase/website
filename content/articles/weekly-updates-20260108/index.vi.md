---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ các thành phần bảo trì do plugin định nghĩa khi ứng dụng ở trạng thái bảo trì, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Ngày phát hành: 2026-01-04*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ các thành phần bảo trì do plugin định nghĩa khi ứng dụng ở trạng thái bảo trì ([#8252](https://github.com/nocobase/nocobase/pull/8252)) bởi @cgyrock
- **[Quản lý tệp]** Hỗ trợ cấu hình phương thức đổi tên tệp ([#8231](https://github.com/nocobase/nocobase/pull/8231)) bởi @JAVA-LW
- **[Lưu trữ tệp: S3(Pro)]** Thêm tùy chọn chế độ đổi tên cho bộ lưu trữ S3 Pro bởi @mytharcher

### 🚀 Cải tiến

- **[Trình quản lý di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và khả năng hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[database]**

  - Bao gồm phạm vi thông qua khi truy vấn quan hệ m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) bởi @2013xile
  - Sửa lỗi `appends` đối tượng trong `OptionsParser`, và tăng `arrayLimit` cho các tham số ([#8328](https://github.com/nocobase/nocobase/pull/8328)) bởi @mytharcher
- **[client]** Sửa lỗi xảy ra trong cài đặt khối biểu mẫu bộ lọc của trường m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi ngôn ngữ khi hủy tác vụ nền ([#8245](https://github.com/nocobase/nocobase/pull/8245)) bởi @mytharcher
- **[Quản lý tệp]** Sửa lỗi xảy ra khi tải tệp lớn hơn 5MB lên AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài ([#8207](https://github.com/nocobase/nocobase/pull/8207)) bởi @cgyrock
- **[Bộ sưu tập: Cây]** Cập nhật đường dẫn sau khi tạo hàng loạt các nút bộ sưu tập cây ([#8267](https://github.com/nocobase/nocobase/pull/8267)) bởi @2013xile
- **[Nguồn dữ liệu: PostgreSQL bên ngoài]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Ngày phát hành: 2026-01-07*

### 🚀 Cải tiến

- **[Quy trình làm việc: Phê duyệt]** Đơn giản hóa tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher

### 🐛 Sửa lỗi

- **[sdk]** Cải thiện triển khai chia sẻ token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) bởi @chenos
- **[client]** Sửa lỗi trường liên kết từ nguồn dữ liệu bên ngoài không tải dữ liệu liên kết trong khối biểu mẫu ([#8356](https://github.com/nocobase/nocobase/pull/8356)) bởi @katherinehhh
- **[Quy trình làm việc: Nút vòng lặp]** Sửa lỗi nút thất bại trong nhánh điều kiện không thể chuyển trạng thái lên nút nhánh cấp trên ([#8360](https://github.com/nocobase/nocobase/pull/8360)) bởi @mytharcher
- **[Kiểm soát truy cập]** Cho phép trường liên kết liên kết bằng cách sử dụng các khóa mục tiêu ([#8352](https://github.com/nocobase/nocobase/pull/8352)) bởi @2013xile
- **[Quy trình làm việc: Webhook]** Sửa lỗi 404 khi đăng lên URL webhook trong ứng dụng con bởi @mytharcher
- **[Trình quản lý email]** Sửa lỗi liên kết trả lời Outlook đôi khi bị ngắt kết nối bởi @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Ngày phát hành: 2026-01-06*

### 🚀 Cải tiến

- **[client]** Tự động thay đổi kích thước textarea trong biểu mẫu chỉnh sửa tác vụ AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) bởi @heziqiang
- **[Quy trình làm việc: Phê duyệt]** Thêm logic sửa chữa cho đồng bộ hóa đối tượng sau khi di chuyển bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi quyền trường và hành động không được tính toán lại sau khi phân trang trong các khối chi tiết, danh sách và biểu mẫu. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) bởi @gchust
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi xây dựng do thiếu phụ thuộc bởi @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Ngày phát hành: 2026-01-05*

### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Sửa lỗi thông báo lỗi không chính xác khi xảy ra lỗi ràng buộc duy nhất trong quá trình nhập XLSX bất đồng bộ ([#8342](https://github.com/nocobase/nocobase/pull/8342)) bởi @cgyrock
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất bất đồng bộ trong khi ứng dụng chính không bật plugin xuất nhập pro bởi @cgyrock
- **[Trình quản lý email]** Hiển thị nút trả lời tất cả và phạm vi dữ liệu hỗ trợ lọc tin nhắn con. bởi @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Ngày phát hành: 2026-01-05*

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau ([#7856](https://github.com/nocobase/nocobase/pull/7856)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi trường liên kết không chính xác trong thành phần `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Siêu dữ liệu bộ sưu tập xem nên bao gồm các tùy chọn trường nguồn ([#8337](https://github.com/nocobase/nocobase/pull/8337)) bởi @2013xile
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Ngày phát hành: 2026-01-04*

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi ô nhiễm trạng thái có thể xảy ra khi mở popup nhiều lần. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) bởi @gchust
- **[database]** Sửa lỗi `appends` đối tượng trong `OptionsParser`, và tăng `arrayLimit` cho các tham số ([#8328](https://github.com/nocobase/nocobase/pull/8328)) bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Ngày phát hành: 2026-01-07*

### 🚀 Cải tiến

- **[client]**

  - Ngăn render lại toàn bộ bảng khi cập nhật một ô ([#8349](https://github.com/nocobase/nocobase/pull/8349)) bởi @katherinehhh
  - Tự động thay đổi kích thước textarea trong biểu mẫu chỉnh sửa tác vụ AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) bởi @heziqiang
- **[Quy trình làm việc: Phê duyệt]**

  - Thêm logic sửa chữa cho đồng bộ hóa đối tượng sau khi di chuyển bởi @mytharcher
  - Đơn giản hóa tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi quyền trường và hành động không được tính toán lại sau khi phân trang trong các khối chi tiết, danh sách và biểu mẫu. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) bởi @gchust
  - Sửa lỗi trường liên kết từ nguồn dữ liệu bên ngoài không tải dữ liệu liên kết trong khối biểu mẫu ([#8356](https://github.com/nocobase/nocobase/pull/8356)) bởi @katherinehhh
- **[sdk]** Cải thiện triển khai chia sẻ token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) bởi @chenos
- **[Kiểm soát truy cập]** Cho phép trường liên kết liên kết bằng cách sử dụng các khóa mục tiêu ([#8352](https://github.com/nocobase/nocobase/pull/8352)) bởi @2013xile
- **[Quy trình làm việc: Nút vòng lặp]** Sửa lỗi nút thất bại trong nhánh điều kiện không thể chuyển trạng thái lên nút nhánh cấp trên ([#8360](https://github.com/nocobase/nocobase/pull/8360)) bởi @mytharcher
- **[Quy trình làm việc: Webhook]** Sửa lỗi 404 khi đăng lên URL webhook trong ứng dụng con bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi xây dựng do thiếu phụ thuộc bởi @mytharcher
- **[Trình quản lý email]** Sửa lỗi liên kết trả lời Outlook đôi khi bị ngắt kết nối bởi @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Ngày phát hành: 2026-01-05*

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau ([#7856](https://github.com/nocobase/nocobase/pull/7856)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - Sửa logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh
  - Sửa lỗi trường liên kết không chính xác trong thành phần `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) bởi @mytharcher
  - Sửa lỗi tham số bộ lọc không chính xác cho trường liên kết Chọn trong bảng con có thể chỉnh sửa ([#8335](https://github.com/nocobase/nocobase/pull/8335)) bởi @katherinehhh
- **[flow-engine]** Sửa lỗi ô nhiễm trạng thái có thể xảy ra khi mở popup nhiều lần. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) bởi @gchust
- **[database]** Sửa lỗi `appends` đối tượng trong `OptionsParser`, và tăng `arrayLimit` cho các tham số ([#8328](https://github.com/nocobase/nocobase/pull/8328)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Sửa lỗi thông báo lỗi không chính xác khi xảy ra lỗi ràng buộc duy nhất trong quá trình nhập XLSX bất đồng bộ ([#8342](https://github.com/nocobase/nocobase/pull/8342)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Siêu dữ liệu bộ sưu tập xem nên bao gồm các tùy chọn trường nguồn ([#8337](https://github.com/nocobase/nocobase/pull/8337)) bởi @2013xile
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất bất đồng bộ trong khi ứng dụng chính không bật plugin xuất nhập pro bởi @cgyrock
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher
- **[Trình quản lý email]** Hiển thị nút trả lời tất cả và phạm vi dữ liệu hỗ trợ lọc tin nhắn con. bởi @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Ngày phát hành: 2025-12-25*

### 🚀 Cải tiến

- **[flow-engine]**
  - Tối ưu hóa các vấn đề về hiệu suất khi chuyển đổi chế độ cấu hình ([#8241](https://github.com/nocobase/nocobase/pull/8241)) bởi @zhangzhonghe
  - Hỗ trợ đối tượng FormData trong môi trường runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) bởi @gchust

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tràn ngăn xếp do vòng lặp vô hạn trong tải chậm trường liên kết hiển thị ([#8262](https://github.com/nocobase/nocobase/pull/8262)) bởi @zhangzhonghe
