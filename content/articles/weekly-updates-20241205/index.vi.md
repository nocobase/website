---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ bật popup mở liên kết trên trường readPretty"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ bật popup mở liên kết trên trường readPretty, hỗ trợ kích hoạt workflow thủ công, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**Tuần này chúng tôi đã phát hành [phiên bản NocoBase 1.4.0](https://www.nocobase.com/en/blog/nocobase-1-4-0), mang đến một số tính năng và cải tiến mới, bao gồm quản lý plugin đơn giản hóa, chức năng thông báo nâng cao, đồng bộ dữ liệu người dùng và trình quản lý sao lưu.**

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyên dùng để cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Phù hợp cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng không hoàn chỉnh. Không dùng cho môi trường sản xuất.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Ngày phát hành: 2024-11-28*

### 🚀 Cải tiến

- **[client]**

  - xuất hook thiết yếu ([#5702](https://github.com/nocobase/nocobase/pull/5702)) bởi @mytharcher
  - plugin trường vùng Trung Quốc được loại bỏ khỏi plugin tích hợp sẵn ([#5693](https://github.com/nocobase/nocobase/pull/5693)) bởi @katherinehhh
- **[Workflow: Sự kiện trước hành động]** xóa log cảnh báo trong bộ chặn yêu cầu bởi @mytharcher

### 🐛 Sửa lỗi

- **[cli]** Chế độ daemon không xóa tệp sock ([#5750](https://github.com/nocobase/nocobase/pull/5750)) bởi @chenos
- **[client]**

  - Sửa lỗi các trường liên kết ảnh hưởng lẫn nhau khi nhiều trường liên kết có cùng bộ sưu tập đích ([#5744](https://github.com/nocobase/nocobase/pull/5744)) bởi @katherinehhh
  - Sửa lỗi căn chỉnh hộp kiểm trong bảng con ([#5735](https://github.com/nocobase/nocobase/pull/5735)) bởi @katherinehhh
  - Sửa lỗi hiển thị trường khóa ngoại trong bộ chọn dữ liệu ([#5734](https://github.com/nocobase/nocobase/pull/5734)) bởi @katherinehhh
  - Sửa lỗi điều chỉnh feedbackLayout để cải thiện thông báo xác thực trong bảng con ([#5700](https://github.com/nocobase/nocobase/pull/5700)) bởi @katherinehhh
- **[server]** Tải plugin theo thứ tự phụ thuộc ([#5706](https://github.com/nocobase/nocobase/pull/5706)) bởi @chenos
- **[Khối: Bản đồ]** Sửa lỗi khi thay đổi mức thu phóng trong Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) bởi @katherinehhh
- **[Nguồn dữ liệu: Chính]** Sửa lỗi suy luận tên trường trong bộ sưu tập view ([#5729](https://github.com/nocobase/nocobase/pull/5729)) bởi @chareice
- **[Trình quản lý tệp]** khi endpoint không trống, forcePathStyle được đặt thành true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) bởi @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Ngày phát hành: 2024-12-03*

### 🚀 Cải tiến

- **[client]** Sử dụng biểu tượng có ý nghĩa chính xác hơn cho bộ khởi tạo khối ([#5757](https://github.com/nocobase/nocobase/pull/5757)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**

  - Sửa các trường hợp E2E dựa trên các biểu tượng đã thay đổi ([#5768](https://github.com/nocobase/nocobase/pull/5768)) bởi @mytharcher
  - Sửa lỗi trường chọn hiển thị trống khi dữ liệu rỗng ([#5762](https://github.com/nocobase/nocobase/pull/5762)) bởi @katherinehhh
- **[database]** Sửa lỗi cập nhật giá trị liên kết hasOne/belongsTo mà không có khóa ngoại ([#5754](https://github.com/nocobase/nocobase/pull/5754)) bởi @chareice
- **[Trình quản lý nguồn dữ liệu]** Sửa lỗi hiển thị không chính xác của khóa nguồn ([#5771](https://github.com/nocobase/nocobase/pull/5771)) bởi @katherinehhh
- **[Workflow: Sự kiện hành động tùy chỉnh]**

  - Cho phép tất cả vai trò kích hoạt sự kiện hành động tùy chỉnh trong nguồn dữ liệu bên ngoài bởi @mytharcher
  - Sửa nguồn dữ liệu mặc định là chính bởi @mytharcher
  - Sửa lỗi nguồn dữ liệu khi không khớp bởi @mytharcher
  - Sửa lỗi kích hoạt hành động tùy chỉnh không kích hoạt trên liên kết bởi @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Ngày phát hành: 2024-12-04*

### 🚀 Cải tiến

- **[cli]** tối ưu hóa lệnh pkg ([#5785](https://github.com/nocobase/nocobase/pull/5785)) bởi @chenos

### 🐛 Sửa lỗi

- **[Di động]** Sửa lỗi thiếu trường nhập ngày trong thao tác lọc trên di động ([#5786](https://github.com/nocobase/nocobase/pull/5786)) bởi @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Ngày phát hành: 2024-12-04*

### 🐛 Sửa lỗi

- **[Workflow]** Sửa lỗi thẻ workflow không đồng bộ biến mất trong bảng workflow ([#5787](https://github.com/nocobase/nocobase/pull/5787)) bởi @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Ngày phát hành: 2024-11-28*

### 🚀 Cải tiến

- **[Di động]** tối ưu hóa chủ đề nhỏ gọn cho di động ([#5723](https://github.com/nocobase/nocobase/pull/5723)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[Trực quan hóa dữ liệu]** Sửa lỗi lấy múi giờ từ `context` không chính xác ([#5743](https://github.com/nocobase/nocobase/pull/5743)) bởi @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Ngày phát hành: 2024-11-28*

### 🚀 Cải tiến

- **[client]** hỗ trợ thành phần nhập biến sử dụng thành phần tùy chỉnh khi `nullable` được đặt thành `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi thanh cuộn khi bảng có ít cột với kích thước trung bình ([#5745](https://github.com/nocobase/nocobase/pull/5745)) bởi @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Ngày phát hành: 2024-12-02*

### 🚀 Cải tiến

- **[client]** Hỗ trợ trường tệp đính kèm trong biểu mẫu công khai ([#5749](https://github.com/nocobase/nocobase/pull/5749)) bởi @katherinehhh
- **[cli]** Khởi động lại tiến trình khi plugin được thêm hoặc xóa ([#5761](https://github.com/nocobase/nocobase/pull/5761)) bởi @chenos
- **[Lịch]** Hỗ trợ tạo nhanh lịch trình bằng cách nhấp vào ngày trên khối lịch ([#5733](https://github.com/nocobase/nocobase/pull/5733)) bởi @katherinehhh

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi chiều rộng trường trong bảng con ở bố cục ngang ([#5763](https://github.com/nocobase/nocobase/pull/5763)) bởi @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Ngày phát hành: 2024-12-03*

### 🐛 Sửa lỗi

- **[client]** Sửa lỗi bộ chọn bản ghi không hiển thị các mục đã chọn khi chọn qua các trang ([#5770](https://github.com/nocobase/nocobase/pull/5770)) bởi @katherinehhh
- **[Di động]** Sửa lỗi thiếu trường nhập ngày trong thao tác lọc trên di động ([#5779](https://github.com/nocobase/nocobase/pull/5779)) bởi @katherinehhh
- **[Workflow]** Sửa lỗi biến không hiển thị trong modal kiểm tra nút ([#5766](https://github.com/nocobase/nocobase/pull/5766)) bởi @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Ngày phát hành: 2024-12-03*

### 🎉 Tính năng mới

- **[client]**

  - Hỗ trợ bật liên kết mở popup trên trường readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) bởi @katherinehhh
  - Hỗ trợ hành động liên kết và hủy liên kết trong khối liên kết ([#5695](https://github.com/nocobase/nocobase/pull/5695)) bởi @katherinehhh
- **[server]** Thêm trình quản lý kiểm toán ([#5601](https://github.com/nocobase/nocobase/pull/5601)) bởi @chenzhizdt
- **[Workflow]** hỗ trợ kích hoạt workflow thủ công ([#5664](https://github.com/nocobase/nocobase/pull/5664)) bởi @mytharcher
- **[Workflow: Sự kiện trước hành động]** hỗ trợ kích hoạt workflow thủ công bởi @mytharcher

### 🚀 Cải tiến

- **[client]**

  - triển khai tải theo yêu cầu cho các thành phần front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) bởi @gchust
  - Cải thiện hiệu suất kết xuất trang và hỗ trợ chức năng giữ trang hoạt động ([#5515](https://github.com/nocobase/nocobase/pull/5515)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Sắp xếp]** thêm mô tả plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) bởi @mytharcher
- **[Nhúng NocoBase]** Cải thiện hiệu suất kết xuất trang bởi @zhangzhonghe

### 🐛 Sửa lỗi

- **[client]**

  - Sửa lỗi biến không thể được sử dụng đúng cách trong các khối nguồn dữ liệu bên thứ ba ([#5782](https://github.com/nocobase/nocobase/pull/5782)) bởi @zhangzhonghe
  - Sửa lỗi giá trị trường liên kết trống trong mẫu khối. Sửa lỗi phạm vi dữ liệu khối sử dụng biến không hoạt động đúng trong nguồn dữ liệu bên thứ ba ([#5777](https://github.com/nocobase/nocobase/pull/5777)) bởi @zhangzhonghe
  - Sửa lỗi thuộc tính động của thành phần không hoạt động với tải chậm ([#5776](https://github.com/nocobase/nocobase/pull/5776)) bởi @gchust
  - sửa thông báo cảnh báo trong React khi tải hook động trong môi trường phát triển ([#5758](https://github.com/nocobase/nocobase/pull/5758)) bởi @gchust
- **[Trực quan hóa dữ liệu]** Sửa lỗi thành phần trường lọc của khối biểu đồ không kết xuất ([#5769](https://github.com/nocobase/nocobase/pull/5769)) bởi @2013xile

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
