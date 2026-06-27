---
title: "NocoBase v1.5.0 正式发布"
description: "核心优化、大规模数据导入/导出、邮件管理、模板打印等功能全面提升了系统性能和用户体验。"
---

## Các Tối Ưu Hóa Cốt Lõi

### Bật Liên Kết trong Trường Văn Bản Một Dòng

Chế độ mở hỗ trợ drawer, dialog và trang.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Khối Liên Kết Hỗ Trợ Thao Tác Liên Kết/Hủy Liên Kết

Giờ đây bạn có thể thực hiện các thao tác liên kết và hủy liên kết trực tiếp trong khối liên kết.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Gỡ Lỗi Luồng Công Việc

Giờ đây bạn có thể kích hoạt trực tiếp luồng công việc trong quá trình cấu hình để gỡ lỗi chúng.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Cải Thiện Tương Tác Di Động cho Thành Phần Ngày

Trải nghiệm tương tác được nâng cao cho các thành phần liên quan đến ngày trên thiết bị di động.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Tối Ưu Hóa Hiệu Suất Giao Diện

* Tối ưu hóa tốc độ tải màn hình ban đầu.
* Thay đổi công cụ xây dựng giao diện thành **rspack**.
* Giảm kích thước bundle của các tệp đầu vào cho các gói plugin khác nhau.
* Nâng cao hiệu suất hiển thị cho các bảng dữ liệu lớn.
* Giảm độ giật lag khi chuyển đổi menu.
* Giới thiệu các phương pháp tải theo nhu cầu với thư viện `lazy` và `useLazy` mới.

Dưới đây là phần giới thiệu ngắn gọn về cách sử dụng `lazy` và `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Xuất một component đơn lẻ:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Xuất nhiều component:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Xuất component mặc định:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Trả về một hook:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Trả về một thư viện:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## Plugin Mới

### Import Pro

Hỗ trợ các thao tác nhập không đồng bộ chạy trên một luồng riêng biệt. Tính năng này cho phép nhập khối lượng lớn dữ liệu với hiệu suất được nâng cao.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Tham khảo: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Cho phép các thao tác xuất không đồng bộ chạy trên một luồng riêng biệt, hỗ trợ xuất dữ liệu quy mô lớn cũng như xuất tệp đính kèm.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Tham khảo: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### In Mẫu

Plugin In Mẫu cho phép bạn chỉnh sửa các tệp mẫu bằng Word, Excel hoặc PowerPoint (hỗ trợ các định dạng `.docx`, `.xlsx` và `.pptx`). Bằng cách thiết lập các placeholder và cấu trúc logic trong mẫu, bạn có thể tạo động các tệp ở các định dạng định trước như `.docx`, `.xlsx`, `.pptx` và thậm chí cả `.pdf`. Chức năng này được áp dụng rộng rãi để tạo các tài liệu kinh doanh khác nhau, bao gồm báo giá, hóa đơn, hợp đồng, v.v.

**Các Tính Năng Chính**

* **Hỗ trợ đa định dạng**: Tương thích với các mẫu Word, Excel và PowerPoint để đáp ứng các nhu cầu tạo tài liệu đa dạng.
* **Điền dữ liệu động**: Tự động điền nội dung tài liệu dựa trên các placeholder và logic đã xác định.
* **Quản lý mẫu linh hoạt**: Dễ dàng thêm, sửa, xóa và phân loại mẫu để bảo trì và sử dụng tốt hơn.
* **Cú pháp mẫu phong phú**: Hỗ trợ thay thế cơ bản, truy cập mảng, vòng lặp, xuất có điều kiện và các cú pháp mẫu khác để tạo tài liệu phức tạp.
* **Hỗ trợ định dạng**: Cung cấp đầu ra có điều kiện, định dạng ngày tháng, định dạng số, v.v. để nâng cao tính rõ ràng và chuyên nghiệp của tài liệu.
* **Tùy chọn đầu ra hiệu quả**: Hỗ trợ tạo PDF trực tiếp để dễ dàng chia sẻ và in ấn.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Tham khảo: [In Mẫu](https://docs.nocobase.com/handbook/action-template-print)

### Nhật Ký Kiểm Toán

Plugin này ghi lại và theo dõi các hoạt động của người dùng cũng như lịch sử thao tác tài nguyên trong hệ thống.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Tham khảo: [Nhật Ký Kiểm Toán](https://docs.nocobase.com/handbook/audit-logger)

### Luồng Công Việc: Luồng Con

Tính năng này cho phép một luồng công việc gọi một quy trình khác. Bạn có thể sử dụng các biến từ luồng công việc hiện tại làm đầu vào cho luồng con, sau đó sử dụng đầu ra của luồng con làm biến trong các nút tiếp theo.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Tham khảo: [Luồng Công Việc: Luồng Con](https://docs.nocobase.com/handbook/workflow-subflow)

### Trình Quản Lý Email

Tích hợp tài khoản email Google hoặc Microsoft của bạn vào NocoBase để gửi, nhận, xem và quản lý email. Ngoài ra, email có thể được nhúng trực tiếp vào các trang.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Tham khảo: [Trình Quản Lý Email](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### Lưu Trữ Tệp: S3 (Pro)

Hỗ trợ các loại lưu trữ tệp tương thích với giao thức S3, bao gồm Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, v.v. Plugin này cũng hỗ trợ tải tệp trực tiếp và truy cập riêng tư.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Tham khảo: [Lưu Trữ Tệp: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
