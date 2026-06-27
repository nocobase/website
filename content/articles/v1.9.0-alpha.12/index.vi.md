---
title: "NocoBase v1.9.0-alpha.12: Hỗ trợ quy tắc xác thực trường"
description: "Ghi chú phát hành của v1.9.0-alpha.12"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ quy tắc xác thực trường ([#7297](https://github.com/nocobase/nocobase/pull/7297)) bởi @aaaaaajie

- **[Workflow: Phê duyệt]**
  - Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher

  - Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một workflow bởi @mytharcher

### 🚀 Cải tiến

- **[database]** Tối ưu hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie

- **[client]** Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher

- **[Mobile]** Tối ưu thành phần popup trên thiết bị di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe

- **[Workflow]** Cập nhật menu chọn nút để hiển thị các tùy chọn theo bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher

- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx

- **[Thông báo: Tin nhắn trong ứng dụng]** Loại bỏ đầu ra nhật ký SQL qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile

- **[Xác thực]** Xóa tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile

- **[In mẫu]** hỗ trợ trường mảng m2m bởi @jiannx

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi khi đọc bảng ngoài của Postgres bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie

- **[client]**
  - coi số 0 là giá trị rỗng trong quá trình xác thực rỗng của quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh

  - Sửa lỗi nút "Cài đặt cột" tải cột từ bảng bên trong hộp thoại modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) bởi @kerwin612

  - Sửa lỗi văn bản của nút liên kết bị xuống dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher

- **[server]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile

- **[Khối: mẫu]** Khắc phục sự cố khi các khối thư không hiển thị khi được đặt bên trong khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust

- **[Workflow: nút gửi email]** Sửa lỗi nút email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher

- **[Mobile]**
  - định dạng hiển thị không chính xác của trường ngày trên thiết bị di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh

  - Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên thiết bị di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe

- **[Workflow]**
  - Sửa lỗi báo lỗi và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher

  - Sửa bản dịch của tiêu đề trang trong trung tâm tác vụ workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher

- **[Trình xem trước tệp Office]** Sửa lỗi báo lỗi khi tải tệp lên trường URL đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa bản dịch ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher

- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do loại biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher

- **[Trình quản lý tệp]** Xóa gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher

- **[Lịch]** tooltip của mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi Pro]** Không cho phép gán trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie

- **[Workflow: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công các hành động trên nhiều bản ghi bởi @mytharcher

- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx

- **[Lưu trữ tệp: S3(Pro)]**
  - Không dùng tham số có vấn đề `attachmentField` bởi @mytharcher

  - Sửa lỗi không thể sử dụng phương thức xác thực IAM để tải tệp lên bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi khi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher

  - Sửa lỗi danh sách người dùng trống khi ký kết bởi @mytharcher

- **[Trình quản lý sao lưu]** các bản sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn thành bởi @gchust

- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` được tạo bởi pg_dump mới nhất khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile
