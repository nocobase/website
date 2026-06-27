---
title: "Cập nhật hàng tuần｜Thêm biến JS vào luồng sự kiện"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 27 tháng 3 đến ngày 2 tháng 4 năm 2026."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Ngày phát hành: 2026-04-01*

### 🚀 Cải tiến

- **[AI employees]** Tối ưu hóa prompt cho deepseek khi xử lý các loại tệp không được hỗ trợ ([#9003](https://github.com/nocobase/nocobase/pull/9003)) bởi @cgyrock
- **[Workflow]** Thay đổi kích thước nút bật/tắt thành nhỏ ([#9010](https://github.com/nocobase/nocobase/pull/9010)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi bản sao của các trường liên quan trong bảng không được hiển thị chính xác trong lần hiển thị đầu tiên. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) bởi @jiannx
- **[flow-engine]** Sửa lỗi menu cài đặt bị cắt trong cửa sổ popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) bởi @gchust
- **[Notification: In-app message]** Sửa danh sách trắng hành động cho các bản cập nhật thông báo trong ứng dụng để ngăn chặn các bản cập nhật trái phép bởi người không phải chủ sở hữu. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) bởi @mytharcher
- **[AI employees]** Đã sửa lỗi hành vi tìm kiếm web bất thường khi sử dụng Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) bởi @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Ngày phát hành: 2026-03-30*

### 🚀 Cải tiến

- **[Workflow: JavaScript]** Thêm `isolated-vm` làm công cụ thực thi JavaScript mặc định cho nút JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) bởi @mytharcher
  Tham khảo: [Nút JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi thông báo xác nhận thứ cấp không chính xác khi đóng popup nhiều cấp sau khi sửa đổi dữ liệu biểu mẫu. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) bởi @gchust
- **[Workflow: SQL node]** Sửa lỗi bảo mật trong nút SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) bởi @mytharcher
- **[AI employees]** Thêm xác minh quyền sở hữu vào API hội thoại AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) bởi @cgyrock
- **[Workflow: Approval]** Sửa giới hạn phiên bản của các bản di chuyển cũ để tránh lỗi khi khởi động trong bản triển khai phiên bản mới nhất bởi @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Ngày phát hành: 2026-03-30*

### 🚀 Cải tiến

