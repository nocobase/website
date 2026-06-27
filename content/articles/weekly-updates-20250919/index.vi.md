---
title: "Cập nhật hàng tuần của NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật trong tuần này bao gồm: hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch, sửa lỗi và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Ngày phát hành: 2025-09-17*

#### 🚀 Cải tiến

- **[auth]** Hỗ trợ sử dụng dấu `.` trong tên người dùng ([#7504](https://github.com/nocobase/nocobase/pull/7504)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi cửa sổ cấu hình biểu tượng nút bị che/khuất ([#7506](https://github.com/nocobase/nocobase/pull/7506)) bởi @zhangzhonghe
- **[In mẫu]** hỗ trợ trường chinaRegions bởi @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Ngày phát hành: 2025-09-13*

#### 🎉 Tính năng mới

- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt bởi @mytharcher

#### 🚀 Cải tiến

- **[server]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher
- **[client]** Loại bỏ popover dấu ba chấm khỏi danh sách tệp ([#7479](https://github.com/nocobase/nocobase/pull/7479)) bởi @mytharcher
- **[Quy trình làm việc]** Tối ưu hóa quy trình chuẩn bị quy trình làm việc để hỗ trợ sử dụng dữ liệu nút đã được tải trước ([#7476](https://github.com/nocobase/nocobase/pull/7476)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Thêm hỗ trợ tùy chỉnh màu menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu
- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi thành phần Popover bị chồng lấp/che khuất ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe
  - Kiểm tra 'không rỗng' không chính xác cho trường số trong quy tắc liên kết ([#7477](https://github.com/nocobase/nocobase/pull/7477)) bởi @katherinehhh
  - Trường select/multiselect/date/richtext ở chế độ chỉ đọc vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh
- **[Quy trình làm việc]** Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký quy trình làm việc ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher
- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher
- **[Nguồn dữ liệu: REST API]** sửa quy tắc xác thực URL API REST bởi @katherinehhh
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi văn bản trạng thái trong thông báo hoàn thành phê duyệt không được dịch bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Ngày phát hành: 2025-09-17*

#### 🚀 Cải tiến

- **[auth]** Hỗ trợ sử dụng dấu `.` trong tên người dùng ([#7504](https://github.com/nocobase/nocobase/pull/7504)) bởi @2013xile
- **[server]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher
- **[snowflake-id]** Thay đổi ID của các bảng hệ thống có khóa chính tự động tăng nhưng không có định danh duy nhất thành ID kiểu Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) bởi @2013xile
- **[Lịch]** hỗ trợ hiển thị ánh xạ ngôn ngữ cho tiêu đề lịch ([#7508](https://github.com/nocobase/nocobase/pull/7508)) bởi @katherinehhh
- **[Quy trình làm việc: Nút thủ công]** Hỗ trợ xem và tiếp tục các tác vụ thủ công đang chờ xử lý trong các quy trình làm việc đã bị vô hiệu hóa ([#7493](https://github.com/nocobase/nocobase/pull/7493)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Thêm hỗ trợ tùy chỉnh màu menu bên ([#7483](https://github.com/nocobase/nocobase/pull/7483)) bởi @duannyuuu
- **[Bộ điều hợp hàng đợi Redis]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho bộ điều hợp hàng đợi tin nhắn Redis bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi cửa sổ cấu hình biểu tượng nút bị che/khuất ([#7506](https://github.com/nocobase/nocobase/pull/7506)) bởi @zhangzhonghe
  - Sửa lỗi thành phần Popover bị chồng lấp/che khuất ([#7491](https://github.com/nocobase/nocobase/pull/7491)) bởi @zhangzhonghe
  - Trường select/multiselect/date/richtext ở chế độ chỉ đọc vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh
- **[Quy trình làm việc]**

  - Sửa lỗi logic đăng ký không chính xác trên hàng đợi tác vụ nền trong quy trình làm việc khiến thông điệp thực thi bị xử lý sai ([#7507](https://github.com/nocobase/nocobase/pull/7507)) bởi @mytharcher
  - Sửa lỗi tiềm ẩn liên quan đến bộ nhớ đệm nhật ký quy trình làm việc ([#7490](https://github.com/nocobase/nocobase/pull/7490)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi phân tích cú pháp liên kết thông báo không chính xác ([#7509](https://github.com/nocobase/nocobase/pull/7509)) bởi @mytharcher
- **[Nguồn dữ liệu: REST API]** sửa quy tắc xác thực URL API REST bởi @katherinehhh
- **[Mã hóa yêu cầu HTTP]** Sửa lỗi tham số yêu cầu không hỗ trợ kiểu URLSearchParams gốc bởi @mytharcher
- **[In mẫu]** hỗ trợ trường chinaRegions bởi @jiannx
- **[Trình quản lý email]** Sửa lỗi tiêu đề rác bởi @jiannx
