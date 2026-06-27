---
title: "NocoBase v1.4.21: Hỗ trợ quy tắc liên kết trong khối chi tiết để ẩn (giá trị dự trữ)"
description: "Ghi chú phát hành của v1.4.21"
---

### 🚀 Cải tiến

- **[client]** Hỗ trợ quy tắc liên kết trong khối chi tiết để ẩn (giá trị dự trữ) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Khắc phục đường dẫn công khai bị thiếu trong đường dẫn tệp biểu tượng ([#6034](https://github.com/nocobase/nocobase/pull/6034)) bởi @chenos

  - Sửa lỗi quy tắc liên kết biểu mẫu không hoạt động khi phụ thuộc vào giá trị trường từ bảng con ([#5876](https://github.com/nocobase/nocobase/pull/5876)) bởi @zhangzhonghe

  - Sửa trường không chính xác của biến 'Bản ghi hiện tại' trong chi tiết con ([#6030](https://github.com/nocobase/nocobase/pull/6030)) bởi @zhangzhonghe

- **[Trình quản lý sao lưu]** Sửa lỗi tải xuống bản sao lưu thất bại khi env API_BASE_PATH không phải là /api bởi @gchust
