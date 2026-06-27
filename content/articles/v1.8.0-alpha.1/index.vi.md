---
title: "NocoBase v1.8.0-alpha.1: Thêm quản lý danh mục quy trình làm việc"
description: "Ghi chú phát hành phiên bản v1.8.0-alpha.1"
---

### 🎉 Tính năng mới

- **[Chưa xác định]**

  - Hỗ trợ mới cho Gitpod cho phép bạn khởi động môi trường phát triển chỉ với một cú nhấp chuột và nhanh chóng bắt đầu phát triển. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) bởi @kerwin612
  - Thêm plugin "Nút sao chép đầu vào" mới cho trường văn bản một dòng ([#6894](https://github.com/nocobase/nocobase/pull/6894)) bởi @kerwin612
- **[Trực quan hóa dữ liệu]** Hỗ trợ phép nhân và phép chia trong cấu hình chuyển đổi biểu đồ ([#6788](https://github.com/nocobase/nocobase/pull/6788)) bởi @bugstark
- **[Luồng công việc]** Thêm quản lý danh mục luồng công việc ([#6965](https://github.com/nocobase/nocobase/pull/6965)) bởi @mytharcher
- **[Trình quản lý email]** hỗ trợ gửi hàng loạt bởi @jiannx

### 🚀 Cải tiến

- **[client]**

  - cải thiện kiểu dáng cho thành phần bộ lọc phạm vi ngày ([#6939](https://github.com/nocobase/nocobase/pull/6939)) bởi @katherinehhh
  - hỗ trợ cấu hình liên kết menu có mở trong cửa sổ mới hay không ([#6918](https://github.com/nocobase/nocobase/pull/6918)) bởi @katherinehhh
  - Sửa lỗi điều khiển biểu mẫu ẩn bắt phím tab, cải thiện đáng kể hiệu quả thao tác biểu mẫu ([#6942](https://github.com/nocobase/nocobase/pull/6942)) bởi @kerwin612
  - xác thực các trường bắt buộc trước khi hiển thị hộp thoại xác nhận ([#6931](https://github.com/nocobase/nocobase/pull/6931)) bởi @katherinehhh
- **[Biểu mẫu công khai]** Hỗ trợ sử dụng tham số url làm biến ([#6973](https://github.com/nocobase/nocobase/pull/6973)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tối ưu hóa hiệu suất nhập xlsx bởi @aaaaaajie
- **[In mẫu]** Thêm nhiều nhật ký hơn. bởi @sheldon66
- **[Xác thực: OIDC]** Bỏ qua phân biệt chữ hoa chữ thường khi khớp người dùng qua email bởi @2013xile
- **[Luồng công việc: Phê duyệt]** Nhập các bộ sưu tập luồng công việc từ plugin luồng công việc để tránh trùng lặp bởi @mytharcher
- **[Trình quản lý email]** hoàn thiện chức năng gửi hàng loạt bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi trường không hiển thị trong mẫu khối do yêu cầu API trùng lặp ([#6957](https://github.com/nocobase/nocobase/pull/6957)) bởi @zhangzhonghe
  - Sửa lỗi khối được tạo trong cửa sổ bật lên có bộ sưu tập không chính xác ([#6961](https://github.com/nocobase/nocobase/pull/6961)) bởi @zhangzhonghe
  - Sửa lỗi giá trị trường văn bản một dòng được hiển thị dưới dạng mảng trong chế độ đọc dễ dàng ([#6968](https://github.com/nocobase/nocobase/pull/6968)) bởi @zhangzhonghe
  - Sửa thứ tự trường trong danh sách thả xuống của nút bộ lọc ([#6962](https://github.com/nocobase/nocobase/pull/6962)) bởi @zhangzhonghe
  - Các trường và hành động chỉ có hiệu lực sau khi làm mới trang ([#6977](https://github.com/nocobase/nocobase/pull/6977)) bởi @zhangzhonghe
  - Sửa lỗi tùy chọn 'Nội dung tràn dấu ba chấm' không hiệu quả đối với các trường quan hệ ([#6967](https://github.com/nocobase/nocobase/pull/6967)) bởi @zhangzhonghe
  - sự cố cửa sổ bật lên trường liên kết chọn đóng lại khi nhập lần đầu khi thêm dữ liệu mới ([#6971](https://github.com/nocobase/nocobase/pull/6971)) bởi @katherinehhh
  - trường liên kết trong bảng con kích hoạt yêu cầu khi biến lặp có giá trị rỗng ([#6969](https://github.com/nocobase/nocobase/pull/6969)) bởi @katherinehhh
  - dữ liệu quy tắc xác thực biểu mẫu bị mất khi thu gọn bảng điều khiển ([#6949](https://github.com/nocobase/nocobase/pull/6949)) bởi @katherinehhh
  - Sửa lỗi giá trị mặc định của biểu mẫu bộ lọc không hợp lệ trong các trang con ([#6960](https://github.com/nocobase/nocobase/pull/6960)) bởi @zhangzhonghe
  - i18n của thành phần gán trường không hoạt động ([#6945](https://github.com/nocobase/nocobase/pull/6945)) bởi @katherinehhh
  - không thể mở rộng các trường bộ sưu tập liên kết từ nguồn dữ liệu bên ngoài trong phạm vi bảng dữ liệu vai trò ([#6958](https://github.com/nocobase/nocobase/pull/6958)) bởi @katherinehhh
  - bộ chọn ngày không được làm mới sau khi chuyển đổi từ "nằm trong khoảng" trở lại "là" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) bởi @katherinehhh
  - biến liên kết bảng con tìm nạp dữ liệu liên kết khi xóa thay vì sử dụng giá trị biểu mẫu ([#6963](https://github.com/nocobase/nocobase/pull/6963)) bởi @katherinehhh
  - các giá trị đã chọn bị đặt lại khi cập nhật tùy chọn thả xuống đa lựa chọn thông qua quy tắc liên kết ([#6953](https://github.com/nocobase/nocobase/pull/6953)) bởi @katherinehhh
  - Vị trí tô sáng không chính xác khi kéo các hàng của bảng ([#6952](https://github.com/nocobase/nocobase/pull/6952)) bởi @chenos
  - cài đặt hiển thị dấu hai chấm nhãn biểu mẫu không hoạt động ([#6947](https://github.com/nocobase/nocobase/pull/6947)) bởi @katherinehhh
  - phân trang dữ liệu thả xuống trường liên kết với kích thước trang là 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) bởi @katherinehhh
  - Sửa lỗi nút sao chép trong cửa sổ bật lên lỗi sao chép ra thành [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) bởi @kerwin612
  - Không thể chọn biến khi đặt giá trị mặc định cho các trường liên kết ([#6974](https://github.com/nocobase/nocobase/pull/6974)) bởi @zhangzhonghe
  - Thay đổi kích thước khối bằng cách kéo không hoạt động ([#6944](https://github.com/nocobase/nocobase/pull/6944)) bởi @chenos
- **[Luồng công việc: Nút thủ công]** Sửa lỗi trình khởi tạo báo lỗi khi sử dụng nguồn dữ liệu bên ngoài ([#6983](https://github.com/nocobase/nocobase/pull/6983)) bởi @mytharcher
- **[Xác thực]** Vấn đề hiệu suất do dọn dẹp token hết hạn ([#6981](https://github.com/nocobase/nocobase/pull/6981)) bởi @2013xile
- **[Trình quản lý tệp]** Sửa cấu hình thời gian chờ Ali-OSS ([#6970](https://github.com/nocobase/nocobase/pull/6970)) bởi @mytharcher
- **[Luồng công việc]** Sửa lỗi báo lỗi khi lọc luồng công việc ([#6978](https://github.com/nocobase/nocobase/pull/6978)) bởi @mytharcher
- **[Trình chỉnh sửa chủ đề]** Ẩn tùy chọn chuyển đổi chủ đề và sửa kiểu cửa sổ bật lên ([#6964](https://github.com/nocobase/nocobase/pull/6964)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Markdown(Vditor)]** sự cố chiều rộng thành phần trường markdown-vditor sau khi phóng to và thu nhỏ ([#6946](https://github.com/nocobase/nocobase/pull/6946)) bởi @katherinehhh
- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi trình khởi tạo cho bảng công việc bị thiếu bởi @mytharcher
- **[Xác thực: OIDC]** Văn bản nút đăng nhập không được bản địa hóa bởi @2013xile
- **[Luồng công việc: Phê duyệt]** Sửa lỗi khi truy vấn phạm vi người được chỉ định với điều kiện liên kết bởi @mytharcher
