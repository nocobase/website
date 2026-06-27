---
title: "NocoBase v1.9.0-beta.17: Thêm thông báo cho người được ủy quyền và người được thêm vào"
description: "Ghi chú phát hành phiên bản v1.9.0-beta.17"
---

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ gọi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher

- **[Kiểm soát truy cập]**
  - Giảm quyền mặc định cho vai trò thành viên ([#7921](https://github.com/nocobase/nocobase/pull/7921)) bởi @2013xile

  - Tối ưu hóa logic kiểm soát quyền cho các thao tác trên trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile

- **[Trực quan hóa dữ liệu]** Đã thêm hỗ trợ ngôn ngữ Nga cho giao diện plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) bởi @sembaev-a-a

- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow để sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher

- **[Workflow: Webhook]** Thêm biểu tượng cho loại nút phản hồi bởi @mytharcher

- **[Workflow: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn việc khai thác có thể cấp quyền truy cập vào ngữ cảnh thực thi cấp trên bởi @mytharcher

- **[Auth: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile

- **[Workflow: Phê duyệt]** Thêm thông báo cho người được ủy quyền và người được chỉ định bổ sung bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi giao diện trường hiển thị nhiều-một thay vì một-một cho belongsTo trong cấu hình nguồn dữ liệu bên ngoài ([#7936](https://github.com/nocobase/nocobase/pull/7936)) bởi @cgyrock

  - Sửa lỗi: Không thể giải quyết 'antd-mobile' và Không thể giải quyết 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) bởi @zhangzhonghe

  - Sửa lỗi các mẫu trùng lặp không xuất hiện, do kéo rồi xóa một mẫu tham chiếu ([#7847](https://github.com/nocobase/nocobase/pull/7847)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) bởi @zhangzhonghe

  - Sửa lỗi trang tiếp theo trống trong khối chi tiết phân trang đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) bởi @katherinehhh

  - Sửa lỗi "Vượt quá kích thước ngăn xếp cuộc gọi tối đa" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe

- **[server]**
  - Sửa lỗi trong chế độ tách dịch vụ khi các tin nhắn hàng đợi chưa đăng ký không thể được xuất bản ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher

  - Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher

  - Sửa lỗi sau khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi tin nhắn gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher

- **[utils]** Cho phép hợp nhất đối tượng trong chiến lược giao nhau ([#7840](https://github.com/nocobase/nocobase/pull/7840)) bởi @chenos

- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi trường M2M (mảng) khi tạo/cập nhật dữ liệu liên quan ([#7926](https://github.com/nocobase/nocobase/pull/7926)) bởi @cgyrock

- **[Nguồn dữ liệu: Chính]** Sửa lỗi trường một-nhiều mới thêm không thể được chọn làm khóa ngoại trước khi khởi động lại ứng dụng. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) bởi @cgyrock

- **[Workflow]**
  - Sửa lỗi việc cập nhật số lượng tác vụ vô tình đặt lại trạng thái của các biểu mẫu đang được điền ([#7937](https://github.com/nocobase/nocobase/pull/7937)) bởi @mytharcher

  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ không chính xác trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher

  - Sửa lỗi plugin workflow vẫn tiêu thụ sự kiện hàng đợi khi nó không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher

  - Sửa lỗi do lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher

  - Sửa lỗi trong chế độ tách dịch vụ, việc thực thi thủ công một workflow chứa nút ngắt sẽ bị kẹt ở trạng thái chờ ([#7767](https://github.com/nocobase/nocobase/pull/7767)) bởi @mytharcher

  - Thêm `workflowId` làm dữ liệu định danh cho nhật ký của workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) bởi @mytharcher

  - Đã giải quyết lỗi trình điều phối workflow trong chế độ cụm không xác định chính xác trạng thái rảnh, có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher

- **[Kiểm soát truy cập]**
  - Hỗ trợ các hạn chế phạm vi dữ liệu cho các thao tác liên kết. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) bởi @2013xile

  - Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile

- **[Workflow: Nút thủ công]** Sửa không gian tên của ngôn ngữ địa phương cần sử dụng, để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher

- **[Người dùng]** Làm mới chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) bởi @2013xile

- **[Di động (không dùng nữa)]** Sửa lỗi cửa sổ bật lên giá trị mặc định của trường ngày tháng trên di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe

- **[Workflow: Biến tùy chỉnh]** Sửa lỗi xảy ra khi không có cấu hình trong nút biến bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi do lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại bởi @mytharcher

- **[In mẫu]** phân tích các biến trong bộ lọc bởi @jiannx

- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi cấu hình loại Nhãn trong tùy chọn Echarts không có hiệu lực. bởi @heziqiang

- **[Workflow: Phê duyệt]**
  - Sửa định dạng ngày tháng trên thẻ danh sách phê duyệt trong trung tâm việc cần làm để hiển thị ngày và giờ đầy đủ bởi @mytharcher

  - Sửa lỗi kích thước trang của kênh thông báo tải không đủ lớn, khiến danh sách không được tải hoàn chỉnh bởi @mytharcher

  - Sửa lỗi hiệu suất xảy ra khi truy vấn danh sách các bản ghi phê duyệt trong quá trình gửi phê duyệt bởi @mytharcher

  - Sửa lỗi các trường của bộ sưu tập chính không bị loại trừ khi tải lại dữ liệu liên kết bởi @mytharcher

  - Sửa lỗi các điều kiện cạnh tranh xảy ra trong quá trình xử lý phê duyệt đồng thời bởi nhiều người phê duyệt có thể khiến một nút workflow thực thi nhiều hơn một lần bởi @mytharcher

  - Không còn hỗ trợ tạo các nút phê duyệt trong các nhánh song song để tránh các vấn đề do trạng thái quy trình gây ra bởi @mytharcher

  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động bởi @zhangzhonghe

  - Sửa lỗi xảy ra khi trùng lặp workflow phê duyệt bởi @mytharcher

- **[Trình quản lý email]**
  - thêm nhật ký đồng bộ bởi @jiannx

  - đồng bộ trạng thái đã đọc email Microsoft mà không có dấu thời gian bởi @jiannx

  - bộ sưu tập mailMessages thêm chỉ mục bởi @jiannx

  - thêm di chuyển cho các chỉ mục bởi @jiannx

  - Sửa lỗi hình ảnh dự phòng và đồng bộ trong outlook bởi @jiannx
