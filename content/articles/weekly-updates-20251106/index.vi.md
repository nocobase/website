---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ chế độ kích hoạt \"Trước khi lưu dữ liệu\", thêm hỗ trợ phân trang cho bảng con, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có các vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Ngày phát hành: 2025-11-05*

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ gọi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher
- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher
- **[client]** Sửa lỗi "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe
- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile
- **[Workflow]** Đã giải quyết vấn đề trình điều phối workflow ở chế độ cụm không xác định chính xác trạng thái rảnh, có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher
- **[Mobile (không còn được hỗ trợ)]** Sửa lỗi popup giá trị mặc định của trường ngày trên thiết bị di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra khi trùng lặp workflow phê duyệt bởi @mytharcher
- **[Email manager]** collection mailMessages thêm chỉ mục bởi @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Ngày phát hành: 2025-11-04*

### 🚀 Cải tiến

- **[Workflow: Phê duyệt]** Thêm thông báo cho người được ủy quyền và người được thêm vào danh sách xử lý bởi @mytharcher

### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi trong chế độ tách dịch vụ, việc thực thi thủ công một workflow có chứa nút ngắt sẽ vẫn bị kẹt ở trạng thái chờ xử lý ([#7767](https://github.com/nocobase/nocobase/pull/7767)) bởi @mytharcher
- **[Email manager]** thêm migration cho các chỉ mục bởi @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Ngày phát hành: 2025-11-04*

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Không còn hỗ trợ tạo nút phê duyệt trong các nhánh song song để tránh các vấn đề do trạng thái quy trình gây ra bởi @mytharcher
- **[Email manager]** thêm nhật ký đồng bộ bởi @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Ngày phát hành: 2025-11-03*

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ chế độ kích hoạt "Trước khi dữ liệu được lưu" bởi @mytharcher

### 🚀 Cải tiến

