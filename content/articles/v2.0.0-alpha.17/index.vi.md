---
title: "NocoBase v2.0.0-alpha.17: Đã thêm hỗ trợ cho trình lắng nghe sự kiện nhấp chuột vào hàng bảng"
description: "Ghi chú phát hành của v2.0.0-alpha.17"
---

### 🎉 Tính năng mới

- **[client]** Thêm hỗ trợ lắng nghe sự kiện nhấp chuột vào hàng trong bảng, cho phép người dùng thực thi các hành động cụ thể khi nhấp vào một hàng trong bảng ([#7622](https://github.com/nocobase/nocobase/pull/7622)) bởi @zhangzhonghe

- **[Quy trình làm việc: Phê duyệt]** Công khai biến `approvalId` để sử dụng từ các trình kích hoạt phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi bản dịch không có hiệu lực trong các thành phần antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) bởi @zhangzhonghe

- **[Nguồn dữ liệu: Chính]** Sửa lỗi siêu dữ liệu không được đồng bộ hóa trên nhiều nút sau khi tạo trường liên kết ngược ([#7628](https://github.com/nocobase/nocobase/pull/7628)) bởi @mytharcher

- **[plugin-demo-platform]** demo hỗ trợ tự động dừng ứng dụng bởi @jiannx

- **[Đa ứng dụng]**
  - Di chuyển đa ứng dụng không phát ra hooks bởi @jiannx

  - Proxy đa ứng dụng hỗ trợ bộ nhớ đệm bởi @jiannx
