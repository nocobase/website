---
title: "Cập nhật hàng tuần｜Thêm bảo vệ tương thích lệnh API động"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 28 tháng 5 đến ngày 04 tháng 6 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Ngày phát hành: 03-06-2026*

### 🚀 Cải tiến

- **[client]** Cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp sẵn. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) bởi @gchust
- **[undefined]** Cập nhật tài liệu Embed NocoBase cho plugin mã nguồn mở. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) bởi @zhangzhonghe
  Tham khảo: [Nhúng NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Đã sửa lỗi trang bị treo khi đặt giá trị trường cho một biểu mẫu con. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) bởi @gchust
  - Đã sửa lỗi cửa sổ popup hiển thị dữ liệu UI cũ sau khi chuyển đổi công tắc chế độ cấu hình UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) bởi @gchust
- **[client]**

  - Đã sửa lỗi hành vi quy tắc liên kết hành động bản ghi không chính xác trong khối bảng. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) bởi @gchust
  - Đã sửa lỗi dữ liệu trường quan hệ đã chọn không được hiển thị trên thiết bị di động. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) bởi @zhangzhonghe
  - Đã sửa lỗi các trường trở thành chỉ đọc khi được hiển thị lại sau khi bị ẩn bởi quy tắc liên kết. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) bởi @katherinehhh
- **[cli]** Đã sửa mẫu nginx để phục vụ các tài nguyên `.mjs` với kiểu MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) bởi @mytharcher
- **[database]** Đã sửa lỗi nhập giá trị mật khẩu dạng số có thể thất bại. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) bởi @2013xile
- **[AI employees]** Đã sửa xác thực URL cơ sở của nhà cung cấp AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) bởi @cgyrock
- **[Flow engine]**

  - Đã sửa lỗi kéo thả các tab cửa sổ popup để sắp xếp lại không hoạt động. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) bởi @gchust
  - Đã sửa lỗi sửa đổi một khối sau khi sao chép mẫu của nó có thể vô tình ảnh hưởng đến nội dung của khối gốc. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) bởi @gchust
- **[Notification: In-app message]** Đã sửa rủi ro SQL injection trong bộ lọc dấu thời gian của kênh thông báo trong ứng dụng. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) bởi @mytharcher
- **[License settings]** Đã sửa lỗi trang cài đặt giấy phép có thể bị treo trong thời gian dài khi kiểm tra đăng nhập pkg chậm hoặc không thể truy cập. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) bởi @hongboji
- **[Workflow: JavaScript]** Làm rõ rằng chế độ hỗ trợ mô-đun Workflow JavaScript là không an toàn và không phải là ranh giới quyền hạn. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) bởi @mytharcher
  Tham khảo: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Đã sửa lỗi quyền không đầy đủ khi đăng nhập lần đầu khi vai trò hợp nhất là vai trò mặc định. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) bởi @2013xile
- **[File manager]** Đã sửa xác thực đường dẫn lưu trữ tệp cục bộ để ngăn các đường dẫn không an toàn thoát khỏi thư mục gốc lưu trữ đã cấu hình. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) bởi @mytharcher
- **[Password policy]** Đã sửa lỗi xác thực chính sách mật khẩu có thể thất bại đối với giá trị mật khẩu dạng số. bởi @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Ngày phát hành: 29-05-2026*

### 🚀 Cải tiến

