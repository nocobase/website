---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ phân trang bảng con, tối ưu hóa quy trình làm việc và nhiều hơn nữa"
description: "Cập nhật hàng tuần NocoBase 2024-10-24"
---

Tóm tắt nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase hiện đang được cập nhật với hai nhánh: `main` và `next`.

* `main`：Phiên bản ổn định nhất hiện nay, khuyến nghị cài đặt;
* `next`：Phiên bản Alpha, bao gồm một số tính năng mới chưa được phát hành. Phiên bản này có thể chưa hoàn toàn ổn định, phù hợp cho nhà phát triển hoặc người thử nghiệm trải nghiệm các tính năng mới trước hoặc tiến hành kiểm tra tương thích.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Ngày phát hành: 2024-10-13*

### 🐛 Sửa lỗi

- **[client]** Trường quan hệ bắt buộc vẫn kích hoạt lỗi xác thực sau khi chọn giá trị với biến trong phạm vi dữ liệu ([#5399](https://github.com/nocobase/nocobase/pull/5399)) bởi @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Ngày phát hành: 2024-10-17*

### 🚀 Cải tiến

- **[Workflow]** Thêm gợi ý liên quan đến trường liên kết cho chế độ hàng loạt của nút cập nhật ([#5426](https://github.com/nocobase/nocobase/pull/5426)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi cửa sổ Chỉnh sửa hồ sơ bị che bởi trang con ([#5409](https://github.com/nocobase/nocobase/pull/5409)) bởi @zhangzhonghe
  - Biến nút Workflow không hiển thị các trường của bộ sưu tập kế thừa ([#5415](https://github.com/nocobase/nocobase/pull/5415)) bởi @chenos
  - Phân trang không được đặt lại sau khi xóa dữ liệu bộ lọc trong khối lọc bảng ([#5411](https://github.com/nocobase/nocobase/pull/5411)) bởi @katherinehhh
- **[Quản lý tệp]** Xóa giới hạn 20 mục khi tải bộ lưu trữ trong cấu hình bộ sưu tập mẫu tệp ([#5430](https://github.com/nocobase/nocobase/pull/5430)) bởi @mytharcher
- **[Hành động: Sao chép bản ghi]** Sửa lỗi cửa sổ chỉnh sửa hàng loạt không hiển thị nội dung ([#5412](https://github.com/nocobase/nocobase/pull/5412)) bởi @zhangzhonghe
- **[Trực quan hóa dữ liệu]** Sửa lỗi giá trị mặc định không hiển thị trong khối lọc biểu đồ ([#5405](https://github.com/nocobase/nocobase/pull/5405)) bởi @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Ngày phát hành: 2024-10-21*

### 🎉 Tính năng mới

- **[test]** Các trường quan hệ trong biểu mẫu lọc hỗ trợ cấu hình cho phép chọn nhiều ([#5451](https://github.com/nocobase/nocobase/pull/5451)) bởi @zhangzhonghe
- **[client]** Thêm biến có tên "Đối tượng cha" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) bởi @zhangzhonghe
  Tham khảo: [Đối tượng cha](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi biến tham số tìm kiếm URL không được phân tích ([#5454](https://github.com/nocobase/nocobase/pull/5454)) bởi @zhangzhonghe
  - Sửa lỗi xóa dữ liệu khi chọn dữ liệu quan hệ với phạm vi dữ liệu trong bảng con lồng nhau ([#5441](https://github.com/nocobase/nocobase/pull/5441)) bởi @katherinehhh
  - Sửa màu nền được chọn của hàng bảng ([#5445](https://github.com/nocobase/nocobase/pull/5445)) bởi @mytharcher
- **[Khối: Bản đồ]** Xóa cấu hình mức thu phóng cho trường bản đồ trong cột bảng ([#5457](https://github.com/nocobase/nocobase/pull/5457)) bởi @katherinehhh
- **[Quản lý tệp]** Sửa lỗi gọi hook quy tắc lưu trữ trên các trường read-pretty ([#5447](https://github.com/nocobase/nocobase/pull/5447)) bởi @mytharcher
- **[Nguồn dữ liệu: Chính]** Sửa lỗi kiểm thử e2e thất bại do thành phần thay đổi ([#5437](https://github.com/nocobase/nocobase/pull/5437)) bởi @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Ngày phát hành: 2024-10-21*

### 🚀 Cải tiến

- **[Workflow: nút gửi thư]** Thêm văn bản gợi ý vào nút gửi thư ([#5470](https://github.com/nocobase/nocobase/pull/5470)) bởi @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Ngày phát hành: 2024-10-22*

### 🐛 Sửa lỗi

- **[Bộ sưu tập: Cây]** Sửa lỗi bộ sưu tập đường dẫn cho bộ sưu tập cây kế thừa không được tự động tạo ([#5486](https://github.com/nocobase/nocobase/pull/5486)) bởi @2013xile
- **[Lịch]** Hiển thị thanh phân trang với dữ liệu trong bảng ([#5480](https://github.com/nocobase/nocobase/pull/5480)) bởi @katherinehhh
- **[Quản lý tệp]** Sửa lỗi tệp không thể tải lên do hook quy tắc ([#5460](https://github.com/nocobase/nocobase/pull/5460)) bởi @mytharcher
- **[Trường bộ sưu tập: Công thức]** Sửa lỗi tính toán công thức không chính xác trong bảng con lồng nhiều cấp ([#5469](https://github.com/nocobase/nocobase/pull/5469)) bởi @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Ngày phát hành: 2024-10-23*

### 🚀 Cải tiến

- **[client]** Điều chỉnh gợi ý trong bảng cấu hình liên kết workflow thành một nút ([#5494](https://github.com/nocobase/nocobase/pull/5494)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[Quản lý tệp]** Sửa lỗi tải lên và xóa bản ghi tệp trong khối quan hệ ([#5493](https://github.com/nocobase/nocobase/pull/5493)) bởi @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Ngày phát hành: 2024-10-16*

### 🎉 Tính năng mới

- **[sdk]** Cho phép lưu trữ thông tin client vào sessionStorage bằng cách đặt biến môi trường `API_CLIENT_STORAGE_TYPE` ([#5424](https://github.com/nocobase/nocobase/pull/5424)) bởi @2013xile
- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Thêm trường Tệp đính kèm (URL) bởi @katherinehhh

### 🚀 Cải tiến

- **[client]**

  - Tối ưu hóa gỡ lỗi từ xa ([#5394](https://github.com/nocobase/nocobase/pull/5394)) bởi @chenos
  - Tối ưu hóa kiểu dáng cho việc căn giữa biểu tượng khi nút hành động chỉ sử dụng biểu tượng ([#5413](https://github.com/nocobase/nocobase/pull/5413)) bởi @katherinehhh
  - Cập nhật bản ghi tự động đóng cửa sổ thông báo ([#5408](https://github.com/nocobase/nocobase/pull/5408)) bởi @katherinehhh
- **[Workflow: nút yêu cầu HTTP]** Hỗ trợ SSE (Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) bởi @chenos

### 🐛 Sửa lỗi

- **[Biểu mẫu công khai]** Sửa lỗi khi nhấp vào cài đặt trên biểu mẫu công khai ([#5392](https://github.com/nocobase/nocobase/pull/5392)) bởi @katherinehhh
- **[client]**

  - Sửa lỗi không hiển thị giá trị trong hộp nhập giá trị mặc định ([#5400](https://github.com/nocobase/nocobase/pull/5400)) bởi @zhangzhonghe
  - Sửa lỗi không tìm thấy trường quan hệ khi quy tắc liên kết được đặt cho bảng con ([#5402](https://github.com/nocobase/nocobase/pull/5402)) bởi @zhangzhonghe
  - Sửa lỗi xem trước hình thu nhỏ sai khi loại tệp không được hỗ trợ theo mặc định ([#5401](https://github.com/nocobase/nocobase/pull/5401)) bởi @mytharcher
- **[Bản địa hóa]** Sửa lỗi bản dịch trong plugin bản địa hóa không có hiệu lực sau khi xuất bản ([#5416](https://github.com/nocobase/nocobase/pull/5416)) bởi @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Ngày phát hành: 2024-10-18*

### 🎉 Tính năng mới

- **[Workflow: nút vòng lặp]** Thêm nhiều tùy chọn điều khiển vào cấu hình nút vòng lặp ([#5342](https://github.com/nocobase/nocobase/pull/5342)) bởi @mytharcher
  Tham khảo: [Nút vòng lặp](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Thêm nút chạy thử cho các nút workflow và API để triển khai chức năng kiểm tra ([#5407](https://github.com/nocobase/nocobase/pull/5407)) bởi @mytharcher
- **[Thành phần trường: mặt nạ]** Thêm thành phần trường `mask`, hỗ trợ hiển thị dữ liệu trường dưới dạng chuỗi được che bởi @gchust
  Tham khảo: [Mặt nạ](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Cải tiến

- **[client]** Cho phép đặt lại tiêu đề cột bảng về mặc định ([#5439](https://github.com/nocobase/nocobase/pull/5439)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi các tùy chọn thành phần trường cố định chưa được dịch chính xác ([#5442](https://github.com/nocobase/nocobase/pull/5442)) bởi @gchust
- **[Workflow: nút yêu cầu HTTP]** Sửa lỗi thông báo lỗi cũ trong nút yêu cầu ([#5443](https://github.com/nocobase/nocobase/pull/5443)) bởi @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Ngày phát hành: 2024-10-23*

### 🚀 Cải tiến

- **[client]** Bảng con hỗ trợ phân trang ([#5450](https://github.com/nocobase/nocobase/pull/5450)) bởi @katherinehhh
- **[Khối: Kanban]** Thêm hỗ trợ bật hoặc tắt sắp xếp kéo và thả trong khối Kanban ([#5468](https://github.com/nocobase/nocobase/pull/5468)) bởi @katherinehhh
- **[Lịch]** Hiển thị cửa sổ tạo khi chọn ô lịch ([#5483](https://github.com/nocobase/nocobase/pull/5483)) bởi @gu-zhichao
- **[Trình quản lý đa ứng dụng]** Hỗ trợ biến môi trường USE_DB_SCHEMA_IN_SUBAPP ([#5481](https://github.com/nocobase/nocobase/pull/5481)) bởi @chenos
- **[Workflow]** Thêm thành phần tập hợp trường dạng thẻ ([#5464](https://github.com/nocobase/nocobase/pull/5464)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Giá trị biến bị mất sau khi làm mới cửa sổ khối markdown ([#5478](https://github.com/nocobase/nocobase/pull/5478)) bởi @katherinehhh
- **[Trực quan hóa dữ liệu]** Sửa các lỗi khi sử dụng nguồn dữ liệu oracle bên ngoài cho plugin trực quan hóa dữ liệu, ví dụ: lỗi định dạng ngày tháng ([#5436](https://github.com/nocobase/nocobase/pull/5436)) bởi @2013xile
- **[Quản lý tệp]** Sửa lỗi tệp không thể tải lên do hook quy tắc ([#5460](https://github.com/nocobase/nocobase/pull/5460)) bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng no-code mã nguồn mở, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
