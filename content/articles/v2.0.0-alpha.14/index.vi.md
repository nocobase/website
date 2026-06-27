---
title: "NocoBase v2.0.0-alpha.14: Tối ưu hóa mã AI"
description: "Ghi chú phát hành của v2.0.0-alpha.14"
---

### 🚀 Cải tiến

- **[AI nhân viên]** Tối ưu hóa mã nguồn AI ([#7614](https://github.com/nocobase/nocobase/pull/7614)) bởi @cgyrock

- **[Nguồn dữ liệu: Chính]** Tái cấu trúc logic bản địa hóa cho thông báo lỗi và xử lý trong plugin xử lý lỗi ([#7582](https://github.com/nocobase/nocobase/pull/7582)) bởi @2013xile

### 🐛 Sửa lỗi

- **[database]**
  - Thiết lập `search_path` trước khi thực thi câu lệnh SQL bằng phương thức `runSQL` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) bởi @2013xile

  - Sửa lỗi xảy ra khi toán tử `$in` gặp giá trị `null` ([#7610](https://github.com/nocobase/nocobase/pull/7610)) bởi @mytharcher

- **[client]** Sửa lỗi cửa sổ bật lên biểu tượng tab bị che khuất ([#7607](https://github.com/nocobase/nocobase/pull/7607)) bởi @zhangzhonghe

- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi biến không được phân tích trong biểu mẫu gửi phê duyệt bởi @mytharcher
