---
title: "NocoBase v1.9.40: Thêm nhiều loại tệp để xem trước trên Microsoft"
description: "Ghi chú phát hành phiên bản v1.9.40"
---

### 🚀 Cải tiến

- **[Trình xem trước tệp Office]** Thêm nhiều loại tệp hơn để xem trước trên Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trường nanoid không được tạo lại sau khi gửi biểu mẫu ([#8491](https://github.com/nocobase/nocobase/pull/8491)) bởi @katherinehhh

  - Sửa lỗi thông báo xác thực bắt buộc bị trùng lặp khi xóa trường xếp tầng ([#8476](https://github.com/nocobase/nocobase/pull/8476)) bởi @katherinehhh

- **[database]**
  - Sửa lỗi khi lọc với toán tử `empty` sau khi tải lại một bộ sưu tập ([#8496](https://github.com/nocobase/nocobase/pull/8496)) bởi @2013xile

  - sửa: cập nhật sâu các liên kết lồng nhau ([#8492](https://github.com/nocobase/nocobase/pull/8492)) bởi @chenos

- **[Trình quản lý tệp]** Sửa lỗi tên tệp lấy từ nội dung yêu cầu trở thành chuỗi được giải mã bất ngờ ([#8481](https://github.com/nocobase/nocobase/pull/8481)) bởi @mytharcher

- **[Nguồn dữ liệu: Chính]** Sửa lỗi xóa bản ghi từ khối bảng liên kết nhiều-nhiều không tuân thủ ràng buộc trường liên kết `onDelete: 'restrict'` ([#8493](https://github.com/nocobase/nocobase/pull/8493)) bởi @2013xile

- **[Khối: iframe]** Sửa lỗi khi thêm biến tổng hợp vào Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) bởi @zhangzhonghe

- **[Luồng công việc: Webhook]** Sửa lỗi thiếu dữ liệu nội dung khi phân tích nội dung chưa được cấu hình bởi @mytharcher

- **[In mẫu]** Sửa lỗi logic quyền nút in không chính xác khi các vai trò được hợp nhất. bởi @jiannx

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi đồng thời khiến việc thực thi bị tiếp tục lặp lại bởi @mytharcher

  - Sửa lỗi trả phê duyệt về nút trước đó nhưng lại trả về điểm bắt đầu bởi @mytharcher

- **[Trình quản lý di chuyển]** Sửa lỗi tiềm ẩn gây treo tiến trình do ghi nhật ký các câu lệnh SQL quá lớn có trong các ngoại lệ lỗi di chuyển bởi @cgyrock
