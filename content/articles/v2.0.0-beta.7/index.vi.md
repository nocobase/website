---
title: "NocoBase v2.0.0-beta.7: thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ bản"
description: "Ghi chú phát hành của v2.0.0-beta.7"
---

### 🎉 Tính năng mới

- **[test]** Thêm kiểm soát đồng thời cấp tiến trình cho trình quản lý tác vụ cơ bản ([#8343](https://github.com/nocobase/nocobase/pull/8343)) bởi @cgyrock

- **[AI employees]** Hỗ trợ mô hình Gemini-3 với chữ ký suy luận gọi hàm ([#8377](https://github.com/nocobase/nocobase/pull/8377)) bởi @heziqiang

### 🚀 Cải tiến

- **[flow-engine]** Thêm `rowOrder` vào GridModel để đảm bảo thứ tự hàng nhất quán ([#8371](https://github.com/nocobase/nocobase/pull/8371)) bởi @zhangzhonghe

- **[AI employees]**
  - Hỗ trợ chỉnh sửa tùy chỉnh và tự động cập nhật lời nhắc hệ thống ([#8378](https://github.com/nocobase/nocobase/pull/8378)) bởi @heziqiang

  - Cải thiện xử lý lỗi AI cho các dịch vụ và mô hình LLM ([#8351](https://github.com/nocobase/nocobase/pull/8351)) bởi @heziqiang

- **[File manager]** Thêm tùy chọn yêu cầu để lấy tệp OSS phía máy chủ nếu cần tham số hoặc tiêu đề bổ sung ([#8372](https://github.com/nocobase/nocobase/pull/8372)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi khi trường liên kết vẫn có thể mở popup sau khi chuyển từ thành phần chọn bản ghi sang thành phần chọn. ([#8375](https://github.com/nocobase/nocobase/pull/8375)) bởi @gchust

  - Đã sửa lỗi quy tắc liên kết không được chạy lại sau khi thay đổi phân trang cho khối chi tiết, khối biểu mẫu chỉnh sửa và khối danh sách. ([#8366](https://github.com/nocobase/nocobase/pull/8366)) bởi @gchust

  - Đã sửa lỗi các trường của bảng con/biểu mẫu con đã cấu hình không hiển thị khi chuyển đổi qua lại giữa các thành phần trường. ([#8365](https://github.com/nocobase/nocobase/pull/8365)) bởi @gchust

- **[logger]** Sửa lỗi thông tin lỗi bổ sung bị loại bỏ khi in nhật ký hệ thống ([#8367](https://github.com/nocobase/nocobase/pull/8367)) bởi @cgyrock

- **[Block: template (không còn dùng)]** Đã sửa lỗi không thể truy cập trang chỉnh sửa cho các mẫu kế thừa (v1). ([#8376](https://github.com/nocobase/nocobase/pull/8376)) bởi @gchust

- **[Workflow]**
  - Thêm ID phiên bản vào ID Snowflake của các công việc, để tránh xung đột ID trong chế độ cụm ([#8382](https://github.com/nocobase/nocobase/pull/8382)) bởi @mytharcher

  - Sửa lỗi quy tắc liên kết trong khối chi tiết nút CC của workflow ([#8381](https://github.com/nocobase/nocobase/pull/8381)) bởi @zhangzhonghe

  - Sửa lỗi trang thực thi bị sập khi workflow bị xóa ([#8361](https://github.com/nocobase/nocobase/pull/8361)) bởi @mytharcher

- **[Access control]** Sửa lỗi nguồn dữ liệu được phân giải không chính xác khi xử lý quyền cho các trường liên kết ([#8370](https://github.com/nocobase/nocobase/pull/8370)) bởi @2013xile

- **[Data source: REST API]** Thêm khả năng chịu lỗi cho ngữ cảnh yêu cầu, để tránh lỗi xảy ra khi phương thức không có trong ngữ cảnh bởi @mytharcher
