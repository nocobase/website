---
title: "Cập nhật hàng tuần｜Thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở kiến thức AI"
description: "Đây là bản tóm tắt các cập nhật tính năng và cải tiến của NocoBase từ ngày 12 tháng 6 đến ngày 21 tháng 6 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp với người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/en/blog/v2.1.9)

*Ngày phát hành: 2026-06-20*

### 🚀 Cải tiến

- **[client-v2]** Thêm tùy chọn ghi đè giá trị cho cài đặt giá trị trường. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) bởi @gchust

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi nút kích hoạt quy trình làm việc tùy chỉnh gửi JSON ngữ cảnh tùy chỉnh dưới một thuộc tính `values` bổ sung hoặc dưới dạng chuỗi đã được tuần tự hóa. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) bởi @mytharcher
  - Đã sửa lỗi khi cấu hình giá trị trường liên kết làm giá trị cố định hoặc giá trị mặc định không có hiệu lực. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) bởi @gchust
- **[auth]** Dữ liệu mật khẩu đã mã hóa không còn được bao gồm trong phản hồi trạng thái đăng nhập ([#9836](https://github.com/nocobase/nocobase/pull/9836)) bởi @2013xile
- **[app]** Bỏ qua currentScript không liên quan khi suy luận đường dẫn public của plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) bởi @chenos
- **[UI templates]** Đã sửa lỗi ngữ cảnh mặc định không chính xác cho ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) bởi @gchust

### [v2.1.8](https://www.nocobase.com/en/blog/v2.1.8)

*Ngày phát hành: 2026-06-18*

### 🐛 Sửa lỗi

- **[ai]**

  - Đã khóa `@langchain/openai` ở các bản cập nhật cấp độ bản vá cho các gói AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) bởi @cgyrock
  - Đã sửa lỗi giải quyết phụ thuộc LangChain không tương thích cho các plugin AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) bởi @cgyrock
- **[AI: Knowledge base]**

  - Đã sửa lỗi thông báo lỗi không rõ ràng khi kích hoạt plugin cơ sở kiến thức AI mà không có plugin AI khả dụng. bởi @cgyrock
  - Đã sửa lỗi giải quyết phụ thuộc LangChain không tương thích cho plugin cơ sở kiến thức AI. bởi @cgyrock

### [v2.1.7](https://www.nocobase.com/en/blog/v2.1.7)

*Ngày phát hành: 2026-06-18*

### 🎉 Tính năng mới

- **[Backup manager]** Hỗ trợ sao lưu và phục hồi cho KingBase làm cơ sở dữ liệu chính ([#9791](https://github.com/nocobase/nocobase/pull/9791)) bởi @2013xile
- **[Migration manager]** Hỗ trợ di chuyển cho KingBase làm cơ sở dữ liệu chính. bởi @2013xile

### 🚀 Cải tiến

- **[AI: Knowledge base]** Cải thiện khả năng truy xuất và tài liệu của cơ sở kiến thức AI. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) bởi @cgyrock
- **[cli]** Thêm phiên bản lược đồ cấu hình env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) bởi @chenos
- **[Workflow]** Ổn định bài kiểm tra tùy chọn cập nhật ([#9773](https://github.com/nocobase/nocobase/pull/9773)) bởi @mytharcher
- **[File manager]** Cải thiện xem trước PDF: các tệp PDF từ nguồn gốc khác (cross-origin) hiện sử dụng trình xem gốc của trình duyệt, trong khi các tệp PDF cùng nguồn gốc (same-origin) tiếp tục sử dụng PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) bởi @mytharcher
- **[Backup manager]** Các bảng có `dataCategory` của collection được đánh dấu là `'runtime'` hiện tự động bị loại trừ khỏi sao lưu. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) bởi @cgyrock
- **[AI: Knowledge base]** Cải thiện phân đoạn tài liệu cơ sở kiến thức AI, quản lý phân đoạn, kiểm tra truy cập (hit tests) và hỗ trợ nút quy trình làm việc tài liệu. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi khi gửi biểu mẫu hiển thị thông báo không chính xác khi biểu mẫu con chứa bảng con. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) bởi @gchust
  - Đã sửa lỗi luồng sự kiện trên các cột của bảng con thực thi không chính xác. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) bởi @gchust
  - Đã loại bỏ `updateAssociationValues` không mong muốn khỏi các trường liên kết ([#9812](https://github.com/nocobase/nocobase/pull/9812)) bởi @katherinehhh
  - Đã sửa lỗi tùy chọn Có/Không không được dịch trong trình đơn thả xuống hộp kiểm của biểu mẫu bộ lọc v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) bởi @katherinehhh
  - Đã sửa lỗi không thể cập nhật cài đặt luồng sự kiện sau khi lưu một khối dưới dạng mẫu. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) bởi @gchust
  - Đã sửa lỗi hiển thị và cài đặt định dạng không chính xác khi trường tiêu đề liên kết của bảng v2 sử dụng trường thời gian, chỉ ngày hoặc ngày giờ. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) bởi @katherinehhh
