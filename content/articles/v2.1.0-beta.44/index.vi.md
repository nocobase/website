---
title: "NocoBase v2.1.0-beta.44: Khắc phục sự cố không hiển thị dữ liệu trường quan hệ đã chọn trên thiết bị di động"
description: "Ghi chú phát hành của v2.1.0-beta.44"
---

### 🚀 Cải tiến

- **[Quy trình phê duyệt]** Điều chỉnh quy tắc xác thực cho cấu hình kích hoạt và nút phê duyệt để đảm bảo các trường liên quan đến giao diện tồn tại. bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Khắc phục sự cố dữ liệu trường quan hệ đã chọn không hiển thị trên thiết bị di động. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) bởi @zhangzhonghe
- **[client-v2]**

  - Khắc phục lỗi lưu quy tắc liên kết menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) bởi @zhangzhonghe
  - Khắc phục khoảng cách thừa phía trên các khối trên trang v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) bởi @zhangzhonghe
- **[flow-engine]** Khắc phục sự cố trang bị treo khi đặt giá trị trường cho biểu mẫu con. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) bởi @gchust
- **[AI employees]**

  - Khắc phục xác thực URL cơ sở của nhà cung cấp AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) bởi @cgyrock
  - Khắc phục lỗi `ctx.get` trong các nút quy trình làm việc của AI employee. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) bởi @cgyrock
- **[Thông báo: Tin nhắn trong ứng dụng]** Khắc phục rủi ro SQL injection trong bộ lọc dấu thời gian kênh thông báo trong ứng dụng. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) bởi @mytharcher
- **[Hành động: Sao chép bản ghi]** Khắc phục sự cố trạng thái nút không được đặt lại khi gửi bản ghi sao chép thất bại. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) bởi @katherinehhh
- **[Lịch]** Khắc phục sự cố màu sự kiện lịch không được hiển thị từ trường màu đã cấu hình trên trang v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) bởi @jiannx
- **[Công cụ luồng]**

  - Khắc phục sự cố khi sửa đổi một khối sau khi sao chép mẫu của nó có thể vô tình ảnh hưởng đến nội dung của khối gốc. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) bởi @gchust
  - Khắc phục sự cố kéo tab cửa sổ bật lên để sắp xếp lại không hoạt động. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) bởi @gchust
