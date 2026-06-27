---
title: "Cập nhật hàng tuần｜Plugin quản lý sao lưu mã nguồn mở"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 22 đến ngày 28 tháng 5 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Ngày phát hành: 2026-05-28*

### 🎉 Tính năng mới

* **[Workflow]** Đã thêm API quản trị viên để chạy lại các thực thi workflow đã bắt đầu từ nút đầu hoặc một nút được chỉ định. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher

### 🚀 Cải tiến

* **[client]** Đã loại bỏ tùy chọn Ẩn khỏi cài đặt mục menu. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

* **[client]**
  * Đã sửa lỗi cửa sổ popup chọn ngày trên thiết bị di động v2 sử dụng thời gian hiện tại thay vì giá trị của form. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  * Đã sửa lỗi cài đặt định dạng trường thời gian không có hiệu lực trong v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  * Đã tăng giới hạn tải lên tệp cho thành phần nhập quét v1 lên 10 MB. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  * Đã sửa lỗi trạng thái ẩn của liên kết subform không được đồng bộ hóa. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh
  * Đã sửa lỗi không thể thêm hàng thứ hai vào subtable trong subform. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  * Đã sửa lỗi tab trang biến mất sau khi chuyển đổi menu. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe
* **[flow-engine]** Đã sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi một form được gửi thành công trong popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust
* **[Workflow: Sự kiện hành động tùy chỉnh]** Đã sửa lỗi nút bảng hành động tùy chỉnh với nhiều ngữ cảnh bản ghi cho phép chọn workflow ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher
* **[Quản lý tệp]**
  * Đã sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên tệp để tránh tạo khóa đối tượng có ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher
  * Đã cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Ngày phát hành: 2026-05-26*

### 🐛 Sửa lỗi

* **[build]** Đã sửa lỗi đầu ra làm rối mã plugin server để tránh các biến toàn cục trình duyệt trong các gói runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn
* **[Workflow: Nút thủ công]** Đã sửa lỗi lưu tạm thời cho các tác vụ workflow thủ công không lưu lại các giá trị form đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher
* **[Nhân viên AI]** Đã sửa lỗi mô tả tên công cụ không chính xác trong prompt ngữ cảnh công việc. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock
* **[Quản lý tệp]** Đã hiển thị an toàn bản xem trước PDF bằng PDF.js thay vì hiển thị PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher
* **[Auth: OIDC]** Đã sửa lỗi rò rỉ token khi callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài. bởi @2013xile
* **[Workflow: Phê duyệt]**
  * Đã sửa lỗi API `<span>jobs:resume</span>` không được hỗ trợ bởi các nút phê duyệt. bởi @mytharcher
  * Đã sửa lỗi rút lại phê duyệt để cập nhật dữ liệu nghiệp vụ đã gửi trong khi tôn trọng quyền cập nhật của collection nguồn. bởi @mytharcher
  * Đã sửa lỗi các todo phê duyệt cũ khi workflow phê duyệt bị kết thúc bởi các lỗi nút không phải phê duyệt. bởi @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Ngày phát hành: 2026-05-22*

### 🎉 Tính năng mới

* **[Trình quản lý sao lưu]** Đã mã nguồn mở plugin Trình quản lý sao lưu. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) bởi @chenos

### 🚀 Cải tiến

* **[client]** Đã tối ưu hóa cài đặt hiển thị nút hành động. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) bởi @katherinehhh
* **[flow-engine]** Đã thêm hỗ trợ tìm kiếm vào menu cấu hình trường v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) bởi @zhangzhonghe
* **[Bảo mật]** Đã thêm đánh giá bảo mật phụ thuộc cho các pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) bởi @zhangzhonghe
* **[Trình quản lý thông báo]** Đã thay đổi chiến lược hàng đợi để tối ưu hóa hiệu suất gửi. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher
* **[AI: Cơ sở tri thức]** Đã bật khả năng sửa đổi lưu trữ vector cho cơ sở tri thức AI. bởi @cgyrock
* **[Workflow: Phê duyệt]** Đã cải thiện các phê duyệt liên quan với thẻ dòng thời gian. bởi @zhangzhonghe

