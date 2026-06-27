---
title: "NocoBase v1.6.0-beta.16: Trường thời gian hỗ trợ định dạng thời gian"
description: "Ghi chú phát hành của v1.6.0-beta.16"
---

### 🎉 Tính năng mới

- **[client]** Trường thời gian hỗ trợ định dạng thời gian ([#6329](https://github.com/nocobase/nocobase/pull/6329)) bởi @katherinehhh

### 🚀 Cải tiến

- **[server]** Nâng cấp koa lên 2.15.4; nâng cấp @koa/cors lên 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) bởi @2013xile

- **[Workflow]** Tải chậm kết quả công việc để cải thiện hiệu suất ([#6344](https://github.com/nocobase/nocobase/pull/6344)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[auth]** Tránh gia hạn token trong quá trình ủy quyền WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) bởi @sheldon66

- **[client]**
  - Các trang có favicon tùy chỉnh hiển thị nhanh favicon của NocoBase trong khi tải ([#6337](https://github.com/nocobase/nocobase/pull/6337)) bởi @zhangzhonghe

  - Nút thêm mới xuất hiện khi di chuột trong chế độ chỉ đọc của trường liên kết ([#6322](https://github.com/nocobase/nocobase/pull/6322)) bởi @katherinehhh

- **[devtools]** Đảm bảo tiêu đề X-Forwarded-For chỉ được đặt nếu req.ip không phải là undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) bởi @sheldon66

- **[Block: Bản đồ]** Cấu hình cài đặt cho trường bản đồ bị thiếu/không hiển thị ([#6336](https://github.com/nocobase/nocobase/pull/6336)) bởi @zhangzhonghe

- **[Mobile]** Lỗi trang: Không thể đọc thuộc tính của null (đang đọc 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) bởi @zhangzhonghe

- **[Người dùng]** Giao diện lỗi hiển thị nhanh khi bảng quản lý quyền người dùng tải lần đầu ([#6324](https://github.com/nocobase/nocobase/pull/6324)) bởi @zhangzhonghe

- **[Block: Bảng hành động]** Cài đặt chiều cao của bảng hành động không có hiệu lực ([#6321](https://github.com/nocobase/nocobase/pull/6321)) bởi @zhangzhonghe

- **[Hành động: Nhập bản ghi Pro]** Nút nhập khối liên kết phát hiện bản ghi trùng lặp không hiển thị dữ liệu trong dropdown trường bởi @katherinehhh

- **[Hành động: Xuất bản ghi Pro]** Xóa tùy chọn 'thêm khối' trong cài đặt nút đính kèm xuất bởi @katherinehhh

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi di chuyển cho các nút cũ được gắn với workflow hành động tùy chỉnh bởi @mytharcher

- **[Thương hiệu tùy chỉnh]** Các trang có favicon tùy chỉnh hiển thị nhanh favicon của NocoBase trong khi tải bởi @zhangzhonghe

- **[In mẫu]** Khôi phục từ local thất bại khi cả plugin in mẫu hành động và plugin quản lý sao lưu đều được bật bởi @gchust

- **[Workflow: Phê duyệt]**
  - Sửa lỗi `.toJSON()` gây ra lỗi bởi @mytharcher

  - Sửa lỗi di chuyển không chạy do số phiên bản bởi @mytharcher

  - Sửa lỗi di chuyển cho các khối cũ bởi @mytharcher
