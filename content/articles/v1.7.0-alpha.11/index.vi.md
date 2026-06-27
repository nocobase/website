---
title: "NocoBase v1.7.0-alpha.11: hỗ trợ biến ở vế trái của điều kiện quy tắc liên kết"
description: "Ghi chú phát hành của v1.7.0-alpha.11"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến ở vế trái của điều kiện quy tắc liên kết ([#6609](https://github.com/nocobase/nocobase/pull/6609)) bởi @katherinehhh

- **[Departments]** Biến các plugin Phòng ban, URL Tệp đính kèm và Thông báo phản hồi Luồng công việc thành miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos

- **[Hành động: Cập nhật hàng loạt]**
  - Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe

  - Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe

- **[Lưu trữ lược đồ UI]** Đã thêm mô-đun bản địa hóa cho UISchema, cho phép dịch tùy chỉnh cho tiêu đề và mô tả lược đồ ([#6574](https://github.com/nocobase/nocobase/pull/6574)) bởi @chenos

- **[Khối: Bảng hành động]** thêm callback onScanSuccess để xử lý các lần quét thành công và thoát khỏi giao diện camera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) bởi @sheldon66

- **[Trường bộ sưu tập: Mã]** Thêm giao diện mã bởi @mytharcher

- **[Luồng công việc: nút tính toán ngày]** Thêm hàm `changeTimezone` để thay đổi giá trị múi giờ cho việc định dạng bởi @mytharcher

- **[In mẫu]** Hỗ trợ hiển thị hình ảnh động và mã vạch trong các mẫu tài liệu. bởi @sheldon66

### 🚀 Cải tiến

- **[client]**
  - Thêm API trì hoãn cho các tình huống mở mà không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher

  - hỗ trợ các bản ghi bảng đã chọn trong yêu cầu tùy chỉnh ([#6647](https://github.com/nocobase/nocobase/pull/6647)) bởi @katherinehhh

  - Thêm API dự phòng loại mặc định cho `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) bởi @mytharcher

  - Tối ưu hóa lời nhắc cho các trang chưa được cấu hình ([#6641](https://github.com/nocobase/nocobase/pull/6641)) bởi @zhangzhonghe

  - Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher

  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher

  - Xác định xem có hiển thị các thành phần di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6611](https://github.com/nocobase/nocobase/pull/6611)) bởi @zhangzhonghe

  - Xác định xem có hiển thị bố cục di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6600](https://github.com/nocobase/nocobase/pull/6600)) bởi @zhangzhonghe

  - hỗ trợ cấu hình hiển thị dấu hai chấm trong nhãn trường biểu mẫu dựa trên bố cục ([#6561](https://github.com/nocobase/nocobase/pull/6561)) bởi @katherinehhh

- **[create-nocobase-app]** Nâng cấp một số phụ thuộc lên phiên bản mới nhất ([#6673](https://github.com/nocobase/nocobase/pull/6673)) bởi @chenos

- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher

- **[database]**
  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher

  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher

- **[Luồng công việc]**
  - Hỗ trợ URL popup cố định cho các tác vụ luồng công việc ([#6640](https://github.com/nocobase/nocobase/pull/6640)) bởi @mytharcher

  - Tối ưu hóa logic lưu công việc ([#6613](https://github.com/nocobase/nocobase/pull/6613)) bởi @mytharcher

  - Cải thiện mã ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher

- **[Luồng công việc: Nút trì hoãn]** Hỗ trợ sử dụng biến cho thời lượng ([#6621](https://github.com/nocobase/nocobase/pull/6621)) bởi @mytharcher

- **[Trình xử lý lỗi]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66

- **[Trình quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của bộ sưu tập lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]** tối ưu hóa các nút nhập/xuất trong Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) bởi @chenos

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Thêm cài đặt làm mới cho nút kích hoạt luồng công việc bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** tối ưu hóa các nút nhập/xuất trong Pro bởi @katherinehhh

- **[Hạn chế IP]** Cập nhật nội dung thông báo hạn chế IP. bởi @sheldon66

- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ các biến toàn cục trong cấu hình lưu trữ bởi @mytharcher

- **[Trình quản lý sao lưu]** cho phép khôi phục ứng dụng chính từ bản sao lưu ứng dụng con bởi @gchust

- **[Luồng công việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher

- **[Trình quản lý di chuyển]** cho phép bỏ qua sao lưu và khôi phục tự động cho việc di chuyển bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - sự cố chuyển đổi picker trong trường ngày của nút bộ lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh

  - chuyển đổi biến trong điều kiện quy tắc liên kết bảng con/biểu mẫu con ([#6702](https://github.com/nocobase/nocobase/pull/6702)) bởi @katherinehhh

  - nút xuất hiển thị mà không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh

  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe

  - Sửa lỗi xảy ra trong nút tạo / cập nhật của luồng công việc ([#6696](https://github.com/nocobase/nocobase/pull/6696)) bởi @mytharcher

  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher

  - trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh

  - quy tắc liên kết tương thích với dữ liệu cũ ([#6686](https://github.com/nocobase/nocobase/pull/6686)) bởi @katherinehhh

  - tải chậm thiếu thành phần ui sẽ gây ra lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust

  - Sửa locale cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher

  - Thêm thành phần Mật khẩu gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher

  - sự cố hiển thị mô tả trường trong luồng công việc ([#6680](https://github.com/nocobase/nocobase/pull/6680)) bởi @katherinehhh

  - các trường kế thừa hiển thị trong danh sách gán trường của bộ sưu tập hiện tại ([#6666](https://github.com/nocobase/nocobase/pull/6666)) bởi @katherinehhh

  - sự cố kiểu trong đầu vào biến khi đặt giá trị mặc định ([#6668](https://github.com/nocobase/nocobase/pull/6668)) bởi @katherinehhh

  - Chuyển sang menu nhóm không được nhảy đến một trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe

  - Biểu mẫu bộ lọc không được hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe

  - Trong biểu mẫu bộ lọc, khi nút bộ lọc được nhấp, nếu có các trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe

  - tùy chọn "cho phép nhiều" không hoạt động cho trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh

  - Sửa sự cố hình ảnh xem trước bị che khuất ([#6651](https://github.com/nocobase/nocobase/pull/6651)) bởi @zhangzhonghe

  - Trong khối biểu mẫu, giá trị mặc định của cấu hình trường sẽ đầu tiên được hiển thị dưới dạng chuỗi biến gốc và sau đó biến mất ([#6649](https://github.com/nocobase/nocobase/pull/6649)) bởi @zhangzhonghe

  - kiểu đầu vào biến không chính xác ([#6645](https://github.com/nocobase/nocobase/pull/6645)) bởi @gchust

  - tiêu đề ngăn kéo chỉnh sửa nút luồng công việc hiển thị [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) bởi @katherinehhh

  - mô tả bảng con chồng lấn với nút thêm mới ([#6646](https://github.com/nocobase/nocobase/pull/6646)) bởi @katherinehhh

  - gạch chân chấm gây ra bởi bố cục biểu mẫu ngang trong modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) bởi @katherinehhh

  - quy tắc với điều kiện 'bất kỳ' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh

  - lỗi phân tích biến khi tham số URL chứa ký tự Trung Quốc ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh

  - vùng trống giữa tiêu đề trang cấu hình mẫu khối và menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) bởi @gchust

  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới vì không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe

  - sự cố dữ liệu với khối Gantt trong bộ sưu tập cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh

  - sự cố hiển thị nhãn trường để ngăn chặn việc cắt bớt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh

  - thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh

  - Sửa thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher

  - trường liên kết (chọn) hiển thị N/A khi hiển thị các trường bộ sưu tập liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh

  - các nút gửi và làm mới không hiển thị chế độ chỉ biểu tượng một cách chính xác ([#6592](https://github.com/nocobase/nocobase/pull/6592)) bởi @katherinehhh

  - sự cố tầng: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh

  - xung đột liên kết giữa các trường liên kết cùng tên trong các bảng con khác nhau trong cùng một biểu mẫu ([#6577](https://github.com/nocobase/nocobase/pull/6577)) bởi @katherinehhh

- **[database]**
  - Đã sửa lỗi xây dựng CI ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie

  - Khi xóa bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm một trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile

  - Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher

- **[build]** đầu ra xây dựng không chính xác khi plugin phụ thuộc vào một số thư viện AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) bởi @gchust

- **[Trực quan hóa dữ liệu]** Các tùy chọn trường Enum trống trong khối bộ lọc ([#6706](https://github.com/nocobase/nocobase/pull/6706)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** Đảm bảo dữ liệu yêu cầu tùy chỉnh phải là JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) bởi @chenos

- **[Luồng công việc: Nút thủ công]**
  - Sửa lỗi ACL trong trung tâm tác vụ ([#6693](https://github.com/nocobase/nocobase/pull/6693)) bởi @mytharcher

  - Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher

- **[Hành động: Nhập bản ghi]** đã sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie

- **[Kiểm soát truy cập]**
  - Sửa lỗi xảy ra khi tuần tự hóa mô hình vai trò vào bộ nhớ đệm ([#6674](https://github.com/nocobase/nocobase/pull/6674)) bởi @mytharcher

  - Sửa logic tính toán hợp nhất vai trò ([#6605](https://github.com/nocobase/nocobase/pull/6605)) bởi @aaaaaajie

  - Gán vai trò hiện tại không chính xác trong quá trình đăng nhập ([#6581](https://github.com/nocobase/nocobase/pull/6581)) bởi @aaaaaajie

- **[Khối: iframe]** thanh cuộn dọc xuất hiện khi khối iframe được đặt chiều cao đầy đủ ([#6675](https://github.com/nocobase/nocobase/pull/6675)) bởi @katherinehhh

- **[Luồng công việc]**
  - Sửa lỗi di chuyển xảy ra từ MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) bởi @mytharcher

  - Sửa thông tin thống kê của luồng công việc không được tải khi ứng dụng khởi động ([#6642](https://github.com/nocobase/nocobase/pull/6642)) bởi @mytharcher

  - Sửa OOM khi tạo công việc với id số nguyên không an toàn ([#6637](https://github.com/nocobase/nocobase/pull/6637)) bởi @mytharcher

  - Sửa tùy chọn đồng bộ hiển thị không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher

- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** chỉ cho phép các bộ sưu tập tệp có quyền truy cập URL công khai ([#6664](https://github.com/nocobase/nocobase/pull/6664)) bởi @katherinehhh

- **[Khối: mẫu]**
  - khi mẫu được tham chiếu được sử dụng bởi khối trang đã bị xóa, việc lưu dưới dạng mẫu thất bại ([#6638](https://github.com/nocobase/nocobase/pull/6638)) bởi @gchust

  - Sửa đổi và xóa các trường giống nhau từ mẫu và khối, sau khi tạo một khối từ mẫu, có thể gây ra lỗi hiển thị ([#6626](https://github.com/nocobase/nocobase/pull/6626)) bởi @gchust

- **[Người dùng]** Sự cố với việc phân tích lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile

- **[Hành động: Xuất bản ghi]** thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh

- **[Di động]** trường chọn đơn với bộ lọc 'chứa' trên thiết bị di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh

- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Sự cố lọc theo các trường trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile

- **[Biểu mẫu công khai]** Quyền xem bao gồm danh sách và lấy ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos

- **[Xác thực]** gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile

- **[Lịch]** thiếu dữ liệu vào các ngày ranh giới trong chế độ xem lịch hàng tuần ([#6587](https://github.com/nocobase/nocobase/pull/6587)) bởi @katherinehhh

- **[Khối: Bản đồ]** xác thực quản lý bản đồ không được vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh

- **[Hành động: Chỉnh sửa hàng loạt]** Nhấp vào nút chỉnh sửa hàng loạt, cấu hình cửa sổ bật lên, và sau đó mở lại, cửa sổ bật lên trống ([#6578](https://github.com/nocobase/nocobase/pull/6578)) bởi @zhangzhonghe

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa các trường hợp kiểm thử bởi @mytharcher

- **[Trình quản lý email]**
  - sửa lỗi không thể đồng bộ, không hiển thị chủ đề và các lỗi nhỏ khác bởi @jiannx

  - sửa lỗi quyền quản lý email không thể xem danh sách email bởi @jiannx

  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx

- **[Lưu trữ tệp: S3(Pro)]**
  - Sửa lỗi thiếu await cho lệnh gọi tiếp theo. bởi @jiannx

  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 pro bởi @jiannx

  - Ném lỗi cho người dùng khi tải logo lên bộ lưu trữ S3 Pro (đặt làm mặc định) bởi @mytharcher

  - Sắp xếp ngôn ngữ bởi @jiannx

- **[Xác thực: OIDC]** Chuyển hướng không chính xác xảy ra khi đường dẫn callback là chuỗi 'null' bởi @2013xile

- **[Khối: Biểu mẫu nhiều bước]**
  - nút gửi có cùng màu ở trạng thái mặc định và được làm nổi bật bởi @jiannx

  - đã sửa lỗi đặt lại biểu mẫu không có hiệu lực khi trường được liên kết với trường khác bởi @jiannx

- **[Trình quản lý sao lưu]** lỗi hết thời gian xảy ra khi cố gắng khôi phục một bản sao lưu chưa được mã hóa bằng mật khẩu bởi @gchust

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi ACL trong trung tâm tác vụ bởi @mytharcher

  - Hỗ trợ URL cố định cho các mục phê duyệt trong trung tâm tác vụ bởi @mytharcher

  - Sửa chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher

  - Sửa `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher

  - Sửa cấu hình nút phê duyệt không chính xác sau khi lược đồ thay đổi bởi @mytharcher

  - Sửa các biến phía client để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher

- **[Trình quản lý di chuyển]**
  - thời gian tạo nhật ký di chuyển được hiển thị không chính xác trong một số môi trường bởi @gchust

  - tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ bật lên biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust
