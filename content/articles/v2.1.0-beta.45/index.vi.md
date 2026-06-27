---
title: "NocoBase v2.1.0-beta.45: Cải thiện quản lý ứng dụng và plugin trong CLI"
description: "Ghi chú phát hành của v2.1.0-beta.45"
---

### 🎉 Tính năng mới

- **[undefined]** Cải thiện quản lý ứng dụng và plugin trong CLI, bao gồm xử lý môi trường theo appPath, nhập plugin, đồng bộ plugin có bản quyền và cập nhật tài liệu liên quan. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) bởi @chenos
  Tham khảo: [Tài liệu CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Hướng dẫn nhanh](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Khối: Gantt]** Thêm tùy chọn cho khối Gantt để tự động tập trung vào hôm nay. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) bởi @jiannx
- **[IdP: OAuth]** Thêm hỗ trợ nền tảng cho đăng nhập một lần (SSO) ứng dụng trong các triển khai đa ứng dụng. ([#9547](https://github.com/nocobase/nocobase/pull/9547)) bởi @2013xile
- **[App SSO]** Thêm plugin App SSO để đăng nhập tự động giữa các ứng dụng. bởi @2013xile
- **[Đa không gian]** Thêm hỗ trợ client v2 cho plugin đa không gian, bao gồm chuyển đổi không gian và quản lý không gian. bởi @jiannx
- **[Giám sát ứng dụng]** Thêm cài đặt App SSO cho các ứng dụng con. bởi @2013xile

### 🚀 Cải tiến

- **[server]** Client hiện đại hiện được phục vụ dưới đường dẫn `/v/` thay vì `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) bởi @Molunerfinn
- **[ai]** Nâng cấp phiên bản `xlsx` để tránh các vấn đề bảo mật. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) bởi @mytharcher
- **[Bộ lọc đa từ khóa]** Di chuyển bộ lọc đa từ khóa sang client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) bởi @gchust
- **[Workflow]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi quá trình thực thi workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) bởi @mytharcher
- **[Mẫu UI]** Di chuyển mẫu UI sang client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) bởi @gchust
- **[Phòng ban]** Thêm trang cài đặt v2 để quản lý phòng ban, thành viên phòng ban và phân công phòng ban cho người dùng. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) bởi @jiannx
- **[Xác thực: SAML 2.0]** Chuyển hướng đăng nhập SAML/CAS hiện tuân theo tiền tố client hiện đại. bởi @Molunerfinn
- **[Hành động: Nhập bản ghi Pro]** Nâng cấp phiên bản `xlsx` để tránh các vấn đề bảo mật. bởi @mytharcher
- **[Workflow: Luồng con]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi các chỉ thị workflow luồng con. bởi @mytharcher
- **[Xác thực: OIDC]** Chuyển hướng đăng nhập OIDC hiện tuân theo tiền tố client hiện đại. bởi @Molunerfinn
- **[Workflow: Phê duyệt]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi các chỉ thị workflow phê duyệt. bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi các trường liên kết bị ẩn vẫn giữ giá trị cũ. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) bởi @zhangzhonghe
  - Sửa lỗi khi lưu trường quan hệ dạng cây trong mẫu biểu mẫu tham chiếu. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) bởi @zhangzhonghe
- **[client-v2]**
  - Sửa lỗi cột bảng v2 trở nên vô hình khi độ rộng cột tùy chỉnh được đặt thành 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) bởi @katherinehhh
  - Điều chỉnh tất cả bộ chọn trường quan hệ để giới hạn trường liên kết ở tối đa hai cấp. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) bởi @jiannx
- **[Hành động: Nhập bản ghi]** Sửa lỗi các bản ghi được nhập nhận giá trị sắp xếp trùng lặp. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) bởi @2013xile
- **[Công cụ luồng]** Sửa lỗi khi chuyển đổi khối mẫu tham chiếu thành bản sao dẫn đến lỗi. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) bởi @gchust
- **[Bộ sưu tập: SQL]** Chặn quyền truy cập của bộ sưu tập SQL vào siêu dữ liệu PostgreSQL nhạy cảm. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) bởi @2013xile
- **[Workflow]** Sửa lỗi thực thi workflow trùng lặp dưới các worker đồng thời. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) bởi @mytharcher
- **[Khối: Bản đồ]** Sửa lỗi giá trị trường bản đồ bị chuyển đổi không chính xác khi chuyển đổi giữa chế độ hiển thị văn bản và bản đồ trên trang chi tiết. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) bởi @hongboji
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi hành động kích hoạt workflow bị thiếu trong danh sách nút bảng điều khiển hành động của workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) bởi @katherinehhh
- **[AI employees]**
  - Các nút AI employee trong workflow hiện có thể sử dụng mô hình mặc định. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) bởi @cgyrock
  - Ẩn lỗi thô từ nhà cung cấp LLM khỏi thông báo giao diện người dùng. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) bởi @cgyrock
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi bản địa hóa trường đa không gian trong trình quản lý nguồn dữ liệu v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) bởi @jiannx
- **[Nguồn dữ liệu: REST API]** Sửa lỗi xây dựng khai báo plugin nguồn dữ liệu REST API thất bại do khai báo kiểu client-v2 của trình quản lý nguồn dữ liệu không khớp. bởi @katherinehhh
- **[Chính sách mật khẩu]** Sửa lỗi đăng nhập thất bại che giấu lỗi thực sự bằng thông báo "argument #1 unsupported type undefined" khi lỗi cơ bản không có mã trạng thái. bởi @Molunerfinn
- **[Workflow: Phê duyệt]** Sửa lỗi tiêu đề trường tùy chỉnh không được hiển thị trong chi tiết biểu mẫu phê duyệt. bởi @zhangzhonghe