### 🐛 Sửa lỗi

* **[client]**
  * Đã sửa lỗi các giá trị đã chọn bị xóa khi các trường liên kết phụ thuộc thay đổi trong liên kết phạm vi dữ liệu. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) bởi @katherinehhh
  * Đã sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe
  * Đã sửa lỗi form bộ lọc không thể sử dụng các biến của form hiện tại. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe
  * Đã sửa lỗi các khối v2 bị thu hẹp trở nên đầy đủ chiều rộng sau khi thoát khỏi chế độ chỉnh sửa. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) bởi @zhangzhonghe
  * Đã sửa lỗi trạng thái menu JS Field không chính xác trong subform. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) bởi @gchust
* **[flow-engine]** Đã sửa lỗi lựa chọn nhiều cho các trường nguồn dữ liệu bên ngoài trong form v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) bởi @katherinehhh
* **[Nhân viên AI]** Đã sửa lỗi xảy ra khi nhân viên AI truy cập cơ sở tri thức chỉ đọc. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) bởi @cgyrock
* **[Lịch]** Đã sửa lỗi không thể hiển thị đầy đủ nhiều mục hơn trong lịch. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe
* **[Hành động: Cập nhật hàng loạt]** Đã sửa lỗi hành động cập nhật hàng loạt đặt lại trạng thái tải sau khi cập nhật thất bại. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) bởi @katherinehhh
* **[Tài liệu API]** Đã sửa tài liệu API collection để các tham số truy vấn không còn can thiệp lẫn nhau. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx
* **[Workflow]** Đã thêm trạng thái tải cho việc thực thi workflow thủ công. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) bởi @mytharcher
* **[Trình quản lý di chuyển]** Đã sửa lỗi tạo tệp di chuyển thất bại khi sử dụng OceanBase. bởi @2013xile
* **[Lưu trữ tệp: S3(Pro)]** Đã sửa lỗi xử lý endpoint S3 Pro để tải lên server và xem trước URL không trùng lặp host bucket. bởi @mytharcher
* **[Workflow: Phê duyệt]** Đã sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền xảy ra đồng thời trên cùng một công việc phê duyệt. bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Ngày phát hành: 2026-05-26*

### 🎉 Tính năng mới

* **[client-v2]** Đã thêm menu Bảo mật và trang cài đặt Chính sách token vào admin v2. Trung tâm người dùng hiện hỗ trợ Thay đổi mật khẩu. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) bởi @Molunerfinn
* **[cli]** Đã thêm hỗ trợ xác thực cơ bản. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) bởi @chenos
* **[Chính sách mật khẩu]** Đã di chuyển plugin Chính sách mật khẩu vào shell admin client-v2, bao gồm các trang cài đặt Chính sách mật khẩu và Người dùng bị khóa, đồng thời thêm thực thi quy tắc phía client trên form Thay đổi mật khẩu của trung tâm người dùng. bởi @Molunerfinn

### 🚀 Cải tiến

* **[Trực quan hóa dữ liệu]** Đã thêm hỗ trợ client-v2 cho các khối biểu đồ. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) bởi @jiannx
* **[Workflow]** Đã tái cấu trúc kiểm tra khả dụng của nút không đồng bộ workflow. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) bởi @mytharcher

### 🐛 Sửa lỗi

* **[build]**
  * Các tài sản văn bản trong bản dựng server hiện được sao chép dưới dạng tệp thay vì được chuyển đổi thành các mô-đun JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) bởi @Molunerfinn
  * Đã sửa lỗi đầu ra làm rối mã plugin server để tránh các biến toàn cục trình duyệt trong các gói runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn
