---
title: "NocoBase v2.1.0-alpha.21: Quy trình làm việc đã thêm hướng dẫn nhân viên AI"
description: "Ghi chú phát hành của v2.1.0-alpha.21"
---

### 🎉 Tính năng mới

- **[Khối: Kanban]** khối kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) bởi @jiannx

- **[Nhân viên AI]** Luồng công việc đã thêm chỉ thị nhân viên AI ([#9025](https://github.com/nocobase/nocobase/pull/9025)) bởi @cgyrock

- **[Xác thực: OIDC]** thuộc tính ánh xạ hỗ trợ trường tùy chỉnh bởi @chenzhizdt

- **[DingTalk]** DingTalk: thông báo, tự động đăng nhập trong DingTalk, và đồng bộ người dùng. bởi @chenzhizdt

### 🚀 Cải tiến

- **[build]** Cơ sở tri thức hỗ trợ tải lên hàng loạt tệp qua ZIP ([#9206](https://github.com/nocobase/nocobase/pull/9206)) bởi @cgyrock

- **[ai]** Nhân viên AI và cơ sở tri thức hiện hỗ trợ thêm các loại tệp để tải lên (.xlsx, .xls, .csv, .md, .json) ([#9172](https://github.com/nocobase/nocobase/pull/9172)) bởi @cgyrock

- **[Luồng công việc]** Cải thiện hiệu suất danh sách thực thi ([#9214](https://github.com/nocobase/nocobase/pull/9214)) bởi @mytharcher

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Thêm kiểm soát ACL cho chế độ kích hoạt trên bản ghi (cả đơn và nhiều) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) bởi @mytharcher

- **[AI: Cơ sở tri thức]** Cơ sở tri thức hỗ trợ tải lên hàng loạt tệp qua ZIP bởi @cgyrock

### 🐛 Sửa lỗi

- **[data-source-manager]**
  - Đã sửa đồng bộ trường nullable ([#9189](https://github.com/nocobase/nocobase/pull/9189)) bởi @2013xile

  - Sửa lỗi trường phần trăm bị đặt lại thành số khi đồng bộ lại nguồn dữ liệu bên ngoài ([#9178](https://github.com/nocobase/nocobase/pull/9178)) bởi @jiannx

- **[client]**
  - Đã sửa lỗi khối quan hệ popup và biến bản ghi popup sử dụng định danh bản ghi sai khi bộ sưu tập sử dụng khóa duy nhất không phải khóa chính ([#9191](https://github.com/nocobase/nocobase/pull/9191)) bởi @2013xile

  - Đã sửa lỗi giá trị mặc định sẽ không có hiệu lực sau khi tạo bản ghi. ([#9185](https://github.com/nocobase/nocobase/pull/9185)) bởi @gchust

  - Sửa lỗi nút Thêm tab quá gần với cạnh phải ([#9177](https://github.com/nocobase/nocobase/pull/9177)) bởi @zhangzhonghe

- **[Luồng công việc: Nút tổng hợp]** Sửa lỗi không thể lưu nút tổng hợp do quy tắc xác thực không chính xác ([#9208](https://github.com/nocobase/nocobase/pull/9208)) bởi @mytharcher

- **[Lịch]** không đăng ký hành động lịch cho các khối khác ([#9200](https://github.com/nocobase/nocobase/pull/9200)) bởi @jiannx

- **[Nhân viên AI]**
  - Sửa lỗi nhân viên AI không thể điền giá trị trường quan hệ trong biểu mẫu. ([#9182](https://github.com/nocobase/nocobase/pull/9182)) bởi @cgyrock

  - Sửa lỗi ghi nhật ký bất thường trong chỉ thị nhân viên AI ([#9180](https://github.com/nocobase/nocobase/pull/9180)) bởi @cgyrock

- **[Phòng ban]** Đã sửa lỗi đồng bộ phòng ban lặp lại không thể cập nhật thứ tự sắp xếp phòng ban ([#9173](https://github.com/nocobase/nocobase/pull/9173)) bởi @2013xile

- **[Luồng công việc: JavaScript]**
  - Sửa lỗi bảo mật của tập lệnh thực thi trong chế độ `node:vm` ([#9084](https://github.com/nocobase/nocobase/pull/9084)) bởi @mytharcher

  - Sửa lỗi xảy ra khi cấu hình nút JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) bởi @mytharcher

- **[Đa không gian]** Đã sửa lỗi không tìm thấy bộ sưu tập trong xác minh quyền không gian bởi @jiannx

- **[AI: Cơ sở tri thức]** Sửa lỗi cơ sở dữ liệu vector không được đồng bộ khi xóa tài liệu cơ sở tri thức. bởi @cgyrock

- **[Luồng công việc: Phê duyệt]** Sửa lỗi tìm kiếm người được ủy quyền phê duyệt để truy vấn người dùng vượt quá 200 ứng viên đầu tiên bởi @zhangzhonghe

- **[WeCom]** Đã sửa lỗi thiếu thứ tự phòng ban khi đồng bộ phòng ban từ WeCom bởi @2013xile
