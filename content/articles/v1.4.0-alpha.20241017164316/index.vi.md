---
title: "NocoBase v1.4.0-alpha.20241017164316: Cải tiến nút quy trình làm việc"
description: "Ghi chú phát hành của v1.4.0-alpha.20241017164316"
---

### 🎉 Tính năng mới

- **[Workflow: Node vòng lặp]** Thêm nhiều tùy chọn điều khiển vào cấu hình node vòng lặp ([#5342](https://github.com/nocobase/nocobase/pull/5342)) bởi @mytharcher
  Tham khảo: [Node vòng lặp](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Thêm nút chạy thử cho các node workflow và API để triển khai chức năng kiểm thử ([#5407](https://github.com/nocobase/nocobase/pull/5407)) bởi @mytharcher
- **[Component trường: mặt nạ]** Thêm component trường `mask`, hỗ trợ hiển thị dữ liệu trường dưới dạng chuỗi bị che bởi @gchust
  Tham khảo: [Mặt nạ](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Cải tiến

- **[client]** Cho phép đặt lại tiêu đề cột bảng về mặc định ([#5439](https://github.com/nocobase/nocobase/pull/5439)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi tùy chọn component trường không được dịch chính xác ([#5442](https://github.com/nocobase/nocobase/pull/5442)) bởi @gchust
- **[Workflow: Node yêu cầu HTTP]** Sửa thông báo lỗi cũ trong node yêu cầu ([#5443](https://github.com/nocobase/nocobase/pull/5443)) bởi @mytharcher