- **[server]** Thêm nhật ký gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) bởi @2013xile
- **[Workflow: nút thông báo]** Thêm tùy chọn `ignoreFail` cho nút thông báo, cho phép tiếp tục workflow khi gửi thông báo thất bại ([#7736](https://github.com/nocobase/nocobase/pull/7736)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa cấu hình quy tắc liên kết quét mã QR trong bảng hành động ([#7693](https://github.com/nocobase/nocobase/pull/7693)) bởi @katherinehhh
  - Sửa lỗi quy tắc liên kết khối iframe bị lỗi trong modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) bởi @katherinehhh
- **[database]** Bỏ qua đồng bộ hóa giá trị mặc định cho các cột JSON của MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) bởi @2013xile
- **[Workflow]**

  - Sửa lỗi trong chế độ tách dịch vụ, việc xử lý không đúng hàng đợi chờ xử lý trong bộ nhớ khiến một số workflow không thực thi ([#7692](https://github.com/nocobase/nocobase/pull/7692)) bởi @mytharcher
  - Sửa giá trị trạng thái thực thi khi tạo với deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) bởi @mytharcher
  - Sửa lỗi sau khi xóa một nút bắt đầu nhánh, khóa của nút đầu tiên được giữ lại trong nhánh đã bị thay đổi sai thành một giá trị mới ([#7665](https://github.com/nocobase/nocobase/pull/7665)) bởi @mytharcher
- **[Kiểm soát truy cập]** Sửa thứ tự middleware của `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) bởi @2013xile
- **[File manager]** Sửa lỗi không thể tải lên tệp `.msg` đúng cách ([#7662](https://github.com/nocobase/nocobase/pull/7662)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa lỗi các tác vụ thủ công biến mất sau khi workflow bị vô hiệu hóa ([#7687](https://github.com/nocobase/nocobase/pull/7687)) bởi @mytharcher
- **[Trường collection: Phân cấp hành chính Trung Quốc]** Nhập dữ liệu thất bại khi thành phố và khu vực có cùng tên ([#7673](https://github.com/nocobase/nocobase/pull/7673)) bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi dịch thuật văn bản trạng thái trong thông báo hoàn thành phê duyệt, sử dụng ngôn ngữ mặc định của hệ thống để dịch khi người dùng chưa đặt tùy chọn ngôn ngữ bởi @mytharcher
  - Sửa locales bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Ngày phát hành: 2025-11-05*

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ gọi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đã sửa lỗi các nút hành động trong khối bảng không cập nhật chính xác sau khi chuyển trang, đảm bảo chức năng của chúng khớp với dữ liệu của trang hiện tại. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) bởi @gchust
- **[client]**

  - Sửa lỗi "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe
  - sửa lỗi dấu ba chấm (ellipsis) của trường tiêu đề trường liên kết không được áp dụng ([#7778](https://github.com/nocobase/nocobase/pull/7778)) bởi @katherinehhh
  - quy tắc liên kết của hành động cập nhật bản ghi không hoạt động ([#7774](https://github.com/nocobase/nocobase/pull/7774)) bởi @gchust
- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile
- **[Mobile (không còn được hỗ trợ)]** Sửa lỗi popup giá trị mặc định của trường ngày trên thiết bị di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Ngày phát hành: 2025-11-05*

### 🎉 Tính năng mới

- **[client]** thêm hỗ trợ phân trang cho bảng con ([#7754](https://github.com/nocobase/nocobase/pull/7754)) bởi @katherinehhh

### 🚀 Cải tiến

- **[undefined]** cập nhật tài liệu tiếng Anh của plugin biểu đồ ([#7748](https://github.com/nocobase/nocobase/pull/7748)) bởi @heziqiang
- **[telemetry]** Thêm số liệu đo từ xa cho số lượng ứng dụng con trực tuyến, v.v. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) bởi @2013xile
- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher
- **[Multi-app manager (không còn được hỗ trợ)]** Đã bật khởi động không đồng bộ cho các ứng dụng con bằng cách sử dụng hàng đợi ([#7749](https://github.com/nocobase/nocobase/pull/7749)) bởi @2013xile
- **[Trực quan hóa dữ liệu]** thêm tùy chọn định dạng thời gian dữ liệu biểu đồ ([#7763](https://github.com/nocobase/nocobase/pull/7763)) bởi @heziqiang
- **[Workflow: Phê duyệt]** Thêm thông báo cho người được ủy quyền và người được thêm vào danh sách xử lý bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi nhãn của các kiểu enum trong các thành phần liên quan đến biến không được hiển thị bằng ngôn ngữ chính xác. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) bởi @gchust
  - Sửa lỗi thiếu chỉ báo trường bắt buộc sau khi đặt xác thực giao diện người dùng ([#7760](https://github.com/nocobase/nocobase/pull/7760)) bởi @katherinehhh
  - sửa lỗi xóa ngày không có múi giờ trong biểu mẫu chỉnh sửa ([#7759](https://github.com/nocobase/nocobase/pull/7759)) bởi @katherinehhh
  - Sửa xác thực trường bắt buộc cho các quy tắc liên kết ([#7756](https://github.com/nocobase/nocobase/pull/7756)) bởi @zhangzhonghe
  - giải quyết lỗi Ngày không hợp lệ khi xóa Ngày được chỉ định trong bộ lọc… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) bởi @katherinehhh
  - Sửa lỗi xác thực bắt buộc cho trường Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) bởi @katherinehhh
  - Thêm cấu hình phạm vi dữ liệu cho các trường quan hệ trong biểu mẫu bộ lọc ([#7761](https://github.com/nocobase/nocobase/pull/7761)) bởi @zhangzhonghe
  - sửa lỗi định dạng thời gian trong các trường bảng con ([#7750](https://github.com/nocobase/nocobase/pull/7750)) bởi @katherinehhh
- **[flow-engine]**

  - khi giá trị bộ lọc trường được đặt thành false, yêu cầu có phạm vi dữ liệu không chính xác ([#7766](https://github.com/nocobase/nocobase/pull/7766)) bởi @gchust
  - không thể giải quyết giá trị trường liên kết của biến đối tượng hiện tại của biểu mẫu con ([#7751](https://github.com/nocobase/nocobase/pull/7751)) bởi @gchust
  - sửa lỗi: giải quyết vấn đề tham số yêu cầu trang sau khi xóa dữ liệu trên trang cuối cùng ([#7755](https://github.com/nocobase/nocobase/pull/7755)) bởi @katherinehhh
- **[server]** Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher
- **[Block: GridCard]** sửa lỗi trùng lặp dữ liệu giữa khối danh sách và khối thẻ lưới ([#7773](https://github.com/nocobase/nocobase/pull/7773)) bởi @katherinehhh
- **[Multi-app manager (không còn được hỗ trợ)]]** Collection không chính xác cho số liệu trạng thái ứng dụng con ([#7772](https://github.com/nocobase/nocobase/pull/7772)) bởi @2013xile
- **[Workflow]**

  - Đã giải quyết vấn đề trình điều phối workflow ở chế độ cụm không xác định chính xác trạng thái rảnh, có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher
  - Sửa lỗi trong chế độ tách dịch vụ, việc thực thi thủ công một workflow có chứa nút ngắt sẽ vẫn bị kẹt ở trạng thái chờ xử lý ([#7767](https://github.com/nocobase/nocobase/pull/7767)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi xảy ra khi trùng lặp workflow phê duyệt bởi @mytharcher
  - Không còn hỗ trợ tạo nút phê duyệt trong các nhánh song song để tránh các vấn đề do trạng thái quy trình gây ra bởi @mytharcher
- **[Email manager]**

  - thêm nhật ký đồng bộ bởi @jiannx
  - thêm migration cho các chỉ mục bởi @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Ngày phát hành: 2025-11-03*

### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ chế độ kích hoạt "Trước khi dữ liệu được lưu" bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** không thể tải các trường của biến biểu mẫu hiện tại ([#7745](https://github.com/nocobase/nocobase/pull/7745)) bởi @gchust
- **[Workflow: Phê duyệt]** Sửa locales bởi @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Ngày phát hành: 2025-11-02*

### 🚀 Cải tiến

- **[Workflow: nút thông báo]** Thêm tùy chọn `ignoreFail` cho nút thông báo, cho phép tiếp tục workflow khi gửi thông báo thất bại ([#7736](https://github.com/nocobase/nocobase/pull/7736)) bởi @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Ngày phát hành: 2025-11-02*

### 🐛 Sửa lỗi

- **[client]**

  - Đã giải quyết vấn đề biến trường liên kết trong biểu mẫu hiện tại không thể được xác định đúng cách, đảm bảo xử lý dữ liệu chính xác trong biểu mẫu. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) bởi @gchust
  - Đã giải quyết vấn đề gán một mảng làm giá trị hoặc giá trị mặc định cho trường "toOne" dẫn đến lỗi. Điều này đảm bảo xử lý đúng kết quả phân giải biến, cải thiện độ ổn định và độ chính xác của hệ thống. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) bởi @gchust
- **[Kiểm soát truy cập]** Sửa thứ tự middleware của `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) bởi @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Ngày phát hành: 2025-11-01*

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện thông báo lỗi hiển thị khi sao chép UID thất bại, cung cấp hướng dẫn rõ ràng hơn để giải quyết vấn đề. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) bởi @gchust

### 🐛 Sửa lỗi

- **[flow-engine]** các bước của luồng sự kiện không nên được hiển thị trong menu cấu hình ([#7723](https://github.com/nocobase/nocobase/pull/7723)) bởi @gchust
- **[client]** Đã sửa lỗi các trường không thể lọc được liệt kê sai trong các tùy chọn bộ lọc, đảm bảo chỉ các trường có thể áp dụng mới xuất hiện để lựa chọn. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) bởi @gchust
- **[Workflow]** Sửa giá trị trạng thái thực thi khi tạo với deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) bởi @mytharcher
- **[AI employees]** Tối ưu hóa hành vi tìm kiếm web và gợi ý người dùng cho Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) bởi @cgyrock
- **[Action: Xuất bản ghi]** giải quyết vấn đề hiển thị danh sách trường có thể xuất trong hành động xuất ([#7714](https://github.com/nocobase/nocobase/pull/7714)) bởi @katherinehhh
- **[Action: Nhập bản ghi]** giải quyết vấn đề hiển thị danh sách trường trong các trường có thể nhập ([#7710](https://github.com/nocobase/nocobase/pull/7710)) bởi @katherinehhh
- **[Action: Nhập bản ghi Pro]** giải quyết vấn đề hiển thị danh sách trường trong các trường có thể nhập bởi @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Ngày phát hành: 2025-10-31*

### 🎉 Tính năng mới

- **[client]** Luồng sự kiện: Giới thiệu các hành động được xác định trước mới để tăng cường các tùy chọn tùy chỉnh cho việc xử lý sự kiện, cho phép người dùng hợp lý hóa quy trình làm việc và cải thiện hiệu quả ([#7672](https://github.com/nocobase/nocobase/pull/7672)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[AI employees]** Cải thiện logic tương tác của nhân viên AI và tối ưu hóa luồng cấu hình tác vụ ([#7707](https://github.com/nocobase/nocobase/pull/7707)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]** giải quyết vấn đề giao diện người dùng khi xóa trường liên kết trong collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) bởi @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Ngày phát hành: 2025-10-30*

### 🚀 Cải tiến

- **[undefined]** cập nhật tài liệu tổng quan biểu đồ ([#7702](https://github.com/nocobase/nocobase/pull/7702)) bởi @heziqiang
- **[client]** hỗ trợ jsx trong trình soạn thảo mã JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) bởi @gchust
- **[AI employees]** Nhân viên AI có thể tự động truy vấn dữ liệu dựa trên siêu dữ liệu khối bảng ([#7703](https://github.com/nocobase/nocobase/pull/7703)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi quy tắc liên kết khối iframe bị lỗi trong modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) bởi @katherinehhh
  - Sửa cấu hình quy tắc liên kết quét mã QR trong bảng hành động ([#7693](https://github.com/nocobase/nocobase/pull/7693)) bởi @katherinehhh
- **[database]** Bỏ qua đồng bộ hóa giá trị mặc định cho các cột JSON của MySQL ([#7696](https://github.com/nocobase/nocobase/pull/7696)) bởi @2013xile
- **[Workflow]** Sửa lỗi trong chế độ tách dịch vụ, việc xử lý không đúng hàng đợi chờ xử lý trong bộ nhớ khiến một số workflow không thực thi ([#7692](https://github.com/nocobase/nocobase/pull/7692)) bởi @mytharcher
