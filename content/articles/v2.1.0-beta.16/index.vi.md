---
title: "NocoBase v2.1.0-beta.16: Tái cấu trúc CLI của NocoBase"
description: "Ghi chú phát hành phiên bản v2.1.0-beta.16"
---

### 🎉 Tính năng mới

- **[undefined]** Thêm quy trình CI kiểm tra các peerDependencies `plugin-*` bị thiếu và chạy build, kèm báo cáo qua comment PR. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) của @Molunerfinn

- **[cli-v1]** Giải quyết đường dẫn lưu trữ từ biến môi trường ([#9147](https://github.com/nocobase/nocobase/pull/9147)) của @chenos

- **[cli]** Tái cấu trúc CLI NocoBase ([#9122](https://github.com/nocobase/nocobase/pull/9122)) của @chenos

- **[flow-engine]** Thêm `getSubclassesOfAsync` vào FlowEngine để khám phá các lớp model đã đăng ký bất đồng bộ thông qua trường `extends` mới trong `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) của @Molunerfinn

- **[Workflow]**
  - Thêm API để kiểm tra việc tạo node ([#9207](https://github.com/nocobase/nocobase/pull/9207)) của @mytharcher

  - Thêm trường log cho jobs, nhằm hiển thị nội dung log của một số node để debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) của @mytharcher

- **[AI employees]**
  - Workflow đã thêm hướng dẫn cho AI employee ([#9025](https://github.com/nocobase/nocobase/pull/9025)) của @cgyrock

  - Thêm công cụ truy vấn dữ liệu và công cụ báo cáo phân tích kinh doanh cho AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) của @2013xile

  - Thêm khả năng gọi các sub agent cho AI employees ([#8935](https://github.com/nocobase/nocobase/pull/8935)) của @cgyrock

  - Thêm khả năng SKILLS cho AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) của @cgyrock

- **[Auth: API keys]** Thêm các lệnh `pm list` và `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) của @chenos

- **[AI: MCP server]**
  - Cung cấp API truy vấn bộ sưu tập dữ liệu chung, có thể gọi qua MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) của @2013xile

  - Thêm plugin MCP server mới để cho phép xây dựng hệ thống NocoBase và hỗ trợ các quy trình nghiệp vụ. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) của @2013xile

- **[Data source manager]** Hỗ trợ tải theo yêu cầu các công cụ MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) của @2013xile

- **[IdP: OAuth]** Thêm plugin IdP: OAuth mới để cho phép các dịch vụ MCP xác thực qua OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) của @2013xile

### 🚀 Cải tiến

