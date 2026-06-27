---
title: "NocoBase v1.9.33: Hỗ trợ cấu hình phương thức đổi tên tệp"
description: "Ghi chú phát hành phiên bản v1.9.33"
---

### 🎉 Tính năng mới

- **[client]** Hỗ trợ các thành phần bảo trì do plugin định nghĩa khi ứng dụng chuyển sang trạng thái bảo trì ([#8252](https://github.com/nocobase/nocobase/pull/8252)) bởi @cgyrock

- **[File manager]** Hỗ trợ cấu hình phương thức đổi tên tệp ([#8231](https://github.com/nocobase/nocobase/pull/8231)) bởi @JAVA-LW

- **[File storage: S3(Pro)]** Thêm tùy chọn chế độ đổi tên cho bộ nhớ S3 Pro bởi @mytharcher

### 🚀 Cải tiến

- **[Migration manager]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và khả năng hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[database]**
  - Bao gồm phạm vi through khi truy vấn quan hệ m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) bởi @2013xile

  - Sửa lỗi `appends` đối tượng trong `OptionsParser`, và tăng `arrayLimit` cho tham số ([#8328](https://github.com/nocobase/nocobase/pull/8328)) bởi @mytharcher

- **[client]** Sửa lỗi xảy ra trong cài đặt khối biểu mẫu bộ lọc của trường m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) bởi @mytharcher

- **[Async task manager]** Sửa lỗi ngôn ngữ khi hủy tác vụ nền ([#8245](https://github.com/nocobase/nocobase/pull/8245)) bởi @mytharcher

- **[File manager]** Sửa lỗi xảy ra khi tải tệp lớn hơn 5MB lên AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) bởi @mytharcher

- **[Workflow]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài ([#8207](https://github.com/nocobase/nocobase/pull/8207)) bởi @cgyrock

- **[Collection: Tree]** Cập nhật đường dẫn sau khi tạo hàng loạt các nút collection dạng cây ([#8267](https://github.com/nocobase/nocobase/pull/8267)) bởi @2013xile

- **[Data source: External PostgreSQL]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock

- **[Data source: External Oracle]** Sửa lỗi sự kiện cơ sở dữ liệu trở nên không hợp lệ sau khi làm mới nguồn dữ liệu bên ngoài bởi @cgyrock
