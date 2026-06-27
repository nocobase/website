---
title: "Hướng dẫn kích hoạt giấy phép thương mại NocoBase"
description: "Hướng dẫn kích hoạt giấy phép thương mại NocoBase của bạn. Tìm hiểu cách kích hoạt nhanh chóng và an toàn các tính năng thương mại bằng phương pháp \"ID phiên bản\" và \"Khóa giấy phép\" mới."
---

## **Hướng dẫn Kích hoạt Giấy phép Thương mại NocoBase**

Để nâng cao trải nghiệm người dùng và tăng cường bảo mật, chúng tôi đã nâng cấp toàn diện quy trình cấp phép và kích hoạt thương mại. Phương thức ủy quyền mới thay thế cách tiếp cận trước đây là nhập tên người dùng và mật khẩu vào tệp cấu hình, giới thiệu một cơ chế dựa trên "ID Phiên bản" và "Khóa Giấy phép".

Ưu điểm cốt lõi của giải pháp mới bao gồm:

* **Bảo mật nâng cao**: Không còn yêu cầu lưu trữ thông tin tài khoản của bạn dưới dạng văn bản thuần túy, giảm nguy cơ rò rỉ thông tin nhạy cảm.
* **Quy trình đơn giản hóa**: Ủy quyền được liên kết trực tiếp với phiên bản NocoBase của bạn, giúp việc quản lý và cập nhật giấy phép trở nên trực quan và thuận tiện hơn.
* **Tăng tính linh hoạt**: Khi môi trường triển khai của bạn thay đổi, bạn có thể dễ dàng tạo lại ủy quyền để nhanh chóng thích ứng với môi trường mới.
* **Bảo vệ giấy phép**: Thông qua quản lý giấy phép phụ trợ và giám sát trạng thái, bạn có thể theo dõi việc sử dụng thực tế giấy phép của mình, kịp thời phát hiện và xử lý các ứng dụng trái phép, ngăn chặn việc lạm dụng giấy phép thương mại.

Hướng dẫn này sẽ hướng dẫn bạn quy trình kích hoạt giấy phép thương mại NocoBase mới hoàn chỉnh.

<image src="https://static-docs.nocobase.com/undefined20250701160935956.png" >

---

## **Hướng dẫn Kích hoạt Giấy phép Từng bước**

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt thành công và đang chạy NocoBase Community Edition.

### **Bước 1: Truy cập Trang Giấy phép và Sao chép ID Phiên bản**

1. Trong ứng dụng NocoBase cục bộ của bạn, điều hướng đến trang `Cài đặt Hệ thống` -> `Cài đặt Giấy phép`.
2. Trên trang này, bạn sẽ thấy một chuỗi **ID Phiên bản**, đây là mã định danh duy nhất cho môi trường đang chạy hiện tại của bạn. Nhấp vào biểu tượng sao chép ở bên phải của nó.

