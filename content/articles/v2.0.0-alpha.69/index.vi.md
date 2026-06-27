---
title: "NocoBase v2.0.0-alpha.69: hỗ trợ env.ESM_CDN_BASE_URL"
description: "Ghi chú phát hành v2.0.0-alpha.69"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ cấu hình chế độ tải dữ liệu ([#8551](https://github.com/nocobase/nocobase/pull/8551)) bởi @zhangzhonghe

- **[flow-engine]** Hỗ trợ env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) bởi @chenos

- **[Auth: DingTalk]** Cho phép liên kết người dùng với `unionId` bởi @2013xile

### 🚀 Cải tiến

- **[flow-engine]** Cải thiện tính năng tự động hoàn thành và gợi ý mã trong trình soạn thảo mã của mô hình JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) bởi @gchust

- **[client]**
  - Điều chỉnh cài đặt độ rộng cột thành lựa chọn thả xuống trong bảng con có thể chỉnh sửa nội tuyến ([#8561](https://github.com/nocobase/nocobase/pull/8561)) bởi @katherinehhh

  - Hỗ trợ vô hiệu hóa các tham số appends mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile

- **[acl]** acl thêm phương thức generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) bởi @jiannx

- **[Trường Collection: Markdown(Vditor)]** Đã thêm tùy chọn cấu hình để đặt chế độ chỉnh sửa mặc định trong cài đặt thành phần. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) bởi @Cyx649312038

