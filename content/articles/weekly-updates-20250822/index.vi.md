---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Các bản cập nhật tuần này bao gồm: hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các nút phê duyệt trong cùng một quy trình, in mẫu hỗ trợ mảng nhiều-nhiều, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem trên [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản Beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số lỗi đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa chức năng thêm. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản Alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có lỗi tiềm ẩn và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Ngày phát hành: 2025-08-19*

#### 🚀 Cải tiến

- **[Workflow]** Cập nhật menu lựa chọn node để hiển thị các tùy chọn theo bố cục hai cột nhằm cải thiện mật độ thông tin và cho phép người dùng xem nhiều tùy chọn hơn cùng lúc ([#7396](https://github.com/nocobase/nocobase/pull/7396)) bởi @mytharcher
- **[Cài đặt giấy phép]** Trong cài đặt giấy phép, sao chép ID phiên bản mới nhất mỗi lần ([#7387](https://github.com/nocobase/nocobase/pull/7387)) bởi @jiannx

#### 🐛 Sửa lỗi

- **[client]**

  - Xử lý số 0 như là giá trị rỗng trong quá trình xác thực rỗng của quy tắc liên kết ([#7404](https://github.com/nocobase/nocobase/pull/7404)) bởi @katherinehhh
  - Sửa lỗi văn bản của nút liên kết bị ngắt dòng ([#7406](https://github.com/nocobase/nocobase/pull/7406)) bởi @mytharcher
- **[Mobile]** Định dạng hiển thị không chính xác của trường ngày trên thiết bị di động ([#7412](https://github.com/nocobase/nocobase/pull/7412)) bởi @katherinehhh
- **[Trình xem tệp văn phòng]** Sửa lỗi xảy ra khi tải tệp lên trường URL đính kèm ([#7405](https://github.com/nocobase/nocobase/pull/7405)) bởi @mytharcher
- **[Workflow]** Sửa lỗi xảy ra và dữ liệu biểu mẫu biến mất khi chỉnh sửa danh mục workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) bởi @mytharcher
- **[Workflow: node mailer]** Sửa lỗi node email có thể không tiếp tục thực thi đúng cách ([#7409](https://github.com/nocobase/nocobase/pull/7409)) bởi @mytharcher
- **[Workflow: Sự kiện hành động tùy chỉnh]** Xóa các hàng đã chọn sau khi kích hoạt thành công hành động trên nhiều bản ghi bởi @mytharcher
- **[In mẫu]** In các trường chọn radio trong nhiều dòng dữ liệu bởi @jiannx
- **[Workflow: Phê duyệt]** Sửa lỗi khi tải dữ liệu nguồn dữ liệu bên ngoài trong bản ghi phê duyệt dẫn đến lỗi 404 bởi @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Ngày phát hành: 2025-08-15*

#### 🎉 Tính năng mới

- **[Workflow: Phê duyệt]** Hỗ trợ sử dụng tiêu đề tác vụ nhất quán cho tất cả các node phê duyệt trong cùng một workflow bởi @mytharcher

#### 🚀 Cải tiến

- **[Xác thực]** Xóa tham số token khỏi URL sau khi đăng nhập thành công ([#7386](https://github.com/nocobase/nocobase/pull/7386)) bởi @2013xile
- **[In mẫu]** hỗ trợ trường mảng m2m bởi @jiannx

#### 🐛 Sửa lỗi

- **[Mobile]** Sửa lỗi dữ liệu gửi biểu mẫu trong hộp thoại phê duyệt trên di động không chính xác ([#7389](https://github.com/nocobase/nocobase/pull/7389)) bởi @zhangzhonghe
- **[Workflow]** Sửa lỗi dịch thuật tiêu đề trang trong trung tâm tác vụ workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) bởi @mytharcher
- **[Lịch]** tooltip của mục sự kiện lịch hiển thị [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) bởi @katherinehhh
- **[Thông báo: Tin nhắn trong ứng dụng]** Sửa lỗi dịch thuật ([#7384](https://github.com/nocobase/nocobase/pull/7384)) bởi @mytharcher
- **[Quản lý tệp]** Xóa gợi ý về giới hạn kích thước tải lên tệp ([#7391](https://github.com/nocobase/nocobase/pull/7391)) bởi @mytharcher
- **[Lưu trữ tệp: S3(Pro)]**

  - Không dùng tham số `attachmentField` có vấn đề bởi @mytharcher
  - Sửa lỗi không thể sử dụng phương thức xác thực IAM để tải tệp lên bởi @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Ngày phát hành: 2025-08-14*

#### 🚀 Cải tiến

- **[Thông báo: Tin nhắn trong ứng dụng]** Xóa nhật ký SQL được xuất ra qua `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) bởi @2013xile

#### 🐛 Sửa lỗi

- **[server]** Một số yêu cầu thiếu `ctx.action`, gây ra lỗi trong middleware nhật ký kiểm toán ([#7369](https://github.com/nocobase/nocobase/pull/7369)) bởi @2013xile
- **[Trường bộ sưu tập: Công thức]** Sửa lỗi đầu vào công thức không thể vượt qua xác thực do loại biến ([#7373](https://github.com/nocobase/nocobase/pull/7373)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Sao lưu tệp lớn có thể hiển thị "thành công" trước khi thực sự hoàn thành bởi @gchust
