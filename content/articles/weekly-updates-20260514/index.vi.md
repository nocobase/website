---
title: "Cập nhật hàng tuần｜Hỗ trợ AI nhân viên xử lý song song nhiều cuộc hội thoại"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 7 đến ngày 14 tháng 5 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Ngày phát hành: 2026-05-13*

### 🎉 Tính năng mới

- **[client]**
  - Thêm biến ngôn ngữ người dùng hiện tại trong v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) bởi @katherinehhh
  - Thêm tùy chọn giới hạn phạm vi ngày cho trường ngày tháng trong biểu mẫu v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** Loại trừ các bản ghi đã được liên kết trong hộp thoại chọn liên kết của khối bảng một-nhiều ([#9448](https://github.com/nocobase/nocobase/pull/9448)) bởi @katherinehhh
- **[Phòng ban]** Tối ưu hóa kiểu danh sách phòng ban bằng cách thêm biểu tượng và điều chỉnh khoảng cách ([#9435](https://github.com/nocobase/nocobase/pull/9435)) bởi @katherinehhh
- **[AI: Cơ sở tri thức]** Mã định danh duy nhất cho cơ sở tri thức có thể được cấu hình tại thời điểm tạo bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust
  - Đã sửa lỗi không thể chọn tùy chọn cho trường chọn của liên kết. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) bởi @gchust
  - Đã sửa lỗi phạm vi dữ liệu khối mục tiêu được đặt không chính xác khi bỏ chọn dữ liệu hàng trong luồng sự kiện khối bảng. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) bởi @gchust
  - Sửa lỗi yêu cầu bảng trùng lặp khi biểu mẫu bộ lọc có giá trị mặc định ([#9423](https://github.com/nocobase/nocobase/pull/9423)) bởi @zhangzhonghe
  - Đã sửa quy tắc liên kết V2 để hỗ trợ thiết lập các tùy chọn có thể chọn cho trường ([#9399](https://github.com/nocobase/nocobase/pull/9399)) bởi @jiannx
  - sửa lỗi khi thay đổi trường tiêu đề của trường liên kết trong khối bảng v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) bởi @katherinehhh
  - Đã sửa lỗi gián đoạn khi quy tắc liên kết nút hành động không có hiệu lực. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) bởi @gchust
  - ẩn thành phần bảng con cho các trường liên kết nhiều-nhiều trong bảng con v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) bởi @katherinehhh
- **[server]** sửa(file-manager): buộc tải xuống các tệp nội dung hoạt động trong bộ nhớ local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) bởi @mytharcher
- **[AI employees]** Đã sửa lỗi Ollama test flight yêu cầu nhập key ([#9450](https://github.com/nocobase/nocobase/pull/9450)) bởi @cgyrock
- **[Trình quản lý đồ thị tập hợp]** sửa lỗi bố cục tự động giao diện đồ họa gây ra lỗi bộ lọc hành động cập nhật ([#9421](https://github.com/nocobase/nocobase/pull/9421)) bởi @katherinehhh
- **[Workflow]** sửa: khôi phục văn bản trợ giúp trong hộp thoại liên kết workflow FlowModel cho các sự kiện hành động tùy chỉnh và thao tác ([#9447](https://github.com/nocobase/nocobase/pull/9447)) bởi @mytharcher
- **[Phòng ban]** sửa xung đột bản dịch giữa nút thêm người dùng và thêm phòng ban trong cài đặt Người dùng & Quyền ([#9456](https://github.com/nocobase/nocobase/pull/9456)) bởi @katherinehhh
- **[Trường tập hợp: Markdown(Vditor)]** sửa lỗi tooltip của trường markdown bị ẩn trong bố cục biểu mẫu ngang ([#9420](https://github.com/nocobase/nocobase/pull/9420)) bởi @katherinehhh
- **[WEB client]** Sửa lỗi lọc loại route khi sử dụng nhãn đã dịch ([#9425](https://github.com/nocobase/nocobase/pull/9425)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]**

  - Sửa lỗi trường JS xuất hiện trong cài đặt quy trình phê duyệt bởi @zhangzhonghe
  - Sửa bố cục biểu mẫu phê duyệt trên thiết bị di động bởi @zhangzhonghe
  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền nhiệm vụ phê duyệt. bởi @mytharcher
- **[Trình quản lý sao lưu]** Đã sửa lỗi sao lưu thất bại với lỗi khi không tìm thấy tệp. bởi @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Ngày phát hành: 2026-05-10*

### 🚀 Cải tiến

- **[Workflow: Phê duyệt]** Sửa hành vi xác thực bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể chỉnh sửa mã JS sau khi trường JS được đặt ở chế độ chỉ đọc. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) bởi @gchust
  - Đã sửa lỗi gán trường bảng con không có hiệu lực trong quy tắc liên kết trường. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) bởi @gchust
  - Sửa lỗi tab trang v2 không đồng bộ ngay sau khi lưu cài đặt ([#9396](https://github.com/nocobase/nocobase/pull/9396)) bởi @zhangzhonghe
  - Đã sửa lỗi cửa sổ bật lên giá trị mặc định cho trường liên kết trong biểu mẫu tạo hiển thị không chính xác. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) bởi @gchust
- **[Chính sách mật khẩu]** Đã sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày tháng luôn thất bại bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa lỗi ngăn kéo chọn bản ghi bị che khuất trong cấu hình workflow phê duyệt bởi @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Ngày phát hành: 2026-05-09*

### 🎉 Tính năng mới

- **[client]** thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh
- **[Sao chép văn bản]** hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh

### 🚀 Cải tiến

- **[undefined]** bỏ qua các phiên bản đã được xuất bản trong pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn
- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu luồng v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx
- **[client]**

  - Đã sửa lỗi trường `Ẩn (giá trị dự trữ)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor và khôi phục hỗ trợ nhập giá trị để gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx
  - Sửa tên tệp tải xuống không chính xác cho trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher
  - Đã sửa trình kích hoạt workflow hàng loạt bảng v2 để lựa chọn hàng nhất quán sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx
  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe
  - sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh
  - sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực chính xác khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh
  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi trang đã lưu trong bộ nhớ đệm ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe
  - sửa thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh
  - sửa ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh
  - Đã sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust
  - Sửa lỗi khi lọc các trường vô hướng với bộ lọc đa lựa chọn tùy chỉnh ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe
- **[server]** xác thực tên gói plugin trước các thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos
- **[Trình quản lý nguồn dữ liệu]** ngăn chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh
- **[Nguồn dữ liệu: Chính]** Đã sửa lỗi bảng cơ sở dữ liệu đã nhập sử dụng sai tên bảng có tiền tố khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher
- **[Khối: Kanban]** sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh
- **[Trường tập hợp: Công thức]** sửa lỗi trường công thức trong bảng con v2 không được kích hoạt để tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Ngày phát hành: 2026-05-13*

### 🎉 Tính năng mới

- **[undefined]** Thêm một AI employee mới, Kỹ sư bản địa hóa Lina, để hỗ trợ các tác vụ dịch thuật bản địa hóa ([#9434](https://github.com/nocobase/nocobase/pull/9434)) bởi @2013xile
  Tham khảo: [Quản lý bản địa hóa](https://docs.nocobase.com/system-management/localization)<br>[Lina: Kỹ sư bản địa hóa](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Sử dụng Lina và HY-MT1.5-1.8B cục bộ để dịch các mục bản địa hóa](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ tải tệp lên qua bộ nhớ S3 Pro trong trình quản lý tệp v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[build]** Đã thêm phạm vi hồi quy để giữ `deleteServerFiles` không xóa các tạo phẩm xây dựng `client` và `client-v2` trên các đường dẫn Windows và POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) bởi @Molunerfinn
- **[client]** Loại trừ các bản ghi đã được liên kết trong hộp thoại chọn liên kết của khối bảng một-nhiều ([#9448](https://github.com/nocobase/nocobase/pull/9448)) bởi @katherinehhh
- **[Trình quản lý tệp]** Các plugin lưu trữ bên thứ ba hiện có thể đăng ký biểu mẫu loại lưu trữ của riêng họ trên trang cài đặt trình quản lý tệp v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) bởi @Molunerfinn
- **[AI: Cơ sở tri thức]** Mã định danh duy nhất cho cơ sở tri thức có thể được cấu hình tại thời điểm tạo bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể chọn tùy chọn cho trường chọn của liên kết. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) bởi @gchust
  - Sửa lỗi cài đặt hệ thống hiển thị trống sau khi gửi ([#9458](https://github.com/nocobase/nocobase/pull/9458)) bởi @zhangzhonghe
  - Sửa lỗi yêu cầu bảng trùng lặp khi biểu mẫu bộ lọc có giá trị mặc định ([#9423](https://github.com/nocobase/nocobase/pull/9423)) bởi @zhangzhonghe
  - Đã sửa lỗi phạm vi dữ liệu khối mục tiêu được đặt không chính xác khi bỏ chọn dữ liệu hàng trong luồng sự kiện khối bảng. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) bởi @gchust
  - Đã sửa quy tắc liên kết V2 để hỗ trợ thiết lập các tùy chọn có thể chọn cho trường ([#9399](https://github.com/nocobase/nocobase/pull/9399)) bởi @jiannx
  - sửa lỗi khi thay đổi trường tiêu đề của trường liên kết trong khối bảng v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) bởi @katherinehhh
- **[client-v2]**

  - Sửa lỗi trang trở nên trống sau hộp thoại bật plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) bởi @zhangzhonghe
  - Sửa lỗi trang quản trị v1 bị sập khi chúng tham chiếu các mô-đun plugin v2 trong các bản dựng sản xuất. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) bởi @Molunerfinn
- **[cli-v1]** Đã sửa lỗi khởi động phát triển thất bại trong các ứng dụng được tạo bằng create-nocobase-app do giải quyết đường dẫn client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) bởi @Molunerfinn
- **[server]** sửa(file-manager): buộc tải xuống các tệp nội dung hoạt động trong bộ nhớ local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) bởi @mytharcher
- **[Phòng ban]** sửa xung đột bản dịch giữa nút thêm người dùng và thêm phòng ban trong cài đặt Người dùng & Quyền ([#9456](https://github.com/nocobase/nocobase/pull/9456)) bởi @katherinehhh
- **[Khối: Markdown]** Sửa lỗi khối Markdown v2 báo lỗi ([#9440](https://github.com/nocobase/nocobase/pull/9440)) bởi @zhangzhonghe
- **[Workflow]** sửa: khôi phục văn bản trợ giúp trong hộp thoại liên kết workflow FlowModel cho các sự kiện hành động tùy chỉnh và thao tác ([#9447](https://github.com/nocobase/nocobase/pull/9447)) bởi @mytharcher
- **[AI employees]** Đã sửa lỗi Ollama test flight yêu cầu nhập key ([#9450](https://github.com/nocobase/nocobase/pull/9450)) bởi @cgyrock
- **[Workflow: Phê duyệt]**

  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền nhiệm vụ phê duyệt. bởi @mytharcher
  - Sửa bố cục biểu mẫu phê duyệt trên thiết bị di động bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Đã sửa lỗi sao lưu thất bại với lỗi khi không tìm thấy tệp. bởi @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Ngày phát hành: 2026-05-12*

### 🎉 Tính năng mới

- **[client]**
  - Thêm hỗ trợ quy tắc liên kết cho các mục menu trang ([#9304](https://github.com/nocobase/nocobase/pull/9304)) bởi @zhangzhonghe
  - thêm biến ngôn ngữ người dùng hiện tại trong v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client-v2]** Lọc ra các menu v1 trong bố cục v2 và chỉ hiển thị menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) bởi @zhangzhonghe
- **[undefined]** hỗ trợ môi trường hiện tại theo phạm vi phiên trong nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) bởi @chenos
- **[AI employees]** AI employee hỗ trợ xử lý song song nhiều cuộc hội thoại ([#9344](https://github.com/nocobase/nocobase/pull/9344)) bởi @cgyrock
- **[Phòng ban]** tối ưu hóa kiểu danh sách phòng ban bằng cách thêm biểu tượng và điều chỉnh khoảng cách ([#9435](https://github.com/nocobase/nocobase/pull/9435)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi xây dựng plugin thất bại khi mã client v1 nhập mục `/client-v2` của plugin khác. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) bởi @Molunerfinn
- **[client]**

  - ẩn thành phần bảng con cho các trường liên kết nhiều-nhiều trong bảng con v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) bởi @katherinehhh
  - Đã sửa lỗi gián đoạn khi quy tắc liên kết nút hành động không có hiệu lực. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) bởi @gchust
- **[Trình quản lý đồ thị tập hợp]** sửa lỗi bố cục tự động giao diện đồ họa gây ra lỗi bộ lọc hành động cập nhật ([#9421](https://github.com/nocobase/nocobase/pull/9421)) bởi @katherinehhh
- **[Khối: Cây]** Cải thiện cài đặt khối bộ lọc cây và sửa lỗi liên kết không được hỗ trợ, dự phòng trường tiêu đề và hành vi đặt lại tìm kiếm. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) bởi @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Ngày phát hành: 2026-05-10*

### 🎉 Tính năng mới

- **[client]** thêm tùy chọn giới hạn phạm vi ngày cho trường ngày tháng trong biểu mẫu v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) bởi @katherinehhh
- **[flow-engine]** Di chuyển `plugin-environment-variables` sang client-v2 với trang cài đặt dựa trên React và biến thời gian chạy `$env` được đăng ký toàn cục; thêm mục client-v2 vào `plugin-file-manager` với trang cấu hình lưu trữ dựa trên React và trường tải lên, hành động tải lên và xem trước dựa trên FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể chỉnh sửa mã JS sau khi trường JS được đặt ở chế độ chỉ đọc. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) bởi @gchust
  - Sửa lỗi tab trang v2 không đồng bộ ngay sau khi lưu cài đặt ([#9396](https://github.com/nocobase/nocobase/pull/9396)) bởi @zhangzhonghe
  - Đã sửa lỗi gán trường bảng con không có hiệu lực trong quy tắc liên kết trường. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) bởi @gchust
  - Đã sửa lỗi cửa sổ bật lên giá trị mặc định cho trường liên kết trong biểu mẫu tạo hiển thị không chính xác. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) bởi @gchust
- **[Trường tập hợp: Markdown(Vditor)]** sửa lỗi tooltip của trường markdown bị ẩn trong bố cục biểu mẫu ngang ([#9420](https://github.com/nocobase/nocobase/pull/9420)) bởi @katherinehhh
- **[Di động (không dùng nữa)]** Sửa lỗi cửa sổ bật lên tin nhắn di động không thể đóng hoặc cuộn ([#9424](https://github.com/nocobase/nocobase/pull/9424)) bởi @zhangzhonghe
- **[WEB client]** Sửa lỗi lọc loại route khi sử dụng nhãn đã dịch ([#9425](https://github.com/nocobase/nocobase/pull/9425)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Sửa lỗi trường JS xuất hiện trong cài đặt quy trình phê duyệt bởi @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Ngày phát hành: 2026-05-09*

### 🎉 Tính năng mới

- **[server]** AI employees có thể tìm kiếm tài liệu đi kèm bằng lệnh Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) bởi @2013xile
- **[AI employees]** Nút AI employee trong Workflow hỗ trợ tải tệp từ các trường tệp đính kèm. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) bởi @cgyrock
- **[Sao chép văn bản]** hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher
- **[Khối: Kanban]** Cải thiện tính nhất quán về khoảng cách trường chi tiết v2 và làm cho khoảng cách thẻ kanban và cột thích ứng tốt hơn với cài đặt chủ đề. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) bởi @jiannx
- **[AI employees]** Cải thiện các công cụ chỉnh sửa RunJS của Nathan và giảm độ trễ trong các cuộc trò chuyện AI dài ([#9311](https://github.com/nocobase/nocobase/pull/9311)) bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa hành vi xác thực bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu luồng v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx
- **[client]**

  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe
  - Sửa lỗi khi lọc các trường vô hướng với bộ lọc đa lựa chọn tùy chỉnh ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe
  - Sửa tên tệp tải xuống không chính xác cho trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher
  - sửa thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh
  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe
  - Đã sửa lỗi trường `Ẩn (giá trị dự trữ)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor và khôi phục hỗ trợ nhập giá trị để gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx
  - Đã sửa trình kích hoạt workflow hàng loạt bảng v2 để lựa chọn hàng nhất quán sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx
- **[client-v2]**

  - Đã sửa lỗi khi chọn trường liên kết trong cài đặt trường. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) bởi @gchust
  - Sửa lỗi trang 404 nhấp nháy sau khi ứng dụng khởi động ([#9365](https://github.com/nocobase/nocobase/pull/9365)) bởi @zhangzhonghe
- **[server]** Đã sửa lỗi các yêu cầu khám phá OAuth của ứng dụng con được định tuyến như yêu cầu của ứng dụng chính ([#9383](https://github.com/nocobase/nocobase/pull/9383)) bởi @2013xile
- **[Nguồn dữ liệu: Chính]** Đã sửa lỗi bảng cơ sở dữ liệu đã nhập sử dụng sai tên bảng có tiền tố khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** ngăn chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh
- **[AI: MCP server]** Đã sửa lỗi đóng gói MCP server để bao gồm các phụ thuộc thời gian chạy ([#9401](https://github.com/nocobase/nocobase/pull/9401)) bởi @2013xile
- **[Flow engine]** Đã sửa lỗi các khối do AI tạo ra không thể chuyển đổi từ các mẫu tham chiếu trở lại thành các mẫu trùng lặp. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) bởi @gchust
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày tháng luôn thất bại bởi @mytharcher
- **[Chính sách mật khẩu]** Đã sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi ngăn kéo chọn bản ghi bị che khuất trong cấu hình workflow phê duyệt bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** sửa thích ứng lược đồ pg bởi @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Ngày phát hành: 2026-05-08*

### 🎉 Tính năng mới

- **[client]** thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client-v2 cho các plugin khối ([#9297](https://github.com/nocobase/nocobase/pull/9297)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[undefined]** bỏ qua các phiên bản đã được xuất bản trong pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client-v2]**

  - Sửa lỗi một số trang v2 không tải được plugin từ xa ([#9369](https://github.com/nocobase/nocobase/pull/9369)) bởi @zhangzhonghe
  - Sửa lỗi giữ chỗ kéo khối trang v2 và vị trí thả ([#9361](https://github.com/nocobase/nocobase/pull/9361)) bởi @zhangzhonghe
- **[client]**

  - Đã sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust
  - sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực chính xác khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh
  - sửa ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh
  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi trang đã lưu trong bộ nhớ đệm ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe
  - sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh
- **[server]** xác thực tên gói plugin trước các thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos
- **[undefined]** Sửa các liên kết chết trong tài liệu đã dịch và bật phát hiện liên kết chết theo mặc định trong bản dựng tài liệu. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) bởi @Molunerfinn
- **[AI employees]**

  - Sửa lỗi nút AI employee đọc trường tệp đính kèm liên kết trong workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) bởi @cgyrock
  - Sửa lỗi nút AI employee trong workflow không kết thúc đúng cách sau khi gán công cụ. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) bởi @cgyrock
- **[Khối: Kanban]**

  - Cải thiện kiểu nhỏ gọn của thẻ Kanban và tối ưu hóa lựa chọn mẫu cửa sổ bật lên tạo nhanh. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) bởi @jiannx
  - sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh
  - Đã sửa lỗi các khối liên kết kanban sử dụng các tham số tài nguyên thời gian chạy chưa được giải quyết trong ngữ cảnh cửa sổ bật lên hoặc trang phụ. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) bởi @jiannx
- **[Hành động: Yêu cầu tùy chỉnh]** nâng cấp koa lên v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) bởi @chenos
- **[Trường tập hợp: Công thức]** sửa lỗi trường công thức trong bảng con v2 không được kích hoạt để tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh
- **[Trình quản lý email]** Đã sửa lỗi hiển thị tiêu đề danh tính thư bởi @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Ngày phát hành: 2026-05-12*

### 🚀 Cải tiến

- **[AI employees]** AI employee hỗ trợ xử lý song song nhiều cuộc hội thoại ([#9344](https://github.com/nocobase/nocobase/pull/9344)) bởi @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Ngày phát hành: 2026-05-11*

### 🎉 Tính năng mới

- **[client]**
  - thêm biến ngôn ngữ người dùng hiện tại trong v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) bởi @katherinehhh
  - Thêm hỗ trợ quy tắc liên kết cho các mục menu trang ([#9304](https://github.com/nocobase/nocobase/pull/9304)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[client-v2]** Lọc ra các menu v1 trong bố cục v2 và chỉ hiển thị menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) bởi @zhangzhonghe
- **[Phòng ban]** tối ưu hóa kiểu danh sách phòng ban bằng cách thêm biểu tượng và điều chỉnh khoảng cách ([#9435](https://github.com/nocobase/nocobase/pull/9435)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[build]** Sửa lỗi xây dựng plugin thất bại khi mã client v1 nhập mục `/client-v2` của plugin khác. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) bởi @Molunerfinn
- **[client]**

  - Đã sửa lỗi gián đoạn khi quy tắc liên kết nút hành động không có hiệu lực. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) bởi @gchust
  - ẩn thành phần bảng con cho các trường liên kết nhiều-nhiều trong bảng con v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) bởi @katherinehhh
- **[Trình quản lý đồ thị tập hợp]** sửa lỗi bố cục tự động giao diện đồ họa gây ra lỗi bộ lọc hành động cập nhật ([#9421](https://github.com/nocobase/nocobase/pull/9421)) bởi @katherinehhh
- **[Khối: Cây]** Cải thiện cài đặt khối bộ lọc cây và sửa lỗi liên kết không được hỗ trợ, dự phòng trường tiêu đề và hành vi đặt lại tìm kiếm. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) bởi @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Ngày phát hành: 2026-05-10*

### 🎉 Tính năng mới

- **[client]** thêm tùy chọn giới hạn phạm vi ngày cho trường ngày tháng trong biểu mẫu v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) bởi @katherinehhh
- **[flow-engine]** Di chuyển `plugin-environment-variables` sang client-v2 với trang cài đặt dựa trên React và biến thời gian chạy `$env` được đăng ký toàn cục; thêm mục client-v2 vào `plugin-file-manager` với trang cấu hình lưu trữ dựa trên React và trường tải lên, hành động tải lên và xem trước dựa trên FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) bởi @Molunerfinn

### 🚀 Cải tiến

- **[undefined]** hỗ trợ môi trường hiện tại theo phạm vi phiên trong nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi cửa sổ bật lên giá trị mặc định cho trường liên kết trong biểu mẫu tạo hiển thị không chính xác. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) bởi @gchust
  - Đã sửa lỗi không thể chỉnh sửa mã JS sau khi trường JS được đặt ở chế độ chỉ đọc. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) bởi @gchust
  - Sửa lỗi tab trang v2 không đồng bộ ngay sau khi lưu cài đặt ([#9396](https://github.com/nocobase/nocobase/pull/9396)) bởi @zhangzhonghe
  - Đã sửa lỗi gán trường bảng con không có hiệu lực trong quy tắc liên kết trường. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) bởi @gchust
- **[Trường tập hợp: Markdown(Vditor)]** sửa lỗi tooltip của trường markdown bị ẩn trong bố cục biểu mẫu ngang ([#9420](https://github.com/nocobase/nocobase/pull/9420)) bởi @katherinehhh
- **[WEB client]** Sửa lỗi lọc loại route khi sử dụng nhãn đã dịch ([#9425](https://github.com/nocobase/nocobase/pull/9425)) bởi @zhangzhonghe
- **[Di động (không dùng nữa)]** Sửa lỗi cửa sổ bật lên tin nhắn di động không thể đóng hoặc cuộn ([#9424](https://github.com/nocobase/nocobase/pull/9424)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Sửa lỗi trường JS xuất hiện trong cài đặt quy trình phê duyệt bởi @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Ngày phát hành: 2026-05-09*

### 🎉 Tính năng mới

- **[client]** thêm hành động liên kết và hủy liên kết vào khối liên kết ([#9366](https://github.com/nocobase/nocobase/pull/9366)) bởi @katherinehhh
- **[Sao chép văn bản]** hỗ trợ tùy chọn "Hiển thị nút sao chép" cho trường văn bản chỉ đọc ([#9394](https://github.com/nocobase/nocobase/pull/9394)) bởi @katherinehhh
- **[AI employees]** Nút AI employee trong Workflow hỗ trợ tải tệp từ các trường tệp đính kèm. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) bởi @cgyrock
- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client-v2 cho các plugin khối ([#9297](https://github.com/nocobase/nocobase/pull/9297)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[client]** Cho phép gán giá trị trường cho trường tuần tự ([#9397](https://github.com/nocobase/nocobase/pull/9397)) bởi @mytharcher
- **[undefined]** bỏ qua các phiên bản đã được xuất bản trong pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) bởi @Molunerfinn
- **[Khối: Kanban]** Cải thiện tính nhất quán về khoảng cách trường chi tiết v2 và làm cho khoảng cách thẻ kanban và cột thích ứng tốt hơn với cài đặt chủ đề. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa hành vi xác thực bắt buộc cho biểu mẫu phê duyệt bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi biểu mẫu bộ lọc không thể thu gọn ([#9386](https://github.com/nocobase/nocobase/pull/9386)) bởi @zhangzhonghe
  - Đã sửa trình kích hoạt workflow hàng loạt bảng v2 để lựa chọn hàng nhất quán sau khi chuyển hướng giữa các tab và có thể chọn lại hàng sau khi quay lại ([#9388](https://github.com/nocobase/nocobase/pull/9388)) bởi @jiannx
  - Đã sửa lỗi trường `Ẩn (giá trị dự trữ)` trong khối biểu mẫu vẫn hiển thị ở chế độ UI Editor và khôi phục hỗ trợ nhập giá trị để gán chúng trong Gán trường ([#9373](https://github.com/nocobase/nocobase/pull/9373)) bởi @jiannx
  - sửa thích ứng DividerItem với chủ đề trong v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) bởi @katherinehhh
  - Sửa tên tệp tải xuống không chính xác cho trường AttachmentURL khi thiếu siêu dữ liệu tệp. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) bởi @mytharcher
  - Sửa lỗi khi lọc các trường vô hướng với bộ lọc đa lựa chọn tùy chỉnh ([#9387](https://github.com/nocobase/nocobase/pull/9387)) bởi @zhangzhonghe
  - Đã sửa lỗi quy tắc liên kết không được chạy lại sau khi giá trị biểu mẫu thay đổi. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) bởi @gchust
  - Sửa lỗi quy tắc liên kết bảng con v1 thay đổi kiểu trường bắt buộc không chính xác ([#9364](https://github.com/nocobase/nocobase/pull/9364)) bởi @zhangzhonghe
  - sửa lỗi hiển thị dữ liệu không chính xác trong khối thẻ lưới sau khi cập nhật và làm mới ([#9351](https://github.com/nocobase/nocobase/pull/9351)) bởi @katherinehhh
  - sửa lỗi trường tùy chọn bắt buộc trong bảng con không được xác thực chính xác khi chọn lần đầu trên thiết bị di động ([#9352](https://github.com/nocobase/nocobase/pull/9352)) bởi @katherinehhh
  - sửa ẩn tùy chọn tạo nhanh cho trường chọn liên kết trong bảng con v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) bởi @katherinehhh
  - Sửa lỗi biến tham số truy vấn URL trở nên không hợp lệ sau khi chuyển đổi trang đã lưu trong bộ nhớ đệm ([#9263](https://github.com/nocobase/nocobase/pull/9263)) bởi @zhangzhonghe
- **[flow-engine]** Đã sửa lỗi thông báo xác thực trường bảng dữ liệu chưa được dịch trong biểu mẫu luồng v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) bởi @jiannx
- **[server]**

  - Đã sửa lỗi các yêu cầu khám phá OAuth của ứng dụng con được định tuyến như yêu cầu của ứng dụng chính ([#9383](https://github.com/nocobase/nocobase/pull/9383)) bởi @2013xile
  - xác thực tên gói plugin trước các thao tác trên hệ thống tệp ([#9367](https://github.com/nocobase/nocobase/pull/9367)) bởi @chenos
- **[client-v2]**

  - Đã sửa lỗi khi chọn trường liên kết trong cài đặt trường. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) bởi @gchust
  - Sửa lỗi trang 404 nhấp nháy sau khi ứng dụng khởi động ([#9365](https://github.com/nocobase/nocobase/pull/9365)) bởi @zhangzhonghe
  - Sửa lỗi giữ chỗ kéo khối trang v2 và vị trí thả ([#9361](https://github.com/nocobase/nocobase/pull/9361)) bởi @zhangzhonghe
  - Sửa lỗi một số trang v2 không tải được plugin từ xa ([#9369](https://github.com/nocobase/nocobase/pull/9369)) bởi @zhangzhonghe
- **[undefined]** Sửa các liên kết chết trong tài liệu đã dịch và bật phát hiện liên kết chết theo mặc định trong bản dựng tài liệu. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) bởi @Molunerfinn
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã sửa lỗi danh sách tin nhắn trong ứng dụng không làm mới sau khi nhận thông báo thời gian thực ([#9409](https://github.com/nocobase/nocobase/pull/9409)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** ngăn chỉnh sửa và xóa tất cả bản ghi trong quyền phạm vi tùy chỉnh cho các nguồn dữ liệu bên ngoài ([#9395](https://github.com/nocobase/nocobase/pull/9395)) bởi @katherinehhh
- **[AI: MCP server]** Đã sửa lỗi đóng gói MCP server để bao gồm các phụ thuộc thời gian chạy ([#9401](https://github.com/nocobase/nocobase/pull/9401)) bởi @2013xile
- **[Nguồn dữ liệu: Chính]** Đã sửa lỗi bảng cơ sở dữ liệu đã nhập sử dụng sai tên bảng có tiền tố khi tiền tố bảng được bật ([#9403](https://github.com/nocobase/nocobase/pull/9403)) bởi @2013xile
- **[Flow engine]** Đã sửa lỗi các khối do AI tạo ra không thể chuyển đổi từ các mẫu tham chiếu trở lại thành các mẫu trùng lặp. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) bởi @gchust
- **[AI employees]**

  - Sửa lỗi nút AI employee đọc trường tệp đính kèm liên kết trong workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) bởi @cgyrock
  - Sửa lỗi nút AI employee trong workflow không kết thúc đúng cách sau khi gán công cụ. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) bởi @cgyrock
- **[Hành động: Yêu cầu tùy chỉnh]** nâng cấp koa lên v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) bởi @chenos
- **[Khối: Kanban]**

  - Cải thiện kiểu nhỏ gọn của thẻ Kanban và tối ưu hóa lựa chọn mẫu cửa sổ bật lên tạo nhanh. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) bởi @jiannx
  - sửa lỗi ngăn ngắt dòng một từ trong trường văn bản dài của khối kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) bởi @katherinehhh
- **[Trường tập hợp: Công thức]** sửa lỗi trường công thức trong bảng con v2 không được kích hoạt để tự động tính toán ([#9354](https://github.com/nocobase/nocobase/pull/9354)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kiểm tra trùng lặp trên trường ngày tháng luôn thất bại bởi @mytharcher
- **[Chính sách mật khẩu]** Đã sửa lỗi người dùng bị khóa vĩnh viễn có thể đăng nhập sau khi khởi động lại dịch vụ bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi ngăn kéo chọn bản ghi bị che khuất trong cấu hình workflow phê duyệt bởi @zhangzhonghe
- **[Trình quản lý email]** Đã sửa lỗi hiển thị tiêu đề danh tính thư bởi @jiannx
- **[Trình quản lý sao lưu]** sửa thích ứng lược đồ pg bởi @Andrew1989Y