- **[Workflow]** Thay đổi đường dẫn route của các trang con workflow, để đưa tất cả các trang workflow vào tiền tố `/admin/settings/workflow` ([#8519](https://github.com/nocobase/nocobase/pull/8519)) bởi @mytharcher

- **[AI: Cơ sở tri thức]** Tối ưu hóa đầu ra build để giảm kích thước gói của plugin-ai-knowledge-base. bởi @cgyrock

- **[Đa không gian]** Kiểm soát quyền truy cập acl của đa không gian bởi @jiannx

- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các authenticator hiện có dựa trên số điện thoại di động bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi cần làm mới trang để thêm bản ghi con sau khi bật bảng cây ([#8574](https://github.com/nocobase/nocobase/pull/8574)) bởi @katherinehhh

  - Sửa lỗi khoảng trống trong bố cục Grid ([#8535](https://github.com/nocobase/nocobase/pull/8535)) bởi @zhangzhonghe

  - Sửa lỗi độ rộng cột không cập nhật trong bảng con (chỉnh sửa nội tuyến); nhập văn bản nhiều dòng không thay đổi kích thước theo độ rộng cột ([#8573](https://github.com/nocobase/nocobase/pull/8573)) bởi @katherinehhh

  - Sửa lỗi khi sử dụng "Tạo nhanh" của bộ chọn bản ghi liên kết trong biểu mẫu chỉnh sửa đã ghi đè dữ liệu biểu mẫu hiện có. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) bởi @gchust

  - sửa lỗi: ẩn "Bật bảng cây" và "Mở rộng tất cả các hàng theo mặc định" cho các collection không phải cây ([#8566](https://github.com/nocobase/nocobase/pull/8566)) bởi @katherinehhh

  - Sửa lỗi menu “Biểu mẫu (Thêm mới)” được hiển thị không chính xác trong cửa sổ bật lên của hành động "Tạo mới". ([#8562](https://github.com/nocobase/nocobase/pull/8562)) bởi @gchust

  - sửa lỗi trường nanoid không tạo lại giá trị mặc định sau khi gửi tạo ([#8538](https://github.com/nocobase/nocobase/pull/8538)) bởi @katherinehhh

  - Sửa lỗi luồng sự kiện không áp dụng được khi làm mới các khối mục tiêu qua cửa sổ bật lên. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) bởi @gchust

  - Sửa các lỗi đã biết liên quan đến lọc ([#8514](https://github.com/nocobase/nocobase/pull/8514)) bởi @zhangzhonghe

  - Sửa lỗi khiến khối dữ liệu làm mới liên tục sau khi gửi biểu mẫu. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) bởi @gchust

  - Sửa lỗi dữ liệu trang bị làm mới không chính xác sau khi mở và đóng cửa sổ bật lên lần đầu tiên. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) bởi @gchust

  - Sửa lỗi không thể sử dụng biến biểu mẫu để gán giá trị trong quy tắc liên kết cho các trường biểu mẫu con nhiều cấp một-nhiều. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) bởi @gchust

  - sửa lỗi hiển thị không chính xác khi đặt giá trị mặc định cho mô hình trường cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) bởi @katherinehhh

  - Sửa lỗi dữ liệu không làm mới sau khi thay đổi qua nhiều cửa sổ bật lên nhiều cấp và qua các khối. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) bởi @gchust

- **[flow-engine]**
  - sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8576](https://github.com/nocobase/nocobase/pull/8576)) bởi @katherinehhh

  - Sửa lỗi gửi biểu mẫu sau khi chuyển trang không làm mới trang. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) bởi @gchust

  - Sửa lỗi một số thư viện bên thứ ba không thể được import chính xác trong các khối JS. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) bởi @gchust

  - Sửa lỗi tải không chính xác một số thư viện ESM trong runjs do bị phân loại nhầm là mô-đun AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) bởi @gchust

  - sửa lỗi FilterByTK khi filterTargetKey là một mảng một phần tử trong nguồn dữ liệu bên ngoài ([#8522](https://github.com/nocobase/nocobase/pull/8522)) bởi @katherinehhh

  - sửa lỗi hành động xóa cột không hoạt động trong chỉnh sửa bảng con popup khi createModelOptions được cấu hình ([#8560](https://github.com/nocobase/nocobase/pull/8560)) bởi @katherinehhh

- **[Trường Collection: Đính kèm(URL)]** Sửa lỗi cấu hình hiển thị tên tệp của trường URL đính kèm không hoạt động trong biểu mẫu chỉnh sửa ([#8571](https://github.com/nocobase/nocobase/pull/8571)) bởi @katherinehhh

- **[AI employees]**
  - Sửa lỗi nút LLM không gửi được tin nhắn ([#8569](https://github.com/nocobase/nocobase/pull/8569)) bởi @2013xile

  - Sửa lỗi hệ thống không thể khởi động sau khi build ([#8523](https://github.com/nocobase/nocobase/pull/8523)) bởi @cgyrock

  - Sửa lỗi ngoại lệ xảy ra khi các công cụ được tự động gọi trong quá trình mô hình hóa dữ liệu AI ([#8532](https://github.com/nocobase/nocobase/pull/8532)) bởi @cgyrock

- **[Mẫu UI]** Sửa lỗi khi mở lại và gửi một mẫu popup đã lưu cho biểu mẫu “Thêm mới” của trường liên kết. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) bởi @gchust

- **[Hành động: Nhập bản ghi]** Sửa lỗ hổng của hành động nhập ([#8544](https://github.com/nocobase/nocobase/pull/8544)) bởi @mytharcher

- **[Quản lý tệp]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, để tránh đường dẫn truy cập nằm ngoài thư mục gốc ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher

- **[Workflow]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi collection, để tránh lỗi khi collection bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi tham số và payload không chính xác khi kích hoạt workflow tùy chỉnh bởi @mytharcher

- **[Đa không gian]**
  - xóa thuộc tính read-pretty cho trường không gian bởi @jiannx

  - thêm script migration để xóa x-ready-pretty trong trường không gian bởi @jiannx

- **[AI: Cơ sở tri thức]** Sửa lỗi hệ thống không thể khởi động sau khi build bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]** Sửa số đếm trong kết quả nhập và bản dịch tin nhắn bởi @mytharcher

- **[Workflow: Luồng con]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher

- **[In mẫu]** sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh

- **[Workflow: Phê duyệt]**
  - Sửa lỗi hiệu năng do trường JSON trong danh sách tải (MySQL) bởi @mytharcher

  - Thêm khả năng chịu lỗi khi workflow bị xóa, để tránh lỗi tải trong danh sách tác vụ bởi @mytharcher

  - Sửa lỗi xảy ra khi thêm vai trò cho người dùng nếu workflow của đối tượng bị vô hiệu hóa bởi @mytharcher

- **[Trình quản lý email]** nội dung không thu gọn khi văn bản được chọn. sửa lỗi tải tệp đính kèm thất bại bởi @jiannx

- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số điện thoại di động bởi @2013xile
