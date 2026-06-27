---
title: "Công bố NocoBase 2.0-beta"
description: "Sau 8 tuần tinh chỉnh chuyên sâu, NocoBase 2.0 đã bước vào giai đoạn beta ổn định. Bản phát hành này mang đến những tối ưu hóa sâu cho AI Employee, Visualization 2.0 và Approval 2.0, đồng thời giới thiệu các tính năng hoàn toàn mới là UI Templates và Multi-app Architecture."
---

Sau 8 tuần làm việc chăm chỉ của đội ngũ NocoBase và tất cả các cộng tác viên, NocoBase 2.0-beta đã được phát hành đúng kế hoạch. Phiên bản này bao gồm các tinh chỉnh và thử nghiệm mở rộng cho các tính năng mới trong NocoBase 2.0, đưa 2.0 vào một giai đoạn ổn định hơn. Chúng tôi hoan nghênh những người dùng sớm sử dụng phiên bản này để thử nghiệm sản xuất và cung cấp phản hồi kịp thời về bất kỳ vấn đề hoặc đề xuất nào.

2.0-rc sẽ được phát hành trước ngày 11 tháng 2 năm 2026, với các thử nghiệm toàn diện hơn và các tính năng mới bổ sung. Hãy theo dõi.

## Tính năng mới

### AI Employees

Chúng tôi đã thực hiện những cải tiến đáng kể cho AI Employees, bao gồm:

- Tối ưu hóa khả năng của các AI Employees tích hợp sẵn
- Hỗ trợ truy cập các nguồn dữ liệu bên ngoài
- Hỗ trợ truy vấn lượng lớn dữ liệu
- Giữ nguyên định dạng gốc trong nội dung hội thoại
- Cải thiện thông báo lỗi

Hướng dẫn sử dụng: [AI Employees](https://v2.docs.nocobase.com/ai-employees)

![](https://static-docs.nocobase.com/20251102121036-2025-11-02-12-10-38.png)

### UI Templates

Phiên bản 2.0 beta giới thiệu tính năng UI Templates hoàn toàn mới. Mỗi loại template hỗ trợ cả sao chép và tham chiếu, bao gồm:

- Block Templates
- Field Templates
- Popup Templates

Đáng chú ý, Popup Templates cho phép bạn lưu toàn bộ nội dung popup (tất cả các tab và block trong các trang con) dưới dạng một template, giảm đáng kể công việc lặp lại so với phiên bản 1.x.

Hướng dẫn sử dụng: [UI Templates](https://v2.docs.nocobase.com/interface-builder/ui-templates)

![](https://static-docs.nocobase.com/edit-popup-select-20251228.png)

### Multi-App 2.0

Multi-App Management là giải pháp quản lý ứng dụng thống nhất của NocoBase để tạo và quản lý nhiều phiên bản ứng dụng NocoBase được cách ly vật lý trên một hoặc nhiều môi trường runtime. Thông qua App Supervisor, người dùng có thể tạo và duy trì nhiều ứng dụng từ một điểm truy cập thống nhất, đáp ứng nhu cầu của các doanh nghiệp và quy mô khác nhau. NocoBase hỗ trợ ba kiến trúc triển khai:

- **Single App**: Chỉ triển khai một phiên bản NocoBase, nơi tất cả các chức năng kinh doanh, dữ liệu và người dùng chạy trong cùng một ứng dụng.
- **Shared Memory Multi-App**: Nhiều ứng dụng có thể chạy đồng thời trong một phiên bản NocoBase. Mỗi ứng dụng độc lập, có thể kết nối với cơ sở dữ liệu riêng và có thể được tạo, khởi động và dừng riêng lẻ, nhưng chúng chia sẻ cùng một tiến trình và không gian bộ nhớ. Người dùng vẫn chỉ cần duy trì một phiên bản NocoBase.
- **Multi-Environment Hybrid Deployment**: Triển khai một NocoBase làm trung tâm quản lý thống nhất, đồng thời triển khai nhiều phiên bản NocoBase làm môi trường runtime ứng dụng để chạy các ứng dụng kinh doanh. Các ứng dụng khác nhau có thể chạy trên các nút hoặc cụm khác nhau.

Hướng dẫn sử dụng: [Multi-App](https://v2.docs.nocobase.com/multi-app/multi-app)

![](https://static-docs.nocobase.com/202512231215186.png)

### Multi-Space

Plugin Multi-Space cho phép cách ly logic để tạo nhiều không gian dữ liệu độc lập trong một phiên bản ứng dụng duy nhất, phù hợp với các tình huống như vận hành nhiều nhà máy hoặc nhiều cửa hàng với quy trình kinh doanh và cấu hình hệ thống nhất quán cao.

Hướng dẫn sử dụng: [Multi-Space](https://v2.docs.nocobase.com/multi-app/multi-space)

### Data Visualization 2.0

Phiên bản 1.x cung cấp các plugin trực quan hóa dữ liệu cơ bản dựa trên Ant Design Charts và ECharts cho nhu cầu trực quan hóa dữ liệu cơ bản. Tuy nhiên, nó còn hạn chế trong việc xử lý các biểu đồ phức tạp, tương tác cá nhân hóa và các tình huống liên kết dữ liệu.

NocoBase 2.0 giới thiệu một plugin trực quan hóa dữ liệu hoàn toàn mới dựa trên ECharts, hỗ trợ chế độ cấu hình trực quan cũng như chế độ SQL và JSON. Nó hỗ trợ các sự kiện, giúp dễ dàng xử lý các biểu đồ phức tạp, liên kết nhiều biểu đồ và các tình huống khoan sâu dữ liệu.

Đừng lo lắng về SQL và JSON quá phức tạp—AI Employee Nathan sẵn sàng trợ giúp.

Hướng dẫn sử dụng: [Data Visualization](https://v2.docs.nocobase.com/data-visualization)

![](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

### Workflow

#### Nút "Multi-Condition Branch" mới

Tương tự như câu lệnh `switch / case` hoặc `if / else if` trong các ngôn ngữ lập trình. Hệ thống đánh giá tuần tự nhiều điều kiện đã được cấu hình và chỉ thực thi nhánh thỏa mãn một điều kiện. Nút này sẽ thay thế một số chức năng của nút "Parallel Branch". Chúng tôi khuyên bạn nên thay thế các workflow sử dụng cả nút điều kiện và song song bằng nút "Multi-Condition Branch" mới.

![20251123224209](https://static-docs.nocobase.com/20251123224209.png)

Hướng dẫn sử dụng: [Multi-Condition Branch](https://v2.docs.nocobase.com/workflow/nodes/multi-conditions)

### Approval 2.0

Hầu hết các cấu hình block trong plugin Approval đã được tái cấu trúc bằng FlowEngine, hỗ trợ cấu hình và sử dụng linh hoạt hơn. Một số tính năng mới cũng đã được thêm vào.

Hướng dẫn sử dụng: [Approval](https://v2.docs.nocobase.com/workflow/triggers/approval)

#### Tùy chọn hiển thị Ảnh chụp dữ liệu (Snapshot) hoặc Trạng thái mới nhất (Latest) trong giao diện xử lý phê duyệt

* **Snapshot**
  Trong quá trình phê duyệt, người yêu cầu và người phê duyệt thấy trạng thái bản ghi tại thời điểm họ tham gia và sau khi gửi, họ chỉ có thể thấy các bản ghi mà họ đã sửa đổi—họ sẽ không thấy các bản cập nhật do người khác thực hiện sau đó.
* **Latest**
  Trong quá trình phê duyệt, người yêu cầu và người phê duyệt luôn thấy phiên bản mới nhất của bản ghi trong suốt quá trình, bất kể trạng thái của bản ghi trước hành động của họ. Sau khi quy trình kết thúc, họ sẽ thấy phiên bản cuối cùng của bản ghi.

#### Hỗ trợ cấu hình phạm vi dữ liệu người khởi tạo

Bạn có thể cấu hình quyền dựa trên phạm vi người dùng để xác định người dùng nào có thể khởi tạo phê duyệt.

![20251226114623](https://static-docs.nocobase.com/20251226114623.png)

#### Trong Trung tâm việc cần làm (To-Do Center), hỗ trợ cấu hình các trường dữ liệu nghiệp vụ trong thẻ danh sách "My Initiated" và "My Approvals"

Thẻ "My Initiated" cho phép cấu hình linh hoạt thông tin phê duyệt và các trường dữ liệu nghiệp vụ.

![20251231222654](https://static-docs.nocobase.com/20251231222654.png)

Thẻ "My Approvals" cho phép cấu hình linh hoạt các tác vụ phê duyệt và các trường dữ liệu nghiệp vụ.

![20251231222815](https://static-docs.nocobase.com/20251231222815.png)

### Email Manager 2.0

Plugin Email Manager đã được tái cấu trúc bằng FlowEngine, cho phép AI Employees tham gia liền mạch vào việc tóm tắt, phân tích và soạn thảo email. Các tính năng mới như tự động lưu bản nháp cũng đã được thêm vào.

Hướng dẫn sử dụng: [Email Manager](https://v2.docs.nocobase.com/email-manager)

![](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

### Record History

Plugin Record History theo dõi các thay đổi dữ liệu bằng cách tự động lưu các ảnh chụp nhanh và bản ghi khác biệt cho các thao tác tạo, cập nhật và xóa, giúp người dùng nhanh chóng truy xuất nguồn gốc thay đổi dữ liệu và kiểm tra các thao tác.

Hướng dẫn sử dụng: [Record History](https://v2.docs.nocobase.com/record-history/)

![](https://static-docs.nocobase.com/202511011346400.png)

---

## Giải pháp

NocoBase 2.0 cung cấp các mẫu giải pháp sẵn sàng sử dụng để nhanh chóng xây dựng các hệ thống kinh doanh.

### Hệ thống Ticketing thông minh

Một nền tảng quản lý ticket được điều khiển bởi AI, bao gồm:

- **Tích hợp hợp nhất đa nguồn**: Biểu mẫu công khai, cổng thông tin khách hàng, phân tích email, API/Webhook
- **Nhóm AI Employee**: Sam (định tuyến), Grace (trả lời), Max (kiến thức), Lexi (dịch thuật)...
- **Giám sát SLA đầy đủ**: Bốn mức ưu tiên P0-P3 với cảnh báo leo thang tự động
- **Tự luân chuyển kiến thức**: Ticket tự động trở thành bài viết kiến thức sau khi được giải quyết

Tài liệu giải pháp: https://v2.docs.nocobase.com/solution/ticket-system/

![ticketing-imgs-2026-01-01-00-46-12](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-46-12.jpg)

### CRM Quản lý khách hàng (Xem trước)

> **Ghi chú phiên bản**: Phiên bản hiện tại dựa trên 1.x với giao diện người dùng phía trước được điều chỉnh một phần cho 2.0, **chỉ dành cho mục đích học tập và xem trước**.

NocoBase CRM là một nền tảng quản lý quan hệ khách hàng không cần code, linh hoạt và mạnh mẽ, bao gồm:

- **Quản lý khách hàng**: Thông tin khách hàng, danh bạ, phân loại khách hàng
- **Kênh bán hàng**: Quản lý khách hàng tiềm năng, theo dõi cơ hội, kênh bán hàng
- **Quản lý đơn hàng**: Báo giá, đơn hàng, hợp đồng
- **Phân tích dữ liệu**: Bảng điều khiển, báo cáo, trực quan hóa dữ liệu

Tài liệu giải pháp: https://v2.docs.nocobase.com/solution/crm/

Bản demo trực tiếp: https://demo.nocobase.com/new

![ticketing-imgs-2026-01-01-00-47-06](https://static-docs.nocobase.com/ticketing-imgs-2026-01-01-00-47-06.jpg)

## 2.0-beta so với 1.x

### Chú giải

- ✅ Đã hỗ trợ: Các tính năng của 1.x đã được điều chỉnh trong 2.0
- 🆕 Tính năng mới: Các tính năng mới trong 2.0
- ✨ Cải tiến: Các tính năng được cải thiện so với 1.0
- 🔄 Đang phát triển: Các tính năng đang được phát triển
- 🚀 Đang tối ưu hóa: Đã hỗ trợ nhưng cần cải thiện
- ❌ Không hỗ trợ: Các tính năng không được hỗ trợ trong 2.0
- ⚠️ Không dùng nữa: Các tính năng không còn được dùng nữa
- P0/P1/P2: Mức độ ưu tiên của tính năng
  - P0: Sắp ra mắt
  - P1: Sẽ được hỗ trợ trước khi phát hành chính thức 2.0
  - P2: Sẽ được hỗ trợ sau khi phát hành chính thức 2.0

### Trình xây dựng giao diện

#### Routes & Menus


| Danh mục      | Tính năng           | Trạng thái         | Mức ưu tiên | Ghi chú |
| ------------- | ----------------- | -------------- | -------- | ----- |
| Thêm mục menu | Nhóm             | ✅ Đã hỗ trợ   | -        | -     |
| Thêm mục menu | Trang cổ điển (v1) | ✅ Đã hỗ trợ   | -        | -     |
| Thêm mục menu | Trang hiện đại (v2)  | 🆕 Tính năng mới | -        | -     |
| Thêm mục menu | Liên kết              | ✅ Đã hỗ trợ   | -        | -     |

#### Pages


| Danh mục      | Tính năng            | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------- | ------------------ | ---------------- | -------- | ----- |
| Cài đặt trang | Hiển thị tiêu đề trang | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt trang | Chỉnh sửa tiêu đề trang    | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt trang | Bật tab trang   | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt trang | Sao chép liên kết nhúng | ❌ Không hỗ trợ | -        | -     |
| Cài đặt trang | Bật tiêu đề trang | ⚠️ Không dùng nữa  | -        | -     |
| Kéo thả bố cục   | Bố cục kéo thả block  | ✨ Cải tiến      | -        | -     |

#### Thêm Block

##### Block dữ liệu


| Tính năng         | Trạng thái           | Mức ưu tiên | Ghi chú |
| --------------- | ---------------- | -------- | ----- |
| Bảng           | ✅ Đã hỗ trợ     | -        | -     |
| Biểu mẫu (Chỉnh sửa)     | ✅ Đã hỗ trợ     | -        | -     |
| Biểu mẫu (Thêm mới)  | ✅ Đã hỗ trợ     | -        | -     |
| Chi tiết         | ✅ Đã hỗ trợ     | -        | -     |
| Danh sách            | ✅ Đã hỗ trợ     | -        | -     |
| Thẻ lưới       | ✅ Đã hỗ trợ     | -        | -     |
| Bình luận        | ✅ Đã hỗ trợ     | -        | -     |
| Bản đồ             | ✅ Đã hỗ trợ     | -        | -     |
| Biểu đồ          | ✨ Cải tiến      | -        | -     |
| Lịch            | ❌ Không hỗ trợ | -        | -     |
| Gantt           | ❌ Không hỗ trợ | -        | -     |
| Kanban          | ❌ Không hỗ trợ | -        | -     |
| Biểu mẫu nhiều bước | ❌ Không hỗ trợ | -        | -     |

##### Block bộ lọc


| Tính năng  | Trạng thái           | Mức ưu tiên | Ghi chú |
| -------- | ---------------- | -------- | ----- |
| Biểu mẫu     | ✨ Cải tiến      | -        | -     |
| Thu gọn | ❌ Không hỗ trợ | -        | -     |
| Cây     | ❌ Không hỗ trợ | -        | -     |

##### Block khác


| Tính năng             | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------- | ---------------- | -------- | ----- |
| Mẫu block      | 🆕 Tính năng mới   | -        | -     |
| Block JS            | 🆕 Tính năng mới   | -        | -     |
| Iframe              | ✅ Đã hỗ trợ     | -        | -     |
| Bảng hành động        | ✅ Đã hỗ trợ     | -        | -     |
| Markdown            | ✨ Cải tiến      | -        | -     |
| Lịch sử bản ghi      | 🆕 Tính năng mới   | -        | -     |
| Email               | ✅ Đã hỗ trợ     | -        | -     |
| Workflow > Việc cần làm    | ❌ Không hỗ trợ | -        | -     |
| Workflow > Phê duyệt | 🔄 Đang phát triển   | P0       | -     |

#### Tabs


| Danh mục     | Tính năng  | Trạng thái         | Mức ưu tiên | Ghi chú |
| ------------ | -------- | -------------- | -------- | ----- |
| Cài đặt tab | Chỉnh sửa tab | ✅ Đã hỗ trợ   | -        | -     |
| Cài đặt tab | Sao chép UID | 🆕 Tính năng mới | -        | -     |
| Cài đặt tab | Xóa   | ✅ Đã hỗ trợ   | -        | -     |

#### Block Bảng


| Danh mục                       | Tính năng                      | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------------------ | ---------------------------- | ---------------- | -------- | ----- |
| Cài đặt bảng                 | Tiêu đề & mô tả          | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Quy tắc liên kết block          | ✨ Cải tiến      | -        | -     |
| Cài đặt bảng                 | Chiều cao block                 | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt bảng                 | Bật sắp xếp kéo thả | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt bảng                 | Trường sắp xếp kéo thả  | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt bảng                 | Chế độ tải dữ liệu            | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt bảng                 | Bật chỉnh sửa nhanh            | 🆕 Tính năng mới   | -        | -     |
| Cài đặt bảng                 | Hiển thị số thứ tự hàng             | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Kích thước trang                    | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Phạm vi dữ liệu                   | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Sắp xếp mặc định              | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Bật bảng dạng cây            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Mở rộng tất cả hàng theo mặc định   | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Mật độ bảng                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng                 | Lưu dưới dạng mẫu             | 🆕 Tính năng mới   | -        | -     |
| Cài đặt bảng                 | Sao chép UID                     | 🆕 Tính năng mới   | -        | -     |
| Cài đặt bảng                 | Xóa                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Thêm mới                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Xóa                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Bộ lọc                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Liên kết                         | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Popup                        | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Làm mới                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Chỉnh sửa hàng loạt                    | ❌ Không hỗ trợ | P1       | -     |
| Hành động bảng > Hành động toàn cục | Cập nhật hàng loạt                  | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Xuất                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Nhập                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động toàn cục | Yêu cầu tùy chỉnh               | ❌ Không hỗ trợ | P2       | -     |
| Hành động bảng > Hành động toàn cục | Cài đặt cột              | ❌ Không hỗ trợ | -        | -     |
| Hành động bảng > Hành động toàn cục | Nhân viên AI                 | 🆕 Tính năng mới   | -        | -     |
| Hành động bảng > Hành động toàn cục | Hành động JS                    | 🆕 Tính năng mới   | -        | -     |
| Hành động bảng > Hành động hàng    | Xem                         | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Chỉnh sửa                         | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Cập nhật bản ghi                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Xóa                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Popup                        | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Liên kết                         | ✅ Đã hỗ trợ     | -        | -     |
| Hành động bảng > Hành động hàng    | Nhân bản                    | ❌ Không hỗ trợ | P2       | -     |
| Hành động bảng > Hành động hàng    | Yêu cầu tùy chỉnh               | ❌ Không hỗ trợ | P2       | -     |
| Hành động bảng > Hành động hàng    | Nhân viên AI                 | 🆕 Tính năng mới   | -        | -     |
| Hành động bảng > Hành động hàng    | Hành động JS                    | 🆕 Tính năng mới   | -        | -     |
| Cột bảng                  | Hiển thị trường bộ sưu tập    | ✅ Đã hỗ trợ     | -        | -     |
| Cột bảng                  | Hiển thị trường liên kết   | ✅ Đã hỗ trợ     | -        | -     |
| Cột bảng > Cột khác  | Trường JS                     | 🆕 Tính năng mới   | -        | -     |
| Cột bảng > Cột khác  | Cột JS                    | 🆕 Tính năng mới   | -        | -     |
| Cột bảng > Cột khác  | Hành động                      | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Tiêu đề cột                 | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt cột bảng          | Chú thích                      | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt cột bảng          | Chiều rộng cột                 | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Bật chỉnh sửa nhanh            | 🆕 Tính năng mới   | -        | -     |
| Cài đặt cột bảng          | Có thể sắp xếp                     | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt cột bảng          | Cố định                        | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt cột bảng          | Kiểu                        | ❌ Không hỗ trợ | P2       | -     |
| Cài đặt cột bảng          | Chế độ hiển thị                 | 🆕 Tính năng mới   | -        | -     |
| Cài đặt cột bảng          | Hiển thị nút sao chép          | ❌ Không hỗ trợ | -        | -     |
| Cài đặt cột bảng          | Dấu ba chấm khi tràn văn bản    | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Thành phần trường              | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Chế độ kết xuất                  | 🆕 Tính năng mới   | -        | -     |
| Cài đặt cột bảng          | Bật nhấp để mở         | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Popup chỉnh sửa                   | ✨ Cải tiến      | -        | -     |
| Cài đặt cột bảng          | Sao chép UID                     | 🆕 Tính năng mới   | -        | -     |
| Cài đặt cột bảng          | Xóa                       | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt cột bảng          | Ẩn cột                  | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt cột bảng          | Kết nối block dữ liệu          | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt cột bảng          | Lưu dưới dạng mẫu tham chiếu   | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt cột bảng          | Lưu dưới dạng mẫu kế thừa   | ⚠️ Không dùng nữa  | -        | -     |

#### Block Biểu mẫu Thêm & Chỉnh sửa


| Danh mục                                     | Tính năng                               | Trạng thái           | Mức ưu tiên | Ghi chú |
| -------------------------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Cài đặt biểu mẫu                                | Tiêu đề & mô tả                   | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt biểu mẫu                                | Chiều cao block                          | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt biểu mẫu                                | Mẫu dữ liệu biểu mẫu                   | ❌ Không hỗ trợ | -        | -     |
| Cài đặt biểu mẫu                                | Giá trị khởi tạo biểu mẫu                   | 🔄 Đang phát triển   | P1       | -     |
| Cài đặt biểu mẫu                                | Bố cục                                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt biểu mẫu                                | Quy tắc liên kết block                   | ✨ Cải tiến      | -        | -     |
| Cài đặt biểu mẫu                                | Quy tắc liên kết trường                   | 🔄 Đang phát triển   | P2       | -     |
| Cài đặt biểu mẫu                                | Phạm vi dữ liệu                            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt biểu mẫu                                | Bật bản nháp                         | 🆕 Tính năng mới   | -        | -     |
| Cài đặt biểu mẫu                                | Lưu dưới dạng mẫu                      | 🆕 Tính năng mới   | -        | -     |
| Cài đặt biểu mẫu                                | Chuyển đổi tham chiếu thành bản sao        | 🆕 Tính năng mới   | -        | -     |
| Cài đặt biểu mẫu                                | Chuyển đổi trường tham chiếu thành bản sao | 🆕 Tính năng mới   | -        | -     |
| Cài đặt biểu mẫu                                | Sao chép UID                              | 🆕 Tính năng mới   | -        | -     |
| Cài đặt biểu mẫu                                | Xóa                                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt biểu mẫu                                | Lưu dưới dạng mẫu tham chiếu            | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt biểu mẫu                                | Lưu dưới dạng mẫu kế thừa            | ⚠️ Không dùng nữa  | -        | -     |
| Mục trường biểu mẫu                             | Hiển thị trường bộ sưu tập             | ✅ Đã hỗ trợ     | -        | -     |
| Mục trường biểu mẫu                             | Hiển thị trường liên kết            | ❌ Không hỗ trợ | P2       | -     |
| Mục trường biểu mẫu > Khác                    | Mẫu trường                        | 🆕 Tính năng mới   | -        | -     |
| Mục trường biểu mẫu > Khác                    | Mục JS                               | 🆕 Tính năng mới   | -        | -     |
| Mục trường biểu mẫu > Khác                    | Dấu phân cách                               | ✨ Cải tiến      | -        | -     |
| Mục trường biểu mẫu > Khác                    | Markdown                              | ✨ Cải tiến      | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Hiển thị nhãn                            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Nhãn                                 | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Chú thích                               | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Mô tả                           | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Giá trị mặc định                         | 🚀 Đang tối ưu hóa    | P0       | -     |
| Cài đặt mục trường biểu mẫu                     | Xác thực                            | ✨ Cải tiến      | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Bắt buộc                              | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Chế độ hiển thị                          | ✨ Cải tiến      | -        | -     |
| Cài đặt mục trường biểu mẫu > Biểu mẫu con           | Nhiều                              | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt mục trường biểu mẫu > Biểu mẫu con           | Quy tắc liên kết trường                   | 🔄 Đang phát triển   | P2       | -     |
| Cài đặt mục trường biểu mẫu > Bảng con          | Quy tắc liên kết trường                   | ❌ Không hỗ trợ | P2       | -     |
| Cài đặt mục trường biểu mẫu > Biểu mẫu con (Popover) | -                                     | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Sao chép UID                              | 🆕 Tính năng mới   | -        | -     |
| Cài đặt mục trường biểu mẫu                     | Xóa                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động biểu mẫu                                 | Gửi                                | 🚀 Đang tối ưu hóa    | P1       | -     |
| Hành động biểu mẫu                                 | Kích hoạt workflow                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động biểu mẫu                                 | Popup                                 | ❌ Không hỗ trợ | P1       | -     |
| Hành động biểu mẫu                                 | Yêu cầu tùy chỉnh                        | ❌ Không hỗ trợ | P2       | -     |
| Hành động biểu mẫu                                 | Nhân viên AI                          | 🆕 Tính năng mới   | -        | -     |
| Hành động biểu mẫu                                 | Hành động JS                             | 🆕 Tính năng mới   | -        | -     |

#### Block Chi tiết


| Danh mục                                                | Tính năng                    | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------------------------------------------- | -------------------------- | ---------------- | -------- | ----- |
| Cài đặt chi tiết                                        | Tiêu đề & mô tả        | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt chi tiết                                        | Chiều cao block               | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt chi tiết                                        | Quy tắc liên kết block        | ✨ Cải tiến      | -        | -     |
| Cài đặt chi tiết                                        | Chế độ tải dữ liệu          | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt chi tiết                                        | Bố cục                     | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt chi tiết                                        | Phạm vi dữ liệu                 | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt chi tiết                                        | Sắp xếp mặc định            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt chi tiết                                        | Quy tắc liên kết trường        | 🚀 Đang tối ưu hóa    | -        | -     |
| Cài đặt chi tiết                                        | Lưu dưới dạng mẫu           | 🆕 Tính năng mới   | -        | -     |
| Cài đặt chi tiết                                        | Sao chép UID                   | 🆕 Tính năng mới   | -        | -     |
| Cài đặt chi tiết                                        | Xóa                     | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt chi tiết                                        | Lưu dưới dạng mẫu tham chiếu | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt chi tiết                                        | Lưu dưới dạng mẫu kế thừa | ⚠️ Không dùng nữa  | -        | -     |
| Hành động chi tiết                                         | Xem                       | 🆕 Tính năng mới   | -        | -     |
| Hành động chi tiết                                         | Chỉnh sửa                       | ✅ Đã hỗ trợ     | -        | -     |
| Hành động chi tiết                                         | Mở popup                 | ✅ Đã hỗ trợ     | -        | -     |
| Hành động chi tiết                                         | Cập nhật bản ghi              | ✅ Đã hỗ trợ     | -        | -     |
| Hành động chi tiết                                         | Xóa                     | ✅ Đã hỗ trợ     | -        | -     |
| Hành động chi tiết                                         | Liên kết                       | 🆕 Tính năng mới   | -        | -     |
| Hành động chi tiết                                         | In mẫu             | ✅ Đã hỗ trợ     | -        | -     |
| Hành động chi tiết                                         | In                      | ❌ Không hỗ trợ | -        | -     |
| Hành động chi tiết                                         | Yêu cầu tùy chỉnh             | ❌ Không hỗ trợ | P2       | -     |
| Hành động chi tiết                                         | Kích hoạt workflow           | 🆕 Tính năng mới   | -        | -     |
| Hành động chi tiết                                         | Nhân viên AI               | 🆕 Tính năng mới   | -        | -     |
| Hành động chi tiết                                         | Hành động JS                  | 🆕 Tính năng mới   | -        | -     |
| Trường chi tiết                                          | Hiển thị trường bộ sưu tập  | ✅ Đã hỗ trợ     | -        | -     |
| Trường chi tiết                                          | Hiển thị trường liên kết | ✅ Đã hỗ trợ     | -        | -     |
| Trường chi tiết > Khác                                 | Mẫu trường             | 🆕 Tính năng mới   | -        | -     |
| Trường chi tiết > Khác                                 | Trường JS                   | 🆕 Tính năng mới   | -        | -     |
| Trường chi tiết > Khác                                 | Mục JS                    | 🆕 Tính năng mới   | -        | -     |
| Trường chi tiết > Khác                                 | Dấu phân cách                    | ✅ Đã hỗ trợ     | -        | -     |
| Trường chi tiết > Khác                                 | Markdown                   | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết                                   | Hiển thị tên trường            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết                                   | Tên trường                 | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết                                   | Chú thích                    | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết                                   | Mô tả                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết                                   | Kiểu                      | ❌ Không hỗ trợ | P2       | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Trường tiêu đề                | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Kiểu                      | ❌ Không hỗ trợ | P2       | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Chế độ hiển thị               | 🆕 Tính năng mới   | -        | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Dấu ba chấm khi tràn văn bản  | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Bật nhấp để mở       | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết > Hiển thị tiêu đề (trường có thể nhấp) | Cài đặt popup             | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết > Bảng con                        | Kích thước trang                  | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt mục chi tiết > Bảng con                        | Đặt quy tắc sắp xếp          | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục chi tiết > Bảng con                        | Bật số thứ tự hàng         | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục chi tiết > Bảng con                        | Quy tắc liên kết              | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục chi tiết > Chi tiết con                      | Quy tắc liên kết              | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục chi tiết > Chi tiết con                      | Bố cục                     | ❌ Không hỗ trợ | -        | -     |
| Cài đặt mục chi tiết > Văn bản lớn                      | Dấu ba chấm khi tràn văn bản  | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết > Văn bản lớn                      | Chế độ kết xuất                | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết > Xem trước                         | -                          | ✨ Cải tiến      | -        | -     |
| Cài đặt mục chi tiết                                   | Sao chép UID                   | 🆕 Tính năng mới   | -        | -     |
| Cài đặt mục chi tiết                                   | Xóa                     | ✅ Đã hỗ trợ     | -        | -     |

#### Block Danh sách


| Danh mục                      | Tính năng                               | Trạng thái           | Mức ưu tiên | Ghi chú |
| ----------------------------- | ------------------------------------- | ---------------- | -------- | ----- |
| Cài đặt danh sách                 | Tiêu đề & mô tả                   | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Chiều cao block                          | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt danh sách                 | Quy tắc liên kết block                   | ✨ Cải tiến      | -        | -     |
| Cài đặt danh sách                 | Kích thước trang                             | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Phạm vi dữ liệu                            | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Sắp xếp mặc định                       | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Chế độ tải dữ liệu                     | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Bố cục                                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Lưu dưới dạng mẫu                      | 🆕 Tính năng mới   | -        | -     |
| Cài đặt danh sách                 | Chuyển đổi tham chiếu thành bản sao        | 🆕 Tính năng mới   | -        | -     |
| Cài đặt danh sách                 | Chuyển đổi trường tham chiếu thành bản sao | 🆕 Tính năng mới   | -        | -     |
| Cài đặt danh sách                 | Sao chép UID                              | 🆕 Tính năng mới   | -        | -     |
| Cài đặt danh sách                 | Xóa                                | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt danh sách                 | Lưu dưới dạng mẫu tham chiếu            | ⚠️ Không dùng nữa  | -        | -     |
| Cài đặt danh sách                 | Lưu dưới dạng mẫu kế thừa            | ⚠️ Không dùng nữa  | -        | -     |
| Hành động danh sách > Hành động toàn cục | Thêm mới                               | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Xóa                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Bộ lọc                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Liên kết                                  | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | Popup                                 | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | Làm mới                               | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Cập nhật hàng loạt                           | 🚀 Đang tối ưu hóa    | -        | -     |
| Hành động danh sách > Hành động toàn cục | Xuất                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Nhập                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Xuất tệp đính kèm                    | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | Gửi email                            | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | In mẫu                        | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | Kích hoạt workflow                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động toàn cục | Yêu cầu tùy chỉnh                        | ❌ Không hỗ trợ | P2       | -     |
| Hành động danh sách > Hành động toàn cục | Nhân viên AI                          | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động toàn cục | Hành động JS                             | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động hàng    | Xem                                  | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Xóa                                | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Chỉnh sửa                                  | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Liên kết                                  | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Popup                                 | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Cập nhật bản ghi                         | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | In mẫu                        | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Kích hoạt workflow                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động danh sách > Hành động hàng    | Yêu cầu tùy chỉnh                        | ❌ Không hỗ trợ | P2       | -     |
| Hành động danh sách > Hành động hàng    | Nhân viên AI                          | 🆕 Tính năng mới   | -        | -     |
| Hành động danh sách > Hành động hàng    | Hành động JS                             | 🆕 Tính năng mới   | -        | -     |
| Trường danh sách                   | Hiển thị trường bộ sưu tập             | ✅ Đã hỗ trợ     | -        | -     |
| Trường danh sách                   | Hiển thị trường liên kết            | ✅ Đã hỗ trợ     | -        | -     |
| Trường danh sách > Khác          | Trường JS                              | 🆕 Tính năng mới   | -        | -     |
| Trường danh sách > Khác          | Mục JS                               | 🆕 Tính năng mới   | -        | -     |
| Trường danh sách > Khác          | Dấu phân cách                               | ✅ Đã hỗ trợ     | -        | -     |
| Trường danh sách > Khác          | Markdown                              | 🆕 Tính năng mới   | -        | -     |

#### Block Khác


| Tính năng               | Trạng thái           | Mức ưu tiên | Ghi chú |
| --------------------- | ---------------- | -------- | ----- |
| Block thẻ lưới       | ✅ Đã hỗ trợ     | -        | -     |
| Block bình luận        | ✅ Đã hỗ trợ     | -        | -     |
| Block bản đồ             | ✅ Đã hỗ trợ     | -        | -     |
| Block biểu đồ          | ✨ Cải tiến      | -        | -     |
| Block lịch            | ❌ Không hỗ trợ | -        | -     |
| Block Gantt           | ❌ Không hỗ trợ | -        | -     |
| Block Kanban          | ❌ Không hỗ trợ | -        | -     |
| Block biểu mẫu nhiều bước | ❌ Không hỗ trợ | -        | -     |
| Biểu mẫu bộ lọc           | ✨ Cải tiến      | -        | -     |
| Thu gọn bộ lọc       | ❌ Không hỗ trợ | -        | -     |
| Bộ lọc cây           | ❌ Không hỗ trợ | -        | -     |
| Mẫu block        | 🆕 Tính năng mới   | -        | -     |
| Block JS              | 🆕 Tính năng mới   | -        | -     |
| Iframe                | ✅ Đã hỗ trợ     | -        | -     |
| Bảng hành động          | ✅ Đã hỗ trợ     | -        | -     |
| Markdown              | ✨ Cải tiến      | -        | -     |
| Lịch sử bản ghi        | 🆕 Tính năng mới   | -        | -     |
| Thư                  | ✅ Đã hỗ trợ     | -        | -     |
| Workflow              | 🔄 Đang phát triển   | P0       | -     |

#### Bảng hành động


| Danh mục              | Tính năng                   | Trạng thái           | Mức ưu tiên | Ghi chú |
| --------------------- | ------------------------- | ---------------- | -------- | ----- |
| Cài đặt bảng hành động | Tiêu đề & mô tả       | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng hành động | Chiều cao block              | ❌ Không hỗ trợ | P1       | -     |
| Cài đặt bảng hành động | Quy tắc liên kết block       | ✨ Cải tiến      | -        | -     |
| Cài đặt bảng hành động | Bố cục                    | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng hành động | Dấu ba chấm khi tràn văn bản | ✅ Đã hỗ trợ     | -        | -     |
| Cài đặt bảng hành động | Lưu dưới dạng mẫu          | 🆕 Tính năng mới   | -        | -     |
| Cài đặt bảng hành động | Sao chép UID                  | 🆕 Tính năng mới   | -        | -     |
| Cài đặt bảng hành động | Xóa                    | ✅ Đã hỗ trợ     | -        | -     |
| Hành động               | Popup                     | ✅ Đã hỗ trợ     | -        | -     |
| Hành động               | Liên kết                      | ✅ Đã hỗ trợ     | -        | -     |
| Hành động               | Quét mã QR              | ✅ Đã hỗ trợ     | -        | -     |
| Hành động               | Cập nhật bản ghi             | ❌ Không hỗ trợ | P2       | -     |
| Hành động               | Yêu cầu tùy chỉnh            | ❌ Không hỗ trợ | P2       | -     |
| Hành động               | Kích hoạt workflow          | ❌ Không hỗ trợ | P2       | -     |
| Hành động               | Hành động JS                 | 🆕 Tính năng mới   | -        | -     |

#### Trường

##### Chế độ chỉ đọc


| Danh mục           | Tính năng             | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------ | ------------------- | ---------------- | -------- | ----- |
| Trường có thể nhấp    | Hiển thị văn bản        | ✅ Đã hỗ trợ     | -        | -     |
| Trường có thể nhấp    | Hiển thị số      | ✅ Đã hỗ trợ     | -        | -     |
| Trường có thể nhấp    | Hiển thị ngày        | ✅ Đã hỗ trợ     | -        | -     |
| Trường có thể nhấp    | Hiển thị thời gian        | ✅ Đã hỗ trợ     | -        | -     |
| Trường có thể nhấp    | Hiển thị enum        | ✅ Đã hỗ trợ     | -        | -     |
| Trường có thể nhấp    | Hiển thị quan hệ    | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị văn bản lớn | Hiển thị văn bản đa dạng thức   | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị văn bản lớn | Hiển thị Markdown    | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị văn bản lớn | Hiển thị khối mã  | ❌ Không hỗ trợ | P1       | -     |
| Hiển thị văn bản lớn | Trường JSON          | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường URL           | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường xem trước       | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường hộp kiểm      | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường biểu tượng          | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường màu sắc         | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Tính toán công thức | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Mã tự động           | ✅ Đã hỗ trợ     | -        | -     |
| Trường quan hệ     | Chi tiết con          | 🔄 Đang phát triển   | P0       | -     |
| Trường quan hệ     | Bảng con            | 🔄 Đang phát triển   | P0       | -     |
| Hiển thị trường      | Hiển thị bản đồ         | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Trường JS            | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | TableOID            | ✅ Đã hỗ trợ     | -        | -     |
| Hiển thị trường      | Khu vực Trung Quốc        | ❌ Không hỗ trợ | -        | -     |
| Hiển thị trường      | Mã QR             | ❌ Không hỗ trợ | -        | -     |

##### Chế độ chỉnh sửa


| Tính năng                  | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------------ | ---------------- | -------- | ----- |
| Nhập một dòng        | ✅ Đã hỗ trợ     | -        | -     |
| Nhập số             | ✅ Đã hỗ trợ     | -        | -     |
| Nhập phần trăm         | ✅ Đã hỗ trợ     | -        | -     |
| Nhập mật khẩu           | ✅ Đã hỗ trợ     | -        | -     |
| Nhập NanoID             | ✅ Đã hỗ trợ     | -        | -     |
| Nhập văn bản nhiều dòng    | ✅ Đã hỗ trợ     | -        | -     |
| Trình soạn thảo văn bản đa dạng thức         | ✅ Đã hỗ trợ     | -        | -     |
| Trình soạn thảo mã              | ❌ Không hỗ trợ | -        | -     |
| Trình soạn thảo Markdown          | ✅ Đã hỗ trợ     | -        | -     |
| Nhập JSON               | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn                 | ✅ Đã hỗ trợ     | -        | -     |
| Nút radio                    | ✅ Đã hỗ trợ     | -        | -     |
| Hộp kiểm                 | ✅ Đã hỗ trợ     | -        | -     |
| Nhóm hộp kiểm           | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn ngày              | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn màu             | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn biểu tượng              | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn thời gian              | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn bản ghi (thả xuống) | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn bản ghi (popup)    | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn bản ghi (xếp tầng)  | ✅ Đã hỗ trợ     | -        | -     |
| Trình quản lý tệp             | ✅ Đã hỗ trợ     | -        | -     |
| Bộ chọn bộ sưu tập      | 🔄 Đang phát triển   | P2       | -     |
| Khu vực Trung Quốc             | ❌ Không hỗ trợ | -        | -     |
| Mã QR                  | ❌ Không hỗ trợ | -        | -     |
| Quét để nhập            | ❌ Không hỗ trợ | -        | -     |
| Biểu mẫu con                  | 🚀 Đang tối ưu hóa    | P0       | -     |
| Bảng con (đơn giản)        | 🚀 Đang tối ưu hóa    | P0       | -     |
| Bảng con (nâng cao)      | 🔄 Đang phát triển   | P1       | -     |
| Bộ chọn bản đồ               | ✅ Đã hỗ trợ     | -        | -     |
| Trường JS                 | ✅ Đã hỗ trợ     | -        | -     |

#### Hành động


| Tính năng            | Trạng thái           | Mức ưu tiên | Ghi chú |
| ------------------ | ---------------- | -------- | ----- |
| Popup              | ✅ Đã hỗ trợ     | -        | -     |
| Xem               | ✅ Đã hỗ trợ     | -        | -     |
| Bộ lọc             | ✅ Đã hỗ trợ     | -        | -     |
| Thêm                | ✅ Đã hỗ trợ     | -        | -     |
| Thêm bản ghi con     | ✅ Đã hỗ trợ     | -        | -     |
| Liên kết               | ✅ Đã hỗ trợ     | -        | -     |
| Chỉnh sửa               | ✅ Đã hỗ trợ     | -        | -     |
| Xóa             | ✅ Đã hỗ trợ     | -        | -     |
| Làm mới            | ✅ Đã hỗ trợ     | -        | -     |
| Cập nhật bản ghi      | 🚀 Đang tối ưu hóa    | P1       | -     |
| Gửi             | 🚀 Đang tối ưu hóa    | P1       | -     |
| Tải lên             | ✅ Đã hỗ trợ     | -        | -     |
| Kích hoạt workflow   | ✅ Đã hỗ trợ     | -        | -     |
| Chỉnh sửa hàng loạt          | ❌ Không hỗ trợ | P1       | -     |
| Cập nhật hàng loạt        | ✅ Đã hỗ trợ     | -        | -     |
| Yêu cầu tùy chỉnh     | ❌ Không hỗ trợ | -        | -     |
| Sao chép               | ❌ Không hỗ trợ | -        | -     |
| In              | ❌ Không hỗ trợ | -        | -     |
| In mẫu     | ✅ Đã hỗ trợ     | -        | -     |
| Nhập             | ✅ Đã hỗ trợ     | -        | -     |
| Xuất             | ✅ Đã hỗ trợ     | -        | -     |
| Xuất tệp đính kèm | ✅ Đã hỗ trợ     | -        | -     |
| Quét mã QR       | ✅ Đã hỗ trợ     | -        | -     |
| Nhân viên AI       | 🆕 Tính năng mới   | -        | -     |
| Hành động JS          | 🆕 Tính năng mới   | -        | -     |

#### Tính năng nâng cao


| Danh mục             | Tính năng                    | Trạng thái                        | Mức ưu tiên | Ghi chú |
| -------------------- | -------------------------- | ----------------------------- | -------- | ----- |
| Mẫu giao diện         | Block                      | 🆕 Tính năng mới                | -        | -     |
| Mẫu giao diện         | Popup                      | 🆕 Tính năng mới                | -        | -     |
| Mẫu giao diện         | Trường                      | 🆕 Tính năng mới                | -        | -     |
| Mẫu giao diện > Trường | Trường biểu mẫu                 | 🆕 Tính năng mới                | -        | -     |
| Mẫu giao diện > Trường | Trường chi tiết              | 🆕 Tính năng mới                | -        | -     |
| Mẫu giao diện > Trường | Trường phê duyệt             | 🆕 Tính năng mới                | -        | -     |
| Giao diện và quyền   | Giao diện và quyền         | ✨ Cải tiến                   | -        | -     |
| Luồng sự kiện           | Sự kiện luồng sự kiện          | 🆕 Tính năng mới, 🚀 Đang tối ưu hóa | P1       | -     |
| Luồng sự kiện           | Hành động luồng sự kiện         | 🆕 Tính năng mới, 🚀 Đang tối ưu hóa | P1       | -     |
| Quy tắc liên kết        | Quy tắc liên kết              | 🚀 Đang tối ưu hóa                 | P1       | -     |
| Biến            | Người dùng hiện tại               | 🚀 Đang tối ưu hóa                 | P1       | -     |
| Biến            | Vai trò hiện tại (định danh)  | ✅ Đã hỗ trợ                  | -        | -     |
| Biến            | Không gian hiện tại (định danh) | ❌ Không hỗ trợ              | P1       | -     |
| Biến            | Khóa API                    | ✅ Đã hỗ trợ                  | -        | -     |
| Biến            | Tham số truy vấn URL       | ✅ Đã hỗ trợ                  | -        | -     |
| Biến            | Thiết bị hiện tại             | 🆕 Tính năng mới                | -        | -     |
| Biến            | Bản ghi hiện tại             | ✅ Đã hỗ trợ                  | -        | -     |
| Biến            | Biểu mẫu hiện tại               | ✅ Đã hỗ trợ                  | -        | -     |
| Biến            | Đối tượng hiện tại             | ❌ Không hỗ trợ              | P1       | -     |
| Biến            | Popup hiện tại              | 🚀 Đang tối ưu hóa                 | P1       | -     |
| Biến            | Bản ghi đã chọn hiện tại   | ❌ Không hỗ trợ              | P2       | -     |
| Biến            | Biến ngày                     | 🔄 Đang phát triển                | P1       | -     |
| Biến            | Biến và khóa                 | 🔄 Đang phát triển                | P1       | -     |
| JavaScript           | Chạy JavaScript             | 🆕 Tính năng mới                | -        | -     |

### Trạng thái Plugin


| Tên Plugin                                      | Trạng thái Plugin                    | Mức ưu tiên | Ghi chú                                           |
| ------------------------------------------------ | -------------------------------- | -------- | ----------------------------------------------- |
| @nocobase/plugin-action-bulk-edit                | ❌ Không hỗ trợ                 | P1       | -                                               |
| @nocobase/plugin-action-custom-request           | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-action-duplicate                | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-action-print                    | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-block-multi-step-form           | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-block-tree                      | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-calendar                        | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-custom-variables                | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-embed                           | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-field-china-region              | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-field-code                      | ❌ Không hỗ trợ                 | P1       | -                                               |
| @nocobase/plugin-field-sort                      | ❌ Không hỗ trợ                 | -        | Sắp xếp kéo thả bản ghi không được hỗ trợ  |
| @nocobase/plugin-file-previewer-office           | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-gantt                           | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-kanban                          | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-public-forms                    | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-text-copy                       | ❌ Không hỗ trợ                 | -        | -                                               |
| @nocobase/plugin-data-visualization-echarts      | ⚠️ Không dùng nữa                  | -        | Sử dụng @nocobase/plugin-data-visualization thay thế |
| @nocobase/plugin-field-component-mask            | ⚠️ Không dùng nữa                  | -        | -                                               |
| @nocobase/plugin-mobile                          | ⚠️ Không dùng nữa                  | -        | Sử dụng @nocobase/plugin-ui-layout thay thế          |
| @nocobase/plugin-multi-app-manager               | ⚠️ Không dùng nữa                  | -        | Sử dụng @nocobase/plugin-app-supervisor thay thế     |
| @nocobase/plugin-app-supervisor                  | 🆕 Tính năng mới                   | P0       | Sắp ra mắt                                     |
| @nocobase/plugin-ai                              | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-ai-gigachat                     | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-block-grid-card                 | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-block-list                      | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-block-markdown                  | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-flow-engine                     | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-form-drafts                     | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-multi-space                     | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-record-history                  | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-telemetry                       | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-ui-layout                       | 🆕 Tính năng mới, ❌ Không hỗ trợ | P2       | Đã lên kế hoạch                                         |
| @nocobase/plugin-ui-templates                    | 🆕 Tính năng mới                   | -        | -                                               |
| @nocobase/plugin-acl                             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-bulk-update              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-export                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-export-pro               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-import                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-import-pro               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-action-template-print           | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-api-doc                         | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-api-keys                        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-async-task-manager              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-audit-logger                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-audit-logs                      | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth                            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-cas                        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-dingtalk                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-ldap                       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-oidc                       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-saml                       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-sms                        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-auth-wecom                      | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-backup-restore                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-backups                         | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-block-iframe                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-block-template                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-block-tree                      | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-block-workbench                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-client                          | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-collection-fdw                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-collection-sql                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-collection-tree                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-comments                        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-custom-brand                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mariadb    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mssql      | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-external-mysql      | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-external-oracle     | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-external-postgres   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-kingbase            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-main                | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-manager             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-source-rest-api            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-data-visualization              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-departments                     | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-email-manager                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-environment-variables           | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-error-handler                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-attachment-url            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-encryption                | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-formula                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-m2m-array                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-markdown-vditor           | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-field-sequence                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-file-manager                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-file-storage-s3-pro             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-graph-collection-manager        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-ip-restriction                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-license                         | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-locale-tester                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-localization                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-lock-adapter-redis              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-logger                          | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-map                             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-migration-manager               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-multi-keyword-filter            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-notification-email              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-notification-in-app-message     | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-notification-manager            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-password-policy                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-pubsub-adapter-redis            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-rabbitmq          | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-queue-adapter-redis             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-request-encryption              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-system-settings                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-telemetry-prometheus            | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-theme-editor                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-two-factor-authentication       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-ui-schema-storage               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-user-data-sync                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-users                           | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-verification                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-verification-totp-authenticator | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workerid-allocator-redis        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow                        | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-action-trigger         | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-aggregate              | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-approval               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-cc                     | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-custom-action-trigger  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-date-calculation       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-delay                  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-dynamic-calculation    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-javascript             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-json-query             | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-json-variable-mapping  | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-loop                   | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-mailer                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-manual                 | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-notification           | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-parallel               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-request                | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-request-interceptor    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-response-message       | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-sql                    | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-subflow                | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-variable               | ✅ Đã hỗ trợ                     | -        | -                                               |
| @nocobase/plugin-workflow-webhook                | ✅ Đã hỗ trợ                     | -        | -                                               |
