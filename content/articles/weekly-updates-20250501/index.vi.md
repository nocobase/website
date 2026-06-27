---
title: "Cập nhật hàng tuần của NocoBase: Khối hỗ trợ quy tắc liên kết"
description: "Các cập nhật trong tuần này bao gồm: khối hỗ trợ quy tắc liên kết để hiển thị động, hỗ trợ biến phản hồi trong thông báo thành công của hành động yêu cầu tùy chỉnh, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng hơn nữa. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Ngày phát hành: 2025-04-23*

#### 🚀 Cải tiến

- **[cli]** Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) bởi @chenos
- **[In mẫu]** Thay thế kiểm soát hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos
- **[client]**

  - thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh
  - quy tắc liên kết nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie
- **[Khối: Gantt]** Khối biểu đồ Gantt bị chồng chéo các tháng trong tiêu đề lịch cho chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]**

  - nút xuất pro bị mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh
  - Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. bởi @aaaaaajie
- **[Lưu trữ tệp: S3(Pro)]** Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi tải trước các trường liên kết cho bản ghi bởi @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Ngày phát hành: 2025-04-24*

#### 🚀 Cải tiến

- **[client]** Điều chỉnh thông báo tải lên ([#6757](https://github.com/nocobase/nocobase/pull/6757)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - chỉ hành động xuất trong bộ sưu tập dạng xem được hỗ trợ khi writableView là false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) bởi @katherinehhh
  - tạo dữ liệu liên kết không mong muốn khi hiển thị trường liên kết trong biểu mẫu con/bảng con trong biểu mẫu tạo ([#6727](https://github.com/nocobase/nocobase/pull/6727)) bởi @katherinehhh
  - Dữ liệu được truy xuất không chính xác cho các trường mảng nhiều-nhiều từ các bảng liên quan trong biểu mẫu ([#6744](https://github.com/nocobase/nocobase/pull/6744)) bởi @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Ngày phát hành: 2025-04-29*

#### 🎉 Tính năng mới

- **[undefined]** thêm CI phát hành cho bộ giấy phép ([#6786](https://github.com/nocobase/nocobase/pull/6786)) bởi @jiannx
- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

#### 🚀 Cải tiến

- **[utils]** Tăng chiều cao danh sách trường nút bộ lọc và sắp xếp/phân loại các trường ([#6779](https://github.com/nocobase/nocobase/pull/6779)) bởi @zhangzhonghe
- **[client]** tối ưu hóa kiểu nút thêm bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh
- **[Quản lý tệp]** Thêm tùy chọn thời gian chờ OSS mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher
- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile
- **[WeCom]** Ưu tiên email công ty hơn email cá nhân khi cập nhật email của người dùng bởi @2013xile

#### 🐛 Sửa lỗi

- **[client]**

  - Trong khối thu gọn, nhấp vào nút xóa trong hộp tìm kiếm trường quan hệ không được xóa phạm vi dữ liệu ([#6782](https://github.com/nocobase/nocobase/pull/6782)) bởi @zhangzhonghe
  - trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh
  - Cấm di chuyển menu trước hoặc sau các tab trang ([#6777](https://github.com/nocobase/nocobase/pull/6777)) bởi @zhangzhonghe
  - Khối bảng hiển thị dữ liệu trùng lặp khi lọc ([#6792](https://github.com/nocobase/nocobase/pull/6792)) bởi @zhangzhonghe
  - Trong biểu mẫu bộ lọc, chuyển đổi toán tử trường và sau đó làm mới trang gây ra lỗi ([#6781](https://github.com/nocobase/nocobase/pull/6781)) bởi @zhangzhonghe
- **[database]**

  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher
  - thêm unavailableActions vào bộ sưu tập SQL và bộ sưu tập dạng xem ([#6765](https://github.com/nocobase/nocobase/pull/6765)) bởi @katherinehhh
- **[create-nocobase-app]** Tạm thời sửa lỗi mariadb bằng cách hạ cấp xuống 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) bởi @chenos
- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile
- **[In mẫu]** Sửa lỗi: Sửa logic xác thực quyền để ngăn chặn các hành động trái phép. bởi @sheldon66
- **[Lưu trữ tệp: S3(Pro)]** thời gian hết hạn URL truy cập không hợp lệ bởi @jiannx
- **[Khối: Cây]** Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống bởi @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Ngày phát hành: 2025-04-24*

#### 🚀 Cải tiến

- **[cli]** Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) bởi @chenos

#### 🐛 Sửa lỗi

- **[client]** vấn đề hiển thị với các quy tắc liên kết trong dữ liệu liên kết đa cấp ([#6755](https://github.com/nocobase/nocobase/pull/6755)) bởi @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Ngày phát hành: 2025-04-24*

#### 🎉 Tính năng mới

- **[Hành động: Yêu cầu tùy chỉnh]** hỗ trợ biến phản hồi trong thông báo thành công của hành động yêu cầu tùy chỉnh ([#6694](https://github.com/nocobase/nocobase/pull/6694)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[client]** Điều chỉnh thông báo tải lên ([#6757](https://github.com/nocobase/nocobase/pull/6757)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**
  - Dữ liệu được truy xuất không chính xác cho các trường mảng nhiều-nhiều từ các bảng liên quan trong biểu mẫu ([#6744](https://github.com/nocobase/nocobase/pull/6744)) bởi @2013xile
  - chỉ hành động xuất trong bộ sưu tập dạng xem được hỗ trợ khi writableView là false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) bởi @katherinehhh
  - tạo dữ liệu liên kết không mong muốn khi hiển thị trường liên kết trong biểu mẫu con/bảng con trong biểu mẫu tạo ([#6727](https://github.com/nocobase/nocobase/pull/6727)) bởi @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Ngày phát hành: 2025-04-25*

#### 🎉 Tính năng mới

- **[client]** hỗ trợ cấu hình quy tắc liên kết trong các khối để hiển thị/ẩn động ([#6636](https://github.com/nocobase/nocobase/pull/6636)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[client]** giữ chức năng tham chiếu mẫu ([#6743](https://github.com/nocobase/nocobase/pull/6743)) bởi @gchust
- **[Trực quan hóa dữ liệu]** Thêm API mở rộng cho cấu hình giao diện trường ([#6742](https://github.com/nocobase/nocobase/pull/6742)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[create-nocobase-app]** Tạm thời sửa lỗi mariadb bằng cách hạ cấp xuống 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) bởi @chenos
- **[database]** thêm unavailableActions vào bộ sưu tập SQL và bộ sưu tập dạng xem ([#6765](https://github.com/nocobase/nocobase/pull/6765)) bởi @katherinehhh
- **[client]** vấn đề toán tử tham số truy vấn URL ([#6770](https://github.com/nocobase/nocobase/pull/6770)) bởi @katherinehhh
- **[Khối: Bảng hành động]** biểu tượng bảng hành động bị thiếu khi chỉ bật biểu tượng ([#6773](https://github.com/nocobase/nocobase/pull/6773)) bởi @katherinehhh
- **[Quy trình làm việc: nút tính toán ngày]** Sửa lỗi trong trình duyệt cũ không có API `Intl` bởi @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Ngày phát hành: 2025-04-28*

#### 🎉 Tính năng mới

- **[Quản lý tệp]** Tính năng: Thêm API `getFileStream` để hỗ trợ truyền phát tệp. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) bởi @sheldon66

#### 🚀 Cải tiến

- **[client]** hiển thị tiêu đề nút với chú giải công cụ khi di chuột qua biểu tượng hành động ([#6761](https://github.com/nocobase/nocobase/pull/6761)) bởi @katherinehhh
- **[WeCom]** Ưu tiên email công ty hơn email cá nhân khi cập nhật email của người dùng bởi @2013xile

#### 🐛 Sửa lỗi

- **[Lưu trữ tệp: S3(Pro)]** thời gian hết hạn URL truy cập không hợp lệ bởi @jiannx
- **[In mẫu]** Sửa lỗi: Sửa logic xác thực quyền để ngăn chặn các hành động trái phép. bởi @sheldon66
- **[Khối: Cây]** Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống bởi @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Ngày phát hành: 2025-04-28*

#### 🎉 Tính năng mới

- **[undefined]** thêm CI phát hành cho bộ giấy phép ([#6786](https://github.com/nocobase/nocobase/pull/6786)) bởi @jiannx

#### 🚀 Cải tiến

- **[utils]** Tăng chiều cao danh sách trường nút bộ lọc và sắp xếp/phân loại các trường ([#6779](https://github.com/nocobase/nocobase/pull/6779)) bởi @zhangzhonghe

#### 🐛 Sửa lỗi

- **[client]**
  - Trong khối thu gọn, nhấp vào nút xóa trong hộp tìm kiếm trường quan hệ không được xóa phạm vi dữ liệu ([#6782](https://github.com/nocobase/nocobase/pull/6782)) bởi @zhangzhonghe
  - Trong biểu mẫu bộ lọc, chuyển đổi toán tử trường và sau đó làm mới trang gây ra lỗi ([#6781](https://github.com/nocobase/nocobase/pull/6781)) bởi @zhangzhonghe
  - Khối bảng hiển thị dữ liệu trùng lặp khi lọc ([#6792](https://github.com/nocobase/nocobase/pull/6792)) bởi @zhangzhonghe
  - vấn đề căn chỉnh của nút thêm bản ghi con trong bảng cây ([#6791](https://github.com/nocobase/nocobase/pull/6791)) bởi @katherinehhh
  - Cấm di chuyển menu trước hoặc sau các tab trang ([#6777](https://github.com/nocobase/nocobase/pull/6777)) bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Ngày phát hành: 2025-04-24*

#### 🚀 Cải tiến

- **[cli]** Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) bởi @chenos
- **[create-nocobase-app]** Nâng cấp các phụ thuộc và loại bỏ hỗ trợ SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) bởi @chenos
- **[Di động]** Tối ưu hóa tốc độ mở cửa sổ bật lên chọn ngày trên di động ([#6735](https://github.com/nocobase/nocobase/pull/6735)) bởi @zhangzhonghe
- **[Khối: mẫu]** hỗ trợ chuyển đổi khối mẫu thành khối thông thường ([#6662](https://github.com/nocobase/nocobase/pull/6662)) bởi @gchust
- **[Quản lý tệp]** Tiết lộ API utils ([#6705](https://github.com/nocobase/nocobase/pull/6705)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Cho phép đặt chiều rộng thanh bên trong cấu hình chủ đề ([#6720](https://github.com/nocobase/nocobase/pull/6720)) bởi @chenos
- **[Quy trình làm việc]** Thêm các loại ngày vào tập hợp các loại biến ([#6717](https://github.com/nocobase/nocobase/pull/6717)) bởi @mytharcher
- **[In mẫu]** Thay thế kiểm soát hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[client]**

  - vấn đề hiển thị với các quy tắc liên kết trong dữ liệu liên kết đa cấp ([#6755](https://github.com/nocobase/nocobase/pull/6755)) bởi @katherinehhh
  - quy tắc liên kết nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh
  - Vấn đề làm mới khối dữ liệu sau khi gửi thành công ([#6748](https://github.com/nocobase/nocobase/pull/6748)) bởi @zhangzhonghe
  - Vấn đề nút thu gọn trong menu bên trái bị che khuất bởi cửa sổ bật lên của quy trình làm việc ([#6733](https://github.com/nocobase/nocobase/pull/6733)) bởi @zhangzhonghe
  - Vấn đề khó xóa biểu tượng thanh điều hướng trên cùng của di động ([#6734](https://github.com/nocobase/nocobase/pull/6734)) bởi @zhangzhonghe
  - hiển thị giá trị không chính xác cho "Bật cột chỉ mục" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) bởi @katherinehhh
  - điều kiện trường ngày giờ không hoạt động trong quy tắc liên kết ([#6728](https://github.com/nocobase/nocobase/pull/6728)) bởi @katherinehhh
  - thiếu ràng buộc tùy chọn hành động khi mở lại quy tắc liên kết ([#6723](https://github.com/nocobase/nocobase/pull/6723)) bởi @katherinehhh
  - Các trường bắt buộc bị ẩn bởi quy tắc liên kết không được ảnh hưởng đến việc gửi biểu mẫu ([#6709](https://github.com/nocobase/nocobase/pull/6709)) bởi @zhangzhonghe
  - thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh
- **[server]** appVersion được tạo không chính xác bởi create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) bởi @chenos
- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos
- **[build]** Sửa lỗi xảy ra trong lệnh tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) bởi @mytharcher
- **[Khối: Gantt]** Khối biểu đồ Gantt bị chồng chéo các tháng trong tiêu đề lịch cho chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie
- **[Khối: mẫu]** không thể sử dụng mẫu khối trong môi trường mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) bởi @gchust
- **[Quy trình làm việc]** Sửa lỗi xảy ra khi thực thi sự kiện theo lịch trình trong luồng phụ ([#6721](https://github.com/nocobase/nocobase/pull/6721)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ thực thi ở chế độ nhiều bản ghi bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]**

  - Sửa các ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. bởi @aaaaaajie
  - nút xuất pro bị mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh
- **[Lưu trữ tệp: S3(Pro)]**

  - Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher
  - Thêm logic multer make cho tải lên phía máy chủ bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi tải trước các trường liên kết cho bản ghi bởi @mytharcher
