---
title: "Cập nhật hàng tuần｜Thêm công cụ tìm kiếm web dựa trên LLM cho nhân viên AI"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 3 tháng 4 đến ngày 9 tháng 4 năm 2026."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Ngày phát hành: 2026-04-09*

### 🎉 Tính năng mới

- **[Trình quản lý di chuyển]** hỗ trợ lệnh di chuyển bởi @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Ngày phát hành: 2026-04-08*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Thêm công cụ tìm kiếm web dựa trên LLM cho nhân viên AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi thông báo xác nhận thay đổi chưa lưu không chính xác xuất hiện cho hành động chỉnh sửa hàng loạt ([#9054](https://github.com/nocobase/nocobase/pull/9054)) bởi @gchust
  - Đã sửa lỗi cửa sổ popup xác nhận thứ cấp không chính xác xuất hiện khi gửi biểu mẫu sau khi tạo bản ghi qua bảng con dạng popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) bởi @gchust
- **[data-source-manager]** Đã sửa lỗi một số loại trường không được cập nhật chính xác sau khi đồng bộ trường từ cơ sở dữ liệu ([#9046](https://github.com/nocobase/nocobase/pull/9046)) bởi @2013xile
- **[Nhân viên AI]** Sửa lỗi tải lên tài liệu nhân viên AI bị lỗi khi truy cập đường dẫn con với APP_PUBLIC_PATH được cấu hình. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) bởi @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Ngày phát hành: 2026-04-04*

### 🚀 Cải tiến

- **[undefined]** Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765

### 🐛 Sửa lỗi

- **[client]**

  - trường quan hệ trong biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx
  - biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx
  - Đã sửa lỗi ctx.request không thể ghi đè header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust
- **[server]** Thêm kiểm tra trạng thái phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher
- **[Nhân viên AI]**

  - Đã sửa lỗi khi sử dụng mô hình deepseek hoặc minmax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock
  - Đã sửa lỗi hủy quá trình suy luận của nhân viên AI khiến dịch vụ bị sập ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Làm sạch kết quả nút yêu cầu quy trình làm việc để tránh lộ cấu hình yêu cầu, đặt mặc định cho các nút mới chỉ trả về dữ liệu phản hồi và thêm ghi log gỡ lỗi cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher
- **[Trường bộ sưu tập: Sắp xếp]** sửa(lĩnh vực-sắp xếp): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765
- **[Khối: Thẻ lưới]** Đã sửa lỗi nút không được làm mới khi thẻ lưới được làm mới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx
- **[Quy trình làm việc: Phê duyệt]**

  - Thêm khả năng chịu lỗi khi quy trình làm việc bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Thêm khả năng chịu lỗi cho trường hợp không có `latestRound` bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Ngày phát hành: 2026-04-09*

### 🎉 Tính năng mới

- **[Trình quản lý di chuyển]** hỗ trợ lệnh di chuyển bởi @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Ngày phát hành: 2026-04-08*

### 🎉 Tính năng mới

- **[client]**

  - thêm biến js vào luồng sự kiện ([#8938](https://github.com/nocobase/nocobase/pull/8938)) bởi @jiannx
  - thêm hành động mục JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) bởi @jiannx
- **[Nhân viên AI]** Thêm công cụ tìm kiếm web dựa trên LLM cho nhân viên AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**

  - Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765
  - Giảm nhiễu log khi khởi động máy chủ bằng cách im lặng các lệnh giải nén cho LibreOffice và Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) bởi @Rishabh1925
- **[client]**

  - hỗ trợ thiết lập kiểu trường thông qua runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) bởi @jiannx
  - Tối ưu hóa bố cục ngang của các hành động biểu mẫu ([#8869](https://github.com/nocobase/nocobase/pull/8869)) bởi @jiannx
- **[Quy trình làm việc: JavaScript]** Thêm `isolated-vm` làm công cụ thực thi JavaScript mặc định cho nút JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) bởi @mytharcher
  Tham khảo: [Nút JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Quy trình làm việc]**

  - Thay đổi kích thước công tắc bật/tắt thành nhỏ ([#9010](https://github.com/nocobase/nocobase/pull/9010)) bởi @mytharcher
  - Thêm biến cho tham số kích thước trang ([#8951](https://github.com/nocobase/nocobase/pull/8951)) bởi @mytharcher
- **[Nhân viên AI]** Tối ưu hóa lời nhắc cho deepseek khi xử lý các loại tệp không được hỗ trợ ([#9003](https://github.com/nocobase/nocobase/pull/9003)) bởi @cgyrock
- **[Hành động: Yêu cầu tùy chỉnh]** thêm mô hình hành động cho yêu cầu tùy chỉnh ([#8890](https://github.com/nocobase/nocobase/pull/8890)) bởi @jiannx
- **[Trường bộ sưu tập: Phân chia hành chính Trung Quốc]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) bởi @jiannx
- **[Quy trình làm việc: Quy trình con]** Thêm logic phòng thủ để tránh quy trình làm việc bị treo khi xảy ra ngoại lệ bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi trường JSON gây ra vấn đề hiệu suất khi tải danh sách bản ghi phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi thông báo xác nhận thay đổi chưa lưu không chính xác xuất hiện cho hành động chỉnh sửa hàng loạt ([#9054](https://github.com/nocobase/nocobase/pull/9054)) bởi @gchust
  - Đã sửa lỗi cửa sổ popup xác nhận thứ cấp không chính xác xuất hiện khi gửi biểu mẫu sau khi tạo bản ghi qua bảng con dạng popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) bởi @gchust
  - Đã sửa lỗi ctx.request không thể ghi đè header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust
  - trường quan hệ trong biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx
  - biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx
  - Đã sửa lỗi bản sao của các trường liên quan trong bảng không được hiển thị chính xác trong lần hiển thị đầu tiên. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) bởi @jiannx
  - Đã sửa lỗi thông báo xác nhận thứ cấp không chính xác khi đóng popup nhiều cấp sau khi sửa đổi dữ liệu biểu mẫu. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) bởi @gchust
  - Sửa lỗi khoảng trắng trong biểu thức biến khiến nhãn không hiển thị ([#8988](https://github.com/nocobase/nocobase/pull/8988)) bởi @mytharcher
  - Đã sửa lỗi ngoại lệ khi thêm nút con vào bảng cây trong cửa sổ pop-up ([#8872](https://github.com/nocobase/nocobase/pull/8872)) bởi @jiannx
- **[data-source-manager]** Đã sửa lỗi một số loại trường không được cập nhật chính xác sau khi đồng bộ trường từ cơ sở dữ liệu ([#9046](https://github.com/nocobase/nocobase/pull/9046)) bởi @2013xile
- **[server]**

  - Thêm kiểm tra trạng thái phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher
  - Tránh xử lý sync-message sau khi ứng dụng dừng ([#8940](https://github.com/nocobase/nocobase/pull/8940)) bởi @mytharcher
  - Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) bởi @mytharcher
- **[flow-engine]**

  - Sửa lỗi menu cài đặt bị cắt trong popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) bởi @gchust
  - Đã sửa lỗi không thể chọn mục menu khi chiều rộng thành phần UI ở trạng thái cấu hình quá nhỏ. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) bởi @gchust
  - Thêm đoạn mã js để thiết lập mục biểu mẫu và mục chi tiết ([#8974](https://github.com/nocobase/nocobase/pull/8974)) bởi @jiannx
  - Đồng bộ trạng thái với cấu hình trường khi trường biểu mẫu bị xóa ([#8857](https://github.com/nocobase/nocobase/pull/8857)) bởi @jiannx
- **[database]** Sử dụng cảnh báo thay vì lỗi khi bất kỳ tham số appends nào không hợp lệ ([#8923](https://github.com/nocobase/nocobase/pull/8923)) bởi @mytharcher
- **[resourcer]** Sửa lỗi nguồn dữ liệu bên ngoài không tải chính xác. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) bởi @2013xile
- **[Nhân viên AI]**

  - Sửa lỗi tải lên tài liệu nhân viên AI bị lỗi khi truy cập đường dẫn con với APP_PUBLIC_PATH được cấu hình. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) bởi @cgyrock
  - Đã sửa lỗi khi sử dụng mô hình deepseek hoặc minmax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock
  - Đã sửa lỗi hủy quá trình suy luận của nhân viên AI khiến dịch vụ bị sập ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock
  - Đã sửa lỗi hành vi tìm kiếm web bất thường khi sử dụng mô hình Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) bởi @cgyrock
  - Thêm xác minh quyền sở hữu cho API hội thoại AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) bởi @cgyrock
  - Điều chỉnh khoảng cách giữa các thành phần thẻ công cụ trong Hội thoại AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) bởi @cgyrock
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Làm sạch kết quả nút yêu cầu quy trình làm việc để tránh lộ cấu hình yêu cầu, đặt mặc định cho các nút mới chỉ trả về dữ liệu phản hồi và thêm ghi log gỡ lỗi cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher
- **[Trường bộ sưu tập: Sắp xếp]** sửa(lĩnh vực-sắp xếp): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765
- **[Khối: Thẻ lưới]** Đã sửa lỗi nút không được làm mới khi thẻ lưới được làm mới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa danh sách trắng hành động cho các bản cập nhật tin nhắn trong ứng dụng để ngăn chặn các bản cập nhật trái phép bởi người không phải chủ sở hữu. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) bởi @mytharcher
- **[Quy trình làm việc: Nút SQL]** Sửa lỗi bảo mật trong nút SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]**

  - Khi sử dụng bộ lọc dựa trên biến, biểu đồ không giải quyết chính xác giá trị biến trong lần hiển thị đầu tiên ([#8964](https://github.com/nocobase/nocobase/pull/8964)) bởi @2013xile
  - đã sửa lỗi thống kê dữ liệu biểu đồ bất thường của vai trò gốc sau khi bật plugin không gian ([#8969](https://github.com/nocobase/nocobase/pull/8969)) bởi @jiannx
- **[Hành động: Nhập bản ghi]** đã sửa lỗi nhập không thành công sau khi mở plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) bởi @jiannx
- **[Quy trình làm việc: JavaScript]** Sửa lỗi bảo mật ([#8967](https://github.com/nocobase/nocobase/pull/8967)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp ([#8893](https://github.com/nocobase/nocobase/pull/8893)) bởi @jiannx
- **[Biến tùy chỉnh]** bỏ qua thông báo xác thực ([#8942](https://github.com/nocobase/nocobase/pull/8942)) bởi @chenos
- **[Bản địa hóa]** ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền ([#8903](https://github.com/nocobase/nocobase/pull/8903)) bởi @chenos
- **[Xác thực]** sửa acl để hỗ trợ các tham số lọc trạng thái tùy chỉnh ([#8918](https://github.com/nocobase/nocobase/pull/8918)) bởi @jiannx
- **[Flow engine]** Xóa sự kiện cũ được sao chép từ kho lưu trữ uiSchema để tránh lỗi khi kích hoạt ([#8957](https://github.com/nocobase/nocobase/pull/8957)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]**

  - giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp bởi @jiannx
  - Sửa lỗi tùy chọn "Kích hoạt quy trình làm việc" không hoạt động khi không được chọn bởi @mytharcher
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài bởi @2013xile
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa giới hạn phiên bản của các bản di chuyển cũ để tránh lỗi khi khởi động trong triển khai phiên bản mới nhất bởi @mytharcher
  - Thêm khả năng chịu lỗi khi quy trình làm việc bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Sửa lỗi dịch thuật, lựa chọn nút và vấn đề mục tiêu trả về trong nút trả về biểu mẫu phê duyệt v2 bởi @zhangzhonghe
  - Thêm khả năng chịu lỗi cho trường hợp không có `latestRound` bởi @mytharcher
- **[Trình quản lý email]**

  - Đã sửa lỗi chữ ký bị ghi đè khi sử dụng mẫu bởi @jiannx
  - không có xác nhận đóng nào được hiển thị sau khi email được gửi bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Ngày phát hành: 2026-04-07*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Thêm khả năng triệu hồi các tác nhân con cho nhân viên AI ([#8935](https://github.com/nocobase/nocobase/pull/8935)) bởi @cgyrock
- **[AI: Máy chủ MCP]** Cung cấp API truy vấn bộ sưu tập dữ liệu chung, có thể gọi qua MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) bởi @2013xile

### 🚀 Cải tiến

- **[undefined]**

  - Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765
  - Giảm nhiễu log khi khởi động máy chủ bằng cách im lặng các lệnh giải nén cho LibreOffice và Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) bởi @Rishabh1925
- **[Flow engine]** Thêm api mới cho việc xây dựng giao diện người dùng. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) bởi @gchust
- **[Quy trình làm việc]** Thay đổi kích thước công tắc bật/tắt thành nhỏ ([#9010](https://github.com/nocobase/nocobase/pull/9010)) bởi @mytharcher
- **[Nhân viên AI]** Tối ưu hóa lời nhắc cho deepseek khi xử lý các loại tệp không được hỗ trợ ([#9003](https://github.com/nocobase/nocobase/pull/9003)) bởi @cgyrock
- **[Hành động: Yêu cầu tùy chỉnh]** thêm mô hình hành động cho yêu cầu tùy chỉnh ([#8890](https://github.com/nocobase/nocobase/pull/8890)) bởi @jiannx
- **[Quy trình làm việc: JavaScript]** Thêm `isolated-vm` làm công cụ thực thi JavaScript mặc định cho nút JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) bởi @mytharcher
  Tham khảo: [Nút JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Sửa lỗi

- **[server]**

  - Thêm kiểm tra trạng thái phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher
  - Hỗ trợ lấy ứng dụng mục tiêu theo tên máy chủ ([#8978](https://github.com/nocobase/nocobase/pull/8978)) bởi @2013xile
- **[client]**

  - trường quan hệ trong biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx
  - biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx
  - Đã sửa lỗi bản sao của các trường liên quan trong bảng không được hiển thị chính xác trong lần hiển thị đầu tiên. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) bởi @jiannx
  - Đã sửa lỗi thông báo xác nhận thứ cấp không chính xác khi đóng popup nhiều cấp sau khi sửa đổi dữ liệu biểu mẫu. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) bởi @gchust
  - Sửa lỗi khoảng trắng trong biểu thức biến khiến nhãn không hiển thị ([#8988](https://github.com/nocobase/nocobase/pull/8988)) bởi @mytharcher
- **[flow-engine]**

  - Sửa lỗi menu cài đặt bị cắt trong popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) bởi @gchust
  - Đã sửa lỗi không thể chọn mục menu khi chiều rộng thành phần UI ở trạng thái cấu hình quá nhỏ. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) bởi @gchust
  - Thêm đoạn mã js để thiết lập mục biểu mẫu và mục chi tiết ([#8974](https://github.com/nocobase/nocobase/pull/8974)) bởi @jiannx
- **[Quy trình làm việc: nút gửi thư]** Sửa lỗi xác thực cho các trường biến ([#9047](https://github.com/nocobase/nocobase/pull/9047)) bởi @mytharcher
- **[Trường bộ sưu tập: Sắp xếp]** sửa(lĩnh vực-sắp xếp): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765
- **[Nhân viên AI]**

  - Sửa lỗi nhân viên AI không thể sử dụng kỹ năng ([#9023](https://github.com/nocobase/nocobase/pull/9023)) bởi @cgyrock
  - Sửa lỗi LLM vẫn cố gắng tải kỹ năng sau khi công cụ getSkill bị vô hiệu hóa ([#9013](https://github.com/nocobase/nocobase/pull/9013)) bởi @cgyrock
  - Đã sửa lỗi hành vi tìm kiếm web bất thường khi sử dụng mô hình Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) bởi @cgyrock
  - Thêm xác minh quyền sở hữu cho API hội thoại AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) bởi @cgyrock
- **[Khối: Thẻ lưới]** Đã sửa lỗi nút không được làm mới khi thẻ lưới được làm mới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx
- **[Quy trình làm việc]**

  - Sửa lỗi quy tắc xác thực không chính xác của hướng dẫn điều kiện ([#9017](https://github.com/nocobase/nocobase/pull/9017)) bởi @mytharcher
  - Sửa lỗi chế độ của trình kích hoạt bộ sưu tập không thể đặt thành "tạo hoặc cập nhật" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa danh sách trắng hành động cho các bản cập nhật tin nhắn trong ứng dụng để ngăn chặn các bản cập nhật trái phép bởi người không phải chủ sở hữu. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Tối ưu hóa đặt tên công cụ MCP và giảm các phản hồi API dư thừa để tránh tiêu thụ quá mức ngữ cảnh hội thoại AI ([#9000](https://github.com/nocobase/nocobase/pull/9000)) bởi @2013xile
- **[Quy trình làm việc: Nút SQL]** Sửa lỗi bảo mật trong nút SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Khi sử dụng bộ lọc dựa trên biến, biểu đồ không giải quyết chính xác giá trị biến trong lần hiển thị đầu tiên ([#8964](https://github.com/nocobase/nocobase/pull/8964)) bởi @2013xile
- **[Quy trình làm việc: Phê duyệt]**

  - Thêm khả năng chịu lỗi khi quy trình làm việc bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Thêm khả năng chịu lỗi cho trường hợp không có `latestRound` bởi @mytharcher
  - Sửa giới hạn phiên bản của các bản di chuyển cũ để tránh lỗi khi khởi động trong triển khai phiên bản mới nhất bởi @mytharcher
- **[Trình quản lý email]** không có xác nhận đóng nào được hiển thị sau khi email được gửi bởi @jiannx
