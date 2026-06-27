---
title: "Cập nhật hàng tuần｜Thêm khối lọc cây"
description: "Đây là bản tóm tắt các cập nhật và cải tiến tính năng của NocoBase từ ngày 09 tháng 4 đến ngày 16 tháng 4 năm 2026."
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Ngày phát hành: 2026-04-14*

### 🚀 Cải tiến

- **[undefined]**

  - Thêm Mục lục vào README tiếng Pháp ([#9037](https://github.com/nocobase/nocobase/pull/9037)) bởi @saraTabbane
  - Thêm tính nhất quán của Mục lục trên các README đã bản địa hóa ([#9038](https://github.com/nocobase/nocobase/pull/9038)) bởi @gaston98765
  - Thêm bản dịch tiếng Ả Rập cho trang chủ tài liệu ([#9043](https://github.com/nocobase/nocobase/pull/9043)) bởi @gaston98765
  - Tài liệu: thêm bản dịch tiếng Ả Rập cho các trang giới thiệu bắt đầu ([#9044](https://github.com/nocobase/nocobase/pull/9044)) bởi @gaston98765
- **[client]** thêm công tắc xác thực bắt buộc cho biểu mẫu ([#9060](https://github.com/nocobase/nocobase/pull/9060)) bởi @jiannx

### 🐛 Sửa lỗi

- **[utils]** Thêm kiểm soát bảo mật cho việc gửi yêu cầu HTTP từ máy chủ, để tránh SSRF có thể xảy ra ([#9079](https://github.com/nocobase/nocobase/pull/9079)) bởi @mytharcher
  Tham khảo: [Biến môi trường](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Ngày phát hành: 2026-04-10*

### 🐛 Sửa lỗi

- **[client]** sửa lỗi bảng con thêm trường nhiều-nhiều ([#9070](https://github.com/nocobase/nocobase/pull/9070)) bởi @jiannx
- **[flow-engine]** Khắc phục sự cố không thể thêm trường nhiều-một từ nguồn dữ liệu bên ngoài trong khối bảng ([#9068](https://github.com/nocobase/nocobase/pull/9068)) bởi @jiannx
- **[Trình quản lý thông báo]** Tối ưu hóa hiệu suất gửi thông báo trong ứng dụng trong các tình huống quy trình làm việc ([#9066](https://github.com/nocobase/nocobase/pull/9066)) bởi @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Ngày phát hành: 2026-04-09*

### 🐛 Sửa lỗi

- **[client]** Khắc phục sự cố cửa sổ bật lên chọn bản ghi từ nút chọn của bảng con không thể phân giải chính xác giá trị biến của mục cha. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) bởi @gchust
- **[Trường bộ sưu tập: Mã]** Chỉnh sửa giao diện UI của các trường mã ([#9061](https://github.com/nocobase/nocobase/pull/9061)) bởi @2013xile


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Ngày phát hành: 2026-04-14*

### 🚀 Cải tiến

- **[undefined]**

  - Thêm tính nhất quán của Mục lục trên các README đã bản địa hóa ([#9038](https://github.com/nocobase/nocobase/pull/9038)) bởi @gaston98765
  - Thêm Mục lục vào README tiếng Pháp ([#9037](https://github.com/nocobase/nocobase/pull/9037)) bởi @saraTabbane
- **[server]** Cải thiện tài liệu API swagger của trình quản lý plugin ([#9080](https://github.com/nocobase/nocobase/pull/9080)) bởi @2013xile

### 🐛 Sửa lỗi

- **[Nhân viên AI]** Khắc phục sự cố thông báo lỗi không được hiển thị trong các cuộc trò chuyện của nhân viên AI ([#9097](https://github.com/nocobase/nocobase/pull/9097)) bởi @cgyrock
- **[Kiểm soát truy cập]** cập nhật acl swagger cho máy chủ mcp ([#9096](https://github.com/nocobase/nocobase/pull/9096)) bởi @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Ngày phát hành: 2026-04-10*

### 🎉 Tính năng mới

- **[Khối: Cây]** Thêm khối bộ lọc cây ([#9016](https://github.com/nocobase/nocobase/pull/9016)) bởi @jiannx
- **[Xác thực: Khóa API]** thêm các lệnh `pm list` và `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) bởi @chenos
- **[Nhân viên AI]**

  - Thêm công cụ truy vấn dữ liệu và công cụ báo cáo phân tích kinh doanh cho nhân viên AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) bởi @2013xile
  - Thêm công cụ tìm kiếm web dựa trên LLM cho nhân viên AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) bởi @cgyrock
- **[Trình quản lý di chuyển]** hỗ trợ lệnh di chuyển bởi @chenos
- **[Trình quản lý email]** gmail hỗ trợ gửi email bằng bí danh bởi @jiannx

### 🐛 Sửa lỗi

- **[flow-engine]** Khắc phục sự cố không thể thêm trường nhiều-một từ nguồn dữ liệu bên ngoài trong khối bảng ([#9068](https://github.com/nocobase/nocobase/pull/9068)) bởi @jiannx
- **[client]**

  - sửa lỗi bảng con thêm trường nhiều-nhiều ([#9070](https://github.com/nocobase/nocobase/pull/9070)) bởi @jiannx
  - Khắc phục sự cố cửa sổ bật lên chọn bản ghi từ nút chọn của bảng con không thể phân giải chính xác giá trị biến của mục cha. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) bởi @gchust
  - Khắc phục sự cố thông báo xác nhận thay đổi chưa lưu không chính xác xuất hiện cho hành động chỉnh sửa hàng loạt ([#9054](https://github.com/nocobase/nocobase/pull/9054)) bởi @gchust
  - Khắc phục sự cố cửa sổ bật lên xác nhận thứ cấp không chính xác xuất hiện khi gửi biểu mẫu sau khi tạo bản ghi qua bảng con bật lên. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) bởi @gchust
  - Khắc phục sự cố ctx.request không thể ghi đè tiêu đề Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) bởi @gchust
- **[data-source-manager]** Khắc phục sự cố một số loại trường không được cập nhật chính xác sau khi đồng bộ hóa các trường từ cơ sở dữ liệu ([#9046](https://github.com/nocobase/nocobase/pull/9046)) bởi @2013xile
- **[Trình quản lý thông báo]** Tối ưu hóa hiệu suất gửi thông báo trong ứng dụng trong các tình huống quy trình làm việc ([#9066](https://github.com/nocobase/nocobase/pull/9066)) bởi @mytharcher
- **[Trường bộ sưu tập: Mã]** Chỉnh sửa giao diện UI của các trường mã ([#9061](https://github.com/nocobase/nocobase/pull/9061)) bởi @2013xile
- **[Quy trình làm việc: Nút yêu cầu HTTP]** Làm sạch kết quả nút yêu cầu quy trình làm việc để tránh lộ cấu hình yêu cầu, đặt mặc định cho các nút mới chỉ trả về dữ liệu phản hồi và thêm ghi nhật ký gỡ lỗi cho các yêu cầu thất bại. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) bởi @mytharcher
- **[Nhân viên AI]**

  - Khắc phục sự cố hủy bỏ suy luận của nhân viên AI sẽ khiến dịch vụ bị sập ([#9031](https://github.com/nocobase/nocobase/pull/9031)) bởi @cgyrock
  - Sửa lỗi tải lên tài liệu của nhân viên AI bị lỗi khi truy cập đường dẫn con với APP_PUBLIC_PATH được cấu hình. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) bởi @cgyrock
  - Khắc phục sự cố khi sử dụng mô hình Deepseek hoặc MiniMax trên dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) bởi @cgyrock
