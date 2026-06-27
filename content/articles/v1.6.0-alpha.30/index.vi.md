---
title: "NocoBase v1.6.0-alpha.30: trường thời gian hỗ trợ định dạng thời gian"
description: "Ghi chú phát hành của v1.6.0-alpha.30"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm cấu hình tooltip cho mục menu và tiêu đề bảng ([#6346](https://github.com/nocobase/nocobase/pull/6346)) bởi @Cyx649312038

  - Trường thời gian hỗ trợ định dạng thời gian ([#6329](https://github.com/nocobase/nocobase/pull/6329)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]** Hỗ trợ sắp xếp NULLS trong truy vấn biểu đồ ([#6383](https://github.com/nocobase/nocobase/pull/6383)) bởi @2013xile

- **[Tích hợp AI]** Plugin mới: Tích hợp AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) bởi @2013xile
Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Xác thực]** Hỗ trợ người dùng liên kết nhiều loại xác thực khác nhau, như SMS và TOTP authenticator, và xác thực danh tính trong các tình huống bắt buộc. Cho phép phát triển và mở rộng các phương thức xác thực. ([#6026](https://github.com/nocobase/nocobase/pull/6026)) bởi @2013xile
Tham khảo: [Xác thực](https://docs.nocobase.com/handbook/verification)
- **[Tích hợp AI (EE)]** Plugin mới: Tích hợp AI (EE) bởi @2013xile
Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Xác thực hai yếu tố (2FA)]** Plugin mới: Xác thực hai yếu tố và Xác thực: TOTP authenticator bởi @2013xile
Tham khảo: [Xác thực hai yếu tố (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[Xác thực: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 Cải tiến

- **[client]**
  - Thêm xử lý debounce cho các nút ([#6351](https://github.com/nocobase/nocobase/pull/6351)) bởi @Cyx649312038

  - Làm cho menu phản hồi theo chiều rộng màn hình ([#6331](https://github.com/nocobase/nocobase/pull/6331)) bởi @zhangzhonghe

- **[server]** Nâng cấp koa lên 2.15.4; nâng cấp @koa/cors lên 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) bởi @2013xile

- **[Workflow]**
  - Cho phép bỏ qua kích hoạt workflow collection trong sự kiện cơ sở dữ liệu ([#6379](https://github.com/nocobase/nocobase/pull/6379)) bởi @mytharcher

  - Tải chậm kết quả công việc để cải thiện hiệu suất ([#6344](https://github.com/nocobase/nocobase/pull/6344)) bởi @mytharcher

- **[Khối: template]** Hỗ trợ lưu khối dữ liệu dưới dạng mẫu khối từ trang ([#6348](https://github.com/nocobase/nocobase/pull/6348)) bởi @gchust

- **[Workflow: Nút tổng hợp]** Thêm xử lý làm tròn cho số tổng hợp dựa trên kiểu double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** hỗ trợ các tùy chọn nâng cao trong nút nhập Pro bởi @katherinehhh

- **[Workflow: JavaScript]** Hỗ trợ yêu cầu package từ đường dẫn tuyệt đối bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]** thử tải lại bộ lưu trữ nếu không tìm thấy bộ lưu trữ bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - Bản dịch tùy chỉnh tiêu đề menu không hợp lệ ([#6377](https://github.com/nocobase/nocobase/pull/6377)) bởi @zhangzhonghe

  - Thiếu cài đặt sắp xếp cho các trường collection kế thừa ([#6372](https://github.com/nocobase/nocobase/pull/6372)) bởi @katherinehhh

  - Định dạng không chính xác của trường thời gian trong biểu mẫu bộ lọc ([#6374](https://github.com/nocobase/nocobase/pull/6374)) bởi @katherinehhh

  - Vấn đề liên quan đến múi giờ gây ra thiếu một giờ trong bộ chọn ngày ([#6359](https://github.com/nocobase/nocobase/pull/6359)) bởi @katherinehhh

  - Menu thả xuống cài đặt lưu trữ trường tệp đính kèm không hiển thị tùy chọn ([#6365](https://github.com/nocobase/nocobase/pull/6365)) bởi @katherinehhh

  - Các thành phần biểu mẫu con không căn chỉnh với biểu mẫu chính khi nhãn bị ẩn ([#6357](https://github.com/nocobase/nocobase/pull/6357)) bởi @katherinehhh

  - Sửa lỗi xảy ra khi tạo collection tệp ([#6363](https://github.com/nocobase/nocobase/pull/6363)) bởi @mytharcher

  - Giải quyết vấn đề thanh cuộn khi mở tab trang với khối toàn chiều cao ([#6347](https://github.com/nocobase/nocobase/pull/6347)) bởi @katherinehhh

  - Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải ([#6337](https://github.com/nocobase/nocobase/pull/6337)) bởi @zhangzhonghe

  - Khối liên kết không hiển thị trong cửa sổ bật lên trong kế thừa collection ([#6303](https://github.com/nocobase/nocobase/pull/6303)) bởi @katherinehhh

  - Nút thêm mới xuất hiện khi di chuột trong chế độ chỉ đọc của trường liên kết ([#6322](https://github.com/nocobase/nocobase/pull/6322)) bởi @katherinehhh

- **[auth]** Tránh gia hạn token trong quá trình ủy quyền WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) bởi @sheldon66

- **[database]** Sửa lỗi khi truy xuất bản ghi collection quan hệ nếu khóa nguồn trong các trường quan hệ là chuỗi số ([#6360](https://github.com/nocobase/nocobase/pull/6360)) bởi @2013xile

- **[WEB client]**
  - Sau khi thêm một trang vào bảng định tuyến, trang hiển thị trống ([#6366](https://github.com/nocobase/nocobase/pull/6366)) bởi @zhangzhonghe

  - Thêm tab trang trong bảng quản lý định tuyến không có hiệu lực ([#6362](https://github.com/nocobase/nocobase/pull/6362)) bởi @zhangzhonghe

- **[Kiểm soát truy cập]** Trong bảng quản lý quyền, tên tab trang bị trống ([#6364](https://github.com/nocobase/nocobase/pull/6364)) bởi @zhangzhonghe

- **[Người dùng]**
  - Lỗi "Không có quyền" khi người dùng không có quyền quản lý người dùng xem hồ sơ của chính họ ([#6382](https://github.com/nocobase/nocobase/pull/6382)) bởi @2013xile

  - Lỗi "Không có quyền" khi cập nhật cài đặt hệ thống trong quản lý người dùng ([#6380](https://github.com/nocobase/nocobase/pull/6380)) bởi @2013xile

  - Giao diện lỗi hiển thị nhanh khi bảng quản lý quyền người dùng tải lần đầu ([#6324](https://github.com/nocobase/nocobase/pull/6324)) bởi @zhangzhonghe

- **[Tích hợp AI]** Vấn đề khi `baseURL` mặc định cho nhà cung cấp LLM là `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) bởi @2013xile

- **[Workflow]** Sửa acl để lấy công việc ([#6352](https://github.com/nocobase/nocobase/pull/6352)) bởi @mytharcher

- **[Khối: Bản đồ]** Cài đặt cấu hình cho trường bản đồ bị thiếu/không hiển thị ([#6336](https://github.com/nocobase/nocobase/pull/6336)) bởi @zhangzhonghe

- **[Di động]** Lỗi trang: Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) bởi @zhangzhonghe

- **[Khối: Bảng hành động]** Cài đặt chiều cao của bảng hành động không có hiệu lực ([#6321](https://github.com/nocobase/nocobase/pull/6321)) bởi @zhangzhonghe

- **[Workflow: Sự kiện hành động tùy chỉnh]**
  - Sửa locale và collection có thể sửa đổi sau khi thực thi bởi @mytharcher

  - Sửa di chuyển cho các nút cũ được liên kết với workflow hành động tùy chỉnh bởi @mytharcher

- **[Thương hiệu tùy chỉnh]** Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải bởi @zhangzhonghe

- **[Hành động: Nhập bản ghi Pro]**
  - Sử dụng tùy chọn bổ sung để xác định có kích hoạt workflow hay không bởi @mytharcher

  - Nút nhập khối liên kết phát hiện bản ghi trùng lặp không hiển thị dữ liệu trong menu thả xuống trường bởi @katherinehhh

- **[Hành động: Xuất bản ghi Pro]**
  - Hành động xuất Pro thiếu tham số sắp xếp bởi @katherinehhh

  - Xóa tùy chọn 'thêm khối' trong cài đặt nút xuất tệp đính kèm bởi @katherinehhh

- **[In mẫu]** Khôi phục từ local thất bại khi cả plugin in mẫu hành động và plugin quản lý sao lưu đều được bật bởi @gchust

- **[Workflow: Phê duyệt]**
  - Sửa di chuyển cho các khối cũ bởi @mytharcher

  - Sửa lỗi do `.toJSON()` gây ra bởi @mytharcher
