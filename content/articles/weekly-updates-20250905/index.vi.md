---
title: "Cập nhật hàng tuần NocoBase: Tối ưu hóa và sửa lỗi"
description: "Bản cập nhật tuần này bao gồm: tối ưu hóa truy vấn đếm API danh sách, hỗ trợ workflow cho nút thông báo thử nghiệm, và nhiều hơn nữa."
---

Tổng hợp các bản cập nhật sản phẩm hàng tuần, các bản phát hành mới nhất có thể được xem tại [blog của chúng tôi](https://www.nocobase.com/en/blog/timeline).

**NocoBase hiện đang được cập nhật với ba nhánh: `main`, `next` và `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Phiên bản ổn định nhất hiện tại, được khuyến nghị cài đặt;
* `next`: Phiên bản beta, chứa các tính năng mới sắp ra mắt và đã được kiểm thử sơ bộ. Có thể có một số vấn đề đã biết hoặc chưa biết. Chủ yếu dành cho người dùng thử nghiệm để thu thập phản hồi và tối ưu hóa các chức năng hơn nữa. Lý tưởng cho người dùng thử nghiệm muốn trải nghiệm các tính năng mới sớm và đưa ra phản hồi;
* `develop`: Phiên bản alpha, chứa mã tính năng mới nhất, có thể chưa hoàn chỉnh hoặc không ổn định, chủ yếu dành cho phát triển nội bộ và lặp lại nhanh chóng. Phù hợp cho người dùng kỹ thuật quan tâm đến công nghệ tiên tiến của sản phẩm, nhưng có thể có vấn đề và chức năng chưa hoàn chỉnh. Không dùng cho môi trường sản xuất.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Ngày phát hành: 2025-09-03*

#### 🚀 Cải tiến

- **[database]** Tối ưu hóa truy vấn đếm API danh sách để giảm tiêu thụ tài nguyên. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) bởi @aaaaaajie
- **[Thông báo: Tin nhắn trong ứng dụng]** Hỗ trợ cấu hình thời gian trễ tự động đóng cho thông báo tin nhắn trong ứng dụng ([#7472](https://github.com/nocobase/nocobase/pull/7472)) bởi @mytharcher
- **[Quy trình làm việc: nút thông báo]** Hỗ trợ kiểm tra nút thông báo ([#7470](https://github.com/nocobase/nocobase/pull/7470)) bởi @mytharcher

#### 🐛 Sửa lỗi

- **[client]**

  - lỗi hiển thị trường liên kết khi chuyển sang thành phần thẻ trong khối biểu mẫu chỉnh sửa ([#7468](https://github.com/nocobase/nocobase/pull/7468)) bởi @katherinehhh
  - vấn đề giới hạn thời gian khi ngày được chọn bằng minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) bởi @katherinehhh
- **[Mobile]** trường ngày trên thiết bị di động không có múi giờ không hiển thị ngày giờ chính xác ([#7473](https://github.com/nocobase/nocobase/pull/7473)) bởi @katherinehhh
- **[Biểu mẫu công khai]** giá trị mặc định của trường biểu mẫu công khai không được áp dụng khi sử dụng biến ([#7467](https://github.com/nocobase/nocobase/pull/7467)) bởi @katherinehhh
- **[Hành động: Nhập bản ghi]** Sửa lỗi số hàng hiển thị không chính xác khi nhập dữ liệu trùng lặp ([#7440](https://github.com/nocobase/nocobase/pull/7440)) bởi @aaaaaajie
- **[Bộ sưu tập: Cây]** Xóa các sự kiện cơ sở dữ liệu liên quan đến bộ sưu tập sau khi xóa bộ sưu tập dạng cây ([#7459](https://github.com/nocobase/nocobase/pull/7459)) bởi @2013xile
- **[Quy trình làm việc: Sự kiện hành động tùy chỉnh]** Sửa lỗi sự kiện hành động tùy chỉnh không thể được thực thi thủ công ngay sau khi khởi tạo bởi @mytharcher
- **[Quy trình làm việc: Quy trình con]** Sửa lỗi quy trình con được tiếp tục và thực thi nhiều lần bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Đối với người dùng không phải là người phê duyệt hiện tại, nút xem tương ứng trong bảng luồng quy trình sẽ không được hiển thị bởi @mytharcher
