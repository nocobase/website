---
title: "Cập nhật hàng tuần của NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật trong tuần này bao gồm: hỗ trợ biến tổng hợp tùy chỉnh, độ lệch tùy chỉnh trong bộ lọc trường ngày, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Ngày phát hành: 2025-05-23*

#### 🚀 Cải tiến

- **[undefined]** Xây dựng image docker đầy đủ ([#6898](https://github.com/nocobase/nocobase/pull/6898)) bởi @chenos
- **[client]** Tối ưu vấn đề trang ngày càng chậm khi sử dụng ([#6888](https://github.com/nocobase/nocobase/pull/6888)) bởi @zhangzhonghe
- **[Lịch]** hỗ trợ nút làm mới có thể cấu hình trong block lịch ([#6920](https://github.com/nocobase/nocobase/pull/6920)) bởi @katherinehhh
- **[Quy trình: Sự kiện hành động tùy chỉnh]** Sửa ngôn ngữ en-US dựa trên khóa zh-CN bởi @mytharcher
- **[Quy trình: Phê duyệt]** Hỗ trợ thực hiện tất cả công việc trong trung tâm tác vụ quy trình bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - lỗi hiển thị do định dạng style không hợp lệ khi thêm trường liên kết ([#6903](https://github.com/nocobase/nocobase/pull/6903)) bởi @katherinehhh
  - kiểm tra giá trị rỗng không chính xác cho trường liên kết toMany trong quy tắc liên kết ([#6905](https://github.com/nocobase/nocobase/pull/6905)) bởi @katherinehhh
- **[Trường bộ sưu tập: Markdown(Vditor)]** trường markdown (Vditor) không thích ứng với chủ đề ([#6919](https://github.com/nocobase/nocobase/pull/6919)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Tránh cập nhật sai các tiền tố đường dẫn tương tự trong quá trình cập nhật đường dẫn ([#6913](https://github.com/nocobase/nocobase/pull/6913)) bởi @2013xile
- **[Quản lý tệp]**

  - Sửa quy tắc khớp xem trước ([#6902](https://github.com/nocobase/nocobase/pull/6902)) bởi @mytharcher
  - Sửa lỗi injection bộ sưu tập client và tham số tải lên ([#6909](https://github.com/nocobase/nocobase/pull/6909)) bởi @mytharcher
  - Sửa URL xem trước trên các tệp không phải hình ảnh ([#6889](https://github.com/nocobase/nocobase/pull/6889)) bởi @mytharcher
- **[Quy trình: nút gửi thư]** Xử lý trường 'to' không xác định và cải thiện xử lý người nhận email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) bởi @sheldon66
- **[Quy trình: Sự kiện hành động tùy chỉnh]**

  - Sửa lỗi nút thực hiện không chính xác sau vài lần nhấp bởi @mytharcher
  - Sửa lỗi trình xử lý lỗi không thể khớp theo lớp bởi @mytharcher
- **[Quy trình: Phê duyệt]** Sửa lỗi tính toán appends liên kết bởi @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Ngày phát hành: 2025-05-27*

#### 🎉 Tính năng mới

- **[Hành động: Nhập bản ghi Pro]**
  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi cài đặt nhập bởi @aaaaaajie
  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi cài đặt nhập bởi @aaaaaajie

#### 🚀 Cải tiến

- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh
  - cài đặt chiều cao block không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh
- **[undefined]** Sử dụng Node 20 do gói commander yêu cầu ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher
- **[database]** Sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong liên kết nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie
- **[Hành động: Xuất bản ghi]** Sửa lỗi các mối quan hệ lồng nhau không xuất được chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie
- **[Trình quản lý nguồn dữ liệu]** Giải quyết vấn đề sắp xếp kéo và thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos
- **[Tài liệu API]** Thêm thông tin sub-app còn thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết vấn đề hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66
- **[Quy trình: Sự kiện hành động tùy chỉnh]** Tránh lỗi do thứ tự tải plugin bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa url xem trước và tham số tải lên bởi @mytharcher
  - Sửa tham số tải lên trùng lặp bởi @mytharcher
- **[Block: Biểu mẫu nhiều bước]** Sửa kiểu bởi @mytharcher
- **[Quy trình: Phê duyệt]**

  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher
  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Ngày phát hành: 2025-05-28*

#### 🎉 Tính năng mới

- **[undefined]** Hỗ trợ mới cho Gitpod cho phép bạn khởi động môi trường phát triển chỉ với một cú nhấp chuột và nhanh chóng bắt đầu phát triển. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) bởi @kerwin612
- **[Hành động: Nhập bản ghi Pro]**

  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi cài đặt nhập bởi @aaaaaajie
  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi cài đặt nhập bởi @aaaaaajie
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt chiều cao cho trường trình soạn thảo mã bởi @mytharcher
- **[Trình quản lý email]**

  - hỗ trợ đánh dấu email là việc cần làm và thêm ghi chú bởi @jiannx
  - hỗ trợ nhãn và cài đặt kết hợp bởi @jiannx

#### 🚀 Cải tiến

- **[client]**

  - cải thiện kiểu cho thành phần lọc phạm vi ngày ([#6939](https://github.com/nocobase/nocobase/pull/6939)) bởi @katherinehhh
  - Sửa lỗi các điều khiển biểu mẫu ẩn bắt phím tab, cải thiện đáng kể hiệu quả thao tác biểu mẫu ([#6942](https://github.com/nocobase/nocobase/pull/6942)) bởi @kerwin612
  - xác thực các trường bắt buộc trước khi hiển thị hộp thoại xác nhận ([#6931](https://github.com/nocobase/nocobase/pull/6931)) bởi @katherinehhh
  - điều chỉnh hiển thị nội dung tùy chọn bộ lọc ngày ([#6928](https://github.com/nocobase/nocobase/pull/6928)) bởi @katherinehhh
- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - cài đặt hiển thị dấu hai chấm nhãn biểu mẫu không hoạt động ([#6947](https://github.com/nocobase/nocobase/pull/6947)) bởi @katherinehhh
  - Thay đổi kích thước Block bằng cách kéo không hoạt động ([#6944](https://github.com/nocobase/nocobase/pull/6944)) bởi @chenos
  - i18n thành phần gán trường không hoạt động ([#6945](https://github.com/nocobase/nocobase/pull/6945)) bởi @katherinehhh
  - kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh
  - các biến điều kiện lồng nhau trong quy tắc liên kết không hiển thị chính xác ([#6929](https://github.com/nocobase/nocobase/pull/6929)) bởi @katherinehhh
  - cài đặt chiều cao block không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh
  - Sửa lỗi nút sao chép trong cửa sổ bật lên lỗi sao chép ra [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) bởi @kerwin612
  - phân tích biến ngày không chính xác trong giới hạn phạm vi ngày ([#6930](https://github.com/nocobase/nocobase/pull/6930)) bởi @katherinehhh
- **[database]** Sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong liên kết nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie
- **[undefined]** Sử dụng Node 20 do gói commander yêu cầu ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher
- **[Trường bộ sưu tập: Markdown(Vditor)]** vấn đề chiều rộng thành phần trường markdown-vditor sau khi phóng to và thu nhỏ ([#6946](https://github.com/nocobase/nocobase/pull/6946)) bởi @katherinehhh
- **[Tài liệu API]** Thêm thông tin sub-app còn thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết vấn đề hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66
- **[Trình quản lý nguồn dữ liệu]** Giải quyết vấn đề sắp xếp kéo và thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos
- **[Hành động: Xuất bản ghi]** Sửa lỗi các mối quan hệ lồng nhau không xuất được chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie
- **[Quy trình: Sự kiện hành động tùy chỉnh]** Tránh lỗi do thứ tự tải plugin bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa tham số tải lên trùng lặp bởi @mytharcher
  - Sửa url xem trước và tham số tải lên bởi @mytharcher
- **[Block: Biểu mẫu nhiều bước]** Sửa kiểu bởi @mytharcher
- **[Quy trình: Phê duyệt]**

  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher
  - Sửa ngôn ngữ bởi @mytharcher
  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher
- **[Trình quản lý email]**

  - sửa: xóa cột hành động bởi @jiannx
  - sửa lỗi modal thêm ghi chú bởi @jiannx
  - sửa quyền api của bộ sưu tập mailMessageNotes và mailMessageLabels bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Ngày phát hành: 2025-05-28*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến tổng hợp tùy chỉnh ([#6916](https://github.com/nocobase/nocobase/pull/6916)) bởi @zhangzhonghe
  Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** hỗ trợ offset tùy chỉnh trong bộ lọc trường ngày ([#6854](https://github.com/nocobase/nocobase/pull/6854)) bởi @katherinehhh
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt chiều cao cho trường trình soạn thảo mã bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]**

  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi cài đặt nhập bởi @aaaaaajie
  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi cài đặt nhập bởi @aaaaaajie
- **[Biến tùy chỉnh]** Hỗ trợ biến tổng hợp tùy chỉnh bởi @zhangzhonghe
  Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Trình quản lý email]**

  - hỗ trợ đánh dấu email là việc cần làm và thêm ghi chú bởi @jiannx
  - hỗ trợ nhãn và cài đặt kết hợp bởi @jiannx

#### 🚀 Cải tiến

- **[client]** điều chỉnh hiển thị nội dung tùy chọn bộ lọc ngày ([#6928](https://github.com/nocobase/nocobase/pull/6928)) bởi @katherinehhh
- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher
- **[Lịch]** hỗ trợ nút làm mới có thể cấu hình trong block lịch ([#6920](https://github.com/nocobase/nocobase/pull/6920)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]**

  - Tối ưu hiệu suất nhập xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) bởi @aaaaaajie
  - Tối ưu hiệu suất nhập xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) bởi @aaaaaajie
- **[Hành động: Xuất bản ghi]** Tối ưu hiệu suất xuất ra XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) bởi @aaaaaajie
- **[Block: iframe]** cải thiện logic gán biến ngày ([#6828](https://github.com/nocobase/nocobase/pull/6828)) bởi @katherinehhh
- **[Quy trình: Sự kiện hành động tùy chỉnh]** Sửa ngôn ngữ en-US dựa trên khóa zh-CN bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Tối ưu hiệu suất xuất ra XLSX bởi @aaaaaajie
- **[Quy trình: Phê duyệt]** Hỗ trợ thực hiện tất cả công việc trong trung tâm tác vụ quy trình bởi @mytharcher
- **[Trình quản lý email]** triển khai schema sau đó gửi email và hỗ trợ ai bởi @jiannx

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong liên kết nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie
- **[client]**

  - kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh
  - cài đặt chiều cao block không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh
  - các biến điều kiện lồng nhau trong quy tắc liên kết không hiển thị chính xác ([#6929](https://github.com/nocobase/nocobase/pull/6929)) bởi @katherinehhh
  - phân tích biến ngày không chính xác trong giới hạn phạm vi ngày ([#6930](https://github.com/nocobase/nocobase/pull/6930)) bởi @katherinehhh
  - kiểm tra giá trị rỗng không chính xác cho trường liên kết toMany trong quy tắc liên kết ([#6905](https://github.com/nocobase/nocobase/pull/6905)) bởi @katherinehhh
  - lỗi hiển thị do định dạng style không hợp lệ khi thêm trường liên kết ([#6903](https://github.com/nocobase/nocobase/pull/6903)) bởi @katherinehhh
  - thiếu biến đối tượng hiện tại trong quy tắc liên kết bên trong bảng con ([#6907](https://github.com/nocobase/nocobase/pull/6907)) bởi @katherinehhh
- **[undefined]** Sử dụng Node 20 do gói commander yêu cầu ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Giải quyết vấn đề sắp xếp kéo và thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos
- **[Tài liệu API]** Thêm thông tin sub-app còn thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos
- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết vấn đề hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66
- **[Hành động: Xuất bản ghi]** Sửa lỗi các mối quan hệ lồng nhau không xuất được chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Markdown(Vditor)]** trường markdown (Vditor) không thích ứng với chủ đề ([#6919](https://github.com/nocobase/nocobase/pull/6919)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Tránh cập nhật sai các tiền tố đường dẫn tương tự trong quá trình cập nhật đường dẫn ([#6913](https://github.com/nocobase/nocobase/pull/6913)) bởi @2013xile
- **[Quy trình: nút gửi thư]** Xử lý trường 'to' không xác định và cải thiện xử lý người nhận email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) bởi @sheldon66
- **[Xác minh]** Sửa tên tiếng Anh không chính xác: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) bởi @2013xile
- **[Quản lý tệp]**

  - Sửa lỗi injection bộ sưu tập client và tham số tải lên ([#6909](https://github.com/nocobase/nocobase/pull/6909)) bởi @mytharcher
  - Sửa quy tắc khớp xem trước ([#6902](https://github.com/nocobase/nocobase/pull/6902)) bởi @mytharcher
- **[Quy trình: Sự kiện hành động tùy chỉnh]**

  - Tránh lỗi do thứ tự tải plugin bởi @mytharcher
  - Sửa lỗi trình xử lý lỗi không thể khớp theo lớp bởi @mytharcher
  - Sửa lỗi nút thực hiện không chính xác sau vài lần nhấp bởi @mytharcher
- **[Bộ lọc đa từ khóa]** Loại bỏ khoảng trắng ở cả hai bên của mỗi từ khóa bởi @zhangzhonghe
- **[Xác thực hai yếu tố (2FA)]** Yêu cầu cấu hình một trình xác minh khi bật 2FA bởi @2013xile
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa tham số tải lên trùng lặp bởi @mytharcher
  - Sửa url xem trước và tham số tải lên bởi @mytharcher
- **[In mẫu]** Tăng cường logic hasChildren trong useFieldsTree để bao gồm kiểm tra enum uiSchema. bởi @sheldon66
- **[Block: Biểu mẫu nhiều bước]** Sửa kiểu bởi @mytharcher
- **[Quy trình: Phê duyệt]**

  - Sửa ngôn ngữ bởi @mytharcher
  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher
  - Sửa lỗi tính toán appends liên kết bởi @mytharcher
  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher
- **[Trình quản lý email]**

  - sửa quyền api của bộ sưu tập mailMessageNotes và mailMessageLabels bởi @jiannx
  - sửa lỗi modal thêm ghi chú bởi @jiannx
  - sửa: xóa cột hành động bởi @jiannx
