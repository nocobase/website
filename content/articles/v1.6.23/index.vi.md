---
title: "NocoBase v1.6.23: Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade`"
description: "Ghi chú phát hành phiên bản v1.6.23"
---

### 🚀 Cải tiến

- **[cli]** Tối ưu hóa logic nội bộ của lệnh `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) bởi @chenos

- **[In mẫu]** Thay thế điều khiển hành động nguồn dữ liệu bằng kiểm soát truy cập dựa trên vai trò máy khách. bởi @sheldon66

### 🐛 Sửa lỗi

- **[cli]** Tự động cập nhật package.json khi nâng cấp ([#6747](https://github.com/nocobase/nocobase/pull/6747)) bởi @chenos

- **[client]**
  - Thiếu bộ lọc cho dữ liệu đã được liên kết khi thêm dữ liệu liên kết ([#6750](https://github.com/nocobase/nocobase/pull/6750)) bởi @katherinehhh

  - Quy tắc liên kết nút 'Thêm con' của bảng cây thiếu 'bản ghi hiện tại' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) bởi @katherinehhh

- **[Hành động: Nhập bản ghi]** Sửa các lỗi ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) bởi @aaaaaajie

- **[Khối: Gantt]** Khối biểu đồ Gantt bị chồng chéo tháng trong tiêu đề lịch của chế độ xem tháng ([#6753](https://github.com/nocobase/nocobase/pull/6753)) bởi @katherinehhh

- **[Hành động: Xuất bản ghi Pro]**
  - Nút xuất Pro bị mất tham số bộ lọc sau khi sắp xếp cột bảng bởi @katherinehhh

  - Sửa các lỗi ngoại lệ nhập và xuất xảy ra khi thiết lập quyền trường. bởi @aaaaaajie

- **[Lưu trữ tệp: S3(Pro)]** Sửa dữ liệu phản hồi của tệp đã tải lên bởi @mytharcher

- **[Quy trình công việc: Phê duyệt]** Sửa lỗi tải trước các trường liên kết cho bản ghi bởi @mytharcher
