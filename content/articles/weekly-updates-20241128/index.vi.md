---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa plugin REST API"
description: "Các cập nhật trong tuần này bao gồm: tối ưu hóa plugin REST API, hỗ trợ bật hàng loạt plugin trong giao diện, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Ngày phát hành: 2024-11-21*

### 🚀 Cải tiến

- **[Workflow]**

  - Loại bỏ giới hạn trang trong nút truy vấn ([#5694](https://github.com/nocobase/nocobase/pull/5694)) bởi @mytharcher
  - Thay đổi để không xóa các lần thực thi khi workflow bị xóa ([#5666](https://github.com/nocobase/nocobase/pull/5666)) bởi @mytharcher
- **[Nguồn dữ liệu: REST API]** Tối ưu hóa mô tả văn bản của plugin REST API bởi @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Ngày phát hành: 2024-11-21*

### 🐛 Sửa lỗi

- **[build]** Hoàn nguyên công cụ xây dựng client từ `rspack` về `vite` để sửa lỗi lệnh `yarn dev` báo lỗi sau khi chạy lệnh create-nocobase-app ([#5697](https://github.com/nocobase/nocobase/pull/5697)) bởi @gchust
- **[client]** Sửa lỗi cột cố định bên phải không căn chỉnh về bên phải khi có ít cột ([#5690](https://github.com/nocobase/nocobase/pull/5690)) bởi @katherinehhh
- **[Mobile]** Sửa lỗi modal 'Gán giá trị trường' bị che khuất trên trang cấu hình di động ([#5701](https://github.com/nocobase/nocobase/pull/5701)) bởi @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Ngày phát hành: 2024-11-21*

### 🐛 Sửa lỗi

- **[client]**

  - Xóa nút "Đồng bộ từ Cơ sở dữ liệu" trong bộ sưu tập chế độ xem nguồn dữ liệu bên ngoài ([#5696](https://github.com/nocobase/nocobase/pull/5696)) bởi @katherinehhh
  - Thêm dự phòng cho giá trị không phải chuỗi được sử dụng trong `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) bởi @mytharcher
- **[Lịch]** Sửa lỗi sự kiện không hiển thị trong khối lịch khi ngày bắt đầu và ngày kết thúc trải dài qua nhiều tháng ([#5699](https://github.com/nocobase/nocobase/pull/5699)) bởi @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Ngày phát hành: 2024-11-24*

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi chiều rộng nhãn cho các trường liên kết trong bố cục ngang ([#5709](https://github.com/nocobase/nocobase/pull/5709)) bởi @katherinehhh
  - Sửa lỗi liên kết dữ liệu liên kết trong bảng con lồng nhau trong biểu mẫu con nhiều lớp ([#5710](https://github.com/nocobase/nocobase/pull/5710)) bởi @katherinehhh
  - Sửa lỗi chiều rộng nhãn cho các trường liên kết trong bố cục ngang ([#5709](https://github.com/nocobase/nocobase/pull/5709)) bởi @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Ngày phát hành: 2024-11-26*

### 🚀 Cải tiến

- **[client]** Hỗ trợ kích hoạt hàng loạt plugin trong giao diện ([#5730](https://github.com/nocobase/nocobase/pull/5730)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi chiều rộng tối thiểu của nhãn bảng con trong chế độ ngang ([#5719](https://github.com/nocobase/nocobase/pull/5719)) bởi @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Ngày phát hành: 2024-11-27*

### 🎉 Tính năng mới

- **[Xác thực]** Cho phép thêm nhiều trường hơn của bộ sưu tập người dùng trong biểu mẫu đăng ký ([#5741](https://github.com/nocobase/nocobase/pull/5741)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi nhãn tùy chọn đã chọn không được tải trong lần hiển thị đầu tiên. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) bởi @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Ngày phát hành: 2024-11-27*

### 🐛 Sửa lỗi

- **[Thông báo: Tin nhắn trong ứng dụng]** Loại bỏ logic cắt chuỗi tiêu đề tin nhắn trong ứng dụng. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) bởi @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Ngày phát hành: 2024-11-23*

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi thực thi `yarn dev` sau create-nocobase-app dẫn đến lỗi ([#5708](https://github.com/nocobase/nocobase/pull/5708)) bởi @gchust

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
