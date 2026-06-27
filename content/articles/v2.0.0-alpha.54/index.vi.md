---
title: "NocoBase v2.0.0-alpha.54: Khi tạo collection, có thể thay đổi kiểu trường id mặc định"
description: "Ghi chú phát hành v2.0.0-alpha.54"
---

### 🎉 Tính năng mới

- **[client]** Khi tạo collection, có thể thay đổi kiểu trường id mặc định ([#8129](https://github.com/nocobase/nocobase/pull/8129)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**
  - Thay đổi độ rộng cột bảng thành các tùy chọn có thể chọn ([#8188](https://github.com/nocobase/nocobase/pull/8188)) bởi @katherinehhh

  - Cải thiện kiểu dáng recordPicker với maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) bởi @katherinehhh

  - Tối ưu hóa các tùy chọn cấu hình (Khối, Trường, Hành động) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) bởi @katherinehhh

- **[Xử lý lỗi]** Không hiển thị thông báo lỗi cơ sở dữ liệu thô khi có lỗi cú pháp SQL, để tránh tiết lộ loại cơ sở dữ liệu ([#8195](https://github.com/nocobase/nocobase/pull/8195)) bởi @2013xile

- **[Khối: Bản đồ]** Hỗ trợ dấu ba chấm khi tràn chữ cho trường bản đồ ở chế độ hiển thị văn bản ([#8189](https://github.com/nocobase/nocobase/pull/8189)) bởi @katherinehhh

- **[Luồng công việc]** Hỗ trợ sử dụng cấu hình cũ để tạo mới trong luồng công việc đã sao chép ([#8165](https://github.com/nocobase/nocobase/pull/8165)) bởi @mytharcher

- **[Kiểm soát truy cập]** Không cho phép gán vai trò root cho người dùng ([#8180](https://github.com/nocobase/nocobase/pull/8180)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi nút gửi không hiển thị trong form tạo khi vai trò có quyền tạo ([#8190](https://github.com/nocobase/nocobase/pull/8190)) bởi @katherinehhh

  - Ngăn không cho xóa dữ liệu subtable/subform hiện có khi gửi mà không chọn bất kỳ mục nào ([#8172](https://github.com/nocobase/nocobase/pull/8172)) bởi @katherinehhh

  - Ngăn không cho cài đặt phạm vi dữ liệu xuất hiện trong cấu hình form tạo ([#8176](https://github.com/nocobase/nocobase/pull/8176)) bởi @katherinehhh

  - Không lưu được luồng sự kiện tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) bởi @chenos

  - Xóa khoảng trắng thừa sau khi tab bị ẩn ([#8167](https://github.com/nocobase/nocobase/pull/8167)) bởi @chenos

  - Sửa lỗi lọc không chính xác các tùy chọn đã chọn trong bản ghi liên kết chọn ([#8151](https://github.com/nocobase/nocobase/pull/8151)) bởi @katherinehhh

  - Sửa lỗi hiển thị trường tableoid trong khối form ([#8177](https://github.com/nocobase/nocobase/pull/8177)) bởi @katherinehhh

- **[server]**
  - Cập nhật license-kit lên phiên bản mới nhất ([#8173](https://github.com/nocobase/nocobase/pull/8173)) bởi @jiannx

  - Hỗ trợ trường ID Snowflake (53-bit) cho các nguồn dữ liệu bên ngoài ([#8185](https://github.com/nocobase/nocobase/pull/8185)) bởi @2013xile

- **[Khối: Bản đồ]** Sửa lỗi mức thu phóng bản đồ không chính xác sau khi chuyển menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) bởi @katherinehhh

- **[Luồng công việc]** Sửa lỗi chỉ hiển thị một bản ghi trong danh sách bản ghi để thực thi thủ công ([#8187](https://github.com/nocobase/nocobase/pull/8187)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Giải quyết vấn đề về chế độ SQL chọn nguồn dữ liệu bên ngoài; <br/>Giải quyết vấn đề về trạng thái tải của khối biểu đồ trong quá trình lấy dữ liệu; <br/> Giải quyết vấn đề về hủy cấu hình khối biểu đồ trống; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) bởi @heziqiang

- **[AI employees]** Giải quyết vấn đề về xuống dòng tin nhắn AI ([#8096](https://github.com/nocobase/nocobase/pull/8096)) bởi @heziqiang

- **[Cài đặt giấy phép]**
  - Sửa lỗi ngoại lệ khi build ts của plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) bởi @jiannx

  - Tối ưu hóa giấy phép và bổ sung thông tin nhắc nhở ([#7993](https://github.com/nocobase/nocobase/pull/7993)) bởi @jiannx

- **[Quản lý tệp]** Sửa lỗi xem trước tệp `.txt` trên OSS bị sai bảng mã ([#8161](https://github.com/nocobase/nocobase/pull/8161)) bởi @mytharcher

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi các tùy chọn `encrypt` và `trustServerCertificate` không khả dụng bởi @2013xile

- **[Collection: Kết nối dữ liệu nước ngoài (FDW)]** Sửa lỗi tải không thành công đối với các bảng có tên viết hoa bởi @2013xile

- **[Luồng công việc: Phê duyệt]** Sửa lỗi trạng thái của các bản ghi phê duyệt không liên quan bị thay đổi sai thành `UNPROCESSED` bởi hành động phê duyệt bởi @mytharcher
