---
title: "NocoBase v2.0.11: Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến cho trình kích hoạt hành động tùy chỉnh trong luồng con"
description: "Ghi chú phát hành v2.0.11"
---

### 🎉 Tính năng mới

- **[Workflow: Sự kiện hành động tùy chỉnh]** Hỗ trợ dữ liệu ngữ cảnh tùy chỉnh để truyền biến vào trình kích hoạt hành động tùy chỉnh trong luồng con ([#8758](https://github.com/nocobase/nocobase/pull/8758)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hiển thị thông báo khi không có dữ liệu cho khối Biểu mẫu chỉnh sửa hoặc khối Chi tiết. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) bởi @gchust

- **[flow-engine]** Đã sửa lỗi mã runjs mới phân tích biểu thức biến trước khi thực thi. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi điều hướng liên kết popup bị hoàn tác sau khi đóng view ([#8752](https://github.com/nocobase/nocobase/pull/8752)) bởi @zhangzhonghe

  - Vô hiệu hóa thêm khối cho bản ghi liên kết nhiều-nhiều (mảng) để ngăn lỗi. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) bởi @gchust

  - Đã sửa lỗi khối dữ liệu gốc không làm mới sau khi chỉnh sửa dữ liệu trong popup trường liên kết. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) bởi @gchust

  - Sửa lỗi cắt tab và đảm bảo chiều rộng tab tối thiểu trong chế độ thiết kế ([#8771](https://github.com/nocobase/nocobase/pull/8771)) bởi @zhangzhonghe

  - Sửa lỗi xác thực cho các trường bắt buộc bị ẩn theo liên kết trong chế độ cấu hình ([#8773](https://github.com/nocobase/nocobase/pull/8773)) bởi @zhangzhonghe

  - Sửa lỗi cập nhật giao diện chậm cho nút ẩn/hiện cột trong bảng con và xóa cột liên tiếp ([#8755](https://github.com/nocobase/nocobase/pull/8755)) bởi @zhangzhonghe

  - Sửa lỗi hai xác thực bắt buộc xuất hiện trong biểu mẫu cập nhật bản ghi ([#8761](https://github.com/nocobase/nocobase/pull/8761)) bởi @jiannx

- **[database]**
  - Đã sửa lỗi thiếu tùy chọn 'Phân trang đơn giản' trong mẫu view của collection. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) bởi @cgyrock

  - Quy tắc xác thực độ chính xác cho trường số không có hiệu lực ([#8768](https://github.com/nocobase/nocobase/pull/8768)) bởi @2013xile

- **[undefined]** Đã sửa lỗi sau khi nâng cấp, hệ thống báo không tìm thấy plugin-block-reference. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) bởi @gchust

- **[Hành động: Xuất bản ghi]** Đã sửa lỗi trường kiểu số trong tệp excel hiển thị dưới dạng chuỗi ([#8774](https://github.com/nocobase/nocobase/pull/8774)) bởi @cgyrock

- **[Khối: Danh sách]** Đã sửa lỗi trường khối danh sách không thể sử dụng biến bản ghi hiện tại. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) bởi @gchust

- **[Workflow]** Sửa lỗi giữ chỗ kéo nút hiển thị sai khi kéo khối trong nút phê duyệt ([#8763](https://github.com/nocobase/nocobase/pull/8763)) bởi @mytharcher

- **[Mẫu giao diện]**
  - Đã sửa lỗi sử dụng lại mẫu khối bản ghi hiện tại cho khối chi tiết và khối biểu mẫu chỉnh sửa có thể khiến dữ liệu không tải chính xác. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) bởi @gchust

  - Đã sửa lỗi thay đổi thuộc tính được thực hiện trong luồng sự kiện của khối mẫu không có hiệu lực. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) bởi @gchust

- **[Nguồn dữ liệu: Chính]**
  - Cập nhật giá trị mặc định của trường JSON không có hiệu lực ([#8767](https://github.com/nocobase/nocobase/pull/8767)) bởi @2013xile

  - Lỗi đồng bộ trường ([#8766](https://github.com/nocobase/nocobase/pull/8766)) bởi @2013xile

- **[AI nhân viên]**
  - Đã sửa lỗi dashscope/deepseek/kimi không thể đọc tệp tài liệu đã tải lên. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) bởi @cgyrock

  - Đã sửa lỗi gọi công cụ khi sử dụng mô hình suy luận deepseek. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) bởi @cgyrock

- **[Đa không gian]** Sửa lỗi quyền không gian khi tạo dữ liệu với khóa chính bởi @jiannx
