---
title: "NocoBase v1.8.18: Sao chép ID phiên bản mới nhất mỗi lần trong cài đặt giấy phép"
description: "Ghi chú phát hành của v1.8.18"
---

### 🚀 Cải tiến

- **[Workflow]** Cập nhật menu chọn nút để hiển thị các tùy chọn theo bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher

- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - coi số 0 là giá trị rỗng trong quá trình xác thực rỗng của quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh

  - Sửa lỗi văn bản của nút liên kết bị xuống dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher

- **[Di động]** Định dạng hiển thị không chính xác của trường ngày tháng trên di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh

- **[Trình xem trước tệp văn phòng]** Sửa lỗi xảy ra khi tải tệp lên trường URL đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher

- **[Workflow]** Sửa lỗi xảy ra và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher

- **[Workflow: nút gửi thư]** Sửa lỗi nút email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công các hành động trên nhiều bản ghi bởi @mytharcher

- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx

- **[Workflow: Phê duyệt]** Sửa lỗi khi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher
