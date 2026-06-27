---
title: "NocoBase v1.8.12: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.8.12"
---

### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, cho phép tự động lấy nét vào trường nhập liệu khi trang được hiển thị lần đầu nếu được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi mục xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher

  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher

- **[utils]** Xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh

- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher

- **[Quản lý tệp]** Sửa quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher

- **[Quy trình làm việc]** Sửa lỗi kết quả `undefined` khi bộ xử lý thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher

- **[Quy trình làm việc: Nút tính toán động]** Sửa lỗi do API cũ gây ra ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher

- **[Quy trình làm việc: Quy trình con]** Sửa lỗi quy trình bị tạm dừng bởi @mytharcher
