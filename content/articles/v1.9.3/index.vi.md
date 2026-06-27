---
title: "NocoBase v1.9.3: Sửa lỗi xảy ra khi trùng lặp quy trình phê duyệt"
description: "Ghi chú phát hành phiên bản v1.9.3"
---

### 🚀 Cải tiến

- **[database]** Thêm tùy chọn `multipleStatements` vào phiên bản kết nối MariaDB để hỗ trợ gọi nhiều câu lệnh trong một truy vấn duy nhất ([#7781](https://github.com/nocobase/nocobase/pull/7781)) bởi @mytharcher

- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow để sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[server]** Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher

- **[client]** Sửa lỗi "Vượt quá kích thước ngăn xếp cuộc gọi tối đa" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) bởi @zhangzhonghe

- **[database]** Phát hiện trường chỉ mục không chính xác khi tên trường sử dụng kiểu snake_case ([#7776](https://github.com/nocobase/nocobase/pull/7776)) bởi @2013xile

- **[Workflow]** Đã khắc phục sự cố nơi trình điều phối workflow ở chế độ cụm không xác định chính xác trạng thái rảnh, điều này có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher

- **[Mobile (không còn được hỗ trợ)]** Sửa lỗi cửa sổ bật lên giá trị mặc định của trường ngày tháng trên thiết bị di động không thể chọn ngày ([#7783](https://github.com/nocobase/nocobase/pull/7783)) bởi @zhangzhonghe

- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra khi trùng lặp workflow phê duyệt bởi @mytharcher

- **[Trình quản lý email]** collection mailMessages thêm các chỉ mục bởi @jiannx
