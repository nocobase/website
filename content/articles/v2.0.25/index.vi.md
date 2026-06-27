---
title: "NocoBase v2.0.25: Sửa lỗi trường JSON gây vấn đề hiệu suất khi tải danh sách bản ghi phê duyệt"
description: "Ghi chú phát hành phiên bản v2.0.25"
---

### 🚀 Cải tiến

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường JSON gây ra vấn đề về hiệu suất khi tải danh sách bản ghi phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[Máy chủ]** Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đã đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) bởi @mytharcher

- **[Bản địa hóa]** Ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền truy cập ([#8903](https://github.com/nocobase/nocobase/pull/8903)) bởi @chenos

- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài bởi @2013xile
