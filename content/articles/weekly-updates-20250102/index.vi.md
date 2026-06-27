---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: tối ưu hóa quy trình làm việc, sửa lỗi và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Ngày phát hành: 2024-12-26*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi chuyển đổi độ chính xác của trường UnixTimestamp ([#5931](https://github.com/nocobase/nocobase/pull/5931)) bởi @chenos
- **[Hành động: Sao chép bản ghi]** Sửa lỗi trường liên kết o2o không hiển thị trường bộ sưu tập đích đã cấu hình trong khối chi tiết và biểu mẫu ([#5921](https://github.com/nocobase/nocobase/pull/5921)) bởi @katherinehhh
- **[Trình quản lý sao lưu]** Sửa lỗi sao lưu khi phiên bản mysqldump dưới 8 bởi @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Ngày phát hành: 2024-12-31*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ sử dụng biến "Bản ghi đã chọn trong bảng" cho trường mảng m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) bởi @2013xile

#### 🚀 Cải tiến

- **[undefined]** Bật plugin chủ đề theo mặc định ([#5957](https://github.com/nocobase/nocobase/pull/5957)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: Chính]** Thêm xác thực trùng tên để ngăn người dùng tạo Bộ sưu tập trùng tên với Bộ sưu tập hệ thống ([#5962](https://github.com/nocobase/nocobase/pull/5962)) bởi @chareice
- **[Quy trình làm việc]** Tránh sử dụng sai biến phạm vi ngày tháng ở hầu hết các nơi trừ thành phần bộ lọc ([#5954](https://github.com/nocobase/nocobase/pull/5954)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]**

  - Sửa lỗi trong hành động xóa khi filterByTk với tham số filter không thể xóa dữ liệu ([#5976](https://github.com/nocobase/nocobase/pull/5976)) bởi @chareice
  - Các phương thức firstOrCreate và updateOrCreate của repository mất ngữ cảnh ([#5973](https://github.com/nocobase/nocobase/pull/5973)) bởi @chenos
- **[client]**

  - Sửa lỗi khi thêm trường quan hệ một-một trong biểu mẫu ([#5975](https://github.com/nocobase/nocobase/pull/5975)) bởi @katherinehhh
  - Sửa lỗi gán trường trong bảng con khi chọn lại dữ liệu sau khi xóa dữ liệu ([#5958](https://github.com/nocobase/nocobase/pull/5958)) bởi @katherinehhh
  - Sửa lỗi khối bảng gây ra bởi dữ liệu chứa trường tên 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: Chính]** Sửa lỗi hỗ trợ kế thừa với trường unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) bởi @chareice
- **[Quy trình làm việc]** Sửa lỗi khối chi tiết con gây ra lỗi trong cấu hình giao diện nút thủ công ([#5953](https://github.com/nocobase/nocobase/pull/5953)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Ngày phát hành: 2024-12-27*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi hiển thị ô bảng không mong muốn trong plugin của bên thứ ba ([#5934](https://github.com/nocobase/nocobase/pull/5934)) bởi @zhangzhonghe
  - Sửa lỗi nút xóa bị vô hiệu hóa trong trang quản lý mẫu khối ([#5922](https://github.com/nocobase/nocobase/pull/5922)) bởi @zhangzhonghe
- **[Xác thực]** Sửa lỗi trường biểu mẫu trống khi mở drawer chỉnh sửa trong trang cài đặt Xác thực ([#5949](https://github.com/nocobase/nocobase/pull/5949)) bởi @chenos
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]**

  - Sửa lỗi kiểm thử thất bại trên SQLite bởi @mytharcher
  - Sửa lỗi các trường hợp kiểm thử của trình kích hoạt hành động tùy chỉnh bởi @mytharcher
- **[Quy trình làm việc: Sự kiện trước hành động]** Sửa lỗi các trường hợp kiểm thử của bộ chặn yêu cầu bởi @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Ngày phát hành: 2024-12-31*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi bộ chọn phạm vi ngày trong biểu mẫu/hành động bộ lọc không hiển thị bộ chọn thời gian khi showTime được đặt ([#5956](https://github.com/nocobase/nocobase/pull/5956)) bởi @katherinehhh
  - Sửa lỗi nhấp vào trường liên kết không mở hộp thoại popup ([#5972](https://github.com/nocobase/nocobase/pull/5972)) bởi @zhangzhonghe
- **[Quy trình làm việc: Tin nhắn phản hồi]** Sửa lỗi tên tham số sai được sử dụng bởi @mytharcher

### v1.5.0-beta.20

*Ngày phát hành: 2024-12-31*

#### 🎉 Tính năng mới

- **[[Hành động: Nhập bản ghi (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Nâng cao khả năng nhập dữ liệu với hỗ trợ nhập không đồng bộ, nhập hàng triệu bản ghi, xác định và xử lý dữ liệu trùng lặp, cập nhật dữ liệu và kích hoạt quy trình làm việc.
- **[[Hành động: Xuất bản ghi (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Nâng cao khả năng xuất dữ liệu với hỗ trợ xuất không đồng bộ, xuất hàng triệu bản ghi và xuất tệp đính kèm.

## Về NocoBase

NocoBase là một nền tảng không-code, mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó cho phép các nhóm thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
