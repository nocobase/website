---
title: "NocoBase v2.1.0-alpha.35: Thêm nhân viên AI mới, Kỹ sư bản địa hóa Lina, để hỗ trợ các tác vụ dịch thuật bản địa hóa"
description: "Ghi chú phát hành của v2.1.0-alpha.35"
---

### 🎉 Tính năng mới

- **[undefined]** Thêm một nhân viên AI mới, Kỹ sư bản địa hóa Lina, để hỗ trợ các tác vụ dịch thuật bản địa hóa ([#9434](https://github.com/nocobase/nocobase/pull/9434)) bởi @2013xile
Tham khảo: [Quản lý bản địa hóa](https://docs.nocobase.com/system-management/localization)<br>[Lina: Kỹ sư bản địa hóa](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Sử dụng Lina và HY-MT1.5-1.8B cục bộ để dịch các mục bản địa hóa](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Lịch]** Đã thêm hỗ trợ client v2 cho plugin Lịch. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) bởi @jiannx

- **[Khối: Cây]** Đã thêm hỗ trợ client-v2 cho khối bộ lọc dạng cây. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) bởi @jiannx

- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ tải tệp lên qua bộ nhớ S3 Pro trong trình quản lý tệp v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[build]** Đã thêm phạm vi kiểm tra hồi quy để giữ cho `deleteServerFiles` không xóa các tạo phẩm xây dựng `client` và `client-v2` trên cả đường dẫn Windows và POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) bởi @Molunerfinn

- **[client]** loại trừ các bản ghi đã được liên kết trong hộp thoại chọn liên kết của khối bảng một-nhiều ([#9448](https://github.com/nocobase/nocobase/pull/9448)) bởi @katherinehhh

- **[Nhân viên AI]** Tối ưu hóa tương tác và hiệu suất hội thoại song song của nhân viên AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) bởi @cgyrock

- **[Trình quản lý tệp]** Các plugin lưu trữ bên thứ ba hiện có thể đăng ký biểu mẫu loại lưu trữ của riêng họ trên trang cài đặt trình quản lý tệp v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) bởi @Molunerfinn

- **[AI: Cơ sở tri thức]** Định danh duy nhất cho cơ sở tri thức có thể được cấu hình tại thời điểm tạo bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - sửa lỗi ngăn chặn mở chỉnh sửa nhanh cho các trường liên kết trong bảng ([#9469](https://github.com/nocobase/nocobase/pull/9469)) bởi @katherinehhh

  - sửa lỗi các trường chọn nhiều trong khối dữ liệu v2 nên hiển thị nhãn tùy chọn thay vì giá trị ([#9472](https://github.com/nocobase/nocobase/pull/9472)) bởi @katherinehhh

  - Sửa lỗi yêu cầu bảng trùng lặp khi biểu mẫu bộ lọc có giá trị mặc định ([#9423](https://github.com/nocobase/nocobase/pull/9423)) bởi @zhangzhonghe

  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust

  - Đã sửa lỗi không thể chọn tùy chọn cho trường chọn của trường liên kết. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) bởi @gchust

  - Sửa lỗi cài đặt hệ thống hiển thị trống sau khi gửi ([#9458](https://github.com/nocobase/nocobase/pull/9458)) bởi @zhangzhonghe

  - Đã sửa lỗi phạm vi dữ liệu khối mục tiêu được đặt không chính xác khi bỏ chọn dữ liệu hàng trong luồng sự kiện khối bảng. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) bởi @gchust

  - sửa lỗi khi thay đổi trường tiêu đề của trường liên kết trong khối bảng v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) bởi @katherinehhh

  - Đã sửa quy tắc liên kết V2 để hỗ trợ thiết lập các tùy chọn có thể chọn cho các trường ([#9399](https://github.com/nocobase/nocobase/pull/9399)) bởi @jiannx

- **[client-v2]**
  - Giữ lại các nhóm trống sau khi lọc menu v1 trong bố cục v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) bởi @zhangzhonghe

  - Sửa lỗi trang chuyển sang trắng phía sau hộp thoại kích hoạt plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) bởi @zhangzhonghe

  - Sửa lỗi trang quản trị v1 bị treo khi chúng tham chiếu các mô-đun plugin v2 trong bản dựng production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) bởi @Molunerfinn

- **[cli-v1]** Đã sửa lỗi khởi động phát triển thất bại trong các ứng dụng được tạo bằng create-nocobase-app do giải quyết đường dẫn client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) bởi @Molunerfinn

- **[server]** sửa(file-manager): buộc tải xuống các tệp nội dung đang hoạt động trong bộ nhớ local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) bởi @mytharcher

- **[Nhân viên AI]**
  - Đã sửa lỗi tải plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) bởi @cgyrock

  - Đã sửa lỗi chuyến thử nghiệm Ollama yêu cầu nhập khóa ([#9450](https://github.com/nocobase/nocobase/pull/9450)) bởi @cgyrock

- **[Khối: Biểu mẫu nhiều bước]** sửa lỗi thanh cuộn khi bật chế độ toàn chiều cao trong khối biểu mẫu bước v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) bởi @katherinehhh

- **[Phòng ban]** sửa lỗi xung đột dịch thuật giữa nút thêm người dùng và thêm phòng ban trong cài đặt Người dùng & Quyền ([#9456](https://github.com/nocobase/nocobase/pull/9456)) bởi @katherinehhh

- **[Luồng công việc]** sửa: khôi phục văn bản trợ giúp trong hộp thoại liên kết luồng công việc FlowModel cho các sự kiện thao tác và hành động tùy chỉnh ([#9447](https://github.com/nocobase/nocobase/pull/9447)) bởi @mytharcher

- **[Khối: Markdown]** Sửa lỗi khối Markdown v2 báo lỗi ([#9440](https://github.com/nocobase/nocobase/pull/9440)) bởi @zhangzhonghe

- **[Luồng công việc: Webhook]** Sửa lỗi tạo nút phản hồi bị chặn bởi xác thực cấu hình `statusCode` bởi @mytharcher

- **[Luồng công việc: Phê duyệt]**
  - Sửa bố cục biểu mẫu phê duyệt trên thiết bị di động bởi @zhangzhonghe

  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền các tác vụ phê duyệt. bởi @mytharcher

- **[Trình quản lý sao lưu]** Đã sửa lỗi sao lưu thất bại với lỗi khi không tìm thấy tệp. bởi @gchust
