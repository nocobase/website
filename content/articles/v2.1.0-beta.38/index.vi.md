---
title: "NocoBase v2.1.0-beta.38: Thêm các biện pháp bảo vệ tương thích cho lệnh API động"
description: "Ghi chú phát hành của v2.1.0-beta.38"
---

### 🎉 Tính năng mới

- **[cli]** Thêm các bảo vệ tương thích cho lệnh API động ([#9613](https://github.com/nocobase/nocobase/pull/9613)) bởi @chenos
- **[client-v2]**

  - Hỗ trợ trang v2 nhúng và trang biểu mẫu công khai v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) bởi @zhangzhonghe
  - Viết lại trang quản lý Plugin của client-v2 thành giao diện thẻ (card) responsive với bộ lọc danh mục, tìm kiếm, bật/tắt/xóa, Bật hàng loạt và modal chi tiết plugin; đồng thời làm cho trang quản lý Plugin của client-v1 responsive trên màn hình hẹp. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) bởi @Molunerfinn
- **[Workflow]**

  - Thêm kiểm soát thời gian chờ (timeout) cho workflow, hỗ trợ tự động hủy thực thi quá hạn nếu tùy chọn timeout được thiết lập ([#9363](https://github.com/nocobase/nocobase/pull/9363)) bởi @mytharcher
  - Thêm API quản trị viên để chạy lại các thực thi workflow đã bắt đầu từ đầu hoặc từ một nút cụ thể. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) bởi @mytharcher
- **[Block: Gantt]** Thêm hỗ trợ v2 cho khối Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) bởi @jiannx
- **[Workflow: Webhook]** Thêm trạng thái phản hồi 408 cho webhook workflow bị quá hạn (chế độ đồng bộ) bởi @mytharcher
- **[Workflow: Subflow]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: OIDC]** Di chuyển `plugin-auth-oidc` sang admin v2; nút đăng nhập, biểu mẫu cài đặt quản trị và chuyển hướng tự động SSO hiện hoạt động trên v2. bởi @Molunerfinn
- **[Workflow: Approval]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Auth: LDAP]** Thêm mục nhập client v2 để trình xác thực LDAP hiển thị biểu mẫu đăng nhập và cài đặt quản trị trên ứng dụng v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[client-v2]**

  - thêm cài đặt chọn hàng trong bảng v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) bởi @katherinehhh
  - hỗ trợ màu sắc cho nút trong bảng hành động ([#9612](https://github.com/nocobase/nocobase/pull/9612)) bởi @katherinehhh
  - Xóa tùy chọn Ẩn (Hidden) khỏi cấu hình menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) bởi @zhangzhonghe
- **[client]** Xóa tùy chọn Ẩn khỏi cài đặt mục menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) bởi @zhangzhonghe
- **[cli]** Tinh gọn luồng nâng cấp ứng dụng ([#9587](https://github.com/nocobase/nocobase/pull/9587)) bởi @chenos
- **[AI employees]** Cải thiện trường URL cơ sở LLM để có thể sử dụng các biến phạm vi toàn cục trong biểu mẫu tạo và chỉnh sửa. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) bởi @cgyrock
- **[IP restriction]** Thêm client v2 cho plugin giới hạn IP. bởi @Molunerfinn

### 🐛 Sửa lỗi

- **[flow-engine]**

  - Sửa mức log giao diện người dùng không chính xác. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) bởi @gchust
  - Sửa lỗi menu xếp tầng không ổn định khi gõ trong ô tìm kiếm ([#9473](https://github.com/nocobase/nocobase/pull/9473)) bởi @zhangzhonghe
  - Sửa lỗi quy tắc liên kết hành động bảng thực thi không chính xác sau khi biểu mẫu được gửi thành công trong cửa sổ popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) bởi @gchust
- **[ai]** Cố định các phụ thuộc LangChain ở phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn ([#9604](https://github.com/nocobase/nocobase/pull/9604)) bởi @cgyrock
- **[client-v2]**

  - Sửa lỗi tab đăng nhập ứng dụng con hiển thị các mẫu dịch thuật thô và ngăn drawer chỉnh sửa phương thức xác thực v2 làm mất giá trị trường khi gửi. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) bởi @Molunerfinn
  - Cải thiện hiệu suất trang quản lý plugin bằng cách sử dụng CSS line-clamp thay vì antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) bởi @Molunerfinn
- **[client]**

  - sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - sửa lỗi đồng bộ trạng thái ẩn cho liên kết biểu mẫu con ([#9594](https://github.com/nocobase/nocobase/pull/9594)) bởi @katherinehhh
  - tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - sửa lỗi đồng bộ giá trị popup chọn ngày trên di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - Sửa lỗi tab trang biến mất sau khi chuyển đổi menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) bởi @zhangzhonghe
  - sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - sửa lỗi đồng bộ giá trị popup chọn ngày trên di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - sửa lỗi bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - sửa lỗi giữ nguyên định dạng thời gian cho trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
- **[Collection: Tree]** Sửa lỗi gây ra bởi dữ liệu cha-con vòng tròn trong bộ sưu tập dạng cây ([#9603](https://github.com/nocobase/nocobase/pull/9603)) bởi @zhangzhonghe
- **[Workflow: Custom action event]**

  - Sửa lỗi nút bảng hành động tùy chỉnh với ngữ cảnh nhiều bản ghi cho phép chọn workflow ngữ cảnh tùy chỉnh không chính xác. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) bởi @mytharcher
  - Lọc các tùy chọn ràng buộc workflow hành động tùy chỉnh theo bộ sưu tập khối hiện tại. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) bởi @mytharcher
- **[File manager]**

  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
    Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
  - Sửa lỗi chuẩn hóa tên tệp Unicode trong quá trình tải lên để tránh tạo khóa đối tượng chứa ký tự điều khiển. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) bởi @mytharcher
- **[AI: Knowledge base]** Cố định các phụ thuộc LangChain ở phiên bản ổn định để ngăn lỗi thực thi công cụ Ollama và tránh ảnh hưởng đến các bản phát hành thượng nguồn bởi @cgyrock
- **[Template print]** Sửa lỗi lỗi chuyển đổi PDF in mẫu không được trả về đúng cách cho client bởi @jiannx
