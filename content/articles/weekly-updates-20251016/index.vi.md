---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Thêm biến \"Loại thiết bị hiện tại\", Cải thiện chức năng tìm kiếm web của plugin-ai"
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Ngày phát hành: 2025-10-15*

### 🚀 Cải tiến

* **[Workflow: Phê duyệt]** Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel bởi @mytharcher

### 🐛 Sửa lỗi

* **[Workflow: Phê duyệt]** Sửa lỗi script di chuyển báo lỗi do bảng không tồn tại khi ứng dụng chưa được cài đặt bởi @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Ngày phát hành: 2025-10-14*

### 🚀 Cải tiến

* **[client]** Để có được kiểu MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện kiểu MIME của tệp trong client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher
* **[Workflow]**
  * Hỗ trợ giới hạn số lượng nút tối đa trong một workflow thông qua biến môi trường ([#7542](https://github.com/nocobase/nocobase/pull/7542)) bởi @mytharcher
  * Thêm tùy chọn `keepBranch` khi xóa nút ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher
* **[Workflow: Nút lặp]** Hỗ trợ giới hạn số chu kỳ tối đa cho nút lặp thông qua biến môi trường ([#7543](https://github.com/nocobase/nocobase/pull/7543)) bởi @mytharcher
* **[Workflow: Phê duyệt]** Thêm nút in vào popup chi tiết trong các khối phê duyệt tùy chỉnh bởi @mytharcher

### 🐛 Sửa lỗi

* **[client]**
  * Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa thu phóng trong lúc xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher
  * Sửa lỗi thiếu các thuộc tính động trong component `AssignedField` gây ra lỗi tải tệp trong các nút “Tạo bản ghi” hoặc “Cập nhật bản ghi” ([#7556](https://github.com/nocobase/nocobase/pull/7556)) bởi @mytharcher
* **[Biểu mẫu công khai]** Sửa lỗi quy tắc tải lên cho trường tệp trong biểu mẫu công khai không chính xác ([#7553](https://github.com/nocobase/nocobase/pull/7553)) bởi @mytharcher
* **[Lịch]** Sửa lỗi truy vấn dữ liệu do định danh duy nhất trong khối lịch ([#7562](https://github.com/nocobase/nocobase/pull/7562)) bởi @katherinehhh
* **[Xác thực: LDAP]** Sửa lỗi liên kết LDAP thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Ngày phát hành: 2025-10-11*

### 🐛 Sửa lỗi

* **[server]** Lỗi di chuyển khóa chính ([#7568](https://github.com/nocobase/nocobase/pull/7568)) bởi @2013xile
* **[Lịch]** Sửa lỗi truy vấn dữ liệu do định danh duy nhất trong khối lịch ([#7562](https://github.com/nocobase/nocobase/pull/7562)) bởi @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Ngày phát hành: 2025-10-14*

### 🎉 Tính năng mới

* **[Nhân viên AI]** Cải thiện chức năng tìm kiếm web của plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) bởi @cgyrock

### 🚀 Cải tiến

* **[client]** Để có được kiểu MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện kiểu MIME của tệp trong client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher
* **[flow-engine]**
  * hỗ trợ biến popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) bởi @gchust
  * Nâng cao trải nghiệm chỉnh sửa mã với các đoạn mã phong phú hơn và tính năng tự động hoàn thành mã theo ngữ cảnh cho nhiều tình huống khác nhau ([#7559](https://github.com/nocobase/nocobase/pull/7559)) bởi @gchust
  * Chuẩn hóa các workflow tự động để được kích hoạt nhất quán bởi sự kiện “beforeRender”, đảm bảo hoạt động có thể dự đoán và thống nhất trên các quy trình. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) bởi @gchust
* **[Workflow]** Thêm tùy chọn `keepBranch` khi xóa nút ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher
* **[Trực quan hóa dữ liệu]** Mở rộng các loại biểu đồ; Tối ưu hóa giao diện người dùng và trải nghiệm tương tác. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) bởi @heziqiang
* **[Workflow: Phê duyệt]** Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel bởi @mytharcher

### 🐛 Sửa lỗi

* **[client]**
  * Sửa lỗi hiển thị trang bất thường khi chuyển đổi phân trang bảng ([#7572](https://github.com/nocobase/nocobase/pull/7572)) bởi @zhangzhonghe
  * Không thể cấu hình giá trị trường gán cho hành động `Cập nhật` và `Cập nhật hàng loạt` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) bởi @gchust
  * Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa thu phóng trong lúc xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher
* **[Workflow: Phê duyệt]** Sửa lỗi script di chuyển báo lỗi do bảng không tồn tại khi ứng dụng chưa được cài đặt bởi @mytharcher
* **[Xác thực: LDAP]** Sửa lỗi liên kết LDAP thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Ngày phát hành: 2025-10-13*

### 🎉 Tính năng mới

* **[client]** Thêm biến “Loại thiết bị hiện tại” ([#7576](https://github.com/nocobase/nocobase/pull/7576)) bởi @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Ngày phát hành: 2025-10-11*

### 🐛 Sửa lỗi

* **[server]** Lỗi di chuyển khóa chính ([#7568](https://github.com/nocobase/nocobase/pull/7568)) bởi @2013xile
* **[undefined]** Khớp đường dẫn định tuyến hỗ trợ nhiều ứng dụng mới ([#7570](https://github.com/nocobase/nocobase/pull/7570)) bởi @jiannx
* **[Nhân viên AI]** Sửa lỗi trong công cụ mô hình hóa dữ liệu của nhân viên AI khi sử dụng ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) bởi @cgyrock
