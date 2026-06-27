---
title: "NocoBase v1.9.0-beta.6: Hỗ trợ tách dịch vụ tác vụ bất đồng bộ theo môi trường và hàng đợi sự kiện"
description: "Ghi chú phát hành phiên bản v1.9.0-beta.6"
---

### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, tự động lấy nét trường nhập khi trang được hiển thị lần đầu nếu được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Hỗ trợ phân tách dịch vụ tác vụ bất đồng bộ theo môi trường và hàng đợi sự kiện ([#7241](https://github.com/nocobase/nocobase/pull/7241)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Hỗ trợ xem trước tệp Office qua bản xem trước trực tiếp của Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher
- **[Xác thực: SAML 2.0]** Thêm các tùy chọn cấu hình liên quan đến chữ ký bởi @2013xile
- **[Luồng công việc: Phê duyệt]**

  - Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher
  - Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một luồng công việc bởi @mytharcher

### 🚀 Cải tiến

- **[database]** Tối ưu hóa hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie
- **[client]**

  - Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher
  - Thêm hỗ trợ biến ngày "ngày hôm kia" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) bởi @katherinehhh
  - Tối ưu hóa hiệu suất khi chuyển đổi tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) bởi @zhangzhonghe
  - Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612
- **[Di động]** Tối ưu hóa thành phần popup trên di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe
- **[Luồng công việc]**

  - Cập nhật menu chọn nút để hiển thị các tùy chọn theo bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher
  - Sửa trường hợp kiểm thử không ổn định ([#7349](https://github.com/nocobase/nocobase/pull/7349)) bởi @mytharcher
  - Hiển thị tiêu đề bình thường khi bị vô hiệu hóa ([#7339](https://github.com/nocobase/nocobase/pull/7339)) bởi @mytharcher
  - Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher
- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx
- **[Xác thực]** Xóa tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Xóa đầu ra nhật ký SQL qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile
  - Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Thêm hỗ trợ xem trước tệp `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Hỗ trợ phân tách dịch vụ nhập / xuất theo môi trường và hàng đợi sự kiện bởi @mytharcher
- **[Luồng công việc: JavaScript]** Thay đổi bộ nhớ đệm thành bộ nhớ đệm ứng dụng để tránh lỗi trong chế độ cụm bởi @mytharcher
- **[In mẫu]** hỗ trợ mảng trường m2m bởi @jiannx
- **[Trình quản lý sao lưu]** cải thiện hiệu suất cho thao tác sao lưu cơ sở dữ liệu mysql bởi @gchust
- **[Xác thực: DingTalk]** Trong ứng dụng khách DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị "Đang tải..." bởi @2013xile
- **[Trình quản lý di chuyển]** Hỗ trợ phân tách dịch vụ di chuyển theo môi trường và hàng đợi sự kiện bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi hiển thị biểu tượng không chính xác khi URL trong trường URL tệp đính kèm chứa tham số truy vấn ([#7432](https://github.com/nocobase/nocobase/pull/7432)) bởi @mytharcher
  - coi số 0 là giá trị rỗng trong quá trình xác thực rỗng của quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh
  - Sửa lỗi văn bản của nút liên kết bị ngắt dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher
  - Sửa lỗi bố cục biểu mẫu nhiều cột không chuyển đổi thành bố cục một cột trên thiết bị di động ([#7355](https://github.com/nocobase/nocobase/pull/7355)) bởi @zhangzhonghe
  - Sửa lỗi xóa hàng loạt bộ sưu tập ([#7345](https://github.com/nocobase/nocobase/pull/7345)) bởi @aaaaaajie
  - Sửa lỗi phạm vi dữ liệu đã lưu trước đó không được chọn trước khi cấu hình quyền riêng lẻ. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) bởi @aaaaaajie
  - Sửa lỗi chuỗi thô của biến được gửi cùng với biểu mẫu ([#7337](https://github.com/nocobase/nocobase/pull/7337)) bởi @zhangzhonghe
  - Khi sử dụng biến để đặt giá trị mặc định của trường trong biểu mẫu bộ lọc, nếu giá trị biến trống, hộp nhập sẽ hiển thị chuỗi biến gốc ([#7335](https://github.com/nocobase/nocobase/pull/7335)) bởi @zhangzhonghe
  - Sửa lỗi tooltip hiển thị [object Object] khi di chuột trong bảng hành động ([#7322](https://github.com/nocobase/nocobase/pull/7322)) bởi @katherinehhh
  - Sửa lỗi vòng lặp vô hạn khi phân tích cú pháp giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe
  - Sửa lỗi mục xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher
  - Sửa lỗi không thể mở rộng bảng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe
  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher
  - Sửa lỗi hành vi không mong muốn trong sắp xếp kéo và thả hàng trong bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu
  - Sự cố hiển thị trường ngày trong popup bộ chọn dữ liệu trường liên kết của biểu mẫu bộ lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh
- **[database]** Sửa lỗi đọc bảng ngoài Postgres bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie
- **[server]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile
- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher
- **[utils]** xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh
- **[Khối: mẫu]** Đã giải quyết sự cố các khối thư không hiển thị khi được đặt bên trong khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust
- **[Di động]**

  - định dạng hiển thị không chính xác của trường ngày trên di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh
  - Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe
  - Đã giải quyết sự cố bộ chọn ngày trên thiết bị di động hiển thị không chính xác khi áp dụng giới hạn phạm vi ngày ([#7362](https://github.com/nocobase/nocobase/pull/7362)) bởi @katherinehhh
- **[Luồng công việc]**

  - Sửa lỗi xảy ra và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục luồng công việc ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher
  - Sửa bản dịch của tiêu đề trang trong trung tâm tác vụ luồng công việc ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher
  - Tái cấu trúc menu "Thêm nút" và sửa các vấn đề về hiệu suất kết xuất canvas luồng công việc do nó gây ra ([#7363](https://github.com/nocobase/nocobase/pull/7363)) bởi @mytharcher
  - Sửa lỗi điều kiện bộ lọc không chính xác khi truy xuất một mục việc cần làm ([#7366](https://github.com/nocobase/nocobase/pull/7366)) bởi @mytharcher
  - Sửa lỗi khớp từ khóa trong bộ chọn trường ([#7356](https://github.com/nocobase/nocobase/pull/7356)) bởi @mytharcher
  - Tránh lỗi xảy ra do xuất bản vào hàng đợi sự kiện khi dừng ([#7348](https://github.com/nocobase/nocobase/pull/7348)) bởi @mytharcher
  - Sửa kết quả `undefined` khi bộ xử lý thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher
  - Sửa lỗi ID BigInt trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher
- **[Luồng công việc: nút gửi thư]** Sửa lỗi nút email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher
- **[Trình xem trước tệp Office]**

  - Sửa lỗi xảy ra khi tải tệp lên trường URL tệp đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher
  - Hỗ trợ các tệp `.docx`, `.xlsx` và `.pptx` chỉ có URL để được xem trước ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher
- **[Trình quản lý tệp]**

  - Xóa gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher
  - Thêm trường `storageId` vào bộ sưu tập tệp để hỗ trợ cấu hình quyền ([#7351](https://github.com/nocobase/nocobase/pull/7351)) bởi @mytharcher
  - Sửa quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Sửa bản dịch ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher
  - Sửa lỗi tin nhắn trong trang được nhận nhưng không hiển thị trong popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) bởi @mytharcher
- **[Lịch]** tooltip mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh
- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do loại biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher
- **[Luồng công việc: Nút song song]** Sửa lỗi nút song song bị tạm dừng sau khi tiếp tục trong MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) bởi @mytharcher
- **[Luồng công việc: CC]** Sửa lỗi không thể xóa khối ([#7338](https://github.com/nocobase/nocobase/pull/7338)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** sự cố biến ngày trong giá trị mặc định của trường ngày trong khối bộ lọc biểu đồ ([#7291](https://github.com/nocobase/nocobase/pull/7291)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Sửa logic đồng bộ hóa đường dẫn của bộ sưu tập cây ([#7330](https://github.com/nocobase/nocobase/pull/7330)) bởi @ChimingLiu
- **[Luồng công việc: Nút yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher
- **[Luồng công việc: Nút tính toán động]** Sửa lỗi API cũ gây ra lỗi ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường quan hệ lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie
- **[Hành động: Nhập bản ghi Pro]** Không cho phép gán trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi định dạng lưu trữ không nhất quán cho trường datetime MSSQL (không có múi giờ) từ nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công các hành động trên nhiều bản ghi bởi @mytharcher
- **[Luồng công việc: Luồng con]** Sửa lỗi luồng bị tạm dừng bởi @mytharcher
- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa lỗi không thể sử dụng phương pháp xác thực IAM để tải tệp lên bởi @mytharcher
  - Không dùng tham số có vấn đề `attachmentField` bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher
  - Thêm tiêu đề tác vụ cho các mục được thêm và ủy quyền bởi @mytharcher
  - Sửa lỗi xảy ra từ bộ chọn người được gán bên trong nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa lỗi danh sách người dùng trống khi ký kết bởi @mytharcher
  - Sửa lỗi cập nhật các liên kết khi gửi bản nháp bởi @mytharcher
  - Sửa lỗi quy tắc liên kết không hoạt động trong khối chi tiết phê duyệt gốc bởi @mytharcher
- **[Trình quản lý sao lưu]** các bản sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn thành bởi @gchust
- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` do pg_dump mới nhất tạo ra khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile
