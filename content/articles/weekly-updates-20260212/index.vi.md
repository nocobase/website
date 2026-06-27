---
title: "Cập nhật hàng tuần｜Hỗ trợ chiều cao khối có thể cấu hình"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 6 tháng 2 đến ngày 12 tháng 2 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Ngày phát hành: 2026-02-11*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tùy chọn thành phần trường không được làm mới theo thời gian thực khi trường liên kết chuyển đổi chế độ ([#8611](https://github.com/nocobase/nocobase/pull/8611)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi chính tả ECharts bởi @heziqiang
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi thiếu giá trị trong popup chi tiết của "Đơn của tôi" bởi @mytharcher
  - Sửa lỗi xảy ra khi thực thi ở chế độ trước khi lưu bởi @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Ngày phát hành: 2026-02-09*

### 🐛 Sửa lỗi

- **[Thành phần trường: mặt nạ]** Sửa lỗi popup cài đặt trường mặt nạ không thể tải đúng tất cả vai trò người dùng. bởi @gchust
- **[Quy trình công việc: Phê duyệt]** Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Ngày phát hành: 2026-02-08*

### 🎉 Tính năng mới

- **[Quy trình công việc: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Ngày phát hành: 2026-02-06*

### 🎉 Tính năng mới

- **[Xác thực: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[Trường bộ sưu tập: Markdown(Vditor)]** Thêm tùy chọn cấu hình để đặt chế độ chỉnh sửa mặc định trong cài đặt thành phần. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) bởi @Cyx649312038

### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Sửa lỗ hổng của hành động nhập ([#8544](https://github.com/nocobase/nocobase/pull/8544)) bởi @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Ngày phát hành: 2026-02-12*

### 🎉 Tính năng mới

- **[Khối: GridCard]** hỗ trợ chiều cao khối có thể cấu hình ([#8583](https://github.com/nocobase/nocobase/pull/8583)) bởi @katherinehhh
- **[Hành động: Chỉnh sửa hàng loạt]** chỉnh sửa hàng loạt 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) bởi @jiannx

### 🚀 Cải tiến

- **[client]**

  - Bảng 2.0 hỗ trợ sắp xếp kéo thả ([#8540](https://github.com/nocobase/nocobase/pull/8540)) bởi @jiannx
  - Di chuyển cài đặt gán trường và giá trị mặc định sang cấu hình cấp biểu mẫu. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) bởi @chenos
- **[Bản địa hóa]** tự động tạo các khóa i18n bị thiếu ([#8588](https://github.com/nocobase/nocobase/pull/8588)) bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi dữ liệu được lọc không chính xác trong dropdown liên kết khi trường tiêu đề là khóa ngoại ([#8619](https://github.com/nocobase/nocobase/pull/8619)) bởi @katherinehhh
  - Sửa lỗi trường tệp đính kèm liên kết đã xóa không được lưu sau khi gửi trong biểu mẫu chỉnh sửa ([#8616](https://github.com/nocobase/nocobase/pull/8616)) bởi @katherinehhh
  - Sửa lỗi tùy chọn thành phần trường không được làm mới theo thời gian thực khi trường liên kết chuyển đổi chế độ ([#8611](https://github.com/nocobase/nocobase/pull/8611)) bởi @katherinehhh
  - Sửa lỗi các cột bảng không hiển thị lại sau khi nhấp vào Chạy trong trình chỉnh sửa cột JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) bởi @gchust
  - sửa lỗi không thể khôi phục dữ liệu đã chọn trong thành phần trường bộ chọn bản ghi sau khi chỉnh sửa ([#8610](https://github.com/nocobase/nocobase/pull/8610)) bởi @katherinehhh
- **[Trình quản lý tệp]** sửa lỗi thành phần trường tệp vẫn có thể mở hộp thoại chọn khi bị vô hiệu hóa ([#8617](https://github.com/nocobase/nocobase/pull/8617)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu: ECharts]** Sửa lỗi chính tả ECharts bởi @heziqiang
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi thiếu giá trị trong popup chi tiết của "Đơn của tôi" bởi @mytharcher
  - Sửa lỗi xảy ra khi thực thi ở chế độ trước khi lưu bởi @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Ngày phát hành: 2026-02-10*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, popup và tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) bởi @zhangzhonghe
- **[Quy trình công việc: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng các mô hình trường độc lập cho các trường liên kết trong biểu mẫu bộ lọc ([#8511](https://github.com/nocobase/nocobase/pull/8511)) bởi @zhangzhonghe
- **[Quy trình công việc: CC]** Tái cấu trúc plugin CC quy trình công việc để hỗ trợ kiến trúc FlowModel với khả năng tương thích v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Sửa lỗi không thể tạo đối tượng Blob trong khối JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) bởi @gchust
  - Sửa lỗi ngữ cảnh thực thi không chính xác cho "ctx.sql" trong Mô hình JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) bởi @gchust
- **[Thành phần trường: mặt nạ]** Sửa lỗi popup cài đặt trường mặt nạ không thể tải đúng tất cả vai trò người dùng. bởi @gchust
- **[Quy trình công việc: Phê duyệt]** Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Ngày phát hành: 2026-02-07*

### 🎉 Tính năng mới

- **[client]** hỗ trợ cấu hình các trường của trường bộ sưu tập liên kết trong khối biểu mẫu ([#8578](https://github.com/nocobase/nocobase/pull/8578)) bởi @katherinehhh
- **[Hành động: Sao chép bản ghi]** thêm hành động sao chép 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) bởi @katherinehhh
- **[Quy trình công việc]** Hỗ trợ sao chép, dán và di chuyển nút bằng cách kéo thả trên canvas quy trình công việc ([#8559](https://github.com/nocobase/nocobase/pull/8559)) bởi @mytharcher

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện tính năng tự động hoàn thành và gợi ý mã trong trình chỉnh sửa mã mô hình JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) bởi @gchust
- **[Quy trình công việc: Phê duyệt]** Xóa hỗ trợ cho các trường JS bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi hiển thị "đọc ẩn" tiềm ẩn trong chế độ không cấu hình. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) bởi @gchust
  - sửa lỗi bảng con (chỉnh sửa nội tuyến) vẫn hiển thị các cột ở chế độ chỉnh sửa sau khi chuyển sang chế độ xem chỉ đọc trong biểu mẫu chỉnh sửa ([#8589](https://github.com/nocobase/nocobase/pull/8589)) bởi @katherinehhh
- **[Flow engine]** Sửa lỗi sử dụng mẫu khối ở chế độ "Sao chép" gây ra popup trống khi nhấp vào nút hành động từ khối. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) bởi @gchust
- **[Khối: Bản đồ]** Sửa lỗi trùng lặp tùy chọn cấu hình 'Lưu làm mẫu' trong khối bản đồ ([#8584](https://github.com/nocobase/nocobase/pull/8584)) bởi @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Ngày phát hành: 2026-02-05*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình chế độ tải dữ liệu ([#8551](https://github.com/nocobase/nocobase/pull/8551)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]** sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8576](https://github.com/nocobase/nocobase/pull/8576)) bởi @katherinehhh
- **[Trình quản lý email]**

  - thêm bộ lọc vào quản lý bởi @jiannx
  - Khắc phục sự cố email trong cùng một hộp thư giữa nhiều người dùng và tối ưu hóa hiệu suất bởi @jiannx
  - sửa chuỗi hội thoại bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Ngày phát hành: 2026-02-10*

### 🎉 Tính năng mới

- **[client]**

  - Hỗ trợ cấu hình tiêu đề tab trình duyệt cho trang, tab trang, popup và tab popup ([#8590](https://github.com/nocobase/nocobase/pull/8590)) bởi @zhangzhonghe
  - hỗ trợ cấu hình các trường của trường bộ sưu tập liên kết trong khối biểu mẫu ([#8578](https://github.com/nocobase/nocobase/pull/8578)) bởi @katherinehhh
- **[Khối: GridCard]** hỗ trợ chiều cao khối có thể cấu hình ([#8583](https://github.com/nocobase/nocobase/pull/8583)) bởi @katherinehhh
- **[Hành động: Sao chép bản ghi]** thêm hành động sao chép 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]** Thêm kiểm soát ACL cho các API phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng các mô hình trường độc lập cho các trường liên kết trong biểu mẫu bộ lọc ([#8511](https://github.com/nocobase/nocobase/pull/8511)) bởi @zhangzhonghe
- **[Quy trình công việc: CC]** Tái cấu trúc plugin CC quy trình công việc để hỗ trợ kiến trúc FlowModel với khả năng tương thích v1/v2 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Sửa lỗi ngữ cảnh thực thi không chính xác cho "ctx.sql" trong Mô hình JS. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) bởi @gchust
  - Sửa lỗi không thể tạo đối tượng Blob trong khối JS. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) bởi @gchust
- **[client]**

  - Sửa lỗi các cột bảng không hiển thị lại sau khi nhấp vào Chạy trong trình chỉnh sửa cột JS. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) bởi @gchust
  - Sửa lỗi hiển thị "đọc ẩn" tiềm ẩn trong chế độ không cấu hình. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) bởi @gchust
  - sửa lỗi bảng con (chỉnh sửa nội tuyến) vẫn hiển thị các cột ở chế độ chỉnh sửa sau khi chuyển sang chế độ xem chỉ đọc trong biểu mẫu chỉnh sửa ([#8589](https://github.com/nocobase/nocobase/pull/8589)) bởi @katherinehhh
- **[Flow engine]** Sửa lỗi sử dụng mẫu khối ở chế độ "Sao chép" gây ra popup trống khi nhấp vào nút hành động từ khối. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) bởi @gchust
- **[Thành phần trường: mặt nạ]** Sửa lỗi popup cài đặt trường mặt nạ không thể tải đúng tất cả vai trò người dùng. bởi @gchust
- **[Quy trình công việc: Phê duyệt]** Sửa lỗi id không chính xác để tải bản ghi chi tiết bởi @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Ngày phát hành: 2026-02-06*

### 🎉 Tính năng mới

- **[Quy trình công việc]** Hỗ trợ sao chép, dán và di chuyển nút bằng cách kéo thả trên canvas quy trình công việc ([#8559](https://github.com/nocobase/nocobase/pull/8559)) bởi @mytharcher

### 🚀 Cải tiến

- **[Quy trình công việc: Phê duyệt]** Xóa hỗ trợ cho các trường JS bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[Khối: Bản đồ]** Sửa lỗi trùng lặp tùy chọn cấu hình 'Lưu làm mẫu' trong khối bản đồ ([#8584](https://github.com/nocobase/nocobase/pull/8584)) bởi @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Ngày phát hành: 2026-02-05*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình chế độ tải dữ liệu ([#8551](https://github.com/nocobase/nocobase/pull/8551)) bởi @zhangzhonghe
- **[flow-engine]** hỗ trợ env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) bởi @chenos
- **[Xác thực: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện tính năng tự động hoàn thành và gợi ý mã trong trình chỉnh sửa mã mô hình JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) bởi @gchust
- **[client]**

  - điều chỉnh cài đặt độ rộng cột thành lựa chọn thả xuống trong bảng con có thể chỉnh sửa nội tuyến ([#8561](https://github.com/nocobase/nocobase/pull/8561)) bởi @katherinehhh
  - Hỗ trợ vô hiệu hóa các tham số nối thêm mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile
- **[acl]** acl thêm phương thức generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) bởi @jiannx
- **[Trường bộ sưu tập: Markdown(Vditor)]** Thêm tùy chọn cấu hình để đặt chế độ chỉnh sửa mặc định trong cài đặt thành phần. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) bởi @Cyx649312038
- **[Quy trình công việc]** Thay đổi đường dẫn route của các trang con quy trình công việc, để đặt tất cả các trang quy trình công việc dưới tiền tố `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) bởi @mytharcher
- **[AI: Cơ sở kiến thức]** Tối ưu hóa đầu ra bản dựng để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock
- **[Đa không gian]** kiểm soát quyền truy cập đa không gian acl bởi @jiannx
- **[Xác thực: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các bộ xác thực hiện có dựa trên di động bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi cần làm mới trang để thêm bản ghi con sau khi bật bảng cây ([#8574](https://github.com/nocobase/nocobase/pull/8574)) bởi @katherinehhh
  - Sửa lỗi khoảng trống trong bố cục Lưới ([#8535](https://github.com/nocobase/nocobase/pull/8535)) bởi @zhangzhonghe
  - Sửa lỗi độ rộng cột không cập nhật trong bảng con (chỉnh sửa nội tuyến); nhập văn bản nhiều dòng không thay đổi kích thước theo độ rộng cột ([#8573](https://github.com/nocobase/nocobase/pull/8573)) bởi @katherinehhh
  - Sửa lỗi sử dụng "Tạo nhanh" của bộ chọn bản ghi liên kết trong biểu mẫu chỉnh sửa ghi đè dữ liệu biểu mẫu hiện có. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) bởi @gchust
  - sửa lỗi: ẩn "Bật bảng cây" và "Mở rộng tất cả các hàng theo mặc định" cho các bộ sưu tập không phải cây ([#8566](https://github.com/nocobase/nocobase/pull/8566)) bởi @katherinehhh
  - Sửa lỗi menu “Biểu mẫu (Thêm mới)” được hiển thị không chính xác trong popup hành động "Tạo mới". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) bởi @gchust
  - sửa lỗi trường nanoid không tạo lại giá trị mặc định sau khi gửi tạo ([#8538](https://github.com/nocobase/nocobase/pull/8538)) bởi @katherinehhh
  - Sửa lỗi luồng sự kiện không áp dụng được khi làm mới các khối mục tiêu qua popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) bởi @gchust
  - Sửa các sự cố đã biết liên quan đến lọc ([#8514](https://github.com/nocobase/nocobase/pull/8514)) bởi @zhangzhonghe
  - Sửa lỗi khiến khối dữ liệu làm mới nhiều lần sau khi gửi biểu mẫu. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) bởi @gchust
  - Sửa lỗi dữ liệu trang bị làm mới không chính xác sau khi mở và đóng popup lần đầu tiên. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) bởi @gchust
  - Sửa lỗi ngăn sử dụng các biến biểu mẫu để gán giá trị trong quy tắc liên kết cho các trường biểu mẫu con nhiều cấp một-nhiều. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) bởi @gchust
  - sửa lỗi hiển thị không chính xác khi đặt giá trị mặc định cho mô hình trường xếp tầng ([#8537](https://github.com/nocobase/nocobase/pull/8537)) bởi @katherinehhh
  - Sửa lỗi dữ liệu không làm mới sau khi thay đổi qua nhiều cấp popup và qua các khối. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) bởi @gchust
- **[flow-engine]**

  - sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8576](https://github.com/nocobase/nocobase/pull/8576)) bởi @katherinehhh
  - Sửa lỗi gửi biểu mẫu sau khi chuyển trang không làm mới trang. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) bởi @gchust
  - Sửa lỗi một số thư viện bên thứ ba không thể được nhập chính xác trong các khối JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) bởi @gchust
  - Sửa lỗi tải không chính xác một số thư viện ESM trong runjs do phân loại sai là mô-đun AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) bởi @gchust
  - sửa lỗi FilterByTK khi filterTargetKey là một mảng một phần tử trong nguồn dữ liệu bên ngoài ([#8522](https://github.com/nocobase/nocobase/pull/8522)) bởi @katherinehhh
  - sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8560](https://github.com/nocobase/nocobase/pull/8560)) bởi @katherinehhh
- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Sửa lỗi cấu hình hiển thị tên tệp trường URL tệp đính kèm không hoạt động trong biểu mẫu chỉnh sửa ([#8571](https://github.com/nocobase/nocobase/pull/8571)) bởi @katherinehhh
- **[Nhân viên AI]**

  - Sửa lỗi nút LLM không gửi được tin nhắn ([#8569](https://github.com/nocobase/nocobase/pull/8569)) bởi @2013xile
  - Sửa lỗi hệ thống không thể khởi động sau khi xây dựng ([#8523](https://github.com/nocobase/nocobase/pull/8523)) bởi @cgyrock
  - Sửa lỗi ngoại lệ xảy ra khi các công cụ được tự động gọi trong quá trình mô hình hóa dữ liệu AI ([#8532](https://github.com/nocobase/nocobase/pull/8532)) bởi @cgyrock
- **[Mẫu UI]** Sửa lỗi khi mở lại và gửi mẫu popup đã lưu cho biểu mẫu "Thêm mới" của trường liên kết. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) bởi @gchust
- **[Hành động: Nhập bản ghi]** Sửa lỗ hổng của hành động nhập ([#8544](https://github.com/nocobase/nocobase/pull/8544)) bởi @mytharcher
- **[Trình quản lý tệp]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, để tránh đường dẫn truy cập ra ngoài thư mục gốc tài liệu ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher
- **[Quy trình công việc]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi bộ sưu tập, để tránh lỗi xảy ra khi bộ sưu tập bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi tham số và tải trọng không chính xác khi kích hoạt quy trình công việc tùy chỉnh bởi @mytharcher
- **[Đa không gian]**

  - xóa thuộc tính read-pretty cho trường không gian bởi @jiannx
  - thêm script di chuyển để xóa x-ready-pretty trong trường không gian bởi @jiannx
- **[AI: Cơ sở kiến thức]** Sửa lỗi hệ thống không thể khởi động sau khi xây dựng bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]** Sửa số đếm trong kết quả nhập và bản dịch thông báo bởi @mytharcher
- **[Quy trình công việc: Luồng con]** Sửa đường dẫn route của liên kết quy trình công việc bởi @mytharcher
- **[In mẫu]** sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi hiệu suất do trường JSON trong danh sách tải (MySQL) bởi @mytharcher
  - Thêm khả năng chịu lỗi khi quy trình công việc bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
  - Sửa lỗi xảy ra khi thêm vai trò cho người dùng nếu quy trình công việc của đối tượng bị vô hiệu hóa bởi @mytharcher
- **[Trình quản lý email]** nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải tệp đính kèm thất bại bởi @jiannx
- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu thông tin di động bởi @2013xile
