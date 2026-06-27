---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ quy tắc liên kết trong khối chi tiết"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ quy tắc liên kết trong khối chi tiết để ẩn (giá trị dự trữ), và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Ngày phát hành: 2025-01-10*

#### 🚀 Cải tiến

- **[client]** Hỗ trợ quy tắc liên kết trong khối chi tiết để ẩn (giữ lại giá trị) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - Khắc phục tình trạng thiếu đường dẫn công khai trong đường dẫn tệp biểu tượng ([#6034](https://github.com/nocobase/nocobase/pull/6034)) bởi @chenos
  - Sửa lỗi quy tắc liên kết biểu mẫu không hoạt động khi chúng phụ thuộc vào giá trị trường từ bảng con ([#5876](https://github.com/nocobase/nocobase/pull/5876)) bởi @zhangzhonghe
  - Sửa trường không chính xác của biến 'Bản ghi hiện tại' trong chi tiết con ([#6030](https://github.com/nocobase/nocobase/pull/6030)) bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Đã sửa lỗi tải xuống bản sao lưu không thành công khi biến môi trường API_BASE_PATH không phải là /api bởi @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Ngày phát hành: 2025-01-11*

#### 🚀 Cải tiến

- **[evaluators]** Nâng cấp phiên bản thư viện formula.js lên 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) bởi @mytharcher
- **[Workflow]** Sửa API logger của plugin workflow ([#6036](https://github.com/nocobase/nocobase/pull/6036)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Workflow]** Thêm logic phòng thủ để tránh kích hoạt trùng lặp ([#6022](https://github.com/nocobase/nocobase/pull/6022)) bởi @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Ngày phát hành: 2025-01-13*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi cột hành động cố định không hoạt động chính xác trong bảng ([#6048](https://github.com/nocobase/nocobase/pull/6048)) bởi @zhangzhonghe
- **[Người dùng]** Tắt tính năng tự động điền của trình duyệt khi đặt mật khẩu cho người dùng trong quản lý người dùng ([#6041](https://github.com/nocobase/nocobase/pull/6041)) bởi @2013xile
- **[Workflow]** Sửa lỗi sự kiện lịch dựa trên trường ngày không kích hoạt sau khi ứng dụng khởi động ([#6042](https://github.com/nocobase/nocobase/pull/6042)) bởi @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Ngày phát hành: 2025-01-14*

#### 🚀 Cải tiến

- **[client]** Thành phần datePicker chỉ đọc đầu vào ([#6061](https://github.com/nocobase/nocobase/pull/6061)) bởi @Cyx649312038

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi tải không chính xác các trường liên kết phương thức trong khối bảng ([#6060](https://github.com/nocobase/nocobase/pull/6060)) bởi @katherinehhh
  - Sửa lỗi kiểu trong bảng con trong khối chi tiết ([#6049](https://github.com/nocobase/nocobase/pull/6049)) bởi @katherinehhh
  - Sửa lỗi định dạng trường số ở chế độ readPretty ảnh hưởng đến chế độ chỉnh sửa ([#6050](https://github.com/nocobase/nocobase/pull/6050)) bởi @katherinehhh
  - Sửa lỗi kiểu ô tiêu đề bảng trong ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) bởi @katherinehhh
- **[database]** sửa lỗi khi khởi tạo trường sắp xếp với khóa chính ([#6059](https://github.com/nocobase/nocobase/pull/6059)) bởi @chareice
- **[Trực quan hóa dữ liệu]** Xóa mệnh đề `LIMIT` khi sử dụng các hàm tổng hợp mà không đặt thứ nguyên trong truy vấn biểu đồ ([#6062](https://github.com/nocobase/nocobase/pull/6062)) bởi @2013xile
- **[Trình quản lý sao lưu]** Đã sửa lỗi tải xuống bản sao lưu cho người dùng chỉ đăng nhập vào ứng dụng con bởi @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Ngày phát hành: 2025-01-10*

#### 🚀 Cải tiến

- **[client]** xóa quy tắc liên kết khỏi nút Liên kết ([#6016](https://github.com/nocobase/nocobase/pull/6016)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi quy tắc liên kết biểu mẫu không hoạt động khi chúng phụ thuộc vào giá trị trường từ bảng con ([#5876](https://github.com/nocobase/nocobase/pull/5876)) bởi @zhangzhonghe
  - Tiếp tục hiển thị trang sau khi yêu cầu kiểm tra xác thực hoàn tất ([#6020](https://github.com/nocobase/nocobase/pull/6020)) bởi @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Ngày phát hành: 2025-01-14*

#### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi gán trường cho nút biểu mẫu trong nút thủ công của workflow không hợp lệ ([#6054](https://github.com/nocobase/nocobase/pull/6054)) bởi @zhangzhonghe
  - Sửa lỗi thiếu biến cửa sổ bật lên hiện tại trong phương thức bật liên kết trường ([#6045](https://github.com/nocobase/nocobase/pull/6045)) bởi @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Ngày phát hành: 2025-01-09*

#### 🎉 Tính năng mới

- **[client]** thêm schemaSetting để hiển thị tên tệp cho tệp đính kèm ([#5995](https://github.com/nocobase/nocobase/pull/5995)) bởi @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Ngày phát hành: 2025-01-14*

#### 🚀 Cải tiến

- **[Workflow: Tính toán JSON]** Đổi tên nút truy vấn JSON thành Tính toán JSON bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Workflow]** Sửa loại giá trị cho thành phần DatePicker ([#6039](https://github.com/nocobase/nocobase/pull/6039)) bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng không mã, mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