- **[AI employees]** Cải thiện trường LLM Base URL để có thể sử dụng các biến phạm vi toàn cục trong biểu mẫu tạo và chỉnh sửa. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]** Sửa chiều rộng huy hiệu trong thanh điều hướng trên cùng ([#9607](https://github.com/nocobase/nocobase/pull/9607)) bởi @zhangzhonghe
- **[AI employees]** Đã sửa lỗi các nút tắt AI nhận được ngữ cảnh khối trống sau khi các khối bảng được tham chiếu bị xóa. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) bởi @cgyrock
- **[Migration manager]** Sửa khác biệt di chuyển PostgreSQL để các cột kế thừa con không bị xóa khi một cột cục bộ trở thành kế thừa. bởi @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Ngày phát hành: 28-05-2026*

### 🐛 Sửa lỗi

* **[ai]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi gọi công cụ mô hình Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) bởi @cgyrock
* **[flow-engine]** Đã sửa mức log frontend không chính xác. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) bởi @gchust
* **[Collection: Tree]** Đã sửa thông báo lỗi không rõ ràng khi truy vấn thất bại do mối quan hệ cha-con vòng tròn trong dữ liệu cây. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) bởi @zhangzhonghe
* **[AI: Knowledge base]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi gọi công cụ mô hình Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn. bởi @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Ngày phát hành: 03-06-2026*

### 🚀 Cải tiến

- **[Workflow: Approval]** Điều chỉnh các quy tắc xác thực cho cấu hình kích hoạt và nút phê duyệt để đảm bảo các trường liên quan đến UI tồn tại. bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi dữ liệu trường quan hệ đã chọn không được hiển thị trên thiết bị di động. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) bởi @zhangzhonghe
- **[client-v2]**

  - Đã sửa lỗi lưu quy tắc liên kết menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) bởi @zhangzhonghe
  - Đã sửa khoảng cách quá mức phía trên các khối trên trang v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) bởi @zhangzhonghe
- **[flow-engine]** Đã sửa lỗi trang bị treo khi đặt giá trị trường cho một biểu mẫu con. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) bởi @gchust
- **[AI employees]**

  - Đã sửa xác thực URL cơ sở của nhà cung cấp AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) bởi @cgyrock
  - Đã sửa lỗi `ctx.get` trong các nút workflow AI employee. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) bởi @cgyrock
- **[Notification: In-app message]** Đã sửa rủi ro SQL injection trong bộ lọc dấu thời gian của kênh thông báo trong ứng dụng. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) bởi @mytharcher
- **[Action: Duplicate record]** Đã sửa lỗi trạng thái nút không được đặt lại khi gửi bản ghi trùng lặp thất bại. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) bởi @katherinehhh
- **[Calendar]** Đã sửa lỗi màu sự kiện lịch không được hiển thị từ trường màu đã cấu hình trong trang v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) bởi @jiannx
- **[Flow engine]**

  - Đã sửa lỗi sửa đổi một khối sau khi sao chép mẫu của nó có thể vô tình ảnh hưởng đến nội dung của khối gốc. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) bởi @gchust
  - Đã sửa lỗi kéo thả các tab cửa sổ popup để sắp xếp lại không hoạt động. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) bởi @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Ngày phát hành: 02-06-2026*

### 🎉 Tính năng mới

