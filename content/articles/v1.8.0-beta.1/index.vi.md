---
title: "NocoBase v1.8.0-beta.1: Thêm quản lý danh mục quy trình làm việc"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.1"
---

### 🎉 Tính năng mới

- **[Chưa xác định]** Thêm plugin "Nút sao chép đầu vào" mới cho trường văn bản một dòng ([#6894](https://github.com/nocobase/nocobase/pull/6894)) bởi @kerwin612

- **[Workflow]** Thêm tính năng quản lý danh mục workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hỗ trợ cấu hình liên kết menu có mở trong cửa sổ mới hay không ([#6918](https://github.com/nocobase/nocobase/pull/6918)) bởi @katherinehhh

- **[Action: Import records Pro]** Tối ưu hiệu suất nhập xlsx bởi @aaaaaajie

- **[Auth: OIDC]** Bỏ qua phân biệt chữ hoa chữ thường khi khớp người dùng qua email bởi @2013xile

- **[Workflow: Approval]** Import bộ sưu tập workflow từ plugin workflow để tránh trùng lặp bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Các trường và hành động chỉ có hiệu lực sau khi làm mới trang ([#6977](https://github.com/nocobase/nocobase/pull/6977)) bởi @zhangzhonghe

  - Sửa lỗi trường không hiển thị trong block template do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe

  - Sửa lỗi block được tạo trong popup có collection không chính xác ([#6961](https://github.com/nocobase/nocobase/pull/6961)) bởi @zhangzhonghe

  - Không thể chọn biến khi đặt giá trị mặc định cho trường liên kết ([#6974](https://github.com/nocobase/nocobase/pull/6974)) bởi @zhangzhonghe

  - Sửa lỗi giá trị trường văn bản một dòng hiển thị dưới dạng mảng trong chế độ dễ đọc ([#6968](https://github.com/nocobase/nocobase/pull/6968)) bởi @zhangzhonghe

  - Không thể mở rộng trường collection liên kết từ nguồn dữ liệu bên ngoài trong phạm vi bảng dữ liệu vai trò ([#6958](https://github.com/nocobase/nocobase/pull/6958)) bởi @katherinehhh

  - Sửa lỗi tùy chọn 'Ellipsis overflow content' không hiệu quả đối với trường quan hệ ([#6967](https://github.com/nocobase/nocobase/pull/6967)) bởi @zhangzhonghe

  - Sửa lỗi giá trị mặc định của form lọc không hợp lệ trong trang con ([#6960](https://github.com/nocobase/nocobase/pull/6960)) bởi @zhangzhonghe

  - Lỗi popup chọn trường liên kết đóng lại khi nhập ký tự đầu tiên khi thêm dữ liệu mới ([#6971](https://github.com/nocobase/nocobase/pull/6971)) bởi @katherinehhh

  - Trường liên kết trong bảng con kích hoạt yêu cầu khi biến lặp có giá trị rỗng ([#6969](https://github.com/nocobase/nocobase/pull/6969)) bởi @katherinehhh

  - Sửa thứ tự trường trong danh sách thả xuống của nút lọc ([#6962](https://github.com/nocobase/nocobase/pull/6962)) bởi @zhangzhonghe

  - Dữ liệu quy tắc xác thực form bị mất khi thu gọn panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) bởi @katherinehhh

  - Giá trị đã chọn bị đặt lại khi cập nhật tùy chọn thả xuống đa lựa chọn qua quy tắc liên kết ([#6953](https://github.com/nocobase/nocobase/pull/6953)) bởi @katherinehhh

  - Biến liên kết bảng con lấy dữ liệu liên kết khi xóa thay vì sử dụng giá trị form ([#6963](https://github.com/nocobase/nocobase/pull/6963)) bởi @katherinehhh

  - Phân trang dữ liệu thả xuống trường liên kết với kích thước trang là 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) bởi @katherinehhh

  - Bộ chọn ngày không được làm mới sau khi chuyển từ "nằm trong khoảng" về "là" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) bởi @katherinehhh

  - Vị trí tô sáng không chính xác khi kéo hàng trong bảng ([#6952](https://github.com/nocobase/nocobase/pull/6952)) bởi @chenos

- **[Authentication]** Vấn đề hiệu suất do dọn dẹp token hết hạn ([#6981](https://github.com/nocobase/nocobase/pull/6981)) bởi @2013xile

- **[Workflow]** Sửa lỗi xảy ra khi lọc workflow ([#6978](https://github.com/nocobase/nocobase/pull/6978)) bởi @mytharcher

- **[File manager]** Sửa cấu hình timeout Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) bởi @mytharcher

- **[Theme editor]** Ẩn tùy chọn chuyển đổi theme và sửa kiểu popup ([#6964](https://github.com/nocobase/nocobase/pull/6964)) bởi @zhangzhonghe

- **[Workflow: Custom action event]** Sửa lỗi initializer cho workbench bị thiếu bởi @mytharcher

- **[Auth: OIDC]** Văn bản nút đăng nhập không được bản địa hóa bởi @2013xile

- **[Workflow: Approval]** Sửa lỗi khi phạm vi người được gán truy vấn với điều kiện liên kết bởi @mytharcher
