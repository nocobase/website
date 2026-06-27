---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa logic lưu công việc"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ tìm kiếm trường trong thành phần Bộ lọc, hỗ trợ biến toàn cục trong cấu hình lưu trữ, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Ngày phát hành: 2025-04-03*

#### 🐛 Sửa lỗi

- **[client]**

  - Thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh
  - Sự cố hiển thị nhãn trường để tránh bị cắt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh
- **[database]** Khi xóa bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Ngày phát hành: 2025-04-09*

#### 🚀 Cải tiến

- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher
- **[client]**

  - Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher
  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher
- **[Error handler]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66
- **[IP restriction]** Cập nhật nội dung thông báo giới hạn IP. bởi @sheldon66
- **[File storage: S3(Pro)]** Hỗ trợ biến toàn cục trong cấu hình lưu trữ bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Quy tắc với điều kiện 'any' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh
  - Sự cố dữ liệu với khối Gantt trong bộ sưu tập dạng cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh
  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới vì không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe
  - Lỗi phân tích biến khi tham số URL chứa ký tự tiếng Trung ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh
- **[Users]** Sự cố phân tích cú pháp lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile
- **[Mobile]** Trường chọn đơn với bộ lọc 'contains' trên thiết bị di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh
- **[Action: Export records]** Thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh
- **[Email manager]** Sửa lỗi quyền quản lý email không thể xem danh sách email bởi @jiannx
- **[File storage: S3(Pro)]** Ném lỗi cho người dùng khi tải logo lên bộ lưu trữ S3 Pro (đặt làm mặc định) bởi @mytharcher
- **[Workflow: Approval]** Sửa lỗi `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher
- **[Migration manager]** Thời gian tạo nhật ký di chuyển hiển thị không chính xác trong một số môi trường bởi @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Ngày phát hành: 2025-04-09*

#### 🎉 Tính năng mới

- **[UI schema storage]** Thêm mô-đun bản địa hóa cho UISchema, cho phép dịch tùy chỉnh cho tiêu đề và mô tả schema ([#6574](https://github.com/nocobase/nocobase/pull/6574)) bởi @chenos

#### 🚀 Cải tiến

- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher
- **[client]**

  - Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher
  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher
- **[Workflow]** Tối ưu hóa logic lưu công việc ([#6613](https://github.com/nocobase/nocobase/pull/6613)) bởi @mytharcher
- **[Error handler]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66
- **[IP restriction]** Cập nhật nội dung thông báo giới hạn IP. bởi @sheldon66
- **[File storage: S3(Pro)]** Hỗ trợ biến toàn cục trong cấu hình lưu trữ bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới vì không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe
  - Sự cố dữ liệu với khối Gantt trong bộ sưu tập dạng cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh
  - Khoảng trống giữa tiêu đề trang cấu hình mẫu khối và menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) bởi @gchust
  - Quy tắc với điều kiện 'any' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh
  - Thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh
  - Lỗi phân tích biến khi tham số URL chứa ký tự tiếng Trung ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh
  - Sự cố hiển thị nhãn trường để tránh bị cắt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh
- **[Action: Export records]** Thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh
- **[Users]** Sự cố phân tích cú pháp lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile
- **[Mobile]** Trường chọn đơn với bộ lọc 'contains' trên thiết bị di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh
- **[Access control]** Sửa logic tính toán hợp nhất vai trò ([#6605](https://github.com/nocobase/nocobase/pull/6605)) bởi @aaaaaajie
- **[Block: template]** Sửa đổi và xóa các trường giống nhau từ mẫu và khối, sau khi tạo khối từ mẫu, có thể gây ra lỗi hiển thị ([#6626](https://github.com/nocobase/nocobase/pull/6626)) bởi @gchust
- **[Email manager]**

  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx
  - Sửa lỗi quyền quản lý email không thể xem danh sách email bởi @jiannx
- **[File storage: S3(Pro)]**

  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx
  - Ném lỗi cho người dùng khi tải logo lên bộ lưu trữ S3 Pro (đặt làm mặc định) bởi @mytharcher
- **[Workflow: Approval]** Sửa lỗi `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher
- **[Migration manager]** Thời gian tạo nhật ký di chuyển hiển thị không chính xác trong một số môi trường bởi @gchust
