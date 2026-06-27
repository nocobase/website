---
title: "NocoBase v1.9.0-beta.18: Tự động cập nhật trường tuần tự sau khi di chuyển dữ liệu"
description: "Ghi chú phát hành của v1.9.0-beta.18"
---

### 🎉 Tính năng mới

- **[Trường collection: Sequence]** Tự động cập nhật trường sequence sau khi di chuyển dữ liệu ([#8063](https://github.com/nocobase/nocobase/pull/8063)) bởi @cgyrock

- **[Nguồn dữ liệu: REST API]** Thêm tùy chọn `error message transformer` trong cấu hình nguồn dữ liệu restful api bởi @cgyrock

- **[Xác thực: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa được xác thực bởi @heziqiang

### 🚀 Cải tiến

- **[auth]** Sửa lỗi [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) bởi @2013xile

- **[client]**
  - Hiển thị các tùy chọn bị thu gọn khi di chuột trong thành phần Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh

  - Tối ưu hóa thông báo xác thực cho subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh

  - Thêm trạng thái tải cho nút hành động cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher

  - Sử dụng ba dấu ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh các biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** Cho phép chọn ID cho các trường nhập ([#8132](https://github.com/nocobase/nocobase/pull/8132)) bởi @katherinehhh

- **[Workflow]** Thêm ngữ cảnh nguồn dữ liệu "chính" cho UserSelect, để cung cấp một thành phần phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher

- **[Trường collection: Markdown(Vditor)]** Điều chỉnh độ rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh

- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể khi tác vụ thất bại bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn PK hoặc FK của collection người dùng mới có thể được chọn bởi @mytharcher

  - Sử dụng thành phần chung để giảm mã trùng lặp bởi @mytharcher

  - Làm cho payload của việc thực thi thủ công (hoặc kích hoạt bởi nút sub-flow) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher

  - Giảm các liên kết cần tải trong popup phê duyệt, để cung cấp hiệu suất tốt hơn bởi @mytharcher

- **[Nhật ký kiểm toán]** Cập nhật trường định danh duy nhất thành `text` để tránh tràn độ dài định danh khi chỉnh sửa hàng loạt bởi @2013xile

- **[Trình quản lý di chuyển]** Tự động cập nhật trường sequence sau khi di chuyển dữ liệu bởi @cgyrock

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi các workflow được kích hoạt không được thêm vào hàng đợi xử lý sau khi nhập dữ liệu, đảm bảo các workflow chạy như mong đợi ngay sau khi nhập ([#8121](https://github.com/nocobase/nocobase/pull/8121)) bởi @mytharcher

- **[acl]** Sửa lỗi thông tin meta ACL không chính xác khi phạm vi quyền của nguồn dữ liệu bên ngoài sử dụng các biến liên quan đến người dùng hiện tại ([#8013](https://github.com/nocobase/nocobase/pull/8013)) bởi @2013xile

- **[client]**
  - Sửa lỗi tải chậm trong Variable.Input, gây ra hiển thị lại menu tùy chọn biến không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher

  - Khắc phục lỗi khi thêm bản ghi con trong khối bảng cây liên kết ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh

  - Sửa lỗi nhấp nháy của hộp chọn thả xuống quy tắc liên kết ([#8018](https://github.com/nocobase/nocobase/pull/8018)) bởi @zhangzhonghe

  - Tránh lỗi xảy ra khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher

  - Sửa lỗi định tuyến khi sử dụng Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) bởi @zhangzhonghe

  - Sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh

- **[database]** Sửa lỗi: Loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự thay đổi do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu

- **[Hành động: Nhập bản ghi]**
  - Các trường được nhập không khớp với các trường được đặt trong cài đặt ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile

  - Sửa lỗi xảy ra khi trường trong tệp xlsx nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher

  - Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock

- **[Workflow]**
  - Sửa lỗi trang thực thi báo lỗi khi các công việc trên nút không được xác định ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher

  - Sửa lỗi xảy ra trong canvas thực thi khi nút bị xóa ([#8090](https://github.com/nocobase/nocobase/pull/8090)) bởi @mytharcher

  - Sửa lỗi hàng đợi đóng trước khi xuất bản tin nhắn ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher

  - Sửa lỗi các thực thi đã chuẩn bị không được gửi đến hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher

  - Sửa lỗi một số menu tác vụ workflow không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher

  - Sửa lỗi liên kết tác vụ đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher

  - Sửa lỗi số lượng tác vụ không hiển thị do nhà cung cấp sử dụng sai ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher

- **[Trình quản lý đa ứng dụng]** Cài đặt mức log không được áp dụng cho các ứng dụng con ([#8045](https://github.com/nocobase/nocobase/pull/8045)) bởi @2013xile

- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền đối với các thao tác liên kết cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile

- **[Trường collection: Nhiều-nhiều (mảng)]** Sửa lỗi trường m2m mảng trong subtable không thể cập nhật ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock

- **[Trình chỉnh sửa chủ đề]** Bật trình chuyển đổi chủ đề trên thiết bị di động ([#8046](https://github.com/nocobase/nocobase/pull/8046)) bởi @zhangzhonghe

- **[Trực quan hóa dữ liệu]**
  - Cài đặt trường bộ lọc cho các collection nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile

  - Khắc phục sự cố truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile

- **[Collection: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile

- **[Workflow: Nút thủ công]** Sửa lỗi số lượng tác vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho collection `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock

- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa các trường liên kết của phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang

- **[Workflow: Subflow]** Sửa lỗi workflow được chọn hiển thị "N/A" khi số lượng workflow lớn hơn 200 bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa tệp ngôn ngữ bởi @mytharcher

  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả công việc ở nhánh trả về bởi @mytharcher

  - Sửa lỗi không có dữ liệu khi tải các phê duyệt liên quan với các biến phạm vi ACL bởi @mytharcher

  - Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher

  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher

  - Thêm di chuyển để tránh lỗi bản ghi trùng lặp khi thêm chỉ mục bởi @mytharcher

  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher

  - Sửa lỗi bình luận trong kết quả công việc là null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher

  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher

  - Sửa lỗi lỗi quyền xảy ra khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher

  - Sửa lỗi cửa sổ bật lên người phê duyệt không hiển thị tiêu đề bởi @zhangzhonghe

  - Sửa lỗi xảy ra khi tải phê duyệt liên quan trong chế độ chỉ vai trò union bởi @mytharcher

  - Sửa lỗi khi liệt kê phê duyệt xảy ra OOM bởi @mytharcher
