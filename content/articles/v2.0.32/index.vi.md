---
title: "NocoBase v2.0.32: Thêm mục lục vào README"
description: "Ghi chú phát hành phiên bản v2.0.32"
---

### 🚀 Cải tiến

- **[undefined]** Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765

### 🐛 Sửa lỗi

- **[client]**
  - Trường quan hệ trong biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx

  - Biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx

  - Đã sửa lỗi ctx.request không thể ghi đè header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust

- **[server]** Thêm kiểm tra trạng thái phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher

- **[AI employees]**
  - Đã sửa lỗi khi sử dụng mô hình deepseek hoặc minmax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock

  - Đã sửa lỗi hủy quá trình suy luận của AI employees gây ra sự cố dịch vụ ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock

- **[Workflow: HTTP request node]** Đã làm sạch kết quả của node yêu cầu workflow để tránh lộ cấu hình yêu cầu, mặc định các node mới chỉ trả về dữ liệu phản hồi và thêm ghi log gỡ lỗi cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher

- **[Collection field: Sort]** fix(field-sort): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765

- **[Block: GridCard]** Đã sửa lỗi nút không được làm mới khi làm mới thẻ lưới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx

- **[Workflow: Approval]**
  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher

  - Thêm khả năng chịu lỗi khi không có `latestRound` bởi @mytharcher
