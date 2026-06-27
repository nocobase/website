---
title: "NocoBase v1.9.0-beta.16: Hỗ trợ chế độ kích hoạt \"Trước khi lưu dữ liệu\""
description: "Ghi chú phát hành của v1.9.0-beta.16"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ chế độ kích hoạt "Trước khi dữ liệu được lưu" bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Thêm nhật ký gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) bởi @2013xile

- **[Workflow: nút thông báo]** Thêm tùy chọn `ignoreFail` cho nút thông báo, cho phép tiếp tục workflow khi gửi thông báo thất bại ([#7736](https://github.com/nocobase/nocobase/pull/7736)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi cấu hình quy tắc liên kết quét mã QR trong bảng hành động ([#7693](https://github.com/nocobase/nocobase/pull/7693)) bởi @katherinehhh

  - Sửa lỗi quy tắc liên kết khối iframe bị lỗi trong modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) bởi @katherinehhh

- **[database]** Bỏ qua đồng bộ hóa giá trị mặc định cho cột JSON của MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) bởi @2013xile

- **[Workflow]**
  - Sửa lỗi trong chế độ phân tách dịch vụ, việc xử lý hàng đợi chờ trong bộ nhớ không đúng cách khiến một số workflow không thực thi ([#7692](https://github.com/nocobase/nocobase/pull/7692)) bởi @mytharcher

  - Sửa giá trị trạng thái thực thi khi tạo với deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) bởi @mytharcher

  - Sửa lỗi sau khi xóa nút bắt đầu nhánh, khóa của nút đầu tiên được giữ lại trong nhánh bị thay đổi sai thành giá trị mới ([#7665](https://github.com/nocobase/nocobase/pull/7665)) bởi @mytharcher

- **[Kiểm soát truy cập]** Sửa thứ tự middleware của `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) bởi @2013xile

- **[Quản lý tệp]** Sửa lỗi tệp `.msg` không thể tải lên đúng cách ([#7662](https://github.com/nocobase/nocobase/pull/7662)) bởi @mytharcher

- **[Workflow: Nút thủ công]** Sửa lỗi tác vụ thủ công biến mất sau khi workflow bị vô hiệu hóa ([#7687](https://github.com/nocobase/nocobase/pull/7687)) bởi @mytharcher

- **[Trường bộ sưu tập: Phân cấp hành chính Trung Quốc]** Nhập dữ liệu thất bại khi thành phố và khu vực có cùng tên ([#7673](https://github.com/nocobase/nocobase/pull/7673)) bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Sửa lỗi dịch thuật văn bản trạng thái trong thông báo hoàn thành phê duyệt, sử dụng ngôn ngữ mặc định của hệ thống để dịch khi người dùng chưa đặt tùy chọn ngôn ngữ bởi @mytharcher

  - Sửa locales bởi @mytharcher
