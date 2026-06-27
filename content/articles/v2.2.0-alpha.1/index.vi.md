---
title: "NocoBase v2.2.0-alpha.1: Hỗ trợ nhập liệu quét cho trường văn bản"
description: "Ghi chú phát hành của v2.2.0-alpha.1"
---

### 🎉 Tính năng mới

- **[client-v2]** Hỗ trợ nhập liệu quét cho trường văn bản ([#9599](https://github.com/nocobase/nocobase/pull/9599)) bởi @katherinehhh
- **[undefined]** Thêm lệnh proxy cấp cao nhất cho nginx và caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) bởi @chenos
- **[Trình quản lý tác vụ bất đồng bộ]** Thêm hỗ trợ client v2 cho hành động thanh trên cùng của trình quản lý tác vụ bất đồng bộ. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) bởi @jiannx
- **[Trình quản lý sao lưu]**

  - Thêm hỗ trợ runtime client v2 cho plugin trình quản lý sao lưu. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) bởi @katherinehhh
  - Thích ứng với plugin kiểm soát phiên bản mới ([#9563](https://github.com/nocobase/nocobase/pull/9563)) bởi @cgyrock
- **[Nguồn dữ liệu: NocoBase bên ngoài]** Thêm plugin nguồn dữ liệu: NocoBase bên ngoài bởi @2013xile
- **[Kiểm soát phiên bản]** Thêm plugin kiểm soát phiên bản bởi @cgyrock

### 🚀 Cải tiến

- **[client-v2]**

  - Thêm hỗ trợ vô hiệu hóa chọn nhiều trong trường liên kết popup chọn v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) bởi @katherinehhh
  - Cải thiện khả năng hiển thị khối v2 khi nguồn dữ liệu bên ngoài được cấu hình bị vô hiệu hóa, ngăn lỗi hiển thị và hiển thị trình giữ chỗ UI Editor rõ ràng hơn. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) bởi @katherinehhh
- **[Biến và bí mật]** Biến môi trường (`$env`) hiện có thể được chọn bởi bộ chọn biến dựa trên flow-engine trong runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) bởi @Molunerfinn
- **[Trình quản lý tệp]** Thêm hỗ trợ `subPath` tải lên nội bộ cho trình quản lý tệp. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** Thêm quản lý quyền nguồn dữ liệu client-v2 và căn chỉnh các ngăn kéo chọn quyền liên quan. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) bởi @jiannx
- **[Bộ sưu tập: Kết nối dữ liệu nước ngoài (FDW)]** Cải thiện tính tương đồng của mẫu bộ sưu tập V2 cho bộ sưu tập SQL và bộ sưu tập dữ liệu nước ngoài, bao gồm xác nhận SQL, quản lý máy chủ cơ sở dữ liệu nước ngoài và sắp xếp thứ tự mẫu. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) bởi @katherinehhh
- **[In mẫu]** Cập nhật siêu dữ liệu bộ sưu tập mẫu in để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Lịch sử bản ghi]** Cập nhật siêu dữ liệu bộ sưu tập lịch sử bản ghi để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Quy trình làm việc: Phê duyệt]** Cập nhật siêu dữ liệu bộ sưu tập phê duyệt quy trình làm việc để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Nhật ký kiểm toán]** Cập nhật siêu dữ liệu bộ sưu tập nhật ký kiểm toán để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Trình quản lý email]** Cập nhật siêu dữ liệu bộ sưu tập trình quản lý email để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Giám sát ứng dụng]** Cập nhật siêu dữ liệu bộ sưu tập giám sát ứng dụng để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock

### 🐛 Sửa lỗi

- **[database]** Sửa lỗi trường mật khẩu không được băm trong quá trình cập nhật hàng loạt. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) bởi @mytharcher
- **[client]** Sửa lỗi hành động hàng trong bảng con popup ẩn toàn bộ trường bảng con khi hành động bị ẩn bởi quy tắc liên kết ([#9717](https://github.com/nocobase/nocobase/pull/9717)) bởi @katherinehhh
- **[client-v2]**

  - Sửa lỗi trường JSON trong chế độ xem hiển thị client v2 hiển thị ô trống cho giá trị đối tượng. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) bởi @katherinehhh
  - Sửa lỗi trường tùy chọn V2 dịch sai nhãn tùy chọn thuần trong môi trường bản địa hóa. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) bởi @katherinehhh
- **[Khối: Bản đồ]**

  - Sửa lỗi DrawingManager không khả dụng trong khối Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) bởi @katherinehhh
  - Sửa lỗi trường hình học bản đồ bị thiếu trong menu thêm trường của trình quản lý nguồn dữ liệu v2 sau khi bật plugin bản đồ. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) bởi @katherinehhh
- **[Lịch]** Sửa lỗi không thể thêm khối Chi tiết và Chỉnh sửa trong ngăn kéo chi tiết khối lịch v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) bởi @jiannx
- **[Trình quản lý nguồn dữ liệu]**

  - Sửa lỗi hiển thị trường tiêu đề cũ khi mở lại ngăn kéo cấu hình trường nguồn dữ liệu v2 sau khi thay đổi trường tiêu đề. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) bởi @katherinehhh
  - Cải thiện thông báo lỗi của trình quản lý nguồn dữ liệu V2 khi các thao tác bộ sưu tập, trường, đồng bộ và tải bảng thất bại. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) bởi @katherinehhh
- **[Nhân viên AI]**

  - Cải thiện lời nhắc truy vấn dữ liệu của nhân viên AI để tải kỹ năng cần thiết trước khi sử dụng công cụ truy vấn. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) bởi @cgyrock
  - Sửa lỗi thiếu nút trợ lý Dara trong cài đặt biểu đồ client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) bởi @cgyrock
- **[Khối: Danh sách]** Sửa lỗi trạng thái liên kết hàng cũ trong khối danh sách khi hành động phụ thuộc vào bản ghi hiện tại. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) bởi @katherinehhh
- **[Trình xử lý lỗi]** Giảm nhật ký lỗi ồn ào cho các yêu cầu chưa xác thực thông thường không có token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) bởi @2013xile
- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi văn bản bị xáo trộn khi nhập tệp XLSX với các chuỗi chia sẻ UTF-8 bị phân tách trên các khối phát trực tuyến. bởi @mytharcher
- **[AI: Cơ sở kiến thức]** Sửa lỗi thiếu đường dẫn trong URL tệp cơ sở kiến thức S3. bởi @cgyrock
- **[Lịch sử bản ghi]** Sửa lỗi thiếu lịch sử bản ghi cho các thay đổi nguồn dữ liệu bên ngoài bởi @2013xile