* **[client-v2]** Đã sửa lỗi siêu dữ liệu ngôn ngữ trình duyệt để trang ứng dụng tuân theo ngôn ngữ ứng dụng đã chọn thay vì được đánh dấu là tiếng Anh. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) bởi @Molunerfinn
* **[Quản lý tệp]** Đã hiển thị an toàn bản xem trước PDF bằng PDF.js thay vì hiển thị PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher
* **[Nhân viên AI]** Đã sửa lỗi mô tả tên công cụ không chính xác trong prompt ngữ cảnh công việc. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock
* **[Workflow: Nút thủ công]** Đã sửa lỗi lưu tạm thời cho các tác vụ workflow thủ công không lưu lại các giá trị form đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher
* **[Auth: OIDC]** Đã sửa lỗi rò rỉ token khi callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài. bởi @2013xile
* **[Workflow: Phê duyệt]**
  * Đã sửa lỗi rút lại phê duyệt để cập nhật dữ liệu nghiệp vụ đã gửi trong khi tôn trọng quyền cập nhật của collection nguồn. bởi @mytharcher
  * Đã sửa lỗi API `<span>jobs:resume</span>` không được hỗ trợ bởi các nút phê duyệt. bởi @mytharcher
  * Đã sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền xảy ra đồng thời trên cùng một công việc phê duyệt. bởi @mytharcher
  * Đã sửa lỗi các todo phê duyệt cũ khi workflow phê duyệt bị kết thúc bởi các lỗi nút không phải phê duyệt. bởi @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Ngày phát hành: 2026-05-22*

### 🎉 Tính năng mới

* **[cli]** Đã thêm lệnh tạo và khôi phục sao lưu. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) bởi @chenos
* **[Trình quản lý sao lưu]** Đã mã nguồn mở plugin Trình quản lý sao lưu. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) bởi @chenos
* **[Trình chỉnh sửa chủ đề]** Đã thêm hỗ trợ Trình chỉnh sửa chủ đề vào giao diện v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) bởi @zhangzhonghe
* **[Xác thực hai yếu tố (2FA)]** Đã thêm hỗ trợ liên kết, xác minh và cấu hình TOTP và xác thực hai yếu tố từ client v2. bởi @Molunerfinn

### 🚀 Cải tiến

* **[client]** Đã tối ưu hóa cài đặt hiển thị nút hành động. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) bởi @katherinehhh
* **[flow-engine]** Đã thêm hỗ trợ tìm kiếm vào menu cấu hình trường v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) bởi @zhangzhonghe
* **[cli]** Đã cải thiện luồng xác thực môi trường. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) bởi @chenos
* **[Bảo mật]** Đã thêm đánh giá bảo mật phụ thuộc cho các pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) bởi @zhangzhonghe
* **[Xác minh]** Đã thêm hỗ trợ client v2 cho plugin Xác minh, bao gồm trang cài đặt admin, mục trung tâm người dùng và form OTP SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) bởi @Molunerfinn
* **[Xác thực]** Đã sửa lỗi cài đặt thương hiệu tùy chỉnh trong client v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) bởi @zhangzhonghe
* **[Khối: Bản đồ]** Đã thêm hỗ trợ client v2 cho plugin bản đồ. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) bởi @jiannx
* **[Thương hiệu tùy chỉnh]** Đã thêm hỗ trợ cài đặt thương hiệu tùy chỉnh vào client v2. bởi @zhangzhonghe
* **[AI: Cơ sở tri thức]** Đã bật khả năng sửa đổi lưu trữ vector cho cơ sở tri thức AI. bởi @cgyrock
* **[Workflow: Phê duyệt]** Đã thêm cờ `<span>async</span>` cho các hướng dẫn phê duyệt để hỗ trợ API tạo nút mới trong canvas workflow. bởi @mytharcher

### 🐛 Sửa lỗi

