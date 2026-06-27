---
title: "NocoBase v1.8.5: Bổ sung thêm các giao diện có thể tính toán"
description: "Ghi chú phát hành phiên bản v1.8.5"
---

### 🚀 Cải tiến

- **[Trường Collection: Công thức]** Thêm nhiều giao diện có thể tính toán hơn ([#7215](https://github.com/nocobase/nocobase/pull/7215)) bởi @mytharcher

- **[Luồng công việc]** Sử dụng ghi log thay vì ném lỗi khi quá trình thực thi không nên chạy do trạng thái ([#7217](https://github.com/nocobase/nocobase/pull/7217)) bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Hỗ trợ xóa phê duyệt khi dữ liệu liên quan bị xóa bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Vấn đề không thể chọn trường tệp đính kèm làm biến trong quy tắc liên kết ([#7213](https://github.com/nocobase/nocobase/pull/7213)) bởi @zhangzhonghe

  - Sửa lỗi thành phần chọn thả xuống bị bàn phím chặn trên iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) bởi @zhangzhonghe

  - Gán giá trị thất bại trong biểu mẫu chỉnh sửa khi cả giá trị và tùy chọn đều được đặt cho trường chọn ([#7209](https://github.com/nocobase/nocobase/pull/7209)) bởi @katherinehhh

  - Thu gọn bộ lọc: Bộ lọc không được kích hoạt trong quá trình khởi tạo trang sau khi đặt giá trị mặc định cho các trường ([#7206](https://github.com/nocobase/nocobase/pull/7206)) bởi @zhangzhonghe

  - Lỗi khi gán giá trị trong khối danh sách sử dụng trường sắp xếp kanban ([#7208](https://github.com/nocobase/nocobase/pull/7208)) bởi @katherinehhh

  - Tiêu đề tab trình duyệt không được đồng bộ khi chuyển đổi giữa các menu con ([#7207](https://github.com/nocobase/nocobase/pull/7207)) bởi @zhangzhonghe

  - Hành động cửa sổ bật lên: Hiển thị trang không đúng như mong đợi sau khi chuyển tab ([#7212](https://github.com/nocobase/nocobase/pull/7212)) bởi @zhangzhonghe

- **[acl]** Sửa lỗi khi xóa một vai trò trong chế độ hợp nhất vai trò có chứa vai trò gốc. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) bởi @aaaaaajie

- **[Trình quản lý đa ứng dụng]** Sửa tùy chọn xác thực ở vị trí không mong muốn ([#7210](https://github.com/nocobase/nocobase/pull/7210)) bởi @mytharcher

- **[Xác thực]** Sửa lỗi trang đăng nhập không thể cuộn ([#7159](https://github.com/nocobase/nocobase/pull/7159)) bởi @zhangzhonghe

- **[Luồng công việc: Phê duyệt]** Sửa các liên kết khi gửi phê duyệt bởi @mytharcher
