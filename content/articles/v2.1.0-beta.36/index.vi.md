---
title: "NocoBase v2.1.0-beta.36: Trình chỉnh sửa chủ đề hiện có sẵn trong giao diện v2"
description: "Ghi chú phát hành của v2.1.0-beta.36"
---

### 🎉 Tính năng mới

- **[cli]** thêm lệnh tạo và khôi phục bản sao lưu ([#9541](https://github.com/nocobase/nocobase/pull/9541)) bởi @chenos
- **[Trình quản lý sao lưu]** mã nguồn mở plugin trình quản lý sao lưu ([#9550](https://github.com/nocobase/nocobase/pull/9550)) bởi @chenos
- **[Trình chỉnh sửa giao diện]** Trình chỉnh sửa giao diện hiện đã có sẵn trong giao diện v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) bởi @zhangzhonghe
- **[Xác thực hai yếu tố (2FA)]** TOTP và xác thực hai yếu tố hiện có thể được liên kết, xác minh và cấu hình từ client v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[client]** tối ưu hóa cài đặt hiển thị nút hành động ([#9510](https://github.com/nocobase/nocobase/pull/9510)) bởi @katherinehhh
- **[flow-engine]** Menu cấu hình trường V2 hiện hỗ trợ tìm kiếm trường ([#9489](https://github.com/nocobase/nocobase/pull/9489)) bởi @zhangzhonghe
- **[cli]** cải thiện luồng xác thực env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) bởi @chenos
- **[undefined]**

  - Thêm đánh giá bảo mật phụ thuộc cho các pull request ([#9523](https://github.com/nocobase/nocobase/pull/9523)) bởi @zhangzhonghe
- **[Xác minh]** Thêm client v2 vào plugin Xác minh (trang cài đặt quản trị, mục trung tâm người dùng, biểu mẫu OTP SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) bởi @Molunerfinn
- **[Xác thực]** Cài đặt thương hiệu tùy chỉnh hiện hoạt động chính xác trong client v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) bởi @zhangzhonghe
- **[Khối: Bản đồ]** Đã thêm hỗ trợ client v2 cho plugin bản đồ. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) bởi @jiannx
- **[Thương hiệu tùy chỉnh]** Cài đặt thương hiệu tùy chỉnh hiện có sẵn trong client v2 bởi @zhangzhonghe
- **[AI: Cơ sở tri thức]** Đã bật khả năng sửa đổi lưu trữ vector cho cơ sở tri thức AI bởi @cgyrock
- **[Quy trình làm việc: Phê duyệt]** Thêm cờ `async` cho lệnh phê duyệt, để thích ứng với API tạo nút mới trong canvas quy trình làm việc bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi xóa các giá trị đã chọn khi các trường liên kết phụ thuộc thay đổi trong liên kết phạm vi dữ liệu ([#9551](https://github.com/nocobase/nocobase/pull/9551)) bởi @katherinehhh
  - Đã sửa lỗi tải chế độ dev cho các plugin lưu trữ được xây dựng sẵn phụ thuộc vào các export có tên từ các plugin nguồn cục bộ. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) bởi @Molunerfinn
  - Đã sửa trạng thái menu trường JS không chính xác trong các biểu mẫu con. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) bởi @gchust
  - Sửa lỗi các khối v2 bị thu hẹp trở nên rộng toàn bộ sau khi thoát chế độ chỉnh sửa ([#9529](https://github.com/nocobase/nocobase/pull/9529)) bởi @zhangzhonghe
- **[client-v2]** Đã sửa lỗi đăng ký phụ thuộc dnd-kit không nhất quán. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) bởi @jiannx
- **[flow-engine]** sửa lỗi chọn nhiều cho các trường nguồn dữ liệu bên ngoài trong biểu mẫu v2 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) bởi @katherinehhh
- **[Khối: iframe]** sửa lỗi nội dung iframe không lấp đầy chiều cao khối đã cấu hình ([#9540](https://github.com/nocobase/nocobase/pull/9540)) bởi @katherinehhh
- **[Nhân viên AI]**

  - Sửa lỗi khi nhân viên AI truy cập cơ sở tri thức chỉ đọc ([#9539](https://github.com/nocobase/nocobase/pull/9539)) bởi @cgyrock
  - Đã sửa lỗi thẻ gọi công cụ AI không xuất hiện ngay lập tức khi các sự kiện công cụ được truyền phát bị phân tách ([#9534](https://github.com/nocobase/nocobase/pull/9534)) bởi @2013xile
  - Sửa lỗi khi nhân viên AI truy cập cơ sở tri thức chỉ đọc ([#9538](https://github.com/nocobase/nocobase/pull/9538)) bởi @cgyrock
- **[Hành động: Xuất bản ghi]** cải thiện hiệu suất cấu hình trường với nhiều trường liên kết ([#9524](https://github.com/nocobase/nocobase/pull/9524)) bởi @katherinehhh
- **[Hành động: Cập nhật hàng loạt]** sửa lỗi trạng thái tải của hành động cập nhật hàng loạt bị đặt lại sau khi cập nhật thất bại ([#9509](https://github.com/nocobase/nocobase/pull/9509)) bởi @katherinehhh
- **[Quy trình làm việc]** Thêm trạng thái tải cho việc thực thi quy trình làm việc thủ công. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) bởi @mytharcher
- **[Bản địa hóa]** Đã sửa lỗi bản dịch tham chiếu tích hợp sẵn cho các tác vụ dịch thuật AI ([#9531](https://github.com/nocobase/nocobase/pull/9531)) bởi @2013xile
- **[Trình quản lý di chuyển]** Đã sửa lỗi tạo tệp di chuyển không thành công khi sử dụng OceanBase bởi @2013xile
- **[Lưu trữ tệp: S3(Pro)]** Sửa lỗi xử lý endpoint S3 Pro để tải lên máy chủ và xem trước URL không trùng lặp host bucket. bởi @mytharcher
