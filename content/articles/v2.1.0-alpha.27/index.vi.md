---
title: "NocoBase v2.1.0-alpha.27: Nhân viên AI có thể tìm kiếm tài liệu đi kèm bằng lệnh Bash"
description: "Ghi chú phát hành của v2.1.0-alpha.27"
---

### 🎉 Tính năng mới

- **[cli]** Thêm lệnh phát hành trong API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) bởi @Andrew1989Y

- **[undefined]** Thêm tài liệu tiếng Indonesia và tiếng Việt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) bởi @Molunerfinn

- **[server]** Nhân viên AI có thể tìm kiếm tài liệu đã đóng gói bằng lệnh Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) bởi @2013xile

- **[Nhân viên AI]** Nhà cung cấp LLM hiện hỗ trợ nền tảng Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) bởi @cgyrock

- **[Trình quản lý di chuyển]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

- **[Trình quản lý sao lưu]** Thêm một số API cho nocobase cli bởi @Andrew1989Y

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện hành vi kéo thả khối trên trang v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) bởi @zhangzhonghe

- **[undefined]**
  - Căn chỉnh tài liệu tiếng Tây Ban Nha, Bồ Đào Nha, Nga và Đức với nguồn tiếng Anh. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) bởi @Molunerfinn

  - Đồng bộ tài liệu tiếng Pháp với nguồn tiếng Trung. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) bởi @Molunerfinn

- **[Nhân viên AI]**
  - Cải thiện công cụ chỉnh sửa RunJS của Nathan và giảm độ trễ trong các cuộc trò chuyện AI dài ([#9311](https://github.com/nocobase/nocobase/pull/9311)) bởi @2013xile

  - Điều chỉnh danh mục nhân viên AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) bởi @cgyrock

- **[Khối: Kanban]**
  - Giảm độ rộng cột kanban mặc định. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) bởi @jiannx

  - Cải thiện cài đặt tạo khối Lịch và Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) bởi @jiannx

- **[Quy trình làm việc: Phê duyệt]** Đánh dấu chế độ hiển thị liên kết tải từ DB là kế thừa bởi @mytharcher

### 🐛 Sửa lỗi

- **[undefined]**
  - Sửa quy trình xây dựng phụ thuộc để lỗi checkout plugin pro độc lập làm hỏng CI thay vì bỏ qua phạm vi xây dựng một cách im lặng. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) bởi @Molunerfinn

  - Sửa các tệp dịch thuật phình to và căn chỉnh cấu trúc tài liệu đa ngôn ngữ. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) bởi @Molunerfinn

- **[client-v2]** Sửa lỗi `RemoteSelect` không hiển thị trong cấu hình của quy trình làm việc ràng buộc ([#9314](https://github.com/nocobase/nocobase/pull/9314)) bởi @mytharcher

- **[flow-engine]** Sửa lỗi các trường ẩn hệ thống có thể được chọn trong biến liên quan đến biểu mẫu. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) bởi @gchust

- **[ai]** Sửa lỗi thiếu trường danh mục trong quá trình đăng ký nhân viên AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) bởi @cgyrock

- **[client]**
  - Sửa lỗi ô trường JS trong khối bảng v2 có thể xuất hiện trống sau khi lọc hoặc làm mới dữ liệu bảng. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) bởi @jiannx

  - Sửa lỗi các trường biểu mẫu bộ lọc biến mất sau khi mở lại bộ chọn bản ghi popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) bởi @zhangzhonghe

  - Giữ nguyên giá trị null cho các phụ thuộc biến Phạm vi dữ liệu trống trong biểu mẫu v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) bởi @jiannx

  - Chạy lại hiển thị cột JS khi dữ liệu hàng thay đổi ([#9282](https://github.com/nocobase/nocobase/pull/9282)) bởi @jiannx

- **[database]** Sửa lỗi bộ lọc datetime nguồn dữ liệu ngoài SQL Server có thể bị lỗi ([#9272](https://github.com/nocobase/nocobase/pull/9272)) bởi @2013xile

- **[Nhân viên AI]**
  - Sửa lỗi danh sách nhân viên AI của nút hành động hiển thị nhân viên nhà phát triển ([#9320](https://github.com/nocobase/nocobase/pull/9320)) bởi @cgyrock

  - Sửa lỗi tích hợp deepSeek V4 của nhân viên AI ([#9275](https://github.com/nocobase/nocobase/pull/9275)) bởi @cgyrock

- **[Khối: Gantt]** Thêm cài đặt khối Gantt để cho phép kéo để lên lịch lại. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) bởi @jiannx

- **[Khối: Cây]** Sửa lỗi hiển thị bất thường của các nút khối bộ lọc ([#9260](https://github.com/nocobase/nocobase/pull/9260)) bởi @jiannx

- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng bị lỗi trong quá trình nhập bản ghi không chính xác ([#9277](https://github.com/nocobase/nocobase/pull/9277)) bởi @mytharcher

- **[Khối: Kanban]** Sửa lỗi hiển thị lặp lại lớp nổi cấu hình trường ([#9271](https://github.com/nocobase/nocobase/pull/9271)) bởi @jiannx

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi chế độ tự động không hoạt động bởi @mytharcher

- **[Trình quản lý di chuyển]** Sửa lỗi `migration:create` trả về `taskId` từ bản ghi tác vụ bất đồng bộ. bởi @Andrew1989Y

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa thời gian thực thi phê duyệt để `latestExecutionId` được đồng bộ sau khi cam kết phê duyệt bởi @mytharcher

  - Sửa lỗi kiểu dữ liệu bởi @mytharcher
