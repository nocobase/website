---
title: "NocoBase v1.9.0-beta.13: Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel"
description: "Ghi chú phát hành của v1.9.0-beta.13"
---

### 🚀 Cải tiến

- **[client]** Để có được loại MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện loại MIME của tệp trong client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Tái cấu trúc logic bản địa hóa cho thông báo lỗi và xử lý trong plugin xử lý lỗi ([#7582](https://github.com/nocobase/nocobase/pull/7582)) bởi @2013xile

- **[Workflow]** Thêm tùy chọn `keepBranch` khi xóa node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher

- **[Workflow: Phê duyệt]** Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi khi xóa trường ngày tháng trong khối bộ lọc ([#7632](https://github.com/nocobase/nocobase/pull/7632)) bởi @katherinehhh

  - Sửa lỗi giá trị mặc định của bảng con không hoạt động trong cửa sổ chỉnh sửa biểu mẫu ([#7631](https://github.com/nocobase/nocobase/pull/7631)) bởi @katherinehhh

  - Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa thay đổi kích thước trong lúc xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher

  - Sửa lỗi cửa sổ bật lên biểu tượng tab bị che khuất ([#7607](https://github.com/nocobase/nocobase/pull/7607)) bởi @zhangzhonghe

- **[database]** Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Sửa lỗi siêu dữ liệu không được đồng bộ hóa trên nhiều node sau khi tạo trường liên kết ngược ([#7628](https://github.com/nocobase/nocobase/pull/7628)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi script di chuyển gặp lỗi do bảng không tồn tại khi ứng dụng chưa được cài đặt bởi @mytharcher

  - Sửa lỗi ID Snowflake không được tạo do hook bị bỏ qua bởi @mytharcher

- **[Auth: LDAP]** Sửa lỗi LDAP liên kết thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile
