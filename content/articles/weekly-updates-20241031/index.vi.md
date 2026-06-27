---
title: "Cập nhật hàng tuần NocoBase: Cải thiện hiệu suất hiển thị của khối bảng và nhiều hơn nữa"
description: "Cập nhật hàng tuần NocoBase 2024-10-31"
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase hiện đang được cập nhật với hai nhánh: `main` và `next`.

* `main`：Phiên bản ổn định nhất hiện nay, khuyến nghị cài đặt;
* `next`：Phiên bản Alpha, bao gồm một số tính năng mới chưa được phát hành. Phiên bản này có thể chưa hoàn toàn ổn định, phù hợp cho nhà phát triển hoặc người thử nghiệm trải nghiệm các tính năng mới trước hoặc tiến hành kiểm tra tương thích.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Ngày phát hành: 2024-10-24*

### 🐛 Sửa lỗi

- **[client]**

  - Sự cố phân trang trong khối danh sách với bộ sưu tập phân trang đơn giản ([#5500](https://github.com/nocobase/nocobase/pull/5500)) bởi @katherinehhh
  - Ở chế độ không cấu hình, chỉ hiển thị bộ sưu tập hiện tại trong biểu mẫu chỉnh sửa. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) bởi @katherinehhh
- **[Quy trình công việc: Node yêu cầu HTTP]** Sửa lỗi khoảng trắng đặc biệt xuất hiện khi dán nội dung vào textarea biến gây ra sự cố ([#5497](https://github.com/nocobase/nocobase/pull/5497)) bởi @mytharcher
- **[Phòng ban]** Sửa lỗi kiểm tra quyền nguồn dữ liệu bên ngoài không chính xác dưới vai trò phòng ban bởi @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Ngày phát hành: 2024-10-24*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi không thể thêm khối bộ lọc trong cửa sổ popup ([#5502](https://github.com/nocobase/nocobase/pull/5502)) bởi @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Ngày phát hành: 2024-10-25*

### 🎉 Tính năng mới

- **[Xác thực: OIDC]** Thêm tùy chọn cho phép bỏ qua xác minh SSL bởi @2013xile

### 🚀 Cải tiến

- **[client]** Hiển thị hộp kiểm không được chọn ở trạng thái vô hiệu hóa cho các trường chưa được chọn ([#5503](https://github.com/nocobase/nocobase/pull/5503)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi toán tử chuỗi "chứa" và "không chứa" không xử lý đúng giá trị `null` ([#5509](https://github.com/nocobase/nocobase/pull/5509)) bởi @2013xile
- **[client]** Sửa lỗi quy tắc liên kết để đánh giá chính xác các biến tham số URL ([#5504](https://github.com/nocobase/nocobase/pull/5504)) bởi @katherinehhh
- **[Khối: Bản đồ]** Sửa lỗi một số bản đồ hiển thị không chính xác khi có nhiều bản đồ do gọi nhiều lần phương thức `load` của AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) bởi @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Ngày phát hành: 2024-10-27*

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Tối ưu hóa hiệu suất cho các bảng lớn trong acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) bởi @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Ngày phát hành: 2024-10-28*

### 🐛 Sửa lỗi

- **[Bộ sưu tập: Cây]** Sửa lỗi đường dẫn node không được cập nhật khi hủy liên kết các node con ([#5522](https://github.com/nocobase/nocobase/pull/5522)) bởi @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Ngày phát hành: 2024-10-24*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ thêm nhóm trên biểu mẫu và khối chi tiết ([#5498](https://github.com/nocobase/nocobase/pull/5498)) bởi @katherinehhh
- **[Lịch]** plugin-calendar thêm cài đặt chế độ xem mặc định và cấu hình quốc tế hóa ([#5487](https://github.com/nocobase/nocobase/pull/5487)) bởi @Cyx649312038
- **[Nguồn dữ liệu: KingbaseES]** Hỗ trợ sử dụng cơ sở dữ liệu Kingbase làm nguồn dữ liệu chính hoặc bên ngoài (chế độ pg) bởi @chareice
  Tham khảo: [Nguồn dữ liệu - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Cải tiến

- **[database]** Hỗ trợ logic tải tĩnh của plugin ([#5466](https://github.com/nocobase/nocobase/pull/5466)) bởi @chareice
- **[client]** Cải thiện hiệu suất hiển thị của khối bảng (thời gian hiển thị lần đầu giảm khoảng 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) bởi @zhangzhonghe
- **[Di động]** Client di động hỗ trợ khối biểu mẫu bộ lọc ([#5482](https://github.com/nocobase/nocobase/pull/5482)) bởi @katherinehhh
- **[Trình quản lý sao lưu]**

  - Thay đổi cài đặt mặc định `Sao lưu tệp lưu trữ cục bộ` thành true bởi @gchust
  - Hoàn tác dữ liệu cơ sở dữ liệu nếu hành động khôi phục thất bại bởi @gchust

### 🐛 Sửa lỗi

- **[server]** Sự kiện afterLoad của ứng dụng không được kích hoạt sau khi cài đặt ([#5506](https://github.com/nocobase/nocobase/pull/5506)) bởi @chenos
- **[Biểu mẫu công khai]** Đăng ký đoạn ACL cho biểu mẫu công khai ([#5505](https://github.com/nocobase/nocobase/pull/5505)) bởi @katherinehhh
- **[Trình quản lý sao lưu]** Sửa lỗi sau khi khôi phục ứng dụng con, ứng dụng chính sẽ bị crash nếu ứng dụng con sử dụng schema khác bởi @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Ngày phát hành: 2024-10-24*

### 🎉 Tính năng mới

- **[Khối: Bảng hành động]** Thêm cài đặt tiêu đề cho khối bảng hành động ([#5492](https://github.com/nocobase/nocobase/pull/5492)) bởi @Cyx649312038

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
