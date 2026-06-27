---
title: "NocoBase v1.9.0-beta.3: Hỗ trợ cấu hình mã xác thực độc lập cho ứng dụng con"
description: "Ghi chú phát hành của v1.9.0-beta.3"
---

### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình secret xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher

- **[Quy trình làm việc: CC]** Thêm nút CC vào quy trình làm việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Thêm trình khởi tạo cho trigger bởi @mytharcher

### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe

- **[Quy trình làm việc]** Chuyển đổi toán hạng thành chuỗi trước khi so sánh chuỗi trong tính toán logic ([#7190](https://github.com/nocobase/nocobase/pull/7190)) bởi @mytharcher

- **[Trình quản lý đa ứng dụng]**
  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher

  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher

- **[Trường bộ sưu tập: Mã]** Thêm cài đặt thụt lề bởi @mytharcher

- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe

  - lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp Kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh

  - Thu gọn bộ lọc: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe

  - gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh

  - Hành động cửa sổ bật lên: Hiển thị trang không như mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe

  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe

  - Sửa lỗi thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe

- **[acl]** Sửa lỗi khi xóa vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie

- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe

- **[Trình quản lý đa ứng dụng]** Sửa tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher

- **[Hành động: Yêu cầu tùy chỉnh]** vấn đề phân tích biến trong URL khi điều hướng tuyến đường sau khi yêu cầu tùy chỉnh thành công ([#7186](https://github.com/nocobase/nocobase/pull/7186)) bởi @katherinehhh

- **[Khối: Kanban]** sửa lỗi giao diện bảng con trong Kanban và thêm hỗ trợ cài đặt độ rộng cột Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) bởi @katherinehhh

- **[Quy trình làm việc: Phê duyệt]**
  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher

  - Sửa lỗi khối và liên kết bởi @mytharcher

  - Tải lại liên kết trên bản ghi bởi @mytharcher

  - Để tránh lỗi khi người dùng không tồn tại bởi @mytharcher
