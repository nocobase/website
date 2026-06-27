---
title: "NocoBase v2.0.20: Khắc phục sự cố sự kiện vòng đời do worker gửi khiến ứng dụng phục vụ dừng lại"
description: "Ghi chú phát hành v2.0.20"
---

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi sự kiện vòng đời do worker gửi khiến ứng dụng phục vụ bị dừng ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi collection do AI employee tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi nhập lười gây ra lỗi SES bởi @mytharcher

- **[In mẫu]** Sửa lỗi in collection sql bởi @jiannx

- **[Trình quản lý email]** Sửa lỗi trang bị lỗi khi email không tồn tại bởi @jiannx
