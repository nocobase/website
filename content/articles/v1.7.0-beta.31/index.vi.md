---
title: "NocoBase v1.7.0-beta.31: Thêm nhật ký của plugin nhập"
description: "Ghi chú phát hành của v1.7.0-beta.31"
---

### 🎉 Tính năng mới

- **[client]** Quy tắc liên kết hành động hỗ trợ biến 'form hiện tại' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) bởi @katherinehhh

- **[undefined]** Thêm nhật ký cho plugin nhập dữ liệu bởi @aaaaaajie

- **[Hành động: Nhập bản ghi]** Thêm nhật ký cho plugin nhập dữ liệu ([#6841](https://github.com/nocobase/nocobase/pull/6841)) bởi @aaaaaajie

### 🚀 Cải tiến

- **[client]** Thêm nhiều cài đặt kích thước tích hợp sẵn cho ảnh trạng thái đọc ([#6868](https://github.com/nocobase/nocobase/pull/6868)) bởi @katherinehhh

- **[Trường bộ sưu tập: Tệp đính kèm (URL)]** Thêm nhiều kích thước tích hợp sẵn vào trường URL tệp đính kèm cho trạng thái đọc ([#6871](https://github.com/nocobase/nocobase/pull/6871)) bởi @katherinehhh

- **[Luồng công việc]** Cho phép sửa đổi nhiều hơn một bản nháp ([#6851](https://github.com/nocobase/nocobase/pull/6851)) bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sự cố liên kết nút trong khối chi tiết ([#6867](https://github.com/nocobase/nocobase/pull/6867)) bởi @katherinehhh

  - Xóa giá trị bên phải khi toán tử thay đổi trong quy tắc liên kết ([#6862](https://github.com/nocobase/nocobase/pull/6862)) bởi @katherinehhh

  - Đánh giá sai toán tử cho biến ngày trong điều kiện liên kết ([#6825](https://github.com/nocobase/nocobase/pull/6825)) bởi @katherinehhh

  - Thiếu toán tử khi chuyển đổi trong quy tắc liên kết ([#6857](https://github.com/nocobase/nocobase/pull/6857)) bởi @katherinehhh

  - Không tương thích phân tích biến với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh

  - Cải thiện kiểu thành phần giá trị quy tắc liên kết ([#6836](https://github.com/nocobase/nocobase/pull/6836)) bởi @katherinehhh

  - Không tương thích phân tích biến với dữ liệu {{title}} trong xác nhận thứ cấp ([#6838](https://github.com/nocobase/nocobase/pull/6838)) bởi @katherinehhh

  - Các trường ẩn vẫn được hiển thị ([#6844](https://github.com/nocobase/nocobase/pull/6844)) bởi @zhangzhonghe

- **[Cơ sở dữ liệu]** Nhập thất bại do giá trị trường văn bản. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) bởi @aaaaaajie

- **[Trực quan hóa dữ liệu]**
  - Khối biểu đồ không hiển thị khi được thêm vào cửa sổ bật lên kích hoạt từ hành động cấp khối ([#6864](https://github.com/nocobase/nocobase/pull/6864)) bởi @2013xile

  - Sửa lỗi khi lọc trường m2m lồng nhau ([#6855](https://github.com/nocobase/nocobase/pull/6855)) bởi @2013xile

- **[Hành động: Xuất bản ghi]**
  - Cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất ([#6861](https://github.com/nocobase/nocobase/pull/6861)) bởi @katherinehhh

  - Sửa lỗi xuất giá trị rỗng trong các liên kết lồng nhau và url tệp đính kèm ([#6845](https://github.com/nocobase/nocobase/pull/6845)) bởi @aaaaaajie

  - Sửa lỗi xuất văn bản dài. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) bởi @aaaaaajie

- **[Quản lý tệp]** Sửa lỗi tạo bản ghi tệp không có quyền khóa ngoại ([#6863](https://github.com/nocobase/nocobase/pull/6863)) bởi @mytharcher

- **[Luồng công việc]** Sửa lỗi điều hướng quay lại không hoạt động khi mở trực tiếp liên kết cửa sổ bật lên trong trung tâm tác vụ ([#6853](https://github.com/nocobase/nocobase/pull/6853)) bởi @mytharcher

- **[Hành động: Sao chép bản ghi]** Cửa sổ modal đóng khi nhấp chuột đầu tiên vào đầu vào khi chỉnh sửa dữ liệu sao chép ([#6848](https://github.com/nocobase/nocobase/pull/6848)) bởi @katherinehhh

- **[Khối: mẫu]** Sau khi lưu dưới dạng mẫu kế thừa, lỗi xảy ra khi mở cửa sổ bật lên ([#6840](https://github.com/nocobase/nocobase/pull/6840)) bởi @gchust

- **[Luồng công việc: bộ kiểm thử]** Sửa lỗi các trường hợp kiểm thử thất bại do plugin mặc định yêu cầu ([#6839](https://github.com/nocobase/nocobase/pull/6839)) bởi @mytharcher

- **[Luồng công việc: Sự kiện sau hành động]** Sửa lỗi biến người dùng đã thực hiện không thể truy cập trong mẫu Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) bởi @mytharcher

- **[Luồng công việc: Nút thủ công]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ ([#6783](https://github.com/nocobase/nocobase/pull/6783)) bởi @mytharcher

- **[Khối: Bảng hành động]** Màu sắc của Bảng hành động không chính xác trong chế độ tối ([#6842](https://github.com/nocobase/nocobase/pull/6842)) bởi @zhangzhonghe

- **[Hành động: Xuất bản ghi Pro]**
  - Cải thiện hiệu suất khi xóa trường trong cài đặt trường nhập/xuất pro bởi @katherinehhh

  - Sửa lỗi xuất văn bản dài. bởi @aaaaaajie

- **[Luồng công việc: Luồng con]** Sửa lỗi kích hoạt không xác định gây treo trang bởi @mytharcher

- **[In mẫu]**
  - Sửa lỗi không tìm thấy bộ định dạng. bởi @sheldon66

  - Sửa lỗi không tìm thấy bộ định dạng bởi @sheldon66

- **[Lưu trữ tệp: S3 (Pro)]**
  - Thay đổi để sử dụng trường bộ sưu tập để định vị bộ lưu trữ bởi @mytharcher

  - URL truy cập hết hạn không hợp lệ bởi @jiannx

- **[Luồng công việc: Phê duyệt]** Sửa lỗi đếm số liệu thống kê sai trên các tác vụ bởi @mytharcher
