---
title: "NocoBase v1.0.1-alpha.1: Khối hỗ trợ cài đặt chiều cao"
description: "NocoBase v1.0.1-alpha.1 giới thiệu các tính năng mới như cài đặt chiều cao khối, hành động liên kết URL và hỗ trợ biến cho iframe, cùng với nhiều cải tiến và sửa lỗi để nâng cao chức năng và hiệu suất nền tảng."
---

## Tính năng mới

### Khối hỗ trợ cài đặt chiều cao ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Tài liệu tham khảo:

* [Đặt chiều cao khối](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Hành động liên kết: điều hướng đến URL đã chỉ định ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Hỗ trợ cấu hình biến trong URL hoặc tham số tìm kiếm.

<video controls="" height="250" width="100%"></video>

Tài liệu tham khảo:

* [Hành động liên kết](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Thêm biến mới có tên "Tham số tìm kiếm URL" ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Biến này chỉ khả dụng khi có chuỗi truy vấn trong URL trang, giúp sử dụng thuận tiện hơn kết hợp với [hành động liên kết](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Tài liệu tham khảo:

* [Tham số tìm kiếm URL](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Hành động liên kết](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe hỗ trợ biến ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Tài liệu tham khảo:

* [Khối iframe](https://docs.nocobase.com/handbook/block-iframe)

### Bộ nhớ tệp hỗ trợ cấu hình kích thước và loại tệp ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Tài liệu tham khảo:

* [Bộ nhớ tệp](https://docs.nocobase.com/handbook/file-manager/storage)

### Workflow: nút biến hỗ trợ chọn đường dẫn một phần của đối tượng dữ liệu làm giá trị của biến

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### Trường URL hỗ trợ xem trước ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Hiện tại chỉ hỗ trợ xem trước hình ảnh.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Trực quan hóa dữ liệu: Hỗ trợ biến "Tham số truy vấn URL" và "Vai trò hiện tại" ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Cải tiến

### Tối ưu hóa chức năng nhập và xuất ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Cải thiện độ ổn định của chức năng nhập và xuất, tăng giới hạn nhập và xuất lên 2000 bản ghi. Hỗ trợ mở rộng logic nhập và xuất của các loại trường tùy chỉnh.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Tránh thao tác nhầm bằng cách vô hiệu hóa tùy chọn biến ngày ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Ngoại trừ "thời gian hiện tại", các biến đại diện cho ngày là khoảng thời gian (mảng) chứ không phải thời điểm (chuỗi). Chúng có thể được sử dụng để lọc, nhưng không thể được sử dụng trực tiếp làm giá trị mặc định.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Tối ưu hóa tương tác gán quy tắc liên kết ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Trường chọn nhiều không hiển thị tùy chọn gán. Nếu một trường chọn đơn được chọn và gán, sau đó chuyển sang trường chọn nhiều sẽ xóa cấu hình.

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Điều chỉnh biểu tượng góc trên bên phải của cột hành động trong khối bảng ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Tinh chỉnh dự phòng lỗi cho các thành phần khác nhau ở giao diện người dùng để ngăn toàn bộ trang không thể sử dụng được do lỗi giao diện người dùng.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Thu thập thông tin gỡ lỗi và tải xuống nhật ký nhanh khi xảy ra lỗi giao diện người dùng ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Khác

* Sửa đổi giới hạn độ dài ký tự của tên người dùng thành 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Không ẩn các trường khóa ngoại ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## Sửa lỗi

### Phạm vi dữ liệu trong hộp thoại cấu hình quyền không nên hỗ trợ các biến "Biểu mẫu hiện tại" và "Bản ghi popup hiện tại" ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Hỗ trợ chọn trực tiếp giá trị của một biến làm giá trị mặc định cho trường liên kết ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Sửa lỗi xảy ra khi thêm hành động "Yêu cầu tùy chỉnh" nhiều lần ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Khác

* Sửa lỗi nội dung trong bảng con không bị xóa sau khi gửi biểu mẫu. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Sửa lỗi sử dụng bất thường biến "Đối tượng hiện tại" trong bảng con. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* Thêm tùy chọn 'Đặt mức thu phóng mặc định' cho trường bản đồ. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Sửa lỗi khối không hiển thị khi thêm khối bằng cách sử dụng mẫu khối trong cửa sổ popup. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Sửa lỗi kiểu của mẫu dữ liệu biểu mẫu. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Workflow: kiểu hộp biểu thức biến mất trong nút tính toán. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Workflow: loại trường không chính xác khi được tạo trong biểu mẫu tùy chỉnh của nút thủ công. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Workflow: vấn đề quyền kích hoạt sự kiện hành động tùy chỉnh. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Workflow: cấu hình độ sâu không chính xác của việc tải trước liên kết cho nhiều nguồn dữ liệu. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* Lỗi thư viện `json-templates`. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* Trình quản lý tệp: lỗi khi tải lên hoặc xóa tệp trên COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* Quy tắc liên kết biểu mẫu hiển thị [object Object] khi gán giá trị 0,00 cho trường số. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Bảng con thiếu mục cài đặt điều khiển cho nút thêm mới. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Nút gửi trong biểu mẫu chỉnh sửa bảng thiếu mục cài đặt quy tắc liên kết. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Trực quan hóa dữ liệu: sửa lỗi các thành phần trường không hiển thị khi đặt giá trị mặc định cho trường bộ lọc biểu đồ ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Xác thực: sửa lỗi không tìm thấy trang đăng ký cho bộ xác thực cơ bản mới tạo. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Bản địa hóa: sửa lỗi tiêu đề trang không được dịch khi dịch văn bản menu. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Bản đồ: sửa lỗi AMap hiển thị lỗi khóa mặc dù cấu hình đúng. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
