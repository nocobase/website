---
title: "NocoBase v1.5.0: Thêm phạm vi giới hạn ngày cho thành phần trường ngày"
description: "Ghi chú phát hành phiên bản v1.5.0"
---

### 🎉 Tính năng mới

- **[client]**
  - Thêm phạm vi ngày giới hạn cho thành phần trường ngày ([#5852](https://github.com/nocobase/nocobase/pull/5852)) bởi @Cyx649312038

  - Hỗ trợ cấu hình văn bản, biểu tượng và loại cho các nút thêm và chọn trong bảng con ([#5778](https://github.com/nocobase/nocobase/pull/5778)) bởi @katherinehhh

  - Hỗ trợ bật liên kết mở popup trên trường readPretty ([#5747](https://github.com/nocobase/nocobase/pull/5747)) bởi @katherinehhh

  - Hỗ trợ hành động liên kết và hủy liên kết trong khối liên kết ([#5695](https://github.com/nocobase/nocobase/pull/5695)) bởi @katherinehhh

- **[server]** Thêm trình quản lý kiểm toán ([#5601](https://github.com/nocobase/nocobase/pull/5601)) bởi @chenzhizdt

- **[Workflow]**
  - Thêm mẫu ký tự ngẫu nhiên ([#5959](https://github.com/nocobase/nocobase/pull/5959)) bởi @kennnnnnnnnn

  - Thêm cấu hình giới hạn ngăn xếp cho workflow ([#6077](https://github.com/nocobase/nocobase/pull/6077)) bởi @citlalinda

  - Hỗ trợ kích hoạt workflow thủ công ([#5664](https://github.com/nocobase/nocobase/pull/5664)) bởi @mytharcher

- **[Mobile]** Thêm công tắc toàn cục để kiểm soát tất cả các nút quay lại trên mobile (mặc định bật) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) bởi @katherinehhh

- **[Lịch]** Plugin Lịch thêm chế độ mở sự kiện ([#5808](https://github.com/nocobase/nocobase/pull/5808)) bởi @Cyx649312038

- **[Bộ sưu tập: Cây]** Cho phép lọc các nút con trong khối bảng cây ([#4770](https://github.com/nocobase/nocobase/pull/4770)) bởi @jimmy201602

- **[Workflow: Sự kiện trước hành động]** hỗ trợ kích hoạt workflow thủ công bởi @mytharcher

- **[Bộ điều hợp Redis pub sub]** Thêm plugin bộ điều hợp đồng bộ Redis bởi @mytharcher

### 🚀 Cải tiến

- **[client]**
  - Xóa quy tắc liên kết khỏi nút Liên kết ([#6016](https://github.com/nocobase/nocobase/pull/6016)) bởi @katherinehhh

  - Xóa thành phần khung xương hàng bảng ([#5751](https://github.com/nocobase/nocobase/pull/5751)) bởi @zhangzhonghe

  - Tối ưu hóa logic đệ quy trong useMenuSearch để cải thiện hiệu suất ([#5784](https://github.com/nocobase/nocobase/pull/5784)) bởi @katherinehhh

  - Xóa các thành phần Formily khỏi bảng để cải thiện hiệu suất khi chuyển đổi phân trang bảng ([#5738](https://github.com/nocobase/nocobase/pull/5738)) bởi @zhangzhonghe

  - Cải thiện hiệu suất hiển thị trang và hỗ trợ chức năng giữ trạng thái trang ([#5515](https://github.com/nocobase/nocobase/pull/5515)) bởi @zhangzhonghe

  - triển khai tải theo yêu cầu cho các thành phần front-end ([#5647](https://github.com/nocobase/nocobase/pull/5647)) bởi @gchust

- **[Thông báo: Email]** Thêm liên kết trang chủ vào các plugin thông báo trong package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) bởi @sheldon66

- **[Workflow: Nút vòng lặp]** Sửa kiểu dáng ([#6095](https://github.com/nocobase/nocobase/pull/6095)) bởi @mytharcher

- **[Quản lý tệp]** hỗ trợ cho các plugin lưu trữ khác ([#6096](https://github.com/nocobase/nocobase/pull/6096)) bởi @jiannx
Tham khảo: [Lưu trữ tệp: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: bộ kiểm thử]** điều chỉnh kiểu dáng canvas workflow để làm cho nội dung gọn gàng hơn ([#6088](https://github.com/nocobase/nocobase/pull/6088)) bởi @mytharcher

- **[Workflow]** Đổi tên API thành tên hợp lý ([#6082](https://github.com/nocobase/nocobase/pull/6082)) bởi @mytharcher

- **[Trực quan hóa dữ liệu]** Thêm tham số offset vào charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) bởi @Albert-mah

- **[Mobile]** Điều chỉnh thành phần chọn phạm vi thời gian & ngày cho mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) bởi @katherinehhh

- **[Xác thực]** Tối ưu hóa logic lấy siêu dữ liệu của các hành động kiểm toán. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) bởi @chenzhizdt

- **[Biểu mẫu công khai]** Tối ưu hóa bảng hành động và các thành phần biểu mẫu công khai để thích ứng mobile ([#5788](https://github.com/nocobase/nocobase/pull/5788)) bởi @katherinehhh

- **[Trường bộ sưu tập: Sắp xếp]** thêm mô tả plugin ([#5720](https://github.com/nocobase/nocobase/pull/5720)) bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Thay đổi API thực thi thủ công bởi @mytharcher

- **[Workflow: Tính toán JSON]**
  - Đổi tên nút JSON-query và nhóm bởi @mytharcher

  - Thêm biểu tượng cho các nút bởi @mytharcher

- **[Nhúng NocoBase]** Cải thiện hiệu suất hiển thị trang bởi @zhangzhonghe

- **[Trình quản lý sao lưu]** Cải thiện thông báo lỗi cho các lần khôi phục thất bại bởi @gchust

### 🐛 Sửa lỗi

- **[client]**
  - Quy tắc liên kết của nút hoạt động không đúng do vấn đề về thứ tự ([#6147](https://github.com/nocobase/nocobase/pull/6147)) bởi @zhangzhonghe

  - Bố cục bất thường sau khi xóa khối hoặc trường ([#6139](https://github.com/nocobase/nocobase/pull/6139)) bởi @zhangzhonghe

  - Sửa cài đặt trường không thể lọc của nút lọc ảnh hưởng đến các bảng khác có cùng bộ sưu tập ([#6121](https://github.com/nocobase/nocobase/pull/6121)) bởi @katherinehhh

  - dữ liệu không được hiển thị cho trường liên kết trong chi tiết con ([#6117](https://github.com/nocobase/nocobase/pull/6117)) bởi @zhangzhonghe

  - Sửa lỗi 'chế độ tải dữ liệu' trở nên không hợp lệ sau khi chuyển trang ([#6115](https://github.com/nocobase/nocobase/pull/6115)) bởi @zhangzhonghe

  - Sửa lỗi giá trị mặc định của trường liên kết không được làm mới sau khi chuyển trang ([#6114](https://github.com/nocobase/nocobase/pull/6114)) bởi @zhangzhonghe

  - Sửa lỗi giá trị mặc định cho trường liên kết không có hiệu lực trong chế độ Đọc dễ ([#6066](https://github.com/nocobase/nocobase/pull/6066)) bởi @zhangzhonghe

  - Sửa lỗi gán trường cho các nút biểu mẫu trong nút thủ công workflow không hợp lệ ([#6054](https://github.com/nocobase/nocobase/pull/6054)) bởi @zhangzhonghe

  - Sửa lỗi thiếu biến popup hiện tại trong modal bật liên kết trường ([#6045](https://github.com/nocobase/nocobase/pull/6045)) bởi @katherinehhh

  - Tiếp tục hiển thị trang sau khi yêu cầu kiểm tra xác thực hoàn tất ([#6020](https://github.com/nocobase/nocobase/pull/6020)) bởi @2013xile

  - Sửa lỗi không thể kéo và sắp xếp các hàng trong bảng ([#6013](https://github.com/nocobase/nocobase/pull/6013)) bởi @zhangzhonghe

  - Sửa lỗi bảng con trống hiển thị một hàng dữ liệu trống trên iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) bởi @zhangzhonghe

  - Sửa lỗi nhấp vào trường liên kết không mở hộp thoại popup ([#5972](https://github.com/nocobase/nocobase/pull/5972)) bởi @zhangzhonghe

  - Sửa lỗi bộ chọn phạm vi ngày trong biểu mẫu/hành động lọc không hiển thị bộ chọn thời gian khi showTime được đặt ([#5956](https://github.com/nocobase/nocobase/pull/5956)) bởi @katherinehhh

  - Sửa lỗi hiển thị ô bảng không mong muốn trong plugin của bên thứ ba ([#5934](https://github.com/nocobase/nocobase/pull/5934)) bởi @zhangzhonghe

  - Sửa lỗi nút xóa bị vô hiệu hóa trong trang quản lý mẫu khối ([#5922](https://github.com/nocobase/nocobase/pull/5922)) bởi @zhangzhonghe

  - Sửa lỗi quy tắc liên kết biểu mẫu thất bại khi chúng phụ thuộc vào giá trị trường từ bảng con ([#5876](https://github.com/nocobase/nocobase/pull/5876)) bởi @zhangzhonghe

  - Sửa lỗi dữ liệu không thay đổi sau khi phân trang trong bảng con ([#5856](https://github.com/nocobase/nocobase/pull/5856)) bởi @zhangzhonghe

  - Sửa lỗi tiêu đề tab trình duyệt không cập nhật sau khi chuyển trang ([#5857](https://github.com/nocobase/nocobase/pull/5857)) bởi @zhangzhonghe

  - Sửa lỗi làm mới trang trong trang quản lý nguồn dữ liệu chuyển hướng đến trang chủ ([#5855](https://github.com/nocobase/nocobase/pull/5855)) bởi @zhangzhonghe

  - Sửa lỗi trường liên kết trong mẫu tham chiếu đôi khi không hiển thị dữ liệu ([#5848](https://github.com/nocobase/nocobase/pull/5848)) bởi @zhangzhonghe

  - Sửa lỗi dữ liệu vai trò không được hiển thị trong bảng quản lý người dùng ([#5846](https://github.com/nocobase/nocobase/pull/5846)) bởi @zhangzhonghe

  - Sửa lỗi nút 'Yêu cầu tùy chỉnh' không hiển thị ngay sau khi được thêm ([#5845](https://github.com/nocobase/nocobase/pull/5845)) bởi @zhangzhonghe

  - Sửa lỗi các khối được thêm trong cửa sổ popup không được hiển thị khi mở lại popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) bởi @zhangzhonghe

  - Ngăn các trang ẩn ảnh hưởng đến tương tác với các trang khác ([#5836](https://github.com/nocobase/nocobase/pull/5836)) bởi @zhangzhonghe

  - Sửa lỗi thay đổi giá trị của trường liên kết trong khối chi tiết không làm mới ngay lập tức ([#5826](https://github.com/nocobase/nocobase/pull/5826)) bởi @zhangzhonghe

  - Sửa lỗi các trường không được hiển thị sau khi thêm chúng trong biểu mẫu con ([#5827](https://github.com/nocobase/nocobase/pull/5827)) bởi @zhangzhonghe

  - Sửa lỗi nhấp vào liên kết không mở popup khi 'Bật liên kết' được bật lần đầu tiên ([#5812](https://github.com/nocobase/nocobase/pull/5812)) bởi @zhangzhonghe

  - Sửa lỗi đăng nhập mobile chuyển hướng đến trang desktop ([#5805](https://github.com/nocobase/nocobase/pull/5805)) bởi @zhangzhonghe

  - Sửa nút cấu hình hành động nên được căn trái ([#5798](https://github.com/nocobase/nocobase/pull/5798)) bởi @katherinehhh

  - Ngăn nhiều lệnh gọi API khi đóng popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) bởi @zhangzhonghe

  - Sửa lỗi biến không thể được sử dụng đúng cách trong các khối nguồn dữ liệu của bên thứ ba ([#5782](https://github.com/nocobase/nocobase/pull/5782)) bởi @zhangzhonghe

  - Sửa lỗi giá trị trường liên kết trống trong mẫu khối. Sửa lỗi phạm vi dữ liệu khối sử dụng biến không hoạt động đúng trong nguồn dữ liệu của bên thứ ba ([#5777](https://github.com/nocobase/nocobase/pull/5777)) bởi @zhangzhonghe

  - Sửa lỗi thuộc tính động của thành phần không hoạt động với tải chậm ([#5776](https://github.com/nocobase/nocobase/pull/5776)) bởi @gchust

  - sửa thông báo cảnh báo trong React khi tải động các hook trong môi trường phát triển ([#5758](https://github.com/nocobase/nocobase/pull/5758)) bởi @gchust

- **[build]**
  - Sửa lỗi tải sau khi đặt biến môi trường `APP_PUBLIC_PATH` ([#5924](https://github.com/nocobase/nocobase/pull/5924)) bởi @gchust

  - Sửa lỗi lưu cache không chính xác của các tệp js frontend sau khi build plugin ([#5801](https://github.com/nocobase/nocobase/pull/5801)) bởi @gchust

  - Sửa lỗi thực thi `yarn dev` sau create-nocobase-app dẫn đến lỗi ([#5708](https://github.com/nocobase/nocobase/pull/5708)) bởi @gchust

- **[server]** Đặt các hành động khả dụng mặc định cho ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) bởi @chenos

- **[Biểu mẫu công khai]** Không thể thêm trường trong `Biểu mẫu con (Popover)` của biểu mẫu công khai ([#6157](https://github.com/nocobase/nocobase/pull/6157)) bởi @gchust

- **[Bộ sưu tập: SQL]** Sửa lỗi lọc Bộ sưu tập SQL gây ra lỗi khi `DB_TABLE_PREFIX` được đặt ([#6156](https://github.com/nocobase/nocobase/pull/6156)) bởi @2013xile

- **[Workflow]**
  - Thêm trường hợp kiểm thử cho hành động "di chuyển" để kích hoạt workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) bởi @mytharcher

  - Sửa lỗi xảy ra khi nút không đồng bộ tiếp tục trong workflow thực thi thủ công ([#5877](https://github.com/nocobase/nocobase/pull/5877)) bởi @mytharcher

- **[Đồng bộ hóa dữ liệu người dùng]**
  - Sửa lỗi nút "thử lại" không được hiển thị trong danh sách tác vụ ([#6079](https://github.com/nocobase/nocobase/pull/6079)) bởi @2013xile

  - Sửa lỗi hiển thị của các nút đồng bộ và tác vụ. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) bởi @2013xile

- **[Xác minh]** Sửa lỗi trường biểu mẫu trống khi mở ngăn kéo chỉnh sửa trong trang cài đặt Xác minh ([#5949](https://github.com/nocobase/nocobase/pull/5949)) bởi @chenos

- **[Nguồn dữ liệu: Chính]** Sửa lỗi trường hệ thống trong khối biểu mẫu lọc không thể chỉnh sửa ([#5885](https://github.com/nocobase/nocobase/pull/5885)) bởi @zhangzhonghe

- **[Trực quan hóa dữ liệu]**
  - Sửa chiều cao ban đầu của khối biểu đồ ([#5879](https://github.com/nocobase/nocobase/pull/5879)) bởi @2013xile

  - Sửa lỗi các thành phần trường lọc của khối biểu đồ không hiển thị ([#5769](https://github.com/nocobase/nocobase/pull/5769)) bởi @2013xile

- **[Mobile]**
  - Sửa lỗi thích ứng mobile của thành phần ngày trên trang con ([#5859](https://github.com/nocobase/nocobase/pull/5859)) bởi @katherinehhh

  - Sửa lỗi thiếu trường nhập ngày trong thao tác lọc trên mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) bởi @katherinehhh

- **[Workflow: Sự kiện hành động tùy chỉnh]**
  - Sửa các trường hợp kiểm thử của trình kích hoạt hành động tùy chỉnh bởi @mytharcher

  - Sửa trường hợp kiểm thử thất bại trên SQLite bởi @mytharcher

- **[Workflow: Sự kiện trước hành động]** Sửa các trường hợp kiểm thử của bộ chặn yêu cầu bởi @mytharcher

- **[Workflow: Tin nhắn phản hồi]** Sửa tên tham số sai được sử dụng bởi @mytharcher
