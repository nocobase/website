---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ sắp xếp trường cột trong bảng, Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa xác thực, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/en/blog/v1.9.14)

*Ngày phát hành: 2025-11-27*

### 🎉 Tính năng mới

- **[Auth: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa được xác thực bởi @heziqiang

### 🚀 Cải tiến

- **[client]** Sử dụng ba ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh các biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher
- **[Trường bộ sưu tập: Markdown(Vditor)]** điều chỉnh chiều rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[database]** Sửa: loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự thay đổi do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu
- **[client]** sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh
- **[Workflow]**

  - Sửa lỗi các lần thực thi đã chuẩn bị không được gửi vào hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher
  - Sửa lỗi liên kết nhiệm vụ dẫn đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher
  - Sửa lỗi một số menu nhiệm vụ workflow không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher
  - Sửa lỗi số lượng nhiệm vụ không hiển thị do sử dụng sai provider ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa lỗi số lượng nhiệm vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]**

  - Cài đặt trường bộ lọc cho các bộ sưu tập nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile
  - Giải quyết vấn đề truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock
- **[Thao tác: Nhập bản ghi]** Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock

### [v1.9.13](https://www.nocobase.com/en/blog/v1.9.13)

*Ngày phát hành: 2025-11-25*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi định tuyến khi sử dụng Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) bởi @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/en/blog/v1.9.12)

*Ngày phát hành: 2025-11-24*

### 🚀 Cải tiến

