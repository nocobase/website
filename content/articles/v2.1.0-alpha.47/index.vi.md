---
title: "NocoBase v2.1.0-alpha.47: Thêm tùy chọn cho khối Gantt để tập trung vào hôm nay theo mặc định."
description: "Ghi chú phát hành của v2.1.0-alpha.47"
---

### 🎉 Tính năng mới

- **[undefined]** Cải thiện quản lý ứng dụng và plugin trong CLI, bao gồm xử lý môi trường nhận biết appPath, nhập plugin, đồng bộ plugin đã cấp phép và cập nhật tài liệu liên quan. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) bởi @chenos
  Tham khảo: [Tài liệu CLI](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Hướng dẫn nhanh](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Khối: Gantt]** Thêm tùy chọn cho khối Gantt để tập trung vào hôm nay theo mặc định. ([#9692](https://github.com/nocobase/nocobase/pull/9692)) bởi @jiannx
- **[Đa không gian]** Thêm hỗ trợ client v2 cho plugin đa không gian, bao gồm chuyển đổi không gian và quản lý không gian. bởi @jiannx

### 🚀 Cải tiến

- **[Workflow]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi quá trình thực thi workflow. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) bởi @mytharcher
- **[Mẫu UI]** Di chuyển mẫu UI sang client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) bởi @gchust
- **[Bộ lọc đa từ khóa]** Di chuyển bộ lọc đa từ khóa sang client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) bởi @gchust
- **[Workflow: Subflow]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi hướng dẫn workflow subflow. bởi @mytharcher
- **[Workflow: Phê duyệt]** Loại bỏ sự phụ thuộc giao dịch lịch sử workflow khỏi hướng dẫn workflow phê duyệt. bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi các trường liên kết bị ẩn vẫn giữ giá trị cũ. ([#9687](https://github.com/nocobase/nocobase/pull/9687)) bởi @zhangzhonghe
- **[Hành động: Nhập bản ghi]** Sửa lỗi bản ghi nhập nhận giá trị sắp xếp trùng lặp. ([#9684](https://github.com/nocobase/nocobase/pull/9684)) bởi @2013xile
- **[Công cụ luồng]** Sửa lỗi khi chuyển đổi khối mẫu tham chiếu thành bản sao gây ra lỗi. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) bởi @gchust
- **[Khối: Bản đồ]** Sửa lỗi giá trị trường bản đồ bị chuyển đổi sai khi chuyển đổi giữa chế độ hiển thị văn bản và bản đồ trên trang chi tiết. ([#9653](https://github.com/nocobase/nocobase/pull/9653)) bởi @hongboji
- **[Workflow]** Sửa lỗi thực thi workflow trùng lặp dưới các worker đồng thời. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) bởi @mytharcher
- **[Workflow: Phê duyệt]** Sửa lỗi tiêu đề trường tùy chỉnh không hiển thị trong chi tiết biểu mẫu phê duyệt. bởi @zhangzhonghe
