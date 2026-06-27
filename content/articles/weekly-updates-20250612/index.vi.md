---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: hỗ trợ lọc workflow theo nhiều trường hơn, thêm biến môi trường để kiểm soát phương thức xuất nhật ký kiểm toán, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*Ngày phát hành: 2025-06-11*

#### 🐛 Sửa lỗi

* **[client]** Sửa lỗi khối bị lỗi ([#7048](https://github.com/nocobase/nocobase/pull/7048)) bởi @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*Ngày phát hành: 2025-06-10*

#### 🎉 Tính năng mới

- **[Nhật ký kiểm toán]** Thêm biến môi trường `AUDIT_LOGGER_TRANSPORT` để kiểm soát phương thức xuất nhật ký kiểm toán bởi @2013xile

#### 🚀 Cải tiến

- **[Lịch]** hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh
- **[Trường collection: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều(nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie

#### 🐛 Sửa lỗi

- **[client]**

  - vấn đề tự động đóng khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh
  - tùy chọn trường select không hoạt động trong quy tắc liên kết biểu mẫu lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh
  - Quy tắc xác thực biểu mẫu lọc làm cho nút lọc không hiệu quả ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe
  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập bảng con thất bại khi có liên quan đến trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie
- **[Trực quan hóa dữ liệu]** Trường nhóm checkbox trong biểu đồ nên hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile
- **[Quy trình làm việc]** Sửa lỗi xảy ra trong hành động thực thi thủ công khi trình kích hoạt không được cấu hình đúng ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Để tránh lỗi trường không xác định bởi @mytharcher
  - Sửa lỗi API khi làm mới trang chi tiết bởi @mytharcher
- **[WeCom]** Thêm kiểm tra đường dẫn callback trong middleware gateway bởi @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*Ngày phát hành: 2025-06-09*

#### 🚀 Cải tiến

- **[client]** Cấm di chuyển menu nhóm vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[client]**

  - Đã giải quyết vấn đề khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) bởi @aaaaaajie
  - Sửa lỗi tham số khối lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) bởi @zhangzhonghe
  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) bởi @zhangzhonghe
  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) bởi @zhangzhonghe
- **[undefined]** Xóa phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API bởi @aaaaaajie
- **[Di động]** Tối ưu vấn đề lag popup trên di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) bởi @zhangzhonghe
- **[Trình quản lý nguồn dữ liệu]** Xóa phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) bởi @aaaaaajie
- **[Hành động: Nhập bản ghi]** Sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi nhập dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) bởi @aaaaaajie
- **[Quy trình làm việc]** Sửa lỗi giao diện khi quy trình làm việc không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) bởi @mytharcher
- **[Quy trình làm việc: JavaScript]** Sửa lỗi require cho đường dẫn tương đối bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi xảy ra khi quy trình làm việc bị xóa bởi @mytharcher
  - Tải lại liên kết tệp từ ảnh chụp nhanh để tránh URL hết hạn bởi @mytharcher
  - Sửa biến kích hoạt bởi @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*Ngày phát hành: 2025-06-07*

#### 🐛 Sửa lỗi

- **[client]** Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
- **[database]** sửa: thêm trường creator và updater bị thiếu trong import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) bởi @aaaaaajie
- **[Quy trình làm việc]** Sửa lỗi sự kiện collection ở chế độ tạo hoặc cập nhật không kích hoạt khi tạo mà không có trường thay đổi ([#7015](https://github.com/nocobase/nocobase/pull/7015)) bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm có điều kiện. bởi @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*Ngày phát hành: 2025-06-07*

#### 🐛 Sửa lỗi

- **[client]**

  - Trường quan hệ hiển thị bảng con và biểu mẫu con khi di chuột ở chế độ read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) bởi @zhangzhonghe
  - quy tắc liên kết khối markdown không hoạt động khi được kích hoạt bởi hành động popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) bởi @katherinehhh
