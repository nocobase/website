---
title: "NocoBase v2.1.0-beta.7: Cập nhật lời nhắc người dùng hộp thoại AI"
description: "Ghi chú phát hành v2.1.0-beta.7"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng trong hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi thành phần CollectionField không hiển thị trong thành phần DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher

  - Sửa lỗi khối dữ liệu không làm mới khi chuyển đổi menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust

- **[flow-engine]** Sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng định nghĩa. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust

- **[database]** Sửa lỗi kiểm tra biểu thức chính quy tùy chỉnh trường thất bại trong phiên bản v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx

- **[server]** Khắc phục sự cố bộ nhớ đệm bằng cách thêm hash vào tài nguyên ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos

- **[Kiểm soát truy cập]** Phiên bản cơ sở dữ liệu được sử dụng khi thiết lập metadata ACL không chính xác ([#8747](https://github.com/nocobase/nocobase/pull/8747)) bởi @2013xile

- **[Nhân viên AI]**
  - Sửa lỗi trò chuyện nhân viên AI khi kích hoạt cơ sở kiến thức ([#8746](https://github.com/nocobase/nocobase/pull/8746)) bởi @cgyrock

  - Sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock

- **[Flow engine]** sửa lỗi sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) bởi @chenos

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi luồng công việc hành động tùy chỉnh bị treo khi thực thi như một luồng con ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi kết quả truy vấn không hiển thị do các nút bị lọc theo loại bởi @mytharcher

  - Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher

  - Sửa lỗi xảy ra khi thực thi luồng công việc phê duyệt thủ công bởi @mytharcher

  - Sửa lỗi xảy ra do giá trị `dataAfter` bị thiếu khi thêm hoặc ủy quyền bởi @mytharcher

  - Sửa lỗi ACL khi giá trị liên kết không nên được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher

  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher

  - Sửa lỗi tham số appends bị lọc bởi ACL bởi @mytharcher
