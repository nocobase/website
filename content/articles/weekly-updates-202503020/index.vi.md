---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa cột và thao tác của khối bảng"
description: "Các cập nhật tuần này bao gồm: hỗ trợ ẩn cột chỉ mục trong khối bảng, cấu hình tùy chọn trường chọn trong quy tắc liên kết, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*Ngày phát hành: 2025-03-12*

#### 🐛 Sửa lỗi

- **[client]** Lựa chọn phạm vi trường ngày tháng loại trừ ngày tối đa ([#6418](https://github.com/nocobase/nocobase/pull/6418)) bởi @katherinehhh
- **[Thông báo: Tin nhắn trong ứng dụng]** Tránh cấu hình người nhận sai truy vấn tất cả người dùng ([#6424](https://github.com/nocobase/nocobase/pull/6424)) bởi @sheldon66
- **[Quy trình làm việc: Nút thủ công]**

  - Sửa lỗi di chuyển thiếu tiền tố bảng và logic schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) bởi @mytharcher
  - Thay đổi giới hạn phiên bản di chuyển thành `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) bởi @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*Ngày phát hành: 2025-03-14*

#### 🎉 Tính năng mới

- **[WeCom]** Cho phép đặt chú thích tùy chỉnh cho nút đăng nhập bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi ký tự đặc biệt trong URL hình ảnh gây ra không hiển thị ([#6459](https://github.com/nocobase/nocobase/pull/6459)) bởi @mytharcher
  - Số trang không chính xác khi thêm dữ liệu sau khi thay đổi kích thước trang của bảng con ([#6437](https://github.com/nocobase/nocobase/pull/6437)) bởi @katherinehhh
  - Kiểu logo không nhất quán với phiên bản trước ([#6444](https://github.com/nocobase/nocobase/pull/6444)) bởi @zhangzhonghe
- **[Quy trình làm việc: Nút thủ công]** Sửa lỗi xảy ra trong quá trình di chuyển ([#6445](https://github.com/nocobase/nocobase/pull/6445)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Các trường đã xóa xuất hiện khi thêm trường bộ lọc tùy chỉnh ([#6450](https://github.com/nocobase/nocobase/pull/6450)) bởi @2013xile
- **[Quản lý tệp]** Sửa một vài vấn đề của trình quản lý tệp ([#6436](https://github.com/nocobase/nocobase/pull/6436)) bởi @mytharcher
- **[Hành động: Yêu cầu tùy chỉnh]** Lỗi xác thực quyền phía máy chủ yêu cầu tùy chỉnh ([#6438](https://github.com/nocobase/nocobase/pull/6438)) bởi @katherinehhh
- **[Trình quản lý nguồn dữ liệu]** Chuyển đổi nguồn dữ liệu trong quản lý vai trò không tải được bộ sưu tập tương ứng ([#6431](https://github.com/nocobase/nocobase/pull/6431)) bởi @katherinehhh
- **[Hành động: Chỉnh sửa hàng loạt]** Sửa lỗi quy trình làm việc không thể được kích hoạt trong quá trình gửi chỉnh sửa hàng loạt ([#6440](https://github.com/nocobase/nocobase/pull/6440)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Xóa `only` trong trường hợp kiểm thử E2E bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi dữ liệu liên kết không hiển thị trong biểu mẫu phê duyệt bởi @mytharcher
  - Sửa lỗi xảy ra khi phê duyệt trên nguồn dữ liệu bên ngoài bởi @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*Ngày phát hành: 2025-03-15*

#### 🎉 Tính năng mới

- **[client]** Thành phần Lựa chọn Xếp tầng Thêm Cài đặt Phạm vi Dữ liệu ([#6386](https://github.com/nocobase/nocobase/pull/6386)) bởi @Cyx649312038

#### 🚀 Cải tiến

- **[utils]** Di chuyển `md5` sang utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]** Trong khối cây, khi bỏ chọn, dữ liệu trong khối dữ liệu không bị xóa ([#6460](https://github.com/nocobase/nocobase/pull/6460)) bởi @zhangzhonghe
- **[Quản lý tệp]** Không thể xóa các tệp được lưu trữ trong S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) bởi @chenos
- **[Quy trình làm việc]** Xóa nút cài đặt quy trình làm việc ràng buộc khỏi trình chọn dữ liệu ([#6455](https://github.com/nocobase/nocobase/pull/6455)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** Giải quyết vấn đề với URL đã ký S3 Pro không thể truy cập bởi @chenos
- **[Quy trình làm việc: Phê duyệt]** Tránh trang bị crash khi không có người yêu cầu trong bảng quy trình phê duyệt bởi @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*Ngày phát hành: 2025-03-17*

#### 🚀 Cải tiến

- **[Quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** Thay đổi sang cách đơn giản để tạo URL tệp bởi @mytharcher
- **[Trình quản lý sao lưu]** Cho phép khôi phục sao lưu giữa phiên bản tiền phát hành và phiên bản phát hành của cùng một phiên bản bởi @gchust

#### 🐛 Sửa lỗi

- **[client]**

  - Trường văn bản rich text không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh
  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe
  - Nhấp vào nút đặt lại trên biểu mẫu bộ lọc không thể xóa các điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe
- **[Quy trình làm việc: Nút thủ công]**

  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher
  - Thay đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher
  - Sửa lỗi trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher
  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos
  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher
- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher
- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher
  - Sửa số lượng tác vụ dựa trên hooks bởi @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*Ngày phát hành: 2025-03-18*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh
- **[Quy trình làm việc: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Lưu trữ tệp: S3(Pro)]** Thay đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[evaluators]** Hoàn nguyên số chữ số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher
- **[Quản lý tệp]** Mã hóa url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos
- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie
- **[Quy trình làm việc]** Sửa số lượng tác vụ cũ sau khi quy trình làm việc bị xóa ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher
- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe
- **[Trình quản lý sao lưu]**

  - Các tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust
  - Lỗi khôi phục cơ sở dữ liệu MySQL do trùng lặp tập GTID bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Thay đổi phê duyệt trả về thành việc cần làm bởi @mytharcher
  - Sửa lỗi thiếu nút hành động trong bảng quy trình bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*Ngày phát hành: 2025-03-13*

#### 🎉 Tính năng mới

- **[client]**

  - Khối bảng hỗ trợ ẩn cột chỉ mục (hiển thị mặc định) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) bởi @katherinehhh
  - Hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết ([#6338](https://github.com/nocobase/nocobase/pull/6338)) bởi @katherinehhh
  - Hỗ trợ cấu hình phạm vi ngày (min/max) cho trường thời gian trong quy tắc liên kết ([#6356](https://github.com/nocobase/nocobase/pull/6356)) bởi @katherinehhh
- **[Khối: Bảng hành động]** Hỗ trợ ngắt dòng cho tiêu đề hành động trong bảng hành động ([#6433](https://github.com/nocobase/nocobase/pull/6433)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - Số trang không chính xác khi thêm dữ liệu sau khi thay đổi kích thước trang của bảng con ([#6437](https://github.com/nocobase/nocobase/pull/6437)) bởi @katherinehhh
  - Kiểu logo không nhất quán với phiên bản trước ([#6444](https://github.com/nocobase/nocobase/pull/6444)) bởi @zhangzhonghe
  - Giá trị trường đa lựa chọn thay đổi và mất tùy chọn khi xóa bản ghi bảng con ([#6405](https://github.com/nocobase/nocobase/pull/6405)) bởi @katherinehhh
  - Lựa chọn phạm vi trường ngày tháng loại trừ ngày tối đa ([#6418](https://github.com/nocobase/nocobase/pull/6418)) bởi @katherinehhh
  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không hợp lệ ([#6415](https://github.com/nocobase/nocobase/pull/6415)) bởi @zhangzhonghe
  - Dữ liệu không cập nhật trong cửa sổ popup được mở qua nút Liên kết ([#6411](https://github.com/nocobase/nocobase/pull/6411)) bởi @zhangzhonghe
- **[Hành động: Chỉnh sửa hàng loạt]** Sửa lỗi quy trình làm việc không thể được kích hoạt trong quá trình gửi chỉnh sửa hàng loạt ([#6440](https://github.com/nocobase/nocobase/pull/6440)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Các trường đã xóa xuất hiện khi thêm trường bộ lọc tùy chỉnh ([#6450](https://github.com/nocobase/nocobase/pull/6450)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Chuyển đổi nguồn dữ liệu trong quản lý vai trò không tải được bộ sưu tập tương ứng ([#6431](https://github.com/nocobase/nocobase/pull/6431)) bởi @katherinehhh
- **[Hành động: Yêu cầu tùy chỉnh]** Lỗi xác thực quyền phía máy chủ yêu cầu tùy chỉnh ([#6438](https://github.com/nocobase/nocobase/pull/6438)) bởi @katherinehhh
- **[Quản lý tệp]** Sửa một vài vấn đề của trình quản lý tệp ([#6436](https://github.com/nocobase/nocobase/pull/6436)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Tránh cấu hình người nhận sai truy vấn tất cả người dùng ([#6424](https://github.com/nocobase/nocobase/pull/6424)) bởi @sheldon66
  - Phân biệt màu nền danh sách tin nhắn trong ứng dụng với thẻ tin nhắn để tăng cường phân cấp trực quan và khả năng đọc. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) bởi @sheldon66
- **[Quy trình làm việc: Nút thủ công]**

  - Thay đổi giới hạn phiên bản di chuyển thành `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) bởi @mytharcher
  - Sửa lỗi di chuyển thiếu tiền tố bảng và logic schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) bởi @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*Ngày phát hành: 2025-03-14*

#### 🎉 Tính năng mới

- **[WeCom]** Cho phép đặt chú thích tùy chỉnh cho nút đăng nhập bởi @2013xile

#### 🚀 Cải tiến

- **[Trực quan hóa dữ liệu]** Thay thế `x-designer` đã lỗi thời bằng `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi ký tự đặc biệt trong URL hình ảnh gây ra không hiển thị ([#6459](https://github.com/nocobase/nocobase/pull/6459)) bởi @mytharcher
- **[Quy trình làm việc: Nút thủ công]** Sửa lỗi xảy ra trong quá trình di chuyển ([#6445](https://github.com/nocobase/nocobase/pull/6445)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Xóa `only` trong trường hợp kiểm thử E2E bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi xảy ra khi phê duyệt trên nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa lỗi dữ liệu liên kết không hiển thị trong biểu mẫu phê duyệt bởi @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*Ngày phát hành: 2025-03-15*

#### 🎉 Tính năng mới

- **[client]** Thành phần Lựa chọn Xếp tầng Thêm Cài đặt Phạm vi Dữ liệu ([#6386](https://github.com/nocobase/nocobase/pull/6386)) bởi @Cyx649312038

#### 🚀 Cải tiến

- **[utils]** Di chuyển `md5` sang utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]** Trong khối cây, khi bỏ chọn, dữ liệu trong khối dữ liệu không bị xóa ([#6460](https://github.com/nocobase/nocobase/pull/6460)) bởi @zhangzhonghe
- **[Quản lý tệp]** Không thể xóa các tệp được lưu trữ trong S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) bởi @chenos
- **[Quy trình làm việc]** Xóa nút cài đặt quy trình làm việc ràng buộc khỏi trình chọn dữ liệu ([#6455](https://github.com/nocobase/nocobase/pull/6455)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** Giải quyết vấn đề với URL đã ký S3 Pro không thể truy cập bởi @chenos
- **[Quy trình làm việc: Phê duyệt]** Tránh trang bị crash khi không có người yêu cầu trong bảng quy trình phê duyệt bởi @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*Ngày phát hành: 2025-03-18*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ các hành động bảng nội tuyến với chế độ chỉ biểu tượng, hiển thị tên hành động khi di chuột ([#6451](https://github.com/nocobase/nocobase/pull/6451)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[Quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Thay đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe
  - Thay đổi sang cách đơn giản để tạo URL tệp bởi @mytharcher
- **[Trình quản lý sao lưu]** Cho phép khôi phục sao lưu giữa phiên bản tiền phát hành và phiên bản phát hành của cùng một phiên bản bởi @gchust

#### 🐛 Sửa lỗi

- **[client]**

  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe
  - Trường văn bản rich text không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh
  - Nhấp vào nút đặt lại trên biểu mẫu bộ lọc không thể xóa các điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe
- **[Quy trình làm việc: Nút thủ công]**

  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher
  - Thay đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher
  - Sửa lỗi trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher
  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher
  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos
- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher
- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher
- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher
  - Sửa số lượng tác vụ dựa trên hooks bởi @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*Ngày phát hành: 2025-03-19*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh
- **[Quy trình làm việc: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[evaluators]** Hoàn nguyên số chữ số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa số lượng tác vụ cũ sau khi quy trình làm việc bị xóa ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie
- **[Quản lý tệp]** Mã hóa url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos
- **[Trình quản lý sao lưu]**

  - Lỗi khôi phục cơ sở dữ liệu MySQL do trùng lặp tập GTID bởi @gchust
  - Các tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi thiếu nút hành động trong bảng quy trình bởi @mytharcher
  - Thay đổi phê duyệt trả về thành việc cần làm bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*Ngày phát hành: 2025-03-15*

#### 🎉 Tính năng mới

- **[client]**

  - Thành phần Lựa chọn Xếp tầng Thêm Cài đặt Phạm vi Dữ liệu ([#6386](https://github.com/nocobase/nocobase/pull/6386)) bởi @Cyx649312038
  - Khối bảng hỗ trợ ẩn cột chỉ mục (hiển thị mặc định) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) bởi @katherinehhh
  - Hỗ trợ cấu hình tùy chọn trường có thể chọn trong quy tắc liên kết ([#6338](https://github.com/nocobase/nocobase/pull/6338)) bởi @katherinehhh
  - Hỗ trợ cấu hình phạm vi ngày (min/max) cho trường thời gian trong quy tắc liên kết ([#6356](https://github.com/nocobase/nocobase/pull/6356)) bởi @katherinehhh
- **[acl]** Hỗ trợ hợp nhất vai trò người dùng ([#6301](https://github.com/nocobase/nocobase/pull/6301)) bởi @aaaaaajie
- **[Khối: Bảng hành động]** Hỗ trợ ngắt dòng cho tiêu đề hành động trong bảng hành động ([#6433](https://github.com/nocobase/nocobase/pull/6433)) bởi @katherinehhh
- **[plugin-demo-platform]** Đặt skipAuthCheck của route "/new" thành true. bởi @sheldon66
- **[WeCom]** Cho phép đặt chú thích tùy chỉnh cho nút đăng nhập bởi @2013xile

#### 🚀 Cải tiến

- **[utils]**

  - Di chuyển `md5` sang utils ([#6468](https://github.com/nocobase/nocobase/pull/6468)) bởi @mytharcher
  - Thích ứng trang desktop cho thiết bị di động ([#6393](https://github.com/nocobase/nocobase/pull/6393)) bởi @zhangzhonghe
- **[client]** Thêm skipAuthCheck vào router.add để ngăn chặn chuyển hướng đến trang đăng nhập trên các trang công khai. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) bởi @sheldon66
- **[Trực quan hóa dữ liệu]** Thay thế `x-designer` đã lỗi thời bằng `x-settings` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Trong khối cây, khi bỏ chọn, dữ liệu trong khối dữ liệu không bị xóa ([#6460](https://github.com/nocobase/nocobase/pull/6460)) bởi @zhangzhonghe
  - Sửa lỗi ký tự đặc biệt trong URL hình ảnh gây ra không hiển thị ([#6459](https://github.com/nocobase/nocobase/pull/6459)) bởi @mytharcher
  - Số trang không chính xác khi thêm dữ liệu sau khi thay đổi kích thước trang của bảng con ([#6437](https://github.com/nocobase/nocobase/pull/6437)) bởi @katherinehhh
  - Nội dung không được hiển thị đầy đủ trên trình duyệt di động ([#6446](https://github.com/nocobase/nocobase/pull/6446)) bởi @zhangzhonghe
  - Kiểu logo không nhất quán với phiên bản trước ([#6444](https://github.com/nocobase/nocobase/pull/6444)) bởi @zhangzhonghe
  - Lựa chọn phạm vi trường ngày tháng loại trừ ngày tối đa ([#6418](https://github.com/nocobase/nocobase/pull/6418)) bởi @katherinehhh
  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không hợp lệ ([#6415](https://github.com/nocobase/nocobase/pull/6415)) bởi @zhangzhonghe
  - Giá trị trường đa lựa chọn thay đổi và mất tùy chọn khi xóa bản ghi bảng con ([#6405](https://github.com/nocobase/nocobase/pull/6405)) bởi @katherinehhh
  - Dữ liệu không cập nhật trong cửa sổ popup được mở qua nút Liên kết ([#6411](https://github.com/nocobase/nocobase/pull/6411)) bởi @zhangzhonghe
- **[acl]** Sửa lỗi các trường quan hệ không được hiển thị dưới sự hợp nhất vai trò. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) bởi @aaaaaajie
- **[Quản lý tệp]**

  - Không thể xóa các tệp được lưu trữ trong S3. ([#6467](https://github.com/nocobase/nocobase/pull/6467)) bởi @chenos
  - Sửa một vài vấn đề của trình quản lý tệp ([#6436](https://github.com/nocobase/nocobase/pull/6436)) bởi @mytharcher
- **[Quy trình làm việc]** Xóa nút cài đặt quy trình làm việc ràng buộc khỏi trình chọn dữ liệu ([#6455](https://github.com/nocobase/nocobase/pull/6455)) bởi @mytharcher
- **[Quy trình làm việc: Nút thủ công]**

  - Sửa lỗi xảy ra trong quá trình di chuyển ([#6445](https://github.com/nocobase/nocobase/pull/6445)) bởi @mytharcher
  - Thay đổi giới hạn phiên bản di chuyển thành `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) bởi @mytharcher
  - Sửa lỗi di chuyển thiếu tiền tố bảng và logic schema ([#6425](https://github.com/nocobase/nocobase/pull/6425)) bởi @mytharcher
- **[Kiểm soát truy cập]**

  - Sửa lỗi chuyển đổi vai trò không có hiệu lực. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) bởi @aaaaaajie
  - Lỗi khi phạm vi dữ liệu được đặt thành dữ liệu của chính người dùng và bảng thiếu trường người tạo. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) bởi @aaaaaajie
