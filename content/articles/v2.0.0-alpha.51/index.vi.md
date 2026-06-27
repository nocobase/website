---
title: "NocoBase v2.0.0-alpha.51: Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề"
description: "Ghi chú phát hành của v2.0.0-alpha.51"
---

### 🎉 Tính năng mới

- **[client]**
  - Hỗ trợ tùy chỉnh kiểu toàn cục trong trình chỉnh sửa chủ đề ([#7960](https://github.com/nocobase/nocobase/pull/7960)) bởi @ljmiaoo

  - Hỗ trợ thiết lập quy tắc sắp xếp mặc định trong khối chi tiết ([#8070](https://github.com/nocobase/nocobase/pull/8070)) bởi @katherinehhh

  - Hỗ trợ thiết lập kiểu dữ liệu cho trường Số (tùy chọn: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) bởi @chenos

- **[Trường bộ sưu tập: Sequence]** Tự động cập nhật trường sequence sau khi di chuyển dữ liệu ([#8063](https://github.com/nocobase/nocobase/pull/8063)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]**
  - Sửa lỗi nhảy phân trang của bảng con sau khi xóa hàng và thêm hỗ trợ quy tắc xác thực cột ([#8094](https://github.com/nocobase/nocobase/pull/8094)) bởi @katherinehhh

  - Điều chỉnh hiển thị trường lớn trong bảng con có thể chỉnh sửa ([#8078](https://github.com/nocobase/nocobase/pull/8078)) bởi @katherinehhh

  - Hỗ trợ dấu ba chấm cho nội dung trường JSON bị tràn ([#8067](https://github.com/nocobase/nocobase/pull/8067)) bởi @katherinehhh

- **[flow-engine]**
  - Thêm tùy chọn useCache vào FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) bởi @zhangzhonghe

  - Thêm phương thức `removeModelWithSubModels` để xóa đệ quy model và các model con của nó ([#8064](https://github.com/nocobase/nocobase/pull/8064)) bởi @zhangzhonghe

- **[Khối: GridCard]** thêm cấu hình số hàng cho grid card và thay thế pageSize bằng tính toán tự động ([#8055](https://github.com/nocobase/nocobase/pull/8055)) bởi @katherinehhh

- **[Nhật ký kiểm toán]** Cập nhật trường định danh duy nhất thành `text` để ngăn tràn độ dài định danh trong quá trình chỉnh sửa hàng loạt bởi @2013xile

- **[Trình quản lý di chuyển]** Tự động cập nhật trường sequence sau khi di chuyển dữ liệu bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Đã sửa lỗi các trường đã cấu hình từ một khối đã bị xóa không bị xóa khỏi khối bộ lọc. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) bởi @gchust

  - Sửa lỗi khoảng trống thừa khi nút bị ẩn trong chế độ không cấu hình ([#8092](https://github.com/nocobase/nocobase/pull/8092)) bởi @katherinehhh

  - Đã sửa lỗi văn bản nút đặt lại trong khối biểu mẫu bộ lọc không thể sửa đổi. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) bởi @gchust

  - Đã sửa lỗi đầu vào trường không hỗ trợ nhiều giá trị khi sử dụng toán tử $in hoặc $notIn để lọc trường. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) bởi @gchust

  - Đã sửa lỗi các khối dữ liệu mới thêm không tự động xuất hiện trong menu trường của khối biểu mẫu bộ lọc. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) bởi @gchust

  - Menu cấu hình cho các trường liên kết trong biểu mẫu bộ lọc không nên hiển thị tùy chọn tạo nhanh. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) bởi @gchust

  - Sửa lỗi dữ liệu bảng con liên kết trong khối Danh sách ([#8082](https://github.com/nocobase/nocobase/pull/8082)) bởi @katherinehhh

  - Sửa lỗi quy tắc xác thực trường số từ cài đặt bộ sưu tập không được áp dụng ([#8025](https://github.com/nocobase/nocobase/pull/8025)) bởi @katherinehhh

  - Đã sửa lỗi các trường trong biểu mẫu bộ lọc bị giới hạn bởi quy tắc xác thực backend cho các trường. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) bởi @gchust

  - Vấn đề chỉnh sửa nhanh trường json ([#8059](https://github.com/nocobase/nocobase/pull/8059)) bởi @katherinehhh

  - Sửa lỗi hiển thị trường lớn trong chỉnh sửa bảng con ([#8069](https://github.com/nocobase/nocobase/pull/8069)) bởi @katherinehhh

  - Sửa lỗi tạo nhanh báo lỗi khi allowMultiple bị tắt trong lựa chọn bản ghi liên kết ([#8034](https://github.com/nocobase/nocobase/pull/8034)) bởi @katherinehhh

  - Sửa lỗi trường json nên được gửi dưới dạng một đối tượng ([#8057](https://github.com/nocobase/nocobase/pull/8057)) bởi @katherinehhh

  - Đã sửa lỗi không thể sử dụng phím Enter để kích hoạt hành động lọc. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) bởi @gchust

- **[flow-engine]**
  - Đã sửa lỗi các tùy chọn cấu hình từ thành phần trước đó vẫn hiển thị trong menu sau khi chuyển đổi thành phần trường. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) bởi @gchust

  - Di chuyển useEffect trước câu lệnh return có điều kiện trong FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) bởi @zhangzhonghe

  - Đã sửa lỗi các trường liên kết không được hỗ trợ xuất hiện trong trường thao tác bộ lọc. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) bởi @gchust

- **[acl]** sửa lỗi: acl.allow được thực thi quá sớm ([#8065](https://github.com/nocobase/nocobase/pull/8065)) bởi @chenos

- **[Trình quản lý tệp]**
  - Sửa lỗi hiển thị dữ liệu chi tiết con không chính xác trong khối Danh sách và Grid Card ([#8087](https://github.com/nocobase/nocobase/pull/8087)) bởi @katherinehhh

  - Sửa lỗi trường tệp đính kèm không hiển thị chính xác trong bảng con readPretty ([#8073](https://github.com/nocobase/nocobase/pull/8073)) bởi @katherinehhh

- **[Workflow]**
  - Sửa lỗi báo lỗi trong canvas thực thi khi nút bị xóa ([#8090](https://github.com/nocobase/nocobase/pull/8090)) bởi @mytharcher

  - Sửa lỗi trang thực thi báo lỗi khi jobs trên nút là undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher

- **[Trường bộ sưu tập: Formula]** Đã sửa lỗi trường công thức không thể thêm vào khối biểu mẫu bộ lọc. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) bởi @gchust

- **[Khối: Bảng hành động]** tối ưu hóa kiểu trong bố cục Danh sách của khối bảng hành động ([#8084](https://github.com/nocobase/nocobase/pull/8084)) bởi @katherinehhh

- **[Nhân viên AI]**
  - Giải quyết vấn đề tên vai trò nguồn dữ liệu không được biên dịch ([#8076](https://github.com/nocobase/nocobase/pull/8076)) bởi @heziqiang

  - Đã sửa lỗi một số trường bản ghi hiện tại không thể hiển thị trong thành phần lựa chọn biến. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) bởi @gchust

- **[Hành động: Nhập bản ghi]** Các trường đã nhập không khớp với các trường được đặt trong cài đặt ACL ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile

- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền trên các thao tác liên kết cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile

- **[Workflow: Phê duyệt]**
  - Sửa lỗi không có dữ liệu khi tải các phê duyệt liên quan với biến phạm vi ACL bởi @mytharcher

  - Sửa lỗi dữ liệu đã điền biến mất trong biểu mẫu của người được chỉ định bởi @mytharcher

  - Sửa lỗi quyền báo lỗi khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher

  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher

  - Sửa lỗi khi liệt kê phê duyệt xảy ra OOM bởi @mytharcher

  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả công việc ở nhánh trả về bởi @mytharcher

  - Sửa lỗi cửa sổ bật lên người phê duyệt không hiển thị tiêu đề bởi @zhangzhonghe

  - Sửa lỗi báo lỗi khi tải phê duyệt liên quan trong chế độ chỉ vai trò union bởi @mytharcher

- **[Trình quản lý email]**
  - Xử lý dữ liệu bất thường bởi @jiannx

  - Không đồng bộ trạng thái đã lên lịch của gmail bởi @jiannx
