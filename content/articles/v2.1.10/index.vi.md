---
title: "NocoBase v2.1.10: Bổ sung hỗ trợ sử dụng biến người dùng hiện tại trong URL và tiêu đề của máy khách MCP từ xa"
description: "Ghi chú phát hành v2.1.10"
---

### 🎉 Tính năng mới

- **[ai]** Hỗ trợ sử dụng biến người dùng hiện tại trong URL và header của client MCP từ xa. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) bởi @cgyrock
- **[cli]** Hỗ trợ cài đặt script hook ([#9824](https://github.com/nocobase/nocobase/pull/9824)) bởi @chenos

### 🚀 Cải tiến

- **[client-v2]** Hiển thị quy tắc xác thực cấp trường dưới dạng quy tắc kế thừa chỉ đọc trong cài đặt xác thực trường giao diện. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) bởi @katherinehhh
- **[Flow engine]** Thêm block hiện tại vào ngữ cảnh người dùng theo mặc định khi xây dựng AI employee bằng Flow Surface API. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) bởi @gchust

### 🐛 Sửa lỗi

- **[client-v2]** Sửa lỗi block không làm mới sau khi cập nhật cài đặt block. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) bởi @gchust
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Sửa lỗi hành động workflow kích hoạt bởi ngữ cảnh tùy chỉnh để các biến giao diện trong payload yêu cầu được giải quyết trước khi gửi trong nút hành động v2 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) bởi @mytharcher
  - Sửa lỗi bộ chọn liên kết workflow hành động tùy chỉnh v2 để các workflow đã bật được lọc bằng giá trị boolean và có thể được liệt kê chính xác. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) bởi @mytharcher
- **[Block: Gantt]** Sửa lỗi cài đặt mẫu popup tác vụ Gantt không áp dụng hoặc xóa đúng cách. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) bởi @jiannx
- **[Workflow: Phê duyệt]**

  - Sửa lỗi xác thực nút hành động phê duyệt để cho phép `null` cho `applyDetail` hoặc `approvalUid` và bỏ qua xử lý trừ khi có tham chiếu chuỗi được cung cấp bởi @mytharcher
  - Sửa lỗi các phê duyệt liên quan không tải hoặc làm mới đúng cách bởi @zhangzhonghe
