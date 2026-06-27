---
title: "NocoBase v1.9.27: Thêm khả năng chịu lỗi khi thiếu phiên bản ứng dụng gây lỗi khi lấy thông báo bảo trì ứng dụng"
description: "Ghi chú phát hành v1.9.27"
---

### 🚀 Cải tiến

- **[server]** Thêm khả năng chịu lỗi khi thiếu phiên bản ứng dụng gây ra lỗi trong quá trình lấy thông báo bảo trì ứng dụng ([#8196](https://github.com/nocobase/nocobase/pull/8196)) bởi @2013xile

- **[Error handler]** Không hiển thị thông báo lỗi cơ sở dữ liệu thô khi có lỗi cú pháp SQL, nhằm tránh tiết lộ loại cơ sở dữ liệu ([#8195](https://github.com/nocobase/nocobase/pull/8195)) bởi @2013xile

- **[Workflow]** Hỗ trợ sử dụng cấu hình cũ để tạo mới trong quy trình làm việc đã được sao chép ([#8165](https://github.com/nocobase/nocobase/pull/8165)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi chỉ hiển thị một bản ghi duy nhất trong danh sách bản ghi để thực thi thủ công ([#8187](https://github.com/nocobase/nocobase/pull/8187)) bởi @mytharcher

- **[Collection: Kết nối dữ liệu nước ngoài (FDW)]** Sửa lỗi kích hoạt khi kết nối đến các bảng có tên viết hoa bởi @2013xile

- **[Workflow: Phê duyệt]** Sửa lỗi trạng thái của các bản ghi phê duyệt không liên quan bị thay đổi sai thành `UNPROCESSED` do hành động phê duyệt bởi @mytharcher
