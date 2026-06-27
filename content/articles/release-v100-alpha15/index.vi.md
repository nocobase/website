---
title: "NocoBase 1.0.0-alpha.15: Plugin mới và cải thiện tương tác 'Cấu hình hành động'"
description: "NocoBase v1.0.0-alpha.15 giới thiệu xác thực LDAP, trình kích hoạt hành động tùy chỉnh, hỗ trợ Gantt và Kanban, cùng nhiều tính năng khác. Bản cập nhật này cũng cải thiện tương tác 'Cấu hình hành động' và khắc phục nhiều lỗi để nâng cao hiệu suất nền tảng."
---

## Tính năng mới

### Plugin xác thực: Xác thực LDAP

Hỗ trợ người dùng đăng nhập vào NocoBase bằng thông tin xác thực máy chủ LDAP của họ. Để biết thêm thông tin, hãy tham khảo tài liệu [Xác thực: LDAP](https://docs.nocobase.com/handbook/auth-ldap).

![](https://static-docs.nocobase.com/202405191513995.png)

### Plugin quy trình làm việc: trình kích hoạt hành động tùy chỉnh

Khi các hành động CRUD không đáp ứng được nhu cầu của bạn, bạn có thể sử dụng trình kích hoạt hành động tùy chỉnh của quy trình làm việc để sắp xếp logic xử lý dữ liệu của riêng mình. Để biết thêm thông tin, hãy tham khảo tài liệu [Quy trình làm việc / Trình kích hoạt hành động tùy chỉnh](https://docs.nocobase.com/handbook/workflow-custom-action-trigger).

![](https://static-docs.nocobase.com/202405191515770.png)

### Khối bảng hỗ trợ cột cố định

![](https://static-docs.nocobase.com/202405191512587.png)

### Hỗ trợ thêm Gantt và Kanban trong cửa sổ bật lên

![](https://static-docs.nocobase.com/202405191512280.png)

### Khối chi tiết hỗ trợ quy tắc liên kết

Cho phép cấu hình thuộc tính hiển thị và ẩn của các trường.

![](https://static-docs.nocobase.com/202405191513781.png)

### Nút yêu cầu HTTP của quy trình làm việc hỗ trợ dữ liệu định dạng `application/www-x-form-urlencoded`

![](https://static-docs.nocobase.com/202405191514472.png)

### Hộp nhập liệu của nút yêu cầu HTTP quy trình làm việc hỗ trợ mẫu chuỗi

![](https://static-docs.nocobase.com/202405191514748.png)

### Mẫu plugin để phát triển

Xem tài liệu về [ví dụ plugin](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Cải tiến

### Cải thiện tương tác “Cấu hình hành động”

Tất cả các hành động được hiển thị trong một danh sách duy nhất trong menu thả xuống, không còn phân biệt giữa “Bật hành động” và “Tùy chỉnh”.

* Các hành động chỉ có thể thêm một lần: Các hành động này giữ nguyên hiệu ứng chuyển đổi.
* Các hành động có thể thêm nhiều lần: Các hành động này không còn sử dụng tương tác chuyển đổi và có thể được thêm nhiều lần.
* Hợp nhất các hành động tương tự
  * “Thêm mới” và “Thêm bản ghi”
  * “Gửi” và “Lưu bản ghi”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Định dạng dữ liệu thống nhất cho kết quả nút yêu cầu HTTP của quy trình làm việc:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Sắp xếp lại sổ tay quy trình làm việc

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Sửa lỗi

### Plugin nhật ký hiện chỉ hiển thị nhật ký của ứng dụng hiện tại

Khi có nhiều ứng dụng:

* Plugin nhật ký chỉ hiển thị danh sách tệp nhật ký cho ứng dụng hiện tại.
* Các thư mục quy trình làm việc và yêu cầu tùy chỉnh được đặt trong thư mục ứng dụng.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Các bản sửa lỗi chính khác bao gồm:

* Biểu đồ không chuyển đổi trường ngày sang múi giờ của máy khách khi truy vấn dữ liệu tổng hợp theo trường ngày. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* Sự cố làm mới view, khi view cần được thoát và vào lại sau khi đồng bộ hóa với cơ sở dữ liệu. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* Khối bảng cây không thu gọn tất cả các nút khi thêm một nút con. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* Cài đặt trường tiêu đề của bảng dữ liệu không có hiệu lực. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Trường Bigint mất độ chính xác ở chế độ chỉ đọc. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Các tệp nhật ký đang mở không được đóng sau khi dừng một ứng dụng con. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Lỗi chọn mô hình dữ liệu quan hệ của nút tổng hợp quy trình làm việc. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* Tùy chọn bỏ qua lỗi không hiệu quả ở chế độ đồng bộ cho nút yêu cầu HTTP của quy trình làm việc. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* Hộp nhập giá trị của nút yêu cầu HTTP quy trình làm việc bị tràn. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Ký tự đặc biệt khiến nút yêu cầu HTTP của quy trình làm việc bị treo. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Đã sửa lỗi cài đặt marginBlock trong trình chỉnh sửa chủ đề ảnh hưởng đến khoảng cách trường biểu mẫu. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Đã sửa lỗi nhấp vào tùy chọn “Giấy phép” ở góc trên bên phải trang chuyển hướng sai. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Đã sửa lỗi toán tử trường không hợp lệ khi lưu biểu mẫu bộ lọc dưới dạng mẫu khối. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
