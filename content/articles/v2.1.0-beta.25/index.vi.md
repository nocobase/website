---
title: "NocoBase v2.1.0-beta.25: Thêm một số API cho NocoBase cli"
description: "Ghi chú phát hành của v2.1.0-beta.25"
---

### 🎉 Tính năng mới

- **[cli]** Thêm lệnh release trong API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) bởi @Andrew1989Y

- **[undefined]** Thêm tài liệu tiếng Indonesia và tiếng Việt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) bởi @Molunerfinn

- **[AI employees]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock

- **[Migration manager]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

- **[Backup manager]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

### 🚀 Cải tiến

- **[undefined]**
  - - ([#9349](https://github.com/nocobase/nocobase/pull/9349)) bởi @Molunerfinn

  - Căn chỉnh tài liệu tiếng Tây Ban Nha, Bồ Đào Nha, Nga và Đức với nguồn tiếng Anh. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) bởi @Molunerfinn

  - Đồng bộ tài liệu tiếng Pháp với nguồn tiếng Trung. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) bởi @Molunerfinn

- **[IdP: OAuth]** Phiên OAuth hiện sử dụng cùng cài đặt hết hạn như chính sách token hệ thống ([#9345](https://github.com/nocobase/nocobase/pull/9345)) bởi @2013xile

- **[Block: Kanban]**
  - Giảm độ rộng cột kanban mặc định. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) bởi @jiannx

  - Cải thiện cài đặt tạo khối Lịch và Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) bởi @jiannx

- **[AI employees]** Điều chỉnh danh mục nhân viên AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock

- **[Workflow: Approval]** Đánh dấu chế độ hiển thị liên kết tải từ DB là legacy bởi @mytharcher

### 🐛 Sửa lỗi

- **[undefined]**
  - Sửa quy trình dependency-and-build để lỗi checkout plugin pro độc lập làm hỏng CI thay vì bỏ qua phạm vi build một cách im lặng. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) bởi @Molunerfinn

  - Sửa các tệp dịch thuật phình to và căn chỉnh cấu trúc tài liệu đa ngôn ngữ. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) bởi @Molunerfinn

- **[cli]** Sửa các tùy chọn boolean CLI để có thể vô hiệu hóa chúng bằng cờ phủ định ([#9337](https://github.com/nocobase/nocobase/pull/9337)) bởi @2013xile

- **[client-v2]**
  - Sửa lỗi tải plugin từ xa để các URL plugin đã kết thúc bằng `.js` không bị phân giải thành đường dẫn `.js.js` trùng lặp. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) bởi @Molunerfinn

  - Sửa lỗi `RemoteSelect` không hiển thị trong cấu hình của workflow ràng buộc ([#9314](https://github.com/nocobase/nocobase/pull/9314)) bởi @mytharcher

- **[ai]** Sửa lỗi thiếu thiết lập trường danh mục trong quá trình đăng ký nhân viên AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) bởi @cgyrock

- **[flow-engine]** Sửa lỗi các trường ẩn hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust

- **[client]**
  - Sửa lỗi ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx

  - Giữ nguyên giá trị null cho các phụ thuộc biến Data scope trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx

  - Sửa lỗi các trường biểu mẫu lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe

  - Chạy lại kết xuất cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx

- **[database]** Sửa lỗi bộ lọc datetime nguồn dữ liệu bên ngoài SQL Server có thể thất bại ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile

- **[AI employees]**
  - Sửa lỗi thỉnh thoảng xảy ra lỗi khi nhân viên AI sử dụng mô hình DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) bởi @cgyrock

  - Sửa lỗi nút nhân viên AI trong workflow xóa kỹ năng sau khi chuyển đổi nhân viên AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) bởi @cgyrock

  - Sửa lỗi danh sách nhân viên AI của nút hành động hiển thị nhân viên phát triển ([#9320](https://github.com/nocobase/nocobase/pull/9320)) bởi @cgyrock

- **[Data source: Main]** Ngăn chặn sự cố khi fields không được xác định trong quá trình tải collection ([#9174](https://github.com/nocobase/nocobase/pull/9174)) bởi @saraTabbane

- **[UI templates]** Sửa lỗi danh sách mẫu popup không tải được các mẫu có sẵn một cách chính xác. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) bởi @gchust

- **[File manager]** Cải thiện xử lý lỗi tải xuống tệp xem trước ([#9103](https://github.com/nocobase/nocobase/pull/9103)) bởi @gaston98765

- **[Block: Tree]** Sửa lỗi hiển thị bất thường của các nút khối lọc ([#9260](https://github.com/nocobase/nocobase/pull/9260)) bởi @jiannx

- **[Block: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo thả lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx

- **[Block: Kanban]** Sửa lỗi hiển thị lặp lại lớp nổi cấu hình trường ([#9271](https://github.com/nocobase/nocobase/pull/9271)) bởi @jiannx

- **[Action: Import records]** Sửa lỗi chỉ mục hàng lỗi trong quá trình nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher

- **[Action: Export records Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher

- **[Migration manager]** Sửa `migration:create` trả về `taskId` từ bản ghi tác vụ bất đồng bộ. bởi @Andrew1989Y

- **[Workflow: Approval]**
  - Sửa lỗi bộ lọc và các tham số truy vấn khác hiện hoạt động trong API liệt kê các workflow phê duyệt có sẵn bởi @mytharcher

  - Sửa lỗi tệp trong ứng dụng gốc không được tải lại bởi @mytharcher

  - Sửa lỗi kiểu bởi @mytharcher

  - Hỗ trợ phân tích một số biến client trong các hành động phê duyệt bởi @mytharcher

  - Sửa thời điểm thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher
