---
title: "NocoBase v2.0.0-alpha.46: Hỗ trợ chuyển đổi lớp mô hình luồng động"
description: "Ghi chú phát hành của v2.0.0-alpha.46"
---

### 🚀 Cải tiến

- **[flow-engine]** Hỗ trợ chuyển đổi lớp mô hình luồng động ([#7952](https://github.com/nocobase/nocobase/pull/7952)) bởi @gchust

- **[AI employees]** Plugin nhân viên AI thêm hook nâng cấp ([#7951](https://github.com/nocobase/nocobase/pull/7951)) bởi @heziqiang

- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Làm cho tải trọng của việc thực thi thủ công (hoặc kích hoạt bởi nút quy trình con) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher

  - Giảm các liên kết cần tải trong cửa sổ bật lên phê duyệt, để cải thiện hiệu suất bởi @mytharcher

  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn PK hoặc FK của bộ sưu tập người dùng mới có thể được chọn bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tự động xuống dòng cho trường văn bản trong khối chi tiết khi nội dung vượt quá chiều rộng ([#7955](https://github.com/nocobase/nocobase/pull/7955)) bởi @katherinehhh

- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho bộ sưu tập `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher

- **[Trình quản lý tệp]** Sửa lỗi tải tệp lên bộ nhớ được chỉ định thay vì bộ nhớ mặc định ([#7947](https://github.com/nocobase/nocobase/pull/7947)) bởi @katherinehhh

- **[Quy trình làm việc: Phê duyệt]** Sửa tệp ngôn ngữ bởi @mytharcher
