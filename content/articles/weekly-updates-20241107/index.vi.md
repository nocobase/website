---
title: "Cập nhật hàng tuần NocoBase: Thêm kênh thông báo mới"
description: "Cập nhật hàng tuần NocoBase 2024-11-07"
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase hiện đang được cập nhật với hai nhánh: `main` và `next`.

* `main`：Phiên bản ổn định nhất hiện nay, khuyến nghị cài đặt;
* `next`：Phiên bản Alpha, bao gồm một số tính năng mới chưa được phát hành. Phiên bản này có thể chưa hoàn toàn ổn định, phù hợp cho các nhà phát triển hoặc người thử nghiệm trải nghiệm các tính năng mới trước hoặc tiến hành kiểm tra tương thích.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Ngày phát hành: 2024-11-05*

### 🚀 Cải tiến

- **[client]** độ chính xác số có thể được cấu hình lên đến 8 chữ số ([#5552](https://github.com/nocobase/nocobase/pull/5552)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi kiểu liên kết không cập nhật trong biểu mẫu. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) bởi @sheldon66
- **[Auth: API keys]** Sửa đường dẫn URL cho trang cài đặt khóa API ([#5562](https://github.com/nocobase/nocobase/pull/5562)) bởi @2013xile
- **[Mobile]** Sửa lỗi hình ảnh xem trước bị che bởi trang ([#5535](https://github.com/nocobase/nocobase/pull/5535)) bởi @zhangzhonghe
- **[Block: Map]** Sửa lỗi hiển thị bản đồ trong chi tiết con và hiển thị giá trị không chính xác cho các trường rỗng ([#5526](https://github.com/nocobase/nocobase/pull/5526)) bởi @katherinehhh
- **[Collection: Tree]** Sửa lỗi khi cập nhật collection đường dẫn ([#5551](https://github.com/nocobase/nocobase/pull/5551)) bởi @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Ngày phát hành: 2024-11-05*

### 🎉 Tính năng mới

- **[Auth: OIDC]** Thêm tùy chọn "bật đăng xuất do RP khởi tạo" bởi @2013xile

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bộ lọc khi đặt trường chọn đơn làm trường tiêu đề trong lựa chọn liên kết ([#5581](https://github.com/nocobase/nocobase/pull/5581)) bởi @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Ngày phát hành: 2024-10-31*

### 🎉 Tính năng mới

- **[WeCom]** Thêm kênh thông báo WeCom bởi @chenzhizdt

### 🚀 Cải tiến

- **[client]** khôi phục giá trị mặc định khi xóa tiêu đề trường ([#5549](https://github.com/nocobase/nocobase/pull/5549)) bởi @katherinehhh
- **[Notification manager]**

  - Thêm các thành phần UserSelect và UserAddition để hợp lý hóa việc phát triển các kênh thông báo ([#5553](https://github.com/nocobase/nocobase/pull/5553)) bởi @2013xile
  - thêm API để lấy đăng ký loại kênh của plugin thông báo ([#5531](https://github.com/nocobase/nocobase/pull/5531)) bởi @mytharcher
  - điều chỉnh tên đăng ký loại kênh của plugin thông báo ([#5532](https://github.com/nocobase/nocobase/pull/5532)) bởi @mytharcher
  - thêm API của plugin trình quản lý thông báo để lấy tất cả các loại đã đăng ký ([#5529](https://github.com/nocobase/nocobase/pull/5529)) bởi @mytharcher
- **[Notification: In-app message]** Cải thiện giao diện người dùng của thông báo trong ứng dụng và thêm một số nhật ký. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[database]**

  - sửa lỗi cập nhật tùy chọn collection với khóa mục tiêu bộ lọc ([#5558](https://github.com/nocobase/nocobase/pull/5558)) bởi @chareice
  - sửa lỗi giá trị primaryKeyField sai trong sequelize khi làm việc với nhiều khóa mục tiêu bộ lọc ([#5556](https://github.com/nocobase/nocobase/pull/5556)) bởi @chareice
- **[client]**

  - Sửa lỗi các thành phần khung xương trong khối bảng không biến mất ([#5548](https://github.com/nocobase/nocobase/pull/5548)) bởi @zhangzhonghe
  - Sửa lỗi với hành động xóa, dấu ba chấm văn bản và hiển thị dữ liệu mới trong bảng con ([#5523](https://github.com/nocobase/nocobase/pull/5523)) bởi @katherinehhh
- **[Data source manager]** Sửa lỗi xóa nguồn dữ liệu ở trạng thái lỗi ([#5554](https://github.com/nocobase/nocobase/pull/5554)) bởi @chareice
- **[Notification: Email]**

  - sửa lỗi truy vấn người dùng theo id trong thông báo email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) bởi @mytharcher
  - sửa lỗi thiếu chủ đề trong thông báo email dựa trên id người dùng ([#5534](https://github.com/nocobase/nocobase/pull/5534)) bởi @mytharcher
  - sửa lỗi đường dẫn trường phản ứng trong biểu mẫu động của thông báo email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) bởi @mytharcher
- **[Collection field: Many to many (array)]** Sửa lỗi thành phần chọn cho trường nhiều-nhiều (mảng) chỉ có một tùy chọn ([#5544](https://github.com/nocobase/nocobase/pull/5544)) bởi @2013xile
- **[Notification manager]** sửa lỗi trang bị treo do sai loại kênh ([#5528](https://github.com/nocobase/nocobase/pull/5528)) bởi @mytharcher
- **[Workflow: SQL node]** Sửa lỗi sse gây ra "waitForLoadState('networkidle')" hết thời gian chờ ([#5524](https://github.com/nocobase/nocobase/pull/5524)) bởi @hongboji
- **[Field component: mask]** Sửa lỗi dữ liệu gốc không thể hiển thị bằng cách nhấp chuột nếu thành phần ở trạng thái chỉ đọc bởi @gchust
- **[Workflow: Custom action event]** Sửa lỗi sse gây ra "waitForLoadState('networkidle')" hết thời gian chờ bởi @hongboji
- **[WeCom]** Sửa lỗi phản hồi 404 không tìm thấy khi vào ứng dụng từ bảng điều khiển WeCom bởi @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Ngày phát hành: 2024-11-04*

### 🎉 Tính năng mới

- **[client]**
  - [table] Thêm hành động 'popup' để cấu hình các hành động ([#5580](https://github.com/nocobase/nocobase/pull/5580)) bởi @bignof
  - "Trường cấu hình" hỗ trợ lọc trường ([#5471](https://github.com/nocobase/nocobase/pull/5471)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** thêm hỗ trợ cho các tham số Bố cục (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) bởi @katherinehhh
- **[Multi-app manager]** khởi động nhanh không đồng bộ ứng dụng con ([#5571](https://github.com/nocobase/nocobase/pull/5571)) bởi @chenos
- **[Collection: Tree]** Cải thiện logic tải của collection với thuộc tính schema ([#5541](https://github.com/nocobase/nocobase/pull/5541)) bởi @chareice

### 🐛 Sửa lỗi

- **[client]**
  - trường tìm kiếm nên được tìm kiếm dựa trên văn bản đã dịch ([#5572](https://github.com/nocobase/nocobase/pull/5572)) bởi @katherinehhh
  - Sửa lỗi thêm dữ liệu vào bảng con sau khi xóa ([#5566](https://github.com/nocobase/nocobase/pull/5566)) bởi @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Ngày phát hành: 2024-11-05*

### 🐛 Sửa lỗi

- **[client]** xóa hộp tìm kiếm khi thêm khối vào trang ([#5577](https://github.com/nocobase/nocobase/pull/5577)) bởi @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Ngày phát hành: 2024-11-06*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi phân giải khi cấu hình trường sau khi thêm nguồn dữ liệu mới ([#5576](https://github.com/nocobase/nocobase/pull/5576)) bởi @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Ngày phát hành: 2024-11-06*

### 🎉 Tính năng mới

- **[utils]** hỗ trợ sử dụng handlebars trong nội dung tin nhắn ([#5559](https://github.com/nocobase/nocobase/pull/5559)) bởi @mytharcher
- **[client]** khối bảng hỗ trợ cài đặt kích thước ([#5563](https://github.com/nocobase/nocobase/pull/5563)) bởi @katherinehhh
- **[Notification: In-app message]** hỗ trợ thông báo trong ứng dụng cho ứng dụng khách di động ([#5560](https://github.com/nocobase/nocobase/pull/5560)) bởi @sheldon66

### 🚀 Cải tiến

- **[Notification manager]** Thêm người nhận vào nhật ký thông báo ([#5561](https://github.com/nocobase/nocobase/pull/5561)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi khi mở popup trong kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) bởi @zhangzhonghe
- **[Access control]** Sửa lỗi acl meta với nhiều khóa mục tiêu bộ lọc ([#5598](https://github.com/nocobase/nocobase/pull/5598)) bởi @chareice

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó cho phép các nhóm thích ứng nhanh chóng với các thay đổi đồng thời giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
