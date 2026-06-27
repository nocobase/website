---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật trong tuần này bao gồm: hỗ trợ cấu hình giới hạn kích thước nội dung yêu cầu qua biến môi trường, hỗ trợ xem trước tệp Office qua bản xem trước trực tiếp của Microsoft và các cải tiến khác."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*Ngày phát hành: 2025-07-31*

#### 🎉 Tính năng mới

- **[Trình xem trước tệp Office]** Hỗ trợ xem trước tệp Office thông qua bản xem trước trực tiếp của Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612
- **[Thông báo: Tin nhắn trong ứng dụng]** Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher
- **[Quy trình làm việc]** Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher
- **[Xác thực: DingTalk]** Trong ứng dụng DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị "Đang tải..." bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi không thể mở rộng bảng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe
  - Sửa hành vi bất ngờ trong sắp xếp kéo thả hàng của bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu
  - Sửa lỗi vòng lặp vô hạn khi phân tích giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe
  - Sửa lỗi hiển thị trường ngày trong cửa sổ bật lên của bộ chọn dữ liệu khi cấu hình trường liên kết trong biểu mẫu lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher
- **[Quy trình làm việc]** Sửa lỗi ID BigInt trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường liên kết lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi định dạng lưu trữ không nhất quán cho các trường datetime (không có múi giờ) của MSSQL từ các nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi xảy ra từ bộ chọn người được ủy quyền bên trong nguồn dữ liệu bên ngoài bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*Ngày phát hành: 2025-08-01*

#### 🎉 Tính năng mới

