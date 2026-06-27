---
title: "Cập nhật hàng tuần｜Bổ sung khả năng SKILLS cho nhân viên AI"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 20 tháng 3 đến ngày 26 tháng 3 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Ngày phát hành: 2026-03-25*

### 🚀 Cải tiến

- **[client]** Tối ưu hóa bố cục ngang của các hành động biểu mẫu ([#8869](https://github.com/nocobase/nocobase/pull/8869)) bởi @jiannx

### 🐛 Sửa lỗi

- **[flow-engine]** Đồng bộ trạng thái với cấu hình trường khi trường biểu mẫu bị xóa ([#8857](https://github.com/nocobase/nocobase/pull/8857)) bởi @jiannx
- **[Biến tùy chỉnh]** bỏ qua thông báo xác thực ([#8942](https://github.com/nocobase/nocobase/pull/8942)) bởi @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Ngày phát hành: 2026-03-24*

### 🚀 Cải tiến

- **[Quy trình: Phê duyệt]** Sửa lỗi trường JSON gây ra vấn đề hiệu suất khi tải danh sách bản ghi phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đã đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) bởi @mytharcher
- **[Bản địa hóa]** ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền ([#8903](https://github.com/nocobase/nocobase/pull/8903)) bởi @chenos
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài bởi @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Ngày phát hành: 2026-03-22*

### 🐛 Sửa lỗi

- **[resourcer]** Sửa lỗi nguồn dữ liệu bên ngoài không tải được chính xác. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) bởi @2013xile
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi tùy chọn "Kích hoạt quy trình" không hoạt động khi không được chọn bởi @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Ngày phát hành: 2026-03-21*

### 🐛 Sửa lỗi

- **[database]** Sử dụng cảnh báo thay vì lỗi khi bất kỳ tham số appends nào không hợp lệ ([#8923](https://github.com/nocobase/nocobase/pull/8923)) bởi @mytharcher
- **[Quy trình: Phê duyệt]** Sửa lỗi bản dịch, lựa chọn nút và mục tiêu trả về trong nút quay lại biểu mẫu phê duyệt v2 bởi @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Ngày phát hành: 2026-03-20*

### 🐛 Sửa lỗi

- **[Trình quản lý di chuyển]** Đã sửa lỗi quá trình di chuyển bị gián đoạn do lỗi gây ra bởi môi trường đích không có bảng mới được tạo trong quá trình di chuyển tải lên. bởi @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Ngày phát hành: 2026-03-20*

### 🚀 Cải tiến

- **[Quy trình]** Thêm danh sách bộ lọc thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) bởi @mytharcher
- **[Quy trình: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có bộ sưu tập nào được cấu hình trong trình kích hoạt bởi @mytharcher

### 🐛 Sửa lỗi

- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành đối tượng khi vượt quá 100 mục ([#8908](https://github.com/nocobase/nocobase/pull/8908)) bởi @2013xile
- **[client]** sửa lỗi người không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) bởi @jiannx
- **[Hành động: Nhập bản ghi Pro]**

  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ bởi @mytharcher
  - Sửa lỗi số cột nhiều hơn ~30 gây ra lỗi nhập, do luồng đã được đọc trùng lặp bởi @mytharcher
- **[Quy trình: Phê duyệt]** Sửa lỗi đồng thời khi thêm người được chỉ định bởi @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Ngày phát hành: 2026-03-19*

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi các sự kiện vòng đời do worker gửi làm dừng ứng dụng phục vụ ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi bộ sưu tập do AI employee tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi nhập chậm gây ra lỗi SES bởi @mytharcher
- **[In mẫu]** Sửa lỗi in bộ sưu tập SQL bởi @jiannx
- **[Trình quản lý email]** Đã sửa lỗi trang khi email không tồn tại bởi @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Ngày phát hành: 2026-03-20*

### 🚀 Cải tiến

- **[Quy trình]** Thêm danh sách bộ lọc thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) bởi @mytharcher
- **[Quy trình: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có bộ sưu tập nào được cấu hình trong trình kích hoạt bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi các sự kiện vòng đời do worker gửi làm dừng ứng dụng phục vụ ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher
- **[client]** sửa lỗi người không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) bởi @jiannx
- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành đối tượng khi vượt quá 100 mục ([#8908](https://github.com/nocobase/nocobase/pull/8908)) bởi @2013xile
- **[Hành động: Nhập bản ghi Pro]**

  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ bởi @mytharcher
  - Sửa lỗi số cột nhiều hơn ~30 gây ra lỗi nhập, do luồng đã được đọc trùng lặp bởi @mytharcher
- **[Quy trình: Phê duyệt]** Sửa lỗi đồng thời khi thêm người được chỉ định bởi @mytharcher
- **[Trình quản lý di chuyển]** Đã sửa lỗi quá trình di chuyển bị gián đoạn do lỗi gây ra bởi môi trường đích không có bảng mới được tạo trong quá trình di chuyển tải lên. bởi @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Ngày phát hành: 2026-03-19*

### 🎉 Tính năng mới

- **[AI employees]**

  - Cho phép thêm AI employee trong cửa sổ bật lên của bảng con ([#8873](https://github.com/nocobase/nocobase/pull/8873)) bởi @2013xile
  - Dọn dẹp dữ liệu điểm kiểm tra hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock
- **[Giám sát ứng dụng]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các hành động bắt đầu và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** cải thiện logic pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos
- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) bởi @gaston98765
- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng cửa sổ bật lên. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust
- **[Quy trình]** Sửa lỗi tắt máy an toàn không xả hết tất cả các sự kiện ([#8894](https://github.com/nocobase/nocobase/pull/8894)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** các tác vụ bất đồng bộ được thêm vào để hỗ trợ worker đăng tin nhắn lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi cửa sổ bật lên “Chọn bản ghi” trong bảng con không tải được chính xác khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust
  - Đã sửa lỗi giá trị mặc định của một số trường không có hiệu lực sau khi làm mới trang. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) bởi @gchust
- **[database]** Sửa lỗi xác thực phía máy chủ cho trường ngày tháng ([#8867](https://github.com/nocobase/nocobase/pull/8867)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi bộ sưu tập do AI employee tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock
- **[AI employees]**

  - Sửa lỗi URL được chỉ định cho dịch vụ LLM không có hiệu lực trong các cuộc gọi mô hình nhúng văn bản. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) bởi @cgyrock
  - Đã sửa lỗi biến undefined tiềm ẩn trong các tập lệnh di chuyển nâng cấp plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock
- **[Bản địa hóa]** Ngoại lệ quyền giao diện localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) bởi @jiannx
- **[Hành động: Nhập bản ghi Pro]**

  - Sửa lỗi sự kiện `beforeStop` trên ứng dụng con không được kích hoạt bởi @mytharcher
  - Sửa lỗi nhập chậm gây ra lỗi SES bởi @mytharcher
  - Sửa lỗi các tác vụ bất đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập bất đồng bộ bởi @cgyrock
- **[AI: Cơ sở tri thức]** Ngăn không cho xóa cơ sở dữ liệu vector và bộ nhớ vector đang được sử dụng. bởi @cgyrock
- **[In mẫu]** Sửa lỗi in bộ sưu tập SQL bởi @jiannx
- **[Trình quản lý email]** Đã sửa lỗi trang khi email không tồn tại bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Ngày phát hành: 2026-03-25*

### 🎉 Tính năng mới

- **[client]** thêm hành động mục JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) bởi @jiannx
- **[AI employees]** Đã thêm khả năng SKILLS cho AI employee. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) bởi @cgyrock
- **[Trình quản lý nguồn dữ liệu]** Hỗ trợ tải theo yêu cầu các công cụ MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) bởi @2013xile

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện xác thực lược đồ cho api xây dựng giao diện người dùng. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) bởi @gchust
- **[client]** Tối ưu hóa bố cục ngang của các hành động biểu mẫu ([#8869](https://github.com/nocobase/nocobase/pull/8869)) bởi @jiannx
- **[app]** Thêm quy trình phát triển dựa trên Rsbuild cho client-v1 trong khi vẫn giữ khả năng tương thích với việc phát triển plugin cục bộ và cấu trúc liên kết `/v2/` hiện tại ([#8902](https://github.com/nocobase/nocobase/pull/8902)) bởi @Molunerfinn
- **[Trường bộ sưu tập: Phân cấp hành chính Trung Quốc]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) bởi @jiannx
- **[Quy trình]** Thêm xác thực cho tất cả các trình kích hoạt và nút ([#8930](https://github.com/nocobase/nocobase/pull/8930)) bởi @mytharcher
- **[Quy trình: Phê duyệt]** Sửa lỗi trường JSON gây ra vấn đề hiệu suất khi tải danh sách bản ghi phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đồng bộ trạng thái với cấu hình trường khi trường biểu mẫu bị xóa ([#8857](https://github.com/nocobase/nocobase/pull/8857)) bởi @jiannx
- **[resourcer]** Sửa lỗi nguồn dữ liệu bên ngoài không tải được chính xác. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) bởi @2013xile
- **[database]** Sử dụng cảnh báo thay vì lỗi khi bất kỳ tham số appends nào không hợp lệ ([#8923](https://github.com/nocobase/nocobase/pull/8923)) bởi @mytharcher
- **[server]** Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đã đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) bởi @mytharcher
- **[Biến tùy chỉnh]** bỏ qua thông báo xác thực ([#8942](https://github.com/nocobase/nocobase/pull/8942)) bởi @chenos
- **[AI employees]** Sửa lỗi các trường hợp kiểm thử thất bại trong mô-đun ai của gói core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) bởi @cgyrock
- **[Bản địa hóa]** ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền ([#8903](https://github.com/nocobase/nocobase/pull/8903)) bởi @chenos
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi tùy chọn "Kích hoạt quy trình" không hoạt động khi không được chọn bởi @mytharcher
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài bởi @2013xile
- **[Quy trình: Phê duyệt]** Sửa lỗi bản dịch, lựa chọn nút và mục tiêu trả về trong nút quay lại biểu mẫu phê duyệt v2 bởi @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Ngày phát hành: 2026-03-20*

### 🎉 Tính năng mới

- **[IdP: OAuth]** Thêm plugin IdP: OAuth mới để cho phép các dịch vụ MCP xác thực qua OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) bởi @2013xile
- **[AI employees]** Dọn dẹp dữ liệu điểm kiểm tra hội thoại AI theo lịch trình. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) bởi @cgyrock
- **[Giám sát ứng dụng]** Hỗ trợ lọc trong danh sách ứng dụng<br />Thêm hộp thoại xác nhận cho các hành động bắt đầu và dừng<br />Sắp xếp các mục trạng thái ứng dụng theo tên môi trường bởi @2013xile

### 🚀 Cải tiến

- **[server]** cải thiện logic pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) bởi @chenos
- **[client]** Hỗ trợ hiển thị thông báo xác nhận trước khi đóng cửa sổ bật lên. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) bởi @gchust
- **[undefined]** Thêm một mục client-v2 chuyên dụng và xây dựng nó độc lập với rsbuild trong khi vẫn giữ nguyên v1. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) bởi @Molunerfinn
- **[Quy trình]**

  - Sửa lỗi tắt máy an toàn không xả hết tất cả các sự kiện ([#8894](https://github.com/nocobase/nocobase/pull/8894)) bởi @mytharcher
  - Thêm danh sách bộ lọc thực thi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** các tác vụ bất đồng bộ được thêm vào để hỗ trợ worker đăng tin nhắn lỗi ([#8849](https://github.com/nocobase/nocobase/pull/8849)) bởi @cgyrock
- **[Quy trình: Phê duyệt]** Tránh cấu hình giao diện người phê duyệt khi chưa có bộ sưu tập nào được cấu hình trong trình kích hoạt bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi người không phải quản trị viên không thể xóa giá trị trường liên kết ([#8904](https://github.com/nocobase/nocobase/pull/8904)) bởi @jiannx
  - Đã sửa lỗi cửa sổ bật lên “Chọn bản ghi” trong bảng con không tải được chính xác khi mở lần thứ hai. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) bởi @gchust
- **[resourcer]** Ngăn mảng tham số `filterByTk` tự động chuyển đổi thành đối tượng khi vượt quá 100 mục ([#8908](https://github.com/nocobase/nocobase/pull/8908)) bởi @2013xile
- **[server]** Sửa lỗi các sự kiện vòng đời do worker gửi làm dừng ứng dụng phục vụ ([#8906](https://github.com/nocobase/nocobase/pull/8906)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi bộ sưu tập do AI employee tạo luôn thiếu các trường `createBy` và `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) bởi @cgyrock
- **[AI employees]**

  - Sửa lỗi URL được chỉ định cho dịch vụ LLM không có hiệu lực trong các cuộc gọi mô hình nhúng văn bản. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) bởi @cgyrock
  - Đã sửa lỗi biến undefined tiềm ẩn trong các tập lệnh di chuyển nâng cấp plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]**

  - Sửa lỗi số cột nhiều hơn ~30 gây ra lỗi nhập, do luồng đã được đọc trùng lặp bởi @mytharcher
  - Sửa lỗi xảy ra khi nhập ở chế độ đồng bộ bởi @mytharcher
  - Sửa lỗi sự kiện `beforeStop` trên ứng dụng con không được kích hoạt bởi @mytharcher
  - Sửa lỗi các tác vụ bất đồng bộ không kết thúc sau khi xảy ra lỗi trong quá trình nhập bất đồng bộ bởi @cgyrock
  - Sửa lỗi nhập chậm gây ra lỗi SES bởi @mytharcher
- **[In mẫu]** Sửa lỗi in bộ sưu tập SQL bởi @jiannx
- **[Quy trình: Phê duyệt]** Sửa lỗi đồng thời khi thêm người được chỉ định bởi @mytharcher
- **[Trình quản lý email]** Đã sửa lỗi trang khi email không tồn tại bởi @jiannx
- **[Trình quản lý di chuyển]** Đã sửa lỗi quá trình di chuyển bị gián đoạn do lỗi gây ra bởi môi trường đích không có bảng mới được tạo trong quá trình di chuyển tải lên. bởi @Andrew1989Y
