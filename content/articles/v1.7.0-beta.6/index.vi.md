---
title: "NocoBase v1.7.0-beta.6: Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp"
description: "Ghi chú phát hành của v1.7.0-beta.6"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh

- **[Workflow: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[evaluators]** Khôi phục số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher

- **[Workflow]** Sửa lỗi đếm tác vụ cũ sau khi workflow bị xóa ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie

- **[Trình quản lý tệp]** Mã hóa url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos

- **[Trình quản lý sao lưu]**
  - Lỗi khôi phục cơ sở dữ liệu MySQL do trùng lặp tập GTID bởi @gchust

  - Các tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust

- **[Workflow: Phê duyệt]**
  - Sửa lỗi thiếu nút hành động trong bảng quy trình bởi @mytharcher

  - Thay đổi phê duyệt trả về thành việc cần làm bởi @mytharcher
