---
title: "NocoBase v1.9.0-beta.7: quy trình làm việc hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt"
description: "Ghi chú phát hành của v1.9.0-beta.7"
---

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Loại bỏ popover dấu ba chấm khỏi danh sách tệp ([#7479](https://github.com/nocobase/nocobase/pull/7479)) bởi @mytharcher

- **[server]** Sử dụng logger hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher

- **[database]** Tối ưu hóa truy vấn đếm API danh sách để giảm tiêu thụ tài nguyên. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) bởi @aaaaaajie

- **[Thông báo: Tin nhắn trong ứng dụng]** Hỗ trợ cấu hình thời gian trễ tự động đóng cho thông báo tin nhắn trong ứng dụng ([#7472](https://github.com/nocobase/nocobase/pull/7472)) bởi @mytharcher

- **[Workflow]**
  - Tối ưu hóa quy trình chuẩn bị workflow để hỗ trợ sử dụng dữ liệu nút đã được tải trước ([#7476](https://github.com/nocobase/nocobase/pull/7476)) bởi @mytharcher

  - Tối ưu hóa hiệu suất truy vấn để lấy các lần thực thi đang xếp hàng bằng cách sử dụng các trường và chỉ mục riêng biệt ([#7448](https://github.com/nocobase/nocobase/pull/7448)) bởi @mytharcher

  - Điều chỉnh API biến workflow để hỗ trợ cài đặt trước một danh sách biến bổ sung ([#7439](https://github.com/nocobase/nocobase/pull/7439)) bởi @mytharcher

- **[Workflow: nút thông báo]** Hỗ trợ kiểm tra nút thông báo ([#7470](https://github.com/nocobase/nocobase/pull/7470)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Hỗ trợ sử dụng các biến liên quan đến phê duyệt trong thông báo tùy chỉnh bởi @mytharcher

  - Hỗ trợ cập nhật trạng thái phê duyệt sau khi nút kết thúc kết thúc thực thi bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Kiểm tra 'không rỗng' không chính xác cho các trường số trong quy tắc liên kết ([#7477](https://github.com/nocobase/nocobase/pull/7477)) bởi @katherinehhh

  - Lỗi hiển thị trường liên kết khi chuyển sang thành phần thẻ trong khối biểu mẫu chỉnh sửa ([#7468](https://github.com/nocobase/nocobase/pull/7468)) bởi @katherinehhh

  - Trường readonly select/multiselect/date/richtext vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh

  - Vấn đề giới hạn thời gian khi ngày được chọn bằng minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) bởi @katherinehhh

  - Xác thực bắt buộc không hoạt động cho các trường tệp đính kèm trong bảng con ([#7431](https://github.com/nocobase/nocobase/pull/7431)) bởi @katherinehhh

  - Sửa lỗi trong một số trường hợp, chỉnh sửa bản ghi trong cửa sổ popup chọn bản ghi trên thiết bị di động gây ra lỗi ([#7444](https://github.com/nocobase/nocobase/pull/7444)) bởi @zhangzhonghe

- **[undefined]** Sửa lỗi lọc theo trường ngày tháng chỉ trong nguồn ngoài MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) bởi @aaaaaajie

- **[database]**
  - Sửa lỗi cú pháp MySQL xảy ra khi tải thêm tin nhắn trong ứng dụng. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) bởi @aaaaaajie

  - Sửa lỗi độ chính xác cho các trường Số đã xuất ([#7421](https://github.com/nocobase/nocobase/pull/7421)) bởi @aaaaaajie

- **[Thiết bị di động]** Trường ngày tháng trên thiết bị di động không có múi giờ hiển thị ngày giờ không chính xác ([#7473](https://github.com/nocobase/nocobase/pull/7473)) bởi @katherinehhh

- **[Biểu mẫu công khai]** Giá trị mặc định của trường biểu mẫu công khai không được áp dụng khi sử dụng biến ([#7467](https://github.com/nocobase/nocobase/pull/7467)) bởi @katherinehhh

- **[Bộ sưu tập: Cây]** Xóa các sự kiện cơ sở dữ liệu liên quan đến bộ sưu tập sau khi xóa bộ sưu tập dạng cây ([#7459](https://github.com/nocobase/nocobase/pull/7459)) bởi @2013xile

- **[Trình quản lý tệp]** Sửa lỗi khi chỉnh sửa trường `storage` trong bộ sưu tập tệp. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]**
  - Sửa lỗi số hàng hiển thị không chính xác khi nhập dữ liệu trùng lặp ([#7440](https://github.com/nocobase/nocobase/pull/7440)) bởi @aaaaaajie

  - Sửa lỗi nhập không thành công khi khóa chính của bảng là văn bản một dòng ([#7416](https://github.com/nocobase/nocobase/pull/7416)) bởi @aaaaaajie

- **[Workflow]**
  - Hoàn thiện các tùy chọn để tự động xóa trạng thái thực thi workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) bởi @mytharcher

  - Sửa lỗi cửa sổ popup chi tiết không hiển thị do cấu hình route không chính xác trong trung tâm tác vụ ([#7452](https://github.com/nocobase/nocobase/pull/7452)) bởi @mytharcher

  - Sửa các lỗi liên quan đến menu trên thiết bị di động trong các tác vụ workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) bởi @mytharcher

- **[Workflow: Nút song song]** Sửa lỗi xác định trạng thái không chính xác trong các nút nhánh song song dưới chế độ "Chạy tất cả nhánh" gây ra kết thúc sớm ([#7445](https://github.com/nocobase/nocobase/pull/7445)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kết quả cập nhật không mong muốn khi sử dụng khóa chính dạng chuỗi trong nhập xlsx. bởi @aaaaaajie

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi sự kiện hành động tùy chỉnh không thể thực thi thủ công ngay sau khi khởi tạo bởi @mytharcher

- **[Workflow: Luồng con]** Sửa lỗi quy trình con được tiếp tục và thực thi nhiều lần bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi văn bản trạng thái trong thông báo hoàn thành phê duyệt không được dịch bởi @mytharcher

  - Đối với người dùng không phải là người phê duyệt hiện tại, nút xem tương ứng trong bảng luồng quy trình sẽ không được hiển thị bởi @mytharcher

  - Thêm biến trạng thái cho các mẫu tùy chỉnh trong thông báo hoàn thành phê duyệt bởi @mytharcher
