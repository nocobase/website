---
title: "NocoBase v1.9.0-beta.5: Hỗ trợ cấu hình giới hạn kích thước nội dung yêu cầu qua biến môi trường"
description: "Ghi chú phát hành của v1.9.0-beta.5"
---

### 🎉 Tính năng mới

- **[server]** Hỗ trợ cấu hình giới hạn kích thước body request qua biến môi trường ([#7273](https://github.com/nocobase/nocobase/pull/7273)) bởi @aaaaaajie

- **[Workflow: Node song song]** Thêm chế độ "All settled" cho node song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher

- **[Auth: SAML 2.0]** Hỗ trợ tự động chuyển hướng đến URL SSO khi người dùng chưa được xác thực bởi @2013xile

- **[Redis queue adapter]** Thêm adapter Redis cho hàng đợi sự kiện bởi @mytharcher

- **[Workflow: node tính toán ngày tháng]** Hỗ trợ chạy thử node bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Cho phép hàng đợi bộ nhớ đồng thời khả dụng khi các mục đang xử lý chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher

- **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie

- **[client]** Color Picker: Thêm bốn màu được đề xuất ([#7226](https://github.com/nocobase/nocobase/pull/7226)) bởi @zhangzhonghe

- **[Tích hợp AI]** Loại bỏ `await` khi gọi `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) bởi @mytharcher

- **[Workflow: Node thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe

- **[Workflow]**
  - Thêm hằng số kiểu json cho biến kiểm tra ([#7274](https://github.com/nocobase/nocobase/pull/7274)) bởi @mytharcher

  - Sử dụng ghi log thay vì ném lỗi khi thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher

  - Làm cho so sánh tương thích với các giá trị ngày tháng ([#7237](https://github.com/nocobase/nocobase/pull/7237)) bởi @mytharcher

- **[Trường collection: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher

- **[Redis queue adapter]** Cho phép hàng đợi đồng thời khả dụng khi các mục đang xử lý chưa đầy cho adapter Redis bởi @mytharcher

- **[Workflow: Tính toán JSON]** Làm cho node truy vấn JSON có thể kiểm tra được bởi @mytharcher

- **[Workflow: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - tìm kiếm mờ không hoạt động trong trường liên kết chọn khi sử dụng công thức làm trường tiêu đề ([#7280](https://github.com/nocobase/nocobase/pull/7280)) bởi @katherinehhh

  - thiếu biến đối tượng hiện tại trong quy tắc liên kết bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh

  - Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe

  - Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie

  - Cài đặt trường tiêu đề của bộ chọn dữ liệu không có hiệu lực ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe

  - Tránh chọn các trường không phải liên kết trong appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) bởi @mytharcher

  - Khi xóa menu, dữ liệu tương ứng trong bảng uiSchemas không bị xóa ([#7232](https://github.com/nocobase/nocobase/pull/7232)) bởi @zhangzhonghe

  - quy tắc kiểu không hoạt động trên cột hành động của bảng ([#7225](https://github.com/nocobase/nocobase/pull/7225)) bởi @katherinehhh

  - vấn đề hiển thị khi các biến ngày tháng không được dùng nữa được sử dụng trong trường ngày tháng của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh

  - vấn đề hiển thị cho các trường liên kết trong quy tắc liên kết ([#7220](https://github.com/nocobase/nocobase/pull/7220)) bởi @katherinehhh

  - Sửa lỗi: Can't resolve 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) bởi @zhangzhonghe

- **[database]**
  - Giải quyết lỗi phân trang đơn giản tự động do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie

  - Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie

  - Sửa lỗi khi xuất tập dữ liệu lớn từ PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie

  - Sửa lỗi khi bật phân trang đơn giản cho các bảng nguồn dữ liệu ngoài ([#7222](https://github.com/nocobase/nocobase/pull/7222)) bởi @aaaaaajie

- **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con ngăn đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile

- **[Workflow]** Sửa phiên bản sai của dependency ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher

- **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình collection ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie

- **[Trường collection: Sắp xếp]** thiếu lựa chọn trường sắp xếp khi sao chép bản ghi ([#7116](https://github.com/nocobase/nocobase/pull/7116)) bởi @katherinehhh

- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình collection bởi @aaaaaajie

- **[Workflow: Luồng con]** Sửa lỗi xảy ra khi tín hiệu thu hồi đến nhưng quá trình thực thi đang chờ không nằm trên instance hiện tại bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi nhiều cấp độ liên kết khi gửi phê duyệt bởi @mytharcher

  - URL của nút Liên kết trỏ đến một popup trên trang hiện tại, nhưng nhấp vào nó lại hiển thị lỗi 404 bởi @zhangzhonghe

  - Sửa lỗi liên kết khi gửi phê duyệt bởi @mytharcher

  - Thêm khả năng chịu lỗi cho phê duyệt đã bị xóa trong danh sách bản ghi bởi @mytharcher

  - Sửa lỗi ngoại lệ khi xóa bản ghi bởi @mytharcher

- **[Trình quản lý Email]** mối quan hệ giữa messages và labels collection bị ngoại lệ dưới mysql bởi @jiannx
