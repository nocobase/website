---
title: "Cập nhật hàng tuần của NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật trong tuần này bao gồm: hỗ trợ cấu hình bí mật xác thực độc lập cho các ứng dụng con và thêm nút CC vào quy trình làm việc."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*Ngày phát hành: 2025-07-16*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi: Không thể phân giải 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) bởi @zhangzhonghe
  - Vấn đề hiển thị cho các trường liên kết trong quy tắc liên kết ([#7220](https://github.com/nocobase/nocobase/pull/7220)) bởi @katherinehhh
- **[database]** Sửa lỗi khi bật phân trang đơn giản cho các bảng nguồn dữ liệu bên ngoài ([#7222](https://github.com/nocobase/nocobase/pull/7222)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Sắp xếp]** Thiếu lựa chọn trường sắp xếp khi sao chép bản ghi ([#7116](https://github.com/nocobase/nocobase/pull/7116)) bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]**

  - Thêm khả năng chịu lỗi cho phê duyệt đã bị xóa trong danh sách bản ghi bởi @mytharcher
  - Sửa lỗi nhiều cấp độ liên kết khi gửi phê duyệt bởi @mytharcher
  - Sửa lỗi ngoại lệ khi xóa bản ghi bởi @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*Ngày phát hành: 2025-07-14*

#### 🚀 Cải tiến

- **[Trường bộ sưu tập: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher
- **[Luồng công việc]** Sử dụng ghi log thay vì ném lỗi khi thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher
- **[Luồng công việc: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe
  - Sửa lỗi thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe
  - Gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh
  - Thu gọn bộ lọc: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe
  - Lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh
  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe
  - Hành động cửa sổ bật lên: Hiển thị trang không như mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe
- **[acl]** Sửa lỗi khi xóa một vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie
- **[Trình quản lý đa ứng dụng]** Sửa lỗi tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher
- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe
- **[Luồng công việc: Phê duyệt]** Sửa lỗi liên kết khi gửi phê duyệt bởi @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*Ngày phát hành: 2025-07-13*

#### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình bí mật xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher
- **[Luồng công việc: CC]** Thêm nút CC vào luồng công việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu hóa kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe
- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

#### 🐛 Sửa lỗi

- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher
- **[Luồng công việc: Phê duyệt]**

  - Để tránh lỗi khi người dùng không tồn tại bởi @mytharcher
  - Tải lại liên kết trên bản ghi bởi @mytharcher
  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*Ngày phát hành: 2025-07-11*

#### 🚀 Cải tiến

- **[Trình quản lý đa ứng dụng]** Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Hành động: Yêu cầu tùy chỉnh]** Vấn đề phân tích biến trong URL trong quá trình điều hướng tuyến đường sau khi yêu cầu tùy chỉnh thành công ([#7186](https://github.com/nocobase/nocobase/pull/7186)) bởi @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*Ngày phát hành: 2025-07-10*

#### 🎉 Tính năng mới

- **[Luồng công việc: Phê duyệt]** Thêm trình khởi tạo cho trình kích hoạt bởi @mytharcher

#### 🚀 Cải tiến

- **[Trình quản lý đa ứng dụng]** Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher
- **[Luồng công việc]** Chuyển đổi toán hạng thành chuỗi trước khi so sánh chuỗi trong tính toán logic ([#7190](https://github.com/nocobase/nocobase/pull/7190)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt thụt lề bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi các trường của view không được hiển thị trong các khối. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) bởi @aaaaaajie
- **[Khối: Kanban]** Sửa lỗi giao diện bảng con trong Kanban và thêm hỗ trợ cài đặt độ rộng cột Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]** Sửa lỗi khối và liên kết bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*Ngày phát hành: 2025-07-14*

#### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình bí mật xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher
- **[Luồng công việc: CC]** Thêm nút CC vào luồng công việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher
- **[Luồng công việc: Phê duyệt]** Thêm trình khởi tạo cho trình kích hoạt bởi @mytharcher

#### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu hóa kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe
- **[Luồng công việc]** Chuyển đổi toán hạng thành chuỗi trước khi so sánh chuỗi trong tính toán logic ([#7190](https://github.com/nocobase/nocobase/pull/7190)) bởi @mytharcher
- **[Trình quản lý đa ứng dụng]**

  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher
  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt thụt lề bởi @mytharcher
- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe
  - Lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh
  - Thu gọn bộ lọc: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe
  - Gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh
  - Hành động cửa sổ bật lên: Hiển thị trang không như mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe
  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe
  - Sửa lỗi thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe
- **[acl]** Sửa lỗi khi xóa một vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie
- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe
- **[Trình quản lý đa ứng dụng]** Sửa lỗi tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher
- **[Hành động: Yêu cầu tùy chỉnh]** Vấn đề phân tích biến trong URL trong quá trình điều hướng tuyến đường sau khi yêu cầu tùy chỉnh thành công ([#7186](https://github.com/nocobase/nocobase/pull/7186)) bởi @katherinehhh
- **[Khối: Kanban]** Sửa lỗi giao diện bảng con trong Kanban và thêm hỗ trợ cài đặt độ rộng cột Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) bởi @katherinehhh
- **[Luồng công việc: Phê duyệt]**

  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher
  - Sửa lỗi khối và liên kết bởi @mytharcher
  - Tải lại liên kết trên bản ghi bởi @mytharcher
  - Để tránh lỗi khi người dùng không tồn tại bởi @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*Ngày phát hành: 2025-07-10*

#### 🐛 Sửa lỗi

- **[client]**

  - Hiển thị trường hộp kiểm không chính xác trong bộ sưu tập trường liên kết trong biểu mẫu ([#7176](https://github.com/nocobase/nocobase/pull/7176)) bởi @zhangzhonghe
  - Sửa lỗi nhấp vào nút không mở được cửa sổ bật lên ([#7180](https://github.com/nocobase/nocobase/pull/7180)) bởi @zhangzhonghe
- **[database]** Sửa lỗi các trường của view không được hiển thị trong các khối. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) bởi @aaaaaajie
- **[Luồng công việc: Nút thủ công]** Sửa lỗi ném ra khi sử dụng biến ([#7177](https://github.com/nocobase/nocobase/pull/7177)) bởi @mytharcher
- **[In mẫu]** thêm script di chuyển cho trường rootDataType bởi @jiannx
- **[Luồng công việc: Phê duyệt]** Sửa lỗi nhánh đã phê duyệt không chạy khi không có người được chỉ định bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*Ngày phát hành: 2025-07-15*

#### 🎉 Tính năng mới

- **[Trình quản lý đa ứng dụng]** Hỗ trợ cấu hình bí mật xác thực độc lập cho các ứng dụng con ([#7197](https://github.com/nocobase/nocobase/pull/7197)) bởi @mytharcher
- **[Luồng công việc: CC]** Thêm nút CC vào luồng công việc ([#7201](https://github.com/nocobase/nocobase/pull/7201)) bởi @mytharcher
- **[Luồng công việc: Phê duyệt]** Thêm trình khởi tạo cho trình kích hoạt bởi @mytharcher

#### 🚀 Cải tiến

- **[Trường bộ sưu tập: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher
- **[Luồng công việc]**

  - Sử dụng ghi log thay vì ném lỗi khi thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher
  - Chuyển đổi toán hạng thành chuỗi trước khi so sánh chuỗi trong tính toán logic ([#7190](https://github.com/nocobase/nocobase/pull/7190)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Tối ưu hóa kích thước phông chữ cho trang tin nhắn trên thiết bị di động ([#7199](https://github.com/nocobase/nocobase/pull/7199)) bởi @zhangzhonghe
- **[Trình quản lý đa ứng dụng]**

  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher
  - Thêm tùy chọn cơ sở dữ liệu và ủy quyền cho ứng dụng con ([#7184](https://github.com/nocobase/nocobase/pull/7184)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** Thêm cài đặt thụt lề bởi @mytharcher
- **[Luồng công việc: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher
- **[Xác thực: DingTalk]** Hỗ trợ cấu hình giao thức và số cổng của URL callback bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe
  - Thu gọn bộ lọc: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe
  - Vấn đề hiển thị cho các trường liên kết trong quy tắc liên kết ([#7220](https://github.com/nocobase/nocobase/pull/7220)) bởi @katherinehhh
  - Gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh
  - Lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh
  - Hành động cửa sổ bật lên: Hiển thị trang không như mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe
  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe
  - Sửa lỗi thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe
  - Hiển thị trường hộp kiểm không chính xác trong bộ sưu tập trường liên kết trong biểu mẫu ([#7176](https://github.com/nocobase/nocobase/pull/7176)) bởi @zhangzhonghe
  - Sửa lỗi nhấp vào nút không mở được cửa sổ bật lên ([#7180](https://github.com/nocobase/nocobase/pull/7180)) bởi @zhangzhonghe
- **[acl]** Sửa lỗi khi xóa một vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie
- **[database]** Sửa lỗi các trường của view không được hiển thị trong các khối. ([#7162](https://github.com/nocobase/nocobase/pull/7162)) bởi @aaaaaajie
- **[Trình quản lý đa ứng dụng]** Sửa lỗi tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dấu thời gian BigInt ở định dạng chuỗi gây ra sự cố dayjs ([#7196](https://github.com/nocobase/nocobase/pull/7196)) bởi @mytharcher
- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe
- **[Hành động: Yêu cầu tùy chỉnh]** Vấn đề phân tích biến trong URL trong quá trình điều hướng tuyến đường sau khi yêu cầu tùy chỉnh thành công ([#7186](https://github.com/nocobase/nocobase/pull/7186)) bởi @katherinehhh
- **[Khối: Kanban]** Sửa lỗi giao diện bảng con trong Kanban và thêm hỗ trợ cài đặt độ rộng cột Kanban ([#7189](https://github.com/nocobase/nocobase/pull/7189)) bởi @katherinehhh
- **[Luồng công việc: Nút thủ công]** Sửa lỗi ném ra khi sử dụng biến ([#7177](https://github.com/nocobase/nocobase/pull/7177)) bởi @mytharcher
- **[In mẫu]** thêm script di chuyển cho trường rootDataType bởi @jiannx
- **[Luồng công việc: Phê duyệt]**

  - Sửa lỗi liên kết khi gửi phê duyệt bởi @mytharcher
  - Sửa lỗi ngoại lệ khi xóa bản ghi bởi @mytharcher
  - Sửa lỗi nhánh đã phê duyệt không chạy khi không có người được chỉ định bởi @mytharcher
  - Để tránh lỗi khi người dùng không tồn tại bởi @mytharcher
  - Sửa lỗi khối và liên kết bởi @mytharcher
  - Thêm `try/catch` trong quá trình di chuyển khi cập nhật lược đồ UI bởi @mytharcher
  - Tải lại liên kết trên bản ghi bởi @mytharcher
