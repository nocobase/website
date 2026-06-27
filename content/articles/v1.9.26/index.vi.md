---
title: "NocoBase v1.9.26: Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet"
description: "Ghi chú phát hành phiên bản v1.9.26"
---

### 🚀 Cải tiến

- **[acl]** Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) bởi @mytharcher

- **[Kiểm soát truy cập]** Không cho phép gán vai trò root cho người dùng ([#8180](https://github.com/nocobase/nocobase/pull/8180)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Cài đặt giấy phép]**
  - Sửa lỗi biên dịch ts của plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) bởi @jiannx

  - Tối ưu hóa giấy phép và bổ sung thông tin nhắc nhở ([#7993](https://github.com/nocobase/nocobase/pull/7993)) bởi @jiannx

- **[Quản lý tệp]** Sửa lỗi xem trước tệp `.txt` trên OSS bị sai bảng mã ([#8161](https://github.com/nocobase/nocobase/pull/8161)) bởi @mytharcher

- **[Thao tác: Nhập bản ghi]** Chờ đồng bộ các sự kiện `afterCreate` được kích hoạt bởi quá trình nhập kết thúc. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) bởi @2013xile

- **[Bộ sưu tập: Kết nối dữ liệu nước ngoài (FDW)]** Sửa lỗi tải không thành công đối với các bảng có tên viết hoa bởi @2013xile

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi các tùy chọn `encrypt` và `trustServerCertificate` không khả dụng bởi @2013xile
