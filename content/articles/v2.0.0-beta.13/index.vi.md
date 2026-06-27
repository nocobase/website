---
title: "NocoBase v2.0.0-beta.13: Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS"
description: "Ghi chú phát hành của v2.0.0-beta.13"
---

### 🚀 Cải tiến

- **[server]** Hỗ trợ cấu hình danh sách trắng nguồn gốc CORS ([#8454](https://github.com/nocobase/nocobase/pull/8454)) bởi @2013xile

- **[Hành động: Xuất bản ghi]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên bản ghi đã chọn hoặc bộ lọc tài nguyên ([#8442](https://github.com/nocobase/nocobase/pull/8442)) bởi @katherinehhh

- **[Hành động: Xuất bản ghi Pro]** Cải thiện phạm vi dữ liệu của hành động xuất dựa trên bản ghi đã chọn hoặc bộ lọc tài nguyên bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi cửa sổ bật lên "Biến tùy chỉnh" bị che khuất ([#8463](https://github.com/nocobase/nocobase/pull/8463)) bởi @zhangzhonghe

  - Sửa lỗi khi chỉnh sửa bộ sưu tập trong giao diện đồ họa ([#8451](https://github.com/nocobase/nocobase/pull/8451)) bởi @katherinehhh

  - Sửa lỗi cài đặt sắp xếp nhóm trường bộ sưu tập không có hiệu lực. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) bởi @katherinehhh

  - Sửa lỗi chiều cao modal phím tắt vượt quá chiều cao khung nhìn ([#8437](https://github.com/nocobase/nocobase/pull/8437)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết nút hàng trong bảng ảnh hưởng đến trạng thái của nút trong biểu mẫu bật lên ([#8434](https://github.com/nocobase/nocobase/pull/8434)) bởi @zhangzhonghe

  - Sửa lỗi trạng thái cột hành động của bảng bị nhiễu khi chuyển trang. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) bởi @gchust

  - Sửa lỗi nút "Cài đặt cột" trong bảng không hoạt động ([#8441](https://github.com/nocobase/nocobase/pull/8441)) bởi @zhangzhonghe

  - Sửa lỗi cửa sổ bật lên của bộ chọn trường liên kết tệp có z-index không chính xác và cấu hình cửa sổ bật lên không thể lưu đúng cách. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) bởi @gchust

- **[flow-engine]**
  - Sửa lỗi các biến trong tham số mã runjs được giải quyết trước khi thực thi. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) bởi @gchust

  - Sửa lỗi không thể chọn biến cửa sổ bật lên trong cửa sổ bật lên tạo nhanh của bộ chọn dữ liệu. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) bởi @gchust

  - Sửa lỗi nhấp liên tục vào menu cấu hình có thể mở nhiều cửa sổ bật lên cấu hình. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) bởi @gchust

- **[Mobile (không còn được hỗ trợ)]** Plugin di động không còn được hỗ trợ (được thay thế bằng plugin ui-layout từ phiên bản 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) bởi @chenos

- **[Flow engine]** Sửa lỗi các biến chứa dấu gạch ngang không thể được phân tích chính xác. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) bởi @gchust

- **[Trình quản lý email]** Sửa lỗi cửa sổ bật lên cấu hình email bị che khuất bởi @zhangzhonghe
