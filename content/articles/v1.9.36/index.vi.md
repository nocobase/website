---
title: "NocoBase v1.9.36: Cải thiện hiệu suất hiển thị danh sách quản lý plugin bằng cách chuyển sang sử dụng CSS webkit gốc cho dấu ba chấm văn bản"
description: "Ghi chú phát hành phiên bản v1.9.36"
---

### 🚀 Cải tiến

- **[client]** Cải thiện hiệu suất hiển thị danh sách plugin manager bằng cách chuyển sang sử dụng native webkit css cho dấu ba chấm văn bản ([#8391](https://github.com/nocobase/nocobase/pull/8391)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[File manager]** Sửa lỗi đường dẫn file được tạo không chính xác cho các file được tải lên bộ nhớ S3 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) bởi @mytharcher

- **[File storage: S3(Pro)]** Sửa lỗi chế độ đổi tên file không hoạt động bởi @mytharcher

- **[Workflow: Approval]** Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher
