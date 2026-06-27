---
title: "NocoBase v2.2.0-beta.6: Bổ sung hỗ trợ bố cục di động"
description: "Ghi chú phát hành phiên bản v2.2.0-beta.6"
---

### 🎉 Tính năng mới

- **[cli]** Hỗ trợ script hook cài đặt ([#9824](https://github.com/nocobase/nocobase/pull/9824)) bởi @chenos
- **[Giao diện]** Thêm hỗ trợ bố cục di động ([#9641](https://github.com/nocobase/nocobase/pull/9641)) bởi @zhangzhonghe
- **[Trình quản lý sao lưu]** Hỗ trợ sao lưu và phục hồi cho KingBase làm cơ sở dữ liệu chính ([#9791](https://github.com/nocobase/nocobase/pull/9791)) bởi @2013xile
- **[Đa cổng]** Thêm plugin Đa cổng bởi @zhangzhonghe
- **[Trình quản lý di chuyển]** Hỗ trợ di chuyển cho KingBase làm cơ sở dữ liệu chính. bởi @2013xile

### 🚀 Cải tiến

- **[client-v2]**

  - Hiển thị quy tắc xác thực cấp trường dưới dạng quy tắc kế thừa chỉ đọc trong cài đặt xác thực trường giao diện. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) bởi @katherinehhh
  - Thêm tùy chọn giá trị ghi đè cho cài đặt giá trị trường. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) bởi @gchust
- **[undefined]** Cải thiện truy xuất và tài liệu cơ sở kiến thức AI. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) bởi @cgyrock
- **[Công cụ luồng]**

  - Thêm khối hiện tại vào ngữ cảnh người dùng theo mặc định khi xây dựng nhân viên AI bằng API bề mặt luồng. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) bởi @gchust
  - Mở globals trình duyệt runjs. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) bởi @gchust
- **[Quy trình làm việc]** Ổn định kiểm tra tùy chọn cập nhật ([#9773](https://github.com/nocobase/nocobase/pull/9773)) bởi @mytharcher
- **[Kiểm soát truy cập]** Đồng bộ hóa các trang cài đặt Người dùng & Quyền v2 với hành vi v1, bao gồm tổng số phân trang, hành vi cây phòng ban, kiểu đã chọn và cuộn bảng quyền nội bộ. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) bởi @jiannx
- **[Trình quản lý sao lưu]** Các bảng có `dataCategory` của collection được đánh dấu là `'runtime'` hiện được tự động loại trừ khỏi sao lưu. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) bởi @cgyrock
- **[AI: Cơ sở kiến thức]** Cải thiện phân đoạn tài liệu cơ sở kiến thức AI, quản lý phân đoạn, kiểm tra truy cập và hỗ trợ nút quy trình làm việc tài liệu. bởi @cgyrock

### 🐛 Sửa lỗi

- **[client-v2]**

  - Sửa lỗi khối không làm mới sau khi cập nhật cài đặt khối. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) bởi @gchust
  - Sửa lỗi nút kích hoạt quy trình làm việc hành động tùy chỉnh gửi JSON ngữ cảnh tùy chỉnh dưới thuộc tính `values` thừa hoặc dưới dạng chuỗi đã tuần tự hóa. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) bởi @mytharcher
  - Sửa lỗi cấu hình giá trị trường liên kết làm giá trị cố định hoặc giá trị mặc định không có hiệu lực. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) bởi @gchust
  - Sửa lỗi luồng sự kiện trên các cột bảng con thực thi không chính xác. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) bởi @gchust
  - Xóa updateAssociationValues không mong muốn khỏi các trường liên kết ([#9812](https://github.com/nocobase/nocobase/pull/9812)) bởi @katherinehhh
  - Sửa lỗi gửi biểu mẫu hiển thị thông báo sai khi biểu mẫu con chứa bảng con. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) bởi @gchust
- **[ai]**

  - Sửa lỗi giải quyết phụ thuộc LangChain không tương thích cho các plugin AI. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) bởi @cgyrock
  - Khóa `@langchain/openai` ở mức cập nhật bản vá cho các gói AI. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) bởi @cgyrock
- **[app]** Bỏ qua currentScript không liên quan khi suy luận đường dẫn công khai của plugin ([#9839](https://github.com/nocobase/nocobase/pull/9839)) bởi @chenos
- **[auth]** Dữ liệu mật khẩu đã mã hóa không còn được bao gồm trong phản hồi trạng thái đăng nhập ([#9836](https://github.com/nocobase/nocobase/pull/9836)) bởi @2013xile
- **[Khối: Gantt]** Sửa lỗi cài đặt mẫu popup tác vụ Gantt không áp dụng hoặc xóa chính xác. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) bởi @jiannx
- **[Hành động: In]** Sửa lỗi in khối chi tiết v2 để các khối chi tiết trống không còn in toàn bộ trang. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) bởi @katherinehhh
- **[Mẫu giao diện]** Sửa lỗi ngữ cảnh mặc định không chính xác cho ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) bởi @gchust
- **[Trình quản lý tệp]** Sửa lỗi 404 khi tải tệp lên trường URL đính kèm trong nguồn dữ liệu bên ngoài ([#9809](https://github.com/nocobase/nocobase/pull/9809)) bởi @2013xile
- **[Hành động: Yêu cầu tùy chỉnh]** Sửa lỗi hành động yêu cầu tùy chỉnh V2 hiển thị lỗi thừa khi cài đặt yêu cầu chưa được cấu hình. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) bởi @katherinehhh
- **[Quy trình làm việc]** Sửa lỗi phục hồi bộ điều phối quy trình làm việc sau lỗi điều phối không mong muốn. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) bởi @mytharcher
- **[Nhân viên AI]** Sửa lỗi kích hoạt tác vụ lối tắt của nhân viên AI để các tệp đính kèm từ ngữ cảnh công việc hiện tại được bao gồm khi chạy tác vụ từ hồ sơ lối tắt. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) bởi @cgyrock
- **[Nguồn dữ liệu: NocoBase bên ngoài]** Ủy quyền tải lên và lưu trữ tệp nguồn dữ liệu bên ngoài NocoBase bằng nguồn dữ liệu tải lên bởi @2013xile
- **[AI: Cơ sở kiến thức]**

  - Sửa lỗi giải quyết phụ thuộc LangChain không tương thích cho plugin cơ sở kiến thức AI. bởi @cgyrock
  - Sửa lỗi thất bại không rõ ràng khi kích hoạt plugin cơ sở kiến thức AI mà không có plugin AI khả dụng. bởi @cgyrock
- **[Đa không gian]** Sửa lỗi yêu cầu phục hồi xác thực bị chặn bởi tiêu đề đa không gian cũ. bởi @jiannx
- **[Quy trình làm việc: Luồng con]** Sửa lỗi luồng con không đồng bộ để quy trình làm việc cha có thể tiếp tục sau khi worker khởi động lại hoặc mất ánh xạ sự kiện trong bộ nhớ. bởi @mytharcher
- **[Quy trình làm việc: Phê duyệt]** Sửa lỗi phê duyệt liên quan không tải hoặc làm mới chính xác bởi @zhangzhonghe
- **[Giám sát ứng dụng]** Sửa lỗi treo khi phản hồi proxy WebSocket từ xa thất bại bởi @2013xile
