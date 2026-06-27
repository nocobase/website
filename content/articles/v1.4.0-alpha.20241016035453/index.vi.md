---
title: "NocoBase v1.4.0-alpha.20241016035453: Thêm trường Tệp đính kèm (URL)"
description: "Ghi chú phát hành của v1.4.0-alpha.20241016035453"
---

### 🎉 Tính năng mới

- **[sdk]** Cho phép lưu trữ thông tin client vào sessionStorage bằng cách thiết lập biến môi trường `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) bởi @2013xile
- **[Trường collection：Tệp đính kèm(URL)]** Thêm trường Tệp đính kèm (URL) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]**

  - tối ưu hóa gỡ lỗi từ xa ([#5394](https://github.com/nocobase/nocobase/pull/5394)) bởi @chenos
  - tối ưu hóa kiểu dáng cho việc căn giữa biểu tượng khi nút hành động chỉ sử dụng biểu tượng ([#5413](https://github.com/nocobase/nocobase/pull/5413)) bởi @katherinehhh
  - cập nhật bản ghi tự động đóng cửa sổ thông báo ([#5408](https://github.com/nocobase/nocobase/pull/5408)) bởi @katherinehhh
- **[Quy trình công việc: Nút yêu cầu HTTP]** Hỗ trợ SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) bởi @chenos

### 🐛 Sửa lỗi

- **[Biểu mẫu công khai]** Sửa lỗi khi nhấp vào cài đặt trên biểu mẫu công khai ([#5392](https://github.com/nocobase/nocobase/pull/5392)) bởi @katherinehhh
- **[client]**

  - Sửa lỗi không hiển thị giá trị trong ô nhập giá trị mặc định ([#5400](https://github.com/nocobase/nocobase/pull/5400)) bởi @zhangzhonghe
  - Sửa lỗi không tìm thấy trường liên kết khi thiết lập quy tắc liên kết cho bảng con ([#5402](https://github.com/nocobase/nocobase/pull/5402)) bởi @zhangzhonghe
  - sửa lỗi xem trước hình thu nhỏ sai khi loại tệp không được hỗ trợ mặc định ([#5401](https://github.com/nocobase/nocobase/pull/5401)) bởi @mytharcher
- **[Bản địa hóa]** Sửa lỗi bản dịch trong plugin bản địa hóa không có hiệu lực sau khi xuất bản ([#5416](https://github.com/nocobase/nocobase/pull/5416)) bởi @2013xile
