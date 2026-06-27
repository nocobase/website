---
title: "NocoBase v1.7.0-alpha.12: Nâng cấp phụ thuộc và loại bỏ hỗ trợ SQLite"
description: "Ghi chú phát hành của v1.7.0-alpha.12"
---

### 🚀 Cải tiến

- **[cli]** Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) bởi @chenos

- **[create-nocobase-app]** Nâng cấp các phụ thuộc và loại bỏ hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos

- **[Mobile]** Tối ưu tốc độ mở popup chọn ngày trên thiết bị di động ([#6735](https://github.com/nocobase/nocobase/pull/6735)) bởi @zhangzhonghe

- **[Khối: mẫu]** hỗ trợ chuyển đổi khối mẫu thành khối thông thường ([#6662](https://github.com/nocobase/nocobase/pull/6662)) bởi @gchust

- **[Quản lý tệp]** Công khai API tiện ích ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher

- **[Trình chỉnh sửa giao diện]** Cho phép đặt chiều rộng thanh bên trong cấu hình giao diện ([#6720](https://github.com/nocobase/nocobase/pull/6720)) bởi @chenos

- **[Luồng công việc]** Thêm các kiểu ngày tháng vào tập hợp kiểu biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher

- **[In mẫu]** Thay thế điều khiển hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]**
  - vấn đề hiển thị với quy tắc liên kết trong dữ liệu liên kết đa cấp ([#6755](https://github.com/nocobase/nocobase/pull/6755)) bởi @katherinehhh

  - nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' trong quy tắc liên kết ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh

  - Vấn đề làm mới khối dữ liệu sau khi gửi thành công ([#6748](https://github.com/nocobase/nocobase/pull/6748)) bởi @zhangzhonghe

  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của luồng công việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe

  - Vấn đề khó xóa biểu tượng trên thanh điều hướng trên cùng của thiết bị di động ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe

  - hiển thị giá trị không chính xác cho "Bật cột chỉ mục" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) bởi @katherinehhh

  - điều kiện trường ngày giờ không hoạt động trong quy tắc liên kết ([#6728](https://github.com/nocobase/nocobase/pull/6728)) bởi @katherinehhh

  - thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh

  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không nên ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe

  - thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh

- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos

- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos

- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher

- **[Khối: Gantt]** khối biểu đồ Gantt chồng chéo các tháng trong tiêu đề lịch cho chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** Sửa các ngoại lệ nhập và xuất xảy ra khi đặt quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie

- **[Khối: mẫu]** các mẫu khối không thể sử dụng được trong môi trường mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) bởi @gchust

- **[Luồng công việc]** Sửa lỗi xảy ra khi thực thi sự kiện theo lịch trong luồng con ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]**
  - Sửa các ngoại lệ nhập và xuất xảy ra khi đặt quyền trường. bởi @aaaaaajie

  - nút xuất pro bị mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh

- **[Lưu trữ tệp: S3(Pro)]**
  - Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher

  - Thêm logic make multer cho tải lên phía máy chủ bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Sửa tải trước các trường liên kết cho bản ghi bởi @mytharcher
