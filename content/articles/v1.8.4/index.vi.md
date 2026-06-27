---
title: "NocoBase v1.8.4: Hỗ trợ cấu hình mã xác thực độc lập cho ứng dụng con"
description: "Ghi chú phát hành phiên bản v1.8.4"
---

### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình bí mật xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher

- **[Quy trình làm việc: CC]** Thêm nút CC vào quy trình làm việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher

### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe

- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

### 🐛 Sửa lỗi

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Tránh lỗi khi người dùng không tồn tại bởi @mytharcher

  - Tải lại liên kết trên bản ghi bởi @mytharcher

  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher
