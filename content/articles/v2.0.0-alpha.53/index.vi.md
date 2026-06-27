---
title: "NocoBase v2.0.0-alpha.53: hỗ trợ định dạng số cho trường phần trăm"
description: "Ghi chú phát hành của v2.0.0-alpha.53"
---

### 🚀 Cải tiến

- **[acl]** Hỗ trợ API `acl.registerSnippet` để hợp nhất cấu hình snippet ([#8155](https://github.com/nocobase/nocobase/pull/8155)) bởi @mytharcher

- **[client]** Hỗ trợ định dạng số cho trường phần trăm ([#8123](https://github.com/nocobase/nocobase/pull/8123)) bởi @katherinehhh

- **[flow-engine]** Hỗ trợ ẩn menu cấu hình bước một cách linh hoạt ([#7924](https://github.com/nocobase/nocobase/pull/7924)) bởi @gchust

- **[Block: GridCard]** Tối ưu hóa kiểu dáng của khối Grid Card để bố cục gọn gàng hơn ([#8152](https://github.com/nocobase/nocobase/pull/8152)) bởi @katherinehhh

- **[AI employees]** Bật chức năng chỉnh sửa cho các prompt hệ thống của trợ lý AI tích hợp sẵn.<br/>Tối ưu hóa prompt hệ thống cho trợ lý AI Nathan.<br/>Sửa lỗi máy chủ không đọc được file tĩnh. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) bởi @heziqiang

- **[Workflow]**
  - Thêm logic chịu lỗi cho trường hợp thiếu dữ liệu trong quá trình chuẩn bị xử lý, để tránh treo thực thi ([#8156](https://github.com/nocobase/nocobase/pull/8156)) bởi @mytharcher

  - Sử dụng tải chậm (lazy load) cho dữ liệu liên kết trên canvas workflow để cải thiện hiệu suất ([#8142](https://github.com/nocobase/nocobase/pull/8142)) bởi @mytharcher

- **[Collection field: Markdown(Vditor)]** Vô hiệu hóa phân tích biến trong trường Markdown theo mặc định ở chế độ readPretty ([#8145](https://github.com/nocobase/nocobase/pull/8145)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[flow-engine]** Sửa lỗi tải xuống file đính kèm không đúng ([#8154](https://github.com/nocobase/nocobase/pull/8154)) bởi @katherinehhh

- **[client]**
  - Sửa lỗi dropdown trường liên kết bị vô hiệu hóa khi trường tùy chọn tồn tại ([#8153](https://github.com/nocobase/nocobase/pull/8153)) bởi @katherinehhh

  - Sửa lỗi nhập văn bản tiếng Trung xóa các tùy chọn hiện có khi sử dụng toán tử đa lựa chọn trên trường đơn lựa chọn trong khối bộ lọc biểu mẫu. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) bởi @gchust

  - Sửa lỗi chuyển đổi trường nhãn làm mất cấu hình popup. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) bởi @gchust

- **[acl]** Sửa lỗi API `acl.can` trả về `null` khi vai trò là `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) bởi @mytharcher

- **[database]** `filterByTk` hiện hỗ trợ mảng khi truy vấn các collection có nhiều khóa mục tiêu bộ lọc ([#7986](https://github.com/nocobase/nocobase/pull/7986)) bởi @chenos

- **[Action: Import records]** Đồng bộ chờ các sự kiện `afterCreate` được kích hoạt bởi quá trình nhập kết thúc. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) bởi @2013xile

- **[Collection field: Sequence]** Cải thiện độ ổn định của plugin-field-sequence khi xử lý lệnh sửa chữa ([#8139](https://github.com/nocobase/nocobase/pull/8139)) bởi @cgyrock

- **[Workflow: Manual node]** Sửa lỗi danh sách công việc thủ công đang sử dụng API không chính xác ([#8144](https://github.com/nocobase/nocobase/pull/8144)) bởi @mytharcher

- **[HTTP request encryption]** Sử dụng dấu ngoặc vuông cho định dạng mảng trong phân tích cú pháp qs bởi @chenos

- **[Workflow: Approval]** Sửa lỗi xảy ra khi hủy thực thi một workflow đã bị xóa bởi @mytharcher

- **[Migration manager]** Sửa lỗi mất ngắt dòng trong dữ liệu trong quá trình di chuyển. bởi @cgyrock
