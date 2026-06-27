---
title: "Cập nhật hàng tuần của NocoBase: Cải thiện hiệu suất"
description: "Các bản cập nhật trong tuần này bao gồm: Tối ưu hóa bảng hành động và các thành phần biểu mẫu công khai để thích ứng với thiết bị di động, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện nay, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng hơn nữa. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có các vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Ngày phát hành: 2024-12-05*

#### 🚀 Cải tiến

- **[test]** Cho phép đăng nhập bằng tên vai trò trong các trường hợp kiểm thử ([#5794](https://github.com/nocobase/nocobase/pull/5794)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Cập nhật tiêu đề cho URL chi tiết trong các biểu mẫu tin nhắn trong ứng dụng và tệp bản địa hóa ([#5742](https://github.com/nocobase/nocobase/pull/5742)) bởi @sheldon66

#### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi token không bị xóa sau khi người dùng không có vai trò gặp lỗi đăng nhập và nhấp vào nút "Đăng nhập với tài khoản khác" ([#5790](https://github.com/nocobase/nocobase/pull/5790)) bởi @2013xile
  - Mất header yêu cầu trên các yêu cầu im lặng ([#5795](https://github.com/nocobase/nocobase/pull/5795)) bởi @chenos
  - Trang trắng khi người dùng không có vai trò ([#5797](https://github.com/nocobase/nocobase/pull/5797)) bởi @chenos
  - Sửa lỗi thanh cuộn trong bảng con với kích thước nhỏ dưới chủ đề compact ([#5796](https://github.com/nocobase/nocobase/pull/5796)) bởi @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Ngày phát hành: 2024-12-08*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trường nguồn dữ liệu bên ngoài không hiển thị trong khối bảng ([#5825](https://github.com/nocobase/nocobase/pull/5825)) bởi @katherinehhh
  - Sửa lỗi hiển thị cho các trường kế thừa trong cấu hình biểu mẫu ([#5822](https://github.com/nocobase/nocobase/pull/5822)) bởi @katherinehhh
  - Sửa lỗi các trường kế thừa không xuất hiện trong danh sách trường và không thể ghi đè ([#5800](https://github.com/nocobase/nocobase/pull/5800)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Sửa lỗi khi định dạng trường ngày tháng có nhận biết múi giờ trong MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) bởi @2013xile
- **[Quy trình công việc]**

  - Sửa lỗi giao dịch qua các nguồn dữ liệu gây ra lỗi sự kiện collection ([#5818](https://github.com/nocobase/nocobase/pull/5818)) bởi @mytharcher
  - Sửa lỗi thiếu kiểu ngày tháng trong cấu hình lịch biểu dựa trên trường ngày tháng ([#5816](https://github.com/nocobase/nocobase/pull/5816)) bởi @mytharcher
- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi cập nhật trường mảng m2m trong collection quan hệ đơn lẻ không có hiệu lực ([#5820](https://github.com/nocobase/nocobase/pull/5820)) bởi @2013xile
- **[Lịch]**

  - Sửa lỗi khi nhấp vào một ngày trống trong lịch ([#5803](https://github.com/nocobase/nocobase/pull/5803)) bởi @katherinehhh
  - Sửa lỗi đóng cửa sổ bật lên được mở qua 'Khối Lịch' khiến tất cả cửa sổ bật lên đóng lại ([#5793](https://github.com/nocobase/nocobase/pull/5793)) bởi @zhangzhonghe
- **[Biểu mẫu công khai]** Sửa đường dẫn quét mã QC không chính xác trong biểu mẫu công khai của ứng dụng con ([#5799](https://github.com/nocobase/nocobase/pull/5799)) bởi @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Ngày phát hành: 2024-12-08*

#### 🐛 Sửa lỗi

- **[Kiểm soát truy cập]** Làm mới trang khi vai trò của người dùng không chính xác ([#5821](https://github.com/nocobase/nocobase/pull/5821)) bởi @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Ngày phát hành: 2024-12-08*

#### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập dữ liệu với bảng trong các mối quan hệ ([#5833](https://github.com/nocobase/nocobase/pull/5833)) bởi @chareice
- **[Kiểm soát truy cập]** Sửa lỗi sử dụng trường để truy vấn mối quan hệ trong ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) bởi @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Ngày phát hành: 2024-12-09*

#### 🐛 Sửa lỗi

- **[Di động]** Sửa lỗi hiển thị màu nền trên di động ([#5809](https://github.com/nocobase/nocobase/pull/5809)) bởi @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Ngày phát hành: 2024-12-10*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi mẫu dữ liệu trong biểu mẫu bộ lọc được cấu hình trong bộ chọn bản ghi trường quan hệ ([#5837](https://github.com/nocobase/nocobase/pull/5837)) bởi @katherinehhh
  - Sửa lỗi mẫu chuỗi Markdown không tải được dữ liệu của dữ liệu quan hệ (Nguồn dữ liệu bên ngoài) ([#5791](https://github.com/nocobase/nocobase/pull/5791)) bởi @katherinehhh
- **[Đồng bộ hóa dữ liệu người dùng]** Bỏ qua các kiểu dữ liệu không được hỗ trợ trong quá trình đồng bộ hóa thay vì báo lỗi. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) bởi @chenzhizdt
- **[Trình quản lý sao lưu]**

  - Sửa lỗi cửa sổ tải xuống cho các tệp sao lưu lớn hiện ra chậm bởi @gchust
  - Sửa lỗi khôi phục ứng dụng con sao lưu khiến tất cả các ứng dụng khởi động lại bởi @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Ngày phát hành: 2024-12-06*

#### 🚀 Cải tiến

- **[client]** Tối ưu hóa logic đệ quy trong useMenuSearch để cải thiện hiệu suất ([#5784](https://github.com/nocobase/nocobase/pull/5784)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Tối ưu hóa bảng hành động và các thành phần biểu mẫu công khai để thích ứng trên di động ([#5788](https://github.com/nocobase/nocobase/pull/5788)) bởi @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Ngày phát hành: 2024-12-10*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình văn bản, biểu tượng và loại cho các nút thêm và chọn trong bảng con ([#5778](https://github.com/nocobase/nocobase/pull/5778)) bởi @katherinehhh
- **[Lịch]** Plugin Lịch thêm chế độ mở sự kiện ([#5808](https://github.com/nocobase/nocobase/pull/5808)) bởi @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Ngày phát hành: 2024-12-11*

#### 🐛 Sửa lỗi

- **[Di động]** Sửa lỗi thích ứng trên di động của thành phần ngày tháng trên trang con ([#5859](https://github.com/nocobase/nocobase/pull/5859)) bởi @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Ngày phát hành: 2024-12-11*

#### 🚀 Cải tiến

- **[client]** Xóa thành phần khung xương hàng bảng ([#5751](https://github.com/nocobase/nocobase/pull/5751)) bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Ngày phát hành: 2024-12-09*

#### 🚀 Cải tiến

- **[client]** Loại bỏ các thành phần Formily khỏi bảng để cải thiện hiệu suất khi chuyển đổi phân trang bảng ([#5738](https://github.com/nocobase/nocobase/pull/5738)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các trường không hiển thị sau khi thêm chúng trong một biểu mẫu con ([#5827](https://github.com/nocobase/nocobase/pull/5827)) bởi @zhangzhonghe
  - Sửa lỗi thay đổi giá trị của trường quan hệ trong khối chi tiết không làm mới ngay lập tức ([#5826](https://github.com/nocobase/nocobase/pull/5826)) bởi @zhangzhonghe
  - Sửa lỗi nhấp vào liên kết không mở cửa sổ bật lên khi 'Bật liên kết' được bật lần đầu tiên ([#5812](https://github.com/nocobase/nocobase/pull/5812)) bởi @zhangzhonghe
  - Ngăn chặn nhiều lệnh gọi API khi đóng cửa sổ bật lên ([#5804](https://github.com/nocobase/nocobase/pull/5804)) bởi @zhangzhonghe
  - Sửa lỗi đăng nhập di động chuyển hướng đến trang desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) bởi @zhangzhonghe
  - Sửa lỗi nút cấu hình hành động nên được căn trái ([#5798](https://github.com/nocobase/nocobase/pull/5798)) bởi @katherinehhh
- **[build]** Sửa lỗi lưu cache không chính xác của các tệp js frontend sau khi xây dựng plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) bởi @gchust

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
