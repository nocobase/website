---
title: "NocoBase v1.7.0-beta.34: Cải thiện chức năng nhập"
description: "Ghi chú phát hành phiên bản v1.7.0-beta.34"
---

### 🎉 Tính năng mới

- **[undefined]** Hỗ trợ mới cho Gitpod cho phép bạn khởi động môi trường phát triển chỉ với một cú nhấp chuột và nhanh chóng bắt đầu phát triển. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) bởi @kerwin612
- **[Hành động: Nhập bản ghi Pro]**

  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi nhập cài đặt bởi @aaaaaajie
  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi nhập cài đặt bởi @aaaaaajie
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt chiều cao cho trường trình soạn thảo mã bởi @mytharcher
- **[Trình quản lý email]**

  - hỗ trợ đánh dấu email là cần làm và thêm ghi chú bởi @jiannx
  - hỗ trợ nhãn và cài đặt kết hợp bởi @jiannx

### 🚀 Cải tiến

- **[client]**

  - cải thiện kiểu dáng cho thành phần lọc phạm vi ngày ([#6939](https://github.com/nocobase/nocobase/pull/6939)) bởi @katherinehhh
  - Khắc phục sự cố khi các điều khiển biểu mẫu ẩn bắt phím tab, cải thiện đáng kể hiệu quả thao tác biểu mẫu ([#6942](https://github.com/nocobase/nocobase/pull/6942)) bởi @kerwin612
  - xác thực các trường bắt buộc trước khi hiển thị hộp thoại xác nhận ([#6931](https://github.com/nocobase/nocobase/pull/6931)) bởi @katherinehhh
  - điều chỉnh hiển thị nội dung tùy chọn bộ lọc ngày ([#6928](https://github.com/nocobase/nocobase/pull/6928)) bởi @katherinehhh
- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - cài đặt hiển thị dấu hai chấm nhãn biểu mẫu không hoạt động ([#6947](https://github.com/nocobase/nocobase/pull/6947)) bởi @katherinehhh
  - Thay đổi kích thước khối bằng cách kéo không hoạt động ([#6944](https://github.com/nocobase/nocobase/pull/6944)) bởi @chenos
  - i18n của thành phần gán trường không hoạt động ([#6945](https://github.com/nocobase/nocobase/pull/6945)) bởi @katherinehhh
  - kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh
  - biến điều kiện lồng nhau trong quy tắc liên kết không hiển thị đúng ([#6929](https://github.com/nocobase/nocobase/pull/6929)) bởi @katherinehhh
  - cài đặt chiều cao khối không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh
  - Khắc phục sự cố với nút sao chép trong cửa sổ bật lên lỗi sao chép ra dưới dạng [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) bởi @kerwin612
  - phân tích biến ngày không chính xác trong Giới hạn phạm vi ngày ([#6930](https://github.com/nocobase/nocobase/pull/6930)) bởi @katherinehhh
- **[database]** Đã sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong liên kết nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie
- **[undefined]** Sử dụng Node 20 do yêu cầu của gói commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher
- **[Trường bộ sưu tập: Markdown(Vditor)]** sự cố chiều rộng thành phần trường markdown-vditor sau khi phóng to và thu nhỏ ([#6946](https://github.com/nocobase/nocobase/pull/6946)) bởi @katherinehhh
- **[Tài liệu API]** Thêm thông tin sub-app còn thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết sự cố khi hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66
- **[Trình quản lý nguồn dữ liệu]** Giải quyết sự cố với sắp xếp kéo và thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos
- **[Hành động: Xuất bản ghi]** Đã sửa lỗi các mối quan hệ lồng nhau không xuất được chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Tránh lỗi do thứ tự tải plugin gây ra bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa tham số tải lên bị trùng lặp bởi @mytharcher
  - Sửa url xem trước và tham số tải lên bởi @mytharcher
- **[Khối: Biểu mẫu nhiều bước]** Sửa các kiểu bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher
  - Sửa locale bởi @mytharcher
  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher
- **[Trình quản lý email]**

  - sửa: xóa cột hành động bởi @jiannx
  - sửa lỗi modal thêm ghi chú bởi @jiannx
  - sửa quyền api của bộ sưu tập mailMessageNotes và mailMessageLabels bởi @jiannx
