---
title: "NocoBase v2.1.0-alpha.30: Khắc phục lỗi thỉnh thoảng xảy ra khi nhân viên AI sử dụng mô hình DeepSeek v4"
description: "Ghi chú phát hành của v2.1.0-alpha.30"
---

### 🚀 Cải tiến

- **[undefined]** Thêm thông báo lỗi Feishu cho các quy trình phát hành thủ công ([#9349](https://github.com/nocobase/nocobase/pull/9349)) của @Molunerfinn
- **[IdP: OAuth]** Phiên OAuth hiện sử dụng cùng cài đặt thời gian hết hạn với chính sách token hệ thống ([#9345](https://github.com/nocobase/nocobase/pull/9345)) của @2013xile

### 🐛 Sửa lỗi

- **[client-v2]** Đã sửa lỗi tải plugin từ xa để các URL plugin đã kết thúc bằng `.js` không bị phân giải thành đường dẫn `.js.js` trùng lặp. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) của @Molunerfinn
- **[cli]** Đã sửa lỗi tùy chọn boolean CLI để chúng có thể bị vô hiệu hóa bằng các cờ phủ định ([#9337](https://github.com/nocobase/nocobase/pull/9337)) của @2013xile
- **[AI employees]**

  - Sửa lỗi thỉnh thoảng xảy ra lỗi khi AI employee sử dụng mô hình DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) của @cgyrock
  - Sửa lỗi nút AI employee trong quy trình xóa kỹ năng sau khi chuyển đổi AI employee ([#9342](https://github.com/nocobase/nocobase/pull/9342)) của @cgyrock
- **[Nguồn dữ liệu: Chính]** Ngăn chặn sự cố khi trường (fields) không được xác định trong quá trình tải bộ sưu tập ([#9174](https://github.com/nocobase/nocobase/pull/9174)) của @saraTabbane
- **[Mẫu giao diện]** Đã sửa lỗi danh sách mẫu popup không tải được các mẫu khả dụng một cách chính xác. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) của @gchust
- **[Khối: Kanban]** Đã sửa lỗi các khối liên kết kanban sử dụng tham số tài nguyên runtime chưa được giải quyết trong ngữ cảnh popup hoặc trang phụ. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) của @jiannx
- **[Quy trình: Phê duyệt]** Sửa lỗi bộ lọc và các tham số truy vấn khác hiện hoạt động trong API liệt kê các quy trình phê duyệt khả dụng của @mytharcher
