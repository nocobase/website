---
title: "NocoBase v2.0.58: Thêm API quản trị để chạy lại các luồng công việc đã bắt đầu từ đầu hoặc từ một nút chỉ định"
description: "Ghi chú phát hành phiên bản v2.0.58"
---

### 🎉 Tính năng mới

- **[Workflow]** Thêm API quản trị viên để chạy lại các luồng công việc đã bắt đầu từ đầu hoặc từ một nút cụ thể. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Loại bỏ tùy chọn Ẩn khỏi cài đặt mục menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi đồng bộ giá trị popup của bộ chọn ngày trên thiết bị di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh

  - Sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh

  - Tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh

  - Sửa lỗi đồng bộ trạng thái ẩn cho liên kết biểu mẫu con ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh

  - Sửa lỗi không thể thêm hàng thứ hai trong bảng con của biểu mẫu con ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh

  - Sửa lỗi tab trang biến mất sau khi chuyển đổi menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe

- **[flow-engine]** Sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi biểu mẫu được gửi thành công trong cửa sổ popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi nút hành động tùy chỉnh trong bảng với ngữ cảnh nhiều bản ghi cho phép chọn luồng công việc ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher

- **[Quản lý tệp]**
  - Sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên để tránh tạo khóa đối tượng chứa ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher

  - Cải thiện thông báo lỗi xem trước PDF và ghi lại yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
