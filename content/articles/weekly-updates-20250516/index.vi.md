---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: cho phép chỉnh sửa nhiều hơn một bản nháp, thêm nhiều cài đặt kích thước tích hợp cho hình ảnh trạng thái đọc, và các cải tiến khác."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Ngày phát hành: 2025-05-09*

#### 🐛 Sửa lỗi

- **[database]** Nhập thất bại do giá trị trường văn bản. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) bởi @aaaaaajie
- **[client]** Các trường ẩn vẫn được hiển thị ([#6844](https://github.com/nocobase/nocobase/pull/6844)) bởi @zhangzhonghe
- **[Hành động: Xuất bản ghi]** Sửa lỗi xuất văn bản dài. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) bởi @aaaaaajie
- **[Quy trình: Sự kiện sau hành động]** Sửa lỗi biến người dùng đã thao tác không thể truy cập trong mẫu Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) bởi @mytharcher
- **[Khối: Bảng hành động]** Màu của Bảng hành động không chính xác trong chế độ tối ([#6842](https://github.com/nocobase/nocobase/pull/6842)) bởi @zhangzhonghe
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xuất văn bản dài. bởi @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Ngày phát hành: 2025-05-13*

#### 🚀 Cải tiến

- **[Quy trình]** Cho phép sửa đổi nhiều hơn một bản nháp ([#6851](https://github.com/nocobase/nocobase/pull/6851)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Hành động: Xuất bản ghi]** Đã sửa lỗi xuất giá trị rỗng trong các liên kết lồng nhau và url tệp đính kèm ([#6845](https://github.com/nocobase/nocobase/pull/6845)) bởi @aaaaaajie
- **[Quy trình: Nút thủ công]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ ([#6783](https://github.com/nocobase/nocobase/pull/6783)) bởi @mytharcher
- **[Quy trình: bộ kiểm thử]** Sửa lỗi các trường hợp kiểm thử thất bại do plugin cài sẵn bắt buộc ([#6839](https://github.com/nocobase/nocobase/pull/6839)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Sửa lỗi khi lọc các trường m2m lồng nhau ([#6855](https://github.com/nocobase/nocobase/pull/6855)) bởi @2013xile
- **[Quy trình: Quy trình con]** Sửa lỗi trigger không xác định gây treo trang bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** url truy cập hết hạn không hợp lệ bởi @jiannx
- **[Quy trình: Phê duyệt]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ bởi @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Ngày phát hành: 2025-05-15*

#### 🚀 Cải tiến

- **[client]** thêm nhiều cài đặt kích thước tích hợp sẵn cho hình ảnh trạng thái đọc ([#6868](https://github.com/nocobase/nocobase/pull/6868)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[Quản lý tệp]**

  - Sửa kiểu dữ liệu ([#6873](https://github.com/nocobase/nocobase/pull/6873)) bởi @mytharcher
  - Sửa lỗi tạo bản ghi tệp không có quyền khóa ngoại ([#6863](https://github.com/nocobase/nocobase/pull/6863)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất ([#6861](https://github.com/nocobase/nocobase/pull/6861)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Khối biểu đồ không hiển thị khi được thêm vào cửa sổ bật lên được kích hoạt từ các hành động cấp khối ([#6864](https://github.com/nocobase/nocobase/pull/6864)) bởi @2013xile
- **[Hành động: Xuất bản ghi Pro]** cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất pro bởi @katherinehhh
- **[Lưu trữ tệp: S3(Pro)]** Thay đổi để sử dụng trường collection để định vị bộ lưu trữ bởi @mytharcher
- **[Trình quản lý sao lưu]** Sửa lỗi kiểu dữ liệu trong bản build bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Ngày phát hành: 2025-05-15*

#### 🎉 Tính năng mới

- **[client]** quy tắc liên kết hành động hỗ trợ biến 'biểu mẫu hiện tại' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) bởi @katherinehhh
- **[undefined]** Thêm nhật ký của plugin nhập bởi @aaaaaajie
- **[Hành động: Nhập bản ghi]** Thêm nhật ký của plugin nhập ([#6841](https://github.com/nocobase/nocobase/pull/6841)) bởi @aaaaaajie

#### 🚀 Cải tiến

- **[client]** thêm nhiều cài đặt kích thước tích hợp sẵn cho hình ảnh trạng thái đọc ([#6868](https://github.com/nocobase/nocobase/pull/6868)) bởi @katherinehhh
- **[Trường collection: Tệp đính kèm(URL)]** thêm nhiều kích thước tích hợp sẵn vào trường URL tệp đính kèm cho trạng thái đọc ([#6871](https://github.com/nocobase/nocobase/pull/6871)) bởi @katherinehhh
- **[Quy trình]** Cho phép sửa đổi nhiều hơn một bản nháp ([#6851](https://github.com/nocobase/nocobase/pull/6851)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - vấn đề liên kết nút trong khối chi tiết ([#6867](https://github.com/nocobase/nocobase/pull/6867)) bởi @katherinehhh
  - xóa giá trị bên phải khi toán tử thay đổi trong quy tắc liên kết ([#6862](https://github.com/nocobase/nocobase/pull/6862)) bởi @katherinehhh
  - đánh giá không chính xác các toán tử cho biến ngày trong điều kiện liên kết ([#6825](https://github.com/nocobase/nocobase/pull/6825)) bởi @katherinehhh
  - thiếu toán tử khi chuyển đổi trong quy tắc liên kết ([#6857](https://github.com/nocobase/nocobase/pull/6857)) bởi @katherinehhh
  - phân tích cú pháp biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - cải thiện kiểu thành phần giá trị quy tắc liên kết ([#6836](https://github.com/nocobase/nocobase/pull/6836)) bởi @katherinehhh
  - phân tích cú pháp biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - Các trường ẩn vẫn được hiển thị ([#6844](https://github.com/nocobase/nocobase/pull/6844)) bởi @zhangzhonghe
- **[database]** Nhập thất bại do giá trị trường văn bản. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) bởi @aaaaaajie
- **[Trực quan hóa dữ liệu]**

  - Khối biểu đồ không hiển thị khi được thêm vào cửa sổ bật lên được kích hoạt từ các hành động cấp khối ([#6864](https://github.com/nocobase/nocobase/pull/6864)) bởi @2013xile
  - Sửa lỗi khi lọc các trường m2m lồng nhau ([#6855](https://github.com/nocobase/nocobase/pull/6855)) bởi @2013xile
- **[Hành động: Xuất bản ghi]**

  - cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất ([#6861](https://github.com/nocobase/nocobase/pull/6861)) bởi @katherinehhh
  - Đã sửa lỗi xuất giá trị rỗng trong các liên kết lồng nhau và url tệp đính kèm ([#6845](https://github.com/nocobase/nocobase/pull/6845)) bởi @aaaaaajie
  - Sửa lỗi xuất văn bản dài. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) bởi @aaaaaajie
- **[Quản lý tệp]** Sửa lỗi tạo bản ghi tệp không có quyền khóa ngoại ([#6863](https://github.com/nocobase/nocobase/pull/6863)) bởi @mytharcher
- **[Quy trình]** Sửa lỗi điều hướng quay lại không hoạt động khi mở trực tiếp liên kết cửa sổ bật lên trong trung tâm tác vụ ([#6853](https://github.com/nocobase/nocobase/pull/6853)) bởi @mytharcher
- **[Hành động: Nhân bản bản ghi]** cửa sổ modal đóng khi nhấp chuột đầu tiên vào đầu vào khi chỉnh sửa dữ liệu đã nhân bản ([#6848](https://github.com/nocobase/nocobase/pull/6848)) bởi @katherinehhh
- **[Khối: mẫu]** Sau khi lưu dưới dạng mẫu kế thừa, lỗi khi mở cửa sổ bật lên ([#6840](https://github.com/nocobase/nocobase/pull/6840)) bởi @gchust
- **[Quy trình: bộ kiểm thử]** Sửa lỗi các trường hợp kiểm thử thất bại do plugin cài sẵn bắt buộc ([#6839](https://github.com/nocobase/nocobase/pull/6839)) bởi @mytharcher
- **[Quy trình: Sự kiện sau hành động]** Sửa lỗi biến người dùng đã thao tác không thể truy cập trong mẫu Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) bởi @mytharcher
- **[Quy trình: Nút thủ công]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ ([#6783](https://github.com/nocobase/nocobase/pull/6783)) bởi @mytharcher
- **[Khối: Bảng hành động]** Màu của Bảng hành động không chính xác trong chế độ tối ([#6842](https://github.com/nocobase/nocobase/pull/6842)) bởi @zhangzhonghe
- **[Hành động: Xuất bản ghi Pro]**

  - cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất pro bởi @katherinehhh
  - Sửa lỗi xuất văn bản dài. bởi @aaaaaajie
- **[Quy trình: Quy trình con]** Sửa lỗi trigger không xác định gây treo trang bởi @mytharcher
- **[In mẫu]**

  - Sửa lỗi không tìm thấy bộ định dạng. bởi @sheldon66
  - Sửa lỗi không tìm thấy bộ định dạng bởi @sheldon66
- **[Lưu trữ tệp: S3(Pro)]**

  - Thay đổi để sử dụng trường collection để định vị bộ lưu trữ bởi @mytharcher
  - url truy cập hết hạn không hợp lệ bởi @jiannx
- **[Quy trình: Phê duyệt]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ bởi @mytharcher
