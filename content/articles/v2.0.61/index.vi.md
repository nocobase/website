---
title: "NocoBase v2.0.61: Cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp"
description: "Ghi chú phát hành phiên bản v2.0.61"
---

### 🚀 Cải tiến

- **[client]** Cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp sẵn. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) bởi @gchust
- **[undefined]** Cập nhật tài liệu Nhúng NocoBase cho plugin mã nguồn mở. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) bởi @zhangzhonghe
  Tham khảo: [Nhúng NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Đã sửa lỗi trang bị đứng hình khi thiết lập giá trị trường cho một biểu mẫu con. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) bởi @gchust
  - Đã sửa lỗi cửa sổ popup hiển thị dữ liệu giao diện cũ sau khi chuyển đổi công tắc chế độ cấu hình giao diện. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) bởi @gchust
- **[client]**

  - Đã sửa lỗi hành vi quy tắc liên kết hành động bản ghi không chính xác trong khối bảng. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) bởi @gchust
  - Đã sửa lỗi dữ liệu trường quan hệ đã chọn không được hiển thị trên thiết bị di động. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) bởi @zhangzhonghe
  - Đã sửa lỗi trường trở thành chỉ đọc khi được hiển thị lại sau khi bị ẩn bởi quy tắc liên kết. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) bởi @katherinehhh
- **[cli]** Đã sửa mẫu nginx để phục vụ tài nguyên `.mjs` với kiểu MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) bởi @mytharcher
- **[database]** Đã sửa lỗi nhập giá trị mật khẩu dạng số có thể thất bại. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) bởi @2013xile
- **[AI employees]** Đã sửa lỗi xác thực URL cơ sở của nhà cung cấp AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) bởi @cgyrock
- **[Flow engine]**

  - Đã sửa lỗi kéo thẻ tab trong cửa sổ popup để sắp xếp lại không hoạt động. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) bởi @gchust
  - Đã sửa lỗi sửa đổi một khối sau khi sao chép mẫu của nó có thể vô tình ảnh hưởng đến nội dung của khối gốc. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) bởi @gchust
- **[Notification: In-app message]** Đã sửa rủi ro SQL injection trong bộ lọc dấu thời gian của kênh thông báo trong ứng dụng. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) bởi @mytharcher
- **[License settings]** Đã sửa lỗi trang cài đặt giấy phép có thể bị treo trong thời gian dài khi kiểm tra đăng nhập pkg chậm hoặc không thể truy cập. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) bởi @hongboji
- **[Workflow: JavaScript]** Đã làm rõ rằng chế độ hỗ trợ mô-đun JavaScript trong Workflow là không an toàn và không phải là ranh giới quyền hạn. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) bởi @mytharcher
  Tham khảo: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Đã sửa lỗi quyền không đầy đủ khi đăng nhập lần đầu nếu vai trò liên minh là vai trò mặc định. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) bởi @2013xile
- **[File manager]** Đã sửa lỗi xác thực đường dẫn lưu trữ tệp cục bộ để ngăn các đường dẫn không an toàn thoát khỏi thư mục gốc lưu trữ đã cấu hình. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) bởi @mytharcher
- **[Password policy]** Đã sửa lỗi xác thực chính sách mật khẩu có thể thất bại đối với giá trị mật khẩu dạng số. bởi @2013xile
