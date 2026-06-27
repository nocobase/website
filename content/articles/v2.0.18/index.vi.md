---
title: "NocoBase v2.0.18: Cho phép thêm nhân viên AI trong cửa sổ bảng con"
description: "Ghi chú phát hành phiên bản v2.0.18"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]**
  - Dọn dẹp dữ liệu checkpoint hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock

  - Cho phép thêm nhân viên AI trong cửa sổ popup của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile

- **[Giám sát ứng dụng]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các thao tác khởi động và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** cải thiện logic pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos

- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust

- **[Trình quản lý tác vụ bất đồng bộ]** các tác vụ bất đồng bộ được bổ sung để hỗ trợ workers trong việc gửi thông báo lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi popup “Chọn bản ghi” trong bảng con không tải đúng cách khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust

- **[Nhân viên AI]** Đã sửa lỗi biến undefined tiềm ẩn trong các script nâng cấp di chuyển của plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi các tác vụ bất đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập bất đồng bộ bởi @cgyrock