- **[client-v2]** Thêm `TypedVariableInput` để các trường cổng SMTP và chế độ bảo mật của plugin email v2 có thể chấp nhận một hằng số đã được gõ hoặc một biến `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) bởi @Molunerfinn
- **[Access control]** Đã di chuyển các trang cài đặt Người dùng và Vai trò & Quyền hạn sang v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) bởi @jiannx

### 🚀 Cải tiến

- **[undefined]** Cập nhật tài liệu Embed NocoBase cho plugin mã nguồn mở ([#9642](https://github.com/nocobase/nocobase/pull/9642)) bởi @zhangzhonghe
  Tham khảo: [Nhúng NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Cải thiện hỗ trợ tự động hoàn thành cho một số hàm RunJS tích hợp sẵn. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) bởi @gchust
- **[cli]** cải thiện hướng dẫn khởi tạo và tự cập nhật ([#9633](https://github.com/nocobase/nocobase/pull/9633)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các khối có thể hiển thị sai là đã bị xóa sau khi làm mới trang ([#9662](https://github.com/nocobase/nocobase/pull/9662)) bởi @zhangzhonghe
  - Đã sửa lỗi hành vi quy tắc liên kết hành động bản ghi không chính xác trong khối bảng. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) bởi @gchust
  - (quy tắc liên kết) sửa lỗi các trường trở thành chỉ đọc khi được hiển thị sau khi bị ẩn ([#9649](https://github.com/nocobase/nocobase/pull/9649)) bởi @katherinehhh
- **[cli]** Sửa mẫu nginx để phục vụ các tài nguyên `.mjs` với kiểu MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) bởi @mytharcher
- **[database]** Đã sửa lỗi nhập giá trị mật khẩu dạng số có thể thất bại ([#9635](https://github.com/nocobase/nocobase/pull/9635)) bởi @2013xile
- **[flow-engine]**

  - Đã sửa lỗi cửa sổ popup hiển thị dữ liệu UI cũ sau khi chuyển đổi công tắc chế độ cấu hình UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) bởi @gchust
  - Sửa lỗi tìm kiếm trường bị xóa khi di chuột qua các trường liên kết ([#9646](https://github.com/nocobase/nocobase/pull/9646)) bởi @zhangzhonghe
- **[client-v2]** giữ nguyên giá trị trường gán ([#9640](https://github.com/nocobase/nocobase/pull/9640)) bởi @katherinehhh
- **[File manager]** Đã sửa xác thực đường dẫn lưu trữ tệp cục bộ để ngăn các đường dẫn không an toàn thoát khỏi thư mục gốc lưu trữ đã cấu hình. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) bởi @mytharcher
- **[Block: Gantt]** Cải thiện vị trí tooltip gantt để tránh che các thanh tác vụ và căn chỉnh nhãn tác vụ nhất quán bên trong và bên ngoài thanh ([#9638](https://github.com/nocobase/nocobase/pull/9638)) bởi @jiannx
- **[Access control]** Đã sửa lỗi quyền không đầy đủ khi đăng nhập lần đầu khi vai trò hợp nhất là mặc định ([#9632](https://github.com/nocobase/nocobase/pull/9632)) bởi @2013xile
- **[License settings]** Đã sửa lỗi trang cài đặt giấy phép bị treo trong thời gian dài khi kiểm tra đăng nhập pkg chậm hoặc không thể truy cập ([#9650](https://github.com/nocobase/nocobase/pull/9650)) bởi @hongboji
- **[Workflow: JavaScript]** Làm rõ rằng chế độ hỗ trợ mô-đun Workflow JavaScript là không an toàn và không phải là ranh giới quyền hạn ([#9629](https://github.com/nocobase/nocobase/pull/9629)) bởi @mytharcher
  Tham khảo: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** Đã sửa lỗi xác thực chính sách mật khẩu có thể thất bại đối với giá trị mật khẩu dạng số bởi @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Ngày phát hành: 30-05-2026*

### 🎉 Tính năng mới

- **[client-v2]** Hỗ trợ gán giá trị trường trong các hành động gửi biểu mẫu ([#9570](https://github.com/nocobase/nocobase/pull/9570)) bởi @katherinehhh
- **[Office File Previewer]** Di chuyển plugin xem trước tệp Office sang client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) bởi @Molunerfinn

### 🚀 Cải tiến

- **[Notification manager]** Di chuyển các plugin liên quan đến thông báo sang v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client]** Sửa chiều rộng huy hiệu trong thanh điều hướng trên cùng ([#9607](https://github.com/nocobase/nocobase/pull/9607)) bởi @zhangzhonghe
- **[Block: Gantt]** Đã sửa đường dẫn thư mục dùng chung gantt v2 và thêm tô màu zebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) bởi @jiannx
- **[License settings]** Đã thêm hỗ trợ client-v2 cho cài đặt giấy phép và tiêm giấy phép thương mại. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) bởi @jiannx
- **[Workflow: Custom action event]** Sửa lỗi các tùy chọn Trigger workflow trùng lặp trong menu hành động khối v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) bởi @zhangzhonghe
- **[AI employees]** Đã sửa lỗi các nút tắt AI nhận được ngữ cảnh khối trống sau khi các khối bảng được tham chiếu bị xóa. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) bởi @cgyrock
- **[plugin-commercial]** Đã thêm các thành phần giấy phép thương mại client-v2 và mục nhập trạng thái giấy phép trên thanh trên cùng. bởi @jiannx
- **[Migration manager]** Sửa khác biệt di chuyển PostgreSQL để các cột kế thừa con không bị xóa khi một cột cục bộ trở thành kế thừa. bởi @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Ngày phát hành: 29-05-2026*

### 🎉 Tính năng mới

- **[cli]** Thêm các bảo vệ tương thích lệnh API động ([#9613](https://github.com/nocobase/nocobase/pull/9613)) bởi @chenos
- **[client-v2]**

  - Hỗ trợ các trang v2 nhúng và các trang biểu mẫu công khai v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) bởi @zhangzhonghe
  - Viết lại trang Plugin manager của client-v2 thành giao diện dạng thẻ đáp ứng với bộ lọc danh mục, tìm kiếm, bật/tắt/xóa, Bật hàng loạt và modal chi tiết plugin; đồng thời làm cho trang Plugin manager của client-v1 đáp ứng trên màn hình hẹp. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) bởi @Molunerfinn
- **[Workflow]**

  - Thêm kiểm soát thời gian chờ cho workflow, hỗ trợ tự động hủy bỏ thực thi quá thời gian nếu tùy chọn thời gian chờ được đặt ([#9363](https://github.com/nocobase/nocobase/pull/9363)) bởi @mytharcher
  - Đã thêm API quản trị viên để chạy lại các thực thi workflow đã bắt đầu từ đầu hoặc từ một nút được chỉ định. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher
- **[Block: Gantt]** Đã thêm hỗ trợ v2 cho khối Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) bởi @jiannx
- **[Workflow: Webhook]** Thêm trạng thái phản hồi 408 cho workflow webhook bị quá thời gian (chế độ đồng bộ) bởi @mytharcher
- **[Workflow: Subflow]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: OIDC]** Di chuyển `plugin-auth-oidc` sang admin v2; nút đăng nhập, biểu mẫu cài đặt quản trị và chuyển hướng tự động SSO hiện hoạt động dưới v2. bởi @Molunerfinn
- **[Workflow: Approval]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: LDAP]** Thêm mục nhập client v2 để trình xác thực LDAP hiển thị biểu mẫu đăng nhập và cài đặt quản trị trên các ứng dụng v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[client-v2]**

  - Thêm cài đặt chọn hàng bảng v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) bởi @katherinehhh
  - Hỗ trợ màu hành động trong bảng hành động ([#9612](https://github.com/nocobase/nocobase/pull/9612)) bởi @katherinehhh
  - Xóa tùy chọn Ẩn khỏi cấu hình menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) bởi @zhangzhonghe
- **[client]** Xóa tùy chọn Ẩn khỏi cài đặt mục menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe
- **[cli]** Tinh gọn luồng nâng cấp ứng dụng ([#9587](https://github.com/nocobase/nocobase/pull/9587)) bởi @chenos
- **[AI employees]** Cải thiện trường LLM Base URL để có thể sử dụng các biến phạm vi toàn cục trong biểu mẫu tạo và chỉnh sửa. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) bởi @cgyrock
- **[IP restriction]** Thêm client v2 cho plugin hạn chế IP. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Đã sửa mức log frontend không chính xác. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) bởi @gchust
  - Sửa lỗi menu xếp tầng không ổn định khi gõ trong hộp tìm kiếm ([#9473](https://github.com/nocobase/nocobase/pull/9473)) bởi @zhangzhonghe
  - Đã sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi một biểu mẫu được gửi thành công trong cửa sổ popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust
- **[ai]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn ([#9604](https://github.com/nocobase/nocobase/pull/9604)) bởi @cgyrock
- **[client-v2]**

  - Sửa lỗi các tab đăng nhập ứng dụng con hiển thị các mẫu dịch thuật thô và ngăn drawer chỉnh sửa phương thức xác thực v2 làm mất giá trị trường khi gửi. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) bởi @Molunerfinn
  - Cải thiện hiệu suất trang plugin manager bằng cách sử dụng CSS line-clamp thay vì antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) bởi @Molunerfinn
- **[client]**

  - Sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - Sửa lỗi đồng bộ trạng thái ẩn cho liên kết biểu mẫu con ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh
  - Tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - Sửa lỗi đồng bộ giá trị popup chọn ngày trên thiết bị di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - Sửa lỗi các tab trang biến mất sau khi chuyển đổi menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe
  - Sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - Tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
- **[Collection: Tree]** Sửa lỗi gây ra bởi dữ liệu cha-con vòng tròn trong bộ sưu tập cây ([#9603](https://github.com/nocobase/nocobase/pull/9603)) bởi @zhangzhonghe
- **[Workflow: Custom action event]**

  - Đã sửa lỗi các nút hành động tùy chỉnh trong bảng với ngữ cảnh nhiều bản ghi cho phép chọn workflow ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher
  - Lọc các tùy chọn ràng buộc workflow hành động tùy chỉnh theo bộ sưu tập khối hiện tại. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) bởi @mytharcher
- **[File manager]**

  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Đã sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên tệp để tránh tạo khóa đối tượng với các ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher
- **[AI: Knowledge base]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn bởi @cgyrock
- **[Template print]** Đã sửa lỗi lỗi chuyển đổi PDF in mẫu không được trả về client một cách chính xác bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Ngày phát hành: 29-05-2026*

### 🎉 Tính năng mới

- **[client-v2]**

  - Hỗ trợ gán giá trị trường trong các hành động gửi biểu mẫu ([#9570](https://github.com/nocobase/nocobase/pull/9570)) bởi @katherinehhh
  - Hỗ trợ các trang v2 nhúng và các trang biểu mẫu công khai v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) bởi @zhangzhonghe
  - Thêm menu Bảo mật và trang cài đặt Chính sách token vào admin v2; trung tâm người dùng hiện hỗ trợ Thay đổi mật khẩu. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) bởi @Molunerfinn
  - Viết lại trang Plugin manager của client-v2 thành giao diện dạng thẻ đáp ứng với bộ lọc danh mục, tìm kiếm, bật/tắt/xóa, Bật hàng loạt và modal chi tiết plugin; đồng thời làm cho trang Plugin manager của client-v1 đáp ứng trên màn hình hẹp. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) bởi @Molunerfinn
- **[cli]**

  - Thêm các bảo vệ tương thích lệnh API động ([#9613](https://github.com/nocobase/nocobase/pull/9613)) bởi @chenos
  - Hỗ trợ xác thực cơ bản ([#9558](https://github.com/nocobase/nocobase/pull/9558)) bởi @chenos
- **[Office File Previewer]** Di chuyển plugin xem trước tệp Office sang client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) bởi @Molunerfinn
- **[Workflow]**

  - Thêm kiểm soát thời gian chờ cho workflow, hỗ trợ tự động hủy bỏ thực thi quá thời gian nếu tùy chọn thời gian chờ được đặt ([#9363](https://github.com/nocobase/nocobase/pull/9363)) bởi @mytharcher
  - Đã thêm API quản trị viên để chạy lại các thực thi workflow đã bắt đầu từ đầu hoặc từ một nút được chỉ định. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher
- **[IdP: OAuth]** Đã thêm hỗ trợ nền tảng cho đăng nhập một lần ứng dụng trong các triển khai đa ứng dụng ([#9547](https://github.com/nocobase/nocobase/pull/9547)) bởi @2013xile
- **[Block: Gantt]** Đã thêm hỗ trợ v2 cho khối Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) bởi @jiannx
- **[App SSO]** Đã thêm plugin App SSO để đăng nhập tự động giữa các ứng dụng bởi @2013xile
- **[Password policy]** Di chuyển plugin-password-policy sang shell admin client-v2 với các trang cài đặt Chính sách mật khẩu / Người dùng bị khóa và thực thi quy tắc phía client trên biểu mẫu thay đổi mật khẩu của trung tâm người dùng. bởi @Molunerfinn
- **[Workflow: Webhook]** Thêm trạng thái phản hồi 408 cho workflow webhook bị quá thời gian (chế độ đồng bộ) bởi @mytharcher
- **[Workflow: Subflow]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: OIDC]** Di chuyển `plugin-auth-oidc` sang admin v2; nút đăng nhập, biểu mẫu cài đặt quản trị và chuyển hướng tự động SSO hiện hoạt động dưới v2. bởi @Molunerfinn
- **[Workflow: Approval]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[App supervisor]** Đã thêm cài đặt App SSO cho các ứng dụng con bởi @2013xile
- **[Auth: LDAP]** Thêm mục nhập client v2 để trình xác thực LDAP hiển thị biểu mẫu đăng nhập và cài đặt quản trị trên các ứng dụng v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[client-v2]**

  - thêm cài đặt chọn hàng bảng v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) bởi @katherinehhh
  - hỗ trợ màu hành động trong bảng hành động ([#9612](https://github.com/nocobase/nocobase/pull/9612)) bởi @katherinehhh
  - Xóa tùy chọn Ẩn khỏi cấu hình menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) bởi @zhangzhonghe
- **[client]** Xóa tùy chọn Ẩn khỏi cài đặt mục menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe
- **[cli]** tinh gọn luồng nâng cấp ứng dụng ([#9587](https://github.com/nocobase/nocobase/pull/9587)) bởi @chenos
- **[Notification manager]** Di chuyển các plugin liên quan đến thông báo sang v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) bởi @Molunerfinn
- **[AI employees]** Cải thiện trường LLM Base URL để có thể sử dụng các biến phạm vi toàn cục trong biểu mẫu tạo và chỉnh sửa. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) bởi @cgyrock
- **[Workflow]** Tái cấu trúc kiểm tra khả dụng của nút không đồng bộ workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) bởi @mytharcher
- **[Data visualization]** Đã thêm hỗ trợ client v2 cho các khối biểu đồ. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) bởi @jiannx
- **[IP restriction]** Thêm client v2 cho plugin hạn chế IP. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client]**

  - Sửa chiều rộng huy hiệu trong thanh điều hướng trên cùng ([#9607](https://github.com/nocobase/nocobase/pull/9607)) bởi @zhangzhonghe
  - Tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - Sửa lỗi các tab trang biến mất sau khi chuyển đổi menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe
  - Sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - Sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - Sửa lỗi đồng bộ giá trị popup chọn ngày trên thiết bị di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - Sửa lỗi đồng bộ trạng thái ẩn cho liên kết biểu mẫu con ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh
- **[flow-engine]**

  - Đã sửa mức log frontend không chính xác. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) bởi @gchust
  - Sửa lỗi menu xếp tầng không ổn định khi gõ trong hộp tìm kiếm ([#9473](https://github.com/nocobase/nocobase/pull/9473)) bởi @zhangzhonghe
  - Đã sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi một biểu mẫu được gửi thành công trong cửa sổ popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust
- **[ai]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn ([#9604](https://github.com/nocobase/nocobase/pull/9604)) bởi @cgyrock
- **[client-v2]**

  - Sửa lỗi các tab đăng nhập ứng dụng con hiển thị các mẫu dịch thuật thô và ngăn drawer chỉnh sửa phương thức xác thực v2 làm mất giá trị trường khi gửi. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) bởi @Molunerfinn
  - Cải thiện hiệu suất trang plugin manager bằng cách sử dụng CSS line-clamp thay vì antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) bởi @Molunerfinn
  - Đã sửa siêu dữ liệu ngôn ngữ trình duyệt để trang ứng dụng tuân theo ngôn ngữ ứng dụng đã chọn thay vì được đánh dấu là tiếng Anh. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) bởi @Molunerfinn
- **[build]**

  - Các tài sản văn bản trong bản dựng máy chủ hiện được sao chép dưới dạng tệp thay vì được chuyển đổi thành các mô-đun JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) bởi @Molunerfinn
  - Đã sửa đầu ra làm rối plugin máy chủ để tránh các biến toàn cục trình duyệt trong các gói thời gian chạy Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn
- **[Block: Gantt]** Đã sửa đường dẫn thư mục dùng chung gantt v2 và thêm tô màu zebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) bởi @jiannx
- **[License settings]** Đã thêm hỗ trợ client-v2 cho cài đặt giấy phép và tiêm giấy phép thương mại. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) bởi @jiannx
- **[Workflow: Custom action event]**

  - Sửa lỗi các tùy chọn Trigger workflow trùng lặp trong menu hành động khối v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) bởi @zhangzhonghe
  - Lọc các tùy chọn ràng buộc workflow hành động tùy chỉnh theo bộ sưu tập khối hiện tại. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) bởi @mytharcher
  - Đã sửa lỗi các nút hành động tùy chỉnh trong bảng với ngữ cảnh nhiều bản ghi cho phép chọn workflow ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher
- **[Collection: Tree]** Sửa lỗi gây ra bởi dữ liệu cha-con vòng tròn trong bộ sưu tập cây ([#9603](https://github.com/nocobase/nocobase/pull/9603)) bởi @zhangzhonghe
- **[File manager]**

  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Hiển thị an toàn các bản xem trước PDF bằng PDF.js thay vì hiển thị PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher
  - Đã sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên tệp để tránh tạo khóa đối tượng với các ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher
- **[AI employees]**

  - Đã sửa lỗi các nút tắt AI nhận được ngữ cảnh khối trống sau khi các khối bảng được tham chiếu bị xóa. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) bởi @cgyrock
  - đã sửa mô tả không chính xác của tên công cụ trong prompt ngữ cảnh công việc ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock
- **[Workflow: Manual node]** Đã sửa lỗi lưu tạm thời cho các tác vụ workflow thủ công không lưu giữ các giá trị biểu mẫu đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher
- **[plugin-commercial]** Đã thêm các thành phần giấy phép thương mại client-v2 và mục nhập trạng thái giấy phép trên thanh trên cùng. bởi @jiannx
- **[AI: Knowledge base]** Đã ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn bởi @cgyrock
- **[Migration manager]** Sửa khác biệt di chuyển PostgreSQL để các cột kế thừa con không bị xóa khi một cột cục bộ trở thành kế thừa. bởi @hongboji
- **[Template print]** Đã sửa lỗi lỗi chuyển đổi PDF in mẫu không được trả về client một cách chính xác bởi @jiannx
- **[Auth: OIDC]** Đã sửa lỗi rò rỉ token khi callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài bởi @2013xile
- **[Workflow: Approval]**

  - Sửa lỗi API `jobs:resume` không được hỗ trợ bởi nút phê duyệt bởi @mytharcher
  - Đã sửa lỗi rút lại phê duyệt để cập nhật dữ liệu nghiệp vụ đã gửi trong khi tôn trọng quyền cập nhật bộ sưu tập nguồn. bởi @mytharcher
  - Đã sửa lỗi các công việc phê duyệt cũ khi workflow phê duyệt bị kết thúc bởi các lỗi nút không phải phê duyệt. bởi @mytharcher
