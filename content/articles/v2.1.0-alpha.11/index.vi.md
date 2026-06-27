---
title: "NocoBase v2.1.0-alpha.11: thêm hành động mục JS"
description: "Ghi chú phát hành của v2.1.0-alpha.11"
---

### 🎉 Tính năng mới

- **[client]** Thêm hành động mục JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) của @jiannx

- **[Nhân viên AI]** Bổ sung khả năng SKILLS cho nhân viên AI. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) của @cgyrock

- **[Trình quản lý nguồn dữ liệu]** Hỗ trợ tải theo yêu cầu các công cụ MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) của @2013xile

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện xác thực schema cho api xây dựng giao diện. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) của @gchust

- **[client]** Tối ưu hóa bố cục ngang của các hành động biểu mẫu ([#8869](https://github.com/nocobase/nocobase/pull/8869)) của @jiannx

- **[app]** Thêm quy trình phát triển dựa trên Rsbuild cho client-v1 trong khi vẫn giữ khả năng tương thích với phát triển plugin cục bộ và cấu trúc `/v2/` hiện tại ([#8902](https://github.com/nocobase/nocobase/pull/8902)) của @Molunerfinn

- **[Trường bộ sưu tập: Phân cấp hành chính Trung Quốc]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) của @jiannx

- **[Workflow]** Thêm xác thực cho tất cả các trình kích hoạt và nút ([#8930](https://github.com/nocobase/nocobase/pull/8930)) của @mytharcher

- **[Workflow: Phê duyệt]** Sửa lỗi trường JSON gây ra vấn đề hiệu suất khi tải danh sách bản ghi phê duyệt của @mytharcher

### 🐛 Sửa lỗi

- **[flow-engine]** Đồng bộ trạng thái với cấu hình trường khi trường biểu mẫu bị xóa ([#8857](https://github.com/nocobase/nocobase/pull/8857)) của @jiannx

- **[resourcer]** Sửa lỗi nguồn dữ liệu bên ngoài không tải được chính xác. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) của @2013xile

- **[database]** Sử dụng cảnh báo thay vì lỗi khi bất kỳ tham số appends nào không hợp lệ ([#8923](https://github.com/nocobase/nocobase/pull/8923)) của @mytharcher

- **[server]** Thay đổi thời điểm đóng Pub-Sub thành `beforeStop`, để tránh tin nhắn được gửi hoặc xử lý sau khi cơ sở dữ liệu đã đóng ([#8934](https://github.com/nocobase/nocobase/pull/8934)) của @mytharcher

- **[Biến tùy chỉnh]** bỏ qua thông báo xác thực ([#8942](https://github.com/nocobase/nocobase/pull/8942)) của @chenos

- **[Nhân viên AI]** Sửa các trường hợp kiểm thử thất bại trong mô-đun ai của gói core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) của @cgyrock

- **[Bản địa hóa]** ngăn chặn yêu cầu localizationTexts:missing khi bị từ chối quyền ([#8903](https://github.com/nocobase/nocobase/pull/8903)) của @chenos

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi tùy chọn "Kích hoạt workflow" không hoạt động khi không được chọn của @mytharcher

- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi xảy ra khi tải nguồn dữ liệu Oracle bên ngoài của @2013xile

- **[Workflow: Phê duyệt]** Sửa lỗi dịch thuật, chọn nút và vấn đề mục tiêu trả về trong nút quay lại biểu mẫu phê duyệt v2 của @zhangzhonghe
