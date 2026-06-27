---
title: "NocoBase v1.7.15: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.7.15"
---

### 🐛 Sửa lỗi

- **[client]**
  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher

  - Gán giá trị trường: Không thể xóa dữ liệu cho các trường quan hệ ([#7086](https://github.com/nocobase/nocobase/pull/7086)) bởi @zhangzhonghe

  - Chức năng căn chỉnh văn bản cột bảng không hoạt động ([#7094](https://github.com/nocobase/nocobase/pull/7094)) bởi @zhangzhonghe

- **[Workflow]** Sửa lỗi kiểm tra thực thi không chính xác trên số nguyên lớn ([#7091](https://github.com/nocobase/nocobase/pull/7091)) bởi @mytharcher

- **[Quản lý tệp]** Sửa lỗi trường tệp đính kèm không thể cập nhật trong quy trình phê duyệt ([#7093](https://github.com/nocobase/nocobase/pull/7093)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Sử dụng phép so sánh thay vì logic ngầm định để tránh các vấn đề về kiểu dữ liệu bởi @mytharcher
