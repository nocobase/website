---
title: "NocoBase v2.0.0-alpha.49: Cho phép chọn hiển thị ảnh chụp nhanh hoặc bản ghi mới nhất trong giao diện quy trình phê duyệt"
description: "Ghi chú phát hành của v2.0.0-alpha.49"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Cho phép chọn hiển thị ảnh chụp nhanh hoặc bản ghi mới nhất trong giao diện quy trình phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Tối ưu hóa thông báo xác thực cho bảng con ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh

- **[Telemetry: Prometheus]** Nâng cấp `@opentelemetry/exporter-prometheus` bởi @2013xile

- **[Hành động: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi biến bản ghi hiện tại không thể được kích hoạt chính xác để giải quyết trong khối chi tiết. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) bởi @gchust

- **[client]** Sửa lỗi chọn và xóa khối bảng cho khóa tổng hợp ([#7978](https://github.com/nocobase/nocobase/pull/7978)) bởi @katherinehhh

- **[Hành động: Xuất bản ghi]** Sửa lỗi thiếu trường hệ thống trong danh sách trường có thể xuất ([#8002](https://github.com/nocobase/nocobase/pull/8002)) bởi @katherinehhh

- **[Bộ sưu tập: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Đã sửa lỗi trường m2m mảng trong bảng con không thể cập nhật ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock

- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa trường liên kết phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang

- **[Workflow: Phê duyệt]** Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher
