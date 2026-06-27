---
title: "NocoBase v1.7.0-alpha.4: Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết"
description: "Ghi chú phát hành của v1.7.0-alpha.4"
---

### 🎉 Tính năng mới

- **[client]**
  - Hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh

  - Hỗ trợ cài đặt Style cho trường: cỡ chữ, độ đậm chữ và kiểu chữ ([#6489](https://github.com/nocobase/nocobase/pull/6489)) bởi @katherinehhh

- **[Biến và bí mật]** Hỗ trợ biến môi trường trong URL của nút liên kết ([#6494](https://github.com/nocobase/nocobase/pull/6494)) bởi @katherinehhh

- **[Luồng công việc: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Hỗ trợ đối sánh mờ cho các trường được chọn trong nút lọc ([#6496](https://github.com/nocobase/nocobase/pull/6496)) bởi @katherinehhh

- **[Thông báo: Email]** Thêm mô tả cấu hình trường bảo mật. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) bởi @sheldon66

- **[Luồng công việc: nút gửi thư]** Thêm mô tả cấu hình trường bảo mật. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) bởi @sheldon66

- **[Lịch]** Plugin Lịch với cài đặt tùy chọn để bật hoặc tắt tính năng tạo sự kiện nhanh ([#6391](https://github.com/nocobase/nocobase/pull/6391)) bởi @Cyx649312038

- **[WEB client]** Thêm lời nhắc xác nhận thứ cấp cho thao tác Xóa bộ nhớ đệm (Clear Cache) ([#6505](https://github.com/nocobase/nocobase/pull/6505)) bởi @katherinehhh

- **[Trình quản lý Email]** Hỗ trợ cấp quyền lại & tự động chọn tài khoản khi gửi email bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - Độ trong suốt của nút hành động gây ra sự cố hiển thị cài đặt khi di chuột ([#6529](https://github.com/nocobase/nocobase/pull/6529)) bởi @katherinehhh

  - Lỗi gửi trường thời gian trong ngôn ngữ tiếng Trung (cú pháp đầu vào không hợp lệ cho kiểu thời gian) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) bởi @katherinehhh

  - Chiều cao của bảng con trong biểu mẫu được đặt cùng với chiều cao biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh

  - Trường quy tắc liên kết ẩn mặc định với giá trị được giữ lại không hoạt động ([#6503](https://github.com/nocobase/nocobase/pull/6503)) bởi @katherinehhh

  - Nút thêm con không hiển thị ở chế độ chỉ biểu tượng ([#6504](https://github.com/nocobase/nocobase/pull/6504)) bởi @katherinehhh

- **[server]** Lệnh nâng cấp có thể gây ra lỗi luồng công việc ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust

- **[utils]** Lỗi 'desktop responsive' đã biết ([#6476](https://github.com/nocobase/nocobase/pull/6476)) bởi @zhangzhonghe

- **[evaluators]** Khôi phục số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher

- **[Xác thực]**
  - Cắt bỏ khoảng trắng trong tùy chọn xác thực ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile

  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos

- **[Khối: Bản đồ]**
  - Sự cố quản lý khóa của khối bản đồ gây ra lỗi yêu cầu do ký tự vô hình ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh

  - Các trường khóa bí mật không kích hoạt xác thực trong quản lý bản đồ ([#6509](https://github.com/nocobase/nocobase/pull/6509)) bởi @katherinehhh

- **[Trình quản lý tệp]**
  - Không thể truy cập tệp được lưu trữ trong COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) bởi @chenos

  - Mã hóa url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos

- **[WEB client]** Đường dẫn trong bảng quản lý tuyến đường khác với đường dẫn thực tế ([#6483](https://github.com/nocobase/nocobase/pull/6483)) bởi @zhangzhonghe

- **[Khối: Bảng hành động]** Vấn đề bố cục trong bảng hành động trên thiết bị di động sau khi ẩn nút do kiểm soát quyền ([#6502](https://github.com/nocobase/nocobase/pull/6502)) bởi @katherinehhh

- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie

- **[Luồng công việc]** Sửa số lượng tác vụ cũ sau khi xóa luồng công việc ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** Không thể xuất tệp đính kèm bởi @chenos

- **[Trình quản lý sao lưu]**
  - Tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust

  - Việc khôi phục có thể gây ra lỗi thực thi luồng công việc bởi @gchust

  - Lỗi khôi phục cơ sở dữ liệu MySQL do trùng lặp bộ GTID bởi @gchust

- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi bảng tiến trình khi công việc bị xóa bởi @mytharcher

  - Thay đổi kết quả phê duyệt trả về thành việc cần làm bởi @mytharcher

  - Sửa lỗi xảy ra khi thêm kết quả nút truy vấn bởi @mytharcher

  - Sửa lỗi thiếu nút hành động trong bảng tiến trình bởi @mytharcher

  - Vấn đề về kiểu dáng với hộp thoại bật lên 'Áp dụng mới' bởi @zhangzhonghe
