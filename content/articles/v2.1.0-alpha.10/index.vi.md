---
title: "NocoBase v2.1.0-alpha.10: Lên lịch dọn dẹp dữ liệu checkpoint hội thoại AI"
description: "Ghi chú phát hành v2.1.0-alpha.10"
---

### 🎉 Tính năng mới

- **[IdP: OAuth]** Thêm plugin IdP OAuth mới để cho phép các dịch vụ MCP xác thực qua OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) bởi @2013xile

- **[Nhân viên AI]** Dọn dẹp dữ liệu điểm kiểm tra hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock

- **[Giám sát ứng dụng]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các hành động khởi động và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** Cải thiện logic pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos

- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust

- **[undefined]** Thêm mục nhập client-v2 chuyên dụng và xây dựng độc lập với rsbuild trong khi giữ nguyên v1. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) bởi @Molunerfinn

- **[Workflow]**
  - Sửa lỗi tắt máy an toàn không xử lý hết tất cả sự kiện ([#8894](https://github.com/nocobase/nocobase/pull/8894)) bởi @mytharcher

  - Thêm bộ lọc danh sách thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]** Các tác vụ bất đồng bộ được thêm vào để hỗ trợ worker gửi thông báo lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock

- **[Workflow: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có collection nào được cấu hình trong trigger bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi người dùng không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) bởi @jiannx

  - Sửa lỗi popup “Chọn bản ghi” trong bảng con không tải được chính xác khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust

- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành đối tượng khi vượt quá 100 mục ([#8908](https://github.com/nocobase/nocobase/pull/8908)) bởi @2013xile

- **[server]** Sửa lỗi sự kiện vòng đời do worker gửi khiến ứng dụng đang phục vụ bị dừng ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi collection do nhân viên AI tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock

- **[Nhân viên AI]**
  - Sửa lỗi URL được chỉ định cho dịch vụ LLM không có hiệu lực trong các lệnh gọi mô hình nhúng văn bản. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) bởi @cgyrock

  - Sửa lỗi biến undefined tiềm ẩn trong các tập lệnh di chuyển nâng cấp plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]**
  - Sửa lỗi khi có hơn ~30 cột gây ra lỗi nhập, do luồng bị đọc trùng lặp bởi @mytharcher

  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ bởi @mytharcher

  - Sửa lỗi sự kiện `beforeStop` trên ứng dụng con không được kích hoạt bởi @mytharcher

  - Sửa lỗi tác vụ bất đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập bất đồng bộ bởi @cgyrock

  - Sửa lỗi nhập lười gây ra lỗi SES bởi @mytharcher

- **[In mẫu]** Sửa lỗi in collection SQL bởi @jiannx

- **[Workflow: Phê duyệt]** Sửa lỗi đồng thời khi thêm người được chỉ định bởi @mytharcher

- **[Trình quản lý email]** Sửa lỗi trang khi email không tồn tại bởi @jiannx

- **[Trình quản lý di chuyển]** Sửa lỗi quá trình di chuyển bị gián đoạn do lỗi gây ra bởi môi trường đích không có bảng mới được tạo trong quá trình di chuyển tải lên. bởi @Andrew1989Y
