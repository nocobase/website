---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: hỗ trợ biến tùy chỉnh, trình lắng nghe sự kiện nhấp chuột vào hàng bảng, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Ngày phát hành: 2025-10-17*

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi timeout giao dịch do giao dịch không rollback đúng cách khi xảy ra lỗi cơ sở dữ liệu sau khi gửi phê duyệt bởi @mytharcher
  - Sửa lỗi biến không được phân tích trong biểu mẫu gửi phê duyệt bởi @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Ngày phát hành: 2025-10-16*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi cửa sổ bật lên biểu tượng tab bị che khuất ([#7607](https://github.com/nocobase/nocobase/pull/7607)) bởi @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Ngày phát hành: 2025-10-22*

### 🚀 Cải tiến

- **[client]** Để có được kiểu MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện kiểu MIME của tệp trong client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Tái cấu trúc logic bản địa hóa cho thông báo lỗi và xử lý trong plugin xử lý lỗi ([#7582](https://github.com/nocobase/nocobase/pull/7582)) bởi @2013xile
- **[Workflow]** Thêm tùy chọn `keepBranch` khi xóa nút ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi khi xóa trường ngày trong khối bộ lọc ([#7632](https://github.com/nocobase/nocobase/pull/7632)) bởi @katherinehhh
  - sửa lỗi giá trị mặc định của bảng con không hoạt động trong drawer chỉnh sửa biểu mẫu ([#7631](https://github.com/nocobase/nocobase/pull/7631)) bởi @katherinehhh
  - Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa phóng to trong khi xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher
  - Sửa lỗi cửa sổ bật lên biểu tượng tab bị che khuất ([#7607](https://github.com/nocobase/nocobase/pull/7607)) bởi @zhangzhonghe
- **[database]** Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Sửa lỗi siêu dữ liệu không được đồng bộ hóa trên nhiều nút sau khi tạo trường liên kết ngược ([#7628](https://github.com/nocobase/nocobase/pull/7628)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi script di chuyển báo lỗi do bảng không tồn tại khi ứng dụng chưa được cài đặt bởi @mytharcher
  - Sửa lỗi ID Snowflake không được tạo do hook bị bỏ qua bởi @mytharcher
- **[Auth: LDAP]** Sửa lỗi liên kết LDAP thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Ngày phát hành: 2025-10-21*

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi URL không cập nhật chính xác sau khi chuyển tab trong cửa sổ bật lên, mở lại cửa sổ bật lên lồng nhau, và sau đó đóng tất cả các cửa sổ bật lên. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) bởi @gchust
  - sửa lỗi giá trị mặc định của bảng con không hoạt động trong drawer chỉnh sửa biểu mẫu ([#7631](https://github.com/nocobase/nocobase/pull/7631)) bởi @katherinehhh
  - sửa lỗi khi xóa trường ngày trong khối bộ lọc ([#7632](https://github.com/nocobase/nocobase/pull/7632)) bởi @katherinehhh
- **[Trình quản lý đa ứng dụng (không dùng nữa)]** Sửa lỗi không thể vô hiệu hóa trình quản lý đa ứng dụng cũ ([#7633](https://github.com/nocobase/nocobase/pull/7633)) bởi @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Ngày phát hành: 2025-10-21*

### 🎉 Tính năng mới

- **[client]** Thêm hỗ trợ cho trình lắng nghe sự kiện nhấp chuột vào hàng trong bảng, cho phép người dùng thực hiện các hành động cụ thể khi một hàng trong bảng được nhấp vào ([#7622](https://github.com/nocobase/nocobase/pull/7622)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Hiển thị biến `approvalId` để sử dụng từ các trình kích hoạt phê duyệt bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi bản dịch không có hiệu lực trong các thành phần antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: Chính]** Sửa lỗi siêu dữ liệu không được đồng bộ hóa trên nhiều nút sau khi tạo trường liên kết ngược ([#7628](https://github.com/nocobase/nocobase/pull/7628)) bởi @mytharcher
- **[plugin-demo-platform]** demo hỗ trợ tự động dừng ứng dụng bởi @jiannx
- **[Đa ứng dụng]**

  - di chuyển đa ứng dụng không phát ra hook bởi @jiannx
  - proxy đa ứng dụng hỗ trợ bộ nhớ đệm bởi @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Ngày phát hành: 2025-10-20*

### 🎉 Tính năng mới

- **[Bản nháp biểu mẫu]** Bản nháp biểu mẫu bởi @chenos

### 🐛 Sửa lỗi

- **[flow-engine]** không thể lấy ngữ cảnh chế độ xem hiện tại trong khối tham chiếu ([#7620](https://github.com/nocobase/nocobase/pull/7620)) bởi @gchust
- **[client]** xử lý thiếu ngữ cảnh trong usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) bởi @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Ngày phát hành: 2025-10-20*

### 🚀 Cải tiến

- **[client]** hỗ trợ các trường liên kết trong mô hình trường JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) bởi @gchust
- **[Nhân viên AI]**

  - Tái cấu trúc Nhà cung cấp LLM OpenAI thành hai nhà cung cấp riêng biệt để hỗ trợ API Completions và Responses của OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) bởi @cgyrock
  - Thêm nhà cung cấp LLM mới Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) bởi @ReLaMi96

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]**
  - Sửa lỗi số lượng nhiệm vụ không được cập nhật sau khi thêm người được chỉ định bởi @mytharcher
  - Sửa lỗi timeout giao dịch do giao dịch không rollback đúng cách khi xảy ra lỗi cơ sở dữ liệu sau khi gửi phê duyệt bởi @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Ngày phát hành: 2025-10-17*

### 🚀 Cải tiến

- **[Nhân viên AI]** Tối ưu hóa mã AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Tái cấu trúc logic bản địa hóa cho thông báo lỗi và xử lý trong plugin xử lý lỗi ([#7582](https://github.com/nocobase/nocobase/pull/7582)) bởi @2013xile

### 🐛 Sửa lỗi

- **[database]**

  - Đặt `search_path` trước khi thực thi câu lệnh SQL bằng phương thức `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) bởi @2013xile
  - Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher
- **[client]** Sửa lỗi cửa sổ bật lên biểu tượng tab bị che khuất ([#7607](https://github.com/nocobase/nocobase/pull/7607)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Sửa lỗi biến không được phân tích trong biểu mẫu gửi phê duyệt bởi @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Ngày phát hành: 2025-10-16*

### 🎉 Tính năng mới

- **[Khối: Tham chiếu]** Thêm plugin "Khối tham chiếu" thử nghiệm, cho phép tái sử dụng các khối hiện có bằng cách tham chiếu hoặc sao chép. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) bởi @gchust

### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** Sửa lỗi biểu đồ không thể hiển thị do timeout đăng ký sự kiện ([#7608](https://github.com/nocobase/nocobase/pull/7608)) bởi @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Ngày phát hành: 2025-10-15*

### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Cập nhật plugin-data-vi 2.0, sửa một số lỗi và tối ưu hóa giao diện người dùng. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) bởi @heziqiang

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Sửa lỗi ID Snowflake không được tạo do hook bị bỏ qua bởi @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Ngày phát hành: 2025-10-15*

### 🎉 Tính năng mới

- **[client]** Thêm hỗ trợ cho các biến tùy chỉnh ([#7585](https://github.com/nocobase/nocobase/pull/7585)) bởi @zhangzhonghe

### 🚀 Cải tiến

- **[Nhân viên AI]** thêm nút thu nhỏ cho hộp chat trong bố cục di động ([#7595](https://github.com/nocobase/nocobase/pull/7595)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[server]** Giữ nguyên field.targetKey khi sao chép các trường tham chiếu ([#7599](https://github.com/nocobase/nocobase/pull/7599)) bởi @chenos
- **[Nhân viên AI]** sửa lỗi bố cục hộp chat trong bố cục di động ([#7591](https://github.com/nocobase/nocobase/pull/7591)) bởi @cgyrock
