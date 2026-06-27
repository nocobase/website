---
title: "NocoBase v1.7.0-alpha.10: Hỗ trợ cấu hình biến sau khi gửi"
description: "Ghi chú phát hành của v1.7.0-alpha.10"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình biến sau khi gửi, cho phép chuyển hướng với ID dữ liệu hiện tại ([#6465](https://github.com/nocobase/nocobase/pull/6465)) bởi @katherinehhh

- **[Trường collection: Markdown(Vditor)]** Vditor hỗ trợ S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[client]**
  - Chỉ hỗ trợ xem trước tệp văn bản thuần ([#6563](https://github.com/nocobase/nocobase/pull/6563)) bởi @mytharcher

  - Tối ưu hóa thông báo lỗi 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) bởi @chenos

  - Giới hạn các hành động khả dụng cho các thuộc tính trường khác nhau trong quy tắc liên kết ([#6548](https://github.com/nocobase/nocobase/pull/6548)) bởi @katherinehhh

- **[Workflow]** Tách các cột đã thực thi thành bảng thống kê ([#6534](https://github.com/nocobase/nocobase/pull/6534)) bởi @mytharcher

- **[Mobile]** Điều chỉnh kiểu cửa sổ bật lên thông báo cho thiết bị di động ([#6557](https://github.com/nocobase/nocobase/pull/6557)) bởi @zhangzhonghe

- **[Trường collection: Sequence]** Hỗ trợ đặt sequence làm trường tiêu đề cho khối lịch ([#6562](https://github.com/nocobase/nocobase/pull/6562)) bởi @katherinehhh

- **[Quản lý tệp]** Điều chỉnh API `getFileData` của bộ nhớ ([#6553](https://github.com/nocobase/nocobase/pull/6553)) bởi @mytharcher

- **[Kiểm soát truy cập]** Tối ưu hóa thứ tự và kiểu chuyển đổi vai trò ([#6555](https://github.com/nocobase/nocobase/pull/6555)) bởi @aaaaaajie

- **[Biểu mẫu công khai]** Đặt tiêu đề trang biểu mẫu công khai thành tiêu đề đã cấu hình khi tạo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) bởi @katherinehhh

- **[Workflow: Sự kiện hành động tùy chỉnh]** Tách các cột đã thực thi thành bảng thống kê bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Hỗ trợ bỏ qua trình xác thực trong cài đặt bởi @mytharcher

  - Tách các cột đã thực thi thành bảng thống kê bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Các phiên bản trình duyệt cũ sẽ hiển thị trang trắng ([#6571](https://github.com/nocobase/nocobase/pull/6571)) bởi @zhangzhonghe

  - Không thể mở một modal khác bên trong modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) bởi @zhangzhonghe

  - Tùy chọn 'Ellipsis overflow content' yêu cầu làm mới trang để trạng thái bật/tắt có hiệu lực ([#6520](https://github.com/nocobase/nocobase/pull/6520)) bởi @zhangzhonghe

  - Sự cố hiển thị trường ngày trong bộ lọc phạm vi dữ liệu ([#6564](https://github.com/nocobase/nocobase/pull/6564)) bởi @katherinehhh

  - Menu trên cùng của trang hiển thị trống ([#6551](https://github.com/nocobase/nocobase/pull/6551)) bởi @zhangzhonghe

  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust

  - Không thể sử dụng biến 'Người dùng hiện tại' khi thêm trang liên kết ([#6536](https://github.com/nocobase/nocobase/pull/6536)) bởi @zhangzhonghe

  - Gán trường với giá trị null không hiệu quả ([#6549](https://github.com/nocobase/nocobase/pull/6549)) bởi @katherinehhh

  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust

  - Xóa tùy chọn 'Cho phép chọn nhiều' khỏi trường chọn một trong biểu mẫu lọc ([#6515](https://github.com/nocobase/nocobase/pull/6515)) bởi @zhangzhonghe

  - Liên kết phạm vi dữ liệu của trường quan hệ không hiệu quả ([#6530](https://github.com/nocobase/nocobase/pull/6530)) bởi @zhangzhonghe

  - Lỗi lệnh `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) bởi @gchust

  - Sự cố kéo và thả nút hàng trong bảng ([#6544](https://github.com/nocobase/nocobase/pull/6544)) bởi @katherinehhh

- **[Mobile]** Điều chỉnh kích thước phông chữ hiển thị trên điện thoại thành 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) bởi @zhangzhonghe

- **[Workflow]**
  - Sửa lỗi xảy ra khi cấu hình tùy chọn tự động xóa ([#6560](https://github.com/nocobase/nocobase/pull/6560)) bởi @mytharcher

  - Đảm bảo khóa workflow được tạo trước khi lưu ([#6567](https://github.com/nocobase/nocobase/pull/6567)) bởi @mytharcher

- **[Biến và bí mật]** Thiếu nút lọc biểu tượng, số lượng bộ lọc không hiển thị và dữ liệu không làm mới sau khi lọc khi chuyển trang ([#6568](https://github.com/nocobase/nocobase/pull/6568)) bởi @katherinehhh

- **[Biểu mẫu công khai]** Sự cố tiêu đề trang biểu mẫu công khai hiển thị 'Đang tải...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) bởi @katherinehhh

- **[Tài liệu API]** Trang tài liệu API không thể cuộn ([#6566](https://github.com/nocobase/nocobase/pull/6566)) bởi @zhangzhonghe

- **[Workflow: Sự kiện sau hành động]** Nhiều bản ghi trong hành động hàng loạt sẽ kích hoạt nhiều lần ([#6559](https://github.com/nocobase/nocobase/pull/6559)) bởi @mytharcher

- **[Khối: mẫu]**
  - Menu lưu dưới dạng mẫu bị trùng lặp trong khối chi tiết ([#6558](https://github.com/nocobase/nocobase/pull/6558)) bởi @gchust

  - Các quy tắc liên kết của khối biểu mẫu chưa được đồng bộ chính xác từ mẫu ([#6550](https://github.com/nocobase/nocobase/pull/6550)) bởi @gchust

- **[Xác thực]** Vấn đề bản địa hóa cho các trường của trang đăng ký ([#6556](https://github.com/nocobase/nocobase/pull/6556)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** Không thể tải xuống các tệp được mã hóa UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) bởi @2013xile

- **[Collection: Cây]** Vấn đề di chuyển cho plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) bởi @2013xile

- **[Khối: Biểu mẫu nhiều bước]** nút gửi có cùng màu ở trạng thái mặc định và được làm nổi bật bởi @jiannx

- **[Workflow: Phê duyệt]** Sửa giá trị biểu mẫu phê duyệt để gửi bởi @mytharcher
