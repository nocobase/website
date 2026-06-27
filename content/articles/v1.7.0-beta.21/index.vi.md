---
title: "NocoBase v1.7.0-beta.21: Nâng cấp phụ thuộc và loại bỏ hỗ trợ SQLite"
description: "Ghi chú phát hành của v1.7.0-beta.21"
---

### 🚀 Cải tiến

- **[create-nocobase-app]** Nâng cấp các phụ thuộc và loại bỏ hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos

- **[Mobile]** Tối ưu tốc độ mở popup chọn ngày trên thiết bị di động ([#6735](https://github.com/nocobase/nocobase/pull/6735)) bởi @zhangzhonghe

- **[Khối: mẫu]** Hỗ trợ chuyển đổi khối mẫu thành khối thông thường ([#6662](https://github.com/nocobase/nocobase/pull/6662)) bởi @gchust

- **[Trình chỉnh sửa giao diện]** Cho phép thiết lập chiều rộng thanh bên trong cấu hình giao diện ([#6720](https://github.com/nocobase/nocobase/pull/6720)) bởi @chenos

- **[Quản lý tệp]** Công khai API tiện ích ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher

- **[Luồng công việc]** Thêm kiểu ngày tháng vào tập hợp kiểu biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher

- **[In mẫu]** Thay thế điều khiển hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

### 🐛 Sửa lỗi

- **[client]**
  - Vấn đề làm mới khối dữ liệu sau khi gửi thành công ([#6748](https://github.com/nocobase/nocobase/pull/6748)) bởi @zhangzhonghe

  - Thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh

  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của luồng công việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe

  - Quy tắc liên kết nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh

  - Điều kiện trường ngày giờ không hoạt động trong quy tắc liên kết ([#6728](https://github.com/nocobase/nocobase/pull/6728)) bởi @katherinehhh

  - Vấn đề khó xóa biểu tượng thanh điều hướng trên cùng của thiết bị di động ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe

  - Hiển thị giá trị không chính xác cho "Bật cột chỉ mục" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) bởi @katherinehhh

  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không nên ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe

  - Chuyển đổi biến trong điều kiện quy tắc liên kết của bảng con/biểu mẫu con ([#6702](https://github.com/nocobase/nocobase/pull/6702)) bởi @katherinehhh

  - Nút xuất hiển thị khi không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh

  - Thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh

  - Vấn đề chuyển đổi bộ chọn trong trường ngày của nút bộ lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh

  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe

- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos

- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos

- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher

- **[Khối: Gantt]** Khối biểu đồ Gantt chồng lấn tháng trong tiêu đề lịch cho chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie

- **[Khối: mẫu]** Các mẫu khối không thể sử dụng trong môi trường mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) bởi @gchust

- **[Luồng công việc]** Sửa lỗi xảy ra khi thực thi sự kiện lịch trình trong luồng con ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Các tùy chọn trường enum bị trống trong khối bộ lọc ([#6706](https://github.com/nocobase/nocobase/pull/6706)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** Đảm bảo dữ liệu yêu cầu tùy chỉnh phải là JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) bởi @chenos

- **[Hành động: Xuất bản ghi Pro]**
  - Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. bởi @aaaaaajie

  - Nút xuất Pro mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]**
  - Thêm logic multer để tải lên phía máy chủ bởi @mytharcher

  - Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Sửa lỗi tải trước các trường liên kết cho bản ghi bởi @mytharcher
