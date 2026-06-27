---
title: "Cập nhật hàng tuần｜Tối ưu hóa và sửa lỗi"
description: "Đây là bản tóm tắt các cập nhật tính năng và cải tiến của NocoBase từ ngày 29 tháng 1 đến ngày 5 tháng 2 năm 2026."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Ngày phát hành: 2026-02-02*

### 🚀 Cải tiến

- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các trình xác thực hiện có dựa trên số điện thoại di động bởi @2013xile

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Sửa lỗi hiệu năng do trường JSON trong quá trình tải danh sách (MySQL) bởi @mytharcher
- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số điện thoại di động bởi @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Ngày phát hành: 2026-02-02*

### 🚀 Cải tiến

- **[client]** Hỗ trợ vô hiệu hóa các tham số appends mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Workflow]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi collection, để tránh lỗi xảy ra khi collection bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher
- **[Quản lý tệp]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, để tránh đường dẫn truy cập nằm ngoài thư mục gốc tài liệu ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher
- **[Workflow: Luồng con]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Ngày phát hành: 2026-02-05*

### 🎉 Tính năng mới

- **[Auth: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[client]** Điều chỉnh cài đặt độ rộng cột thành lựa chọn thả xuống trong bảng con có thể chỉnh sửa nội tuyến ([#8561](https://github.com/nocobase/nocobase/pull/8561)) bởi @katherinehhh
- **[Trường Collection: Markdown(Vditor)]** Thêm tùy chọn cấu hình để đặt chế độ chỉnh sửa mặc định trong cài đặt thành phần. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) bởi @Cyx649312038
- **[Đa không gian]** Kiểm soát quyền truy cập đa không gian acl bởi @jiannx
- **[AI: Cơ sở kiến thức]** Tối ưu hóa đầu ra bản dựng để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi khi sử dụng "Tạo nhanh" của bộ chọn bản ghi liên kết trong biểu mẫu chỉnh sửa đã ghi đè dữ liệu biểu mẫu hiện có. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) bởi @gchust
  - Sửa lỗi khoảng trống trong bố cục Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) bởi @zhangzhonghe
  - Sửa lỗi cần làm mới trang để thêm bản ghi con sau khi bật bảng cây ([#8574](https://github.com/nocobase/nocobase/pull/8574)) bởi @katherinehhh
  - Sửa lỗi độ rộng cột không cập nhật trong bảng con (chỉnh sửa nội tuyến); nhập văn bản nhiều dòng không thay đổi kích thước theo độ rộng cột ([#8573](https://github.com/nocobase/nocobase/pull/8573)) bởi @katherinehhh
  - Sửa lỗi menu "Biểu mẫu (Thêm mới)" được hiển thị không chính xác trong cửa sổ bật lên hành động "Tạo mới". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) bởi @gchust
- **[flow-engine]**

  - Sửa lỗi một số thư viện bên thứ ba không thể được import chính xác trong các khối JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) bởi @gchust
  - Sửa lỗi gửi biểu mẫu sau khi chuyển trang không làm mới trang. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) bởi @gchust
- **[Mẫu UI]** Sửa lỗi khi mở lại và gửi một mẫu bật lên đã lưu cho biểu mẫu "Thêm mới" của trường liên kết. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) bởi @gchust
- **[Trường Collection: Đính kèm(URL)]** Sửa lỗi cấu hình hiển thị tên tệp của trường URL đính kèm không hoạt động trong biểu mẫu chỉnh sửa ([#8571](https://github.com/nocobase/nocobase/pull/8571)) bởi @katherinehhh
- **[Nhân viên AI]** Sửa lỗi nút LLM không gửi được tin nhắn ([#8569](https://github.com/nocobase/nocobase/pull/8569)) bởi @2013xile
- **[Hành động: Nhập bản ghi]** Sửa lỗ hổng bảo mật của hành động nhập ([#8544](https://github.com/nocobase/nocobase/pull/8544)) bởi @mytharcher
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi tham số và payload không chính xác khi kích hoạt workflow tùy chỉnh bởi @mytharcher
- **[Đa không gian]**

  - thêm script migration để xóa x-ready-pretty trong trường không gian bởi @jiannx
  - xóa thuộc tính read-pretty cho trường không gian bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa lỗi hiệu năng do trường JSON trong quá trình tải danh sách (MySQL) bởi @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Ngày phát hành: 2026-02-02*

### 🎉 Tính năng mới

- **[flow-engine]** hỗ trợ env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) bởi @chenos

### 🚀 Cải tiến

- **[acl]** acl thêm phương thức generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) bởi @jiannx
- **[client]** Hỗ trợ vô hiệu hóa các tham số appends mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile
- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các trình xác thực hiện có dựa trên số điện thoại di động bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi luồng sự kiện không áp dụng được khi làm mới các khối mục tiêu qua cửa sổ bật lên. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) bởi @gchust
  - Sửa lỗi dữ liệu trang bị làm mới không chính xác sau khi mở và đóng cửa sổ bật lên lần đầu tiên. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) bởi @gchust
  - Sửa lỗi khiến khối dữ liệu làm mới liên tục sau khi gửi biểu mẫu. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) bởi @gchust
  - sửa lỗi trường nanoid không tạo lại giá trị mặc định sau khi gửi tạo ([#8538](https://github.com/nocobase/nocobase/pull/8538)) bởi @katherinehhh
  - sửa lỗi hiển thị không chính xác khi đặt giá trị mặc định cho mô hình trường xếp tầng ([#8537](https://github.com/nocobase/nocobase/pull/8537)) bởi @katherinehhh
- **[flow-engine]** Sửa lỗi tải không chính xác một số thư viện ESM trong runjs do bị phân loại sai thành mô-đun AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) bởi @gchust
- **[Quản lý tệp]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, để tránh đường dẫn truy cập nằm ngoài thư mục gốc tài liệu ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher
- **[Workflow]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi collection, để tránh lỗi xảy ra khi collection bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher
- **[Nhân viên AI]** Sửa lỗi ngoại lệ xảy ra khi các công cụ được tự động gọi trong quá trình mô hình hóa dữ liệu AI ([#8532](https://github.com/nocobase/nocobase/pull/8532)) bởi @cgyrock
- **[Hành động: Nhập bản ghi Pro]** Sửa số đếm trong kết quả nhập và bản dịch thông báo bởi @mytharcher
- **[Workflow: Luồng con]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher
- **[In mẫu]** sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Sửa lỗi xảy ra khi thêm vai trò cho người dùng nếu workflow của khán giả bị vô hiệu hóa bởi @mytharcher
  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher
- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số điện thoại di động bởi @2013xile
