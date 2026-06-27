---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề và hỗ trợ thiết lập quy tắc sắp xếp mặc định trong khối chi tiết, cùng nhiều tính năng khác."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần. Các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có các vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/en/blog/v1.9.24)

*Ngày phát hành: 2025-12-09*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi `RemoteSelect` component tải bản ghi không chính xác khi giá trị là null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) bởi @mytharcher
- **[Trường Collection: Sequence]** Cải thiện độ mạnh mẽ của plugin-field-sequence khi xử lý lệnh sửa chữa ([#8139](https://github.com/nocobase/nocobase/pull/8139)) bởi @cgyrock
- **[Thông báo: Email]** sửa giới hạn kết nối thông báo email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) bởi @jiannx

### [v1.9.23](https://www.nocobase.com/en/blog/v1.9.23)

*Ngày phát hành: 2025-12-09*

### 🚀 Cải tiến

- **[auth]** Sửa [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) bởi @2013xile
- **[Thao tác: Nhập bản ghi]** cho phép chọn ID cho các trường nhập ([#8132](https://github.com/nocobase/nocobase/pull/8132)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi các luồng công việc được kích hoạt không được thêm vào hàng đợi xử lý sau khi nhập dữ liệu, đảm bảo các luồng công việc chạy như mong đợi ngay sau khi nhập ([#8121](https://github.com/nocobase/nocobase/pull/8121)) bởi @mytharcher

### [v1.9.21](https://www.nocobase.com/en/blog/v1.9.21)

*Ngày phát hành: 2025-12-07*

### 🚀 Cải tiến

- **[Nhật ký kiểm toán]** Cập nhật trường định danh duy nhất thành `text` để ngăn tràn độ dài định danh trong quá trình chỉnh sửa hàng loạt bởi @2013xile

### 🐛 Sửa lỗi

- **[Luồng công việc: Phê duyệt]** Sửa lỗi không có dữ liệu khi tải các phê duyệt liên quan với biến phạm vi ACL bởi @mytharcher

### [v1.9.20](https://www.nocobase.com/en/blog/v1.9.20)

*Ngày phát hành: 2025-12-05*

### 🎉 Tính năng mới

- **[Trường Collection: Sequence]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu ([#8063](https://github.com/nocobase/nocobase/pull/8063)) bởi @cgyrock

### 🚀 Cải tiến

- **[Trình quản lý di chuyển]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu bởi @cgyrock

### 🐛 Sửa lỗi

- **[Luồng công việc]** Sửa lỗi xảy ra trong canvas thực thi khi node bị xóa ([#8090](https://github.com/nocobase/nocobase/pull/8090)) bởi @mytharcher
- **[Luồng công việc: Phê duyệt]** Sửa lỗi xảy ra khi tải phê duyệt liên quan trong chế độ chỉ vai trò union bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/en/blog/v1.9.0-beta.18)

*Ngày phát hành: 2025-12-09*

### 🎉 Tính năng mới

- **[Trường Collection: Sequence]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu ([#8063](https://github.com/nocobase/nocobase/pull/8063)) bởi @cgyrock
- **[Nguồn dữ liệu: REST API]** thêm tùy chọn `error message transformer` trong cấu hình nguồn dữ liệu restful api bởi @cgyrock
- **[Auth: OIDC]** Hỗ trợ tự động chuyển hướng đến URL SSO khi chưa được xác thực bởi @heziqiang

### 🚀 Cải tiến

- **[auth]** Sửa [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) bởi @2013xile
- **[client]**

  - hiển thị các tùy chọn bị thu gọn khi di chuột trong component Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh
  - tối ưu hóa thông báo xác thực cho subtable ([#8001](https://github.com/nocobase/nocobase/pull/8001)) bởi @katherinehhh
  - Thêm trạng thái tải cho nút hành động cập nhật bản ghi và xóa bản ghi, tránh các yêu cầu trùng lặp ([#7964](https://github.com/nocobase/nocobase/pull/7964)) bởi @mytharcher
  - Sử dụng ba ngoặc nhọn (`{{{` và `}}}`) cho các biến trong nội dung tin nhắn, để tránh các biến bị thoát bởi Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) bởi @mytharcher
- **[Thao tác: Nhập bản ghi]** cho phép chọn ID cho các trường nhập ([#8132](https://github.com/nocobase/nocobase/pull/8132)) bởi @katherinehhh
- **[Luồng công việc]** Thêm ngữ cảnh nguồn dữ liệu "main" cho UserSelect, để cung cấp một component phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher
- **[Trường Collection: Markdown(Vditor)]** điều chỉnh chiều rộng nội dung toàn màn hình của vditor ([#7974](https://github.com/nocobase/nocobase/pull/7974)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể về lỗi tác vụ ([#7796](https://github.com/nocobase/nocobase/pull/7796)) bởi @mytharcher
- **[Thao tác: Nhập bản ghi Pro]** Cải thiện thông báo lỗi cho các tác vụ bất đồng bộ để cung cấp cho người dùng lý do cụ thể về lỗi tác vụ bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi chọn biến trong AssigneeSelect, chỉ giới hạn PK hoặc FK của collection người dùng có thể được chọn bởi @mytharcher
  - Sử dụng component chung để giảm mã trùng lặp bởi @mytharcher
  - Làm cho payload của việc thực thi thủ công (hoặc kích hoạt bởi node sub-flow) tương thích với bản ghi hoặc khóa chính. Tránh vấn đề nhất quán trong ngữ cảnh kích hoạt. bởi @mytharcher
  - Giảm các association cần tải trong popup phê duyệt, để cung cấp hiệu suất tốt hơn bởi @mytharcher
- **[Nhật ký kiểm toán]** Cập nhật trường định danh duy nhất thành `text` để ngăn tràn độ dài định danh trong quá trình chỉnh sửa hàng loạt bởi @2013xile
- **[Trình quản lý di chuyển]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu bởi @cgyrock

### 🐛 Sửa lỗi

- **[server]** Sửa lỗi các luồng công việc được kích hoạt không được thêm vào hàng đợi xử lý sau khi nhập dữ liệu, đảm bảo các luồng công việc chạy như mong đợi ngay sau khi nhập ([#8121](https://github.com/nocobase/nocobase/pull/8121)) bởi @mytharcher
- **[acl]** Sửa lỗi thông tin meta ACL không chính xác khi phạm vi quyền của nguồn dữ liệu bên ngoài sử dụng các biến liên quan đến người dùng hiện tại ([#8013](https://github.com/nocobase/nocobase/pull/8013)) bởi @2013xile
- **[client]**

  - Sửa lỗi tải chậm trong Variable.Input, có thể khiến menu tùy chọn biến hiển thị lại không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher
  - giải quyết lỗi khi thêm bản ghi con trong khối bảng cây association ([#7989](https://github.com/nocobase/nocobase/pull/7989)) bởi @katherinehhh
  - Sửa lỗi nhấp nháy của hộp chọn thả xuống quy tắc liên kết ([#8018](https://github.com/nocobase/nocobase/pull/8018)) bởi @zhangzhonghe
  - Tránh lỗi xảy ra khi mở cài đặt giá trị mặc định ([#7997](https://github.com/nocobase/nocobase/pull/7997)) bởi @mytharcher
  - Sửa lỗi định tuyến khi sử dụng Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) bởi @zhangzhonghe
  - sửa lỗi remote select không hiển thị nhãn chính xác cho giá trị không phải đối tượng ([#7975](https://github.com/nocobase/nocobase/pull/7975)) bởi @katherinehhh
- **[database]** Sửa: loại bỏ xử lý UTC trong chuyển đổi thời gian cho các trường chỉ có thời gian để ngăn chặn sự thay đổi do múi giờ. ([#7812](https://github.com/nocobase/nocobase/pull/7812)) bởi @ChimingLiu
- **[Thao tác: Nhập bản ghi]**

  - Các trường được nhập không khớp với các trường được đặt trong cài đặt ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile
  - Sửa lỗi xảy ra khi trường trong tệp xlsx nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher
  - Sửa lỗi khi nhập dữ liệu trong bảng cây ([#7976](https://github.com/nocobase/nocobase/pull/7976)) bởi @cgyrock
- **[Luồng công việc]**

  - Sửa lỗi trang thực thi báo lỗi khi jobs trên node không được xác định ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher
  - Sửa lỗi xảy ra trong canvas thực thi khi node bị xóa ([#8090](https://github.com/nocobase/nocobase/pull/8090)) bởi @mytharcher
  - Sửa lỗi hàng đợi đóng trước khi xuất bản tin nhắn ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher
  - Sửa lỗi các thực thi đã chuẩn bị không được gửi đến hàng đợi trước khi dừng ([#7981](https://github.com/nocobase/nocobase/pull/7981)) bởi @mytharcher
  - Sửa lỗi một số menu tác vụ luồng công việc không hiển thị ([#7980](https://github.com/nocobase/nocobase/pull/7980)) bởi @mytharcher
  - Sửa lỗi liên kết tác vụ đến trang lỗi ([#7983](https://github.com/nocobase/nocobase/pull/7983)) bởi @mytharcher
  - Sửa lỗi số lượng tác vụ không hiển thị do nhà cung cấp sử dụng sai ([#7968](https://github.com/nocobase/nocobase/pull/7968)) bởi @mytharcher
- **[Trình quản lý đa ứng dụng]** Cài đặt mức log không được áp dụng cho các ứng dụng con ([#8045](https://github.com/nocobase/nocobase/pull/8045)) bởi @2013xile
- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền trên các thao tác association cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile
- **[Trường Collection: Many to many (array)]** Sửa lỗi trường mảng m2m trong subtable không thể được cập nhật ([#7998](https://github.com/nocobase/nocobase/pull/7998)) bởi @cgyrock
- **[Trình chỉnh sửa chủ đề]** Bật trình chuyển đổi chủ đề trên thiết bị di động ([#8046](https://github.com/nocobase/nocobase/pull/8046)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]**

  - Cài đặt trường bộ lọc cho các collection nguồn dữ liệu bên ngoài không hiển thị các thuộc tính cụ thể ([#7982](https://github.com/nocobase/nocobase/pull/7982)) bởi @2013xile
  - Giải quyết vấn đề truy vấn biểu đồ không hỗ trợ phạm vi dữ liệu ACL ([#7915](https://github.com/nocobase/nocobase/pull/7915)) bởi @2013xile
- **[Collection: Cây]** Sửa lỗi cập nhật bảng đường dẫn thất bại do tra cứu trường cha của cây không chính xác ([#8000](https://github.com/nocobase/nocobase/pull/8000)) bởi @2013xile
- **[Luồng công việc: Node thủ công]** Sửa lỗi số lượng tác vụ thủ công không chính xác ([#7984](https://github.com/nocobase/nocobase/pull/7984)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Thêm quy tắc di chuyển cho collection `asyncTasks`, tránh các bản ghi tác vụ bất đồng bộ bị di chuyển ([#7950](https://github.com/nocobase/nocobase/pull/7950)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi cập nhật mật khẩu nguồn dữ liệu thất bại khi mật khẩu cơ sở dữ liệu được thay đổi ([#7977](https://github.com/nocobase/nocobase/pull/7977)) bởi @cgyrock
- **[Phòng ban]** Sửa lỗi không thể chỉnh sửa các trường liên kết của phòng ban ([#7462](https://github.com/nocobase/nocobase/pull/7462)) bởi @heziqiang
- **[Luồng công việc: Subflow]** Sửa lỗi luồng công việc được chọn hiển thị "N/A" khi số lượng luồng công việc lớn hơn 200 bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Sửa tệp ngôn ngữ bởi @mytharcher
  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả công việc trong nhánh trả về bởi @mytharcher
  - Sửa lỗi không có dữ liệu khi tải các phê duyệt liên quan với biến phạm vi ACL bởi @mytharcher
  - Sửa lỗi quyền khi lấy `approvalRecords.reassignee` do `RemoteSelect` thay đổi bởi @mytharcher
  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher
  - Thêm di chuyển để tránh lỗi bản ghi trùng lặp khi thêm chỉ mục bởi @mytharcher
  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher
  - Sửa lỗi bình luận trong kết quả công việc là null sau khi người dùng gửi phê duyệt kèm bình luận bởi @mytharcher
  - Sửa lỗi không có dữ liệu người nộp đơn trong ngữ cảnh thực thi sau khi người dùng gửi lại bởi @mytharcher
  - Sửa lỗi quyền xảy ra khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher
  - Sửa lỗi cửa sổ bật lên của người phê duyệt không hiển thị tiêu đề bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi tải phê duyệt liên quan trong chế độ chỉ vai trò union bởi @mytharcher
  - Sửa lỗi khi liệt kê phê duyệt xảy ra OOM bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/en/blog/v2.0.0-alpha.52)

*Ngày phát hành: 2025-12-07*

### 🎉 Tính năng mới

- **[client]** thêm hỗ trợ cho cài đặt thêm/chọn/loại bỏ liên kết trong subform nhiều-một ([#8099](https://github.com/nocobase/nocobase/pull/8099)) bởi @katherinehhh
- **[Nguồn dữ liệu: REST API]** thêm tùy chọn `error message transformer` trong cấu hình nguồn dữ liệu restful api bởi @cgyrock

### 🚀 Cải tiến

- **[auth]** Sửa [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) bởi @2013xile
- **[Thao tác: Nhập bản ghi]**

  - cho phép chọn ID cho các trường nhập ([#8133](https://github.com/nocobase/nocobase/pull/8133)) bởi @katherinehhh
  - cho phép chọn ID cho các trường nhập ([#8132](https://github.com/nocobase/nocobase/pull/8132)) bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]** Thay đổi API để lấy một mục phê duyệt duy nhất và đơn giản hóa mã bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi trạng thái vô hiệu hóa của con không chặn việc chọn trường quan hệ ([#8131](https://github.com/nocobase/nocobase/pull/8131)) bởi @katherinehhh
  - Sửa lỗi `RemoteSelect` component tải bản ghi không chính xác khi giá trị là null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) bởi @mytharcher
  - Sửa lỗi chiều rộng component UI không nhất quán khi chọn "Quá khứ" hoặc "Tiếp theo" cho các trường bộ lọc ngày. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) bởi @gchust
  - Sửa lỗi nhãn trường mặc định trong khối biểu mẫu bộ lọc không thể được dịch chính xác sang nhiều ngôn ngữ. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) bởi @gchust
  - Sửa lỗi kiểu tiêu đề và mô tả của khối JS không nhất quán với các khối khác. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) bởi @gchust
  - sửa lỗi subtable lồng nhau trong subform không hiển thị dữ liệu ([#8117](https://github.com/nocobase/nocobase/pull/8117)) bởi @katherinehhh
  - sửa lỗi ngắt dòng tooltip trường văn bản dài ([#8122](https://github.com/nocobase/nocobase/pull/8122)) bởi @katherinehhh
  - Sửa lỗi dữ liệu có thể chọn cho các trường association trong khối biểu mẫu bộ lọc không chính xác. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) bởi @gchust
  - Sửa lỗi các tùy chọn có thể chọn không được liệt kê đầy đủ khi sử dụng toán tử "is any of" hoặc "is none of" để lọc trường dựa trên tùy chọn. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) bởi @gchust
  - Sửa lỗi cấu hình trường tùy chỉnh trong biểu mẫu bộ lọc không được điền sẵn chính xác và một số cài đặt không có hiệu lực. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) bởi @gchust
  - Sửa lỗi xóa giá trị bộ lọc thời gian between và kích hoạt lại bộ lọc gây ra lỗi. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) bởi @gchust
  - Sửa lỗi giá trị trường số không được điền sẵn chính xác trong hành động bộ lọc. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) bởi @gchust
  - Sửa lỗi một số toán tử trường trong biểu mẫu bộ lọc không lọc dữ liệu chính xác. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) bởi @gchust
  - Sửa lỗi lọc trên các trường Checkbox không có hiệu lực. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) bởi @gchust
- **[flow-engine]**

  - sửa: chuyển đổi không chính xác khi sử dụng kiểu số nguyên làm tùy chọn enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) bởi @chenos
  - Sửa lỗi các mục menu sub-model có thể bật/tắt không hoạt động khi `useModel` bị bỏ qua bằng cách suy luận nó từ `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) bởi @zhangzhonghe
- **[server]** Sửa lỗi các luồng công việc được kích hoạt không được thêm vào hàng đợi xử lý sau khi nhập dữ liệu, đảm bảo các luồng công việc chạy như mong đợi ngay sau khi nhập ([#8121](https://github.com/nocobase/nocobase/pull/8121)) bởi @mytharcher
- **[Thông báo: Email]** sửa giới hạn kết nối thông báo email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) bởi @jiannx
- **[Trường Collection: Công thức]** Sửa lỗi các trường công thức trong hành động bộ lọc và khối biểu mẫu bộ lọc không thể nhập giá trị. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) bởi @gchust
- **[Đa không gian]** Sửa lỗi tạo các trường khác trong collection hệ thống bởi @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/en/blog/v2.0.0-alpha.51)

*Ngày phát hành: 2025-12-07*

### 🎉 Tính năng mới

- **[client]**

  - Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề ([#7960](https://github.com/nocobase/nocobase/pull/7960)) bởi @ljmiaoo
  - Hỗ trợ đặt quy tắc sắp xếp mặc định trong khối chi tiết ([#8070](https://github.com/nocobase/nocobase/pull/8070)) bởi @katherinehhh
  - Hỗ trợ đặt kiểu dữ liệu cho trường Số (tùy chọn: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) bởi @chenos
- **[Trường Collection: Sequence]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu ([#8063](https://github.com/nocobase/nocobase/pull/8063)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**

  - sửa lỗi nhảy phân trang subtable sau khi xóa hàng và thêm hỗ trợ cho các quy tắc xác thực cột ([#8094](https://github.com/nocobase/nocobase/pull/8094)) bởi @katherinehhh
  - điều chỉnh hiển thị trường lớn trong subtable có thể chỉnh sửa ([#8078](https://github.com/nocobase/nocobase/pull/8078)) bởi @katherinehhh
  - hỗ trợ dấu ba chấm cho nội dung trường JSON bị tràn ([#8067](https://github.com/nocobase/nocobase/pull/8067)) bởi @katherinehhh
- **[flow-engine]**

  - Thêm tùy chọn useCache vào FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) bởi @zhangzhonghe
  - Thêm phương thức `removeModelWithSubModels` để xóa đệ quy model và các sub-model của nó ([#8064](https://github.com/nocobase/nocobase/pull/8064)) bởi @zhangzhonghe
- **[Khối: GridCard]** thêm cấu hình số hàng cho grid card và thay thế pageSize bằng tính toán tự động ([#8055](https://github.com/nocobase/nocobase/pull/8055)) bởi @katherinehhh
- **[Nhật ký kiểm toán]** Cập nhật trường định danh duy nhất thành `text` để ngăn tràn độ dài định danh trong quá trình chỉnh sửa hàng loạt bởi @2013xile
- **[Trình quản lý di chuyển]** Tự động cập nhật các trường sequence sau khi di chuyển dữ liệu bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các trường đã cấu hình từ một khối đã bị xóa không bị xóa khỏi khối bộ lọc. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) bởi @gchust
  - sửa lỗi khoảng trống thừa khi nút bị ẩn trong chế độ không cấu hình ([#8092](https://github.com/nocobase/nocobase/pull/8092)) bởi @katherinehhh
  - Sửa lỗi văn bản nút đặt lại trong khối biểu mẫu bộ lọc không thể sửa đổi. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) bởi @gchust
  - Sửa lỗi đầu vào trường không hỗ trợ nhiều giá trị khi sử dụng toán tử \$in / \$notIn để lọc trường. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) bởi @gchust
  - Sửa lỗi các khối dữ liệu mới được thêm không tự động xuất hiện trong menu trường của khối biểu mẫu bộ lọc. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) bởi @gchust
  - Menu cấu hình cho các trường association trong biểu mẫu bộ lọc không nên hiển thị tùy chọn tạo nhanh. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) bởi @gchust
  - sửa lỗi dữ liệu subtable association trong khối Danh sách ([#8082](https://github.com/nocobase/nocobase/pull/8082)) bởi @katherinehhh
  - sửa lỗi quy tắc xác thực trường số từ cài đặt collection không được áp dụng ([#8025](https://github.com/nocobase/nocobase/pull/8025)) bởi @katherinehhh
  - Sửa lỗi các trường trong biểu mẫu bộ lọc bị giới hạn bởi các quy tắc xác thực backend cho các trường. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) bởi @gchust
  - vấn đề chỉnh sửa nhanh trường json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) bởi @katherinehhh
  - sửa lỗi hiển thị trường lớn trong chỉnh sửa subtable ([#8069](https://github.com/nocobase/nocobase/pull/8069)) bởi @katherinehhh
  - sửa lỗi tạo nhanh báo lỗi khi allowMultiple bị tắt trong lựa chọn bản ghi association ([#8034](https://github.com/nocobase/nocobase/pull/8034)) bởi @katherinehhh
  - sửa lỗi trường json nên được gửi dưới dạng một đối tượng ([#8057](https://github.com/nocobase/nocobase/pull/8057)) bởi @katherinehhh
  - Sửa lỗi không thể sử dụng phím enter để kích hoạt hành động bộ lọc. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) bởi @gchust
- **[flow-engine]**

  - Sửa lỗi các tùy chọn cấu hình từ component trước đó vẫn hiển thị trong menu sau khi chuyển đổi component trường. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) bởi @gchust
  - Di chuyển useEffect trước khi trả về có điều kiện trong FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) bởi @zhangzhonghe
  - Sửa lỗi các trường association không được hỗ trợ xuất hiện trong các trường thao tác bộ lọc. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) bởi @gchust
- **[acl]** sửa: acl.allow được thực thi quá sớm ([#8065](https://github.com/nocobase/nocobase/pull/8065)) bởi @chenos
- **[Trình quản lý tệp]**

  - Sửa lỗi hiển thị dữ liệu chi tiết con không chính xác trong khối Danh sách và Grid Card ([#8087](https://github.com/nocobase/nocobase/pull/8087)) bởi @katherinehhh
  - Sửa lỗi trường đính kèm không hiển thị chính xác trong readPretty subtable ([#8073](https://github.com/nocobase/nocobase/pull/8073)) bởi @katherinehhh
- **[Luồng công việc]**

  - Sửa lỗi xảy ra trong canvas thực thi khi node bị xóa ([#8090](https://github.com/nocobase/nocobase/pull/8090)) bởi @mytharcher
  - Sửa lỗi trang thực thi báo lỗi khi jobs trên node không được xác định ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher
- **[Trường Collection: Công thức]** Sửa lỗi các trường công thức không thể được thêm vào khối biểu mẫu bộ lọc. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) bởi @gchust
- **[Khối: Bảng hành động]** tối ưu hóa kiểu trong bố cục Danh sách của khối bảng hành động ([#8084](https://github.com/nocobase/nocobase/pull/8084)) bởi @katherinehhh
- **[Nhân viên AI]**

  - Giải quyết vấn đề tên vai trò nguồn dữ liệu không được biên dịch ([#8076](https://github.com/nocobase/nocobase/pull/8076)) bởi @heziqiang
  - Sửa lỗi một số trường bản ghi hiện tại không thể hiển thị trong component chọn biến. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) bởi @gchust
- **[Thao tác: Nhập bản ghi]** Các trường được nhập không khớp với các trường được đặt trong cài đặt ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile
- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền trên các thao tác association cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi không có dữ liệu khi tải các phê duyệt liên quan với biến phạm vi ACL bởi @mytharcher
  - Sửa lỗi dữ liệu đã điền biến mất trong biểu mẫu của người được chỉ định bởi @mytharcher
  - Sửa lỗi quyền xảy ra khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher
  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher
  - Sửa lỗi khi liệt kê phê duyệt xảy ra OOM bởi @mytharcher
  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả công việc trong nhánh trả về bởi @mytharcher
  - Sửa lỗi cửa sổ bật lên của người phê duyệt không hiển thị tiêu đề bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi tải phê duyệt liên quan trong chế độ chỉ vai trò union bởi @mytharcher
- **[Trình quản lý email]**

  - Xử lý dữ liệu bất thường bởi @jiannx
  - không đồng bộ trạng thái đã lên lịch của gmail bởi @jiannx
