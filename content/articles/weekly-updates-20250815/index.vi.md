---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này mang lại hiệu suất chuyển tab popup được tối ưu hóa, sửa lỗi và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Ngày phát hành: 2025-08-12*

#### 🚀 Cải tiến

- **[client]**

  - Thêm hỗ trợ biến ngày "hôm kia" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) bởi @katherinehhh
  - Tối ưu hiệu suất khi chuyển đổi tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) bởi @zhangzhonghe
- **[Workflow]**

  - Sửa test case không ổn định ([#7349](https://github.com/nocobase/nocobase/pull/7349)) bởi @mytharcher
  - Tiêu đề workflow trong thẻ tác vụ sẽ không còn hiển thị với gạch ngang, ngay cả khi phiên bản tương ứng bị vô hiệu hóa ([#7339](https://github.com/nocobase/nocobase/pull/7339)) bởi @mytharcher
- **[Trình xem trước tệp văn phòng]** Thêm hỗ trợ xem trước tệp `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) bởi @mytharcher
- **[Trình quản lý sao lưu]** cải thiện hiệu suất cho thao tác sao lưu cơ sở dữ liệu mysql bởi @gchust

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi bố cục biểu mẫu nhiều cột không chuyển đổi thành bố cục một cột trên thiết bị di động ([#7355](https://github.com/nocobase/nocobase/pull/7355)) bởi @zhangzhonghe
  - Sửa lỗi xóa hàng loạt bộ sưu tập ([#7345](https://github.com/nocobase/nocobase/pull/7345)) bởi @aaaaaajie
  - Sửa lỗi phạm vi dữ liệu đã lưu trước đó không được chọn trước khi cấu hình quyền riêng lẻ. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) bởi @aaaaaajie
- **[Workflow]**

  - Tái cấu trúc menu "Thêm nút" và sửa các vấn đề về hiệu suất kết xuất canvas workflow do nó gây ra ([#7363](https://github.com/nocobase/nocobase/pull/7363)) bởi @mytharcher
  - Sửa lỗi điều kiện lọc không chính xác khi truy xuất một mục việc cần làm ([#7366](https://github.com/nocobase/nocobase/pull/7366)) bởi @mytharcher
  - Sửa lỗi khớp từ khóa trong trường chọn ([#7356](https://github.com/nocobase/nocobase/pull/7356)) bởi @mytharcher
  - Tránh lỗi xảy ra do xuất bản vào hàng đợi sự kiện khi dừng ([#7348](https://github.com/nocobase/nocobase/pull/7348)) bởi @mytharcher
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi tin nhắn trong trang được nhận nhưng không hiển thị trong popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) bởi @mytharcher
- **[Thiết bị di động]** Đã giải quyết lỗi bộ chọn ngày trên thiết bị di động hiển thị không chính xác khi áp dụng giới hạn phạm vi ngày ([#7362](https://github.com/nocobase/nocobase/pull/7362)) bởi @katherinehhh
- **[Trình quản lý tệp]** Thêm trường `storageId` vào bộ sưu tập tệp để hỗ trợ cấu hình quyền ([#7351](https://github.com/nocobase/nocobase/pull/7351)) bởi @mytharcher
- **[Workflow: Nút song song]** Sửa lỗi nút song song tạm dừng sau khi tiếp tục trên MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) bởi @mytharcher
- **[Workflow: CC]** Sửa lỗi không thể xóa khối ([#7338](https://github.com/nocobase/nocobase/pull/7338)) bởi @mytharcher
- **[Trình xem trước tệp văn phòng]** Hỗ trợ tệp `.docx`, `.xlsx` và `.pptx` chỉ với URL để xem trước ([#7336](https://github.com/nocobase/nocobase/pull/7336)) bởi @mytharcher
- **[Trực quan hóa dữ liệu]** vấn đề biến ngày trong giá trị mặc định của trường ngày trong khối bộ lọc biểu đồ ([#7291](https://github.com/nocobase/nocobase/pull/7291)) bởi @katherinehhh
- **[Workflow: Phê duyệt]**

  - Sửa lỗi quy tắc liên kết không hoạt động trong khối chi tiết gốc phê duyệt bởi @mytharcher
  - Sửa lỗi cập nhật liên kết khi gửi bản nháp bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Ngày phát hành: 2025-08-09*

#### 🐛 Sửa lỗi

- **[Trình quản lý email]** trình soạn thảo văn bản hỗ trợ ngắt dòng mềm bởi @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Ngày phát hành: 2025-08-09*

#### 🚀 Cải tiến

- **[Workflow]** Sửa test case không ổn định ([#7349](https://github.com/nocobase/nocobase/pull/7349)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bố cục biểu mẫu nhiều cột không chuyển đổi thành bố cục một cột trên thiết bị di động ([#7355](https://github.com/nocobase/nocobase/pull/7355)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi khớp từ khóa trong trường chọn ([#7356](https://github.com/nocobase/nocobase/pull/7356)) bởi @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Ngày phát hành: 2025-08-08*

#### 🚀 Cải tiến

- **[client]** Tối ưu hiệu suất khi chuyển đổi tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) bởi @zhangzhonghe
- **[Trình xem trước tệp văn phòng]** Thêm hỗ trợ xem trước tệp `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi phạm vi dữ liệu đã lưu trước đó không được chọn trước khi cấu hình quyền riêng lẻ ([#7288](https://github.com/nocobase/nocobase/pull/7288)) bởi @aaaaaajie
  - Sửa lỗi xóa hàng loạt bộ sưu tập ([#7345](https://github.com/nocobase/nocobase/pull/7345)) bởi @aaaaaajie
- **[Workflow]** Tránh lỗi xảy ra do xuất bản vào hàng đợi sự kiện khi dừng ([#7348](https://github.com/nocobase/nocobase/pull/7348)) bởi @mytharcher
- **[Workflow: Nút song song]** Sửa lỗi nút song song tạm dừng sau khi tiếp tục trên MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) bởi @mytharcher
- **[Workflow: Phê duyệt]**

  - Sửa lỗi cập nhật liên kết khi gửi bản nháp bởi @mytharcher
  - Sửa lỗi quy tắc liên kết không hoạt động trong khối chi tiết gốc phê duyệt bởi @mytharcher