- **[Bản địa hóa]** Giải quyết lỗi do văn bản trống ([#7010](https://github.com/nocobase/nocobase/pull/7010)) bởi @2013xile
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ ([#7006](https://github.com/nocobase/nocobase/pull/7006)) bởi @aaaaaajie
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi phê duyệt ủy quyền không thể tiếp tục khi được người khác phê duyệt bởi @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*Ngày phát hành: 2025-06-06*

#### 🚀 Cải tiến

- **[Quy trình làm việc]** Hỗ trợ lọc nhiều trường hơn của quy trình làm việc ([#6995](https://github.com/nocobase/nocobase/pull/6995)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - chuyển trang trong bảng con của khối chi tiết trong modal kích hoạt cảnh báo thay đổi chưa lưu ([#7004](https://github.com/nocobase/nocobase/pull/7004)) bởi @katherinehhh
  - thiếu tiêu đề trường khi đặt biến trong thành phần gán ([#7001](https://github.com/nocobase/nocobase/pull/7001)) bởi @katherinehhh
  - quy tắc liên kết kiểu trường không hoạt động ([#7003](https://github.com/nocobase/nocobase/pull/7003)) bởi @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*Ngày phát hành: 2025-06-05*

#### 🚀 Cải tiến

- **[Hành động: Chỉnh sửa hàng loạt]** Sử dụng `filterByTk` thay vì `filter` ở chế độ đã chọn ([#6994](https://github.com/nocobase/nocobase/pull/6994)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tối ưu vấn đề hiệu suất khi xử lý các tệp XLSX lớn (bộ dữ liệu nhiều hàng/cột), ngăn chặn sự cố hoặc treo hệ thống. bởi @aaaaaajie

#### 🐛 Sửa lỗi

- **[client]**

  - thiếu tiêu đề trường trong thành phần assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) bởi @katherinehhh
  - Mục menu cuối cùng không thể được chọn trong danh sách menu di chuyển ([#6997](https://github.com/nocobase/nocobase/pull/6997)) bởi @zhangzhonghe
- **[Quy trình làm việc]**

  - Sửa lỗi bộ lọc không được cập nhật khi chuyển đổi tab danh mục ([#6989](https://github.com/nocobase/nocobase/pull/6989)) bởi @mytharcher
  - Sửa lỗi thống kê quy trình làm việc không được tự động tạo ([#6993](https://github.com/nocobase/nocobase/pull/6993)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*Ngày phát hành: 2025-06-07*

#### 🚀 Cải tiến

- **[Quy trình làm việc]** Hỗ trợ lọc nhiều trường hơn của quy trình làm việc ([#6995](https://github.com/nocobase/nocobase/pull/6995)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - quy tắc liên kết khối markdown không hoạt động khi được kích hoạt bởi hành động popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) bởi @katherinehhh
  - Trường quan hệ hiển thị bảng con và biểu mẫu con khi di chuột ở chế độ read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) bởi @zhangzhonghe
  - quy tắc liên kết kiểu trường không hoạt động ([#7003](https://github.com/nocobase/nocobase/pull/7003)) bởi @katherinehhh
  - thiếu tiêu đề trường khi đặt biến trong thành phần gán ([#7001](https://github.com/nocobase/nocobase/pull/7001)) bởi @katherinehhh
  - chuyển trang trong bảng con của khối chi tiết trong modal kích hoạt cảnh báo thay đổi chưa lưu ([#7004](https://github.com/nocobase/nocobase/pull/7004)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ ([#7006](https://github.com/nocobase/nocobase/pull/7006)) bởi @aaaaaajie
- **[Bản địa hóa]** Giải quyết lỗi do văn bản trống ([#7010](https://github.com/nocobase/nocobase/pull/7010)) bởi @2013xile
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi phê duyệt ủy quyền không thể tiếp tục khi được người khác phê duyệt bởi @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*Ngày phát hành: 2025-06-05*

#### 🚀 Cải tiến

- **[Hành động: Chỉnh sửa hàng loạt]** Sử dụng `filterByTk` thay vì `filter` ở chế độ đã chọn ([#6994](https://github.com/nocobase/nocobase/pull/6994)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tối ưu vấn đề hiệu suất khi xử lý các tệp XLSX lớn (bộ dữ liệu nhiều hàng/cột), ngăn chặn sự cố hoặc treo hệ thống. bởi @aaaaaajie

#### 🐛 Sửa lỗi

- **[client]**

  - thiếu tiêu đề trường trong thành phần assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) bởi @katherinehhh
  - Mục menu cuối cùng không thể được chọn trong danh sách menu di chuyển ([#6997](https://github.com/nocobase/nocobase/pull/6997)) bởi @zhangzhonghe
- **[Quy trình làm việc]**

  - Sửa lỗi bộ lọc không được cập nhật khi chuyển đổi tab danh mục ([#6989](https://github.com/nocobase/nocobase/pull/6989)) bởi @mytharcher
  - Sửa lỗi thống kê quy trình làm việc không được tự động tạo ([#6993](https://github.com/nocobase/nocobase/pull/6993)) bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*Ngày phát hành: 2025-06-07*

#### 🚀 Cải tiến

- **[Quy trình làm việc]** Hỗ trợ lọc nhiều trường hơn của quy trình làm việc ([#6995](https://github.com/nocobase/nocobase/pull/6995)) bởi @mytharcher
- **[Trình quản lý email]** hỗ trợ giá trị gửi mặc định trong pop-up, hỗ trợ tìm kiếm mờ cho người nhận và sửa các vấn đề bởi @jiannx

#### 🐛 Sửa lỗi

- **[database]** sửa: thêm trường creator và updater bị thiếu trong import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) bởi @aaaaaajie
- **[client]**

  - thiếu tiêu đề trường khi đặt biến trong thành phần gán ([#7001](https://github.com/nocobase/nocobase/pull/7001)) bởi @katherinehhh
  - Trường quan hệ hiển thị bảng con và biểu mẫu con khi di chuột ở chế độ read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) bởi @zhangzhonghe
  - quy tắc liên kết khối markdown không hoạt động khi được kích hoạt bởi hành động popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) bởi @katherinehhh
  - chuyển trang trong bảng con của khối chi tiết trong modal kích hoạt cảnh báo thay đổi chưa lưu ([#7004](https://github.com/nocobase/nocobase/pull/7004)) bởi @katherinehhh
  - quy tắc liên kết kiểu trường không hoạt động ([#7003](https://github.com/nocobase/nocobase/pull/7003)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ ([#7006](https://github.com/nocobase/nocobase/pull/7006)) bởi @aaaaaajie
- **[Bản địa hóa]** Giải quyết lỗi do văn bản trống ([#7010](https://github.com/nocobase/nocobase/pull/7010)) bởi @2013xile
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi thực thi nhiều lần trong quá trình nhập bất đồng bộ bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi phê duyệt ủy quyền không thể tiếp tục khi được người khác phê duyệt bởi @mytharcher
- **[Trình quản lý email]**

  - nhiều khóa chính cho bảng "mailmessagelabels_mailmessages" bởi @jiannx
  - cài đặt pop-up không hiển thị bởi @jiannx
  - tìm kiếm mờ mail để tạo bộ lọc duy nhất bởi @jiannx
  - tìm kiếm mờ người nhận hỗ trợ các trường liên quan bởi @jiannx
  - thêm trường "id" vào mailmessagelabelsMailmessages bởi @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*Ngày phát hành: 2025-06-06*

#### 🚀 Cải tiến

- **[Hành động: Chỉnh sửa hàng loạt]** Sử dụng `filterByTk` thay vì `filter` ở chế độ đã chọn ([#6994](https://github.com/nocobase/nocobase/pull/6994)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tối ưu vấn đề hiệu suất khi xử lý các tệp XLSX lớn (bộ dữ liệu nhiều hàng/cột), ngăn chặn sự cố hoặc treo hệ thống. bởi @aaaaaajie

#### 🐛 Sửa lỗi

- **[client]**

  - thiếu tiêu đề trường trong thành phần assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) bởi @katherinehhh
  - Mục menu cuối cùng không thể được chọn trong danh sách menu di chuyển ([#6997](https://github.com/nocobase/nocobase/pull/6997)) bởi @zhangzhonghe
  - Nội dung hiển thị không chính xác trên các trang được mở qua liên kết popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) bởi @zhangzhonghe
- **[Quy trình làm việc]**

  - Sửa lỗi bộ lọc không được cập nhật khi chuyển đổi tab danh mục ([#6989](https://github.com/nocobase/nocobase/pull/6989)) bởi @mytharcher
  - Sửa lỗi thống kê quy trình làm việc không được tự động tạo ([#6993](https://github.com/nocobase/nocobase/pull/6993)) bởi @mytharcher
