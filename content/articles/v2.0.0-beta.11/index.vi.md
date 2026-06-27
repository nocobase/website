---
title: "NocoBase v2.0.0-beta.11: Trình soạn thảo văn bản đa dạng hỗ trợ điều chỉnh kích thước phông chữ, điều chỉnh kích thước hình ảnh và ngắt dòng mềm"
description: "Ghi chú phát hành của v2.0.0-beta.11"
---

### 🚀 Cải tiến

- **[evaluators]** Cập nhật phiên bản math.js để hỗ trợ thêm nhiều hàm ([#8411](https://github.com/nocobase/nocobase/pull/8411)) bởi @mytharcher

- **[client]** Trình soạn thảo văn bản giàu định dạng hỗ trợ điều chỉnh cỡ chữ, điều chỉnh kích thước ảnh và xuống dòng mềm ([#8401](https://github.com/nocobase/nocobase/pull/8401)) bởi @jiannx

- **[AI employees]** Thay đổi kết quả của trình gọi quy trình thành `execution.output`, bằng cách sử dụng rõ ràng nút đầu ra, kết quả có thể ổn định ([#8423](https://github.com/nocobase/nocobase/pull/8423)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Thêm khả năng chịu lỗi cho lược đồ hành động, để tránh trang bị treo khi nhấp vào nút hành động ([#8420](https://github.com/nocobase/nocobase/pull/8420)) bởi @mytharcher

  - Sửa lỗi cài đặt trường tiêu đề biến mất sau khi thiết lập URL tệp đính kèm và sau đó chuyển sang trường khác trong mục biểu mẫu ([#8418](https://github.com/nocobase/nocobase/pull/8418)) bởi @katherinehhh

  - Sửa lỗi trường tiêu đề không cập nhật khi trường liên kết được đặt ở chế độ chỉ đọc trong biểu mẫu tạo ([#8413](https://github.com/nocobase/nocobase/pull/8413)) bởi @katherinehhh

- **[Flow engine]** Sửa lỗi giải quyết biến không chính xác khi filterByTk là một mảng. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) bởi @gchust

- **[Template print]** hỗ trợ trường khoảng trắng bởi @jiannx
