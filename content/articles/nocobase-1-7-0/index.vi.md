---
title: "NocoBase v1.7.0 Chính thức phát hành"
description: "Nâng cao quản lý quyền hạn, tối ưu hiệu suất hệ thống và mở mã nguồn các plugin để cải thiện toàn diện chức năng và trải nghiệm người dùng"
---

## Tính năng mới

### Hợp nhất vai trò

Hợp nhất vai trò là một chế độ quản lý quyền hạn. Tùy theo cài đặt hệ thống, nhà phát triển hệ thống có thể chọn sử dụng `Vai trò độc lập`, `Cho phép hợp nhất vai trò` hoặc `Cho phép hợp nhất vai trò` để đáp ứng các yêu cầu về quyền hạn khác nhau.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

Tham khảo: [Hợp nhất vai trò](https://docs.nocobase.com/handbook/acl/manual)

### Xác thực và Xác thực hai yếu tố (2FA)

Tính năng mã xác thực ban đầu đã được nâng cấp thành một hệ thống quản lý xác thực toàn diện, hỗ trợ nhiều phương thức xác thực (ví dụ: TOTP). Hệ thống cũng hỗ trợ xác thực hai yếu tố (2FA), yêu cầu thêm một bước xác thực khi đăng nhập, ngoài mật khẩu, giúp tăng cường đáng kể bảo mật tài khoản.

![20250603133219_rec_-vg5hh3.gif](https://static-docs.nocobase.com/20250603133219_rec_-vg5hh3.gif)

Tham khảo:

* [Xác thực](https://docs.nocobase.com/handbook/verification)
* [Xác thực hai yếu tố](https://docs.nocobase.com/handbook/two-factor-authentication)
* [Ứng dụng xác thực TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### In theo mẫu

In theo mẫu hiện hỗ trợ hiển thị hình ảnh động và mã vạch.

![](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

Tham khảo: [In theo mẫu](https://docs-cn.nocobase.com/handbook/action-template-print#%E5%9C%A8-docx-%E6%96%87%E4%BB%B6%E4%B8%AD%E6%8F%92%E5%85%A5%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87)

### Bộ lọc nhiều từ khóa

Plugin bộ lọc nhiều từ khóa bổ sung khả năng lọc văn bản mạnh mẽ cho nền tảng NocoBase, cho phép bạn lọc dữ liệu bằng nhiều từ khóa và nâng cao đáng kể tính linh hoạt cũng như hiệu quả của việc truy vấn dữ liệu.

![20250603152726_rec_-ix3j8w.gif](https://static-docs.nocobase.com/20250603152726_rec_-ix3j8w.gif)

Tham khảo: [Bộ lọc nhiều từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)

### Bộ lọc ngày hỗ trợ chọn phạm vi ngày tương đối

Hỗ trợ lọc theo khoảng thời gian tùy chỉnh (ngày/tuần/tháng/quý/năm) và các ngày cụ thể, cho phép truy vấn phạm vi thời gian linh hoạt hơn.

![20250603130948_rec_-plwa6o.gif](https://static-docs.nocobase.com/20250603130948_rec_-plwa6o.gif)

### Biến bên trái

Các biến bên trái trong một điều kiện được sử dụng để xác định "đối tượng được đánh giá" trong quy tắc liên kết, tức là điều kiện sẽ đánh giá giá trị của biến này để xác định xem hành vi liên kết có nên được kích hoạt hay không.

![20250417214217](https://static-docs.nocobase.com/20250417214217.png)

Tham khảo: [Biến bên trái](https://docs.nocobase.com/handbook/ui/linkage-rule#left-side-variables)

### Mẫu kế thừa

Mẫu kế thừa lý tưởng khi bạn muốn các khối tuân theo các bản cập nhật cơ bản của một mẫu nhưng cũng cho phép các thay đổi cụ thể. Các khối kế thừa cài đặt của mẫu và có thể mở rộng hoặc ghi đè chúng. Các cài đặt không được thay đổi trong khối sẽ tự động cập nhật theo mẫu.

![主界面](https://static-docs.nocobase.com/main-screen-block-templates.png)

Tham khảo: [Mẫu kế thừa](https://docs.nocobase.com/handbook/block-template#inherited-template)

### Quy tắc liên kết khối

Quy tắc liên kết khối cho phép người dùng kiểm soát động khả năng hiển thị của các khối, cho phép quản lý việc hiển thị phần tử ở cấp độ khối.

![image-ccerr7.png](https://static-docs.nocobase.com/image-ccerr7.png)

Tham khảo: [Quy tắc liên kết khối](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-linkage-rule)

### Sau khi gửi thành công

Sau khi gửi thành công, hỗ trợ làm mới dữ liệu trong các khối khác và điều hướng đến trang chi tiết với các tham số.

![image-v29vlv.png](https://static-docs.nocobase.com/image-v29vlv.png)

Tham khảo: [Sau khi gửi thành công](https://docs.nocobase.com/handbook/ui/actions/action-settings/affter-successful)

### Quản lý danh mục quy trình làm việc

![1-62ogb6.png](https://static-docs.nocobase.com/1-62ogb6.png)

### Plugin mã nguồn mở cho Phòng ban và URL tệp đính kèm

![image-br8u55.png](https://static-docs.nocobase.com/image-br8u55.png)

## Cải tiến

### Cải tiến thuộc tính quy tắc liên kết

* Các trường có thể chọn hiện hỗ trợ các tùy chọn có thể cấu hình
* Các trường ngày hiện hỗ trợ thiết lập phạm vi ngày

![20250603143237_rec_-k8hene.gif](https://static-docs.nocobase.com/20250603143237_rec_-k8hene.gif)

Tham khảo: [Quy tắc liên kết trường](https://docs.nocobase.com/handbook/ui/blocks/block-settings/field-linkage-rule)

### Import Pro

Cấu hình nhập hiện hỗ trợ sử dụng nhiều trường để xác định duy nhất các bản ghi, cũng như các tùy chọn để ghi đè hoặc bỏ qua các ô trống trong quá trình nhập.

![20250603153457_rec_-9zfsfx.gif](https://static-docs.nocobase.com/20250603153457_rec_-9zfsfx.gif)

Tham khảo:[Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Tối ưu hiệu suất xuất XLSX

* Khắc phục tình trạng tràn bộ nhớ và đứng ứng dụng khi xuất bảng dữ liệu lớn
* Khắc phục khả năng có dữ liệu trùng lặp trong dữ liệu xuất ra
* Tối ưu truy vấn cho dữ liệu xuất dựa trên chỉ mục, ràng buộc duy nhất và chiến lược chỉ mục
* Thêm hàng đợi xuất đồng thời và thiết lập số lượng đồng thời thông qua các biến môi trường.

![20250505171706](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20250505171706.png)

Tham khảo:

* [Xuất đồng thời](https://docs.nocobase.com/handbook/action-export-pro#concurrent-exports)
* [Về hiệu suất](https://docs.nocobase.com/handbook/action-export-pro#about-performance)

### Tối ưu hiệu suất nhập tệp XLSX

* Thay đổi chiến lược nhập từng hàng đơn lẻ ban đầu thành chèn hàng loạt
* Tái cấu trúc cơ chế xác định trùng lặp. Thay đổi từ xử lý từng hàng thành xử lý hàng loạt trong khi vẫn giữ nguyên logic cập nhật và kích hoạt quy trình làm việc

Tham khảo: [Về hiệu suất](https://docs.nocobase.com/handbook/action-import-pro#about-performance)

### Hiệu suất thực thi quy trình làm việc được cải thiện 100%

![image-ligrnm.png](https://static-docs.nocobase.com/image-ligrnm.png)
