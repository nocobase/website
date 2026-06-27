---
title: "NocoBase v2.0.0-beta.19: DingTalk cho phép liên kết người dùng với `unionId`"
description: "Ghi chú phát hành của v2.0.0-beta.19"
---

### 🎉 Tính năng mới

- **[Auth: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[client]** Điều chỉnh cài đặt độ rộng cột thành lựa chọn thả xuống trong bảng con có thể chỉnh sửa nội tuyến ([#8561](https://github.com/nocobase/nocobase/pull/8561)) bởi @katherinehhh

- **[Trường bộ sưu tập: Markdown(Vditor)]** Đã thêm tùy chọn cấu hình để đặt chế độ chỉnh sửa mặc định trong cài đặt thành phần. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) bởi @Cyx649312038

- **[Đa không gian]** Kiểm soát quyền truy cập đa không gian acl bởi @jiannx

- **[AI: Cơ sở tri thức]** Tối ưu hóa đầu ra xây dựng để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi khi sử dụng "Tạo nhanh" của bộ chọn bản ghi liên kết trong biểu mẫu chỉnh sửa đã ghi đè dữ liệu biểu mẫu hiện có. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) bởi @gchust

  - Sửa lỗi khoảng trống trong bố cục Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) bởi @zhangzhonghe

  - Sửa lỗi cần làm mới trang để thêm bản ghi con sau khi bật bảng cây ([#8574](https://github.com/nocobase/nocobase/pull/8574)) bởi @katherinehhh

  - Sửa lỗi độ rộng cột không cập nhật trong bảng con (chỉnh sửa nội tuyến); nhập văn bản nhiều dòng không thay đổi kích thước theo độ rộng cột ([#8573](https://github.com/nocobase/nocobase/pull/8573)) bởi @katherinehhh

  - Sửa lỗi menu "Biểu mẫu (Thêm mới)" hiển thị không chính xác trong cửa sổ bật lên hành động "Tạo mới". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) bởi @gchust

- **[công cụ luồng]**
  - Sửa lỗi một số thư viện bên thứ ba không thể được nhập chính xác trong khối JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) bởi @gchust

  - Sửa lỗi khi gửi biểu mẫu sau khi chuyển trang không làm mới trang. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) bởi @gchust

- **[Mẫu UI]** Sửa lỗi khi mở lại và gửi mẫu bật lên đã lưu cho biểu mẫu "Thêm mới" của trường liên kết. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) bởi @gchust

- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** Sửa lỗi cấu hình hiển thị tên tệp của trường URL tệp đính kèm không hoạt động trong biểu mẫu chỉnh sửa ([#8571](https://github.com/nocobase/nocobase/pull/8571)) bởi @katherinehhh

- **[Nhân viên AI]** Sửa lỗi nút LLM không gửi được tin nhắn ([#8569](https://github.com/nocobase/nocobase/pull/8569)) bởi @2013xile

- **[Hành động: Nhập bản ghi]** Sửa lỗ hổng bảo mật của hành động nhập ([#8544](https://github.com/nocobase/nocobase/pull/8544)) bởi @mytharcher

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi tham số và tải trọng không chính xác khi kích hoạt luồng công việc tùy chỉnh bởi @mytharcher

- **[Đa không gian]**
  - thêm tập lệnh di chuyển để xóa x-ready-pretty trong trường không gian bởi @jiannx

  - xóa thuộc tính read-pretty cho trường không gian bởi @jiannx

- **[Luồng công việc: Phê duyệt]** Sửa lỗi hiệu suất do trường JSON trong danh sách tải (MySQL) bởi @mytharcher
