---
title: "NocoBase v1.9.25: Thêm logic chịu lỗi cho dữ liệu bị thiếu trong quá trình chuẩn bị xử lý"
description: "Ghi chú phát hành phiên bản v1.9.25"
---

### 🚀 Cải tiến

- **[Workflow]**
  - Thêm logic chịu lỗi cho dữ liệu bị thiếu trong quá trình chuẩn bị processor, nhằm tránh treo thực thi ([#8156](https://github.com/nocobase/nocobase/pull/8156)) bởi @mytharcher

  - Sử dụng tải chậm (lazy load) cho dữ liệu liên kết trên canvas workflow để cải thiện hiệu suất ([#8142](https://github.com/nocobase/nocobase/pull/8142)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[acl]** Sửa lỗi API `acl.can` trả về `null` khi vai trò là `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) bởi @mytharcher

- **[Workflow: Node thủ công]** Sửa lỗi danh sách việc cần làm thủ công đang sử dụng API không chính xác ([#8144](https://github.com/nocobase/nocobase/pull/8144)) bởi @mytharcher

- **[Mã hóa yêu cầu HTTP]** Sử dụng dấu ngoặc nhọn cho định dạng mảng trong phân tích qs bởi @chenos

- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra khi hủy một lần thực thi trong khi workflow của nó đã bị xóa bởi @mytharcher

- **[Trình quản lý di chuyển]** Sửa lỗi mất dấu xuống dòng trong dữ liệu trong quá trình di chuyển. bởi @cgyrock
