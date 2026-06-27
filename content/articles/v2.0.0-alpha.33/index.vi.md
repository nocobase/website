---
title: "NocoBase v2.0.0-alpha.33: Thêm hỗ trợ phân trang cho bảng con"
description: "Ghi chú phát hành của v2.0.0-alpha.33"
---

### 🎉 Tính năng mới

- **[client]** thêm hỗ trợ phân trang cho bảng con ([#7754](https://github.com/nocobase/nocobase/pull/7754)) bởi @katherinehhh

### 🚀 Cải tiến

- **[undefined]** cập nhật tài liệu tiếng Anh của plugin biểu đồ ([#7748](https://github.com/nocobase/nocobase/pull/7748)) bởi @heziqiang

- **[telemetry]** Thêm số liệu đo từ xa cho số lượng ứng dụng con trực tuyến, v.v. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) bởi @2013xile

- **[Workflow]** Hỗ trợ khối dữ liệu trong workflow để sử dụng menu cài đặt chi tiết hợp nhất ([#7771](https://github.com/nocobase/nocobase/pull/7771)) bởi @mytharcher

- **[Trình quản lý đa ứng dụng (không còn được hỗ trợ)]** Bật khởi động không đồng bộ cho các ứng dụng con bằng hàng đợi ([#7749](https://github.com/nocobase/nocobase/pull/7749)) bởi @2013xile

- **[Trực quan hóa dữ liệu]** thêm tùy chọn định dạng thời gian cho dữ liệu biểu đồ ([#7763](https://github.com/nocobase/nocobase/pull/7763)) bởi @heziqiang

- **[Workflow: Phê duyệt]** Thêm thông báo cho người được ủy quyền và người được thêm bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi nhãn của các kiểu enum trong các thành phần liên quan đến biến không hiển thị đúng ngôn ngữ. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) bởi @gchust

  - Sửa lỗi thiếu chỉ báo trường bắt buộc sau khi đặt xác thực giao diện người dùng ([#7760](https://github.com/nocobase/nocobase/pull/7760)) bởi @katherinehhh

  - sửa lỗi xóa ngày không có múi giờ trong biểu mẫu chỉnh sửa ([#7759](https://github.com/nocobase/nocobase/pull/7759)) bởi @katherinehhh

  - Sửa lỗi xác thực trường bắt buộc cho các quy tắc liên kết ([#7756](https://github.com/nocobase/nocobase/pull/7756)) bởi @zhangzhonghe

  - giải quyết lỗi Ngày không hợp lệ khi xóa Ngày cụ thể trong bộ lọc… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) bởi @katherinehhh

  - Sửa lỗi xác thực bắt buộc không thành công cho trường Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) bởi @katherinehhh

  - Thêm cấu hình phạm vi dữ liệu cho các trường quan hệ trong biểu mẫu bộ lọc ([#7761](https://github.com/nocobase/nocobase/pull/7761)) bởi @zhangzhonghe

  - sửa lỗi định dạng thời gian trong các trường bảng con ([#7750](https://github.com/nocobase/nocobase/pull/7750)) bởi @katherinehhh

- **[flow-engine]**
  - khi giá trị bộ lọc trường được đặt thành false, yêu cầu có phạm vi dữ liệu không chính xác ([#7766](https://github.com/nocobase/nocobase/pull/7766)) bởi @gchust

  - không thể giải quyết giá trị trường liên kết của biến đối tượng hiện tại của biểu mẫu con ([#7751](https://github.com/nocobase/nocobase/pull/7751)) bởi @gchust

  - sửa: giải quyết vấn đề tham số yêu cầu trang sau khi xóa dữ liệu trên trang cuối cùng ([#7755](https://github.com/nocobase/nocobase/pull/7755)) bởi @katherinehhh

- **[server]** Cô lập kênh Pub-Sub theo tên ứng dụng ([#7762](https://github.com/nocobase/nocobase/pull/7762)) bởi @mytharcher

- **[Khối: GridCard]** sửa lỗi trùng lặp dữ liệu giữa khối danh sách và khối thẻ lưới ([#7773](https://github.com/nocobase/nocobase/pull/7773)) bởi @katherinehhh

- **[Trình quản lý đa ứng dụng (không còn được hỗ trợ)]** Bộ sưu tập không chính xác cho số liệu trạng thái ứng dụng con ([#7772](https://github.com/nocobase/nocobase/pull/7772)) bởi @2013xile

- **[Workflow]**
  - Đã giải quyết lỗi trình điều phối workflow ở chế độ cụm không xác định chính xác trạng thái rảnh, điều này có thể dẫn đến việc tiêu thụ sự kiện hàng đợi không cần thiết trước khi plugin sẵn sàng ([#7768](https://github.com/nocobase/nocobase/pull/7768)) bởi @mytharcher

  - Sửa lỗi trong chế độ tách dịch vụ, khi thực thi thủ công một workflow chứa nút ngắt sẽ vẫn bị kẹt ở trạng thái chờ xử lý ([#7767](https://github.com/nocobase/nocobase/pull/7767)) bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi xảy ra khi trùng lặp workflow phê duyệt bởi @mytharcher

  - Không còn hỗ trợ tạo nút phê duyệt trong các nhánh song song để tránh các vấn đề do trạng thái quy trình gây ra bởi @mytharcher

- **[Trình quản lý Email]**
  - thêm nhật ký đồng bộ bởi @jiannx

  - thêm di chuyển cho các chỉ mục bởi @jiannx
