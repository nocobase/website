---
title: "NocoBase v2.1.0-beta.12: Thêm công cụ tìm kiếm web dựa trên LLIM cho nhân viên AI"
description: "Ghi chú phát hành phiên bản v2.1.0-beta.12"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm biến js vào luồng sự kiện ([#8938](https://github.com/nocobase/nocobase/pull/8938)) bởi @jiannx

  - Thêm hành động mục JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) bởi @jiannx

- **[AI employees]** Thêm công cụ tìm kiếm web dựa trên LLM cho AI employees ([#9032](https://github.com/nocobase/nocobase/pull/9032)) bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**
  - Thêm mục lục vào README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) bởi @gaston98765

  - Giảm nhiễu log khi khởi động máy chủ bằng cách im lặng các lệnh giải nén cho LibreOffice và Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) bởi @Rishabh1925

- **[client]**
  - Hỗ trợ thiết lập kiểu trường thông qua runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) bởi @jiannx

  - Tối ưu hóa bố cục ngang của các hành động biểu mẫu ([#8869](https://github.com/nocobase/nocobase/pull/8869)) bởi @jiannx

- **[Workflow: JavaScript]** Thêm `isolated-vm` làm công cụ thực thi JavaScript mặc định cho nút JavaScript ([#8973](https://github.com/nocobase/nocobase/pull/8973)) bởi @mytharcher
Tham khảo: [Nút JavaScript](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**
  - Thay đổi kích thước công tắc bật/tắt thành nhỏ ([#9010](https://github.com/nocobase/nocobase/pull/9010)) bởi @mytharcher

  - Thêm biến cho tham số kích thước trang ([#8951](https://github.com/nocobase/nocobase/pull/8951)) bởi @mytharcher

- **[AI employees]** Tối ưu hóa lời nhắc cho deepseek khi xử lý các loại tệp không được hỗ trợ ([#9003](https://github.com/nocobase/nocobase/pull/9003)) bởi @cgyrock

- **[Action: Custom request]** Thêm mô hình hành động cho yêu cầu tùy chỉnh ([#8890](https://github.com/nocobase/nocobase/pull/8890)) bởi @jiannx

- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) bởi @jiannx

- **[Workflow: Subflow]** Thêm logic phòng vệ để tránh workflow bị treo khi xảy ra ngoại lệ bởi @mytharcher

- **[Workflow: Approval]** Sửa lỗi hiệu năng do trường JSON gây ra khi tải danh sách bản ghi phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi xuất hiện thông báo xác nhận thay đổi chưa lưu không chính xác cho hành động chỉnh sửa hàng loạt ([#9054](https://github.com/nocobase/nocobase/pull/9054)) bởi @gchust

  - Sửa lỗi xuất hiện cửa sổ bật lên xác nhận thứ cấp không chính xác khi gửi biểu mẫu sau khi tạo bản ghi qua bảng con trong cửa sổ bật lên. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) bởi @gchust

  - Sửa lỗi ctx.request không thể ghi đè header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust

  - Trường quan hệ trong biểu mẫu con không lưu được ([#9004](https://github.com/nocobase/nocobase/pull/9004)) bởi @jiannx

  - Biểu mẫu con của các trường không hiển thị dữ liệu ([#9008](https://github.com/nocobase/nocobase/pull/9008)) bởi @jiannx

  - Sửa lỗi bản sao của các trường liên kết trong bảng không được hiển thị chính xác trong lần hiển thị đầu tiên. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) bởi @jiannx

  - Sửa lỗi thông báo xác nhận thứ cấp không chính xác khi đóng cửa sổ bật lên nhiều cấp sau khi sửa đổi dữ liệu biểu mẫu. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) bởi @gchust

  - Sửa lỗi khoảng trắng trong biểu thức biến khiến nhãn không hiển thị ([#8988](https://github.com/nocobase/nocobase/pull/8988)) bởi @mytharcher

  - Sửa lỗi ngoại lệ khi thêm nút con vào bảng cây trong cửa sổ bật lên ([#8872](https://github.com/nocobase/nocobase/pull/8872)) bởi @jiannx

- **[data-source-manager]** Sửa lỗi một số loại trường không được cập nhật chính xác sau khi đồng bộ trường từ cơ sở dữ liệu ([#9046](https://github.com/nocobase/nocobase/pull/9046)) bởi @2013xile

- **[server]**
  - Thêm kiểm tra trạng thái phục vụ để tránh trạng thái ứng dụng bị cập nhật bởi phiên bản không phục vụ ([#8959](https://github.com/nocobase/nocobase/pull/8959)) bởi @mytharcher

  - Tránh xử lý sync-message sau khi ứng dụng dừng ([#8940](https://github.com/nocobase/nocobase/pull/8940)) bởi @mytharcher

  - Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đã đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) bởi @mytharcher

- **[flow-engine]**
  - Sửa menu cài đặt bị cắt trong cửa sổ bật lên ([#9005](https://github.com/nocobase/nocobase/pull/9005)) bởi @gchust

  - Sửa lỗi không thể chọn mục menu khi chiều rộng thành phần UI ở trạng thái cấu hình quá nhỏ. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) bởi @gchust

  - Thêm đoạn mã js để thiết lập mục biểu mẫu và mục chi tiết ([#8974](https://github.com/nocobase/nocobase/pull/8974)) bởi @jiannx

  - Đồng bộ trạng thái với cấu hình trường khi trường biểu mẫu bị xóa ([#8857](https://github.com/nocobase/nocobase/pull/8857)) bởi @jiannx

- **[database]** Sử dụng cảnh báo thay vì lỗi khi bất kỳ tham số appends nào không hợp lệ ([#8923](https://github.com/nocobase/nocobase/pull/8923)) bởi @mytharcher

- **[resourcer]** Sửa lỗi nguồn dữ liệu bên ngoài không tải được chính xác. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) bởi @2013xile

- **[AI employees]**
  - Sửa lỗi tải lên tài liệu AI employee thất bại khi truy cập đường dẫn con với APP_PUBLIC_PATH được cấu hình. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) bởi @cgyrock

  - Sửa lỗi khi sử dụng mô hình deepseek hoặc minmax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock

  - Sửa lỗi hủy suy luận của AI employee khiến dịch vụ bị sập ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock

  - Sửa lỗi hành vi tìm kiếm web bất thường khi sử dụng Qwen LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) bởi @cgyrock

  - Thêm xác minh quyền sở hữu cho API hội thoại AI ([#8993](https://github.com/nocobase/nocobase/pull/8993)) bởi @cgyrock

  - Điều chỉnh khoảng cách giữa các thành phần thẻ công cụ trong Hội thoại AI ([#8965](https://github.com/nocobase/nocobase/pull/8965)) bởi @cgyrock

- **[Workflow: HTTP request node]** Làm sạch kết quả nút yêu cầu workflow để tránh lộ cấu hình yêu cầu, đặt mặc định cho các nút mới chỉ trả về dữ liệu phản hồi và thêm ghi log gỡ lỗi cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher

- **[Collection field: Sort]** fix(field-sort): ngăn chặn sự cố khi thuộc tính scopeKey không được xác định ([#9019](https://github.com/nocobase/nocobase/pull/9019)) bởi @gaston98765

- **[Block: GridCard]** Sửa lỗi nút không được làm mới khi làm mới thẻ lưới ([#9021](https://github.com/nocobase/nocobase/pull/9021)) bởi @jiannx

- **[Notification: In-app message]** Sửa danh sách trắng hành động cho các bản cập nhật tin nhắn trong ứng dụng để ngăn chặn các bản cập nhật trái phép bởi người không phải chủ sở hữu. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) bởi @mytharcher

- **[Workflow: SQL node]** Sửa lỗi bảo mật trong nút SQL ([#8989](https://github.com/nocobase/nocobase/pull/8989)) bởi @mytharcher

- **[Data visualization]**
  - Khi sử dụng bộ lọc dựa trên biến, biểu đồ không giải quyết chính xác giá trị biến trong lần hiển thị đầu tiên ([#8964](https://github.com/nocobase/nocobase/pull/8964)) bởi @2013xile

  - Sửa lỗi thống kê dữ liệu bất thường của biểu đồ vai trò gốc sau khi bật plugin không gian ([#8969](https://github.com/nocobase/nocobase/pull/8969)) bởi @jiannx

- **[Action: Import records]** Sửa lỗi nhập thất bại sau khi mở plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) bởi @jiannx

- **[Workflow: JavaScript]** Sửa lỗi bảo mật ([#8967](https://github.com/nocobase/nocobase/pull/8967)) bởi @mytharcher

- **[Action: Export records]** Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp ([#8893](https://github.com/nocobase/nocobase/pull/8893)) bởi @jiannx

- **[Custom variables]** Bỏ qua thông báo xác thực ([#8942](https://github.com/nocobase/nocobase/pull/8942)) bởi @chenos

- **[Localization]** Ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền ([#8903](https://github.com/nocobase/nocobase/pull/8903)) bởi @chenos

- **[Authentication]** Sửa acl để hỗ trợ tham số lọc trạng thái tùy chỉnh ([#8918](https://github.com/nocobase/nocobase/pull/8918)) bởi @jiannx

- **[Flow engine]** Xóa sự kiện cũ được sao chép từ kho lưu trữ uiSchema để tránh lỗi khi kích hoạt ([#8957](https://github.com/nocobase/nocobase/pull/8957)) bởi @mytharcher

- **[Action: Import records Pro]**
  - Giới hạn cấu hình nhập và xuất của các trường liên quan nhiều lớp bởi @jiannx

  - Sửa lỗi tùy chọn "Kích hoạt workflow" không hoạt động khi không được chọn bởi @mytharcher

- **[Data source: External Oracle]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài bởi @2013xile

- **[Workflow: Approval]**
  - Sửa giới hạn phiên bản của các bản di chuyển cũ để tránh lỗi khi khởi động trong bản triển khai phiên bản mới nhất bởi @mytharcher

  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher

  - Sửa lỗi dịch thuật, lựa chọn nút và vấn đề mục tiêu trả về trong nút trả lại biểu mẫu phê duyệt v2 bởi @zhangzhonghe

  - Thêm khả năng chịu lỗi cho trường hợp không có `latestRound` bởi @mytharcher

- **[Email manager]**
  - Sửa lỗi chữ ký bị ghi đè khi sử dụng mẫu bởi @jiannx

  - Không hiển thị xác nhận đóng sau khi email được gửi bởi @jiannx
