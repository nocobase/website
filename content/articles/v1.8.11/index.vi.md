---
title: "NocoBase v1.8.11: Hỗ trợ xem trước tệp Office qua bản xem trước trực tiếp của Microsoft"
description: "Ghi chú phát hành phiên bản v1.8.11"
---

### 🎉 Tính năng mới

- **[Trình xem tệp Office]** Hỗ trợ xem trước tệp Office qua bản xem trước trực tiếp của Microsoft ([#7300](https://github.com/nocobase/nocobase/pull/7300)) bởi @mytharcher

### 🚀 Cải tiến

- **[client]** Không tự động đóng menu sau khi chọn ([#7252](https://github.com/nocobase/nocobase/pull/7252)) bởi @kerwin612

- **[Thông báo: Tin nhắn trong ứng dụng]** Thay đổi tin nhắn trong ứng dụng từ SSE sang WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) bởi @mytharcher

- **[Workflow]** Giảm số lượng công việc cần tải khi chuẩn bị thực thi ([#7284](https://github.com/nocobase/nocobase/pull/7284)) bởi @mytharcher

- **[Xác thực: DingTalk]** Trong ứng dụng DingTalk, đặt tiêu đề thanh điều hướng thành chuỗi rỗng thay vì hiển thị “Đang tải…” bởi @2013xile

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi không thể mở rộng bảng dạng cây ([#7309](https://github.com/nocobase/nocobase/pull/7309)) bởi @zhangzhonghe

  - Sửa hành vi bất thường trong sắp xếp kéo thả hàng của bảng ([#6959](https://github.com/nocobase/nocobase/pull/6959)) bởi @ChimingLiu

  - Sửa lỗi vòng lặp vô hạn khi phân tích giá trị mặc định của trường ([#7301](https://github.com/nocobase/nocobase/pull/7301)) bởi @zhangzhonghe

  - Sửa lỗi hiển thị bất thường của trường ngày trong cửa sổ bật lên khi cấu hình bộ chọn dữ liệu cho trường quan hệ trong biểu mẫu lọc ([#7290](https://github.com/nocobase/nocobase/pull/7290)) bởi @katherinehhh

- **[Workflow: Nút yêu cầu HTTP]** Sửa lỗi điều kiện cạnh tranh ([#7310](https://github.com/nocobase/nocobase/pull/7310)) bởi @mytharcher

- **[Workflow]** Sửa lỗi ID BigInt trong MySQL khi lưu công việc ([#7292](https://github.com/nocobase/nocobase/pull/7292)) bởi @mytharcher

- **[Hành động: Xuất bản ghi]** Sửa lỗi định dạng không chính xác của các trường quan hệ lồng nhau khi xuất ra Excel. ([#7277](https://github.com/nocobase/nocobase/pull/7277)) bởi @aaaaaajie

- **[Nguồn dữ liệu: SQL Server bên ngoài]** Sửa lỗi định dạng lưu trữ không nhất quán cho trường datetime (không có múi giờ) của MSSQL từ các nguồn dữ liệu bên ngoài bởi @aaaaaajie

- **[Workflow: Phê duyệt]** Sửa lỗi xảy ra từ bộ chọn người được gán trong nguồn dữ liệu bên ngoài bởi @mytharcher