![img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g](https://static-docs.nocobase.com/img_v3_02nv_a5e3edcd-d411-4dc9-8b1c-d3e29631243g.jpg)

### **Bước 2: Tạo Ứng dụng trên Nền tảng Dịch vụ và Liên kết ID Phiên bản**

1. Đăng nhập vào nền tảng Dịch vụ NocoBase, nhấp vào nút "Thêm" trên trang quản lý "Ứng dụng".
2. Trong biểu mẫu bật lên, điền thông tin ứng dụng của bạn và dán `ID Phiên bản` đã sao chép từ bước trước vào trường nhập `ID Phiên bản`, sau đó gửi.

![20250707233019](https://static-docs.nocobase.com/20250707233019.png)

### **Bước 3: Lấy Khóa Giấy phép**

1. Sau khi ứng dụng được tạo thành công, quay lại danh sách giấy phép, tìm mục nhập tương ứng và nhấp vào nút "Xem Giấy phép" trong cột hành động.
2. Trong cửa sổ bật lên chi tiết giấy phép, nhấp vào nút "Sao chép" để lấy **Khóa Giấy phép** khớp với phiên bản của bạn.
   ![img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g](https://static-docs.nocobase.com/img_v3_02nv_138161f1-8ac4-4458-81c0-8a4d0f702d8g.jpg)

### **Bước 4: Cấu hình Khóa Giấy phép trong NocoBase**

1. Quay lại trang `Cài đặt Giấy phép` NocoBase cục bộ của bạn.
2. Dán `Khóa Giấy phép` vừa sao chép vào trường nhập `Khóa giấy phép` và nhấp vào nút "Gửi".
3. Sau khi lưu thành công, hệ thống sẽ hiển thị "Đã lưu khóa giấy phép thành công, vui lòng khởi động lại máy chủ", cho biết khóa giấy phép đã được cấu hình thành công và đang chờ khởi động lại.

![img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g](https://static-docs.nocobase.com/img_v3_02nv_45050542-c4dd-45b7-afdf-4a4e9fb75f4g.jpg)

### **Bước 5: Hoàn tất Kích hoạt và Tải xuống Phiên bản Thương mại và Plugin Thương mại**

Khởi động lại dịch vụ NocoBase của bạn để áp dụng giấy phép và tự động tải xuống phiên bản thương mại và các plugin thương mại.

* **Đối với triển khai Docker**: Thực thi lệnh khởi động lại `docker compose restart app`.
* **Đối với triển khai mã nguồn hoặc `create-nocobase-app`**: Thực thi lệnh `yarn nocobase pkg download-pro` trong thư mục gốc của dự án.

Sau khi dịch vụ khởi động lại và tải xuống plugin thành công, giấy phép thương mại của bạn đã được kích hoạt. Nếu bạn cần thay đổi giấy phép, bạn có thể vào lại trang cài đặt giấy phép, nhấp vào nút "Thay đổi khóa" và lặp lại quy trình trên.

---

## **Cách Xem Thông tin Giấy phép**

Sau khi kích hoạt giấy phép, bạn có thể nhấp vào biểu tượng thông tin giấy phép ở góc trên bên phải của giao diện NocoBase bất kỳ lúc nào để xem trạng thái chi tiết của giấy phép hiện tại, bao gồm phiên bản giấy phép, ngày hết hạn, trạng thái khớp tên miền và danh sách plugin được ủy quyền.

![20250707234415](https://static-docs.nocobase.com/20250707234415.png)

---

## Danh sách Kiểm tra Nhanh Triển khai và Giấy phép

Khi gặp sự cố, bạn có thể tham khảo danh sách kiểm tra này để khắc phục nhanh:

- [ ]  **Bước 1: Lấy ID Phiên bản**
  - [ ]  NocoBase Community Edition/Phiên bản chưa được cấp phép đang chạy thành công.
  - [ ]  `ID Phiên bản` đã được sao chép hoàn toàn từ trang `Cài đặt giấy phép`.
- [ ]  **Bước 2: Tạo Khóa Giấy phép**
  - [ ]  Ứng dụng đã được tạo trên nền tảng Dịch vụ.
  - [ ]  `ID Phiên bản` được dán khi tạo ứng dụng là mới nhất và chính xác.
  - [ ]  `Khóa Giấy phép` đã được sao chép hoàn toàn từ "Xem Giấy phép".
- [ ]  **Bước 3: Kích hoạt**
  - [ ]  `Khóa Giấy phép` đã được dán lại vào NocoBase và lưu thành công.
  - [ ]  **Đã thực thi khởi động lại container hoặc lệnh `download-pro` theo phương pháp triển khai.** (Nhiều người dùng bỏ lỡ bước này!)
- [ ]  **Xác minh**
  - [ ]  Cửa sổ bật lên thông tin giấy phép hiển thị trạng thái là "Hoạt động".

## Các Câu hỏi Thường gặp (FAQ)

Trong quá trình cài đặt hoặc sử dụng, bạn có thể gặp các thông báo sau. Vui lòng làm theo các giải pháp tương ứng:

### 1. `License key mismatch` - Khóa Giấy phép Không Khớp với Môi trường

<image src="https://static-docs.nocobase.com/undefined20250701193351673.png" />

[H]Tại sao tôi nhận được `License key mismatch` sau khi cấu hình?

[TL]Môi trường đang chạy của bạn có thể đã thay đổi, khiến "`ID Phiên bản`" được cập nhật, nhưng ứng dụng của bạn vẫn có "`Khóa Giấy phép`" cũ.
**Giải pháp**: Vui lòng làm theo đúng **Bước 1** của hướng dẫn này để lấy `ID Phiên bản` mới nhất từ **môi trường hiện tại** của bạn, sau đó hoàn tất quy trình tiếp theo để tạo "khóa" mới.

### 2. `Invalid license key` - Khóa Giấy phép Đã Hết hạn

<image src="https://static-docs.nocobase.com/undefined20250701193558012.png" />

[H]`Invalid license key` có nghĩa là gì?

[TL]`Khóa Giấy phép` của bạn có thể đã hết hạn hoặc bị nền tảng đánh dấu là không hợp lệ vì những lý do khác.
**Giải pháp**: Vui lòng liên hệ với chúng tôi hoặc kiểm tra trạng thái giấy phép của bạn trên nền tảng dịch vụ. Nếu cần, hãy tạo lại `Khóa Giấy phép` và cấu hình nó.

### 3. `Invalid license key format` - Lỗi Định dạng Khóa Giấy phép

<image src="https://static-docs.nocobase.com/undefined20250701193148501.png" />

[H]Tôi nên làm gì với `Invalid license key format`?

[TL]`Khóa Giấy phép` bạn đã dán không đầy đủ hoặc có định dạng không chính xác, khiến hệ thống không thể phân tích cú pháp.
**Giải pháp**: Vui lòng quay lại nền tảng dịch vụ, đảm bảo bạn đã sao chép hoàn toàn `Khóa Giấy phép`, sau đó dán lại và lưu.

### 4. Hộp thoại Thông tin Giấy phép Buộc Xuất hiện Khi Truy cập Hệ thống

<image src="https://static-docs.nocobase.com/undefined20250625164238000.png" width="400" />

[H]Tại sao hộp thoại thông tin giấy phép luôn xuất hiện?

[TL]Cửa sổ bật lên này thường cho thấy xác minh giấy phép không thành công. Các nguyên nhân có thể bao gồm:

- `Khóa Giấy phép` bị hỏng hoặc không khớp với môi trường cục bộ
- Giấy phép đã hết hạn hoặc không hợp lệ
- `Khóa Giấy phép` không khớp với phiên bản plugin thương mại bạn đang chạy

**Giải pháp**: Giải pháp trực tiếp nhất là **thực hiện lại hoàn toàn quy trình cấu hình giấy phép**: lấy `ID Phiên bản` mới nhất, tạo `Khóa Giấy phép` mới và đặt nó trong hệ thống cục bộ.

### 5. Các Vấn đề Liên quan đến Di chuyển Môi trường

[H]Tôi đã di chuyển máy chủ/cơ sở dữ liệu của mình và các plugin thương mại ngừng hoạt động. Tôi nên làm gì?

[TL]Đây là vấn đề tương tự như trên. Máy chủ hoặc cơ sở dữ liệu là thông tin chính tạo nên "thẻ căn cước (`ID Phiên bản`)", và khi chúng thay đổi, `ID Phiên bản` sẽ thay đổi.

**Giải pháp**: Tương tự như trên, lấy `ID Phiên bản` mới, tạo `Khóa Giấy phép` mới và kích hoạt lại. Toàn bộ quy trình giống như cập nhật địa chỉ ID của bạn sau khi chuyển nhà.

### 6. Plugin Không Có Hiệu lực

[H]Tôi đã khởi động lại, tại sao các plugin thương mại vẫn không hoạt động?

[TL]Nếu bạn đã xác nhận cấu hình `Khóa Giấy phép` là chính xác, hãy thử khắc phục sự cố sau:

1. **Kiểm tra Mạng**: Đảm bảo máy chủ của bạn có thể truy cập kho lưu trữ npm của NocoBase.
2. **Kiểm tra Nhật ký**: Xem lại nhật ký khởi động NocoBase để tìm lỗi tải xuống plugin hoặc lỗi xác minh giấy phép.
3. **Thực thi Thủ công**: Nếu bạn đang sử dụng triển khai mã nguồn, hãy thực thi lại lệnh `yarn nocobase pkg download-pro` và quan sát đầu ra dòng lệnh.

### 7. Plugin thương mại không hiển thị sau khi kích hoạt trên hệ thống đang chạy?

**[H]** Tôi đã khởi động hệ thống NocoBase trước, sau đó nhập Khóa Giấy phép trong cài đặt. Việc kích hoạt thành công, vậy tại sao các plugin thương mại không xuất hiện?

**[TL]** Đây là hành vi dự kiến và là một câu hỏi rất phổ biến. NocoBase được thiết kế để kiểm tra giấy phép và tải các plugin tương ứng **khi khởi động dịch vụ**. Nếu bạn hoàn tất kích hoạt trong khi hệ thống đã chạy, bạn cần **khởi động lại dịch vụ NocoBase** để kích hoạt việc tải xuống và kích hoạt các plugin thương mại.

Nói một cách đơn giản, giấy phép giống như một "tấm vé" cho NocoBase, nhưng nó cần "vào lại cửa" (khởi động lại) để kiểm tra và sử dụng tấm vé này.

Vui lòng thực hiện thao tác khởi động lại theo phương pháp triển khai của bạn:

* **Đối với triển khai Docker**: Thực thi lệnh khởi động lại `docker compose restart app`.
* **Đối với triển khai mã nguồn hoặc `create-nocobase-app`**: Đầu tiên, dừng dịch vụ đang chạy trong terminal của bạn (thường bằng cách nhấn `Ctrl+C`), sau đó chạy lại lệnh khởi động, chẳng hạn như `yarn start`.

### 8. So sánh Giữa Phương thức Ủy quyền Cũ và Mới

[H]Quy trình này khác với phương thức tên người dùng/mật khẩu trước đây như thế nào?

[TL]Phương thức cũ đã để lộ trực tiếp mật khẩu tài khoản của bạn trong môi trường, điều này không đủ an toàn. Hệ thống `Khóa Giấy phép` mới có một số lợi ích:

1. **An toàn hơn**: Bạn không cần phải để lộ mật khẩu tài khoản chính của mình, chỉ sử dụng các khóa được liên kết với các môi trường cụ thể.
2. **Linh hoạt hơn**: Bạn có thể tạo các `Khóa Giấy phép` khác nhau cho các khách hàng hoặc dự án khác nhau, giúp việc quản lý dễ dàng hơn.
3. **Rõ ràng hơn**: Thông tin giấy phép rõ ràng trong nháy mắt, với tất cả các chi tiết được ghi lại trên nền tảng Dịch vụ.
