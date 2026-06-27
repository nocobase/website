---
title: "NocoBase v1.9.0-beta.9: Khối bảng hỗ trợ thêm nút 'Cài đặt cột'"
description: "Ghi chú phát hành của v1.9.0-beta.9"
---

### 🎉 Tính năng mới

- **[client]**

  - Khối bảng hỗ trợ thêm nút 'Cài đặt cột' để cấu hình thứ tự và khả năng hiển thị của cột ([#7204](https://github.com/nocobase/nocobase/pull/7204)) bởi @kerwin612
  - Hỗ trợ quy tắc xác thực trường ([#7297](https://github.com/nocobase/nocobase/pull/7297)) bởi @aaaaaajie
- **[Nguồn dữ liệu: Chính]**

  - Hỗ trợ đọc bảng từ nguồn dữ liệu chính ([#7238](https://github.com/nocobase/nocobase/pull/7238)) bởi @aaaaaajie
  - Hỗ trợ hiển thị các bảng do plugin định nghĩa trong nguồn dữ liệu chính. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) bởi @aaaaaajie

### 🚀 Cải tiến

- **[client]** Hỗ trợ xoay ảnh khi xem trước ([#7523](https://github.com/nocobase/nocobase/pull/7523)) bởi @mytharcher
- **[snowflake-id]** Thay đổi ID của các bảng hệ thống có khóa chính tự động tăng nhưng không có định danh duy nhất thành ID dạng Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) bởi @2013xile
- **[Workflow]** Tách logic liên quan đến điều phối thành một bộ điều phối độc lập ([#7535](https://github.com/nocobase/nocobase/pull/7535)) bởi @mytharcher
- **[Bộ điều hợp hàng đợi RabbitMQ]** Cải thiện xử lý kết nối RabbitMQ và logic xử lý tin nhắn bởi @sdp-ncd
- **[Trình quản lý email]**

  - hỗ trợ đồng bộ hàng loạt bởi @jiannx
  - trình soạn thảo rich text hỗ trợ thay đổi kích thước ảnh bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi nút "Cài đặt cột" tải cột từ bảng bên trong hộp thoại modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) bởi @kerwin612
  - Sửa lỗi menu con thanh bên không thể đánh dấu chính xác ([#7520](https://github.com/nocobase/nocobase/pull/7520)) bởi @duannyuuu
- **[Workflow]**

  - Sửa lỗi thực thi trùng lặp do xử lý hàng đợi không đúng ([#7533](https://github.com/nocobase/nocobase/pull/7533)) bởi @mytharcher
  - Sửa lỗi điều kiện danh sách workflow không chính xác khi tải ngữ cảnh trường liên kết trong cấu hình workflow ràng buộc ([#7516](https://github.com/nocobase/nocobase/pull/7516)) bởi @mytharcher
  - Sửa lỗi tác vụ đã lên lịch dựa trên trường ngày không kích hoạt sau khi bắt đầu ([#7524](https://github.com/nocobase/nocobase/pull/7524)) bởi @mytharcher
- **[Workflow: Nút vòng lặp]** Sửa lỗi quy trình tiến tới mục tiếp theo không chính xác ngay cả khi điều kiện nút vòng lặp không được thỏa mãn ([#7521](https://github.com/nocobase/nocobase/pull/7521)) bởi @mytharcher
- **[Trình quản lý email]**

  - Chủ đề email rác bởi @jiannx
  - chủ đề rác bởi @jiannx
  - trình soạn thảo rich text hỗ trợ xuống dòng mềm bởi @jiannx
  - Hỗ trợ cùng một email cho nhiều người bởi @jiannx
  - hiệu suất tối ưu danh sách tin nhắn email bởi @jiannx
  - sau khi chọn hàng, đặt "Đã đọc" và "Chưa đọc" bởi @jiannx
  - thêm trường rawId để tối ưu hiệu suất bởi @jiannx
  - thuộc tính ref trong html gây ra lỗi hiển thị bởi @jiannx
  - nội dung submail không thể lọc bởi @jiannx
  - hỗ trợ đồng bộ lại bởi @jiannx
  - Phân biệt thủ công giữa chuyển tiếp và trả lời bởi @jiannx
