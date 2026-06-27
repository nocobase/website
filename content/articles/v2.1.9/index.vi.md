---
title: "NocoBase v2.1.9: Thêm tùy chọn ghi đè giá trị cho cài đặt giá trị trường"
description: "Ghi chú phát hành phiên bản v2.1.9"
---

### 🚀 Cải tiến

- **[client-v2]** Thêm tùy chọn ghi đè giá trị cho cài đặt giá trị trường. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) bởi @gchust

### 🐛 Sửa lỗi

- **[client-v2]**
  - Đã sửa lỗi nút kích hoạt quy trình làm việc tùy chỉnh gửi JSON ngữ cảnh tùy chỉnh dưới thuộc tính `values` thừa hoặc dưới dạng chuỗi đã được tuần tự hóa. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) bởi @mytharcher

  - Đã sửa lỗi khi cấu hình giá trị trường liên kết dưới dạng giá trị cố định hoặc giá trị mặc định không có hiệu lực. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) bởi @gchust

- **[auth]** Dữ liệu mật khẩu đã mã hóa không còn được bao gồm trong phản hồi trạng thái đăng nhập ([#9836](https://github.com/nocobase/nocobase/pull/9836)) bởi @2013xile

- **[app]** Bỏ qua currentScript không liên quan khi suy luận đường dẫn công khai của plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) bởi @chenos

- **[Mẫu giao diện]** Đã sửa lỗi ngữ cảnh mặc định không chính xác cho ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) bởi @gchust
