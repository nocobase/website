---
title: "NocoBase v2.0.0-alpha.37: thích ứng với trường tableoid trong 2.0"
description: "Ghi chú phát hành của v2.0.0-alpha.37"
---

### 🚀 Cải tiến

- **[client]**
  - Thêm thông tin phiên bản trang vào ngữ cảnh flow engine ([#7826](https://github.com/nocobase/nocobase/pull/7826)) bởi @gchust

  - Cải thiện Markdown Editor ([#7793](https://github.com/nocobase/nocobase/pull/7793)) bởi @katherinehhh

  - Thích ứng với trường tableoid trong phiên bản 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Cập nhật gợi ý cảnh báo và chú thích mẫu mã sự kiện ([#7814](https://github.com/nocobase/nocobase/pull/7814)) bởi @heziqiang

- **[Kiểm soát truy cập]** Tối ưu hóa logic kiểm soát quyền cho các thao tác trên trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile

- **[Auth: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher

- **[client]**
  - Biến collection hiện tại không nên được chọn từ bộ chọn biến của thành phần bộ lọc ([#7818](https://github.com/nocobase/nocobase/pull/7818)) bởi @gchust

  - Sửa lỗi 'value.replace is not a function' trong trường quan hệ của biểu mẫu bộ lọc ([#7824](https://github.com/nocobase/nocobase/pull/7824)) bởi @zhangzhonghe

  - Sửa tham số không chính xác trong callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) bởi @zhangzhonghe

- **[flow-engine]** Sửa lỗi thay đổi trong luồng sự kiện chỉ có hiệu lực sau khi làm mới trang ([#7811](https://github.com/nocobase/nocobase/pull/7811)) bởi @gchust

- **[Workflow]** Sửa lỗi plugin workflow vẫn tiêu thụ sự kiện hàng đợi khi không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi các trường collection chính không bị loại trừ khi tải lại dữ liệu liên kết bởi @mytharcher

- **[Quản lý email]** Sửa lỗi hình ảnh dự phòng và đồng bộ hóa trong outlook bởi @jiannx
