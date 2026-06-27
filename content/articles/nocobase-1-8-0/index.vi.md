---
title: "Công bố NocoBase v1.8.0"
description: "Cải thiện quy trình xác thực, hỗ trợ biến thống kê tùy chỉnh và nâng cấp quản lý email, tối ưu hóa trải nghiệm quy trình làm việc và tương tác di động"
---

## Tính năng mới

### Quên mật khẩu – Hỗ trợ khôi phục qua email

Người dùng hiện có thể khôi phục mật khẩu qua email. Kích hoạt tính năng này trong **Cài đặt > Xác thực > Quên mật khẩu**, cấu hình kênh thông báo email và tùy chỉnh email đặt lại mật khẩu (hỗ trợ biến và định dạng HTML).

![Quên mật khẩu – Hỗ trợ khôi phục qua email.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Tham khảo: [Quên mật khẩu](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Biến tổng hợp tùy chỉnh

Hỗ trợ tạo các biến thống kê như đếm, tổng và trung bình. Các biến này có thể được sử dụng trong huy hiệu menu, nhãn trang và các khu vực khác để làm cho giao diện trực quan và giàu thông tin hơn.

![Biến tổng hợp tùy chỉnh.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Tham khảo: [Biến tùy chỉnh](https://docs.nocobase.com/handbook/custom-variables)

### Quản lý Email

Mô-đun quản lý email đã được nâng cấp toàn diện, hiện hỗ trợ xóa email, gửi hàng loạt, cài đặt khoảng thời gian đồng bộ và nhiều cải tiến trải nghiệm người dùng khác.

![Quản lý Email.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Nguồn dữ liệu

Hỗ trợ trường BIT của SQL Server trong các nguồn dữ liệu bên ngoài và cho phép tải theo yêu cầu các bảng dữ liệu từ các nguồn bên ngoài.

![Nguồn dữ liệu.png](https://static-docs.nocobase.com/image-rml96b.png)

### Sao chép văn bản

Hỗ trợ sao chép nội dung trường văn bản chỉ bằng một cú nhấp chuột.

![Sao chép văn bản.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Luồng công việc: Nút yêu cầu HTTP] Hỗ trợ loại `multipart/form-data`

Khi cấu hình nút Yêu cầu HTTP trong luồng công việc, bạn có thể chọn loại nội dung `multipart/form-data`. Sau khi kích hoạt, phần thân yêu cầu chấp nhận các bản gửi form-data—bao gồm cả trường `file`—để hỗ trợ tải tệp lên và các tình huống tương tự.

![Luồng công việc.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Luồng công việc: Phê duyệt] Kết quả nút phê duyệt hỗ trợ tạo biến bản ghi phê duyệt

Kết quả thực thi nút phê duyệt hiện có thể được sử dụng làm biến trong các nút tiếp theo, với việc tự động ghi lại trạng thái và dữ liệu liên quan.

![Luồng công việc: Phê duyệt](https://static-docs.nocobase.com/20250614095052.png)

Tham khảo: [Kết quả nút](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Cải tiến

### Nhập liệu bằng quét

Thành phần nhập văn bản chung hiện có tùy chọn **Bật quét**. Khi được bật, một nút quét sẽ xuất hiện ở bên phải của trường nhập, cho phép nhập dữ liệu qua thiết bị quét. Bạn cũng có thể cấu hình xem có cho phép nhập thủ công hay không.

![Nhập liệu bằng quét.png](https://static-docs.nocobase.com/image-u7gfro.png)

Tham khảo: [Bật quét](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Hỗ trợ bản địa hóa trong khối Markdown

Nội dung Markdown hiện hỗ trợ bản địa hóa bằng cách sử dụng cú pháp `{{t 'xxx'}}` để chèn văn bản đa ngôn ngữ.

![Hỗ trợ bản địa hóa trong khối Markdown.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Tham khảo: [Bản địa hóa](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Liên kết menu hỗ trợ mở trong cửa sổ mới

Một tùy chọn **"Mở trong cửa sổ mới"** mới đã được thêm vào cho các liên kết menu, cho phép bạn tùy chỉnh cách mở liên kết.

![Liên kết menu hỗ trợ mở trong cửa sổ mới.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Khối Lịch hỗ trợ cài đặt ngày bắt đầu tuần

Bạn có thể tùy chỉnh ngày bắt đầu tuần của chế độ xem lịch, chọn Chủ nhật hoặc Thứ hai để phù hợp với các sở thích và thói quen khu vực khác nhau.

![Khối Lịch hỗ trợ cài đặt ngày bắt đầu tuần.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Tham khảo: [Ngày bắt đầu tuần](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Chế độ xem Markdown (Vditor) hỗ trợ nhấp vào hình ảnh để phóng to

Trong chế độ xem, hình ảnh trong nội dung Markdown có thể được nhấp để phóng to, nâng cao trải nghiệm đọc.

![Chế độ xem Markdown (Vditor) hỗ trợ nhấp vào hình ảnh để phóng to.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Nâng cao toàn diện chức năng và hiệu suất của mô-đun Luồng công việc

- Hỗ trợ lọc luồng công việc theo nhiều trường hơn để cải thiện hiệu quả tìm kiếm
- Tối ưu hóa kiểu hiển thị trên thiết bị di động để nâng cao trải nghiệm người dùng
- Loại trừ tải trường JSON để cải thiện đáng kể hiệu suất tải danh sách kế hoạch thực thi
- Thêm API nhật ký mới cho các lần chạy thử nút
- Điều chỉnh giao diện API của phương thức `getCollectionFieldOptions` để tăng tính linh hoạt

![Mô-đun Luồng công việc.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Cải tiến chức năng và trải nghiệm quy trình phê duyệt

- Thêm tùy chọn cấu hình cho danh sách lựa chọn nhân sự chuyển tiếp và thêm ký, hỗ trợ hiển thị thêm thông tin trường để hỗ trợ lựa chọn chính xác hơn
- Điều chỉnh hiển thị thời gian trong dòng thời gian thành thời gian tuyệt đối để cải thiện khả năng đọc
- Nhập các bảng dữ liệu liên quan đến phê duyệt từ plugin Luồng công việc để ngăn các bảng cục bộ bị ghi đè
- Điều chỉnh cấu trúc giao diện API biến để tăng tính linh hoạt và nhất quán

![Quy trình phê duyệt.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Hỗ trợ cấu hình tùy chọn kết nối cơ sở dữ liệu qua biến môi trường

Các tham số kết nối cơ sở dữ liệu có thể được thiết lập linh hoạt thông qua các biến môi trường để cải thiện tính linh hoạt khi triển khai.

![Hỗ trợ cấu hình tùy chọn kết nối cơ sở dữ liệu qua biến môi trường.png](https://static-docs.nocobase.com/image-tz87as.png)

### Khối bình luận hỗ trợ phân trang

Hỗ trợ tải bình luận theo trang để nâng cao hiệu suất tải và trải nghiệm đọc trong các tình huống có khối lượng dữ liệu lớn.

![Khối bình luận hỗ trợ phân trang.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Cải tiến trải nghiệm di động

- Cửa sổ bật thông báo đã được điều chỉnh theo kiểu di động
- Tối ưu hóa logic phát hiện bố cục di động để nâng cao độ chính xác của khả năng phản hồi
