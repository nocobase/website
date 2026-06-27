---
title: "NocoBase v2.0.8: Cập nhật lời nhắc người dùng trong hộp thoại AI"
description: "Ghi chú phát hành phiên bản v2.0.8"
---

### 🎉 Tính năng mới

- **[AI nhân viên]** Cập nhật lời nhắc người dùng trong hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[máy chủ]** Khắc phục sự cố bộ nhớ đệm bằng cách thêm hash vào tài sản ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos

- **[AI nhân viên]** Đã sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock

- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi quy trình làm việc hành động tùy chỉnh bị treo khi thực thi như một luồng phụ ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher

  - Sửa lỗi xảy ra khi thực thi quy trình làm việc phê duyệt thủ công bởi @mytharcher

  - Sửa lỗi xảy ra do thiếu giá trị `dataAfter` khi thêm hoặc ủy quyền bởi @mytharcher

  - Sửa lỗi lọc tham số appends bởi ACL bởi @mytharcher

  - Sửa lỗi ACL khi giá trị liên kết không được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher
