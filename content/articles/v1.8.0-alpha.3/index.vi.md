---
title: "NocoBase v1.8.0-alpha.3: Tối ưu hiệu suất khi xử lý tệp XLSX lớn"
description: "Ghi chú phát hành phiên bản v1.8.0-alpha.3"
---

### 🚀 Cải tiến

- **[Hành động: Chỉnh sửa hàng loạt]** Sử dụng `filterByTk` thay vì `filter` trong chế độ đã chọn ([#6994](https://github.com/nocobase/nocobase/pull/6994)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Tối ưu hóa hiệu suất khi xử lý các tệp XLSX lớn (tập dữ liệu có nhiều hàng/cột), ngăn chặn tình trạng hệ thống bị treo hoặc đơ. bởi @aaaaaajie

### 🐛 Sửa lỗi

- **[client]**
  - Thiếu tiêu đề trường trong thành phần assignedField ([#6987](https://github.com/nocobase/nocobase/pull/6987)) bởi @katherinehhh

  - Không thể chọn mục menu cuối cùng trong danh sách di chuyển menu ([#6997](https://github.com/nocobase/nocobase/pull/6997)) bởi @zhangzhonghe

  - Nội dung hiển thị không chính xác trên các trang được mở qua liên kết popup ([#6990](https://github.com/nocobase/nocobase/pull/6990)) bởi @zhangzhonghe

- **[Workflow]**
  - Sửa lỗi bộ lọc không được cập nhật khi chuyển đổi tab danh mục ([#6989](https://github.com/nocobase/nocobase/pull/6989)) bởi @mytharcher

  - Sửa lỗi thống kê workflow không được tự động tạo ([#6993](https://github.com/nocobase/nocobase/pull/6993)) bởi @mytharcher
