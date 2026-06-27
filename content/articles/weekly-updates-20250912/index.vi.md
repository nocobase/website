---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: trình quản lý email hỗ trợ đồng bộ hàng loạt, quy trình phê duyệt hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*Ngày phát hành: 2025-09-11*

#### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Xóa popover dấu ba chấm khỏi danh sách tệp ([#7479](https://github.com/nocobase/nocobase/pull/7479)) bởi @mytharcher
- **[server]** Sử dụng bộ ghi nhật ký hệ thống tiêu chuẩn cho hàng đợi tin nhắn ([#7480](https://github.com/nocobase/nocobase/pull/7480)) bởi @mytharcher
- **[database]** Tối ưu hóa truy vấn đếm API danh sách để giảm tiêu thụ tài nguyên. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) bởi @aaaaaajie
- **[Thông báo: Tin nhắn trong ứng dụng]** Hỗ trợ cấu hình thời gian trễ tự động đóng cho thông báo tin nhắn trong ứng dụng ([#7472](https://github.com/nocobase/nocobase/pull/7472)) bởi @mytharcher
- **[Workflow]**

  - Tối ưu hóa quy trình chuẩn bị workflow để hỗ trợ sử dụng dữ liệu nút đã được tải trước ([#7476](https://github.com/nocobase/nocobase/pull/7476)) bởi @mytharcher
  - Tối ưu hóa hiệu suất truy vấn để lấy các thực thi đang xếp hàng bằng cách sử dụng các trường và chỉ mục riêng biệt ([#7448](https://github.com/nocobase/nocobase/pull/7448)) bởi @mytharcher
  - Điều chỉnh API biến workflow để hỗ trợ cài đặt trước một danh sách biến bổ sung ([#7439](https://github.com/nocobase/nocobase/pull/7439)) bởi @mytharcher
- **[Workflow: nút thông báo]** Hỗ trợ kiểm tra nút thông báo ([#7470](https://github.com/nocobase/nocobase/pull/7470)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Hỗ trợ sử dụng các biến liên quan đến phê duyệt trong thông báo tùy chỉnh bởi @mytharcher
  - Hỗ trợ cập nhật trạng thái phê duyệt sau khi nút kết thúc chấm dứt thực thi bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Kiểm tra 'không rỗng' không chính xác cho trường số trong quy tắc liên kết ([#7477](https://github.com/nocobase/nocobase/pull/7477)) bởi @katherinehhh
  - Lỗi hiển thị trường liên kết khi chuyển sang thành phần thẻ trong khối biểu mẫu chỉnh sửa ([#7468](https://github.com/nocobase/nocobase/pull/7468)) bởi @katherinehhh
  - Trường select/multiselect/date/richtext ở chế độ chỉ đọc vẫn có thể chỉnh sửa trên biểu mẫu công khai ([#7484](https://github.com/nocobase/nocobase/pull/7484)) bởi @katherinehhh
  - Vấn đề giới hạn thời gian khi ngày được chọn bằng minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) bởi @katherinehhh
  - Xác thực bắt buộc không hoạt động cho trường tệp đính kèm trong bảng con ([#7431](https://github.com/nocobase/nocobase/pull/7431)) bởi @katherinehhh
  - Sửa lỗi trong một số trường hợp, chỉnh sửa bản ghi trong popup chọn bản ghi trên thiết bị di động gây ra lỗi ([#7444](https://github.com/nocobase/nocobase/pull/7444)) bởi @zhangzhonghe
- **[undefined]** Sửa lỗi lọc theo trường ngày chỉ trong nguồn ngoài MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) bởi @aaaaaajie
- **[database]**

  - Sửa lỗi cú pháp MySQL xảy ra khi tải thêm tin nhắn trong ứng dụng. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) bởi @aaaaaajie
  - Sửa lỗi độ chính xác cho trường Số đã xuất ([#7421](https://github.com/nocobase/nocobase/pull/7421)) bởi @aaaaaajie
- **[Thiết bị di động]** Trường ngày trên thiết bị di động không có múi giờ không hiển thị ngày giờ chính xác ([#7473](https://github.com/nocobase/nocobase/pull/7473)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Giá trị mặc định của trường biểu mẫu công khai không được áp dụng khi sử dụng biến ([#7467](https://github.com/nocobase/nocobase/pull/7467)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Xóa các sự kiện cơ sở dữ liệu liên quan đến bộ sưu tập sau khi xóa bộ sưu tập dạng cây ([#7459](https://github.com/nocobase/nocobase/pull/7459)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa lỗi khi chỉnh sửa trường `storage` trong bộ sưu tập tệp. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]**

  - Sửa số hàng hiển thị không chính xác khi nhập dữ liệu trùng lặp ([#7440](https://github.com/nocobase/nocobase/pull/7440)) bởi @aaaaaajie
  - Sửa lỗi nhập thất bại khi khóa chính của bảng là văn bản một dòng ([#7416](https://github.com/nocobase/nocobase/pull/7416)) bởi @aaaaaajie
- **[Workflow]**

  - Hoàn thiện các tùy chọn để tự động xóa trạng thái thực thi workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) bởi @mytharcher
  - Sửa lỗi popup chi tiết không hiển thị do cấu hình route không chính xác trong trung tâm tác vụ ([#7452](https://github.com/nocobase/nocobase/pull/7452)) bởi @mytharcher
  - Sửa các vấn đề liên quan đến menu thiết bị di động trong tác vụ workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) bởi @mytharcher
- **[Workflow: Nút song song]** Sửa lỗi xác định trạng thái không chính xác trong các nút nhánh song song ở chế độ "Chạy tất cả nhánh" gây ra kết thúc sớm ([#7445](https://github.com/nocobase/nocobase/pull/7445)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Sửa kết quả cập nhật không mong muốn khi sử dụng khóa chính chuỗi trong nhập xlsx. bởi @aaaaaajie
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi sự kiện hành động tùy chỉnh không thể thực thi thủ công ngay sau khi khởi tạo bởi @mytharcher
- **[Workflow: Luồng con]** Sửa lỗi quy trình con được tiếp tục và thực thi nhiều lần bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi văn bản trạng thái trong thông báo hoàn thành phê duyệt không được dịch bởi @mytharcher
  - Đối với người dùng không phải là người phê duyệt hiện tại, nút xem tương ứng trong bảng luồng quy trình sẽ không được hiển thị bởi @mytharcher
  - Thêm biến trạng thái cho các mẫu tùy chỉnh trong thông báo hoàn thành phê duyệt bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*Ngày phát hành: 2025-09-10*

#### 🚀 Cải tiến

- **[Trình quản lý Email]** hỗ trợ đồng bộ hàng loạt bởi @jiannx

#### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Sửa lỗi văn bản trạng thái trong thông báo hoàn thành phê duyệt không được dịch bởi @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*Ngày phát hành: 2025-09-09*

#### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ quay lại bất kỳ nút nào trong quy trình phê duyệt bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Xóa popover dấu ba chấm khỏi danh sách tệp ([#7479](https://github.com/nocobase/nocobase/pull/7479)) bởi @mytharcher
- **[database]** Tối ưu hóa truy vấn đếm API danh sách để giảm tiêu thụ tài nguyên. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) bởi @aaaaaajie
- **[Workflow]**

  - Tối ưu hóa quy trình chuẩn bị workflow để hỗ trợ sử dụng dữ liệu nút đã được tải trước ([#7476](https://github.com/nocobase/nocobase/pull/7476)) bởi @mytharcher
  - Tối ưu hóa hiệu suất truy vấn để lấy các thực thi đang xếp hàng bằng cách sử dụng các trường và chỉ mục riêng biệt ([#7448](https://github.com/nocobase/nocobase/pull/7448)) bởi @mytharcher
  - Điều chỉnh API biến workflow để hỗ trợ cài đặt trước một danh sách biến bổ sung ([#7439](https://github.com/nocobase/nocobase/pull/7439)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Hỗ trợ cấu hình thời gian trễ tự động đóng cho thông báo tin nhắn trong ứng dụng ([#7472](https://github.com/nocobase/nocobase/pull/7472)) bởi @mytharcher
- **[Workflow: nút thông báo]** Hỗ trợ kiểm tra nút thông báo ([#7470](https://github.com/nocobase/nocobase/pull/7470)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Hỗ trợ sử dụng các biến liên quan đến phê duyệt trong thông báo tùy chỉnh bởi @mytharcher
  - Hỗ trợ cập nhật trạng thái phê duyệt sau khi nút kết thúc chấm dứt thực thi bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Kiểm tra 'không rỗng' không chính xác cho trường số trong quy tắc liên kết ([#7477](https://github.com/nocobase/nocobase/pull/7477)) bởi @katherinehhh
  - Lỗi hiển thị trường liên kết khi chuyển sang thành phần thẻ trong khối biểu mẫu chỉnh sửa ([#7468](https://github.com/nocobase/nocobase/pull/7468)) bởi @katherinehhh
  - Vấn đề giới hạn thời gian khi ngày được chọn bằng minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) bởi @katherinehhh
  - Sửa lỗi trong một số trường hợp, chỉnh sửa bản ghi trong popup chọn bản ghi trên thiết bị di động gây ra lỗi ([#7444](https://github.com/nocobase/nocobase/pull/7444)) bởi @zhangzhonghe
  - Xác thực bắt buộc không hoạt động cho trường tệp đính kèm trong bảng con ([#7431](https://github.com/nocobase/nocobase/pull/7431)) bởi @katherinehhh
  - Sửa lỗi biểu tượng hiển thị không chính xác khi URL trong trường URL tệp đính kèm chứa tham số truy vấn ([#7432](https://github.com/nocobase/nocobase/pull/7432)) bởi @mytharcher
- **[database]**

  - Sửa lỗi độ chính xác cho trường Số đã xuất ([#7421](https://github.com/nocobase/nocobase/pull/7421)) bởi @aaaaaajie
  - Sửa lỗi cú pháp MySQL xảy ra khi tải thêm tin nhắn trong ứng dụng. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) bởi @aaaaaajie
- **[undefined]** Sửa lỗi lọc theo trường ngày chỉ trong nguồn ngoài MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) bởi @aaaaaajie
- **[Thiết bị di động]** Trường ngày trên thiết bị di động không có múi giờ không hiển thị ngày giờ chính xác ([#7473](https://github.com/nocobase/nocobase/pull/7473)) bởi @katherinehhh
- **[Bộ sưu tập: Cây]** Xóa các sự kiện cơ sở dữ liệu liên quan đến bộ sưu tập sau khi xóa bộ sưu tập dạng cây ([#7459](https://github.com/nocobase/nocobase/pull/7459)) bởi @2013xile
- **[Biểu mẫu công khai]** Giá trị mặc định của trường biểu mẫu công khai không được áp dụng khi sử dụng biến ([#7467](https://github.com/nocobase/nocobase/pull/7467)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]**

  - Sửa số hàng hiển thị không chính xác khi nhập dữ liệu trùng lặp ([#7440](https://github.com/nocobase/nocobase/pull/7440)) bởi @aaaaaajie
  - Sửa lỗi nhập thất bại khi khóa chính của bảng là văn bản một dòng ([#7416](https://github.com/nocobase/nocobase/pull/7416)) bởi @aaaaaajie
- **[Workflow]**

  - Sửa lỗi popup chi tiết không hiển thị do cấu hình route không chính xác trong trung tâm tác vụ ([#7452](https://github.com/nocobase/nocobase/pull/7452)) bởi @mytharcher
  - Hoàn thiện các tùy chọn để tự động xóa trạng thái thực thi workflow ([#7436](https://github.com/nocobase/nocobase/pull/7436)) bởi @mytharcher
  - Sửa các vấn đề liên quan đến menu thiết bị di động trong tác vụ workflow ([#7419](https://github.com/nocobase/nocobase/pull/7419)) bởi @mytharcher
- **[Trình quản lý tệp]** Sửa lỗi khi chỉnh sửa trường `storage` trong bộ sưu tập tệp. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) bởi @mytharcher
- **[Workflow: Nút song song]** Sửa lỗi xác định trạng thái không chính xác trong các nút nhánh song song ở chế độ "Chạy tất cả nhánh" gây ra kết thúc sớm ([#7445](https://github.com/nocobase/nocobase/pull/7445)) bởi @mytharcher
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi sự kiện hành động tùy chỉnh không thể thực thi thủ công ngay sau khi khởi tạo bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Sửa kết quả cập nhật không mong muốn khi sử dụng khóa chính chuỗi trong nhập xlsx. bởi @aaaaaajie
- **[Workflow: Luồng con]** Sửa lỗi quy trình con được tiếp tục và thực thi nhiều lần bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Thêm biến trạng thái cho các mẫu tùy chỉnh trong thông báo hoàn thành phê duyệt bởi @mytharcher
  - Đối với người dùng không phải là người phê duyệt hiện tại, nút xem tương ứng trong bảng luồng quy trình sẽ không được hiển thị bởi @mytharcher
