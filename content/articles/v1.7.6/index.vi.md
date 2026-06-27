---
title: "NocoBase v1.7.6: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.7.6"
---

### 🚀 Cải tiến

- **[client]** Cấm di chuyển menu nhóm vào chính nó ([#7005](https://github.com/nocobase/nocobase/pull/7005)) của @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**
  - Đã khắc phục sự cố khối không đọc được dữ liệu view từ nguồn dữ liệu bên ngoài. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) của @aaaaaajie

  - Sửa lỗi tham số khối bộ lọc ([#6966](https://github.com/nocobase/nocobase/pull/6966)) của @zhangzhonghe

  - Biến đối tượng hiện tại không hợp lệ trong quy tắc liên kết ([#7008](https://github.com/nocobase/nocobase/pull/7008)) của @zhangzhonghe

  - Không thể xóa chỉ báo trường bắt buộc của bảng con bằng quy tắc liên kết ([#7022](https://github.com/nocobase/nocobase/pull/7022)) của @zhangzhonghe

- **[undefined]** Loại bỏ phụ thuộc cơ sở dữ liệu cho possibleTypes, áp dụng cấu hình dựa trên API của @aaaaaajie

- **[Mobile]** Tối ưu hóa vấn đề lag trên popup di động ([#7029](https://github.com/nocobase/nocobase/pull/7029)) của @zhangzhonghe

- **[Trình quản lý nguồn dữ liệu]** Loại bỏ phụ thuộc cơ sở dữ liệu cho possibleTypes, áp dụng cấu hình dựa trên API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) của @aaaaaajie

- **[Hành động: Nhập bản ghi]** Đã sửa lỗi xảy ra trong quá trình chỉnh sửa hàng loạt khi nhập dữ liệu bảng cây XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) của @aaaaaajie

- **[Workflow]** Sửa lỗi giao diện khi workflow không tồn tại ([#7023](https://github.com/nocobase/nocobase/pull/7023)) của @mytharcher

- **[Workflow: JavaScript]** Sửa lỗi require cho đường dẫn tương đối của @mytharcher

- **[Workflow: Phê duyệt]**
  - Sửa lỗi xảy ra khi workflow bị xóa của @mytharcher

  - Tải lại liên kết tệp từ ảnh chụp nhanh để tránh URL hết hạn của @mytharcher

  - Sửa lỗi biến kích hoạt của @mytharcher
