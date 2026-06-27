---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa trải nghiệm di động"
description: "Các bản cập nhật tuần này bao gồm: tối ưu hóa tương tác di động, sửa lỗi và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Ngày phát hành: 2024-12-12*

#### 🐛 Sửa lỗi

- **[sdk]** Xóa locale mặc định ([#5867](https://github.com/nocobase/nocobase/pull/5867)) bởi @chenos
- **[client]**

  - Sửa lỗi biến trường liên kết lồng nhau trong phạm vi dữ liệu có giá trị rỗng ([#5866](https://github.com/nocobase/nocobase/pull/5866)) bởi @zhangzhonghe
  - Sửa lỗi xuất hiện thanh cuộn khi có ít cột với cột cố định bên phải ([#5864](https://github.com/nocobase/nocobase/pull/5864)) bởi @katherinehhh
  - Sửa lỗi style vị trí sai của component `FilterItem` ([#5851](https://github.com/nocobase/nocobase/pull/5851)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Sửa lỗi tải xuống bản sao lưu thất bại cho ứng dụng con có tên miền tùy chỉnh bởi @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Ngày phát hành: 2024-12-12*

#### 🎉 Tính năng mới

- **[Hành động: Yêu cầu tùy chỉnh]** Hỗ trợ sử dụng biến 'Biểu mẫu hiện tại' trong các nút yêu cầu tùy chỉnh ([#5871](https://github.com/nocobase/nocobase/pull/5871)) bởi @zhangzhonghe

#### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Cho phép sử dụng khóa ngoại trong cấu hình truy vấn của biểu đồ ([#5869](https://github.com/nocobase/nocobase/pull/5869)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bộ chọn bảng tệp không hiển thị ở chế độ không cấu hình khi sử dụng chọn tệp ([#5874](https://github.com/nocobase/nocobase/pull/5874)) bởi @katherinehhh
- **[Kiểm soát truy cập]** Sửa các vấn đề liên quan đến bản ghi sao chép sau khi cấu hình quyền ([#5839](https://github.com/nocobase/nocobase/pull/5839)) bởi @chareice
- **[Quy trình làm việc]** Sửa lỗi timeout giao dịch khi tự động xóa thực thi ([#5870](https://github.com/nocobase/nocobase/pull/5870)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Ngày phát hành: 2024-12-13*

#### 🚀 Cải tiến

- **[Xác thực]** Tối ưu hóa logic lấy metadata của các hành động kiểm toán. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) bởi @chenzhizdt

#### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** Sửa lỗi chiều cao ban đầu của khối biểu đồ ([#5879](https://github.com/nocobase/nocobase/pull/5879)) bởi @2013xile
- **[Quy trình làm việc]** Sửa lỗi báo lỗi khi tiếp tục nút không đồng bộ trong quy trình làm việc thực thi thủ công ([#5877](https://github.com/nocobase/nocobase/pull/5877)) bởi @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Ngày phát hành: 2024-12-15*

#### 🎉 Tính năng mới

- **[Di động]** Thêm công tắc toàn cục để kiểm soát tất cả các nút quay lại trên thiết bị di động (mặc định bật) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[Đồng bộ dữ liệu người dùng]** Sửa lỗi hiển thị của các nút đồng bộ và tác vụ. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) bởi @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Ngày phát hành: 2024-12-18*

#### 🚀 Cải tiến

- **[Di động]** Điều chỉnh component chọn khoảng thời gian & ngày cho thiết bị di động ([#5863](https://github.com/nocobase/nocobase/pull/5863)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[Nguồn dữ liệu: Chính]** Sửa lỗi không thể chỉnh sửa trường hệ thống trong khối biểu mẫu bộ lọc ([#5885](https://github.com/nocobase/nocobase/pull/5885)) bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Ngày phát hành: 2024-12-11*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi tiêu đề tab trình duyệt không cập nhật sau khi chuyển trang ([#5857](https://github.com/nocobase/nocobase/pull/5857)) bởi @zhangzhonghe
  - Sửa lỗi làm mới trang trong trang quản lý nguồn dữ liệu bị chuyển hướng về trang chủ ([#5855](https://github.com/nocobase/nocobase/pull/5855)) bởi @zhangzhonghe
  - Sửa lỗi dữ liệu không thay đổi sau khi phân trang trong bảng con ([#5856](https://github.com/nocobase/nocobase/pull/5856)) bởi @zhangzhonghe
  - Sửa lỗi dữ liệu vai trò không hiển thị trong bảng quản lý người dùng ([#5846](https://github.com/nocobase/nocobase/pull/5846)) bởi @zhangzhonghe
  - Sửa lỗi trường liên kết trong mẫu tham chiếu đôi khi không hiển thị dữ liệu ([#5848](https://github.com/nocobase/nocobase/pull/5848)) bởi @zhangzhonghe
  - Sửa lỗi nút 'Yêu cầu tùy chỉnh' không hiển thị ngay sau khi được thêm ([#5845](https://github.com/nocobase/nocobase/pull/5845)) bởi @zhangzhonghe
  - Ngăn các trang ẩn ảnh hưởng đến tương tác với các trang khác ([#5836](https://github.com/nocobase/nocobase/pull/5836)) bởi @zhangzhonghe
  - Sửa lỗi các khối được thêm trong cửa sổ popup không hiển thị khi mở lại popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) bởi @zhangzhonghe
- **[server]** Đặt các hành động khả dụng mặc định cho ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) bởi @chenos

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, mang lại toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó giúp các nhóm thích ứng nhanh với các thay đổi đồng thời giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
