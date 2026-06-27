---
title: "NocoBase v2.1.0-alpha.15: Thêm khối lọc cây"
description: "Ghi chú phát hành phiên bản v2.1.0-alpha.15"
---

### 🎉 Tính năng mới

- **[Khối: Cây]** Thêm khối lọc cây ([#9016](https://github.com/nocobase/nocobase/pull/9016)) bởi @jiannx

- **[Xác thực: API keys]** thêm lệnh `pm list` và `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) bởi @chenos

- **[Nhân viên AI]**
  - Thêm công cụ truy vấn dữ liệu và công cụ báo cáo phân tích kinh doanh cho nhân viên AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) bởi @2013xile

  - Thêm công cụ tìm kiếm web dựa trên LLM cho nhân viên AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) bởi @cgyrock

- **[Trình quản lý di chuyển]** hỗ trợ lệnh di chuyển bởi @chenos

- **[Trình quản lý email]** Gmail hỗ trợ gửi email với bí danh bởi @jiannx

### 🐛 Sửa lỗi

- **[flow-engine]** Khắc phục vấn đề không thể thêm trường nhiều-một từ nguồn dữ liệu bên ngoài trong khối bảng ([#9068](https://github.com/nocobase/nocobase/pull/9068)) bởi @jiannx

- **[client]**
  - Sửa lỗi bảng con thêm trường nhiều-nhiều bị lỗi ([#9070](https://github.com/nocobase/nocobase/pull/9070)) bởi @jiannx

  - Khắc phục sự cố cửa sổ popup chọn bản ghi từ nút chọn của bảng con không thể phân giải chính xác giá trị biến của mục cha. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) bởi @gchust

  - Khắc phục sự cố xuất hiện thông báo xác nhận thay đổi chưa lưu không chính xác cho thao tác chỉnh sửa hàng loạt ([#9054](https://github.com/nocobase/nocobase/pull/9054)) bởi @gchust

  - Khắc phục sự cố xuất hiện cửa sổ popup xác nhận phụ không chính xác khi gửi biểu mẫu sau khi tạo bản ghi qua bảng con popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) bởi @gchust

  - Khắc phục sự cố ctx.request không thể ghi đè header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust

- **[data-source-manager]** Khắc phục sự cố một số loại trường không được cập nhật chính xác sau khi đồng bộ trường từ cơ sở dữ liệu ([#9046](https://github.com/nocobase/nocobase/pull/9046)) bởi @2013xile

- **[Trình quản lý thông báo]** Tối ưu hiệu suất gửi thông báo trong ứng dụng trong các kịch bản workflow ([#9066](https://github.com/nocobase/nocobase/pull/9066)) bởi @mytharcher

- **[Trường bộ sưu tập: Mã]** Chỉnh sửa giao diện UI của các trường mã ([#9061](https://github.com/nocobase/nocobase/pull/9061)) bởi @2013xile

- **[Workflow: Nút yêu cầu HTTP]** Làm sạch kết quả nút yêu cầu workflow để tránh lộ cấu hình yêu cầu, mặc định các nút mới chỉ trả về dữ liệu phản hồi và thêm ghi log debug cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher

- **[Nhân viên AI]**
  - Khắc phục sự cố hủy quá trình suy luận của nhân viên AI gây ra sập dịch vụ ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock

  - Sửa lỗi tải lên tài liệu nhân viên AI thất bại khi truy cập đường dẫn con với APP_PUBLIC_PATH được cấu hình. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) bởi @cgyrock

  - Khắc phục sự cố khi sử dụng mô hình deepseek hoặc minmax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock
