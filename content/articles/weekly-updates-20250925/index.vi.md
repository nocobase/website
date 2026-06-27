---
title: "Cập nhật hàng tuần của NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: hỗ trợ xoay ảnh khi xem trước, bổ sung hỗ trợ bản địa hóa cho chú thích công cụ và tiêu đề mục nhóm, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Ngày phát hành: 2025-09-20*

#### 🚀 Cải tiến

- **[client]** Thêm hỗ trợ bản địa hóa cho tooltip & tiêu đề mục nhóm ([#7485](https://github.com/nocobase/nocobase/pull/7485)) bởi @katherinehhh
- **[Lịch]** Hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch ([#7508](https://github.com/nocobase/nocobase/pull/7508)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi popover cấu hình biểu tượng menu bị che khuất ([#7515](https://github.com/nocobase/nocobase/pull/7515)) bởi @zhangzhonghe
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Sửa lỗi phân tích cú pháp liên kết thông báo không chính xác ([#7509](https://github.com/nocobase/nocobase/pull/7509)) bởi @mytharcher
  - Sửa lỗi không hiển thị tin nhắn gần đây khi mở popup thông báo ([#7514](https://github.com/nocobase/nocobase/pull/7514)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi logic đăng ký không chính xác trên hàng đợi tác vụ nền trong quy trình làm việc khiến thông điệp thực thi bị xử lý sai ([#7507](https://github.com/nocobase/nocobase/pull/7507)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi xảy ra khi xóa dữ liệu từ nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa lỗi trường công thức trong biểu mẫu phê duyệt không tự động cập nhật bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Ngày phát hành: 2025-09-20*

#### 🚀 Cải tiến

- **[auth]** Hỗ trợ sử dụng dấu `.` trong tên người dùng ([#7504](https://github.com/nocobase/nocobase/pull/7504)) bởi @2013xile
- **[client]** Thêm hỗ trợ bản địa hóa cho tooltip & tiêu đề mục nhóm ([#7485](https://github.com/nocobase/nocobase/pull/7485)) bởi @katherinehhh
- **[Quy trình làm việc: Nút thủ công]** Hỗ trợ xem và tiếp tục các tác vụ thủ công đang chờ xử lý trong các quy trình làm việc đã bị vô hiệu hóa ([#7493](https://github.com/nocobase/nocobase/pull/7493)) bởi @mytharcher
- **[Lịch]** Hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch ([#7508](https://github.com/nocobase/nocobase/pull/7508)) bởi @katherinehhh
- **[Trình chỉnh sửa chủ đề]** Thêm hỗ trợ tùy chỉnh màu menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu
- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi popup cấu hình biểu tượng nút bị che/phủ ([#7506](https://github.com/nocobase/nocobase/pull/7506)) bởi @zhangzhonghe
  - Sửa lỗi popover cấu hình biểu tượng menu bị che khuất ([#7515](https://github.com/nocobase/nocobase/pull/7515)) bởi @zhangzhonghe
  - Sửa lỗi thành phần Popover bị chồng lấp/che phủ ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Sửa lỗi phân tích cú pháp liên kết thông báo không chính xác ([#7509](https://github.com/nocobase/nocobase/pull/7509)) bởi @mytharcher
  - Sửa lỗi không hiển thị tin nhắn gần đây khi mở popup thông báo ([#7514](https://github.com/nocobase/nocobase/pull/7514)) bởi @mytharcher
- **[Quy trình làm việc]**

  - Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký quy trình làm việc ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher
  - Sửa lỗi logic đăng ký không chính xác trên hàng đợi tác vụ nền trong quy trình làm việc khiến thông điệp thực thi bị xử lý sai ([#7507](https://github.com/nocobase/nocobase/pull/7507)) bởi @mytharcher
- **[Nguồn dữ liệu: REST API]** Sửa quy tắc xác thực URL API rest bởi @katherinehhh
- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher
- **[In mẫu]** Hỗ trợ trường chinaRegions bởi @jiannx
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi trường công thức trong biểu mẫu phê duyệt không tự động cập nhật bởi @mytharcher
  - Sửa lỗi xảy ra khi xóa dữ liệu từ nguồn dữ liệu bên ngoài bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Ngày phát hành: 2025-09-24*

#### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ xoay ảnh khi xem trước ([#7523](https://github.com/nocobase/nocobase/pull/7523)) bởi @mytharcher
  - Thêm hỗ trợ bản địa hóa cho tooltip & tiêu đề mục nhóm ([#7485](https://github.com/nocobase/nocobase/pull/7485)) bởi @katherinehhh
- **[Bộ điều hợp hàng đợi RabbitMQ]** Cải thiện xử lý kết nối RabbitMQ và logic xử lý tin nhắn bởi @sdp-ncd

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi menu con thanh bên không thể đánh dấu chính xác ([#7520](https://github.com/nocobase/nocobase/pull/7520)) bởi @duannyuuu
  - Sửa lỗi popover cấu hình biểu tượng menu bị che khuất ([#7515](https://github.com/nocobase/nocobase/pull/7515)) bởi @zhangzhonghe
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi không hiển thị tin nhắn gần đây khi mở popup thông báo ([#7514](https://github.com/nocobase/nocobase/pull/7514)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi điều kiện danh sách quy trình làm việc không chính xác khi tải ngữ cảnh trường liên kết trong cấu hình quy trình làm việc được ràng buộc ([#7516](https://github.com/nocobase/nocobase/pull/7516)) bởi @mytharcher
- **[Quy trình làm việc: Nút lặp]** Sửa lỗi quy trình tiến tới mục tiếp theo không chính xác ngay cả khi điều kiện nút lặp không được thỏa mãn ([#7521](https://github.com/nocobase/nocobase/pull/7521)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi xảy ra khi xóa dữ liệu từ nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa lỗi trường công thức trong biểu mẫu phê duyệt không tự động cập nhật bởi @mytharcher
