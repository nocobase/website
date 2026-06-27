---
title: "NocoBase v2.0.0-alpha.39: Thích ứng các thành phần cho thiết bị di động"
description: "Ghi chú phát hành của v2.0.0-alpha.39"
---

### 🚀 Cải tiến

- **[client]** Điều chỉnh Components cho Thiết bị Di động ([#7870](https://github.com/nocobase/nocobase/pull/7870)) của @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi cấu hình trường JS mặc định không sử dụng cài đặt chế độ hiển thị. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) của @gchust

  - Sửa lỗi các mẫu trùng lặp không xuất hiện do kéo rồi xóa một mẫu tham chiếu ([#7847](https://github.com/nocobase/nocobase/pull/7847)) của @zhangzhonghe

  - Đã sửa lỗi không thể đặt giá trị mặc định của trường ngày tháng trong mô hình khối bộ lọc biểu mẫu. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) của @gchust

  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) của @zhangzhonghe

  - Đã sửa lỗi thao tác chỉnh sửa nhanh trong khối bảng không cập nhật dữ liệu chính xác. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) của @gchust

  - Sửa lỗi trường văn bản đa dạng thức không thể nhập giá trị mặc định và trường chọn nhiều không thể chọn nhiều tùy chọn giá trị mặc định. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) của @gchust

- **[Trình quản lý đa ứng dụng (không còn được hỗ trợ)]** Sau khi một ứng dụng con dừng, gửi một thông báo đồng bộ để thông báo cho các nút khác dừng ứng dụng con tương ứng ([#7849](https://github.com/nocobase/nocobase/pull/7849)) của @2013xile

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động của @zhangzhonghe

- **[Trình quản lý Email]** Lỗi làm mới ShadowHtml của @jiannx
