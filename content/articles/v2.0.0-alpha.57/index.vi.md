---
title: "NocoBase v2.0.0-alpha.57: Thêm biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId`"
description: "Ghi chú phát hành v2.0.0-alpha.57"
---

### 🎉 Tính năng mới

- **[Workflow]** Thêm các biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng select để cấu hình độ rộng cột thao tác ([#8218](https://github.com/nocobase/nocobase/pull/8218)) bởi @katherinehhh
- **[AI employees]** Sửa lỗi AI employee không phản hồi khi chỉnh sửa lần đầu<br/>Xóa AI employee tích hợp sẵn không cần thiết “Avery Form Assistant”<br/>Thêm quyền vai trò mặc định ban đầu cho AI employee tích hợp sẵn<br/>Cải thiện xử lý lỗi và hành vi đầu ra của AI employee<br/>Thêm hỗ trợ AI truy cập biến ngữ cảnh modal<br/>Thêm hỗ trợ nguồn dữ liệu bên ngoài cho AI<br/>Sửa lỗi cắt hội thoại không chính xác khi AI xử lý khối lượng dữ liệu lớn ([#8191](https://github.com/nocobase/nocobase/pull/8191)) bởi @heziqiang
- **[Workflow]**

  - Thêm phiên bản workflow gốc vào API trùng lặp ([#8225](https://github.com/nocobase/nocobase/pull/8225)) bởi @mytharcher
  - Cải thiện mô tả trường `changed` trong sự kiện collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) bởi @mytharcher
- **[Async task manager]** Cải thiện xử lý lỗi trong các tác vụ dọn dẹp bằng cách thêm cơ chế bắt ngoại lệ để ngăn ứng dụng bị crash ([#8215](https://github.com/nocobase/nocobase/pull/8215)) bởi @mytharcher
- **[Block: Action panel]** Cải thiện hiển thị các block, hành động và trường bị ẩn trong chế độ cấu hình ([#8174](https://github.com/nocobase/nocobase/pull/8174)) bởi @katherinehhh
- **[UI templates]** Thêm plugin UI templates, cung cấp khả năng tái sử dụng block template và popup template. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) bởi @gchust
- **[Action: Export records Pro]** Hành động import pro & export pro hỗ trợ kiểm soát quyền bởi @katherinehhh
- **[Workflow: Approval]** Cập nhật `approval.data` lên phiên bản mới nhất của bản ghi đang được phê duyệt khi kết thúc thực thi, để khớp với chế độ hiển thị bản ghi "Mới nhất" bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Sửa lỗi kiểm tra quyền khi thêm bản ghi con trong bảng cây ([#8240](https://github.com/nocobase/nocobase/pull/8240)) bởi @katherinehhh
  - Sửa lỗi hiển thị sai một số biến liên quan đến bản ghi popup của block. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) bởi @gchust
  - Sửa lỗi các hành động hoặc tab được thêm sau khi kéo thả hành động hoặc tab không hiển thị. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) bởi @gchust
  - Vấn đề kiểm tra quyền trong nguồn dữ liệu bên ngoài ([#8221](https://github.com/nocobase/nocobase/pull/8221)) bởi @katherinehhh
  - Sửa lỗi các hành động nguồn dữ liệu bên ngoài bị ẩn mặc dù có quyền ([#8217](https://github.com/nocobase/nocobase/pull/8217)) bởi @katherinehhh
- **[client]**

  - Xử lý các quy tắc liên kết rỗng để ngăn lỗi ([#8239](https://github.com/nocobase/nocobase/pull/8239)) bởi @zhangzhonghe
  - Sửa lỗi không thể xóa cột thao tác của block bảng. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) bởi @gchust
  - Sửa lỗi thực thi xem trước ghi đầu ra JSX đã biên dịch trở lại stepParams, khiến mã nguồn đã lưu bị ghi đè. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) bởi @gchust
  - Sửa lỗi tải lên tệp đính kèm S3 Pro và cải thiện xem trước tệp ([#8211](https://github.com/nocobase/nocobase/pull/8211)) bởi @katherinehhh
- **[cli]** license-kit tương thích với trường hợp DB_PASSWORD trống ([#8220](https://github.com/nocobase/nocobase/pull/8220)) bởi @jiannx
- **[database]** Sửa lỗi truy vấn trường ngày không nhất quán giữa nguồn dữ liệu chính và bên ngoài ([#8181](https://github.com/nocobase/nocobase/pull/8181)) bởi @cgyrock
- **[Collection field: Sequence]** Sửa lỗi khi lệnh sửa chữa field-sequence gặp collection không tồn tại trong môi trường hiện tại. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) bởi @cgyrock
- **[Workflow: Manual node]** Sửa lỗi xảy ra khi hủy thực thi workflow đã bị xóa ([#8258](https://github.com/nocobase/nocobase/pull/8258)) bởi @mytharcher
- **[UI templates]** Sửa lỗi khi mở popup trường liên kết sẽ sử dụng sai popup template của trường không liên kết. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) bởi @gchust
- **[Departments]** Sửa lỗi tìm kiếm tổng hợp không thể định vị người dùng ([#8222](https://github.com/nocobase/nocobase/pull/8222)) bởi @2013xile
- **[Collection field: Many to many (array)]** Sửa lỗi không thể tạo trường nhiều-nhiều (mảng) khi loại khóa mục tiêu là Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) bởi @2013xile
- **[License settings]** Sửa lỗi hiển thị bất thường của plugin đã được cấp phép ([#8214](https://github.com/nocobase/nocobase/pull/8214)) bởi @jiannx
- **[Action: Import records]** Sửa lỗi chỉ mục hàng trong thông báo lỗi luôn là 1 khi xảy ra lỗi trong hành động import ([#8244](https://github.com/nocobase/nocobase/pull/8244)) bởi @mytharcher
- **[Template print]** Sửa lỗi yêu cầu in template không hoạt động với nguồn dữ liệu bên ngoài bởi @katherinehhh
- **[Workflow: Approval]**

  - Sửa lỗi rollback trùng lặp cùng một giao dịch bởi @mytharcher
  - Sửa lỗi phê duyệt tạo liên kết đến bản ghi mới bởi @mytharcher
  - Sửa lỗi phê duyệt tạo liên kết nhiều-nhiều đến bản ghi mới bởi @mytharcher
