---
title: "NocoBase v2.0.14: Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và hiển thị quy trình thực thi"
description: "Ghi chú phát hành phiên bản v2.0.14"
---

### 🚀 Cải tiến

- **[Trình quản lý di chuyển]** Cải thiện kiểm tra di chuyển, hỗ trợ tải xuống SQL, định dạng nhật ký và khả năng hiển thị quy trình thực thi bởi @cgyrock

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trường tùy chỉnh trong giá trị trường của biểu mẫu Bộ lọc không hiển thị đúng loại đầu vào giá trị ([#8823](https://github.com/nocobase/nocobase/pull/8823)) bởi @zhangzhonghe

  - Sửa lỗi nút thu gọn biểu mẫu bộ lọc v2 ngừng hoạt động sau khi sắp xếp các trường ([#8843](https://github.com/nocobase/nocobase/pull/8843)) bởi @zhangzhonghe

  - Sửa lỗi trang quản lý mẫu tham chiếu (v1) bị thiếu hành động lọc và làm mới. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) bởi @gchust

  - Dữ liệu biểu mẫu con & bảng con không hiển thị do kiểm tra quyền ([#8846](https://github.com/nocobase/nocobase/pull/8846)) bởi @chenos

- **[Kiểm soát truy cập]** Sử dụng collection.filterTargetKey thay vì Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) bởi @chenos

- **[Mẫu giao diện]**
  - Sửa lỗi hiển thị cho khối tham chiếu bảng hành động. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) bởi @gchust

  - Sửa lỗi không thể tải chính xác các bản ghi liên kết sau khi lưu khối chi tiết dưới dạng mẫu. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) bởi @gchust

- **[Quy trình làm việc: Phê duyệt]**
  - Sửa lỗi người được chỉ định không tuân theo thứ tự đã cấu hình trong nút bởi @mytharcher

  - Sửa lỗi nhãn chưa được dịch trong chi tiết xử lý phê duyệt bởi @zhangzhonghe

- **[Trình quản lý di chuyển]**
  - Sửa lỗi xây dựng bởi @mytharcher

  - Sửa lỗi thiếu mô tả di chuyển và đặt thời gian hiện tại làm mặc định bởi @cgyrock

  - Sửa lỗi tiềm ẩn gây treo quy trình do ghi nhật ký các câu lệnh SQL quá lớn có trong các ngoại lệ lỗi di chuyển bởi @cgyrock

  - Điều chỉnh thư mục tạm thời vào storage, để hỗ trợ sử dụng trong chế độ cụm bởi @mytharcher
