---
title: "NocoBase v1.7.0-beta.27: hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.27"
---

### 🎉 Tính năng mới

- **[client]** hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp ([#6787](https://github.com/nocobase/nocobase/pull/6787)) bởi @katherinehhh

- **[In mẫu]**
  - Hỗ trợ hiển thị hình ảnh động và mã vạch trong mẫu tài liệu. bởi @sheldon66

  - Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66

- **[Khối: Cây]** khối cây bộ lọc hỗ trợ quy tắc liên kết bởi @katherinehhh

- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

### 🚀 Cải tiến

- **[client]** tối ưu kiểu nút thêm trong bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh

- **[Quản lý tệp]** Thêm tùy chọn thời gian chờ OSS mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher

- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile

### 🐛 Sửa lỗi

- **[database]**
  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher

  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher

- **[client]**
  - khi lựa chọn biến yêu cầu tải không đồng bộ, menu đã chọn cuối cùng bị mất. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) bởi @gchust

  - Sửa lỗi không thể chọn trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe

  - vấn đề khi cấu hình quy tắc liên kết trong biểu mẫu con (cửa sổ popup) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh

  - nhiều thông báo lỗi được hiển thị khi quy tắc xác thực bị vi phạm trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh

  - trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh

  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) bởi @katherinehhh

- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** phản hồi yêu cầu tùy chỉnh được đặt thành biến không hiển thị chính xác ([#6793](https://github.com/nocobase/nocobase/pull/6793)) bởi @katherinehhh
