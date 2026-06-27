---
title: "NocoBase v1.8.0-alpha.4: Hỗ trợ lọc thêm nhiều trường của quy trình làm việc"
description: "Ghi chú phát hành của v1.8.0-alpha.4"
---

### 🚀 Cải tiến

- **[Workflow]** Hỗ trợ lọc thêm nhiều trường của workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) bởi @mytharcher

- **[Trình quản lý email]** hỗ trợ giá trị gửi mặc định trong pop-up, hỗ trợ tìm kiếm mờ cho người nhận, và sửa các lỗi bởi @jiannx

### 🐛 Sửa lỗi

- **[Cơ sở dữ liệu]** sửa: thêm trường creator và updater còn thiếu khi import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) bởi @aaaaaajie

- **[Client]**
  - thiếu tiêu đề trường khi đặt biến trong thành phần gán giá trị ([#7001](https://github.com/nocobase/nocobase/pull/7001)) bởi @katherinehhh

  - Các trường liên kết hiển thị bảng con và biểu mẫu con khi di chuột ở chế độ read-pretty ([#7002](https://github.com/nocobase/nocobase/pull/7002)) bởi @zhangzhonghe

  - quy tắc liên kết khối markdown không hoạt động khi được kích hoạt bởi hành động popup ([#7007](https://github.com/nocobase/nocobase/pull/7007)) bởi @katherinehhh

  - chuyển trang trong bảng con của khối chi tiết trong modal kích hoạt cảnh báo thay đổi chưa lưu ([#7004](https://github.com/nocobase/nocobase/pull/7004)) bởi @katherinehhh

  - quy tắc liên kết kiểu trường không hoạt động ([#7003](https://github.com/nocobase/nocobase/pull/7003)) bởi @katherinehhh

- **[Trình quản lý tác vụ bất đồng bộ]** Đã sửa lỗi thực thi nhiều lần trong quá trình import bất đồng bộ ([#7006](https://github.com/nocobase/nocobase/pull/7006)) bởi @aaaaaajie

- **[Bản địa hóa]** Giải quyết lỗi gây ra bởi văn bản trống ([#7010](https://github.com/nocobase/nocobase/pull/7010)) bởi @2013xile

- **[Hành động: Xuất bản ghi Pro]** Đã sửa lỗi thực thi nhiều lần trong quá trình import bất đồng bộ bởi @aaaaaajie

- **[Workflow: Phê duyệt]** Sửa lỗi ủy quyền phê duyệt không thể tiếp tục khi được người khác phê duyệt bởi @mytharcher

- **[Trình quản lý email]**
  - nhiều khóa chính cho bảng "mailmessagelabels_mailmessages" bởi @jiannx

  - cài đặt pop-up không hiển thị bởi @jiannx

  - tìm kiếm mờ mail để tạo bộ lọc duy nhất bởi @jiannx

  - tìm kiếm mờ người nhận hỗ trợ các trường liên kết bởi @jiannx

  - thêm trường "id" vào mailmessagelabelsMailmessages bởi @jiannx
