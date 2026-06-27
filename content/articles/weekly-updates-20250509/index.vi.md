---
title: "Cập nhật hàng tuần NocoBase: In mẫu hỗ trợ hình ảnh và mã vạch"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ hiển thị hình ảnh động và mã vạch trong mẫu tài liệu, hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Ngày phát hành: 2025-05-07*

#### 🎉 Tính năng mới

- **[Khối: iframe]** Khối iframe hỗ trợ cấu hình thuộc tính allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) bởi @zhangzhonghe
- **[In mẫu]** Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66

#### 🐛 Sửa lỗi

- **[client]**

  - Trong các trang con lồng nhau, danh sách khối không hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe
  - Khi thành phần trường quan hệ của biểu mẫu lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe
  - Hiển thị nhiều thông báo lỗi khi vi phạm quy tắc xác thực trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh
  - Sự cố khi cấu hình quy tắc liên kết trong biểu mẫu con (cửa sổ popup) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh
  - Sửa lỗi không thể chọn các trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe
  - Sự cố kiểu dáng thanh phân trang bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh
  - Bộ chọn bảng trong biểu mẫu lọc, kiểu dáng bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe
- **[database]**

  - Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher
  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher
- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** Các trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sự cố liên kết hành động quy trình làm việc được kích hoạt bởi @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Ngày phát hành: 2025-05-08*

#### 🐛 Sửa lỗi

