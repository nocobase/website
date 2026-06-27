---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ hợp nhất vai trò người dùng"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ biến môi trường trong URL nút liên kết, cho phép trường văn bản dài làm trường tiêu đề cho trường liên kết, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có các vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*Ngày phát hành: 2025-03-20*

#### 🚀 Cải tiến

- **[Workflow: nút gửi thư]** Thêm mô tả cấu hình trường bảo mật. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) bởi @sheldon66
- **[Thông báo: Email]** Thêm mô tả cấu hình trường bảo mật. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) bởi @sheldon66
- **[Lịch]** Plugin Lịch với các cài đặt tùy chọn để bật hoặc tắt tính năng tạo sự kiện nhanh ([#6391](https://github.com/nocobase/nocobase/pull/6391)) bởi @Cyx649312038

#### 🐛 Sửa lỗi

- **[client]** lỗi gửi trường thời gian trong ngôn ngữ tiếng Trung (cú pháp đầu vào không hợp lệ cho kiểu thời gian) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) bởi @katherinehhh
- **[Quản lý tệp]** Không thể truy cập tệp được lưu trữ trong COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) bởi @chenos
- **[Khối: Bản đồ]** các trường khóa bí mật không kích hoạt xác thực trong quản lý bản đồ ([#6509](https://github.com/nocobase/nocobase/pull/6509)) bởi @katherinehhh
- **[WEB client]** Đường dẫn trong bảng quản lý route khác với đường dẫn thực tế ([#6483](https://github.com/nocobase/nocobase/pull/6483)) bởi @zhangzhonghe
- **[Hành động: Xuất bản ghi Pro]** Không thể xuất tệp đính kèm bởi @chenos
- **[Workflow: Phê duyệt]**

  - Sửa lỗi crash do người dùng null bởi @mytharcher
  - Sửa lỗi xảy ra khi thêm kết quả nút truy vấn bởi @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*Ngày phát hành: 2025-03-22*

#### 🐛 Sửa lỗi

- **[server]** Lệnh nâng cấp có thể gây ra lỗi workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust
- **[client]** chiều cao của bảng con trong biểu mẫu được đặt cùng với chiều cao biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh
- **[Xác thực]**

  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos
  - Cắt bỏ khoảng trắng trong tùy chọn authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile
- **[Khối: Bản đồ]** vấn đề quản lý khóa khối bản đồ gây ra lỗi yêu cầu do ký tự ẩn ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh
- **[Trình quản lý sao lưu]** Việc khôi phục có thể gây ra lỗi thực thi workflow bởi @gchust
- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*Ngày phát hành: 2025-03-23*

#### 🐛 Sửa lỗi

- **[client]** độ trong suốt của nút hành động gây ra sự cố hiển thị cài đặt khi di chuột ([#6529](https://github.com/nocobase/nocobase/pull/6529)) bởi @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*Ngày phát hành: 2025-03-25*

#### 🐛 Sửa lỗi

- **[client]**

  - Không thể sử dụng biến 'Người dùng hiện tại' khi thêm trang liên kết ([#6536](https://github.com/nocobase/nocobase/pull/6536)) bởi @zhangzhonghe
  - Gán giá trị 'null' cho trường không có hiệu lực ([#6549](https://github.com/nocobase/nocobase/pull/6549)) bởi @katherinehhh
  - Lỗi lệnh `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) bởi @gchust
  - Xóa tùy chọn 'Cho phép chọn nhiều' khỏi trường chọn một trong biểu mẫu lọc ([#6515](https://github.com/nocobase/nocobase/pull/6515)) bởi @zhangzhonghe
  - Liên kết phạm vi dữ liệu của trường quan hệ không hiệu quả ([#6530](https://github.com/nocobase/nocobase/pull/6530)) bởi @zhangzhonghe
- **[Bộ sưu tập: Cây]** Vấn đề di chuyển cho plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Không thể tải xuống tệp được mã hóa UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) bởi @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*Ngày phát hành: 2025-03-19*

#### 🚀 Cải tiến

- **[Lịch]** Plugin Lịch với các cài đặt tùy chọn để bật hoặc tắt tính năng tạo sự kiện nhanh ([#6391](https://github.com/nocobase/nocobase/pull/6391)) bởi @Cyx649312038

#### 🐛 Sửa lỗi

- **[client]**

  - nút thêm con không hiển thị chế độ chỉ biểu tượng ([#6504](https://github.com/nocobase/nocobase/pull/6504)) bởi @katherinehhh
  - trường quy tắc liên kết ẩn mặc định với giá trị được giữ lại không hoạt động ([#6503](https://github.com/nocobase/nocobase/pull/6503)) bởi @katherinehhh
- **[Khối: Bảng hành động]** vấn đề bố cục trong bảng hành động trên thiết bị di động sau khi ẩn nút do kiểm soát quyền ([#6502](https://github.com/nocobase/nocobase/pull/6502)) bởi @katherinehhh
- **[WEB client]** Đường dẫn trong bảng quản lý route khác với đường dẫn thực tế ([#6483](https://github.com/nocobase/nocobase/pull/6483)) bởi @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*Ngày phát hành: 2025-03-23*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ cài đặt Kiểu trường cho cỡ chữ, độ đậm chữ và kiểu chữ ([#6489](https://github.com/nocobase/nocobase/pull/6489)) bởi @katherinehhh
- **[Biến và bí mật]** hỗ trợ biến môi trường trong URL nút liên kết ([#6494](https://github.com/nocobase/nocobase/pull/6494)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[client]** hỗ trợ đối sánh mờ cho các trường được chọn trong nút lọc ([#6496](https://github.com/nocobase/nocobase/pull/6496)) bởi @katherinehhh
- **[Workflow: nút gửi thư]** Thêm mô tả cấu hình trường bảo mật. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) bởi @sheldon66
- **[WEB client]** thêm lời nhắc xác nhận thứ cấp cho Xóa bộ nhớ đệm ([#6505](https://github.com/nocobase/nocobase/pull/6505)) bởi @katherinehhh
- **[Thông báo: Email]** Thêm mô tả cấu hình trường bảo mật. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) bởi @sheldon66
- **[Trình quản lý Email]** hỗ trợ cấp quyền lại & tự động chọn tài khoản khi gửi email bởi @jiannx

#### 🐛 Sửa lỗi

- **[server]** Lệnh nâng cấp có thể gây ra lỗi workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust
- **[client]**

  - chiều cao của bảng con trong biểu mẫu được đặt cùng với chiều cao biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh
  - lỗi gửi trường thời gian trong ngôn ngữ tiếng Trung (cú pháp đầu vào không hợp lệ cho kiểu thời gian) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) bởi @katherinehhh
  - độ trong suốt của nút hành động gây ra sự cố hiển thị cài đặt khi di chuột ([#6529](https://github.com/nocobase/nocobase/pull/6529)) bởi @katherinehhh
- **[Xác thực]**

  - Cắt bỏ khoảng trắng trong tùy chọn authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile
  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos
- **[Khối: Bản đồ]**

  - vấn đề quản lý khóa khối bản đồ gây ra lỗi yêu cầu do ký tự ẩn ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh
  - các trường khóa bí mật không kích hoạt xác thực trong quản lý bản đồ ([#6509](https://github.com/nocobase/nocobase/pull/6509)) bởi @katherinehhh
- **[Quản lý tệp]** Không thể truy cập tệp được lưu trữ trong COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) bởi @chenos
- **[Hành động: Xuất bản ghi Pro]** Không thể xuất tệp đính kèm bởi @chenos
- **[Trình quản lý sao lưu]** Việc khôi phục có thể gây ra lỗi thực thi workflow bởi @gchust
- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi bảng quy trình khi công việc bị xóa bởi @mytharcher
  - Sửa lỗi xảy ra khi thêm kết quả nút truy vấn bởi @mytharcher
  - Sửa lỗi crash do người dùng null bởi @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*Ngày phát hành: 2025-03-25*

#### 🎉 Tính năng mới

- **[acl]** Hỗ trợ hợp nhất vai trò người dùng ([#6301](https://github.com/nocobase/nocobase/pull/6301)) bởi @aaaaaajie
- **[client]**

  - hỗ trợ mở rộng các trường đặt trước trong bộ sưu tập ([#6183](https://github.com/nocobase/nocobase/pull/6183)) bởi @katherinehhh
  - Hỗ trợ mở rộng toán tử lọc phía frontend ([#6085](https://github.com/nocobase/nocobase/pull/6085)) bởi @katherinehhh
- **[Xác minh]** Hỗ trợ người dùng liên kết nhiều loại xác minh khác nhau, chẳng hạn như SMS và TOTP authenticator, và xác minh danh tính trong các tình huống bắt buộc. Cho phép phát triển và mở rộng các phương pháp xác minh. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) bởi @2013xile
  Tham khảo: [Xác minh](https://docs.nocobase.com/handbook/verification)
- **[Lịch]** Hỗ trợ mở rộng các trường tùy chọn cho plugin Kanban, Lịch và Trường Công thức ([#6076](https://github.com/nocobase/nocobase/pull/6076)) bởi @katherinehhh
- **[Khối: mẫu]** Thêm plugin `Khối: mẫu`, cung cấp hỗ trợ mẫu cho các khối dựa trên cơ chế kế thừa. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) bởi @gchust
- **[plugin-demo-platform]** Đặt skipAuthCheck của route "/new" thành true. bởi @sheldon66
- **[Xác thực hai yếu tố (2FA)]** Plugin mới: Xác thực hai yếu tố và Xác minh: TOTP authenticator bởi @2013xile
  Tham khảo: [Xác thực hai yếu tố (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Xác minh: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Cải tiến

- **[client]**

  - Thêm skipAuthCheck vào router.add để ngăn chặn chuyển hướng đến trang đăng nhập trên các trang công khai. ([#6453](https://github.com/nocobase/nocobase/pull/6453)) bởi @sheldon66
  - Nâng cấp các phụ thuộc ant design lên 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) bởi @gchust
- **[utils]** Thích ứng trang desktop cho thiết bị di động ([#6393](https://github.com/nocobase/nocobase/pull/6393)) bởi @zhangzhonghe
- **[Biểu mẫu công khai]** đặt tiêu đề trang biểu mẫu công khai thành tiêu đề đã cấu hình khi tạo ([#6538](https://github.com/nocobase/nocobase/pull/6538)) bởi @katherinehhh
- **[Quản lý tệp]**

  - thêm mã backend để tạo url xem trước tệp ([#6223](https://github.com/nocobase/nocobase/pull/6223)) bởi @jiannx
  - Thay đổi api loại lưu trữ và thêm plugin api ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher
- **[Khối: mẫu]** Hỗ trợ lưu khối dữ liệu dưới dạng mẫu khối từ trang ([#6348](https://github.com/nocobase/nocobase/pull/6348)) bởi @gchust
- **[Workflow]** Di chuyển cài đặt liên kết workflow vào plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - vấn đề kéo và thả nút hàng trong bảng ([#6544](https://github.com/nocobase/nocobase/pull/6544)) bởi @katherinehhh
  - Không thể sử dụng biến 'Người dùng hiện tại' khi thêm trang liên kết ([#6536](https://github.com/nocobase/nocobase/pull/6536)) bởi @zhangzhonghe
  - Liên kết phạm vi dữ liệu của trường quan hệ không hiệu quả ([#6530](https://github.com/nocobase/nocobase/pull/6530)) bởi @zhangzhonghe
  - Xóa tùy chọn 'Cho phép chọn nhiều' khỏi trường chọn một trong biểu mẫu lọc ([#6515](https://github.com/nocobase/nocobase/pull/6515)) bởi @zhangzhonghe
  - Lỗi lệnh `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) bởi @gchust
  - thiếu trường trong cấu hình quy tắc liên kết ([#6488](https://github.com/nocobase/nocobase/pull/6488)) bởi @katherinehhh
  - Nội dung không được hiển thị đầy đủ trên trình duyệt di động ([#6446](https://github.com/nocobase/nocobase/pull/6446)) bởi @zhangzhonghe
  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không hợp lệ ([#6400](https://github.com/nocobase/nocobase/pull/6400)) bởi @zhangzhonghe
  - định dạng không chính xác của trường thời gian trong biểu mẫu lọc ([#6374](https://github.com/nocobase/nocobase/pull/6374)) bởi @katherinehhh
  - Kiểu đầu vào không chính xác cho cài đặt giá trị mặc định của biểu mẫu ([#6490](https://github.com/nocobase/nocobase/pull/6490)) bởi @gchust
- **[utils]** Lỗi 'desktop responsive' đã biết ([#6476](https://github.com/nocobase/nocobase/pull/6476)) bởi @zhangzhonghe
- **[acl]** Đã sửa lỗi trường quan hệ không được hiển thị dưới vai trò hợp nhất. ([#6456](https://github.com/nocobase/nocobase/pull/6456)) bởi @aaaaaajie
- **[Bộ sưu tập: Cây]** Vấn đề di chuyển cho plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Không thể tải xuống tệp được mã hóa UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) bởi @2013xile
- **[Biến và bí mật]** Các nút không được hiển thị trong ngăn kéo tạo biến mới ([#6485](https://github.com/nocobase/nocobase/pull/6485)) bởi @gchust
- **[WEB client]** Thay thế tất cả các trường hợp của ctx.state.currentRole (vai trò đơn) bằng ctx.state.currentRoles (hỗ trợ nhiều vai trò). ([#6427](https://github.com/nocobase/nocobase/pull/6427)) bởi @aaaaaajie
- **[Kiểm soát truy cập]**

  - Lỗi khi phạm vi dữ liệu được đặt thành dữ liệu của chính mình và bảng thiếu trường người tạo. ([#6428](https://github.com/nocobase/nocobase/pull/6428)) bởi @aaaaaajie
  - Đã sửa lỗi chuyển đổi vai trò không có hiệu lực. ([#6454](https://github.com/nocobase/nocobase/pull/6454)) bởi @aaaaaajie
- **[Khối: mẫu]**

  - Tùy chọn lưu dưới dạng mẫu không được hiển thị trong khối dữ liệu trang ([#6398](https://github.com/nocobase/nocobase/pull/6398)) bởi @gchust
  - Hành vi lưu dưới dạng mẫu không chính xác trong client di động ([#6420](https://github.com/nocobase/nocobase/pull/6420)) bởi @gchust
  - Yêu cầu đăng nhập khi truy cập biểu mẫu công khai ([#6258](https://github.com/nocobase/nocobase/pull/6258)) bởi @gchust
- **[Xác thực: Khóa API]** Plugin khóa API xóa danh sách vai trò hợp nhất ([#6432](https://github.com/nocobase/nocobase/pull/6432)) bởi @aaaaaajie
- **[Khối: Biểu mẫu nhiều bước]** nút gửi có cùng màu ở trạng thái mặc định và được làm nổi bật bởi @jiannx
- **[Workflow: Phê duyệt]** Vấn đề về kiểu với hộp thoại bật lên 'Áp dụng mới' bởi @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*Ngày phát hành: 2025-03-23*

#### 🎉 Tính năng mới

- **[client]**

  - hỗ trợ trường văn bản dài làm trường tiêu đề cho trường liên kết ([#6495](https://github.com/nocobase/nocobase/pull/6495)) bởi @katherinehhh
  - Hỗ trợ cài đặt Kiểu trường cho cỡ chữ, độ đậm chữ và kiểu chữ ([#6489](https://github.com/nocobase/nocobase/pull/6489)) bởi @katherinehhh
- **[Biến và bí mật]** hỗ trợ biến môi trường trong URL nút liên kết ([#6494](https://github.com/nocobase/nocobase/pull/6494)) bởi @katherinehhh
- **[Workflow: Nút tổng hợp]** Hỗ trợ cấu hình độ chính xác cho kết quả tổng hợp ([#6491](https://github.com/nocobase/nocobase/pull/6491)) bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** hỗ trợ đối sánh mờ cho các trường được chọn trong nút lọc ([#6496](https://github.com/nocobase/nocobase/pull/6496)) bởi @katherinehhh
- **[Thông báo: Email]** Thêm mô tả cấu hình trường bảo mật. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) bởi @sheldon66
- **[Workflow: nút gửi thư]** Thêm mô tả cấu hình trường bảo mật. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) bởi @sheldon66
- **[Lịch]** Plugin Lịch với các cài đặt tùy chọn để bật hoặc tắt tính năng tạo sự kiện nhanh ([#6391](https://github.com/nocobase/nocobase/pull/6391)) bởi @Cyx649312038
- **[WEB client]** thêm lời nhắc xác nhận thứ cấp cho Xóa bộ nhớ đệm ([#6505](https://github.com/nocobase/nocobase/pull/6505)) bởi @katherinehhh
- **[Trình quản lý Email]** hỗ trợ cấp quyền lại & tự động chọn tài khoản khi gửi email bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - độ trong suốt của nút hành động gây ra sự cố hiển thị cài đặt khi di chuột ([#6529](https://github.com/nocobase/nocobase/pull/6529)) bởi @katherinehhh
  - lỗi gửi trường thời gian trong ngôn ngữ tiếng Trung (cú pháp đầu vào không hợp lệ cho kiểu thời gian) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) bởi @katherinehhh
  - chiều cao của bảng con trong biểu mẫu được đặt cùng với chiều cao biểu mẫu ([#6518](https://github.com/nocobase/nocobase/pull/6518)) bởi @katherinehhh
  - trường quy tắc liên kết ẩn mặc định với giá trị được giữ lại không hoạt động ([#6503](https://github.com/nocobase/nocobase/pull/6503)) bởi @katherinehhh
  - nút thêm con không hiển thị chế độ chỉ biểu tượng ([#6504](https://github.com/nocobase/nocobase/pull/6504)) bởi @katherinehhh
- **[server]** Lệnh nâng cấp có thể gây ra lỗi workflow ([#6524](https://github.com/nocobase/nocobase/pull/6524)) bởi @gchust
- **[utils]** Lỗi 'desktop responsive' đã biết ([#6476](https://github.com/nocobase/nocobase/pull/6476)) bởi @zhangzhonghe
- **[evaluators]** Hoàn nguyên số chữ số thập phân làm tròn về 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) bởi @mytharcher
- **[Xác thực]**

  - Cắt bỏ khoảng trắng trong tùy chọn authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) bởi @2013xile
  - Thiếu X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) bởi @chenos
- **[Khối: Bản đồ]**

  - vấn đề quản lý khóa khối bản đồ gây ra lỗi yêu cầu do ký tự ẩn ([#6521](https://github.com/nocobase/nocobase/pull/6521)) bởi @katherinehhh
  - các trường khóa bí mật không kích hoạt xác thực trong quản lý bản đồ ([#6509](https://github.com/nocobase/nocobase/pull/6509)) bởi @katherinehhh
- **[Quản lý tệp]**

  - Không thể truy cập tệp được lưu trữ trong COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) bởi @chenos
  - mã hóa url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) bởi @chenos
- **[WEB client]** Đường dẫn trong bảng quản lý route khác với đường dẫn thực tế ([#6483](https://github.com/nocobase/nocobase/pull/6483)) bởi @zhangzhonghe
- **[Khối: Bảng hành động]** vấn đề bố cục trong bảng hành động trên thiết bị di động sau khi ẩn nút do kiểm soát quyền ([#6502](https://github.com/nocobase/nocobase/pull/6502)) bởi @katherinehhh
- **[Nguồn dữ liệu: Chính]** Không thể tạo view MySQL. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) bởi @aaaaaajie
- **[Workflow]** Sửa lỗi đếm tác vụ cũ sau khi workflow bị xóa ([#6493](https://github.com/nocobase/nocobase/pull/6493)) bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Không thể xuất tệp đính kèm bởi @chenos
- **[Trình quản lý sao lưu]**

  - Các tệp tải lên chưa được khôi phục khi tạo ứng dụng con từ mẫu sao lưu bởi @gchust
  - Việc khôi phục có thể gây ra lỗi thực thi workflow bởi @gchust
  - Lỗi khôi phục cơ sở dữ liệu MySQL do trùng lặp tập GTID bởi @gchust
- **[WeCom]** Giải quyết các biến môi trường và bí mật khi truy xuất cấu hình thông báo. bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi bảng quy trình khi công việc bị xóa bởi @mytharcher
  - Thay đổi phê duyệt được trả về thành việc cần làm bởi @mytharcher
  - Sửa lỗi xảy ra khi thêm kết quả nút truy vấn bởi @mytharcher
  - Sửa lỗi thiếu nút hành động trong bảng quy trình bởi @mytharcher
  - Vấn đề về kiểu với hộp thoại bật lên 'Áp dụng mới' bởi @zhangzhonghe

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Nhận NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
