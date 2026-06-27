---
title: "NocoBase v2.0.0-alpha.34: Sửa lỗi"
description: "Ghi chú phát hành của v2.0.0-alpha.34"
---

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ thực thi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi các nút thao tác trong khối bảng không cập nhật chính xác sau khi chuyển trang, đảm bảo chức năng của chúng khớp với dữ liệu của trang hiện tại. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) bởi @gchust

- **[client]**
  - Sửa lỗi "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe

  - Sửa lỗi dấu ba chấm (ellipsis) của trường tiêu đề trường liên kết không được áp dụng ([#7778](https://github.com/nocobase/nocobase/pull/7778)) bởi @katherinehhh

  - Quy tắc liên kết của thao tác cập nhật bản ghi không hoạt động ([#7774](https://github.com/nocobase/nocobase/pull/7774)) bởi @gchust

- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile

- **[Mobile (không còn được hỗ trợ)]** Sửa lỗi cửa sổ bật lên giá trị mặc định của trường ngày tháng trên thiết bị di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe
