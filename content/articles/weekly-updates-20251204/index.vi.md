---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: thêm tùy chọn `trình chuyển đổi thông báo lỗi` trong cấu hình nguồn dữ liệu API restful, cho phép chọn hiển thị ảnh chụp nhanh hoặc bản ghi mới nhất trong giao diện quy trình phê duyệt, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/en/blog/v1.9.19)

*Ngày phát hành: 2025-12-04*

### 🐛 Sửa lỗi

- **[Quy trình công việc: Phê duyệt]**
  - Sửa lỗi khi danh sách phê duyệt gặp sự cố OOM bởi @mytharcher
  - Sửa lỗi cửa sổ bật lên người phê duyệt không hiển thị tiêu đề bởi @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/en/blog/v1.9.18)

*Ngày phát hành: 2025-12-04*

### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Các trường được nhập không khớp với các trường được đặt trong cài đặt ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile
- **[Quy trình công việc]** Sửa lỗi trang thực thi báo lỗi khi jobs trên node không được xác định ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher
- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền trên các thao tác liên kết cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi quyền bị báo lỗi khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher
  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả công việc ở nhánh trả về bởi @mytharcher
  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher

### [v1.9.17](https://www.nocobase.com/en/blog/v1.9.17)

*Ngày phát hành: 2025-12-02*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi nhấp nháy của hộp chọn thả xuống quy tắc liên kết ([#8018](https://github.com/nocobase/nocobase/pull/8018)) bởi @zhangzhonghe
- **[acl]** Sửa lỗi thông tin meta ACL không chính xác khi phạm vi quyền của nguồn dữ liệu bên ngoài sử dụng các biến liên quan đến người dùng hiện tại ([#8013](https://github.com/nocobase/nocobase/pull/8013)) bởi @2013xile
- **[Trình chỉnh sửa chủ đề]** Bật trình chuyển đổi chủ đề trên thiết bị di động ([#8046](https://github.com/nocobase/nocobase/pull/8046)) bởi @zhangzhonghe
- **[Trình quản lý đa ứng dụng]** Cài đặt cấp độ log không được áp dụng cho các ứng dụng con ([#8045](https://github.com/nocobase/nocobase/pull/8045)) bởi @2013xile

### [v1.9.16](https://www.nocobase.com/en/blog/v1.9.16)

*Ngày phát hành: 2025-12-02*

### 🎉 Tính năng mới

- **[Nguồn dữ liệu: REST API]** thêm tùy chọn `trình chuyển đổi thông báo lỗi` trong cấu hình nguồn dữ liệu api restful bởi @cgyrock

### 🚀 Cải tiến

- **[client]**

  - hiển thị các tùy chọn bị thu gọn khi di chuột trong thành phần Chọn ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh
  - tối ưu hóa thông báo xác thực cho bảng con ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh
- **[Quy trình công việc]** Thêm ngữ cảnh nguồn dữ liệu "chính" cho UserSelect, để cung cấp một thành phần phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]** Sử dụng thành phần chung để giảm mã trùng lặp bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi tải chậm trong Variable.Input, có thể khiến menu tùy chọn biến hiển thị lại không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Sửa lỗi báo lỗi khi trường trong tệp xlsx nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher
- **[Quy trình công việc]** Sửa lỗi hàng đợi đóng trước khi xuất bản tin nhắn ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher
- **[Quy trình công việc: Luồng con]** Sửa lỗi quy trình công việc được chọn hiển thị "N/A" khi số lượng quy trình công việc lớn hơn 200 bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher
  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher

### [v1.9.15](https://www.nocobase.com/en/blog/v1.9.15)

*Ngày phát hành: 2025-11-28*

### 🐛 Sửa lỗi

- **[client]**

  - Tránh báo lỗi khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher
  - giải quyết lỗi khi thêm bản ghi con trong khối bảng cây liên kết ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh
- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa các trường liên kết của phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang
- **[Bộ sưu tập: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi không thể cập nhật trường mảng m2m trong bảng con ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher
  - Sửa lỗi bình luận trong kết quả công việc là null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/en/blog/v2.0.0-alpha.50)

*Ngày phát hành: 2025-12-02*

### 🚀 Cải tiến

- **[client]**

  - hỗ trợ cài đặt cho phép Nhiều trong thành phần tải lên tệp đính kèm ([#8052](https://github.com/nocobase/nocobase/pull/8052)) bởi @katherinehhh
  - hiển thị các tùy chọn bị thu gọn khi di chuột trong thành phần Chọn ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh
  - hiển thị các tùy chọn bị thu gọn khi di chuột trong thành phần Chọn ([#8030](https://github.com/nocobase/nocobase/pull/8030)) bởi @katherinehhh
- **[Nhân viên AI]** thêm trường nhà cung cấp còn thiếu vào biểu mẫu Thêm LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) bởi @heziqiang
- **[Quy trình công việc]** Thêm ngữ cảnh nguồn dữ liệu "chính" cho UserSelect, để cung cấp một thành phần phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi hiển thị N/A sau khi tắt allowMultiple trong lựa chọn bản ghi liên kết nhiều-nhiều ([#8050](https://github.com/nocobase/nocobase/pull/8050)) bởi @katherinehhh
  - Sửa lỗi nhấp nháy của hộp chọn thả xuống quy tắc liên kết ([#8018](https://github.com/nocobase/nocobase/pull/8018)) bởi @zhangzhonghe
  - Sửa lỗi chuyển trường ngày sang trường thời gian trong hành động lọc gây ra lỗi hiển thị. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) bởi @gchust
  - Sửa lỗi menu bản ghi hiện tại xuất hiện khi thêm khối bình luận. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) bởi @gchust
  - Sửa lỗi xóa bản ghi trong khối chọn bản ghi thất bại ([#8023](https://github.com/nocobase/nocobase/pull/8023)) bởi @katherinehhh
  - Sửa lỗi kiểu mặc định của trường JS trong khối chi tiết không chính xác. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) bởi @gchust
  - sửa lỗi khối bảng cây không thể mở rộng các nút con ([#8011](https://github.com/nocobase/nocobase/pull/8011)) bởi @katherinehhh
  - sửa lỗi kéo cột bảng con không hoạt động ([#8026](https://github.com/nocobase/nocobase/pull/8026)) bởi @katherinehhh
  - sửa lỗi chiều rộng cột bảng con không được áp dụng ([#8027](https://github.com/nocobase/nocobase/pull/8027)) bởi @katherinehhh
  - Đã giải quyết sự cố gây ra lỗi khi tải dữ liệu cho các trường liên kết trong cửa sổ bật lên, đảm bảo hiển thị dữ liệu và chức năng mượt mà hơn. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) bởi @gchust
  - sửa lỗi kiểu popover của trường hiển thị markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) bởi @katherinehhh
  - Sửa lỗi tiêu đề mặc định của cửa sổ bật lên hành động chỉnh sửa và tạo mới không chính xác. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) bởi @gchust
  - Sửa lỗi tải chậm trong Variable.Input, có thể khiến menu tùy chọn biến hiển thị lại không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher
  - Sửa lỗi biến bản ghi cửa sổ bật lên hiện tại không thể được giải quyết chính xác trong cửa sổ bật lên được mở bởi trường liên kết. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) bởi @gchust
- **[acl]** Sửa lỗi thông tin meta ACL không chính xác khi phạm vi quyền của nguồn dữ liệu bên ngoài sử dụng các biến liên quan đến người dùng hiện tại ([#8013](https://github.com/nocobase/nocobase/pull/8013)) bởi @2013xile
- **[flow-engine]**

  - sửa lỗi bản ghi bình luận không lưu được sau khi chỉnh sửa ([#8035](https://github.com/nocobase/nocobase/pull/8035)) bởi @katherinehhh
  - Sửa lỗi khối dữ liệu không làm mới khi đóng cửa sổ bật lên bằng cách nhấp vào nút gửi biểu mẫu bên trong cửa sổ bật lên. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) bởi @gchust
- **[Trình chỉnh sửa chủ đề]** Bật trình chuyển đổi chủ đề trên thiết bị di động ([#8046](https://github.com/nocobase/nocobase/pull/8046)) bởi @zhangzhonghe
- **[Trình quản lý đa ứng dụng (không dùng nữa)]** Cài đặt cấp độ log không được áp dụng cho các ứng dụng con ([#8045](https://github.com/nocobase/nocobase/pull/8045)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi khi cập nhật mật khẩu cho nguồn dữ liệu bên ngoài ([#8024](https://github.com/nocobase/nocobase/pull/8024)) bởi @cgyrock
- **[Hành động: Nhập bản ghi]** Sửa lỗi báo lỗi khi trường trong tệp xlsx nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher
- **[Quy trình công việc]** Sửa lỗi hàng đợi đóng trước khi xuất bản tin nhắn ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher
- **[Bình luận]**

  - Sửa lỗi xóa bản ghi trong khối bình luận thất bại bởi @katherinehhh
  - Sửa lỗi hiển thị cảnh báo khi khối bình luận được sử dụng trên bộ sưu tập không phải bình luận bởi @katherinehhh
- **[Đa không gian]** Thiết bị di động hỗ trợ chuyển đổi không gian bởi @jiannx
- **[Quy trình công việc: Luồng con]** Sửa lỗi quy trình công việc được chọn hiển thị "N/A" khi số lượng quy trình công việc lớn hơn 200 bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi báo lỗi khi tạo khối thông tin phê duyệt bởi @mytharcher
  - Thêm di chuyển để tránh lỗi bản ghi trùng lặp khi thêm chỉ mục bởi @mytharcher
  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher

### [v2.0.0-alpha.49](https://www.nocobase.com/en/blog/v2.0.0-alpha.49)

*Ngày phát hành: 2025-11-29*

### 🎉 Tính năng mới

- **[Quy trình công việc: Phê duyệt]** Cho phép chọn hiển thị ảnh chụp nhanh hoặc bản ghi mới nhất trong giao diện quy trình phê duyệt bởi @mytharcher

### 🚀 Cải tiến

- **[client]** tối ưu hóa thông báo xác thực cho bảng con ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh
- **[Đo từ xa: Prometheus]** Nâng cấp `@opentelemetry/exporter-prometheus` bởi @2013xile
- **[Hành động: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ không đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại bởi @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi biến bản ghi hiện tại không thể được kích hoạt chính xác để giải quyết trong khối chi tiết. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) bởi @gchust
- **[client]** Sửa lỗi chọn và xóa khối bảng cho các khóa tổng hợp ([#7978](https://github.com/nocobase/nocobase/pull/7978)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi]** sửa lỗi thiếu các trường hệ thống trong danh sách trường có thể xuất ([#8002](https://github.com/nocobase/nocobase/pull/8002)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sửa lỗi không thể cập nhật trường mảng m2m trong bảng con ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock
- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa các trường liên kết của phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang
- **[Quy trình công việc: Phê duyệt]** Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/en/blog/v2.0.0-alpha.48)

*Ngày phát hành: 2025-11-28*

### 🎉 Tính năng mới

- **[Khối: Bản đồ]** thêm khối bản đồ 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) bởi @katherinehhh
- **[Xác thực: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa được xác thực bởi @heziqiang

### 🐛 Sửa lỗi

- **[client]**

  - Tránh báo lỗi khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher
  - giải quyết lỗi khi thêm bản ghi con trong khối bảng cây liên kết ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh
  - sửa lỗi hiển thị khi trường markdown bị rút gọn ở chế độ HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) bởi @katherinehhh
  - sửa lỗi kết quả tìm kiếm không đầy đủ trong bộ chọn xếp tầng ([#7990](https://github.com/nocobase/nocobase/pull/7990)) bởi @katherinehhh
  - Sửa lỗi trạng thái tab trang và tuyến đường không tương ứng ([#7991](https://github.com/nocobase/nocobase/pull/7991)) bởi @zhangzhonghe
  - sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh
- **[database]** Sửa: loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự thay đổi do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu
- **[Quy trình công việc]**

  - Sửa lỗi các thực thi đã chuẩn bị không được gửi đến hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher
  - Sửa lỗi một số menu tác vụ quy trình công việc không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher
  - Sửa lỗi liên kết tác vụ đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Cài đặt trường bộ lọc cho các bộ sưu tập nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock
- **[Hành động: Nhập bản ghi]** Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock
- **[Quy trình công việc: Nút thủ công]** Sửa lỗi số lượng tác vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher
  - Sửa lỗi bình luận trong kết quả công việc là null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher
