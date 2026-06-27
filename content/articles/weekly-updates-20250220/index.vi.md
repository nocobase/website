---
title: "Cập nhật hàng tuần của NocoBase: Hỗ trợ kích hoạt sự kiện hành động tùy chỉnh toàn cục hoặc theo lô"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ kích hoạt hành động tùy chỉnh toàn cục hoặc theo lô, mở rộng các trường mặc định trong bộ sưu tập, và nhiều hơn nữa."
---

Tổng hợp nhật ký cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể không hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Ngày phát hành: 2025-02-14*

#### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Xóa ghi log lỗi console cho các lần thử kết nối SSE. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) bởi @sheldon66

#### 🐛 Sửa lỗi

- **[client]**

  - Thiếu cài đặt kéo trong modal thao tác tạo nhanh dữ liệu quan hệ ([#6201](https://github.com/nocobase/nocobase/pull/6201)) bởi @katherinehhh
  - Vấn đề với định dạng số có độ chính xác cao không được áp dụng ([#6202](https://github.com/nocobase/nocobase/pull/6202)) bởi @katherinehhh
  - Sửa lỗi khi xóa trường liên kết trong biểu mẫu nhưng không thực sự xóa giá trị trường khi gửi biểu mẫu ([#5540](https://github.com/nocobase/nocobase/pull/5540)) bởi @zhangzhonghe
  - Block không làm mới sau khi gửi biểu mẫu ([#6206](https://github.com/nocobase/nocobase/pull/6206)) bởi @zhangzhonghe
  - Giá trị trường được liên kết vẫn tồn tại khi gửi sau khi đặt lại trường quan hệ ([#6207](https://github.com/nocobase/nocobase/pull/6207)) bởi @katherinehhh
  - Thao tác cập nhật hiển thị cho các hàng không có quyền cập nhật trong bảng ([#6204](https://github.com/nocobase/nocobase/pull/6204)) bởi @katherinehhh
- **[Trường bộ sưu tập: Sắp xếp]** Sửa lỗi kiểu trường sắp xếp không được đăng ký trong nguồn dữ liệu bên ngoài ([#6212](https://github.com/nocobase/nocobase/pull/6212)) bởi @mytharcher
- **[Xác thực]** Vấn đề xác thực WebSocket ([#6209](https://github.com/nocobase/nocobase/pull/6209)) bởi @2013xile
- **[Trường bộ sưu tập: Đính kèm (URL)]** Sửa URL yêu cầu không còn được dùng trong hook bởi @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Ngày phát hành: 2025-02-17*

#### 🐛 Sửa lỗi

- **[client]**

  - Không thể mở popup liên kết trường trong trang nhúng ([#6222](https://github.com/nocobase/nocobase/pull/6222)) bởi @gchust
  - Trong biểu mẫu chỉnh sửa, giá trị trường liên kết hiển thị không thay đổi khi trường được liên kết cập nhật ([#6210](https://github.com/nocobase/nocobase/pull/6210)) bởi @Cyx649312038
- **[Mobile]** Dữ liệu menu di động không đầy đủ trong bảng cấu hình quyền ([#6219](https://github.com/nocobase/nocobase/pull/6219)) bởi @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Ngày phát hành: 2025-02-17*

#### 🐛 Sửa lỗi

- **[client]**

  - Vấn đề thanh cuộn ngang trên trang ([#6232](https://github.com/nocobase/nocobase/pull/6232)) bởi @katherinehhh
  - Khi đóng trang con, nhiều yêu cầu dữ liệu block được kích hoạt ([#6233](https://github.com/nocobase/nocobase/pull/6233)) bởi @zhangzhonghe
  - Thiếu khóa duy nhất cho menu con trường liên kết trong giao diện ([#6230](https://github.com/nocobase/nocobase/pull/6230)) bởi @gchust
- **[Trực quan hóa dữ liệu]** Lỗi lọc xảy ra khi tên nguồn dữ liệu chứa dấu gạch ngang `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) bởi @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Ngày phát hành: 2025-02-18*

#### 🚀 Cải tiến

- **[Trường bộ sưu tập: Markdown (Vditor)]** Vditor CDN sử dụng tài nguyên cục bộ ([#6229](https://github.com/nocobase/nocobase/pull/6229)) bởi @chenos

#### 🐛 Sửa lỗi

- **[Quy trình làm việc: Nút vòng lặp]** Sửa lỗi vòng lặp thoát sớm khi nút bên trong đang chờ xử lý ([#6236](https://github.com/nocobase/nocobase/pull/6236)) bởi @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Ngày phát hành: 2025-02-14*

#### 🐛 Sửa lỗi

- **[Xác thực]** Cải thiện logic xử lý lỗi xác thực và cập nhật token đồng thời. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) bởi @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Ngày phát hành: 2025-02-15*

#### 🐛 Sửa lỗi

- **[WeCom]** Vấn đề đăng nhập tự động trong ứng dụng WeCom bởi @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Ngày phát hành: 2025-02-16*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ mở rộng toán tử lọc giao diện người dùng ([#6085](https://github.com/nocobase/nocobase/pull/6085)) bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Hỗ trợ kích hoạt sự kiện hành động tùy chỉnh cho toàn bộ hoặc hàng loạt bản ghi bởi @mytharcher

#### 🚀 Cải tiến

- **[Quy trình làm việc]** Di chuyển cài đặt ràng buộc quy trình làm việc vào plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) bởi @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Ngày phát hành: 2025-02-16*

#### 🎉 Tính năng mới

- **[client]** Hỗ trợ mở rộng các trường được xác định trước trong bộ sưu tập ([#6183](https://github.com/nocobase/nocobase/pull/6183)) bởi @katherinehhh
- **[Lịch]** Hỗ trợ mở rộng các trường tùy chọn cho các plugin Kanban, Lịch và Trường Công thức ([#6076](https://github.com/nocobase/nocobase/pull/6076)) bởi @katherinehhh

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, mang lại toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó giúp các nhóm thích ứng nhanh chóng với các thay đổi đồng thời giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