- **[Workflow]** Đã sửa lỗi phục hồi bộ điều phối quy trình làm việc sau các lỗi điều phối không mong muốn. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) bởi @mytharcher
- **[File manager]** Đã sửa lỗi 404 khi tải tệp lên các trường URL tệp đính kèm trong nguồn dữ liệu bên ngoài ([#9809](https://github.com/nocobase/nocobase/pull/9809)) bởi @2013xile
- **[Action: Custom request]** Đã sửa lỗi các hành động yêu cầu tùy chỉnh V2 hiển thị lỗi không cần thiết khi cài đặt yêu cầu chưa được cấu hình. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) bởi @katherinehhh
- **[AI employees]**

  - Đã sửa lỗi nhân viên AI không thể điền chính xác dữ liệu bảng con. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) bởi @gchust
  - Đã sửa lỗi kích hoạt tác vụ lối tắt của nhân viên AI để các tệp đính kèm từ ngữ cảnh công việc hiện tại được bao gồm khi chạy tác vụ từ hồ sơ lối tắt. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) bởi @cgyrock
- **[Workflow: Custom action event]** Đã sửa lỗi nút kích hoạt quy trình làm việc của bảng hành động v2 hiển thị thành công và gửi yêu cầu khi không có quy trình làm việc nào được liên kết. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) bởi @mytharcher
- **[Flow engine]** Đã sửa lỗi biểu mẫu bản ghi hiện tại và dữ liệu chi tiết trong cửa sổ bật lên có thể chứa dữ liệu không chính xác khi được xây dựng bởi AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) bởi @gchust
- **[Async task manager]** Đã sửa lỗi tải xuống tệp tác vụ bất đồng bộ bị lỗi khi thiếu id tác vụ trong `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) bởi @mytharcher
- **[Data source: External NocoBase]** Ủy quyền các hành động tải lên và lưu trữ tệp của nguồn dữ liệu NocoBase bên ngoài theo nguồn dữ liệu tải lên bởi @2013xile
- **[Multi-space]** Đã sửa lỗi quyền khi người quản lý không gian thêm người dùng mà không có quyền truy cập vào trường email người dùng. bởi @jiannx
- **[Workflow: Subflow]** Đã sửa lỗi các luồng con bất đồng bộ để quy trình làm việc cha có thể tiếp tục sau khi worker khởi động lại hoặc mất ánh xạ sự kiện trong bộ nhớ. bởi @mytharcher
- **[App supervisor]** Đã sửa lỗi sập khi phản hồi proxy WebSocket từ xa thất bại bởi @2013xile

### [v2.1.5](https://www.nocobase.com/en/blog/v2.1.5)

*Ngày phát hành: 2026-06-15*

### 🎉 Tính năng mới

- **[Workflow: Mailer node]** Đã thêm hỗ trợ gửi tệp đính kèm trong các nút gửi thư của quy trình làm việc. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) bởi @mytharcher

### 🚀 Cải tiến

- **[client-v2]** Phạm vi dữ liệu cột của trường liên kết trong bảng con của biểu mẫu hiện hỗ trợ các biến mục hiện tại. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) bởi @gchust
- **[undefined]** Đã thống nhất tên tài liệu tiếng Trung của plugin kiểm soát phiên bản thành “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) bởi @cgyrock
- **[File manager]** Đã thêm hỗ trợ văn bản có thể chọn cho xem trước PDF trong trình quản lý tệp đối với các tệp PDF có văn bản nhúng. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) bởi @mytharcher
- **[Action: Bulk edit]** Tối ưu hóa phương pháp tải cho các plugin hành động v2 và giữ thứ tự các nút hành động đã được di chuyển ổn định. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) bởi @katherinehhh
- **[Version control]** Đã thay đổi tên hiển thị tiếng Trung của plugin kiểm soát phiên bản thành “版本控制”. bởi @cgyrock

### 🐛 Sửa lỗi

- **[cli-v1]** Đã sửa lỗi khi chạy `yarn dev` sau khi nâng cấp các dự án được tạo bằng create-nocobase-app từ 2.0 lên 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) bởi @Molunerfinn
- **[client-v2]** Đã sửa lỗi tiến trình di chuyển không hiển thị chế độ xem tiến trình chuyên dụng. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) bởi @2013xile
- **[flow-engine]** Đã sửa lỗi nhập liệu IME tiếng Việt và tiếng Trung trong các trường văn bản một dòng và nhiều dòng v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) bởi @katherinehhh
- **[server]** Đã sửa lỗi xử lý tên plugin không an toàn trong `pm:enable` để ngăn chặn rủi ro bao gồm tệp cục bộ trong quá trình giải quyết plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) bởi @mytharcher
- **[File manager]** Đã sửa lỗi xem trước PDF thất bại do tải mô-đun worker pdf.js bất thường. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) bởi @mytharcher
- **[Block: Kanban]** Đã sửa lỗi khi mở các khối Lịch, Gantt và Kanban bên ngoài chế độ chỉnh sửa đã vô tình lưu giữ các hành động bật lên ẩn và liên tục gửi yêu cầu xóa. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) bởi @jiannx
- **[Action: Export records Pro]** Cải thiện cài đặt chế độ xử lý và lời nhắc giải thích cho v2 Import/Export Pro. bởi @katherinehhh
- **[Migration manager]** Đã sửa lỗi có thể thất bại khi nhập các tệp dữ liệu di chuyển lớn. bởi @2013xile
- **[Template print]** Từ chối các loại tệp mẫu không được hỗ trợ trước khi in mẫu bắt đầu. bởi @2013xile

### [v2.1.4](https://www.nocobase.com/en/blog/v2.1.4)

*Ngày phát hành: 2026-06-13*

### 🚀 Cải tiến

- **[Workflow]** Cải thiện trải nghiệm chỉnh sửa siêu dữ liệu quy trình làm việc bằng cách hỗ trợ chỉnh sửa mô tả trong cửa sổ bật lên chi tiết và tự động điền siêu dữ liệu quy trình làm việc nguồn khi sao chép quy trình làm việc. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Action: Import records]** Đã thay đổi các tệp nhập đã tải lên thành lưu trữ đĩa để giảm áp lực bộ nhớ trong quá trình nhập dữ liệu lớn. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) bởi @mytharcher
- **[Backup manager]** Đã sửa lỗi bảo mật nơi các tên lược đồ PostgreSQL không an toàn có thể được chấp nhận trong quá trình phục hồi sao lưu. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) bởi @2013xile
- **[Workflow]**

  - Đã sửa lỗi xử lý thời gian chờ của quy trình làm việc để các lần thực thi bị hủy bỏ và các tác vụ đang chờ xử lý của chúng có thể được cập nhật một cách nguyên tử. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) bởi @mytharcher
  - Đã sửa lỗi trường "cập nhật lần cuối bởi" của quy trình làm việc không được cập nhật sau khi thay đổi nút quy trình làm việc. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) bởi @mytharcher
- **[Action: Import records Pro]** Tránh phân tích cú pháp các tệp lớn trong nút yêu cầu trước khi Pro import tạo một tác vụ bất đồng bộ. bởi @mytharcher
- **[Version control]** Điều chỉnh vị trí của mục nhập lối tắt trên cùng của kiểm soát phiên bản để nó xuất hiện bên cạnh trình chỉnh sửa UI trong cả bố cục quản trị cũ và v2. bởi @cgyrock

### [v2.1.3](https://www.nocobase.com/en/blog/v2.1.3)

*Ngày phát hành: 2026-06-12*

### 🚀 Cải tiến

- **[cli]**
  - chuẩn hóa các phiên bản xây dựng tương thích của ứng dụng ([#9763](https://github.com/nocobase/nocobase/pull/9763)) bởi @chenos
  - hỗ trợ cập nhật kỹ năng lên một phiên bản cụ thể ([#9760](https://github.com/nocobase/nocobase/pull/9760)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi các trường trong biểu mẫu con nằm ngang quá hẹp để hiển thị dữ liệu ([#9755](https://github.com/nocobase/nocobase/pull/9755)) bởi @zhangzhonghe
- **[Data source manager]**

  - Đã sửa lỗi ngăn kéo chỉnh sửa trường trống do hiển thị lại lặp đi lặp lại trên trang Cấu hình trường của nguồn dữ liệu bên ngoài v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) bởi @katherinehhh
  - Đã sửa lỗi xóa danh mục collection đang hoạt động trong trình quản lý nguồn dữ liệu v1 có thể khiến tab Tất cả collections trống. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) bởi @katherinehhh
- **[Async task manager]** Đã sửa lỗi ID yêu cầu không chính xác trong nhật ký worker tác vụ bất đồng bộ ([#9686](https://github.com/nocobase/nocobase/pull/9686)) bởi @2013xile
- **[Workflow: SQL node]** Đã sửa lỗi di chuyển biến mẫu cũ của quy trình làm việc SQL bị bỏ qua đối với một số người dùng phiên bản beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) bởi @mytharcher
- **[AI employees]**

  - Đã sửa lỗi mất cấu hình tin nhắn trong các nút LLM của quy trình làm việc. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) bởi @cgyrock
  - Đã sửa lỗi không thể xóa các tệp đính kèm đã dán vào hộp thoại nhân viên AI. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) bởi @cgyrock
- **[Block: Kanban]** Đã sửa lỗi hỗ trợ URL cho lịch và các cửa sổ bật lên liên quan. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) bởi @jiannx
- **[Workflow: Approval]** Đã sửa lỗi dữ liệu liên quan không được hiển thị trong biểu mẫu phê duyệt v2 bởi @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/en/blog/v2.1.2)

*Ngày phát hành: 2026-06-12*

### 🎉 Tính năng mới

- **[AI employees]** Đã thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở kiến thức AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) bởi @cgyrock
- **[AI: Knowledge base]** Đã thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở kiến thức AI. bởi @cgyrock

### 🚀 Cải tiến

- **[undefined]**

  - Đã thêm kịch bản kiểm soát phiên bản vào phần bắt đầu nhanh của AI Builder ([#9748](https://github.com/nocobase/nocobase/pull/9748)) bởi @Molunerfinn
    Tham khảo: [Bắt đầu nhanh với AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Cải thiện tài liệu kiểm soát phiên bản với hướng dẫn sửa đổi tự động của AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) bởi @cgyrock
- **[cli]** làm rõ từ ngữ thiết lập khởi tạo ([#9750](https://github.com/nocobase/nocobase/pull/9750)) bởi @chenos
- **[Action: Import records]** Cải thiện hộp thoại lỗi nhập và tác vụ bất đồng bộ để các thông báo lỗi dài có thể được đọc đầy đủ mà không làm hỏng bố cục. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) bởi @katherinehhh
- **[Action: Import records Pro]** Cải thiện hộp thoại nhập để các thông báo lỗi dài vẫn có thể đọc được và chế độ xử lý v2 có thể được chọn trực tiếp từ menu cài đặt. bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client-v2]** Đã sửa lỗi các trang v2 có thể tiếp tục tải sau khi đăng nhập ([#9738](https://github.com/nocobase/nocobase/pull/9738)) bởi @zhangzhonghe
- **[cli]** yêu cầu Node.js 22 cho nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) bởi @chenos
- **[File manager]** Sửa lỗi xem trước PDF thiếu văn bản phông chữ CJK/CID sau khi chuyển sang pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/en/blog/v2.2.0-beta.5)

*Ngày phát hành: 2026-06-16*

### 🚀 Cải tiến

* **[cli]** Đã thêm bản ghi phiên bản lược đồ cho cấu hình env. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) bởi @chenos
* **[File manager]** Cải thiện xem trước PDF: các tệp PDF từ nguồn gốc khác (cross-origin) hiện sử dụng bản xem trước gốc của trình duyệt, trong khi các tệp PDF cùng nguồn gốc (same-origin) tiếp tục được hiển thị bằng PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) bởi @mytharcher

### 🐛 Sửa lỗi

* **[client-v2]**
  * Đã sửa lỗi không thể sửa đổi cài đặt luồng sự kiện sau khi một khối được chuyển đổi thành mẫu. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) bởi @gchust
  * Đã sửa lỗi các tùy chọn thả xuống hộp kiểm trong biểu mẫu bộ lọc v2 không hiển thị văn bản đã dịch. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) bởi @katherinehhh
  * Đã sửa lỗi hiển thị và cài đặt định dạng không chính xác khi trường tiêu đề của trường liên kết bảng v2 sử dụng trường thời gian, ngày hoặc ngày giờ. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) bởi @katherinehhh
* **[Flow engine]** Đã sửa lỗi dữ liệu không chính xác trong biểu mẫu bản ghi hiện tại và dữ liệu chi tiết bên trong cửa sổ bật lên trong quá trình xây dựng AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) bởi @gchust
* **[Workflow: Custom action event]** Đã sửa lỗi nút kích hoạt quy trình làm việc của bảng hành động v2 vẫn hiển thị thành công và gửi yêu cầu khi không có quy trình làm việc nào được liên kết. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) bởi @mytharcher
* **[AI employees]** Đã sửa lỗi nhân viên AI không thể điền chính xác dữ liệu bảng con. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) bởi @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/en/blog/v2.2.0-beta.3)

*Ngày phát hành: 2026-06-15*

### 🎉 Tính năng mới

* **[Workflow: Mailer node]** Đã thêm hỗ trợ gửi tệp đính kèm trong các nút gửi thư của quy trình làm việc. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) bởi @mytharcher
* **[Workflow]** Đã thêm hỗ trợ cho phạm vi giao dịch cơ sở dữ liệu trong quy trình làm việc. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) bởi @mytharcher
  Tham khảo: [Giao dịch cơ sở dữ liệu](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** Đã thêm một plugin nút quy trình làm việc giao dịch cơ sở dữ liệu. bởi @mytharcher

### 🚀 Cải tiến

* **[client-v2]** Các cột trường liên kết trong bảng con của biểu mẫu hiện hỗ trợ các biến mục hiện tại trong phạm vi dữ liệu. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) bởi @gchust
* **[undefined]** Đã thống nhất tên tài liệu tiếng Trung của plugin Kiểm soát phiên bản thành “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) bởi @cgyrock
* **[File manager]** Đã thêm hỗ trợ văn bản có thể chọn cho xem trước PDF trong Trình quản lý tệp đối với các tệp PDF có văn bản nhúng. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) bởi @mytharcher
* **[Users]** Cải thiện bố cục của các trang Người dùng và Quyền v2 và tối ưu hóa hành vi cây phòng ban. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) bởi @jiannx
* **[Action: Bulk edit]** Tối ưu hóa cách tải các plugin hành động v2 và giữ thứ tự các nút hành động đã được di chuyển ổn định. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) bởi @katherinehhh
* **[Version control]** Đã đổi tên hiển thị tiếng Trung của plugin Kiểm soát phiên bản thành “版本控制”. bởi @cgyrock

### 🐛 Sửa lỗi

* **[cli-v1]** Đã sửa lỗi khi chạy `<span>yarn dev</span>` sau khi nâng cấp các dự án được tạo bằng create-nocobase-app từ 2.0 lên 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) bởi @Molunerfinn
* **[flow-engine]** Đã sửa lỗi nhập liệu IME tiếng Việt và tiếng Trung trong các trường văn bản một dòng và nhiều dòng v2. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) bởi @katherinehhh
* **[client-v2]** Đã sửa lỗi tiến trình di chuyển không hiển thị chế độ xem tiến trình chuyên dụng. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) bởi @2013xile
* **[server]** Đã sửa lỗi xử lý tên plugin không an toàn trong `<span>pm:enable</span>` để tránh rủi ro bao gồm tệp cục bộ trong quá trình giải quyết plugin. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) bởi @mytharcher
* **[Async task manager]** Đã sửa lỗi truy vấn cơ sở dữ liệu bị lỗi do thiếu `<span>filterByTk</span>` khi tải xuống tệp tác vụ bất đồng bộ. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) bởi @mytharcher
* **[File manager]** Đã sửa lỗi xem trước PDF thất bại do tải mô-đun worker pdf.js bất thường. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) bởi @mytharcher
* **[Block: Kanban]** Đã sửa lỗi khi mở các khối Lịch, Gantt và Kanban ở chế độ không chỉnh sửa đã vô tình lưu giữ các hành động bật lên ẩn và liên tục gửi yêu cầu xóa. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) bởi @jiannx
* **[Action: Export records Pro]** Cải thiện cài đặt chế độ xử lý và văn bản trợ giúp cho v2 Import/Export Pro. bởi @katherinehhh
* **[Multi-space]** Đã sửa lỗi quản trị viên không gian không thể thêm người dùng không gian khi họ không có quyền đối với trường email người dùng. bởi @jiannx
* **[Migration manager]** Đã sửa lỗi có thể thất bại khi nhập các tệp dữ liệu di chuyển lớn. bởi @2013xile
* **[Template print]** Từ chối các loại tệp mẫu không được hỗ trợ trước khi in mẫu bắt đầu. bởi @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/en/blog/v2.2.0-beta.2)

*Ngày phát hành: 2026-06-13**

### 🎉 Tính năng mới

- **[AI employees]** Đã thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở kiến thức AI. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) bởi @cgyrock
- **[AI: Knowledge base]** Đã thêm biểu mẫu cấu hình kho lưu trữ vector bên ngoài cho cơ sở kiến thức AI. bởi @cgyrock
- **[Email manager]** Đã di chuyển client của Trình quản lý Email lên v2. bởi @jiannx

### 🚀 Cải tiến

- **[cli]**

  - Tối ưu hóa kiểm tra tương thích cho các định dạng số phiên bản khác nhau. ([#9763](https://github.com/nocobase/nocobase/pull/9763)) bởi @chenos
  - Đã thêm hỗ trợ cập nhật kỹ năng lên một phiên bản cụ thể. ([#9760](https://github.com/nocobase/nocobase/pull/9760)) bởi @chenos
  - Cải thiện từ ngữ của lời nhắc thiết lập khởi tạo. ([#9750](https://github.com/nocobase/nocobase/pull/9750)) bởi @chenos
- **[undefined]**

  - Đã thêm kịch bản hội thoại kiểm soát phiên bản vào trang tổng quan AI Builder. ([#9748](https://github.com/nocobase/nocobase/pull/9748)) bởi @Molunerfinn
    Tham khảo: [Bắt đầu nhanh với AI Builder](https://docs.nocobase.com/en/ai-builder)
  - Cải thiện tài liệu kiểm soát phiên bản với ghi chú về tính năng tự động lưu phiên bản trong AI Builder. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) bởi @cgyrock
    Tham khảo: [Kiểm soát phiên bản](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** Cải thiện trải nghiệm chỉnh sửa siêu dữ liệu quy trình làm việc bằng cách hỗ trợ chỉnh sửa mô tả trong cửa sổ bật lên chi tiết và tự động điền siêu dữ liệu quy trình làm việc nguồn khi sao chép quy trình làm việc. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) bởi @mytharcher
- **[Action: Import records]** Cải thiện hộp thoại chi tiết lỗi nhập và tác vụ bất đồng bộ để các thông báo lỗi dài có thể được xem đầy đủ mà không làm hỏng bố cục. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) bởi @katherinehhh
- **[Translation test tool]** Đã thêm trang cài đặt client-v2 cho công cụ kiểm tra bản dịch. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) bởi @jiannx
- **[Action: Import records Pro]** Cải thiện hộp thoại nhập để các thông báo lỗi dài có thể được xem đầy đủ và chế độ xử lý có thể được chọn trực tiếp từ menu cài đặt v2. bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi các trường trong biểu mẫu con nằm ngang quá hẹp để hiển thị dữ liệu. ([#9755](https://github.com/nocobase/nocobase/pull/9755)) bởi @zhangzhonghe
- **[client-v2]** Đã sửa lỗi các trang v2 có thể tiếp tục tải sau khi đăng nhập. ([#9738](https://github.com/nocobase/nocobase/pull/9738)) bởi @zhangzhonghe
- **[cli]** Đã thêm phát hiện phiên bản Node.js cho môi trường thời gian chạy nb. ([#9749](https://github.com/nocobase/nocobase/pull/9749)) bởi @chenos
- **[Action: Import records]** Đã thay đổi các tệp nhập đã tải lên thành lưu trữ đĩa để giảm áp lực bộ nhớ trong quá trình nhập dữ liệu lớn. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) bởi @mytharcher
- **[Async task manager]** Đã sửa lỗi ID yêu cầu không chính xác trong nhật ký worker tác vụ bất đồng bộ. ([#9686](https://github.com/nocobase/nocobase/pull/9686)) bởi @2013xile
- **[Workflow]**

  - Đã sửa lỗi xử lý thời gian chờ của quy trình làm việc để các lần thực thi bị hủy bỏ và các tác vụ đang chờ xử lý của chúng có thể được cập nhật một cách nguyên tử. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) bởi @mytharcher
  - Đã sửa lỗi trường "cập nhật lần cuối bởi" của quy trình làm việc không được cập nhật sau khi thay đổi nút quy trình làm việc. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) bởi @mytharcher
- **[Data source manager]**

  - Đã sửa lỗi ngăn kéo chỉnh sửa trường trống do hiển thị lại lặp đi lặp lại trên trang Cấu hình trường của nguồn dữ liệu bên ngoài v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) bởi @katherinehhh
  - Đã sửa lỗi xóa danh mục collection hiện tại trong trình quản lý nguồn dữ liệu v1 có thể khiến tab Tất cả collections trống. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) bởi @katherinehhh
- **[Backup manager]** Đã sửa lỗi bảo mật nơi các tên lược đồ PostgreSQL không an toàn có thể được chấp nhận trong quá trình phục hồi sao lưu. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) bởi @2013xile
- **[Workflow: SQL node]** Đã sửa lỗi di chuyển biến mẫu cũ của quy trình làm việc SQL bị bỏ qua đối với một số người dùng phiên bản beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) bởi @mytharcher
- **[Block: Kanban]** Đã sửa lỗi hỗ trợ URL cho Lịch và các cửa sổ bật lên khác. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) bởi @jiannx
- **[AI employees]**

  - Đã sửa lỗi không thể xóa các tệp đính kèm đã dán vào hộp thoại nhân viên AI. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) bởi @cgyrock
  - Đã sửa lỗi mất cấu hình tin nhắn trong các nút LLM của quy trình làm việc. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) bởi @cgyrock
- **[File manager]** Đã sửa lỗi thiếu văn bản phông chữ Trung Quốc/CID trong một số bản xem trước PDF sau khi chuyển sang pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) bởi @mytharcher
- **[API documentation]** Đã sửa lỗi xây dựng tệp khai báo plugin tài liệu API bị lỗi. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) bởi @katherinehhh
- **[Action: Import records Pro]** Tránh phân tích cú pháp các tệp lớn trong nút yêu cầu trước khi Pro import tạo một tác vụ bất đồng bộ. bởi @mytharcher
- **[Version control]** Điều chỉnh vị trí của mục nhập lối tắt trên cùng của kiểm soát phiên bản để nó xuất hiện bên cạnh trình chỉnh sửa UI trong cả bố cục quản trị cũ và v2. bởi @cgyrock
- **[Workflow: Approval]** Đã sửa lỗi dữ liệu liên quan không được hiển thị trong biểu mẫu phê duyệt v2. bởi @zhangzhonghe
