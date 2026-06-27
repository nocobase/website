---
title: "NocoBase v2.1.4: Thay đổi lưu trữ tệp nhập tải lên sang ổ đĩa để giảm áp lực bộ nhớ khi nhập dữ liệu lớn"
description: "Ghi chú phát hành v2.1.4"
---

### 🚀 Cải tiến

- **[Quy trình công việc]** Cải thiện trải nghiệm chỉnh sửa metadata của quy trình công việc bằng cách hỗ trợ chỉnh sửa mô tả trong popup chi tiết và tự động điền metadata nguồn của quy trình công việc khi sao chép quy trình. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Thay đổi các tệp nhập đã tải lên thành lưu trữ đĩa để giảm áp lực bộ nhớ trong quá trình nhập dữ liệu lớn. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Đã sửa lỗi bảo mật khi tên schema PostgreSQL không an toàn có thể được chấp nhận trong quá trình khôi phục sao lưu. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) bởi @2013xile
- **[Quy trình công việc]**

  - Đã sửa cách xử lý thời gian chờ của quy trình công việc để các lần thực thi bị hủy bỏ và các tác vụ đang chờ của chúng có thể được cập nhật một cách nguyên tử. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) bởi @mytharcher
  - Đã sửa lỗi trường "cập nhật lần cuối bởi" của quy trình công việc không được cập nhật sau khi thay đổi nút quy trình. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) bởi @mytharcher
- **[Hành động: Nhập bản ghi Pro]** Tránh phân tích các tệp lớn trong nút yêu cầu trước khi nhập Pro tạo một tác vụ bất đồng bộ. bởi @mytharcher
- **[Kiểm soát phiên bản]** Điều chỉnh vị trí của mục nhập lối tắt trên cùng của kiểm soát phiên bản để nó xuất hiện bên cạnh trình chỉnh sửa UI trong cả bố cục quản trị cũ và v2. bởi @cgyrock
