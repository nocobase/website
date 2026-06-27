---
title: "NocoBase v2.1.0-beta.47: Thích ứng với plugin kiểm soát phiên bản mới"
description: "Ghi chú phát hành của v2.1.0-beta.47"
---

### 🎉 Tính năng mới

- **[undefined]** Đã thêm lệnh proxy cấp cao nhất cho nginx và caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) bởi @chenos
- **[Trình quản lý sao lưu]** Đã thích ứng với plugin kiểm soát phiên bản mới. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) bởi @cgyrock
- **[Kiểm soát phiên bản]** Đã thêm plugin kiểm soát phiên bản. bởi @cgyrock

### 🚀 Cải tiến

- **[Trình quản lý nguồn dữ liệu]** Đã thêm quản lý quyền nguồn dữ liệu client-v2 và căn chỉnh các drawer chọn quyền liên quan. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) bởi @jiannx
- **[Bộ sưu tập: Kết nối dữ liệu nước ngoài (FDW)]** Đã cải thiện tính tương đồng của mẫu bộ sưu tập V2 cho bộ sưu tập SQL và bộ sưu tập dữ liệu nước ngoài, bao gồm xác nhận SQL, quản lý máy chủ cơ sở dữ liệu nước ngoài và sắp xếp thứ tự mẫu. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) bởi @katherinehhh
- **[In mẫu]** Đã cập nhật siêu dữ liệu bộ sưu tập in mẫu để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Lịch sử bản ghi]** Đã cập nhật siêu dữ liệu bộ sưu tập lịch sử bản ghi để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Quy trình làm việc: Phê duyệt]** Đã cập nhật siêu dữ liệu bộ sưu tập phê duyệt quy trình làm việc để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Nhật ký kiểm toán]** Đã cập nhật siêu dữ liệu bộ sưu tập nhật ký kiểm toán để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Trình quản lý email]** Đã cập nhật siêu dữ liệu bộ sưu tập trình quản lý email để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Giám sát ứng dụng]** Đã cập nhật siêu dữ liệu bộ sưu tập giám sát ứng dụng để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi trường JSON hiển thị ô trống cho giá trị đối tượng trong chế độ xem chi tiết client-v2. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) bởi @katherinehhh
  - Đã sửa lỗi trường tùy chọn dịch sai nhãn tùy chọn thuần trong môi trường bản địa hóa. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) bởi @katherinehhh
- **[Trình xử lý lỗi]** Đã giảm nhật ký lỗi nhiễu cho các yêu cầu chưa xác thực thông thường không có token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) bởi @2013xile
- **[Khối: Danh sách]** Đã sửa lỗi trạng thái liên kết hành động hàng cũ trong khối danh sách khi hành động phụ thuộc vào bản ghi hiện tại. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) bởi @katherinehhh
- **[Trình quản lý nguồn dữ liệu]** Đã cải thiện thông báo lỗi trong trình quản lý nguồn dữ liệu V2 khi các thao tác bộ sưu tập, trường, đồng bộ và tải bảng thất bại. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) bởi @katherinehhh
- **[Nhân viên AI]** Đã sửa lỗi thiếu nút trợ lý Dara trong cài đặt biểu đồ client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) bởi @cgyrock
- **[AI: Cơ sở kiến thức]** Đã sửa lỗi thiếu đường dẫn trong URL tệp cơ sở kiến thức S3. bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]** Đã sửa lỗi văn bản bị xáo trộn khi nhập tệp XLSX với các chuỗi chia sẻ UTF-8 bị phân tách qua các khối luồng. bởi @mytharcher
- **[Lịch sử bản ghi]** Đã sửa lỗi thiếu lịch sử bản ghi cho các thay đổi nguồn dữ liệu bên ngoài. bởi @2013xile