* **[client]**
  * Đã sửa lỗi các giá trị đã chọn bị xóa khi các trường liên kết phụ thuộc thay đổi trong liên kết phạm vi dữ liệu. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) bởi @katherinehhh
  * Đã sửa lỗi tải chế độ dev cho các plugin lưu trữ đã xây dựng phụ thuộc vào các export có tên từ các plugin nguồn cục bộ. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) bởi @Molunerfinn
  * Đã sửa lỗi trạng thái menu JS Field không chính xác trong subform. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) bởi @gchust
  * Đã sửa lỗi các khối v2 bị thu hẹp trở nên đầy đủ chiều rộng sau khi thoát khỏi chế độ chỉnh sửa. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) bởi @zhangzhonghe
* **[client-v2]** Đã sửa lỗi đăng ký phụ thuộc dnd-kit không nhất quán. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) bởi @jiannx
* **[flow-engine]** Đã sửa lỗi lựa chọn nhiều cho các trường nguồn dữ liệu bên ngoài trong form v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) bởi @katherinehhh
* **[Khối: iframe]** Đã sửa lỗi nội dung iframe không lấp đầy chiều cao khối đã cấu hình. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) bởi @katherinehhh
* **[Nhân viên AI]**
  * Đã sửa lỗi xảy ra khi nhân viên AI truy cập cơ sở tri thức chỉ đọc. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) bởi @cgyrock
  * Đã sửa lỗi thẻ gọi công cụ AI không xuất hiện ngay lập tức khi các sự kiện công cụ được truyền phát bị phân tách. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) bởi @2013xile
  * Đã sửa lỗi xảy ra khi nhân viên AI truy cập cơ sở tri thức chỉ đọc. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) bởi @cgyrock
* **[Hành động: Xuất bản ghi]** Đã cải thiện hiệu suất cấu hình trường khi có nhiều trường liên kết. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) bởi @katherinehhh
* **[Hành động: Cập nhật hàng loạt]** Đã sửa lỗi hành động cập nhật hàng loạt đặt lại trạng thái tải sau khi cập nhật thất bại. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) bởi @katherinehhh
* **[Workflow]** Đã thêm trạng thái tải cho việc thực thi workflow thủ công. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) bởi @mytharcher
* **[Bản địa hóa]** Đã sửa lỗi bản dịch tham chiếu bản địa hóa tích hợp cho các tác vụ dịch AI. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) bởi @2013xile
* **[Trình quản lý di chuyển]** Đã sửa lỗi tạo tệp di chuyển thất bại khi sử dụng OceanBase. bởi @2013xile
* **[Lưu trữ tệp: S3(Pro)]** Đã sửa lỗi xử lý endpoint S3 Pro để tải lên server và xem trước URL không trùng lặp host bucket. bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Ngày phát hành: 2026-05-22*

### 🎉 Tính năng mới

* **[cli]** Đã thêm lệnh tạo và khôi phục sao lưu. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) bởi @chenos
* **[Trình quản lý sao lưu]** Đã mã nguồn mở plugin Trình quản lý sao lưu. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) bởi @chenos
* **[Trình chỉnh sửa chủ đề]** Đã thêm hỗ trợ Trình chỉnh sửa chủ đề vào giao diện v2. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) bởi @zhangzhonghe
* **[Xác thực hai yếu tố (2FA)]** Đã thêm hỗ trợ liên kết, xác minh và cấu hình TOTP và xác thực hai yếu tố từ client v2. bởi @Molunerfinn

### 🚀 Cải tiến

