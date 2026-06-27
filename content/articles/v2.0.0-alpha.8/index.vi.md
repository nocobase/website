---
title: "NocoBase v2.0.0-alpha.8: Cải thiện chức năng tìm kiếm web của plugin-ai"
description: "Ghi chú phát hành v2.0.0-alpha.8"
---

### 🎉 Tính năng mới

- **[AI employees]** Cải thiện chức năng tìm kiếm web của plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) bởi @cgyrock

### 🚀 Cải tiến

- **[client]** Để có được loại MIME chính xác hơn của tệp, sử dụng gói `mime` để phát hiện loại MIME của tệp trong client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) bởi @mytharcher

- **[flow-engine]**
  - Hỗ trợ biến popup ([#7583](https://github.com/nocobase/nocobase/pull/7583)) bởi @gchust

  - Nâng cao trải nghiệm chỉnh sửa mã với các đoạn mã phong phú hơn và tính năng tự động hoàn thành mã theo ngữ cảnh cho nhiều tình huống khác nhau ([#7559](https://github.com/nocobase/nocobase/pull/7559)) bởi @gchust

  - Chuẩn hóa các quy trình tự động để được kích hoạt nhất quán bởi sự kiện "beforeRender", đảm bảo hoạt động có thể dự đoán và thống nhất trên các quy trình. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) bởi @gchust

- **[Workflow]** Thêm tùy chọn `keepBranch` khi xóa nút ([#7571](https://github.com/nocobase/nocobase/pull/7571)) bởi @mytharcher

- **[Data visualization]** Mở rộng các loại biểu đồ; Tối ưu hóa giao diện người dùng và trải nghiệm tương tác. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) bởi @heziqiang

- **[Workflow: Approval]** Tái cấu trúc cấu hình nhánh để thích ứng với các thay đổi của kernel bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi hiển thị trang bất thường khi chuyển đổi phân trang bảng ([#7572](https://github.com/nocobase/nocobase/pull/7572)) bởi @zhangzhonghe

  - Không thể cấu hình giá trị trường gán cho hành động `Cập nhật` và `Cập nhật hàng loạt` ([#7565](https://github.com/nocobase/nocobase/pull/7565)) bởi @gchust

  - Sửa lỗi hình ảnh không hiển thị chính xác khi vừa xoay vừa thu phóng trong quá trình xem trước ([#7573](https://github.com/nocobase/nocobase/pull/7573)) bởi @mytharcher

- **[Workflow: Approval]** Sửa lỗi tập lệnh di chuyển báo lỗi do bảng không tồn tại khi ứng dụng chưa được cài đặt bởi @mytharcher

- **[Auth: LDAP]** Sửa lỗi ràng buộc LDAP thất bại với DN không phải ASCII (UTF-8) trong Active Directory bởi @2013xile
