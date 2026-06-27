---
title: "NocoBase v1.6.22: Nâng cấp phụ thuộc và loại bỏ hỗ trợ SQLite"
description: "Ghi chú phát hành phiên bản v1.6.22"
---

### 🚀 Cải tiến

- **[create-nocobase-app]** Nâng cấp các phụ thuộc và loại bỏ hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos

- **[Quản lý tệp]** Công khai API tiện ích ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher

- **[Quy trình làm việc]** Thêm các kiểu ngày tháng vào tập hợp kiểu biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Vấn đề khó xóa biểu tượng thanh điều hướng trên cùng trên thiết bị di động ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe

  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe

  - Vấn đề chuyển đổi picker trong trường ngày tháng của nút lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh

  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của quy trình làm việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe

  - Thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh

  - Nút xuất hiện khi không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh

  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không nên ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe

- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos

- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher

- **[Quy trình làm việc]** Sửa lỗi xảy ra khi thực thi sự kiện theo lịch trong quy trình con ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher

- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]** Thêm logic multer cho tải lên phía máy chủ bởi @mytharcher
