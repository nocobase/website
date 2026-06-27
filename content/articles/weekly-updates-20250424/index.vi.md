---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ biến số ở vế trái của điều kiện quy tắc liên kết"
description: "Các cập nhật trong tuần này bao gồm: bổ sung giao diện mã, hỗ trợ hình ảnh động và hiển thị mã vạch trong mẫu tài liệu, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*Ngày phát hành: 2025-04-17*

#### 🚀 Cải tiến

- **[client]** Thêm API delay cho các tình huống mở không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher
- **[create-nocobase-app]** Nâng cấp một số phụ thuộc lên phiên bản mới nhất ([#6673](https://github.com/nocobase/nocobase/pull/6673)) bởi @chenos

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher
  - Trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh
  - Sửa locale cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher
  - Tải chậm thiếu thành phần ui sẽ gây ra lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust
  - Thêm thành phần Password gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher
  - Các trường kế thừa hiển thị trong danh sách gán trường của collection hiện tại ([#6666](https://github.com/nocobase/nocobase/pull/6666)) bởi @katherinehhh
- **[database]** Sửa lỗi build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie
- **[build]** Đầu ra build không chính xác khi plugin phụ thuộc vào một số thư viện AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) bởi @gchust
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie
- **[Quy trình làm việc: Nút thủ công]** Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher
- **[Khối: iframe]** Thanh cuộn dọc xuất hiện khi khối iframe được đặt chiều cao toàn phần ([#6675](https://github.com/nocobase/nocobase/pull/6675)) bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa các trường hợp kiểm thử bởi @mytharcher
- **[Trình quản lý sao lưu]** Lỗi timeout xảy ra khi cố gắng khôi phục bản sao lưu chưa được mã hóa bằng mật khẩu bởi @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*Ngày phát hành: 2025-04-22*

#### 🚀 Cải tiến

- **[create-nocobase-app]** Nâng cấp phụ thuộc và xóa hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos
- **[Trình quản lý tệp]** Mở API tiện ích ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher
- **[Quy trình làm việc]** Thêm các loại ngày vào tập hợp các loại biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề biểu tượng thanh điều hướng trên cùng trên thiết bị di động khó xóa ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe
  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe
  - Vấn đề chuyển đổi picker trong trường ngày của nút lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh
  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của quy trình làm việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe
  - Thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh
  - Nút xuất hiển thị mà không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh
  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không nên ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe
- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos
- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi xảy ra khi thực thi sự kiện lịch trình trong subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** Thêm logic multer cho tải lên phía máy chủ bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*Ngày phát hành: 2025-04-17*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến ở phía bên trái của điều kiện quy tắc liên kết ([#6609](https://github.com/nocobase/nocobase/pull/6609)) bởi @katherinehhh
- **[Quy trình làm việc: nút tính toán ngày]** Thêm hàm `changeTimezone` để thay đổi giá trị múi giờ cho việc định dạng bởi @mytharcher

#### 🚀 Cải tiến

- **[client]**
  - Hỗ trợ các bản ghi bảng đã chọn trong yêu cầu tùy chỉnh ([#6647](https://github.com/nocobase/nocobase/pull/6647)) bởi @katherinehhh
  - Thêm API delay cho các tình huống mở không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie
- **[client]**

  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher
  - Vấn đề hiển thị mô tả trường trong quy trình làm việc ([#6680](https://github.com/nocobase/nocobase/pull/6680)) bởi @katherinehhh
  - Sửa locale cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher
  - Trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh
  - Khả năng tương thích của quy tắc liên kết với dữ liệu cũ ([#6686](https://github.com/nocobase/nocobase/pull/6686)) bởi @katherinehhh
  - Tải chậm thiếu thành phần ui sẽ gây ra lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust
  - Thêm thành phần Password gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher
- **[Quy trình làm việc: Nút thủ công]** Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa các trường hợp kiểm thử bởi @mytharcher
- **[Trình quản lý sao lưu]** Lỗi timeout xảy ra khi cố gắng khôi phục bản sao lưu chưa được mã hóa bằng mật khẩu bởi @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*Ngày phát hành: 2025-04-18*

#### 🚀 Cải tiến

- **[Trình quản lý sao lưu]** Cho phép khôi phục ứng dụng chính từ bản sao lưu ứng dụng con bởi @gchust

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi xảy ra trong nút tạo / cập nhật của quy trình làm việc ([#6696](https://github.com/nocobase/nocobase/pull/6696)) bởi @mytharcher
- **[Quy trình làm việc: Nút thủ công]** Sửa lỗi ACL trong trung tâm tác vụ ([#6693](https://github.com/nocobase/nocobase/pull/6693)) bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi ACL trong trung tâm tác vụ bởi @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*Ngày phát hành: 2025-04-23*

#### 🚀 Cải tiến

- **[create-nocobase-app]** Nâng cấp phụ thuộc và xóa hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos
- **[Thiết bị di động]** Tối ưu tốc độ mở cửa sổ bật lên chọn ngày trên thiết bị di động ([#6735](https://github.com/nocobase/nocobase/pull/6735)) bởi @zhangzhonghe
- **[Khối: mẫu]** Hỗ trợ chuyển đổi khối mẫu thành khối thông thường ([#6662](https://github.com/nocobase/nocobase/pull/6662)) bởi @gchust
- **[Trình chỉnh sửa chủ đề]** Cho phép đặt chiều rộng thanh bên trong cấu hình chủ đề ([#6720](https://github.com/nocobase/nocobase/pull/6720)) bởi @chenos
- **[Trình quản lý tệp]** Mở API tiện ích ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher
- **[Quy trình làm việc]** Thêm các loại ngày vào tập hợp các loại biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher
- **[In mẫu]** Thay thế điều khiển hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề làm mới khối dữ liệu sau khi gửi thành công ([#6748](https://github.com/nocobase/nocobase/pull/6748)) bởi @zhangzhonghe
  - Thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh
  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của quy trình làm việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe
  - Quy tắc liên kết nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh
  - Điều kiện trường ngày giờ không hoạt động trong quy tắc liên kết ([#6728](https://github.com/nocobase/nocobase/pull/6728)) bởi @katherinehhh
  - Vấn đề biểu tượng thanh điều hướng trên cùng trên thiết bị di động khó xóa ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe
  - Hiển thị giá trị không chính xác cho "Bật cột chỉ mục" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) bởi @katherinehhh
  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không nên ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe
  - Chuyển đổi biến trong điều kiện quy tắc liên kết bảng con/biểu mẫu con ([#6702](https://github.com/nocobase/nocobase/pull/6702)) bởi @katherinehhh
  - Nút xuất hiển thị mà không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh
  - Thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh
  - Vấn đề chuyển đổi picker trong trường ngày của nút lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh
  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe
- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos
- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos
- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher
- **[Khối: Gantt]** Biểu đồ Gantt chồng chéo các tháng trong tiêu đề lịch cho chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa các ngoại lệ nhập và xuất xảy ra khi đặt quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie
- **[Khối: mẫu]** Các mẫu khối không thể được sử dụng trong môi trường mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) bởi @gchust
- **[Quy trình làm việc]** Sửa lỗi xảy ra khi thực thi sự kiện lịch trình trong subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Các tùy chọn trường Enum trống trong khối bộ lọc ([#6706](https://github.com/nocobase/nocobase/pull/6706)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Đảm bảo dữ liệu yêu cầu tùy chỉnh phải là JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) bởi @chenos
- **[Hành động: Xuất bản ghi Pro]**

  - Sửa các ngoại lệ nhập và xuất xảy ra khi đặt quyền trường. bởi @aaaaaajie
  - Nút xuất pro mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Thêm logic multer cho tải lên phía máy chủ bởi @mytharcher
  - Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa các trường liên kết tải trước cho bản ghi bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/en/blog/v1.7.0-alpha.11)

*Ngày phát hành: 2025-04-19*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến ở phía bên trái của điều kiện quy tắc liên kết ([#6609](https://github.com/nocobase/nocobase/pull/6609)) bởi @katherinehhh
- **[Phòng ban]** Làm cho các plugin Phòng ban, URL tệp đính kèm và tin nhắn phản hồi quy trình làm việc miễn phí ([#6663](https://github.com/nocobase/nocobase/pull/6663)) bởi @chenos
- **[Hành động: Cập nhật hàng loạt]**

  - Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe
  - Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe
- **[Lưu trữ lược đồ UI]** Thêm mô-đun bản địa hóa cho UISchema, cho phép dịch tùy chỉnh cho tiêu đề và mô tả lược đồ ([#6574](https://github.com/nocobase/nocobase/pull/6574)) bởi @chenos
- **[Khối: Bảng hành động]** Thêm callback onScanSuccess để xử lý các lần quét thành công và thoát khỏi giao diện camera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) bởi @sheldon66
- **[Trường collection: Mã]** Thêm giao diện mã bởi @mytharcher
- **[Quy trình làm việc: nút tính toán ngày]** Thêm hàm `changeTimezone` để thay đổi giá trị múi giờ cho việc định dạng bởi @mytharcher
- **[In mẫu]** Hỗ trợ hiển thị hình ảnh động và mã vạch trong các mẫu tài liệu. bởi @sheldon66

#### 🚀 Cải tiến

- **[client]**

  - Thêm API delay cho các tình huống mở không có độ trễ ([#6681](https://github.com/nocobase/nocobase/pull/6681)) bởi @mytharcher
  - Hỗ trợ các bản ghi bảng đã chọn trong yêu cầu tùy chỉnh ([#6647](https://github.com/nocobase/nocobase/pull/6647)) bởi @katherinehhh
  - Thêm API dự phòng loại mặc định cho `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) bởi @mytharcher
  - Tối ưu lời nhắc cho các trang chưa được cấu hình ([#6641](https://github.com/nocobase/nocobase/pull/6641)) bởi @zhangzhonghe
  - Hỗ trợ tìm kiếm trường trong thành phần Bộ lọc ([#6627](https://github.com/nocobase/nocobase/pull/6627)) bởi @mytharcher
  - Thêm API `trim` cho `Input` và `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) bởi @mytharcher
  - Xác định xem có hiển thị các thành phần di động hay không dựa trên loại thiết bị thay vì chiều rộng trang ([#6611](https://github.com/nocobase/nocobase/pull/6611)) bởi @zhangzhonghe
  - Xác định xem có hiển thị bố cục di động hay không dựa trên loại thiết bị thay vì chiều rộng trang ([#6600](https://github.com/nocobase/nocobase/pull/6600)) bởi @zhangzhonghe
  - Hỗ trợ cấu hình hiển thị dấu hai chấm trong nhãn trường biểu mẫu dựa trên bố cục ([#6561](https://github.com/nocobase/nocobase/pull/6561)) bởi @katherinehhh
- **[create-nocobase-app]** Nâng cấp một số phụ thuộc lên phiên bản mới nhất ([#6673](https://github.com/nocobase/nocobase/pull/6673)) bởi @chenos
- **[utils]** Thêm phần mở rộng thời lượng cho dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) bởi @mytharcher
- **[database]**

  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher
  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher
- **[Quy trình làm việc]**

  - Hỗ trợ URL bật lên cố định cho các tác vụ quy trình làm việc ([#6640](https://github.com/nocobase/nocobase/pull/6640)) bởi @mytharcher
  - Tối ưu logic lưu công việc ([#6613](https://github.com/nocobase/nocobase/pull/6613)) bởi @mytharcher
  - Cải thiện mã ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher
- **[Quy trình làm việc: Nút trì hoãn]** Hỗ trợ sử dụng biến cho thời lượng ([#6621](https://github.com/nocobase/nocobase/pull/6621)) bởi @mytharcher
- **[Trình xử lý lỗi]** Hỗ trợ tiêu đề tùy chỉnh trong thành phần AppError. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) bởi @sheldon66
- **[Trình quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của collection lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher
- **[Trình quản lý tác vụ bất đồng bộ]** Tối ưu các nút nhập/xuất trong Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) bởi @chenos
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Thêm cài đặt làm mới cho nút kích hoạt quy trình làm việc bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Tối ưu các nút nhập/xuất trong Pro bởi @katherinehhh
- **[Hạn chế IP]** Cập nhật nội dung tin nhắn hạn chế IP. bởi @sheldon66
- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ các biến toàn cục trong cấu hình lưu trữ bởi @mytharcher
- **[Trình quản lý sao lưu]** Cho phép khôi phục ứng dụng chính từ bản sao lưu ứng dụng con bởi @gchust
- **[Quy trình làm việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher
- **[Trình quản lý di chuyển]** Cho phép bỏ qua sao lưu và khôi phục tự động cho việc di chuyển bởi @gchust

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề chuyển đổi picker trong trường ngày của nút lọc ([#6695](https://github.com/nocobase/nocobase/pull/6695)) bởi @katherinehhh
  - Chuyển đổi biến trong điều kiện quy tắc liên kết bảng con/biểu mẫu con ([#6702](https://github.com/nocobase/nocobase/pull/6702)) bởi @katherinehhh
  - Nút xuất hiển thị mà không có quyền xuất ([#6689](https://github.com/nocobase/nocobase/pull/6689)) bởi @katherinehhh
  - Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống ([#6634](https://github.com/nocobase/nocobase/pull/6634)) bởi @zhangzhonghe
  - Sửa lỗi xảy ra trong nút tạo / cập nhật của quy trình làm việc ([#6696](https://github.com/nocobase/nocobase/pull/6696)) bởi @mytharcher
  - Sửa lỗi xảy ra khi di chuột qua khối mẫu được tham chiếu trong cấu hình nút phê duyệt ([#6691](https://github.com/nocobase/nocobase/pull/6691)) bởi @mytharcher
  - Trường liên kết tùy chỉnh không hiển thị cài đặt thành phần trường ([#6692](https://github.com/nocobase/nocobase/pull/6692)) bởi @katherinehhh
  - Khả năng tương thích của quy tắc liên kết với dữ liệu cũ ([#6686](https://github.com/nocobase/nocobase/pull/6686)) bởi @katherinehhh
  - Tải chậm thiếu thành phần ui sẽ gây ra lỗi hiển thị ([#6683](https://github.com/nocobase/nocobase/pull/6683)) bởi @gchust
  - Sửa locale cho thành phần tải lên ([#6682](https://github.com/nocobase/nocobase/pull/6682)) bởi @mytharcher
  - Thêm thành phần Password gốc vào HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) bởi @mytharcher
  - Vấn đề hiển thị mô tả trường trong quy trình làm việc ([#6680](https://github.com/nocobase/nocobase/pull/6680)) bởi @katherinehhh
  - Các trường kế thừa hiển thị trong danh sách gán trường của collection hiện tại ([#6666](https://github.com/nocobase/nocobase/pull/6666)) bởi @katherinehhh
  - Vấn đề kiểu trong đầu vào biến khi đặt giá trị mặc định ([#6668](https://github.com/nocobase/nocobase/pull/6668)) bởi @katherinehhh
  - Chuyển sang menu nhóm không nên nhảy đến một trang đã bị ẩn trong menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) bởi @zhangzhonghe
  - Biểu mẫu bộ lọc không nên hiển thị lời nhắc "Thay đổi chưa được lưu" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) bởi @zhangzhonghe
  - Trong biểu mẫu bộ lọc, khi nút lọc được nhấp, nếu có các trường chưa vượt qua xác thực, việc lọc vẫn được kích hoạt ([#6659](https://github.com/nocobase/nocobase/pull/6659)) bởi @zhangzhonghe
  - Tùy chọn "cho phép nhiều" không hoạt động cho trường quan hệ ([#6661](https://github.com/nocobase/nocobase/pull/6661)) bởi @katherinehhh
  - Sửa vấn đề hình ảnh xem trước bị che khuất ([#6651](https://github.com/nocobase/nocobase/pull/6651)) bởi @zhangzhonghe
  - Trong khối biểu mẫu, giá trị mặc định của cấu hình trường sẽ đầu tiên được hiển thị dưới dạng chuỗi biến gốc và sau đó biến mất ([#6649](https://github.com/nocobase/nocobase/pull/6649)) bởi @zhangzhonghe
  - Kiểu đầu vào biến không chính xác ([#6645](https://github.com/nocobase/nocobase/pull/6645)) bởi @gchust
  - Tiêu đề cửa sổ chỉnh sửa nút quy trình làm việc hiển thị [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) bởi @katherinehhh
  - Mô tả bảng con chồng lấn với nút thêm mới ([#6646](https://github.com/nocobase/nocobase/pull/6646)) bởi @katherinehhh
  - Gạch chân nét đứt do bố cục biểu mẫu ngang trong modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) bởi @katherinehhh
  - Quy tắc với điều kiện 'bất kỳ' không có hiệu lực khi danh sách điều kiện trống ([#6628](https://github.com/nocobase/nocobase/pull/6628)) bởi @katherinehhh
  - Lỗi phân tích biến khi tham số URL chứa ký tự Trung Quốc ([#6618](https://github.com/nocobase/nocobase/pull/6618)) bởi @katherinehhh
  - Khoảng trống giữa tiêu đề trang cấu hình mẫu khối và menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) bởi @gchust
  - Các trường quan hệ trong biểu mẫu bộ lọc báo lỗi sau khi trang được làm mới vì không mang theo x-data-source ([#6619](https://github.com/nocobase/nocobase/pull/6619)) bởi @zhangzhonghe
  - Vấn đề dữ liệu với khối Gantt trong collection cây ([#6617](https://github.com/nocobase/nocobase/pull/6617)) bởi @katherinehhh
  - Vấn đề hiển thị nhãn trường để tránh bị cắt bởi dấu hai chấm ([#6599](https://github.com/nocobase/nocobase/pull/6599)) bởi @katherinehhh
  - Thuộc tính x-disabled không có hiệu lực trên các trường biểu mẫu ([#6610](https://github.com/nocobase/nocobase/pull/6610)) bởi @katherinehhh
  - Sửa thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher
  - Trường liên kết (chọn) hiển thị N/A khi hiển thị các trường collection liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh
  - Các nút gửi và làm mới không hiển thị chế độ chỉ biểu tượng một cách chính xác ([#6592](https://github.com/nocobase/nocobase/pull/6592)) bởi @katherinehhh
  - Vấn đề xếp tầng: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh
  - Xung đột liên kết giữa các trường liên kết cùng tên trong các bảng con khác nhau trong cùng một biểu mẫu ([#6577](https://github.com/nocobase/nocobase/pull/6577)) bởi @katherinehhh
- **[database]**

  - Sửa lỗi build ci ([#6687](https://github.com/nocobase/nocobase/pull/6687)) bởi @aaaaaajie
  - Khi xóa bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm một trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile
  - Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher
- **[build]** Đầu ra build không chính xác khi plugin phụ thuộc vào một số thư viện AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) bởi @gchust
- **[Trực quan hóa dữ liệu]** Các tùy chọn trường Enum trống trong khối bộ lọc ([#6706](https://github.com/nocobase/nocobase/pull/6706)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Đảm bảo dữ liệu yêu cầu tùy chỉnh phải là JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) bởi @chenos
- **[Quy trình làm việc: Nút thủ công]**

  - Sửa lỗi ACL trong trung tâm tác vụ ([#6693](https://github.com/nocobase/nocobase/pull/6693)) bởi @mytharcher
  - Sửa hằng số trạng thái tác vụ thủ công ([#6676](https://github.com/nocobase/nocobase/pull/6676)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập trường thời gian xlsx ([#6672](https://github.com/nocobase/nocobase/pull/6672)) bởi @aaaaaajie
- **[Kiểm soát truy cập]**

  - Sửa lỗi xảy ra khi tuần tự hóa mô hình vai trò vào bộ nhớ đệm ([#6674](https://github.com/nocobase/nocobase/pull/6674)) bởi @mytharcher
  - Sửa logic tính toán hợp nhất vai trò ([#6605](https://github.com/nocobase/nocobase/pull/6605)) bởi @aaaaaajie
  - Gán vai trò hiện tại không chính xác trong quá trình đăng nhập ([#6581](https://github.com/nocobase/nocobase/pull/6581)) bởi @aaaaaajie
- **[Khối: iframe]** Thanh cuộn dọc xuất hiện khi khối iframe được đặt chiều cao toàn phần ([#6675](https://github.com/nocobase/nocobase/pull/6675)) bởi @katherinehhh
- **[Quy trình làm việc]**

  - Sửa lỗi di chuyển xảy ra từ MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) bởi @mytharcher
  - Sửa thông tin thống kê của quy trình làm việc không được tải khi ứng dụng khởi động ([#6642](https://github.com/nocobase/nocobase/pull/6642)) bởi @mytharcher
  - Sửa OOM khi tạo công việc với id số nguyên không an toàn ([#6637](https://github.com/nocobase/nocobase/pull/6637)) bởi @mytharcher
  - Sửa tùy chọn đồng bộ hiển thị không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher
- **[Trường collection: Tệp đính kèm (URL)]** Chỉ cho phép các collection tệp có quyền truy cập URL công khai ([#6664](https://github.com/nocobase/nocobase/pull/6664)) bởi @katherinehhh
- **[Khối: mẫu]**

  - Khi mẫu được tham chiếu được sử dụng bởi khối trang đã bị xóa, việc lưu dưới dạng mẫu thất bại ([#6638](https://github.com/nocobase/nocobase/pull/6638)) bởi @gchust
  - Sửa đổi và xóa các trường giống nhau từ mẫu và khối, sau khi tạo khối từ mẫu, có thể gây ra lỗi hiển thị ([#6626](https://github.com/nocobase/nocobase/pull/6626)) bởi @gchust
- **[Người dùng]** Vấn đề phân tích lược đồ biểu mẫu hồ sơ người dùng ([#6635](https://github.com/nocobase/nocobase/pull/6635)) bởi @2013xile
- **[Hành động: Xuất bản ghi]** Thiếu tham số bộ lọc khi xuất dữ liệu sau khi thay đổi phân trang ([#6633](https://github.com/nocobase/nocobase/pull/6633)) bởi @katherinehhh
- **[Thiết bị di động]** Trường chọn đơn với bộ lọc 'chứa' trên thiết bị di động không hỗ trợ chọn nhiều ([#6629](https://github.com/nocobase/nocobase/pull/6629)) bởi @katherinehhh
- **[Trường collection: Nhiều-nhiều (mảng)]** Vấn đề lọc theo các trường trong collection liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile
- **[Biểu mẫu công khai]** Quyền xem bao gồm list và get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos
- **[Xác thực]** Gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile
- **[Lịch]** Thiếu dữ liệu vào các ngày ranh giới trong chế độ xem lịch hàng tuần ([#6587](https://github.com/nocobase/nocobase/pull/6587)) bởi @katherinehhh
- **[Khối: Bản đồ]** Xác thực quản lý bản đồ không nên vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh
- **[Hành động: Chỉnh sửa hàng loạt]** Nhấp vào nút chỉnh sửa hàng loạt, cấu hình cửa sổ bật lên, và sau đó mở lại, cửa sổ bật lên trống ([#6578](https://github.com/nocobase/nocobase/pull/6578)) bởi @zhangzhonghe
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa các trường hợp kiểm thử bởi @mytharcher
- **[Trình quản lý email]**

  - Sửa lỗi không thể đồng bộ, không hiển thị chủ đề và các lỗi nhỏ khác bởi @jiannx
  - Sửa quyền quản lý email không thể xem danh sách email bởi @jiannx
  - Sửa thiếu await cho lệnh gọi tiếp theo. bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa thiếu await cho lệnh gọi tiếp theo. bởi @jiannx
  - Cài đặt baseurl và public riêng lẻ, cải thiện UX cấu hình lưu trữ S3 pro bởi @jiannx
  - Ném lỗi cho người dùng khi tải logo lên bộ nhớ S3 Pro (đặt làm mặc định) bởi @mytharcher
  - Sắp xếp ngôn ngữ bởi @jiannx
- **[Xác thực: OIDC]** Chuyển hướng không chính xác xảy ra khi đường dẫn callback là chuỗi 'null' bởi @2013xile
- **[Khối: Biểu mẫu nhiều bước]**

  - Nút gửi có cùng màu ở trạng thái mặc định và được đánh dấu bởi @jiannx
  - Sửa lỗi đặt lại biểu mẫu không hợp lệ khi trường được liên kết với trường khác bởi @jiannx
- **[Trình quản lý sao lưu]** Lỗi timeout xảy ra khi cố gắng khôi phục bản sao lưu chưa được mã hóa bằng mật khẩu bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi ACL trong trung tâm tác vụ bởi @mytharcher
  - Hỗ trợ URL cố định cho các mục phê duyệt trong trung tâm tác vụ bởi @mytharcher
  - Sửa chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher
  - Sửa `updatedAt` thay đổi sau khi di chuyển bởi @mytharcher
  - Sửa cấu hình nút phê duyệt không chính xác sau khi lược đồ thay đổi bởi @mytharcher
  - Sửa các biến máy khách để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher
- **[Trình quản lý di chuyển]**

  - Thời gian tạo nhật ký di chuyển được hiển thị không chính xác trong một số môi trường bởi @gchust
  - Tùy chọn bỏ qua sao lưu tự động trở nên không hợp lệ nếu cửa sổ bật lên biến môi trường xuất hiện trong quá trình di chuyển bởi @gchust
