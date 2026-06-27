---
title: "数天内构建AI多模态研发平台——借助NocoBase"
description: "NocoBase助力华数传媒高效构建AI多模态平台，优化工作流管理，提升内容生成效率。"
---

## **Giới thiệu**

Wasu Media đã xây dựng một nền tảng R&D đa phương thức AI từ đầu — chỉ trong vài ngày — sử dụng NocoBase.

Là một công ty lớn trong ngành truyền hình kỹ thuật số và truyền thông, Wasu Media đã tích cực khám phá cách các công nghệ mới nổi như AI và AIGC có thể định hình lại quá trình sản xuất nội dung.

Đây là cách nhóm của họ đã biến các đường ống dữ liệu phức tạp và quy trình làm việc của mô hình thành một nền tảng trực quan, thống nhất cho sự đổi mới AIGC.

![KlingAI.png](https://static-docs.nocobase.com/image-2mc2j6.png)

Hình ảnh do AI tạo ra

## **Bối cảnh**

Trên thực tế, việc tạo nội dung không chỉ đơn thuần là kết nối các mô hình với nhau — mà còn là quản lý khối lượng lớn dữ liệu di chuyển qua các bước khác nhau.

Để xử lý sự phức tạp này, nhóm đã xác định ba lĩnh vực chính cần tập trung:

* **Quản lý dữ liệu:** Các tài sản đa phương thức nội bộ (như văn bản, hình ảnh và các tài liệu khác) phải được tổ chức tập trung, gắn nhãn và đưa vào một kho lưu trữ nội dung có cấu trúc. Chỉ với một khung quản lý dữ liệu có hệ thống, việc tìm kiếm ngữ nghĩa, đề xuất nội dung và tạo thông minh mới có thể được hỗ trợ hiệu quả.
* **Quy trình làm việc và Lập lịch sản xuất:** Từ *chọn chủ đề → tạo nội dung → đánh giá → đầu ra*, mọi giai đoạn cần được tự động hóa và trực quan hóa. Một nền tảng lập lịch thống nhất không chỉ cải thiện hiệu quả mà còn cho phép điều phối đa mô hình, phân công nhiệm vụ và kiểm soát phiên bản.
* **Giám sát dữ liệu:** Trong quá trình tạo nội dung quy mô lớn, việc giám sát dữ liệu theo thời gian thực — chẳng hạn như kịch bản, bản ghi tạo và nhật ký gọi mô hình — là rất quan trọng. Nó giúp các nhóm nhanh chóng xác định vấn đề và cung cấp phản hồi có giá trị cho việc tối ưu hóa và lặp lại trong tương lai.

## **Thách thức**

Khi nhóm làm việc để nhanh chóng xác thực các quy trình làm việc trong khi vẫn đảm bảo khả năng mở rộng lâu dài, một số thách thức chính đã xuất hiện:

* **Quá nhiều thành phần chuyển động:** Số lượng tài sản tăng vọt, từ kịch bản văn bản đến đầu ra hình ảnh. Việc quản lý tất cả — cùng với các mô hình và nút tính toán — trở nên hỗn loạn.
* **Nút thắt giao diện người dùng:** Mỗi lần thay đổi giao diện đều cần nhiều ngày làm việc front-end.
* **Áp lực lặp lại nhanh:** Các nhóm kinh doanh cần các tính năng mới sau mỗi vài ngày. Bất kỳ sự chậm trễ nào cũng làm chậm các thử nghiệm và xác thực.

Trước khi áp dụng NocoBase, nhóm đã thử các công cụ phát triển ứng dụng hướng AIGC khác. Tuy nhiên, mặc dù các công cụ đó cung cấp nhiều tính năng chuyên sâu hơn, chúng vẫn yêu cầu viết mã đáng kể và có đường cong học tập dốc — khiến chúng không phù hợp với quy trình phát triển thử nghiệm và sai sót nhanh chóng.

## **Áp dụng và Triển khai NocoBase**

Để giải quyết những thách thức này, nhóm R&D cuối cùng đã chọn **NocoBase** làm nền tảng cho hệ thống của họ. **Kiến trúc không mã** của nó cho phép các nhà phát triển tập trung vào **mô hình hóa dữ liệu và logic kinh doanh**, mà không mất thời gian vào phát triển front-end. Đối với một nhóm định hướng back-end, điều này có nghĩa là họ có thể bắt đầu nhanh chóng và rút ngắn đáng kể chu kỳ phát triển.

Với NocoBase, nhóm đã xây dựng nền tảng cốt lõi của họ chỉ trong 1–2 ngày — điều mà trước đây cần hàng chục API và nhiều trang front-end.

Các quy trình làm việc đã thay thế hàng trăm dòng logic bằng tự động hóa trực quan rõ ràng.

Các nhà phát triển back-end không còn phải đụng đến mã front-end — NocoBase tự động tạo ra các giao diện họ cần.

Logic kinh doanh phức tạp được triển khai thông qua **cấu hình quy trình làm việc**, biến hàng chục câu lệnh `if-else` thành các lưu đồ trực quan rõ ràng — với các cảnh báo được kích hoạt tại các nút quan trọng.

Đồng thời, nền tảng tích hợp liền mạch với **cơ sở dữ liệu PostgreSQL** của họ, cho phép dữ liệu được truy cập cả trong NocoBase và thông qua các truy vấn SQL bên ngoài hoặc các công cụ BI, bảo tồn hệ sinh thái dữ liệu hiện có.

Trong các trường hợp sử dụng điển hình của họ, NocoBase đóng vai trò là **cơ sở hạ tầng cốt lõi** cho nền tảng R&D AI đa phương thức:

* Là một **trung tâm điều phối và quản lý AI**, nó tập trung hóa việc điều phối các đường ống tính toán và mô hình khác nhau, loại bỏ các quy trình phân mảnh.
* Về mặt **tạo nội dung**, nó hỗ trợ tạo và quản lý hình ảnh quy mô lớn, đồng thời đặt nền tảng cho việc mở rộng đa phương thức trong tương lai — thực sự kết nối văn bản, hình ảnh và các loại nội dung khác.

![Task-17kdnf.png](https://static-docs.nocobase.com/Frame%2022%20(2)-17kdnf.png)

![Management.png](https://static-docs.nocobase.com/Frame%2021-a7ur94.png)

Điều này không chỉ rút ngắn chu kỳ phát triển mà còn cải thiện trải nghiệm R&D tổng thể.

Các thành viên trong nhóm đặc biệt ấn tượng với **tính dễ sử dụng và khả năng mở rộng** của nền tảng:

> “Là nhà phát triển back-end, chúng tôi không còn phải lo lắng về giao diện front-end nữa. NocoBase bao phủ hầu hết mọi nhu cầu thiết kế kinh doanh của chúng tôi. Với các quy trình làm việc xử lý logic phức tạp, hiệu quả đạt được là rất đáng kể.”

Mặc dù nền tảng vẫn đang trong giai đoạn R&D, nó đã được triển khai nội bộ và đang cho thấy giá trị đáng kể.

## **Triển vọng**

Đối với Wasu Media, đây mới chỉ là sự khởi đầu.

Bằng cách thống nhất các quy trình làm việc AI và đường ống dữ liệu dưới một mái nhà, họ đang tạo tiền đề cho sự đổi mới đa phương thức có thể mở rộng — được hỗ trợ bởi NocoBase.

Và câu chuyện này cho thấy cách không mã có thể tăng tốc ngay cả những nghiên cứu và phát triển AI tiên tiến nhất.

**Thêm Câu chuyện Khách hàng:**

* [NocoBase tại Nga: Các Giải pháp Kỹ thuật số Đa Tình huống trong Hành động](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase Gia nhập Lớp học Đại học Đức](https://www.nocobase.com/en/blog/university-course)
* [NocoBase là Nền tảng Công nghệ của ED: Từ Hệ thống Nội bộ đến Sản phẩm Thương mại](https://www.nocobase.com/en/blog/ed)
* [Phản hồi Dưới Giây ở Quy mô Lớn: Classact Chạy NocoBase trên Kubernetes](https://www.nocobase.com/en/blog/classact)
* [Nhà máy Kỹ thuật số của BIEL Crystal: Cung cấp năng lượng cho 1,85 Tỷ Đơn vị Mỗi Năm](https://www.nocobase.com/en/blog/bielcrystal)
* [Distinct HealthCare Sử dụng NocoBase để Xây dựng Hệ thống Chăm sóc Dài hạn, Cá nhân hóa như thế nào](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Điều gì đã khiến công ty bất động sản hàng đầu Nhật Bản chuyển từ Salesforce sang NocoBase mã nguồn mở?](https://www.nocobase.com/en/blog/century-21)
* [Cách một Nhà máy Nội thất Tự xây dựng Hệ thống ERP của riêng mình — Không cần Viết mã](https://www.nocobase.com/en/blog/olmon)
