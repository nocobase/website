---
title: "NocoBase v2.0.0-beta.22: Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, cửa sổ bật lên và tab cửa sổ bật lên"
description: "Ghi chú phát hành của v2.0.0-beta.22"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, cửa sổ bật lên và tab cửa sổ bật lên ([#8590](https://github.com/nocobase/nocobase/pull/8590)) bởi @zhangzhonghe

- **[Workflow: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng mô hình trường độc lập cho các trường liên kết trong biểu mẫu bộ lọc ([#8511](https://github.com/nocobase/nocobase/pull/8511)) bởi @zhangzhonghe

- **[Workflow: CC]** Tái cấu trúc plugin CC của workflow để hỗ trợ kiến trúc FlowModel với khả năng tương thích v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]**
  - Sửa lỗi không thể tạo đối tượng Blob trong khối JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) bởi @gchust

  - Sửa lỗi ngữ cảnh thực thi không chính xác cho "ctx.sql" trong JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) bởi @gchust

- **[Thành phần trường: mặt nạ]** Sửa lỗi cửa sổ bật lên cài đặt trường mặt nạ không thể tải đúng tất cả vai trò người dùng. bởi @gchust

- **[Workflow: Phê duyệt]** Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher
