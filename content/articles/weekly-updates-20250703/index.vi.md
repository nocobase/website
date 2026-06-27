---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: thêm hỗ trợ bộ lọc cho quản lý đa ứng dụng, tối ưu hóa kiểu di động, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Ngày phát hành: 2025-06-26*

#### 🚀 Cải tiến

- **[Workflow]** Tối ưu giao diện di động ([#7040](https://github.com/nocobase/nocobase/pull/7040)) bởi @mytharcher
- **[Biểu mẫu công khai]** Tối ưu hiệu suất của các thành phần ngày tháng trong biểu mẫu công khai ([#7117](https://github.com/nocobase/nocobase/pull/7117)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[Workflow]** Sửa tham số của việc tải bản ghi trong các tác vụ ([#7123](https://github.com/nocobase/nocobase/pull/7123)) bởi @mytharcher
- **[WEB client]** Sửa lỗi các khối bên dưới trang không hiển thị sau khi thiết lập quyền menu vai trò ([#7112](https://github.com/nocobase/nocobase/pull/7112)) bởi @aaaaaajie
- **[Workflow: Phê duyệt]**

  - Sửa tên biến người nộp đơn trong trình kích hoạt bởi @mytharcher
  - Sửa giao diện di động bởi @mytharcher
  - Sửa lỗi xảy ra khi bộ sưu tập liên quan đến phê duyệt bị xóa bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Ngày phát hành: 2025-06-27*

#### 🎉 Tính năng mới

- **[Workflow: Nút yêu cầu HTTP]** Hỗ trợ yêu cầu `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) bởi @shushu992

#### 🚀 Cải tiến

- **[Workflow]**

  - Tối ưu giao diện di động ([#7040](https://github.com/nocobase/nocobase/pull/7040)) bởi @mytharcher
  - Điều chỉnh API của `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) bởi @mytharcher
- **[Biểu mẫu công khai]** Tối ưu hiệu suất của các thành phần ngày tháng trong biểu mẫu công khai ([#7117](https://github.com/nocobase/nocobase/pull/7117)) bởi @zhangzhonghe
- **[Workflow: Sự kiện trước hành động]** Điều chỉnh api biến bởi @mytharcher
- **[Workflow: Phê duyệt]** Điều chỉnh API biến bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Giới hạn phạm vi không chính xác trên các trường ngày tháng có thời gian ([#7107](https://github.com/nocobase/nocobase/pull/7107)) bởi @katherinehhh
  - Khi các biến tham số truy vấn URL trống, các điều kiện phạm vi dữ liệu không bị loại bỏ ([#7104](https://github.com/nocobase/nocobase/pull/7104)) bởi @zhangzhonghe
- **[Workflow]**

  - Sửa tham số của việc tải bản ghi trong các tác vụ ([#7123](https://github.com/nocobase/nocobase/pull/7123)) bởi @mytharcher
  - Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7099](https://github.com/nocobase/nocobase/pull/7099)) bởi @mytharcher
  - Sửa lỗi thống kê bị xóa theo tầng bởi phiên bản workflow không hiện tại ([#7103](https://github.com/nocobase/nocobase/pull/7103)) bởi @mytharcher
- **[Di động]** Sửa lỗi z-index của popup trên di động ([#7110](https://github.com/nocobase/nocobase/pull/7110)) bởi @zhangzhonghe
- **[WEB client]** Sửa lỗi các khối bên dưới trang không hiển thị sau khi thiết lập quyền menu vai trò ([#7112](https://github.com/nocobase/nocobase/pull/7112)) bởi @aaaaaajie
- **[Lịch]** Lỗi trường ngày tháng trong biểu mẫu tạo nhanh của khối lịch ([#7106](https://github.com/nocobase/nocobase/pull/7106)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Giải quyết lỗi đăng nhập sau khi nhập hàng loạt tên người dùng và mật khẩu ([#7076](https://github.com/nocobase/nocobase/pull/7076)) bởi @aaaaaajie
- **[Workflow: Phê duyệt]**

  - Sửa lỗi xảy ra khi bộ sưu tập liên quan đến phê duyệt bị xóa bởi @mytharcher
  - Sửa giao diện di động bởi @mytharcher
  - Sửa tên biến người nộp đơn trong trình kích hoạt bởi @mytharcher
  - Chỉ người tham gia mới có thể xem (lấy) chi tiết phê duyệt bởi @mytharcher
  - Sửa lỗi API biến cũ gây ra lỗi bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Ngày phát hành: 2025-07-02*

#### 🚀 Cải tiến

- **[database]** Hỗ trợ thêm tùy chọn pool từ env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) bởi @mytharcher
- **[Workflow]**

  - Cải thiện hiệu suất tải danh sách thực thi bằng cách loại trừ trường JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) bởi @mytharcher
  - Thêm API log cho kiểm thử nút ([#7129](https://github.com/nocobase/nocobase/pull/7129)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Thay đổi thời gian thành tuyệt đối trong dòng thời gian bởi @mytharcher

#### 🐛 Sửa lỗi

- **[utils]** Lỗi lọc trên DateOnly hoặc Datetime (không có múi giờ) sử dụng biến Exact day ([#7113](https://github.com/nocobase/nocobase/pull/7113)) bởi @katherinehhh
- **[cli]**

  - Lỗi undefined khi tải xuống plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) bởi @jiannx
  - Điều chỉnh bản sao giấy phép khi cài đặt plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) bởi @jiannx
- **[client]**

  - Khả năng chịu lỗi cho cài đặt dựa trên 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) bởi @mytharcher
  - Thiết lập field displayName trong chế độ xem kết nối không có tác dụng ([#7130](https://github.com/nocobase/nocobase/pull/7130)) bởi @aaaaaajie
  - Cấu hình UI nút thủ công của Workflow: quy tắc liên kết không thể chọn biến Biểu mẫu hiện tại ([#7125](https://github.com/nocobase/nocobase/pull/7125)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi xảy ra do import vòng tròn ([#7134](https://github.com/nocobase/nocobase/pull/7134)) bởi @mytharcher
- **[plugin-commercial]**

  - Chế độ phát triển không hiển thị popup giấy phép bởi @jiannx
  - Tạm thời đóng popup xác minh giấy phép bởi @jiannx
  - Điều chỉnh logic xác minh giấy phép và hỗ trợ khớp tên miền pan bởi @jiannx
- **[Chính sách mật khẩu]** Hỗ trợ khóa tài khoản người dùng vĩnh viễn bởi @2013xile
- **[Workflow: Luồng con]** Sửa lỗi trong chế độ cụm bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Thêm cài đặt bố cục biểu mẫu bởi @mytharcher
  - Loại bỏ các trường không thể lọc khỏi bộ lọc bởi @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Ngày phát hành: 2025-06-27*

#### 🎉 Tính năng mới

- **[Cài đặt giấy phép]** thêm cài đặt giấy phép và xác thực giấy phép trước khi tải xuống plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) bởi @jiannx

#### 🚀 Cải tiến

- **[Trình quản lý đa ứng dụng]** thêm hỗ trợ bộ lọc cho quản lý đa ứng dụng ([#7124](https://github.com/nocobase/nocobase/pull/7124)) bởi @katherinehhh
- **[Workflow]** Tối ưu giao diện di động ([#7040](https://github.com/nocobase/nocobase/pull/7040)) bởi @mytharcher
- **[Biểu mẫu công khai]** Tối ưu hiệu suất của các thành phần ngày tháng trong biểu mẫu công khai ([#7117](https://github.com/nocobase/nocobase/pull/7117)) bởi @zhangzhonghe
- **[plugin-commercial]** mã hóa gửi log và cải thiện hiển thị thông tin Giấy phép bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]** giá trị mặc định của trường liên kết ghi đè dữ liệu hiện có trong bảng con ([#7120](https://github.com/nocobase/nocobase/pull/7120)) bởi @katherinehhh
- **[Workflow]** Sửa tham số của việc tải bản ghi trong các tác vụ ([#7123](https://github.com/nocobase/nocobase/pull/7123)) bởi @mytharcher
- **[WEB client]** Sửa lỗi các khối bên dưới trang không hiển thị sau khi thiết lập quyền menu vai trò ([#7112](https://github.com/nocobase/nocobase/pull/7112)) bởi @aaaaaajie
- **[Workflow: Phê duyệt]** Sửa tên biến người nộp đơn trong trình kích hoạt bởi @mytharcher
