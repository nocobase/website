---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ biến tổng hợp tùy chỉnh"
description: "Các cập nhật trong tuần này bao gồm: thêm hàng đợi sự kiện để xử lý tin nhắn trong hàng đợi và hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**Tuần này chúng tôi đã phát hành [NocoBase 1.8.0](https://www.nocobase.com/en/blog/nocobase-1-8-0), với xác thực được cải thiện, hỗ trợ các biến thống kê tùy chỉnh, nâng cấp quản lý email, và tối ưu hóa tương tác workflow và di động.**

**NocoBase hiện đang được cập nhật với ba nhánh: `main` , `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`：Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`：Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/en/blog/v1.8.1)

*Ngày phát hành: 2025-07-09*

#### 🐛 Sửa lỗi

- **[client]**

  - Trường checkbox hiển thị không chính xác trong bộ sưu tập trường liên kết trong biểu mẫu ([#7176](https://github.com/nocobase/nocobase/pull/7176)) bởi @zhangzhonghe
  - Sửa lỗi nhấp vào nút không mở được popup ([#7180](https://github.com/nocobase/nocobase/pull/7180)) bởi @zhangzhonghe
- **[Workflow: Node thủ công]** Sửa lỗi xảy ra khi sử dụng biến ([#7177](https://github.com/nocobase/nocobase/pull/7177)) bởi @mytharcher
- **[In mẫu]** thêm script migration cho trường rootDataType bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa lỗi nhánh đã phê duyệt không chạy khi không có người được chỉ định bởi @mytharcher

### [v1.7.20](https://www.nocobase.com/en/blog/v1.7.20)

*Ngày phát hành: 2025-07-07*

#### 🐛 Sửa lỗi

- **[client]**

  - Sau khi thay đổi trường, phạm vi dữ liệu phụ thuộc vào trường này sẽ tự động xóa các giá trị đã chọn ([#7161](https://github.com/nocobase/nocobase/pull/7161)) bởi @zhangzhonghe
  - Sửa lỗi cài đặt độ rộng cột bảng không hiệu quả ([#7158](https://github.com/nocobase/nocobase/pull/7158)) bởi @zhangzhonghe
  - Sửa lỗi biểu mẫu lọc trong popup nút Sao chép ([#7154](https://github.com/nocobase/nocobase/pull/7154)) bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi lưu mối quan hệ một-một trong trường cấu hình. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) bởi @aaaaaajie
- **[undefined]** Sửa e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) bởi @mytharcher
- **[Quản lý tệp]**

  - Sửa phát hiện mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) bởi @mytharcher
  - Sửa lỗi build do gói ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) bởi @mytharcher
- **[Biểu mẫu công khai]** sửa lỗi trường Chỉ ngày không chọn được ngày trong biểu mẫu công khai. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi cần vuốt trái nhiều lần để quay lại trang trước trên thiết bị di động ([#7165](https://github.com/nocobase/nocobase/pull/7165)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]** Vấn đề phân trang bảng ([#7151](https://github.com/nocobase/nocobase/pull/7151)) bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi các liên kết không được tải sau khi rút lại bởi @mytharcher
  - Xóa transaction của việc vá schema do timeout bởi @mytharcher
  - Sửa lỗi xảy ra khi phê duyệt bị xóa bởi @mytharcher
  - Sửa lỗi cập nhật liên kết khi gửi bởi @mytharcher

### [v1.7.19](https://www.nocobase.com/en/blog/v1.7.19)

*Ngày phát hành: 2025-07-03*

#### 🚀 Cải tiến

- **[database]** Hỗ trợ thêm tùy chọn pool từ env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) bởi @mytharcher
- **[Workflow]**

  - Cải thiện hiệu suất tải danh sách thực thi bằng cách loại trừ trường JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) bởi @mytharcher
  - Thêm API log cho kiểm thử node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) bởi @mytharcher
- **[Trình quản lý đa ứng dụng]** thêm hỗ trợ lọc cho quản lý đa ứng dụng ([#7124](https://github.com/nocobase/nocobase/pull/7124)) bởi @katherinehhh
- **[Workflow: Phê duyệt]** Thay đổi thời gian thành tuyệt đối trong dòng thời gian bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Cài đặt displayName trường trong view được kết nối không có tác dụng ([#7130](https://github.com/nocobase/nocobase/pull/7130)) bởi @aaaaaajie
  - Vấn đề kiểu màu nền trong bảng con trên khối chi tiết ([#7144](https://github.com/nocobase/nocobase/pull/7144)) bởi @katherinehhh
  - Cấu hình UI node thủ công Workflow: quy tắc liên kết không thể chọn biến Biểu mẫu hiện tại ([#7125](https://github.com/nocobase/nocobase/pull/7125)) bởi @zhangzhonghe
  - Giá trị mặc định của trường liên kết ghi đè dữ liệu hiện có trong bảng con ([#7120](https://github.com/nocobase/nocobase/pull/7120)) bởi @katherinehhh
  - markdown không phản ánh thay đổi theo thời gian thực khi tham chiếu biến $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) bởi @katherinehhh
  - Khả năng chịu lỗi cho các cài đặt dựa trên 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) bởi @mytharcher
- **[utils]** vấn đề lọc trên DateOnly hoặc Datetime (không có múi giờ) sử dụng biến Ngày chính xác ([#7113](https://github.com/nocobase/nocobase/pull/7113)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi xảy ra do import vòng tròn ([#7134](https://github.com/nocobase/nocobase/pull/7134)) bởi @mytharcher
- **[Chính sách mật khẩu]** Hỗ trợ khóa tài khoản người dùng vĩnh viễn bởi @2013xile
- **[Workflow: Luồng con]** Sửa lỗi trong chế độ cluster bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Xóa các trường không thể lọc khỏi bộ lọc bởi @mytharcher
  - Thêm cài đặt bố cục biểu mẫu bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/en/blog/v1.9.0-beta.1)

*Ngày phát hành: 2025-07-07*

#### 🎉 Tính năng mới

- **[server]** Thêm hàng đợi sự kiện để xử lý tin nhắn trong hàng đợi ([#6819](https://github.com/nocobase/nocobase/pull/6819)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Workflow]** Di chuyển các thành phần chung sang plugin cơ sở ([#7140](https://github.com/nocobase/nocobase/pull/7140)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sau khi thay đổi trường, phạm vi dữ liệu phụ thuộc vào trường này sẽ tự động xóa các giá trị đã chọn ([#7161](https://github.com/nocobase/nocobase/pull/7161)) bởi @zhangzhonghe
  - Sửa lỗi cài đặt độ rộng cột bảng không hiệu quả ([#7158](https://github.com/nocobase/nocobase/pull/7158)) bởi @zhangzhonghe
  - Sửa lỗi biểu mẫu lọc trong popup nút Sao chép ([#7154](https://github.com/nocobase/nocobase/pull/7154)) bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi lưu mối quan hệ một-một trong trường cấu hình. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) bởi @aaaaaajie
- **[undefined]** Sửa e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) bởi @mytharcher
- **[Lịch]** đặt ngày bắt đầu tuần mặc định là 'thứ hai' trong khối lịch ([#7171](https://github.com/nocobase/nocobase/pull/7171)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi cần vuốt trái nhiều lần để quay lại trang trước trên thiết bị di động ([#7165](https://github.com/nocobase/nocobase/pull/7165)) bởi @zhangzhonghe
- **[Quản lý tệp]**

  - Sửa lỗi build do gói ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) bởi @mytharcher
  - Sửa phát hiện mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) bởi @mytharcher
- **[Workflow: Node thủ công]** Sửa lỗi import biến không chính xác ([#7156](https://github.com/nocobase/nocobase/pull/7156)) bởi @mytharcher
- **[Biểu mẫu công khai]** sửa lỗi trường Chỉ ngày không chọn được ngày trong biểu mẫu công khai. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Xóa transaction của việc vá schema do timeout bởi @mytharcher
  - Sửa lỗi các liên kết không được tải sau khi rút lại bởi @mytharcher
  - Sửa lỗi xảy ra khi phê duyệt bị xóa bởi @mytharcher
  - Sửa lỗi cập nhật liên kết khi gửi bởi @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/en/blog/v1.8.0-beta.13)

*Ngày phát hành: 2025-07-03*

#### 🎉 Tính năng mới

- **[client]**

  - Hỗ trợ trường BIT trong SQL Server cho các nguồn dữ liệu bên ngoài. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) bởi @aaaaaajie
  - Hỗ trợ các biến tổng hợp tùy chỉnh ([#6916](https://github.com/nocobase/nocobase/pull/6916)) bởi @zhangzhonghe
    Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** hỗ trợ ủy quyền thương mại ([#6554](https://github.com/nocobase/nocobase/pull/6554)) bởi @jiannx
- **[Trình quản lý nguồn dữ liệu]** ✨ Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài ([#6979](https://github.com/nocobase/nocobase/pull/6979)) bởi @aaaaaajie
- **[Cài đặt giấy phép]** thêm cài đặt giấy phép và xác thực giấy phép trước khi tải plugin ([#7026](https://github.com/nocobase/nocobase/pull/7026)) bởi @jiannx
- **[Xác thực]** Hỗ trợ chức năng "Quên mật khẩu" ([#6616](https://github.com/nocobase/nocobase/pull/6616)) bởi @zhangzhonghe
  Tham khảo: [Quên mật khẩu](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Hành động: Cập nhật hàng loạt]** Hỗ trợ làm mới dữ liệu trong các khối dữ liệu khác sau khi cập nhật dữ liệu trong một khối ([#6591](https://github.com/nocobase/nocobase/pull/6591)) bởi @zhangzhonghe
- **[Nguồn dữ liệu: SQL Server bên ngoài]**

  - Đã thêm hỗ trợ cho trường BIT SQL Server trong các nguồn dữ liệu bên ngoài bởi @aaaaaajie
  - Hỗ trợ tải theo yêu cầu các bộ sưu tập từ nguồn dữ liệu bên ngoài bởi @aaaaaajie
- **[Biến tùy chỉnh]** Hỗ trợ các biến tổng hợp tùy chỉnh bởi @zhangzhonghe
  Tham khảo: [Biến tùy chỉnh](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Trình quản lý email]**

  - hỗ trợ xóa email bởi @jiannx
  - hỗ trợ cài đặt khoảng thời gian đồng bộ email bởi @jiannx
  - hỗ trợ gửi hàng loạt bởi @jiannx

#### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ điền trường nhập liệu qua quét mã QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) bởi @katherinehhh
  - Xác định xem có hiển thị các thành phần di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6611](https://github.com/nocobase/nocobase/pull/6611)) bởi @zhangzhonghe
  - hỗ trợ bản địa hóa cho nội dung khối Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) bởi @katherinehhh
  - Xác định xem có hiển thị bố cục di động dựa trên loại thiết bị thay vì chiều rộng trang ([#6600](https://github.com/nocobase/nocobase/pull/6600)) bởi @zhangzhonghe
- **[Trình quản lý tác vụ bất đồng bộ]** Cải thiện hiệu suất tạo tác vụ trong quá trình xuất ([#7078](https://github.com/nocobase/nocobase/pull/7078)) bởi @aaaaaajie
- **[Di động]** Điều chỉnh kiểu cửa sổ bật lên thông báo cho thiết bị di động ([#6557](https://github.com/nocobase/nocobase/pull/6557)) bởi @zhangzhonghe
- **[Trình quản lý email]**

  - hỗ trợ trả lời và chuyển tiếp email riêng biệt trong cùng một chủ đề bởi @jiannx
  - triển khai schema sau đó gửi email và hỗ trợ ai bởi @jiannx
  - hỗ trợ giá trị gửi mặc định trong popup, hỗ trợ tìm kiếm mờ cho người nhận và sửa lỗi bởi @jiannx
  - hoàn thiện chức năng gửi hàng loạt bởi @jiannx
  - cải thiện chức năng và sửa lỗi bởi @jiannx

#### 🐛 Sửa lỗi

- **[cli]**

  - Điều chỉnh bản sao giấy phép khi cài đặt plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) bởi @jiannx
  - Lỗi undefined trong tải plugin ([#7143](https://github.com/nocobase/nocobase/pull/7143)) bởi @jiannx
- **[client]**

  - Sau khi xóa giá trị huy hiệu, giao diện không được cập nhật ([#7055](https://github.com/nocobase/nocobase/pull/7055)) bởi @zhangzhonghe
  - Lỗi khi nhấp vào nút lọc ([#7100](https://github.com/nocobase/nocobase/pull/7100)) bởi @zhangzhonghe
  - Sửa lỗi dữ liệu người dùng hiện tại trống ([#7016](https://github.com/nocobase/nocobase/pull/7016)) bởi @zhangzhonghe
  - Nội dung hiển thị không chính xác trên các trang được mở qua liên kết popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) bởi @zhangzhonghe
  - Chuyển các props khác cho thành phần Variable.Input. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) bởi @sheldon66
  - Hành động lưu dưới dạng mẫu sẽ thất bại nếu chứa trường liên kết ([#6543](https://github.com/nocobase/nocobase/pull/6543)) bởi @gchust
- **[database]** làm cho toán tử eq cho các trường chuỗi tương thích với kiểu số ([#7062](https://github.com/nocobase/nocobase/pull/7062)) bởi @chenos
- **[build]** sửa lỗi runtime client trong plugin-workflow-javascript, lỗi process undefine ([#6859](https://github.com/nocobase/nocobase/pull/6859)) bởi @jiannx
- **[Trực quan hóa dữ liệu]** Vấn đề phân trang bảng ([#7151](https://github.com/nocobase/nocobase/pull/7151)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi khi kết hợp tải nguồn dữ liệu theo yêu cầu và cấu hình tiền tố bảng gây ra lỗi “ConnectionManager.getConnection was called after the connection manager was closed”. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) bởi @aaaaaajie
- **[plugin-service-platform]** điều chỉnh văn bản giấy phép bởi @jiannx
- **[Biến tùy chỉnh]** Sau khi xóa giá trị huy hiệu, giao diện không được cập nhật bởi @zhangzhonghe
- **[Trình quản lý email]**

  - tệp đính kèm không hiển thị bởi @jiannx
  - lỗi xóa email bởi @jiannx
  - xóa email thất bại bởi @jiannx
  - cửa sổ bật lên cài đặt không hiển thị bởi @jiannx
  - ngăn trả lời không hiển thị bởi @jiannx
  - tìm kiếm mờ người nhận hỗ trợ các trường liên kết bởi @jiannx
  - thêm trường "id" vào mailmessagelabelsMailmessages bởi @jiannx
  - tìm kiếm mờ thư để tạo bộ lọc duy nhất bởi @jiannx
  - nhiều khóa chính cho bảng "mailmessagelabels_mailmessages" bởi @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/en/blog/v1.8.0-beta.12)

*Ngày phát hành: 2025-07-03*

#### 🚀 Cải tiến

- **[database]** Hỗ trợ thêm tùy chọn pool từ env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) bởi @mytharcher
- **[Workflow]**

  - Cải thiện hiệu suất tải danh sách thực thi bằng cách loại trừ trường JSON ([#7138](https://github.com/nocobase/nocobase/pull/7138)) bởi @mytharcher
  - Thêm API log cho kiểm thử node ([#7129](https://github.com/nocobase/nocobase/pull/7129)) bởi @mytharcher
- **[Trình quản lý đa ứng dụng]** thêm hỗ trợ lọc cho quản lý đa ứng dụng ([#7124](https://github.com/nocobase/nocobase/pull/7124)) bởi @katherinehhh
- **[Workflow: Phê duyệt]** Thay đổi thời gian thành tuyệt đối trong dòng thời gian bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - markdown không phản ánh thay đổi theo thời gian thực khi tham chiếu biến $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) bởi @katherinehhh
  - Vấn đề kiểu màu nền trong bảng con trên khối chi tiết ([#7144](https://github.com/nocobase/nocobase/pull/7144)) bởi @katherinehhh
  - Cấu hình UI node thủ công Workflow: quy tắc liên kết không thể chọn biến Biểu mẫu hiện tại ([#7125](https://github.com/nocobase/nocobase/pull/7125)) bởi @zhangzhonghe
  - Cài đặt displayName trường trong view được kết nối không có tác dụng ([#7130](https://github.com/nocobase/nocobase/pull/7130)) bởi @aaaaaajie
  - Giá trị mặc định của trường liên kết ghi đè dữ liệu hiện có trong bảng con ([#7120](https://github.com/nocobase/nocobase/pull/7120)) bởi @katherinehhh
  - Khả năng chịu lỗi cho các cài đặt dựa trên 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) bởi @mytharcher
- **[utils]** vấn đề lọc trên DateOnly hoặc Datetime (không có múi giờ) sử dụng biến Ngày chính xác ([#7113](https://github.com/nocobase/nocobase/pull/7113)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi xảy ra do import vòng tròn ([#7134](https://github.com/nocobase/nocobase/pull/7134)) bởi @mytharcher
- **[Chính sách mật khẩu]** Hỗ trợ khóa tài khoản người dùng vĩnh viễn bởi @2013xile
- **[Workflow: Luồng con]** Sửa lỗi trong chế độ cluster bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Xóa các trường không thể lọc khỏi bộ lọc bởi @mytharcher
  - Thêm cài đặt bố cục biểu mẫu bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/en/blog/v1.9.0-alpha.1)

*Ngày phát hành: 2025-07-07*

#### 🎉 Tính năng mới

- **[server]** Thêm hàng đợi sự kiện để xử lý tin nhắn trong hàng đợi ([#6819](https://github.com/nocobase/nocobase/pull/6819)) bởi @mytharcher

#### 🚀 Cải tiến

- **[Workflow]** Di chuyển các thành phần chung sang plugin cơ sở ([#7140](https://github.com/nocobase/nocobase/pull/7140)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sau khi thay đổi trường, phạm vi dữ liệu phụ thuộc vào trường này sẽ tự động xóa các giá trị đã chọn ([#7161](https://github.com/nocobase/nocobase/pull/7161)) bởi @zhangzhonghe
  - Sửa lỗi cài đặt độ rộng cột bảng không hiệu quả ([#7158](https://github.com/nocobase/nocobase/pull/7158)) bởi @zhangzhonghe
  - Sửa lỗi xảy ra khi lưu mối quan hệ một-một trong trường cấu hình. ([#7153](https://github.com/nocobase/nocobase/pull/7153)) bởi @aaaaaajie
  - Sửa lỗi biểu mẫu lọc trong popup nút Sao chép ([#7154](https://github.com/nocobase/nocobase/pull/7154)) bởi @zhangzhonghe
- **[undefined]** Sửa e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) bởi @mytharcher
- **[Quản lý tệp]**

  - Sửa lỗi build do gói ESM ([#7169](https://github.com/nocobase/nocobase/pull/7169)) bởi @mytharcher
  - Sửa phát hiện mimetype ([#7164](https://github.com/nocobase/nocobase/pull/7164)) bởi @mytharcher
- **[Biểu mẫu công khai]** sửa lỗi trường Chỉ ngày không chọn được ngày trong biểu mẫu công khai. ([#7168](https://github.com/nocobase/nocobase/pull/7168)) bởi @katherinehhh
- **[Lịch]** đặt ngày bắt đầu tuần mặc định là 'thứ hai' trong khối lịch ([#7171](https://github.com/nocobase/nocobase/pull/7171)) bởi @katherinehhh
- **[Workflow: Node thủ công]** Sửa lỗi import biến không chính xác ([#7156](https://github.com/nocobase/nocobase/pull/7156)) bởi @mytharcher
- **[Workflow]** Sửa lỗi cần vuốt trái nhiều lần để quay lại trang trước trên thiết bị di động ([#7165](https://github.com/nocobase/nocobase/pull/7165)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]**

  - Sửa lỗi cập nhật liên kết khi gửi bởi @mytharcher
  - Sửa lỗi xảy ra khi phê duyệt bị xóa bởi @mytharcher
  - Sửa lỗi các liên kết không được tải sau khi rút lại bởi @mytharcher
- **[Trình quản lý email]**

  - sau khi chọn hàng, đặt "Đã đọc" và "Chưa đọc" bởi @jiannx
  - nội dung thư phụ không thể được lọc bởi @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/en/blog/v1.8.0-alpha.14)

*Ngày phát hành: 2025-07-04*

#### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]** Xóa transaction của việc vá schema do timeout bởi @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/en/blog/v1.8.0-alpha.13)

*Ngày phát hành: 2025-07-03*

#### 🚀 Cải tiến

- **[Trình quản lý email]** hỗ trợ trả lời và chuyển tiếp email riêng biệt trong cùng một chủ đề bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề kiểu màu nền trong bảng con trên khối chi tiết ([#7144](https://github.com/nocobase/nocobase/pull/7144)) bởi @katherinehhh
  - markdown không phản ánh thay đổi theo thời gian thực khi tham chiếu biến $nForm ([#7147](https://github.com/nocobase/nocobase/pull/7147)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Vấn đề phân trang bảng ([#7151](https://github.com/nocobase/nocobase/pull/7151)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi khi kết hợp tải nguồn dữ liệu theo yêu cầu và cấu hình tiền tố bảng gây ra lỗi “ConnectionManager.getConnection was called after the connection manager was closed”. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) bởi @aaaaaajie
