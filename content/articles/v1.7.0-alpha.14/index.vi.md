---
title: "NocoBase v1.7.0-alpha.14: hỗ trợ ủy quyền thương mại"
description: "Ghi chú phát hành v1.7.0-alpha.14"
---

### 🎉 Tính năng mới

- **[client]**

  - Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc ([#6685](https://github.com/nocobase/nocobase/pull/6685)) bởi @zhangzhonghe
    Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Quy tắc liên kết hành động hỗ trợ biến 'form hiện tại' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) bởi @katherinehhh
- **[build]** hỗ trợ cấp phép thương mại ([#6554](https://github.com/nocobase/nocobase/pull/6554)) bởi @jiannx
- **[undefined]** Thêm nhật ký của plugin nhập bởi @aaaaaajie
- **[Hành động: Nhập bản ghi]** Thêm nhật ký của plugin nhập ([#6841](https://github.com/nocobase/nocobase/pull/6841)) bởi @aaaaaajie
- **[plugin-commercial]** hỗ trợ thương mại bởi @jiannx
- **[Bộ lọc đa từ khóa]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[In mẫu]**

  - Thêm hỗ trợ in hàng loạt trong in mẫu. bởi @sheldon66
  - Thêm hỗ trợ in hàng loạt trong in mẫu. bởi @sheldon66

### 🚀 Cải tiến

- **[undefined]** Xây dựng image docker đầy đủ ([#6898](https://github.com/nocobase/nocobase/pull/6898)) bởi @chenos
- **[client]**

  - Tối ưu vấn đề trang ngày càng chậm khi sử dụng ([#6888](https://github.com/nocobase/nocobase/pull/6888)) bởi @zhangzhonghe
  - thêm nhiều cài đặt kích thước tích hợp sẵn cho ảnh trạng thái đọc ([#6868](https://github.com/nocobase/nocobase/pull/6868)) bởi @katherinehhh
- **[Workflow]**

  - Thêm tất cả các khóa ngôn ngữ en-US bị thiếu ([#6885](https://github.com/nocobase/nocobase/pull/6885)) bởi @mytharcher
  - Cho phép sửa đổi nhiều hơn một bản nháp ([#6851](https://github.com/nocobase/nocobase/pull/6851)) bởi @mytharcher
- **[Trường collection: Tệp đính kèm(URL)]** thêm nhiều kích thước tích hợp sẵn cho trường URL tệp đính kèm cho trạng thái đọc ([#6871](https://github.com/nocobase/nocobase/pull/6871)) bởi @katherinehhh
- **[Trình quản lý email]**

  - sửa lỗi đồng bộ và các vấn đề khó sử dụng khác bởi @jiannx
  - thêm quản lý bản nháp, hỗ trợ xem email của cấp dưới bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**

  - vô hiệu hóa quy tắc liên kết không hoạt động cho nút hành động ([#6896](https://github.com/nocobase/nocobase/pull/6896)) bởi @katherinehhh
  - trang không được chuyển hướng chính xác sau khi xóa mục cuối cùng ([#6892](https://github.com/nocobase/nocobase/pull/6892)) bởi @katherinehhh
  - thành phần cascade trong modal không tải dữ liệu liên kết ban đầu ([#6886](https://github.com/nocobase/nocobase/pull/6886)) bởi @katherinehhh
  - bảng ghi chọn liên kết không lọc bản ghi đã liên kết ([#6874](https://github.com/nocobase/nocobase/pull/6874)) bởi @katherinehhh
  - dữ liệu liên kết không được gửi khi hiển thị trường liên kết trong subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) bởi @katherinehhh
  - thiếu biến form hiện tại trong phạm vi dữ liệu của bảng chọn dữ liệu ([#6882](https://github.com/nocobase/nocobase/pull/6882)) bởi @katherinehhh
  - trường sắp xếp kéo thả không hiển thị đúng các tùy chọn khả dụng ([#6875](https://github.com/nocobase/nocobase/pull/6875)) bởi @katherinehhh
  - xóa giá trị bên phải khi toán tử thay đổi trong quy tắc liên kết ([#6862](https://github.com/nocobase/nocobase/pull/6862)) bởi @katherinehhh
  - thiếu toán tử khi chuyển đổi trong quy tắc liên kết ([#6857](https://github.com/nocobase/nocobase/pull/6857)) bởi @katherinehhh
  - vấn đề liên kết nút trong khối chi tiết ([#6867](https://github.com/nocobase/nocobase/pull/6867)) bởi @katherinehhh
  - đánh giá sai toán tử cho biến ngày trong điều kiện liên kết ([#6825](https://github.com/nocobase/nocobase/pull/6825)) bởi @katherinehhh
  - Các trường ẩn vẫn được hiển thị ([#6844](https://github.com/nocobase/nocobase/pull/6844)) bởi @zhangzhonghe
  - phân tích biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - phân tích biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - cải thiện kiểu thành phần giá trị quy tắc liên kết ([#6836](https://github.com/nocobase/nocobase/pull/6836)) bởi @katherinehhh
- **[database]** xử lý các ô chuỗi rỗng trong quá trình nhập trường để ngăn lỗi ([#6880](https://github.com/nocobase/nocobase/pull/6880)) bởi @aaaaaajie
- **[build]** sửa lỗi runtime client trong plugin-workflow-javascript, xử lý lỗi undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) bởi @jiannx
- **[Trình quản lý tệp]**

  - Sửa URL xem trước trên các tệp không phải ảnh ([#6889](https://github.com/nocobase/nocobase/pull/6889)) bởi @mytharcher
  - Sửa kiểu ([#6873](https://github.com/nocobase/nocobase/pull/6873)) bởi @mytharcher
  - Sửa lỗi tạo bản ghi tệp không có quyền khóa ngoại ([#6863](https://github.com/nocobase/nocobase/pull/6863)) bởi @mytharcher
- **[Khối: Bảng hành động]**

  - Đọc tên cơ sở đường dẫn từ máy quét để thích ứng với môi trường desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) bởi @sheldon66
  - Màu của Bảng hành động không chính xác trong chế độ tối ([#6842](https://github.com/nocobase/nocobase/pull/6842)) bởi @zhangzhonghe
- **[Tích hợp AI]** Nội dung không được hiển thị khi chuyển đổi giữa các trang cấu hình dịch vụ LLM và cấu hình xác thực ([#6887](https://github.com/nocobase/nocobase/pull/6887)) bởi @2013xile
- **[Workflow: Nút thủ công]**

  - Sửa trường hợp kiểm thử do plugin bị xóa khỏi danh sách tích hợp sẵn ([#6895](https://github.com/nocobase/nocobase/pull/6895)) bởi @mytharcher
  - Sửa lỗi hiển thị khi hiển thị mục chưa xử lý ([#6879](https://github.com/nocobase/nocobase/pull/6879)) bởi @mytharcher
  - Sửa lỗi đếm sai số liệu thống kê trên các tác vụ ([#6783](https://github.com/nocobase/nocobase/pull/6783)) bởi @mytharcher
- **[Workflow]**

  - Sửa lỗi giới hạn ngăn xếp hoạt động không chính xác cho sự kiện collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) bởi @mytharcher
  - Sửa lỗi điều hướng quay lại không hoạt động khi mở trực tiếp liên kết popup trong trung tâm tác vụ ([#6853](https://github.com/nocobase/nocobase/pull/6853)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]**

  - Khối biểu đồ không hiển thị khi được thêm vào popup được kích hoạt từ các hành động cấp khối ([#6864](https://github.com/nocobase/nocobase/pull/6864)) bởi @2013xile
  - Sửa lỗi khi lọc các trường m2m lồng nhau ([#6855](https://github.com/nocobase/nocobase/pull/6855)) bởi @2013xile
- **[Hành động: Xuất bản ghi]**

  - cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất ([#6861](https://github.com/nocobase/nocobase/pull/6861)) bởi @katherinehhh
  - Đã sửa lỗi xuất giá trị rỗng trong các liên kết lồng nhau và url tệp đính kèm ([#6845](https://github.com/nocobase/nocobase/pull/6845)) bởi @aaaaaajie
- **[Khối: mẫu]** Sau khi lưu dưới dạng mẫu kế thừa, lỗi khi mở popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) bởi @gchust
- **[Hành động: Sao chép bản ghi]** modal đóng khi nhấp chuột đầu tiên vào đầu vào khi chỉnh sửa dữ liệu đã sao chép ([#6848](https://github.com/nocobase/nocobase/pull/6848)) bởi @katherinehhh
- **[Workflow: bộ kiểm thử]** Sửa các trường hợp kiểm thử thất bại do plugin cài sẵn bắt buộc ([#6839](https://github.com/nocobase/nocobase/pull/6839)) bởi @mytharcher
- **[Workflow: Sự kiện sau hành động]** Sửa lỗi biến người dùng đã thực hiện không thể truy cập trong mẫu Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) bởi @mytharcher
- **[plugin-commercial]**

  - sửa lỗi nhật ký thương mại gửi đến crm và dịch văn bản bởi @jiannx
  - Sử dụng chuỗi nguyên mẫu để triển khai hàm withCommercial bởi @jiannx
- **[Hành động: Xuất bản ghi Pro]**

  - cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất pro bởi @katherinehhh
  - Sửa lỗi xuất văn bản dài. bởi @aaaaaajie
- **[Workflow: Luồng con]** Sửa lỗi trigger không xác định gây treo trang bởi @mytharcher
- **[In mẫu]**

  - Sửa lỗi không tìm thấy formatters. bởi @sheldon66
  - Sửa lỗi không tìm thấy formatter bởi @sheldon66
- **[Lưu trữ tệp: S3(Pro)]**

  - url truy cập hết hạn không hợp lệ bởi @jiannx
  - Thay đổi để sử dụng trường collection để định vị bộ lưu trữ bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi đếm sai số liệu thống kê trên các tác vụ bởi @mytharcher
  - Sửa phạm vi người được ủy quyền của người được ủy quyền và thêm vào những người được ủy quyền khác bởi @mytharcher
- **[Trình quản lý email]**

  - sửa lỗi ts bởi @jiannx
  - api danh sách hỗ trợ hợp nhất chủ đề bởi @jiannx
- **[Trình quản lý sao lưu]** Sửa lỗi kiểu trong bản build bởi @mytharcher
