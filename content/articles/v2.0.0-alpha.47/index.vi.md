---
title: "NocoBase v2.0.0-alpha.47: Hỗ trợ khởi tạo các trường bộ lọc đã chọn trong truy vấn biểu đồ"
description: "Ghi chú phát hành của v2.0.0-alpha.47"
---

### 🚀 Cải tiến

- **[client]**
  - Hỗ trợ khởi tạo các trường bộ lọc đã chọn trong truy vấn biểu đồ ([#7933](https://github.com/nocobase/nocobase/pull/7933)) bởi @heziqiang

  - Sử dụng ba dấu ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher

  - Thêm trạng thái tải cho nút hành động cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher

- **[Trường bộ sưu tập: Markdown(Vditor)]** điều chỉnh chiều rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi khi mở khối chi tiết trong popup cho các trường quan hệ không phải ID gây ra lỗi. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) bởi @gchust

  - Đã sửa lỗi dữ liệu liên kết không tải chính xác trong popup cho các trường quan hệ không phải ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) bởi @gchust

  - Sửa lỗi định tuyến khi sử dụng Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) bởi @zhangzhonghe

  - sửa lỗi cài đặt độ chính xác không hợp lệ cho định dạng trường số ([#7967](https://github.com/nocobase/nocobase/pull/7967)) bởi @katherinehhh

  - Sửa lỗi gõ sai trong trang 2.0 mới ([#7945](https://github.com/nocobase/nocobase/pull/7945)) bởi @zhangzhonghe

  - sửa lỗi giá trị bộ lọc không bị xóa khi nhấp vào nút Đặt lại ([#7966](https://github.com/nocobase/nocobase/pull/7966)) bởi @zhangzhonghe

- **[Workflow]** Sửa lỗi số lượng tác vụ không hiển thị do sử dụng sai nhà cung cấp ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Giải quyết vấn đề truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile

- **[Khối: Tham chiếu]** Đã sửa lỗi khi trích dẫn một khối sẽ xóa khối được trích dẫn khỏi trang gốc. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) bởi @gchust

- **[Nhân viên AI]** Sửa lỗi khi AI tạo đầu ra SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) bởi @heziqiang

- **[In mẫu]** sửa lỗi không thêm được mẫu trong thao tác in mẫu bản ghi bởi @katherinehhh
