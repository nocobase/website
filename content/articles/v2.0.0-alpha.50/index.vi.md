---
title: "NocoBase v2.0.0-alpha.50: Hỗ trợ cài đặt cho phép tải lên nhiều tệp trong thành phần đính kèm"
description: "Ghi chú phát hành phiên bản v2.0.0-alpha.50"
---

### 🚀 Cải tiến

- **[client]**

  - Hỗ trợ cài đặt Multiple trong component tải lên tệp đính kèm ([#8052](https://github.com/nocobase/nocobase/pull/8052)) bởi @katherinehhh
  - Hiển thị các tùy chọn đã thu gọn khi di chuột trong component Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) bởi @katherinehhh
  - Hiển thị các tùy chọn đã thu gọn khi di chuột trong component Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) bởi @katherinehhh
- **[AI employees]** Thêm trường provider còn thiếu vào form Thêm LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) bởi @heziqiang
- **[Workflow]** Thêm ngữ cảnh nguồn dữ liệu "main" cho UserSelect, nhằm cung cấp một component phổ biến hơn có thể được sử dụng ở nơi khác ([#8010](https://github.com/nocobase/nocobase/pull/8010)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi hiển thị "N/A" sau khi tắt allowMultiple trong lựa chọn bản ghi liên kết nhiều-nhiều ([#8050](https://github.com/nocobase/nocobase/pull/8050)) bởi @katherinehhh
  - Sửa lỗi nhấp nháy của hộp chọn thả xuống quy tắc liên kết ([#8018](https://github.com/nocobase/nocobase/pull/8018)) bởi @zhangzhonghe
  - Sửa lỗi chuyển đổi trường ngày sang trường thời gian trong hành động lọc gây ra lỗi hiển thị. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) bởi @gchust
  - Sửa lỗi menu bản ghi hiện tại xuất hiện khi thêm khối bình luận. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) bởi @gchust
  - Sửa lỗi không xóa được bản ghi trong khối chọn bản ghi ([#8023](https://github.com/nocobase/nocobase/pull/8023)) bởi @katherinehhh
  - Sửa lỗi kiểu mặc định của trường JS trong khối chi tiết không chính xác. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) bởi @gchust
  - Sửa lỗi khối bảng cây không thể mở rộng các nút con ([#8011](https://github.com/nocobase/nocobase/pull/8011)) bởi @katherinehhh
  - Sửa lỗi kéo cột trong bảng con không hoạt động ([#8026](https://github.com/nocobase/nocobase/pull/8026)) bởi @katherinehhh
  - Sửa lỗi chiều rộng cột trong bảng con không được áp dụng ([#8027](https://github.com/nocobase/nocobase/pull/8027)) bởi @katherinehhh
  - Khắc phục sự cố gây ra lỗi khi tải dữ liệu cho các trường liên kết trong cửa sổ popup, đảm bảo hiển thị dữ liệu và chức năng mượt mà hơn. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) bởi @gchust
  - Sửa lỗi kiểu popover của trường hiển thị markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) bởi @katherinehhh
  - Sửa lỗi tiêu đề mặc định của popup hành động chỉnh sửa và tạo mới không chính xác. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) bởi @gchust
  - Sửa lỗi tải chậm trong Variable.Input, gây ra menu tùy chọn biến hiển thị lại không chính xác ([#8009](https://github.com/nocobase/nocobase/pull/8009)) bởi @mytharcher
  - Sửa lỗi không thể phân giải chính xác biến bản ghi popup hiện tại trong popup được mở bởi trường liên kết. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) bởi @gchust
- **[acl]** Sửa lỗi thông tin meta ACL không chính xác khi phạm vi quyền nguồn dữ liệu bên ngoài sử dụng các biến liên quan đến người dùng hiện tại ([#8013](https://github.com/nocobase/nocobase/pull/8013)) bởi @2013xile
- **[flow-engine]**

  - Sửa lỗi bản ghi bình luận không lưu được sau khi chỉnh sửa ([#8035](https://github.com/nocobase/nocobase/pull/8035)) bởi @katherinehhh
  - Sửa lỗi khối dữ liệu không làm mới khi đóng popup bằng cách nhấp vào nút gửi biểu mẫu bên trong popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) bởi @gchust
- **[Theme editor]** Bật trình chuyển đổi chủ đề trên thiết bị di động ([#8046](https://github.com/nocobase/nocobase/pull/8046)) bởi @zhangzhonghe
- **[Multi-app manager (deprecated)]** Cài đặt mức log không được áp dụng cho các ứng dụng con ([#8045](https://github.com/nocobase/nocobase/pull/8045)) bởi @2013xile
- **[Data source manager]** Sửa lỗi khi cập nhật mật khẩu cho các nguồn dữ liệu bên ngoài ([#8024](https://github.com/nocobase/nocobase/pull/8024)) bởi @cgyrock
- **[Action: Import records]** Sửa lỗi xảy ra khi trường trong tệp xlsx nhập có giá trị `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) bởi @mytharcher
- **[Workflow]** Sửa lỗi hàng đợi đóng trước khi xuất bản tin nhắn ([#8003](https://github.com/nocobase/nocobase/pull/8003)) bởi @mytharcher
- **[Comments]**

  - Sửa lỗi không xóa được bản ghi trong khối bình luận bởi @katherinehhh
  - Sửa lỗi hiển thị cảnh báo khi khối bình luận được sử dụng trên bộ sưu tập không phải bình luận bởi @katherinehhh
- **[Multi-space]** Thiết bị di động hỗ trợ chuyển đổi không gian bởi @jiannx
- **[Workflow: Subflow]** Sửa lỗi workflow được chọn hiển thị "N/A" khi số lượng workflow lớn hơn 200 bởi @mytharcher
- **[Workflow: Approval]**

  - Sửa lỗi xảy ra khi tạo khối thông tin phê duyệt bởi @mytharcher
  - Thêm migration để tránh lỗi bản ghi trùng lặp khi thêm index bởi @mytharcher
  - Sửa lỗi hành động in không hoạt động khi làm mới trang với modal đang mở bởi @mytharcher
