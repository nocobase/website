---
title: "NocoBase v1.9.18: Sửa lỗi"
description: "Ghi chú phát hành phiên bản v1.9.18"
---

### 🐛 Sửa lỗi

- **[Hành động: Nhập bản ghi]** Các trường được nhập không khớp với các trường được thiết lập trong ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) bởi @2013xile

- **[Luồng công việc]** Sửa lỗi trang thực thi báo lỗi khi jobs trên node không được xác định ([#8066](https://github.com/nocobase/nocobase/pull/8066)) bởi @mytharcher

- **[Kiểm soát truy cập]** Thêm middleware để kiểm tra quyền trên các thao tác liên kết cho nguồn dữ liệu bên ngoài ([#8062](https://github.com/nocobase/nocobase/pull/8062)) bởi @2013xile

- **[Luồng công việc: Phê duyệt]**
  - Sửa lỗi quyền bị báo lỗi khi tải các phê duyệt liên quan đến bản ghi trên drawer chi tiết bởi @mytharcher

  - Sửa lỗi bản ghi phê duyệt không được bao gồm trong kết quả job ở nhánh trả về bởi @mytharcher

  - Sửa lỗi quy trình không chính xác khi phân nhánh với thứ tự và chữ ký xác nhận bởi @mytharcher
