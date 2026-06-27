---
title: "Cập nhật hàng tuần của NocoBase: Thêm quản lý danh mục quy trình làm việc"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ phép nhân và chia trong cấu hình chuyển đổi biểu đồ, cải thiện chức năng nhập, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**Tuần này chúng tôi đã phát hành [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0), giới thiệu tính năng quản lý quyền nâng cao, hiệu suất hệ thống được tối ưu hóa và các plugin mã nguồn mở để cải thiện toàn diện chức năng và trải nghiệm người dùng.**

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có các vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*Ngày phát hành: 2025-05-29*

#### 🎉 Tính năng mới

- **[undefined]**
  - Thêm hỗ trợ Gitpod để khởi động môi trường phát triển chỉ với một cú nhấp chuột ([#6922](https://github.com/nocobase/nocobase/pull/6922)) bởi @kerwin612

#### 🚀 Cải tiến

- **[client]**
  - Tối ưu hóa tương tác phím Tab trên biểu mẫu ([#6942](https://github.com/nocobase/nocobase/pull/6942)) bởi @kerwin612
  - hỗ trợ cấu hình liên kết menu có mở trong cửa sổ mới hay không ([#6918](https://github.com/nocobase/nocobase/pull/6918)) bởi @katherinehhh
  - xác thực các trường bắt buộc trước khi hiển thị hộp thoại xác nhận ([#6931](https://github.com/nocobase/nocobase/pull/6931)) bởi @katherinehhh

#### 🐛 Sửa lỗi

- **[client]**

  - phân trang dữ liệu dropdown của trường liên kết với kích thước trang là 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) bởi @katherinehhh
  - Vị trí tô sáng không chính xác khi kéo các hàng trong bảng ([#6952](https://github.com/nocobase/nocobase/pull/6952)) bởi @chenos
  - Thay đổi kích thước khối bằng cách kéo không hoạt động ([#6944](https://github.com/nocobase/nocobase/pull/6944)) bởi @chenos
  - i18n của thành phần gán trường không hoạt động ([#6945](https://github.com/nocobase/nocobase/pull/6945)) bởi @katherinehhh
  - Không thể sao chép chính xác thông báo lỗi ([#6908](https://github.com/nocobase/nocobase/pull/6908)) bởi @kerwin612
- **[Trường Collection: Markdown(Vditor)]** vấn đề chiều rộng thành phần trường markdown-vditor sau khi phóng to và thu nhỏ ([#6946](https://github.com/nocobase/nocobase/pull/6946)) bởi @katherinehhh
- **[Workflow: Phê duyệt]** Sửa nội dung bản dịch bởi @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*Ngày phát hành: 2025-05-29*

#### 🚀 Cải tiến

- **[Auth: OIDC]** Bỏ qua phân biệt chữ hoa chữ thường khi khớp người dùng qua email bởi @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*Ngày phát hành: 2025-05-30*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa thứ tự trường trong danh sách thả xuống của nút bộ lọc ([#6962](https://github.com/nocobase/nocobase/pull/6962)) bởi @zhangzhonghe
  - Biến liên kết trong bảng con lấy dữ liệu liên kết khi xóa thay vì sử dụng giá trị biểu mẫu ([#6963](https://github.com/nocobase/nocobase/pull/6963)) bởi @katherinehhh
  - Trường liên kết trong bảng con kích hoạt yêu cầu khi biến lặp có giá trị rỗng ([#6969](https://github.com/nocobase/nocobase/pull/6969)) bởi @katherinehhh
- **[Trình chỉnh sửa chủ đề]** Ẩn tùy chọn chuyển đổi chủ đề và sửa kiểu cửa sổ bật lên ([#6964](https://github.com/nocobase/nocobase/pull/6964)) bởi @zhangzhonghe
- **[Workflow: Phê duyệt]** Sửa lỗi khi phạm vi người được chỉ định truy vấn với điều kiện liên kết bởi @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*Ngày phát hành: 2025-06-03*

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi các khối được tạo trong cửa sổ bật lên có collection không chính xác ([#6961](https://github.com/nocobase/nocobase/pull/6961)) bởi @zhangzhonghe
  - Sửa lỗi giá trị mặc định của biểu mẫu bộ lọc không hợp lệ trong các trang con ([#6960](https://github.com/nocobase/nocobase/pull/6960)) bởi @zhangzhonghe
  - không thể mở rộng các trường collection liên kết từ nguồn dữ liệu bên ngoài trong phạm vi bảng dữ liệu vai trò ([#6958](https://github.com/nocobase/nocobase/pull/6958)) bởi @katherinehhh
  - Sửa lỗi tùy chọn 'Dấu ba chấm cho nội dung tràn' không hiệu quả đối với các trường quan hệ ([#6967](https://github.com/nocobase/nocobase/pull/6967)) bởi @zhangzhonghe
  - Sửa lỗi giá trị trường văn bản một dòng được hiển thị dưới dạng mảng trong chế độ đọc dễ dàng ([#6968](https://github.com/nocobase/nocobase/pull/6968)) bởi @zhangzhonghe
- **[Xác thực]** Vấn đề hiệu suất do dọn dẹp token hết hạn ([#6981](https://github.com/nocobase/nocobase/pull/6981)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa cấu hình thời gian chờ Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) bởi @mytharcher
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi thiếu trình khởi tạo cho workbench bởi @mytharcher
- **[Auth: OIDC]** Văn bản nút đăng nhập không được bản địa hóa bởi @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*Ngày phát hành: 2025-06-04*

#### 🎉 Tính năng mới

- **[Trực quan hóa dữ liệu]** Hỗ trợ phép nhân và phép chia trong cấu hình chuyển đổi biểu đồ ([#6788](https://github.com/nocobase/nocobase/pull/6788)) bởi @bugstark

#### 🚀 Cải tiến

- **[Biểu mẫu công khai]** Hỗ trợ sử dụng tham số URL làm biến ([#6973](https://github.com/nocobase/nocobase/pull/6973)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
- **[Workflow: Nút thủ công]** Sửa lỗi trình khởi tạo báo lỗi khi sử dụng nguồn dữ liệu bên ngoài ([#6983](https://github.com/nocobase/nocobase/pull/6983)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*Ngày phát hành: 2025-06-04*

#### 🎉 Tính năng mới

- **[undefined]** Thêm plugin "Nút sao chép đầu vào" mới cho trường văn bản một dòng ([#6894](https://github.com/nocobase/nocobase/pull/6894)) bởi @kerwin612
- **[Workflow]** Thêm quản lý danh mục workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) bởi @mytharcher

#### 🚀 Cải tiến

- **[client]** hỗ trợ cấu hình liên kết menu có mở trong cửa sổ mới hay không ([#6918](https://github.com/nocobase/nocobase/pull/6918)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** Tối ưu hóa hiệu suất nhập xlsx bởi @aaaaaajie
- **[Auth: OIDC]** Bỏ qua phân biệt chữ hoa chữ thường khi khớp người dùng qua email bởi @2013xile
- **[Workflow: Phê duyệt]** Nhập các collection workflow từ plugin workflow để tránh trùng lặp bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Các trường và hành động chỉ có hiệu lực sau khi làm mới trang ([#6977](https://github.com/nocobase/nocobase/pull/6977)) bởi @zhangzhonghe
  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
  - Sửa lỗi các khối được tạo trong cửa sổ bật lên có collection không chính xác ([#6961](https://github.com/nocobase/nocobase/pull/6961)) bởi @zhangzhonghe
  - Không thể chọn biến khi đặt giá trị mặc định cho trường liên kết ([#6974](https://github.com/nocobase/nocobase/pull/6974)) bởi @zhangzhonghe
  - Sửa lỗi giá trị trường văn bản một dòng được hiển thị dưới dạng mảng trong chế độ đọc dễ dàng ([#6968](https://github.com/nocobase/nocobase/pull/6968)) bởi @zhangzhonghe
  - không thể mở rộng các trường collection liên kết từ nguồn dữ liệu bên ngoài trong phạm vi bảng dữ liệu vai trò ([#6958](https://github.com/nocobase/nocobase/pull/6958)) bởi @katherinehhh
  - Sửa lỗi tùy chọn 'Dấu ba chấm cho nội dung tràn' không hiệu quả đối với các trường quan hệ ([#6967](https://github.com/nocobase/nocobase/pull/6967)) bởi @zhangzhonghe
  - Sửa lỗi giá trị mặc định của biểu mẫu bộ lọc không hợp lệ trong các trang con ([#6960](https://github.com/nocobase/nocobase/pull/6960)) bởi @zhangzhonghe
  - vấn đề cửa sổ bật lên của trường liên kết chọn đóng lại khi nhập lần đầu khi thêm dữ liệu mới ([#6971](https://github.com/nocobase/nocobase/pull/6971)) bởi @katherinehhh
  - Trường liên kết trong bảng con kích hoạt yêu cầu khi biến lặp có giá trị rỗng ([#6969](https://github.com/nocobase/nocobase/pull/6969)) bởi @katherinehhh
  - Sửa thứ tự trường trong danh sách thả xuống của nút bộ lọc ([#6962](https://github.com/nocobase/nocobase/pull/6962)) bởi @zhangzhonghe
  - dữ liệu quy tắc xác thực biểu mẫu bị mất khi thu gọn bảng điều khiển ([#6949](https://github.com/nocobase/nocobase/pull/6949)) bởi @katherinehhh
  - các giá trị đã chọn bị đặt lại khi cập nhật tùy chọn thả xuống đa lựa chọn thông qua quy tắc liên kết ([#6953](https://github.com/nocobase/nocobase/pull/6953)) bởi @katherinehhh
  - Biến liên kết trong bảng con lấy dữ liệu liên kết khi xóa thay vì sử dụng giá trị biểu mẫu ([#6963](https://github.com/nocobase/nocobase/pull/6963)) bởi @katherinehhh
  - phân trang dữ liệu dropdown của trường liên kết với kích thước trang là 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) bởi @katherinehhh
  - bộ chọn ngày không được làm mới sau khi chuyển từ "nằm trong khoảng" về "là" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) bởi @katherinehhh
  - Vị trí tô sáng không chính xác khi kéo các hàng trong bảng ([#6952](https://github.com/nocobase/nocobase/pull/6952)) bởi @chenos
- **[Xác thực]** Vấn đề hiệu suất do dọn dẹp token hết hạn ([#6981](https://github.com/nocobase/nocobase/pull/6981)) bởi @2013xile
- **[Workflow]** Sửa lỗi xảy ra khi lọc workflow ([#6978](https://github.com/nocobase/nocobase/pull/6978)) bởi @mytharcher
- **[Trình quản lý tệp]** Sửa cấu hình thời gian chờ Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Ẩn tùy chọn chuyển đổi chủ đề và sửa kiểu cửa sổ bật lên ([#6964](https://github.com/nocobase/nocobase/pull/6964)) bởi @zhangzhonghe
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi thiếu trình khởi tạo cho workbench bởi @mytharcher
- **[Auth: OIDC]** Văn bản nút đăng nhập không được bản địa hóa bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi khi phạm vi người được chỉ định truy vấn với điều kiện liên kết bởi @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*Ngày phát hành: 2025-06-04*

#### 🚀 Cải tiến

- **[In mẫu]** Thêm nhiều nhật ký hơn. bởi @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*Ngày phát hành: 2025-06-04*

#### 🎉 Tính năng mới

- **[Trực quan hóa dữ liệu]** Hỗ trợ phép nhân và phép chia trong cấu hình chuyển đổi biểu đồ ([#6788](https://github.com/nocobase/nocobase/pull/6788)) bởi @bugstark

#### 🚀 Cải tiến

- **[Biểu mẫu công khai]** Hỗ trợ sử dụng tham số URL làm biến ([#6973](https://github.com/nocobase/nocobase/pull/6973)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
- **[Workflow: Nút thủ công]** Sửa lỗi trình khởi tạo báo lỗi khi sử dụng nguồn dữ liệu bên ngoài ([#6983](https://github.com/nocobase/nocobase/pull/6983)) bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*Ngày phát hành: 2025-06-04*

#### 🎉 Tính năng mới

- **[undefined]**

  - Hỗ trợ mới cho Gitpod cho phép bạn khởi động môi trường phát triển chỉ với một cú nhấp chuột và nhanh chóng bắt đầu phát triển. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) bởi @kerwin612
  - Thêm plugin "Nút sao chép đầu vào" mới cho trường văn bản một dòng ([#6894](https://github.com/nocobase/nocobase/pull/6894)) bởi @kerwin612
- **[Trực quan hóa dữ liệu]** Hỗ trợ phép nhân và phép chia trong cấu hình chuyển đổi biểu đồ ([#6788](https://github.com/nocobase/nocobase/pull/6788)) bởi @bugstark
- **[Workflow]** Thêm quản lý danh mục workflow ([#6965](https://github.com/nocobase/nocobase/pull/6965)) bởi @mytharcher
- **[Trình quản lý email]** hỗ trợ gửi hàng loạt bởi @jiannx

#### 🚀 Cải tiến

- **[client]**

  - cải thiện kiểu cho thành phần bộ lọc phạm vi ngày ([#6939](https://github.com/nocobase/nocobase/pull/6939)) bởi @katherinehhh
  - hỗ trợ cấu hình liên kết menu có mở trong cửa sổ mới hay không ([#6918](https://github.com/nocobase/nocobase/pull/6918)) bởi @katherinehhh
  - Sửa lỗi các điều khiển biểu mẫu bị ẩn chiếm phím tab, cải thiện đáng kể hiệu quả thao tác biểu mẫu ([#6942](https://github.com/nocobase/nocobase/pull/6942)) bởi @kerwin612
  - xác thực các trường bắt buộc trước khi hiển thị hộp thoại xác nhận ([#6931](https://github.com/nocobase/nocobase/pull/6931)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Hỗ trợ sử dụng tham số URL làm biến ([#6973](https://github.com/nocobase/nocobase/pull/6973)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tối ưu hóa hiệu suất nhập xlsx bởi @aaaaaajie
- **[In mẫu]** Thêm nhiều nhật ký hơn. bởi @sheldon66
- **[Auth: OIDC]** Bỏ qua phân biệt chữ hoa chữ thường khi khớp người dùng qua email bởi @2013xile
- **[Workflow: Phê duyệt]** Nhập các collection workflow từ plugin workflow để tránh trùng lặp bởi @mytharcher
- **[Trình quản lý email]** hoàn thiện chức năng gửi hàng loạt bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
  - Sửa lỗi các khối được tạo trong cửa sổ bật lên có collection không chính xác ([#6961](https://github.com/nocobase/nocobase/pull/6961)) bởi @zhangzhonghe
  - Sửa lỗi giá trị trường văn bản một dòng được hiển thị dưới dạng mảng trong chế độ đọc dễ dàng ([#6968](https://github.com/nocobase/nocobase/pull/6968)) bởi @zhangzhonghe
  - Sửa thứ tự trường trong danh sách thả xuống của nút bộ lọc ([#6962](https://github.com/nocobase/nocobase/pull/6962)) bởi @zhangzhonghe
  - Các trường và hành động chỉ có hiệu lực sau khi làm mới trang ([#6977](https://github.com/nocobase/nocobase/pull/6977)) bởi @zhangzhonghe
  - Sửa lỗi tùy chọn 'Dấu ba chấm cho nội dung tràn' không hiệu quả đối với các trường quan hệ ([#6967](https://github.com/nocobase/nocobase/pull/6967)) bởi @zhangzhonghe
  - vấn đề cửa sổ bật lên của trường liên kết chọn đóng lại khi nhập lần đầu khi thêm dữ liệu mới ([#6971](https://github.com/nocobase/nocobase/pull/6971)) bởi @katherinehhh
  - Trường liên kết trong bảng con kích hoạt yêu cầu khi biến lặp có giá trị rỗng ([#6969](https://github.com/nocobase/nocobase/pull/6969)) bởi @katherinehhh
  - dữ liệu quy tắc xác thực biểu mẫu bị mất khi thu gọn bảng điều khiển ([#6949](https://github.com/nocobase/nocobase/pull/6949)) bởi @katherinehhh
  - Sửa lỗi giá trị mặc định của biểu mẫu bộ lọc không hợp lệ trong các trang con ([#6960](https://github.com/nocobase/nocobase/pull/6960)) bởi @zhangzhonghe
  - i18n của thành phần gán trường không hoạt động ([#6945](https://github.com/nocobase/nocobase/pull/6945)) bởi @katherinehhh
  - không thể mở rộng các trường collection liên kết từ nguồn dữ liệu bên ngoài trong phạm vi bảng dữ liệu vai trò ([#6958](https://github.com/nocobase/nocobase/pull/6958)) bởi @katherinehhh
  - bộ chọn ngày không được làm mới sau khi chuyển từ "nằm trong khoảng" về "là" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) bởi @katherinehhh
  - Biến liên kết trong bảng con lấy dữ liệu liên kết khi xóa thay vì sử dụng giá trị biểu mẫu ([#6963](https://github.com/nocobase/nocobase/pull/6963)) bởi @katherinehhh
  - các giá trị đã chọn bị đặt lại khi cập nhật tùy chọn thả xuống đa lựa chọn thông qua quy tắc liên kết ([#6953](https://github.com/nocobase/nocobase/pull/6953)) bởi @katherinehhh
  - Vị trí tô sáng không chính xác khi kéo các hàng trong bảng ([#6952](https://github.com/nocobase/nocobase/pull/6952)) bởi @chenos
  - cài đặt hiển thị dấu hai chấm nhãn biểu mẫu không hoạt động ([#6947](https://github.com/nocobase/nocobase/pull/6947)) bởi @katherinehhh
  - phân trang dữ liệu dropdown của trường liên kết với kích thước trang là 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) bởi @katherinehhh
  - Sửa lỗi nút sao chép trong cửa sổ bật lên lỗi sao chép ra thành [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) bởi @kerwin612
  - Không thể chọn biến khi đặt giá trị mặc định cho trường liên kết ([#6974](https://github.com/nocobase/nocobase/pull/6974)) bởi @zhangzhonghe
  - Thay đổi kích thước khối bằng cách kéo không hoạt động ([#6944](https://github.com/nocobase/nocobase/pull/6944)) bởi @chenos
- **[Workflow: Nút thủ công]** Sửa lỗi trình khởi tạo báo lỗi khi sử dụng nguồn dữ liệu bên ngoài ([#6983](https://github.com/nocobase/nocobase/pull/6983)) bởi @mytharcher
- **[Xác thực]** Vấn đề hiệu suất do dọn dẹp token hết hạn ([#6981](https://github.com/nocobase/nocobase/pull/6981)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa cấu hình thời gian chờ Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) bởi @mytharcher
- **[Workflow]** Sửa lỗi xảy ra khi lọc workflow ([#6978](https://github.com/nocobase/nocobase/pull/6978)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Ẩn tùy chọn chuyển đổi chủ đề và sửa kiểu cửa sổ bật lên ([#6964](https://github.com/nocobase/nocobase/pull/6964)) bởi @zhangzhonghe
- **[Trường Collection: Markdown(Vditor)]** vấn đề chiều rộng thành phần trường markdown-vditor sau khi phóng to và thu nhỏ ([#6946](https://github.com/nocobase/nocobase/pull/6946)) bởi @katherinehhh
- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa lỗi thiếu trình khởi tạo cho workbench bởi @mytharcher
- **[Auth: OIDC]** Văn bản nút đăng nhập không được bản địa hóa bởi @2013xile
- **[Workflow: Phê duyệt]** Sửa lỗi khi phạm vi người được chỉ định truy vấn với điều kiện liên kết bởi @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*Ngày phát hành: 2025-06-04*

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
