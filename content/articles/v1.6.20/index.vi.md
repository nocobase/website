---
title: "NocoBase v1.6.20: Phát hành miễn phí các plugin Department, Attachment URL và Workflow response message"
description: "Ghi chú phát hành phiên bản v1.6.20"
---

### 🎉 Tính năng mới

- **[Phòng ban]** Làm cho các plugin Phòng ban, URL tệp đính kèm và tin nhắn phản hồi Workflow trở nên miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**
  - Biểu mẫu bộ lọc không nên hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe

  - Tùy chọn "cho phép nhiều" không hoạt động đối với trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh

  - Trong biểu mẫu bộ lọc, khi nhấp vào nút lọc, nếu có các trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe

  - Chuyển sang menu nhóm không nên nhảy đến một trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe

- **[Lưu trữ tệp: S3(Pro)]**
  - Sắp xếp ngôn ngữ bởi @jiannx

  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 pro bởi @jiannx

- **[Trình quản lý di chuyển]** tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ bật lên biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust
