---
title: "NocoBase 2.0 正式发布"
description: "此版本在AI能力、应用架构、数据编辑体验和前端事件流方面进行了系统性改进，并全面适配了V2页面和核心功能。"
---

NocoBase 2.0 là một bản nâng cấp lớn tập trung vào **xây dựng các ứng dụng phức tạp và mở rộng triển khai**. Bản phát hành này mang đến những cải tiến có hệ thống về khả năng AI, kiến trúc ứng dụng, trải nghiệm chỉnh sửa dữ liệu và luồng sự kiện giao diện người dùng, cùng với sự thích ứng đầy đủ của các trang V2 và các tính năng cốt lõi.

## Tính năng mới

### Nhân viên AI

Khả năng AI hiện được tích hợp vào lõi như một công dân hạng nhất, với khả năng mở rộng thông qua hệ thống plugin:

- Được tích hợp vào lõi với khả năng mở rộng dựa trên plugin
- Nâng cấp và tối ưu hóa các phụ thuộc LangChain để có độ ổn định và khả năng mở rộng tốt hơn
- Đơn giản hóa luồng tương tác của nhân viên AI, giảm rào cản cấu hình và sử dụng

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**Tham khảo:**

- [Nhân viên AI](https://v2.docs.nocobase.com/ai-employees)

### Giám sát ứng dụng

Plugin Giám sát ứng dụng cung cấp **khả năng khám phá, lập lịch và quản lý tập trung nhiều phiên bản ứng dụng NocoBase**, phù hợp với các kịch bản triển khai đa ứng dụng và đa môi trường.

- Tự động khám phá ứng dụng và quản lý tập trung
- Cơ chế bộ nhớ dùng chung để cải thiện sự cộng tác giữa các phiên bản
- Triển khai kết hợp đa môi trường cho các yêu cầu phân phối phức tạp

**Bộ nhớ dùng chung**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**Triển khai kết hợp đa môi trường**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**Tham khảo:**

- [Quản lý đa ứng dụng](https://v2.docs.nocobase.com/multi-app/multi-app)

### Cải tiến Canvas Workflow

#### Sắp xếp lại nút bằng kéo và thả

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### Sao chép và dán nút

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### Bảng con (Chỉnh sửa nội tuyến / Chỉnh sửa popup)

Để đáp ứng các mức độ phức tạp khác nhau trong việc chỉnh sửa dữ liệu liên quan, NocoBase cung cấp hai chế độ chỉnh sửa bảng con:

- **Bảng con (Chỉnh sửa nội tuyến)**: Chỉnh sửa dữ liệu liên quan trực tiếp trong bảng để thao tác hiệu quả, lý tưởng cho việc nhập dữ liệu nhanh và cập nhật hàng loạt
- **Bảng con (Chỉnh sửa popup)**: Chỉnh sửa dữ liệu thông qua biểu mẫu popup với hỗ trợ các loại trường phức tạp hơn và logic xác thực, phù hợp cho các kịch bản có độ phức tạp cao

**Bảng con (Chỉnh sửa nội tuyến)**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**Bảng con (Chỉnh sửa popup)**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**Tham khảo:**

- [Bảng con (Chỉnh sửa nội tuyến)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [Bảng con (Chỉnh sửa popup)](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### Gán trường

Cơ chế gán trường mới hợp nhất và cải thiện **logic khởi tạo và ghi** cho dữ liệu biểu mẫu, nâng cao tính rõ ràng và nhất quán:

- **Hợp nhất** điểm vào cấu hình gán trường, giảm độ phức tạp của cấu hình phân tán
- Logic gán trường **không còn phụ thuộc vào loại thành phần trường**, làm cho hành vi dữ liệu ổn định và dễ dự đoán hơn
- Hỗ trợ **gán ở cấp độ trường trên các trường quan hệ**, cho phép mô hình hóa dữ liệu quan hệ phức tạp
- Cả hai chế độ gán **giá trị mặc định** và **giá trị hằng số**, bao gồm các kịch bản khởi tạo và ghi đè
- "Giá trị mặc định của trường" cũ không còn được dùng nữa; vui lòng di chuyển sang cơ chế gán trường mới

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**Tham khảo:** Gán trường (tài liệu sắp có)

### Thứ tự thực thi luồng sự kiện

Luồng sự kiện chạy theo thứ tự phân cấp **Sự kiện → Luồng → Bước**, với các hook tương ứng được kích hoạt trước và sau mỗi cấp độ để kiểm soát chi tiết và mở rộng.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**Tham khảo:**

- [Luồng sự kiện](https://v2.docs.nocobase.com/interface-builder/event-flow)

## Các tính năng được thích ứng với 2.0

### Chỉnh sửa hàng loạt

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**Tham khảo:**

- [Chỉnh sửa hàng loạt](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### Sao chép

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**Tham khảo:**

- [Sao chép](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### Chiều cao khối

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**Tham khảo:**

- [Chiều cao khối](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### Sắp xếp hàng bảng bằng kéo và thả

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**Tham khảo:**

- [Sắp xếp kéo thả](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### Phương pháp tải dữ liệu

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**Tham khảo:**

- [Phương pháp tải dữ liệu](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### Hiển thị trường quan hệ trong biểu mẫu

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**Tham khảo:**

- [Biểu mẫu](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### Hỗ trợ bản địa hóa trang (V2)

Các trang V2 hiện hỗ trợ đầy đủ bản địa hóa trên **trang, khối, hành động và trường**.

Sau khi kích hoạt plugin bản địa hóa, hệ thống sẽ tự động thu thập các mục dịch còn thiếu và hiển thị chúng trong danh sách quản lý bản địa hóa để bảo trì tập trung.

Trong các khối JS, sử dụng `ctx.t()` để lấy văn bản đã được bản địa hóa với phép nội suy biến:

```js
const label = ctx.t('Tên của bạn là {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Phê duyệt 2.0

Tất cả các luồng công việc phê duyệt mới được tạo đều sử dụng bố cục dựa trên khối 2.0. Các cấu hình 1.x hiện có vẫn được hỗ trợ. Để chuyển đổi phê duyệt 1.x sang bố cục 2.0, hãy chọn phiên bản v2 và cấu hình lại giao diện. Lưu ý rằng sau khi chuyển đổi, không thể quay lại 1.x.

#### Cấu hình giao diện người khởi tạo

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### Cấu hình giao diện người phê duyệt

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### CC (Carbon Copy) 2.0

Tất cả các nút CC mới được tạo đều sử dụng bố cục dựa trên khối 2.0 cho chế độ xem của người nhận. Các cấu hình 1.x hiện có vẫn được hỗ trợ. Để chuyển đổi CC 1.x sang bố cục 2.0, hãy chọn phiên bản v2 và cấu hình lại giao diện. Lưu ý rằng sau khi chuyển đổi, không thể quay lại 1.x.

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## Chưa có sẵn trong 2.0

Các tính năng sau chưa có sẵn trong 2.0 và sẽ được nâng cấp trong các bản phát hành trong tương lai:

| Tính năng                           | Giải pháp thay thế hiện tại |
| ----------------------------------- | --------------------------- |
| Yêu cầu tùy chỉnh                   | Nút Yêu cầu Workflow        |
| In trình duyệt                      | Hành động JS                |
| Biểu mẫu nhiều bước                | Khối JS                     |
| Khối bộ lọc cây                     | Khối JS                     |
| Khối Lịch                           | Khối JS                     |
| Biến tùy chỉnh                      | Luồng sự kiện               |
| Khối Gantt                          | Khối JS                     |
| Khối Kanban                         | Khối JS                     |
| Sao chép văn bản                    | Luồng sự kiện               |
| Cài đặt cột                         | Hành động JS                |
| Quy tắc liên kết kiểu               | Luồng sự kiện               |
| Phím tắt sao chép văn bản           | Luồng sự kiện               |
| Trường mã QR                        | Trường JS                   |
| Quét để nhập                        | Luồng sự kiện               |
| Nhúng NocoBase                      | —                           |
| Trường khu vực hành chính Trung Quốc | —                           |
| Trường mã                           | —                           |
| Biểu mẫu công khai                  | —                           |
| Việc cần làm của nút Thủ công Workflow | —                           |
| Sau khi gửi thành công              | Luồng sự kiện               |
| Mẫu dữ liệu                         | Luồng sự kiện               |
