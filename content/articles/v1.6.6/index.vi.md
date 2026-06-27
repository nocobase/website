---
title: "NocoBase v1.6.6: Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết"
description: "Ghi chú phát hành phiên bản v1.6.6"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh

- **[Workflow: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

### 🚀 Cải tiến

- **[Lưu trữ tệp: S3(Pro)]** Đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[Bộ đánh giá]** Khôi phục số chữ số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher

- **[Quản lý tệp]** Mã hóa URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos

- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie

- **[Workflow]** Sửa số lượng tác vụ cũ sau khi workflow bị xóa ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher

- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe

- **[Trình quản lý sao lưu]**
  - Các tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust

  - Khôi phục cơ sở dữ liệu MySQL thất bại do trùng lặp tập GTID bởi @gchust

- **[Workflow: Phê duyệt]**
  - Thay đổi phê duyệt trả về thành việc cần làm bởi @mytharcher

  - Sửa nút hành động bị thiếu trong bảng quy trình bởi @mytharcher