- **[undefined]** Giảm nhiễu log khi khởi động máy chủ bằng cách im lặng các lệnh giải nén cho LibreOffice và Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) bởi @Rishabh1925

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi khoảng trắng trong biểu thức biến khiến nhãn không hiển thị ([#8988](https://github.com/nocobase/nocobase/pull/8988)) bởi @mytharcher
- **[flow-engine]** Đã sửa lỗi không thể chọn mục menu khi chiều rộng thành phần UI ở trạng thái cấu hình quá nhỏ. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) bởi @gchust
- **[Data visualization]** Khi sử dụng bộ lọc dựa trên biến, biểu đồ không giải quyết chính xác giá trị biến trong lần hiển thị đầu tiên ([#8964](https://github.com/nocobase/nocobase/pull/8964)) bởi @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Ngày phát hành: 2026-03-27*

### 🐛 Sửa lỗi

- **[Action: Import records]** Đã sửa lỗi nhập không thành công sau khi mở plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) bởi @jiannx
- **[Data visualization]** Đã sửa lỗi thống kê dữ liệu biểu đồ vai trò gốc bất thường sau khi bật plugin không gian ([#8969](https://github.com/nocobase/nocobase/pull/8969)) bởi @jiannx
- **[Workflow: JavaScript]** Sửa lỗi bảo mật ([#8967](https://github.com/nocobase/nocobase/pull/8967)) bởi @mytharcher
- **[AI employees]** Điều chỉnh khoảng cách giữa các thành phần thẻ công cụ trong Hội thoại AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) bởi @cgyrock
- **[Action: Export records]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp ([#8893](https://github.com/nocobase/nocobase/pull/8893)) bởi @jiannx
- **[Action: Import records Pro]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp bởi @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Ngày phát hành: 2026-03-26*

### 🚀 Cải tiến

- **[Workflow]** Thêm biến cho tham số kích thước trang ([#8951](https://github.com/nocobase/nocobase/pull/8951)) bởi @mytharcher
- **[Workflow: Subflow]** Thêm logic phòng thủ để tránh workflow bị treo khi xảy ra ngoại lệ bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi ngoại lệ khi thêm nút con vào bảng cây trong cửa sổ pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) bởi @jiannx
- **[server]** Tránh xử lý sync-message sau khi ứng dụng dừng ([#8940](https://github.com/nocobase/nocobase/pull/8940)) bởi @mytharcher
- **[Flow engine]** Xóa sự kiện cũ được sao chép từ kho lưu trữ uiSchema để tránh lỗi khi kích hoạt ([#8957](https://github.com/nocobase/nocobase/pull/8957)) bởi @mytharcher
- **[Authentication]** sửa acl để hỗ trợ các tham số lọc trạng thái tùy chỉnh ([#8918](https://github.com/nocobase/nocobase/pull/8918)) bởi @jiannx
- **[Email manager]** Đã sửa lỗi chữ ký bị ghi đè khi sử dụng mẫu bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Ngày phát hành: 2026-03-27*

### 🎉 Tính năng mới

- **[client]** Thêm biến JS vào luồng sự kiện ([#8938](https://github.com/nocobase/nocobase/pull/8938)) bởi @jiannx

### 🚀 Cải tiến

- **[client]** hỗ trợ thiết lập kiểu trường thông qua runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) bởi @jiannx
- **[flow-engine]** Cải thiện xác thực lược đồ cho api xây dựng ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) bởi @gchust
- **[Workflow: Pre-action event]** Thêm quy tắc xác thực cho trình kích hoạt và nút ([#8971](https://github.com/nocobase/nocobase/pull/8971)) bởi @mytharcher
- **[Workflow]** Thêm biến cho tham số kích thước trang ([#8951](https://github.com/nocobase/nocobase/pull/8951)) bởi @mytharcher
- **[Workflow: Webhook]** Thêm xác thực cho API tạo trình kích hoạt / nút bởi @mytharcher
- **[Workflow: Subflow]**

  - Thêm xác thực cho API tạo nút bởi @mytharcher
  - Thêm logic phòng thủ để tránh workflow bị treo khi xảy ra ngoại lệ bởi @mytharcher
- **[Workflow: Approval]** Thêm xác thực cho API trình kích hoạt / nút bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi ngoại lệ khi thêm nút con vào bảng cây trong cửa sổ pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) bởi @jiannx
- **[server]** Tránh xử lý sync-message sau khi ứng dụng dừng ([#8940](https://github.com/nocobase/nocobase/pull/8940)) bởi @mytharcher
- **[Action: Export records]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp ([#8893](https://github.com/nocobase/nocobase/pull/8893)) bởi @jiannx
- **[Data visualization]** Đã sửa lỗi thống kê dữ liệu biểu đồ vai trò gốc bất thường sau khi bật plugin không gian ([#8969](https://github.com/nocobase/nocobase/pull/8969)) bởi @jiannx
- **[Action: Import records]** Đã sửa lỗi nhập không thành công sau khi mở plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) bởi @jiannx
- **[Workflow: JavaScript]** Sửa lỗi bảo mật ([#8967](https://github.com/nocobase/nocobase/pull/8967)) bởi @mytharcher
- **[AI employees]** Điều chỉnh khoảng cách giữa các thành phần thẻ công cụ trong Hội thoại AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) bởi @cgyrock
- **[Flow engine]** Xóa sự kiện cũ được sao chép từ kho lưu trữ uiSchema để tránh lỗi khi kích hoạt ([#8957](https://github.com/nocobase/nocobase/pull/8957)) bởi @mytharcher
- **[Authentication]** sửa acl để hỗ trợ các tham số lọc trạng thái tùy chỉnh ([#8918](https://github.com/nocobase/nocobase/pull/8918)) bởi @jiannx
- **[Action: Import records Pro]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp bởi @jiannx
- **[Email manager]** Đã sửa lỗi chữ ký bị ghi đè khi sử dụng mẫu bởi @jiannx
