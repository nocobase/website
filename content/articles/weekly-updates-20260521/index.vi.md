---
title: "Cập nhật hàng tuần｜Bổ sung hỗ trợ client-v2 cho plugin Kanban"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 14 tháng 5 đến ngày 21 tháng 5 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Ngày phát hành: 2026-05-18*

### 🚀 Cải tiến

- **[AI employees]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock
- **[AI: Knowledge base]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể phân giải biến bản ghi popup hiện tại trong luồng sự kiện của nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust
  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust
- **[File manager]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher
- **[Data source: Main]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile
- **[WEB client]** Dọn dẹp dữ liệu khối sau khi xóa menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) bởi @gchust
- **[AI employees]** Sửa lỗi đọc tệp OSS của AI employee ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock
- **[Action: Import records]** Sửa lỗi bản ghi được nhập trên các trường dạng ngày tháng hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher
- **[Action: Export records Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url tệp đính kèm bởi @mytharcher
- **[Action: Import records Pro]** sửa lỗi xử lý múi giờ cho việc nhập xlsx pro bởi @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Ngày phát hành: 2026-05-14*

### 🚀 Cải tiến

- **[flow-engine]** Đã thêm thông báo xác nhận thay đổi chưa lưu khi đóng trang cấu hình luồng sự kiện có dữ liệu chưa được lưu. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) bởi @gchust

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi ngăn mở chỉnh sửa nhanh cho các trường quan hệ trong bảng ([#9469](https://github.com/nocobase/nocobase/pull/9469)) bởi @katherinehhh
  - Đã sửa lỗi các trường quan hệ chỉ hiển thị trong bảng con không hiển thị hoặc không thể nhấp sau khi làm mới. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) bởi @jiannx
  - sửa lỗi các trường chọn nhiều trong khối dữ liệu v2 nên hiển thị nhãn tùy chọn thay vì giá trị ([#9472](https://github.com/nocobase/nocobase/pull/9472)) bởi @katherinehhh
- **[Block: Multi-step form]** sửa lỗi thanh cuộn khi bật chế độ toàn chiều cao trong khối biểu mẫu bước v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) bởi @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Ngày phát hành: 2026-05-20*

### 🚀 Cải tiến

- **[client]** Chia sẻ đánh giá điều kiện giữa ứng dụng v1 và v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) bởi @zhangzhonghe
- **[Localization]** Cải thiện các tác vụ dịch thuật bản địa hóa Lina với phạm vi dịch, cài đặt ngôn ngữ tham chiếu và chỉnh sửa nhanh ([#9521](https://github.com/nocobase/nocobase/pull/9521)) bởi @2013xile
- **[Workflow: Approval]** Cải thiện các phê duyệt liên quan với thẻ dòng thời gian bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[undefined]** căn chỉnh đường dẫn cấu hình nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) bởi @chenos
- **[cli-v1]** Đã sửa lỗi khởi động phát triển create-nocobase-app bằng cách tái sử dụng shell ứng dụng đã đóng gói trong khi cho phép phát triển plugin cục bộ. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) bởi @Molunerfinn
- **[client]**

  - Sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe
  - Sửa lỗi biểu mẫu bộ lọc không thể sử dụng biến biểu mẫu hiện tại ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe
- **[Authentication]** Ngăn máy chủ bị sập khi mã thông báo xác thực WebSocket tham chiếu đến một authenticator có plugin loại xác thực bị dỡ bỏ hoặc bị thiếu. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) bởi @Molunerfinn
- **[Calendar]**

  - Sửa lỗi các mục khác của lịch không thể hiển thị đầy đủ ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe
  - Đã sửa kiểu con trỏ cho các mục sự kiện trong lớp phủ nhiều sự kiện của lịch ([#9519](https://github.com/nocobase/nocobase/pull/9519)) bởi @jiannx
- **[License settings]** giải quyết các phụ thuộc được đóng gói liên kết tượng trưng ([#9518](https://github.com/nocobase/nocobase/pull/9518)) bởi @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Ngày phát hành: 2026-05-19*

### 🎉 Tính năng mới

- **[Block: Kanban]** Đã thêm hỗ trợ client-v2 cho plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) bởi @jiannx

### 🚀 Cải tiến

- **[cli]** Cải thiện trải nghiệm nhắc nhở CLI của NocoBase bằng cách di chuyển quy trình thiết lập và quản lý sang Inquirer, đồng thời sửa các sự cố liên quan đến cài đặt, kỹ năng và thời gian chạy Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) bởi @chenos
- **[AI employees]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock
- **[Notification manager]** Thay đổi chiến lược hàng đợi để tối ưu hóa hiệu suất gửi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher
- **[Workflow: Custom action event]** Đã di chuyển các plugin block-workbench và workflow-custom-action-trigger sang client v2, bao gồm các mô hình hành động và luồng máy quét QR của chúng. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) bởi @jiannx
- **[Authentication]** Triển khai trang cài đặt Authenticators trong client-v2 và cung cấp các bảng client-v2, đầu vào biến và nguyên thủy biểu mẫu có thể tái sử dụng. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) bởi @Molunerfinn
- **[AI: Knowledge base]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock
- **[Auth: SAML 2.0]** Thêm các mục client-v2 cho các plugin xác thực CAS và SAML để chúng hoạt động với trang đăng nhập v2 và cài đặt Authenticators. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi tuyến đường v2 của plugin Kanban không tải được vì các phụ thuộc dnd-kit không được client cung cấp. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) bởi @jiannx
  - Thành phần Bảng v2 dùng chung hiện hiển thị bộ chọn kích thước trang theo mặc định, phù hợp với hành vi v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) bởi @Molunerfinn
