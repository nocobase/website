---
title: "NocoBase v1.9.15: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.9.15"
---

### 🐛 Sửa lỗi

- **[client]**
  - Tránh lỗi xảy ra khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher

  - Khắc phục lỗi khi thêm bản ghi con trong khối bảng cây quan hệ ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh

- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa trường liên kết phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang

- **[Bộ sưu tập: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi không thể cập nhật trường mảng m2m trong bảng con ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher

  - Sửa lỗi bình luận trong kết quả công việc bị null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher
