---
title: "NocoBase v2.1.2: Đã thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở tri thức AI"
description: "Ghi chú phát hành của v2.1.2"
---

### 🎉 Tính năng mới

- **[AI employees]** Đã thêm biểu mẫu cấu hình kho vector bên ngoài cho cơ sở kiến thức AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) bởi @cgyrock
- **[AI: Cơ sở kiến thức]** Đã thêm biểu mẫu cấu hình kho vector bên ngoài cho cơ sở kiến thức AI. bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**

  - Đã thêm kịch bản kiểm soát phiên bản vào phần khởi động nhanh của AI Builder ([#9748](https://github.com/nocobase/nocobase/pull/9748)) bởi @Molunerfinn
    Tham khảo: [Khởi động nhanh AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Đã cải thiện tài liệu kiểm soát phiên bản với hướng dẫn sửa đổi tự động của AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) bởi @cgyrock
- **[cli]** làm rõ từ ngữ thiết lập init ([#9750](https://github.com/nocobase/nocobase/pull/9750)) bởi @chenos
- **[Hành động: Nhập bản ghi]** Đã cải thiện hộp thoại lỗi nhập và tác vụ bất đồng bộ để các thông báo lỗi dài có thể được đọc đầy đủ mà không làm hỏng bố cục. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** Đã cải thiện hộp thoại nhập để các thông báo lỗi dài vẫn có thể đọc được và chế độ xử lý v2 có thể được chọn trực tiếp từ menu cài đặt. bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client-v2]** Đã sửa lỗi trang v2 có thể tiếp tục tải sau khi đăng nhập ([#9738](https://github.com/nocobase/nocobase/pull/9738)) bởi @zhangzhonghe
- **[cli]** yêu cầu Node.js 22 cho nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) bởi @chenos
- **[Trình quản lý tệp]** Sửa lỗi xem trước PDF thiếu văn bản phông chữ CJK/CID sau khi chuyển sang pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) bởi @mytharcher
