---
title: "Cập nhật hàng tuần của NocoBase: Hỗ trợ cấu hình biểu mẫu hồ sơ người dùng"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ cấu hình biểu mẫu hồ sơ người dùng cũng như biểu mẫu tạo và chỉnh sửa trong quản lý người dùng, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Ngày phát hành: 2024-12-18*

#### 🚀 Cải tiến

- **[client]** Làm cho nhiều thành phần hơn hỗ trợ mục cấu hình 'Ellipsis overflow content' ([#5888](https://github.com/nocobase/nocobase/pull/5888)) bởi @zhangzhonghe
- **[database]** Thêm firstOrCreate & updateOrCreate vào kho lưu trữ quan hệ ([#5894](https://github.com/nocobase/nocobase/pull/5894)) bởi @chareice

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi thiếu tham số x-data-source trong mẫu yêu cầu trùng lặp cho khối nguồn dữ liệu bên ngoài ([#5882](https://github.com/nocobase/nocobase/pull/5882)) bởi @katherinehhh
  - Sửa lỗi thanh cuộn ngang trong bảng trong plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) bởi @katherinehhh
  - Sửa lỗi đôi khi xuất hiện các tùy chọn 'N/A' thừa trong danh sách thả xuống trường liên kết ([#5878](https://github.com/nocobase/nocobase/pull/5878)) bởi @zhangzhonghe
  - Sửa lỗi tạo view PG, giải quyết lỗi khi chọn view qua các schema ([#5881](https://github.com/nocobase/nocobase/pull/5881)) bởi @katherinehhh
  - Sửa lỗi với kiểu nhóm trong khối biểu mẫu khi bố cục được đặt thành ngang ([#5884](https://github.com/nocobase/nocobase/pull/5884)) bởi @katherinehhh
- **[Người dùng]**

  - Sửa lỗi biểu mẫu không được đặt lại sau khi thêm hoặc chỉnh sửa người dùng trong quản lý người dùng. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) bởi @2013xile
  - Sửa các lỗi khi cài đặt phân trang bị đặt lại sau khi chỉnh sửa và gửi hồ sơ người dùng trên trang quản lý người dùng sau khi chuyển trang hoặc thay đổi kích thước trang. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa các lỗi lọc với Collection nguồn dữ liệu bên ngoài ([#5890](https://github.com/nocobase/nocobase/pull/5890)) bởi @chareice
- **[Biểu mẫu công khai]** Sửa lỗi chuyển đổi chủ đề toàn cục ảnh hưởng đến chủ đề trang xem trước biểu mẫu công khai ([#5883](https://github.com/nocobase/nocobase/pull/5883)) bởi @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Ngày phát hành: 2024-12-19*

#### 🚀 Cải tiến

- **[Collection: SQL]** Cấm sử dụng các từ khóa và hàm nguy hiểm trong SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) bởi @2013xile
- **[Trình chỉnh sửa chủ đề]** Tối ưu hóa xác thực API cho việc chỉnh sửa hồ sơ người dùng và cập nhật mật khẩu ([#5912](https://github.com/nocobase/nocobase/pull/5912)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[Nguồn dữ liệu: Chính]** Sửa lỗi tải khóa ngoại ([#5903](https://github.com/nocobase/nocobase/pull/5903)) bởi @chareice
- **[Collection: SQL]** Sửa lỗi các trường biến mất sau khi cập nhật một SQL Collection. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) bởi @chareice
- **[Trình quản lý sao lưu]** Sửa lỗi khôi phục sao lưu không hoạt động trên Windows bởi @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Ngày phát hành: 2024-12-21*

#### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** Sửa lỗi khi lọc với các liên kết nhiều-nhiều lồng nhau trong truy vấn biểu đồ. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) bởi @2013xile
- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi kết quả tổng hợp không chính xác do giao dịch ([#5916](https://github.com/nocobase/nocobase/pull/5916)) bởi @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Ngày phát hành: 2024-12-25*

#### 🐛 Sửa lỗi

- **[server]** Các Collection không được tự động tạo khi kích hoạt plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) bởi @chenos
- **[client]** Sửa lỗi tìm kiếm trường thuộc tính trong quy tắc liên kết không khớp đúng dữ liệu ([#5925](https://github.com/nocobase/nocobase/pull/5925)) bởi @katherinehhh
- **[Quy trình làm việc]**

  - Sửa lỗi kích hoạt lịch trình trên trường ngày không có múi giờ ([#5938](https://github.com/nocobase/nocobase/pull/5938)) bởi @mytharcher
  - Sửa lỗi dịch biến phạm vi ngày ([#5919](https://github.com/nocobase/nocobase/pull/5919)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Ngày phát hành: 2024-12-21*

#### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Thêm tham số offset vào charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) bởi @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Ngày phát hành: 2024-12-21*

#### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** Sửa lỗi khi lọc với các liên kết nhiều-nhiều lồng nhau trong truy vấn biểu đồ. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) bởi @2013xile
- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi kết quả tổng hợp không chính xác do giao dịch ([#5916](https://github.com/nocobase/nocobase/pull/5916)) bởi @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Ngày phát hành: 2024-12-23*

#### 🎉 Tính năng mới

- **[client]** Thêm phạm vi ngày giới hạn cho thành phần trường ngày ([#5852](https://github.com/nocobase/nocobase/pull/5852)) bởi @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Ngày phát hành: 2024-12-24*

#### 🐛 Sửa lỗi

- **[build]** Sửa lỗi tải sau khi đặt biến môi trường `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) bởi @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Ngày phát hành: 2024-12-19*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ chọn dữ liệu hiện có trong biểu mẫu con cho trường liên kết nhiều ([#5849](https://github.com/nocobase/nocobase/pull/5849)) bởi @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Ngày phát hành: 2024-12-25*

#### 🎉 Tính năng mới

- **[Người dùng]** Hỗ trợ cấu hình biểu mẫu hồ sơ người dùng cũng như biểu mẫu tạo và chỉnh sửa trong quản lý người dùng. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) bởi @2013xile

## Về NocoBase

NocoBase là một nền tảng no-code riêng tư, mã nguồn mở, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Nhận NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
