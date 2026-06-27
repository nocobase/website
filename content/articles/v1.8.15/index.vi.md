---
title: "NocoBase v1.8.15: Tối ưu hiệu suất khi chuyển tab popup"
description: "Ghi chú phát hành phiên bản v1.8.15"
---

### 🚀 Cải tiến

- **[client]**

  - Thêm hỗ trợ biến ngày "hôm kia" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) bởi @katherinehhh
  - Tối ưu hiệu suất khi chuyển đổi tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) bởi @zhangzhonghe
- **[Workflow]**

  - Sửa test case không ổn định ([#7349](https://github.com/nocobase/nocobase/pull/7349)) bởi @mytharcher
  - Tiêu đề workflow trong thẻ tác vụ sẽ không còn hiển thị với gạch ngang, ngay cả khi phiên bản tương ứng bị vô hiệu hóa ([#7339](https://github.com/nocobase/nocobase/pull/7339)) bởi @mytharcher
- **[Trình xem trước tệp văn phòng]** Thêm hỗ trợ xem trước tệp `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Cải thiện hiệu suất cho thao tác sao lưu cơ sở dữ liệu mysql bởi @gchust

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi bố cục biểu mẫu nhiều cột không chuyển đổi thành bố cục một cột trên thiết bị di động ([#7355](https://github.com/nocobase/nocobase/pull/7355)) bởi @zhangzhonghe
  - Sửa lỗi xóa hàng loạt collection ([#7345](https://github.com/nocobase/nocobase/pull/7345)) bởi @aaaaaajie
  - Sửa lỗi phạm vi dữ liệu đã lưu trước đó không được chọn trước khi cấu hình quyền riêng lẻ. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) bởi @aaaaaajie
- **[Workflow]**

  - Tái cấu trúc menu "Thêm nút" và sửa lỗi hiệu suất render canvas workflow do nó gây ra ([#7363](https://github.com/nocobase/nocobase/pull/7363)) bởi @mytharcher
  - Sửa lỗi điều kiện lọc không chính xác khi truy xuất một mục công việc đơn lẻ ([#7366](https://github.com/nocobase/nocobase/pull/7366)) bởi @mytharcher
  - Sửa lỗi khớp từ khóa trong bộ chọn trường ([#7356](https://github.com/nocobase/nocobase/pull/7356)) bởi @mytharcher
  - Tránh lỗi xảy ra do xuất bản vào hàng đợi sự kiện khi dừng ([#7348](https://github.com/nocobase/nocobase/pull/7348)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi tin nhắn trong trang được nhận nhưng không hiển thị trong popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) bởi @mytharcher
- **[Di động]** Khắc phục sự cố bộ chọn ngày trên thiết bị di động hiển thị không chính xác khi áp dụng giới hạn phạm vi ngày ([#7362](https://github.com/nocobase/nocobase/pull/7362)) bởi @katherinehhh
- **[Trình quản lý tệp]** Thêm trường `storageId` vào collection tệp để hỗ trợ cấu hình quyền ([#7351](https://github.com/nocobase/nocobase/pull/7351)) bởi @mytharcher
- **[Workflow: Nút song song]** Sửa lỗi nút song song tạm dừng sau khi tiếp tục trên MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) bởi @mytharcher
- **[Workflow: CC]** Sửa lỗi không thể xóa block ([#7338](https://github.com/nocobase/nocobase/pull/7338)) bởi @mytharcher
- **[Trình xem trước tệp văn phòng]** Hỗ trợ tệp `.docx`, `.xlsx` và `.pptx` chỉ có URL để xem trước ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** Vấn đề biến ngày trong giá trị mặc định của trường ngày trong block bộ lọc biểu đồ ([#7291](https://github.com/nocobase/nocobase/pull/7291)) bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Sửa lỗi quy tắc liên kết không hoạt động trong block chi tiết gốc phê duyệt bởi @mytharcher
  - Sửa lỗi cập nhật liên kết khi gửi bản nháp bởi @mytharcher
