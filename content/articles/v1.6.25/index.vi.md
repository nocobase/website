---
title: "NocoBase v1.6.25: Thêm CI phát hành cho bộ giấy phép"
description: "Ghi chú phát hành phiên bản v1.6.25"
---

### 🎉 Tính năng mới

- **[undefined]** Thêm CI phát hành cho bộ giấy phép ([#6786](https://github.com/nocobase/nocobase/pull/6786)) bởi @jiannx

- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

### 🚀 Cải tiến

- **[utils]** Tăng chiều cao danh sách trường của nút bộ lọc và sắp xếp/phân loại các trường ([#6779](https://github.com/nocobase/nocobase/pull/6779)) bởi @zhangzhonghe

- **[client]** Tối ưu hóa kiểu nút thêm trong bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh

- **[Quản lý tệp]** Thêm tùy chọn thời gian chờ OSS, mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher

- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile

- **[WeCom]** Ưu tiên email công ty hơn email cá nhân khi cập nhật email của người dùng bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Trong khối thu gọn, nhấp vào nút xóa trong hộp tìm kiếm trường quan hệ không được xóa phạm vi dữ liệu ([#6782](https://github.com/nocobase/nocobase/pull/6782)) bởi @zhangzhonghe

  - Trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh

  - Cấm di chuyển menu trước hoặc sau các tab trang ([#6777](https://github.com/nocobase/nocobase/pull/6777)) bởi @zhangzhonghe

  - Khối bảng hiển thị dữ liệu trùng lặp khi lọc ([#6792](https://github.com/nocobase/nocobase/pull/6792)) bởi @zhangzhonghe

  - Trong biểu mẫu bộ lọc, chuyển đổi toán tử trường rồi làm mới trang gây ra lỗi ([#6781](https://github.com/nocobase/nocobase/pull/6781)) bởi @zhangzhonghe

- **[database]**
  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher

  - Thêm unavailableActions vào bộ sưu tập SQL và bộ sưu tập view ([#6765](https://github.com/nocobase/nocobase/pull/6765)) bởi @katherinehhh

- **[create-nocobase-app]** Tạm thời sửa lỗi mariadb bằng cách hạ cấp xuống 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) bởi @chenos

- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile

- **[In mẫu]** Sửa: Hiệu chỉnh logic xác thực quyền để ngăn chặn các hành động trái phép. bởi @sheldon66

- **[Lưu trữ tệp: S3(Pro)]** Thời gian hết hạn URL truy cập không hợp lệ bởi @jiannx

- **[Khối: Cây]** Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống bởi @zhangzhonghe
