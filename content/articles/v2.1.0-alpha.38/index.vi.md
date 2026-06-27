---
title: "NocoBase v2.1.0-alpha.38: Đã sửa lỗi không thể giải quyết biến bản ghi popup hiện tại trong luồng sự kiện nút hành động"
description: "Ghi chú phát hành v2.1.0-alpha.38"
---

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi không thể phân giải biến bản ghi popup hiện tại trong luồng sự kiện của nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust

  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust

- **[flow-engine]** Đã sửa thông báo lỗi không chính xác trong console của trình duyệt. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) bởi @gchust

- **[Workflow: JavaScript]** Đã sửa lỗi tải gói runtime QuickJS của JavaScript trong workflow khi build production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) bởi @mytharcher

- **[Action: Import records]** Đã sửa lỗi bản ghi nhập vào trên các trường dạng ngày tháng hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher

- **[Action: Import records Pro]** Đã sửa xử lý múi giờ cho import xlsx pro bởi @mytharcher

- **[Action: Export records Pro]** Đã sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url đính kèm bởi @mytharcher