- **[cli]**
  - Thêm theo dõi nguồn yêu cầu CLI trong nhật ký yêu cầu và nhật ký kiểm toán ([#9223](https://github.com/nocobase/nocobase/pull/9223)) của @2013xile

  - Cải thiện đầu ra trợ giúp CLI API được tạo và nhóm lệnh ACL ([#9166](https://github.com/nocobase/nocobase/pull/9166)) của @2013xile

  - Cải thiện dự phòng trợ giúp `nb api` và thống nhất thông báo cảnh báo cho các lỗi khởi động runtime ([#9153](https://github.com/nocobase/nocobase/pull/9153)) của @2013xile

- **[server]** Cải thiện tài liệu swagger API của plugin manager ([#9080](https://github.com/nocobase/nocobase/pull/9080)) của @2013xile

- **[database]** Sửa lỗi tạo báo cáo AI business và hành vi truy vấn dữ liệu để tránh đầu ra biểu đồ bị lỗi, xử lý datetime không chính xác và thiếu phạm vi bao phủ đa nguồn dữ liệu ([#9078](https://github.com/nocobase/nocobase/pull/9078)) của @2013xile

- **[build]**
  - Bản build production client của ứng dụng hiện chạy trên Rsbuild, cùng với cải tiến lập lịch khai báo và hồ sơ build giúp dễ dàng xác định và giảm các điểm nghẽn build. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) của @Molunerfinn

  - Di chuyển pipeline build client trong `@nocobase/build` từ Vite sang Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) của @Molunerfinn

- **[client]** Tái cấu trúc cài đặt bố cục admin và ứng dụng theo kiến trúc host model với các biện pháp bảo vệ tương thích v1 v2 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) của @zhangzhonghe

- **[flow-engine]**
  - Cải thiện xác thực schema cho api xây dựng ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) của @gchust

  - Cải thiện xác thực schema cho api xây dựng ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) của @gchust

- **[app]** Thêm quy trình dev dựa trên Rsbuild cho client-v1 trong khi vẫn giữ tương thích phát triển plugin cục bộ và cấu trúc liên kết `/v2/` hiện tại ([#8902](https://github.com/nocobase/nocobase/pull/8902)) của @Molunerfinn

- **[undefined]** Thêm mục nhập client-v2 chuyên dụng và xây dựng độc lập với rsbuild trong khi giữ nguyên v1. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) của @Molunerfinn

- **[Access control]** thêm một số api mới cho kỹ năng acl ([#9198](https://github.com/nocobase/nocobase/pull/9198)) của @Andrew1989Y

- **[Workflow: Custom action event]** Thêm kiểm soát ACL cho việc kích hoạt ở chế độ bản ghi (cả đơn và nhiều) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) của @mytharcher

- **[Flow engine]** Thêm các api mới cho việc xây dựng ui. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) của @gchust

- **[Workflow: Pre-action event]** Thêm quy tắc xác thực cho triggers và nodes ([#8971](https://github.com/nocobase/nocobase/pull/8971)) của @mytharcher

- **[Workflow]** Thêm xác thực cho tất cả triggers và nodes ([#8930](https://github.com/nocobase/nocobase/pull/8930)) của @mytharcher

- **[Workflow: Webhook]** Thêm xác thực cho API tạo trigger / node của @mytharcher

- **[Workflow: Subflow]** Thêm xác thực cho API tạo node của @mytharcher

- **[Workflow: Approval]**
  - Thêm xác thực cho việc tạo node approval của @mytharcher

  - Thêm xác thực cho API trigger / node của @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Ẩn công tắc sắp xếp trường quan hệ ([#9220](https://github.com/nocobase/nocobase/pull/9220)) của @jiannx

  - Sửa lỗi tiêu đề trang không cập nhật sau khi chuyển đổi menu ([#8864](https://github.com/nocobase/nocobase/pull/8864)) của @zhangzhonghe

- **[cli]** Sửa lỗi đăng nhập OAuth CLI trên Windows do URL ủy quyền quá dài ([#9159](https://github.com/nocobase/nocobase/pull/9159)) của @2013xile

- **[test]** Sửa lỗi build plugin để các phụ thuộc server có tên gói có dấu chấm như `big.js` được đóng gói vào `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) của @Molunerfinn

- **[server]** Hỗ trợ lấy ứng dụng đích theo hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) của @2013xile

- **[Workflow: Aggregate node]** Sửa lỗi không thể lưu aggregate node do quy tắc xác thực không chính xác ([#9208](https://github.com/nocobase/nocobase/pull/9208)) của @mytharcher

- **[AI employees]**
  - Sửa lỗi ghi log bất thường trong hướng dẫn AI employee ([#9180](https://github.com/nocobase/nocobase/pull/9180)) của @cgyrock

  - Sửa lỗi sắp xếp truy vấn tổng hợp bị ACL loại bỏ ([#9099](https://github.com/nocobase/nocobase/pull/9099)) của @2013xile

  - Sửa lỗi thông báo lỗi không được hiển thị trong các cuộc hội thoại AI employee ([#9097](https://github.com/nocobase/nocobase/pull/9097)) của @cgyrock

  - Sửa lỗi AI employees không thể sử dụng kỹ năng ([#9023](https://github.com/nocobase/nocobase/pull/9023)) của @cgyrock

  - Sửa lỗi LLM vẫn cố gắng tải kỹ năng sau khi công cụ getSkill bị vô hiệu hóa ([#9013](https://github.com/nocobase/nocobase/pull/9013)) của @cgyrock

  - Sửa lỗi các trường hợp kiểm thử thất bại trong module ai của gói core. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) của @cgyrock

- **[Workflow: JavaScript]** Sửa lỗi xảy ra khi cấu hình node JavaScript ([#9169](https://github.com/nocobase/nocobase/pull/9169)) của @mytharcher

- **[IdP: OAuth]**
  - Sửa lỗi đăng ký client OAuth và làm mới token thất bại sau khi khởi động lại dịch vụ ([#9139](https://github.com/nocobase/nocobase/pull/9139)) của @2013xile

  - Sửa lỗi truy cập OAuth cho các yêu cầu API thông thường ([#9120](https://github.com/nocobase/nocobase/pull/9120)) của @2013xile

  - Sửa lỗi chuyển hướng không chính xác sau khi đăng nhập MCP OAuth trong các ứng dụng con ([#9015](https://github.com/nocobase/nocobase/pull/9015)) của @2013xile

- **[Workflow: Loop node]** Sửa lỗi xác thực của các node workflow ([#9111](https://github.com/nocobase/nocobase/pull/9111)) của @mytharcher

- **[Access control]** cập nhật acl swagger cho mcp server ([#9096](https://github.com/nocobase/nocobase/pull/9096)) của @Andrew1989Y

- **[Workflow: mailer node]** Sửa lỗi xác thực cho các trường biến ([#9047](https://github.com/nocobase/nocobase/pull/9047)) của @mytharcher

- **[Workflow]**
  - Sửa lỗi quy tắc xác thực không chính xác của instruction điều kiện ([#9017](https://github.com/nocobase/nocobase/pull/9017)) của @mytharcher

  - Sửa lỗi không thể đặt chế độ của collection trigger thành "create or update" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) của @mytharcher

- **[Data source manager]** Tối ưu hóa đặt tên công cụ MCP và giảm các phản hồi API dư thừa để tránh tiêu thụ quá mức ngữ cảnh hội thoại AI ([#9000](https://github.com/nocobase/nocobase/pull/9000)) của @2013xile

- **[AI: MCP server]**
  - Sửa lỗi các công cụ MCP được tạo từ Swagger khi lược đồ đầu vào bao gồm các kiểu `null` hoặc đánh dấu `nullable` không hợp lệ cho xác thực công cụ OpenAI ([#8994](https://github.com/nocobase/nocobase/pull/8994)) của @2013xile

  - Sửa lỗi không khớp xác thực do các header chuyển tiếp không liên quan trong công cụ CRUD chung MCP ([#8983](https://github.com/nocobase/nocobase/pull/8983)) của @2013xile
