---
title: "NocoBase v2.1.0-beta.48: Bổ sung hỗ trợ client v2 cho hành động thanh tác vụ quản lý tác vụ bất đồng bộ"
description: "Ghi chú phát hành của v2.1.0-beta.48"
---

### 🎉 Tính năng mới

- **[client-v2]** Hỗ trợ quét đầu vào cho trường văn bản ([#9599](https://github.com/nocobase/nocobase/pull/9599)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Đã thêm hỗ trợ client v2 cho hành động trên thanh công cụ của trình quản lý tác vụ bất đồng bộ. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) bởi @jiannx
- **[Trình quản lý sao lưu]** Đã thêm hỗ trợ runtime client v2 cho plugin trình quản lý sao lưu. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) bởi @katherinehhh
- **[Nguồn dữ liệu: NocoBase bên ngoài]** Đã thêm plugin nguồn dữ liệu: NocoBase bên ngoài bởi @2013xile

### 🚀 Cải tiến

- **[client-v2]** Đã thêm hỗ trợ vô hiệu hóa lựa chọn nhiều trong trường liên kết popup lựa chọn v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) bởi @katherinehhh
- **[Trình quản lý tệp]** Đã thêm hỗ trợ `subPath` tải lên nội bộ cho trình quản lý tệp. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) bởi @mytharcher
- **[Biến và bí mật]** Biến môi trường (`$env`) hiện có thể được chọn bởi bộ chọn biến dựa trên flow-engine trong runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[database]** Đã sửa lỗi trường mật khẩu không được băm trong quá trình cập nhật hàng loạt. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) bởi @mytharcher
- **[client]** Đã sửa lỗi hành động hàng trong bảng con popup ẩn toàn bộ trường bảng con khi hành động bị ẩn bởi quy tắc liên kết ([#9717](https://github.com/nocobase/nocobase/pull/9717)) bởi @katherinehhh
- **[Nhân viên AI]** Đã cải thiện lời nhắc truy vấn dữ liệu của nhân viên AI để tải kỹ năng cần thiết trước khi sử dụng công cụ truy vấn. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) bởi @cgyrock
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi hiển thị trường tiêu đề cũ khi mở lại ngăn cấu hình trường nguồn dữ liệu v2 sau khi thay đổi trường tiêu đề. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) bởi @katherinehhh
- **[Khối: Bản đồ]**

  - Đã sửa lỗi trường hình học bản đồ bị thiếu trong menu thêm trường của trình quản lý nguồn dữ liệu v2 sau khi kích hoạt plugin bản đồ. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) bởi @katherinehhh
  - Đã sửa lỗi DrawingManager không khả dụng trong khối Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) bởi @katherinehhh
- **[Lịch]** Đã sửa lỗi không thể thêm khối Chi tiết và Chỉnh sửa trong ngăn chi tiết khối lịch v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) bởi @jiannx
