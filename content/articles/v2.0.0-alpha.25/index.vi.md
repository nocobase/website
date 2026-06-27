---
title: "NocoBase v2.0.0-alpha.25: Trải nghiệm mã hóa AI được tối ưu hóa"
description: "Ghi chú phát hành của v2.0.0-alpha.25"
---

### 🚀 Cải tiến

- **[server]** Thêm nhật ký gateway ([#7683](https://github.com/nocobase/nocobase/pull/7683)) bởi @2013xile

- **[flow-engine]** Hỗ trợ định nghĩa ngữ cảnh biến trong định nghĩa bước flow ([#7674](https://github.com/nocobase/nocobase/pull/7674)) bởi @gchust

- **[Trực quan hóa dữ liệu]**
  - Thêm gợi ý chạy truy vấn trước khi cấu hình tùy chọn biểu đồ ([#7685](https://github.com/nocobase/nocobase/pull/7685)) bởi @heziqiang

  - Làm mới dữ liệu biểu đồ khi nhấp vào nút xem trước toàn cục ([#7678](https://github.com/nocobase/nocobase/pull/7678)) bởi @heziqiang

- **[AI employees]** Tối ưu hóa trải nghiệm lập trình AI, bao gồm sử dụng AI employee để xem xét, chẩn đoán và sửa mã. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) bởi @cgyrock

- **[Trình quản lý nguồn dữ liệu]** Điều chỉnh thứ tự cột của loại trường và giao diện, đồng thời thêm bước xác nhận khi thực hiện sửa đổi. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) bởi @2013xile

- **[Workflow]** Hoàn thiện cấu hình workflow ràng buộc cho nút hành động cập nhật bản ghi ([#7668](https://github.com/nocobase/nocobase/pull/7668)) bởi @mytharcher

- **[Trình quản lý đa ứng dụng (không còn được khuyến khích)]** cải thiện app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]**
  - Khắc phục sự cố người dùng không thể đặt giá trị mặc định cho các trường hiển thị ở chế độ chỉ đọc. Điều này đảm bảo cấu hình trường mượt mà hơn khi các trường không thể chỉnh sửa. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) bởi @gchust

  - Sửa các sự cố đã biết với quy tắc liên kết subform ([#7698](https://github.com/nocobase/nocobase/pull/7698)) bởi @zhangzhonghe

  - Menu trường của khối js không thể tải trong khối biểu mẫu bộ lọc ([#7690](https://github.com/nocobase/nocobase/pull/7690)) bởi @gchust

- **[flow-engine]** Lựa chọn ngữ cảnh không chính xác của bản ghi popup hiện tại khi chỉnh sửa phạm vi dữ liệu của một trường liên kết bên trong biểu mẫu chỉnh sửa ([#7675](https://github.com/nocobase/nocobase/pull/7675)) bởi @gchust

- **[Workflow: Nút thủ công]** Sửa lỗi các tác vụ thủ công biến mất sau khi workflow bị vô hiệu hóa ([#7687](https://github.com/nocobase/nocobase/pull/7687)) bởi @mytharcher

- **[AI employees]** Sửa lỗi các khối có tài nguyên API liên kết không tìm nạp dữ liệu tương ứng khi được chọn. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) bởi @cgyrock

- **[Workflow]** Sửa lỗi sau khi xóa một nút bắt đầu nhánh, khóa của nút đầu tiên được giữ lại trong nhánh đã bị thay đổi sai thành một giá trị mới ([#7665](https://github.com/nocobase/nocobase/pull/7665)) bởi @mytharcher

- **[Trường bộ sưu tập: Phân chia hành chính Trung Quốc]** Nhập dữ liệu thất bại khi thành phố và khu vực có cùng tên ([#7673](https://github.com/nocobase/nocobase/pull/7673)) bởi @2013xile

- **[Trình quản lý tệp]** Sửa lỗi tệp `.msg` không thể tải lên đúng cách ([#7662](https://github.com/nocobase/nocobase/pull/7662)) bởi @mytharcher

- **[Flow engine]** Không thể giải quyết các biến trong hành động trường thiết lập liên kết ([#7684](https://github.com/nocobase/nocobase/pull/7684)) bởi @gchust

- **[Trực quan hóa dữ liệu]** Sử dụng API sql:runById để tìm nạp dữ liệu truy vấn khi khởi tạo ([#7677](https://github.com/nocobase/nocobase/pull/7677)) bởi @heziqiang

- **[Workflow: Phê duyệt]** Sửa lỗi dịch thuật của văn bản trạng thái trong thông báo hoàn thành phê duyệt, sử dụng ngôn ngữ mặc định của hệ thống để dịch khi người dùng chưa đặt tùy chọn ngôn ngữ bởi @mytharcher
