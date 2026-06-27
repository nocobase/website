---
title: "NocoBase v1.9.0-alpha.5: Thêm các tùy chọn cấu hình liên quan đến chữ ký"
description: "Ghi chú phát hành của v1.9.0-alpha.5"
---

### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, tự động lấy nét vào trường nhập khi trang được hiển thị lần đầu nếu được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe

- **[Auth: SAML 2.0]** Thêm các tùy chọn cấu hình liên quan đến chữ ký bởi @2013xile

### 🚀 Cải tiến

- **[Workflow: JavaScript]** Thay đổi bộ nhớ đệm thành bộ nhớ đệm ứng dụng để tránh lỗi trong chế độ cụm bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi chuỗi thô của biến bị gửi kèm biểu mẫu ([#7337](https://github.com/nocobase/nocobase/pull/7337)) bởi @zhangzhonghe

  - Sửa lỗi tooltip hiển thị [object Object] khi di chuột trong bảng hành động ([#7322](https://github.com/nocobase/nocobase/pull/7322)) bởi @katherinehhh

  - Khi sử dụng biến để đặt giá trị mặc định cho trường trong biểu mẫu lọc, nếu giá trị biến trống, ô nhập sẽ hiển thị chuỗi biến gốc ([#7335](https://github.com/nocobase/nocobase/pull/7335)) bởi @zhangzhonghe

- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher

- **[Collection: Tree]** Sửa lỗi logic đồng bộ đường dẫn của bộ sưu tập dạng cây ([#7330](https://github.com/nocobase/nocobase/pull/7330)) bởi @ChimingLiu

- **[Office File Previewer]** Hỗ trợ xem trước các tệp `.docx`, `.xlsx` và `.pptx` chỉ với URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher

- **[Workflow: Dynamic calculation node]** Sửa lỗi API cũ gây ra lỗi ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher

- **[Workflow: Approval]** Thêm tiêu đề nhiệm vụ cho các mục được thêm và ủy quyền bởi @mytharcher

- **[Email manager]** Hỗ trợ cùng một email cho nhiều người bởi @jiannx
