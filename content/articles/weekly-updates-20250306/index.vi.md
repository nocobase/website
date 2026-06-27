---
title: "Cập nhật hàng tuần NocoBase: Hỗ trợ cấu hình quyền cho hành động"
description: "Các cập nhật trong tuần này bao gồm: hỗ trợ cấu hình quyền cho hành động, trường thời gian hỗ trợ định dạng thời gian, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm tra sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Ngày phát hành: 2025-02-27*

#### 🐛 Sửa lỗi

- **[client]**

  - Lỗi khi tạo khối bình luận mà không có bộ sưu tập bình luận ([#6309](https://github.com/nocobase/nocobase/pull/6309)) bởi @katherinehhh
  - Xảy ra lỗi khi nhấp vào nút của khối cây ([#6314](https://github.com/nocobase/nocobase/pull/6314)) bởi @zhangzhonghe
  - Sau khi nhấp vào menu bên trái, trang con bị đóng bất thường ([#6305](https://github.com/nocobase/nocobase/pull/6305)) bởi @zhangzhonghe
  - Không xóa giá trị trường khi giá trị biểu thức trống ([#6300](https://github.com/nocobase/nocobase/pull/6300)) bởi @zhangzhonghe
- **[Trường bộ sưu tập: Sequence]** Sửa lỗi trường sequence không bị vô hiệu hóa khi ở chế độ chỉ đọc ([#6274](https://github.com/nocobase/nocobase/pull/6274)) bởi @mytharcher
- **[Quản lý tệp]** Sửa lỗi di chuyển cho bộ sưu tập kế thừa ([#6310](https://github.com/nocobase/nocobase/pull/6310)) bởi @mytharcher
- **[Kiểm soát truy cập]** Bản ghi dữ liệu không chính xác khi sử dụng trường nhiều-nhiều làm phạm vi dữ liệu trong quyền bộ sưu tập ([#6304](https://github.com/nocobase/nocobase/pull/6304)) bởi @2013xile
- **[Khối: Kanban]** Lọc dữ liệu không chính xác trong khối Kanban bật lên sử dụng biến bản ghi bật lên ([#6290](https://github.com/nocobase/nocobase/pull/6290)) bởi @katherinehhh
- **[Khối: Cây]** Xảy ra lỗi khi nhấp vào nút của khối cây bởi @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Ngày phát hành: 2025-02-27*

#### 🐛 Sửa lỗi

- **[Khối: Bảng hành động]** Cài đặt chiều cao của bảng hành động không có hiệu lực ([#6321](https://github.com/nocobase/nocobase/pull/6321)) bởi @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Ngày phát hành: 2025-03-01*

#### 🐛 Sửa lỗi

- **[client]** nút thêm mới xuất hiện khi di chuột qua ở chế độ chỉ đọc trường liên kết ([#6322](https://github.com/nocobase/nocobase/pull/6322)) bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]** xóa tùy chọn 'thêm khối' trong cài đặt nút xuất tệp đính kèm bởi @katherinehhh
- **[Hành động: Nhập bản ghi Pro]** phát hiện bản ghi trùng lặp của nút nhập khối liên kết không hiển thị dữ liệu trong menu thả xuống trường bởi @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Ngày phát hành: 2025-03-03*

#### 🐛 Sửa lỗi

- **[client]** Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải ([#6337](https://github.com/nocobase/nocobase/pull/6337)) bởi @zhangzhonghe
- **[Khối: Bản đồ]** Cài đặt cấu hình cho trường bản đồ bị thiếu/không hiển thị ([#6336](https://github.com/nocobase/nocobase/pull/6336)) bởi @zhangzhonghe
- **[Thương hiệu tùy chỉnh]** Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải bởi @zhangzhonghe
- **[In mẫu]** Khôi phục từ cục bộ thất bại khi cả plugin in mẫu hành động và quản lý sao lưu đều được bật bởi @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Ngày phát hành: 2025-02-27*

#### 🐛 Sửa lỗi

- **[client]**

  - Lỗi khi tạo khối bình luận mà không có bộ sưu tập bình luận ([#6309](https://github.com/nocobase/nocobase/pull/6309)) bởi @katherinehhh
  - Vị trí không chính xác sau khi kéo menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) bởi @zhangzhonghe
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi xây dựng bởi @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Ngày phát hành: 2025-03-04*

#### 🎉 Tính năng mới

- **[client]** trường thời gian hỗ trợ định dạng thời gian ([#6329](https://github.com/nocobase/nocobase/pull/6329)) bởi @katherinehhh

#### 🚀 Cải tiến

- **[server]** Nâng cấp koa lên 2.15.4; nâng cấp @koa/cors lên 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) bởi @2013xile
- **[Quy trình làm việc]** Tải chậm kết quả công việc để cải thiện hiệu suất ([#6344](https://github.com/nocobase/nocobase/pull/6344)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[auth]** Tránh gia hạn token trong quá trình ủy quyền WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) bởi @sheldon66
- **[client]**

  - Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải ([#6337](https://github.com/nocobase/nocobase/pull/6337)) bởi @zhangzhonghe
  - nút thêm mới xuất hiện khi di chuột qua ở chế độ chỉ đọc trường liên kết ([#6322](https://github.com/nocobase/nocobase/pull/6322)) bởi @katherinehhh
- **[devtools]** Đảm bảo tiêu đề X-Forwarded-For chỉ được đặt nếu req.ip không phải là undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) bởi @sheldon66
- **[Khối: Bản đồ]** Cài đặt cấu hình cho trường bản đồ bị thiếu/không hiển thị ([#6336](https://github.com/nocobase/nocobase/pull/6336)) bởi @zhangzhonghe
- **[Di động]** Lỗi trang: Không thể đọc thuộc tính của null (đang đọc 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) bởi @zhangzhonghe
- **[Người dùng]** Giao diện lỗi hiển thị nhanh khi bảng quản lý quyền người dùng tải lần đầu ([#6324](https://github.com/nocobase/nocobase/pull/6324)) bởi @zhangzhonghe
- **[Khối: Bảng hành động]** Cài đặt chiều cao của bảng hành động không có hiệu lực ([#6321](https://github.com/nocobase/nocobase/pull/6321)) bởi @zhangzhonghe
- **[Hành động: Nhập bản ghi Pro]** phát hiện bản ghi trùng lặp của nút nhập khối liên kết không hiển thị dữ liệu trong menu thả xuống trường bởi @katherinehhh
- **[Hành động: Xuất bản ghi Pro]** xóa tùy chọn 'thêm khối' trong cài đặt nút xuất tệp đính kèm bởi @katherinehhh
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi di chuyển cho các nút cũ được liên kết với quy trình làm việc hành động tùy chỉnh bởi @mytharcher
- **[Thương hiệu tùy chỉnh]** Các trang có favicon tùy chỉnh hiển thị nhanh favicon NocoBase trong khi tải bởi @zhangzhonghe
- **[In mẫu]** Khôi phục từ cục bộ thất bại khi cả plugin in mẫu hành động và quản lý sao lưu đều được bật bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi `.toJSON()` gây ra lỗi bởi @mytharcher
  - Sửa lỗi di chuyển không chạy vì số phiên bản bởi @mytharcher
  - Sửa lỗi di chuyển cho các khối cũ bởi @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Ngày phát hành: 2025-02-27*

#### 🎉 Tính năng mới

- **[client]** hỗ trợ cấu hình quyền cho hành động ([#6254](https://github.com/nocobase/nocobase/pull/6254)) bởi @katherinehhh
- **[Khối: mẫu]** Thêm plugin `Khối: mẫu`, cung cấp hỗ trợ mẫu cho các khối dựa trên cơ chế kế thừa. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) bởi @gchust
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** hành động kích hoạt quy trình làm việc hỗ trợ kiểm soát truy cập bởi @katherinehhh

#### 🚀 Cải tiến

- **[client]**

  - Nâng cấp định nghĩa kiểu react ([#6278](https://github.com/nocobase/nocobase/pull/6278)) bởi @gchust
  - Mở rộng và cải thiện trung tâm cá nhân người dùng ([#6213](https://github.com/nocobase/nocobase/pull/6213)) bởi @katherinehhh
- **[Quản lý tệp]**

  - Tăng độ dài URL lên 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) bởi @mytharcher
  - thêm mã backend để tạo url xem trước tệp ([#6281](https://github.com/nocobase/nocobase/pull/6281)) bởi @jiannx
  - Tên tệp trong quá trình tải lên sẽ thay đổi từ ngẫu nhiên thành tên gốc với hậu tố ngẫu nhiên. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) bởi @chenos
  - thêm mã backend để tạo url xem trước tệp ([#6223](https://github.com/nocobase/nocobase/pull/6223)) bởi @jiannx
  - Thay đổi api loại lưu trữ và thêm api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher
  - Thay đổi api loại lưu trữ và thêm api plugin ([#6246](https://github.com/nocobase/nocobase/pull/6246)) bởi @mytharcher
- **[Khối: Bảng hành động]** Tối ưu hóa kiểu di động ([#6270](https://github.com/nocobase/nocobase/pull/6270)) bởi @zhangzhonghe
- **[Quy trình làm việc]** Ẩn id nút khỏi thẻ nút trong canvas quy trình làm việc ([#6251](https://github.com/nocobase/nocobase/pull/6251)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Điều chỉnh API lưu trữ dựa trên kho lưu trữ chính bởi @mytharcher
  - Hỗ trợ cấu hình tùy chọn thumbnailRule bởi @jiannx
- **[Trình quản lý sao lưu]** Cho phép khôi phục bản sao lưu vào một ứng dụng ngay cả khi nó thiếu một số plugin bởi @gchust

#### 🐛 Sửa lỗi

- **[devtools]** Đảm bảo tiêu đề X-Forwarded-For chỉ được đặt nếu req.ip không phải là undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) bởi @sheldon66
- **[client]**

  - Vị trí không chính xác sau khi kéo menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) bởi @zhangzhonghe
  - Lỗi khi tạo khối bình luận mà không có bộ sưu tập bình luận ([#6309](https://github.com/nocobase/nocobase/pull/6309)) bởi @katherinehhh
  - Xảy ra lỗi khi nhấp vào nút của khối cây ([#6314](https://github.com/nocobase/nocobase/pull/6314)) bởi @zhangzhonghe
  - Sau khi nhấp vào menu bên trái, trang con bị đóng bất thường ([#6305](https://github.com/nocobase/nocobase/pull/6305)) bởi @zhangzhonghe
  - Không xóa giá trị trường khi giá trị biểu thức trống ([#6300](https://github.com/nocobase/nocobase/pull/6300)) bởi @zhangzhonghe
  - thành phần trường văn bản đa dạng thức không thể xóa hoàn toàn ([#6287](https://github.com/nocobase/nocobase/pull/6287)) bởi @katherinehhh
  - Không thể di chuyển trang vào một nhóm ([#6289](https://github.com/nocobase/nocobase/pull/6289)) bởi @zhangzhonghe
  - Bỏ qua lỗi auth cho CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) bởi @sheldon66
  - Sửa lỗi tệp đã tải lên bị thiếu khi tải từng cái một ([#6260](https://github.com/nocobase/nocobase/pull/6260)) bởi @mytharcher
  - Sửa ký tự thẻ html trong trường nhập biểu mẫu cấu hình kênh thư. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) bởi @sheldon66
  - Sửa lỗi tệp bị thiếu sau khi tải lên ([#6247](https://github.com/nocobase/nocobase/pull/6247)) bởi @mytharcher
  - Không khớp định dạng picker trong trường biểu mẫu bộ lọc ([#6234](https://github.com/nocobase/nocobase/pull/6234)) bởi @katherinehhh
  - Hiển thị thành phần `<Variable.TextArea />` chính xác ở chế độ bị vô hiệu hóa ([#6197](https://github.com/nocobase/nocobase/pull/6197)) bởi @mytharcher
- **[create-nocobase-app]** Xảy ra lỗi trên web client sau khi chạy `create-nocobase-app` và sau đó `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) bởi @gchust
- **[auth]** Bỏ qua kiểm tra auth người dùng khi token là api key ([#6291](https://github.com/nocobase/nocobase/pull/6291)) bởi @sheldon66
- **[cli]** Cải thiện logic nội bộ của lệnh nâng cấp nocobase ([#6280](https://github.com/nocobase/nocobase/pull/6280)) bởi @chenos
- **[Quản lý tệp]**

  - Sửa lỗi di chuyển cho bộ sưu tập kế thừa ([#6310](https://github.com/nocobase/nocobase/pull/6310)) bởi @mytharcher
  - Sửa lỗi di chuyển và thêm các trường hợp kiểm thử ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher
  - Sửa lỗi di chuyển và thêm các trường hợp kiểm thử ([#6288](https://github.com/nocobase/nocobase/pull/6288)) bởi @mytharcher
  - Sửa kiểu cột `path` của bộ sưu tập tệp ([#6294](https://github.com/nocobase/nocobase/pull/6294)) bởi @mytharcher
  - Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO ([#6253](https://github.com/nocobase/nocobase/pull/6253)) bởi @mytharcher
- **[Khối: mẫu]** Yêu cầu đăng nhập khi truy cập biểu mẫu công khai ([#6258](https://github.com/nocobase/nocobase/pull/6258)) bởi @gchust
- **[Kiểm soát truy cập]** Bản ghi dữ liệu không chính xác khi sử dụng trường nhiều-nhiều làm phạm vi dữ liệu trong quyền bộ sưu tập ([#6304](https://github.com/nocobase/nocobase/pull/6304)) bởi @2013xile
- **[Khối: Kanban]** Lọc dữ liệu không chính xác trong khối Kanban bật lên sử dụng biến bản ghi bật lên ([#6290](https://github.com/nocobase/nocobase/pull/6290)) bởi @katherinehhh
- **[Trường bộ sưu tập: Sequence]** Sửa lỗi trường sequence không bị vô hiệu hóa khi ở chế độ chỉ đọc ([#6274](https://github.com/nocobase/nocobase/pull/6274)) bởi @mytharcher
- **[Quy trình làm việc: bộ kiểm thử]** Sửa các trường hợp kiểm thử E2E dựa trên các tính năng mới ([#6296](https://github.com/nocobase/nocobase/pull/6296)) bởi @mytharcher
- **[Biểu mẫu công khai]** Bỏ qua kiểm tra auth trong biểu mẫu công khai ([#6284](https://github.com/nocobase/nocobase/pull/6284)) bởi @chenos
- **[Xác thực]** Xóa trình bao bọc NavigateIfNotSignIn không cần thiết khỏi AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) bởi @sheldon66
- **[Quy trình làm việc]**

  - Sửa chi tiết kiểu trong canvas quy trình làm việc ([#6240](https://github.com/nocobase/nocobase/pull/6240)) bởi @mytharcher
  - Hỗ trợ kích hoạt quy trình làm việc khi thay đổi mật khẩu ([#6248](https://github.com/nocobase/nocobase/pull/6248)) bởi @mytharcher
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]**

  - Sửa lỗi xây dựng bởi @mytharcher
  - Sửa các trường hợp kiểm thử E2E bởi @mytharcher
  - Sửa lỗi trình khởi tạo quy trình làm việc kích hoạt bởi @mytharcher
  - Sửa lỗi xây dựng bởi @mytharcher
- **[Quy trình làm việc: Sự kiện trước hành động]** Sửa lỗi thông báo lỗi từ nút thông báo phản hồi không được hiển thị bởi @mytharcher
- **[Quy trình làm việc: JavaScript]** Hỗ trợ yêu cầu các mô-đun NocoBase bởi @mytharcher
- **[Trình quản lý email]** công khai bộ sưu tập mailmessage và sửa lỗi mất dữ liệu modal bởi @jiannx
- **[Lưu trữ tệp: S3(Pro)]**

  - Nâng cấp phiên bản AWS SDK để sửa lỗi tải lên MinIO. bởi @mytharcher
  - đặt giá trị mặc định của forcePathStyleForAccess thành virtual bởi @jiannx
- **[Khối: Biểu mẫu nhiều bước]** lỗi sắp xếp mục sau khi kéo bởi @jiannx
- **[Khối: Cây]** Xảy ra lỗi khi nhấp vào nút của khối cây bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Biểu tượng xóa của hộp thoại thao tác khôi phục từ cục bộ không hoạt động bởi @gchust
- **[Quy trình làm việc: Phê duyệt]**

  - Sửa lỗi di chuyển không chạy vì số phiên bản bởi @mytharcher
  - Sửa các trường hợp kiểm thử E2E dựa trên các tính năng mới bởi @mytharcher

## Về NocoBase

NocoBase là một nền tảng mã nguồn mở, không cần code, riêng tư, cung cấp toàn quyền kiểm soát và khả năng mở rộng vô hạn. Nó trao quyền cho các nhóm để thích ứng nhanh chóng với các thay đổi trong khi giảm đáng kể chi phí. Tránh nhiều năm phát triển và đầu tư đáng kể bằng cách triển khai NocoBase trong vài phút.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Khám phá NocoBase trong 3 Phút!

## 👇 Tải NocoBase

[**Trang chủ**](https://www.nocobase.com/)

[**Bản demo**](https://demo.nocobase.com/new)

[**Tài liệu**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
