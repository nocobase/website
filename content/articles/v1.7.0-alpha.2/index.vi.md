---
title: "NocoBase v1.7.0-alpha.2: hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết"
description: "Ghi chú phát hành của v1.7.0-alpha.2"
---

### 🎉 Tính năng mới

- **[client]**
  - Thành phần Chọn xếp tầng thêm cài đặt Phạm vi dữ liệu ([#6386](https://github.com/nocobase/nocobase/pull/6386)) bởi @Cyx649312038

  - Khối bảng hỗ trợ ẩn cột chỉ mục (mặc định hiển thị) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) bởi @katherinehhh

  - Hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết ([#6338](https://github.com/nocobase/nocobase/pull/6338)) bởi @katherinehhh

  - Hỗ trợ cấu hình phạm vi ngày (min/max) cho trường thời gian trong quy tắc liên kết ([#6356](https://github.com/nocobase/nocobase/pull/6356)) bởi @katherinehhh

- **[acl]** Hỗ trợ hợp nhất vai trò người dùng ([#6301](https://github.com/nocobase/nocobase/pull/6301)) bởi @aaaaaajie

- **[Khối: Bảng hành động]** hỗ trợ xuống dòng cho tiêu đề hành động trong bảng hành động ([#6433](https://github.com/nocobase/nocobase/pull/6433)) bởi @katherinehhh

- **[plugin-demo-platform]** Đặt skipAuthCheck của route "/new" thành true. bởi @sheldon66

- **[WeCom]** Cho phép đặt chú thích tùy chỉnh cho nút đăng nhập bởi @2013xile

### 🚀 Cải tiến

- **[utils]**
  - Di chuyển `md5` sang utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) bởi @mytharcher

  - Thích ứng trang desktop cho thiết bị di động ([#6393](https://github.com/nocobase/nocobase/pull/6393)) bởi @zhangzhonghe

- **[client]** Thêm skipAuthCheck vào router.add để ngăn chặn chuyển hướng đến trang đăng nhập trên các trang công khai. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) bởi @sheldon66

- **[Trực quan hóa dữ liệu]** Thay thế `x-designer` đã không còn được dùng bằng `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Trong khối cây, khi bỏ chọn, dữ liệu trong khối dữ liệu không bị xóa ([#6460](https://github.com/nocobase/nocobase/pull/6460)) bởi @zhangzhonghe

  - Sửa lỗi ký tự đặc biệt trong URL ảnh gây ra không hiển thị ([#6459](https://github.com/nocobase/nocobase/pull/6459)) bởi @mytharcher

  - Số trang không chính xác khi thêm dữ liệu sau khi thay đổi kích thước trang của bảng con ([#6437](https://github.com/nocobase/nocobase/pull/6437)) bởi @katherinehhh

  - Nội dung không được hiển thị đầy đủ trên trình duyệt di động ([#6446](https://github.com/nocobase/nocobase/pull/6446)) bởi @zhangzhonghe

  - Kiểu logo không nhất quán với phiên bản trước ([#6444](https://github.com/nocobase/nocobase/pull/6444)) bởi @zhangzhonghe

  - Lựa chọn phạm vi trường ngày loại trừ ngày tối đa ([#6418](https://github.com/nocobase/nocobase/pull/6418)) bởi @katherinehhh

  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không có hiệu lực ([#6415](https://github.com/nocobase/nocobase/pull/6415)) bởi @zhangzhonghe

  - Giá trị trường chọn nhiều thay đổi và mất tùy chọn khi xóa bản ghi bảng con ([#6405](https://github.com/nocobase/nocobase/pull/6405)) bởi @katherinehhh

  - Dữ liệu không cập nhật trong cửa sổ popup mở qua nút Liên kết ([#6411](https://github.com/nocobase/nocobase/pull/6411)) bởi @zhangzhonghe

- **[acl]** Đã sửa lỗi trường quan hệ không hiển thị dưới hợp nhất vai trò. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) bởi @aaaaaajie

- **[Quản lý tệp]**
  - Không thể xóa tệp được lưu trữ trên S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) bởi @chenos

  - Sửa một vài vấn đề của trình quản lý tệp ([#6436](https://github.com/nocobase/nocobase/pull/6436)) bởi @mytharcher

- **[Luồng công việc]** Xóa nút cài đặt luồng công việc ràng buộc khỏi bộ chọn dữ liệu ([#6455](https://github.com/nocobase/nocobase/pull/6455)) bởi @mytharcher

- **[Luồng công việc: Nút thủ công]**
  - Sửa lỗi xảy ra trong quá trình di chuyển ([#6445](https://github.com/nocobase/nocobase/pull/6445)) bởi @mytharcher

  - Thay đổi giới hạn phiên bản di chuyển thành `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) bởi @mytharcher

  - Sửa lỗi di chuyển thiếu tiền tố bảng và logic schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) bởi @mytharcher

- **[Kiểm soát truy cập]**
  - Đã sửa lỗi chuyển đổi vai trò không có hiệu lực. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) bởi @aaaaaajie

  - Lỗi khi phạm vi dữ liệu được đặt là dữ liệu của chính người dùng và bảng thiếu trường người tạo. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) bởi @aaaaaajie

- **[WEB client]** Thay thế tất cả các trường hợp của ctx.state.currentRole (vai trò đơn) bằng ctx.state.currentRoles (hỗ trợ nhiều vai trò). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) bởi @aaaaaajie

- **[Hành động: Chỉnh sửa hàng loạt]** Sửa lỗi luồng công việc không thể được kích hoạt trong quá trình gửi chỉnh sửa hàng loạt ([#6440](https://github.com/nocobase/nocobase/pull/6440)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** chuyển đổi nguồn dữ liệu trong quản lý vai trò không tải các bộ sưu tập tương ứng ([#6431](https://github.com/nocobase/nocobase/pull/6431)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Các trường đã xóa xuất hiện khi thêm trường bộ lọc tùy chỉnh ([#6450](https://github.com/nocobase/nocobase/pull/6450)) bởi @2013xile

- **[Thông báo: Tin nhắn trong ứng dụng]**
  - Phân biệt màu nền danh sách tin nhắn trong ứng dụng với các thẻ tin nhắn để tăng cường phân cấp trực quan và khả năng đọc. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) bởi @sheldon66

  - Tránh cấu hình người nhận sai truy vấn tất cả người dùng ([#6424](https://github.com/nocobase/nocobase/pull/6424)) bởi @sheldon66

- **[Hành động: Yêu cầu tùy chỉnh]** lỗi xác thực quyền phía máy chủ yêu cầu tùy chỉnh ([#6438](https://github.com/nocobase/nocobase/pull/6438)) bởi @katherinehhh

- **[Xác thực: Khóa API]** Xóa hợp nhất danh sách vai trò plugin khóa API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) bởi @aaaaaajie

- **[Khối: Mẫu]** Hành vi lưu dưới dạng mẫu không chính xác trong client di động ([#6420](https://github.com/nocobase/nocobase/pull/6420)) bởi @gchust

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Xóa `only` trong trường hợp kiểm thử E2E bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]** Giải quyết vấn đề URL đã ký S3 Pro không thể truy cập được bởi @chenos

- **[Luồng công việc: Phê duyệt]**
  - Tránh trang bị crash khi không có người nộp đơn trong bảng quy trình phê duyệt bởi @mytharcher

  - Sửa lỗi dữ liệu liên kết không hiển thị trong biểu mẫu phê duyệt bởi @mytharcher

  - Sửa lỗi xảy ra khi phê duyệt trên nguồn dữ liệu bên ngoài bởi @mytharcher
