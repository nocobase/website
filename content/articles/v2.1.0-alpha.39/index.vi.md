---
title: "NocoBase v2.1.0-alpha.39: Thêm hỗ trợ client-v2 cho plugin Kanban"
description: "Ghi chú phát hành v2.1.0-alpha.39"
---

### 🎉 Tính năng mới

- **[Khối: Kanban]** Đã thêm hỗ trợ client-v2 cho plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) bởi @jiannx

### 🚀 Cải tiến

- **[client]** Chia sẻ đánh giá điều kiện giữa ứng dụng v1 và v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) bởi @zhangzhonghe

- **[Bản địa hóa]** Cải thiện các tác vụ dịch thuật bản địa hóa Lina với phạm vi dịch thuật, cài đặt ngôn ngữ tham chiếu và chỉnh sửa nhanh ([#9521](https://github.com/nocobase/nocobase/pull/9521)) bởi @2013xile

- **[Nhân viên AI]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock

- **[Trình quản lý thông báo]** Thay đổi chiến lược hàng đợi để tối ưu hiệu suất gửi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher

- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Đã di chuyển các plugin block-workbench và workflow-custom-action-trigger sang client v2, bao gồm các mô hình hành động và luồng quét mã QR của chúng. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) bởi @jiannx

- **[Xác thực]** Triển khai trang cài đặt Authenticators trong client-v2 và cung cấp các thành phần nguyên thủy client-v2 có thể tái sử dụng như bảng, đầu vào biến và biểu mẫu. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) bởi @Molunerfinn

- **[AI: Cơ sở tri thức]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock

- **[Xác thực: SAML 2.0]** Thêm các mục client-v2 cho plugin xác thực CAS và SAML để chúng hoạt động với trang đăng nhập v2 và cài đặt Authenticators. bởi @Molunerfinn

- **[Quy trình làm việc: Phê duyệt]** Cải thiện các phê duyệt liên quan với thẻ dòng thời gian bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[undefined]** Căn chỉnh đường dẫn cấu hình nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) bởi @chenos

- **[cli-v1]** Đã sửa lỗi khởi động phát triển create-nocobase-app bằng cách tái sử dụng các shell ứng dụng đã đóng gói trong khi cho phép phát triển plugin cục bộ. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) bởi @Molunerfinn

- **[client]**
  - Sửa lỗi biểu mẫu bộ lọc không thể sử dụng biến của biểu mẫu hiện tại ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe

  - Sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe

- **[client-v2]**
  - Thành phần Bảng v2 dùng chung hiện hiển thị bộ chọn kích thước trang theo mặc định, khớp với hành vi của v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) bởi @Molunerfinn

  - Đã sửa lỗi route v2 của plugin Kanban không tải được vì các phụ thuộc dnd-kit không được client cung cấp. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) bởi @jiannx

- **[Lịch]**
  - Đã sửa kiểu con trỏ cho các mục sự kiện trong lớp phủ more-events của lịch ([#9519](https://github.com/nocobase/nocobase/pull/9519)) bởi @jiannx

  - Sửa lỗi các mục khác của lịch không thể hiển thị đầy đủ ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe

- **[Cài đặt giấy phép]** Giải quyết các phụ thuộc đã đóng gói được liên kết tượng trưng ([#9518](https://github.com/nocobase/nocobase/pull/9518)) bởi @chenos

- **[Nhân viên AI]**
  - Sửa lỗi quyền vai trò người vận hành không có hiệu lực trong các nút nhân viên AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) bởi @cgyrock

  - Sửa lỗi đọc tệp OSS của nhân viên AI ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock

- **[Xác thực]** Ngăn máy chủ bị sập khi mã thông báo xác thực WebSocket tham chiếu đến một authenticator có plugin loại xác thực bị gỡ tải hoặc bị thiếu. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) bởi @Molunerfinn

- **[Tài liệu API]** Đã sửa tài liệu API collection để các tham số truy vấn không còn can thiệp lẫn nhau ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx

- **[Nguồn dữ liệu: Chính]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ hóa trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile

- **[Xác thực: SAML 2.0]** Sửa lỗi bộ chặn tự động chuyển hướng SAML làm nhấp nháy shell ứng dụng và mở hai lần drawer trên mỗi lần điều hướng. bởi @Molunerfinn
