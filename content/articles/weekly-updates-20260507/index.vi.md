---
title: "Cập nhật hàng tuần｜Thêm một số API cho NocoBase cli"
description: "Đây là bản tóm tắt các cập nhật tính năng và cải tiến của NocoBase từ ngày 30 tháng 4 đến ngày 7 tháng 5 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Ngày phát hành: 2026-05-06*

### 🚀 Cải tiến

- **[undefined]** Thêm thông báo lỗi Feishu cho quy trình phát hành thủ công ([#9349](https://github.com/nocobase/nocobase/pull/9349)) bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[Nguồn dữ liệu: Chính]** Ngăn chặn sự cố khi trường (fields) không được xác định trong quá trình tải collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) bởi @saraTabbane
- **[Mẫu giao diện]** Đã sửa lỗi danh sách mẫu popup không tải đúng các mẫu có sẵn. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) bởi @gchust
- **[Nhân viên AI]** Sửa lỗi thỉnh thoảng xảy ra khi nhân viên AI sử dụng mô hình DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) bởi @cgyrock
- **[Quản lý tệp]** Cải thiện xử lý lỗi tải xuống tệp xem trước ([#9103](https://github.com/nocobase/nocobase/pull/9103)) bởi @gaston98765
- **[Quy trình: Phê duyệt]** Sửa lỗi bộ lọc và các tham số truy vấn khác hiện hoạt động trong API liệt kê các quy trình phê duyệt có sẵn bởi @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Ngày phát hành: 2026-05-04*

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Sửa lỗi danh sách nhân viên AI trên nút hành động hiển thị cả nhân viên của nhà phát triển ([#9320](https://github.com/nocobase/nocobase/pull/9320)) bởi @cgyrock
- **[Quy trình: Phê duyệt]**

  - Sửa lỗi tệp trong ứng dụng gốc không được tải lại bởi @mytharcher
  - Hỗ trợ phân tích một số biến client trong các hành động phê duyệt bởi @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Ngày phát hành: 2026-05-01*

### 🎉 Tính năng mới

- **[Nhân viên AI]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện hành vi kéo thả bố cục khối trên các trang v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) bởi @zhangzhonghe
- **[Nhân viên AI]** Điều chỉnh danh mục nhân viên AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock
- **[Quy trình: Phê duyệt]** Đánh dấu chế độ hiển thị liên kết (association show mode) tải từ DB là kế thừa (legacy) bởi @mytharcher

### 🐛 Sửa lỗi

- **[database]** Đã sửa lỗi bộ lọc ngày giờ của nguồn dữ liệu ngoài SQL Server có thể bị lỗi ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile
- **[client]**

  - Giữ nguyên giá trị null cho các phụ thuộc biến Phạm vi dữ liệu (Data scope) trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx
  - Chạy lại kết xuất cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx
  - Sửa lỗi các trường của biểu mẫu bộ lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe
  - Đã sửa lỗi các ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx
- **[flow-engine]** Đã sửa lỗi các trường ẩn của hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust
- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng bị lỗi khi nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher
- **[Khối: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo để lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx
- **[Nhân viên AI]** Sửa lỗi tích hợp DeepSeek V4 của nhân viên AI ([#9275](https://github.com/nocobase/nocobase/pull/9275)) bởi @cgyrock
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher
- **[Quy trình: Phê duyệt]**

  - Sửa lỗi kiểu (type error) bởi @mytharcher
  - Sửa thời điểm thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Ngày phát hành: 2026-05-06*

### 🎉 Tính năng mới

- **[cli]** Thêm lệnh phát hành (release) trong API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) bởi @Andrew1989Y
- **[undefined]** Thêm tài liệu tiếng Indonesia và tiếng Việt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) bởi @Molunerfinn
- **[Nhân viên AI]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock
- **[Trình quản lý di chuyển]** Thêm một số API cho nocobase cli bởi @Andrew1989Y
- **[Trình quản lý sao lưu]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

### 🚀 Cải tiến

- **[undefined]**

  - Thêm thông báo lỗi Feishu cho quy trình phát hành thủ công([#9349](https://github.com/nocobase/nocobase/pull/9349)) bởi @Molunerfinn
  - Căn chỉnh tài liệu tiếng Tây Ban Nha, Bồ Đào Nha, Nga và Đức với nguồn tiếng Anh. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) bởi @Molunerfinn
  - Đồng bộ tài liệu tiếng Pháp với nguồn tiếng Trung. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) bởi @Molunerfinn
- **[IdP: OAuth]** Các phiên OAuth hiện sử dụng cùng cài đặt hết hạn như chính sách token hệ thống ([#9345](https://github.com/nocobase/nocobase/pull/9345)) bởi @2013xile
- **[Khối: Kanban]**

  - Giảm chiều rộng cột kanban mặc định. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) bởi @jiannx
  - Cải thiện cài đặt tạo khối Lịch và Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) bởi @jiannx
- **[Nhân viên AI]** Điều chỉnh danh mục nhân viên AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock
- **[Quy trình: Phê duyệt]** Đánh dấu chế độ hiển thị liên kết tải từ DB là kế thừa bởi @mytharcher

### 🐛 Sửa lỗi

- **[undefined]**

  - Sửa quy trình dependency-and-build để các lỗi checkout plugin pro độc lập làm hỏng CI thay vì âm thầm bỏ qua phạm vi xây dựng. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) bởi @Molunerfinn
  - Sửa các tệp dịch thuật phình to và căn chỉnh cấu trúc tài liệu đa ngôn ngữ. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) bởi @Molunerfinn
- **[cli]** Đã sửa các tùy chọn boolean CLI để chúng có thể bị vô hiệu hóa bằng các cờ phủ định (negated flags) ([#9337](https://github.com/nocobase/nocobase/pull/9337)) bởi @2013xile
- **[client-v2]**

  - Đã sửa lỗi tải plugin từ xa để các URL plugin đã kết thúc bằng `.js` không bị phân giải thành các đường dẫn `.js.js` trùng lặp. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) bởi @Molunerfinn
  - Sửa lỗi `RemoteSelect` không hiển thị trong cấu hình ràng buộc quy trình làm việc ([#9314](https://github.com/nocobase/nocobase/pull/9314)) bởi @mytharcher
- **[ai]** Sửa lỗi thiếu trường thiết lập danh mục trong quá trình đăng ký nhân viên AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) bởi @cgyrock
- **[flow-engine]** Đã sửa lỗi các trường ẩn của hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust
- **[client]**

  - Đã sửa lỗi các ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx
  - Giữ nguyên giá trị null cho các phụ thuộc biến Phạm vi dữ liệu trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx
  - Sửa lỗi các trường của biểu mẫu bộ lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe
  - Chạy lại kết xuất cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx
- **[database]** Đã sửa lỗi bộ lọc ngày giờ của nguồn dữ liệu ngoài SQL Server có thể bị lỗi ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile
- **[Nhân viên AI]**

  - Sửa lỗi thỉnh thoảng xảy ra khi nhân viên AI sử dụng mô hình DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) bởi @cgyrock
  - Sửa lỗi nút nhân viên AI trong quy trình làm việc xóa kỹ năng sau khi chuyển đổi nhân viên AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) bởi @cgyrock
  - Sửa lỗi danh sách nhân viên AI trên nút hành động hiển thị cả nhân viên của nhà phát triển ([#9320](https://github.com/nocobase/nocobase/pull/9320)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Ngăn chặn sự cố khi trường không được xác định trong quá trình tải collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) bởi @saraTabbane
- **[Mẫu giao diện]** Đã sửa lỗi danh sách mẫu popup không tải đúng các mẫu có sẵn. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) bởi @gchust
- **[Quản lý tệp]** Cải thiện xử lý lỗi tải xuống tệp xem trước ([#9103](https://github.com/nocobase/nocobase/pull/9103)) bởi @gaston98765
- **[Khối: Cây]** Sửa lỗi hiển thị bất thường của các nút khối bộ lọc ([#9260](https://github.com/nocobase/nocobase/pull/9260)) bởi @jiannx
- **[Khối: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo để lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx
- **[Khối: Kanban]** Đã sửa lỗi hiển thị lặp lại lớp nổi cấu hình trường ([#9271](https://github.com/nocobase/nocobase/pull/9271)) bởi @jiannx
- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng bị lỗi khi nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi `migration:create` trả về `taskId` từ bản ghi tác vụ bất đồng bộ. bởi @Andrew1989Y
- **[Quy trình: Phê duyệt]**

  - Sửa lỗi bộ lọc và các tham số truy vấn khác hiện hoạt động trong API liệt kê các quy trình phê duyệt có sẵn bởi @mytharcher
  - Sửa lỗi tệp trong ứng dụng gốc không được tải lại bởi @mytharcher
  - Sửa lỗi kiểu bởi @mytharcher
  - Hỗ trợ phân tích một số biến client trong các hành động phê duyệt bởi @mytharcher
  - Sửa thời điểm thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Ngày phát hành: 2026-05-06*

### 🚀 Cải tiến

- **[undefined]** Thêm thông báo lỗi Feishu cho quy trình phát hành thủ công ([#9349](https://github.com/nocobase/nocobase/pull/9349)) bởi @Molunerfinn
- **[IdP: OAuth]** Các phiên OAuth hiện sử dụng cùng cài đặt hết hạn như chính sách token hệ thống ([#9345](https://github.com/nocobase/nocobase/pull/9345)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client-v2]** Đã sửa lỗi tải plugin từ xa để các URL plugin đã kết thúc bằng `.js` không bị phân giải thành các đường dẫn `.js.js` trùng lặp. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) bởi @Molunerfinn
- **[cli]** Đã sửa các tùy chọn boolean CLI để chúng có thể bị vô hiệu hóa bằng các cờ phủ định ([#9337](https://github.com/nocobase/nocobase/pull/9337)) bởi @2013xile
- **[Nhân viên AI]**

  - Sửa lỗi thỉnh thoảng xảy ra khi nhân viên AI sử dụng mô hình DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) bởi @cgyrock
  - Sửa lỗi nút nhân viên AI trong quy trình làm việc xóa kỹ năng sau khi chuyển đổi nhân viên AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) bởi @cgyrock
- **[Nguồn dữ liệu: Chính]** Ngăn chặn sự cố khi trường không được xác định trong quá trình tải collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) bởi @saraTabbane
- **[Mẫu giao diện]** Đã sửa lỗi danh sách mẫu popup không tải đúng các mẫu có sẵn. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) bởi @gchust
- **[Khối: Kanban]** Đã sửa lỗi các khối liên kết kanban sử dụng các tham số tài nguyên runtime chưa được giải quyết trong ngữ cảnh popup hoặc trang thứ cấp. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) bởi @jiannx
- **[Quy trình: Phê duyệt]** Sửa lỗi bộ lọc và các tham số truy vấn khác hiện hoạt động trong API liệt kê các quy trình phê duyệt có sẵn bởi @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Ngày phát hành: 2026-05-04*

### 🐛 Sửa lỗi

- **[Quản lý tệp]** Cải thiện xử lý lỗi tải xuống tệp xem trước ([#9103](https://github.com/nocobase/nocobase/pull/9103)) bởi @gaston98765
- **[Quy trình: Phê duyệt]** Hỗ trợ phân tích một số biến client trong các hành động phê duyệt bởi @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Ngày phát hành: 2026-05-04*

### 🐛 Sửa lỗi

- **[Quy trình: Phê duyệt]** Sửa lỗi tệp trong ứng dụng gốc không được tải lại bởi @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Ngày phát hành: 2026-05-03*

### 🎉 Tính năng mới

- **[cli]** Thêm lệnh phát hành trong API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) bởi @Andrew1989Y
- **[undefined]** Thêm tài liệu tiếng Indonesia và tiếng Việt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) bởi @Molunerfinn
- **[server]** Nhân viên AI có thể tìm kiếm tài liệu đi kèm bằng lệnh Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) bởi @2013xile
- **[Nhân viên AI]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock
- **[Trình quản lý di chuyển]** Thêm một số API cho nocobase cli bởi @Andrew1989Y
- **[Trình quản lý sao lưu]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện hành vi kéo thả bố cục khối trên các trang v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) bởi @zhangzhonghe
- **[undefined]**

  - Căn chỉnh tài liệu tiếng Tây Ban Nha, Bồ Đào Nha, Nga và Đức với nguồn tiếng Anh. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) bởi @Molunerfinn
  - Đồng bộ tài liệu tiếng Pháp với nguồn tiếng Trung. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) bởi @Molunerfinn
- **[Nhân viên AI]**

  - Cải thiện công cụ chỉnh sửa RunJS của Nathan và giảm độ trễ trong các cuộc trò chuyện AI dài ([#9311](https://github.com/nocobase/nocobase/pull/9311)) bởi @2013xile
  - Điều chỉnh danh mục nhân viên AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock
- **[Khối: Kanban]**

  - Giảm chiều rộng cột kanban mặc định. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) bởi @jiannx
  - Cải thiện cài đặt tạo khối Lịch và Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) bởi @jiannx
- **[Quy trình: Phê duyệt]** Đánh dấu chế độ hiển thị liên kết tải từ DB là kế thừa bởi @mytharcher

### 🐛 Sửa lỗi

- **[undefined]**

  - Sửa quy trình dependency-and-build để các lỗi checkout plugin pro độc lập làm hỏng CI thay vì âm thầm bỏ qua phạm vi xây dựng. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) bởi @Molunerfinn
  - Sửa các tệp dịch thuật phình to và căn chỉnh cấu trúc tài liệu đa ngôn ngữ. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) bởi @Molunerfinn
- **[client-v2]** Sửa lỗi `RemoteSelect` không hiển thị trong cấu hình ràng buộc quy trình làm việc ([#9314](https://github.com/nocobase/nocobase/pull/9314)) bởi @mytharcher
- **[flow-engine]** Đã sửa lỗi các trường ẩn của hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust
- **[ai]** Sửa lỗi thiếu trường thiết lập danh mục trong quá trình đăng ký nhân viên AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) bởi @cgyrock
- **[client]**

  - Đã sửa lỗi các ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx
  - Sửa lỗi các trường của biểu mẫu bộ lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe
  - Giữ nguyên giá trị null cho các phụ thuộc biến Phạm vi dữ liệu trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx
  - Chạy lại kết xuất cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx
- **[database]** Đã sửa lỗi bộ lọc ngày giờ của nguồn dữ liệu ngoài SQL Server có thể bị lỗi ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile
- **[Nhân viên AI]**

  - Sửa lỗi danh sách nhân viên AI trên nút hành động hiển thị cả nhân viên của nhà phát triển ([#9320](https://github.com/nocobase/nocobase/pull/9320)) bởi @cgyrock
  - Sửa lỗi tích hợp DeepSeek V4 của nhân viên AI ([#9275](https://github.com/nocobase/nocobase/pull/9275)) bởi @cgyrock
- **[Khối: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo để lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx
- **[Khối: Cây]** Sửa lỗi hiển thị bất thường của các nút khối bộ lọc ([#9260](https://github.com/nocobase/nocobase/pull/9260)) bởi @jiannx
- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng bị lỗi khi nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher
- **[Khối: Kanban]** Đã sửa lỗi hiển thị lặp lại lớp nổi cấu hình trường ([#9271](https://github.com/nocobase/nocobase/pull/9271)) bởi @jiannx
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi `migration:create` trả về `taskId` từ bản ghi tác vụ bất đồng bộ. bởi @Andrew1989Y
- **[Quy trình: Phê duyệt]**

  - Sửa thời điểm thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher
  - Sửa lỗi kiểu bởi @mytharcher
