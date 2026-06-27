---
title: "Cập nhật hàng tuần của NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật trong tuần này bao gồm: tối ưu hóa cho thiết bị di động, cải tiến quy trình làm việc và sửa lỗi."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**Tuần trước chúng tôi đã phát hành [phiên bản NocoBase 1.5.0](https://www.nocobase.com/en/blog/nocobase-1-5-0), mang đến các tối ưu hóa cốt lõi, tính năng xuất/nhập dữ liệu quy mô lớn, quản lý email, in ấn mẫu và nhiều tính năng mới khác.**

**NocoBase hiện đang được cập nhật với ba nhánh: `main` , `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`：Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`：Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến tính tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Ngày phát hành: 2025-02-06*

#### 🐛 Sửa lỗi

- **[client]**
  - Dịch sai tiêu đề của `Sub-form(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) bởi @gchust
  - Khi trường subform được đặt thành 'Ẩn (giữ lại giá trị)', các biến giá trị mặc định của nó không hoạt động đúng ([#6165](https://github.com/nocobase/nocobase/pull/6165)) bởi @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Ngày phát hành: 2025-02-06*

#### 🚀 Cải tiến

- **[Mobile]** Ẩn tiêu đề trang cấu hình mobile khi không có quyền cấu hình ([#6171](https://github.com/nocobase/nocobase/pull/6171)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[Workflow: nút thông báo]** Đảm bảo thông báo được gửi chính xác khi đầu vào của người dùng chứa cú pháp giống Handlebars. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) bởi @sheldon66
- **[Workflow: nút thủ công]** Sửa lỗi giá trị biểu mẫu không được phân tích khi gửi nút terminal ([#6160](https://github.com/nocobase/nocobase/pull/6160)) bởi @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Ngày phát hành: 2025-02-07*

#### 🐛 Sửa lỗi

- **[client]**
  - Cửa sổ bật lên mở ra bằng cách nhấp vào trường belongsToArray đang lấy dữ liệu không chính xác ([#6173](https://github.com/nocobase/nocobase/pull/6173)) bởi @zhangzhonghe
  - Toán tử trường thời gian được đặt thành "between" trong biểu mẫu bộ lọc, nhưng thành phần không thay đổi thành bộ chọn phạm vi thời gian ([#6170](https://github.com/nocobase/nocobase/pull/6170)) bởi @katherinehhh
  - Biểu mẫu chỉnh sửa bật lên của khối Kanban và lịch không hiển thị "Các thay đổi chưa được lưu" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) bởi @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Ngày phát hành: 2025-02-10*

#### 🚀 Cải tiến

- **[Workflow]** Thêm trạng thái tải cho hành động sao chép ([#6179](https://github.com/nocobase/nocobase/pull/6179)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi xảy ra trong cài đặt trường nút tạo ([#6187](https://github.com/nocobase/nocobase/pull/6187)) bởi @mytharcher
  - Tùy chọn cấu hình 'Cho phép chọn nhiều' cho các trường liên kết không được hiển thị trong Biểu mẫu bộ lọc ([#6174](https://github.com/nocobase/nocobase/pull/6174)) bởi @zhangzhonghe
  - Trường vẫn bị ẩn sau khi bị ẩn bởi các quy tắc liên kết ([#6182](https://github.com/nocobase/nocobase/pull/6182)) bởi @zhangzhonghe
- **[utils]** Tối ưu hóa logic đọc storage/plugins ([#6186](https://github.com/nocobase/nocobase/pull/6186)) bởi @chenos
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa: Thêm bộ lọc người dùng vào các truy vấn con về dấu thời gian và tiêu đề tin nhắn trong API danh sách kênh để đảm bảo cách ly dữ liệu. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) bởi @deepure
- **[Trình quản lý sao lưu]** Các tệp không được sao chép từ bản sao lưu vào thư mục uploads trong quá trình khôi phục chế độ khoan dung bởi @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Ngày phát hành: 2025-02-11*

#### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Thêm bài kiểm tra cho việc truy xuất tiêu đề và dấu thời gian tin nhắn mới nhất trong các kênh trong ứng dụng. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) bởi @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Ngày phát hành: 2025-02-12*

#### 🐛 Sửa lỗi

- **[client]**
  - Khối không làm mới sau khi điều hướng trang ([#6200](https://github.com/nocobase/nocobase/pull/6200)) bởi @zhangzhonghe
  - Khối biểu mẫu không được hiển thị khi thêm biểu mẫu tạo thông qua hành động bật lên trong một hàng của bảng ([#6190](https://github.com/nocobase/nocobase/pull/6190)) bởi @katherinehhh
  - Cài đặt chiều cao khối bảng không được áp dụng khi không có dữ liệu ([#6192](https://github.com/nocobase/nocobase/pull/6192)) bởi @katherinehhh
- **[Hành động: Yêu cầu tùy chỉnh]**
  - Giá trị biến 'Bản ghi hiện tại' không chính xác trong nút yêu cầu tùy chỉnh ([#6196](https://github.com/nocobase/nocobase/pull/6196)) bởi @zhangzhonghe
  - Khả năng tương thích của nút yêu cầu tùy chỉnh với các biến kế thừa ([#6194](https://github.com/nocobase/nocobase/pull/6194)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]** Các khối biểu đồ không hiển thị khi được thêm vào cửa sổ bật lên của bảng hành động ([#6198](https://github.com/nocobase/nocobase/pull/6198)) bởi @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Ngày phát hành: 2025-02-11*

#### 🚀 Cải tiến

- **[Trình quản lý sao lưu]** Xóa chế độ khoan dung khỏi giao diện người dùng bởi @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Ngày phát hành: 2025-02-07*

#### 🎉 Tính năng mới

- **[Hạn chế IP]** Sửa lỗi ứng dụng khi cấu hình hạn chế IP không tồn tại. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[auth]** Cập nhật logic middleware xác thực client để ngăn lỗi cập nhật token do đồng thời. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) bởi @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Ngày phát hành: 2025-02-07*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tùy chọn "Chọn từ dữ liệu hiện có" vẫn hiển thị khi vô hiệu hóa “Cho phép nhiều” trong subform quan hệ nhiều-nhiều ([#6167](https://github.com/nocobase/nocobase/pull/6167)) bởi @katherinehhh
- **[Trình quản lý nguồn dữ liệu]** Sử dụng loginWithJti để cập nhật các trường hợp kiểm thử liên quan đến xác thực và ngăn ngừa lỗi. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) bởi @sheldon66
- **[WEB client]** Quyền định tuyến bất thường sau khi nâng cấp ([#6177](https://github.com/nocobase/nocobase/pull/6177)) bởi @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Ngày phát hành: 2025-02-11*

#### 🎉 Tính năng mới

- **[Bản địa hóa]** Bản địa hóa cho các tuyến desktop và mobile ([#6180](https://github.com/nocobase/nocobase/pull/6180)) bởi @2013xile

#### 🚀 Cải tiến

- **[client]** Tiêu đề trang mặc định sử dụng tiêu đề của tuyến ([#6188](https://github.com/nocobase/nocobase/pull/6188)) bởi @zhangzhonghe
- **[Trình quản lý nguồn dữ liệu]** Sửa đổi chức năng đăng nhập của hàm kiểm tra thành bất đồng bộ và cập nhật các trường hợp kiểm thử liên quan. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) bởi @sheldon66
- **[Workflow: Sự kiện hành động tùy chỉnh]** Cập nhật các trường hợp kiểm thử liên quan để sử dụng đăng nhập bất đồng bộ. bởi @sheldon66
- **[Workflow: Phê duyệt]** Cập nhật các trường hợp kiểm thử liên quan để sử dụng đăng nhập bất đồng bộ. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[WEB client]** Xóa tiêu đề tab trang mặc định ([#6178](https://github.com/nocobase/nocobase/pull/6178)) bởi @zhangzhonghe

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó cho phép các nhóm thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
