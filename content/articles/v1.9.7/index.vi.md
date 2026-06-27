---
title: "NocoBase v1.9.7: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.9.7"
---

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi quy tắc liên kết của biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) bởi @zhangzhonghe

- **[server]** Sửa lỗi trong chế độ tách dịch vụ khiến tin nhắn hàng đợi chưa được đăng ký không thể phát hành ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher

- **[Workflow]**
  - Sửa lỗi gây ra do lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher

  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ sai trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Sửa namespace của ngôn ngữ địa phương cần được sử dụng để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher

- **[Kiểm soát truy cập]** Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Sửa lỗi kích thước trang khi tải kênh thông báo không đủ lớn, khiến danh sách không được tải đầy đủ bởi @mytharcher

  - Sửa lỗi quy tắc liên kết của biểu mẫu phê duyệt không hoạt động bởi @zhangzhonghe

  - Sửa định dạng ngày trên thẻ danh sách phê duyệt trong trung tâm việc cần làm để hiển thị đầy đủ ngày và giờ bởi @mytharcher

  - Sửa lỗi hiệu năng xảy ra khi truy vấn danh sách bản ghi phê duyệt trong quá trình gửi phê duyệt bởi @mytharcher
