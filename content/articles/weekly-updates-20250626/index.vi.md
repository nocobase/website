---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài"
description: "Các cập nhật trong tuần này bao gồm: thêm biến bản ghi phê duyệt vào kết quả nút, hỗ trợ trường BIT trong SQL Server cho nguồn dữ liệu bên ngoài, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Ngày phát hành: 2025-06-24*

#### 🐛 Sửa lỗi

- **[client]**

  - Giới hạn phạm vi không chính xác trên các trường ngày tháng có thời gian ([#7107](https://github.com/nocobase/nocobase/pull/7107)) bởi @katherinehhh
  - Khi các biến tham số truy vấn URL trống, các điều kiện phạm vi dữ liệu không bị loại bỏ ([#7104](https://github.com/nocobase/nocobase/pull/7104)) bởi @zhangzhonghe
- **[Mobile]** Sửa lỗi z-index của popup trên thiết bị di động ([#7110](https://github.com/nocobase/nocobase/pull/7110)) bởi @zhangzhonghe
- **[Lịch]** Vấn đề trường ngày tháng trong biểu mẫu tạo nhanh của khối lịch ([#7106](https://github.com/nocobase/nocobase/pull/7106)) bởi @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Ngày phát hành: 2025-06-20*

#### 🐛 Sửa lỗi

- **[Quy trình làm việc]**

  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7099](https://github.com/nocobase/nocobase/pull/7099)) bởi @mytharcher
  - Sửa lỗi thống kê bị xóa theo tầng bởi phiên bản quy trình làm việc không hiện tại ([#7103](https://github.com/nocobase/nocobase/pull/7103)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Khắc phục sự cố đăng nhập thất bại sau khi nhập hàng loạt tên người dùng và mật khẩu ([#7076](https://github.com/nocobase/nocobase/pull/7076)) bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Chỉ người tham gia mới có thể xem (lấy) chi tiết phê duyệt bởi @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Ngày phát hành: 2025-06-18*

#### 🐛 Sửa lỗi

- **[client]**

  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
  - Gán giá trị trường: Không thể xóa dữ liệu cho các trường quan hệ ([#7086](https://github.com/nocobase/nocobase/pull/7086)) bởi @zhangzhonghe
  - Chức năng căn chỉnh văn bản cột bảng không hoạt động ([#7094](https://github.com/nocobase/nocobase/pull/7094)) bởi @zhangzhonghe
- **[Quy trình làm việc]** Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7091](https://github.com/nocobase/nocobase/pull/7091)) bởi @mytharcher
- **[Trình quản lý tệp]** Sửa lỗi trường tệp đính kèm không thể được cập nhật trong quy trình phê duyệt ([#7093](https://github.com/nocobase/nocobase/pull/7093)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sử dụng so sánh thay vì logic ngầm để tránh các vấn đề về kiểu dữ liệu bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Ngày phát hành: 2025-06-19*

#### 🎉 Tính năng mới

- **[Quy trình làm việc: Phê duyệt]** Thêm biến bản ghi phê duyệt vào kết quả nút bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Chức năng căn chỉnh văn bản cột bảng không hoạt động ([#7094](https://github.com/nocobase/nocobase/pull/7094)) bởi @zhangzhonghe
  - Gán giá trị trường: Không thể xóa dữ liệu cho các trường quan hệ ([#7086](https://github.com/nocobase/nocobase/pull/7086)) bởi @zhangzhonghe
  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
- **[Trình quản lý tệp]** Sửa lỗi trường tệp đính kèm không thể được cập nhật trong quy trình phê duyệt ([#7093](https://github.com/nocobase/nocobase/pull/7093)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7091](https://github.com/nocobase/nocobase/pull/7091)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sử dụng so sánh thay vì logic ngầm để tránh các vấn đề về kiểu dữ liệu bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Ngày phát hành: 2025-06-25*

#### 🎉 Tính năng mới

- **[Trình quản lý nguồn dữ liệu]** ✨ Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài ([#6979](https://github.com/nocobase/nocobase/pull/6979)) bởi @aaaaaajie
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Hỗ trợ yêu cầu `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) bởi @shushu992
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài bởi @aaaaaajie

#### 🐛 Sửa lỗi

- **[client]**

  - Khi các biến tham số truy vấn URL trống, các điều kiện phạm vi dữ liệu không bị loại bỏ ([#7104](https://github.com/nocobase/nocobase/pull/7104)) bởi @zhangzhonghe
  - Giới hạn phạm vi không chính xác trên các trường ngày tháng có thời gian ([#7107](https://github.com/nocobase/nocobase/pull/7107)) bởi @katherinehhh
- **[Mobile]** Sửa lỗi z-index của popup trên thiết bị di động ([#7110](https://github.com/nocobase/nocobase/pull/7110)) bởi @zhangzhonghe
- **[Lịch]** Vấn đề trường ngày tháng trong biểu mẫu tạo nhanh của khối lịch ([#7106](https://github.com/nocobase/nocobase/pull/7106)) bởi @katherinehhh
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi API biến cũ gây ra lỗi bởi @mytharcher
  - Sửa kiểu dáng trên thiết bị di động bởi @mytharcher
  - Sửa lỗi xảy ra khi bộ sưu tập liên quan đến phê duyệt bị xóa bởi @mytharcher
- **[Trình quản lý email]** tệp đính kèm không hiển thị bởi @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Ngày phát hành: 2025-06-20*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường BIT trong SQL Server cho các nguồn dữ liệu bên ngoài. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Thêm biến bản ghi phê duyệt vào kết quả nút bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Tự động ẩn thanh hành động khối thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe
- **[Xác minh]** Loại bỏ các tùy chọn người xác minh khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile
- **[Quy trình làm việc]** Điều chỉnh API của `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện trước hành động]** Điều chỉnh API biến bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Điều chỉnh API biến bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Chức năng căn chỉnh văn bản cột bảng không hoạt động ([#7094](https://github.com/nocobase/nocobase/pull/7094)) bởi @zhangzhonghe
  - Gán giá trị trường: Không thể xóa dữ liệu cho các trường quan hệ ([#7086](https://github.com/nocobase/nocobase/pull/7086)) bởi @zhangzhonghe
  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
  - Điều kiện kiểu dáng trên các trường cột bảng con không được áp dụng chính xác ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh
  - Lọc qua các trường bộ sưu tập quan hệ trong biểu mẫu bộ lọc không hợp lệ ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe
  - Các biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh
  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh
  - Lỗi khi nhấp vào nút bộ lọc ([#7100](https://github.com/nocobase/nocobase/pull/7100)) bởi @zhangzhonghe
- **[database]** hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos
- **[Quy trình làm việc]**

  - Sửa lỗi thống kê bị xóa theo tầng bởi phiên bản quy trình làm việc không hiện tại ([#7103](https://github.com/nocobase/nocobase/pull/7103)) bởi @mytharcher
  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7099](https://github.com/nocobase/nocobase/pull/7099)) bởi @mytharcher
  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7091](https://github.com/nocobase/nocobase/pull/7091)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Khắc phục sự cố đăng nhập thất bại sau khi nhập hàng loạt tên người dùng và mật khẩu ([#7076](https://github.com/nocobase/nocobase/pull/7076)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa lỗi trường tệp đính kèm không thể được cập nhật trong quy trình phê duyệt ([#7093](https://github.com/nocobase/nocobase/pull/7093)) bởi @mytharcher
- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Chuỗi]** Sửa lỗi tính toán chuỗi số nguyên lớn dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sử dụng so sánh thay vì logic ngầm để tránh các vấn đề về kiểu dữ liệu bởi @mytharcher
  - Chỉ người tham gia mới có thể xem (lấy) chi tiết phê duyệt bởi @mytharcher
- **[Trình quản lý email]** lỗi xóa email bởi @jiannx
