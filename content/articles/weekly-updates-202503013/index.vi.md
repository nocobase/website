---
title: "Cập nhật hàng tuần của NocoBase: Xác thực hai yếu tố (2FA)"
description: "Các bản cập nhật trong tuần này bao gồm: tương thích với cài đặt kiểm soát truy cập nút lịch sử, plugin tích hợp AI, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**Tuần này chúng tôi đã phát hành [phiên bản NocoBase 1.6.0](https://www.nocobase.com/en/blog/nocobase-1-6-0), mang đến triển khai chế độ cụm, tối ưu hóa chính sách bảo mật, tối ưu hóa Migration Manager và nhiều tính năng mới khác.**

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*Ngày phát hành: 2025-03-05*

#### 🚀 Cải tiến

- **[Workflow]** Tải chậm kết quả công việc để cải thiện hiệu suất ([#6344](https://github.com/nocobase/nocobase/pull/6344)) bởi @mytharcher
- **[Workflow: Nút tổng hợp]** Thêm quy trình làm tròn cho số tổng hợp dựa trên kiểu double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Các thành phần subform không căn chỉnh với form chính khi nhãn bị ẩn ([#6357](https://github.com/nocobase/nocobase/pull/6357)) bởi @katherinehhh
  - Khối liên kết không hiển thị trong popup trong kế thừa collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) bởi @katherinehhh
  - Sửa lỗi xảy ra khi tạo file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) bởi @mytharcher
- **[Workflow]** Sửa acl để lấy công việc ([#6352](https://github.com/nocobase/nocobase/pull/6352)) bởi @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*Ngày phát hành: 2025-03-06*

#### 🚀 Cải tiến

- **[client]** Thêm xử lý debounce cho các nút ([#6351](https://github.com/nocobase/nocobase/pull/6351)) bởi @Cyx649312038

#### 🐛 Sửa lỗi

- **[database]** Sửa lỗi khi truy xuất bản ghi collection quan hệ nếu khóa nguồn trong trường quan hệ là chuỗi số ([#6360](https://github.com/nocobase/nocobase/pull/6360)) bởi @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*Ngày phát hành: 2025-03-06*

#### 🐛 Sửa lỗi

- **[client]**
  - Sự cố liên quan đến múi giờ gây thiếu một giờ trong bộ chọn ngày ([#6359](https://github.com/nocobase/nocobase/pull/6359)) bởi @katherinehhh
  - Thiếu cài đặt sắp xếp cho các trường collection kế thừa ([#6372](https://github.com/nocobase/nocobase/pull/6372)) bởi @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*Ngày phát hành: 2025-03-07*

#### 🎉 Tính năng mới

- **[Trực quan hóa dữ liệu]** Hỗ trợ sắp xếp NULLS trong truy vấn biểu đồ ([#6383](https://github.com/nocobase/nocobase/pull/6383)) bởi @2013xile

#### 🚀 Cải tiến

- **[Workflow]** Cho phép bỏ qua để kích hoạt workflow collection trong sự kiện cơ sở dữ liệu ([#6379](https://github.com/nocobase/nocobase/pull/6379)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi Pro]** Sử dụng tùy chọn bổ sung để xác định có kích hoạt workflow hay không bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Hành động xuất pro thiếu tham số sắp xếp bởi @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*Ngày phát hành: 2025-03-09*

#### 🐛 Sửa lỗi

- **[server]** Bộ nhớ đệm trình duyệt không chính xác sau khi chạy lệnh `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) bởi @gchust
- **[Workflow: Phê duyệt]** Tránh cấu hình người được chỉ định sai truy vấn tất cả người dùng bởi @mytharcher
- **[WeCom]** Sửa liên kết nhắc đăng nhập và lỗi đăng nhập dingtalk bởi @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*Ngày phát hành: 2025-03-11*

#### 🐛 Sửa lỗi

- **[client]**

  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không hợp lệ ([#6415](https://github.com/nocobase/nocobase/pull/6415)) bởi @zhangzhonghe
  - Dữ liệu không cập nhật trong cửa sổ popup được mở qua nút Liên kết ([#6411](https://github.com/nocobase/nocobase/pull/6411)) bởi @zhangzhonghe
  - Thay đổi giá trị trường chọn nhiều và mất tùy chọn khi xóa bản ghi subtable ([#6405](https://github.com/nocobase/nocobase/pull/6405)) bởi @katherinehhh
- **[Thông báo: Tin nhắn trong ứng dụng]** Phân biệt màu nền danh sách tin nhắn trong ứng dụng với các thẻ tin nhắn để tăng cường phân cấp trực quan và khả năng đọc. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) bởi @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*Ngày phát hành: 2025-03-07*

#### 🎉 Tính năng mới

- **[client]** Thêm cấu hình tooltip cho mục menu và tiêu đề bảng ([#6346](https://github.com/nocobase/nocobase/pull/6346)) bởi @Cyx649312038
- **[Trực quan hóa dữ liệu]** Hỗ trợ sắp xếp NULLS trong truy vấn biểu đồ ([#6383](https://github.com/nocobase/nocobase/pull/6383)) bởi @2013xile
- **[Tích hợp AI]** Plugin mới: Tích hợp AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) bởi @2013xile
  Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Tích hợp AI (EE)]** Plugin mới: Tích hợp AI (EE) bởi @2013xile
  Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 Cải tiến

- **[client]**

  - Thêm xử lý debounce cho các nút ([#6351](https://github.com/nocobase/nocobase/pull/6351)) bởi @Cyx649312038
  - Làm cho menu phản hồi theo chiều rộng màn hình ([#6331](https://github.com/nocobase/nocobase/pull/6331)) bởi @zhangzhonghe
- **[Workflow]** Cho phép bỏ qua để kích hoạt workflow collection trong sự kiện cơ sở dữ liệu ([#6379](https://github.com/nocobase/nocobase/pull/6379)) bởi @mytharcher
- **[Workflow: Nút tổng hợp]** Thêm quy trình làm tròn cho số tổng hợp dựa trên kiểu double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** hỗ trợ các tùy chọn nâng cao trong nút nhập Pro bởi @katherinehhh
- **[Workflow: JavaScript]** Hỗ trợ yêu cầu gói từ đường dẫn tuyệt đối bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** thử tải lại bộ lưu trữ nếu không tìm thấy bộ lưu trữ bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Bản dịch tùy chỉnh tiêu đề menu không hợp lệ ([#6377](https://github.com/nocobase/nocobase/pull/6377)) bởi @zhangzhonghe
  - Sự cố liên quan đến múi giờ gây thiếu một giờ trong bộ chọn ngày ([#6359](https://github.com/nocobase/nocobase/pull/6359)) bởi @katherinehhh
  - Thiếu cài đặt sắp xếp cho các trường collection kế thừa ([#6372](https://github.com/nocobase/nocobase/pull/6372)) bởi @katherinehhh
  - Trình đơn thả xuống cài đặt lưu trữ trường tệp đính kèm không hiển thị tùy chọn ([#6365](https://github.com/nocobase/nocobase/pull/6365)) bởi @katherinehhh
  - Các thành phần subform không căn chỉnh với form chính khi nhãn bị ẩn ([#6357](https://github.com/nocobase/nocobase/pull/6357)) bởi @katherinehhh
  - Khối liên kết không hiển thị trong popup trong kế thừa collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) bởi @katherinehhh
  - Giải quyết vấn đề thanh cuộn khi mở tab trang với khối có chiều cao đầy đủ ([#6347](https://github.com/nocobase/nocobase/pull/6347)) bởi @katherinehhh
  - Sửa lỗi xảy ra khi tạo file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) bởi @mytharcher
- **[database]** Sửa lỗi khi truy xuất bản ghi collection quan hệ nếu khóa nguồn trong trường quan hệ là chuỗi số ([#6360](https://github.com/nocobase/nocobase/pull/6360)) bởi @2013xile
- **[WEB client]**

  - Thêm tab trang trong bảng quản lý tuyến đường không có hiệu lực ([#6362](https://github.com/nocobase/nocobase/pull/6362)) bởi @zhangzhonghe
  - Sau khi thêm một trang vào bảng tuyến đường, trang xuất hiện trống ([#6366](https://github.com/nocobase/nocobase/pull/6366)) bởi @zhangzhonghe
- **[Người dùng]**

  - Lỗi "Không có quyền" khi người dùng không có quyền quản lý người dùng xem hồ sơ của chính họ ([#6382](https://github.com/nocobase/nocobase/pull/6382)) bởi @2013xile
  - Lỗi "Không có quyền" khi cập nhật cài đặt hệ thống trong quản lý người dùng ([#6380](https://github.com/nocobase/nocobase/pull/6380)) bởi @2013xile
- **[Kiểm soát truy cập]** Trong bảng quản lý quyền, tên tab trang trống ([#6364](https://github.com/nocobase/nocobase/pull/6364)) bởi @zhangzhonghe
- **[Tích hợp AI]** Sự cố khi `baseURL` mặc định cho nhà cung cấp LLM là `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) bởi @2013xile
- **[Workflow]** Sửa acl để lấy công việc ([#6352](https://github.com/nocobase/nocobase/pull/6352)) bởi @mytharcher
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa locale và collection có thể sửa đổi sau khi thực thi bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Sử dụng tùy chọn bổ sung để xác định có kích hoạt workflow hay không bởi @mytharcher
- **[Hành động: Xuất bản ghi Pro]** Hành động xuất pro thiếu tham số sắp xếp bởi @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*Ngày phát hành: 2025-03-10*

#### 🚀 Cải tiến

- **[Xác thực: Khóa API]** Thêm kiểm tra cấu hình bảo mật token cho xác thực khóa API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) bởi @sheldon66

#### 🐛 Sửa lỗi

- **[server]** Bộ nhớ đệm trình duyệt không chính xác sau khi chạy lệnh `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) bởi @gchust
- **[auth]** Xử lý người dùng không tồn tại với lỗi 401 và cập nhật thông báo locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) bởi @sheldon66
- **[WEB client]** Trang trống sau khi chuyển đổi vai trò ([#6388](https://github.com/nocobase/nocobase/pull/6388)) bởi @aaaaaajie
- **[Trình chỉnh sửa chủ đề]** chuyển đổi chủ đề thất bại sau nhiều lần chuyển đổi liên tiếp ([#6387](https://github.com/nocobase/nocobase/pull/6387)) bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Sửa tham số thứ tự khi thêm người được chỉ định bởi @mytharcher
  - Tránh cấu hình người được chỉ định sai truy vấn tất cả người dùng bởi @mytharcher
- **[WeCom]** Sửa liên kết nhắc đăng nhập và lỗi đăng nhập dingtalk bởi @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*Ngày phát hành: 2025-03-11*

#### 🎉 Tính năng mới

- **[client]** tương thích với cài đặt kiểm soát truy cập nút lịch sử ([#6376](https://github.com/nocobase/nocobase/pull/6376)) bởi @katherinehhh
- **[Workflow: Sự kiện sau hành động]** Hỗ trợ sử dụng nút kết thúc để xác định trạng thái ([#6399](https://github.com/nocobase/nocobase/pull/6399)) bởi @mytharcher
- **[Workflow: Tin nhắn phản hồi]** Hỗ trợ được sử dụng trong trình kích hoạt hành động bởi @mytharcher

#### 🚀 Cải tiến

- **[Workflow]** Sửa API 401 khi chưa đăng nhập ([#6412](https://github.com/nocobase/nocobase/pull/6412)) bởi @mytharcher
- **[Workflow: Nút thủ công]** Điều chỉnh giao diện trung tâm tác vụ workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) bởi @mytharcher
- **[Trình quản lý email]** Sử dụng cùng cấu trúc và kiểu phần tử trong toàn cục cho nút thanh công cụ bởi @mytharcher
- **[Workflow: Phê duyệt]** Điều chỉnh giao diện trung tâm tác vụ bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Không thể di chuyển trang vào một nhóm ([#6413](https://github.com/nocobase/nocobase/pull/6413)) bởi @zhangzhonghe
  - Menu cấp sâu không hiển thị biểu tượng ([#6410](https://github.com/nocobase/nocobase/pull/6410)) bởi @zhangzhonghe
  - Sự cố ngữ cảnh chủ đề FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) bởi @katherinehhh
- **[Workflow: Nút thủ công]** Tránh xung đột trên khóa duy nhất ([#6407](https://github.com/nocobase/nocobase/pull/6407)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** lỗi khi chỉnh sửa trường trong nguồn dữ liệu bên ngoài ([#6402](https://github.com/nocobase/nocobase/pull/6402)) bởi @katherinehhh
- **[Xác thực]** Người dùng không có vai trò nên chuyển hướng đến trang thông báo lỗi. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) bởi @sheldon66
- **[Workflow: Sự kiện hành động tùy chỉnh]** thiếu cấu hình quy tắc liên kết cho nút 'Kích hoạt Workflow' bởi @katherinehhh
- **[Trình quản lý sao lưu]** Thiếu dữ liệu khóa mã hóa trong quá trình khôi phục sao lưu bởi @gchust
- **[Workflow: Phê duyệt]** Tránh xung đột trên khóa duy nhất bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*Ngày phát hành: 2025-03-07*

#### 🎉 Tính năng mới

- **[client]**

  - Thêm cấu hình tooltip cho mục menu và tiêu đề bảng ([#6346](https://github.com/nocobase/nocobase/pull/6346)) bởi @Cyx649312038
  - Trường thời gian hỗ trợ định dạng thời gian ([#6329](https://github.com/nocobase/nocobase/pull/6329)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Hỗ trợ sắp xếp NULLS trong truy vấn biểu đồ ([#6383](https://github.com/nocobase/nocobase/pull/6383)) bởi @2013xile
- **[Tích hợp AI]** Plugin mới: Tích hợp AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) bởi @2013xile
  Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Xác minh]** Hỗ trợ người dùng liên kết các loại xác minh khác nhau, chẳng hạn như SMS và bộ xác thực TOTP, và xác minh danh tính trong các tình huống bắt buộc. Cho phép phát triển và mở rộng các phương pháp xác minh. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) bởi @2013xile
  Tham khảo: [Xác minh](https://docs.nocobase.com/handbook/verification)
- **[Tích hợp AI (EE)]** Plugin mới: Tích hợp AI (EE) bởi @2013xile
  Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Xác thực hai yếu tố (2FA)]** Plugin mới: Xác thực hai yếu tố và Xác minh: Bộ xác thực TOTP bởi @2013xile
  Tham khảo: [Xác thực hai yếu tố (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Xác minh: Bộ xác thực TOTP](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 Cải tiến

- **[client]**

  - Thêm xử lý debounce cho các nút ([#6351](https://github.com/nocobase/nocobase/pull/6351)) bởi @Cyx649312038
  - Làm cho menu phản hồi theo chiều rộng màn hình ([#6331](https://github.com/nocobase/nocobase/pull/6331)) bởi @zhangzhonghe
- **[server]** Nâng cấp koa lên 2.15.4; nâng cấp @koa/cors lên 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) bởi @2013xile
- **[Workflow]**

  - Cho phép bỏ qua để kích hoạt workflow collection trong sự kiện cơ sở dữ liệu ([#6379](https://github.com/nocobase/nocobase/pull/6379)) bởi @mytharcher
  - Tải chậm kết quả công việc để cải thiện hiệu suất ([#6344](https://github.com/nocobase/nocobase/pull/6344)) bởi @mytharcher
- **[Khối: mẫu]** Hỗ trợ lưu khối dữ liệu dưới dạng mẫu khối từ trang ([#6348](https://github.com/nocobase/nocobase/pull/6348)) bởi @gchust
- **[Workflow: Nút tổng hợp]** Thêm quy trình làm tròn cho số tổng hợp dựa trên kiểu double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** hỗ trợ các tùy chọn nâng cao trong nút nhập Pro bởi @katherinehhh
- **[Workflow: JavaScript]** Hỗ trợ yêu cầu gói từ đường dẫn tuyệt đối bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]** thử tải lại bộ lưu trữ nếu không tìm thấy bộ lưu trữ bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Bản dịch tùy chỉnh tiêu đề menu không hợp lệ ([#6377](https://github.com/nocobase/nocobase/pull/6377)) bởi @zhangzhonghe
  - Thiếu cài đặt sắp xếp cho các trường collection kế thừa ([#6372](https://github.com/nocobase/nocobase/pull/6372)) bởi @katherinehhh
  - Định dạng không chính xác của trường thời gian trong form bộ lọc ([#6374](https://github.com/nocobase/nocobase/pull/6374)) bởi @katherinehhh
  - Sự cố liên quan đến múi giờ gây thiếu một giờ trong bộ chọn ngày ([#6359](https://github.com/nocobase/nocobase/pull/6359)) bởi @katherinehhh
  - Trình đơn thả xuống cài đặt lưu trữ trường tệp đính kèm không hiển thị tùy chọn ([#6365](https://github.com/nocobase/nocobase/pull/6365)) bởi @katherinehhh
  - Các thành phần subform không căn chỉnh với form chính khi nhãn bị ẩn ([#6357](https://github.com/nocobase/nocobase/pull/6357)) bởi @katherinehhh
  - Sửa lỗi xảy ra khi tạo file collection ([#6363](https://github.com/nocobase/nocobase/pull/6363)) bởi @mytharcher
  - Giải quyết vấn đề thanh cuộn khi mở tab trang với khối có chiều cao đầy đủ ([#6347](https://github.com/nocobase/nocobase/pull/6347)) bởi @katherinehhh
  - Các trang có favicon tùy chỉnh nhấp nháy favicon NocoBase trong thời gian ngắn khi tải ([#6337](https://github.com/nocobase/nocobase/pull/6337)) bởi @zhangzhonghe
  - Khối liên kết không hiển thị trong popup trong kế thừa collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) bởi @katherinehhh
  - Nút thêm mới xuất hiện khi di chuột trong chế độ chỉ đọc trường liên kết ([#6322](https://github.com/nocobase/nocobase/pull/6322)) bởi @katherinehhh
- **[auth]** Tránh gia hạn token trong quá trình ủy quyền WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) bởi @sheldon66
- **[database]** Sửa lỗi khi truy xuất bản ghi collection quan hệ nếu khóa nguồn trong trường quan hệ là chuỗi số ([#6360](https://github.com/nocobase/nocobase/pull/6360)) bởi @2013xile
- **[WEB client]**

  - Sau khi thêm một trang vào bảng tuyến đường, trang xuất hiện trống ([#6366](https://github.com/nocobase/nocobase/pull/6366)) bởi @zhangzhonghe
  - Thêm tab trang trong bảng quản lý tuyến đường không có hiệu lực ([#6362](https://github.com/nocobase/nocobase/pull/6362)) bởi @zhangzhonghe
- **[Kiểm soát truy cập]** Trong bảng quản lý quyền, tên tab trang trống ([#6364](https://github.com/nocobase/nocobase/pull/6364)) bởi @zhangzhonghe
- **[Người dùng]**

  - Lỗi "Không có quyền" khi người dùng không có quyền quản lý người dùng xem hồ sơ của chính họ ([#6382](https://github.com/nocobase/nocobase/pull/6382)) bởi @2013xile
  - Lỗi "Không có quyền" khi cập nhật cài đặt hệ thống trong quản lý người dùng ([#6380](https://github.com/nocobase/nocobase/pull/6380)) bởi @2013xile
  - Giao diện lỗi nhấp nháy trong thời gian ngắn khi bảng quản lý quyền người dùng tải lần đầu ([#6324](https://github.com/nocobase/nocobase/pull/6324)) bởi @zhangzhonghe
- **[Tích hợp AI]** Sự cố khi `baseURL` mặc định cho nhà cung cấp LLM là `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) bởi @2013xile
- **[Workflow]** Sửa acl để lấy công việc ([#6352](https://github.com/nocobase/nocobase/pull/6352)) bởi @mytharcher
- **[Khối: Bản đồ]** Cài đặt cấu hình cho trường bản đồ bị thiếu/không hiển thị ([#6336](https://github.com/nocobase/nocobase/pull/6336)) bởi @zhangzhonghe
- **[Di động]** Lỗi trang: Không thể đọc thuộc tính của null (đang đọc 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) bởi @zhangzhonghe
- **[Khối: Bảng hành động]** Cài đặt chiều cao của bảng hành động không hợp lệ ([#6321](https://github.com/nocobase/nocobase/pull/6321)) bởi @zhangzhonghe
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Sửa locale và collection có thể sửa đổi sau khi thực thi bởi @mytharcher
  - Sửa di chuyển cho các nút cũ được liên kết với workflow hành động tùy chỉnh bởi @mytharcher
- **[Thương hiệu tùy chỉnh]** Các trang có favicon tùy chỉnh nhấp nháy favicon NocoBase trong thời gian ngắn khi tải bởi @zhangzhonghe
- **[Hành động: Nhập bản ghi Pro]**

  - Sử dụng tùy chọn bổ sung để xác định có kích hoạt workflow hay không bởi @mytharcher
  - Nút nhập khối liên kết phát hiện bản ghi trùng lặp không hiển thị dữ liệu trong trình đơn thả xuống trường bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]**

  - Hành động xuất pro thiếu tham số sắp xếp bởi @katherinehhh
  - Xóa tùy chọn 'thêm khối' trong cài đặt nút xuất tệp đính kèm bởi @katherinehhh
- **[In mẫu]** Khôi phục từ cục bộ thất bại khi cả plugin in mẫu hành động và trình quản lý sao lưu đều được bật bởi @gchust
- **[Workflow: Phê duyệt]**

  - Sửa di chuyển cho các khối cũ bởi @mytharcher
  - Sửa lỗi do `.toJSON()` gây ra bởi @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Ngày phát hành: 2025-03-11*

#### 🎉 Tính năng mới

- **[client]** tương thích với cài đặt kiểm soát truy cập nút lịch sử ([#6376](https://github.com/nocobase/nocobase/pull/6376)) bởi @katherinehhh
- **[Workflow: Tin nhắn phản hồi]** Hỗ trợ được sử dụng trong trình kích hoạt hành động bởi @mytharcher

#### 🚀 Cải tiến

- **[Xác thực: Khóa API]** Thêm kiểm tra cấu hình bảo mật token cho xác thực khóa API. ([#6361](https://github.com/nocobase/nocobase/pull/6361)) bởi @sheldon66
- **[Workflow: Nút thủ công]** Điều chỉnh giao diện trung tâm tác vụ workflow ([#6272](https://github.com/nocobase/nocobase/pull/6272)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[server]** Bộ nhớ đệm trình duyệt không chính xác sau khi chạy lệnh `yarn start` ([#6394](https://github.com/nocobase/nocobase/pull/6394)) bởi @gchust
- **[client]**

  - Sự cố ngữ cảnh chủ đề FormDrawer ([#6403](https://github.com/nocobase/nocobase/pull/6403)) bởi @katherinehhh
  - Khi sử dụng toán tử '$anyOf', quy tắc liên kết không hợp lệ ([#6400](https://github.com/nocobase/nocobase/pull/6400)) bởi @zhangzhonghe
- **[auth]** Xử lý người dùng không tồn tại với lỗi 401 và cập nhật thông báo locale ([#6381](https://github.com/nocobase/nocobase/pull/6381)) bởi @sheldon66
- **[Khối: mẫu]** Tùy chọn Lưu dưới dạng mẫu chưa được hiển thị trong khối dữ liệu trang ([#6398](https://github.com/nocobase/nocobase/pull/6398)) bởi @gchust
- **[Workflow: Nút thủ công]** Tránh xung đột trên khóa duy nhất ([#6407](https://github.com/nocobase/nocobase/pull/6407)) bởi @mytharcher
- **[Trình quản lý nguồn dữ liệu]** lỗi khi chỉnh sửa trường trong nguồn dữ liệu bên ngoài ([#6402](https://github.com/nocobase/nocobase/pull/6402)) bởi @katherinehhh
- **[Trình chỉnh sửa chủ đề]** chuyển đổi chủ đề thất bại sau nhiều lần chuyển đổi liên tiếp ([#6387](https://github.com/nocobase/nocobase/pull/6387)) bởi @katherinehhh
- **[WEB client]** Trang trống sau khi chuyển đổi vai trò ([#6388](https://github.com/nocobase/nocobase/pull/6388)) bởi @aaaaaajie
- **[Workflow: Phê duyệt]**

  - Tránh cấu hình người được chỉ định sai truy vấn tất cả người dùng bởi @mytharcher
  - Sửa tham số thứ tự khi thêm người được chỉ định bởi @mytharcher
- **[WeCom]** Sửa liên kết nhắc đăng nhập và lỗi đăng nhập dingtalk bởi @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*Ngày phát hành: 2025-03-11*

#### 🎉 Tính năng mới

- **[Workflow: Sự kiện sau hành động]** Hỗ trợ sử dụng nút kết thúc để xác định trạng thái ([#6399](https://github.com/nocobase/nocobase/pull/6399)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Workflow]** Sửa API 401 khi chưa đăng nhập ([#6412](https://github.com/nocobase/nocobase/pull/6412)) bởi @mytharcher
- **[Trình quản lý email]** Sử dụng cùng cấu trúc và kiểu phần tử trong toàn cục cho nút thanh công cụ bởi @mytharcher
- **[Workflow: Phê duyệt]** Điều chỉnh giao diện trung tâm tác vụ bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Không thể di chuyển trang vào một nhóm ([#6413](https://github.com/nocobase/nocobase/pull/6413)) bởi @zhangzhonghe
  - Menu cấp sâu không hiển thị biểu tượng ([#6410](https://github.com/nocobase/nocobase/pull/6410)) bởi @zhangzhonghe
- **[Xác thực]** Người dùng không có vai trò nên chuyển hướng đến trang thông báo lỗi. ([#6408](https://github.com/nocobase/nocobase/pull/6408)) bởi @sheldon66
- **[Workflow: Sự kiện hành động tùy chỉnh]** thiếu cấu hình quy tắc liên kết cho nút 'Kích hoạt Workflow' bởi @katherinehhh
- **[Trình quản lý sao lưu]** Thiếu dữ liệu khóa mã hóa trong quá trình khôi phục sao lưu bởi @gchust
- **[Workflow: Phê duyệt]** Tránh xung đột trên khóa duy nhất bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