- **[server]** Hỗ trợ cấu hình giới hạn kích thước nội dung yêu cầu qua biến môi trường ([#7273](https://github.com/nocobase/nocobase/pull/7273)) bởi @aaaaaajie
- **[client]** Khối bảng hỗ trợ thêm nút 'Cài đặt cột' để cấu hình thứ tự và khả năng hiển thị của cột ([#7204](https://github.com/nocobase/nocobase/pull/7204)) bởi @kerwin612
- **[Trình xem trước tệp Office]** Hỗ trợ xem trước tệp Office thông qua bản xem trước trực tiếp của Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]**

  - hỗ trợ đọc bảng từ nguồn dữ liệu chính ([#7238](https://github.com/nocobase/nocobase/pull/7238)) bởi @aaaaaajie
- **[Quy trình làm việc: Nút song song]** Thêm chế độ "Tất cả đã hoàn thành" cho nút song song ([#7263](https://github.com/nocobase/nocobase/pull/7263)) bởi @mytharcher
- **[Xác thực: SAML 2.0]** Hỗ trợ tự động chuyển hướng đến URL SSO khi người dùng chưa được xác thực bởi @2013xile
- **[Bộ điều hợp hàng đợi Redis]** Thêm bộ điều hợp Redis cho hàng đợi sự kiện bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612
- **[server]** Làm cho hàng đợi bộ nhớ đồng thời khả dụng khi xử lý các mục chưa đầy ([#7267](https://github.com/nocobase/nocobase/pull/7267)) bởi @mytharcher
- **[database]** Tự động kích hoạt phân trang đơn giản khi tập dữ liệu vượt quá ngưỡng ([#7227](https://github.com/nocobase/nocobase/pull/7227)) bởi @aaaaaajie
- **[Thông báo: Tin nhắn trong ứng dụng]** Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher
- **[Quy trình làm việc]**

  - Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher
  - Thêm hằng số kiểu json cho biến kiểm tra ([#7274](https://github.com/nocobase/nocobase/pull/7274)) bởi @mytharcher
- **[Tích hợp AI]** Xóa `await` khi gọi `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) bởi @mytharcher
- **[Quy trình làm việc: Nút thủ công]** storePopupContext hỗ trợ lưu ngữ cảnh mặc định ([#7264](https://github.com/nocobase/nocobase/pull/7264)) bởi @zhangzhonghe
- **[Quy trình làm việc: Tính toán JSON]** Làm cho nút truy vấn JSON có thể kiểm tra được bởi @mytharcher
- **[Bộ điều hợp hàng đợi Redis]** Làm cho hàng đợi đồng thời khả dụng khi xử lý các mục chưa đầy cho bộ điều hợp Redis bởi @mytharcher
- **[Xác thực: DingTalk]** Trong ứng dụng DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị "Đang tải..." bởi @2013xile

#### 🐛 Sửa lỗi

- **[utils]** Xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh
- **[client]**

  - Sửa lỗi mục xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher
  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher
  - Sửa lỗi không thể mở rộng bảng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe
  - Sửa hành vi bất ngờ trong sắp xếp kéo thả hàng của bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu
  - Sửa lỗi vòng lặp vô hạn khi phân tích giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe
  - Sửa lỗi hiển thị trường ngày trong cửa sổ bật lên của bộ chọn dữ liệu trường liên kết của biểu mẫu lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh
  - Tìm kiếm mờ không hoạt động trong trường liên kết chọn khi sử dụng công thức làm trường tiêu đề ([#7280](https://github.com/nocobase/nocobase/pull/7280)) bởi @katherinehhh
  - Thiếu biến đối tượng hiện tại trong quy tắc liên kết của bảng con ([#7266](https://github.com/nocobase/nocobase/pull/7266)) bởi @katherinehhh
  - Sửa lỗi trường Markdown không được hiển thị chính xác trong chế độ xem chi tiết. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) bởi @aaaaaajie
  - Sau khi thay đổi trường, các trường liên kết phụ thuộc vào trường này chưa xóa giá trị của chúng ([#7262](https://github.com/nocobase/nocobase/pull/7262)) bởi @zhangzhonghe
  - Sửa lỗi hiển thị khi các biến ngày không được dùng nữa được sử dụng trong trường ngày của dữ liệu lịch sử ([#7253](https://github.com/nocobase/nocobase/pull/7253)) bởi @katherinehhh
  - Cài đặt trường tiêu đề của bộ chọn dữ liệu không hợp lệ ([#7251](https://github.com/nocobase/nocobase/pull/7251)) bởi @zhangzhonghe
- **[database]**

  - Giải quyết lỗi phân trang đơn giản tự động do quy ước đặt tên bảng. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) bởi @aaaaaajie
  - Sửa lỗi khi xuất tập dữ liệu lớn từ PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) bởi @aaaaaajie
  - Sửa lỗi sắp xếp khóa chính mặc định gây ra lỗi tải danh sách khi sử dụng nguồn dữ liệu bên ngoài MSSQL trong khối bảng. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) bởi @aaaaaajie
- **[auth]** Sửa lỗi `secret` trống trong cấu hình ứng dụng con ngăn đăng nhập ([#7239](https://github.com/nocobase/nocobase/pull/7239)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa lỗi quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher
- **[Quy trình làm việc]**

  - Sửa lỗi kết quả `undefined` khi bộ xử lý thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher
  - Sửa lỗi ID BigInt trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher
  - Sửa lỗi phiên bản phụ thuộc sai ([#7258](https://github.com/nocobase/nocobase/pull/7258)) bởi @mytharcher
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher
- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường liên kết lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu bên ngoài trong cấu hình bộ sưu tập ([#7249](https://github.com/nocobase/nocobase/pull/7249)) bởi @aaaaaajie
- **[Hành động: Chỉnh sửa hàng loạt]** Không thể thực hiện chỉnh sửa hàng loạt và cập nhật hàng loạt trong bộ chọn dữ liệu ([#7250](https://github.com/nocobase/nocobase/pull/7250)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi bảo toàn thuộc tính nguồn dữ liệu bên ngoài trong cấu hình bộ sưu tập bởi @aaaaaajie
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi định dạng lưu trữ không nhất quán cho các trường datetime (không có múi giờ) của MSSQL từ các nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Quy trình làm việc: Luồng con]** Sửa lỗi luồng bị tạm dừng bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi xảy ra từ bộ chọn người được ủy quyền bên trong nguồn dữ liệu bên ngoài bởi @mytharcher
  - URL của nút Liên kết trỏ đến một cửa sổ bật lên trên trang hiện tại, nhưng nhấp vào nó hiển thị lỗi 404 bởi @zhangzhonghe
- **[Trình quản lý email]**

  - thêm trường rawId để tối ưu hiệu suất bởi @jiannx
  - thuộc tính ref trong html gây ra ngoại lệ hiển thị bởi @jiannx
  - bộ sưu tập quan hệ messages và labes bị ngoại lệ dưới mysql bởi @jiannx
