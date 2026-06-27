---
title: "NocoBase v2.1.0-beta.15: hỗ trợ trường tùy chỉnh cho thuộc tính ánh xạ"
description: "Ghi chú phát hành phiên bản v2.1.0-beta.15"
---

### 🎉 Tính năng mới

- **[Khối: Kanban]** khối kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) bởi @jiannx

- **[Xác thực: OIDC]** thuộc tính ánh xạ hỗ trợ trường tùy chỉnh bởi @chenzhizdt

- **[DingTalk]** DingTalk: thông báo, tự động đăng nhập trong DingTalk và đồng bộ người dùng. bởi @chenzhizdt

### 🚀 Cải tiến

- **[build]** Cơ sở tri thức hỗ trợ tải lên hàng loạt tệp qua ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) bởi @cgyrock

- **[ai]** Nhân viên AI và cơ sở tri thức hiện hỗ trợ thêm các loại tệp để tải lên (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) bởi @cgyrock

- **[Workflow]** Cải thiện hiệu suất danh sách thực thi ([#9214](https://github.com/nocobase/nocobase/pull/9214)) bởi @mytharcher

- **[AI: Cơ sở tri thức]** Cơ sở tri thức hỗ trợ tải lên hàng loạt tệp qua ZIP bởi @cgyrock

- **[Workflow: Phê duyệt]** Thêm chỉ mục trên các cột bản ghi phê duyệt để cải thiện hiệu suất cho các hành động danh sách và gửi bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Đã sửa lỗi khi các trường thập phân có xác thực có thể từ chối đầu vào số hợp lệ ([#9204](https://github.com/nocobase/nocobase/pull/9204)) bởi @2013xile

- **[client]**
  - Sửa lỗi nút Thêm tab quá gần với cạnh phải ([#9177](https://github.com/nocobase/nocobase/pull/9177)) bởi @zhangzhonghe

  - Đã sửa lỗi khối quan hệ popup và biến bản ghi popup sử dụng định danh bản ghi sai khi các bộ sưu tập sử dụng khóa duy nhất không phải khóa chính ([#9191](https://github.com/nocobase/nocobase/pull/9191)) bởi @2013xile

  - Đã sửa lỗi giá trị mặc định sẽ không có hiệu lực sau khi tạo bản ghi. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) bởi @gchust

- **[data-source-manager]**
  - Đã sửa lỗi đồng bộ trường nullable ([#9189](https://github.com/nocobase/nocobase/pull/9189)) bởi @2013xile

  - Sửa lỗi trường phần trăm bị đặt lại thành số khi đồng bộ lại nguồn dữ liệu bên ngoài ([#9178](https://github.com/nocobase/nocobase/pull/9178)) bởi @jiannx

- **[Nhân viên AI]**
  - Sửa lỗi thiếu giá trị trường URL cho tệp đính kèm trong các lựa chọn biểu mẫu của nhân viên AI. ([#9216](https://github.com/nocobase/nocobase/pull/9216)) bởi @cgyrock

  - Sửa lỗi nhân viên AI không thể điền giá trị trường quan hệ trong biểu mẫu. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) bởi @cgyrock

- **[Người dùng]** Đã sửa lỗi các trường được cấu hình động trong Chỉnh sửa hồ sơ không tải dữ liệu người dùng mới nhất ([#9205](https://github.com/nocobase/nocobase/pull/9205)) bởi @2013xile

- **[Lịch]** không đăng ký hành động lịch cho các khối khác ([#9200](https://github.com/nocobase/nocobase/pull/9200)) bởi @jiannx

- **[Phòng ban]** Đã sửa lỗi đồng bộ phòng ban lặp lại không thể cập nhật thứ tự sắp xếp phòng ban ([#9173](https://github.com/nocobase/nocobase/pull/9173)) bởi @2013xile

- **[Workflow: JavaScript]** Sửa lỗi bảo mật của tập lệnh thực thi ở chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi không thể xóa sắp xếp nhóm trên trường sắp xếp nguồn dữ liệu bên ngoài ([#9203](https://github.com/nocobase/nocobase/pull/9203)) bởi @2013xile

- **[Đa không gian]** Đã sửa lỗi không tìm thấy bộ sưu tập trong xác minh quyền không gian bởi @jiannx

- **[AI: Cơ sở tri thức]** Sửa lỗi cơ sở dữ liệu vector không được đồng bộ khi xóa tài liệu cơ sở tri thức. bởi @cgyrock

- **[Workflow: Phê duyệt]** Sửa lỗi tìm kiếm người được chỉ định lại phê duyệt để truy vấn người dùng ngoài 200 ứng viên đầu tiên bởi @zhangzhonghe

- **[WeCom]** Đã sửa lỗi thiếu thứ tự phòng ban khi đồng bộ phòng ban từ WeCom bởi @2013xile
