---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: Khi tạo bộ sưu tập, có thể thay đổi loại trường id mặc định, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*Ngày phát hành: 2025-12-17*

### 🚀 Cải tiến

- **[server]** Thêm khả năng chịu lỗi khi thiếu phiên bản ứng dụng gây ra lỗi trong khi lấy thông báo bảo trì ứng dụng ([#8196](https://github.com/nocobase/nocobase/pull/8196)) bởi @2013xile
- **[Error handler]** Không hiển thị thông báo lỗi cơ sở dữ liệu thô khi có lỗi cú pháp SQL, để tránh tiết lộ loại cơ sở dữ liệu ([#8195](https://github.com/nocobase/nocobase/pull/8195)) bởi @2013xile
- **[Workflow]** Hỗ trợ sử dụng cấu hình cũ để tạo mới trong quy trình làm việc đã được sao chép ([#8165](https://github.com/nocobase/nocobase/pull/8165)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi chỉ có một bản ghi duy nhất hiển thị trong danh sách bản ghi để thực thi thủ công ([#8187](https://github.com/nocobase/nocobase/pull/8187)) bởi @mytharcher
- **[Collection: Kết nối dữ liệu ngoài (FDW)]** Sửa lỗi kích hoạt khi kết nối với các bảng có tên viết hoa bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi trạng thái của các bản ghi phê duyệt không liên quan bị thay đổi sai thành `UNPROCESSED` bởi hành động phê duyệt bởi @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*Ngày phát hành: 2025-12-16*

### 🚀 Cải tiến

- **[acl]** Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) bởi @mytharcher
- **[Kiểm soát truy cập]** Không cho phép gán vai trò root cho người dùng ([#8180](https://github.com/nocobase/nocobase/pull/8180)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Cài đặt giấy phép]**

  - Sửa lỗi ngoại lệ khi build ts của plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) bởi @jiannx
  - Tối ưu hóa giấy phép và bổ sung thông tin nhắc nhở ([#7993](https://github.com/nocobase/nocobase/pull/7993)) bởi @jiannx
- **[Quản lý tệp]** Sửa lỗi xem trước tệp `.txt` trên OSS bị sai charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) bởi @mytharcher
- **[Hành động: Nhập bản ghi]** Đồng bộ chờ các sự kiện `afterCreate` được kích hoạt bởi quá trình nhập kết thúc. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) bởi @2013xile
- **[Collection: Kết nối dữ liệu ngoài (FDW)]** Sửa lỗi tải không thành công cho các bảng có tên viết hoa bởi @2013xile
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi các tùy chọn `encrypt` và `trustServerCertificate` không khả dụng bởi @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*Ngày phát hành: 2025-12-12*

### 🚀 Cải tiến

- **[Workflow]**
  - Thêm logic chịu lỗi cho dữ liệu bị thiếu trong quá trình chuẩn bị bộ xử lý, để tránh treo thực thi ([#8156](https://github.com/nocobase/nocobase/pull/8156)) bởi @mytharcher
  - Sử dụng tải chậm cho dữ liệu liên kết trên canvas quy trình làm việc để cải thiện hiệu suất ([#8142](https://github.com/nocobase/nocobase/pull/8142)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[acl]** Sửa lỗi API `acl.can` trả về `null` khi vai trò là `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Sửa lỗi danh sách việc cần làm thủ công đang sử dụng API không chính xác ([#8144](https://github.com/nocobase/nocobase/pull/8144)) bởi @mytharcher
- **[Mã hóa yêu cầu HTTP]** Sử dụng dấu ngoặc cho định dạng mảng trong phân tích cú pháp qs bởi @chenos
- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra khi hủy thực thi khi quy trình làm việc của nó đã bị xóa bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi ngắt dòng trong dữ liệu bị mất trong quá trình di chuyển. bởi @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*Ngày phát hành: 2025-12-17*

### 🚀 Cải tiến

- **[server]** Thêm khả năng chịu lỗi khi thiếu phiên bản ứng dụng gây ra lỗi trong khi lấy thông báo bảo trì ứng dụng ([#8196](https://github.com/nocobase/nocobase/pull/8196)) bởi @2013xile
- **[Khối: Danh sách]** thêm nút Liên kết cho các khối Bảng, Danh sách và Thẻ Lưới ([#8194](https://github.com/nocobase/nocobase/pull/8194)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi khi chọn “Không” cho bộ lọc hộp kiểm vẫn áp dụng bộ lọc “Có”. ([#8170](https://github.com/nocobase/nocobase/pull/8170)) bởi @gchust
- **[Trình quản lý di chuyển]** Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*Ngày phát hành: 2025-12-17*

### 🎉 Tính năng mới

- **[client]** Khi tạo collection, có thể thay đổi loại trường id mặc định ([#8129](https://github.com/nocobase/nocobase/pull/8129)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**

  - thay đổi độ rộng cột bảng để sử dụng các tùy chọn có thể chọn ([#8188](https://github.com/nocobase/nocobase/pull/8188)) bởi @katherinehhh
  - cải thiện kiểu recordPicker với maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) bởi @katherinehhh
  - tối ưu hóa các tùy chọn cấu hình (Khối, Trường, Hành động) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) bởi @katherinehhh
- **[Error handler]** Không hiển thị thông báo lỗi cơ sở dữ liệu thô khi có lỗi cú pháp SQL, để tránh tiết lộ loại cơ sở dữ liệu ([#8195](https://github.com/nocobase/nocobase/pull/8195)) bởi @2013xile
- **[Khối: Bản đồ]** hỗ trợ dấu ba chấm cho văn bản tràn cho trường bản đồ ở chế độ hiển thị văn bản ([#8189](https://github.com/nocobase/nocobase/pull/8189)) bởi @katherinehhh
- **[Workflow]** Hỗ trợ sử dụng cấu hình cũ để tạo mới trong quy trình làm việc đã được sao chép ([#8165](https://github.com/nocobase/nocobase/pull/8165)) bởi @mytharcher
- **[Kiểm soát truy cập]** Không cho phép gán vai trò root cho người dùng ([#8180](https://github.com/nocobase/nocobase/pull/8180)) bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi nút gửi không hiển thị trong biểu mẫu tạo khi vai trò có quyền tạo ([#8190](https://github.com/nocobase/nocobase/pull/8190)) bởi @katherinehhh
  - ngăn dữ liệu subtable/subform hiện có bị xóa khi gửi mà không chọn bất kỳ mục nào ([#8172](https://github.com/nocobase/nocobase/pull/8172)) bởi @katherinehhh
  - ngăn cài đặt Phạm vi dữ liệu xuất hiện trong cấu hình biểu mẫu tạo ([#8176](https://github.com/nocobase/nocobase/pull/8176)) bởi @katherinehhh
  - Không lưu được luồng sự kiện tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) bởi @chenos
  - loại bỏ khoảng trắng thừa sau khi tab bị ẩn ([#8167](https://github.com/nocobase/nocobase/pull/8167)) bởi @chenos
  - sửa lỗi lọc không chính xác các tùy chọn đã chọn trong lựa chọn bản ghi liên kết ([#8151](https://github.com/nocobase/nocobase/pull/8151)) bởi @katherinehhh
  - Sửa lỗi hiển thị trường tableoid trong khối biểu mẫu ([#8177](https://github.com/nocobase/nocobase/pull/8177)) bởi @katherinehhh
- **[server]**

  - Cập nhật license-kit lên phiên bản mới nhất ([#8173](https://github.com/nocobase/nocobase/pull/8173)) bởi @jiannx
  - Hỗ trợ trường Snowflake ID (53-bit) cho các nguồn dữ liệu bên ngoài ([#8185](https://github.com/nocobase/nocobase/pull/8185)) bởi @2013xile
- **[Khối: Bản đồ]** sửa lỗi mức thu phóng bản đồ không chính xác sau khi chuyển menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi chỉ có một bản ghi duy nhất hiển thị trong danh sách bản ghi để thực thi thủ công ([#8187](https://github.com/nocobase/nocobase/pull/8187)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Giải quyết vấn đề về chế độ SQL chọn nguồn dữ liệu bên ngoài; <br/>Giải quyết vấn đề về trạng thái tải của khối biểu đồ trong quá trình tìm nạp dữ liệu; <br/> Giải quyết vấn đề về hủy cấu hình khối biểu đồ trống; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) bởi @heziqiang
- **[AI employees]** Giải quyết vấn đề về ngắt dòng tin nhắn ai ([#8096](https://github.com/nocobase/nocobase/pull/8096)) bởi @heziqiang
- **[Cài đặt giấy phép]**

  - Sửa lỗi ngoại lệ khi build ts của plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) bởi @jiannx
  - Tối ưu hóa giấy phép và bổ sung thông tin nhắc nhở ([#7993](https://github.com/nocobase/nocobase/pull/7993)) bởi @jiannx
- **[Quản lý tệp]** Sửa lỗi xem trước tệp `.txt` trên OSS bị sai charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) bởi @mytharcher
- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi các tùy chọn `encrypt` và `trustServerCertificate` không khả dụng bởi @2013xile
- **[Collection: Kết nối dữ liệu ngoài (FDW)]** Sửa lỗi tải không thành công cho các bảng có tên viết hoa bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi trạng thái của các bản ghi phê duyệt không liên quan bị thay đổi sai thành `UNPROCESSED` bởi hành động phê duyệt bởi @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*Ngày phát hành: 2025-12-12*

### 🚀 Cải tiến

- **[acl]** Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) bởi @mytharcher
- **[client]** hỗ trợ định dạng số cho trường phần trăm ([#8123](https://github.com/nocobase/nocobase/pull/8123)) bởi @katherinehhh
- **[flow-engine]** hỗ trợ ẩn menu cấu hình bước một cách linh hoạt ([#7924](https://github.com/nocobase/nocobase/pull/7924)) bởi @gchust
- **[Khối: GridCard]** Tối ưu hóa kiểu khối Thẻ Lưới để bố cục gọn gàng hơn ([#8152](https://github.com/nocobase/nocobase/pull/8152)) bởi @katherinehhh
- **[AI employees]** Đã bật chức năng chỉnh sửa cho các lời nhắc hệ thống trợ lý AI tích hợp sẵn.<br/>Đã tối ưu hóa lời nhắc hệ thống cho trợ lý AI Nathan.<br/>Đã sửa lỗi máy chủ không đọc được tệp tĩnh. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) bởi @heziqiang
- **[Workflow]**

  - Thêm logic chịu lỗi cho dữ liệu bị thiếu trong quá trình chuẩn bị bộ xử lý, để tránh treo thực thi ([#8156](https://github.com/nocobase/nocobase/pull/8156)) bởi @mytharcher
  - Sử dụng tải chậm cho dữ liệu liên kết trên canvas quy trình làm việc để cải thiện hiệu suất ([#8142](https://github.com/nocobase/nocobase/pull/8142)) bởi @mytharcher
- **[Trường Collection: Markdown(Vditor)]** Vô hiệu hóa phân tích biến trong trường Markdown theo mặc định ở chế độ readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi tải xuống tệp không chính xác cho tệp đính kèm ([#8154](https://github.com/nocobase/nocobase/pull/8154)) bởi @katherinehhh
- **[client]**

  - sửa lỗi dropdown trường liên kết bị vô hiệu hóa khi trường tùy chọn tồn tại ([#8153](https://github.com/nocobase/nocobase/pull/8153)) bởi @katherinehhh
  - Đã sửa lỗi khi nhập văn bản tiếng Trung đã xóa các tùy chọn hiện có khi sử dụng toán tử đa lựa chọn trên trường đơn lựa chọn trong khối biểu mẫu bộ lọc. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) bởi @gchust
  - Đã sửa lỗi chuyển đổi trường nhãn gây mất cấu hình cửa sổ bật lên. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) bởi @gchust
- **[acl]** Sửa lỗi API `acl.can` trả về `null` khi vai trò là `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) bởi @mytharcher
- **[database]** `filterByTk` hiện hỗ trợ mảng khi truy vấn các collection có nhiều khóa mục tiêu bộ lọc ([#7986](https://github.com/nocobase/nocobase/pull/7986)) bởi @chenos
- **[Hành động: Nhập bản ghi]** Đồng bộ chờ các sự kiện `afterCreate` được kích hoạt bởi quá trình nhập kết thúc. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) bởi @2013xile
- **[Trường Collection: Sequence]** Cải thiện độ mạnh mẽ của plugin-field-sequence khi xử lý lệnh sửa chữa ([#8139](https://github.com/nocobase/nocobase/pull/8139)) bởi @cgyrock
- **[Workflow: Nút thủ công]** Sửa lỗi danh sách việc cần làm thủ công đang sử dụng API không chính xác ([#8144](https://github.com/nocobase/nocobase/pull/8144)) bởi @mytharcher
- **[Mã hóa yêu cầu HTTP]** Sử dụng dấu ngoặc cho định dạng mảng trong phân tích cú pháp qs bởi @chenos
- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra khi hủy thực thi khi quy trình làm việc của nó đã bị xóa bởi @mytharcher
- **[Trình quản lý di chuyển]** Sửa lỗi ngắt dòng trong dữ liệu bị mất trong quá trình di chuyển. bởi @cgyrock
