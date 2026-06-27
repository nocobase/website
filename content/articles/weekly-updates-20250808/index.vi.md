---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: thêm tùy chọn cấu hình liên quan đến chữ ký, hỗ trợ đồng bộ lại cho trình quản lý email, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Ngày phát hành: 2025-08-05*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi chuỗi thô của biến được gửi cùng với biểu mẫu ([#7337](https://github.com/nocobase/nocobase/pull/7337)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Thêm tiêu đề nhiệm vụ cho các mục được thêm và ủy quyền bởi @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Ngày phát hành: 2025-08-04*

#### 🎉 Tính năng mới

- **[Auth: SAML 2.0]** Thêm các tùy chọn cấu hình liên quan đến chữ ký bởi @2013xile

#### 🚀 Cải tiến

- **[Workflow: JavaScript]** Thay đổi bộ nhớ đệm thành bộ nhớ đệm ứng dụng để tránh lỗi trong chế độ cụm bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi tooltip hiển thị [object Object] khi di chuột trong bảng hành động ([#7322](https://github.com/nocobase/nocobase/pull/7322)) bởi @katherinehhh
  - Khi sử dụng biến để đặt giá trị mặc định của trường trong biểu mẫu bộ lọc, nếu giá trị biến trống, hộp nhập sẽ hiển thị chuỗi biến gốc ([#7335](https://github.com/nocobase/nocobase/pull/7335)) bởi @zhangzhonghe
- **[Collection: Cây]** Sửa logic đồng bộ đường dẫn của bộ sưu tập cây ([#7330](https://github.com/nocobase/nocobase/pull/7330)) bởi @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Ngày phát hành: 2025-08-01*

#### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, tự động lấy nét trường nhập trong quá trình hiển thị trang ban đầu khi được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi mục xem trước tệp trên url null ([#7315](https://github.com/nocobase/nocobase/pull/7315)) bởi @mytharcher
  - Thêm URL đầy đủ vào tệp cục bộ khi xem trước ([#7314](https://github.com/nocobase/nocobase/pull/7314)) bởi @mytharcher
- **[utils]** Xử lý múi giờ không chính xác cho parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) bởi @katherinehhh
- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher
- **[Quản lý tệp]** Sửa quyền trường lưu trữ ([#7316](https://github.com/nocobase/nocobase/pull/7316)) bởi @mytharcher
- **[Workflow]** Sửa lỗi kết quả `undefined` khi processor thoát ([#7317](https://github.com/nocobase/nocobase/pull/7317)) bởi @mytharcher
- **[Workflow: Nút tính toán động]** Sửa lỗi do API cũ gây ra ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher
- **[Workflow: Luồng con]** Sửa lỗi luồng bị tạm dừng bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Ngày phát hành: 2025-08-06*

#### 🐛 Sửa lỗi

- **[Trình quản lý email]** hỗ trợ đồng bộ lại bởi @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Ngày phát hành: 2025-08-06*

#### 🚀 Cải tiến

- **[Workflow]** Tiêu đề workflow trong thẻ tác vụ sẽ không còn hiển thị với gạch ngang, ngay cả khi phiên bản tương ứng bị vô hiệu hóa ([#7339](https://github.com/nocobase/nocobase/pull/7339)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** vấn đề biến ngày trong giá trị mặc định của trường ngày trong khối bộ lọc biểu đồ ([#7291](https://github.com/nocobase/nocobase/pull/7291)) bởi @katherinehhh
- **[Workflow: CC]** Sửa lỗi không thể xóa khối ([#7338](https://github.com/nocobase/nocobase/pull/7338)) bởi @mytharcher
- **[Trình quản lý email]** Phân biệt thủ công giữa chuyển tiếp và trả lời bởi @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Ngày phát hành: 2025-08-05*

#### 🎉 Tính năng mới

- **[client]** Thêm tùy chọn "Tự động lấy nét" cho các thành phần Input, TextArea, URL và InputNumber, tự động lấy nét trường nhập trong quá trình hiển thị trang ban đầu khi được bật ([#7320](https://github.com/nocobase/nocobase/pull/7320)) bởi @zhangzhonghe
- **[Auth: SAML 2.0]** Thêm các tùy chọn cấu hình liên quan đến chữ ký bởi @2013xile

#### 🚀 Cải tiến

- **[Workflow: JavaScript]** Thay đổi bộ nhớ đệm thành bộ nhớ đệm ứng dụng để tránh lỗi trong chế độ cụm bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi chuỗi thô của biến được gửi cùng với biểu mẫu ([#7337](https://github.com/nocobase/nocobase/pull/7337)) bởi @zhangzhonghe
  - Sửa lỗi tooltip hiển thị [object Object] khi di chuột trong bảng hành động ([#7322](https://github.com/nocobase/nocobase/pull/7322)) bởi @katherinehhh
  - Khi sử dụng biến để đặt giá trị mặc định của trường trong biểu mẫu bộ lọc, nếu giá trị biến trống, hộp nhập sẽ hiển thị chuỗi biến gốc ([#7335](https://github.com/nocobase/nocobase/pull/7335)) bởi @zhangzhonghe
- **[undefined]** Thêm plugin mới vào preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) bởi @mytharcher
- **[Collection: Cây]** Sửa logic đồng bộ đường dẫn của bộ sưu tập cây ([#7330](https://github.com/nocobase/nocobase/pull/7330)) bởi @ChimingLiu
- **[Trình xem trước tệp văn phòng]** Hỗ trợ xem trước tệp `.docx`, `.xlsx` và `.pptx` chỉ với URL ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher
- **[Workflow: Nút tính toán động]** Sửa lỗi do API cũ gây ra ([#7321](https://github.com/nocobase/nocobase/pull/7321)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Thêm tiêu đề nhiệm vụ cho các mục được thêm và ủy quyền bởi @mytharcher
- **[Trình quản lý email]** Hỗ trợ cùng một email cho nhiều người bởi @jiannx
