---
title: "NocoBase v2.1.7: Hỗ trợ sao lưu và phục hồi cho KingBase làm cơ sở dữ liệu chính"
description: "Ghi chú phát hành phiên bản v2.1.7"
---

### 🎉 Tính năng mới

- **[Trình quản lý sao lưu]** Hỗ trợ sao lưu và khôi phục cho KingBase làm cơ sở dữ liệu chính ([#9791](https://github.com/nocobase/nocobase/pull/9791)) bởi @2013xile
- **[Trình quản lý di chuyển]** Hỗ trợ di chuyển cho KingBase làm cơ sở dữ liệu chính. bởi @2013xile

### 🚀 Cải tiến

- **[AI: Cơ sở tri thức]** Cải thiện khả năng truy xuất và tài liệu của cơ sở tri thức AI. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) bởi @cgyrock
- **[cli]** Thêm phiên bản lược đồ cấu hình env ([#9782](https://github.com/nocobase/nocobase/pull/9782)) bởi @chenos
- **[Workflow]** Ổn định bài kiểm tra tùy chọn cập nhật ([#9773](https://github.com/nocobase/nocobase/pull/9773)) bởi @mytharcher
- **[Trình quản lý tệp]** Cải thiện xem trước PDF: các tệp PDF từ nguồn gốc khác hiện sử dụng trình xem gốc của trình duyệt, trong khi các tệp PDF cùng nguồn gốc tiếp tục sử dụng PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) bởi @mytharcher
- **[Trình quản lý sao lưu]** Các bảng có `dataCategory` của collection được đánh dấu là `'runtime'` hiện tự động bị loại trừ khỏi sao lưu. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) bởi @cgyrock
- **[AI: Cơ sở tri thức]** Cải thiện phân đoạn tài liệu cơ sở tri thức AI, quản lý phân đoạn, kiểm tra truy cập và hỗ trợ nút quy trình làm việc tài liệu. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client-v2]**

  - Đã sửa lỗi khi gửi biểu mẫu hiển thị thông báo không chính xác khi biểu mẫu con chứa bảng con. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) bởi @gchust
  - Đã sửa lỗi luồng sự kiện trên các cột của bảng con thực thi không chính xác. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) bởi @gchust
  - Đã loại bỏ `updateAssociationValues` không mong muốn khỏi các trường liên kết ([#9812](https://github.com/nocobase/nocobase/pull/9812)) bởi @katherinehhh
  - Đã sửa lỗi tùy chọn Có/Không không được dịch trong danh sách thả xuống hộp kiểm biểu mẫu bộ lọc v2. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) bởi @katherinehhh
  - Đã sửa lỗi không thể cập nhật cài đặt luồng sự kiện sau khi lưu một khối làm mẫu. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) bởi @gchust
  - Đã sửa lỗi hiển thị và cài đặt định dạng không chính xác khi các trường tiêu đề liên kết bảng v2 sử dụng trường thời gian, chỉ ngày hoặc ngày giờ. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) bởi @katherinehhh
- **[Workflow]** Đã sửa lỗi phục hồi bộ điều phối workflow sau các lỗi điều phối không mong muốn. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) bởi @mytharcher
- **[Trình quản lý tệp]** Đã sửa lỗi 404 khi tải tệp lên các trường URL đính kèm trong nguồn dữ liệu bên ngoài ([#9809](https://github.com/nocobase/nocobase/pull/9809)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Đã sửa lỗi hành động yêu cầu tùy chỉnh V2 hiển thị lỗi không cần thiết khi cài đặt yêu cầu chưa được cấu hình. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) bởi @katherinehhh
- **[Nhân viên AI]**

  - Đã sửa lỗi nhân viên AI không thể điền chính xác dữ liệu bảng con. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) bởi @gchust
  - Đã sửa lỗi kích hoạt tác vụ lối tắt của nhân viên AI để các tệp đính kèm từ ngữ cảnh công việc hiện tại được bao gồm khi chạy tác vụ từ hồ sơ lối tắt. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) bởi @cgyrock
- **[Workflow: Sự kiện hành động tùy chỉnh]** Đã sửa lỗi nút kích hoạt workflow bảng hành động v2 hiển thị thành công và gửi yêu cầu khi không có workflow nào được liên kết. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) bởi @mytharcher
- **[Công cụ luồng]** Đã sửa lỗi biểu mẫu và chi tiết bản ghi hiện tại trong cửa sổ bật lên có thể chứa dữ liệu không chính xác khi được xây dựng bởi AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) bởi @gchust
- **[Trình quản lý tác vụ bất đồng bộ]** Đã sửa lỗi tải xuống tệp tác vụ bất đồng bộ khi thiếu id tác vụ trong `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) bởi @mytharcher
- **[Nguồn dữ liệu: NocoBase bên ngoài]** Ủy quyền tải lên và lưu trữ tệp nguồn dữ liệu NocoBase bên ngoài theo nguồn dữ liệu tải lên bởi @2013xile
- **[Đa không gian]** Đã sửa lỗi quyền khi người quản lý không gian thêm người dùng không có quyền truy cập vào trường email người dùng. bởi @jiannx
- **[Workflow: Luồng con]** Đã sửa lỗi luồng con bất đồng bộ để workflow cha có thể tiếp tục sau khi worker khởi động lại hoặc mất ánh xạ sự kiện trong bộ nhớ. bởi @mytharcher
- **[Giám sát ứng dụng]** Đã sửa lỗi sập khi phản hồi proxy WebSocket từ xa thất bại bởi @2013xile
