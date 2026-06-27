---
title: "NocoBase làm nền tảng công nghệ cho ED: Từ hệ thống nội bộ đến sản phẩm thương mại"
description: "ED xây dựng nền tảng công nghệ trên NocoBase, giảm một phần ba chu kỳ giao hàng, đẩy nhanh quá trình kiểm thử và ra mắt, đồng thời đảm bảo tính ổn định cao hơn cho cả hệ thống nội bộ và sản phẩm thương mại."
---

## **Giới thiệu**

> Một sự thật thú vị từ hành trình của chúng tôi: trong quy trình bán hàng trước, chúng tôi thường kết hợp NocoBase với AI để cung cấp các bằng chứng khái niệm (proof-of-concept) với tốc độ kỷ lục. Khách hàng thường xuyên ngạc nhiên khi, sau khi gặp chúng tôi vào thứ Hai, họ quay lại vào thứ Tư và thấy một nguyên mẫu hoạt động hoàn chỉnh. Phản ứng thường thấy là: *“Phép màu gì vậy?”* Khi chúng tôi tiết lộ NocoBase, nó luôn tạo ra một khoảnh khắc ngạc nhiên—và sự tò mò.
>
> **—— Fabio Farzat, CEO của ED**

## **Về ED**

[ED](https://ed.dev.br/) là một công ty công nghệ có trụ sở tại Brazil với **hơn 130 chuyên gia trên 16 bang**. Trong nhiều năm, đội ngũ đã cung cấp và hỗ trợ các hệ thống quan trọng cho các doanh nghiệp lớn trong lĩnh vực bảo hiểm, thị trường vốn, tiện ích và khu vực công.

![ED.png](https://static-docs.nocobase.com/ED-nvmw2z.png)

Về mặt cung cấp, ED có chứng nhận **ISO 9001** (bao gồm các quy trình quản lý phần mềm, dự án và cơ sở hạ tầng) và đã đạt được **CMMI-DEV Cấp độ 3**, phản ánh các tiêu chuẩn được quốc tế công nhận và sự trưởng thành bền vững trong kỹ thuật.

Về mặt tổ chức, ED đã được xếp hạng trong Top 10 “Nơi làm việc tuyệt vời” của Brazil trong bốn năm liên tiếp—đạt vị trí số 1 và hiện đang giữ vị trí số 6. Sự công nhận này làm nổi bật khả năng của ED trong việc thu hút và giữ chân nhân tài hàng đầu, đảm bảo tính chuyên nghiệp và ổn định trong mọi dự án.

Với quy mô, hệ thống chất lượng nghiêm ngặt và cơ sở khách hàng rộng lớn, ED được công nhận là nhà cung cấp dịch vụ công nghệ doanh nghiệp hàng đầu tại Brazil. Ngày nay, công ty đang đẩy mạnh các nỗ lực trong **các nền tảng hiện đại và giải pháp dựa trên AI** để giúp khách hàng chuẩn bị cho tương lai.

## **Điểm đau và Quyết định**

Trong quá trình cung cấp dự án hàng ngày, đội ngũ kỹ thuật của ED liên tục đối mặt với cùng một thách thức: **các chu kỳ phát triển CRUD và tích hợp không hồi kết**. Dù là cho hệ thống nội bộ hay dự án cho khách hàng, họ cần nhanh chóng xây dựng các lớp quản lý dữ liệu, tạo API, xử lý nhập/xuất, và vẫn đảm bảo tính bảo mật và khả năng mở rộng. Mỗi lần đều phải bắt đầu lại từ đầu—tiêu tốn thời gian và nguồn lực đáng kể, và cuối cùng làm chậm quá trình đổi mới.

Để thoát khỏi vòng luẩn quẩn này, ED đã tổng hợp **một danh sách kiểm tra yêu cầu cấp doanh nghiệp**:

* **Bảo mật** — kiểm soát truy cập, cách ly dữ liệu, đảm bảo tuân thủ
* **Hiệu suất** — thời gian phản hồi nhanh ngay cả với các tập dữ liệu lớn
* **Khả năng mở rộng** — thích ứng linh hoạt với các dự án và môi trường khách hàng đa dạng
* **Khả năng quan sát** — hoạt động minh bạch để giám sát và khắc phục sự cố

![checklist.png](https://static-docs.nocobase.com/checklist-o8ncyd.png)

Thứ họ cần không chỉ đơn thuần là một công cụ kéo thả bảng. Họ đang tìm kiếm một nền tảng có thể hỗ trợ các mô hình dữ liệu hoàn chỉnh, thực thi các kiểu dữ liệu mạnh mẽ và cấu trúc quan hệ, đồng thời tự động tạo API.

Sau khi đánh giá nhiều giải pháp trên thị trường, ED cuối cùng đã chọn **NocoBase**. Các bằng chứng khái niệm nội bộ cho thấy NocoBase không chỉ đáp ứng mọi mục trong danh sách kiểm tra của họ mà còn mang lại sự linh hoạt và hiệu quả cao hơn trong sử dụng thực tế.

## **Các Kịch bản Triển khai**

Sau khi hoàn thành bằng chứng khái niệm, ED nhanh chóng triển khai NocoBase vào các hệ thống kinh doanh cốt lõi và dần dần mở rộng sang nhiều kịch bản khác nhau.

### **Kịch bản 1: Sản phẩm Thương mại – [AssistFlow](https://assistflow.com.br/)**

Không giống như hầu hết các công ty chỉ sử dụng NocoBase cho các hệ thống nội bộ, ED đã xây dựng trực tiếp một nền tảng thương mại bên ngoài trên đó—**[AssistFlow](https://assistflow.com.br/)**. AssistFlow cho phép các doanh nghiệp nhanh chóng tạo ra các tác nhân thông minh hoạt động liền mạch trên nhiều kênh truyền thông xã hội, hỗ trợ tương tác đa phương thức với văn bản, giọng nói, hình ảnh và tệp tin. Ngoài dịch vụ khách hàng, nó còn mở rộng sang bán hàng, nhân sự, hỗ trợ kỹ thuật, v.v.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow-e60x5d.png)

Trong sản phẩm thương mại này, toàn bộ mô-đun cấu hình và giao diện quản lý được hỗ trợ bởi NocoBase. Điều này có nghĩa là nhóm không cần phải phát triển lại logic giao diện người dùng; thay vào đó, họ có thể mô hình hóa và cấu hình trực tiếp trong NocoBase để cung cấp cho khách hàng các khả năng quản lý linh hoạt và có thể mở rộng.

![AssistFlow.png](https://static-docs.nocobase.com/AssistFlow2-vd4e8i.png)

**Điểm nổi bật của AssistFlow:**

* **Bắt đầu nhanh chóng** — Tạo và triển khai một tác nhân thông minh chỉ trong 5 phút, không cần viết mã
* **Tích hợp đa kênh** — Hỗ trợ WhatsApp, Teams, Slack, Telegram, Facebook, Instagram, LinkedIn, v.v.
* **Tương tác đa phương thức** — Xử lý văn bản, giọng nói, hình ảnh và tệp tin để đáp ứng các nhu cầu kinh doanh đa dạng
* **Khả năng ứng dụng rộng rãi** — Bao gồm dịch vụ khách hàng, bán hàng, tiếp thị, nhân sự và hỗ trợ kỹ thuật
* **Tự động hóa và tích hợp** — API tích hợp sẵn cho phép kết nối liền mạch với các hệ thống hiện có và hợp lý hóa quy trình làm việc
* **An toàn và kiểm soát** — Hỗ trợ triển khai đám mây riêng để đáp ứng các yêu cầu bảo mật và tuân thủ cấp doanh nghiệp

### **Kịch bản 2: Nền tảng Quản lý Dự án**

Được xây dựng để hỗ trợ toàn bộ vòng đời của các dự án cung cấp cho khách hàng của ED. Các tác vụ mà trước đây yêu cầu nhiều vòng phát triển—chẳng hạn như các thao tác CRUD và logic phân quyền—giờ đây có thể được hoàn thành trong một bước duy nhất thông qua mô hình hóa dữ liệu đơn giản, cấu hình giao diện người dùng và API được tạo tự động.

![Nền tảng Quản lý Dự án](https://static-docs.nocobase.com/Project%20Management%20Platform-o3heh6.png)

### **Kịch bản 3: Hệ thống Vé (Ticketing)**

Một hệ thống hỗ trợ và yêu cầu dịch vụ hướng ra bên ngoài được hỗ trợ hoàn toàn bởi lớp dữ liệu và giao diện của NocoBase. Khách hàng có thể trực tiếp gửi và theo dõi các vé, trong khi các quy trình làm việc phụ trợ được tự động kích hoạt để xử lý từng yêu cầu.

![Hệ thống Vé](https://static-docs.nocobase.com/Ticketing%20System-a9un8k.png)

### **Kịch bản 4: Hệ thống Quản lý Nhà cung cấp**

Trong hệ thống này, các nhà cung cấp có thể tải lên hóa đơn, tự động kích hoạt các quy trình làm việc phê duyệt thanh toán. Với khả năng mô hình hóa dữ liệu và quy trình làm việc của NocoBase, toàn bộ quy trình được tự động hóa và hoàn toàn có thể truy xuất nguồn gốc.

## **Kết quả**

Với NocoBase, ED đã đạt được những cải thiện đáng kể về cả tốc độ và chất lượng cung cấp:

* **Rút ngắn chu kỳ cung cấp** — Các mô-đun trước đây yêu cầu 2–3 lần lặp, mỗi lần 15 ngày, giờ đây có thể hoàn thành chỉ trong một lần lặp
* **Kiểm thử và ra mắt nhanh hơn** — Hầu hết các tính năng chỉ yêu cầu kiểm thử chức năng trực tiếp, không cần các lớp phức tạp điển hình của phát triển truyền thống
* **Ổn định sản xuất cao hơn** — Quá trình ra mắt suôn sẻ hơn và sự tự tin của nhóm mạnh mẽ hơn

Các kỹ sư tại ED tin rằng NocoBase đã thay đổi cách họ xây dựng. Mô hình hóa trực quan, CRUD tự động, quy trình làm việc linh hoạt và API được tạo tự động đã giải phóng các nhà phát triển khỏi công việc lặp đi lặp lại, cho phép họ tập trung trực tiếp vào kết quả kinh doanh. Các vòng lặp phản hồi từ QA và người dùng đã trở nên ngắn hơn nhiều, cho phép các dự án đi vào sản xuất nhanh hơn.

Ngày nay, NocoBase đã trở thành xương sống công nghệ của ED: hỗ trợ các hệ thống nội bộ, tạo nền tảng cho các sản phẩm thương mại bên ngoài và hỗ trợ hầu hết mọi hoạt động cung cấp hàng ngày. Quan trọng hơn, phép màu “gặp thứ Hai, nguyên mẫu thứ Tư” này không chỉ là điểm khởi đầu cho sự ngạc nhiên và tin tưởng của khách hàng—nó còn đại diện cho một mô hình cung cấp mới.

## **Triển vọng**

Đối với các nhóm công nghệ trên toàn thế giới, kinh nghiệm của ED cho thấy NocoBase không chỉ đáp ứng các yêu cầu cấp doanh nghiệp—bảo mật, hiệu suất, khả năng mở rộng và khả năng quan sát—mà còn cho phép các vòng lặp lặp nhanh hơn, chuyển trọng tâm từ các tác vụ lặp đi lặp lại sang đổi mới và tạo ra giá trị.

Tại Brazil, ED đã định hình lại mô hình cung cấp của mình với NocoBase. Tiếp theo, họ đặt mục tiêu mang cách tiếp cận này đến nhiều ngành công nghiệp và tổ chức hơn nữa cùng với NocoBase.

**Thêm Câu chuyện Khách hàng:**

* [Phản hồi dưới một giây ở quy mô lớn: Classact chạy NocoBase trên Kubernetes](https://www.nocobase.com/en/blog/classact)
* [Nhà máy Kỹ thuật số của BIEL Crystal: Cung cấp năng lượng cho 1,85 tỷ đơn vị mỗi năm](https://www.nocobase.com/en/blog/bielcrystal)
* [Cách Distinct HealthCare sử dụng NocoBase để xây dựng Hệ thống Chăm sóc Dài hạn Cá nhân hóa](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Hành trình Không-Code bên trong SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [Điều gì đã khiến công ty bất động sản hàng đầu Nhật Bản chuyển từ Salesforce sang NocoBase mã nguồn mở?](https://www.nocobase.com/en/blog/century-21)
* [Cách Second-Brain xây dựng hệ thống AI cho các tổ chức tài chính với NocoBase](https://www.nocobase.com/en/blog/second-brain)
