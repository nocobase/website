---
title: "Cập nhật hàng tuần｜Cập nhật lời nhắc người dùng AI chatbox"
description: "Đây là bản tóm tắt các cập nhật tính năng và cải tiến của NocoBase từ ngày 6 tháng 3 đến ngày 12 tháng 3 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*Ngày phát hành: 2026-03-12*

### 🐛 Sửa lỗi

- **[Trình quản lý Email]** Điều chỉnh người nhận trả lời và trả lời tất cả, sửa lỗi thêm trường bảng không thành công và các vấn đề khác bởi @jiannx
- **[Trình quản lý Di chuyển]** Sửa lỗi không thể chọn bảng hệ thống trong quy tắc tùy chỉnh bởi @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*Ngày phát hành: 2026-03-12*

### 🚀 Cải tiến

- **[Trình quản lý Di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trường tùy chỉnh trong giá trị Trường của biểu mẫu Bộ lọc không thể hiển thị đúng loại nhập giá trị ([#8823](https://github.com/nocobase/nocobase/pull/8823)) bởi @zhangzhonghe
  - Sửa lỗi nút thu gọn biểu mẫu bộ lọc v2 ngừng hoạt động sau khi sắp xếp các trường ([#8843](https://github.com/nocobase/nocobase/pull/8843)) bởi @zhangzhonghe
  - Sửa lỗi trang quản lý mẫu tham chiếu (v1) bị thiếu hành động lọc và làm mới. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) bởi @gchust
  - Dữ liệu sub form & sub table không hiển thị do kiểm tra quyền ([#8846](https://github.com/nocobase/nocobase/pull/8846)) bởi @chenos
- **[Kiểm soát truy cập]** Sử dụng collection.filterTargetKey thay vì Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) bởi @chenos
- **[Mẫu giao diện]**

  - Sửa lỗi hiển thị cho khối tham chiếu bảng hành động. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) bởi @gchust
  - Sửa lỗi không thể tải chính xác các bản ghi liên kết sau khi lưu khối chi tiết dưới dạng mẫu. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) bởi @gchust
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi người được chỉ định không tuân theo thứ tự đã cấu hình trong nút bởi @mytharcher
  - Sửa nhãn chưa được dịch trong chi tiết xử lý phê duyệt bởi @zhangzhonghe
- **[Trình quản lý Di chuyển]**

  - Sửa lỗi xây dựng bởi @mytharcher
  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock
  - Sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock
  - Điều chỉnh thư mục tạm thời vào storage, để hỗ trợ sử dụng trong chế độ cụm bởi @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*Ngày phát hành: 2026-03-10*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ nút kích hoạt luồng công việc để cấu hình luồng sau khi thành công ([#8726](https://github.com/nocobase/nocobase/pull/8726)) bởi @mytharcher

### 🚀 Cải tiến

- **[Luồng công việc]** Hiển thị tất cả các loại nút trong menu thêm ngay cả khi không khả dụng ([#8828](https://github.com/nocobase/nocobase/pull/8828)) bởi @mytharcher
- **[AI: Cơ sở tri thức]** Tái cấu trúc logic tải tài liệu cơ sở tri thức. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi khối chi tiết của bộ sưu tập SQL gặp lỗi khi tải dữ liệu. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) bởi @gchust
  - Sửa lỗi quy tắc liên kết trường trong khối chi tiết không có hiệu lực trong lần hiển thị ban đầu. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) bởi @gchust
- **[Trình xem trước tệp văn phòng]** Thay đổi chiều cao modal thành giá trị phù hợp để hiển thị nhiều nội dung tệp hơn ([#8835](https://github.com/nocobase/nocobase/pull/8835)) bởi @mytharcher
- **[Mẫu giao diện]** Sửa lỗi luồng sự kiện khối tham chiếu trong khối bảng không thể cấu hình luồng sự kiện nhấp chuột vào hàng. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) bởi @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*Ngày phát hành: 2026-03-09*

### 🚀 Cải tiến

- **[Bộ điều hợp khóa Redis]** Tái cấu trúc do API của LockManger đã thay đổi trong kho lưu trữ chính bởi @mytharcher
- **[Trình quản lý sao lưu]** Thêm khóa cho việc sao lưu theo lịch trình trên các nút cụm bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Các khối V2 hiện chỉ hiển thị các hành động được hỗ trợ bởi nguồn dữ liệu hiện tại ([#8803](https://github.com/nocobase/nocobase/pull/8803)) bởi @zhangzhonghe
  - Sửa lỗi kiểu dáng của nút quay lại trên các trang con v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) bởi @zhangzhonghe
- **[lock-manager]** Sửa lỗi điều kiện cạnh tranh của lock manager ([#8734](https://github.com/nocobase/nocobase/pull/8734)) bởi @mytharcher
- **[server]** Sửa lỗi trong truy vấn dữ liệu của các nguồn dữ liệu không phải cơ sở dữ liệu ([#8776](https://github.com/nocobase/nocobase/pull/8776)) bởi @cgyrock
- **[Kiểm soát truy cập]** Sửa lỗi sửa đổi dữ liệu nguồn dữ liệu API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) bởi @cgyrock
- **[Hành động: Xuất bản ghi]** Sửa lỗi trường belongsToArray bị trống trong excel đã xuất ([#8787](https://github.com/nocobase/nocobase/pull/8787)) bởi @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*Ngày phát hành: 2026-03-06*

### 🎉 Tính năng mới

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến đến trình kích hoạt hành động tùy chỉnh trong luồng con ([#8758](https://github.com/nocobase/nocobase/pull/8758)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hiển thị thông báo nhắc nhở khi không có dữ liệu cho khối Biểu mẫu chỉnh sửa hoặc khối Chi tiết. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) bởi @gchust
- **[flow-engine]** Sửa lỗi mã runjs mới sẽ phân tích các biểu thức biến trước khi thực thi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) bởi @gchust

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi điều hướng liên kết popup bị hoàn nguyên sau khi đóng view ([#8752](https://github.com/nocobase/nocobase/pull/8752)) bởi @zhangzhonghe
  - Vô hiệu hóa thêm khối cho các bản ghi liên kết nhiều-nhiều (mảng) để ngăn lỗi. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) bởi @gchust
  - Sửa lỗi khối dữ liệu gốc không làm mới sau khi chỉnh sửa dữ liệu trong popup trường liên kết. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) bởi @gchust
  - Sửa lỗi cắt tab và đảm bảo chiều rộng tab tối thiểu trong chế độ thiết kế ([#8771](https://github.com/nocobase/nocobase/pull/8771)) bởi @zhangzhonghe
  - Sửa lỗi xác thực cho các trường bắt buộc bị ẩn bởi liên kết trong chế độ cấu hình ([#8773](https://github.com/nocobase/nocobase/pull/8773)) bởi @zhangzhonghe
  - Sửa lỗi cập nhật giao diện chậm trễ cho nút ẩn/hiện cột subtable và xóa cột liên tiếp ([#8755](https://github.com/nocobase/nocobase/pull/8755)) bởi @zhangzhonghe
  - sửa lỗi hai xác thực bắt buộc xuất hiện trong biểu mẫu cập nhật bản ghi ([#8761](https://github.com/nocobase/nocobase/pull/8761)) bởi @jiannx
- **[database]**

  - Sửa lỗi thiếu tùy chọn 'Phân trang đơn giản' trong mẫu view của bộ sưu tập. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) bởi @cgyrock
  - Quy tắc xác thực độ chính xác cho trường số không có hiệu lực ([#8768](https://github.com/nocobase/nocobase/pull/8768)) bởi @2013xile
- **[undefined]** Sửa lỗi sau khi nâng cấp, hệ thống nhắc rằng không thể tìm thấy plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) bởi @gchust
- **[Hành động: Xuất bản ghi]** Sửa lỗi trường kiểu số trong tệp excel hiển thị dưới dạng chuỗi ([#8774](https://github.com/nocobase/nocobase/pull/8774)) bởi @cgyrock
- **[Khối: Danh sách]** Sửa lỗi trường khối danh sách không thể sử dụng biến bản ghi hiện tại. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) bởi @gchust
- **[Luồng công việc]** Sửa lỗi giữ chỗ kéo nút hiển thị không chính xác khi kéo khối trong nút phê duyệt ([#8763](https://github.com/nocobase/nocobase/pull/8763)) bởi @mytharcher
- **[Mẫu giao diện]**

  - Sửa lỗi sử dụng lại mẫu khối bản ghi hiện tại cho khối chi tiết và khối biểu mẫu chỉnh sửa có thể khiến dữ liệu không tải chính xác. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) bởi @gchust
  - Sửa lỗi các thay đổi đối với props được thực hiện trong luồng sự kiện của khối mẫu không có hiệu lực. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) bởi @gchust
- **[Nguồn dữ liệu: Chính]**

  - Cập nhật giá trị mặc định của trường JSON không có hiệu lực ([#8767](https://github.com/nocobase/nocobase/pull/8767)) bởi @2013xile
  - Lỗi đồng bộ hóa trường ([#8766](https://github.com/nocobase/nocobase/pull/8766)) bởi @2013xile
- **[AI employees]**

  - Sửa lỗi dashscope/deepseek/kimi không thể đọc tệp tài liệu đã tải lên. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) bởi @cgyrock
  - Sửa lỗi gọi công cụ khi sử dụng mô hình suy luận deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) bởi @cgyrock
- **[Đa không gian]** Sửa lỗi quyền không gian khi tạo dữ liệu với khóa chính bởi @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Ngày phát hành: 2026-03-12*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ nút kích hoạt luồng công việc để cấu hình luồng sau khi thành công ([#8726](https://github.com/nocobase/nocobase/pull/8726)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** field-code hỗ trợ 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) bởi @jiannx
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến đến trình kích hoạt hành động tùy chỉnh trong luồng con ([#8758](https://github.com/nocobase/nocobase/pull/8758)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hiển thị thông báo nhắc nhở khi không có dữ liệu cho khối Biểu mẫu chỉnh sửa hoặc khối Chi tiết. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) bởi @gchust
- **[flow-engine]** Sửa lỗi mã runjs mới sẽ phân tích các biểu thức biến trước khi thực thi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) bởi @gchust
- **[Luồng công việc]** Hiển thị tất cả các loại nút trong menu thêm ngay cả khi không khả dụng ([#8828](https://github.com/nocobase/nocobase/pull/8828)) bởi @mytharcher
- **[Hành động: Yêu cầu tùy chỉnh]** Truyền phát sự kiện hỗ trợ các yêu cầu tùy chỉnh ([#8749](https://github.com/nocobase/nocobase/pull/8749)) bởi @jiannx
- **[AI: Cơ sở tri thức]** Tái cấu trúc logic tải tài liệu cơ sở tri thức. bởi @cgyrock
- **[Bộ điều hợp khóa Redis]** Tái cấu trúc do API của LockManger đã thay đổi trong kho lưu trữ chính bởi @mytharcher
- **[Trình quản lý sao lưu]** Thêm khóa cho việc sao lưu theo lịch trình trên các nút cụm bởi @mytharcher
- **[Trình quản lý Di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Dữ liệu sub form & sub table không hiển thị do kiểm tra quyền ([#8846](https://github.com/nocobase/nocobase/pull/8846)) bởi @chenos
  - Sửa lỗi nút thu gọn biểu mẫu bộ lọc v2 ngừng hoạt động sau khi sắp xếp các trường ([#8843](https://github.com/nocobase/nocobase/pull/8843)) bởi @zhangzhonghe
  - Sửa lỗi trường tùy chỉnh trong giá trị Trường của biểu mẫu Bộ lọc không thể hiển thị đúng loại nhập giá trị ([#8823](https://github.com/nocobase/nocobase/pull/8823)) bởi @zhangzhonghe
  - Sửa lỗi trang quản lý mẫu tham chiếu (v1) bị thiếu hành động lọc và làm mới. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) bởi @gchust
  - Sửa lỗi khối chi tiết của bộ sưu tập SQL gặp lỗi khi tải dữ liệu. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) bởi @gchust
  - Sửa lỗi quy tắc liên kết trường trong khối chi tiết không có hiệu lực trong lần hiển thị ban đầu. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) bởi @gchust
  - Sửa lỗi kiểu dáng của nút quay lại trên các trang con v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) bởi @zhangzhonghe
  - Các khối V2 hiện chỉ hiển thị các hành động được hỗ trợ bởi nguồn dữ liệu hiện tại ([#8803](https://github.com/nocobase/nocobase/pull/8803)) bởi @zhangzhonghe
  - Sửa lỗi xác thực cho các trường bắt buộc bị ẩn bởi liên kết trong chế độ cấu hình ([#8773](https://github.com/nocobase/nocobase/pull/8773)) bởi @zhangzhonghe
  - Sửa lỗi cắt tab và đảm bảo chiều rộng tab tối thiểu trong chế độ thiết kế ([#8771](https://github.com/nocobase/nocobase/pull/8771)) bởi @zhangzhonghe
  - Sửa lỗi cập nhật giao diện chậm trễ cho nút ẩn/hiện cột subtable và xóa cột liên tiếp ([#8755](https://github.com/nocobase/nocobase/pull/8755)) bởi @zhangzhonghe
  - Vô hiệu hóa thêm khối cho các bản ghi liên kết nhiều-nhiều (mảng) để ngăn lỗi. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) bởi @gchust
  - Sửa lỗi điều hướng liên kết popup bị hoàn nguyên sau khi đóng view ([#8752](https://github.com/nocobase/nocobase/pull/8752)) bởi @zhangzhonghe
  - Sửa lỗi khối dữ liệu gốc không làm mới sau khi chỉnh sửa dữ liệu trong popup trường liên kết. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) bởi @gchust
  - sửa lỗi hai xác thực bắt buộc xuất hiện trong biểu mẫu cập nhật bản ghi ([#8761](https://github.com/nocobase/nocobase/pull/8761)) bởi @jiannx
- **[server]** Sửa lỗi trong truy vấn dữ liệu của các nguồn dữ liệu không phải cơ sở dữ liệu ([#8776](https://github.com/nocobase/nocobase/pull/8776)) bởi @cgyrock
- **[lock-manager]** Sửa lỗi điều kiện cạnh tranh của lock manager ([#8734](https://github.com/nocobase/nocobase/pull/8734)) bởi @mytharcher
- **[database]**

  - Sửa lỗi thiếu tùy chọn 'Phân trang đơn giản' trong mẫu view của bộ sưu tập. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) bởi @cgyrock
  - Quy tắc xác thực độ chính xác cho trường số không có hiệu lực ([#8768](https://github.com/nocobase/nocobase/pull/8768)) bởi @2013xile
- **[undefined]** Sửa lỗi sau khi nâng cấp, hệ thống nhắc rằng không thể tìm thấy plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) bởi @gchust
- **[Kiểm soát truy cập]**

  - Sử dụng collection.filterTargetKey thay vì Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) bởi @chenos
  - Sửa lỗi sửa đổi dữ liệu nguồn dữ liệu API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) bởi @cgyrock
- **[Mẫu giao diện]**

  - Sửa lỗi không thể tải chính xác các bản ghi liên kết sau khi lưu khối chi tiết dưới dạng mẫu. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) bởi @gchust
  - Sửa lỗi hiển thị cho khối tham chiếu bảng hành động. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) bởi @gchust
  - Sửa lỗi luồng sự kiện khối tham chiếu trong khối bảng không thể cấu hình luồng sự kiện nhấp chuột vào hàng. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) bởi @gchust
  - Sửa lỗi sử dụng lại mẫu khối bản ghi hiện tại cho khối chi tiết và khối biểu mẫu chỉnh sửa có thể khiến dữ liệu không tải chính xác. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) bởi @gchust
  - Sửa lỗi các thay đổi đối với props được thực hiện trong luồng sự kiện của khối mẫu không có hiệu lực. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) bởi @gchust
- **[Trình xem trước tệp văn phòng]** Thay đổi chiều cao modal thành giá trị phù hợp để hiển thị nhiều nội dung tệp hơn ([#8835](https://github.com/nocobase/nocobase/pull/8835)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]**

  - Sửa lỗi trường belongsToArray bị trống trong excel đã xuất ([#8787](https://github.com/nocobase/nocobase/pull/8787)) bởi @cgyrock
  - Sửa lỗi trường kiểu số trong tệp excel hiển thị dưới dạng chuỗi ([#8774](https://github.com/nocobase/nocobase/pull/8774)) bởi @cgyrock
- **[Khối: Danh sách]** Sửa lỗi trường khối danh sách không thể sử dụng biến bản ghi hiện tại. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) bởi @gchust
- **[Nguồn dữ liệu: Chính]**

  - Cập nhật giá trị mặc định của trường JSON không có hiệu lực ([#8767](https://github.com/nocobase/nocobase/pull/8767)) bởi @2013xile
  - Lỗi đồng bộ hóa trường ([#8766](https://github.com/nocobase/nocobase/pull/8766)) bởi @2013xile
- **[Luồng công việc]** Sửa lỗi giữ chỗ kéo nút hiển thị không chính xác khi kéo khối trong nút phê duyệt ([#8763](https://github.com/nocobase/nocobase/pull/8763)) bởi @mytharcher
- **[AI employees]**

  - Sửa lỗi gọi công cụ khi sử dụng mô hình suy luận deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) bởi @cgyrock
  - Sửa lỗi dashscope/deepseek/kimi không thể đọc tệp tài liệu đã tải lên. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) bởi @cgyrock
- **[Đa không gian]** Sửa lỗi quyền không gian khi tạo dữ liệu với khóa chính bởi @jiannx
- **[Luồng công việc: Phê duyệt]**

  - Sửa nhãn chưa được dịch trong chi tiết xử lý phê duyệt bởi @zhangzhonghe
  - Sửa lỗi người được chỉ định không tuân theo thứ tự đã cấu hình trong nút bởi @mytharcher
- **[Trình quản lý Di chuyển]**

  - Sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock
  - Sửa lỗi xây dựng bởi @mytharcher
  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock
  - Điều chỉnh thư mục tạm thời vào storage, để hỗ trợ sử dụng trong chế độ cụm bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Ngày phát hành: 2026-03-12*

### 🎉 Tính năng mới

- **[client]** Hỗ trợ nút kích hoạt luồng công việc để cấu hình luồng sau khi thành công ([#8726](https://github.com/nocobase/nocobase/pull/8726)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** field-code hỗ trợ 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) bởi @jiannx
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến đến trình kích hoạt hành động tùy chỉnh trong luồng con ([#8758](https://github.com/nocobase/nocobase/pull/8758)) bởi @mytharcher
- **[AI employees]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**

  - Hiển thị thông báo nhắc nhở khi không có dữ liệu cho khối Biểu mẫu chỉnh sửa hoặc khối Chi tiết. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) bởi @gchust
  - Tái cấu trúc cài đặt bố cục quản trị và ứng dụng để mô hình hóa kiến trúc máy chủ với các biện pháp tương thích v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) bởi @zhangzhonghe
  - hỗ trợ cấu hình tóm tắt cho bảng ([#8721](https://github.com/nocobase/nocobase/pull/8721)) bởi @chenos
- **[flow-engine]** Sửa lỗi mã runjs mới sẽ phân tích các biểu thức biến trước khi thực thi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) bởi @gchust
- **[Luồng công việc]** Hiển thị tất cả các loại nút trong menu thêm ngay cả khi không khả dụng ([#8828](https://github.com/nocobase/nocobase/pull/8828)) bởi @mytharcher
- **[Hành động: Yêu cầu tùy chỉnh]** Truyền phát sự kiện hỗ trợ các yêu cầu tùy chỉnh ([#8749](https://github.com/nocobase/nocobase/pull/8749)) bởi @jiannx
- **[AI employees]** Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang
- **[Nhúng NocoBase]** Cung cấp API sanitize để lọc các giá trị liên kết trong hành động ([#8688](https://github.com/nocobase/nocobase/pull/8688)) bởi @mytharcher
- **[AI: Cơ sở tri thức]** Tái cấu trúc logic tải tài liệu cơ sở tri thức. bởi @cgyrock
- **[Bộ điều hợp khóa Redis]** Tái cấu trúc do API của LockManger đã thay đổi trong kho lưu trữ chính bởi @mytharcher
- **[Trình quản lý sao lưu]** Thêm khóa cho việc sao lưu theo lịch trình trên các nút cụm bởi @mytharcher
- **[Trình quản lý Di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[undefined]** Sửa lỗi sau khi nâng cấp, hệ thống nhắc rằng không thể tìm thấy plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) bởi @gchust
- **[client]**

  - Dữ liệu sub form & sub table không hiển thị do kiểm tra quyền ([#8846](https://github.com/nocobase/nocobase/pull/8846)) bởi @chenos
  - Sửa lỗi nút thu gọn biểu mẫu bộ lọc v2 ngừng hoạt động sau khi sắp xếp các trường ([#8843](https://github.com/nocobase/nocobase/pull/8843)) bởi @zhangzhonghe
  - Sửa lỗi trường tùy chỉnh trong giá trị Trường của biểu mẫu Bộ lọc không thể hiển thị đúng loại nhập giá trị ([#8823](https://github.com/nocobase/nocobase/pull/8823)) bởi @zhangzhonghe
  - Sửa lỗi trang quản lý mẫu tham chiếu (v1) bị thiếu hành động lọc và làm mới. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) bởi @gchust
  - Sửa lỗi khối chi tiết của bộ sưu tập SQL gặp lỗi khi tải dữ liệu. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) bởi @gchust
  - Sửa lỗi quy tắc liên kết trường trong khối chi tiết không có hiệu lực trong lần hiển thị ban đầu. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) bởi @gchust
  - Các khối V2 hiện chỉ hiển thị các hành động được hỗ trợ bởi nguồn dữ liệu hiện tại ([#8803](https://github.com/nocobase/nocobase/pull/8803)) bởi @zhangzhonghe
  - Sửa lỗi kiểu dáng của nút quay lại trên các trang con v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) bởi @zhangzhonghe
  - Sửa lỗi điều hướng liên kết popup bị hoàn nguyên sau khi đóng view ([#8752](https://github.com/nocobase/nocobase/pull/8752)) bởi @zhangzhonghe
  - Sửa lỗi xác thực cho các trường bắt buộc bị ẩn bởi liên kết trong chế độ cấu hình ([#8773](https://github.com/nocobase/nocobase/pull/8773)) bởi @zhangzhonghe
  - Sửa lỗi cắt tab và đảm bảo chiều rộng tab tối thiểu trong chế độ thiết kế ([#8771](https://github.com/nocobase/nocobase/pull/8771)) bởi @zhangzhonghe
  - Sửa lỗi cập nhật giao diện chậm trễ cho nút ẩn/hiện cột subtable và xóa cột liên tiếp ([#8755](https://github.com/nocobase/nocobase/pull/8755)) bởi @zhangzhonghe
  - Sửa lỗi khối dữ liệu gốc không làm mới sau khi chỉnh sửa dữ liệu trong popup trường liên kết. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) bởi @gchust
  - Vô hiệu hóa thêm khối cho các bản ghi liên kết nhiều-nhiều (mảng) để ngăn lỗi. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) bởi @gchust
  - Sửa lỗi khối dữ liệu không làm mới khi chuyển đổi menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust
  - Sửa lỗi thành phần CollectionField không hiển thị trong thành phần DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher
  - sửa lỗi hai xác thực bắt buộc xuất hiện trong biểu mẫu cập nhật bản ghi ([#8761](https://github.com/nocobase/nocobase/pull/8761)) bởi @jiannx
- **[server]**

  - Sửa lỗi trong truy vấn dữ liệu của các nguồn dữ liệu không phải cơ sở dữ liệu ([#8776](https://github.com/nocobase/nocobase/pull/8776)) bởi @cgyrock
  - Giải quyết vấn đề bộ nhớ đệm bằng cách thêm hash vào assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos
- **[lock-manager]** Sửa lỗi điều kiện cạnh tranh của lock manager ([#8734](https://github.com/nocobase/nocobase/pull/8734)) bởi @mytharcher
- **[database]**

  - Sửa lỗi thiếu tùy chọn 'Phân trang đơn giản' trong mẫu view của bộ sưu tập. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) bởi @cgyrock
  - Quy tắc xác thực độ chính xác cho trường số không có hiệu lực ([#8768](https://github.com/nocobase/nocobase/pull/8768)) bởi @2013xile
  - Sửa lỗi kiểm tra tùy chỉnh thông thường của trường không thành công trong v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx
- **[flow-engine]** Sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng xác định. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust
- **[Kiểm soát truy cập]**

  - Sử dụng collection.filterTargetKey thay vì Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) bởi @chenos
  - Sửa lỗi sửa đổi dữ liệu nguồn dữ liệu API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) bởi @cgyrock
  - Phiên bản cơ sở dữ liệu được sử dụng khi đặt siêu dữ liệu ACL không chính xác ([#8747](https://github.com/nocobase/nocobase/pull/8747)) bởi @2013xile
- **[Mẫu giao diện]**

  - Sửa lỗi không thể tải chính xác các bản ghi liên kết sau khi lưu khối chi tiết dưới dạng mẫu. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) bởi @gchust
  - Sửa lỗi hiển thị cho khối tham chiếu bảng hành động. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) bởi @gchust
  - Sửa lỗi luồng sự kiện khối tham chiếu trong khối bảng không thể cấu hình luồng sự kiện nhấp chuột vào hàng. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) bởi @gchust
  - Sửa lỗi sử dụng lại mẫu khối bản ghi hiện tại cho khối chi tiết và khối biểu mẫu chỉnh sửa có thể khiến dữ liệu không tải chính xác. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) bởi @gchust
  - Sửa lỗi các thay đổi đối với props được thực hiện trong luồng sự kiện của khối mẫu không có hiệu lực. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) bởi @gchust
- **[Trình xem trước tệp văn phòng]** Thay đổi chiều cao modal thành giá trị phù hợp để hiển thị nhiều nội dung tệp hơn ([#8835](https://github.com/nocobase/nocobase/pull/8835)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]**

  - Sửa lỗi trường belongsToArray bị trống trong excel đã xuất ([#8787](https://github.com/nocobase/nocobase/pull/8787)) bởi @cgyrock
  - Sửa lỗi trường kiểu số trong tệp excel hiển thị dưới dạng chuỗi ([#8774](https://github.com/nocobase/nocobase/pull/8774)) bởi @cgyrock
- **[Luồng công việc]** Sửa lỗi giữ chỗ kéo nút hiển thị không chính xác khi kéo khối trong nút phê duyệt ([#8763](https://github.com/nocobase/nocobase/pull/8763)) bởi @mytharcher
- **[Khối: Danh sách]** Sửa lỗi trường khối danh sách không thể sử dụng biến bản ghi hiện tại. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) bởi @gchust
- **[Nguồn dữ liệu: Chính]**

  - Cập nhật giá trị mặc định của trường JSON không có hiệu lực ([#8767](https://github.com/nocobase/nocobase/pull/8767)) bởi @2013xile
  - Lỗi đồng bộ hóa trường ([#8766](https://github.com/nocobase/nocobase/pull/8766)) bởi @2013xile
- **[AI employees]**

  - Sửa lỗi dashscope/deepseek/kimi không thể đọc tệp tài liệu đã tải lên. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) bởi @cgyrock
  - Sửa lỗi gọi công cụ khi sử dụng mô hình suy luận deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) bởi @cgyrock
  - Sửa lỗi trò chuyện nhân viên AI trong khi cơ sở tri thức được bật ([#8746](https://github.com/nocobase/nocobase/pull/8746)) bởi @cgyrock
  - Sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock
  - Giải quyết vấn đề tin nhắn AI hiển thị với độ dài 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) bởi @heziqiang
- **[Flow engine]** sửa lỗi sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) bởi @chenos
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi luồng công việc hành động tùy chỉnh bị treo khi thực thi dưới dạng luồng con ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher
- **[Luồng công việc: JavaScript]** Sửa lỗi các trường hợp kiểm tra không thể vượt qua trên windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** sửa lỗi i18n cho văn bản mục nhập biểu đồ plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) bởi @heziqiang
- **[Đa không gian]** Sửa lỗi quyền không gian khi tạo dữ liệu với khóa chính bởi @jiannx
- **[In mẫu]** Sửa lỗi API ACL đã thay đổi nhưng không được điều chỉnh cho plugin bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi người được chỉ định không tuân theo thứ tự đã cấu hình trong nút bởi @mytharcher
  - Sửa lỗi kết quả truy vấn không hiển thị do các nút bị lọc theo loại bởi @mytharcher
  - Sửa lỗi tham số appends lọc theo ACL bởi @mytharcher
  - Sửa lỗi ACL khi giá trị liên kết không nên được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher
  - Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher
  - Sửa nhãn chưa được dịch trong chi tiết xử lý phê duyệt bởi @zhangzhonghe
  - Sửa lỗi ném ra do giá trị của `dataAfter` bị thiếu khi được thêm hoặc ủy quyền bởi @mytharcher
  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền bởi @mytharcher
  - Sửa lỗi ném ra khi thực thi luồng công việc phê duyệt thủ công bởi @mytharcher
  - Làm sạch các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền bởi @mytharcher
- **[Trình quản lý Email]** Sửa lỗi phân tích cú pháp định dạng ID nội dung hình ảnh bởi @jiannx
- **[Trình quản lý Di chuyển]**

  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock
  - Sửa lỗi xây dựng bởi @mytharcher
  - Điều chỉnh thư mục tạm thời vào storage, để hỗ trợ sử dụng trong chế độ cụm bởi @mytharcher
  - Sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong ngoại lệ lỗi di chuyển bởi @cgyrock
