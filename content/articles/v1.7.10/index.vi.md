---
title: "NocoBase v1.7.10: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.7.10"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi quy tắc liên kết gây ra vòng lặp vô hạn ([#7050](https://github.com/nocobase/nocobase/pull/7050)) bởi @zhangzhonghe

  - Sửa: sử dụng optional chaining để từ chối yêu cầu một cách an toàn trong APIClient khi handler có thể không được định nghĩa ([#7054](https://github.com/nocobase/nocobase/pull/7054)) bởi @sheldon66

  - tự động đóng vấn đề khi cấu hình trường trong biểu mẫu popup thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** hiển thị không chính xác trường ngày between trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh

- **[Tài liệu API]** các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập xlsx để hạn chế trường textarea chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie
