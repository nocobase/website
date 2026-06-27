---
title: "NocoBase v2.1.0-alpha.45: Hỗ trợ gán giá trị trường trong hành động gửi biểu mẫu"
description: "Ghi chú phát hành của v2.1.0-alpha.45"
---

### 🎉 Tính năng mới

- **[client-v2]**

  - Hỗ trợ gán giá trị trường trong các hành động gửi biểu mẫu ([#9570](https://github.com/nocobase/nocobase/pull/9570)) bởi @katherinehhh
  - Hỗ trợ trang v2 nhúng và trang biểu mẫu công khai v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) bởi @zhangzhonghe
  - Thêm menu Bảo mật và trang cài đặt chính sách Token vào admin v2; trung tâm người dùng hiện hỗ trợ Đổi mật khẩu. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) bởi @Molunerfinn
  - Viết lại trang Quản lý Plugin client-v2 thành giao diện thẻ đáp ứng với bộ lọc danh mục, tìm kiếm, bật/tắt/xóa, Bật hàng loạt và modal chi tiết plugin; đồng thời làm cho trang Quản lý Plugin client-v1 đáp ứng trên màn hình hẹp. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) bởi @Molunerfinn
- **[cli]**

  - Thêm các bảo vệ tương thích lệnh API động ([#9613](https://github.com/nocobase/nocobase/pull/9613)) bởi @chenos
  - Hỗ trợ xác thực cơ bản ([#9558](https://github.com/nocobase/nocobase/pull/9558)) bởi @chenos
- **[Trình xem trước tệp Office]** Di chuyển plugin xem trước tệp Office sang client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) bởi @Molunerfinn
- **[Workflow]**

  - Thêm kiểm soát thời gian chờ cho workflow, hỗ trợ tự động hủy thực thi quá hạn nếu tùy chọn thời gian chờ được đặt ([#9363](https://github.com/nocobase/nocobase/pull/9363)) bởi @mytharcher
  - Thêm API quản trị viên để chạy lại các thực thi workflow đã bắt đầu từ đầu hoặc từ một nút được chỉ định. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher
- **[IdP: OAuth]** Thêm hỗ trợ nền tảng cho đăng nhập một lần ứng dụng trong các triển khai đa ứng dụng ([#9547](https://github.com/nocobase/nocobase/pull/9547)) bởi @2013xile
- **[Khối: Gantt]** Thêm hỗ trợ v2 cho khối Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) bởi @jiannx
- **[SSO ứng dụng]** Thêm plugin SSO ứng dụng để đăng nhập tự động giữa các ứng dụng bởi @2013xile
- **[Chính sách mật khẩu]** Di chuyển plugin-password-policy sang shell admin client-v2 với các trang cài đặt Chính sách mật khẩu / Người dùng bị khóa và thực thi quy tắc phía client trên biểu mẫu đổi mật khẩu của trung tâm người dùng. bởi @Molunerfinn
- **[Workflow: Webhook]** Thêm trạng thái phản hồi 408 cho workflow webhook quá hạn (chế độ đồng bộ) bởi @mytharcher
- **[Workflow: Subflow]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: OIDC]** Di chuyển `plugin-auth-oidc` sang admin v2; nút đăng nhập, biểu mẫu cài đặt quản trị viên và tự động chuyển hướng SSO hiện hoạt động dưới v2. bởi @Molunerfinn
- **[Workflow: Phê duyệt]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Giám sát ứng dụng]** Thêm cài đặt SSO ứng dụng cho các ứng dụng con bởi @2013xile
- **[Auth: LDAP]** Thêm mục nhập client v2 để trình xác thực LDAP hiển thị biểu mẫu đăng nhập và cài đặt quản trị viên trên các ứng dụng v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[client-v2]**

  - thêm cài đặt chọn hàng bảng v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) bởi @katherinehhh
  - hỗ trợ màu sắc hành động trong bảng hành động ([#9612](https://github.com/nocobase/nocobase/pull/9612)) bởi @katherinehhh
  - Xóa tùy chọn Ẩn khỏi cấu hình menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) bởi @zhangzhonghe
- **[client]** Xóa tùy chọn Ẩn khỏi cài đặt mục menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe
- **[cli]** tinh gọn luồng nâng cấp ứng dụng ([#9587](https://github.com/nocobase/nocobase/pull/9587)) bởi @chenos
- **[Trình quản lý thông báo]** Di chuyển các plugin liên quan đến thông báo sang v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) bởi @Molunerfinn
- **[Nhân viên AI]** Cải thiện trường URL cơ sở LLM để có thể sử dụng các biến phạm vi toàn cục trong biểu mẫu tạo và chỉnh sửa. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) bởi @cgyrock
- **[Workflow]** Tái cấu trúc kiểm tra khả dụng của nút không đồng bộ workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Thêm hỗ trợ client v2 cho các khối biểu đồ. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) bởi @jiannx
- **[Hạn chế IP]** Thêm client v2 cho plugin hạn chế IP. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[client]**

  - Sửa chiều rộng huy hiệu trong thanh điều hướng trên cùng ([#9607](https://github.com/nocobase/nocobase/pull/9607)) bởi @zhangzhonghe
  - tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - Sửa lỗi tab trang biến mất sau khi chuyển đổi menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe
  - sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - sửa lỗi đồng bộ giá trị popup chọn ngày trên thiết bị di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - sửa lỗi đồng bộ trạng thái ẩn cho liên kết biểu mẫu con ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh
  - sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - sửa lỗi đồng bộ giá trị popup chọn ngày trên thiết bị di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
- **[flow-engine]**

  - Sửa mức log giao diện người dùng không chính xác. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) bởi @gchust
  - Sửa menu xếp tầng không ổn định khi gõ trong hộp tìm kiếm ([#9473](https://github.com/nocobase/nocobase/pull/9473)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi biểu mẫu được gửi thành công trong popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust
- **[ai]** Ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn ([#9604](https://github.com/nocobase/nocobase/pull/9604)) bởi @cgyrock
- **[client-v2]**

  - Sửa lỗi tab đăng nhập ứng dụng con hiển thị các mẫu dịch thuật thô và ngăn drawer chỉnh sửa phương thức xác thực v2 làm mất giá trị trường khi gửi. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) bởi @Molunerfinn
  - Cải thiện hiệu suất trang quản lý plugin bằng cách sử dụng CSS line-clamp thay vì antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) bởi @Molunerfinn
  - Sửa siêu dữ liệu ngôn ngữ trình duyệt để trang ứng dụng theo ngôn ngữ ứng dụng đã chọn thay vì được đánh dấu là tiếng Anh. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) bởi @Molunerfinn
- **[build]**

  - Các tài sản văn bản trong bản dựng máy chủ hiện được sao chép dưới dạng tệp thay vì được chuyển đổi thành các mô-đun JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) bởi @Molunerfinn
  - Sửa đầu ra làm rối plugin máy chủ để tránh các biến toàn cục trình duyệt trong các gói thời gian chạy Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) bởi @Molunerfinn
- **[Khối: Gantt]** Sửa đường dẫn thư mục dùng chung gantt v2 và thêm tô màu zebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) bởi @jiannx
- **[Cài đặt giấy phép]** Thêm hỗ trợ client-v2 cho cài đặt giấy phép và tiêm giấy phép thương mại. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) bởi @jiannx
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Sửa lỗi trùng lặp tùy chọn Trigger workflow trong menu hành động khối v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) bởi @zhangzhonghe
  - Lọc các tùy chọn ràng buộc workflow hành động tùy chỉnh theo bộ sưu tập khối hiện tại. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) bởi @mytharcher
  - Sửa lỗi nút hành động tùy chỉnh trong bảng với ngữ cảnh nhiều bản ghi cho phép chọn workflow ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher
- **[Bộ sưu tập: Cây]** Sửa lỗi gây ra bởi dữ liệu cha-con vòng tròn trong bộ sưu tập cây ([#9603](https://github.com/nocobase/nocobase/pull/9603)) bởi @zhangzhonghe
- **[Trình quản lý tệp]**

  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Hiển thị an toàn bản xem trước PDF bằng PDF.js thay vì hiển thị PDF thô dựa trên iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) bởi @mytharcher
  - Sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên tệp để tránh tạo khóa đối tượng có ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher
- **[Nhân viên AI]**

  - Sửa lỗi nút tắt AI nhận ngữ cảnh khối trống sau khi các khối bảng được tham chiếu bị xóa. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) bởi @cgyrock
  - sửa mô tả không chính xác của tên công cụ trong prompt ngữ cảnh công việc ([#9567](https://github.com/nocobase/nocobase/pull/9567)) bởi @cgyrock
- **[Workflow: Nút thủ công]** Sửa lỗi lưu tạm thời cho các tác vụ workflow thủ công không lưu giá trị biểu mẫu đã gửi. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) bởi @mytharcher
- **[plugin-commercial]** Thêm các thành phần giấy phép thương mại client-v2 và mục nhập trạng thái giấy phép trên thanh trên cùng. bởi @jiannx
- **[AI: Cơ sở kiến thức]** Ghim các phụ thuộc LangChain vào các phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn bởi @cgyrock
- **[Trình quản lý di chuyển]** Sửa lỗi khác biệt di chuyển PostgreSQL để các cột kế thừa con không bị xóa khi một cột cục bộ trở thành kế thừa. bởi @hongboji
- **[In mẫu]** Sửa lỗi lỗi chuyển đổi PDF in mẫu không được trả về client chính xác bởi @jiannx
- **[Auth: OIDC]** Sửa lỗi rò rỉ token khi callback đăng nhập SSO nhận được URL chuyển hướng bên ngoài bởi @2013xile
- **[Workflow: Phê duyệt]**

  - Sửa lỗi API `jobs:resume` không được nút phê duyệt hỗ trợ bởi @mytharcher
  - Sửa lỗi rút lại phê duyệt để cập nhật dữ liệu kinh doanh đã gửi trong khi tôn trọng quyền cập nhật bộ sưu tập nguồn. bởi @mytharcher
  - Sửa lỗi công việc phê duyệt cũ khi workflow phê duyệt bị kết thúc do lỗi nút không phải phê duyệt. bởi @mytharcher
