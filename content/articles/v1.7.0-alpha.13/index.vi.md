---
title: "NocoBase v1.7.0-alpha.13: hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp"
description: "Ghi chú phát hành của v1.7.0-alpha.13"
---

### 🎉 Tính năng mới

- **[client]**
  - Hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp ([#6787](https://github.com/nocobase/nocobase/pull/6787)) bởi @katherinehhh

  - Hỗ trợ cấu hình quy tắc liên kết trong các khối để hiển thị/ẩn động ([#6636](https://github.com/nocobase/nocobase/pull/6636)) bởi @katherinehhh

- **[undefined]** Thêm publish ci cho license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) bởi @jiannx

- **[Khối: iframe]** Khối Iframe hỗ trợ cấu hình thuộc tính allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) bởi @zhangzhonghe

- **[Xác thực]** Hỗ trợ chức năng "Quên mật khẩu" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) bởi @zhangzhonghe
Tham khảo: [Quên mật khẩu](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Quản lý tệp]** Tính năng: Thêm API `getFileStream` để hỗ trợ truyền tệp. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) bởi @sheldon66

- **[Hành động: Yêu cầu tùy chỉnh]** Hỗ trợ biến phản hồi trong thông báo thành công của hành động yêu cầu tùy chỉnh ([#6694](https://github.com/nocobase/nocobase/pull/6694)) bởi @katherinehhh

- **[In mẫu]** Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66

- **[Khối: Cây]** Khối cây bộ lọc hỗ trợ quy tắc liên kết bởi @katherinehhh

- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

### 🚀 Cải tiến

- **[client]**
  - Thành phần RichText hỗ trợ các thuộc tính modules và formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) bởi @jiannx

  - Tối ưu hóa kiểu nút thêm trong bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh

  - Hiển thị tiêu đề nút bằng tooltip khi di chuột qua biểu tượng hành động ([#6761](https://github.com/nocobase/nocobase/pull/6761)) bởi @katherinehhh

  - Giữ chức năng mẫu tham chiếu ([#6743](https://github.com/nocobase/nocobase/pull/6743)) bởi @gchust

  - Điều chỉnh thông báo tải lên ([#6757](https://github.com/nocobase/nocobase/pull/6757)) bởi @mytharcher

- **[utils]** Tăng chiều cao danh sách trường của nút bộ lọc và sắp xếp/phân loại các trường ([#6779](https://github.com/nocobase/nocobase/pull/6779)) bởi @zhangzhonghe

- **[Quản lý tệp]** Thêm tùy chọn thời gian chờ OSS mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Thêm API mở rộng cho cấu hình giao diện trường ([#6742](https://github.com/nocobase/nocobase/pull/6742)) bởi @2013xile

- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile

- **[WeCom]** Ưu tiên email công ty hơn email cá nhân khi cập nhật email người dùng bởi @2013xile

### 🐛 Sửa lỗi

- **[database]**
  - Nhập thất bại do giá trị trường văn bản. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) bởi @aaaaaajie

  - Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher

  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher

  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher

  - Thêm unavailableActions vào bộ sưu tập sql và bộ sưu tập view ([#6765](https://github.com/nocobase/nocobase/pull/6765)) bởi @katherinehhh

- **[client]**
  - Trường liên kết nhiều không gửi được khi hiển thị các trường từ bộ sưu tập liên kết ([#6833](https://github.com/nocobase/nocobase/pull/6833)) bởi @katherinehhh

  - Không thể kéo các nút khác vào nút trùng lặp ([#6822](https://github.com/nocobase/nocobase/pull/6822)) bởi @katherinehhh

  - Bộ chọn bảng trong biểu mẫu bộ lọc, kiểu bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe

  - Khi thành phần trường liên kết của biểu mẫu bộ lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe

  - Trong các trang con lồng nhau, danh sách khối không được hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe

  - Vấn đề kiểu thanh phân trang bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh

  - Vấn đề với cấu hình quy tắc liên kết trong biểu mẫu con (cửa sổ bật lên) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh

  - Khi lựa chọn biến yêu cầu tải không đồng bộ, menu đã chọn cuối cùng bị mất. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) bởi @gchust

  - Nhiều thông báo lỗi được hiển thị khi quy tắc xác thực bị vi phạm trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh

  - Sửa lỗi không thể chọn trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu bộ lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe

  - Chuyển các props khác đến thành phần Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) bởi @sheldon66

  - Quy tắc liên kết của biểu mẫu con (cửa sổ bật lên) trong bảng con thiếu cài đặt thuộc tính trường ([#6800](https://github.com/nocobase/nocobase/pull/6800)) bởi @katherinehhh

  - Trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh

  - Trong biểu mẫu bộ lọc, chuyển đổi toán tử trường và sau đó làm mới trang gây ra lỗi ([#6781](https://github.com/nocobase/nocobase/pull/6781)) bởi @zhangzhonghe

  - Trong khối thu gọn, nhấp vào nút xóa trong hộp tìm kiếm trường quan hệ không được xóa phạm vi dữ liệu ([#6782](https://github.com/nocobase/nocobase/pull/6782)) bởi @zhangzhonghe

  - Vấn đề căn chỉnh của nút thêm bản ghi con trong bảng cây ([#6791](https://github.com/nocobase/nocobase/pull/6791)) bởi @katherinehhh

  - Cấm di chuyển menu trước hoặc sau các tab trang ([#6777](https://github.com/nocobase/nocobase/pull/6777)) bởi @zhangzhonghe

  - Khối bảng hiển thị dữ liệu trùng lặp khi lọc ([#6792](https://github.com/nocobase/nocobase/pull/6792)) bởi @zhangzhonghe

  - Vấn đề toán tử tham số truy vấn url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) bởi @katherinehhh

  - Chỉ hỗ trợ hành động xuất trong bộ sưu tập view khi writableView là false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) bởi @katherinehhh

  - Dữ liệu được truy xuất không chính xác cho các trường mảng nhiều-nhiều từ các bảng liên quan trong biểu mẫu ([#6744](https://github.com/nocobase/nocobase/pull/6744)) bởi @2013xile

  - Tạo dữ liệu liên kết không mong muốn khi hiển thị trường liên kết trong biểu mẫu con/bảng con trong biểu mẫu tạo ([#6727](https://github.com/nocobase/nocobase/pull/6727)) bởi @katherinehhh

- **[create-nocobase-app]** Tạm thời sửa lỗi mariadb bằng cách hạ cấp xuống 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) bởi @chenos

- **[Hành động: Xuất bản ghi]** Sửa lỗi xuất văn bản dài. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) bởi @aaaaaajie

- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh

- **[Xác minh]** Sửa các vấn đề của tập lệnh di chuyển ([#6820](https://github.com/nocobase/nocobase/pull/6820)) bởi @2013xile

- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile

- **[Hành động: Yêu cầu tùy chỉnh]** Phản hồi yêu cầu tùy chỉnh được đặt thành biến không hiển thị chính xác ([#6793](https://github.com/nocobase/nocobase/pull/6793)) bởi @katherinehhh

- **[Khối: Bảng hành động]** Thiếu biểu tượng bảng hành động khi chỉ bật biểu tượng ([#6773](https://github.com/nocobase/nocobase/pull/6773)) bởi @katherinehhh

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Vấn đề liên kết hành động luồng công việc được kích hoạt bởi @katherinehhh

- **[Nút tính toán ngày trong luồng công việc]** Sửa lỗi trong trình duyệt cũ không có API `Intl` bởi @mytharcher

- **[In mẫu]** Sửa: Logic xác thực quyền chính xác để ngăn chặn các hành động trái phép. bởi @sheldon66

- **[Lưu trữ tệp: S3(Pro)]** Thời gian hết hạn URL truy cập không hợp lệ bởi @jiannx

- **[Khối: Cây]** Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống bởi @zhangzhonghe
