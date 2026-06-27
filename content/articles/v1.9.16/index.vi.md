---
title: "NocoBase v1.9.16: Thêm tùy chọn chuyển đổi thông báo lỗi trong cấu hình nguồn dữ liệu API RESTful"
description: "Ghi chú phát hành phiên bản v1.9.16"
---

### 🎉 Tính năng mới

- **[Nguồn dữ liệu: REST API]** Thêm tùy chọn `error message transformer` trong cấu hình nguồn dữ liệu restful api bởi @cgyrock

### 🚀 Cải tiến

- **[client]**
  - Hiển thị các tùy chọn đã thu gọn khi di chuột vào component Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh

  - Tối ưu hóa thông báo xác thực cho subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh

- **[Workflow]** Thêm ngữ cảnh nguồn dữ liệu "main" cho UserSelect, nhằm cung cấp một component phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Sử dụng component chung để giảm mã trùng lặp bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tải chậm trong Variable.Input, gây ra hiển thị lại menu tùy chọn biến không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Sửa lỗi xảy ra khi trường trong tệp xlsx đang nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher

- **[Workflow]** Sửa lỗi hàng đợi bị đóng trước khi tin nhắn được phát hành ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher

- **[Workflow: Luồng con]** Sửa lỗi workflow được chọn hiển thị "N/A" khi số lượng workflow lớn hơn 200 bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher

  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher
