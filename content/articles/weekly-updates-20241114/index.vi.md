---
title: "Cập nhật hàng tuần NocoBase: Cải thiện khả năng sử dụng quy trình làm việc"
description: "Cập nhật hàng tuần NocoBase 2024-11-14"
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase hiện đang được cập nhật với hai nhánh: `main` và `next`.

* `main`：Phiên bản ổn định nhất hiện nay, khuyến nghị cài đặt;
* `next`：Phiên bản Alpha, bao gồm một số tính năng mới chưa được phát hành. Phiên bản này có thể chưa hoàn toàn ổn định, phù hợp cho nhà phát triển hoặc người thử nghiệm trải nghiệm các tính năng mới trước hoặc tiến hành kiểm tra tương thích.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Ngày phát hành: 2024-11-06*

### 🐛 Sửa lỗi

- **[client]** quyền cho trường liên kết trong bảng dựa trên quyền của trường liên kết tương ứng ([#5569](https://github.com/nocobase/nocobase/pull/5569)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi]** Sửa lỗi xuất với i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) bởi @chareice
- **[Hành động: Nhập bản ghi]** sửa lỗi nhập liên kết belongs to ([#5417](https://github.com/nocobase/nocobase/pull/5417)) bởi @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Ngày phát hành: 2024-11-08*

### 🚀 Cải tiến

- **[Xác thực]** Tối ưu hóa thông báo lỗi cho đăng nhập và đăng ký ([#5612](https://github.com/nocobase/nocobase/pull/5612)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi giá trị mặc định trong bảng con ([#5607](https://github.com/nocobase/nocobase/pull/5607)) bởi @zhangzhonghe
  - Sửa lỗi hỗ trợ tìm kiếm mờ cho các trường liên kết với trường tiêu đề kiểu chuỗi ([#5611](https://github.com/nocobase/nocobase/pull/5611)) bởi @katherinehhh
- **[Xác thực]** Sửa lỗi người dùng không thể đổi mật khẩu khi đăng nhập bằng bộ xác thực không dùng mật khẩu ([#5609](https://github.com/nocobase/nocobase/pull/5609)) bởi @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Ngày phát hành: 2024-11-11*

### 🚀 Cải tiến

- **[client]** hỗ trợ ẩn mục menu ([#5624](https://github.com/nocobase/nocobase/pull/5624)) bởi @chenos
- **[server]** thêm biến môi trường DB_SQL_BENCHMARK ([#5615](https://github.com/nocobase/nocobase/pull/5615)) bởi @chareice

### 🐛 Sửa lỗi

- **[client]** hỗ trợ bộ sưu tập tệp làm mục tiêu của liên kết một-nhiều ([#5619](https://github.com/nocobase/nocobase/pull/5619)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Sửa lỗi không thể nhập dữ liệu quan hệ nhiều-nhiều qua trường id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) bởi @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Ngày phát hành: 2024-11-13*

### 🚀 Cải tiến

- **[client]** hỗ trợ trường một-một và nhiều-nhiều (mảng) sử dụng bộ sưu tập tệp ([#5637](https://github.com/nocobase/nocobase/pull/5637)) bởi @mytharcher
- **[evaluators]** sử dụng Formula.js làm bộ đánh giá mặc định trong nút tính toán ([#5626](https://github.com/nocobase/nocobase/pull/5626)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi đặt lại tiêu đề nút bộ lọc về mặc định ([#5635](https://github.com/nocobase/nocobase/pull/5635)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa lỗi không thể nhập dữ liệu quan hệ nhiều-nhiều qua trường id ([#5623](https://github.com/nocobase/nocobase/pull/5623)) bởi @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Ngày phát hành: 2024-11-07*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ tùy chọn cấu hình ẩn cột bảng ([#5597](https://github.com/nocobase/nocobase/pull/5597)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[Trình quản lý nguồn dữ liệu]** Điều chỉnh các danh mục bảng để tải từ nguồn dữ liệu chính và loại bỏ khỏi phạm vi toàn cục ([#5602](https://github.com/nocobase/nocobase/pull/5602)) bởi @katherinehhh
- **[Trình quản lý thông báo]** cập nhật cấu trúc tin nhắn để bao gồm người nhận trong dữ liệu nhật ký thông báo ([#5603](https://github.com/nocobase/nocobase/pull/5603)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi thanh cuộn bảng trong chế độ không cấu hình ([#5599](https://github.com/nocobase/nocobase/pull/5599)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** sửa lỗi nhập với trường ngày tháng ([#5606](https://github.com/nocobase/nocobase/pull/5606)) bởi @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Ngày phát hành: 2024-11-11*

### 🎉 Tính năng mới

- **[client]** hỗ trợ thuộc tính dấu phân cách cho thành phần biểu thức biến ([#5620](https://github.com/nocobase/nocobase/pull/5620)) bởi @mytharcher
- **[Workflow]** hỗ trợ di chuyển các nút hạ nguồn vào nhánh mới khi tạo nút có nhánh ([#5570](https://github.com/nocobase/nocobase/pull/5570)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]**

  - tối ưu hóa danh sách trường: loại bỏ trường quan hệ và thẻ Trùng lặp ([#5616](https://github.com/nocobase/nocobase/pull/5616)) bởi @katherinehhh
  - hỗ trợ `getFilterTargetKey()` từ lớp `Collection` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** tái cấu trúc api collections:list để cải thiện hiệu suất ([#5610](https://github.com/nocobase/nocobase/pull/5610)) bởi @chareice
- **[Trình quản lý thông báo]** cải thiện giao diện người dùng của trình quản lý kênh thông báo ([#5621](https://github.com/nocobase/nocobase/pull/5621)) bởi @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Ngày phát hành: 2024-11-11*

### 🎉 Tính năng mới

- **[WeCom]**
  - Hỗ trợ đăng nhập tự động khi truy cập trang ứng dụng trong trình duyệt WeCom bởi @chenzhizdt
  - Hỗ trợ sử dụng Markdown và thẻ mẫu trong thông báo bởi @chenzhizdt

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó cho phép các nhóm thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
