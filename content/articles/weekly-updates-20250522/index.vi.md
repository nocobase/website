---
title: "Cập nhật hàng tuần NocoBase: Thêm hỗ trợ in hàng loạt trong in mẫu"
description: "Các cập nhật trong tuần này bao gồm: trường văn bản một dòng hỗ trợ lọc nhiều từ khóa, thêm hỗ trợ in hàng loạt trong in mẫu, và nhiều hơn nữa."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Ngày phát hành: 2025-05-18*

#### 🚀 Cải tiến

- **[Workflow]** Thêm tất cả các khóa ngôn ngữ en-US bị thiếu ([#6885](https://github.com/nocobase/nocobase/pull/6885)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[database]** Xử lý các ô chuỗi rỗng trong quá trình nhập trường để ngăn lỗi ([#6880](https://github.com/nocobase/nocobase/pull/6880)) bởi @aaaaaajie
- **[client]**

  - Bảng chọn bản ghi liên kết không lọc các bản ghi đã được liên kết ([#6874](https://github.com/nocobase/nocobase/pull/6874)) bởi @katherinehhh
  - Dữ liệu liên kết không được gửi khi hiển thị các trường liên kết trong subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) bởi @katherinehhh
  - Các trường sắp xếp kéo thả không hiển thị đúng các tùy chọn khả dụng ([#6875](https://github.com/nocobase/nocobase/pull/6875)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi giới hạn ngăn xếp hoạt động không chính xác cho sự kiện collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) bởi @mytharcher
- **[Block: Action panel]** Đọc route basename từ scanner để thích ứng với môi trường desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) bởi @sheldon66
- **[Workflow: Manual node]** Sửa lỗi hiển thị khi hiển thị mục chưa xử lý ([#6879](https://github.com/nocobase/nocobase/pull/6879)) bởi @mytharcher
- **[Workflow: Approval]** Sửa phạm vi người được ủy quyền của delegate và thêm vào những người được ủy quyền khác bởi @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Ngày phát hành: 2025-05-20*

#### 🐛 Sửa lỗi

- **[client]**
  - Trang không được chuyển hướng chính xác sau khi xóa mục cuối cùng ([#6892](https://github.com/nocobase/nocobase/pull/6892)) bởi @katherinehhh
  - Thành phần cascade trong modal không tải dữ liệu liên kết ban đầu ([#6886](https://github.com/nocobase/nocobase/pull/6886)) bởi @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Ngày phát hành: 2025-05-19*

#### 🎉 Tính năng mới

- **[client]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc ([#6685](https://github.com/nocobase/nocobase/pull/6685)) bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Multi-keyword filter]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Template print]** Thêm hỗ trợ in hàng loạt trong in mẫu. bởi @sheldon66

#### 🚀 Cải tiến

- **[Workflow]** Thêm tất cả các khóa ngôn ngữ en-US bị thiếu ([#6885](https://github.com/nocobase/nocobase/pull/6885)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Thành phần cascade trong modal không tải dữ liệu liên kết ban đầu ([#6886](https://github.com/nocobase/nocobase/pull/6886)) bởi @katherinehhh
  - Dữ liệu liên kết không được gửi khi hiển thị các trường liên kết trong subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) bởi @katherinehhh
  - Các trường sắp xếp kéo thả không hiển thị đúng các tùy chọn khả dụng ([#6875](https://github.com/nocobase/nocobase/pull/6875)) bởi @katherinehhh
  - Thiếu biến biểu mẫu hiện tại trong phạm vi dữ liệu của bảng chọn dữ liệu ([#6882](https://github.com/nocobase/nocobase/pull/6882)) bởi @katherinehhh
  - Bảng chọn bản ghi liên kết không lọc các bản ghi đã được liên kết ([#6874](https://github.com/nocobase/nocobase/pull/6874)) bởi @katherinehhh
- **[database]** Xử lý các ô chuỗi rỗng trong quá trình nhập trường để ngăn lỗi ([#6880](https://github.com/nocobase/nocobase/pull/6880)) bởi @aaaaaajie
- **[Workflow: Manual node]** Sửa lỗi hiển thị khi hiển thị mục chưa xử lý ([#6879](https://github.com/nocobase/nocobase/pull/6879)) bởi @mytharcher
- **[File manager]** Sửa kiểu dữ liệu ([#6873](https://github.com/nocobase/nocobase/pull/6873)) bởi @mytharcher
- **[Block: Action panel]** Đọc route basename từ scanner để thích ứng với môi trường desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) bởi @sheldon66
- **[AI integration]** Nội dung không được hiển thị khi chuyển đổi giữa các trang cấu hình dịch vụ LLM và cấu hình xác thực ([#6887](https://github.com/nocobase/nocobase/pull/6887)) bởi @2013xile
- **[Workflow]** Sửa lỗi giới hạn ngăn xếp hoạt động không chính xác cho sự kiện collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) bởi @mytharcher
- **[Workflow: Approval]** Sửa phạm vi người được ủy quyền của delegate và thêm vào những người được ủy quyền khác bởi @mytharcher
- **[Backup manager]** Sửa lỗi kiểu dữ liệu trong bản build bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Ngày phát hành: 2025-05-21*

#### 🎉 Tính năng mới

- **[client]**

  - Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc ([#6685](https://github.com/nocobase/nocobase/pull/6685)) bởi @zhangzhonghe
    Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
  - Quy tắc liên kết hành động hỗ trợ biến 'biểu mẫu hiện tại' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) bởi @katherinehhh
- **[build]** Hỗ trợ ủy quyền thương mại ([#6554](https://github.com/nocobase/nocobase/pull/6554)) bởi @jiannx
- **[undefined]** Thêm nhật ký của plugin nhập bởi @aaaaaajie
- **[Action: Import records]** Thêm nhật ký của plugin nhập ([#6841](https://github.com/nocobase/nocobase/pull/6841)) bởi @aaaaaajie
- **[plugin-commercial]** Hỗ trợ thương mại bởi @jiannx
- **[Multi-keyword filter]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Template print]**

  - Thêm hỗ trợ in hàng loạt trong in mẫu. bởi @sheldon66
  - Thêm hỗ trợ in hàng loạt trong in mẫu. bởi @sheldon66

#### 🚀 Cải tiến

- **[undefined]** Xây dựng hình ảnh docker đầy đủ ([#6898](https://github.com/nocobase/nocobase/pull/6898)) bởi @chenos
- **[client]**

  - Tối ưu hóa vấn đề trang ngày càng chậm khi sử dụng ([#6888](https://github.com/nocobase/nocobase/pull/6888)) bởi @zhangzhonghe
  - Thêm nhiều cài đặt kích thước tích hợp sẵn cho hình ảnh trạng thái đọc ([#6868](https://github.com/nocobase/nocobase/pull/6868)) bởi @katherinehhh
- **[Workflow]**

  - Thêm tất cả các khóa ngôn ngữ en-US bị thiếu ([#6885](https://github.com/nocobase/nocobase/pull/6885)) bởi @mytharcher
  - Cho phép sửa đổi nhiều hơn một bản nháp ([#6851](https://github.com/nocobase/nocobase/pull/6851)) bởi @mytharcher
- **[Collection field: Attachment(URL)]** Thêm nhiều kích thước tích hợp sẵn hơn vào trường URL tệp đính kèm cho trạng thái đọc ([#6871](https://github.com/nocobase/nocobase/pull/6871)) bởi @katherinehhh
- **[Email manager]**

  - Sửa lỗi đồng bộ và các vấn đề khó sử dụng khác bởi @jiannx
  - Thêm quản lý bản nháp, hỗ trợ xem email của cấp dưới bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Quy tắc liên kết vô hiệu hóa không hoạt động cho nút hành động ([#6896](https://github.com/nocobase/nocobase/pull/6896)) bởi @katherinehhh
  - Trang không được chuyển hướng chính xác sau khi xóa mục cuối cùng ([#6892](https://github.com/nocobase/nocobase/pull/6892)) bởi @katherinehhh
  - Thành phần cascade trong modal không tải dữ liệu liên kết ban đầu ([#6886](https://github.com/nocobase/nocobase/pull/6886)) bởi @katherinehhh
  - Bảng chọn bản ghi liên kết không lọc các bản ghi đã được liên kết ([#6874](https://github.com/nocobase/nocobase/pull/6874)) bởi @katherinehhh
  - Dữ liệu liên kết không được gửi khi hiển thị các trường liên kết trong subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) bởi @katherinehhh
  - Thiếu biến biểu mẫu hiện tại trong phạm vi dữ liệu của bảng chọn dữ liệu ([#6882](https://github.com/nocobase/nocobase/pull/6882)) bởi @katherinehhh
  - Các trường sắp xếp kéo thả không hiển thị đúng các tùy chọn khả dụng ([#6875](https://github.com/nocobase/nocobase/pull/6875)) bởi @katherinehhh
  - Xóa giá trị bên phải khi toán tử thay đổi trong quy tắc liên kết ([#6862](https://github.com/nocobase/nocobase/pull/6862)) bởi @katherinehhh
  - Thiếu toán tử khi chuyển đổi trong quy tắc liên kết ([#6857](https://github.com/nocobase/nocobase/pull/6857)) bởi @katherinehhh
  - Vấn đề liên kết nút trong khối chi tiết ([#6867](https://github.com/nocobase/nocobase/pull/6867)) bởi @katherinehhh
  - Đánh giá không chính xác các toán tử cho biến ngày trong điều kiện liên kết ([#6825](https://github.com/nocobase/nocobase/pull/6825)) bởi @katherinehhh
  - Các trường ẩn vẫn được hiển thị ([#6844](https://github.com/nocobase/nocobase/pull/6844)) bởi @zhangzhonghe
  - Phân tích biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - Phân tích biến không tương thích với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh
  - Cải thiện kiểu thành phần giá trị quy tắc liên kết ([#6836](https://github.com/nocobase/nocobase/pull/6836)) bởi @katherinehhh
- **[database]** Xử lý các ô chuỗi rỗng trong quá trình nhập trường để ngăn lỗi ([#6880](https://github.com/nocobase/nocobase/pull/6880)) bởi @aaaaaajie
- **[build]** Sửa lỗi runtime client trong plugin-workflow-javascript, lỗi process undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) bởi @jiannx
- **[File manager]**

  - Sửa URL xem trước trên các tệp không phải hình ảnh ([#6889](https://github.com/nocobase/nocobase/pull/6889)) bởi @mytharcher
  - Sửa kiểu dữ liệu ([#6873](https://github.com/nocobase/nocobase/pull/6873)) bởi @mytharcher
  - Sửa lỗi tạo bản ghi tệp không có quyền khóa ngoại ([#6863](https://github.com/nocobase/nocobase/pull/6863)) bởi @mytharcher
- **[Block: Action panel]**

  - Đọc route basename từ scanner để thích ứng với môi trường desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) bởi @sheldon66
  - Màu sắc của Action panel không chính xác trong chế độ tối ([#6842](https://github.com/nocobase/nocobase/pull/6842)) bởi @zhangzhonghe
- **[AI integration]** Nội dung không được hiển thị khi chuyển đổi giữa các trang cấu hình dịch vụ LLM và cấu hình xác thực ([#6887](https://github.com/nocobase/nocobase/pull/6887)) bởi @2013xile
- **[Workflow: Manual node]**

  - Sửa trường hợp kiểm thử do plugin bị xóa khỏi danh sách tích hợp sẵn ([#6895](https://github.com/nocobase/nocobase/pull/6895)) bởi @mytharcher
  - Sửa lỗi hiển thị khi hiển thị mục chưa xử lý ([#6879](https://github.com/nocobase/nocobase/pull/6879)) bởi @mytharcher
  - Sửa lỗi đếm số liệu thống kê sai trên các tác vụ ([#6783](https://github.com/nocobase/nocobase/pull/6783)) bởi @mytharcher
- **[Workflow]**

  - Sửa lỗi giới hạn ngăn xếp hoạt động không chính xác cho sự kiện collection ([#6876](https://github.com/nocobase/nocobase/pull/6876)) bởi @mytharcher
  - Sửa lỗi điều hướng quay lại không hoạt động khi mở trực tiếp liên kết popup trong trung tâm tác vụ ([#6853](https://github.com/nocobase/nocobase/pull/6853)) bởi @mytharcher
- **[Data visualization]**

  - Các khối biểu đồ không hiển thị khi được thêm vào popup được kích hoạt từ các hành động cấp khối ([#6864](https://github.com/nocobase/nocobase/pull/6864)) bởi @2013xile
  - Sửa lỗi khi lọc các trường m2m lồng nhau ([#6855](https://github.com/nocobase/nocobase/pull/6855)) bởi @2013xile
- **[Action: Export records]**

  - Cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất ([#6861](https://github.com/nocobase/nocobase/pull/6861)) bởi @katherinehhh
  - Sửa lỗi xuất giá trị rỗng trong các liên kết lồng nhau và url tệp đính kèm ([#6845](https://github.com/nocobase/nocobase/pull/6845)) bởi @aaaaaajie
- **[Block: template]** Sau khi lưu dưới dạng mẫu kế thừa, lỗi khi mở popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) bởi @gchust
- **[Action: Duplicate record]** Modal đóng khi nhấp vào đầu vào đầu tiên khi chỉnh sửa dữ liệu trùng lặp ([#6848](https://github.com/nocobase/nocobase/pull/6848)) bởi @katherinehhh
- **[Workflow: test kit]** Sửa các trường hợp kiểm thử thất bại do plugin cài đặt sẵn bắt buộc ([#6839](https://github.com/nocobase/nocobase/pull/6839)) bởi @mytharcher
- **[Workflow: Post-action event]** Sửa lỗi biến user acted không thể truy cập trong mẫu Hanldebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) bởi @mytharcher
- **[plugin-commercial]**

  - Sửa lỗi gửi nhật ký thương mại đến CRM và dịch văn bản bởi @jiannx
  - Sử dụng prototype chain để triển khai hàm withCommercial bởi @jiannx
- **[Action: Export records Pro]**

  - Cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất pro bởi @katherinehhh
  - Sửa lỗi xuất văn bản dài. bởi @aaaaaajie
- **[Workflow: Subflow]** Sửa lỗi undefined trigger gây treo trang bởi @mytharcher
- **[Template print]**

  - Sửa lỗi không tìm thấy formatters. bởi @sheldon66
  - Sửa lỗi không tìm thấy formatter bởi @sheldon66
- **[File storage: S3(Pro)]**

  - URL truy cập hết hạn không hợp lệ bởi @jiannx
  - Thay đổi để sử dụng trường collection để định vị storage bởi @mytharcher
- **[Workflow: Approval]**

  - Sửa lỗi đếm số liệu thống kê sai trên các tác vụ bởi @mytharcher
  - Sửa phạm vi người được ủy quyền của delegate và thêm vào những người được ủy quyền khác bởi @mytharcher
- **[Email manager]**

  - Sửa lỗi ts bởi @jiannx
  - API danh sách hỗ trợ hợp nhất chủ đề bởi @jiannx
- **[Backup manager]** Sửa lỗi kiểu dữ liệu trong bản build bởi @mytharcher
