---
title: "NocoBase v1.9.0-alpha.2: Hỗ trợ cấu hình mã xác thực độc lập cho ứng dụng con"
description: "Ghi chú phát hành của v1.9.0-alpha.2"
---

### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình secret xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher

- **[Quy trình làm việc: CC]** Thêm nút CC vào quy trình làm việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Thêm trình khởi tạo cho trigger bởi @mytharcher

### 🚀 Cải tiến

- **[Trường bộ sưu tập: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher

- **[Quy trình làm việc]**
  - Sử dụng ghi log thay vì ném lỗi khi thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher

  - Chuyển đổi toán hạng thành chuỗi trước khi so sánh chuỗi trong tính toán logic ([#7190](https://github.com/nocobase/nocobase/pull/7190)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu hóa kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe

- **[Trình quản lý đa ứng dụng]**
  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher

  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher

- **[Trường bộ sưu tập: Mã]** Thêm cài đặt thụt lề bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher

- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe

  - Bộ lọc thu gọn: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe

  - sự cố hiển thị cho các trường liên kết trong quy tắc liên kết ([#7220](https://github.com/nocobase/nocobase/pull/7220)) bởi @katherinehhh

  - gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh

  - lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh

  - Hành động cửa sổ bật lên: Hiển thị trang không đáp ứng mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe

  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe

  - Sửa lỗi các thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe

  - Hiển thị trường hộp kiểm không chính xác trong bộ sưu tập trường liên kết trong biểu mẫu ([#7176](https://github.com/nocobase/nocobase/pull/7176)) bởi @zhangzhonghe

  - Sửa lỗi không thể mở cửa sổ bật lên khi nhấp vào nút ([#7180](https://github.com/nocobase/nocobase/pull/7180)) bởi @zhangzhonghe

- **[acl]** Sửa lỗi khi xóa vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie

- **[database]** Sửa lỗi các trường của view không được hiển thị trong các khối. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) bởi @aaaaaajie

- **[Trình quản lý đa ứng dụng]** Sửa tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher

- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe

- **[Hành động: Yêu cầu tùy chỉnh]** sự cố phân tích biến trong URL trong quá trình điều hướng tuyến đường sau khi yêu cầu tùy chỉnh thành công ([#7186](https://github.com/nocobase/nocobase/pull/7186)) bởi @katherinehhh

- **[Khối: Kanban]** sửa lỗi giao diện bảng con trong Kanban và thêm hỗ trợ cài đặt độ rộng cột Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) bởi @katherinehhh

- **[Quy trình làm việc: Nút thủ công]** Sửa lỗi ném ra khi sử dụng biến ([#7177](https://github.com/nocobase/nocobase/pull/7177)) bởi @mytharcher

- **[In mẫu]** thêm tập lệnh di chuyển vào trường rootDataType bởi @jiannx

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi liên kết khi gửi phê duyệt bởi @mytharcher

  - Sửa lỗi ngoại lệ khi xóa bản ghi bởi @mytharcher

  - Sửa lỗi nhánh đã phê duyệt không chạy khi không có người được chỉ định bởi @mytharcher

  - Để tránh lỗi khi người dùng không tồn tại bởi @mytharcher

  - Sửa lỗi khối và liên kết bởi @mytharcher

  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher

  - Tải lại liên kết trên bản ghi bởi @mytharcher
