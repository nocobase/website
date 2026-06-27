---
title: "NocoBase v1.7.0-beta.9: Hỗ trợ hợp nhất vai trò người dùng"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.9"
---

### 🎉 Tính năng mới

- **[acl]** Hỗ trợ hợp nhất vai trò người dùng ([#6301](https://github.com/nocobase/nocobase/pull/6301)) bởi @aaaaaajie

- **[client]**
  - Hỗ trợ mở rộng các trường được cài đặt sẵn trong bộ sưu tập ([#6183](https://github.com/nocobase/nocobase/pull/6183)) bởi @katherinehhh

  - Hỗ trợ mở rộng các toán tử lọc ở giao diện người dùng ([#6085](https://github.com/nocobase/nocobase/pull/6085)) bởi @katherinehhh

- **[Xác thực]** Hỗ trợ người dùng liên kết nhiều loại xác thực khác nhau, chẳng hạn như SMS và TOTP authenticator, cùng với xác thực danh tính trong các tình huống bắt buộc. Cho phép phát triển và mở rộng các phương thức xác thực. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) bởi @2013xile
Tham khảo: [Xác thực](https://docs.nocobase.com/handbook/verification)
- **[Lịch]** Hỗ trợ mở rộng các trường tùy chọn cho các plugin Kanban, Lịch và Trường Công thức ([#6076](https://github.com/nocobase/nocobase/pull/6076)) bởi @katherinehhh

- **[Khối: mẫu]** Thêm plugin `Khối: mẫu`, cung cấp hỗ trợ mẫu cho các khối dựa trên cơ chế kế thừa. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) bởi @gchust

- **[plugin-demo-platform]** Đặt skipAuthCheck của route "/new" thành true. bởi @sheldon66

- **[Xác thực hai yếu tố (2FA)]** Plugin mới: Xác thực hai yếu tố và Xác thực: TOTP authenticator bởi @2013xile
Tham khảo: [Xác thực hai yếu tố (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Xác thực: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Cải tiến

- **[client]**
  - Thêm skipAuthCheck vào router.add để ngăn chặn chuyển hướng đến trang đăng nhập trên các trang công khai. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) bởi @sheldon66

  - Nâng cấp các phụ thuộc liên quan đến ant design lên phiên bản 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) bởi @gchust

- **[utils]** Thích ứng trang desktop cho thiết bị di động ([#6393](https://github.com/nocobase/nocobase/pull/6393)) bởi @zhangzhonghe

- **[Biểu mẫu công khai]** Đặt tiêu đề trang biểu mẫu công khai thành tiêu đề đã cấu hình khi tạo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) bởi @katherinehhh

- **[Quản lý tệp]**
  - Thêm mã backend để tạo URL xem trước tệp ([#6223](https://github.com/nocobase/nocobase/pull/6223)) bởi @jiannx

  - Thay đổi API loại lưu trữ và thêm API plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher

- **[Khối: mẫu]** Hỗ trợ lưu khối dữ liệu dưới dạng mẫu khối từ trang ([#6348](https://github.com/nocobase/nocobase/pull/6348)) bởi @gchust

- **[Luồng công việc]** Di chuyển cài đặt liên kết luồng công việc vào plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sự cố kéo và thả nút hàng trong bảng ([#6544](https://github.com/nocobase/nocobase/pull/6544)) bởi @katherinehhh

  - Không thể sử dụng biến 'Người dùng hiện tại' khi thêm trang liên kết ([#6536](https://github.com/nocobase/nocobase/pull/6536)) bởi @zhangzhonghe

  - Liên kết phạm vi dữ liệu của trường quan hệ không hiệu quả ([#6530](https://github.com/nocobase/nocobase/pull/6530)) bởi @zhangzhonghe

  - Xóa tùy chọn 'Cho phép chọn nhiều' khỏi trường chọn một trong biểu mẫu lọc ([#6515](https://github.com/nocobase/nocobase/pull/6515)) bởi @zhangzhonghe

  - Lỗi lệnh `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) bởi @gchust

  - Thiếu các trường trong cấu hình quy tắc liên kết ([#6488](https://github.com/nocobase/nocobase/pull/6488)) bởi @katherinehhh

  - Nội dung không được hiển thị đầy đủ trên trình duyệt di động ([#6446](https://github.com/nocobase/nocobase/pull/6446)) bởi @zhangzhonghe

  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không có hiệu lực ([#6400](https://github.com/nocobase/nocobase/pull/6400)) bởi @zhangzhonghe

  - Định dạng không chính xác của trường thời gian trong biểu mẫu lọc ([#6374](https://github.com/nocobase/nocobase/pull/6374)) bởi @katherinehhh

  - Kiểu nhập liệu không đúng cho cài đặt giá trị mặc định của biểu mẫu ([#6490](https://github.com/nocobase/nocobase/pull/6490)) bởi @gchust

- **[utils]** Lỗi 'desktop responsive' đã biết ([#6476](https://github.com/nocobase/nocobase/pull/6476)) bởi @zhangzhonghe

- **[acl]** Đã sửa lỗi các trường quan hệ không được hiển thị dưới hợp nhất vai trò. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) bởi @aaaaaajie

- **[Bộ sưu tập: Cây]** Sự cố di chuyển cho plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** Không thể tải xuống các tệp được mã hóa UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) bởi @2013xile

- **[Biến và bí mật]** Các nút không được hiển thị trong ngăn kéo tạo biến mới ([#6485](https://github.com/nocobase/nocobase/pull/6485)) bởi @gchust

- **[WEB client]** Thay thế tất cả các trường hợp của ctx.state.currentRole (vai trò đơn) bằng ctx.state.currentRoles (hỗ trợ nhiều vai trò). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) bởi @aaaaaajie

- **[Kiểm soát truy cập]**
  - Lỗi khi phạm vi dữ liệu được đặt thành dữ liệu của chính mình và bảng thiếu trường người tạo. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) bởi @aaaaaajie

  - Đã sửa lỗi chuyển đổi vai trò không có hiệu lực. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) bởi @aaaaaajie

- **[Khối: mẫu]**
  - Tùy chọn Lưu dưới dạng mẫu không được hiển thị trong khối dữ liệu trang ([#6398](https://github.com/nocobase/nocobase/pull/6398)) bởi @gchust

  - Hành vi không chính xác của Lưu dưới dạng mẫu trên client di động ([#6420](https://github.com/nocobase/nocobase/pull/6420)) bởi @gchust

  - Yêu cầu đăng nhập khi truy cập biểu mẫu công khai ([#6258](https://github.com/nocobase/nocobase/pull/6258)) bởi @gchust

- **[Xác thực: API keys]** Plugin API keys xóa hợp nhất danh sách vai trò ([#6432](https://github.com/nocobase/nocobase/pull/6432)) bởi @aaaaaajie

- **[Khối: Biểu mẫu nhiều bước]** nút gửi có cùng màu ở trạng thái mặc định và được làm nổi bật bởi @jiannx

- **[Luồng công việc: Phê duyệt]** Sự cố về kiểu dáng với hộp thoại bật lên 'Áp dụng mới' bởi @zhangzhonghe
