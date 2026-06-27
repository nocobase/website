---
title: "NocoBase 每周更新：提升文件存储的可扩展性"
description: "本周更新包括：提升文件存储的可扩展性、错误修复等。"
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Ngày phát hành: 2025-01-16*

#### 🚀 Cải tiến

- **[client]** Cải thiện khả năng mở rộng của lưu trữ tệp ([#6071](https://github.com/nocobase/nocobase/pull/6071)) bởi @chenos
- **[Workflow]** Sửa thành phần trường lặp trong cấu hình lịch trình ([#6067](https://github.com/nocobase/nocobase/pull/6067)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Mobile]** Sửa lỗi các nút phía dưới bị che khuất trên thiết bị di động ([#6068](https://github.com/nocobase/nocobase/pull/6068)) bởi @zhangzhonghe
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa ngữ cảnh cho bộ sưu tập http bởi @mytharcher
- **[Trình quản lý sao lưu]** Sửa lỗi sao lưu có thể xảy ra khi plugin collection-fdw chưa được bật bởi @gchust
- **[Phòng ban]** Sửa lỗi sự kiện hành động tùy chỉnh không thể kích hoạt trên bộ sưu tập phòng ban bởi @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Ngày phát hành: 2025-01-16*

#### 🚀 Cải tiến

- **[client]** Cho phép thêm mô tả cho bộ sưu tập SQL ([#6081](https://github.com/nocobase/nocobase/pull/6081)) bởi @2013xile
- **[resourcer]** Cho phép đối tượng rỗng làm giá trị trong hành động ([#6070](https://github.com/nocobase/nocobase/pull/6070)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Bản địa hóa]** Tránh yêu cầu API khi cố gắng xóa một bản dịch trống ([#6078](https://github.com/nocobase/nocobase/pull/6078)) bởi @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Ngày phát hành: 2025-01-18*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi dữ liệu khối trống trong cửa sổ popup trên trang nhúng ([#6086](https://github.com/nocobase/nocobase/pull/6086)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi dispatch không xử lý trong giai đoạn chuẩn bị ([#6087](https://github.com/nocobase/nocobase/pull/6087)) bởi @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Ngày phát hành: 2025-01-21*

#### 🐛 Sửa lỗi

- **[client]** Giá trị mặc định của trường liên kết chưa được cập nhật ([#6103](https://github.com/nocobase/nocobase/pull/6103)) bởi @chenos
- **[Hành động: Chỉnh sửa hàng loạt]** Xóa mẫu dữ liệu biểu mẫu khỏi cài đặt biểu mẫu hành động chỉnh sửa hàng loạt ([#6098](https://github.com/nocobase/nocobase/pull/6098)) bởi @katherinehhh
- **[Xác minh]** Sửa lỗi ID nhà cung cấp có thể được chỉnh sửa ([#6097](https://github.com/nocobase/nocobase/pull/6097)) bởi @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Ngày phát hành: 2025-01-21*

#### 🎉 Tính năng mới

- **[Khối: Bảng hành động]** Hỗ trợ cấu hình số lượng biểu tượng trên mỗi hàng trong bảng hành động trên di động ([#6106](https://github.com/nocobase/nocobase/pull/6106)) bởi @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Ngày phát hành: 2025-01-16*

#### 🚀 Cải tiến

- **[Trình quản lý sao lưu]** Cải thiện thông báo lỗi cho các lần khôi phục thất bại bởi @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Ngày phát hành: 2025-01-16*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi giá trị mặc định cho trường liên kết không có hiệu lực ở chế độ Dễ đọc ([#6066](https://github.com/nocobase/nocobase/pull/6066)) bởi @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Ngày phát hành: 2025-01-17*

#### 🐛 Sửa lỗi

- **[Đồng bộ dữ liệu người dùng]** Sửa lỗi nút "thử lại" không được hiển thị trong danh sách tác vụ ([#6079](https://github.com/nocobase/nocobase/pull/6079)) bởi @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Ngày phát hành: 2025-01-17*

#### 🚀 Cải tiến

- **[Workflow]** Thay đổi tên API thành tên hợp lý ([#6082](https://github.com/nocobase/nocobase/pull/6082)) bởi @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Ngày phát hành: 2025-01-21*

#### 🎉 Tính năng mới

- **[Workflow]** Thêm cấu hình giới hạn ngăn xếp cho workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) bởi @citlalinda

#### 🚀 Cải tiến

- **[Workflow: Nút vòng lặp]** Sửa kiểu dáng ([#6095](https://github.com/nocobase/nocobase/pull/6095)) bởi @mytharcher
- **[Trình quản lý tệp]** hỗ trợ các plugin lưu trữ khác ([#6096](https://github.com/nocobase/nocobase/pull/6096)) bởi @jiannx
  Tham khảo: [Lưu trữ tệp: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: bộ kiểm thử]** điều chỉnh kiểu dáng của canvas workflow, để làm cho nội dung gọn gàng hơn ([#6088](https://github.com/nocobase/nocobase/pull/6088)) bởi @mytharcher
- **[Workflow: Nút truy vấn JSON]** Thêm biểu tượng cho các nút bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Ngày phát hành: 2025-01-19*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ thiết lập thuộc tính mô tả trong khối ([#6015](https://github.com/nocobase/nocobase/pull/6015)) bởi @katherinehhh
- **[Xác thực]** Hỗ trợ cấu hình bảo mật token. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) bởi @sheldon66
  Tham khảo: [Chính sách bảo mật token](https://docs.nocobase.com/handbook/token-policy)
- **[Workflow: Nút thủ công]** Thêm cột tiêu đề tác vụ trong khối việc cần làm ([#6051](https://github.com/nocobase/nocobase/pull/6051)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Workflow: Sự kiện hành động tùy chỉnh]** Thay đổi API của thực thi thủ công bởi @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Ngày phát hành: 2025-01-19*

#### 🎉 Tính năng mới

- **[Khối: Bảng hành động]** Hỗ trợ cấu hình số lượng biểu tượng trên mỗi hàng trong bảng hành động trên di động ([#6046](https://github.com/nocobase/nocobase/pull/6046)) bởi @katherinehhh

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
