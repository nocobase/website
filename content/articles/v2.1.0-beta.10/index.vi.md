---
title: "NocoBase v2.1.0-beta.10: Lên lịch dọn dẹp dữ liệu checkpoint hội thoại AI"
description: "Ghi chú phát hành phiên bản v2.1.0-beta.10"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]**
  - Cho phép thêm nhân viên AI trong popup của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile

  - Dọn dẹp dữ liệu checkpoint hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock

- **[Giám sát ứng dụng]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các hành động bắt đầu và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** cải thiện logic pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) bởi @gaston98765

- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust

- **[Workflow]** Sửa lỗi tắt máy an toàn không xử lý hết tất cả sự kiện ([#8894](https://github.com/nocobase/nocobase/pull/8894)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]** các tác vụ bất đồng bộ được thêm vào để hỗ trợ worker trong việc gửi thông báo lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi popup “Chọn bản ghi” trong bảng con không tải đúng cách khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust

  - Đã sửa lỗi giá trị mặc định của một số trường không có hiệu lực sau khi làm mới trang. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) bởi @gchust

- **[database]** Sửa lỗi xác thực phía máy chủ cho trường ngày tháng ([#8867](https://github.com/nocobase/nocobase/pull/8867)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi bộ sưu tập do nhân viên AI tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock

- **[Nhân viên AI]**
  - Sửa lỗi URL được chỉ định cho dịch vụ LLM không có hiệu lực trong các lệnh gọi mô hình nhúng văn bản. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) bởi @cgyrock

  - Đã sửa các lỗi biến không xác định tiềm ẩn trong các tập lệnh di chuyển nâng cấp plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock

- **[Bản địa hóa]** localizationTexts: ngoại lệ quyền giao diện bị thiếu ([#8861](https://github.com/nocobase/nocobase/pull/8861)) bởi @jiannx

- **[Hành động: Nhập bản ghi Pro]**
  - Sửa lỗi sự kiện `beforeStop` trên ứng dụng con không được kích hoạt bởi @mytharcher

  - Sửa lỗi nhập lười biếng gây ra lỗi SES bởi @mytharcher

  - Sửa lỗi các tác vụ bất đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập bất đồng bộ bởi @cgyrock

- **[AI: Cơ sở tri thức]** Ngăn không cho xóa cơ sở dữ liệu vector và bộ lưu trữ vector đang được sử dụng. bởi @cgyrock

- **[In mẫu]** Sửa lỗi in bộ sưu tập SQL bởi @jiannx

- **[Trình quản lý email]** Đã sửa lỗi trang khi email không tồn tại bởi @jiannx
