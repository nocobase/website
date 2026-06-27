---
title: "Cập nhật hàng tuần của NocoBase: Hỗ trợ điền trường nhập liệu qua quét mã QR"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ sao chép nội dung trường văn bản bằng một cú nhấp chuột, cài đặt khoảng thời gian đồng bộ email, v.v."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*Ngày phát hành: 2025-06-18*

#### 🚀 Cải tiến

- **[client]** Tự động ẩn thanh tác vụ của khối thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe
- **[Xác thực]** Xóa các tùy chọn trình xác thực khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[database]** hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos
- **[client]**

  - Biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh
  - Điều kiện kiểu trên các trường cột của bảng con không được áp dụng chính xác ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh
  - Lọc qua các trường của bộ sưu tập quan hệ trong biểu mẫu lọc không có hiệu lực ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile
- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*Ngày phát hành: 2025-06-17*

#### 🚀 Cải tiến

- **[client]** Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038
- **[Quy trình công việc: Phê duyệt]** Thêm tùy chọn trường bổ sung cho danh sách người được chỉ định lại bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh
  - Mất dấu thập phân sau khi chuyển thành phần số tiền từ mặt nạ sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh
  - Hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh
- **[Trường bộ sưu tập: Chuỗi]** Sửa tính toán chuỗi bigint dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Lỗi lệnh không xác định khi khôi phục bản sao lưu MySQL trên nền tảng windows bởi @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*Ngày phát hành: 2025-06-16*

#### 🚀 Cải tiến

