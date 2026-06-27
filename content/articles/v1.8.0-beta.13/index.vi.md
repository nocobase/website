---
title: "NocoBase v1.8.0-beta.13: Hỗ trợ trường BIT trong SQL Server cho nguồn dữ liệu bên ngoài"
description: "Ghi chú phát hành phiên bản v1.8.0-beta.13"
---

### 🎉 Tính năng mới

- **[client]**

  - Hỗ trợ trường BIT trong SQL Server cho các nguồn dữ liệu bên ngoài. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) bởi @aaaaaajie
  - Hỗ trợ biến tổng hợp tùy chỉnh ([#6916](https://github.com/nocobase/nocobase/pull/6916)) bởi @zhangzhonghe
    Tham khảo: [Biến tùy chỉnh](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** hỗ trợ cấp phép thương mại ([#6554](https://github.com/nocobase/nocobase/pull/6554)) bởi @jiannx
- **[Trình quản lý nguồn dữ liệu]** ✨ Hỗ trợ tải theo nhu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài ([#6979](https://github.com/nocobase/nocobase/pull/6979)) bởi @aaaaaajie
- **[Cài đặt giấy phép]** thêm cài đặt giấy phép và xác thực giấy phép trước khi tải plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) bởi @jiannx
- **[Xác thực]** Hỗ trợ chức năng "Quên mật khẩu" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) bởi @zhangzhonghe
  Tham khảo: [Quên mật khẩu](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Hành động: Cập nhật hàng loạt]** Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: SQL Server bên ngoài]**

  - Đã thêm hỗ trợ cho trường BIT của SQL Server trong các nguồn dữ liệu bên ngoài bởi @aaaaaajie
  - Hỗ trợ tải theo nhu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Biến tùy chỉnh]** Hỗ trợ biến tổng hợp tùy chỉnh bởi @zhangzhonghe
  Tham khảo: [Biến tùy chỉnh](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[Trình quản lý email]**

  - hỗ trợ xóa email bởi @jiannx
  - hỗ trợ cài đặt khoảng thời gian đồng bộ email bởi @jiannx
  - hỗ trợ gửi hàng loạt bởi @jiannx

### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ điền trường nhập liệu thông qua quét mã QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) bởi @katherinehhh
  - Xác định hiển thị các thành phần di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6611](https://github.com/nocobase/nocobase/pull/6611)) bởi @zhangzhonghe
  - hỗ trợ bản địa hóa cho nội dung khối Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) bởi @katherinehhh
  - Xác định hiển thị bố cục di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6600](https://github.com/nocobase/nocobase/pull/6600)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện hiệu suất tạo tác vụ trong quá trình xuất ([#7078](https://github.com/nocobase/nocobase/pull/7078)) bởi @aaaaaajie
- **[Di động]** Điều chỉnh kiểu cửa sổ bật lên thông báo cho thiết bị di động ([#6557](https://github.com/nocobase/nocobase/pull/6557)) bởi @zhangzhonghe
- **[Trình quản lý email]**

  - hỗ trợ trả lời và chuyển tiếp email riêng biệt trong cùng một chủ đề bởi @jiannx
  - triển khai schema rồi gửi email và hỗ trợ AI bởi @jiannx
  - hỗ trợ giá trị gửi mặc định trong cửa sổ bật lên, hỗ trợ tìm kiếm mờ cho người nhận và sửa lỗi bởi @jiannx
  - hoàn thiện chức năng gửi hàng loạt bởi @jiannx
  - cải thiện chức năng và sửa lỗi bởi @jiannx

### 🐛 Sửa lỗi

- **[cli]**

  - Điều chỉnh bản sao giấy phép khi cài đặt plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) bởi @jiannx
  - Lỗi undefined khi tải plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) bởi @jiannx
- **[client]**

  - Sau khi xóa giá trị huy hiệu, giao diện không được cập nhật ([#7055](https://github.com/nocobase/nocobase/pull/7055)) bởi @zhangzhonghe
  - Lỗi khi nhấp vào nút bộ lọc ([#7100](https://github.com/nocobase/nocobase/pull/7100)) bởi @zhangzhonghe
  - Sửa lỗi dữ liệu người dùng hiện tại bị trống ([#7016](https://github.com/nocobase/nocobase/pull/7016)) bởi @zhangzhonghe
  - Nội dung hiển thị không chính xác trên các trang được mở qua liên kết popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) bởi @zhangzhonghe
  - Truyền các props khác cho thành phần Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) bởi @sheldon66
  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust
- **[database]** làm cho toán tử eq cho trường chuỗi tương thích với kiểu số ([#7062](https://github.com/nocobase/nocobase/pull/7062)) bởi @chenos
- **[build]** sửa lỗi runtime client trong plugin-workflow-javascript, lỗi process undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) bởi @jiannx
- **[Trực quan hóa dữ liệu]** Sự cố phân trang bảng ([#7151](https://github.com/nocobase/nocobase/pull/7151)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Đã sửa lỗi khi kết hợp tải nguồn dữ liệu theo nhu cầu và cấu hình tiền tố bảng gây ra lỗi “ConnectionManager.getConnection was called after the connection manager was closed”. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) bởi @aaaaaajie
- **[plugin-service-platform]** điều chỉnh văn bản giấy phép bởi @jiannx
- **[Biến tùy chỉnh]** Sau khi xóa giá trị huy hiệu, giao diện không được cập nhật bởi @zhangzhonghe
- **[Trình quản lý email]**

  - tệp đính kèm không hiển thị bởi @jiannx
  - lỗi xóa email bởi @jiannx
  - xóa email thất bại bởi @jiannx
  - cửa sổ bật lên cài đặt không hiển thị bởi @jiannx
  - ngăn trả lời không hiển thị bởi @jiannx
  - tìm kiếm mờ người nhận hỗ trợ trường liên kết bởi @jiannx
  - thêm trường "id" vào mailmessagelabelsMailmessages bởi @jiannx
  - tìm kiếm mờ thư để tạo bộ lọc duy nhất bởi @jiannx
  - nhiều khóa chính cho bảng "mailmessagelabels_mailmessages" bởi @jiannx
