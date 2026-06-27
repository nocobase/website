---
title: "NocoBase v2.1.0-alpha.8: Cập nhật lời nhắc người dùng hộp thoại AI"
description: "Ghi chú phát hành v2.1.0-alpha.8"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình nút kích hoạt workflow sau khi thực hiện thành công ([#8726](https://github.com/nocobase/nocobase/pull/8726)) bởi @mytharcher

- **[Trường collection: Mã]** Trường mã hỗ trợ phiên bản 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) bởi @jiannx

- **[Workflow: Sự kiện hành động tùy chỉnh]** Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến cho trình kích hoạt hành động tùy chỉnh trong luồng con ([#8758](https://github.com/nocobase/nocobase/pull/8758)) bởi @mytharcher

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng của hộp thoại AI ([#8725](https://github.com/nocobase/nocobase/pull/8725)) bởi @heziqiang

### 🚀 Cải tiến

- **[client]**
  - Hiển thị thông báo nhắc khi không có dữ liệu cho khối Biểu mẫu chỉnh sửa hoặc khối Chi tiết. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) bởi @gchust

  - Tái cấu trúc cài đặt bố cục quản trị và ứng dụng để mô hình hóa kiến trúc máy chủ với các biện pháp bảo vệ tương thích v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) bởi @zhangzhonghe

  - hỗ trợ cấu hình tổng kết cho bảng ([#8721](https://github.com/nocobase/nocobase/pull/8721)) bởi @chenos

- **[flow-engine]** Đã sửa lỗi mã runjs mới phân tích các biểu thức biến trước khi thực thi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) bởi @gchust

- **[Workflow]** Hiển thị tất cả các loại nút trong menu thêm ngay cả khi không khả dụng ([#8828](https://github.com/nocobase/nocobase/pull/8828)) bởi @mytharcher

- **[Hành động: Yêu cầu tùy chỉnh]** Truyền phát sự kiện hỗ trợ các yêu cầu tùy chỉnh ([#8749](https://github.com/nocobase/nocobase/pull/8749)) bởi @jiannx

- **[Nhân viên AI]** Cập nhật lời nhắc người dùng của hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang

- **[Nhúng NocoBase]** Cung cấp API sanitize để lọc các giá trị liên kết trong hành động ([#8688](https://github.com/nocobase/nocobase/pull/8688)) bởi @mytharcher

- **[AI: Cơ sở tri thức]** Đã tái cấu trúc logic tải tài liệu của cơ sở tri thức. bởi @cgyrock

- **[Bộ điều hợp khóa Redis]** Tái cấu trúc do API của LockManger đã thay đổi trong kho lưu trữ chính bởi @mytharcher

- **[Trình quản lý sao lưu]** Thêm khóa cho việc sao lưu theo lịch trình trên các nút cụm bởi @mytharcher

- **[Trình quản lý di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và khả năng hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[undefined]** Đã sửa lỗi sau khi nâng cấp, hệ thống báo không tìm thấy plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) bởi @gchust

- **[client]**
  - Dữ liệu biểu mẫu con & bảng con không hiển thị do kiểm tra quyền ([#8846](https://github.com/nocobase/nocobase/pull/8846)) bởi @chenos

  - Sửa lỗi nút thu gọn biểu mẫu lọc v2 ngừng hoạt động sau khi sắp xếp các trường ([#8843](https://github.com/nocobase/nocobase/pull/8843)) bởi @zhangzhonghe

  - Sửa lỗi các trường tùy chỉnh trong giá trị trường của Biểu mẫu lọc không thể hiển thị đúng loại nhập giá trị ([#8823](https://github.com/nocobase/nocobase/pull/8823)) bởi @zhangzhonghe

  - Đã sửa lỗi trang quản lý mẫu tham chiếu (v1) bị thiếu hành động lọc và làm mới. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) bởi @gchust

  - Đã sửa lỗi khối chi tiết của bộ sưu tập SQL gặp lỗi khi tải dữ liệu. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) bởi @gchust

  - Đã sửa lỗi các quy tắc liên kết trường trong khối chi tiết không có hiệu lực trong lần hiển thị ban đầu. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) bởi @gchust

  - Các khối V2 hiện chỉ hiển thị các hành động được hỗ trợ bởi nguồn dữ liệu hiện tại ([#8803](https://github.com/nocobase/nocobase/pull/8803)) bởi @zhangzhonghe

  - Sửa lỗi kiểu dáng của nút quay lại trên các trang con v2 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) bởi @zhangzhonghe

  - Sửa lỗi điều hướng liên kết popup bị hoàn tác sau khi đóng view ([#8752](https://github.com/nocobase/nocobase/pull/8752)) bởi @zhangzhonghe

  - Sửa lỗi xác thực cho các trường bắt buộc bị ẩn bởi liên kết trong chế độ cấu hình ([#8773](https://github.com/nocobase/nocobase/pull/8773)) bởi @zhangzhonghe

  - Sửa lỗi cắt tab và đảm bảo chiều rộng tab tối thiểu trong chế độ thiết kế ([#8771](https://github.com/nocobase/nocobase/pull/8771)) bởi @zhangzhonghe

  - Sửa lỗi cập nhật UI chậm trễ cho nút ẩn/hiện cột của bảng con và xóa cột liên tiếp ([#8755](https://github.com/nocobase/nocobase/pull/8755)) bởi @zhangzhonghe

  - Đã sửa lỗi khối dữ liệu gốc không làm mới sau khi chỉnh sửa dữ liệu trong popup trường liên kết. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) bởi @gchust

  - Đã vô hiệu hóa việc thêm khối cho các bản ghi liên kết nhiều-nhiều (mảng) để ngăn lỗi. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) bởi @gchust

  - Đã sửa lỗi khối dữ liệu không làm mới khi chuyển đổi menu. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) bởi @gchust

  - Sửa lỗi thành phần CollectionField không hiển thị trong thành phần DefaultValue ([#8744](https://github.com/nocobase/nocobase/pull/8744)) bởi @mytharcher

  - sửa lỗi hai lần xác thực bắt buộc xuất hiện trong biểu mẫu cập nhật bản ghi ([#8761](https://github.com/nocobase/nocobase/pull/8761)) bởi @jiannx

- **[server]**
  - Đã sửa lỗi trong truy vấn dữ liệu của các nguồn dữ liệu không phải cơ sở dữ liệu ([#8776](https://github.com/nocobase/nocobase/pull/8776)) bởi @cgyrock

  - Giải quyết vấn đề bộ nhớ đệm bằng cách thêm hash vào assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) bởi @chenos

- **[lock-manager]** Sửa lỗi điều kiện tranh chấp của trình quản lý khóa ([#8734](https://github.com/nocobase/nocobase/pull/8734)) bởi @mytharcher

- **[database]**
  - Đã sửa lỗi thiếu tùy chọn 'Phân trang đơn giản' trong mẫu view của bộ sưu tập. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) bởi @cgyrock

  - Quy tắc xác thực độ chính xác cho trường số không có hiệu lực ([#8768](https://github.com/nocobase/nocobase/pull/8768)) bởi @2013xile

  - Sửa lỗi kiểm tra biểu thức chính quy tùy chỉnh của trường không thành công trong v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) bởi @jiannx

- **[flow-engine]** Đã sửa lỗi ctx.exit không thể kết thúc việc thực thi các luồng sự kiện do người dùng định nghĩa. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) bởi @gchust

- **[Kiểm soát truy cập]**
  - sử dụng collection.filterTargetKey thay vì Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) bởi @chenos

  - Đã sửa lỗi sửa đổi dữ liệu nguồn dữ liệu API Restful. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) bởi @cgyrock

  - Phiên bản cơ sở dữ liệu được sử dụng khi thiết lập siêu dữ liệu ACL không chính xác ([#8747](https://github.com/nocobase/nocobase/pull/8747)) bởi @2013xile

- **[Mẫu UI]**
  - Đã sửa lỗi không thể tải chính xác các bản ghi liên kết sau khi lưu khối chi tiết dưới dạng mẫu. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) bởi @gchust

  - Đã sửa lỗi hiển thị cho khối tham chiếu bảng hành động. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) bởi @gchust

  - Đã sửa lỗi luồng sự kiện khối tham chiếu trong khối bảng không thể cấu hình luồng sự kiện nhấp chuột vào hàng. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) bởi @gchust

  - Đã sửa lỗi việc sử dụng lại mẫu khối bản ghi hiện tại cho khối chi tiết và khối biểu mẫu chỉnh sửa có thể khiến dữ liệu không tải được chính xác. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) bởi @gchust

  - Đã sửa lỗi các thay đổi đối với thuộc tính được thực hiện trong luồng sự kiện của khối mẫu không có hiệu lực. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) bởi @gchust

- **[Trình xem trước tệp Office]** Thay đổi chiều cao modal thành giá trị phù hợp để hiển thị nhiều nội dung tệp hơn ([#8835](https://github.com/nocobase/nocobase/pull/8835)) bởi @mytharcher

- **[Hành động: Xuất bản ghi]**
  - đã sửa lỗi trường belongsToArray bị trống trong excel đã xuất ([#8787](https://github.com/nocobase/nocobase/pull/8787)) bởi @cgyrock

  - Đã sửa lỗi các trường kiểu số trong tệp excel hiển thị dưới dạng chuỗi ([#8774](https://github.com/nocobase/nocobase/pull/8774)) bởi @cgyrock

- **[Workflow]** Sửa lỗi giữ chỗ kéo nút hiển thị không chính xác khi kéo khối trong nút phê duyệt ([#8763](https://github.com/nocobase/nocobase/pull/8763)) bởi @mytharcher

- **[Khối: Danh sách]** Đã sửa lỗi các trường khối danh sách không thể sử dụng biến bản ghi hiện tại. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) bởi @gchust

- **[Nguồn dữ liệu: Chính]**
  - Cập nhật giá trị mặc định của trường JSON không có hiệu lực ([#8767](https://github.com/nocobase/nocobase/pull/8767)) bởi @2013xile

  - Lỗi đồng bộ hóa trường ([#8766](https://github.com/nocobase/nocobase/pull/8766)) bởi @2013xile

- **[Nhân viên AI]**
  - Đã sửa lỗi dashscope/deepseek/kimi không thể đọc các tệp tài liệu đã tải lên. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) bởi @cgyrock

  - Đã sửa lỗi gọi công cụ khi sử dụng mô hình suy luận deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) bởi @cgyrock

  - Đã sửa lỗi trò chuyện nhân viên AI khi cơ sở tri thức được bật ([#8746](https://github.com/nocobase/nocobase/pull/8746)) bởi @cgyrock

  - Đã sửa lỗi hiển thị cấu hình nguồn dữ liệu AI. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) bởi @cgyrock

  - Giải quyết vấn đề tin nhắn AI hiển thị với độ dài 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) bởi @heziqiang

- **[Flow engine]** sửa lỗi sql destroy ([#8745](https://github.com/nocobase/nocobase/pull/8745)) bởi @chenos

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi workflow hành động tùy chỉnh bị treo khi thực thi dưới dạng luồng con ([#8738](https://github.com/nocobase/nocobase/pull/8738)) bởi @mytharcher

- **[Workflow: JavaScript]** Sửa lỗi các trường hợp kiểm thử không thể chạy trên windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** sửa lỗi i18n cho văn bản mục nhập biểu đồ plugin ([#8716](https://github.com/nocobase/nocobase/pull/8716)) bởi @heziqiang

- **[Đa không gian]** Sửa lỗi quyền không gian khi tạo dữ liệu với khóa chính bởi @jiannx

- **[In mẫu]** Sửa lỗi API ACL đã thay đổi nhưng không được điều chỉnh cho plugin bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi người được chỉ định không tuân theo thứ tự đã cấu hình trong nút bởi @mytharcher

  - Sửa lỗi kết quả truy vấn không hiển thị do các nút bị lọc theo loại bởi @mytharcher

  - Sửa lỗi tham số appends bị lọc bởi ACL bởi @mytharcher

  - Sửa lỗi ACL khi giá trị liên kết không nên được tạo hoặc cập nhật khi người dùng không có quyền bởi @mytharcher

  - Thêm tham số bị thiếu để tránh các liên kết không được cập nhật khi gửi phê duyệt mới bởi @mytharcher

  - Sửa lỗi nhãn chưa được dịch trong chi tiết xử lý phê duyệt bởi @zhangzhonghe

  - Sửa lỗi ném ra do giá trị `dataAfter` bị thiếu khi được thêm hoặc ủy quyền bởi @mytharcher

  - Lọc các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền bởi @mytharcher

  - Sửa lỗi ném ra khi thực thi workflow phê duyệt thủ công bởi @mytharcher

  - Lọc các giá trị liên kết trong các hành động phê duyệt, để tránh bất kỳ thao tác dữ liệu nào vượt quá quyền bởi @mytharcher

- **[Trình quản lý email]** Sửa lỗi phân tích cú pháp định dạng ID nội dung hình ảnh bởi @jiannx

- **[Trình quản lý di chuyển]**
  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock

  - Sửa lỗi xây dựng bởi @mytharcher

  - Điều chỉnh thư mục tạm thời vào storage, để hỗ trợ sử dụng trong chế độ cụm bởi @mytharcher

  - Đã sửa lỗi tiềm ẩn treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong các ngoại lệ lỗi di chuyển bởi @cgyrock
