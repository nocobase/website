---
title: "NocoBase v2.0.0-beta.18: hỗ trợ env.ESM_CDN_BASE_URL"
description: "Ghi chú phát hành v2.0.0-beta.18"
---

### 🎉 Tính năng mới

- **[flow-engine]** Hỗ trợ env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) bởi @chenos

### 🚀 Cải tiến

- **[acl]** acl thêm phương thức generalFixedParams ([#8363](https://github.com/nocobase/nocobase/pull/8363)) bởi @jiannx

- **[client]** Hỗ trợ tắt các tham số mặc định dư thừa cho `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) bởi @2013xile

- **[Auth: DingTalk]** Sử dụng `userid` làm khóa mặc định cho liên kết người dùng, đồng thời duy trì khả năng tương thích với các authenticator hiện có dựa trên số điện thoại bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi luồng sự kiện không áp dụng khi làm mới các khối mục tiêu qua popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) bởi @gchust

  - Sửa lỗi dữ liệu trang bị làm mới không chính xác sau khi mở và đóng popup lần đầu. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) bởi @gchust

  - Đã sửa lỗi khiến khối dữ liệu làm mới liên tục sau khi gửi biểu mẫu. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) bởi @gchust

  - sửa lỗi trường nanoid không tạo lại giá trị mặc định sau khi gửi tạo ([#8538](https://github.com/nocobase/nocobase/pull/8538)) bởi @katherinehhh

  - sửa lỗi hiển thị không chính xác khi đặt giá trị mặc định cho mô hình trường cascader ([#8537](https://github.com/nocobase/nocobase/pull/8537)) bởi @katherinehhh

- **[flow-engine]** Đã sửa lỗi tải không chính xác một số thư viện ESM trong runjs do bị phân loại sai thành mô-đun AMD. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) bởi @gchust

- **[File manager]** Bảo mật đường dẫn tệp cho bộ nhớ cục bộ, tránh đường dẫn truy cập ra ngoài thư mục gốc ([#8539](https://github.com/nocobase/nocobase/pull/8539)) bởi @mytharcher

- **[Workflow]** Thêm khả năng chịu lỗi cho thành phần chọn bản ghi collection, tránh lỗi khi collection bị xóa ([#8528](https://github.com/nocobase/nocobase/pull/8528)) bởi @mytharcher

- **[AI employees]** Sửa lỗi ngoại lệ xảy ra khi công cụ được tự động gọi trong quá trình mô hình hóa dữ liệu AI ([#8532](https://github.com/nocobase/nocobase/pull/8532)) bởi @cgyrock

- **[Action: Import records Pro]** Sửa số lượng trong kết quả nhập và bản dịch thông báo bởi @mytharcher

- **[Workflow: Subflow]** Sửa đường dẫn route của liên kết workflow bởi @mytharcher

- **[Template print]** sửa lỗi hiển thị danh sách trường trong cấu hình hành động in mẫu bởi @katherinehhh

- **[Workflow: Approval]**
  - Sửa lỗi xảy ra khi thêm vai trò cho người dùng nếu workflow của đối tượng bị vô hiệu hóa bởi @mytharcher

  - Thêm khả năng chịu lỗi khi workflow bị xóa, tránh lỗi tải trong danh sách tác vụ bởi @mytharcher

- **[WeCom]** Sửa lỗi người dùng không thể tự động đăng ký khi thiếu số điện thoại bởi @2013xile