- **[client]**

  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust
  - Đã sửa lỗi không thể phân giải biến bản ghi popup hiện tại trong luồng sự kiện của nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust
- **[flow-engine]** Đã sửa thông báo lỗi không chính xác trong bảng điều khiển của trình duyệt. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) bởi @gchust
- **[AI employees]**

  - Sửa lỗi quyền vai trò người vận hành không có hiệu lực trong các nút AI employee ([#9513](https://github.com/nocobase/nocobase/pull/9513)) bởi @cgyrock
  - Sửa lỗi đọc tệp OSS của AI employee ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock
- **[API documentation]** Đã sửa tài liệu API collection để các tham số truy vấn không còn can thiệp lẫn nhau ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx
- **[Data source: Main]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile
- **[Workflow: JavaScript]** Đã sửa lỗi tải gói thời gian chạy QuickJS của workflow JavaScript trong các bản dựng production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) bởi @mytharcher
- **[WEB client]** Dọn dẹp dữ liệu khối sau khi xóa menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) bởi @gchust
- **[Action: Import records]** Sửa lỗi bản ghi được nhập trên các trường dạng ngày tháng hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher
- **[Action: Import records Pro]** sửa lỗi xử lý múi giờ cho việc nhập xlsx pro bởi @mytharcher
- **[Auth: SAML 2.0]** Sửa lỗi bộ chặn tự động chuyển hướng SAML làm nhấp nháy shell ứng dụng và mở hai lần drawer trên mỗi lần điều hướng. bởi @Molunerfinn
- **[Action: Export records Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url tệp đính kèm bởi @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Ngày phát hành: 2026-05-15*

### 🎉 Tính năng mới

- **[Block: Markdown]** Đã thêm hỗ trợ client v2 cho các khối Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) bởi @jiannx
- **[Block: List]** Khối danh sách hỗ trợ client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) bởi @jiannx
- **[Calendar]** Đã thêm hỗ trợ client v2 cho plugin Lịch. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) bởi @jiannx
- **[Block: Tree]** Đã thêm hỗ trợ client-v2 cho khối bộ lọc cây. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) bởi @jiannx

### 🚀 Cải tiến

