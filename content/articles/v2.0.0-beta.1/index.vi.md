---
title: "NocoBase v2.0.0-beta.1: Hỗ trợ các thành phần bảo trì do plugin định nghĩa khi ứng dụng ở trạng thái bảo trì"
description: "Ghi chú phát hành của v2.0.0-beta.1"
---

### 🎉 Tính năng mới

- **[undefined]** Thêm plugin "Khối tham chiếu" thử nghiệm, cho phép tái sử dụng các khối hiện có bằng cách tham chiếu hoặc sao chép. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) bởi @gchust

- **[client]**
  - Hỗ trợ các thành phần bảo trì do plugin định nghĩa khi ứng dụng ở trạng thái bảo trì ([#8252](https://github.com/nocobase/nocobase/pull/8252)) bởi @cgyrock

  - Khi tạo collection, có thể thay đổi kiểu trường id mặc định ([#8129](https://github.com/nocobase/nocobase/pull/8129)) bởi @cgyrock

  - Thêm hỗ trợ cho cài đặt thêm/chọn/hủy liên kết trong subform nhiều-nhiều ([#8099](https://github.com/nocobase/nocobase/pull/8099)) bởi @katherinehhh

  - Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề ([#7960](https://github.com/nocobase/nocobase/pull/7960)) bởi @ljmiaoo

  - Hỗ trợ thiết lập quy tắc sắp xếp mặc định trong khối chi tiết ([#8070](https://github.com/nocobase/nocobase/pull/8070)) bởi @katherinehhh

  - Hỗ trợ thiết lập kiểu dữ liệu cho trường Số (tùy chọn: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) bởi @chenos

  - Hỗ trợ sắp xếp trường cột trong bảng ([#7900](https://github.com/nocobase/nocobase/pull/7900)) bởi @katherinehhh

  - Thêm hỗ trợ tạo nhanh cho trường chọn liên kết ([#7887](https://github.com/nocobase/nocobase/pull/7887)) bởi @katherinehhh

  - Hỗ trợ bộ chọn xếp tầng cho trường liên kết collection dạng cây ([#7846](https://github.com/nocobase/nocobase/pull/7846)) bởi @katherinehhh

  - Hỗ trợ kéo thả cho các thao tác trên cột bảng ([#7842](https://github.com/nocobase/nocobase/pull/7842)) bởi @zhangzhonghe

  - Thêm hỗ trợ phân trang cho bảng con ([#7754](https://github.com/nocobase/nocobase/pull/7754)) bởi @katherinehhh

  - Luồng sự kiện: Giới thiệu các hành động được xác định trước mới để tăng cường tùy chọn tùy chỉnh cho việc xử lý sự kiện, cho phép người dùng hợp lý hóa quy trình làm việc và cải thiện hiệu quả ([#7672](https://github.com/nocobase/nocobase/pull/7672)) bởi @zhangzhonghe

  - Thêm khối markdown 2.0 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) bởi @katherinehhh

  - Hỗ trợ thiết lập quy tắc liên kết cho biểu mẫu con ([#7640](https://github.com/nocobase/nocobase/pull/7640)) bởi @zhangzhonghe

  - Thêm hỗ trợ cho trình lắng nghe sự kiện nhấp chuột vào hàng của bảng, cho phép người dùng thực thi các hành động cụ thể khi một hàng trong bảng được nhấp vào ([#7622](https://github.com/nocobase/nocobase/pull/7622)) bởi @zhangzhonghe

  - Thêm hỗ trợ cho các biến tùy chỉnh ([#7585](https://github.com/nocobase/nocobase/pull/7585)) bởi @zhangzhonghe

  - Thêm biến "Loại thiết bị hiện tại" ([#7576](https://github.com/nocobase/nocobase/pull/7576)) bởi @zhangzhonghe

- **[Quản lý tệp]** Hỗ trợ cấu hình phương thức đổi tên tệp ([#8231](https://github.com/nocobase/nocobase/pull/8231)) bởi @JAVA-LW

- **[Workflow]**
  - Thêm các biến hệ thống mới trong workflow, bao gồm `instanceId` và `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) bởi @mytharcher

  - Thêm nút "Đa điều kiện", cung cấp khả năng kiểm soát luồng như `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) bởi @mytharcher

- **[Khối: Bản đồ]** thêm khối bản đồ 2.0 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]**
  - thêm AI employee để cấu hình biểu đồ ([#7815](https://github.com/nocobase/nocobase/pull/7815)) bởi @heziqiang

  - thêm nguồn dữ liệu SQL cho biểu đồ ([#7830](https://github.com/nocobase/nocobase/pull/7830)) bởi @heziqiang

  - thêm loại biểu đồ "Biểu đồ Donut" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) bởi @heziqiang

- **[Flow engine]** Hỗ trợ sử dụng chuỗi mẫu LiquidJS trong các câu lệnh SQL ([#7667](https://github.com/nocobase/nocobase/pull/7667)) bởi @2013xile

- **[Trình quản lý nguồn dữ liệu]**
  - Nguồn dữ liệu chính hiện hỗ trợ đọc trực tiếp các bảng cơ sở dữ liệu từ cơ sở dữ liệu chính và cho phép sửa đổi giao diện trường ([#7118](https://github.com/nocobase/nocobase/pull/7118)) bởi @aaaaaajie

  - Nguồn dữ liệu chính hiện hỗ trợ đọc trực tiếp các bảng cơ sở dữ liệu từ cơ sở dữ liệu chính và cho phép sửa đổi giao diện trường ([#7118](https://github.com/nocobase/nocobase/pull/7118)) bởi @aaaaaajie

- **[Khối: GridCard]** Thêm khối thẻ lưới 2.0 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) bởi @katherinehhh

- **[Khối: Danh sách]** Thêm khối danh sách 2.0 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) bởi @katherinehhh

- **[Khối: Bảng hành động]** Thêm khối bảng hành động 2.0 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) bởi @katherinehhh

- **[AI employees]** Cải thiện chức năng tìm kiếm web của plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) bởi @cgyrock

- **[Telemetry]** Thêm plugin mới: Telemetry, một plugin đo từ xa dựa trên OpenTelemetry cung cấp các chỉ số CPU, bộ nhớ và yêu cầu HTTP với hỗ trợ xuất HTTP bởi @2013xile

- **[Bản nháp biểu mẫu]** Bản nháp biểu mẫu bởi @chenos

- **[Lưu trữ tệp: S3(Pro)]** Thêm tùy chọn chế độ đổi tên cho bộ lưu trữ S3 Pro bởi @mytharcher

- **[Workflow: Phê duyệt]**
  - Cho phép chọn có hiển thị ảnh chụp nhanh hay bản ghi mới nhất trong giao diện quy trình phê duyệt bởi @mytharcher

  - Thêm cấu hình đối tượng để kiểm soát ai có thể khởi tạo phê duyệt bởi @mytharcher

- **[Quản lý Email]** Triển khai quản lý email 2.0 bởi @jiannx

### 🚀 Cải tiến

- **[undefined]**
  - cập nhật tài liệu tiếng Anh của plugin biểu đồ ([#7748](https://github.com/nocobase/nocobase/pull/7748)) bởi @heziqiang

  - cập nhật tài liệu tổng quan về biểu đồ ([#7702](https://github.com/nocobase/nocobase/pull/7702)) bởi @heziqiang

- **[flow-engine]**
  - Hỗ trợ phương thức window.loacation.reload trong môi trường runjs. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) bởi @gchust

  - Tối ưu hóa các vấn đề về hiệu suất khi chuyển đổi chế độ cấu hình ([#8241](https://github.com/nocobase/nocobase/pull/8241)) bởi @zhangzhonghe

  - Hỗ trợ đối tượng FormData trong môi trường runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) bởi @gchust

  - hỗ trợ ẩn menu cấu hình bước một cách động ([#7924](https://github.com/nocobase/nocobase/pull/7924)) bởi @gchust

  - Thêm tùy chọn useCache vào FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) bởi @zhangzhonghe

  - Thêm phương thức `removeModelWithSubModels` để xóa đệ quy model và các sub-model của nó ([#8064](https://github.com/nocobase/nocobase/pull/8064)) bởi @zhangzhonghe

  - Hỗ trợ chuyển đổi lớp mô hình luồng một cách động ([#7952](https://github.com/nocobase/nocobase/pull/7952)) bởi @gchust

  - Hỗ trợ lắng nghe sự kiện thay đổi cây mô hình luồng trong flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) bởi @gchust

  - cải thiện việc giải quyết biến bản ghi hiện tại, giúp mở hộp thoại nhanh hơn ([#7895](https://github.com/nocobase/nocobase/pull/7895)) bởi @gchust

  - Tối ưu hóa cấu trúc API của các thư viện bên thứ ba trong ngữ cảnh runjs và thêm hỗ trợ cho thư viện biểu tượng Antd. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) bởi @gchust

  - Tối ưu hóa kiểu thanh công cụ để ngăn các biểu tượng bị che khuất ([#7883](https://github.com/nocobase/nocobase/pull/7883)) bởi @zhangzhonghe

  - Tối ưu hóa kiểu thanh công cụ cho các tab trang ([#7795](https://github.com/nocobase/nocobase/pull/7795)) bởi @zhangzhonghe

  - hỗ trợ thao tác trì hoãn trong mô hình luồng ([#7786](https://github.com/nocobase/nocobase/pull/7786)) bởi @gchust

  - Cải thiện thông báo lỗi hiển thị khi sao chép UID không thành công, cung cấp hướng dẫn rõ ràng hơn để giải quyết vấn đề. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) bởi @gchust

  - Hỗ trợ xác định ngữ cảnh biến trong định nghĩa bước luồng ([#7674](https://github.com/nocobase/nocobase/pull/7674)) bởi @gchust

  - Hỗ trợ bỏ qua bước luồng runjs bằng cách thêm skipRunJs=true vào chuỗi truy vấn URL. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) bởi @gchust

  - hỗ trợ biến popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) bởi @gchust

  - Chuẩn hóa các quy trình làm việc tự động để được kích hoạt một cách nhất quán bởi sự kiện "beforeRender", đảm bảo hoạt động có thể dự đoán và thống nhất trên các quy trình. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) bởi @gchust

  - Nâng cao trải nghiệm chỉnh sửa mã với các đoạn mã phong phú hơn và tính năng hoàn thành mã theo ngữ cảnh cho các tình huống khác nhau ([#7559](https://github.com/nocobase/nocobase/pull/7559)) bởi @gchust

  - Tối ưu hóa chức năng kéo và thả ([#7526](https://github.com/nocobase/nocobase/pull/7526)) bởi @zhangzhonghe

- **[sdk]** Cải thiện triển khai lưu trữ API ([#8308](https://github.com/nocobase/nocobase/pull/8308)) bởi @chenos

- **[client]**
  - Hỗ trợ chế độ toàn màn hình cho trình chỉnh sửa mã JS. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) bởi @gchust

  - làm cho Thêm con tương đương với Thêm mới của liên kết con tương ứng ([#8272](https://github.com/nocobase/nocobase/pull/8272)) bởi @katherinehhh

  - hỗ trợ xóa giá trị mặc định cho trường màu ([#8268](https://github.com/nocobase/nocobase/pull/8268)) bởi @katherinehhh

  - sử dụng select cho cấu hình độ rộng cột thao tác ([#8218](https://github.com/nocobase/nocobase/pull/8218)) bởi @katherinehhh

  - hỗ trợ độ rộng cột tùy chỉnh cho các cột bảng ([#8200](https://github.com/nocobase/nocobase/pull/8200)) bởi @katherinehhh

  - thay đổi độ rộng cột bảng để sử dụng các tùy chọn có thể chọn ([#8188](https://github.com/nocobase/nocobase/pull/8188)) bởi @katherinehhh

  - cải thiện kiểu recordPicker với maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) bởi @katherinehhh

  - tối ưu hóa các tùy chọn cấu hình (Khối, Trường, Hành động) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) bởi @katherinehhh

  - hỗ trợ định dạng số cho trường phần trăm ([#8123](https://github.com/nocobase/nocobase/pull/8123)) bởi @katherinehhh

  - sửa lỗi nhảy phân trang bảng con sau khi xóa hàng và thêm hỗ trợ cho các quy tắc xác thực cột ([#8094](https://github.com/nocobase/nocobase/pull/8094)) bởi @katherinehhh

  - điều chỉnh hiển thị trường lớn trong bảng con có thể chỉnh sửa ([#8078](https://github.com/nocobase/nocobase/pull/8078)) bởi @katherinehhh

  - hỗ trợ dấu ba chấm cho nội dung trường JSON bị tràn ([#8067](https://github.com/nocobase/nocobase/pull/8067)) bởi @katherinehhh

  - hỗ trợ cài đặt allowMultiple trong thành phần tải lên tệp đính kèm ([#8052](https://github.com/nocobase/nocobase/pull/8052)) bởi @katherinehhh

  - hiển thị các tùy chọn bị thu gọn khi di chuột trong thành phần Chọn ([#8030](https://github.com/nocobase/nocobase/pull/8030)) bởi @katherinehhh

  - Hỗ trợ khởi tạo các trường bộ lọc đã chọn trong truy vấn biểu đồ ([#7933](https://github.com/nocobase/nocobase/pull/7933)) bởi @heziqiang

  - Thích ứng các thành phần cho thiết bị di động ([#7870](https://github.com/nocobase/nocobase/pull/7870)) bởi @zhangzhonghe

  - Thêm hỗ trợ cho thư viện Day.js trong ngữ cảnh tập lệnh RunJS, cho phép thao tác ngày và giờ dễ dàng hơn. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) bởi @gchust

  - thêm phiên bản thông tin trang vào ngữ cảnh flow engine ([#7826](https://github.com/nocobase/nocobase/pull/7826)) bởi @gchust

  - nâng cao trình chỉnh sửa Markdown ([#7793](https://github.com/nocobase/nocobase/pull/7793)) bởi @katherinehhh

  - thích ứng với trường tableoid trong 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) bởi @katherinehhh

  - hỗ trợ jsx trong trình chỉnh sửa mã JS ([#7699](https://github.com/nocobase/nocobase/pull/7699)) bởi @gchust

  - hỗ trợ các trường liên kết trong mô hình trường JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) bởi @gchust

- **[server]** Thêm khả năng chịu lỗi khi thiếu phiên bản ứng dụng gây ra lỗi trong khi tìm nạp thông báo bảo trì ứng dụng ([#8196](https://github.com/nocobase/nocobase/pull/8196)) bởi @2013xile

- **[acl]** Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) bởi @mytharcher

- **[telemetry]**
  - Hỗ trợ kiểm soát các chỉ số nào được xuất ([#7938](https://github.com/nocobase/nocobase/pull/7938)) bởi @2013xile

  - Thêm các chỉ số đo từ xa cho số lượng ứng dụng con trực tuyến, v.v. ([#7743](https://github.com/nocobase/nocobase/pull/7743)) bởi @2013xile

- **[database]** Tái cấu trúc plugin mã hóa trường để tăng cường bảo mật, hỗ trợ tạo và xoay vòng khóa ứng dụng, và khóa mã hóa cho từng trường. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) bởi @cgyrock

- **[AI employees]**
  - cải thiện khả năng tương thích Gemini cho các nút LLM trong workflow.<br/>tối ưu hóa công cụ AI dataSourceQuery để xử lý dữ liệu quy mô lớn.<br/>giải quyết các vấn đề về mô hình hóa dữ liệu.<br/>thêm công cụ đề xuất AI. ([#8249](https://github.com/nocobase/nocobase/pull/8249)) bởi @heziqiang

  - Sửa lỗi AI employee không phản hồi khi gửi chỉnh sửa lần đầu<br/>Xóa AI employee tích hợp sẵn không cần thiết “Avery Form Assistant”<br/>Thêm quyền vai trò mặc định ban đầu cho AI employee tích hợp sẵn<br/>Cải thiện khả năng xử lý lỗi và hành vi đầu ra của AI employee<br/>Thêm hỗ trợ cho AI để truy cập các biến ngữ cảnh phương thức<br/>Thêm hỗ trợ cho các nguồn dữ liệu bên ngoài cho AI<br/>Sửa lỗi cắt hội thoại không chính xác khi AI xử lý khối lượng dữ liệu lớn ([#8191](https://github.com/nocobase/nocobase/pull/8191)) bởi @heziqiang

  - Đã bật chức năng chỉnh sửa cho các lời nhắc hệ thống của trợ lý AI tích hợp sẵn.<br/>Tối ưu hóa lời nhắc hệ thống cho trợ lý AI Nathan.<br/>Sửa lỗi máy chủ không đọc được tệp tĩnh. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) bởi @heziqiang

  - thêm trường nhà cung cấp bị thiếu vào biểu mẫu Thêm LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) bởi @heziqiang

  - Plugin AI employee thêm hook nâng cấp ([#7951](https://github.com/nocobase/nocobase/pull/7951)) bởi @heziqiang

  - Cải thiện logic tương tác của AI employee và tối ưu hóa luồng cấu hình tác vụ ([#7707](https://github.com/nocobase/nocobase/pull/7707)) bởi @cgyrock

  - AI employee có thể tự động truy vấn dữ liệu dựa trên siêu dữ liệu khối bảng ([#7703](https://github.com/nocobase/nocobase/pull/7703)) bởi @cgyrock

  - Tối ưu hóa trải nghiệm mã hóa AI, bao gồm sử dụng AI employee để xem xét, chẩn đoán và sửa mã. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) bởi @cgyrock

  - Tái cấu trúc Nhà cung cấp LLM OpenAI thành hai nhà cung cấp riêng biệt để hỗ trợ các API Completions và Responses của OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) bởi @cgyrock

  - Thêm nhà cung cấp LLM mới Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) bởi @ReLaMi96

  - Tối ưu hóa mã hóa AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) bởi @cgyrock

  - thêm nút thu nhỏ cho hộp trò chuyện trong bố cục di động ([#7595](https://github.com/nocobase/nocobase/pull/7595)) bởi @cgyrock

- **[Mẫu UI]**
  - Thêm hỗ trợ mẫu trường cho khối chi tiết. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) bởi @gchust

  - Thêm plugin mẫu UI, cung cấp khả năng tái sử dụng các mẫu khối và mẫu popup. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) bởi @gchust

- **[Workflow]**
  - Thêm phiên bản workflow gốc vào API trùng lặp ([#8225](https://github.com/nocobase/nocobase/pull/8225)) bởi @mytharcher

  - Cải thiện mô tả của trường `changed` trong sự kiện collection ([#8216](https://github.com/nocobase/nocobase/pull/8216)) bởi @mytharcher

  - Hỗ trợ sử dụng cấu hình cũ để tạo mới trong workflow trùng lặp ([#8165](https://github.com/nocobase/nocobase/pull/8165)) bởi @mytharcher

  - Thêm logic chịu lỗi cho dữ liệu bị thiếu trong quá trình chuẩn bị bộ xử lý, để tránh treo thực thi ([#8156](https://github.com/nocobase/nocobase/pull/8156)) bởi @mytharcher

  - Sử dụng tải chậm cho dữ liệu liên kết trên canvas workflow để cải thiện hiệu suất ([#8142](https://github.com/nocobase/nocobase/pull/8142)) bởi @mytharcher

  - Hoàn thiện cấu hình workflow ràng buộc cho nút hành động cập nhật bản ghi ([#7668](https://github.com/nocobase/nocobase/pull/7668)) bởi @mytharcher

- **[Trình quản lý tác vụ bất đồng bộ]**
  - Cải thiện khả năng xử lý lỗi trong các tác vụ dọn dẹp bằng cách thêm cơ chế bắt ngoại lệ để ngăn ứng dụng bị treo ([#8215](https://github.com/nocobase/nocobase/pull/8215)) bởi @mytharcher

  - Các tác vụ bất đồng bộ cho các ứng dụng con chỉ nên khởi động các ứng dụng con mục tiêu trong Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) bởi @2013xile

- **[Khối: Bảng hành động]** cải thiện hiển thị các khối, hành động và trường bị ẩn trong chế độ cấu hình ([#8174](https://github.com/nocobase/nocobase/pull/8174)) bởi @katherinehhh

- **[Khối: Danh sách]** thêm nút Liên kết cho các khối Bảng, Danh sách và Thẻ lưới ([#8194](https://github.com/nocobase/nocobase/pull/8194)) bởi @katherinehhh

- **[Trình xử lý lỗi]** Không hiển thị thông báo lỗi cơ sở dữ liệu thô khi có lỗi cú pháp SQL, để tránh tiết lộ loại cơ sở dữ liệu ([#8195](https://github.com/nocobase/nocobase/pull/8195)) bởi @2013xile

- **[Khối: Bản đồ]** hỗ trợ dấu ba chấm cho văn bản tràn cho trường bản đồ ở chế độ hiển thị văn bản ([#8189](https://github.com/nocobase/nocobase/pull/8189)) bởi @katherinehhh

- **[Kiểm soát truy cập]** Không cho phép gán vai trò root cho người dùng ([#8180](https://github.com/nocobase/nocobase/pull/8180)) bởi @2013xile

- **[Khối: GridCard]**
  - Tối ưu hóa kiểu khối Thẻ lưới để có bố cục nhỏ gọn hơn ([#8152](https://github.com/nocobase/nocobase/pull/8152)) bởi @katherinehhh

  - thêm cấu hình số hàng cho thẻ lưới và thay thế pageSize bằng tính toán tự động ([#8055](https://github.com/nocobase/nocobase/pull/8055)) bởi @katherinehhh

- **[Trường Collection: Markdown(Vditor)]** Vô hiệu hóa phân tích cú pháp biến trong trường Markdown theo mặc định ở chế độ readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** cho phép chọn ID cho các trường nhập ([#8133](https://github.com/nocobase/nocobase/pull/8133)) bởi @katherinehhh

- **[Trực quan hóa dữ liệu]**
  - cập nhật mẹo cảnh báo và chú thích mẫu mã sự kiện ([#7814](https://github.com/nocobase/nocobase/pull/7814)) bởi @heziqiang

  - thêm tùy chọn định dạng thời gian dữ liệu biểu đồ ([#7763](https://github.com/nocobase/nocobase/pull/7763)) bởi @heziqiang

  - thêm mẹo chạy truy vấn trước khi cấu hình tùy chọn biểu đồ ([#7685](https://github.com/nocobase/nocobase/pull/7685)) bởi @heziqiang

  - làm mới dữ liệu biểu đồ khi nhấp vào nút xem trước toàn cục ([#7678](https://github.com/nocobase/nocobase/pull/7678)) bởi @heziqiang

  - Cập nhật plugin-data-vi 2.0, sửa một số vấn đề và tối ưu hóa giao diện người dùng. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) bởi @heziqiang

  - Mở rộng các loại biểu đồ; Tối ưu hóa giao diện người dùng và trải nghiệm tương tác. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) bởi @heziqiang

- **[Trình quản lý đa ứng dụng (không dùng nữa)]**
  - Đã bật khởi động bất đồng bộ cho các ứng dụng con bằng cách sử dụng hàng đợi ([#7749](https://github.com/nocobase/nocobase/pull/7749)) bởi @2013xile

  - cải thiện giám sát ứng dụng ([#7661](https://github.com/nocobase/nocobase/pull/7661)) bởi @chenos

- **[Trình quản lý nguồn dữ liệu]** Điều chỉnh thứ tự cột của loại trường và giao diện, đồng thời thêm bước xác nhận khi thực hiện sửa đổi. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) bởi @2013xile

- **[Đa không gian]** sử dụng api.storage để thay thế localstorage, tái cấu trúc kiểm soát quyền và sửa lỗi bởi @jiannx

- **[Hành động: Xuất bản ghi Pro]** nhập pro & xuất pro action hỗ trợ kiểm soát quyền bởi @katherinehhh

- **[Telemetry: Prometheus]** Nâng cấp `@opentelemetry/exporter-prometheus` bởi @2013xile

- **[Trường Collection: Mã hóa]** Tối ưu hóa plugin mã hóa trường để hỗ trợ truy xuất dữ liệu với các IV độc lập bởi @cgyrock

- **[Workflow: Phê duyệt]**
  - Cập nhật `approval.data` lên phiên bản mới nhất của bản ghi đang phê duyệt khi kết thúc thực thi, để phù hợp với chế độ hiển thị bản ghi "Mới nhất" bởi @mytharcher

  - Thay đổi API để lấy một mục phê duyệt duy nhất và đơn giản hóa mã bởi @mytharcher

- **[Trình quản lý di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và khả năng hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[undefined]**
  - Sửa lỗi kiểu dáng không chính xác trên trang chủ tài liệu plugin ở chế độ tối. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) bởi @gchust

  - khớp đường dẫn định tuyến hỗ trợ nhiều ứng dụng mới ([#7570](https://github.com/nocobase/nocobase/pull/7570)) bởi @jiannx

  - Sửa lỗi khi trích dẫn một khối sẽ xóa khối được trích dẫn khỏi trang gốc. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) bởi @gchust

- **[client]**
  - sửa lỗi dữ liệu không chính xác trong hộp thoại chi tiết con của khối chi tiết ([#8318](https://github.com/nocobase/nocobase/pull/8318)) bởi @katherinehhh

  - Sửa lỗi xảy ra khi đóng popup hiện tại sau khi mở liên tiếp các popup cấu hình quy tắc liên kết và luồng sự kiện. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) bởi @gchust

  - Sửa lỗi xảy ra khi đóng popup hiện tại sau khi mở liên tiếp các popup cấu hình quy tắc liên kết và luồng sự kiện. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) bởi @gchust

  - Sửa lỗi các thay đổi đối với nút chuyển đổi chỉnh sửa nhanh trong khối bảng yêu cầu làm mới trang mới có hiệu lực. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) bởi @gchust

  - Sửa lỗi các khối sử dụng tham số truy vấn URL làm phạm vi dữ liệu không làm mới chính xác khi các tham số truy vấn thay đổi trong quá trình chuyển đổi menu. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) bởi @gchust

  - sửa lỗi quyền trong thành phần trường liên kết ([#8243](https://github.com/nocobase/nocobase/pull/8243)) bởi @katherinehhh

  - sửa lỗi dữ liệu chi tiết con không cập nhật khi phân trang khối chi tiết ([#8305](https://github.com/nocobase/nocobase/pull/8305)) bởi @katherinehhh

  - sửa lỗi nội dung bảng con lồng nhau không cập nhật khi chuyển trang trong biểu mẫu chỉnh sửa ([#8304](https://github.com/nocobase/nocobase/pull/8304)) bởi @katherinehhh

  - Sửa lỗi không thể mở popup và cải thiện độ ổn định điều hướng ([#8287](https://github.com/nocobase/nocobase/pull/8287)) bởi @zhangzhonghe

  - Sửa lỗi khi chuyển từ thành phần Chọn sang thành phần Mảng con ([#8301](https://github.com/nocobase/nocobase/pull/8301)) bởi @katherinehhh

  - Không cho phép thêm các trường liên kết vào khối biểu mẫu thông qua Trường JS. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) bởi @gchust

  - Sửa lỗi dữ liệu làm mới nhiều lần sau hành động cập nhật bản ghi. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) bởi @gchust

  - Sửa lỗi dữ liệu mới thêm trong biểu mẫu con bị ghi đè bởi dữ liệu đã chọn ([#8292](https://github.com/nocobase/nocobase/pull/8292)) bởi @katherinehhh

  - Sửa lỗi Mục JS không làm mới sau khi chỉnh sửa bản ghi trong khối chi tiết. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) bởi @gchust

  - Sửa lỗi các bản ghi mới thêm không làm mới trong popup thành phần trường chọn dữ liệu. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) bởi @gchust

  - Sửa lỗi hiển thị cho khối JS ở trạng thái ẩn. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) bởi @gchust

  - Sửa lỗi ném ra lỗi trong cài đặt khối biểu mẫu bộ lọc của trường m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) bởi @mytharcher

  - Sửa lỗi ném ra lỗi trong cài đặt khối biểu mẫu bộ lọc của trường m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) bởi @mytharcher

  - sửa lỗi ngăn chặn lỗi khối sau khi trường liên kết bị xóa ([#8273](https://github.com/nocobase/nocobase/pull/8273)) bởi @katherinehhh

  - Sửa lỗi giá trị mặc định của biểu mẫu bộ lọc không kích hoạt bộ lọc khi hiển thị lần đầu ([#8232](https://github.com/nocobase/nocobase/pull/8232)) bởi @zhangzhonghe

  - Sửa lỗi tràn ngăn xếp do vòng lặp vô hạn trong tải chậm các trường liên kết hiển thị ([#8262](https://github.com/nocobase/nocobase/pull/8262)) bởi @zhangzhonghe

  - Xử lý các quy tắc liên kết trống để ngăn lỗi ([#8239](https://github.com/nocobase/nocobase/pull/8239)) bởi @zhangzhonghe

  - Sửa lỗi không thể xóa cột thao tác của khối bảng. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) bởi @gchust

  - Sửa lỗi thực thi xem trước ghi đầu ra JSX đã biên dịch trở lại stepParams, khiến mã nguồn đã lưu bị ghi đè. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) bởi @gchust

  - Sửa lỗi tải lên tệp đính kèm S3 Pro và cải thiện xem trước tệp ([#8211](https://github.com/nocobase/nocobase/pull/8211)) bởi @katherinehhh

  - Ngăn chặn tràn tổng chiều rộng hàng trong quá trình thay đổi kích thước cột ([#8166](https://github.com/nocobase/nocobase/pull/8166)) bởi @zhangzhonghe

  - Sửa lỗi khi chọn “Không” cho bộ lọc hộp kiểm vẫn áp dụng bộ lọc “Có”. ([#8170](https://github.com/nocobase/nocobase/pull/8170)) bởi @gchust

  - sửa lỗi nút gửi không hiển thị trong biểu mẫu tạo khi vai trò có quyền tạo ([#8190](https://github.com/nocobase/nocobase/pull/8190)) bởi @katherinehhh

  - ngăn chặn dữ liệu bảng con/biểu mẫu con hiện có bị xóa khi gửi mà không chọn bất kỳ mục nào ([#8172](https://github.com/nocobase/nocobase/pull/8172)) bởi @katherinehhh

  - ngăn chặn cài đặt Phạm vi dữ liệu xuất hiện trong cấu hình biểu mẫu tạo ([#8176](https://github.com/nocobase/nocobase/pull/8176)) bởi @katherinehhh

  - Sửa lỗi hiển thị trường tableoid trong khối biểu mẫu ([#8177](https://github.com/nocobase/nocobase/pull/8177)) bởi @katherinehhh

  - Không lưu được luồng sự kiện tab ([#8168](https://github.com/nocobase/nocobase/pull/8168)) bởi @chenos

  - xóa khoảng trắng thừa sau khi tab bị ẩn ([#8167](https://github.com/nocobase/nocobase/pull/8167)) bởi @chenos

  - sửa lỗi lọc không chính xác các tùy chọn đã chọn trong lựa chọn bản ghi liên kết ([#8151](https://github.com/nocobase/nocobase/pull/8151)) bởi @katherinehhh

  - sửa lỗi dropdown trường liên kết bị vô hiệu hóa khi trường tùy chọn tồn tại ([#8153](https://github.com/nocobase/nocobase/pull/8153)) bởi @katherinehhh

  - Sửa lỗi chuyển đổi trường nhãn làm mất cấu hình popup. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) bởi @gchust

  - Sửa lỗi nhập văn bản tiếng Trung xóa các tùy chọn hiện có khi sử dụng toán tử chọn nhiều trên trường chọn một trong khối biểu mẫu bộ lọc. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) bởi @gchust

  - Sửa lỗi `RemoteSelect` tải bản ghi không chính xác khi giá trị là null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) bởi @mytharcher

  - sửa lỗi ngăn trạng thái vô hiệu hóa của con chặn lựa chọn trường quan hệ ([#8131](https://github.com/nocobase/nocobase/pull/8131)) bởi @katherinehhh

  - Sửa lỗi nhãn trường mặc định trong khối biểu mẫu bộ lọc không thể dịch chính xác sang nhiều ngôn ngữ. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) bởi @gchust

  - Sửa lỗi chiều rộng thành phần UI không nhất quán khi chọn “Quá khứ” hoặc “Tương lai” cho các trường bộ lọc ngày. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) bởi @gchust

  - Sửa lỗi kiểu tiêu đề và mô tả của khối JS không nhất quán với các khối khác. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) bởi @gchust

  - sửa lỗi ngắt dòng tooltip trường văn bản dài ([#8122](https://github.com/nocobase/nocobase/pull/8122)) bởi @katherinehhh

  - Sửa lỗi các tùy chọn có thể chọn không được liệt kê đầy đủ khi sử dụng toán tử “is any of” hoặc “is none of” để lọc trường dựa trên tùy chọn. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) bởi @gchust

  - sửa lỗi bảng con lồng nhau trong biểu mẫu con không hiển thị dữ liệu ([#8117](https://github.com/nocobase/nocobase/pull/8117)) bởi @katherinehhh

  - Sửa lỗi xóa giá trị bộ lọc thời gian between và kích hoạt lại bộ lọc gây ra lỗi. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) bởi @gchust

  - Sửa lỗi dữ liệu có thể chọn cho các trường liên kết trong khối biểu mẫu bộ lọc không chính xác. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) bởi @gchust

  - Sửa lỗi cấu hình trường tùy chỉnh trong bộ lọc biểu mẫu không được điền trước chính xác và một số cài đặt không có hiệu lực. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) bởi @gchust

  - Sửa lỗi lọc trên các trường Hộp kiểm không có hiệu lực. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) bởi @gchust

  - Sửa lỗi giá trị trường số không được điền trước chính xác trong hành động lọc. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) bởi @gchust

  - Sửa lỗi một số toán tử trường trong biểu mẫu bộ lọc không lọc dữ liệu chính xác. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) bởi @gchust

  - Sửa lỗi các trường đã cấu hình từ một khối đã bị xóa không bị xóa khỏi khối bộ lọc. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) bởi @gchust

  - sửa lỗi khoảng trống thừa khi nút bị ẩn ở chế độ không cấu hình ([#8092](https://github.com/nocobase/nocobase/pull/8092)) bởi @katherinehhh

  - Sửa lỗi không thể sửa đổi văn bản nút đặt lại trong khối biểu mẫu bộ lọc. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) bởi @gchust

  - Sửa lỗi đầu vào trường không hỗ trợ nhiều giá trị khi sử dụng toán tử $in hoặc $notIn để lọc trường. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) bởi @gchust

  - Sửa lỗi các khối dữ liệu mới thêm không tự động xuất hiện trong menu trường của khối biểu mẫu bộ lọc. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) bởi @gchust

  - Menu cấu hình cho các trường liên kết trong biểu mẫu bộ lọc không nên hiển thị tùy chọn tạo nhanh. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) bởi @gchust

  - sửa lỗi dữ liệu bảng con liên kết trong khối Danh sách ([#8082](https://github.com/nocobase/nocobase/pull/8082)) bởi @katherinehhh

  - sửa lỗi quy tắc xác thực trường số từ cài đặt collection không được áp dụng ([#8025](https://github.com/nocobase/nocobase/pull/8025)) bởi @katherinehhh

  - Sửa lỗi các trường trong biểu mẫu bộ lọc bị hạn chế bởi các quy tắc xác thực phía máy chủ cho các trường. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) bởi @gchust

  - sửa lỗi hiển thị trường lớn trong chỉnh sửa bảng con ([#8069](https://github.com/nocobase/nocobase/pull/8069)) bởi @katherinehhh

  - sửa lỗi tạo nhanh ném lỗi khi allowMultiple bị vô hiệu hóa trong lựa chọn bản ghi liên kết ([#8034](https://github.com/nocobase/nocobase/pull/8034)) bởi @katherinehhh

  - vấn đề chỉnh sửa nhanh trường json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) bởi @katherinehhh

  - sửa lỗi trường json nên được gửi dưới dạng một đối tượng ([#8057](https://github.com/nocobase/nocobase/pull/8057)) bởi @katherinehhh

  - Sửa lỗi không thể sử dụng phím Enter để kích hoạt hành động lọc. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) bởi @gchust

  - Sửa lỗi hiển thị N/A sau khi vô hiệu hóa allowMultiple trong lựa chọn bản ghi liên kết nhiều-nhiều ([#8050](https://github.com/nocobase/nocobase/pull/8050)) bởi @katherinehhh

  - Sửa lỗi xóa bản ghi trong khối chọn bản ghi ([#8023](https://github.com/nocobase/nocobase/pull/8023)) bởi @katherinehhh

  - Sửa lỗi menu bản ghi hiện tại xuất hiện khi thêm khối bình luận. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) bởi @gchust

  - Sửa lỗi chuyển đổi trường ngày sang trường thời gian trong hành động lọc gây ra lỗi hiển thị. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) bởi @gchust

  - Sửa lỗi tiêu đề mặc định của các popup hành động chỉnh sửa và tạo mới không chính xác. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) bởi @gchust

  - Sửa lỗi kiểu mặc định của trường JS trong khối chi tiết không chính xác. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) bởi @gchust

  - sửa lỗi độ rộng cột bảng con không được áp dụng ([#8027](https://github.com/nocobase/nocobase/pull/8027)) bởi @katherinehhh

  - sửa lỗi kéo cột bảng con không hoạt động ([#8026](https://github.com/nocobase/nocobase/pull/8026)) bởi @katherinehhh

  - Sửa lỗi biến bản ghi popup hiện tại không thể được giải quyết chính xác trong popup được mở bởi trường liên kết. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) bởi @gchust

  - sửa lỗi kiểu popover trường hiển thị markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) bởi @katherinehhh

  - Đã giải quyết sự cố gây ra lỗi khi tải dữ liệu cho các trường liên kết trong cửa sổ popup, đảm bảo hiển thị và chức năng dữ liệu mượt mà hơn. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) bởi @gchust

  - sửa lỗi khối bảng cây không thể mở rộng các nút con ([#8011](https://github.com/nocobase/nocobase/pull/8011)) bởi @katherinehhh

  - Sửa lỗi lựa chọn và xóa khối bảng cho các khóa tổng hợp ([#7978](https://github.com/nocobase/nocobase/pull/7978)) bởi @katherinehhh

  - Sửa lỗi trạng thái tab trang và tuyến đường không tương ứng ([#7991](https://github.com/nocobase/nocobase/pull/7991)) bởi @zhangzhonghe

  - sửa lỗi hiển thị khi trường markdown bị rút gọn ở chế độ HTML ([#7994](https://github.com/nocobase/nocobase/pull/7994)) bởi @katherinehhh

  - sửa lỗi kết quả tìm kiếm không đầy đủ trong bộ chọn xếp tầng ([#7990](https://github.com/nocobase/nocobase/pull/7990)) bởi @katherinehhh

  - Sửa lỗi mở khối chi tiết trong popup cho các trường quan hệ không phải ID gây ra lỗi. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) bởi @gchust

  - Sửa lỗi dữ liệu liên kết không tải chính xác trong popup cho các trường quan hệ không phải ID. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) bởi @gchust

  - sửa lỗi cài đặt độ chính xác không hợp lệ cho định dạng trường số ([#7967](https://github.com/nocobase/nocobase/pull/7967)) bởi @katherinehhh

  - sửa lỗi giá trị bộ lọc không bị xóa khi nhấp vào nút Đặt lại ([#7966](https://github.com/nocobase/nocobase/pull/7966)) bởi @zhangzhonghe

  - Sửa lỗi gõ không chính xác trong trang 2.0 mới ([#7945](https://github.com/nocobase/nocobase/pull/7945)) bởi @zhangzhonghe

  - sửa lỗi tự động ngắt dòng trường văn bản trong khối chi tiết khi nội dung vượt quá chiều rộng ([#7955](https://github.com/nocobase/nocobase/pull/7955)) bởi @katherinehhh

  - sửa lỗi ném ra lỗi khi xóa giá trị trong bộ chọn xếp tầng nhiều cấp ([#7943](https://github.com/nocobase/nocobase/pull/7943)) bởi @katherinehhh

  - xóa hành động bảng cây khỏi khối collection không phải cây ([#7931](https://github.com/nocobase/nocobase/pull/7931)) bởi @katherinehhh

  - Sửa lỗi tiêu đề và mô tả không được hiển thị trong khối JS. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) bởi @gchust

  - Sửa lỗi các khối bị ẩn vẫn chiếm không gian trên trang. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) bởi @gchust

  - Sửa lỗi nút đặt lại trong nút bộ lọc xóa các điều kiện mặc định ([#7903](https://github.com/nocobase/nocobase/pull/7903)) bởi @zhangzhonghe

  - sửa lỗi kiểm tra quyền không chính xác cho các trường biểu mẫu con trong biểu mẫu mới ([#7902](https://github.com/nocobase/nocobase/pull/7902)) bởi @katherinehhh

  - sửa lỗi trong cài đặt mục biểu mẫu ([#7867](https://github.com/nocobase/nocobase/pull/7867)) bởi @katherinehhh

  - Sửa lỗi trường văn bản đa dạng thức không thể nhập giá trị mặc định và trường chọn nhiều không thể chọn nhiều tùy chọn. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) bởi @gchust

  - Sửa lỗi cấu hình trường JS mặc định không sử dụng cài đặt chế độ hiển thị. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) bởi @gchust

  - Sửa lỗi không thể đặt giá trị mặc định của trường ngày trong mô hình khối biểu mẫu bộ lọc. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) bởi @gchust

  - Sửa lỗi các thao tác chỉnh sửa nhanh trong khối bảng không cập nhật dữ liệu chính xác. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) bởi @gchust

  - Sửa lỗi khi xem trước mã trong trình chỉnh sửa mã nếu mã chứa cú pháp jsx ([#7836](https://github.com/nocobase/nocobase/pull/7836)) bởi @gchust

  - Sửa lỗi các quy tắc liên kết cho các nút hành động hàng trong khối bảng không được thực thi lại sau khi dữ liệu hàng được cập nhật, đảm bảo các quy tắc hiện được áp dụng lại đúng cách khi có thay đổi. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) bởi @gchust

  - Sửa lỗi 'value.replace is not a function' trong trường quan hệ biểu mẫu bộ lọc ([#7824](https://github.com/nocobase/nocobase/pull/7824)) bởi @zhangzhonghe

  - biến collection hiện tại không nên có thể chọn được từ bộ chọn biến của thành phần bộ lọc ([#7818](https://github.com/nocobase/nocobase/pull/7818)) bởi @gchust

  - Sửa lỗi tham số không chính xác trong callback onChange ([#7807](https://github.com/nocobase/nocobase/pull/7807)) bởi @zhangzhonghe

  - không thể ẩn cột hành động của khối bảng ([#7804](https://github.com/nocobase/nocobase/pull/7804)) bởi @gchust

  - Sửa lỗi trường chọn collection không thể chọn collection chính xác ([#7794](https://github.com/nocobase/nocobase/pull/7794)) bởi @katherinehhh

  - hỗ trợ chọn toàn bộ đối tượng biến trong lời nhắc của AI employee ([#7791](https://github.com/nocobase/nocobase/pull/7791)) bởi @gchust

  - sửa lỗi độ rộng thao tác bảng và jsColumn không được áp dụng ([#7777](https://github.com/nocobase/nocobase/pull/7777)) bởi @katherinehhh

  - phạm vi dữ liệu của khối không hoạt động nếu được đặt bởi luồng sự kiện trang ([#7788](https://github.com/nocobase/nocobase/pull/7788)) bởi @gchust

  - sửa lỗi dấu ba chấm trường tiêu đề trường liên kết không được áp dụng ([#7778](https://github.com/nocobase/nocobase/pull/7778)) bởi @katherinehhh

  - quy tắc liên kết của hành động cập nhật bản ghi không hoạt động ([#7774](https://github.com/nocobase/nocobase/pull/7774)) bởi @gchust

  - Sửa lỗi xác thực bắt buộc không thành công cho trường Markdown Vditor ([#7764](https://github.com/nocobase/nocobase/pull/7764)) bởi @katherinehhh

  - Sửa lỗi nhãn của các loại enum trong các thành phần liên quan đến biến không được hiển thị bằng ngôn ngữ chính xác. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) bởi @gchust

  - Sửa lỗi thiếu chỉ báo trường bắt buộc sau khi đặt xác thực giao diện người dùng ([#7760](https://github.com/nocobase/nocobase/pull/7760)) bởi @katherinehhh

  - Thêm cấu hình phạm vi dữ liệu cho các trường quan hệ trong biểu mẫu bộ lọc ([#7761](https://github.com/nocobase/nocobase/pull/7761)) bởi @zhangzhonghe

  - sửa lỗi xóa ngày không có múi giờ trong biểu mẫu chỉnh sửa ([#7759](https://github.com/nocobase/nocobase/pull/7759)) bởi @katherinehhh

  - Sửa lỗi xác thực trường bắt buộc cho các quy tắc liên kết ([#7756](https://github.com/nocobase/nocobase/pull/7756)) bởi @zhangzhonghe

  - sửa lỗi định dạng thời gian trong các trường bảng con ([#7750](https://github.com/nocobase/nocobase/pull/7750)) bởi @katherinehhh

  - giải quyết vấn đề Ngày không hợp lệ khi xóa Ngày được chỉ định trong bộ lọc… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) bởi @katherinehhh

  - không thể tải các trường của biến biểu mẫu hiện tại ([#7745](https://github.com/nocobase/nocobase/pull/7745)) bởi @gchust

  - Đã giải quyết sự cố gán một mảng làm giá trị hoặc giá trị mặc định cho trường "toOne" dẫn đến lỗi. Điều này đảm bảo xử lý chính xác các kết quả phân giải biến, cải thiện độ ổn định và độ chính xác của hệ thống. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) bởi @gchust

  - Đã giải quyết sự cố biến trường liên kết trong biểu mẫu hiện tại không thể được xác định đúng cách, đảm bảo xử lý dữ liệu chính xác trong biểu mẫu. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) bởi @gchust

  - Sửa lỗi các trường không thể lọc được liệt kê không chính xác trong các tùy chọn bộ lọc, đảm bảo chỉ các trường có thể áp dụng mới xuất hiện để lựa chọn. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) bởi @gchust

  - giải quyết vấn đề giao diện người dùng khi xóa trường liên kết trong collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) bởi @katherinehhh

  - Sửa lỗi đã biết với các quy tắc liên kết biểu mẫu con ([#7698](https://github.com/nocobase/nocobase/pull/7698)) bởi @zhangzhonghe

  - menu trường khối js không thể tải được trong khối biểu mẫu bộ lọc ([#7690](https://github.com/nocobase/nocobase/pull/7690)) bởi @gchust

  - Đã giải quyết sự cố người dùng không thể đặt giá trị mặc định cho các trường được hiển thị ở chế độ chỉ đọc. Điều này đảm bảo cấu hình trường mượt mà hơn khi các trường không thể chỉnh sửa. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) bởi @gchust

  - Sửa lỗi URL không cập nhật chính xác sau khi chuyển đổi tab trong popup, mở lại popup lồng nhau và sau đó đóng tất cả các popup. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) bởi @gchust

  - xử lý thiếu ngữ cảnh trong usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) bởi @chenos

  - Sửa lỗi hiển thị trang bất thường khi chuyển đổi phân trang bảng ([#7572](https://github.com/nocobase/nocobase/pull/7572)) bởi @zhangzhonghe

  - Không thể cấu hình giá trị trường gán cho hành động `Cập nhật` và `Cập nhật hàng loạt` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) bởi @gchust

  - Sửa lỗi không làm mới dữ liệu sau khi gửi biểu mẫu ([#7560](https://github.com/nocobase/nocobase/pull/7560)) bởi @zhangzhonghe

  - Sửa lỗi hành động "Chạy" trong trình chỉnh sửa mã không hoạt động, đảm bảo người dùng hiện có thể thực thi mã chính xác. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) bởi @gchust

- **[flow-engine]**
  - Sửa lỗi dropdown bộ chọn trường collection trong hành động lọc có chiều cao không đủ. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) bởi @gchust

  - Sửa lỗi nội dung tab popup không hiển thị ([#8281](https://github.com/nocobase/nocobase/pull/8281)) bởi @zhangzhonghe

  - Sửa lỗi hủy gắn kết trang và hiển thị lại khi mở một trang con ([#8276](https://github.com/nocobase/nocobase/pull/8276)) bởi @zhangzhonghe

  - sửa lỗi kiểm tra quyền cho thêm bản ghi con trong bảng cây ([#8240](https://github.com/nocobase/nocobase/pull/8240)) bởi @katherinehhh

  - Sửa lỗi một số biến liên quan đến bản ghi popup khối được hiển thị không chính xác. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) bởi @gchust

  - Sửa lỗi các hành động hoặc tab được thêm sau khi kéo các hành động hoặc tab không hiển thị. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) bởi @gchust

  - vấn đề kiểm tra quyền trong các nguồn dữ liệu bên ngoài ([#8221](https://github.com/nocobase/nocobase/pull/8221)) bởi @katherinehhh

  - sửa lỗi các hành động nguồn dữ liệu bên ngoài bị ẩn mặc dù có quyền ([#8217](https://github.com/nocobase/nocobase/pull/8217)) bởi @katherinehhh

  - Sửa lỗi gửi biểu mẫu trong một phương thức được sử dụng lại thông qua popup uid không làm mới dữ liệu khối. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) bởi @gchust

  - Sửa lỗi tải xuống tệp không chính xác cho tệp đính kèm ([#8154](https://github.com/nocobase/nocobase/pull/8154)) bởi @katherinehhh

  - sửa lỗi: chuyển đổi không chính xác khi sử dụng kiểu số nguyên làm tùy chọn enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) bởi @chenos

  - Sửa lỗi các mục menu sub-model có thể chuyển đổi không thành công khi `useModel` bị bỏ qua bằng cách suy luận nó từ `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) bởi @zhangzhonghe

  - Sửa lỗi các tùy chọn cấu hình từ thành phần trước đó vẫn hiển thị trong menu sau khi chuyển đổi thành phần trường. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) bởi @gchust

  - Di chuyển useEffect trước khi trả về có điều kiện trong FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) bởi @zhangzhonghe

  - Sửa lỗi các trường liên kết không được hỗ trợ xuất hiện trong các trường thao tác lọc. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) bởi @gchust

  - sửa lỗi bản ghi bình luận không lưu được sau khi chỉnh sửa ([#8035](https://github.com/nocobase/nocobase/pull/8035)) bởi @katherinehhh

  - Sửa lỗi các khối dữ liệu không làm mới khi đóng popup bằng cách nhấp vào nút gửi biểu mẫu bên trong popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) bởi @gchust

  - Sửa lỗi biến bản ghi hiện tại không thể được kích hoạt chính xác để giải quyết trong khối chi tiết. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) bởi @gchust

  - Sửa lỗi hiển thị biểu tượng thanh công cụ bị lệch trong nút khối chi tiết ([#7929](https://github.com/nocobase/nocobase/pull/7929)) bởi @zhangzhonghe

  - Sửa lỗi mở biểu mẫu chỉnh sửa nhanh của khối bảng gây ra lỗi. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) bởi @gchust

  - Sửa lỗi dữ liệu quyền ACL không được tải lại sau khi đăng xuất và đăng nhập. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) bởi @gchust

  - Sửa lỗi các thay đổi đối với luồng sự kiện chỉ có hiệu lực sau khi làm mới trang. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) bởi @gchust

  - Sửa lỗi các biến trong trường liên kết biểu mẫu con không được giải quyết chính xác khi trường được sửa đổi thông qua giao diện người dùng. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) bởi @gchust

  - lỗi trong biểu mẫu chỉnh sửa cho các bản ghi có nhiều khóa chính ([#7798](https://github.com/nocobase/nocobase/pull/7798)) bởi @gchust

  - Sửa lỗi một số cấu hình cho hành động "Mở Chế độ xem" không được áp dụng, đảm bảo hành động hiện hoạt động như dự định cho tất cả các cấu hình được chỉ định. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) bởi @gchust

  - Sửa lỗi các nút hành động trong khối bảng không cập nhật chính xác sau khi chuyển trang, đảm bảo chức năng của chúng khớp với dữ liệu của trang hiện tại. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) bởi @gchust

  - khi giá trị bộ lọc trường được đặt thành false, yêu cầu với phạm vi dữ liệu không chính xác ([#7766](https://github.com/nocobase/nocobase/pull/7766)) bởi @gchust

  - sửa lỗi: giải quyết vấn đề tham số yêu cầu trang sau khi xóa dữ liệu trên trang cuối cùng ([#7755](https://github.com/nocobase/nocobase/pull/7755)) bởi @katherinehhh

  - không thể giải quyết giá trị trường liên kết của biến đối tượng hiện tại của biểu mẫu con ([#7751](https://github.com/nocobase/nocobase/pull/7751)) bởi @gchust

  - các bước của luồng sự kiện không nên được hiển thị trong menu cấu hình ([#7723](https://github.com/nocobase/nocobase/pull/7723)) bởi @gchust

  - lựa chọn ngữ cảnh không chính xác của bản ghi popup hiện tại khi chỉnh sửa phạm vi dữ liệu của trường liên kết bên trong biểu mẫu chỉnh sửa ([#7675](https://github.com/nocobase/nocobase/pull/7675)) bởi @gchust

  - Đã giải quyết sự cố các hành động luồng được xác định bởi mô hình luồng không thể cấu hình, đảm bảo người dùng hiện có thể tùy chỉnh các hành động luồng như mong muốn. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) bởi @gchust

  - Sửa lỗi khi sao chép hoặc dán các đoạn mã trong trình chỉnh sửa mã JS. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) bởi @gchust

  - Sửa lỗi bản dịch không có hiệu lực trong các thành phần antd ([#7621](https://github.com/nocobase/nocobase/pull/7621)) bởi @zhangzhonghe

  - không thể lấy ngữ cảnh chế độ xem hiện tại trong khối tham chiếu ([#7620](https://github.com/nocobase/nocobase/pull/7620)) bởi @gchust

- **[database]**
  - Bao gồm phạm vi thông qua khi truy vấn các mối quan hệ m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) bởi @2013xile

  - Bao gồm phạm vi thông qua khi truy vấn các mối quan hệ m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) bởi @2013xile

  - Sửa lỗi truy vấn trường ngày không nhất quán giữa nguồn dữ liệu chính và bên ngoài ([#8181](https://github.com/nocobase/nocobase/pull/8181)) bởi @cgyrock

  - `filterByTk` hiện hỗ trợ mảng khi truy vấn các collection có nhiều khóa mục tiêu bộ lọc ([#7986](https://github.com/nocobase/nocobase/pull/7986)) bởi @chenos

  - Đặt `search_path` trước khi thực thi các câu lệnh SQL bằng phương thức `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) bởi @2013xile

- **[cli]** license-kit tương thích với trường hợp DB_PASSWORD trống ([#8220](https://github.com/nocobase/nocobase/pull/8220)) bởi @jiannx

- **[server]**
  - Hỗ trợ trường ID Snowflake (53-bit) cho các nguồn dữ liệu bên ngoài ([#8185](https://github.com/nocobase/nocobase/pull/8185)) bởi @2013xile

  - Cập nhật license-kit lên phiên bản mới nhất ([#8173](https://github.com/nocobase/nocobase/pull/8173)) bởi @jiannx

  - Giữ lại field.targetKey khi sao chép các trường tham chiếu ([#7599](https://github.com/nocobase/nocobase/pull/7599)) bởi @chenos

  - Lỗi di chuyển khóa chính ([#7563](https://github.com/nocobase/nocobase/pull/7563)) bởi @2013xile

- **[acl]**
  - Sửa lỗi API `acl.can` trả về `null` khi vai trò là `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) bởi @mytharcher

  - sửa lỗi: acl.allow được thực thi quá sớm ([#8065](https://github.com/nocobase/nocobase/pull/8065)) bởi @chenos

- **[utils]**
  - Sửa lỗi "Invalid filter item type" trên nút bộ lọc ([#7838](https://github.com/nocobase/nocobase/pull/7838)) bởi @zhangzhonghe

  - Sửa lỗi 'Unrecognized operation' trong luồng sự kiện ([#7835](https://github.com/nocobase/nocobase/pull/7835)) bởi @zhangzhonghe

- **[Hành động: Cập nhật hàng loạt]** Sửa lỗi trong hành động cập nhật hàng loạt cho các nguồn dữ liệu bên ngoài. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) bởi @gchust

- **[Trực quan hóa dữ liệu]**
  - Sửa lỗi về hiển thị nhãn biểu đồ tròn AI, chuẩn hóa tùy chọn cho biểu đồ tròn dựa trên tập dữ liệu.<br/> Giới hạn trường thứ tự biểu đồ chỉ cho các trường đã chọn. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) bởi @heziqiang

  - Giải quyết vấn đề về chế độ SQL chọn nguồn dữ liệu bên ngoài; <br/>Giải quyết vấn đề về trạng thái tải khối biểu đồ trong quá trình tìm nạp dữ liệu;  <br/> Giải quyết vấn đề về hủy cấu hình khối biểu đồ trống; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) bởi @heziqiang

  - Sửa lỗi khối biểu đồ không cập nhật sau khi lưu ([#7920](https://github.com/nocobase/nocobase/pull/7920)) bởi @heziqiang

  - Chỉ sử dụng chế độ gỡ lỗi tài nguyên sql trong quá trình xem trước biểu đồ ([#7893](https://github.com/nocobase/nocobase/pull/7893)) bởi @heziqiang

  - sử dụng API sql:runById để tìm nạp dữ liệu truy vấn khi khởi tạo ([#7677](https://github.com/nocobase/nocobase/pull/7677)) bởi @heziqiang

  - sửa lỗi truy vấn SQL khi phân tích cú pháp biến ([#7642](https://github.com/nocobase/nocobase/pull/7642)) bởi @heziqiang

  - sửa lỗi thiếu tham số orders trong truy vấn dữ liệu biểu đồ ([#7636](https://github.com/nocobase/nocobase/pull/7636)) bởi @heziqiang

  - Sửa lỗi biểu đồ không thể hiển thị do hết thời gian chờ đăng ký sự kiện ([#7608](https://github.com/nocobase/nocobase/pull/7608)) bởi @heziqiang

- **[Hành động: Nhập bản ghi]**
  - Xác minh không gian khi nhập tệp ([#8285](https://github.com/nocobase/nocobase/pull/8285)) bởi @jiannx

  - Sửa lỗi chỉ mục hàng trong thông báo lỗi luôn là 1 khi lỗi xảy ra trong hành động nhập ([#8244](https://github.com/nocobase/nocobase/pull/8244)) bởi @mytharcher

  - Đồng bộ chờ các sự kiện `afterCreate` được kích hoạt bởi quá trình nhập kết thúc. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) bởi @2013xile

  - giải quyết vấn đề hiển thị danh sách trường trong các trường có thể nhập ([#7710](https://github.com/nocobase/nocobase/pull/7710)) bởi @katherinehhh

- **[Quản lý tệp]**
  - Sửa lỗi ném ra lỗi khi tải tệp lớn hơn 5MB lên AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) bởi @mytharcher

  - Sửa lỗi xem trước tệp `.txt` trên OSS sai bảng mã ([#8161](https://github.com/nocobase/nocobase/pull/8161)) bởi @mytharcher

  - Sửa lỗi hiển thị dữ liệu chi tiết con không chính xác trong các khối Danh sách và Thẻ lưới ([#8087](https://github.com/nocobase/nocobase/pull/8087)) bởi @katherinehhh

  - Sửa lỗi trường tệp đính kèm không hiển thị chính xác trong bảng con readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) bởi @katherinehhh

  - sửa lỗi tải tệp lên bộ lưu trữ được chỉ định thay vì bộ lưu trữ mặc định ([#7947](https://github.com/nocobase/nocobase/pull/7947)) bởi @katherinehhh

  - sửa lỗi cấu hình trường khối bảng ([#7843](https://github.com/nocobase/nocobase/pull/7843)) bởi @katherinehhh

- **[Trình quản lý tác vụ bất đồng bộ]**
  - Sửa lỗi ngôn ngữ của việc hủy tác vụ nền ([#8245](https://github.com/nocobase/nocobase/pull/8245)) bởi @mytharcher

  - Sửa lỗi ngôn ngữ của việc hủy tác vụ nền ([#8245](https://github.com/nocobase/nocobase/pull/8245)) bởi @mytharcher

- **[Workflow]**
  - Sửa lỗi các sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài ([#8207](https://github.com/nocobase/nocobase/pull/8207)) bởi @cgyrock

  - Sửa lỗi các sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài ([#8207](https://github.com/nocobase/nocobase/pull/8207)) bởi @cgyrock

  - Sửa lỗi ném ra lỗi khi xóa phiên bản workflow không phải là phiên bản hiện tại ([#8203](https://github.com/nocobase/nocobase/pull/8203)) bởi @mytharcher

  - Sửa lỗi chỉ hiển thị một bản ghi trong danh sách bản ghi để thực thi thủ công ([#8187](https://github.com/nocobase/nocobase/pull/8187)) bởi @mytharcher

  - Sửa lỗi thêm workflow trong cấu hình nút workflow ràng buộc khiến ứng dụng bị treo sau khi nhấp ([#7541](https://github.com/nocobase/nocobase/pull/7541)) bởi @mytharcher

- **[Mẫu UI]**
  - Sửa lỗi một số popup cũ không thể được sử dụng lại chính xác sau khi được chuyển đổi thành mẫu. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) bởi @gchust

  - Sửa lỗi các mẫu trường không thể áp dụng quy tắc liên kết và bố cục biểu mẫu. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) bởi @gchust

  - Sửa lỗi mở popup trường liên kết sẽ sử dụng sai mẫu popup trường không liên kết. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) bởi @gchust

- **[Collection: Cây]** Cập nhật đường dẫn sau khi tạo hàng loạt các nút collection cây ([#8267](https://github.com/nocobase/nocobase/pull/8267)) bởi @2013xile

- **[AI employees]**
  - Giải quyết vấn đề nội dung tin nhắn nút llm không được hiển thị ([#8257](https://github.com/nocobase/nocobase/pull/8257)) bởi @heziqiang

  - Giải quyết vấn đề về ngắt dòng tin nhắn AI ([#8096](https://github.com/nocobase/nocobase/pull/8096)) bởi @heziqiang

  - Giải quyết vấn đề tên vai trò nguồn dữ liệu không được biên dịch ([#8076](https://github.com/nocobase/nocobase/pull/8076)) bởi @heziqiang

  - Sửa lỗi một số trường bản ghi hiện tại không thể hiển thị trong thành phần chọn biến. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) bởi @gchust

  - Sửa lỗi khi AI tạo đầu ra SQL ([#7956](https://github.com/nocobase/nocobase/pull/7956)) bởi @heziqiang

  - Ẩn nút trò chuyện AI employee trên các trang v1 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) bởi @cgyrock

  - Tối ưu hóa hành vi tìm kiếm web và gợi ý người dùng cho Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) bởi @cgyrock

  - Sửa lỗi các khối có tài nguyên API liên kết không tìm nạp dữ liệu tương ứng khi được chọn. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) bởi @cgyrock

  - sửa lỗi bố cục hộp trò chuyện trong bố cục di động ([#7591](https://github.com/nocobase/nocobase/pull/7591)) bởi @cgyrock

  - Sửa lỗi trong công cụ mô hình hóa dữ liệu AI employee khi sử dụng ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) bởi @cgyrock

  - Sửa lỗi trên trang cấu hình quyền AI employee ([#7548](https://github.com/nocobase/nocobase/pull/7548)) bởi @2013xile

- **[Workflow: Nút thủ công]**
  - Sửa lỗi ném ra lỗi khi hủy thực thi workflow đã xóa ([#8258](https://github.com/nocobase/nocobase/pull/8258)) bởi @mytharcher

  - Sửa lỗi danh sách việc cần làm thủ công đang sử dụng API không chính xác ([#8144](https://github.com/nocobase/nocobase/pull/8144)) bởi @mytharcher

- **[Trường Collection: Chuỗi]**
  - Sửa lỗi khi lệnh sửa chữa trường-chuỗi gặp một collection không tồn tại trong môi trường hiện tại. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) bởi @cgyrock

  - Cải thiện độ mạnh mẽ của plugin-field-sequence khi xử lý lệnh sửa chữa ([#8139](https://github.com/nocobase/nocobase/pull/8139)) bởi @cgyrock

- **[Phòng ban]** Sửa lỗi tìm kiếm tổng hợp không thể định vị người dùng ([#8222](https://github.com/nocobase/nocobase/pull/8222)) bởi @2013xile

- **[Trường Collection: Nhiều-nhiều (mảng)]** Sửa lỗi không thể tạo trường nhiều-nhiều (mảng) khi loại khóa mục tiêu là ID Snowflake (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) bởi @2013xile

- **[Cài đặt giấy phép]**
  - Sửa lỗi hiển thị bất thường của plugin đã được cấp phép ([#8214](https://github.com/nocobase/nocobase/pull/8214)) bởi @jiannx

  - sửa lỗi ngoại lệ xây dựng ts plugin-license ([#8183](https://github.com/nocobase/nocobase/pull/8183)) bởi @jiannx

  - tối ưu hóa giấy phép và bổ sung thông tin nhắc nhở ([#7993](https://github.com/nocobase/nocobase/pull/7993)) bởi @jiannx

- **[Trường Collection: Công thức]**
  - Sửa lỗi không thể thêm trường BigInt vào khối Chi tiết và Biểu mẫu ([#8201](https://github.com/nocobase/nocobase/pull/8201)) bởi @katherinehhh

  - Sửa lỗi các trường công thức trong hành động lọc và khối biểu mẫu bộ lọc không thể nhập giá trị. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) bởi @gchust

  - Sửa lỗi không thể thêm trường công thức vào khối biểu mẫu bộ lọc. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) bởi @gchust

- **[Khối: Bản đồ]** sửa lỗi mức thu phóng bản đồ không chính xác sau khi chuyển đổi menu ([#8193](https://github.com/nocobase/nocobase/pull/8193)) bởi @katherinehhh

- **[Thông báo: Email]** sửa lỗi giới hạn kết nối thông báo email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) bởi @jiannx

- **[Khối: Bảng hành động]** tối ưu hóa kiểu trong bố cục Danh sách của khối bảng hành động ([#8084](https://github.com/nocobase/nocobase/pull/8084)) bởi @katherinehhh

- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi khi cập nhật mật khẩu cho các nguồn dữ liệu bên ngoài ([#8024](https://github.com/nocobase/nocobase/pull/8024)) bởi @cgyrock

- **[Hành động: Xuất bản ghi]**
  - sửa lỗi thiếu các trường hệ thống trong danh sách trường có thể xuất ([#8002](https://github.com/nocobase/nocobase/pull/8002)) bởi @katherinehhh

  - giải quyết vấn đề hiển thị danh sách trường có thể xuất trong hành động xuất ([#7714](https://github.com/nocobase/nocobase/pull/7714)) bởi @katherinehhh

- **[Flow engine]**
  - Đảm bảo các biến bản ghi luôn trả về bản ghi đầy đủ khi được sử dụng cùng với các trường riêng lẻ của chúng. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) bởi @gchust

  - không thể giải quyết các biến trong hành động trường bộ liên kết ([#7684](https://github.com/nocobase/nocobase/pull/7684)) bởi @gchust

  - Sửa lỗi giải quyết không chính xác biến bản ghi của popup cha. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) bởi @gchust

- **[Trình quản lý đa ứng dụng (không dùng nữa)]**
  - Sau khi một ứng dụng con dừng, hãy xuất bản một thông báo đồng bộ hóa để thông báo cho các nút khác dừng ứng dụng con tương ứng ([#7849](https://github.com/nocobase/nocobase/pull/7849)) bởi @2013xile

  - Collection không chính xác cho chỉ số trạng thái ứng dụng con ([#7772](https://github.com/nocobase/nocobase/pull/7772)) bởi @2013xile

  - Sửa lỗi không thể vô hiệu hóa trình quản lý đa ứng dụng cũ ([#7633](https://github.com/nocobase/nocobase/pull/7633)) bởi @jiannx

  - Sửa lỗi xác thực cổng trước khi di chuyển dữ liệu đa ứng dụng ([#7540](https://github.com/nocobase/nocobase/pull/7540)) bởi @jiannx

- **[Khối: GridCard]** sửa lỗi trùng lặp dữ liệu giữa khối danh sách và thẻ lưới ([#7773](https://github.com/nocobase/nocobase/pull/7773)) bởi @katherinehhh

- **[Khối: mẫu (không dùng nữa)]** Sửa lỗi các yêu cầu không cần thiết cho các mẫu khối được kích hoạt khi mở hoặc đóng phương thức ([#7561](https://github.com/nocobase/nocobase/pull/7561)) bởi @gchust

- **[Hành động: Xuất bản ghi Pro]** sửa lỗi tùy chọn xuất tệp đính kèm "Tạo một thư mục cho mỗi bản ghi" không có hiệu lực bởi @katherinehhh

- **[Nguồn dữ liệu: PostgreSQL bên ngoài]** Sửa lỗi các sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock

- **[Hành động: Nhập bản ghi Pro]**
  - Sửa lỗi logic kiểm tra duy nhất sẽ ném lỗi khi giá trị của trường duy nhất là null bởi @mytharcher

  - sửa lỗi việc sửa đổi tùy chọn nhập của trình tải lên không có tác dụng bởi @katherinehhh

  - giải quyết vấn đề hiển thị danh sách trường trong các trường có thể nhập bởi @katherinehhh

- **[Collection: Kết nối với dữ liệu nước ngoài (FDW)]**
  - Sửa lỗi kích hoạt khi kết nối với các bảng có tên viết hoa bởi @2013xile

  - Sửa lỗi tải không thành công cho các bảng có tên viết hoa bởi @2013xile

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi các tùy chọn `encrypt` và `trustServerCertificate` không khả dụng bởi @2013xile

- **[Đa không gian]**
  - Thiết bị di động hỗ trợ chuyển đổi không gian bởi @jiannx

  - Sửa lỗi tạo các trường khác trong collection hệ thống bởi @jiannx

  - người dùng liên kết đa không gian bởi @jiannx

- **[Mã hóa yêu cầu HTTP]** Sử dụng dấu ngoặc cho định dạng mảng trong phân tích cú pháp qs bởi @chenos

- **[Bình luận]**
  - Sửa lỗi xóa bản ghi trong khối bình luận bởi @katherinehhh

  - sửa lỗi khi các bình luận được trích dẫn trong khối bình luận không hiển thị bởi @katherinehhh

  - Sửa lỗi hiển thị cảnh báo khi khối bình luận được sử dụng trên collection không phải bình luận bởi @katherinehhh

- **[In mẫu]**
  - sửa lỗi hành động in mẫu trong khối chi tiết bởi @katherinehhh

  - sửa lỗi không thêm được mẫu trong thao tác in mẫu bản ghi bởi @katherinehhh

  - Sửa lỗi yêu cầu in mẫu không hoạt động với các nguồn dữ liệu bên ngoài bởi @katherinehhh

- **[Đa ứng dụng]**
  - proxy đa ứng dụng hỗ trợ bộ nhớ đệm bởi @jiannx

  - di chuyển đa ứng dụng không phát ra hooks bởi @jiannx

- **[plugin-demo-platform]** demo hỗ trợ tự động dừng ứng dụng bởi @jiannx

- **[Nguồn dữ liệu: Oracle bên ngoài]** Sửa lỗi các sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock

- **[Workflow: Phê duyệt]**
  - Sửa lỗi trạng thái của các bản ghi phê duyệt không liên quan bị thay đổi không chính xác thành `UNPROCESSED` bởi hành động phê duyệt bởi @mytharcher

  - Sửa lỗi phê duyệt tạo liên kết đến bản ghi mới bởi @mytharcher

  - Sửa lỗi rollback trùng lặp của cùng một giao dịch bởi @mytharcher

  - Sửa lỗi ném ra lỗi khi hủy một thực thi khi workflow của nó đã bị xóa bởi @mytharcher

  - Sửa lỗi dữ liệu đã điền biến mất trong biểu mẫu của người được chỉ định bởi @mytharcher

  - Sửa lỗi phê duyệt tạo liên kết nhiều-nhiều đến bản ghi mới bởi @mytharcher

  - Sửa lỗi ném ra lỗi khi tạo khối thông tin phê duyệt bởi @mytharcher

- **[Quản lý Email]**
  - Xử lý dữ liệu bất thường bởi @jiannx

  - sửa lỗi bản nháp bởi @jiannx

  - không đồng bộ hóa trạng thái đã lên lịch của gmail bởi @jiannx

  - Lỗi làm mới ShadowHtml bởi @jiannx

  - cho phép sửa đổi id cha của email bởi @jiannx

- **[Trình quản lý di chuyển]**
  - Sửa lỗi ngắt dòng trong dữ liệu bị mất trong quá trình di chuyển. bởi @cgyrock

  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock
