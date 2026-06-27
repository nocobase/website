---
title: "NocoBase v2.1.0-alpha.24: Điều chỉnh tương tác cấu hình kỹ năng/công cụ cho hướng dẫn nhân viên AI"
description: "Ghi chú phát hành của v2.1.0-alpha.24"
---

### 🚀 Cải tiến

- **[Không xác định]** Cải thiện hướng dẫn cài đặt AI Agent để ngăn Agent bỏ qua trình hướng dẫn `--ui` và tự động phát hiện trình quản lý phiên bản Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) bởi @Molunerfinn

- **[Nhân viên AI]**
  - Điều chỉnh tương tác cấu hình kỹ năng/công cụ cho hướng dẫn nhân viên AI ([#9232](https://github.com/nocobase/nocobase/pull/9232)) bởi @cgyrock

  - Xóa mô hình được đề xuất trong cấu hình dịch vụ LLM ([#9228](https://github.com/nocobase/nocobase/pull/9228)) bởi @cgyrock

- **[Workflow: JavaScript]** Nâng cấp Docker images, CI workflows và dependency sandbox JavaScript của workflow để tương thích với Node.js 22. ([#9245](https://github.com/nocobase/nocobase/pull/9245)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[Không xác định]** Sửa lỗi trình chuyển đổi ngôn ngữ tạo URL không chính xác (ví dụ: `/cn/es/` thay vì `/es/`) trên trang tài liệu. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) bởi @Molunerfinn

- **[Nhân viên AI]**
  - Sửa lỗi trong API lấy danh sách nhân viên AI ([#9241](https://github.com/nocobase/nocobase/pull/9241)) bởi @cgyrock

  - Tinh chỉnh hành vi ủy thác tác vụ Atlas và cập nhật Viz để sử dụng workflow báo cáo kinh doanh cho các yêu cầu báo cáo ([#9229](https://github.com/nocobase/nocobase/pull/9229)) bởi @2013xile
