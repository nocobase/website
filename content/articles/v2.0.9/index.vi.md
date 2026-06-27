---
title: "NocoBase v2.0.9: Khắc phục sự cố thành phần CollectionField không hiển thị trong thành phần DefaultValue"
description: "Ghi chú phát hành v2.0.9"
---

### 🐛 Sửa lỗi

- **[client]**
  - Khắc phục sự cố component CollectionField không hiển thị trong component DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher

  - Đã sửa lỗi khối dữ liệu không làm mới khi chuyển đổi menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust

- **[database]** Sửa lỗi kiểm tra biểu thức chính quy tùy chỉnh thất bại trong v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx

- **[flow-engine]** Đã sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng định nghĩa. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust

- **[Workflow: Phê duyệt]** Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher
