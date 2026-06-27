---
title: "NocoBase v1.7.0-alpha.15: Hỗ trợ biến tổng hợp tùy chỉnh"
description: "Ghi chú phát hành của v1.7.0-alpha.15"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ biến tổng hợp tùy chỉnh ([#6916](https://github.com/nocobase/nocobase/pull/6916)) bởi @zhangzhonghe
Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** Hỗ trợ offset tùy chỉnh trong bộ lọc trường ngày ([#6854](https://github.com/nocobase/nocobase/pull/6854)) bởi @katherinehhh

- **[Trường collection: Code]** Thêm cài đặt chiều cao cho trường trình soạn thảo mã bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]**
  - Hỗ trợ xác định bản ghi duy nhất bằng nhiều trường khi cài đặt nhập bởi @aaaaaajie

  - Hỗ trợ cài đặt ghi đè ô trống và bỏ qua chúng khi cài đặt nhập bởi @aaaaaajie

- **[Biến tùy chỉnh]** Hỗ trợ biến tổng hợp tùy chỉnh bởi @zhangzhonghe
Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Trình quản lý email]**
  - hỗ trợ đánh dấu email là việc cần làm và thêm ghi chú bởi @jiannx

  - hỗ trợ nhãn và cài đặt kết hợp bởi @jiannx

### 🚀 Cải tiến

- **[client]** điều chỉnh hiển thị nội dung tùy chọn bộ lọc ngày ([#6928](https://github.com/nocobase/nocobase/pull/6928)) bởi @katherinehhh

- **[undefined]** Nâng cấp phiên bản Node lên 20 cho CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) bởi @mytharcher

- **[Lịch]** hỗ trợ nút làm mới có thể cấu hình trong khối lịch ([#6920](https://github.com/nocobase/nocobase/pull/6920)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]**
  - Tối ưu hiệu suất nhập xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) bởi @aaaaaajie

  - Tối ưu hiệu suất nhập xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) bởi @aaaaaajie

- **[Hành động: Xuất bản ghi]** Tối ưu hiệu suất xuất ra XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) bởi @aaaaaajie

- **[Khối: iframe]** cải thiện logic gán biến ngày ([#6828](https://github.com/nocobase/nocobase/pull/6828)) bởi @katherinehhh

- **[Quy trình: Sự kiện hành động tùy chỉnh]** Sửa ngôn ngữ en-US dựa trên khóa zh-CN bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** Tối ưu hiệu suất xuất ra XLSX bởi @aaaaaajie

- **[Quy trình: Phê duyệt]** Hỗ trợ thực hiện tất cả các việc cần làm trong trung tâm tác vụ quy trình bởi @mytharcher

- **[Trình quản lý email]** triển khai schema sau đó gửi email và hỗ trợ AI bởi @jiannx

### 🐛 Sửa lỗi

- **[database]** Đã sửa lỗi tự động tạo uuid hoặc nanoid không hoạt động trong quan hệ nhiều-nhiều ([#6912](https://github.com/nocobase/nocobase/pull/6912)) bởi @aaaaaajie

- **[client]**
  - Kiểm tra điều kiện noneOf thất bại trong quy tắc liên kết ([#6934](https://github.com/nocobase/nocobase/pull/6934)) bởi @katherinehhh

  - Cài đặt chiều cao khối không được áp dụng theo thời gian thực ([#6904](https://github.com/nocobase/nocobase/pull/6904)) bởi @katherinehhh

  - Biến điều kiện lồng nhau trong quy tắc liên kết không hiển thị đúng ([#6929](https://github.com/nocobase/nocobase/pull/6929)) bởi @katherinehhh

  - Phân tích biến ngày không chính xác trong giới hạn phạm vi ngày ([#6930](https://github.com/nocobase/nocobase/pull/6930)) bởi @katherinehhh

  - Kiểm tra giá trị rỗng không chính xác cho trường quan hệ toMany trong quy tắc liên kết ([#6905](https://github.com/nocobase/nocobase/pull/6905)) bởi @katherinehhh

  - Lỗi hiển thị do định dạng style không hợp lệ khi thêm trường quan hệ ([#6903](https://github.com/nocobase/nocobase/pull/6903)) bởi @katherinehhh

  - Thiếu biến đối tượng hiện tại trong quy tắc liên kết bên trong bảng con ([#6907](https://github.com/nocobase/nocobase/pull/6907)) bởi @katherinehhh

- **[undefined]** Sử dụng Node 20 do yêu cầu của gói commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) bởi @mytharcher

- **[Trình quản lý nguồn dữ liệu]** Giải quyết vấn đề sắp xếp kéo-thả không hoạt động ([#6937](https://github.com/nocobase/nocobase/pull/6937)) bởi @chenos

- **[Tài liệu API]** Thêm thông tin sub-app còn thiếu vào req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) bởi @chenos

- **[Thông báo: Tin nhắn trong ứng dụng]** Đã giải quyết vấn đề hành động "đánh dấu tất cả là đã đọc" trong tin nhắn trong ứng dụng có thể ảnh hưởng đến dữ liệu của người dùng khác. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) bởi @sheldon66

- **[Hành động: Xuất bản ghi]** Đã sửa lỗi quan hệ lồng nhau không xuất được chính xác. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) bởi @aaaaaajie

- **[Trường collection: Markdown(Vditor)]** Trường markdown (Vditor) không thích ứng với chủ đề ([#6919](https://github.com/nocobase/nocobase/pull/6919)) bởi @katherinehhh

- **[Collection: Cây]** Tránh cập nhật không chính xác các tiền tố đường dẫn tương tự trong quá trình cập nhật đường dẫn ([#6913](https://github.com/nocobase/nocobase/pull/6913)) bởi @2013xile

- **[Quy trình: Nút gửi thư]** Xử lý trường 'to' không xác định và cải thiện xử lý người nhận email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) bởi @sheldon66

- **[Xác minh]** Sửa tên tiếng Anh không chính xác: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) bởi @2013xile

- **[Trình quản lý tệp]**
  - Sửa lỗi injection collection client và tham số tải lên ([#6909](https://github.com/nocobase/nocobase/pull/6909)) bởi @mytharcher

  - Sửa quy tắc khớp xem trước ([#6902](https://github.com/nocobase/nocobase/pull/6902)) bởi @mytharcher

- **[Quy trình: Sự kiện hành động tùy chỉnh]**
  - Tránh lỗi do thứ tự tải plugin bởi @mytharcher

  - Sửa lỗi trình xử lý lỗi không thể khớp theo lớp bởi @mytharcher

  - Sửa lỗi nút thực hiện không chính xác sau vài lần nhấp bởi @mytharcher

- **[Bộ lọc đa từ khóa]** Loại bỏ khoảng trắng ở hai bên của mỗi từ khóa bởi @zhangzhonghe

- **[Xác thực hai yếu tố (2FA)]** Yêu cầu cấu hình một verifier khi bật 2FA bởi @2013xile

- **[Lưu trữ tệp: S3(Pro)]**
  - Sửa tham số tải lên bị trùng lặp bởi @mytharcher

  - Sửa url xem trước và tham số tải lên bởi @mytharcher

- **[In mẫu]** Cải thiện logic hasChildren trong useFieldsTree để bao gồm kiểm tra enum uiSchema. bởi @sheldon66

- **[Khối: Biểu mẫu nhiều bước]** Sửa kiểu dữ liệu bởi @mytharcher

- **[Quy trình: Phê duyệt]**
  - Sửa locale bởi @mytharcher

  - Sửa appends và tính toán dữ liệu trước khi gửi quy trình phê duyệt bởi @mytharcher

  - Sửa tính toán appends quan hệ bởi @mytharcher

  - Sửa id bản ghi không chính xác cho ViewAction bởi @mytharcher

- **[Trình quản lý email]**
  - sửa quyền api của collections mailMessageNotes và mailMessageLabels bởi @jiannx

  - sửa lỗi modal thêm ghi chú bởi @jiannx

  - sửa: xóa cột hành động bởi @jiannx
