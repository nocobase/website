---
title: "NocoBase v1.9.32: Sửa lỗi tràn ngăn xếp do vòng lặp vô hạn trong tải chậm trường liên kết hiển thị"
description: "Ghi chú phát hành v1.9.32"
---

### 🎉 Tính năng mới

- **[Workflow]** Thêm các biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tràn ngăn xếp do vòng lặp vô hạn khi hiển thị trường liên kết với tải chậm ([#8262](https://github.com/nocobase/nocobase/pull/8262)) bởi @zhangzhonghe

- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ số hàng trong thông báo lỗi luôn là 1 khi xảy ra lỗi trong hành động nhập ([#8244](https://github.com/nocobase/nocobase/pull/8244)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Sửa lỗi xảy ra khi hủy thực thi workflow đã bị xóa ([#8258](https://github.com/nocobase/nocobase/pull/8258)) bởi @mytharcher

- **[Trường collection: Sequence]** Sửa lỗi khi lệnh sửa chữa trường sequence gặp collection không tồn tại trong môi trường hiện tại. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa logic kiểm tra duy nhất gây lỗi khi giá trị của trường duy nhất là null bởi @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi rollback trùng lặp của cùng một giao dịch bởi @mytharcher
