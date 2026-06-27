---
title: "NocoBase v1.6.0-beta.17: Thêm cấu hình chú thích cho mục menu và tiêu đề bảng"
description: "Ghi chú phát hành phiên bản v1.6.0-beta.17"
---

### 🎉 Tính năng mới

- **[client]** Thêm cấu hình tooltip cho mục menu và tiêu đề bảng ([#6346](https://github.com/nocobase/nocobase/pull/6346)) bởi @Cyx649312038

- **[Trực quan hóa dữ liệu]** Hỗ trợ sắp xếp NULLS trong truy vấn biểu đồ ([#6383](https://github.com/nocobase/nocobase/pull/6383)) bởi @2013xile

- **[Tích hợp AI]** Plugin mới: Tích hợp AI ([#6283](https://github.com/nocobase/nocobase/pull/6283)) bởi @2013xile
Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
- **[Tích hợp AI (EE)]** Plugin mới: Tích hợp AI (EE) bởi @2013xile
Tham khảo: [Tích hợp AI](https://docs.nocobase.com/handbook/ai/service)
### 🚀 Cải tiến

- **[client]**
  - Thêm xử lý debounce cho các nút ([#6351](https://github.com/nocobase/nocobase/pull/6351)) bởi @Cyx649312038

  - Làm cho menu phản hồi theo chiều rộng màn hình ([#6331](https://github.com/nocobase/nocobase/pull/6331)) bởi @zhangzhonghe

- **[Workflow]** Cho phép bỏ qua kích hoạt workflow thu thập trong sự kiện cơ sở dữ liệu ([#6379](https://github.com/nocobase/nocobase/pull/6379)) bởi @mytharcher

- **[Workflow: Nút tổng hợp]** Thêm quy trình làm tròn cho số tổng hợp dựa trên kiểu double ([#6358](https://github.com/nocobase/nocobase/pull/6358)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** hỗ trợ các tùy chọn nâng cao trong nút nhập Pro bởi @katherinehhh

- **[Workflow: JavaScript]** Hỗ trợ yêu cầu gói từ đường dẫn tuyệt đối bởi @mytharcher

- **[Lưu trữ tệp: S3(Pro)]** thử tải lại bộ lưu trữ nếu không tìm thấy bộ lưu trữ bởi @jiannx

### 🐛 Sửa lỗi

- **[client]**
  - Bản dịch tùy chỉnh tiêu đề menu không hợp lệ ([#6377](https://github.com/nocobase/nocobase/pull/6377)) bởi @zhangzhonghe

  - Vấn đề liên quan đến múi giờ gây thiếu một giờ trong bộ chọn ngày ([#6359](https://github.com/nocobase/nocobase/pull/6359)) bởi @katherinehhh

  - Thiếu cài đặt sắp xếp cho các trường collection kế thừa ([#6372](https://github.com/nocobase/nocobase/pull/6372)) bởi @katherinehhh

  - Dropdown cài đặt lưu trữ trường tệp đính kèm không hiển thị tùy chọn ([#6365](https://github.com/nocobase/nocobase/pull/6365)) bởi @katherinehhh

  - Các thành phần subform không căn chỉnh với form chính khi nhãn bị ẩn ([#6357](https://github.com/nocobase/nocobase/pull/6357)) bởi @katherinehhh

  - Khối liên kết không hiển thị trong popup trong collection kế thừa ([#6303](https://github.com/nocobase/nocobase/pull/6303)) bởi @katherinehhh

  - Khắc phục sự cố thanh cuộn khi mở tab trang với khối toàn chiều cao ([#6347](https://github.com/nocobase/nocobase/pull/6347)) bởi @katherinehhh

  - Sửa lỗi xảy ra khi tạo collection tệp ([#6363](https://github.com/nocobase/nocobase/pull/6363)) bởi @mytharcher

- **[database]** Sửa lỗi khi truy xuất bản ghi collection quan hệ nếu khóa nguồn trong các trường quan hệ là chuỗi số ([#6360](https://github.com/nocobase/nocobase/pull/6360)) bởi @2013xile

- **[WEB client]**
  - Thêm trang tab trong bảng quản lý route không có hiệu lực ([#6362](https://github.com/nocobase/nocobase/pull/6362)) bởi @zhangzhonghe

  - Sau khi thêm trang vào bảng route, trang xuất hiện trống ([#6366](https://github.com/nocobase/nocobase/pull/6366)) bởi @zhangzhonghe

- **[Người dùng]**
  - Lỗi "Không có quyền" khi người dùng không có quyền quản lý người dùng xem hồ sơ của chính họ ([#6382](https://github.com/nocobase/nocobase/pull/6382)) bởi @2013xile

  - Lỗi "Không có quyền" khi cập nhật cài đặt hệ thống trong quản lý người dùng ([#6380](https://github.com/nocobase/nocobase/pull/6380)) bởi @2013xile

- **[Kiểm soát truy cập]** Trong bảng quản lý quyền, tên trang tab bị trống ([#6364](https://github.com/nocobase/nocobase/pull/6364)) bởi @zhangzhonghe

- **[Tích hợp AI]** Vấn đề `baseURL` mặc định cho nhà cung cấp LLM là `undefined` ([#6367](https://github.com/nocobase/nocobase/pull/6367)) bởi @2013xile

- **[Workflow]** Sửa acl để lấy job ([#6352](https://github.com/nocobase/nocobase/pull/6352)) bởi @mytharcher

- **[Workflow: Sự kiện hành động tùy chỉnh]** Sửa locale và collection có thể sửa đổi sau khi thực thi bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Sử dụng tùy chọn bổ sung để xác định có kích hoạt workflow hay không bởi @mytharcher

- **[Hành động: Xuất bản ghi Pro]** Hành động xuất Pro thiếu tham số sắp xếp bởi @katherinehhh
