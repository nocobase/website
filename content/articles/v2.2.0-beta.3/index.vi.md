---
title: "NocoBase v2.2.0-beta.3: Thêm hỗ trợ tệp đính kèm vào nút gửi thư trong quy trình làm việc."
description: "Ghi chú phát hành của v2.2.0-beta.3"
---

### 🎉 Tính năng mới

* **[Workflow: Node gửi thư]** Đã thêm hỗ trợ gửi tệp đính kèm trong các node gửi thư của workflow. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) bởi @mytharcher
* **[Workflow]** Đã thêm hỗ trợ phạm vi giao dịch cơ sở dữ liệu trong workflow. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) bởi @mytharcher
  Tham khảo: [Giao dịch cơ sở dữ liệu](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Node giao dịch cơ sở dữ liệu]** Đã thêm plugin node giao dịch cơ sở dữ liệu cho workflow. bởi @mytharcher

### 🚀 Cải tiến

* **[client-v2]** Các cột trường quan hệ trong bảng con của biểu mẫu hiện hỗ trợ biến mục hiện tại trong phạm vi dữ liệu. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) bởi @gchust
* **[undefined]** Đã thống nhất tên tài liệu tiếng Trung của plugin Version control thành “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) bởi @cgyrock
* **[File manager]** Đã thêm hỗ trợ văn bản có thể chọn cho bản xem trước PDF trong File manager đối với các tệp PDF có văn bản nhúng. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) bởi @mytharcher
* **[Users]** Đã cải thiện bố cục của các trang Người dùng và Phân quyền v2 và tối ưu hóa hành vi của cây phòng ban. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) bởi @jiannx
* **[Hành động: Chỉnh sửa hàng loạt]** Đã tối ưu hóa cách tải các plugin hành động v2 và giữ nguyên thứ tự của các nút hành động đã được di chuyển. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) bởi @katherinehhh
* **[Version control]** Đã đổi tên hiển thị tiếng Trung của plugin Version control thành “版本控制”. bởi @cgyrock

### 🐛 Sửa lỗi

* **[cli-v1]** Đã sửa lỗi khi chạy `<span>yarn dev</span>` sau khi nâng cấp các dự án được tạo bằng create-nocobase-app từ 2.0 lên 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) bởi @Molunerfinn
* **[flow-engine]** Đã sửa lỗi nhập liệu IME tiếng Việt và tiếng Trung trong các trường văn bản một dòng và nhiều dòng v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) bởi @katherinehhh
* **[client-v2]** Đã sửa lỗi tiến trình di chuyển không hiển thị chế độ xem tiến trình chuyên dụng. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) bởi @2013xile
* **[server]** Đã sửa lỗi xử lý tên plugin không an toàn trong `<span>pm:enable</span>` để tránh rủi ro bao gồm tệp cục bộ trong quá trình phân giải plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) bởi @mytharcher
* **[Trình quản lý tác vụ bất đồng bộ]** Đã sửa lỗi truy vấn cơ sở dữ liệu do thiếu `<span>filterByTk</span>` khi tải xuống tệp tác vụ bất đồng bộ. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) bởi @mytharcher
* **[File manager]** Đã sửa lỗi xem trước PDF bị lỗi do tải module worker pdf.js bất thường. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) bởi @mytharcher
* **[Khối: Kanban]** Đã sửa lỗi khi mở các khối Lịch, Gantt và Kanban ở chế độ không chỉnh sửa vô tình lưu lại các hành động popup ẩn và gửi yêu cầu xóa nhiều lần. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) bởi @jiannx
* **[Hành động: Xuất bản ghi Pro]** Đã cải thiện cài đặt chế độ xử lý và văn bản trợ giúp cho Import/Export Pro v2. bởi @katherinehhh
* **[Đa không gian]** Đã sửa lỗi quản trị viên không gian không thể thêm người dùng không gian khi họ không có quyền đối với trường email người dùng. bởi @jiannx
* **[Trình quản lý di chuyển]** Đã sửa lỗi có thể xảy ra khi nhập các tệp dữ liệu di chuyển lớn. bởi @2013xile
* **[In mẫu]** Đã từ chối các loại tệp mẫu không được hỗ trợ trước khi bắt đầu in mẫu. bởi @2013xile