* **[cli]** Đã cải thiện luồng xác thực môi trường. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) bởi @chenos
* **[flow-engine]** Đã thêm hỗ trợ tìm kiếm vào menu cấu hình trường v2. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) bởi @zhangzhonghe
* **[client]** Đã tối ưu hóa cài đặt hiển thị nút hành động. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) bởi @katherinehhh
* **[Bảo mật]** Đã thêm đánh giá bảo mật phụ thuộc cho các pull request. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) bởi @zhangzhonghe
* **[Xác minh]** Đã thêm hỗ trợ client v2 cho plugin Xác minh, bao gồm trang cài đặt admin, mục trung tâm người dùng và form OTP SMS. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) bởi @Molunerfinn
* **[Xác thực]** Đã sửa lỗi cài đặt thương hiệu tùy chỉnh trong client v2. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) bởi @zhangzhonghe
* **[Khối: Bản đồ]** Đã thêm hỗ trợ client v2 cho plugin bản đồ. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) bởi @jiannx
* **[Thương hiệu tùy chỉnh]** Đã thêm hỗ trợ cài đặt thương hiệu tùy chỉnh vào client v2. bởi @zhangzhonghe
* **[AI: Cơ sở tri thức]** Đã bật khả năng sửa đổi lưu trữ vector cho cơ sở tri thức AI. bởi @cgyrock
* **[Workflow: Phê duyệt]** Đã thêm cờ `<span>async</span>` cho các hướng dẫn phê duyệt để hỗ trợ API tạo nút mới trong canvas workflow. bởi @mytharcher

### 🐛 Sửa lỗi

* **[client]**
  * Đã sửa lỗi tải chế độ dev cho các plugin lưu trữ đã xây dựng phụ thuộc vào các export có tên từ các plugin nguồn cục bộ. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) bởi @Molunerfinn
  * Đã sửa lỗi các khối v2 bị thu hẹp trở nên đầy đủ chiều rộng sau khi thoát khỏi chế độ chỉnh sửa. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) bởi @zhangzhonghe
  * Đã sửa lỗi các giá trị đã chọn bị xóa khi các trường liên kết phụ thuộc thay đổi trong liên kết phạm vi dữ liệu. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) bởi @katherinehhh
  * Đã sửa lỗi trạng thái menu JS Field không chính xác trong subform. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) bởi @gchust
* **[client-v2]** Đã sửa lỗi đăng ký phụ thuộc dnd-kit không nhất quán. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) bởi @jiannx
* **[flow-engine]** Đã sửa lỗi lựa chọn nhiều cho các trường nguồn dữ liệu bên ngoài trong form v2. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) bởi @katherinehhh
* **[Khối: iframe]** Đã sửa lỗi nội dung iframe không lấp đầy chiều cao khối đã cấu hình. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) bởi @katherinehhh
* **[Hành động: Xuất bản ghi]** Đã cải thiện hiệu suất cấu hình trường khi có nhiều trường liên kết. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) bởi @katherinehhh
* **[Nhân viên AI]**
  * Đã sửa lỗi xảy ra khi nhân viên AI truy cập cơ sở tri thức chỉ đọc. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) bởi @cgyrock
  * Đã sửa lỗi xảy ra khi nhân viên AI truy cập cơ sở tri thức chỉ đọc. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) bởi @cgyrock
  * Đã sửa lỗi thẻ gọi công cụ AI không xuất hiện ngay lập tức khi các sự kiện công cụ được truyền phát bị phân tách. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) bởi @2013xile
* **[Bản địa hóa]** Đã sửa lỗi bản dịch tham chiếu bản địa hóa tích hợp cho các tác vụ dịch AI. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) bởi @2013xile
* **[Hành động: Cập nhật hàng loạt]** Đã sửa lỗi hành động cập nhật hàng loạt đặt lại trạng thái tải sau khi cập nhật thất bại. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) bởi @katherinehhh
* **[Workflow]** Đã thêm trạng thái tải cho việc thực thi workflow thủ công. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) bởi @mytharcher
* **[Trình quản lý di chuyển]** Đã sửa lỗi tạo tệp di chuyển thất bại khi sử dụng OceanBase. bởi @2013xile
* **[Lưu trữ tệp: S3(Pro)]** Đã sửa lỗi xử lý endpoint S3 Pro để tải lên server và xem trước URL không trùng lặp host bucket. bởi @mytharcher
* **[Workflow: Phê duyệt]** Đã sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền xảy ra đồng thời trên cùng một công việc phê duyệt. bởi @mytharcher
