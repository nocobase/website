---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: hỗ trợ hiển thị bảng do plugin định nghĩa trong nguồn dữ liệu chính, chạy thử nghiệm cho các nút, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Ngày phát hành: 2025-07-24*

#### 🎉 Tính năng mới

* **[Auth: SAML 2.0]** Hỗ trợ tự động chuyển hướng đến URL SSO khi người dùng chưa được xác thực bởi @2013xile
* **[server]** Hỗ trợ cấu hình giới hạn kích thước body request thông qua biến môi trường ([#7273](https://github.com/nocobase/nocobase/pull/7273)) bởi @aaaaaajie
* **[Workflow: Node song song]** Thêm chế độ "Tất cả đã hoàn tất" cho node song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher
* **[Redis queue adapter]** Thêm adapter Redis cho hàng đợi sự kiện bởi @mytharcher

#### 🚀 Cải tiến

* **[Workflow]** Thêm hằng số kiểu json cho biến kiểm tra ([#7274](https://github.com/nocobase/nocobase/pull/7274)) bởi @mytharcher
* **[Tích hợp AI]** Loại bỏ `await` khi gọi `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) bởi @mytharcher
* **[Workflow: Tính toán JSON]** Làm cho node truy vấn JSON có thể kiểm tra được bởi @mytharcher
* **[server]** Làm cho hàng đợi bộ nhớ đồng thời khả dụng khi xử lý các mục chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher
* **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie
* **[Workflow: Node thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe
* **[Redis queue adapter]** Làm cho hàng đợi đồng thời khả dụng khi xử lý các mục chưa đầy cho adapter Redis bởi @mytharcher

#### 🐛 Sửa lỗi

* **[client]**
  * tìm kiếm mờ không hoạt động trong trường liên kết chọn khi sử dụng công thức làm trường tiêu đề ([#7280](https://github.com/nocobase/nocobase/pull/7280)) bởi @katherinehhh
  * thiếu biến đối tượng hiện tại trong quy tắc liên kết bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh
  * Cài đặt trường tiêu đề của bộ chọn dữ liệu không hợp lệ ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe
  * Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie
  * Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe
  * sự cố hiển thị khi các biến ngày không được dùng nữa được sử dụng trong trường ngày của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh
* **[database]**
  * Khắc phục lỗi phân trang đơn giản tự động do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie
  * Sửa lỗi khi xuất tập dữ liệu lớn từ PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie
  * Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie
* **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con ngăn đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile
* **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie
* **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe
* **[Workflow]** Sửa sai phiên bản phụ thuộc ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher
* **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập bởi @aaaaaajie
* **[Workflow: Phê duyệt]** URL của nút Liên kết trỏ đến một popup trên trang hiện tại, nhưng nhấp vào nó hiển thị lỗi 404 bởi @zhangzhonghe
* **[Trình quản lý email]** bộ sưu tập quan hệ messages và labes bị ngoại lệ dưới mysql bởi @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Ngày phát hành: 2025-07-18*

#### 🎉 Tính năng mới

- **[Workflow: node tính toán ngày]** Hỗ trợ chạy thử node bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Bộ chọn màu: Thêm bốn màu được đề xuất ([#7226](https://github.com/nocobase/nocobase/pull/7226)) bởi @zhangzhonghe
- **[Workflow]** Làm cho so sánh tương thích với các giá trị ngày ([#7237](https://github.com/nocobase/nocobase/pull/7237)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - quy tắc kiểu không hoạt động trên cột hành động của bảng ([#7225](https://github.com/nocobase/nocobase/pull/7225)) bởi @katherinehhh
  - Khi xóa menu, dữ liệu tương ứng trong bảng uiSchemas không bị xóa ([#7232](https://github.com/nocobase/nocobase/pull/7232)) bởi @zhangzhonghe
  - Tránh chọn các trường không phải liên kết trong appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) bởi @mytharcher
- **[Workflow: Luồng con]** Sửa lỗi xảy ra khi tín hiệu thu hồi đến nhưng quá trình thực thi đang chờ không nằm trên phiên bản hiện tại bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Ngày phát hành: 2025-07-24*

#### 🎉 Tính năng mới

- **[server]** Hỗ trợ cấu hình giới hạn kích thước body request thông qua biến môi trường ([#7273](https://github.com/nocobase/nocobase/pull/7273)) bởi @aaaaaajie
- **[Workflow: Node song song]** Thêm chế độ "Tất cả đã hoàn tất" cho node song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher
- **[Auth: SAML 2.0]** Hỗ trợ tự động chuyển hướng đến URL SSO khi người dùng chưa được xác thực bởi @2013xile
- **[Redis queue adapter]** Thêm adapter Redis cho hàng đợi sự kiện bởi @mytharcher
- **[Workflow: node tính toán ngày]** Hỗ trợ chạy thử node bởi @mytharcher

#### 🚀 Cải tiến

- **[server]** Làm cho hàng đợi bộ nhớ đồng thời khả dụng khi xử lý các mục chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher
- **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie
- **[client]** Bộ chọn màu: Thêm bốn màu được đề xuất ([#7226](https://github.com/nocobase/nocobase/pull/7226)) bởi @zhangzhonghe
- **[Tích hợp AI]** Loại bỏ `await` khi gọi `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) bởi @mytharcher
- **[Workflow: Node thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe
- **[Workflow]**
  - Thêm hằng số kiểu json cho biến kiểm tra ([#7274](https://github.com/nocobase/nocobase/pull/7274)) bởi @mytharcher
  - Sử dụng ghi log thay vì ném lỗi khi thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher
  - Làm cho so sánh tương thích với các giá trị ngày ([#7237](https://github.com/nocobase/nocobase/pull/7237)) bởi @mytharcher
- **[Trường bộ sưu tập: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher
- **[Redis queue adapter]** Làm cho hàng đợi đồng thời khả dụng khi xử lý các mục chưa đầy cho adapter Redis bởi @mytharcher
- **[Workflow: Tính toán JSON]** Làm cho node truy vấn JSON có thể kiểm tra được bởi @mytharcher
- **[Workflow: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - tìm kiếm mờ không hoạt động trong trường liên kết chọn khi sử dụng công thức làm trường tiêu đề ([#7280](https://github.com/nocobase/nocobase/pull/7280)) bởi @katherinehhh
  - thiếu biến đối tượng hiện tại trong quy tắc liên kết bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh
  - Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe
  - Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie
  - Cài đặt trường tiêu đề của bộ chọn dữ liệu không hợp lệ ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe
  - Tránh chọn các trường không phải liên kết trong appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) bởi @mytharcher
  - Khi xóa menu, dữ liệu tương ứng trong bảng uiSchemas không bị xóa ([#7232](https://github.com/nocobase/nocobase/pull/7232)) bởi @zhangzhonghe
  - quy tắc kiểu không hoạt động trên cột hành động của bảng ([#7225](https://github.com/nocobase/nocobase/pull/7225)) bởi @katherinehhh
  - sự cố hiển thị khi các biến ngày không được dùng nữa được sử dụng trong trường ngày của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh
  - sự cố hiển thị cho các trường liên kết trong quy tắc liên kết ([#7220](https://github.com/nocobase/nocobase/pull/7220)) bởi @katherinehhh
  - Sửa lỗi: Không thể giải quyết 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) bởi @zhangzhonghe
- **[database]**
  - Khắc phục lỗi phân trang đơn giản tự động do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie
  - Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie
  - Sửa lỗi khi xuất tập dữ liệu lớn từ PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie
  - Sửa lỗi khi bật phân trang đơn giản cho các bảng nguồn dữ liệu ngoài ([#7222](https://github.com/nocobase/nocobase/pull/7222)) bởi @aaaaaajie
- **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con ngăn đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile
- **[Workflow]** Sửa sai phiên bản phụ thuộc ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher
- **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Sắp xếp]** thiếu lựa chọn trường sắp xếp khi sao chép bản ghi ([#7116](https://github.com/nocobase/nocobase/pull/7116)) bởi @katherinehhh
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu ngoài trong cấu hình bộ sưu tập bởi @aaaaaajie
- **[Workflow: Luồng con]** Sửa lỗi xảy ra khi tín hiệu thu hồi đến nhưng quá trình thực thi đang chờ không nằm trên phiên bản hiện tại bởi @mytharcher
- **[Workflow: Phê duyệt]**
  - Sửa lỗi nhiều cấp độ liên kết khi gửi phê duyệt bởi @mytharcher
  - URL của nút Liên kết trỏ đến một popup trên trang hiện tại, nhưng nhấp vào nó hiển thị lỗi 404 bởi @zhangzhonghe
  - Sửa lỗi liên kết khi gửi phê duyệt bởi @mytharcher
  - Thêm khả năng chịu lỗi cho phê duyệt đã xóa trong danh sách bản ghi bởi @mytharcher
  - Sửa lỗi ngoại lệ khi xóa bản ghi bởi @mytharcher
- **[Trình quản lý email]** bộ sưu tập quan hệ messages và labes bị ngoại lệ dưới mysql bởi @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Ngày phát hành: 2025-07-18*

#### 🎉 Tính năng mới

- **[Nguồn dữ liệu: Chính]** Hỗ trợ hiển thị các bảng do plugin định nghĩa trong nguồn dữ liệu chính. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) bởi @aaaaaajie
- **[Workflow: node tính toán ngày]** Hỗ trợ chạy thử node bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Bộ chọn màu: Thêm bốn màu được đề xuất ([#7226](https://github.com/nocobase/nocobase/pull/7226)) bởi @zhangzhonghe
- **[Workflow]** Làm cho so sánh tương thích với các giá trị ngày ([#7237](https://github.com/nocobase/nocobase/pull/7237)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - quy tắc kiểu không hoạt động trên cột hành động của bảng ([#7225](https://github.com/nocobase/nocobase/pull/7225)) bởi @katherinehhh
  - Tránh chọn các trường không phải liên kết trong appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) bởi @mytharcher
  - Sửa lỗi: Không thể giải quyết 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) bởi @zhangzhonghe
  - Khi xóa menu, dữ liệu tương ứng trong bảng uiSchemas không bị xóa ([#7232](https://github.com/nocobase/nocobase/pull/7232)) bởi @zhangzhonghe
- **[database]** Sửa lỗi khi bật phân trang đơn giản cho các bảng nguồn dữ liệu ngoài ([#7222](https://github.com/nocobase/nocobase/pull/7222)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Sắp xếp]** thiếu lựa chọn trường sắp xếp khi sao chép bản ghi ([#7116](https://github.com/nocobase/nocobase/pull/7116)) bởi @katherinehhh
- **[Workflow: Luồng con]** Sửa lỗi xảy ra khi tín hiệu thu hồi đến nhưng quá trình thực thi đang chờ không nằm trên phiên bản hiện tại bởi @mytharcher
- **[Workflow: Phê duyệt]**
  - Sửa lỗi nhiều cấp độ liên kết khi gửi phê duyệt bởi @mytharcher
  - Thêm khả năng chịu lỗi cho phê duyệt đã xóa trong danh sách bản ghi bởi @mytharcher
- **[Trình quản lý email]** tối ưu hiệu suất danh sách tin nhắn email bởi @jiannx