- **[client]**
  - Không thể kéo các nút khác vào nút trùng lặp ([#6822](https://github.com/nocobase/nocobase/pull/6822)) bởi @katherinehhh
  - Nhiều trường liên kết không gửi được khi hiển thị các trường từ bộ sưu tập liên kết ([#6833](https://github.com/nocobase/nocobase/pull/6833)) bởi @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Ngày phát hành: 2025-05-04*

#### 🎉 Tính năng mới

- **[client]** hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp ([#6787](https://github.com/nocobase/nocobase/pull/6787)) bởi @katherinehhh
- **[In mẫu]**

  - Hỗ trợ hiển thị hình ảnh động và mã vạch trong mẫu tài liệu. bởi @sheldon66
  - Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66
- **[Khối: Cây]** Khối cây bộ lọc hỗ trợ quy tắc liên kết bởi @katherinehhh
- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

#### 🚀 Cải tiến

- **[client]** tối ưu hóa kiểu dáng nút thêm bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh
- **[Trình quản lý tệp]** Thêm tùy chọn thời gian chờ OSS mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher
- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile

#### 🐛 Sửa lỗi

- **[database]**

  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher
  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher
- **[client]**

  - Khi lựa chọn biến yêu cầu tải không đồng bộ, menu đã chọn cuối cùng bị mất. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) bởi @gchust
  - Sửa lỗi không thể chọn các trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe
  - Sự cố khi cấu hình quy tắc liên kết trong biểu mẫu con (cửa sổ popup) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh
  - Hiển thị nhiều thông báo lỗi khi vi phạm quy tắc xác thực trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh
  - Trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) bởi @katherinehhh
- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Phản hồi yêu cầu tùy chỉnh được đặt thành biến không hiển thị chính xác ([#6793](https://github.com/nocobase/nocobase/pull/6793)) bởi @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Ngày phát hành: 2025-05-06*

#### 🚀 Cải tiến

- **[client]** Thành phần RichText hỗ trợ các thuộc tính modules và formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) bởi @jiannx

#### 🐛 Sửa lỗi

- **[Xác minh]** Sửa các sự cố của tập lệnh di chuyển ([#6820](https://github.com/nocobase/nocobase/pull/6820)) bởi @2013xile
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sự cố liên kết hành động quy trình làm việc được kích hoạt bởi @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Ngày phát hành: 2025-05-07*

#### 🎉 Tính năng mới

- **[Khối: iframe]** Khối iframe hỗ trợ cấu hình thuộc tính allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) bởi @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Ngày phát hành: 2025-05-08*

#### 🐛 Sửa lỗi

- **[client]**

  - Khi thành phần trường quan hệ của biểu mẫu lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe
  - Bộ chọn bảng trong biểu mẫu lọc, kiểu dáng bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe
  - Trong các trang con lồng nhau, danh sách khối không hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe
  - Nhiều trường liên kết không gửi được khi hiển thị các trường từ bộ sưu tập liên kết ([#6833](https://github.com/nocobase/nocobase/pull/6833)) bởi @katherinehhh
  - Không thể kéo các nút khác vào nút trùng lặp ([#6822](https://github.com/nocobase/nocobase/pull/6822)) bởi @katherinehhh
  - Sự cố kiểu dáng thanh phân trang bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh
- **[database]** Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher
- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** Các trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Ngày phát hành: 2025-05-08*

#### 🎉 Tính năng mới

- **[client]**

  - hỗ trợ biến trong tiêu đề và nội dung xác nhận thứ cấp ([#6787](https://github.com/nocobase/nocobase/pull/6787)) bởi @katherinehhh
  - hỗ trợ cấu hình quy tắc liên kết trong các khối để hiển thị/ẩn động ([#6636](https://github.com/nocobase/nocobase/pull/6636)) bởi @katherinehhh
- **[undefined]** thêm ci phát hành cho bộ giấy phép ([#6786](https://github.com/nocobase/nocobase/pull/6786)) bởi @jiannx
- **[Khối: iframe]** Khối iframe hỗ trợ cấu hình thuộc tính allow ([#6824](https://github.com/nocobase/nocobase/pull/6824)) bởi @zhangzhonghe
- **[Xác thực]** Hỗ trợ chức năng "Quên mật khẩu" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) bởi @zhangzhonghe
  Tham khảo: [Quên mật khẩu](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Trình quản lý tệp]** Tính năng: Thêm API `getFileStream` để hỗ trợ truyền phát tệp. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) bởi @sheldon66
- **[Hành động: Yêu cầu tùy chỉnh]** hỗ trợ biến phản hồi trong thông báo thành công của hành động yêu cầu tùy chỉnh ([#6694](https://github.com/nocobase/nocobase/pull/6694)) bởi @katherinehhh
- **[In mẫu]** Tính năng: Hỗ trợ tùy chọn Select `{ label, value }` trong in mẫu. bởi @sheldon66
- **[Khối: Cây]** Khối cây bộ lọc hỗ trợ quy tắc liên kết bởi @katherinehhh
- **[Trực quan hóa dữ liệu: ECharts]** Thêm cài đặt "Đảo ngược trục Y" cho biểu đồ cột bởi @2013xile

#### 🚀 Cải tiến

- **[client]**

  - Thành phần RichText hỗ trợ các thuộc tính modules và formats ([#6807](https://github.com/nocobase/nocobase/pull/6807)) bởi @jiannx
  - tối ưu hóa kiểu dáng nút thêm bảng con và căn chỉnh bộ phân trang trên cùng một hàng ([#6790](https://github.com/nocobase/nocobase/pull/6790)) bởi @katherinehhh
  - hiển thị tiêu đề nút với chú giải công cụ khi di chuột qua biểu tượng hành động ([#6761](https://github.com/nocobase/nocobase/pull/6761)) bởi @katherinehhh
  - giữ chức năng mẫu tham chiếu ([#6743](https://github.com/nocobase/nocobase/pull/6743)) bởi @gchust
  - Điều chỉnh thông báo tải lên ([#6757](https://github.com/nocobase/nocobase/pull/6757)) bởi @mytharcher
- **[utils]** Tăng chiều cao danh sách trường nút lọc và sắp xếp/phân loại các trường ([#6779](https://github.com/nocobase/nocobase/pull/6779)) bởi @zhangzhonghe
- **[Trình quản lý tệp]** Thêm tùy chọn thời gian chờ OSS mặc định là 10 phút ([#6795](https://github.com/nocobase/nocobase/pull/6795)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Thêm API mở rộng cho cấu hình giao diện trường ([#6742](https://github.com/nocobase/nocobase/pull/6742)) bởi @2013xile
- **[Chính sách mật khẩu]** Thay đổi thời hạn mật khẩu mặc định thành không bao giờ hết hạn bởi @2013xile
- **[WeCom]** Ưu tiên email công ty hơn email cá nhân khi cập nhật email của người dùng bởi @2013xile

#### 🐛 Sửa lỗi

- **[database]**

  - Nhập không thành công do giá trị trường văn bản. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) bởi @aaaaaajie
  - Sửa lỗi liên kết belongs-to không được tải trong appends khi khóa ngoại là bigInt trên MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) bởi @mytharcher
  - Sửa các trường hợp kiểm thử ([#6811](https://github.com/nocobase/nocobase/pull/6811)) bởi @mytharcher
  - Tránh lỗi xảy ra khi kiểu dữ liệu không phải là chuỗi ([#6797](https://github.com/nocobase/nocobase/pull/6797)) bởi @mytharcher
  - thêm unavailableActions vào bộ sưu tập sql và bộ sưu tập view ([#6765](https://github.com/nocobase/nocobase/pull/6765)) bởi @katherinehhh
- **[client]**

  - Nhiều trường liên kết không gửi được khi hiển thị các trường từ bộ sưu tập liên kết ([#6833](https://github.com/nocobase/nocobase/pull/6833)) bởi @katherinehhh
  - Không thể kéo các nút khác vào nút trùng lặp ([#6822](https://github.com/nocobase/nocobase/pull/6822)) bởi @katherinehhh
  - Bộ chọn bảng trong biểu mẫu lọc, kiểu dáng bất thường ([#6827](https://github.com/nocobase/nocobase/pull/6827)) bởi @zhangzhonghe
  - Khi thành phần trường quan hệ của biểu mẫu lọc được thay đổi thành bộ chọn dữ liệu, không có mục cấu hình "Cho phép chọn nhiều" ([#6656](https://github.com/nocobase/nocobase/pull/6656)) bởi @zhangzhonghe
  - Trong các trang con lồng nhau, danh sách khối không hiển thị khi di chuột qua nút "Thêm khối" ([#6832](https://github.com/nocobase/nocobase/pull/6832)) bởi @zhangzhonghe
  - Sự cố kiểu dáng thanh phân trang bảng con ở chế độ chỉ đọc ([#6830](https://github.com/nocobase/nocobase/pull/6830)) bởi @katherinehhh
  - Sự cố khi cấu hình quy tắc liên kết trong biểu mẫu con (cửa sổ popup) trong bảng con ([#6803](https://github.com/nocobase/nocobase/pull/6803)) bởi @katherinehhh
  - Khi lựa chọn biến yêu cầu tải không đồng bộ, menu đã chọn cuối cùng bị mất. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) bởi @gchust
  - Hiển thị nhiều thông báo lỗi khi vi phạm quy tắc xác thực trong các trường biểu mẫu ([#6805](https://github.com/nocobase/nocobase/pull/6805)) bởi @katherinehhh
  - Sửa lỗi không thể chọn các trường con của trường một-nhiều làm tùy chọn lọc trong biểu mẫu lọc ([#6809](https://github.com/nocobase/nocobase/pull/6809)) bởi @zhangzhonghe
  - Chuyển các props khác đến thành phần Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) bởi @sheldon66
  - Trường liên kết không gửi dữ liệu khi hiển thị trường từ bộ sưu tập liên quan ([#6798](https://github.com/nocobase/nocobase/pull/6798)) bởi @katherinehhh
  - Trong biểu mẫu lọc, chuyển đổi toán tử trường và sau đó làm mới trang gây ra lỗi ([#6781](https://github.com/nocobase/nocobase/pull/6781)) bởi @zhangzhonghe
  - Trong khối thu gọn, nhấp vào nút xóa trong hộp tìm kiếm trường quan hệ không được xóa phạm vi dữ liệu ([#6782](https://github.com/nocobase/nocobase/pull/6782)) bởi @zhangzhonghe
  - Sự cố căn chỉnh của nút thêm bản ghi con trong bảng cây ([#6791](https://github.com/nocobase/nocobase/pull/6791)) bởi @katherinehhh
  - Cấm di chuyển menu trước hoặc sau các tab trang ([#6777](https://github.com/nocobase/nocobase/pull/6777)) bởi @zhangzhonghe
  - Khối bảng hiển thị dữ liệu trùng lặp khi lọc ([#6792](https://github.com/nocobase/nocobase/pull/6792)) bởi @zhangzhonghe
  - Sự cố toán tử tham số truy vấn url ([#6770](https://github.com/nocobase/nocobase/pull/6770)) bởi @katherinehhh
  - Chỉ hành động xuất trong bộ sưu tập view được hỗ trợ khi writableView là false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) bởi @katherinehhh
  - Dữ liệu được truy xuất không chính xác cho các trường mảng nhiều-nhiều từ các bảng liên quan trong biểu mẫu ([#6744](https://github.com/nocobase/nocobase/pull/6744)) bởi @2013xile
  - Tạo dữ liệu liên kết không mong muốn khi hiển thị trường liên kết trong biểu mẫu con/bảng con trong biểu mẫu tạo ([#6727](https://github.com/nocobase/nocobase/pull/6727)) bởi @katherinehhh
- **[create-nocobase-app]** Tạm thời sửa lỗi mariadb bằng cách hạ cấp xuống 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) bởi @chenos
- **[Hành động: Xuất bản ghi]** Sửa lỗi xuất văn bản dài. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) bởi @aaaaaajie
- **[Trường bộ sưu tập: Tệp đính kèm(URL)]** Các trường tệp đính kèm (URL) không được phép cấu hình giá trị trong quy tắc liên kết ([#6831](https://github.com/nocobase/nocobase/pull/6831)) bởi @katherinehhh
- **[Xác minh]** Sửa các sự cố của tập lệnh di chuyển ([#6820](https://github.com/nocobase/nocobase/pull/6820)) bởi @2013xile
- **[Xác thực]** Không cho phép thay đổi tên bộ xác thực ([#6808](https://github.com/nocobase/nocobase/pull/6808)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Phản hồi yêu cầu tùy chỉnh được đặt thành biến không hiển thị chính xác ([#6793](https://github.com/nocobase/nocobase/pull/6793)) bởi @katherinehhh
- **[Khối: Bảng hành động]** Thiếu biểu tượng bảng hành động khi chỉ bật biểu tượng ([#6773](https://github.com/nocobase/nocobase/pull/6773)) bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sự cố liên kết hành động quy trình làm việc được kích hoạt bởi @katherinehhh
- **[Quy trình làm việc: nút tính toán ngày tháng]** Sửa lỗi trong trình duyệt cũ không có API `Intl` bởi @mytharcher
- **[In mẫu]** Sửa: Sửa logic xác thực quyền để ngăn chặn các hành động trái phép. bởi @sheldon66
- **[Lưu trữ tệp: S3(Pro)]** url truy cập hết hạn không hợp lệ bởi @jiannx
- **[Khối: Cây]** Sau khi kết nối qua khóa ngoại, nhấp để kích hoạt lọc dẫn đến điều kiện lọc trống bởi @zhangzhonghe
