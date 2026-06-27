---
title: "NocoBase v1.7.0-beta.32: Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc"
description: "Ghi chú phát hành của v1.7.0-beta.32"
---

### 🎉 Tính năng mới

- **[client]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc ([#6685](https://github.com/nocobase/nocobase/pull/6685)) bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Bộ lọc đa từ khóa]** Trường văn bản một dòng hỗ trợ nhập nhiều từ khóa để lọc bởi @zhangzhonghe
  Tham khảo: [Bộ lọc đa từ khóa](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[In mẫu]** Thêm hỗ trợ in hàng loạt trong tính năng in mẫu. bởi @sheldon66

### 🚀 Cải tiến

- **[Workflow]** Thêm tất cả các khóa ngôn ngữ en-US còn thiếu ([#6885](https://github.com/nocobase/nocobase/pull/6885)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - thành phần cascade trong modal không tải dữ liệu liên kết ban đầu ([#6886](https://github.com/nocobase/nocobase/pull/6886)) bởi @katherinehhh
  - dữ liệu liên kết không được gửi khi hiển thị các trường liên kết trong subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) bởi @katherinehhh
  - các trường sắp xếp kéo thả không hiển thị đúng các tùy chọn khả dụng ([#6875](https://github.com/nocobase/nocobase/pull/6875)) bởi @katherinehhh
  - thiếu biến biểu mẫu hiện tại trong phạm vi dữ liệu của bảng chọn dữ liệu ([#6882](https://github.com/nocobase/nocobase/pull/6882)) bởi @katherinehhh
  - bảng ghi chọn liên kết không lọc các bản ghi đã liên kết ([#6874](https://github.com/nocobase/nocobase/pull/6874)) bởi @katherinehhh
- **[database]** xử lý các ô chuỗi rỗng trong quá trình nhập trường để tránh lỗi ([#6880](https://github.com/nocobase/nocobase/pull/6880)) bởi @aaaaaajie
- **[Workflow: Nút thủ công]** Sửa lỗi hiển thị khi hiển thị mục chưa xử lý ([#6879](https://github.com/nocobase/nocobase/pull/6879)) bởi @mytharcher
- **[Quản lý tệp]** Sửa kiểu dữ liệu ([#6873](https://github.com/nocobase/nocobase/pull/6873)) bởi @mytharcher
- **[Khối: Bảng hành động]** Đọc tên cơ sở đường dẫn từ máy quét để thích ứng với môi trường máy tính để bàn. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) bởi @sheldon66
- **[Tích hợp AI]** Nội dung không được hiển thị khi chuyển đổi giữa các trang cấu hình dịch vụ LLM và cấu hình xác thực ([#6887](https://github.com/nocobase/nocobase/pull/6887)) bởi @2013xile
- **[Workflow]** Sửa lỗi giới hạn ngăn xếp hoạt động không chính xác cho sự kiện bộ sưu tập ([#6876](https://github.com/nocobase/nocobase/pull/6876)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa phạm vi người được ủy quyền và thêm vào những người được ủy quyền khác bởi @mytharcher
- **[Quản lý sao lưu]** Sửa lỗi kiểu dữ liệu trong quá trình xây dựng bởi @mytharcher
