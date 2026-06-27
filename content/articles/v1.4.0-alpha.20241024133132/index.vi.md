---
title: "NocoBase v1.4.0-alpha.20241024133132: Hỗ trợ thêm nhóm trên biểu mẫu và khối chi tiết"
description: "Ghi chú phát hành của v1.4.0-alpha.20241024133132"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ thêm nhóm trên biểu mẫu và khối chi tiết ([#5498](https://github.com/nocobase/nocobase/pull/5498)) bởi @katherinehhh

- **[Lịch]** plugin-calendar thêm cài đặt chế độ xem mặc định và cấu hình quốc tế hóa ([#5487](https://github.com/nocobase/nocobase/pull/5487)) bởi @Cyx649312038

- **[Nguồn dữ liệu: KingbaseES]** Hỗ trợ sử dụng cơ sở dữ liệu Kingbase làm nguồn dữ liệu chính hoặc bên ngoài (chế độ pg) bởi @chareice
Tham khảo: [Nguồn dữ liệu - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Cải tiến

- **[database]** Hỗ trợ logic tải tĩnh của plugin ([#5466](https://github.com/nocobase/nocobase/pull/5466)) bởi @chareice

- **[client]** Cải thiện hiệu suất hiển thị của khối bảng (thời gian hiển thị lần đầu giảm khoảng 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) bởi @zhangzhonghe

- **[Di động]** ứng dụng di động hỗ trợ khối biểu mẫu lọc ([#5482](https://github.com/nocobase/nocobase/pull/5482)) bởi @katherinehhh

- **[Trình quản lý sao lưu]**
  - Thay đổi cài đặt mặc định `Sao lưu tệp lưu trữ cục bộ` thành true bởi @gchust

  - Hoàn tác dữ liệu cơ sở dữ liệu nếu hành động khôi phục thất bại bởi @gchust

### 🐛 Sửa lỗi

- **[server]** Sự kiện afterLoad của ứng dụng không được kích hoạt sau khi cài đặt ([#5506](https://github.com/nocobase/nocobase/pull/5506)) bởi @chenos

- **[Biểu mẫu công khai]** đăng ký đoạn ACL cho biểu mẫu công khai ([#5505](https://github.com/nocobase/nocobase/pull/5505)) bởi @katherinehhh

- **[Trình quản lý sao lưu]** đã sửa lỗi sau khi khôi phục ứng dụng con, ứng dụng chính sẽ bị treo nếu ứng dụng con sử dụng schema khác bởi @gchust
