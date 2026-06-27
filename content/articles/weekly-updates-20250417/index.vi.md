---
title: "Cập nhật hàng tuần NocoBase: Một số plugin thương mại chuyển sang mã nguồn mở"
description: "Các cập nhật trong tuần này bao gồm: các plugin thương mại cho phòng ban, URL tệp đính kèm và tin nhắn phản hồi quy trình làm việc hiện được cung cấp miễn phí."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Ngày phát hành: 2025-04-11*

#### 🚀 Cải tiến

- **[client]**

  - Thêm API dự phòng kiểu mặc định cho `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) bởi @mytharcher
  - Tối ưu hóa lời nhắc cho các trang chưa được cấu hình ([#6641](https://github.com/nocobase/nocobase/pull/6641)) bởi @zhangzhonghe
- **[Quy trình làm việc: Nút trì hoãn]** Hỗ trợ sử dụng biến cho thời lượng ([#6621](https://github.com/nocobase/nocobase/pull/6621)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Thêm cài đặt làm mới cho nút kích hoạt quy trình làm việc bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Mô tả bảng con chồng lấn với nút thêm mới ([#6646](https://github.com/nocobase/nocobase/pull/6646)) bởi @katherinehhh
  - Gạch chân nét đứt do bố cục biểu mẫu ngang trong modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) bởi @katherinehhh
- **[Lưu trữ tệp: S3(Pro)]** Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx
- **[Trình quản lý email]** Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Ngày phát hành: 2025-04-14*

#### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi ảnh xem trước bị che khuất ([#6651](https://github.com/nocobase/nocobase/pull/6651)) bởi @zhangzhonghe
  - Trong khối biểu mẫu, giá trị mặc định của cấu hình trường sẽ hiển thị dưới dạng chuỗi biến gốc rồi biến mất ([#6649](https://github.com/nocobase/nocobase/pull/6649)) bởi @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Ngày phát hành: 2025-04-14*

#### 🎉 Tính năng mới

- **[Phòng ban]** Biến Phòng ban, URL tệp đính kèm và plugin tin nhắn phản hồi Quy trình làm việc thành miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos

#### 🐛 Sửa lỗi

- **[client]**

  - Biểu mẫu bộ lọc không nên hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe
  - Tùy chọn "cho phép nhiều" không hoạt động cho trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh
  - Trong biểu mẫu bộ lọc, khi nhấp vào nút lọc, nếu có trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe
  - Chuyển sang menu nhóm không nên nhảy đến một trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe
- **[Lưu trữ tệp: S3(Pro)]**

  - Sắp xếp ngôn ngữ bởi @jiannx
  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 pro bởi @jiannx
- **[Trình quản lý di chuyển]** tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ bật lên biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Ngày phát hành: 2025-04-10*

#### 🚀 Cải tiến

- **[Quy trình làm việc: Nút trì hoãn]** Hỗ trợ sử dụng biến cho thời lượng ([#6621](https://github.com/nocobase/nocobase/pull/6621)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Quy trình làm việc]** Sửa lỗi OOM khi tạo job với id số nguyên không an toàn ([#6637](https://github.com/nocobase/nocobase/pull/6637)) bởi @mytharcher
- **[Khối: mẫu]** khi mẫu được tham chiếu bởi khối trang đã bị xóa, việc lưu dưới dạng mẫu sẽ thất bại ([#6638](https://github.com/nocobase/nocobase/pull/6638)) bởi @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Ngày phát hành: 2025-04-12*

#### 🚀 Cải tiến

- **[client]**

  - Thêm API dự phòng kiểu mặc định cho `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) bởi @mytharcher
  - Tối ưu hóa lời nhắc cho các trang chưa được cấu hình ([#6641](https://github.com/nocobase/nocobase/pull/6641)) bởi @zhangzhonghe
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Thêm cài đặt làm mới cho nút kích hoạt quy trình làm việc bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Tiêu đề ngăn chỉnh sửa nút quy trình làm việc hiển thị [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) bởi @katherinehhh
  - Mô tả bảng con chồng lấn với nút thêm mới ([#6646](https://github.com/nocobase/nocobase/pull/6646)) bởi @katherinehhh
  - Kiểu nhập biến không chính xác ([#6645](https://github.com/nocobase/nocobase/pull/6645)) bởi @gchust
  - Gạch chân nét đứt do bố cục biểu mẫu ngang trong modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) bởi @katherinehhh
- **[Quy trình làm việc]** Sửa lỗi thông tin thống kê của quy trình làm việc không được tải khi ứng dụng khởi động ([#6642](https://github.com/nocobase/nocobase/pull/6642)) bởi @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Ngày phát hành: 2025-04-15*

#### 🎉 Tính năng mới

- **[Phòng ban]** Biến Phòng ban, URL tệp đính kèm và plugin tin nhắn phản hồi Quy trình làm việc thành miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos
- **[Hành động: Cập nhật hàng loạt]** Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe

#### 🚀 Cải tiến

- **[Quy trình làm việc]** Hỗ trợ URL popup cố định cho các tác vụ quy trình làm việc ([#6640](https://github.com/nocobase/nocobase/pull/6640)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Chuyển sang menu nhóm không nên nhảy đến một trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe
  - Biểu mẫu bộ lọc không nên hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe
  - Sửa lỗi ảnh xem trước bị che khuất ([#6651](https://github.com/nocobase/nocobase/pull/6651)) bởi @zhangzhonghe
  - Trong biểu mẫu bộ lọc, khi nhấp vào nút lọc, nếu có trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe
  - Tùy chọn "cho phép nhiều" không hoạt động cho trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh
  - Trong khối biểu mẫu, giá trị mặc định của cấu hình trường sẽ hiển thị dưới dạng chuỗi biến gốc rồi biến mất ([#6649](https://github.com/nocobase/nocobase/pull/6649)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** chỉ cho phép các bộ sưu tập tệp có quyền truy cập URL công khai ([#6664](https://github.com/nocobase/nocobase/pull/6664)) bởi @katherinehhh
- **[Lưu trữ tệp: S3(Pro)]**

  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 pro bởi @jiannx
  - Sắp xếp ngôn ngữ bởi @jiannx
- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ URL cố định cho các mục phê duyệt trong trung tâm tác vụ bởi @mytharcher
- **[Trình quản lý di chuyển]** tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ bật lên biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Ngày phát hành: 2025-04-16*

#### 🎉 Tính năng mới

- **[Trường bộ sưu tập: Mã]** Thêm giao diện mã bởi @mytharcher

#### 🚀 Cải tiến

- **[create-nocobase-app]** Nâng cấp một số phụ thuộc lên phiên bản mới nhất ([#6673](https://github.com/nocobase/nocobase/pull/6673)) bởi @chenos

#### 🐛 Sửa lỗi

- **[client]**

  - Các trường kế thừa được hiển thị trong danh sách gán trường của bộ sưu tập hiện tại ([#6666](https://github.com/nocobase/nocobase/pull/6666)) bởi @katherinehhh
  - Vấn đề về kiểu trong đầu vào biến khi đặt giá trị mặc định ([#6668](https://github.com/nocobase/nocobase/pull/6668)) bởi @katherinehhh
- **[build]** đầu ra bản dựng không chính xác khi plugin phụ thuộc vào một số thư viện AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) bởi @gchust
- **[Khối: iframe]** thanh cuộn dọc xuất hiện khi khối iframe được đặt chiều cao toàn phần ([#6675](https://github.com/nocobase/nocobase/pull/6675)) bởi @katherinehhh
- **[Kiểm soát truy cập]** Sửa lỗi xảy ra khi tuần tự hóa mô hình vai trò vào bộ nhớ đệm ([#6674](https://github.com/nocobase/nocobase/pull/6674)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi di chuyển xảy ra từ MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) bởi @mytharcher
- **[Trình quản lý email]** sửa lỗi không thể đồng bộ, không hiển thị chủ đề và các lỗi nhỏ khác bởi @jiannx
