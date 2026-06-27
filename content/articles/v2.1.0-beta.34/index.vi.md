---
title: "NocoBase v2.1.0-beta.34: Đã thêm hỗ trợ client-v2 cho plugin Kanban"
description: "Ghi chú phát hành của v2.1.0-beta.34"
---

### 🎉 Tính năng mới

- **[Khối: Kanban]** Thêm hỗ trợ client-v2 cho plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) bởi @jiannx

### 🚀 Cải tiến

- **[cli]** Cải thiện trải nghiệm dòng lệnh NocoBase CLI bằng cách chuyển đổi quy trình thiết lập và quản lý sang Inquirer, đồng thời sửa các lỗi liên quan đến cài đặt, skills và môi trường Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) bởi @chenos

- **[AI employees]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock

- **[Trình quản lý thông báo]** Thay đổi chiến lược hàng đợi để tối ưu hiệu suất gửi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Di chuyển các plugin block-workbench và workflow-custom-action-trigger lên client v2, bao gồm các mô hình hành động và luồng quét mã QR. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) bởi @jiannx

- **[Xác thực]** Triển khai trang cài đặt Authenticators trong client-v2 và cung cấp các thành phần cơ bản dùng lại được như bảng, đầu vào biến và biểu mẫu cho client-v2. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) bởi @Molunerfinn

- **[AI: Cơ sở tri thức]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock

- **[Xác thực: SAML 2.0]** Thêm các mục client-v2 cho plugin xác thực CAS và SAML để chúng hoạt động với trang đăng nhập v2 và cài đặt Authenticators. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client-v2]**
  - Đã sửa lỗi route v2 của plugin Kanban không tải được do các phụ thuộc dnd-kit không được client cung cấp. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) bởi @jiannx

  - Thành phần Bảng v2 dùng chung hiện hiển thị bộ chọn kích thước trang theo mặc định, tương ứng với hành vi của v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) bởi @Molunerfinn

- **[client]**
  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust

  - Đã sửa lỗi không thể phân giải các biến bản ghi popup hiện tại trong luồng sự kiện nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust

- **[flow-engine]** Đã sửa thông báo lỗi không chính xác trong console của trình duyệt. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) bởi @gchust

- **[AI employees]**
  - Sửa lỗi quyền vai trò operator không có hiệu lực trong các nút AI employee ([#9513](https://github.com/nocobase/nocobase/pull/9513)) bởi @cgyrock

  - Sửa lỗi đọc tệp OSS của AI employee ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock

- **[Tài liệu API]** Đã sửa tài liệu API collection để các tham số truy vấn không còn can thiệp lẫn nhau ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx

- **[Nguồn dữ liệu: Chính]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile

- **[Workflow: JavaScript]** Đã sửa lỗi tải gói runtime QuickJS của workflow JavaScript trong các bản build production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) bởi @mytharcher

- **[WEB client]** Xóa dữ liệu khối sau khi xóa menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) bởi @gchust

- **[Hành động: Nhập bản ghi]** Sửa lỗi bản ghi nhập vào trên các trường dạng ngày tháng hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** sửa lỗi xử lý múi giờ cho import xlsx pro bởi @mytharcher

- **[Xác thực: SAML 2.0]** Sửa lỗi bộ chặn tự động chuyển hướng SAML làm nhấp nháy vỏ ứng dụng và mở drawer hai lần mỗi khi điều hướng. bởi @Molunerfinn

- **[Hành động: Xuất bản ghi Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url đính kèm bởi @mytharcher
