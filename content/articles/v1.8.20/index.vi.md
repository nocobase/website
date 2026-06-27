---
title: "NocoBase v1.8.20: Điều chỉnh API biến quy trình làm việc để hỗ trợ thiết lập trước danh sách biến bổ sung"
description: "Ghi chú phát hành v1.8.20"
---

### 🚀 Cải tiến

- **[Quy trình làm việc]** Điều chỉnh API biến của quy trình làm việc để hỗ trợ cài đặt trước một danh sách biến bổ sung ([#7439](https://github.com/nocobase/nocobase/pull/7439)) bởi @mytharcher

- **[Quy trình làm việc: Phê duyệt]**
  - Hỗ trợ sử dụng các biến liên quan đến phê duyệt trong thông báo tùy chỉnh bởi @mytharcher

  - Hỗ trợ cập nhật trạng thái phê duyệt sau khi nút kết thúc kết thúc thực thi bởi @mytharcher

### 🐛 Sửa lỗi

- **[client]**
  - Sửa lỗi trong một số trường hợp, chỉnh sửa bản ghi trong cửa sổ bật lên của trình chọn bản ghi trên thiết bị di động gây ra lỗi ([#7444](https://github.com/nocobase/nocobase/pull/7444)) bởi @zhangzhonghe

  - Xác thực bắt buộc không hoạt động đối với trường tệp đính kèm trong bảng con ([#7431](https://github.com/nocobase/nocobase/pull/7431)) bởi @katherinehhh

  - Sửa lỗi hiển thị biểu tượng không chính xác khi URL trong trường URL tệp đính kèm chứa tham số truy vấn ([#7432](https://github.com/nocobase/nocobase/pull/7432)) bởi @mytharcher

- **[database]**
  - Sửa lỗi cú pháp MySQL xảy ra khi tải thêm tin nhắn trong ứng dụng. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) bởi @aaaaaajie

  - Sửa lỗi độ chính xác cho các trường Số được xuất ([#7421](https://github.com/nocobase/nocobase/pull/7421)) bởi @aaaaaajie

- **[undefined]** Sửa lỗi lọc theo trường ngày chỉ trong nguồn ngoài MySQL ([#7422](https://github.com/nocobase/nocobase/pull/7422)) bởi @aaaaaajie

- **[Hành động: Nhập bản ghi]** Sửa lỗi nhập không thành công khi khóa chính của bảng là văn bản một dòng ([#7416](https://github.com/nocobase/nocobase/pull/7416)) bởi @aaaaaajie

- **[Quy trình làm việc]**
  - Hoàn thiện các tùy chọn để tự động xóa trạng thái thực thi quy trình làm việc ([#7436](https://github.com/nocobase/nocobase/pull/7436)) bởi @mytharcher

  - Sửa lỗi liên quan đến menu trên thiết bị di động trong các tác vụ quy trình làm việc ([#7419](https://github.com/nocobase/nocobase/pull/7419)) bởi @mytharcher

- **[Hành động: Nhập bản ghi Pro]** Sửa lỗi kết quả cập nhật không mong muốn khi sử dụng khóa chính dạng chuỗi trong quá trình nhập xlsx. bởi @aaaaaajie
