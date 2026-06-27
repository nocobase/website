---
title: "NocoBase v2.1.0-alpha.14: Thêm khả năng gọi tác nhân phụ cho nhân viên AI"
description: "Ghi chú phát hành của v2.1.0-alpha.14"
---

### 🎉 Tính năng mới

- **[Nhân viên AI]** Thêm khả năng gọi các tác nhân phụ cho nhân viên AI ([#8935](https://github.com/nocobase/nocobase/pull/8935)) bởi @cgyrock

- **[AI: MCP server]** Cung cấp API truy vấn bộ sưu tập dữ liệu chung, có thể gọi qua MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) bởi @2013xile

### 🚀 Cải tiến

- **[undefined]**
  - Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765

  - Giảm nhiễu log khi khởi động máy chủ bằng cách im lặng các lệnh giải nén cho LibreOffice và Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) bởi @Rishabh1925

- **[Công cụ luồng]** Thêm các api mới cho việc xây dựng giao diện. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) bởi @gchust

- **[Workflow]** Thay đổi kích thước công tắc bật/tắt thành nhỏ ([#9010](https://github.com/nocobase/nocobase/pull/9010)) bởi @mytharcher

- **[Nhân viên AI]** Tối ưu hóa lời nhắc cho deepseek khi xử lý các loại tệp không được hỗ trợ ([#9003](https://github.com/nocobase/nocobase/pull/9003)) bởi @cgyrock

- **[Hành động: Yêu cầu tùy chỉnh]** thêm các mô hình hành động cho yêu cầu tùy chỉnh ([#8890](https://github.com/nocobase/nocobase/pull/8890)) bởi @jiannx

- **[Workflow: JavaScript]** Thêm `isolated-vm` làm công cụ thực thi JavaScript mặc định cho nút JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) bởi @mytharcher
Tham khảo: [Nút JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 Sửa lỗi

- **[máy chủ]**
  - Thêm kiểm tra phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher

  - Hỗ trợ lấy ứng dụng đích theo tên máy chủ ([#8978](https://github.com/nocobase/nocobase/pull/8978)) bởi @2013xile

- **[máy khách]**
  - Trường quan hệ của biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx

  - Biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx

  - Đã sửa lỗi bản sao của các trường liên kết trong bảng không được hiển thị chính xác trong lần hiển thị đầu tiên. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) bởi @jiannx

  - Đã sửa thông báo xác nhận thứ cấp không chính xác khi đóng cửa sổ bật lên nhiều cấp sau khi sửa đổi dữ liệu biểu mẫu. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) bởi @gchust

  - Sửa lỗi khoảng trắng trong biểu thức biến khiến nhãn không hiển thị ([#8988](https://github.com/nocobase/nocobase/pull/8988)) bởi @mytharcher

- **[công cụ luồng]**
  - Sửa menu cài đặt bị cắt trong cửa sổ bật lên ([#9005](https://github.com/nocobase/nocobase/pull/9005)) bởi @gchust

  - Đã sửa lỗi không thể chọn mục menu khi chiều rộng thành phần giao diện ở trạng thái cấu hình quá nhỏ. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) bởi @gchust

  - Thêm đoạn mã js cho mục biểu mẫu cài đặt và mục chi tiết ([#8974](https://github.com/nocobase/nocobase/pull/8974)) bởi @jiannx

- **[Workflow: nút gửi thư]** Sửa xác thực cho các trường biến ([#9047](https://github.com/nocobase/nocobase/pull/9047)) bởi @mytharcher

- **[Trường bộ sưu tập: Sắp xếp]** fix(field-sort): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765

- **[Nhân viên AI]**
  - Sửa lỗi nhân viên AI không thể sử dụng kỹ năng ([#9023](https://github.com/nocobase/nocobase/pull/9023)) bởi @cgyrock

  - Sửa lỗi LLM vẫn cố gắng tải kỹ năng sau khi công cụ getSkill bị vô hiệu hóa ([#9013](https://github.com/nocobase/nocobase/pull/9013)) bởi @cgyrock

  - Đã sửa lỗi hành vi tìm kiếm web bất thường khi sử dụng LLM Qwen ([#9012](https://github.com/nocobase/nocobase/pull/9012)) bởi @cgyrock

  - Thêm xác minh quyền sở hữu vào API hội thoại AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) bởi @cgyrock

- **[Khối: GridCard]** Đã sửa lỗi nút không được làm mới khi làm mới thẻ lưới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx

- **[Workflow]**
  - Sửa quy tắc xác thực không chính xác của lệnh điều kiện ([#9017](https://github.com/nocobase/nocobase/pull/9017)) bởi @mytharcher

  - Sửa lỗi không thể đặt chế độ của trình kích hoạt bộ sưu tập thành "tạo hoặc cập nhật" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) bởi @mytharcher

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa danh sách trắng hành động cho các bản cập nhật tin nhắn trong ứng dụng để ngăn chặn các bản cập nhật trái phép bởi người không phải chủ sở hữu. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Tối ưu hóa đặt tên công cụ MCP và giảm các phản hồi API dư thừa để tránh tiêu thụ quá mức ngữ cảnh hội thoại AI ([#9000](https://github.com/nocobase/nocobase/pull/9000)) bởi @2013xile

- **[Workflow: nút SQL]** Sửa lỗi bảo mật trong nút SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Khi sử dụng bộ lọc dựa trên biến, biểu đồ không giải quyết chính xác giá trị biến trong lần hiển thị ban đầu ([#8964](https://github.com/nocobase/nocobase/pull/8964)) bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher

  - Thêm khả năng chịu lỗi cho trường hợp không có `latestRound` bởi @mytharcher

  - Sửa giới hạn phiên bản của các bản di chuyển cũ để tránh lỗi khi bắt đầu trong triển khai phiên bản mới nhất bởi @mytharcher

- **[Trình quản lý email]** không hiển thị xác nhận đóng sau khi email được gửi bởi @jiannx
