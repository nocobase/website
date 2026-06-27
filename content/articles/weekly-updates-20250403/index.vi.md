---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ mẫu khối trong biểu mẫu quy trình phê duyệt, cải tiến quy trình làm việc và sửa lỗi."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Ngày phát hành: 2025-03-27*

#### 🚀 Cải tiến

- **[client]**

  - Tối ưu thông báo lỗi 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) bởi @chenos
  - Chỉ hỗ trợ xem trước tệp văn bản thuần túy ([#6563](https://github.com/nocobase/nocobase/pull/6563)) bởi @mytharcher
- **[Trường bộ sưu tập: Sequence]** hỗ trợ đặt sequence làm trường tiêu đề cho khối lịch ([#6562](https://github.com/nocobase/nocobase/pull/6562)) bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]** Hỗ trợ bỏ qua trình xác thực trong cài đặt bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề hiển thị trường ngày trong bộ lọc phạm vi dữ liệu ([#6564](https://github.com/nocobase/nocobase/pull/6564)) bởi @katherinehhh
  - Tùy chọn 'Ellipsis overflow content' yêu cầu làm mới trang để trạng thái bật/tắt có hiệu lực ([#6520](https://github.com/nocobase/nocobase/pull/6520)) bởi @zhangzhonghe
  - Không thể mở một modal khác bên trong modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) bởi @zhangzhonghe
- **[Tài liệu API]** Trang tài liệu API không thể cuộn ([#6566](https://github.com/nocobase/nocobase/pull/6566)) bởi @zhangzhonghe
- **[Quy trình công việc]** Đảm bảo khóa quy trình công việc được tạo trước khi lưu ([#6567](https://github.com/nocobase/nocobase/pull/6567)) bởi @mytharcher
- **[Quy trình công việc: Sự kiện sau hành động]** Nhiều bản ghi trong hành động hàng loạt sẽ kích hoạt nhiều lần ([#6559](https://github.com/nocobase/nocobase/pull/6559)) bởi @mytharcher
- **[Xác thực]** Vấn đề bản địa hóa cho các trường của trang đăng ký ([#6556](https://github.com/nocobase/nocobase/pull/6556)) bởi @2013xile
- **[Biểu mẫu công khai]** Vấn đề với tiêu đề trang biểu mẫu công khai hiển thị 'Đang tải...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) bởi @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Ngày phát hành: 2025-03-27*

#### 🐛 Sửa lỗi

- **[Khối: Biểu mẫu nhiều bước]**

  - Nút gửi có cùng màu ở trạng thái mặc định và được đánh dấu bởi @jiannx
  - Đã sửa lỗi đặt lại biểu mẫu không hiệu quả khi trường được liên kết với trường khác bởi @jiannx
- **[Quy trình công việc: Phê duyệt]** Sửa giá trị biểu mẫu phê duyệt để gửi bởi @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Ngày phát hành: 2025-03-28*

#### 🚀 Cải tiến

- **[Trình quản lý tác vụ bất đồng bộ]** tối ưu hóa các nút nhập/xuất trong Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) bởi @chenos
- **[Hành động: Xuất bản ghi Pro]** tối ưu hóa các nút nhập/xuất trong Pro bởi @katherinehhh
- **[Trình quản lý di chuyển]** cho phép bỏ qua sao lưu và khôi phục tự động cho việc di chuyển bởi @gchust

#### 🐛 Sửa lỗi

- **[client]** Xung đột liên kết giữa các trường liên kết cùng tên trong các bảng phụ khác nhau trong cùng một biểu mẫu ([#6577](https://github.com/nocobase/nocobase/pull/6577)) bởi @katherinehhh
- **[Hành động: Chỉnh sửa hàng loạt]** Nhấp vào nút chỉnh sửa hàng loạt, cấu hình cửa sổ bật lên, sau đó mở lại, cửa sổ bật lên bị trống ([#6578](https://github.com/nocobase/nocobase/pull/6578)) bởi @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Ngày phát hành: 2025-03-29*

#### 🐛 Sửa lỗi

- **[Lịch]** Thiếu dữ liệu vào các ngày ranh giới trong chế độ xem lịch hàng tuần ([#6587](https://github.com/nocobase/nocobase/pull/6587)) bởi @katherinehhh
- **[Xác thực: OIDC]** Xảy ra chuyển hướng không chính xác khi đường dẫn callback là chuỗi 'null' bởi @2013xile
- **[Quy trình công việc: Phê duyệt]** Sửa cấu hình nút phê duyệt không chính xác sau khi sơ đồ thay đổi bởi @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Ngày phát hành: 2025-04-01*

#### 🚀 Cải tiến

- **[database]**

  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher
  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher
- **[Trình quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của bộ sưu tập lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher
- **[Quy trình công việc]** Cải thiện mã ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]** Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher
- **[client]**

  - Trường liên kết (chọn) hiển thị N/A khi hiển thị các trường bộ sưu tập liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh
  - Sửa thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher
  - Vấn đề xếp tầng: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Vấn đề lọc theo các trường trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile
- **[Biểu mẫu công khai]** Quyền xem bao gồm danh sách và lấy ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos
- **[Xác thực]** Gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile
- **[Quy trình công việc]** Sửa tùy chọn đồng bộ hiển thị không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher
- **[Khối: Bản đồ]** Xác thực quản lý bản đồ không được vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]**

  - Sửa biến client để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher
  - Sửa chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Ngày phát hành: 2025-03-27*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình biến sau khi gửi, cho phép chuyển hướng với ID dữ liệu hiện tại ([#6465](https://github.com/nocobase/nocobase/pull/6465)) bởi @katherinehhh
- **[Trường bộ sưu tập: Markdown(Vditor)]** Vditor hỗ trợ S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) bởi @zhangzhonghe

#### 🚀 Cải tiến

- **[client]**

  - Chỉ hỗ trợ xem trước tệp văn bản thuần túy ([#6563](https://github.com/nocobase/nocobase/pull/6563)) bởi @mytharcher
  - Tối ưu thông báo lỗi 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) bởi @chenos
  - Hạn chế các hành động khả dụng cho các thuộc tính trường khác nhau trong quy tắc liên kết ([#6548](https://github.com/nocobase/nocobase/pull/6548)) bởi @katherinehhh
- **[Trình quản lý tệp]** Điều chỉnh API `getFileData` của bộ lưu trữ ([#6553](https://github.com/nocobase/nocobase/pull/6553)) bởi @mytharcher
- **[Kiểm soát truy cập]** Tối ưu hóa thứ tự và kiểu chuyển đổi vai trò ([#6555](https://github.com/nocobase/nocobase/pull/6555)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Sequence]** hỗ trợ đặt sequence làm trường tiêu đề cho khối lịch ([#6562](https://github.com/nocobase/nocobase/pull/6562)) bởi @katherinehhh
- **[Quy trình công việc]** Tách các cột đã thực thi thành các bảng thống kê ([#6534](https://github.com/nocobase/nocobase/pull/6534)) bởi @mytharcher
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Tách các cột đã thực thi thành các bảng thống kê bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Tách các cột đã thực thi thành các bảng thống kê bởi @mytharcher
  - Hỗ trợ bỏ qua trình xác thực trong cài đặt bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Các phiên bản trình duyệt cũ hơn sẽ hiển thị trang trống ([#6571](https://github.com/nocobase/nocobase/pull/6571)) bởi @zhangzhonghe
  - Tùy chọn 'Ellipsis overflow content' yêu cầu làm mới trang để trạng thái bật/tắt có hiệu lực ([#6520](https://github.com/nocobase/nocobase/pull/6520)) bởi @zhangzhonghe
  - Vấn đề hiển thị trường ngày trong bộ lọc phạm vi dữ liệu ([#6564](https://github.com/nocobase/nocobase/pull/6564)) bởi @katherinehhh
  - Không thể mở một modal khác bên trong modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) bởi @zhangzhonghe
  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust
  - Menu trên cùng của trang hiển thị trống ([#6551](https://github.com/nocobase/nocobase/pull/6551)) bởi @zhangzhonghe
  - Gán trường với giá trị null không hiệu quả ([#6549](https://github.com/nocobase/nocobase/pull/6549)) bởi @katherinehhh
- **[Quy trình công việc]**

  - Đảm bảo khóa quy trình công việc được tạo trước khi lưu ([#6567](https://github.com/nocobase/nocobase/pull/6567)) bởi @mytharcher
  - Sửa lỗi xảy ra khi cấu hình tùy chọn tự động xóa ([#6560](https://github.com/nocobase/nocobase/pull/6560)) bởi @mytharcher
- **[Biểu mẫu công khai]** Vấn đề với tiêu đề trang biểu mẫu công khai hiển thị 'Đang tải...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) bởi @katherinehhh
- **[Di động]** Điều chỉnh kích thước phông chữ hiển thị trên điện thoại thành 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) bởi @zhangzhonghe
- **[Biến và bí mật]** Thiếu nút lọc biểu tượng, số lượng bộ lọc không hiển thị và dữ liệu không làm mới sau khi lọc khi chuyển trang ([#6568](https://github.com/nocobase/nocobase/pull/6568)) bởi @katherinehhh
- **[Xác thực]** Vấn đề bản địa hóa cho các trường của trang đăng ký ([#6556](https://github.com/nocobase/nocobase/pull/6556)) bởi @2013xile
- **[Tài liệu API]** Trang tài liệu API không thể cuộn ([#6566](https://github.com/nocobase/nocobase/pull/6566)) bởi @zhangzhonghe
- **[Quy trình công việc: Sự kiện sau hành động]** Nhiều bản ghi trong hành động hàng loạt sẽ kích hoạt nhiều lần ([#6559](https://github.com/nocobase/nocobase/pull/6559)) bởi @mytharcher
- **[Khối: mẫu]**

  - Các quy tắc liên kết của khối biểu mẫu chưa được đồng bộ hóa chính xác từ mẫu ([#6550](https://github.com/nocobase/nocobase/pull/6550)) bởi @gchust
  - Menu lưu dưới dạng mẫu trùng lặp trong khối chi tiết ([#6558](https://github.com/nocobase/nocobase/pull/6558)) bởi @gchust
- **[Quy trình công việc: Phê duyệt]** Sửa giá trị biểu mẫu phê duyệt để gửi bởi @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Ngày phát hành: 2025-03-27*

#### 🐛 Sửa lỗi

- **[Khối: Biểu mẫu nhiều bước]** Nút gửi có cùng màu ở trạng thái mặc định và được đánh dấu bởi @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Ngày phát hành: 2025-03-28*

#### 🎉 Tính năng mới

- **[Khối: Bảng hành động]** thêm một callback onScanSuccess để xử lý các lần quét thành công và thoát khỏi giao diện camera. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) bởi @sheldon66

#### 🚀 Cải tiến

- **[Trình quản lý tác vụ bất đồng bộ]** tối ưu hóa các nút nhập/xuất trong Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) bởi @chenos
- **[Hành động: Xuất bản ghi Pro]** tối ưu hóa các nút nhập/xuất trong Pro bởi @katherinehhh
- **[Trình quản lý di chuyển]** cho phép bỏ qua sao lưu và khôi phục tự động cho việc di chuyển bởi @gchust

#### 🐛 Sửa lỗi

- **[client]** Xung đột liên kết giữa các trường liên kết cùng tên trong các bảng phụ khác nhau trong cùng một biểu mẫu ([#6577](https://github.com/nocobase/nocobase/pull/6577)) bởi @katherinehhh
- **[Lịch]** Thiếu dữ liệu vào các ngày ranh giới trong chế độ xem lịch hàng tuần ([#6587](https://github.com/nocobase/nocobase/pull/6587)) bởi @katherinehhh
- **[Kiểm soát truy cập]** Gán vai trò hiện tại không chính xác trong quá trình đăng nhập ([#6581](https://github.com/nocobase/nocobase/pull/6581)) bởi @aaaaaajie
- **[Hành động: Chỉnh sửa hàng loạt]** Nhấp vào nút chỉnh sửa hàng loạt, cấu hình cửa sổ bật lên, sau đó mở lại, cửa sổ bật lên bị trống ([#6578](https://github.com/nocobase/nocobase/pull/6578)) bởi @zhangzhonghe
- **[Khối: Biểu mẫu nhiều bước]** Đã sửa lỗi đặt lại biểu mẫu không hiệu quả khi trường được liên kết với trường khác bởi @jiannx
- **[Quy trình công việc: Phê duyệt]** Sửa cấu hình nút phê duyệt không chính xác sau khi sơ đồ thay đổi bởi @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Ngày phát hành: 2025-04-01*

#### 🚀 Cải tiến

- **[database]**

  - Thêm tùy chọn trim cho trường văn bản ([#6603](https://github.com/nocobase/nocobase/pull/6603)) bởi @mytharcher
  - Thêm tùy chọn trim cho trường chuỗi ([#6565](https://github.com/nocobase/nocobase/pull/6565)) bởi @mytharcher
- **[client]** hỗ trợ cấu hình hiển thị dấu hai chấm trong nhãn trường biểu mẫu dựa trên bố cục ([#6561](https://github.com/nocobase/nocobase/pull/6561)) bởi @katherinehhh
- **[Trình quản lý tệp]** Thêm tùy chọn trim cho các trường văn bản của bộ sưu tập lưu trữ ([#6604](https://github.com/nocobase/nocobase/pull/6604)) bởi @mytharcher
- **[Quy trình công việc]** Cải thiện mã ([#6589](https://github.com/nocobase/nocobase/pull/6589)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]** Hỗ trợ sử dụng mẫu khối cho biểu mẫu quy trình phê duyệt bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]**

  - Tránh thay đổi trường "datetimeNoTz" khi giá trị không thay đổi trong bản ghi cập nhật ([#6588](https://github.com/nocobase/nocobase/pull/6588)) bởi @mytharcher
  - Khi xóa bản ghi một-nhiều, cả `filter` và `filterByTk` đều được truyền và `filter` bao gồm trường liên kết, thì `filterByTk` bị bỏ qua ([#6606](https://github.com/nocobase/nocobase/pull/6606)) bởi @2013xile
- **[client]**

  - Sửa thuộc tính `disabled` không hoạt động khi `SchemaInitializerItem` có `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) bởi @mytharcher
  - Vấn đề xếp tầng: 'Giá trị của xxx không thể ở định dạng mảng' khi xóa và chọn lại ([#6585](https://github.com/nocobase/nocobase/pull/6585)) bởi @katherinehhh
  - Trường liên kết (chọn) hiển thị N/A khi hiển thị các trường bộ sưu tập liên quan ([#6582](https://github.com/nocobase/nocobase/pull/6582)) bởi @katherinehhh
  - Các nút gửi và làm mới không hiển thị chế độ chỉ biểu tượng một cách chính xác ([#6592](https://github.com/nocobase/nocobase/pull/6592)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Quyền xem bao gồm danh sách và lấy ([#6607](https://github.com/nocobase/nocobase/pull/6607)) bởi @chenos
- **[Xác thực]** Gán token trong `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) bởi @2013xile
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Vấn đề lọc theo các trường trong bộ sưu tập liên kết với trường nhiều-nhiều (mảng) ([#6596](https://github.com/nocobase/nocobase/pull/6596)) bởi @2013xile
- **[Quy trình công việc]** Sửa tùy chọn đồng bộ hiển thị không chính xác ([#6595](https://github.com/nocobase/nocobase/pull/6595)) bởi @mytharcher
- **[Khối: Bản đồ]** Xác thực quản lý bản đồ không được vượt qua với đầu vào là khoảng trắng ([#6575](https://github.com/nocobase/nocobase/pull/6575)) bởi @katherinehhh
- **[Xác thực: OIDC]** Xảy ra chuyển hướng không chính xác khi đường dẫn callback là chuỗi 'null' bởi @2013xile
- **[Quy trình công việc: Phê duyệt]**

  - Sửa biến client để sử dụng trong biểu mẫu phê duyệt bởi @mytharcher
  - Sửa chế độ nhánh khi `endOnReject` được cấu hình là `true` bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Ngày phát hành: 2025-03-25*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình biến sau khi gửi, cho phép chuyển hướng với ID dữ liệu hiện tại ([#6465](https://github.com/nocobase/nocobase/pull/6465)) bởi @katherinehhh
- **[Trường bộ sưu tập: Markdown(Vditor)]** Vditor hỗ trợ S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) bởi @zhangzhonghe

#### 🚀 Cải tiến

- **[client]**

  - Chỉ hỗ trợ xem trước tệp văn bản thuần túy ([#6563](https://github.com/nocobase/nocobase/pull/6563)) bởi @mytharcher
  - Tối ưu thông báo lỗi 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) bởi @chenos
  - Hạn chế các hành động khả dụng cho các thuộc tính trường khác nhau trong quy tắc liên kết ([#6548](https://github.com/nocobase/nocobase/pull/6548)) bởi @katherinehhh
- **[Quy trình công việc]** Tách các cột đã thực thi thành các bảng thống kê ([#6534](https://github.com/nocobase/nocobase/pull/6534)) bởi @mytharcher
- **[Di động]** Điều chỉnh kiểu của cửa sổ bật lên thông báo cho thiết bị di động ([#6557](https://github.com/nocobase/nocobase/pull/6557)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Sequence]** hỗ trợ đặt sequence làm trường tiêu đề cho khối lịch ([#6562](https://github.com/nocobase/nocobase/pull/6562)) bởi @katherinehhh
- **[Trình quản lý tệp]** Điều chỉnh API `getFileData` của bộ lưu trữ ([#6553](https://github.com/nocobase/nocobase/pull/6553)) bởi @mytharcher
- **[Kiểm soát truy cập]** Tối ưu hóa thứ tự và kiểu chuyển đổi vai trò ([#6555](https://github.com/nocobase/nocobase/pull/6555)) bởi @aaaaaajie
- **[Biểu mẫu công khai]** đặt tiêu đề trang biểu mẫu công khai thành tiêu đề đã cấu hình khi tạo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) bởi @katherinehhh
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Tách các cột đã thực thi thành các bảng thống kê bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Hỗ trợ bỏ qua trình xác thực trong cài đặt bởi @mytharcher
  - Tách các cột đã thực thi thành các bảng thống kê bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Các phiên bản trình duyệt cũ hơn sẽ hiển thị trang trống ([#6571](https://github.com/nocobase/nocobase/pull/6571)) bởi @zhangzhonghe
  - Không thể mở một modal khác bên trong modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) bởi @zhangzhonghe
  - Tùy chọn 'Ellipsis overflow content' yêu cầu làm mới trang để trạng thái bật/tắt có hiệu lực ([#6520](https://github.com/nocobase/nocobase/pull/6520)) bởi @zhangzhonghe
  - Vấn đề hiển thị trường ngày trong bộ lọc phạm vi dữ liệu ([#6564](https://github.com/nocobase/nocobase/pull/6564)) bởi @katherinehhh
  - Menu trên cùng của trang hiển thị trống ([#6551](https://github.com/nocobase/nocobase/pull/6551)) bởi @zhangzhonghe
  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust
  - Không thể sử dụng biến 'Người dùng hiện tại' khi thêm trang liên kết ([#6536](https://github.com/nocobase/nocobase/pull/6536)) bởi @zhangzhonghe
  - Gán trường với giá trị null không hiệu quả ([#6549](https://github.com/nocobase/nocobase/pull/6549)) bởi @katherinehhh
  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust
  - Xóa tùy chọn 'Cho phép chọn nhiều' khỏi trường chọn một trong biểu mẫu lọc ([#6515](https://github.com/nocobase/nocobase/pull/6515)) bởi @zhangzhonghe
  - Liên kết phạm vi dữ liệu của trường quan hệ không hiệu quả ([#6530](https://github.com/nocobase/nocobase/pull/6530)) bởi @zhangzhonghe
  - Lỗi lệnh `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) bởi @gchust
  - Vấn đề kéo và thả nút hàng trong bảng ([#6544](https://github.com/nocobase/nocobase/pull/6544)) bởi @katherinehhh
- **[Di động]** Điều chỉnh kích thước phông chữ hiển thị trên điện thoại thành 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) bởi @zhangzhonghe
- **[Quy trình công việc]**

  - Sửa lỗi xảy ra khi cấu hình tùy chọn tự động xóa ([#6560](https://github.com/nocobase/nocobase/pull/6560)) bởi @mytharcher
  - Đảm bảo khóa quy trình công việc được tạo trước khi lưu ([#6567](https://github.com/nocobase/nocobase/pull/6567)) bởi @mytharcher
- **[Biến và bí mật]** Thiếu nút lọc biểu tượng, số lượng bộ lọc không hiển thị và dữ liệu không làm mới sau khi lọc khi chuyển trang ([#6568](https://github.com/nocobase/nocobase/pull/6568)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Vấn đề với tiêu đề trang biểu mẫu công khai hiển thị 'Đang tải...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) bởi @katherinehhh
- **[Tài liệu API]** Trang tài liệu API không thể cuộn ([#6566](https://github.com/nocobase/nocobase/pull/6566)) bởi @zhangzhonghe
- **[Quy trình công việc: Sự kiện sau hành động]** Nhiều bản ghi trong hành động hàng loạt sẽ kích hoạt nhiều lần ([#6559](https://github.com/nocobase/nocobase/pull/6559)) bởi @mytharcher
- **[Khối: mẫu]**

  - Menu lưu dưới dạng mẫu trùng lặp trong khối chi tiết ([#6558](https://github.com/nocobase/nocobase/pull/6558)) bởi @gchust
  - Các quy tắc liên kết của khối biểu mẫu chưa được đồng bộ hóa chính xác từ mẫu ([#6550](https://github.com/nocobase/nocobase/pull/6550)) bởi @gchust
- **[Xác thực]** Vấn đề bản địa hóa cho các trường của trang đăng ký ([#6556](https://github.com/nocobase/nocobase/pull/6556)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Không thể tải xuống các tệp được mã hóa UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) bởi @2013xile
- **[Bộ sưu tập: Cây]** Vấn đề di chuyển cho plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) bởi @2013xile
- **[Khối: Biểu mẫu nhiều bước]** Nút gửi có cùng màu ở trạng thái mặc định và được đánh dấu bởi @jiannx
- **[Quy trình công việc: Phê duyệt]** Sửa giá trị biểu mẫu phê duyệt để gửi bởi @mytharcher
