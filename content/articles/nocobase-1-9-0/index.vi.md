---
title: "Công bố NocoBase v1.9.0"
description: "Cải thiện xác thực dữ liệu và lập lịch tác vụ, hỗ trợ tách rời dịch vụ và tắt máy an toàn để nâng cao độ ổn định và linh hoạt tổng thể của hệ thống."
---

## Tính năng mới

### Quy tắc xác thực trường

Hỗ trợ cấu hình nhiều quy tắc xác thực cho các trường — chẳng hạn như bắt buộc, định dạng, độ dài, phạm vi và biểu thức tùy chỉnh.
Dữ liệu đầu vào sẽ được tự động xác thực khi gửi biểu mẫu để đảm bảo tính chính xác và nhất quán.
Các quy tắc xác thực có thể được cấu hình linh hoạt trong phần cài đặt trường.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Tham khảo: [Xác thực trường](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Khối bảng hỗ trợ cài đặt cột

Khối bảng hiện đã có tính năng Cài đặt cột, cho phép người dùng điều chỉnh thứ tự cột, khả năng hiển thị và vị trí ghim mà không cần vào chế độ chỉnh sửa — giúp hiển thị dữ liệu linh hoạt và thân thiện hơn.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Chế độ kích hoạt "Trước khi dữ liệu được lưu" cho Phê duyệt

Phê duyệt hiện hỗ trợ chế độ kích hoạt "Trước khi dữ liệu được lưu" — khi được bật, dữ liệu sẽ không được lưu trữ khi bắt đầu phê duyệt và chỉ được lưu sau khi phê duyệt được thông qua.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Trình kích hoạt phê duyệt hiển thị biến ID phê duyệt

Trình kích hoạt phê duyệt hiện hiển thị biến ID phê duyệt, cho phép tham chiếu biến này trong các quy trình làm việc và quy trình tự động hóa để cấu hình linh hoạt hơn và theo dõi dữ liệu.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Trình quản lý tác vụ bất đồng bộ] Hỗ trợ tách dịch vụ qua biến môi trường và hàng đợi

Giới thiệu cơ chế tách dịch vụ mới, cho phép các dịch vụ tác vụ bất đồng bộ và quy trình làm việc chạy độc lập thông qua biến môi trường `WORKER_MODE` — hỗ trợ triển khai đa nút và tối ưu hóa hiệu suất.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Tham khảo: [Tách dịch vụ](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### Hàng đợi sự kiện mới để xử lý tin nhắn hàng đợi

Thêm hàng đợi sự kiện chuyên dụng để xử lý các tin nhắn hàng đợi của hệ thống, cải thiện khả năng xử lý tác vụ bất đồng bộ và độ tin cậy.

Tham khảo: [Chế độ cụm: Hàng đợi tin nhắn](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Hỗ trợ vòng đời tắt máy an toàn (Graceful Shutdown)

Giới thiệu cơ chế xử lý tắt máy an toàn.
Khi tiến trình ứng dụng nhận tín hiệu SIGTERM hoặc SIGINT, nó sẽ bắt đầu một chuỗi tắt máy thích hợp để ngăn ngừa các sự cố từ các hoạt động đang diễn ra.

## Cải tiến

### Bảng hệ thống sử dụng ID kiểu Snowflake 53-bit

Cập nhật ID của các bảng hệ thống trước đây sử dụng khóa chính tự động tăng mà không có tính duy nhất toàn cầu sang ID kiểu Snowflake 53-bit để nhận dạng duy nhất trên toàn cầu.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### Xem và tiếp tục tác vụ từ các quy trình làm việc đã bị vô hiệu hóa

Các khối tác vụ thủ công hiện hiển thị các tác vụ đang chờ xử lý ngay cả từ các quy trình làm việc đã bị vô hiệu hóa và cho phép người dùng tiếp tục xử lý chúng.

### Cải tiến Trình quản lý thư

* Dữ liệu thư hỗ trợ đồng bộ lại
* Cho phép thay đổi kích thước hình ảnh được chèn vào trình soạn thảo email.
* Trình soạn thảo văn bản giàu (Rich text) hiện hỗ trợ ngắt dòng mềm, cải thiện trải nghiệm định dạng email.
* Cải thiện hiệu suất danh sách email để thao tác mượt mà hơn.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Tối ưu hóa Mô-đun Quy trình làm việc

* Tối ưu hóa hiệu suất truy vấn trong quá trình thực thi hàng đợi quy trình làm việc bằng cách giới thiệu các trường và chỉ mục riêng biệt để truy xuất dữ liệu nhanh hơn.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