- **[flow-engine]** Đã thêm thông báo xác nhận thay đổi chưa lưu khi đóng trang cấu hình luồng sự kiện có dữ liệu chưa được lưu. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) bởi @gchust
- **[Data source manager]** Tối ưu hóa API mô hình hóa dữ liệu để hỗ trợ tạo collection bình luận bằng AI, cấu hình trường quan hệ cho nguồn dữ liệu bên ngoài và thiết lập quy tắc xác thực trường ([#9480](https://github.com/nocobase/nocobase/pull/9480)) bởi @2013xile
- **[Block: GridCard]** Đã cập nhật plugin thẻ lưới để hỗ trợ client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) bởi @jiannx
- **[Block: iframe]** Đã thêm hỗ trợ v2 cho khối iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) bởi @jiannx
- **[AI employees]** Tối ưu hóa tương tác và hiệu suất hội thoại song song của AI employee ([#9462](https://github.com/nocobase/nocobase/pull/9462)) bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - Đã thêm cài đặt "Sau khi gửi thành công" cho các hành động gửi biểu mẫu. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) bởi @jiannx
  - sửa lỗi ngăn mở chỉnh sửa nhanh cho các trường quan hệ trong bảng ([#9469](https://github.com/nocobase/nocobase/pull/9469)) bởi @katherinehhh
  - Đã sửa lỗi các trường quan hệ chỉ hiển thị trong bảng con không hiển thị hoặc không thể nhấp sau khi làm mới. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) bởi @jiannx
  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust
  - sửa lỗi các trường chọn nhiều trong khối dữ liệu v2 nên hiển thị nhãn tùy chọn thay vì giá trị ([#9472](https://github.com/nocobase/nocobase/pull/9472)) bởi @katherinehhh
- **[client-v2]**

  - Sửa lỗi danh sách tùy chọn trường tiêu đề trống cho các trường quan hệ trong khối bảng ([#9490](https://github.com/nocobase/nocobase/pull/9490)) bởi @katherinehhh
  - Giữ các nhóm trống sau khi lọc menu v1 trong bố cục v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) bởi @zhangzhonghe
- **[flow-engine]** Đã sửa lỗi menu con trường quan hệ không ổn định trong menu mô hình con ([#9417](https://github.com/nocobase/nocobase/pull/9417)) bởi @jiannx
- **[File manager]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher
- **[AI employees]** Đã sửa lỗi tải plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) bởi @cgyrock
- **[Block: Multi-step form]** sửa lỗi thanh cuộn khi bật chế độ toàn chiều cao trong khối biểu mẫu bước v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) bởi @katherinehhh
- **[Workflow: Webhook]** Sửa lỗi tạo nút phản hồi bị chặn bởi xác thực cấu hình `statusCode` bởi @mytharcher
- **[Collection field: Signature]** Giải quyết vấn đề hiển thị hộp chữ ký trên thiết bị di động bởi @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Ngày phát hành: 2026-05-20*

### 🎉 Tính năng mới

- **[Block: Kanban]** Đã thêm hỗ trợ client-v2 cho plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) bởi @jiannx

### 🚀 Cải tiến

- **[client]** Chia sẻ đánh giá điều kiện giữa ứng dụng v1 và v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) bởi @zhangzhonghe
- **[Localization]** Cải thiện các tác vụ dịch thuật bản địa hóa Lina với phạm vi dịch, cài đặt ngôn ngữ tham chiếu và chỉnh sửa nhanh ([#9521](https://github.com/nocobase/nocobase/pull/9521)) bởi @2013xile
- **[AI employees]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector ([#9497](https://github.com/nocobase/nocobase/pull/9497)) bởi @cgyrock
- **[Notification manager]** Thay đổi chiến lược hàng đợi để tối ưu hóa hiệu suất gửi ([#9407](https://github.com/nocobase/nocobase/pull/9407)) bởi @mytharcher
- **[Workflow: Custom action event]** Đã di chuyển các plugin block-workbench và workflow-custom-action-trigger sang client v2, bao gồm các mô hình hành động và luồng máy quét QR của chúng. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) bởi @jiannx
- **[Authentication]** Triển khai trang cài đặt Authenticators trong client-v2 và cung cấp các bảng client-v2, đầu vào biến và nguyên thủy biểu mẫu có thể tái sử dụng. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) bởi @Molunerfinn
- **[AI: Knowledge base]** Nhắc nhở khi tên bảng bị trùng lặp khi lưu vào cơ sở dữ liệu vector bởi @cgyrock
- **[Auth: SAML 2.0]** Thêm các mục client-v2 cho các plugin xác thực CAS và SAML để chúng hoạt động với trang đăng nhập v2 và cài đặt Authenticators. bởi @Molunerfinn
- **[Workflow: Approval]** Cải thiện các phê duyệt liên quan với thẻ dòng thời gian bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[undefined]** căn chỉnh đường dẫn cấu hình nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) bởi @chenos
- **[cli-v1]** Đã sửa lỗi khởi động phát triển create-nocobase-app bằng cách tái sử dụng shell ứng dụng đã đóng gói trong khi cho phép phát triển plugin cục bộ. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) bởi @Molunerfinn
- **[client]**

  - Sửa lỗi biểu mẫu bộ lọc không thể sử dụng biến biểu mẫu hiện tại ([#9474](https://github.com/nocobase/nocobase/pull/9474)) bởi @zhangzhonghe
  - Sửa lỗi huy hiệu menu vẫn hiển thị dấu chấm khi giá trị của nó là 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) bởi @zhangzhonghe
- **[client-v2]**

  - Thành phần Bảng v2 dùng chung hiện hiển thị bộ chọn kích thước trang theo mặc định, phù hợp với hành vi v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) bởi @Molunerfinn
  - Đã sửa lỗi tuyến đường v2 của plugin Kanban không tải được vì các phụ thuộc dnd-kit không được client cung cấp. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) bởi @jiannx
- **[Calendar]**

  - Đã sửa kiểu con trỏ cho các mục sự kiện trong lớp phủ nhiều sự kiện của lịch ([#9519](https://github.com/nocobase/nocobase/pull/9519)) bởi @jiannx
  - Sửa lỗi các mục khác của lịch không thể hiển thị đầy đủ ([#9492](https://github.com/nocobase/nocobase/pull/9492)) bởi @zhangzhonghe
- **[License settings]** giải quyết các phụ thuộc được đóng gói liên kết tượng trưng ([#9518](https://github.com/nocobase/nocobase/pull/9518)) bởi @chenos
- **[AI employees]**

  - Sửa lỗi quyền vai trò người vận hành không có hiệu lực trong các nút AI employee ([#9513](https://github.com/nocobase/nocobase/pull/9513)) bởi @cgyrock
  - Sửa lỗi đọc tệp OSS của AI employee ([#9493](https://github.com/nocobase/nocobase/pull/9493)) bởi @cgyrock
- **[Authentication]** Ngăn máy chủ bị sập khi mã thông báo xác thực WebSocket tham chiếu đến một authenticator có plugin loại xác thực bị dỡ bỏ hoặc bị thiếu. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) bởi @Molunerfinn
- **[API documentation]** Đã sửa tài liệu API collection để các tham số truy vấn không còn can thiệp lẫn nhau ([#9442](https://github.com/nocobase/nocobase/pull/9442)) bởi @jiannx
- **[Data source: Main]** Sửa lỗi các tùy chọn trường được ghi vào schema sau khi đồng bộ trường ([#9505](https://github.com/nocobase/nocobase/pull/9505)) bởi @2013xile
- **[Auth: SAML 2.0]** Sửa lỗi bộ chặn tự động chuyển hướng SAML làm nhấp nháy shell ứng dụng và mở hai lần drawer trên mỗi lần điều hướng. bởi @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Ngày phát hành: 2026-05-18*

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi không thể phân giải biến bản ghi popup hiện tại trong luồng sự kiện của nút hành động. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) bởi @gchust
  - Đã sửa lỗi giá trị trường JS trong biểu mẫu con không được thiết lập chính xác khi gửi biểu mẫu. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) bởi @gchust
- **[flow-engine]** Đã sửa thông báo lỗi không chính xác trong bảng điều khiển của trình duyệt. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) bởi @gchust
- **[Workflow: JavaScript]** Đã sửa lỗi tải gói thời gian chạy QuickJS của workflow JavaScript trong các bản dựng production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) bởi @mytharcher
- **[Action: Import records]** Sửa lỗi bản ghi được nhập trên các trường dạng ngày tháng hiển thị sai ngày ([#9463](https://github.com/nocobase/nocobase/pull/9463)) bởi @mytharcher
- **[Action: Import records Pro]** sửa lỗi xử lý múi giờ cho việc nhập xlsx pro bởi @mytharcher
- **[Action: Export records Pro]** Sửa lỗi xảy ra khi xuất tệp đính kèm từ trường url tệp đính kèm bởi @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Ngày phát hành: 2026-05-17*

### 🐛 Sửa lỗi

- **[WEB client]** Dọn dẹp dữ liệu khối sau khi xóa menu. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) bởi @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Ngày phát hành: 2026-05-16*

### 🎉 Tính năng mới

- **[Block: Markdown]** Đã thêm hỗ trợ client v2 cho các khối Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) bởi @jiannx
- **[Block: List]** Khối danh sách hỗ trợ client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) bởi @jiannx

### 🚀 Cải tiến

- **[flow-engine]** Đã thêm thông báo xác nhận thay đổi chưa lưu khi đóng trang cấu hình luồng sự kiện có dữ liệu chưa được lưu. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) bởi @gchust
- **[cli]** Cải thiện trải nghiệm nhắc nhở CLI của NocoBase bằng cách di chuyển quy trình thiết lập và quản lý sang Inquirer, đồng thời sửa các sự cố liên quan đến cài đặt, kỹ năng và thời gian chạy Docker. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) bởi @chenos
- **[Data source manager]** Tối ưu hóa API mô hình hóa dữ liệu để hỗ trợ tạo collection bình luận bằng AI, cấu hình trường quan hệ cho nguồn dữ liệu bên ngoài và thiết lập quy tắc xác thực trường ([#9480](https://github.com/nocobase/nocobase/pull/9480)) bởi @2013xile
- **[Block: GridCard]** Đã cập nhật plugin thẻ lưới để hỗ trợ client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) bởi @jiannx
- **[Block: iframe]** Đã thêm hỗ trợ v2 cho khối iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**

  - Đã sửa lỗi các trường quan hệ chỉ hiển thị trong bảng con không hiển thị hoặc không thể nhấp sau khi làm mới. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) bởi @jiannx
  - Đã thêm cài đặt "Sau khi gửi thành công" cho các hành động gửi biểu mẫu. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) bởi @jiannx
- **[client-v2]** Sửa lỗi danh sách tùy chọn trường tiêu đề trống cho các trường quan hệ trong khối bảng ([#9490](https://github.com/nocobase/nocobase/pull/9490)) bởi @katherinehhh
- **[flow-engine]** Đã sửa lỗi menu con trường quan hệ không ổn định trong menu mô hình con ([#9417](https://github.com/nocobase/nocobase/pull/9417)) bởi @jiannx
- **[File manager]** Sửa lỗi tải lên `tx-cos` của trình quản lý tệp thiếu siêu dữ liệu kích thước tệp. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) bởi @mytharcher
- **[Collection field: Signature]** Giải quyết vấn đề hiển thị hộp chữ ký trên thiết bị di động bởi @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Ngày phát hành: 2026-05-14*

### 🎉 Tính năng mới

- **[undefined]** Thêm một AI employee mới, Kỹ sư bản địa hóa Lina, để hỗ trợ các tác vụ dịch thuật bản địa hóa ([#9434](https://github.com/nocobase/nocobase/pull/9434)) bởi @2013xile
  Tham khảo: [Quản lý bản địa hóa](https://docs.nocobase.com/system-management/localization)<br>[Lina: Kỹ sư bản địa hóa](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Sử dụng Lina và HY-MT1.5-1.8B cục bộ để dịch các mục bản địa hóa](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendar]** Đã thêm hỗ trợ client v2 cho plugin Lịch. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) bởi @jiannx
- **[Block: Tree]** Đã thêm hỗ trợ client-v2 cho khối bộ lọc cây. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) bởi @jiannx
- **[File storage: S3(Pro)]** Hỗ trợ tải tệp lên qua bộ nhớ S3 Pro trong trình quản lý tệp v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[build]** Đã thêm phạm vi kiểm tra hồi quy để ngăn `deleteServerFiles` xóa các tạo phẩm bản dựng `client` và `client-v2` trên các đường dẫn Windows và POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) bởi @Molunerfinn
- **[client]** loại trừ các bản ghi đã được liên kết trong hộp thoại chọn liên kết của khối bảng một-nhiều ([#9448](https://github.com/nocobase/nocobase/pull/9448)) bởi @katherinehhh
- **[AI employees]** Tối ưu hóa tương tác và hiệu suất hội thoại song song của AI employee ([#9462](https://github.com/nocobase/nocobase/pull/9462)) bởi @cgyrock
- **[File manager]** Các plugin lưu trữ bên thứ ba hiện có thể đăng ký biểu mẫu loại lưu trữ của riêng họ trên trang cài đặt trình quản lý tệp v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) bởi @Molunerfinn
- **[AI: Knowledge base]** Mã định danh duy nhất cho cơ sở kiến thức có thể được cấu hình tại thời điểm tạo bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**

  - sửa lỗi ngăn mở chỉnh sửa nhanh cho các trường quan hệ trong bảng ([#9469](https://github.com/nocobase/nocobase/pull/9469)) bởi @katherinehhh
  - sửa lỗi các trường chọn nhiều trong khối dữ liệu v2 nên hiển thị nhãn tùy chọn thay vì giá trị ([#9472](https://github.com/nocobase/nocobase/pull/9472)) bởi @katherinehhh
  - Sửa lỗi yêu cầu bảng trùng lặp khi biểu mẫu bộ lọc có giá trị mặc định ([#9423](https://github.com/nocobase/nocobase/pull/9423)) bởi @zhangzhonghe
  - Đã sửa lỗi không thể xóa cài đặt giá trị mặc định cũ. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) bởi @gchust
  - Đã sửa lỗi không thể chọn tùy chọn cho trường chọn của quan hệ. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) bởi @gchust
  - Sửa lỗi cài đặt hệ thống xuất hiện trống sau khi gửi ([#9458](https://github.com/nocobase/nocobase/pull/9458)) bởi @zhangzhonghe
  - Đã sửa lỗi phạm vi dữ liệu khối mục tiêu được thiết lập không chính xác khi bỏ chọn dữ liệu hàng trong luồng sự kiện khối bảng. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) bởi @gchust
  - sửa lỗi khi thay đổi trường tiêu đề của trường quan hệ trong khối bảng v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) bởi @katherinehhh
  - Đã sửa quy tắc liên kết V2 để hỗ trợ thiết lập các tùy chọn có thể chọn cho trường ([#9399](https://github.com/nocobase/nocobase/pull/9399)) bởi @jiannx
- **[client-v2]**

  - Giữ các nhóm trống sau khi lọc menu v1 trong bố cục v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) bởi @zhangzhonghe
  - Sửa lỗi trang chuyển sang trắng phía sau hộp thoại bật plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) bởi @zhangzhonghe
  - Sửa lỗi trang quản trị v1 bị sập khi chúng tham chiếu các mô-đun plugin v2 trong các bản dựng production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) bởi @Molunerfinn
- **[cli-v1]** Đã sửa lỗi khởi động phát triển thất bại trong các ứng dụng được tạo bằng create-nocobase-app do giải quyết đường dẫn client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) bởi @Molunerfinn
- **[server]** fix(file-manager): buộc tải xuống các tệp nội dung hoạt động trong bộ nhớ local/public ([#9437](https://github.com/nocobase/nocobase/pull/9437)) bởi @mytharcher
- **[AI employees]**

  - Đã sửa lỗi tải plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) bởi @cgyrock
  - Đã sửa lỗi chuyến bay thử nghiệm Ollama yêu cầu nhập khóa ([#9450](https://github.com/nocobase/nocobase/pull/9450)) bởi @cgyrock
- **[Block: Multi-step form]** sửa lỗi thanh cuộn khi bật chế độ toàn chiều cao trong khối biểu mẫu bước v1 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) bởi @katherinehhh
- **[Departments]** sửa lỗi xung đột bản dịch giữa nút thêm người dùng và thêm phòng ban trong cài đặt Người dùng & Quyền ([#9456](https://github.com/nocobase/nocobase/pull/9456)) bởi @katherinehhh
- **[Workflow]** fix: khôi phục văn bản trợ giúp trong hộp thoại liên kết workflow FlowModel cho các sự kiện hành động tùy chỉnh và thao tác ([#9447](https://github.com/nocobase/nocobase/pull/9447)) bởi @mytharcher
- **[Block: Markdown]** Sửa lỗi khối Markdown v2 báo lỗi ([#9440](https://github.com/nocobase/nocobase/pull/9440)) bởi @zhangzhonghe
- **[Workflow: Webhook]** Sửa lỗi tạo nút phản hồi bị chặn bởi xác thực cấu hình `statusCode` bởi @mytharcher
- **[Workflow: Approval]**

  - Sửa bố cục biểu mẫu phê duyệt trên thiết bị di động bởi @zhangzhonghe
  - Sửa lỗi chỉ mục bản ghi phê duyệt trùng lặp khi ủy quyền nhiệm vụ phê duyệt. bởi @mytharcher
- **[Backup manager]** Đã sửa lỗi sao lưu sẽ thất bại với lỗi khi không tìm thấy tệp. bởi @gchust
