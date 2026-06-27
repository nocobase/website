---
title: "NocoBase v2.1.3: Chuẩn hóa phiên bản tương thích ứng dụng"
description: "Ghi chú phát hành v2.1.3"
---

### 🚀 Cải tiến

- **[cli]**
  - Chuẩn hóa phiên bản build tương thích ứng dụng ([#9763](https://github.com/nocobase/nocobase/pull/9763)) bởi @chenos
  - Hỗ trợ cập nhật kỹ năng lên phiên bản chỉ định ([#9760](https://github.com/nocobase/nocobase/pull/9760)) bởi @chenos

### 🐛 Sửa lỗi

- **[client]** Đã sửa lỗi các trường trong biểu mẫu con dạng ngang quá hẹp để hiển thị dữ liệu ([#9755](https://github.com/nocobase/nocobase/pull/9755)) bởi @zhangzhonghe
- **[Trình quản lý nguồn dữ liệu]**

  - Đã sửa lỗi ngăn kéo chỉnh sửa trường trống do render lặp lại trên trang Cấu hình trường của nguồn dữ liệu ngoài v1. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) bởi @katherinehhh
  - Đã sửa lỗi xóa danh mục bộ sưu tập đang hoạt động trong trình quản lý nguồn dữ liệu v1 có thể khiến tab Tất cả bộ sưu tập trống. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) bởi @katherinehhh
- **[Trình quản lý tác vụ bất đồng bộ]** Đã sửa lỗi ID yêu cầu không chính xác trong nhật ký worker tác vụ bất đồng bộ ([#9686](https://github.com/nocobase/nocobase/pull/9686)) bởi @2013xile
- **[Workflow: Node SQL]** Đã sửa lỗi di chuyển biến mẫu kế thừa trong workflow SQL bị bỏ qua đối với một số người dùng phiên bản beta. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) bởi @mytharcher
- **[Nhân viên AI]**

  - Đã sửa lỗi mất cấu hình tin nhắn trong các node LLM của workflow. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) bởi @cgyrock
  - Đã sửa lỗi không thể xóa tệp đính kèm được dán vào hộp thoại nhân viên AI. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) bởi @cgyrock
- **[Khối: Kanban]** Đã sửa lỗi hỗ trợ URL cho lịch và cửa sổ bật lên liên quan. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) bởi @jiannx
- **[Workflow: Phê duyệt]** Đã sửa lỗi dữ liệu liên quan không được hiển thị trong biểu mẫu phê duyệt v2 bởi @zhangzhonghe
