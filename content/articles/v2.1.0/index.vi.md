---
title: "NocoBase v2.1.0: Cải thiện ứng dụng được quản lý và quản lý plugin trong CLI"
description: "Ghi chú phát hành v2.1.0"
---

### 🎉 Tính năng mới

- **[undefined]**

  - Đã thêm các lệnh proxy cấp cao nhất cho nginx và caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) bởi @chenos
  - Cải thiện quản lý ứng dụng và plugin trong CLI, bao gồm xử lý môi trường nhận biết appPath, import plugin, đồng bộ plugin có bản quyền và cập nhật tài liệu liên quan. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) bởi @chenos
    Tham khảo: [Tài liệu CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Hướng dẫn nhanh](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Đã thêm một nhân viên AI mới, Kỹ sư bản địa hóa Lina, để hỗ trợ các tác vụ dịch thuật bản địa hóa ([#9434](https://github.com/nocobase/nocobase/pull/9434)) bởi @2013xile
    Tham khảo: [Quản lý bản địa hóa](https://docs.nocobase.com/system-management/localization)<br>[Lina: Kỹ sư bản địa hóa](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Sử dụng Lina và HY-MT1.5-1.8B cục bộ để dịch các mục bản địa hóa](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Đã thêm tài liệu tiếng Indonesia và tiếng Việt. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) bởi @Molunerfinn
  - Đã thêm một quy trình CI kiểm tra các `plugin-*` peerDependencies bị thiếu và chạy bản dựng, với báo cáo bình luận PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) bởi @Molunerfinn
- **[client-v2]**

  - Hỗ trợ nhập liệu quét cho các trường văn bản ([#9599](https://github.com/nocobase/nocobase/pull/9599)) bởi @katherinehhh
  - Đã thêm `TypedVariableInput` để các trường cổng SMTP và chế độ bảo mật của plugin email v2 có thể chấp nhận hằng số đã định kiểu hoặc biến `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) bởi @Molunerfinn
  - Hỗ trợ gán giá trị trường trong các hành động gửi biểu mẫu ([#9570](https://github.com/nocobase/nocobase/pull/9570)) bởi @katherinehhh
  - Hỗ trợ các trang v2 nhúng và các trang biểu mẫu công khai v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) bởi @zhangzhonghe
  - Viết lại trang quản lý Plugin client-v2 thành giao diện dạng thẻ đáp ứng với bộ lọc danh mục, tìm kiếm, bật/tắt/xóa, Bật hàng loạt và modal chi tiết plugin; đồng thời làm cho trang quản lý Plugin client-v1 đáp ứng trên màn hình hẹp. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) bởi @Molunerfinn
  - Đã thêm menu Bảo mật và trang cài đặt chính sách Token vào admin v2; trung tâm người dùng hiện hỗ trợ Đổi mật khẩu. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) bởi @Molunerfinn
- **[cli]**

  - Đã thêm các bảo vệ tương thích lệnh API động ([#9613](https://github.com/nocobase/nocobase/pull/9613)) bởi @chenos
  - Hỗ trợ xác thực cơ bản ([#9558](https://github.com/nocobase/nocobase/pull/9558)) bởi @chenos
  - Đã thêm các lệnh tạo và khôi phục bản sao lưu ([#9541](https://github.com/nocobase/nocobase/pull/9541)) bởi @chenos
  - Đã thêm lệnh phát hành trong API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) bởi @Andrew1989Y
  - Tái cấu trúc CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) bởi @chenos
- **[client]**

  - Đã thêm hỗ trợ quy tắc liên kết cho các mục menu trang ([#9304](https://github.com/nocobase/nocobase/pull/9304)) bởi @zhangzhonghe
  - thêm biến js vào luồng sự kiện ([#8938](https://github.com/nocobase/nocobase/pull/8938)) bởi @jiannx
  - thêm hành động mục JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) bởi @jiannx
- **[flow-engine]**

  - Đã di chuyển `plugin-environment-variables` sang client-v2 với trang cài đặt dựa trên React và biến thời gian chạy `$env` được đăng ký toàn cục; thêm một mục client-v2 vào `plugin-file-manager` với trang cấu hình lưu trữ dựa trên React và trường tải lên, hành động tải lên và xem trước dựa trên FlowModel. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) bởi @Molunerfinn
  - Đã thêm `getSubclassesOfAsync` vào FlowEngine để khám phá các lớp mô hình đã đăng ký bất đồng bộ thông qua trường `extends` mới trong `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) bởi @Molunerfinn
- **[server]** Nhân viên AI có thể tìm kiếm tài liệu đi kèm bằng lệnh Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) bởi @2013xile
- **[cli-v1]** Giải quyết đường dẫn lưu trữ từ env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) bởi @chenos
- **[Trình quản lý tác vụ bất đồng bộ]** Đã thêm hỗ trợ client v2 cho hành động trên thanh trên cùng của trình quản lý tác vụ bất đồng bộ. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) bởi @jiannx
- **[Trình quản lý sao lưu]**

  - Đã thêm hỗ trợ thời gian chạy client v2 cho plugin trình quản lý sao lưu. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) bởi @katherinehhh
  - Thích ứng với plugin kiểm soát phiên bản mới ([#9563](https://github.com/nocobase/nocobase/pull/9563)) bởi @cgyrock
- **[Khối: Gantt]**

  - Đã thêm tùy chọn cho khối Gantt để tập trung vào hôm nay theo mặc định khi mở ([#9692](https://github.com/nocobase/nocobase/pull/9692)) bởi @jiannx
  - Đã thêm hỗ trợ v2 cho khối Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) bởi @jiannx
- **[Kiểm soát truy cập]** Đã di chuyển các trang cài đặt Người dùng và Vai trò & Quyền sang v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) bởi @jiannx
- **[Trình xem trước tệp Office]** Đã di chuyển plugin xem trước tệp Office sang client v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) bởi @Molunerfinn
- **[Workflow]**

  - Đã thêm kiểm soát thời gian chờ cho workflow, hỗ trợ tự động hủy bỏ thực thi quá hạn nếu tùy chọn thời gian chờ được đặt ([#9363](https://github.com/nocobase/nocobase/pull/9363)) bởi @mytharcher
  - Đã thêm các trường người tạo và người cập nhật cho workflow ([#9217](https://github.com/nocobase/nocobase/pull/9217)) bởi @mytharcher
  - Đã thêm API để kiểm tra việc tạo node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) bởi @mytharcher
  - Đã thêm trường nhật ký cho các job, để hiển thị nội dung nhật ký của một số node nhằm gỡ lỗi ([#9165](https://github.com/nocobase/nocobase/pull/9165)) bởi @mytharcher
- **[IdP: OAuth]**

  - Đã thêm hỗ trợ nền tảng cho đăng nhập một lần ứng dụng trong các triển khai đa ứng dụng ([#9547](https://github.com/nocobase/nocobase/pull/9547)) bởi @2013xile
  - Đã thêm plugin IdP: OAuth mới để cho phép các dịch vụ MCP xác thực qua OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) bởi @2013xile
- **[Trình chỉnh sửa chủ đề]** Trình chỉnh sửa chủ đề hiện có sẵn trong giao diện v2 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) bởi @zhangzhonghe
- **[Khối: Kanban]**

  - Đã thêm hỗ trợ client-v2 cho plugin Kanban ([#9475](https://github.com/nocobase/nocobase/pull/9475)) bởi @jiannx
  - khối kanban v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) bởi @jiannx
- **[Khối: Markdown]** Đã thêm hỗ trợ client-v2 cho khối Markdown ([#9487](https://github.com/nocobase/nocobase/pull/9487)) bởi @jiannx
- **[Khối: Danh sách]** Khối danh sách hỗ trợ client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) bởi @jiannx
- **[Lịch]**

  - Đã thêm hỗ trợ client-v2 cho plugin Lịch. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) bởi @jiannx
  - khối lịch v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) bởi @jiannx
- **[Khối: Cây]**

  - Đã thêm hỗ trợ client-v2 cho khối lọc cây. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) bởi @jiannx
  - Đã thêm khối lọc cây ([#9016](https://github.com/nocobase/nocobase/pull/9016)) bởi @jiannx
- **[Nhân viên AI]**

  - Node nhân viên AI trong workflow hỗ trợ tải tệp từ các trường tệp đính kèm. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) bởi @cgyrock
  - Workflow đã thêm hướng dẫn nhân viên AI ([#9025](https://github.com/nocobase/nocobase/pull/9025)) bởi @cgyrock
  - Đã thêm công cụ truy vấn dữ liệu và công cụ báo cáo phân tích kinh doanh cho nhân viên AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) bởi @2013xile
  - Đã thêm khả năng gọi các tác nhân phụ cho nhân viên AI ([#8935](https://github.com/nocobase/nocobase/pull/8935)) bởi @cgyrock
  - Đã thêm khả năng KỸ NĂNG (SKILLS) cho nhân viên AI. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) bởi @cgyrock
- **[Trực quan hóa dữ liệu]** Đã thêm hỗ trợ client-v2 cho các plugin khối ([#9297](https://github.com/nocobase/nocobase/pull/9297)) bởi @zhangzhonghe
- **[Xác thực: Khóa API]** thêm các lệnh `pm list` và `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) bởi @chenos
- **[AI: Máy chủ MCP]**

  - Cung cấp API truy vấn bộ sưu tập dữ liệu chung, có thể gọi qua MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) bởi @2013xile
  - Đã thêm plugin máy chủ MCP mới để cho phép xây dựng các hệ thống NocoBase và hỗ trợ các workflow kinh doanh. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) bởi @2013xile
- **[Trình quản lý nguồn dữ liệu]** Hỗ trợ tải theo yêu cầu các công cụ MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) bởi @2013xile
- **[Trường bộ sưu tập: Mã]** field-code hỗ trợ 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) bởi @jiannx
- **[Nguồn dữ liệu: NocoBase bên ngoài]** Đã thêm plugin nguồn dữ liệu: NocoBase bên ngoài bởi @2013xile
- **[Đa không gian]** Đã thêm hỗ trợ client-v2 cho plugin đa không gian, bao gồm chuyển đổi không gian và quản lý không gian. bởi @jiannx
- **[SSO ứng dụng]** Đã thêm plugin SSO ứng dụng để đăng nhập tự động giữa các ứng dụng bởi @2013xile
- **[Kiểm soát phiên bản]** Đã thêm plugin kiểm soát phiên bản bởi @cgyrock
- **[Xác thực hai yếu tố (2FA)]** TOTP và xác thực hai yếu tố hiện có thể được liên kết, xác minh và cấu hình từ client v2. bởi @Molunerfinn
- **[Chính sách mật khẩu]** Đã di chuyển plugin-password-policy sang shell admin client-v2 với các trang cài đặt Chính sách mật khẩu / Người dùng bị khóa và thực thi quy tắc phía client trên biểu mẫu đổi mật khẩu của trung tâm người dùng. bởi @Molunerfinn
- **[Workflow: Webhook]** Đã thêm trạng thái phản hồi 408 cho workflow webhook hết thời gian chờ (chế độ đồng bộ) bởi @mytharcher
- **[Workflow: Luồng con]** Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
- **[Trình quản lý di chuyển]** Đã thêm một số API cho nocobase cli bởi @Andrew1989Y
- **[Lưu trữ tệp: S3(Pro)]** Hỗ trợ tải tệp lên qua bộ nhớ S3 Pro trong trình quản lý tệp v2. bởi @Molunerfinn
- **[Xác thực: OIDC]** Đã di chuyển `plugin-auth-oidc` sang admin v2; nút đăng nhập, biểu mẫu cài đặt admin và tự động chuyển hướng SSO hiện hoạt động dưới v2. bởi @Molunerfinn
- **[Workflow: Phê duyệt]**

  - Hỗ trợ cài đặt thời gian chờ trong workflow bởi @mytharcher
  - Hỗ trợ xóa bản phê duyệt nháp bởi @mytharcher
- **[Trình quản lý email]** Gmail hỗ trợ gửi email với bí danh bởi @jiannx
- **[Giám sát ứng dụng]** Đã thêm cài đặt SSO ứng dụng cho các ứng dụng con bởi @2013xile
- **[Xác thực: LDAP]** Đã thêm mục client v2 để trình xác thực LDAP hiển thị biểu mẫu đăng nhập và cài đặt admin trên các ứng dụng v2. bởi @Molunerfinn

### 🚀 Cải tiến

- **[undefined]**

  - Hỗ trợ môi trường hiện tại trong phạm vi phiên trong nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) bởi @chenos
  - Căn chỉnh tài liệu tiếng Tây Ban Nha, Bồ Đào Nha, Nga và Đức với nguồn tiếng Anh. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) bởi @Molunerfinn
  - Đồng bộ tài liệu tiếng Pháp với nguồn tiếng Trung. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) bởi @Molunerfinn
  - Cập nhật tài liệu AI để yêu cầu NocoBase >= 2.1.0-beta.20 và đề xuất phiên bản beta mới nhất. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) bởi @Molunerfinn
  - Cải thiện hướng dẫn cài đặt AI Agent để ngăn Agents bỏ qua trình hướng dẫn `--ui` và tự động phát hiện các trình quản lý phiên bản Node. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) bởi @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) bởi @Molunerfinn
  - Đã thêm một mục client-v2 chuyên dụng và xây dựng nó độc lập với rsbuild trong khi vẫn giữ nguyên v1. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) bởi @Molunerfinn
- **[client-v2]**

  - Đã thêm hỗ trợ vô hiệu hóa lựa chọn nhiều trong các trường liên kết chọn popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) bởi @katherinehhh
  - Cải thiện kết xuất khối v2 khi một nguồn dữ liệu bên ngoài được cấu hình bị vô hiệu hóa, ngăn lỗi kết xuất và hiển thị trình giữ chỗ UI Editor rõ ràng hơn. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) bởi @katherinehhh
  - Đã thêm cài đặt chọn hàng trong bảng v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) bởi @katherinehhh
  - Hỗ trợ màu sắc hành động trong bảng hành động ([#9612](https://github.com/nocobase/nocobase/pull/9612)) bởi @katherinehhh
  - Đã xóa tùy chọn Ẩn khỏi cấu hình menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) bởi @zhangzhonghe
  - Lọc các menu v1 trong bố cục v2 và chỉ hiển thị menu v2 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) bởi @zhangzhonghe
  - Tách client-v2 khỏi client-v1 và loại bỏ sự phụ thuộc của nó vào client-v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) bởi @zhangzhonghe
- **[server]**

  - Client hiện đại hiện được phục vụ dưới `/v/` thay vì `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) bởi @Molunerfinn
  - Cải thiện tài liệu API swagger của trình quản lý plugin ([#9080](https://github.com/nocobase/nocobase/pull/9080)) bởi @2013xile
- **[cli]**

  - Cải thiện hướng dẫn khởi tạo và tự cập nhật ([#9633](https://github.com/nocobase/nocobase/pull/9633)) bởi @chenos
  - hợp lý hóa luồng nâng cấp ứng dụng ([#9587](https://github.com/nocobase/nocobase/pull/9587)) bởi @chenos
  - cải thiện luồng xác thực env ([#9546](https://github.com/nocobase/nocobase/pull/9546)) bởi @chenos
  - Cải thiện trải nghiệm nhắc nhở CLI NocoBase bằng cách di chuyển các quy trình thiết lập và quản lý sang Inquirer, đồng thời sửa các sự cố cài đặt, kỹ năng và thời gian chạy Docker liên quan. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) bởi @chenos
  - Đã thêm theo dõi nguồn gốc yêu cầu CLI trong nhật ký yêu cầu và nhật ký kiểm toán ([#9223](https://github.com/nocobase/nocobase/pull/9223)) bởi @2013xile
  - Cải thiện đầu ra trợ giúp CLI API được tạo và nhóm lệnh ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) bởi @2013xile
  - Cải thiện dự phòng trợ giúp `nb API` và thống nhất các thông báo cảnh báo cho các lỗi khởi động thời gian chạy ([#9153](https://github.com/nocobase/nocobase/pull/9153)) bởi @2013xile
- **[client]**

  - Đã di chuyển jsonLogic từ Application v1 sang BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) bởi @zhangzhonghe
  - hỗ trợ thiết lập kiểu trường thông qua runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) bởi @jiannx
  - Tái cấu trúc cài đặt bố cục admin và ứng dụng để mô hình hóa kiến trúc máy chủ với các biện pháp bảo vệ tương thích v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) bởi @zhangzhonghe
- **[build]**

  - Đã thêm phạm vi hồi quy để giữ cho `deleteServerFiles` không xóa các tạo phẩm xây dựng `client` và `client-v2` trên các đường dẫn Windows và POSIX. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) bởi @Molunerfinn
  - Các bản dựng production client ứng dụng hiện chạy trên Rsbuild, đồng thời cải tiến lập hồ sơ xây dựng và lập lịch khai báo giúp dễ dàng xác định và giảm các điểm nghẽn xây dựng. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) bởi @Molunerfinn
  - Đã di chuyển quy trình xây dựng client trong `@nocobase/build` từ Vite sang Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) bởi @Molunerfinn
- **[database]** Đã sửa hành vi tạo báo cáo kinh doanh AI và truy vấn dữ liệu để tránh đầu ra biểu đồ bị lỗi, xử lý datetime không chính xác và thiếu phạm vi bao phủ đa nguồn dữ liệu ([#9078](https://github.com/nocobase/nocobase/pull/9078)) bởi @2013xile
- **[flow-engine]**

  - Cải thiện xác thực lược đồ cho API xây dựng UI. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) bởi @gchust
- **[app]** Đã thêm quy trình phát triển dựa trên Rsbuild cho client-v1 trong khi vẫn giữ cho việc phát triển plugin cục bộ và cấu trúc liên kết `/v2/` hiện tại tương thích ([#8902](https://github.com/nocobase/nocobase/pull/8902)) bởi @Molunerfinn
- **[Biến và bí mật]** Các biến môi trường (`$env`) hiện có thể được chọn bởi các bộ chọn biến dựa trên flow-engine trong thời gian chạy v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) bởi @Molunerfinn
- **[Trình quản lý nguồn dữ liệu]**

  - Đã thêm quản lý quyền nguồn dữ liệu client-v2 và căn chỉnh các ngăn kéo chọn quyền liên quan. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) bởi @jiannx
  - Tối ưu hóa API mô hình hóa dữ liệu để hỗ trợ tạo bộ sưu tập nhận xét với AI, cấu hình trường quan hệ cho các nguồn dữ liệu bên ngoài và thiết lập quy tắc xác thực trường ([#9480](https://github.com/nocobase/nocobase/pull/9480)) bởi @2013xile
- **[Bộ sưu tập: Kết nối với dữ liệu nước ngoài (FDW)]** Cải thiện tính tương đương của mẫu bộ sưu tập V2 cho các bộ sưu tập SQL và bộ sưu tập dữ liệu nước ngoài, bao gồm xác nhận SQL, quản lý máy chủ cơ sở dữ liệu nước ngoài và sắp xếp mẫu. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) bởi @katherinehhh
- **[Bộ lọc đa từ khóa]** Đã di chuyển bộ lọc đa từ khóa vào client-v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) bởi @gchust
- **[Workflow]**

  - Đã loại bỏ khớp nối giao dịch lịch sử workflow khỏi việc thực thi workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) bởi @mytharcher
  - Tái cấu trúc kiểm tra tính khả dụng của async-node trong workflow ([#9532](https://github.com/nocobase/nocobase/pull/9532)) bởi @mytharcher
  - Đã thêm xác thực cho tất cả các trigger và node ([#8930](https://github.com/nocobase/nocobase/pull/8930)) bởi @mytharcher
- **[Mẫu UI]** Đã di chuyển các mẫu UI sang client-v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) bởi @gchust
- **[Phòng ban]** Đã thêm trang cài đặt v2 để quản lý phòng ban, thành viên phòng ban và phân công phòng ban cho người dùng. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) bởi @jiannx
- **[Trình quản lý thông báo]** Đã di chuyển các plugin liên quan đến thông báo sang v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) bởi @Molunerfinn
- **[Trực quan hóa dữ liệu]** Đã thêm hỗ trợ client-v2 cho các khối biểu đồ. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) bởi @jiannx
- **[Xác minh]** Đã thêm client v2 vào plugin Xác minh (trang cài đặt admin, mục trung tâm người dùng, biểu mẫu OTP SMS). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) bởi @Molunerfinn
- **[Xác thực]**

  - Cài đặt thương hiệu tùy chỉnh hiện hoạt động chính xác trong client v2 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) bởi @zhangzhonghe
  - Triển khai trang cài đặt Authenticators trong client-v2 và cung cấp các nguyên thủy bảng, đầu vào biến và biểu mẫu client-v2 có thể tái sử dụng. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) bởi @Molunerfinn
- **[Khối: Bản đồ]** Đã thêm hỗ trợ client v2 cho plugin bản đồ. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) bởi @jiannx
- **[Bản địa hóa]** Cải thiện các tác vụ dịch thuật bản địa hóa của Lina với phạm vi dịch thuật, cài đặt ngôn ngữ tham chiếu và chỉnh sửa nhanh ([#9521](https://github.com/nocobase/nocobase/pull/9521)) bởi @2013xile
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Đã di chuyển các plugin block-workbench và workflow-custom-action-trigger sang client-v2, bao gồm các mô hình hành động và luồng máy quét QR của chúng. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) bởi @jiannx
  - Đã thêm kiểm soát ACL của chế độ kích hoạt trên bản ghi (cả đơn và nhiều) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) bởi @mytharcher
- **[Khối: iframe]** Đã thêm hỗ trợ v2 cho khối iframe. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) bởi @jiannx
- **[Khối: GridCard]** Đã cập nhật plugin thẻ lưới để hỗ trợ client-v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) bởi @jiannx
- **[Nhân viên AI]**

  - Tối ưu hóa tương tác và hiệu suất hội thoại song song của nhân viên AI ([#9462](https://github.com/nocobase/nocobase/pull/9462)) bởi @cgyrock
  - Nhân viên AI hỗ trợ xử lý song song nhiều cuộc hội thoại ([#9344](https://github.com/nocobase/nocobase/pull/9344)) bởi @cgyrock
  - Cải thiện các công cụ chỉnh sửa RunJS của Nathan và giảm độ trễ trong các cuộc trò chuyện AI dài ([#9311](https://github.com/nocobase/nocobase/pull/9311)) bởi @2013xile
  - Cập nhật cấu hình tác vụ tắt của nhân viên AI để sử dụng cùng thành phần cài đặt kỹ năng với cấu hình node nhân viên AI trong workflow ([#9246](https://github.com/nocobase/nocobase/pull/9246)) bởi @cgyrock
  - Điều chỉnh tương tác cấu hình kỹ năng/công cụ cho hướng dẫn nhân viên AI ([#9232](https://github.com/nocobase/nocobase/pull/9232)) bởi @cgyrock
  - Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang
  - Cập nhật lời nhắc người dùng hộp thoại AI ([#8717](https://github.com/nocobase/nocobase/pull/8717)) bởi @heziqiang
- **[Trình quản lý tệp]** Các plugin lưu trữ của bên thứ ba hiện có thể đăng ký biểu mẫu loại lưu trữ của riêng họ trên trang cài đặt trình quản lý tệp v2. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) bởi @Molunerfinn
- **[Khối: Kanban]**

  - Cải thiện tính nhất quán về khoảng cách trường chi tiết v2 và làm cho khoảng cách thẻ kanban và cột thích ứng tốt hơn với cài đặt chủ đề. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) bởi @jiannx
  - Giảm chiều rộng cột kanban mặc định. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) bởi @jiannx
  - Cải thiện cài đặt tạo khối Lịch và Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) bởi @jiannx
- **[IdP: OAuth]** Các phiên OAuth hiện sử dụng cùng cài đặt hết hạn với chính sách token hệ thống ([#9345](https://github.com/nocobase/nocobase/pull/9345)) bởi @2013xile
- **[Kiểm soát truy cập]** Đã thêm các API mới cho kỹ năng acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) bởi @Andrew1989Y
- **[Flow engine]** Đã thêm các API mới cho việc xây dựng UI. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) bởi @gchust
- **[Hành động: Yêu cầu tùy chỉnh]**

  - thêm các mô hình hành động cho yêu cầu tùy chỉnh ([#8890](https://github.com/nocobase/nocobase/pull/8890)) bởi @jiannx
  - Truyền phát sự kiện hỗ trợ các yêu cầu tùy chỉnh ([#8749](https://github.com/nocobase/nocobase/pull/8749)) bởi @jiannx
- **[Workflow: Sự kiện trước hành động]** Đã thêm quy tắc xác thực cho trigger và node ([#8971](https://github.com/nocobase/nocobase/pull/8971)) bởi @mytharcher
- **[Trường bộ sưu tập: phân chia hành chính Trung Quốc]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) bởi @jiannx
- **[Xác thực: SAML 2.0]**

  - Chuyển hướng đăng nhập SAML/CAS hiện tuân theo tiền tố client hiện đại. bởi @Molunerfinn
  - Đã thêm các mục client-v2 cho các plugin xác thực CAS và SAML để chúng hoạt động với trang đăng nhập v2 và cài đặt Authenticators. bởi @Molunerfinn
- **[Hạn chế IP]** Đã thêm client v2 cho plugin hạn chế IP. bởi @Molunerfinn
- **[Thương hiệu tùy chỉnh]** Cài đặt thương hiệu tùy chỉnh hiện có sẵn trong client v2 bởi @zhangzhonghe
- **[Workflow: Webhook]** Đã thêm xác thực cho API tạo trigger / node bởi @mytharcher
- **[Workflow: Luồng con]**

  - Đã loại bỏ khớp nối giao dịch lịch sử workflow khỏi các hướng dẫn workflow luồng con. bởi @mytharcher
  - Đã thêm xác thực cho API tạo node bởi @mytharcher
- **[In mẫu]** Đã cập nhật siêu dữ liệu bộ sưu tập mẫu in để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Xác thực: OIDC]** Chuyển hướng đăng nhập OIDC hiện tuân theo tiền tố client hiện đại. bởi @Molunerfinn
- **[Lịch sử bản ghi]** Đã cập nhật siêu dữ liệu bộ sưu tập lịch sử bản ghi để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Workflow: Phê duyệt]**

  - Đã thêm cờ `async` cho hướng dẫn phê duyệt, để thích ứng với API tạo node mới trong canvas workflow bởi @mytharcher
  - Đã loại bỏ khớp nối giao dịch lịch sử workflow khỏi các hướng dẫn workflow phê duyệt. bởi @mytharcher
  - Đã thêm xác thực cho việc tạo node phê duyệt bởi @mytharcher
  - Đã cập nhật siêu dữ liệu bộ sưu tập phê duyệt workflow để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
  - Đã thêm xác thực cho API trigger / node bởi @mytharcher
  - Điều chỉnh quy tắc xác thực cho cấu hình trigger phê duyệt và cấu hình node, để đảm bảo trường UI tồn tại bởi @mytharcher
- **[Nhật ký kiểm toán]** Đã cập nhật siêu dữ liệu bộ sưu tập trình ghi nhật ký kiểm toán để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Trình quản lý email]** Đã cập nhật siêu dữ liệu bộ sưu tập trình quản lý email để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock
- **[Giám sát ứng dụng]** Đã cập nhật siêu dữ liệu bộ sưu tập giám sát ứng dụng để phân loại sao lưu kiểm soát phiên bản. bởi @cgyrock

### 🐛 Sửa lỗi

- **[undefined]**

  - căn chỉnh đường dẫn cấu hình nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) bởi @chenos
  - Đã sửa các liên kết chết trong tài liệu đã dịch và bật tính năng phát hiện liên kết chết theo mặc định trong bản dựng tài liệu. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) bởi @Molunerfinn
  - Sửa quy trình phụ thuộc và xây dựng để các lỗi checkout plugin pro độc lập làm hỏng CI thay vì âm thầm bỏ qua phạm vi xây dựng. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) bởi @Molunerfinn
  - Đã sửa các tệp dịch thuật phình to và căn chỉnh cấu trúc tài liệu đa ngôn ngữ. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) bởi @Molunerfinn
  - Đã sửa trình chuyển đổi ngôn ngữ tạo URL không chính xác (ví dụ: `/cn/es/` thay vì `/es/`) trên trang web tài liệu. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) bởi @Molunerfinn
- **[client-v2]**

  - Đã sửa các trường JSON trong chế độ xem hiển thị client-v2 hiển thị ô trống cho các giá trị đối tượng. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) bởi @katherinehhh
  - Đã sửa các trường tùy chọn V2 dịch sai nhãn tùy chọn đơn giản trong môi trường bản địa hóa. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) bởi @katherinehhh
  - Đã sửa các cột bảng v2 trở nên vô hình khi chiều rộng cột tùy chỉnh được đặt thành 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) bởi @katherinehhh
  - Đã điều chỉnh tất cả các bộ chọn trường quan hệ để giới hạn các trường liên kết ở mức tối đa hai cấp ([#9454](https://github.com/nocobase/nocobase/pull/9454)) bởi @jiannx
  - Sửa lỗi lưu quy tắc liên kết menu ([#9666](https://github.com/nocobase/nocobase/pull/9666)) bởi @zhangzhonghe
  - Sửa khoảng cách quá mức phía trên các khối trên trang v2 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) bởi @zhangzhonghe
  - giữ nguyên giá trị trường được gán ([#9640](https://github.com/nocobase/nocobase/pull/9640)) bởi @katherinehhh
  - Sửa các tab đăng nhập ứng dụng con hiển thị các mẫu dịch thuật thô và ngăn ngăn kéo chỉnh sửa phương thức xác thực v2 làm mất giá trị trường khi gửi. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) bởi @Molunerfinn
  - Cải thiện hiệu suất trang quản lý plugin bằng cách sử dụng CSS line-clamp thay vì dấu ba chấm antd Typography. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) bởi @Molunerfinn
  - Đã sửa siêu dữ liệu ngôn ngữ trình duyệt để trang ứng dụng tuân theo ngôn ngữ ứng dụng đã chọn thay vì được đánh dấu là tiếng Anh. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) bởi @Molunerfinn
  - Đã sửa đăng ký phụ thuộc dnd-kit không nhất quán. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) bởi @jiannx
  - Đã sửa tuyến đường plugin Kanban v2 không tải được vì các phụ thuộc dnd-kit không được client cung cấp. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) bởi @jiannx
  - Thành phần Bảng v2 dùng chung hiện hiển thị bộ chọn kích thước trang theo mặc định, phù hợp với hành vi v1. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) bởi @Molunerfinn
  - Đã sửa sự cố danh sách tùy chọn trường tiêu đề trống cho các trường quan hệ trong khối bảng ([#9490](https://github.com/nocobase/nocobase/pull/9490)) bởi @katherinehhh
  - Giữ các nhóm trống sau khi lọc menu v1 trong bố cục v2 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) bởi @zhangzhonghe
  - Đã sửa sự cố trang trở nên trắng sau hộp thoại bật plugin ([#9455](https://github.com/nocobase/nocobase/pull/9455)) bởi @zhangzhonghe
  - Sửa các trang admin v1 bị treo khi chúng tham chiếu các mô-đun plugin v2 trong bản dựng production. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) bởi @Molunerfinn
  - Đã sửa lỗi khi chọn trường quan hệ trong cài đặt trường. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) bởi @gchust
  - Đã sửa sự cố trang 404 nhấp nháy sau khi ứng dụng khởi động ([#9365](https://github.com/nocobase/nocobase/pull/9365)) bởi @zhangzhonghe
  - Đã sửa sự cố một số trang v2 không tải được plugin từ xa ([#9369](https://github.com/nocobase/nocobase/pull/9369)) bởi @zhangzhonghe
  - Sửa các sự cố về trình giữ chỗ kéo khối trang v2 và vị trí thả ([#9361](https://github.com/nocobase/nocobase/pull/9361)) bởi @zhangzhonghe
  - Đã sửa tải plugin từ xa để các URL plugin đã kết thúc bằng `.js` không được giải quyết thành các đường dẫn `.js.js` trùng lặp. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) bởi @Molunerfinn
  - Đã sửa sự cố `RemoteSelect` không hiển thị trong cấu hình của workflow ràng buộc ([#9314](https://github.com/nocobase/nocobase/pull/9314)) bởi @mytharcher
- **[client]**

  - Đã sửa sự cố các khối có thể hiển thị sai là đã xóa sau khi làm mới trang ([#9662](https://github.com/nocobase/nocobase/pull/9662)) bởi @zhangzhonghe
  - sửa sự cố bảng con trong biểu mẫu con không thể thêm hàng thứ hai ([#9586](https://github.com/nocobase/nocobase/pull/9586)) bởi @katherinehhh
  - sửa giữ nguyên định dạng thời gian cho các trường thời gian v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) bởi @katherinehhh
  - tăng giới hạn tải lên hình ảnh đầu vào quét ([#9580](https://github.com/nocobase/nocobase/pull/9580)) bởi @katherinehhh
  - sửa đồng bộ giá trị popup bộ chọn ngày di động ([#9582](https://github.com/nocobase/nocobase/pull/9582)) bởi @katherinehhh
  - Đã sửa tải chế độ dev cho các plugin lưu trữ đã xây dựng phụ thuộc vào các xuất khẩu có tên từ các plugin nguồn cục bộ. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) bởi @Molunerfinn
  - Đã sửa sự cố cài đặt hệ thống xuất hiện trống sau khi gửi ([#9458](https://github.com/nocobase/nocobase/pull/9458)) bởi @zhangzhonghe
  - lọc các khối tùy chọn không cần thiết trong hộp thoại chọn bật lên của các trường liên quan ([#9224](https://github.com/nocobase/nocobase/pull/9224)) bởi @jiannx
  - Đã sửa sự cố tiêu đề trang không cập nhật sau khi chuyển đổi menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) bởi @zhangzhonghe
- **[flow-engine]**

  - Đã sửa sự cố tìm kiếm trường bị xóa khi di chuột qua các trường liên kết ([#9646](https://github.com/nocobase/nocobase/pull/9646)) bởi @zhangzhonghe
  - Đã sửa menu xếp tầng không ổn định khi nhập trong hộp tìm kiếm ([#9473](https://github.com/nocobase/nocobase/pull/9473)) bởi @zhangzhonghe
  - Đã sửa thông báo lỗi không chính xác trong bảng điều khiển trình duyệt. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) bởi @gchust
  - Đã sửa menu con trường quan hệ không ổn định trong menu mô hình con ([#9417](https://github.com/nocobase/nocobase/pull/9417)) bởi @jiannx
  - Đã thêm các đoạn js để thiết lập mục biểu mẫu và mục chi tiết ([#8974](https://github.com/nocobase/nocobase/pull/8974)) bởi @jiannx
- **[build]**

  - Các tài sản văn bản trong bản dựng server hiện được sao chép dưới dạng tệp thay vì được chuyển đổi thành các mô-đun JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) bởi @Molunerfinn
  - Đã sửa lỗi xây dựng plugin khi mã client v1 nhập mục `/client-v2` của plugin khác. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) bởi @Molunerfinn
- **[cli-v1]**

  - Đã sửa lỗi khởi động phát triển create-nocobase-app bằng cách tái sử dụng các vỏ ứng dụng đã đóng gói trong khi vẫn cho phép phát triển plugin cục bộ. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) bởi @Molunerfinn
  - Đã sửa lỗi khởi động phát triển trong các ứng dụng được tạo bằng create-nocobase-app do giải quyết đường dẫn client app-dev. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) bởi @Molunerfinn
- **[server]**

  - Đã sửa các yêu cầu khám phá OAuth của ứng dụng con bị định tuyến như yêu cầu của ứng dụng chính ([#9383](https://github.com/nocobase/nocobase/pull/9383)) bởi @2013xile
  - Hỗ trợ lấy ứng dụng mục tiêu theo tên máy chủ ([#8978](https://github.com/nocobase/nocobase/pull/8978)) bởi @2013xile
- **[cli]**

  - Đã sửa các tùy chọn boolean CLI để chúng có thể bị vô hiệu hóa bằng các cờ phủ định ([#9337](https://github.com/nocobase/nocobase/pull/9337)) bởi @2013xile
  - Đã sửa lỗi đăng nhập OAuth CLI trên Windows do URL ủy quyền dài ([#9159](https://github.com/nocobase/nocobase/pull/9159)) bởi @2013xile
- **[ai]** Đã sửa lỗi thiết lập trường danh mục bị thiếu trong quá trình đăng ký nhân viên AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) bởi @cgyrock
- **[test]** Đã sửa bản dựng plugin để các phụ thuộc server có tên gói chứa dấu chấm như `big.js` được đóng gói vào `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) bởi @Molunerfinn
- **[Lịch]**

  - Đã sửa sự cố không thể thêm khối Chi tiết và Chỉnh sửa trong ngăn kéo chi tiết khối lịch v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) bởi @jiannx
  - Đã sửa màu sự kiện lịch không hiển thị từ trường màu đã cấu hình trên trang v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) bởi @jiannx
  - Đã sửa kiểu con trỏ cho các mục sự kiện trong lớp phủ nhiều sự kiện hơn của lịch ([#9519](https://github.com/nocobase/nocobase/pull/9519)) bởi @jiannx
  - Không đăng ký các hành động lịch cho các khối khác ([#9200](https://github.com/nocobase/nocobase/pull/9200)) bởi @jiannx
- **[Nhân viên AI]**

  - Cải thiện lời nhắc truy vấn dữ liệu của nhân viên AI để tải kỹ năng cần thiết trước khi sử dụng các công cụ truy vấn. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) bởi @cgyrock
  - Đã sửa nút trợ lý Dara bị thiếu trong cài đặt biểu đồ client-v2. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) bởi @cgyrock
  - Các node nhân viên AI trong workflow có thể sử dụng mô hình mặc định ([#9679](https://github.com/nocobase/nocobase/pull/9679)) bởi @cgyrock
  - Đã sửa lỗi `ctx.get` trong các node workflow nhân viên AI ([#9661](https://github.com/nocobase/nocobase/pull/9661)) bởi @cgyrock
  - Đã sửa lỗi khi nhân viên AI truy cập cơ sở kiến thức chỉ đọc ([#9538](https://github.com/nocobase/nocobase/pull/9538)) bởi @cgyrock
  - Đã sửa thẻ gọi công cụ AI không xuất hiện ngay lập tức khi các sự kiện công cụ được truyền phát bị phân tách ([#9534](https://github.com/nocobase/nocobase/pull/9534)) bởi @2013xile
  - Đã sửa sự cố quyền vai trò người vận hành không có hiệu lực trong các node nhân viên AI ([#9513](https://github.com/nocobase/nocobase/pull/9513)) bởi @cgyrock
  - Đã sửa lỗi tải plugin-ai ([#9483](https://github.com/nocobase/nocobase/pull/9483)) bởi @cgyrock
  - Đã sửa node nhân viên AI trong workflow không kết thúc đúng cách sau khi gán công cụ. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) bởi @cgyrock
  - Đã sửa lỗi đọc tệp đính kèm trường liên kết của node nhân viên AI trong workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) bởi @cgyrock
  - Đã sửa sự cố node nhân viên AI trong workflow xóa kỹ năng sau khi chuyển đổi nhân viên AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) bởi @cgyrock
  - Đã sửa lỗi hiển thị tác vụ tắt của nhân viên AI ([#9267](https://github.com/nocobase/nocobase/pull/9267)) bởi @cgyrock
  - Đã sửa lỗi trong API lấy danh sách nhân viên AI ([#9241](https://github.com/nocobase/nocobase/pull/9241)) bởi @cgyrock
  - Tinh chỉnh hành vi ủy thác tác vụ Atlas và cập nhật Viz để sử dụng workflow báo cáo kinh doanh cho các yêu cầu báo cáo ([#9229](https://github.com/nocobase/nocobase/pull/9229)) bởi @2013xile
  - Nhân viên AI trong workflow: Điều chỉnh UI và sửa lỗi. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) bởi @cgyrock
  - Đã sửa các bất thường ghi nhật ký trong hướng dẫn nhân viên AI ([#9180](https://github.com/nocobase/nocobase/pull/9180)) bởi @cgyrock
  - Đã sửa lỗi sắp xếp truy vấn tổng hợp bị ACL loại bỏ ([#9099](https://github.com/nocobase/nocobase/pull/9099)) bởi @2013xile
  - Đã sửa sự cố thông báo lỗi không được hiển thị trong các cuộc trò chuyện của nhân viên AI ([#9097](https://github.com/nocobase/nocobase/pull/9097)) bởi @cgyrock
  - Đã sửa sự cố nhân viên AI không thể sử dụng kỹ năng ([#9023](https://github.com/nocobase/nocobase/pull/9023)) bởi @cgyrock
  - Đã sửa sự cố LLM vẫn cố gắng tải kỹ năng sau khi công cụ getSkill bị vô hiệu hóa ([#9013](https://github.com/nocobase/nocobase/pull/9013)) bởi @cgyrock
  - Đã sửa các trường hợp kiểm tra thất bại trong mô-đun ai của gói core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) bởi @cgyrock
- **[Trình quản lý nguồn dữ liệu]**

  - Đã sửa lỗi hiển thị trường tiêu đề cũ khi mở lại ngăn kéo cấu hình trường nguồn dữ liệu v2 sau khi thay đổi trường tiêu đề. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) bởi @katherinehhh
  - Cải thiện thông báo lỗi của trình quản lý nguồn dữ liệu V2 khi các thao tác bộ sưu tập, trường, đồng bộ và tải bảng thất bại. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) bởi @katherinehhh
  - Đã sửa lỗi bản địa hóa trường đa không gian trong trình quản lý nguồn dữ liệu v2. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) bởi @jiannx
  - Tối ưu hóa đặt tên công cụ MCP và giảm các phản hồi API dư thừa để tránh tiêu thụ quá mức ngữ cảnh hội thoại AI ([#9000](https://github.com/nocobase/nocobase/pull/9000)) bởi @2013xile
- **[Khối: Bản đồ]** Đã sửa lỗi các trường hình học bản đồ bị thiếu trong menu thêm trường của trình quản lý nguồn dữ liệu v2 sau khi bật plugin bản đồ. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) bởi @katherinehhh
- **[Bộ sưu tập: SQL]** Đã chặn quyền truy cập Bộ sưu tập SQL vào siêu dữ liệu PostgreSQL nhạy cảm ([#9683](https://github.com/nocobase/nocobase/pull/9683)) bởi @2013xile
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Đã sửa lỗi thiếu hành động kích hoạt workflow trong danh sách nút bảng hành động workbench. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) bởi @katherinehhh
  - Sửa các tùy chọn Trigger workflow trùng lặp trong menu hành động khối v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) bởi @zhangzhonghe
  - Lọc các tùy chọn ràng buộc workflow hành động tùy chỉnh theo bộ sưu tập khối hiện tại. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) bởi @mytharcher
- **[Hành động: Sao chép bản ghi]** Đặt lại trạng thái nút khi gửi thất bại ([#9676](https://github.com/nocobase/nocobase/pull/9676)) bởi @katherinehhh
- **[Khối: Gantt]**

  - Cải thiện vị trí chú giải công cụ gantt để tránh che các thanh tác vụ và căn chỉnh nhãn tác vụ nhất quán bên trong và bên ngoài thanh ([#9638](https://github.com/nocobase/nocobase/pull/9638)) bởi @jiannx
  - Đã sửa đường dẫn thư mục dùng chung gantt v2 và thêm sọc ngựa vằn. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) bởi @jiannx
- **[Cài đặt giấy phép]**

  - Đã thêm hỗ trợ client-v2 cho cài đặt giấy phép và tiêm giấy phép thương mại. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) bởi @jiannx
  - giải quyết các phụ thuộc đi kèm được liên kết tượng trưng ([#9518](https://github.com/nocobase/nocobase/pull/9518)) bởi @chenos
- **[Trình quản lý tệp]** Cải thiện thông báo lỗi xem trước PDF và ghi lại các yêu cầu CORS cho bộ nhớ ngoài. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) bởi @mytharcher
  Tham khảo: [Xem trước tệp](docs/docs/en/file-manager/file-preview/index.md)
- **[Khối: iframe]** Sửa nội dung iframe không lấp đầy chiều cao khối đã cấu hình ([#9540](https://github.com/nocobase/nocobase/pull/9540)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi]** Cải thiện hiệu suất cấu hình trường với nhiều trường liên kết ([#9524](https://github.com/nocobase/nocobase/pull/9524)) bởi @katherinehhh
- **[Bản địa hóa]** Đã sửa các bản dịch tham chiếu bản địa hóa tích hợp cho các tác vụ dịch thuật AI ([#9531](https://github.com/nocobase/nocobase/pull/9531)) bởi @2013xile
- **[Xác thực]** Ngăn máy chủ bị treo khi mã thông báo xác thực WebSocket tham chiếu đến một trình xác thực có plugin loại xác thực bị dỡ bỏ hoặc thiếu. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) bởi @Molunerfinn
- **[Workflow: JavaScript]**

  - Đã sửa lỗi tải gói thời gian chạy workflow JavaScript QuickJS trong bản dựng production. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) bởi @mytharcher
  - Đã sửa sự cố lỗi xảy ra khi cấu hình node JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) bởi @mytharcher
- **[Khối: Markdown]** Đã sửa sự cố khối Markdown v2 báo lỗi ([#9440](https://github.com/nocobase/nocobase/pull/9440)) bởi @zhangzhonghe
- **[Khối: Cây]**

  - Cải thiện cài đặt khối lọc cây và sửa lỗi liên kết không được hỗ trợ, dự phòng trường tiêu đề và hành vi đặt lại tìm kiếm. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) bởi @jiannx
  - Sửa lỗi hiển thị bất thường của các node khối lọc ([#9260](https://github.com/nocobase/nocobase/pull/9260)) bởi @jiannx
- **[Di động (không dùng nữa)]** Đã sửa các cửa sổ bật lên tin nhắn di động không thể đóng hoặc cuộn ([#9424](https://github.com/nocobase/nocobase/pull/9424)) bởi @zhangzhonghe
- **[AI: Máy chủ MCP]**

  - Đã sửa lỗi đóng gói máy chủ MCP để bao gồm các phụ thuộc thời gian chạy ([#9401](https://github.com/nocobase/nocobase/pull/9401)) bởi @2013xile
  - Đã sửa lỗi không khớp xác thực do các tiêu đề chuyển tiếp không liên quan trong công cụ CRUD chung của MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) bởi @2013xile
  - Đã sửa các công cụ MCP được tạo từ Swagger khi lược đồ đầu vào bao gồm các loại `null` hoặc các điểm đánh dấu `nullable` không hợp lệ cho xác thực công cụ OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) bởi @2013xile
- **[Flow engine]** Đã sửa sự cố các khối do AI tạo không thể chuyển đổi từ mẫu tham chiếu trở lại mẫu trùng lặp. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) bởi @gchust
- **[Khối: Kanban]**

  - Cải thiện kiểu dáng nhỏ gọn của thẻ Kanban và tối ưu hóa lựa chọn mẫu popup tạo nhanh. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) bởi @jiannx
  - Đã sửa các khối liên kết kanban sử dụng các tham số tài nguyên thời gian chạy chưa được giải quyết trong ngữ cảnh popup hoặc trang thứ cấp. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) bởi @jiannx
  - Đã sửa lỗi hiển thị lặp lại lớp nổi cấu hình trường ([#9271](https://github.com/nocobase/nocobase/pull/9271)) bởi @jiannx
- **[Hành động: Yêu cầu tùy chỉnh]** Nâng cấp Koa lên v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) bởi @chenos
- **[Trực quan hóa dữ liệu]** Đã sửa bộ chọn trường trống trong cấu hình truy vấn biểu đồ trên các trang luồng ([#9276](https://github.com/nocobase/nocobase/pull/9276)) bởi @2013xile
- **[IdP: OAuth]**

  - Đã sửa lỗi đăng nhập CLI OAuth và giới hạn đăng ký động ở các URL callback cục bộ ([#9248](https://github.com/nocobase/nocobase/pull/9248)) bởi @2013xile
  - Đã sửa lỗi đăng ký client OAuth và làm mới token thất bại sau khi khởi động lại dịch vụ ([#9139](https://github.com/nocobase/nocobase/pull/9139)) bởi @2013xile
  - Đã sửa quyền truy cập OAuth cho các yêu cầu API thông thường ([#9120](https://github.com/nocobase/nocobase/pull/9120)) bởi @2013xile
  - Đã sửa chuyển hướng không chính xác sau khi đăng nhập MCP OAuth trong các ứng dụng con ([#9015](https://github.com/nocobase/nocobase/pull/9015)) bởi @2013xile
- **[Workflow: Node tổng hợp]** Đã sửa sự cố không thể lưu node tổng hợp do quy tắc xác thực không chính xác ([#9208](https://github.com/nocobase/nocobase/pull/9208)) bởi @mytharcher
- **[Workflow: Node vòng lặp]** Đã sửa xác thực của các node workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) bởi @mytharcher
- **[Kiểm soát truy cập]** cập nhật acl swagger cho máy chủ mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) bởi @Andrew1989Y
- **[Workflow: node gửi thư]** Đã sửa xác thực cho các trường biến ([#9047](https://github.com/nocobase/nocobase/pull/9047)) bởi @mytharcher
- **[Workflow]**

  - Đã sửa quy tắc xác thực không chính xác của hướng dẫn điều kiện ([#9017](https://github.com/nocobase/nocobase/pull/9017)) bởi @mytharcher
  - Đã sửa sự cố không thể đặt chế độ của trigger bộ sưu tập thành "tạo hoặc cập nhật" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) bởi @mytharcher
- **[Chính sách mật khẩu]** Đã sửa lỗi đăng nhập thất bại che giấu lỗi thực sự với "argument #1 unsupported type undefined" khi lỗi cơ bản không có mã trạng thái. bởi @Molunerfinn
- **[Nguồn dữ liệu: REST API]** Đã sửa lỗi xây dựng khai báo plugin nguồn dữ liệu REST API do khai báo kiểu client-v2 của trình quản lý nguồn dữ liệu không khớp. bởi @katherinehhh
- **[plugin-commercial]** Đã thêm các thành phần giấy phép thương mại client-v2 và mục trạng thái giấy phép trên thanh trên cùng. bởi @jiannx
- **[Xác thực: SAML 2.0]** Đã sửa bộ chặn tự động chuyển hướng SAML làm nhấp nháy vỏ ứng dụng và mở ngăn kéo hai lần trên mỗi lần điều hướng. bởi @Molunerfinn
- **[Workflow: Webhook]** Đã sửa sự cố tạo node phản hồi bị chặn bởi xác thực cấu hình `statusCode` bởi @mytharcher
- **[Trình quản lý di chuyển]** Đã sửa `migration:create` trả về `taskId` từ bản ghi tác vụ bất đồng bộ. bởi @Andrew1989Y
- **[In mẫu]** Đã sửa lỗi chuyển đổi PDF in mẫu không được trả về client một cách chính xác bởi @jiannx
- **[Trình quản lý email]**

  - không có xác nhận đóng nào được hiển thị sau khi email được gửi bởi @jiannx
  - Đã sửa tiêu đề hiển thị danh tính thư bởi @jiannx
