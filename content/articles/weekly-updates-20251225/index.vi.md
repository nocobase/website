---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Thêm các biến hệ thống mới trong quy trình làm việc, bao gồm `instanceId` và `genSnowflakeId`, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*Ngày phát hành: 2025-12-24*

### 🎉 Tính năng mới

- **[Workflow]** Thêm các biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tràn stack do vòng lặp vô hạn khi hiển thị các trường liên kết tải chậm ([#8262](https://github.com/nocobase/nocobase/pull/8262)) bởi @zhangzhonghe
- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng trong thông báo lỗi luôn là 1 khi xảy ra lỗi trong hành động nhập ([#8244](https://github.com/nocobase/nocobase/pull/8244)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa lỗi xảy ra khi hủy thực thi workflow đã bị xóa ([#8258](https://github.com/nocobase/nocobase/pull/8258)) bởi @mytharcher
- **[Trường collection: Sequence]** Sửa lỗi khi lệnh sửa chữa trường-sequence gặp collection không tồn tại trong môi trường hiện tại. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]** Sửa logic kiểm tra duy nhất khi giá trị của trường duy nhất là null bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa lỗi rollback trùng lặp của cùng một giao dịch bởi @mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*Ngày phát hành: 2025-12-22*

### 🚀 Cải tiến

- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện xử lý lỗi trong các tác vụ dọn dẹp bằng cách thêm cơ chế bắt ngoại lệ để ngăn ứng dụng bị crash ([#8215](https://github.com/nocobase/nocobase/pull/8215)) bởi @mytharcher
- **[Workflow]** Thêm workflow instance gốc vào API sao chép ([#8225](https://github.com/nocobase/nocobase/pull/8225)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Xử lý các quy tắc liên kết rỗng để ngăn lỗi ([#8239](https://github.com/nocobase/nocobase/pull/8239)) bởi @zhangzhonghe
- **[Phòng ban]** Sửa lỗi tìm kiếm tổng hợp không thể định vị người dùng ([#8222](https://github.com/nocobase/nocobase/pull/8222)) bởi @2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*Ngày phát hành: 2025-12-19*

### 🚀 Cải tiến

- **[Workflow]** Cải thiện mô tả của trường `changed` trong sự kiện collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[cli]** license-kit tương thích với trường hợp DB_PASSWORD trống ([#8220](https://github.com/nocobase/nocobase/pull/8220)) bởi @jiannx
- **[database]** Sửa lỗi truy vấn trường ngày không nhất quán giữa nguồn dữ liệu chính và nguồn dữ liệu bên ngoài ([#8181](https://github.com/nocobase/nocobase/pull/8181)) bởi @cgyrock
- **[Cài đặt giấy phép]** Sửa lỗi hiển thị bất thường của plugin đã được cấp phép ([#8214](https://github.com/nocobase/nocobase/pull/8214)) bởi @jiannx
- **[Workflow: Phê duyệt]**

  - Sửa lỗi phê duyệt tạo liên kết đến bản ghi mới bởi @mytharcher
  - Sửa lỗi phê duyệt tạo liên kết nhiều-nhiều đến bản ghi mới bởi @mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*Ngày phát hành: 2025-12-18*

### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi xảy ra khi xóa phiên bản workflow không phải là phiên bản hiện tại ([#8203](https://github.com/nocobase/nocobase/pull/8203)) bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*Ngày phát hành: 2025-12-24*

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Giải quyết vấn đề nội dung tin nhắn nút llm không được hiển thị ([#8257](https://github.com/nocobase/nocobase/pull/8257)) bởi @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*Ngày phát hành: 2025-12-24*

### 🎉 Tính năng mới

- **[Workflow]** Thêm các biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Sử dụng select cho cấu hình độ rộng cột thao tác ([#8218](https://github.com/nocobase/nocobase/pull/8218)) bởi @katherinehhh
- **[Nhân viên AI]** Sửa lỗi nhân viên AI không phản hồi khi chỉnh sửa lần đầu<br/>Xóa nhân viên AI tích hợp sẵn không cần thiết “Avery Form Assistant”<br/>Thêm quyền vai trò mặc định ban đầu cho nhân viên AI tích hợp sẵn<br/>Cải thiện xử lý lỗi và hành vi đầu ra của nhân viên AI<br/>Thêm hỗ trợ AI truy cập biến ngữ cảnh modal<br/>Thêm hỗ trợ nguồn dữ liệu bên ngoài cho AI<br/>Sửa lỗi cắt ngắn hội thoại không chính xác khi AI xử lý khối lượng dữ liệu lớn ([#8191](https://github.com/nocobase/nocobase/pull/8191)) bởi @heziqiang
- **[Workflow]**

  - Thêm workflow instance gốc vào API sao chép ([#8225](https://github.com/nocobase/nocobase/pull/8225)) bởi @mytharcher
  - Cải thiện mô tả của trường `changed` trong sự kiện collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện xử lý lỗi trong các tác vụ dọn dẹp bằng cách thêm cơ chế bắt ngoại lệ để ngăn ứng dụng bị crash ([#8215](https://github.com/nocobase/nocobase/pull/8215)) bởi @mytharcher
- **[Khối: Bảng hành động]** cải thiện hiển thị các khối, hành động và trường bị ẩn trong chế độ cấu hình ([#8174](https://github.com/nocobase/nocobase/pull/8174)) bởi @katherinehhh
- **[Mẫu giao diện]** Thêm plugin mẫu giao diện, cung cấp khả năng tái sử dụng các mẫu khối và mẫu popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) bởi @gchust
- **[Hành động: Xuất bản ghi Pro]** Hành động import pro & export pro hỗ trợ kiểm soát quyền bởi @katherinehhh
- **[Workflow: Phê duyệt]** Cập nhật `approval.data` lên phiên bản mới nhất của bản ghi đang được phê duyệt khi kết thúc thực thi, để phù hợp với chế độ hiển thị bản ghi "Mới nhất" bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]**

  - sửa lỗi kiểm tra quyền cho việc thêm bản ghi con trong bảng cây ([#8240](https://github.com/nocobase/nocobase/pull/8240)) bởi @katherinehhh
  - Sửa lỗi một số biến liên quan đến bản ghi popup của khối hiển thị không chính xác. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) bởi @gchust
  - Sửa lỗi các hành động hoặc tab được thêm sau khi kéo hành động hoặc tab không hiển thị. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) bởi @gchust
  - vấn đề kiểm tra quyền trong nguồn dữ liệu bên ngoài ([#8221](https://github.com/nocobase/nocobase/pull/8221)) bởi @katherinehhh
  - sửa lỗi các hành động của nguồn dữ liệu bên ngoài bị ẩn mặc dù có quyền ([#8217](https://github.com/nocobase/nocobase/pull/8217)) bởi @katherinehhh
- **[client]**

  - Xử lý các quy tắc liên kết rỗng để ngăn lỗi ([#8239](https://github.com/nocobase/nocobase/pull/8239)) bởi @zhangzhonghe
  - Sửa lỗi không thể xóa cột thao tác của khối bảng. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) bởi @gchust
  - Sửa lỗi thực thi xem trước ghi đầu ra JSX đã biên dịch trở lại stepParams, khiến mã nguồn đã lưu bị ghi đè. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) bởi @gchust
  - Sửa lỗi tải lên tệp đính kèm S3 Pro và cải thiện xem trước tệp ([#8211](https://github.com/nocobase/nocobase/pull/8211)) bởi @katherinehhh
- **[cli]** license-kit tương thích với trường hợp DB_PASSWORD trống ([#8220](https://github.com/nocobase/nocobase/pull/8220)) bởi @jiannx
- **[database]** Sửa lỗi truy vấn trường ngày không nhất quán giữa nguồn dữ liệu chính và nguồn dữ liệu bên ngoài ([#8181](https://github.com/nocobase/nocobase/pull/8181)) bởi @cgyrock
- **[Trường collection: Sequence]** Sửa lỗi khi lệnh sửa chữa trường-sequence gặp collection không tồn tại trong môi trường hiện tại. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) bởi @cgyrock
- **[Workflow: Nút thủ công]** Sửa lỗi xảy ra khi hủy thực thi workflow đã bị xóa ([#8258](https://github.com/nocobase/nocobase/pull/8258)) bởi @mytharcher
- **[Mẫu giao diện]** Sửa lỗi khi mở popup trường liên kết sẽ sử dụng sai mẫu popup của trường không phải liên kết. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) bởi @gchust
- **[Phòng ban]** Sửa lỗi tìm kiếm tổng hợp không thể định vị người dùng ([#8222](https://github.com/nocobase/nocobase/pull/8222)) bởi @2013xile
- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi không thể tạo trường nhiều-nhiều (mảng) khi loại khóa mục tiêu là Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) bởi @2013xile
- **[Cài đặt giấy phép]** Sửa lỗi hiển thị bất thường của plugin đã được cấp phép ([#8214](https://github.com/nocobase/nocobase/pull/8214)) bởi @jiannx
- **[Hành động: Nhập bản ghi]** Sửa lỗi chỉ mục hàng trong thông báo lỗi luôn là 1 khi xảy ra lỗi trong hành động nhập ([#8244](https://github.com/nocobase/nocobase/pull/8244)) bởi @mytharcher
- **[In mẫu]** Sửa lỗi yêu cầu in mẫu không hoạt động với nguồn dữ liệu bên ngoài bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Sửa lỗi rollback trùng lặp của cùng một giao dịch bởi @mytharcher
  - Sửa lỗi phê duyệt tạo liên kết đến bản ghi mới bởi @mytharcher
  - Sửa lỗi phê duyệt tạo liên kết nhiều-nhiều đến bản ghi mới bởi @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*Ngày phát hành: 2025-12-18*

### 🚀 Cải tiến

- **[client]** hỗ trợ độ rộng cột tùy chỉnh cho các cột trong bảng ([#8200](https://github.com/nocobase/nocobase/pull/8200)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Ngăn tổng độ rộng hàng bị tràn khi thay đổi kích thước cột ([#8166](https://github.com/nocobase/nocobase/pull/8166)) bởi @zhangzhonghe
- **[flow-engine]** Sửa lỗi gửi biểu mẫu trong modal được tái sử dụng qua popup uid không làm mới dữ liệu khối. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) bởi @gchust
- **[Trường collection: Công thức]** Sửa lỗi không thể thêm trường BigInt vào khối Chi tiết và Biểu mẫu ([#8201](https://github.com/nocobase/nocobase/pull/8201)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi xảy ra khi xóa phiên bản workflow không phải là phiên bản hiện tại ([#8203](https://github.com/nocobase/nocobase/pull/8203)) bởi @mytharcher
