---
title: "NocoBase v1.9.34: Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau"
description: "Ghi chú phát hành phiên bản v1.9.34"
---

### 🚀 Cải tiến

- **[Kiểm soát truy cập]** Cải thiện kiểm tra quyền khi sửa đổi các trường liên kết lồng nhau ([#7856](https://github.com/nocobase/nocobase/pull/7856)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi các trường liên kết từ nguồn dữ liệu bên ngoài không tải được dữ liệu liên kết trong khối biểu mẫu ([#8356](https://github.com/nocobase/nocobase/pull/8356)) bởi @katherinehhh

  - Sửa lỗi các trường liên kết không chính xác trong thành phần `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) bởi @mytharcher

- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in nhật ký hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock

- **[Quy trình làm việc: Nút vòng lặp]** Sửa lỗi nút thất bại trong nhánh điều kiện không thể truyền trạng thái lên nút nhánh cấp trên ([#8360](https://github.com/nocobase/nocobase/pull/8360)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Siêu dữ liệu bộ sưu tập dạng xem nên bao gồm các tùy chọn trường nguồn ([#8337](https://github.com/nocobase/nocobase/pull/8337)) bởi @2013xile

- **[Quy trình làm việc]**
  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của quy trình làm việc ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe

  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher

  - Sửa lỗi trang thực thi bị treo khi quy trình làm việc bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Sửa lỗi thông báo lỗi không chính xác khi xảy ra lỗi ràng buộc duy nhất trong quá trình nhập XLSX không đồng bộ ([#8342](https://github.com/nocobase/nocobase/pull/8342)) bởi @cgyrock

- **[Kiểm soát truy cập]**
  - Cho phép các trường liên kết liên kết bằng cách sử dụng các khóa mục tiêu ([#8352](https://github.com/nocobase/nocobase/pull/8352)) bởi @2013xile

  - Sửa lỗi nguồn dữ liệu được giải quyết không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile

- **[Nguồn dữ liệu: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi khi phương thức không có trong ngữ cảnh bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi khi ứng dụng con thực thi tác vụ nhập/xuất không đồng bộ trong khi ứng dụng chính không bật plugin xuất/nhập pro bởi @cgyrock

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi các trường bộ lọc không hoạt động chính xác trong trung tâm tác vụ bởi @mytharcher
