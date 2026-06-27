---
title: "Cập nhật hàng tuần NocoBase: Thêm quản lý tuyến đường"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ cấu hình quyền cho tab trang, thêm trang quản lý tuyến đường, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Ngày phát hành: 2025-02-20*

#### 🎉 Tính năng mới

- **[Workflow]** Hỗ trợ mở rộng nhóm lệnh trong workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) bởi @mytharcher
  Tham khảo: [Mở rộng nhóm nút](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Sửa lỗi

- **[client]**

  - Sự cố popup hành động liên kết khối liên kết trên thiết bị di động ([#6235](https://github.com/nocobase/nocobase/pull/6235)) bởi @katherinehhh
  - Sai định dạng bộ chọn trong trường biểu mẫu bộ lọc ([#6234](https://github.com/nocobase/nocobase/pull/6234)) bởi @katherinehhh
  - Hiển thị thành phần `<Variable.TextArea />` chính xác ở chế độ bị vô hiệu hóa ([#6197](https://github.com/nocobase/nocobase/pull/6197)) bởi @mytharcher
  - Sửa lỗi thiếu tệp sau khi tải lên ([#6247](https://github.com/nocobase/nocobase/pull/6247)) bởi @mytharcher
- **[Workflow]**

  - Sửa chi tiết kiểu dáng trong canvas workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) bởi @mytharcher
  - Hỗ trợ kích hoạt workflow khi thay đổi mật khẩu ([#6248](https://github.com/nocobase/nocobase/pull/6248)) bởi @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Ngày phát hành: 2025-02-21*

#### 🚀 Cải tiến

- **[Workflow]** Ẩn id nút khỏi thẻ nút trong canvas workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Quản lý tệp]** Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) bởi @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Ngày phát hành: 2025-02-22*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi thiếu tệp đã tải lên khi tải từng tệp một ([#6260](https://github.com/nocobase/nocobase/pull/6260)) bởi @mytharcher
- **[Workflow: Sự kiện trước hành động]** Sửa lỗi thông báo lỗi từ nút thông báo phản hồi không hiển thị bởi @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Ngày phát hành: 2025-02-24*

#### 🐛 Sửa lỗi

- **[Trình quản lý sao lưu]** Biểu tượng xóa của hộp thoại thao tác khôi phục từ cục bộ không hoạt động bởi @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Ngày phát hành: 2025-02-24*

#### 🚀 Cải tiến

- **[Quản lý tệp]**

  - Tăng độ dài URL lên 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) bởi @mytharcher
  - Tên tệp trong quá trình tải lên sẽ thay đổi từ ngẫu nhiên thành tên gốc với hậu tố ngẫu nhiên. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) bởi @chenos
- **[Khối: Bảng hành động]** Tối ưu hóa kiểu dáng trên thiết bị di động ([#6270](https://github.com/nocobase/nocobase/pull/6270)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[cli]** Cải thiện logic nội bộ của lệnh nâng cấp nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) bởi @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Ngày phát hành: 2025-02-26*

#### 🚀 Cải tiến

- **[Trình quản lý sao lưu]** Cho phép khôi phục bản sao lưu vào ứng dụng ngay cả khi nó thiếu một số plugin bởi @gchust

#### 🐛 Sửa lỗi

- **[client]** Thành phần trường văn bản rich text không thể xóa hoàn toàn ([#6287](https://github.com/nocobase/nocobase/pull/6287)) bởi @katherinehhh
- **[Quản lý tệp]**

  - Sửa lỗi di chuyển và thêm các trường hợp kiểm thử ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher
  - Sửa kiểu cột `path` của bộ sưu tập tệp ([#6294](https://github.com/nocobase/nocobase/pull/6294)) bởi @mytharcher
  - Sửa lỗi di chuyển và thêm các trường hợp kiểm thử ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Ngày phát hành: 2025-02-27*

#### 🎉 Tính năng mới

* [Workflow] Hỗ trợ mở rộng nhóm lệnh trong workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) bởi @mytharcher
  Tham khảo: [Mở rộng nhóm nút](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow: Sự kiện hành động tùy chỉnh] Hỗ trợ kích hoạt sự kiện hành động tùy chỉnh cho các bản ghi toàn cục hoặc hàng loạt ([#272](https://github.com/nocobase/pro-plugins/pull/272)) bởi @mytharcher
* **[client]**

  * Hỗ trợ mở rộng các trường đặt trước trong bộ sưu tập ([#6183](https://github.com/nocobase/nocobase/pull/6183)) bởi @katherinehhh
  * Hỗ trợ mở rộng toán tử bộ lọc giao diện người dùng ([#6085](https://github.com/nocobase/nocobase/pull/6085)) bởi @katherinehhh
  * Hỗ trợ thiết lập thuộc tính mô tả trong khối ([#6015](https://github.com/nocobase/nocobase/pull/6015)) bởi @katherinehhh
  * Thêm schemaSetting để hiển thị tên tệp cho tệp đính kèm ([#5995](https://github.com/nocobase/nocobase/pull/5995)) bởi @katherinehhh
* **[Lịch]** Hỗ trợ mở rộng các trường tùy chọn cho các plugin Kanban, Lịch và Trường Công thức ([#6076](https://github.com/nocobase/nocobase/pull/6076)) bởi @katherinehhh
* **[Bản địa hóa]** Bản địa hóa cho các tuyến đường trên máy tính để bàn và thiết bị di động ([#6180](https://github.com/nocobase/nocobase/pull/6180)) bởi @2013xile
* **[Khối: Bảng hành động]** Hỗ trợ cấu hình số lượng biểu tượng trên mỗi hàng trong bảng hành động trên thiết bị di động ([#6046](https://github.com/nocobase/nocobase/pull/6046)) bởi @katherinehhh
* **[WEB client]** Hỗ trợ cấu hình quyền cho các tab trang và thêm trang quản lý tuyến đường ([#5955](https://github.com/nocobase/nocobase/pull/5955)) bởi @zhangzhonghe
  Tham khảo: [Tuyến đường](https://docs.nocobase.com/handbook/routes)
* **[Xác thực]** Hỗ trợ cấu hình bảo mật token ([#5948](https://github.com/nocobase/nocobase/pull/5948)) bởi @sheldon66
  Tham khảo: [Chính sách bảo mật token](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow: Nút thủ công]** Thêm cột tiêu đề tác vụ trong khối việc cần làm ([#6051](https://github.com/nocobase/nocobase/pull/6051)) bởi @mytharcher
* **[Biến và bí mật]** Hỗ trợ cấu hình biến môi trường và bí mật động ([#5966](https://github.com/nocobase/nocobase/pull/5966)) bởi @katherinehhh

#### 🚀 Cải tiến

* [Trường bộ sưu tập: Markdown(Vditor)] CDN Vditor sử dụng tài nguyên cục bộ ([#6229](https://github.com/nocobase/nocobase/pull/6229)) bởi @chenos
* [Workflow] Ẩn id nút khỏi thẻ nút trong canvas workflow ([#6251](https://github.com/nocobase/nocobase/pull/6251)) bởi @mytharcher
* **[client]** Mở rộng và cải thiện trung tâm cá nhân người dùng ([#6213](https://github.com/nocobase/nocobase/pull/6213)) bởi @katherinehhh
* **[client]**

  * Tiêu đề trang mặc định sử dụng tiêu đề của tuyến đường ([#6188](https://github.com/nocobase/nocobase/pull/6188)) bởi @zhangzhonghe
  * Thêm nhiều biểu tượng hơn vào IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) bởi @katherinehhh
* **[server]**

  * Di chuyển AesEncryptor vào lõi ([#6132](https://github.com/nocobase/nocobase/pull/6132)) bởi @chenos
  * 1. Thêm middleware máy chủ để trích xuất địa chỉ IP của máy khách.
    2. Giải quyết các sự cố tải lại vô hạn khi một IP bị chặn.
    3. Thêm tiêu đề HTTP `X-Forwarded-For` trong proxy để cho phép chuyển tiếp cho việc gỡ lỗi cục bộ ([#6069](https://github.com/nocobase/nocobase/pull/6069)) bởi @sheldon66
* **[Workflow]** Di chuyển cài đặt liên kết workflow vào plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) bởi @mytharcher
* **[Trình quản lý nguồn dữ liệu]** Sửa đổi chức năng kiểm tra đăng nhập thành bất đồng bộ và cập nhật các trường hợp kiểm thử liên quan ([#6181](https://github.com/nocobase/nocobase/pull/6181)) bởi @sheldon66

#### 🐛 Sửa lỗi

* [client]

  * Không thể mở popup liên kết trường trong trang nhúng ([#6222](https://github.com/nocobase/nocobase/pull/6222)) bởi @gchust
  * Khi đóng trang con, nhiều yêu cầu dữ liệu khối được kích hoạt ([#6233](https://github.com/nocobase/nocobase/pull/6233)) bởi @zhangzhonghe
  * Sai định dạng bộ chọn trong trường biểu mẫu bộ lọc ([#6234](https://github.com/nocobase/nocobase/pull/6234)) bởi @katherinehhh
  * Thiếu khóa duy nhất cho menu con trường liên kết trong giao diện người dùng ([#6230](https://github.com/nocobase/nocobase/pull/6230)) bởi @gchust
  * Hiển thị thành phần `<Variable.TextArea />` chính xác ở chế độ bị vô hiệu hóa ([#6197](https://github.com/nocobase/nocobase/pull/6197)) bởi @mytharcher
  * Sự cố thanh cuộn ngang trên trang ([#6232](https://github.com/nocobase/nocobase/pull/6232)) bởi @katherinehhh
  * Đã sửa ký tự thẻ html trong trường nhập biểu mẫu cấu hình kênh thư. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) bởi @sheldon66
  * Sự cố popup hành động liên kết khối liên kết trên thiết bị di động ([#6235](https://github.com/nocobase/nocobase/pull/6235)) bởi @katherinehhh
  * Sửa lỗi thiếu tệp sau khi tải lên ([#6247](https://github.com/nocobase/nocobase/pull/6247)) bởi @mytharcher
  * Bỏ qua lỗi xác thực cho CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) bởi @sheldon66
* [Workflow: Nút vòng lặp] Sửa lỗi vòng lặp thoát sớm khi nút đang chờ xử lý ([#6236](https://github.com/nocobase/nocobase/pull/6236)) bởi @mytharcher
* [Quản lý tệp] Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) bởi @mytharcher
* [Thiết bị di động] Dữ liệu menu thiết bị di động không đầy đủ trong bảng cấu hình quyền ([#6219](https://github.com/nocobase/nocobase/pull/6219)) bởi @zhangzhonghe
* [Workflow]

  * Sửa chi tiết kiểu dáng trong canvas workflow ([#6240](https://github.com/nocobase/nocobase/pull/6240)) bởi @mytharcher
  * Hỗ trợ kích hoạt workflow khi thay đổi mật khẩu ([#6248](https://github.com/nocobase/nocobase/pull/6248)) bởi @mytharcher
* [Trực quan hóa dữ liệu] Lỗi lọc xảy ra khi tên nguồn dữ liệu chứa dấu gạch nối `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) bởi @2013xile
* [Workflow: Sự kiện trước hành động] Sửa lỗi thông báo lỗi từ nút thông báo phản hồi không hiển thị ([#277](https://github.com/nocobase/pro-plugins/pull/277)) bởi @mytharcher
* **[client]** Sửa lỗi thiếu tệp đã tải lên khi tải từng tệp một ([#6260](https://github.com/nocobase/nocobase/pull/6260)) bởi @mytharcher
* **[client]** Sửa lỗi tùy chọn "Chọn từ dữ liệu hiện có" vẫn hiển thị khi vô hiệu hóa “Cho phép nhiều” trong biểu mẫu con quan hệ nhiều-nhiều ([#6167](https://github.com/nocobase/nocobase/pull/6167)) bởi @katherinehhh
* **[auth]** Cập nhật logic middleware xác thực máy khách để ngăn lỗi cập nhật token do đồng thời ([#6135](https://github.com/nocobase/nocobase/pull/6135)) bởi @sheldon66
* **[WEB client]**

  * Quyền định tuyến bất thường sau khi nâng cấp ([#6177](https://github.com/nocobase/nocobase/pull/6177)) bởi @zhangzhonghe
  * Xóa tiêu đề tab trang mặc định ([#6178](https://github.com/nocobase/nocobase/pull/6178)) bởi @zhangzhonghe
* **[Trình quản lý nguồn dữ liệu]** Sử dụng loginWithJti để cập nhật các trường hợp kiểm thử liên quan đến xác thực và ngăn ngừa lỗi ([#6175](https://github.com/nocobase/nocobase/pull/6175)) bởi @sheldon66
* **[Trình quản lý đa ứng dụng]** Chỉ các ứng dụng con bắt đầu bằng ứng dụng chính mới được nâng cấp cùng với nó ([#6133](https://github.com/nocobase/nocobase/pull/6133)) bởi @chenos
* **[Xác thực]** Cập nhật quy tắc di chuyển cho các token đã phát hành và cấu hình chính sách token ([#6107](https://github.com/nocobase/nocobase/pull/6107)) bởi @sheldon66
* **[Workflow]** Sửa kiểu giá trị cho thành phần DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng không mã, mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
