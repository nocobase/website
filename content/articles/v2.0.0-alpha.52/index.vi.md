---
title: "NocoBase v2.0.0-alpha.52: bổ sung hỗ trợ cài đặt thêm/chọn/hủy liên kết trong biểu mẫu con nhiều-nhiều"
description: "Ghi chú phát hành v2.0.0-alpha.52"
---

### 🎉 Tính năng mới

- **[client]** Thêm hỗ trợ cho các tùy chọn thêm/chọn/hủy liên kết trong biểu mẫu con nhiều-một ([#8099](https://github.com/nocobase/nocobase/pull/8099)) bởi @katherinehhh

- **[Nguồn dữ liệu: REST API]** Thêm tùy chọn `trình chuyển đổi thông báo lỗi` trong cấu hình nguồn dữ liệu api restful bởi @cgyrock

### 🚀 Cải tiến

- **[auth]** Sửa lỗi [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) bởi @2013xile

- **[Hành động: Nhập bản ghi]**
  - Cho phép chọn ID cho các trường nhập ([#8133](https://github.com/nocobase/nocobase/pull/8133)) bởi @katherinehhh

  - Cho phép chọn ID cho các trường nhập ([#8132](https://github.com/nocobase/nocobase/pull/8132)) bởi @katherinehhh

- **[Quy trình: Phê duyệt]** Thay đổi API để lấy một mục phê duyệt duy nhất và đơn giản hóa mã bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi ngăn trạng thái vô hiệu hóa của phần tử con chặn việc chọn trường quan hệ ([#8131](https://github.com/nocobase/nocobase/pull/8131)) bởi @katherinehhh

  - Sửa lỗi thành phần `RemoteSelect` tải bản ghi không chính xác khi giá trị là null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) bởi @mytharcher

  - Sửa lỗi chiều rộng thành phần UI không nhất quán khi chọn “Quá khứ” hoặc “Tiếp theo” cho trường lọc ngày. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) bởi @gchust

  - Sửa lỗi nhãn trường mặc định trong khối biểu mẫu lọc không thể được dịch chính xác sang nhiều ngôn ngữ. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) bởi @gchust

  - Sửa lỗi kiểu tiêu đề và mô tả của khối JS không nhất quán với các khối khác. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) bởi @gchust

  - Sửa lỗi bảng con lồng trong biểu mẫu con không hiển thị dữ liệu ([#8117](https://github.com/nocobase/nocobase/pull/8117)) bởi @katherinehhh

  - Sửa lỗi ngắt dòng tooltip trường văn bản dài ([#8122](https://github.com/nocobase/nocobase/pull/8122)) bởi @katherinehhh

  - Sửa lỗi dữ liệu có thể chọn cho các trường quan hệ trong khối biểu mẫu lọc không chính xác. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) bởi @gchust

  - Sửa lỗi các tùy chọn có thể chọn không được liệt kê đầy đủ khi sử dụng toán tử “là bất kỳ” hoặc “không là” để lọc trường dựa trên tùy chọn. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) bởi @gchust

  - Sửa lỗi cấu hình trường tùy chỉnh trong biểu mẫu lọc không được điền sẵn chính xác và một số cài đặt không có hiệu lực. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) bởi @gchust

  - Sửa lỗi xóa giá trị lọc thời gian giữa và kích hoạt lại bộ lọc gây ra lỗi. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) bởi @gchust

  - Sửa lỗi giá trị trường số không được điền sẵn chính xác trong hành động lọc. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) bởi @gchust

  - Sửa lỗi một số toán tử trường trong biểu mẫu lọc không lọc dữ liệu chính xác. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) bởi @gchust

  - Sửa lỗi lọc trên trường Checkbox không có hiệu lực. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) bởi @gchust

- **[flow-engine]**
  - Sửa lỗi: chuyển đổi không chính xác khi sử dụng kiểu số nguyên làm tùy chọn enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) bởi @chenos

  - Sửa lỗi các mục menu mô hình con có thể bật/tắt không hoạt động khi bỏ qua `useModel` bằng cách suy luận từ `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) bởi @zhangzhonghe

- **[server]** Sửa lỗi các quy trình được kích hoạt không được thêm vào hàng đợi xử lý sau khi nhập dữ liệu, đảm bảo các quy trình chạy như mong đợi ngay sau khi nhập ([#8121](https://github.com/nocobase/nocobase/pull/8121)) bởi @mytharcher

- **[Thông báo: Email]** Sửa lỗi giới hạn kết nối thông báo email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) bởi @jiannx

- **[Trường bộ sưu tập: Công thức]** Sửa lỗi trường công thức trong hành động lọc và khối biểu mẫu lọc không thể nhập giá trị. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) bởi @gchust

- **[Đa không gian]** Sửa lỗi tạo các trường khác trong bộ sưu tập hệ thống bởi @jiannx