- **[client]** Thêm trạng thái tải cho nút thao tác cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể về lỗi tác vụ ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher
- **[Thao tác: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể về lỗi tác vụ bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn PK hoặc FK của bộ sưu tập người dùng có thể được chọn bởi @mytharcher
  - Giảm các liên kết cần tải trong popup phê duyệt, để cung cấp hiệu suất tốt hơn bởi @mytharcher
  - Làm cho tải trọng của việc thực thi thủ công (hoặc kích hoạt bởi nút quy trình con) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher

### 🐛 Sửa lỗi

- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho bộ sưu tập `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa file ngôn ngữ bởi @mytharcher

### [v1.9.11](https://www.nocobase.com/en/blog/v1.9.11)

*Ngày phát hành: 2025-11-24*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi giao diện trường hiển thị nhiều-một thay vì một-một cho belongsTo trong cấu hình nguồn dữ liệu bên ngoài ([#7936](https://github.com/nocobase/nocobase/pull/7936)) bởi @cgyrock
- **[Workflow]** Sửa lỗi việc cập nhật số lượng nhiệm vụ vô tình đặt lại trạng thái của các biểu mẫu đang được điền ([#7937](https://github.com/nocobase/nocobase/pull/7937)) bởi @mytharcher
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi trường M2M (mảng) khi tạo/cập nhật dữ liệu liên quan ([#7926](https://github.com/nocobase/nocobase/pull/7926)) bởi @cgyrock

### [v1.9.10](https://www.nocobase.com/en/blog/v1.9.10)

*Ngày phát hành: 2025-11-20*

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Giảm quyền mặc định cho vai trò thành viên ([#7921](https://github.com/nocobase/nocobase/pull/7921)) bởi @2013xile
- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ ngôn ngữ Nga cho các giao diện plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) bởi @sembaev-a-a
- **[Workflow: Webhook]** Thêm biểu tượng cho loại nút phản hồi bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi: Không thể giải quyết 'antd-mobile' và Không thể giải quyết 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) bởi @zhangzhonghe
- **[Kiểm soát truy cập]** Hỗ trợ các hạn chế phạm vi dữ liệu cho các thao tác liên kết. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) bởi @2013xile
- **[Nguồn dữ liệu: Chính]** Sửa lỗi trường một-nhiều mới thêm không thể được chọn làm khóa ngoại trước khi khởi động lại ứng dụng. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) bởi @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/en/blog/v1.9.0-beta.17)

*Ngày phát hành: 2025-11-21*

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ gọi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher
- **[Kiểm soát truy cập]**

  - Giảm quyền mặc định cho vai trò thành viên ([#7921](https://github.com/nocobase/nocobase/pull/7921)) bởi @2013xile
  - Tối ưu hóa logic kiểm soát quyền cho các thao tác trường liên kết ([#7800](https://github.com/nocobase/nocobase/pull/7800)) bởi @2013xile
- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ ngôn ngữ Nga cho các giao diện plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) bởi @sembaev-a-a
- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow để sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher
- **[Workflow: Webhook]** Thêm biểu tượng cho loại nút phản hồi bởi @mytharcher
- **[Workflow: JavaScript]** Sửa lỗ hổng bảo mật do các hàm cấp trên được truyền vào môi trường thực thi, ngăn chặn khai thác có thể cấp quyền truy cập vào ngữ cảnh thực thi cấp trên bởi @mytharcher
- **[Auth: OIDC]** Tăng thời gian chờ yêu cầu bởi @2013xile
- **[Workflow: Phê duyệt]** Thêm thông báo cho người được ủy quyền và người được thêm bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi giao diện trường hiển thị nhiều-một thay vì một-một cho belongsTo trong cấu hình nguồn dữ liệu bên ngoài ([#7936](https://github.com/nocobase/nocobase/pull/7936)) bởi @cgyrock
  - Sửa lỗi: Không thể giải quyết 'antd-mobile' và Không thể giải quyết 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) bởi @zhangzhonghe
  - Sửa lỗi các mẫu trùng lặp không xuất hiện, do kéo và sau đó xóa một mẫu được tham chiếu ([#7847](https://github.com/nocobase/nocobase/pull/7847)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động ([#7858](https://github.com/nocobase/nocobase/pull/7858)) bởi @zhangzhonghe
  - sửa lỗi trang tiếp theo trống trong khối chi tiết phân trang đơn giản ([#7784](https://github.com/nocobase/nocobase/pull/7784)) bởi @katherinehhh
  - Sửa lỗi "Vượt quá kích thước ngăn xếp cuộc gọi tối đa" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe
- **[server]**

  - Sửa lỗi trong chế độ tách dịch vụ nơi các tin nhắn hàng đợi chưa đăng ký không thể được xuất bản ([#7875](https://github.com/nocobase/nocobase/pull/7875)) bởi @mytharcher
  - Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher
  - Sửa lỗi sau khi bật chế độ tách dịch vụ, các tiến trình worker gửi tin nhắn qua hàng đợi tin nhắn gây ra lỗi ([#7797](https://github.com/nocobase/nocobase/pull/7797)) bởi @mytharcher
- **[utils]** Bật hợp nhất đối tượng trong chiến lược giao nhau ([#7840](https://github.com/nocobase/nocobase/pull/7840)) bởi @chenos
- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi trường M2M (mảng) khi tạo/cập nhật dữ liệu liên quan ([#7926](https://github.com/nocobase/nocobase/pull/7926)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Sửa lỗi trường một-nhiều mới thêm không thể được chọn làm khóa ngoại trước khi khởi động lại ứng dụng. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) bởi @cgyrock
- **[Workflow]**

  - Sửa lỗi việc cập nhật số lượng nhiệm vụ vô tình đặt lại trạng thái của các biểu mẫu đang được điền ([#7937](https://github.com/nocobase/nocobase/pull/7937)) bởi @mytharcher
  - Sử dụng eventQueue thay vì backgroundJob dùng chung để ngăn hàng đợi dùng chung bị tiêu thụ không chính xác trong chế độ tách dịch vụ ([#7871](https://github.com/nocobase/nocobase/pull/7871)) bởi @mytharcher
  - Sửa lỗi plugin workflow vẫn tiêu thụ sự kiện hàng đợi khi nó không ở chế độ worker trong chế độ tách dịch vụ ([#7820](https://github.com/nocobase/nocobase/pull/7820)) bởi @mytharcher
  - Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại ([#7855](https://github.com/nocobase/nocobase/pull/7855)) bởi @mytharcher
  - Sửa lỗi trong chế độ tách dịch vụ, việc thực thi thủ công một workflow chứa nút ngắt sẽ vẫn bị kẹt ở trạng thái chờ ([#7767](https://github.com/nocobase/nocobase/pull/7767)) bởi @mytharcher
  - Thêm `workflowId` làm dữ liệu nhận dạng cho nhật ký của workflow ([#7789](https://github.com/nocobase/nocobase/pull/7789)) bởi @mytharcher
  - Đã giải quyết vấn đề trình điều phối workflow trong chế độ cụm không xác định chính xác trạng thái rảnh, điều này có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher
- **[Kiểm soát truy cập]**

  - Hỗ trợ các hạn chế phạm vi dữ liệu cho các thao tác liên kết. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) bởi @2013xile
  - Vấn đề các đoạn mã thao tác liên kết không có hiệu lực ([#7876](https://github.com/nocobase/nocobase/pull/7876)) bởi @2013xile
- **[Workflow: Nút thủ công]** Sửa không gian tên của ngôn ngữ địa phương nên được sử dụng, để hiển thị nội dung dịch thuật chính xác ([#7877](https://github.com/nocobase/nocobase/pull/7877)) bởi @mytharcher
- **[Người dùng]** Làm mới chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7785](https://github.com/nocobase/nocobase/pull/7785)) bởi @2013xile
- **[Di động (không dùng nữa)]** Sửa lỗi popup giá trị mặc định của trường ngày tháng trên di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe
- **[Workflow: Biến tùy chỉnh]** Sửa lỗi xảy ra khi không có cấu hình trong nút biến bởi @mytharcher
- **[Workflow: Sự kiện thao tác tùy chỉnh]** Sửa lỗi gây ra bởi việc lắng nghe các sự kiện nguồn dữ liệu bên ngoài không tồn tại bởi @mytharcher
- **[In mẫu]** phân tích các biến trong bộ lọc bởi @jiannx
- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi cấu hình loại Nhãn trong tùy chọn Echarts không có hiệu lực. bởi @heziqiang
- **[Workflow: Phê duyệt]**

  - Sửa định dạng ngày trên thẻ danh sách phê duyệt trong trung tâm việc cần làm để hiển thị ngày và giờ đầy đủ bởi @mytharcher
  - Sửa lỗi kích thước trang của kênh thông báo tải không đủ lớn, khiến danh sách không được tải hoàn chỉnh bởi @mytharcher
  - Sửa lỗi hiệu suất xảy ra khi truy vấn danh sách các bản ghi phê duyệt trong quá trình gửi phê duyệt bởi @mytharcher
  - Sửa lỗi các trường bộ sưu tập chính không bị loại trừ khi tải lại dữ liệu liên kết bởi @mytharcher
  - Sửa lỗi các điều kiện cạnh tranh xảy ra trong quá trình xử lý phê duyệt đồng thời bởi nhiều người phê duyệt có thể khiến một nút workflow thực thi nhiều hơn một lần bởi @mytharcher
  - Không còn hỗ trợ tạo các nút phê duyệt trong các nhánh song song để tránh các vấn đề do trạng thái quy trình gây ra bởi @mytharcher
  - Sửa lỗi quy tắc liên kết cho biểu mẫu phê duyệt không hoạt động bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi workflow phê duyệt bị trùng lặp bởi @mytharcher
- **[Trình quản lý email]**

  - thêm nhật ký đồng bộ bởi @jiannx
  - đồng bộ trạng thái đã đọc email microsoft mà không có dấu thời gian bởi @jiannx
  - bộ sưu tập mailMessages thêm chỉ mục bởi @jiannx
  - thêm di chuyển cho các chỉ mục bởi @jiannx
  - Sửa lỗi hình ảnh dự trữ và đồng bộ hóa trong outlook bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/en/blog/v2.0.0-alpha.47)

*Ngày phát hành: 2025-11-26*

### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ khởi tạo các trường bộ lọc đã chọn trong truy vấn biểu đồ ([#7933](https://github.com/nocobase/nocobase/pull/7933)) bởi @heziqiang
  - Sử dụng ba ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh các biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher
  - Thêm trạng thái tải cho nút thao tác cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher
- **[Trường bộ sưu tập: Markdown(Vditor)]** điều chỉnh chiều rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi khi mở khối chi tiết trong popup cho các trường quan hệ không phải ID gây ra lỗi. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) bởi @gchust
  - Sửa lỗi dữ liệu liên kết không tải chính xác trong popup cho các trường quan hệ không phải ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) bởi @gchust
  - Sửa lỗi định tuyến khi sử dụng Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) bởi @zhangzhonghe
  - sửa lỗi cài đặt độ chính xác không hợp lệ cho định dạng trường số ([#7967](https://github.com/nocobase/nocobase/pull/7967)) bởi @katherinehhh
  - Sửa lỗi gõ không chính xác trong trang 2.0 mới ([#7945](https://github.com/nocobase/nocobase/pull/7945)) bởi @zhangzhonghe
  - sửa lỗi giá trị bộ lọc không bị xóa khi nhấp vào nút Đặt lại ([#7966](https://github.com/nocobase/nocobase/pull/7966)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi số lượng nhiệm vụ không hiển thị do sử dụng sai provider ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Giải quyết vấn đề truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile
- **[Khối: Tham chiếu]** Sửa lỗi việc trích dẫn một khối sẽ xóa khối được trích dẫn khỏi trang gốc. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) bởi @gchust
- **[Nhân viên AI]** Sửa lỗi khi AI tạo đầu ra SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) bởi @heziqiang
- **[In mẫu]** sửa lỗi không thể thêm mẫu trong thao tác in mẫu bản ghi bởi @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/en/blog/v2.0.0-alpha.46)

*Ngày phát hành: 2025-11-24*

### 🚀 Cải tiến

- **[flow-engine]** Hỗ trợ chuyển đổi lớp mô hình flow động ([#7952](https://github.com/nocobase/nocobase/pull/7952)) bởi @gchust
- **[Nhân viên AI]** Plugin nhân viên AI thêm hook nâng cấp ([#7951](https://github.com/nocobase/nocobase/pull/7951)) bởi @heziqiang
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể về lỗi tác vụ ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Làm cho tải trọng của việc thực thi thủ công (hoặc kích hoạt bởi nút quy trình con) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher
  - Giảm các liên kết cần tải trong popup phê duyệt, để cung cấp hiệu suất tốt hơn bởi @mytharcher
  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn PK hoặc FK của bộ sưu tập người dùng có thể được chọn bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** sửa lỗi tự động xuống dòng các trường văn bản trong khối chi tiết khi nội dung vượt quá chiều rộng ([#7955](https://github.com/nocobase/nocobase/pull/7955)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho bộ sưu tập `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher
- **[Trình quản lý tệp]** sửa lỗi tải tệp lên bộ nhớ được chỉ định thay vì bộ nhớ mặc định ([#7947](https://github.com/nocobase/nocobase/pull/7947)) bởi @katherinehhh
- **[Workflow: Phê duyệt]** Sửa file ngôn ngữ bởi @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/en/blog/v2.0.0-alpha.45)

*Ngày phát hành: 2025-11-21*

### 🎉 Tính năng mới

- **[client]** hỗ trợ sắp xếp trường cột trong bảng ([#7900](https://github.com/nocobase/nocobase/pull/7900)) bởi @katherinehhh
- **[Workflow]** Thêm nút "Nhiều điều kiện", cung cấp điều khiển luồng như `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** sửa lỗi xảy ra khi xóa giá trị trong bộ chọn phân cấp nhiều cấp ([#7943](https://github.com/nocobase/nocobase/pull/7943)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Sửa lỗi khối biểu đồ không cập nhật sau khi lưu ([#7920](https://github.com/nocobase/nocobase/pull/7920)) bởi @heziqiang
- **[In mẫu]** sửa lỗi thao tác in mẫu trong khối chi tiết bởi @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/en/blog/v2.0.0-alpha.44)

*Ngày phát hành: 2025-11-21*

### 🎉 Tính năng mới

- **[client]**

  - thêm hỗ trợ tạo nhanh cho trường chọn liên kết ([#7887](https://github.com/nocobase/nocobase/pull/7887)) bởi @katherinehhh
  - hỗ trợ bộ chọn phân tầng cho trường liên kết bộ sưu tập cây ([#7846](https://github.com/nocobase/nocobase/pull/7846)) bởi @katherinehhh
- **[Telemetry]** Thêm plugin mới: Telemetry, một plugin đo từ xa dựa trên OpenTelemetry cung cấp các số liệu CPU, bộ nhớ và yêu cầu HTTP với hỗ trợ xuất HTTP bởi @2013xile

### 🚀 Cải tiến

- **[telemetry]** Hỗ trợ kiểm soát số liệu nào được xuất ([#7938](https://github.com/nocobase/nocobase/pull/7938)) bởi @2013xile
- **[Trình quản lý tác vụ bất đồng bộ]** Các tác vụ bất đồng bộ cho các ứng dụng con chỉ nên khởi động các ứng dụng con mục tiêu trong Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - loại bỏ thao tác bảng cây khỏi khối bộ sưu tập không phải cây ([#7931](https://github.com/nocobase/nocobase/pull/7931)) bởi @katherinehhh
  - Sửa lỗi giao diện trường hiển thị nhiều-một thay vì một-một cho belongsTo trong cấu hình nguồn dữ liệu bên ngoài ([#7936](https://github.com/nocobase/nocobase/pull/7936)) bởi @cgyrock
- **[flow-engine]** Sửa lỗi hiển thị biểu tượng thanh công cụ bị lệch trong nút khối chi tiết ([#7929](https://github.com/nocobase/nocobase/pull/7929)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi việc cập nhật số lượng nhiệm vụ vô tình đặt lại trạng thái của các biểu mẫu đang được điền ([#7937](https://github.com/nocobase/nocobase/pull/7937)) bởi @mytharcher
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi trường M2M (mảng) khi tạo/cập nhật dữ liệu liên quan ([#7926](https://github.com/nocobase/nocobase/pull/7926)) bởi @cgyrock
- **[Thao tác: Nhập bản ghi Pro]** sửa lỗi việc sửa đổi tùy chọn nhập của trình tải lên không có hiệu lực bởi @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/en/blog/v2.0.0-alpha.43)

*Ngày phát hành: 2025-11-20*

### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ ngôn ngữ Nga cho các giao diện plugin. ([#7676](https://github.com/nocobase/nocobase/pull/7676)) bởi @sembaev-a-a
- **[Kiểm soát truy cập]** Giảm quyền mặc định cho vai trò thành viên ([#7921](https://github.com/nocobase/nocobase/pull/7921)) bởi @2013xile
- **[Workflow: Webhook]** Thêm biểu tượng cho loại nút phản hồi bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi: Không thể giải quyết 'antd-mobile' và Không thể giải quyết 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) bởi @zhangzhonghe
- **[flow-engine]** Sửa lỗi khi mở biểu mẫu chỉnh sửa nhanh của khối bảng gây ra lỗi. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) bởi @gchust
- **[Flow engine]** Đảm bảo các biến bản ghi luôn trả về bản ghi đầy đủ khi được sử dụng cùng với các trường riêng lẻ của chúng. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) bởi @gchust
- **[Nguồn dữ liệu: Chính]** Sửa lỗi trường một-nhiều mới thêm không thể được chọn làm khóa ngoại trước khi khởi động lại ứng dụng. ([#7907](https://github.com/nocobase/nocobase/pull/7907)) bởi @cgyrock
- **[Kiểm soát truy cập]** Hỗ trợ các hạn chế phạm vi dữ liệu cho các thao tác liên kết. ([#7919](https://github.com/nocobase/nocobase/pull/7919)) bởi @2013xile
