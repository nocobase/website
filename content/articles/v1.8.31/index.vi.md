---
title: "NocoBase v1.8.31: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.8.31"
---

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi hết thời gian chờ giao dịch do các giao dịch không được rollback đúng cách khi xảy ra lỗi cơ sở dữ liệu sau khi gửi phê duyệt bởi @mytharcher

  - Sửa lỗi biến không được phân tích trong biểu mẫu gửi phê duyệt bởi @mytharcher
