---
title: "NocoBase v1.9.0-alpha.4: Hỗ trợ cấu hình giới hạn kích thước nội dung yêu cầu qua biến môi trường"
description: "Ghi chú phát hành của v1.9.0-alpha.4"
---

### 🎉 Tính năng mới

- **[server]** Hỗ trợ cấu hình giới hạn kích thước body request qua biến môi trường ([#7273](https://github.com/nocobase/nocobase/pull/7273)) bởi @aaaaaajie
- **[client]** Khối bảng hỗ trợ thêm nút 'Cài đặt cột' để cấu hình thứ tự và khả năng hiển thị của cột ([#7204](https://github.com/nocobase/nocobase/pull/7204)) bởi @kerwin612
- **[Trình xem tệp Office]** Hỗ trợ xem trước tệp Office qua Microsoft live preview ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]**

  - hỗ trợ đọc bảng từ nguồn dữ liệu chính ([#7238](https://github.com/nocobase/nocobase/pull/7238)) bởi @aaaaaajie
- **[Luồng công việc: Nút song song]** Thêm chế độ "Tất cả đã hoàn thành" cho nút song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher
- **[Xác thực: SAML 2.0]** Hỗ trợ tự động chuyển hướng đến URL SSO khi người dùng chưa được xác thực bởi @2013xile
- **[Bộ điều hợp hàng đợi Redis]** Thêm bộ điều hợp Redis cho hàng đợi sự kiện bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612
- **[server]** Làm cho hàng đợi bộ nhớ đồng thời khả dụng khi xử lý các mục chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher
- **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie
- **[Thông báo: Tin nhắn trong ứng dụng]** Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher
- **[Luồng công việc]**

  - Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher
  - Thêm hằng số kiểu json cho biến kiểm tra ([#7274](https://github.com/nocobase/nocobase/pull/7274)) bởi @mytharcher
- **[Tích hợp AI]** Xóa `await` khi gọi `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) bởi @mytharcher
- **[Luồng công việc: Nút thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe
- **[Luồng công việc: Tính toán JSON]** Làm cho nút truy vấn JSON có thể kiểm tra được bởi @mytharcher
- **[Bộ điều hợp hàng đợi Redis]** Làm cho hàng đợi đồng thời khả dụng khi xử lý các mục chưa đầy cho bộ điều hợp Redis bởi @mytharcher
- **[Xác thực: DingTalk]** Trong ứng dụng DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị “Đang tải…” bởi @2013xile

### 🐛 Sửa lỗi

- **[utils]** Xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh
- **[client]**

  - Sửa lỗi xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher
  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher
  - Sửa lỗi không thể mở rộng bảng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe
  - Sửa hành vi không mong muốn trong sắp xếp kéo thả hàng bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu
  - Sửa lỗi vòng lặp vô hạn khi phân tích giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe
  - Sự cố hiển thị trường ngày trong cửa sổ bật lên chọn dữ liệu trường liên kết của biểu mẫu lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh
  - Tìm kiếm mờ không hoạt động trong trường liên kết chọn khi sử dụng công thức làm trường tiêu đề ([#7280](https://github.com/nocobase/nocobase/pull/7280)) bởi @katherinehhh
  - Thiếu biến đối tượng hiện tại trong quy tắc liên kết bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh
  - Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie
  - Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe
  - Sự cố hiển thị khi các biến ngày không còn được dùng được sử dụng trong trường ngày của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh
  - Cài đặt trường tiêu đề của bộ chọn dữ liệu không hợp lệ ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe
- **[database]**

  - Giải quyết lỗi phân trang đơn giản tự động do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie
  - Sửa lỗi khi xuất tập dữ liệu lớn từ PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie
  - Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie
- **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con ngăn đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher
- **[Luồng công việc]**

  - Sửa kết quả `undefined` khi bộ xử lý thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher
  - Sửa lỗi BigInt ID trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher
  - Sửa phiên bản sai của phụ thuộc ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher
- **[Luồng công việc: Nút yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường quan hệ lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie
- **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: Oracle ngoài]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập bởi @aaaaaajie
- **[Nguồn dữ liệu: SQL Server ngoài]** Sửa định dạng lưu trữ không nhất quán cho các trường datetime (không có múi giờ) MSSQL từ nguồn dữ liệu ngoài bởi @aaaaaajie
- **[Luồng công việc: Luồng con]** Sửa lỗi luồng bị tạm dừng bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi xảy ra từ bộ chọn người được gán bên trong nguồn dữ liệu ngoài bởi @mytharcher
  - URL của nút Liên kết trỏ đến một cửa sổ bật lên trên trang hiện tại, nhưng nhấp vào nó hiển thị lỗi 404 bởi @zhangzhonghe
- **[Trình quản lý email]**

  - thêm trường rawId để tối ưu hiệu suất bởi @jiannx
  - thuộc tính ref trong html gây ra ngoại lệ hiển thị bởi @jiannx
  - mối quan hệ messages và labels collection bị ngoại lệ dưới mysql bởi @jiannx
