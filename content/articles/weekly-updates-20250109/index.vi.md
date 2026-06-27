---
title: "Cập nhật hàng tuần của NocoBase: Hỗ trợ nhập và xuất khối lượng dữ liệu lớn"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ nhập và xuất khối lượng dữ liệu lớn, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện nay, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Ngày phát hành: 2025-01-06*

#### 🚀 Cải tiến

- **[Workflow: test kit]** Sửa độ chính xác của trường ngày tháng trong bộ sưu tập thử nghiệm ([#5983](https://github.com/nocobase/nocobase/pull/5983)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi thanh cuộn khi đặt chiều cao đầy đủ cho khối dữ liệu trong trang con ([#5989](https://github.com/nocobase/nocobase/pull/5989)) bởi @katherinehhh
  - Sửa lỗi căn chỉnh khi các nút trong cột hành động bị ẩn ([#5987](https://github.com/nocobase/nocobase/pull/5987)) bởi @katherinehhh
  - Sửa lỗi xóa hàng loạt các trường hệ thống và trường chung trong trình quản lý bộ sưu tập ([#5988](https://github.com/nocobase/nocobase/pull/5988)) bởi @katherinehhh
  - Sửa lỗi biến 'URL search params' không hoạt động trên trang di động ([#5968](https://github.com/nocobase/nocobase/pull/5968)) bởi @Cyx649312038
- **[server]** Sửa lỗi tiềm ẩn ứng dụng bị treo trong quá trình khôi phục bản sao lưu ([#5981](https://github.com/nocobase/nocobase/pull/5981)) bởi @gchust
- **[Mobile]** Sửa lỗi các nút ở cuối bị che khuất trên thiết bị di động ([#5991](https://github.com/nocobase/nocobase/pull/5991)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]** Sửa lỗi "biến popup hiện tại" được sử dụng trên biểu đồ trong trang con trở nên trống sau khi làm mới trang ([#5984](https://github.com/nocobase/nocobase/pull/5984)) bởi @2013xile
- **[Khối: Kanban]** Sửa lỗi các trường của bộ sưu tập cha không được tải trong kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) bởi @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Ngày phát hành: 2025-01-06*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bộ chọn phạm vi ngày trong biểu mẫu/hành động bộ lọc không hiển thị bộ chọn thời gian khi showTime được đặt ([#5994](https://github.com/nocobase/nocobase/pull/5994)) bởi @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Ngày phát hành: 2025-01-09*

#### 🎉 Tính năng mới

- **[client]** Thêm phương thức app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) bởi @chenos

#### 🚀 Cải tiến

- **[client]**

  - Cho phép sắp xếp workflow khi liên kết với nút hành động ([#6017](https://github.com/nocobase/nocobase/pull/6017)) bởi @mytharcher
  - Thay đổi liên kết tham chiếu của evaluators sang trang tài liệu ([#6021](https://github.com/nocobase/nocobase/pull/6021)) bởi @mytharcher
  - Hỗ trợ maxTagCount: 'responsive' trong thành phần dropdown đa chọn ([#6007](https://github.com/nocobase/nocobase/pull/6007)) bởi @katherinehhh
  - Đặt thời gian kết thúc mặc định cho thành phần phạm vi thời gian trong khối bộ lọc thành 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) bởi @katherinehhh
- **[Hành động: Chỉnh sửa hàng loạt]** Tái cấu trúc nút gửi biểu mẫu chỉnh sửa hàng loạt: loại bỏ gán trường và quy tắc liên kết ([#6008](https://github.com/nocobase/nocobase/pull/6008)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi xác thực bắt buộc không hoạt động sau khi xóa dữ liệu trong trình soạn thảo văn bản đa dạng thức ([#6006](https://github.com/nocobase/nocobase/pull/6006)) bởi @katherinehhh
  - Sửa lỗi lệch khi các nút trong cột hành động bị ẩn ([#6014](https://github.com/nocobase/nocobase/pull/6014)) bởi @katherinehhh
  - Sửa lỗi nút Tạo bộ sưu tập khi nhấp vào tab Bộ sưu tập trong trang REST API ([#5992](https://github.com/nocobase/nocobase/pull/5992)) bởi @katherinehhh
  - Sửa lỗi giải quyết vấn đề targetKey không thể chọn trường NanoID trong quan hệ một-nhiều ([#5999](https://github.com/nocobase/nocobase/pull/5999)) bởi @katherinehhh
  - Sửa kiểu của nút cài đặt trong chủ đề nhỏ gọn ([#6001](https://github.com/nocobase/nocobase/pull/6001)) bởi @katherinehhh
  - Sửa kiểu thành phần danh sách ([#5998](https://github.com/nocobase/nocobase/pull/5998)) bởi @mytharcher
  - Sửa lỗi các tiêu đề được bao gồm trong yêu cầu của client bị ghi đè ([#6009](https://github.com/nocobase/nocobase/pull/6009)) bởi @2013xile
  - Sửa lỗi foreignKey, targetKey và sourceKey nên hỗ trợ lọc theo ký tự tiếng Trung ([#5997](https://github.com/nocobase/nocobase/pull/5997)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập với các liên kết thuộc nhiều-nhiều sử dụng target key khác nhau ([#6024](https://github.com/nocobase/nocobase/pull/6024)) bởi @chareice
- **[Khối: Bản đồ]** Sửa lỗi trường bản đồ trong khối chi tiết nên hiển thị dưới dạng khối bản đồ ([#6010](https://github.com/nocobase/nocobase/pull/6010)) bởi @katherinehhh
- **[Nhúng NocoBase]** Token cho nhúng xung đột với auth bởi @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Ngày phát hành: 2024-12-31*

#### 🎉 Tính năng mới

- **[[Hành động: Nhập bản ghi (Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Nâng cao khả năng nhập dữ liệu với hỗ trợ nhập không đồng bộ, nhập hàng triệu bản ghi, xác định và xử lý dữ liệu trùng lặp, cập nhật dữ liệu và kích hoạt workflow.
- **[[Hành động: Xuất bản ghi (Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Nâng cao khả năng xuất dữ liệu với hỗ trợ xuất không đồng bộ, xuất hàng triệu bản ghi và xuất tệp đính kèm.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Ngày phát hành: 2025-01-04*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bảng con trống hiển thị một hàng dữ liệu trống trên iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) bởi @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Ngày phát hành: 2025-01-08*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi không thể kéo và sắp xếp các hàng trong bảng ([#6013](https://github.com/nocobase/nocobase/pull/6013)) bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Ngày phát hành: 2025-01-02*

#### 🎉 Tính năng mới

- **[Workflow: Nút thủ công]** Thêm một mục nhập toàn cục cố định cho tất cả các loại công việc cần làm của workflow ([#5858](https://github.com/nocobase/nocobase/pull/5858)) bởi @mytharcher
- **[Chính sách mật khẩu]** Thêm plugin mới: Chính sách mật khẩu, dùng để thiết lập quy tắc mật khẩu và chính sách khóa đăng nhập cho tất cả người dùng bởi @2013xile
  Tham khảo: [Chính sách mật khẩu và khóa người dùng](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Cải tiến

- **[client]** Thêm từ khóa bộ lọc "Bảo mật" cho trình quản lý plugin ([#5977](https://github.com/nocobase/nocobase/pull/5977)) bởi @2013xile
- **[Workflow: Sự kiện hành động tùy chỉnh]** Thay đổi API của thực thi thủ công bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi `onChange` không hoạt động trong thành phần `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) bởi @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Ngày phát hành: 2025-01-06*

#### 🚀 Cải tiến

- **[Mobile]** Hỗ trợ hiển thị số trang hiện tại cho bảng trên thiết bị di động ([#5946](https://github.com/nocobase/nocobase/pull/5946)) bởi @katherinehhh
- **[Trình quản lý tệp]** Hỗ trợ các plugin lưu trữ khác ([#5930](https://github.com/nocobase/nocobase/pull/5930)) bởi @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Ngày phát hành: 2025-01-08*

#### 🎉 Tính năng mới

- **[Biến môi trường]** Hỗ trợ cấu hình các biến môi trường và bí mật động ([#5966](https://github.com/nocobase/nocobase/pull/5966)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[client]** thêm nhiều biểu tượng hơn vào IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) bởi @katherinehhh
- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Lọc ra các bộ sưu tập tệp được liên kết với plugin-file-storage-s3-pro. bởi @jiannx

#### 🐛 Sửa lỗi

- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Sửa API đã thay đổi trong hook thành phần bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng không mã, mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
