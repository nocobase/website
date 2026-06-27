---
title: "Cập nhật hàng tuần｜Plugin thương mại mã nguồn mở và cập nhật giấy phép từ AGPL-3.0 sang Apache-2.0"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 13 tháng 2 đến ngày 26 tháng 2 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.5](https://www.nocobase.com/en/blog/v2.0.5)

*Ngày phát hành: 2026-02-26*

### 🐛 Sửa lỗi

- **[client]** Trên thiết bị di động, đóng menu trước rồi mới thực hiện chuyển trang ([#8699](https://github.com/nocobase/nocobase/pull/8699)) bởi @zhangzhonghe
- **[AI LLM: GigaChat]** Đã sửa lỗi plugin GigaChat không hoạt động trong phiên bản 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) bởi @cgyrock
- **[AI employees]**

  - Thống nhất đầu vào tệp cho các API chatGPT bằng ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) bởi @cgyrock
  - Sửa lỗi ai agent khi người dùng gửi tin nhắn mới mà không xác nhận thực thi công cụ ([#8697](https://github.com/nocobase/nocobase/pull/8697)) bởi @cgyrock
- **[AI: Knowledge base]** Đã sửa lỗi khởi động plugin cơ sở kiến thức AI. bởi @cgyrock
- **[Email manager]** Lỗi hiển thị hình ảnh bởi @jiannx

### [v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

*Ngày phát hành: 2026-02-25*

### 🎉 Tính năng mới

- **[undefined]**

  - Thêm plugin "Khối tham chiếu" thử nghiệm, cho phép tái sử dụng các khối hiện có bằng cách tham chiếu hoặc sao chép. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) bởi @gchust
  - Bản nháp biểu mẫu bởi @chenos
- **[acl]** Mã nguồn mở các plugin thương mại và cập nhật giấy phép từ AGPL-3.0 sang Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) bởi @chenos
- **[client]**

  - Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, cửa sổ bật lên và tab cửa sổ bật lên ([#8590](https://github.com/nocobase/nocobase/pull/8590)) bởi @zhangzhonghe
  - hỗ trợ cấu hình các trường của trường collection liên kết trong khối biểu mẫu ([#8578](https://github.com/nocobase/nocobase/pull/8578)) bởi @katherinehhh
  - Hỗ trợ cấu hình chế độ tải dữ liệu ([#8551](https://github.com/nocobase/nocobase/pull/8551)) bởi @zhangzhonghe
  - thêm thành phần trường bảng con (chỉnh sửa bật lên) ([#8280](https://github.com/nocobase/nocobase/pull/8280)) bởi @katherinehhh
  - Khi tạo collection, có thể thay đổi loại trường id mặc định ([#8129](https://github.com/nocobase/nocobase/pull/8129)) bởi @cgyrock
  - thêm hỗ trợ cho cài đặt thêm/chọn/hủy liên kết trong biểu mẫu con nhiều-nhiều ([#8099](https://github.com/nocobase/nocobase/pull/8099)) bởi @katherinehhh
  - Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề ([#7960](https://github.com/nocobase/nocobase/pull/7960)) bởi @ljmiaoo
  - hỗ trợ thiết lập quy tắc sắp xếp mặc định trong khối chi tiết ([#8070](https://github.com/nocobase/nocobase/pull/8070)) bởi @katherinehhh
  - Hỗ trợ thiết lập kiểu dữ liệu cho trường Số (tùy chọn: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) bởi @chenos
  - hỗ trợ sắp xếp trường cột trong bảng ([#7900](https://github.com/nocobase/nocobase/pull/7900)) bởi @katherinehhh
  - thêm hỗ trợ tạo nhanh cho lựa chọn trường liên kết ([#7887](https://github.com/nocobase/nocobase/pull/7887)) bởi @katherinehhh
  - hỗ trợ bộ chọn phân cấp cho trường collection dạng cây ([#7846](https://github.com/nocobase/nocobase/pull/7846)) bởi @katherinehhh
  - Hỗ trợ kéo thả cho các thao tác cột trong bảng ([#7842](https://github.com/nocobase/nocobase/pull/7842)) bởi @zhangzhonghe
  - thêm hỗ trợ phân trang cho bảng con ([#7754](https://github.com/nocobase/nocobase/pull/7754)) bởi @katherinehhh
  - Event Flow: Giới thiệu các hành động định nghĩa sẵn mới để tăng cường tùy chọn tùy chỉnh cho việc xử lý sự kiện, cho phép người dùng hợp lý hóa quy trình làm việc và cải thiện hiệu quả ([#7672](https://github.com/nocobase/nocobase/pull/7672)) bởi @zhangzhonghe
  - Thêm khối markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) bởi @katherinehhh
  - Hỗ trợ thiết lập quy tắc liên kết cho biểu mẫu con ([#7640](https://github.com/nocobase/nocobase/pull/7640)) bởi @zhangzhonghe
  - Đã thêm hỗ trợ cho trình lắng nghe sự kiện nhấp chuột vào hàng trong bảng, cho phép người dùng thực thi các hành động cụ thể khi một hàng trong bảng được nhấp vào ([#7622](https://github.com/nocobase/nocobase/pull/7622)) bởi @zhangzhonghe
  - Thêm hỗ trợ cho các biến tùy chỉnh ([#7585](https://github.com/nocobase/nocobase/pull/7585)) bởi @zhangzhonghe
  - Thêm biến "Loại thiết bị hiện tại" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) bởi @zhangzhonghe
- **[flow-engine]** hỗ trợ env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) bởi @chenos
- **[server]** Tái cấu trúc app supervisor để hỗ trợ quản lý đa ứng dụng trên các tình huống khác nhau ([#8043](https://github.com/nocobase/nocobase/pull/8043)) bởi @2013xile
- **[test]** thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ sở ([#8343](https://github.com/nocobase/nocobase/pull/8343)) bởi @cgyrock
- **[Action: Batch edit]** chỉnh sửa hàng loạt 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) bởi @jiannx
- **[Block: GridCard]**

  - hỗ trợ chiều cao khối có thể cấu hình ([#8583](https://github.com/nocobase/nocobase/pull/8583)) bởi @katherinehhh
  - Thêm khối thẻ lưới 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) bởi @katherinehhh
- **[Action: Duplicate record]** thêm hành động sao chép 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) bởi @katherinehhh
-


Do giới hạn về không gian, vui lòng tham khảo liên kết bên dưới để xem ghi chú phát hành đầy đủ.

[https://www.nocobase.com/en/blog/v2.0.3](https://www.nocobase.com/en/blog/v2.0.3)

### [v1.9.48](https://www.nocobase.com/en/blog/v1.9.48)

*Ngày phát hành: 2026-02-24*

### 🚀 Cải tiến

- **[Access control]** Cung cấp API sanitize để lọc các giá trị liên kết trong hành động ([#8601](https://github.com/nocobase/nocobase/pull/8601)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Workflow: Approval]** Lọc các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền hạn bởi @mytharcher

### [v2.0.2](https://www.nocobase.com/en/blog/v2.0.2])

*Ngày phát hành: 2026-02-22*

### 🐛 Sửa lỗi

- **[Calendar]** Sửa lỗi bản địa hóa lịch và định dạng ngày tháng ([#8498](https://github.com/nocobase/nocobase/pull/8498)) bởi @sembaev-a-a

### [v2.0.1](https://www.nocobase.com/en/blog/v2.0.1)

*Ngày phát hành: 2026-02-16*

### 🐛 Sửa lỗi

- **[AI employees]** Sửa lỗi OOM trình duyệt khi sử dụng AI employee ([#8653](https://github.com/nocobase/nocobase/pull/8653)) bởi @mytharcher

### [v1.9.47](https://www.nocobase.com/en/blog/v1.9.47)

*Ngày phát hành: 2026-02-13*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi trường tệp đính kèm liên kết đã xóa không được lưu sau khi gửi trong biểu mẫu chỉnh sửa ([#8616](https://github.com/nocobase/nocobase/pull/8616)) bởi @katherinehhh
- **[utils]** Sửa lỗi bảo mật của công cụ đánh giá `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) bởi @mytharcher
- **[Workflow: Approval]** Sửa lỗi dữ liệu phê duyệt không hiển thị trong cửa sổ bật lên chi tiết bản ghi nếu chế độ workflow được đặt thành "Trước khi lưu" bởi @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.2](https://www.nocobase.com/en/blog/v2.1.0-beta.2)

*Ngày phát hành: 2026-02-22*

### 🐛 Sửa lỗi

- **[Calendar]** Sửa lỗi bản địa hóa lịch và định dạng ngày tháng ([#8498](https://github.com/nocobase/nocobase/pull/8498)) bởi @sembaev-a-a
- **[AI employees]** Sửa lỗi OOM trình duyệt khi sử dụng AI employee ([#8653](https://github.com/nocobase/nocobase/pull/8653)) bởi @mytharcher

### [v2.1.0-beta.1](https://www.nocobase.com/en/blog/v2.1.0-beta.1)

*Ngày phát hành: 2026-02-14*

### 🎉 Tính năng mới

- **[server]** Tái cấu trúc app supervisor để hỗ trợ quản lý đa ứng dụng trên các tình huống khác nhau ([#8043](https://github.com/nocobase/nocobase/pull/8043)) bởi @2013xile

### 🚀 Cải tiến

- **[client]**
  - Cải thiện giao diện gán trường ngày/giờ để hỗ trợ chọn ngày/giờ tương đối. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) bởi @gchust
  - Hỗ trợ chỉ định trường tiêu đề cho các trường liên kết khi gán trường. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) bởi @gchust

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Sửa lỗi không thể mở rộng menu con của trường bộ lọc khi có từ khóa tìm kiếm. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) bởi @gchust
  - sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con bật lên khi createModelOptions được cấu hình ([#8560](https://github.com/nocobase/nocobase/pull/8560)) bởi @katherinehhh
- **[client]**

  - Sửa lỗi gán một bản ghi duy nhất cho trường quan hệ nhiều-nhiều cho kết quả không chính xác. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) bởi @gchust
  - phân tích cú pháp ngày bằng bộ chọn ngày và thêm xác thực độ mạnh mật khẩu, v.v. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) bởi @jiannx
  - Sửa lỗi khoảng cách do các hành động liên kết ẩn trong cột hành động của bảng ([#8646](https://github.com/nocobase/nocobase/pull/8646)) bởi @zhangzhonghe
  - Sửa lỗi không thể đóng `Action.Modal` sau một số tương tác ([#8642](https://github.com/nocobase/nocobase/pull/8642)) bởi @mytharcher
  - sửa lỗi cú pháp khi mục markdown hiển thị Liquid không hợp lệ ([#8637](https://github.com/nocobase/nocobase/pull/8637)) bởi @katherinehhh
  - Sửa các yêu cầu phân tích cú pháp không cần thiết từ phía máy chủ cho các thuộc tính trường nhiều-nhiều trong khối biểu mẫu. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) bởi @gchust
  - sửa lỗi thiếu định dạng số cho các trường công thức số và cài đặt định dạng ngày cho các trường công thức ngày ([#8625](https://github.com/nocobase/nocobase/pull/8625)) bởi @katherinehhh
  - sửa lỗi hiển thị đường viền trên cùng không đầy đủ trên mục biểu mẫu đầu tiên ([#8623](https://github.com/nocobase/nocobase/pull/8623)) bởi @katherinehhh
  - sửa: ẩn "Bật bảng dạng cây" và "Mở rộng tất cả các hàng theo mặc định" cho các collection không phải dạng cây ([#8566](https://github.com/nocobase/nocobase/pull/8566)) bởi @katherinehhh
- **[utils]** Sửa lỗi bảo mật của công cụ đánh giá `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) bởi @mytharcher
- **[AI employees]**

  - Sửa lỗi các liên kết trích dẫn từ tìm kiếm web AI không được hiển thị trong hộp chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) bởi @cgyrock
  - sửa lỗi tham số API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) bởi @cgyrock
- **[Template print]** sửa lỗi các trường có cùng khóa dẫn đến lỗi hiển thị bởi @jiannx
- **[Workflow: Approval]**

  - Sửa lỗi xảy ra khi phê duyệt bản ghi đã bị xóa bởi @mytharcher
  - Sửa lỗi dữ liệu phê duyệt không hiển thị trong cửa sổ bật lên chi tiết bản ghi nếu chế độ workflow được đặt thành "Trước khi lưu" bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.6](https://www.nocobase.com/en/blog/v2.1.0-alpha.6)

*Ngày phát hành: 2026-02-25*

### 🎉 Tính năng mới

- **[acl]** Mã nguồn mở các plugin thương mại và cập nhật giấy phép từ AGPL-3.0 sang Apache-2.0 ([#8682](https://github.com/nocobase/nocobase/pull/8682)) bởi @chenos

### 🚀 Cải tiến

- **[undefined]** Cập nhật tài liệu ai employee ([#8690](https://github.com/nocobase/nocobase/pull/8690)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]**

  - Thống nhất hành vi phân trang trên thiết bị di động cho bảng và thẻ lưới ([#8691](https://github.com/nocobase/nocobase/pull/8691)) bởi @zhangzhonghe
  - bộ lọc khối biểu đồ không hoạt động ([#8671](https://github.com/nocobase/nocobase/pull/8671)) bởi @chenos
- **[AI employees]** API aiTools:list trả về 403 ([#8672](https://github.com/nocobase/nocobase/pull/8672)) bởi @chenos
- **[Localization]** cải thiện việc xử lý các khóa i18n bị thiếu ([#8673](https://github.com/nocobase/nocobase/pull/8673)) bởi @chenos

### [v2.1.0-alpha.3](https://www.nocobase.com/en/blog/v2.1.0-alpha.3)

*Ngày phát hành: 2026-02-16*

### 🐛 Sửa lỗi

- **[AI employees]** Sửa lỗi OOM trình duyệt khi sử dụng AI employee ([#8653](https://github.com/nocobase/nocobase/pull/8653)) bởi @mytharcher

### [v2.1.0-alpha.2](https://www.nocobase.com/en/blog/v2.1.0-alpha.2)

*Ngày phát hành: 2026-02-15*

### 🎉 Tính năng mới

- **[Workflow: Approval]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher
- **[Auth: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[AI: Knowledge base]** Tối ưu hóa đầu ra bản dựng để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock
- **[Multi-space]** kiểm soát quyền truy cập acl của multi-space bởi @jiannx
- **[Action: Export records Pro]** Cải thiện phạm vi dữ liệu hành động xuất dựa trên các bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh
- **[Workflow: Approval]**

  - Xóa hỗ trợ cho các trường JS bởi @zhangzhonghe
  - Đơn giản hóa các tham số trong truy vấn và cải thiện hiệu suất bởi @mytharcher
  - Triển khai kiểm soát truy cập cho các API để ngăn chặn các thao tác dữ liệu trái phép bởi @mytharcher
  - Thêm logic sửa chữa cho đối tượng đồng bộ sau khi di chuyển bởi @mytharcher
- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các authenticator hiện có dựa trên số điện thoại di động bởi @2013xile

### 🐛 Sửa lỗi

- **[Multi-space]**

  - thêm script di chuyển để xóa x-ready-pretty trong trường space bởi @jiannx
  - Không gian liên quan khi thêm dữ liệu liên kết bởi @jiannx
  - Màu sắc của bộ chọn không gian theo chủ đề bởi @jiannx
  - xóa thuộc tính read-pretty cho trường space bởi @jiannx
- **[Field component: mask]** Sửa lỗi cửa sổ bật lên cài đặt trường mặt nạ không thể tải tất cả các vai trò người dùng một cách chính xác. bởi @gchust
- **[Action: Import records Pro]**

  - Sửa lỗi workflow được kích hoạt bởi quá trình nhập không đồng bộ bị trì hoãn thực thi bởi @mytharcher
  - Sửa số lượng trong kết quả nhập và bản dịch thông báo bởi @mytharcher
- **[AI: Knowledge base]** Sửa lỗi hệ thống không thể khởi động sau khi xây dựng bởi @cgyrock
- **[Data source: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi xảy ra khi phương thức không có trong ngữ cảnh bởi @mytharcher
- **[Workflow: Custom action event]** Sửa lỗi tham số và payload không chính xác khi kích hoạt workflow tùy chỉnh bởi @mytharcher
- **[Action: Export records Pro]** Sửa lỗi khi các ứng dụng con thực thi tác vụ nhập/xuất không đồng bộ trong khi ứng dụng chính không bật plugin import/export pro bởi @cgyrock
- **[Workflow: Webhook]**

  - Sửa lỗi 404 xảy ra khi đăng lên URL webhook trong ứng dụng con bởi @mytharcher
  - Sửa lỗi thiếu dữ liệu body khi phân tích cú pháp body không được cấu hình bởi @mytharcher
- **[Workflow: Subflow]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher
- **[Template print]**

  - sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh
  - sửa lỗi các trường có cùng khóa dẫn đến lỗi hiển thị bởi @jiannx
  - Sửa lỗi cửa sổ bật lên cấu hình mẫu bị che khuất bởi @zhangzhonghe
  - xóa các nút chân trang khỏi cấu hình mẫu in bởi @katherinehhh
  - Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx
  - hỗ trợ trường space bởi @jiannx
  - hiển thị các trường space trong phiên bản 2.0 bởi @jiannx
- **[File storage: S3(Pro)]** Sửa lỗi chế độ đổi tên tệp không hoạt động bởi @mytharcher
- **[Data visualization: ECharts]** Sửa lỗi chính tả ECharts bởi @heziqiang
- **[Workflow: Approval]**

  - Sửa lỗi xảy ra khi phê duyệt bản ghi đã bị xóa bởi @mytharcher
  - Sửa lỗi xảy ra khi thực thi ở chế độ trước khi lưu bởi @mytharcher
  - Sửa lỗi dữ liệu phê duyệt không hiển thị trong cửa sổ bật lên chi tiết bản ghi nếu chế độ workflow được đặt thành "Trước khi lưu" bởi @mytharcher
  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Sửa lỗi thiếu giá trị từ cửa sổ bật lên chi tiết của "Đơn của tôi" bởi @mytharcher
  - Sửa lỗi xảy ra trong cửa sổ bật lên bản ghi phê duyệt 1.x bởi @mytharcher
  - Sửa lỗi hiệu suất do trường JSON trong quá trình tải danh sách (MySQL) bởi @mytharcher
  - Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher
  - Sửa lỗi đồng thời khiến việc thực thi được tiếp tục lặp lại bởi @mytharcher
  - Sửa lỗi xây dựng do thiếu phụ thuộc bởi @mytharcher
  - Sửa lỗi bản ghi không chính xác được tải do tham số sai bởi @mytharcher
  - Sửa lỗi trả lại phê duyệt cho nút trước đó nhưng lại trả về điểm bắt đầu bởi @mytharcher
  - Sửa lỗi xảy ra khi thêm vai trò cho người dùng nếu workflow của đối tượng bị vô hiệu hóa bởi @mytharcher
  - Sửa lỗi khối giá trị không hiển thị do thiếu thành phần `ValueBlock.Result` bởi @mytharcher
  - Sửa lỗi các trường không được hiển thị trên thẻ tác vụ phê duyệt bởi @zhangzhonghe
  - Sửa lỗi các trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher
- **[Email manager]**

  - sửa chuỗi hội thoại bởi @jiannx
  - Sửa lỗi liên kết trả lời Outlook đôi khi bị ngắt kết nối bởi @jiannx
  - nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải tệp đính kèm thất bại bởi @jiannx
  - Sửa lỗi email trong cùng một hộp thư giữa nhiều người dùng và tối ưu hóa hiệu suất bởi @jiannx
  - thêm bộ lọc vào quản lý bởi @jiannx
  - hiển thị nút trả lời tất cả và phạm vi dữ liệu hỗ trợ lọc các tin nhắn con. bởi @jiannx
  - Sửa lỗi cửa sổ bật lên cấu hình email bị che khuất bởi @zhangzhonghe
- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số điện thoại di động bởi @2013xile
- **[Migration manager]** Sửa lỗi treo tiềm ẩn do ghi nhật ký các câu lệnh SQL quá lớn có trong các ngoại lệ lỗi di chuyển bởi @cgyrock

### [v2.1.0-alpha.1](https://www.nocobase.com/en/blog/v2.1.0-alpha.1)

*Ngày phát hành: 2026-02-14*

### 🎉 Tính năng mới

- **[Action: Batch edit]** chỉnh sửa hàng loạt 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) bởi @jiannx

### 🚀 Cải tiến

- **[client]**

  - Cải thiện giao diện gán trường ngày/giờ để hỗ trợ chọn ngày/giờ tương đối. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) bởi @gchust
  - Hỗ trợ chỉ định trường tiêu đề cho các trường liên kết khi gán trường. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) bởi @gchust
  - Bảng 2.0 hỗ trợ sắp xếp kéo thả ([#8540](https://github.com/nocobase/nocobase/pull/8540)) bởi @jiannx
  - Di chuyển cài đặt gán trường và giá trị mặc định sang cấu hình cấp biểu mẫu. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) bởi @chenos
- **[Localization]** tự động tạo các khóa i18n bị thiếu ([#8588](https://github.com/nocobase/nocobase/pull/8588)) bởi @jiannx

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi không thể mở rộng menu con của trường bộ lọc khi có từ khóa tìm kiếm. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) bởi @gchust
- **[client]**

  - Sửa lỗi gán một bản ghi duy nhất cho trường quan hệ nhiều-nhiều cho kết quả không chính xác. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) bởi @gchust
  - phân tích cú pháp ngày bằng bộ chọn ngày và thêm xác thực độ mạnh mật khẩu, v.v. ([#8647](https://github.com/nocobase/nocobase/pull/8647)) bởi @jiannx
  - Sửa lỗi khoảng cách do các hành động liên kết ẩn trong cột hành động của bảng ([#8646](https://github.com/nocobase/nocobase/pull/8646)) bởi @zhangzhonghe
  - sửa lỗi cú pháp khi mục markdown hiển thị Liquid không hợp lệ ([#8637](https://github.com/nocobase/nocobase/pull/8637)) bởi @katherinehhh
  - Sửa các yêu cầu phân tích cú pháp không cần thiết từ phía máy chủ cho các thuộc tính trường nhiều-nhiều trong khối biểu mẫu. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) bởi @gchust
  - Sửa lỗi không thể đóng `Action.Modal` sau một số tương tác ([#8642](https://github.com/nocobase/nocobase/pull/8642)) bởi @mytharcher
  - sửa lỗi thiếu định dạng số cho các trường công thức số và cài đặt định dạng ngày cho các trường công thức ngày ([#8625](https://github.com/nocobase/nocobase/pull/8625)) bởi @katherinehhh
  - sửa lỗi hiển thị đường viền trên cùng không đầy đủ trên mục biểu mẫu đầu tiên ([#8623](https://github.com/nocobase/nocobase/pull/8623)) bởi @katherinehhh
  - Sửa lỗi trường tệp đính kèm liên kết đã xóa không được lưu sau khi gửi trong biểu mẫu chỉnh sửa ([#8616](https://github.com/nocobase/nocobase/pull/8616)) bởi @katherinehhh
  - sửa lỗi dữ liệu được lọc không chính xác trong dropdown liên kết khi trường tiêu đề là khóa ngoại ([#8619](https://github.com/nocobase/nocobase/pull/8619)) bởi @katherinehhh
  - sửa lỗi không thể khôi phục dữ liệu đã chọn trong thành phần trường chọn bản ghi sau khi chỉnh sửa ([#8610](https://github.com/nocobase/nocobase/pull/8610)) bởi @katherinehhh
  - Sửa lỗi các tùy chọn thành phần trường không được làm mới theo thời gian thực khi trường liên kết chuyển đổi chế độ ([#8611](https://github.com/nocobase/nocobase/pull/8611)) bởi @katherinehhh
- **[utils]** Sửa lỗi bảo mật của công cụ đánh giá `formula.js` ([#8416](https://github.com/nocobase/nocobase/pull/8416)) bởi @mytharcher
- **[AI employees]**

  - Sửa lỗi các liên kết trích dẫn từ tìm kiếm web AI không được hiển thị trong hộp chat ([#8651](https://github.com/nocobase/nocobase/pull/8651)) bởi @cgyrock
  - sửa lỗi tham số API openai ([#8633](https://github.com/nocobase/nocobase/pull/8633)) bởi @cgyrock
- **[File manager]** sửa lỗi thành phần trường tệp vẫn có thể mở hộp thoại chọn khi bị vô hiệu hóa ([#8617](https://github.com/nocobase/nocobase/pull/8617)) bởi @katherinehhh