- **[client]** Thêm tùy chọn "trống" và "không trống" vào quy tắc liên kết trường hộp kiểm ([#7073](https://github.com/nocobase/nocobase/pull/7073)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]** Sau khi tạo trường quan hệ ngược, tùy chọn "Tạo trường quan hệ ngược trong bảng dữ liệu mục tiêu" trong cài đặt trường liên kết đã không được chọn. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) bởi @aaaaaajie
- **[Trình quản lý nguồn dữ liệu]** Các thay đổi về phạm vi hiện có hiệu lực ngay lập tức cho tất cả các vai trò liên quan. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) bởi @aaaaaajie
- **[Kiểm soát truy cập]** Đã sửa lỗi ứng dụng chặn truy cập khi không có vai trò mặc định ([#7059](https://github.com/nocobase/nocobase/pull/7059)) bởi @aaaaaajie
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa biến của url chuyển hướng không được phân tích cú pháp bởi @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*Ngày phát hành: 2025-06-15*

#### 🎉 Tính năng mới

- **[Sao chép văn bản]** Hỗ trợ sao chép nội dung trường văn bản bằng một cú nhấp chuột ([#6954](https://github.com/nocobase/nocobase/pull/6954)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[client]**

  - Bộ chọn trường liên kết không xóa dữ liệu đã chọn sau khi gửi ([#7067](https://github.com/nocobase/nocobase/pull/7067)) bởi @katherinehhh
  - Sửa gợi ý kích thước tải lên ([#7057](https://github.com/nocobase/nocobase/pull/7057)) bởi @mytharcher
- **[server]** Không thể đọc các thuộc tính của undefined (đang đọc 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) bởi @chenos
- **[Quy trình công việc: Nút vòng lặp]** Sửa lỗi nhánh vòng lặp chạy khi điều kiện không được thỏa mãn ([#7063](https://github.com/nocobase/nocobase/pull/7063)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Sửa lỗi thống kê việc cần làm không được cập nhật khi thực thi bị hủy bởi @mytharcher
  - Sửa biến kích hoạt khi lọc theo loại bởi @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*Ngày phát hành: 2025-06-12*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi quy tắc liên kết gây ra vòng lặp vô hạn ([#7050](https://github.com/nocobase/nocobase/pull/7050)) bởi @zhangzhonghe
  - Sửa: sử dụng optional chaining để từ chối yêu cầu một cách an toàn trong APIClient khi handler có thể không được xác định ([#7054](https://github.com/nocobase/nocobase/pull/7054)) bởi @sheldon66
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Hiển thị không chính xác trường ngày giữa trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh
- **[Tài liệu API]** Các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt
- **[Hành động: Nhập bản ghi]** Đã sửa lỗi nhập xlsx để hạn chế các trường vùng văn bản chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*Ngày phát hành: 2025-06-18*

#### 🚀 Cải tiến

- **[client]**

  - Tự động ẩn thanh tác vụ của khối thẻ lưới khi trống ([#7069](https://github.com/nocobase/nocobase/pull/7069)) bởi @zhangzhonghe
  - Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038
- **[Xác thực]** Xóa các tùy chọn trình xác thực khỏi phản hồi của API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Thông báo xác thực bắt buộc trong bảng con vẫn tồn tại khi chuyển trang ([#7080](https://github.com/nocobase/nocobase/pull/7080)) bởi @katherinehhh
  - Điều kiện kiểu trên các trường cột của bảng con không được áp dụng chính xác ([#7083](https://github.com/nocobase/nocobase/pull/7083)) bởi @katherinehhh
  - Mất dấu thập phân sau khi chuyển thành phần số tiền từ mặt nạ sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh
  - Biến tham số truy vấn URL không hoạt động trong giá trị mặc định của trường biểu mẫu công khai ([#7084](https://github.com/nocobase/nocobase/pull/7084)) bởi @katherinehhh
  - Lọc qua các trường của bộ sưu tập quan hệ trong biểu mẫu lọc không có hiệu lực ([#7070](https://github.com/nocobase/nocobase/pull/7070)) bởi @zhangzhonghe
  - Hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh
- **[database]** hỗ trợ cập nhật liên kết trong updateOrCreate và firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) bởi @chenos
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Cập nhật trường nhiều-nhiều (mảng) gây ra lỗi khi trường `updatedBy` tồn tại ([#7089](https://github.com/nocobase/nocobase/pull/7089)) bởi @2013xile
- **[Trường bộ sưu tập: Chuỗi]** Sửa tính toán chuỗi bigint dựa trên chuỗi ([#7079](https://github.com/nocobase/nocobase/pull/7079)) bởi @mytharcher
- **[Biểu mẫu công khai]** Biểu mẫu công khai: Sửa lỗi truy cập trái phép khi gửi biểu mẫu ([#7085](https://github.com/nocobase/nocobase/pull/7085)) bởi @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*Ngày phát hành: 2025-06-16*

#### 🚀 Cải tiến

- **[client]** Thêm tùy chọn "trống" và "không trống" vào quy tắc liên kết trường hộp kiểm ([#7073](https://github.com/nocobase/nocobase/pull/7073)) bởi @katherinehhh
- **[Quy trình công việc: Phê duyệt]** Thêm tùy chọn trường bổ sung cho danh sách người được chỉ định lại bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Trình quản lý sao lưu]** Lỗi lệnh không xác định khi khôi phục bản sao lưu MySQL trên nền tảng windows bởi @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*Ngày phát hành: 2025-06-15*

#### 🎉 Tính năng mới

- **[Sao chép văn bản]** Hỗ trợ sao chép nội dung trường văn bản bằng một cú nhấp chuột ([#6954](https://github.com/nocobase/nocobase/pull/6954)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[server]** Không thể đọc các thuộc tính của undefined (đang đọc 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) bởi @chenos
- **[client]**

  - Bộ chọn trường liên kết không xóa dữ liệu đã chọn sau khi gửi ([#7067](https://github.com/nocobase/nocobase/pull/7067)) bởi @katherinehhh
  - Sau khi tạo trường quan hệ ngược, tùy chọn "Tạo trường quan hệ ngược trong bảng dữ liệu mục tiêu" trong cài đặt trường liên kết đã không được chọn. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) bởi @aaaaaajie
- **[Kiểm soát truy cập]** Đã sửa lỗi ứng dụng chặn truy cập khi không có vai trò mặc định ([#7059](https://github.com/nocobase/nocobase/pull/7059)) bởi @aaaaaajie
- **[Quy trình công việc: Nút vòng lặp]** Sửa lỗi nhánh vòng lặp chạy khi điều kiện không được thỏa mãn ([#7063](https://github.com/nocobase/nocobase/pull/7063)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Các thay đổi về phạm vi hiện có hiệu lực ngay lập tức cho tất cả các vai trò liên quan. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) bởi @aaaaaajie
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa biến của url chuyển hướng không được phân tích cú pháp bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]**

  - Sửa biến kích hoạt khi lọc theo loại bởi @mytharcher
  - Sửa lỗi thống kê việc cần làm không được cập nhật khi thực thi bị hủy bởi @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*Ngày phát hành: 2025-06-12*

#### 🎉 Tính năng mới

- **[Nhật ký kiểm toán]** Thêm biến môi trường `AUDIT_LOGGER_TRANSPORT` để kiểm soát phương thức xuất nhật ký kiểm toán bởi @2013xile

#### 🚀 Cải tiến

- **[client]** Cấm di chuyển menu nhóm vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) bởi @zhangzhonghe
- **[Lịch]** hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh
- **[Trường bộ sưu tập: Markdown(Vditor)]** hỗ trợ nhấp vào hình ảnh để phóng to trong chế độ xem trước Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) bởi @katherinehhh
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều (nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie
- **[Bình luận]** hỗ trợ phân trang trong khối bình luận bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh
  - Sửa lỗi quy tắc liên kết gây ra vòng lặp vô hạn ([#7050](https://github.com/nocobase/nocobase/pull/7050)) bởi @zhangzhonghe
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh
  - Sửa gợi ý kích thước tải lên ([#7057](https://github.com/nocobase/nocobase/pull/7057)) bởi @mytharcher
  - Sửa: sử dụng optional chaining để từ chối yêu cầu một cách an toàn trong APIClient khi handler có thể không được xác định ([#7054](https://github.com/nocobase/nocobase/pull/7054)) bởi @sheldon66
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh
  - Sửa lỗi trường không hiển thị trong mẫu khối do các yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe
  - Các tùy chọn trường chọn không hoạt động trong quy tắc liên kết biểu mẫu lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh
  - Quy tắc xác thực biểu mẫu lọc làm cho nút lọc trở nên không hiệu quả ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe
  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) bởi @zhangzhonghe
  - Sửa lỗi tham số khối lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) bởi @zhangzhonghe
  - Đã giải quyết sự cố khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) bởi @aaaaaajie
  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) bởi @zhangzhonghe
- **[database]** sửa: thêm trường creator và updater bị thiếu trong import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) bởi @aaaaaajie
- **[undefined]** Xóa phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API bởi @aaaaaajie
- **[Hành động: Nhập bản ghi]**

  - Đã sửa lỗi nhập xlsx để hạn chế các trường vùng văn bản chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie
  - Sửa lỗi nhập bảng con khi có các trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie
  - Đã sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi nhập dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) bởi @aaaaaajie
- **[Trực quan hóa dữ liệu]**

  - Hiển thị không chính xác trường ngày giữa trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh
  - Các trường nhóm hộp kiểm trong biểu đồ sẽ hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile
- **[Tài liệu API]** Các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt
- **[Quy trình công việc]**

  - Sửa lỗi `toJSON()` gây ra lỗi trong bộ kích hoạt lịch trình ([#7037](https://github.com/nocobase/nocobase/pull/7037)) bởi @mytharcher
  - Sửa lỗi xảy ra trong hành động thực thi thủ công khi bộ kích hoạt không được cấu hình chính xác ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher
  - Sửa lỗi giao diện người dùng khi quy trình công việc không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) bởi @mytharcher
  - Sửa lỗi sự kiện bộ sưu tập ở chế độ tạo hoặc cập nhật không kích hoạt khi tạo mà không có trường thay đổi ([#7015](https://github.com/nocobase/nocobase/pull/7015)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Xóa phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) bởi @aaaaaajie
- **[Di động]** Tối ưu hóa các vấn đề về độ trễ của cửa sổ bật lên trên di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) bởi @zhangzhonghe
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm với điều kiện. bởi @aaaaaajie
- **[Quy trình công việc: JavaScript]** Sửa require cho đường dẫn tương đối bởi @mytharcher
- **[In mẫu]** Sửa lỗi phân tích cú pháp quyền và thêm kiểm tra không tìm thấy dữ liệu. bởi @sheldon66
- **[Quy trình công việc: Phê duyệt]**

  - Để tránh lỗi trường không xác định bởi @mytharcher
  - Sửa lỗi xảy ra khi quy trình công việc bị xóa bởi @mytharcher
  - Sửa biến kích hoạt bởi @mytharcher
  - Tải lại liên kết tệp từ ảnh chụp nhanh để tránh URL hết hạn bởi @mytharcher
  - Sửa lỗi API khi làm mới trang chi tiết bởi @mytharcher
- **[WeCom]** Thêm kiểm tra đường dẫn callback trong middleware cổng bởi @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*Ngày phát hành: 2025-06-17*

#### 🎉 Tính năng mới

- **[Sao chép văn bản]** Hỗ trợ sao chép nội dung trường văn bản bằng một cú nhấp chuột ([#6954](https://github.com/nocobase/nocobase/pull/6954)) bởi @zhangzhonghe
- **[Trình quản lý email]** hỗ trợ xóa email bởi @jiannx

#### 🚀 Cải tiến

- **[client]**

  - Thêm tùy chọn "trống" và "không trống" vào quy tắc liên kết trường hộp kiểm ([#7073](https://github.com/nocobase/nocobase/pull/7073)) bởi @katherinehhh
  - Chiều rộng vùng chứa logo thích ứng với loại nội dung (cố định 168px cho hình ảnh, tự động cho văn bản) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) bởi @Cyx649312038
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện hiệu suất tạo tác vụ trong quá trình xuất ([#7078](https://github.com/nocobase/nocobase/pull/7078)) bởi @aaaaaajie
- **[Quy trình công việc: Phê duyệt]** Thêm tùy chọn trường bổ sung cho danh sách người được chỉ định lại bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Mất dấu thập phân sau khi chuyển thành phần số tiền từ mặt nạ sang inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) bởi @katherinehhh
  - Hiển thị Markdown (Vditor) không chính xác trong bảng con ([#7074](https://github.com/nocobase/nocobase/pull/7074)) bởi @katherinehhh
  - Sau khi tạo trường quan hệ ngược, tùy chọn "Tạo trường quan hệ ngược trong bảng dữ liệu mục tiêu" trong cài đặt trường liên kết đã không được chọn. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) bởi @aaaaaajie
  - Bộ chọn trường liên kết không xóa dữ liệu đã chọn sau khi gửi ([#7067](https://github.com/nocobase/nocobase/pull/7067)) bởi @katherinehhh
- **[server]** Không thể đọc các thuộc tính của undefined (đang đọc 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) bởi @chenos
- **[Kiểm soát truy cập]** Đã sửa lỗi ứng dụng chặn truy cập khi không có vai trò mặc định ([#7059](https://github.com/nocobase/nocobase/pull/7059)) bởi @aaaaaajie
- **[Trình quản lý nguồn dữ liệu]** Các thay đổi về phạm vi hiện có hiệu lực ngay lập tức cho tất cả các vai trò liên quan. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) bởi @aaaaaajie
- **[Quy trình công việc: Nút vòng lặp]** Sửa lỗi nhánh vòng lặp chạy khi điều kiện không được thỏa mãn ([#7063](https://github.com/nocobase/nocobase/pull/7063)) bởi @mytharcher
- **[Quy trình công việc: Sự kiện hành động tùy chỉnh]** Sửa biến của url chuyển hướng không được phân tích cú pháp bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]** Sửa lỗi thống kê việc cần làm không được cập nhật khi thực thi bị hủy bởi @mytharcher
- **[Trình quản lý email]** Xóa email thất bại bởi @jiannx
- **[Trình quản lý sao lưu]** Lỗi lệnh không xác định khi khôi phục bản sao lưu MySQL trên nền tảng windows bởi @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*Ngày phát hành: 2025-06-13*

#### 🎉 Tính năng mới

- **[Trình quản lý email]** hỗ trợ cài đặt khoảng thời gian đồng bộ email bởi @jiannx

#### 🐛 Sửa lỗi

- **[database]** làm cho toán tử eq cho các trường chuỗi tương thích với kiểu số ([#7062](https://github.com/nocobase/nocobase/pull/7062)) bởi @chenos
- **[client]** Sửa gợi ý kích thước tải lên ([#7057](https://github.com/nocobase/nocobase/pull/7057)) bởi @mytharcher
- **[Quy trình công việc: Phê duyệt]** Sửa biến kích hoạt khi lọc theo loại bởi @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*Ngày phát hành: 2025-06-12*

#### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ điền trường đầu vào thông qua quét mã QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) bởi @katherinehhh
  - hỗ trợ bản địa hóa cho nội dung khối Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) bởi @katherinehhh
  - Cấm di chuyển menu nhóm vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Nhiều-nhiều (mảng)]** Lỗi liên quan đến quyền khi hiển thị trường nhiều-nhiều (nhiều) trong bảng dữ liệu. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) bởi @aaaaaajie
- **[Lịch]** hỗ trợ thiết lập ngày bắt đầu tuần trong khối lịch ([#7032](https://github.com/nocobase/nocobase/pull/7032)) bởi @katherinehhh
- **[Trường bộ sưu tập: Markdown(Vditor)]** hỗ trợ nhấp vào hình ảnh để phóng to trong chế độ xem trước Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7052](https://github.com/nocobase/nocobase/pull/7052)) bởi @katherinehhh
  - Sửa lỗi trường không hiển thị trong mẫu khối do các yêu cầu API trùng lặp ([#6985](https://github.com/nocobase/nocobase/pull/6985)) bởi @zhangzhonghe
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh
  - Quy tắc xác thực biểu mẫu lọc làm cho nút lọc trở nên không hiệu quả ([#6975](https://github.com/nocobase/nocobase/pull/6975)) bởi @zhangzhonghe
  - Sự cố tự động đóng khi cấu hình trường trong biểu mẫu bật lên thứ cấp ([#7042](https://github.com/nocobase/nocobase/pull/7042)) bởi @katherinehhh
  - Các tùy chọn trường chọn không hoạt động trong quy tắc liên kết biểu mẫu lọc ([#7035](https://github.com/nocobase/nocobase/pull/7035)) bởi @katherinehhh
  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) bởi @zhangzhonghe
  - Sửa lỗi tham số khối lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) bởi @zhangzhonghe
  - Sửa lỗi dữ liệu người dùng hiện tại trống ([#7016](https://github.com/nocobase/nocobase/pull/7016)) bởi @zhangzhonghe
  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) bởi @zhangzhonghe
  - Đã giải quyết sự cố khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) bởi @aaaaaajie
  - Sử dụng phạm vi biến độc lập cho mỗi trường ([#7012](https://github.com/nocobase/nocobase/pull/7012)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]**

  - Hiển thị không chính xác trường ngày giữa trong bộ lọc biểu đồ ([#7051](https://github.com/nocobase/nocobase/pull/7051)) bởi @katherinehhh
  - Các trường nhóm hộp kiểm trong biểu đồ sẽ hiển thị nhãn thay vì giá trị thô ([#7033](https://github.com/nocobase/nocobase/pull/7033)) bởi @2013xile
- **[Hành động: Nhập bản ghi]**

  - Đã sửa lỗi nhập xlsx để hạn chế các trường vùng văn bản chấp nhận dữ liệu không phải định dạng chuỗi ([#7049](https://github.com/nocobase/nocobase/pull/7049)) bởi @aaaaaajie
  - Sửa lỗi nhập bảng con khi có các trường quan hệ ([#7039](https://github.com/nocobase/nocobase/pull/7039)) bởi @aaaaaajie
  - Đã sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi nhập dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) bởi @aaaaaajie
- **[Tài liệu API]** Các plugin không chính thức của NocoBase không hiển thị tài liệu API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) bởi @chenzhizdt
- **[Quy trình công việc]**

  - Sửa lỗi `toJSON()` gây ra lỗi trong bộ kích hoạt lịch trình ([#7037](https://github.com/nocobase/nocobase/pull/7037)) bởi @mytharcher
  - Sửa lỗi xảy ra trong hành động thực thi thủ công khi bộ kích hoạt không được cấu hình chính xác ([#7036](https://github.com/nocobase/nocobase/pull/7036)) bởi @mytharcher
  - Sửa lỗi giao diện người dùng khi quy trình công việc không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) bởi @mytharcher
  - Sửa lỗi sự kiện bộ sưu tập ở chế độ tạo hoặc cập nhật không kích hoạt khi tạo mà không có trường thay đổi ([#7015](https://github.com/nocobase/nocobase/pull/7015)) bởi @mytharcher
- **[Di động]** Tối ưu hóa các vấn đề về độ trễ của cửa sổ bật lên trên di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) bởi @zhangzhonghe
- **[Trình quản lý nguồn dữ liệu]** Xóa phụ thuộc cơ sở dữ liệu cho possibleTypes, thực thi cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) bởi @aaaaaajie
- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm với điều kiện. bởi @aaaaaajie
