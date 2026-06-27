---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: thêm loại mẫu nội tuyến cho cấu hình thông báo và hỗ trợ tiêu đề tác vụ nhất quán trên tất cả các nút phê duyệt trong cùng một quy trình làm việc."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Ngày phát hành: 2025-08-27*

#### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi popup chi tiết không hiển thị do cấu hình route không chính xác trong trung tâm tác vụ ([#7452](https://github.com/nocobase/nocobase/pull/7452)) bởi @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Ngày phát hành: 2025-08-26*

#### 🐛 Sửa lỗi

- **[Quản lý tệp]** Sửa lỗi khi chỉnh sửa trường `storage` trong bộ sưu tập tệp. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) bởi @mytharcher
- **[Workflow: Node song song]** Sửa lỗi xác định trạng thái không chính xác trong các nhánh song song ở chế độ "Chạy tất cả nhánh" gây ra kết thúc sớm ([#7445](https://github.com/nocobase/nocobase/pull/7445)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Thêm biến trạng thái cho các mẫu tùy chỉnh trong thông báo hoàn thành phê duyệt bởi @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Ngày phát hành: 2025-08-25*

#### 🚀 Cải tiến

- **[Workflow]** Điều chỉnh API biến workflow để hỗ trợ đặt trước danh sách biến bổ sung ([#7439](https://github.com/nocobase/nocobase/pull/7439)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Hỗ trợ sử dụng các biến liên quan đến phê duyệt trong thông báo tùy chỉnh bởi @mytharcher
  - Hỗ trợ cập nhật trạng thái phê duyệt sau khi node kết thúc kết thúc thực thi bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trong một số trường hợp, chỉnh sửa bản ghi trong popup chọn bản ghi trên thiết bị di động gây ra lỗi ([#7444](https://github.com/nocobase/nocobase/pull/7444)) bởi @zhangzhonghe
  - Xác thực bắt buộc không hoạt động cho trường tệp đính kèm trong bảng con ([#7431](https://github.com/nocobase/nocobase/pull/7431)) bởi @katherinehhh
  - Sửa lỗi biểu tượng hiển thị không chính xác khi URL trong trường URL tệp đính kèm chứa tham số truy vấn ([#7432](https://github.com/nocobase/nocobase/pull/7432)) bởi @mytharcher
- **[database]**

  - Sửa lỗi cú pháp MySQL xảy ra khi tải thêm thông báo trong ứng dụng. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) bởi @aaaaaajie
  - Sửa lỗi độ chính xác cho các trường Số đã xuất ([#7421](https://github.com/nocobase/nocobase/pull/7421)) bởi @aaaaaajie
- **[undefined]** Sửa lỗi lọc chỉ theo trường ngày tháng trong nguồn ngoài MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) bởi @aaaaaajie
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập thất bại khi khóa chính của bảng là văn bản một dòng ([#7416](https://github.com/nocobase/nocobase/pull/7416)) bởi @aaaaaajie
- **[Workflow]**

  - Hoàn thiện các tùy chọn để tự động xóa trạng thái thực thi workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) bởi @mytharcher
  - Sửa các vấn đề liên quan đến menu di động trong các tác vụ workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kết quả cập nhật không mong muốn khi sử dụng khóa chính chuỗi trong nhập xlsx. bởi @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Ngày phát hành: 2025-08-22*

#### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher
- **[database]** Tối ưu hóa hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie
- **[Mobile]** Tối ưu hóa thành phần popup trên thiết bị di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi bảng ngoài Postgres đọc bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie
- **[Khối: mẫu]** Giải quyết vấn đề các khối thư không hiển thị khi được đặt bên trong một khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust
- **[Hành động: Nhập bản ghi Pro]** Không cho phép gán các trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie
- **[Workflow: Phê duyệt]** Sửa lỗi danh sách người dùng trống trong quá trình ký kết bởi @mytharcher
- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` được tạo bởi pg_dump mới nhất khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/en/blog/v1.9.0-beta.6)

*Ngày phát hành: 2025-08-22*

#### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, tự động lấy nét trường nhập trong quá trình hiển thị trang ban đầu khi được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Hỗ trợ tách các dịch vụ tác vụ bất đồng bộ theo môi trường và hàng đợi sự kiện ([#7241](https://github.com/nocobase/nocobase/pull/7241)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Hỗ trợ xem trước tệp Office thông qua bản xem trước trực tiếp của Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher
- **[Xác thực: SAML 2.0]** Thêm các tùy chọn cấu hình liên quan đến chữ ký bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher
  - Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một workflow bởi @mytharcher

#### 🚀 Cải tiến

- **[database]** Tối ưu hóa hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie
- **[client]**

  - Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher
  - Thêm hỗ trợ biến ngày "hôm kia" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) bởi @katherinehhh
  - Tối ưu hóa hiệu suất khi chuyển đổi tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) bởi @zhangzhonghe
  - Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612
- **[Mobile]** Tối ưu hóa thành phần popup trên thiết bị di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe
- **[Workflow]**

  - Cập nhật menu chọn nút để hiển thị các tùy chọn trong bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng một lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher
  - Sửa trường hợp kiểm tra không ổn định ([#7349](https://github.com/nocobase/nocobase/pull/7349)) bởi @mytharcher
  - Hiển thị tiêu đề bình thường khi bị vô hiệu hóa ([#7339](https://github.com/nocobase/nocobase/pull/7339)) bởi @mytharcher
  - Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher
- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx
- **[Xác thực]** Xóa tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Xóa nhật ký SQL đầu ra qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile
  - Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Thêm hỗ trợ xem trước tệp `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Hỗ trợ tách dịch vụ nhập / xuất theo môi trường và hàng đợi sự kiện bởi @mytharcher
- **[Workflow: JavaScript]** Thay đổi bộ nhớ đệm thành bộ nhớ đệm ứng dụng để tránh lỗi trong chế độ cụm bởi @mytharcher
- **[In mẫu]** hỗ trợ mảng trường m2m bởi @jiannx
- **[Trình quản lý sao lưu]** cải thiện hiệu suất cho hoạt động sao lưu cơ sở dữ liệu mysql bởi @gchust
- **[Xác thực: DingTalk]** Trong ứng dụng DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị "Đang tải..." bởi @2013xile
- **[Trình quản lý di chuyển]** Hỗ trợ tách dịch vụ di chuyển theo môi trường và hàng đợi sự kiện bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi biểu tượng hiển thị không chính xác khi URL trong trường URL tệp đính kèm chứa tham số truy vấn ([#7432](https://github.com/nocobase/nocobase/pull/7432)) bởi @mytharcher
  - coi số 0 là trống trong quá trình xác thực trống quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh
  - Sửa văn bản của nút liên kết bị ngắt dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher
  - Sửa lỗi bố cục biểu mẫu nhiều cột không chuyển đổi thành bố cục một cột trên thiết bị di động ([#7355](https://github.com/nocobase/nocobase/pull/7355)) bởi @zhangzhonghe
  - Sửa lỗi xóa hàng loạt bộ sưu tập ([#7345](https://github.com/nocobase/nocobase/pull/7345)) bởi @aaaaaajie
  - Sửa lỗi phạm vi dữ liệu đã lưu trước đó không được chọn trước khi cấu hình quyền riêng lẻ. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) bởi @aaaaaajie
  - Sửa lỗi các chuỗi thô của biến được gửi cùng với biểu mẫu ([#7337](https://github.com/nocobase/nocobase/pull/7337)) bởi @zhangzhonghe
  - Khi sử dụng biến để đặt giá trị mặc định của trường trong biểu mẫu bộ lọc, nếu giá trị biến trống, hộp nhập sẽ hiển thị chuỗi biến gốc ([#7335](https://github.com/nocobase/nocobase/pull/7335)) bởi @zhangzhonghe
  - Sửa tooltip hiển thị [object Object] khi di chuột trong bảng hành động ([#7322](https://github.com/nocobase/nocobase/pull/7322)) bởi @katherinehhh
  - Sửa lỗi vòng lặp vô hạn khi phân tích cú pháp giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe
  - Sửa mục xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher
  - Sửa lỗi không thể mở rộng bảng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe
  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher
  - Sửa hành vi không mong muốn trong sắp xếp kéo và thả hàng trong bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu
  - Vấn đề hiển thị trường ngày tháng trong popup chọn dữ liệu trường liên kết của biểu mẫu bộ lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh
- **[database]** Sửa lỗi bảng ngoài Postgres đọc bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie
- **[server]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile
- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher
- **[utils]** xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh
- **[Khối: mẫu]** Giải quyết vấn đề các khối thư không hiển thị khi được đặt bên trong một khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust
- **[Mobile]**

  - định dạng hiển thị không chính xác của trường ngày tháng trên thiết bị di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh
  - Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên thiết bị di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe
  - Giải quyết vấn đề bộ chọn ngày trên thiết bị di động hiển thị không chính xác khi áp dụng giới hạn phạm vi ngày ([#7362](https://github.com/nocobase/nocobase/pull/7362)) bởi @katherinehhh
- **[Workflow]**

  - Sửa lỗi ném ra và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher
  - Sửa bản dịch của tiêu đề trang trong trung tâm tác vụ workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher
  - Tái cấu trúc menu "Thêm nút" và sửa các vấn đề về hiệu suất kết xuất canvas workflow mà nó gây ra ([#7363](https://github.com/nocobase/nocobase/pull/7363)) bởi @mytharcher
  - Sửa lỗi điều kiện lọc không chính xác khi truy xuất một mục công việc phải làm ([#7366](https://github.com/nocobase/nocobase/pull/7366)) bởi @mytharcher
  - Sửa lỗi khớp từ khóa trong lựa chọn trường ([#7356](https://github.com/nocobase/nocobase/pull/7356)) bởi @mytharcher
  - Tránh lỗi ném ra do xuất bản lên hàng đợi sự kiện khi dừng ([#7348](https://github.com/nocobase/nocobase/pull/7348)) bởi @mytharcher
  - Sửa kết quả `undefined` khi processor thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher
  - Sửa lỗi ID BigInt trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher
- **[Workflow: node gửi thư]** Sửa lỗi node email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher
- **[Trình xem trước tệp Office]**

  - Sửa lỗi ném ra khi tải tệp lên trường URL tệp đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher
  - Hỗ trợ xem trước tệp `.docx`, `.xlsx` và `.pptx` chỉ có URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher
- **[Quản lý tệp]**

  - Xóa gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher
  - Thêm trường `storageId` vào bộ sưu tập tệp để hỗ trợ cấu hình quyền ([#7351](https://github.com/nocobase/nocobase/pull/7351)) bởi @mytharcher
  - Sửa quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Sửa bản dịch ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher
  - Sửa lỗi tin nhắn trong trang được nhận nhưng không hiển thị trong popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) bởi @mytharcher
- **[Lịch]** tooltip mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh
- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do loại biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher
- **[Workflow: Node song song]** Sửa lỗi node song song bị tạm dừng sau khi tiếp tục trong MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) bởi @mytharcher
- **[Workflow: CC]** Sửa lỗi không thể xóa khối ([#7338](https://github.com/nocobase/nocobase/pull/7338)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** vấn đề biến ngày tháng trong giá trị mặc định của trường ngày tháng trong khối bộ lọc biểu đồ ([#7291](https://github.com/nocobase/nocobase/pull/7291)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Sửa logic đồng bộ hóa đường dẫn của các bộ sưu tập cây ([#7330](https://github.com/nocobase/nocobase/pull/7330)) bởi @ChimingLiu
- **[Workflow: Node yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher
- **[Workflow: Node tính toán động]** Sửa lỗi API cũ gây ra lỗi ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường quan hệ lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie
- **[Hành động: Nhập bản ghi Pro]** Không cho phép gán các trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi định dạng lưu trữ không nhất quán cho các trường datetime (không có múi giờ) của MSSQL từ các nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Workflow: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công các hành động trên nhiều bản ghi bởi @mytharcher
- **[Workflow: Luồng con]** Sửa lỗi luồng bị tạm dừng bởi @mytharcher
- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa lỗi không thể sử dụng phương thức xác thực IAM để tải tệp lên bởi @mytharcher
  - Không dùng tham số có vấn đề `attachmentField` bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher
  - Thêm tiêu đề tác vụ cho các mục đã thêm và được ủy quyền bởi @mytharcher
  - Sửa lỗi ném ra từ lựa chọn người được gán bên trong nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa lỗi danh sách người dùng trống trong quá trình ký kết bởi @mytharcher
  - Sửa lỗi cập nhật các liên kết khi gửi bản nháp bởi @mytharcher
  - Sửa lỗi quy tắc liên kết không hoạt động trong khối chi tiết phê duyệt gốc bởi @mytharcher
- **[Trình quản lý sao lưu]** các bản sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn thành bởi @gchust
- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` được tạo bởi pg_dump mới nhất khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Ngày phát hành: 2025-08-22*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ quy tắc xác thực trường ([#7297](https://github.com/nocobase/nocobase/pull/7297)) bởi @aaaaaajie
- **[Workflow: Phê duyệt]**

  - Thêm loại mẫu nội tuyến cho cấu hình thông báo bởi @mytharcher
  - Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một workflow bởi @mytharcher

#### 🚀 Cải tiến

- **[database]** Tối ưu hóa hiệu suất truy vấn ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) bởi @aaaaaajie
- **[client]** Hỗ trợ hiển thị các biểu tượng được xác định bằng chuỗi trong thành phần Select khi ở chế độ chỉ đọc ([#7420](https://github.com/nocobase/nocobase/pull/7420)) bởi @mytharcher
- **[Mobile]** Tối ưu hóa thành phần popup trên thiết bị di động ([#7414](https://github.com/nocobase/nocobase/pull/7414)) bởi @zhangzhonghe
- **[Workflow]** Cập nhật menu chọn nút để hiển thị các tùy chọn trong bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng một lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher
- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx
- **[Thông báo: Tin nhắn trong ứng dụng]** Xóa nhật ký SQL đầu ra qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile
- **[Xác thực]** Xóa tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile
- **[In mẫu]** hỗ trợ mảng trường m2m bởi @jiannx

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi bảng ngoài Postgres đọc bao gồm các view từ schema khác ([#7410](https://github.com/nocobase/nocobase/pull/7410)) bởi @aaaaaajie
- **[client]**

  - coi số 0 là trống trong quá trình xác thực trống quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh
  - Sửa lỗi nút "Cài đặt cột" tải các cột từ bảng bên trong hộp thoại modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) bởi @kerwin612
  - Sửa văn bản của nút liên kết bị ngắt dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher
- **[server]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile
- **[Khối: mẫu]** Giải quyết vấn đề các khối thư không hiển thị khi được đặt bên trong một khối mẫu kế thừa ([#7430](https://github.com/nocobase/nocobase/pull/7430)) bởi @gchust
- **[Workflow: node gửi thư]** Sửa lỗi node email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher
- **[Mobile]**

  - định dạng hiển thị không chính xác của trường ngày tháng trên thiết bị di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh
  - Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên thiết bị di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe
- **[Workflow]**

  - Sửa lỗi ném ra và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher
  - Sửa bản dịch của tiêu đề trang trong trung tâm tác vụ workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher
- **[Trình xem trước tệp Office]** Sửa lỗi ném ra khi tải tệp lên trường URL tệp đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa bản dịch ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher
- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do loại biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher
- **[Quản lý tệp]** Xóa gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher
- **[Lịch]** tooltip mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** Không cho phép gán các trường quan hệ trong quá trình phát hiện trùng lặp khi nhập. bởi @aaaaaajie
- **[Workflow: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công các hành động trên nhiều bản ghi bởi @mytharcher
- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]**

  - Không dùng tham số có vấn đề `attachmentField` bởi @mytharcher
  - Sửa lỗi không thể sử dụng phương thức xác thực IAM để tải tệp lên bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher
  - Sửa lỗi danh sách người dùng trống trong quá trình ký kết bởi @mytharcher
- **[Trình quản lý sao lưu]** các bản sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn thành bởi @gchust
- **[Trình quản lý di chuyển]** Bỏ qua các lệnh `\restrict` và `\unrestrict` được tạo bởi pg_dump mới nhất khi tạo tệp di chuyển để giải quyết lỗi khôi phục. bởi @2013xile
