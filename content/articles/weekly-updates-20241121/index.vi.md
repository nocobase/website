---
title: "Cập nhật hàng tuần NocoBase: Tối ưu giao diện di động"
description: "Các cập nhật trong tuần này bao gồm: tối ưu giao diện di động, hỗ trợ cấu hình biểu mẫu đăng ký, điều chỉnh độ rộng cột mặc định trong khối bảng, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**Tuần này chúng tôi đã thực hiện các điều chỉnh đối với việc phát hành phiên bản. Các bản cập nhật phiên bản tiếp theo sẽ bao gồm ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến các tính năng tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho sản xuất.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Ngày phát hành: 2024-11-14*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi không thể xóa tiêu đề quy tắc liên kết trong khi chỉnh sửa ([#5644](https://github.com/nocobase/nocobase/pull/5644)) bởi @katherinehhh
- **[Comments]** Sửa lỗi cài đặt phạm vi dữ liệu không hoạt động trong khối bình luận bởi @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Ngày phát hành: 2024-11-19*

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi kiểm tra quyền trường không bị ảnh hưởng bởi ngữ cảnh trường liên kết ([#5672](https://github.com/nocobase/nocobase/pull/5672)) bởi @katherinehhh
  - Sửa lỗi quy tắc liên kết lưu thay đổi giá trị rỗng thành giá trị rỗng tĩnh ([#5667](https://github.com/nocobase/nocobase/pull/5667)) bởi @katherinehhh
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi khi truy xuất bản ghi trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) gây ra lỗi ([#5661](https://github.com/nocobase/nocobase/pull/5661)) bởi @2013xile
- **[Khối: Gantt]** Sửa lỗi mẫu khối gantt gọi sai khối lịch khi thêm ([#5673](https://github.com/nocobase/nocobase/pull/5673)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Sửa lỗi chuyển đổi dữ liệu không hoạt động trên chú thích trong biểu đồ hai trục ([#5649](https://github.com/nocobase/nocobase/pull/5649)) bởi @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Ngày phát hành: 2024-11-14*

### 🎉 Tính năng mới

- **[Xác thực]** Cho phép cấu hình trường tên người dùng và email của biểu mẫu đăng ký ([#5639](https://github.com/nocobase/nocobase/pull/5639)) bởi @2013xile
- **[Quy trình làm việc]** hỗ trợ khóa hợp nhất trong sự kiện bộ sưu tập ([#5627](https://github.com/nocobase/nocobase/pull/5627)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** điều chỉnh chiều rộng cột mặc định thành 100 trong khối bảng ([#5625](https://github.com/nocobase/nocobase/pull/5625)) bởi @katherinehhh
- **[Trình quản lý thông báo]** cập nhật biểu tượng thông báo trong ứng dụng thành biểu tượng chuông ([#5638](https://github.com/nocobase/nocobase/pull/5638)) bởi @sheldon66
- **[Khối: Bảng hành động]** thêm hỗ trợ cài đặt chiều cao khối trong bảng hành động ([#5628](https://github.com/nocobase/nocobase/pull/5628)) bởi @katherinehhh
- **[Di động]** Kiểu: tối ưu hóa kiểu di động: giảm khoảng cách trường và tăng tính gọn nhẹ của hiển thị trường ([#5605](https://github.com/nocobase/nocobase/pull/5605)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi không xây dựng được plugin nếu chứa tệp .less ([#5646](https://github.com/nocobase/nocobase/pull/5646)) bởi @gchust
- **[client]** Sửa lỗi căn chỉnh cột cố định bên phải trong bảng ([#5636](https://github.com/nocobase/nocobase/pull/5636)) bởi @katherinehhh
- **[Quy trình làm việc: Nút vòng lặp]** sửa lỗi kiểm tra điều kiện sai trong nút vòng lặp ([#5634](https://github.com/nocobase/nocobase/pull/5634)) bởi @mytharcher
- **[Trình quản lý thông báo]** sửa lỗi mẫu không được biên dịch trong api thông báo ([#5630](https://github.com/nocobase/nocobase/pull/5630)) bởi @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Ngày phát hành: 2024-11-14*

### 🚀 Cải tiến

- **[client]** điều chỉnh một số api của client core và sửa cảnh báo ([#5651](https://github.com/nocobase/nocobase/pull/5651)) bởi @mytharcher
- **[Di động]** thay thế một số thành phần bằng thành phần di động ([#5590](https://github.com/nocobase/nocobase/pull/5590)) bởi @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Ngày phát hành: 2024-11-15*

### 🐛 Sửa lỗi

- **[client]** hoàn nguyên sửa đổi của thuộc tính `openSize` trong nút hành động ([#5656](https://github.com/nocobase/nocobase/pull/5656)) bởi @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Ngày phát hành: 2024-11-16*

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi khớp loại tệp khi tệp hoặc thuộc tính là null ([#5659](https://github.com/nocobase/nocobase/pull/5659)) bởi @mytharcher
  - Sửa lỗi số trang không cập nhật sau khi xóa dữ liệu trong bảng con ([#5648](https://github.com/nocobase/nocobase/pull/5648)) bởi @katherinehhh
- **[Quy trình làm việc]** sửa lỗi nút biến mất sau khi thêm điều kiện mà không có nhánh trước nó ([#5658](https://github.com/nocobase/nocobase/pull/5658)) bởi @mytharcher
- **[Di động]** vấn đề về kiểu khi sử dụng văn bản dài làm trường tiêu đề trong trường liên kết ([#5655](https://github.com/nocobase/nocobase/pull/5655)) bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi khi sử dụng trường URL tệp đính kèm với nguồn dữ liệu bên ngoài bởi @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Ngày phát hành: 2024-11-16*

### 🐛 Sửa lỗi

- **[Di động]** sửa lỗi: sử dụng thành phần máy tính để bàn cho lựa chọn trong chế độ cấu hình di động & sửa lỗi khi sử dụng biến làm giá trị mặc định trong datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) bởi @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Ngày phát hành: 2024-11-17*

### 🐛 Sửa lỗi

- **[Di động]** Sửa lỗi gán trường để hỗ trợ giá trị biến là 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) bởi @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Ngày phát hành: 2024-11-18*

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi yarn dev báo lỗi khi đã có các plugin đã được xây dựng trong hệ thống ([#5671](https://github.com/nocobase/nocobase/pull/5671)) bởi @gchust
- **[Di động]** sửa lỗi: vấn đề về kiểu trên di động khi bảng con được cấu hình chỉ cho phép chọn dữ liệu ([#5670](https://github.com/nocobase/nocobase/pull/5670)) bởi @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Ngày phát hành: 2024-11-19*

### 🚀 Cải tiến

- **[Quy trình làm việc]** hỗ trợ đăng ký biến hệ thống trong client ([#5676](https://github.com/nocobase/nocobase/pull/5676)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi kiểm tra quyền trường không bị ảnh hưởng bởi ngữ cảnh trường liên kết ([#5672](https://github.com/nocobase/nocobase/pull/5672)) bởi @katherinehhh
- **[Khối: Gantt]** Sửa lỗi mẫu khối gantt gọi sai khối lịch khi thêm ([#5673](https://github.com/nocobase/nocobase/pull/5673)) bởi @katherinehhh
- **[Lịch]** Sửa lỗi thiếu tùy chọn trường ngày có và không có múi giờ trong khối lịch ([#5674](https://github.com/nocobase/nocobase/pull/5674)) bởi @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Ngày phát hành: 2024-11-19*

### 🚀 Cải tiến

- **[Di động]** Hỗ trợ thuộc tính động `hidden` cho thành phần `Tabs.TabPan` để kiểm soát kết xuất ([#5687](https://github.com/nocobase/nocobase/pull/5687)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi xóa giá trị nhập ngày khi chuyển đổi toán tử trong nút lọc và gửi trường ngày ([#5684](https://github.com/nocobase/nocobase/pull/5684)) bởi @katherinehhh
  - Sửa lỗi điều kiện quy tắc liên kết với biến ngày không hoạt động ([#5675](https://github.com/nocobase/nocobase/pull/5675)) bởi @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Ngày phát hành: 2024-11-19*

### 🎉 Tính năng mới

- **[Bộ điều hợp pub/sub Redis]** Thêm plugin bộ điều hợp đồng bộ Redis bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
