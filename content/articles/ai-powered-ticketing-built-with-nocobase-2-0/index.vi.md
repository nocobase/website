---
title: "Hệ thống Vé AI Hỗ trợ bởi NocoBase 2.0"
description: "Giải pháp vé AI mở rộng hơn khi các hệ thống có sẵn không đáp ứng được."
---

Hệ thống ticket hỗ trợ AI được xây dựng trên NocoBase 2.0, sẵn sàng triển khai và mở rộng.

Giới thiệu: [https://www.nocobase.com/en/solutions/ticketing-v2](https://www.nocobase.com/en/solutions/ticketing-v2)

Tài liệu: [https://v2.docs.nocobase.com/en/solution/ticket-system/](https://v2.docs.nocobase.com/en/solution/ticket-system/)

![ticketing.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(1)-x5nrzk.png)

## Được xây dựng để thay đổi

Trong các tình huống hỗ trợ khách hàng, vận hành CNTT, bảo trì thiết bị và service desk nội bộ, hệ thống ticket là một phần cơ bản trong hoạt động doanh nghiệp.

Tuy nhiên, trên thực tế, nhiều nhóm gặp phải những thách thức tương tự:

* Yêu cầu ticket đến từ nhiều nơi: biểu mẫu, email và công cụ chăm sóc khách hàng, mỗi loại được xử lý riêng biệt
* Việc phân loại và phân công ticket phụ thuộc nhiều vào thao tác thủ công, dẫn đến hiệu quả thấp và thường xuyên sai sót
* SLA tồn tại trên giấy tờ nhưng khó theo dõi và thực thi trong thực tế
* Các vấn đề tương tự cứ tái diễn, trong khi kinh nghiệm và giải pháp không được tích lũy theo thời gian

**Liệu có thể xây dựng một giải pháp ticket có thể triển khai nhanh chóng và vẫn phát triển khi yêu cầu kinh doanh thay đổi?**

Đây là vấn đề cốt lõi mà **giải pháp ticket AI của NocoBase** được thiết kế để giải quyết.

## Giới hạn của hệ thống ticket truyền thống

Dựa trên nghiên cứu của chúng tôi, hầu hết các nhóm thường chọn một trong các giải pháp sau:

### Ticket SaaS

Các giải pháp ticket SaaS dễ áp dụng và có nhiều tính năng phong phú, nhưng hạn chế của chúng rất rõ ràng:

* Tính linh hoạt hạn chế trong việc tùy chỉnh quy trình làm việc và trường dữ liệu
* Các tính năng AI chủ yếu ở bề mặt, không được tích hợp sâu
* Dữ liệu và logic kinh doanh không hoàn toàn nằm trong tầm kiểm soát của nhóm
* Chi phí tiếp tục tăng khi tổ chức mở rộng quy mô

### Ticket tự phát triển nội bộ

Cách tiếp cận này có vẻ mang lại sự linh hoạt tối đa, nhưng trên thực tế:

* Phát triển ban đầu mất nhiều thời gian và đòi hỏi đầu tư đáng kể
* Bảo trì liên tục phụ thuộc hoàn toàn vào các nhà phát triển ban đầu
* Bất kỳ thay đổi nào trong quy trình làm việc đều yêu cầu công việc phát triển bổ sung
* Rất khó để biến kinh nghiệm tích lũy thành một hệ thống có thể tái sử dụng và đóng gói thành sản phẩm

## Nguyên tắc thiết kế

Định vị của chúng tôi là một kiến trúc ticket có thể mở rộng, có thể cấu hình và hỗ trợ AI một cách tự nhiên.

Mục tiêu là giúp các doanh nghiệp xây dựng hệ thống ticket linh hoạt, có khả năng mở rộng và hoàn toàn tự kiểm soát với chi phí thấp hơn, cho phép hệ thống liên tục thích ứng với nhu cầu kinh doanh đang phát triển thay vì bị giới hạn bởi các khả năng cứng nhắc.

### Mô hình dữ liệu có thể mở rộng

Chúng tôi sử dụng mô hình dữ liệu hình chữ T:

![Mô hình dữ liệu hình chữ T.png](https://static-docs.nocobase.com/screenshot-20260108-130433-9gm35a.png)

* Bảng chính ticket: xử lý các khả năng dùng chung như quy trình trạng thái, người được phân công, mức độ ưu tiên, SLA và lịch sử giao tiếp
* Bảng mở rộng nghiệp vụ: được thiết kế cho các trường hợp sử dụng khác nhau, bao gồm:
  * Ticket hỗ trợ CNTT
  * Ticket bảo trì thiết bị
  * Khiếu nại và phản hồi của khách hàng
  * Yêu cầu hành chính nội bộ

Thiết kế này mang lại một số lợi thế chính:

* Có thể thêm các loại ticket mới mà không cần thay đổi quy trình làm việc cốt lõi
* Mỗi tình huống kinh doanh có thể có các trường và bố cục trang riêng
* Logic cốt lõi vẫn nhất quán, giữ chi phí mở rộng ở mức cực kỳ thấp

Kết quả là, giải pháp này rất phù hợp với môi trường doanh nghiệp có nhiều phòng ban và lĩnh vực kinh doanh.

### Tiếp nhận ticket hợp nhất

Trong NocoBase, ticket có thể được tạo qua nhiều kênh:

* Biểu mẫu bên ngoài hoặc nội bộ
* Email được phân tích tự động
* API và webhook
* Nhập thủ công bởi nhóm hỗ trợ khách hàng hoặc vận hành

Sau đó, hệ thống chuẩn hóa mọi thứ bằng cách xử lý:

* Xác định nguồn gốc
* Phát hiện trùng lặp
* Làm giàu dữ liệu cơ bản

Kết quả là, tất cả các yêu cầu được đưa vào một quy trình ticket thống nhất duy nhất thay vì bị phân tán trên các công cụ và hệ thống khác nhau.

![Email.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(3)-xzkr06.png)

### Phân công hỗ trợ bởi AI

Trong NocoBase, AI không chỉ dừng lại ở các phản hồi tự động mà còn đóng vai trò tích cực trong toàn bộ quá trình xử lý ticket:

* Hiểu mục đích và mức độ khẩn cấp của ticket
* Đánh giá mức độ ưu tiên bằng cách sử dụng các quy tắc và dữ liệu lịch sử
* Phân công ticket một cách thông minh dựa trên kỹ năng của các thành viên trong nhóm và khối lượng công việc hiện tại
* Cung cấp cho nhân viên hỗ trợ các gợi ý trả lời và bối cảnh liên quan

AI không được thiết kế để thay thế con người. Mục đích của nó là giảm chi phí đánh giá thủ công, cho phép các nhóm tập trung vào các quyết định thực sự cần sự tham gia của con người.

![AI.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(4)-q39am4.png)

### SLA

Nếu không có thực thi SLA, hệ thống ticket chắc chắn sẽ chỉ trở thành một danh sách nhiệm vụ.

Trong giải pháp này:

* Các mức độ ưu tiên khác nhau (P0-P3) có thể được cấu hình với các mục tiêu SLA khác nhau
* Thời gian phản hồi và thời gian giải quyết được theo dõi tự động
* Vi phạm SLA kích hoạt thông báo hoặc quy trình leo thang
* Các chỉ số SLA có thể được sử dụng trực tiếp cho báo cáo và phân tích hồi cứu

![SLA.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(5)-04o2xf.png)

### Cơ sở kiến thức

Một hệ thống ticket được thiết kế tốt sẽ tự nhiên phát triển thành một hệ thống kiến thức theo thời gian.

Trong giải pháp NocoBase:

* Quy trình giải quyết ticket được tự động ghi lại dưới dạng các mục kiến thức
* Khi ticket mới được tạo, hệ thống đề xuất các giải pháp tương tự
* AI giúp tạo bản tóm tắt, tinh chỉnh nội dung và hỗ trợ đa ngôn ngữ
* Đến lượt nó, cơ sở kiến thức này liên tục cải thiện hiệu quả xử lý ticket

![Cơ sở kiến thức.png](https://static-docs.nocobase.com/%E4%B8%8B%E8%BD%BD%20(6)-bu5gpu.png)

Khác biệt so với các giải pháp truyền thống


| Khía cạnh            | Ticket SaaS truyền thống | Hệ thống nội bộ            | Giải pháp ticket NocoBase  |
| ------------------- | -------------------------- | --------------------------- | ---------------------------- |
| Thời gian triển khai | Nhanh                      | Chậm                        | Nhanh                        |
| Tùy chỉnh           | Hạn chế                    | Cao                         | Cao                          |
| Chi phí mở rộng     | Cao                        | Cao                         | Thấp                         |
| Tích hợp AI         | Cơ bản và bổ sung          | Yêu cầu phát triển tùy chỉnh | Tự nhiên và tích hợp sâu     |
| Dữ liệu và triển khai | Kiểm soát một phần         | Kiểm soát hoàn toàn         | Kiểm soát hoàn toàn          |

## Cài đặt và Sử dụng

Vui lòng tham khảo tài liệu và chọn tùy chọn phù hợp nhất với phiên bản NocoBase và nền tảng kỹ thuật của bạn.

[https://v2.docs.nocobase.com/cn/solution/ticket-system/installation](https://v2.docs.nocobase.com/cn/solution/ticket-system/installation?utm_source=chatgpt.com)

## Lộ trình phát triển

Giải pháp ticket NocoBase vẫn đang phát triển và một số khả năng chưa có sẵn đầy đủ trong phiên bản hiện tại. Chúng tôi sẽ tiếp tục cải thiện và mở rộng giải pháp dựa trên các trường hợp sử dụng thực tế và phản hồi từ cộng đồng.

Trong thời gian tới, chúng tôi dự định tập trung vào các lĩnh vực sau:

* **Hỗ trợ đa ngôn ngữ**: mở rộng phạm vi ngôn ngữ cho các nhóm toàn cầu
* **Cải thiện tài liệu**: cung cấp tài liệu chi tiết cho các quy trình làm việc và mô-đun cốt lõi để hệ thống dễ hiểu và dễ sử dụng hơn

Nếu bạn gặp bất kỳ vấn đề nào khi sử dụng hệ thống hoặc có đề xuất về các tính năng hoặc thiết kế của nó, chúng tôi hoan nghênh bạn chia sẻ phản hồi của mình trên diễn đàn cộng đồng NocoBase.

Chúng tôi tích cực xem xét phản hồi này và sử dụng nó như một đầu vào quan trọng cho các lần lặp trong tương lai.

Diễn đàn: [https://forum.nocobase.com](https://forum.nocobase.com)

Bạn cũng được chào đón để dùng thử giải pháp ticket đầy đủ trong môi trường demo của chúng tôi: [https://demo.nocobase.com/new](https://demo.nocobase.com/new)
