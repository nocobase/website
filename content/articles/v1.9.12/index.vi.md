---
title: "NocoBase v1.9.12: Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ, cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại"
description: "Ghi chú phát hành phiên bản v1.9.12"
---

### 🚀 Cải tiến

- **[client]** Thêm trạng thái tải cho nút hành động cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn chọn PK hoặc FK của bộ sưu tập người dùng bởi @mytharcher

  - Giảm các liên kết cần tải trong cửa sổ bật lên phê duyệt, để cải thiện hiệu suất bởi @mytharcher

  - Làm cho tải trọng của việc thực thi thủ công (hoặc kích hoạt bởi nút quy trình con) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher

### 🐛 Sửa lỗi

- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho bộ sưu tập `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Sửa tệp ngôn ngữ bởi @mytharcher
