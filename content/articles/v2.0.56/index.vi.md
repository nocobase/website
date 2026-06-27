---
title: "NocoBase v2.0.56: Plugin quản lý sao lưu mã nguồn mở"
description: "Ghi chú phát hành phiên bản v2.0.56"
---

### 🎉 Tính năng mới

- **[Trình quản lý sao lưu]** Plugin trình quản lý sao lưu mã nguồn mở ([#9550](https://github.com/nocobase/nocobase/pull/9550)) bởi @chenos

### 🚀 Cải tiến

- **[client]** Tối ưu hóa cài đặt hiển thị nút hành động ([#9510](https://github.com/nocobase/nocobase/pull/9510)) bởi @katherinehhh
- **[flow-engine]** Menu cấu hình trường V2 hiện hỗ trợ tìm kiếm trường ([#9489](https://github.com/nocobase/nocobase/pull/9489)) bởi @zhangzhonghe
- **[undefined]**

  - Thêm đánh giá bảo mật phụ thuộc cho các pull request ([#9523](https://github.com/nocobase/nocobase/pull/9523)) bởi @zhangzhonghe
  - **[Trình quản lý thông báo]** Thay đổi chiến lược hàng đợi để tối ưu hiệu suất gửi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher
- **[AI: Cơ sở tri thức]** Cho phép sửa đổi lưu trữ vector cho cơ sở tri thức AI bởi @cgyrock
- **[Workflow: Phê duyệt]** Cải thiện các phê duyệt liên quan với thẻ dòng thời gian bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi xóa giá trị đã chọn khi các trường liên kết phụ thuộc thay đổi trong liên kết phạm vi dữ liệu ([#9551](https://github.com/nocobase/nocobase/pull/9551)) bởi @katherinehhh
  - Sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe
  - Sửa lỗi biểu mẫu bộ lọc không thể sử dụng biến biểu mẫu hiện tại ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe
  - Sửa lỗi các khối v2 bị thu hẹp trở nên toàn chiều rộng sau khi thoát chế độ chỉnh sửa ([#9529](https://github.com/nocobase/nocobase/pull/9529)) bởi @zhangzhonghe
  - Sửa trạng thái menu trường JS không chính xác trong biểu mẫu con. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) bởi @gchust
- **[flow-engine]** Sửa lỗi lựa chọn nhiều cho các trường nguồn dữ liệu bên ngoài trong biểu mẫu v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) bởi @katherinehhh
- **[Nhân viên AI]** Sửa lỗi khi nhân viên AI truy cập cơ sở tri thức chỉ đọc ([#9539](https://github.com/nocobase/nocobase/pull/9539)) bởi @cgyrock
- **[Lịch]** Sửa lỗi các mục khác của lịch không thể hiển thị đầy đủ ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe
- **[Hành động: Cập nhật hàng loạt]** Sửa lỗi hành động cập nhật hàng loạt đặt lại trạng thái tải sau khi cập nhật thất bại ([#9509](https://github.com/nocobase/nocobase/pull/9509)) bởi @katherinehhh
- **[Tài liệu API]** Sửa tài liệu API bộ sưu tập để các tham số truy vấn không còn can thiệp lẫn nhau ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx
- **[Workflow]** Thêm trạng thái tải cho việc thực thi workflow thủ công. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi tạo tệp di chuyển thất bại khi sử dụng OceanBase bởi @2013xile
- **[Lưu trữ tệp: S3(Pro)]** Sửa xử lý endpoint S3 Pro để tải lên máy chủ và xem trước URL không trùng lặp host bucket. bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền xảy ra đồng thời trên cùng một công việc phê duyệt. bởi @mytharcher
