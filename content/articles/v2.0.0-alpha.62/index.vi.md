---
title: "NocoBase v2.0.0-alpha.62: Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau"
description: "Ghi chú phát hành của v2.0.0-alpha.62"
---

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau ([#7856](https://github.com/nocobase/nocobase/pull/7856)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Sửa logic tinh chỉnh cho targetKey tùy chọn ([#8333](https://github.com/nocobase/nocobase/pull/8333)) bởi @katherinehhh

  - Sửa lỗi trường liên kết không chính xác trong thành phần `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) bởi @mytharcher

  - Sửa tham số bộ lọc không chính xác cho trường liên kết Select trong bảng con có thể chỉnh sửa ([#8335](https://github.com/nocobase/nocobase/pull/8335)) bởi @katherinehhh

- **[flow-engine]** Sửa lỗi có thể xảy ra ô nhiễm trạng thái khi mở popup nhiều lần. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) bởi @gchust

- **[database]** Sửa đối tượng `appends` trong `OptionsParser` và tăng `arrayLimit` cho các tham số ([#8328](https://github.com/nocobase/nocobase/pull/8328)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Sửa thông báo lỗi không chính xác khi xảy ra lỗi ràng buộc duy nhất trong quá trình nhập XLSX không đồng bộ ([#8342](https://github.com/nocobase/nocobase/pull/8342)) bởi @cgyrock

- **[Nguồn dữ liệu: Chính]** Siêu dữ liệu bộ sưu tập dạng xem nên bao gồm các tùy chọn trường nguồn ([#8337](https://github.com/nocobase/nocobase/pull/8337)) bởi @2013xile

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất không đồng bộ trong khi ứng dụng chính không bật plugin xuất/nhập pro bởi @cgyrock

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher

- **[Trình quản lý email]** Hiển thị nút trả lời tất cả và phạm vi dữ liệu hỗ trợ lọc các tin nhắn con. bởi @jiannx