- **[WEB client]** Thay thế tất cả các phiên bản của ctx.state.currentRole (vai trò đơn) bằng ctx.state.currentRoles (hỗ trợ nhiều vai trò). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) bởi @aaaaaajie
- **[Hành động: Chỉnh sửa hàng loạt]** Sửa lỗi quy trình làm việc không thể được kích hoạt trong quá trình gửi chỉnh sửa hàng loạt ([#6440](https://github.com/nocobase/nocobase/pull/6440)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Chuyển đổi nguồn dữ liệu trong quản lý vai trò không tải được bộ sưu tập tương ứng ([#6431](https://github.com/nocobase/nocobase/pull/6431)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Các trường đã xóa xuất hiện khi thêm trường bộ lọc tùy chỉnh ([#6450](https://github.com/nocobase/nocobase/pull/6450)) bởi @2013xile
- **[Thông báo: Tin nhắn trong ứng dụng]**

  - Phân biệt màu nền danh sách tin nhắn trong ứng dụng với thẻ tin nhắn để tăng cường phân cấp trực quan và khả năng đọc. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) bởi @sheldon66
  - Tránh cấu hình người nhận sai truy vấn tất cả người dùng ([#6424](https://github.com/nocobase/nocobase/pull/6424)) bởi @sheldon66
- **[Hành động: Yêu cầu tùy chỉnh]** Lỗi xác thực quyền phía máy chủ yêu cầu tùy chỉnh ([#6438](https://github.com/nocobase/nocobase/pull/6438)) bởi @katherinehhh
- **[Xác thực: Khóa API]** Xóa hợp nhất danh sách vai trò plugin khóa API ([#6432](https://github.com/nocobase/nocobase/pull/6432)) bởi @aaaaaajie
- **[Khối: Mẫu]** Hành vi lưu dưới dạng mẫu không chính xác trong ứng dụng khách di động ([#6420](https://github.com/nocobase/nocobase/pull/6420)) bởi @gchust
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Xóa `only` trong trường hợp kiểm thử E2E bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** Giải quyết vấn đề với URL đã ký S3 Pro không thể truy cập bởi @chenos
- **[Quy trình làm việc: Phê duyệt]**

  - Tránh trang bị crash khi không có người yêu cầu trong bảng quy trình phê duyệt bởi @mytharcher
  - Sửa lỗi dữ liệu liên kết không hiển thị trong biểu mẫu phê duyệt bởi @mytharcher
  - Sửa lỗi xảy ra khi phê duyệt trên nguồn dữ liệu bên ngoài bởi @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*Ngày phát hành: 2025-03-18*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ các hành động bảng nội tuyến với chế độ chỉ biểu tượng, hiển thị tên hành động khi di chuột ([#6451](https://github.com/nocobase/nocobase/pull/6451)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[Quản lý tệp]** Đơn giản hóa logic tạo URL tệp và API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Thay đổi văn bản 'Access URL Base' thành 'Base URL' bởi @zhangzhonghe
  - Thay đổi sang cách đơn giản để tạo URL tệp bởi @mytharcher
- **[Trình quản lý sao lưu]** Cho phép khôi phục sao lưu giữa phiên bản tiền phát hành và phiên bản phát hành của cùng một phiên bản bởi @gchust

#### 🐛 Sửa lỗi

- **[client]**

  - Thiếu trường trong cấu hình quy tắc liên kết ([#6488](https://github.com/nocobase/nocobase/pull/6488)) bởi @katherinehhh
  - Màu sắc của các biểu tượng ở góc trên bên phải trang không thay đổi theo chủ đề ([#6482](https://github.com/nocobase/nocobase/pull/6482)) bởi @zhangzhonghe
  - Trường văn bản rich text không xóa dữ liệu khi gửi ([#6486](https://github.com/nocobase/nocobase/pull/6486)) bởi @katherinehhh
  - Kiểu nhập liệu không chính xác cho cài đặt giá trị mặc định của biểu mẫu ([#6490](https://github.com/nocobase/nocobase/pull/6490)) bởi @gchust
  - Nhấp vào nút đặt lại trên biểu mẫu bộ lọc không thể xóa các điều kiện lọc của khối thẻ lưới ([#6475](https://github.com/nocobase/nocobase/pull/6475)) bởi @zhangzhonghe
- **[Quy trình làm việc: Nút thủ công]**

  - Thay đổi tên di chuyển để đảm bảo chạy lại ([#6487](https://github.com/nocobase/nocobase/pull/6487)) bởi @mytharcher
  - Sửa lỗi di chuyển ([#6484](https://github.com/nocobase/nocobase/pull/6484)) bởi @mytharcher
  - Sửa lỗi trường tiêu đề quy trình làm việc trong bộ lọc ([#6480](https://github.com/nocobase/nocobase/pull/6480)) bởi @mytharcher
  - Sửa lỗi di chuyển khi cột id không tồn tại ([#6470](https://github.com/nocobase/nocobase/pull/6470)) bởi @chenos
  - Tránh đồng bộ hóa bộ sưu tập từ các trường ([#6478](https://github.com/nocobase/nocobase/pull/6478)) bởi @mytharcher
- **[Quy trình làm việc]** Không đếm tác vụ khi quy trình làm việc bị xóa ([#6474](https://github.com/nocobase/nocobase/pull/6474)) bởi @mytharcher
- **[Biến và bí mật]** Các nút không được hiển thị trong ngăn kéo tạo biến mới ([#6485](https://github.com/nocobase/nocobase/pull/6485)) bởi @gchust
- **[Quy trình làm việc: Nút tổng hợp]** Sửa lỗi làm tròn trên kết quả null ([#6473](https://github.com/nocobase/nocobase/pull/6473)) bởi @mytharcher
- **[Nhúng NocoBase]** Trang hiển thị trống bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Không thể khởi động máy chủ khi thiếu cài đặt sao lưu mặc định bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi trường liên kết tệp trong biểu mẫu quy trình bởi @mytharcher
  - Sửa số lượng tác vụ dựa trên hooks bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Nhận NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
