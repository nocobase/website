---
title: "Phản hồi dưới một giây ở quy mô lớn: Classact chạy NocoBase trên Kubernetes"
description: "Classact triển khai NocoBase trên Kubernetes, đạt được phản hồi dưới một giây cho hàng trăm nghìn bản ghi, bao gồm quản lý nhân sự và tuân thủ, đồng thời tăng đáng kể hiệu quả và trải nghiệm người dùng."
---

## **Về Classact**

[Công ty TNHH Classact](https://www.classact.co.jp/) là nhà cung cấp dịch vụ hạ tầng CNTT, cung cấp hỗ trợ kỹ thuật và nhân sự kỹ thuật. Đây cũng là một trong những công ty đầu tiên tại Nhật Bản nhận chứng nhận Đối tác Vàng Proxmox, với nhiều kinh nghiệm trong lĩnh vực ảo hóa và trung tâm dữ liệu. Song song với việc cung cấp các giải pháp CNTT có tính sẵn sàng cao cho khách hàng, Classact cũng nỗ lực hợp lý hóa các hệ thống và quy trình nội bộ của chính mình để đảm bảo hiệu quả vận hành và tuân thủ quy định.

Giống như nhiều công ty khác, nhu cầu số hóa của Classact không chỉ giới hạn ở các đội ngũ kỹ thuật. Các phòng ban như hành chính, nhân sự và kinh doanh cũng cần những hệ thống đáng tin cậy để quản lý tuyển dụng, vận hành nhân viên, đào tạo và tuân thủ an ninh thông tin.

![company.png](https://static-docs.nocobase.com/1-ifaq7k.png)

## **Thách thức và Yêu cầu**

Trước khi áp dụng NocoBase, Classact chủ yếu dựa vào công cụ mã nguồn mở Exment để quản lý cơ sở dữ liệu nội bộ.

![exment.PNG](https://static-docs.nocobase.com/2-x35h8j.PNG)

Tuy nhiên, khi hoạt động kinh doanh mở rộng và khối lượng dữ liệu tăng lên, các vấn đề về hiệu năng của Exment bắt đầu ảnh hưởng đến việc sử dụng hàng ngày:

* **Tải trang chậm**: Với các tập dữ liệu lớn, một trang có thể mất 5–10 giây để tải, làm chậm đáng kể quy trình làm việc.
* **Trải nghiệm người dùng kém**: Thời gian chờ đợi lâu dẫn đến nhiều khiếu nại từ nhân viên và giảm động lực sử dụng hệ thống.
* **Khả năng mở rộng hạn chế**: Hệ thống thiếu tính linh hoạt để đáp ứng nhu cầu kinh doanh ngày càng tăng hoặc hỗ trợ các tình huống ứng dụng mới.

Đồng thời, các đội nhóm khác nhau đã thử nghiệm các công cụ khác. Một số áp dụng ClickUp để quản lý tác vụ, trong khi Classact cũng đánh giá Airtable và NocoDB.

Thông qua quá trình khám phá này, Classact đã làm rõ các yêu cầu cho một giải pháp mới:

* **Hiệu năng cao**: Xử lý hàng trăm nghìn bản ghi trong khi vẫn duy trì thời gian phản hồi nhanh.
* **Tính linh hoạt**: Cho phép các phòng ban nhanh chóng điều chỉnh ứng dụng theo nhu cầu cụ thể của họ.
* **Kiểm soát doanh nghiệp**: Hỗ trợ triển khai tự quản lý và riêng tư, đảm bảo toàn quyền kiểm soát dữ liệu.

Những yêu cầu này cuối cùng đã dẫn Classact đến việc chọn NocoBase là giải pháp phù hợp nhất.

## **Triển khai và Xác thực**

Trước khi đưa vào sử dụng chính thức, Classact đã thử nghiệm NocoBase trong môi trường staging. Nhóm đã nhập hàng trăm nghìn bản ghi để mô phỏng các tình huống kinh doanh thực tế, tập trung vào hiệu năng truy vấn và tải trang. Kết quả cho thấy NocoBase duy trì hiệu năng ổn định ngay cả với các tập dữ liệu lớn, đáp ứng đầy đủ kỳ vọng.

Dựa trên sự xác thực này, công ty đã triển khai NocoBase trên cụm Kubernetes tự quản lý của mình để đảm bảo tính ổn định cấp doanh nghiệp. Nhóm kỹ thuật cũng đã mua một số plugin, giúp tăng tốc phát triển ứng dụng và cho phép triển khai nhanh chóng các hệ thống quản lý vận hành nhân viên và đào tạo vốn đã bị đình trệ trước đó.

Cách tiếp cận triển khai và xác thực này không chỉ khẳng định độ tin cậy của NocoBase về hiệu năng và khả năng mở rộng mà còn cho phép Classact di chuyển với rủi ro tối thiểu và nhanh chóng thúc đẩy quá trình chuyển đổi số nội bộ.

## **Phạm vi Ứng dụng**

Sau khi triển khai, Classact đã nhanh chóng xây dựng và đưa vào vận hành một loạt ứng dụng để hỗ trợ các khía cạnh khác nhau của hoạt động nội bộ. Các ứng dụng này bao gồm các quy trình kinh doanh phổ biến như Nhân sự, Dịch vụ nhân viên và Quản lý tài sản, cũng như các lĩnh vực chuyên biệt hơn như tuân thủ ISMS và chương trình cố vấn.

![nocobase](https://static-docs.nocobase.com/3-z5vksi.PNG)

![nocobase.PNG](https://static-docs.nocobase.com/4-g1sz0z.PNG)

* **Quản lý Nguồn nhân lực**

Duy trì dữ liệu nhân viên, báo cáo và thông báo đào tạo, hoạt động tuyển dụng (hồ sơ phỏng vấn và thông báo), phân công vai trò và vị trí, bầu cử đại diện nhân viên và theo dõi chứng chỉ chuyên môn.

* **Dịch vụ Nhân viên**

Cập nhật thông tin (ví dụ: địa chỉ hoặc lộ trình đi làm), đăng ký phúc lợi, hoàn trả chi phí, mua thiết bị và sách, yêu cầu danh thiếp, tư vấn y tế và báo cáo cho các sự kiện mừng hoặc viếng.

* **Quản lý Tài sản và Công việc**

Quản lý tài sản hệ thống nội bộ và thiết bị, cùng với theo dõi công việc hàng ngày.

* **Học tập và Phát triển**

Quản lý giấy phép E-learning, quản lý chương trình cố vấn và báo cáo để hỗ trợ sự phát triển liên tục của nhân viên.

* **An ninh Thông tin và Tuân thủ**

Quản lý vận hành ISMS để đáp ứng các tiêu chuẩn an ninh thông tin.

* **Thu thập Dữ liệu và Tương tác**

Biểu mẫu công khai để thu thập thông tin ứng viên, khảo sát nhân viên và phản hồi nội bộ.

Hầu hết các hệ thống doanh nghiệp chỉ bao gồm một tình huống duy nhất, buộc các tổ chức phải dựa vào nhiều công cụ để quản lý các quy trình khác nhau song song. **NocoBase phá vỡ giới hạn này, cho phép Classact tự do xây dựng và kết hợp các ứng dụng trong một nền tảng duy nhất.**

Với cách tiếp cận này, Classact đã tạo ra một nền tảng quản lý nội bộ tích hợp phù hợp với nhu cầu của mình, với tính linh hoạt vượt trội so với các giải pháp truyền thống.

## **Kết quả**

Bằng cách áp dụng NocoBase, Classact đã đạt được những cải thiện đáng kể về cả hiệu năng và trải nghiệm người dùng:

* **Tối ưu hóa hiệu năng**: Thời gian tải trang giảm từ 5–10 giây xuống chỉ còn 1–2 giây, cải thiện đáng kể hiệu quả hàng ngày.
* **Sự hài lòng của người dùng cao hơn**: Giảm thời gian chờ đợi làm giảm sự thất vọng và phản kháng, dẫn đến phản hồi tích cực nhất quán từ nhân viên.
* **Trực quan hóa**: Biểu đồ, bộ lọc linh hoạt và các tùy chọn hiển thị giúp việc phân tích dữ liệu trở nên trực quan hơn nhiều.
* **Tối ưu hóa quy trình**: Các tính năng quy trình làm việc đã đơn giản hóa hơn nữa các quy trình kinh doanh phức tạp.

Classact cũng chia sẻ phản hồi tích cực về trải nghiệm của họ với NocoBase:

> *“Điều chúng tôi đánh giá cao nhất ở NocoBase là sự ổn định và khả năng mở rộng. Ngay cả với các tập dữ liệu lớn, nó luôn mang lại hiệu năng ổn định. Các tính năng biểu đồ cung cấp cho chúng tôi khả năng trực quan hóa dữ liệu trực quan, plugin LDAP cho phép tích hợp liền mạch với Active Directory, các biểu mẫu công khai giúp thu thập dữ liệu ứng viên và nhân viên dễ dàng, và các chức năng quy trình làm việc đã hợp lý hóa đáng kể các quy trình nội bộ của chúng tôi.”*  — **Hidetoshi Honma, CEO của Classact**

## **Kết luận**

Kinh nghiệm của Classact cho thấy NocoBase không chỉ mang lại thời gian phản hồi dưới một giây với các tập dữ liệu hàng trăm nghìn bản ghi mà còn, thông qua việc triển khai Kubernetes và kiến trúc plugin, hỗ trợ các nhu cầu phức tạp của nhiều phòng ban, nhiều quy trình trên một nền tảng duy nhất.

Không giống như các hệ thống riêng rẽ truyền thống, NocoBase cung cấp một kiến trúc hướng mô hình, có thể mở rộng và có thể kết hợp. Điều này cho phép các doanh nghiệp liên tục phát triển các hệ thống nội bộ của họ với chi phí thấp hơn trong khi vẫn dành chỗ cho việc mở rộng trong tương lai.


**Thêm Câu chuyện Khách hàng:**

* [Nhà máy Số của BIEL Crystal: Cung cấp năng lượng cho 1,85 Tỷ Đơn vị Mỗi Năm](https://www.nocobase.com/en/blog/bielcrystal)
* [Distinct HealthCare Sử dụng NocoBase để Xây dựng Hệ thống Chăm sóc Dài hạn Cá nhân hóa như thế nào](https://www.nocobase.com/en/blog/distinct-healthcare)
* [Hành trình Không Mã bên trong SHIMANO](https://www.nocobase.com/en/blog/shimano)
* [Điều gì đã khiến công ty bất động sản hàng đầu Nhật Bản chuyển từ Salesforce sang NocoBase mã nguồn mở?](https://www.nocobase.com/en/blog/century-21)
* [Second-Brain đã xây dựng hệ thống AI cho các tổ chức tài chính với NocoBase như thế nào](https://www.nocobase.com/en/blog/second-brain)
* [Thương hiệu Máy ghi âm Giọng nói AI Số 1 đã Xây dựng Hệ thống Nội bộ của mình như thế nào](https://www.nocobase.com/en/blog/plaud)
