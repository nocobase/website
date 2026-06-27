---
title: "NocoBase v1.6.33: Xây dựng hình ảnh docker đầy đủ"
description: "Ghi chú phát hành phiên bản v1.6.33"
---

### 🚀 Cải tiến

- **[undefined]** Xây dựng image docker đầy đủ ([#6898](https://github.com/nocobase/nocobase/pull/6898)) bởi @chenos

- **[client]** Tối ưu vấn đề trang web chạy chậm dần theo thời gian sử dụng ([#6888](https://github.com/nocobase/nocobase/pull/6888)) bởi @zhangzhonghe

- **[Lịch]** Hỗ trợ nút làm mới có thể cấu hình trong khối lịch ([#6920](https://github.com/nocobase/nocobase/pull/6920)) bởi @katherinehhh

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]** Sửa ngôn ngữ en-US dựa trên khóa zh-CN bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Hỗ trợ thực hiện tất cả công việc cần làm trong trung tâm tác vụ luồng công việc bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Lỗi hiển thị do định dạng style không hợp lệ khi thêm trường liên kết ([#6903](https://github.com/nocobase/nocobase/pull/6903)) bởi @katherinehhh

  - Kiểm tra giá trị rỗng không chính xác cho trường liên kết toMany trong quy tắc liên kết ([#6905](https://github.com/nocobase/nocobase/pull/6905)) bởi @katherinehhh

- **[Trường bộ sưu tập: Markdown(Vditor)]** Trường markdown (Vditor) không thích ứng với chủ đề ([#6919](https://github.com/nocobase/nocobase/pull/6919)) bởi @katherinehhh

- **[Bộ sưu tập: Cây]** Tránh cập nhật sai các tiền tố đường dẫn tương tự trong quá trình cập nhật đường dẫn ([#6913](https://github.com/nocobase/nocobase/pull/6913)) bởi @2013xile

- **[Quản lý tệp]**
  - Sửa quy tắc khớp xem trước ([#6902](https://github.com/nocobase/nocobase/pull/6902)) bởi @mytharcher

  - Sửa lỗi tiêm collection phía client và tham số tải lên ([#6909](https://github.com/nocobase/nocobase/pull/6909)) bởi @mytharcher

  - Sửa URL xem trước trên các tệp không phải hình ảnh ([#6889](https://github.com/nocobase/nocobase/pull/6889)) bởi @mytharcher

- **[Luồng công việc: Nút gửi thư]** Xử lý trường 'to' không xác định và cải thiện xử lý người nhận email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) bởi @sheldon66

- **[Luồng công việc: Sự kiện hành động tùy chỉnh]**
  - Sửa lỗi nút thực hiện không chính xác sau vài lần nhấp bởi @mytharcher

  - Sửa lỗi trình xử lý lỗi không thể khớp theo lớp bởi @mytharcher

- **[Luồng công việc: Phê duyệt]** Sửa lỗi tính toán phần bổ sung liên kết bởi @mytharcher
