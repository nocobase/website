---
title: "Khám phá cách Sinopec No.5 Construction tận dụng NocoBase để thúc đẩy tin học hóa dự án CRISP tại Singapore!"
description: "Khám phá cách SFCC triển khai thành công quản lý số hóa bằng NocoBase trong dự án CRISP tại Singapore, tìm hiểu ưu điểm ứng dụng và phương pháp triển khai NocoBase trong ngành công nghiệp hóa dầu."
---

Công ty TNHH Xây dựng số 5 Sinopec, một đơn vị chủ chốt trong ngành công nghiệp hóa dầu, đang sử dụng NocoBase như một phần trong quá trình chuyển đổi số dưới sự lãnh đạo của giám đốc CNTT, ông Đổng Kha. Hãy cùng tìm hiểu câu chuyện này!

## 1. **Bối cảnh và Thách thức**

Công ty TNHH Xây dựng số 5 Sinopec (sau đây gọi tắt là SFCC) là doanh nghiệp xây dựng quy mô lớn đầu tiên tham gia vào lĩnh vực xây dựng hóa dầu tại Trung Quốc. Một trong những mảng kinh doanh chính của công ty là xây dựng cơ sở hạ tầng hóa dầu, bao gồm lọc dầu, hóa chất, khí đốt tự nhiên, kho chứa và vận chuyển cho các khu vực trong nước và quốc tế. Một dự án điển hình mà SFCC đã thực hiện là dự án nhà máy lọc dầu mới ở Kuwait, với hợp đồng trị giá lên tới 519 triệu đô la Mỹ. Sau khi hệ thống đi vào hoạt động, sản lượng dầu của Kuwait sẽ tăng thêm 31,5 triệu tấn mỗi năm[[1](http://industry.people.com.cn/n1/2019/0410/c413883-31023309.html)].

![ngành công nghiệp hóa dầu](https://static-docs.nocobase.com/296cb1e212172bd83f826ef2d78610c6.PNG)

Là một đơn vị quan trọng trong lĩnh vực xây dựng hóa dầu, SFCC cũng là một trong những doanh nghiệp đầu tiên trong ngành áp dụng tin học hóa và số hóa. Người dẫn đầu kỹ thuật, ông Đổng Kha, đã trải qua một giai đoạn chuyển đổi số quan trọng cùng với SFCC.

Quá trình chuyển đổi số của các ngành công nghiệp truyền thống có thể bắt nguồn từ giữa những năm 90 của thế kỷ 20, cùng với sự phát triển nhanh chóng của công nghệ thông tin và tự động hóa. Sau nhiều thập kỷ phát triển, thị trường hệ thống ERP công nghiệp ngày càng trưởng thành, với hàng ngàn giải pháp xuất hiện. Tuy nhiên, ngành công nghiệp hóa dầu vẫn khó tìm được một phần mềm hoặc giải pháp số đa năng.

Điều này chủ yếu là do tính chất độc đáo của ngành. Như ông Đổng đã nói, "(Vấn đề là) các nhà cung cấp phần mềm không thể hiểu được các yêu cầu cụ thể của ngành hóa dầu, trong khi chúng tôi không có các nhà phát triển phần mềm chuyên nghiệp để biến các yêu cầu phức tạp của mình thành mã."

Do đó, ông Đổng và nhóm của mình đã phải bắt đầu từ con số không, khám phá nhiều công nghệ khác nhau và cố gắng xây dựng phiên bản alpha của hệ thống bằng Access và ngôn ngữ macro VB. Giải pháp này khá chi phí thấp và nhanh chóng bắt đầu, giúp SFCC đi vào làn đường nhanh của quá trình số hóa.

Ở giai đoạn đầu, giải pháp này hoạt động tốt và tiết kiệm chi phí. Khi dự án chuyển sang giai đoạn giữa, những nhược điểm của Access và ngôn ngữ macro VB bắt đầu bộc lộ. Thứ nhất, cơ sở dữ liệu Access lý tưởng cho các ứng dụng cơ sở dữ liệu vừa và nhỏ. Tuy nhiên, các vấn đề về hiệu suất có thể phát sinh khi xử lý lượng lớn dữ liệu hoặc khi nhiều người dùng truy cập đồng thời. Thứ hai, việc cập nhật hệ thống để đáp ứng các yêu cầu kinh doanh thay đổi nhanh chóng sẽ đòi hỏi một lượng lớn công việc lập trình thủ công, dẫn đến chi phí bảo trì tăng lên và nguy cơ xảy ra lỗi.

## 2. **Tìm kiếm giải pháp thay thế**

Bước ngoặt xảy ra khi ông Đổng tìm kiếm một giải pháp phần mềm mới để đáp ứng các yêu cầu gia tăng của dự án bảng điều khiển công việc quản lý mới của SFCC. Dự án nhằm mục đích áp dụng các nguyên tắc quản lý chất lượng tổng thể vào hệ thống quản lý số, tích hợp năm yếu tố chính ảnh hưởng đến chất lượng sản phẩm: con người, máy móc, nguyên vật liệu, phương pháp và môi trường.

Sau nhiều năm thực hành, ông Đổng Kha ưu tiên phát triển nội bộ. Vì không có giải pháp có sẵn, ông đã chuyển sang các dự án mã nguồn mở hoặc framework phát triển để giảm thiểu chi phí và vấn đề khi bắt đầu từ con số không.

Ông đã sử dụng một loạt công cụ để triển khai các yếu tố khác nhau của hệ thống: Ant Design Pro để thiết kế giao diện người dùng hệ thống, Formily để thực hiện quản lý biểu mẫu, và công cụ G2Plot để trình bày biểu đồ và đồ thị, v.v. Tuy nhiên, vẫn còn một chặng đường dài để hoàn thành việc phát triển toàn bộ hệ thống.

Hãy tưởng tượng việc xây một ngôi nhà với các công cụ có sẵn: xẻng, búa, bao xi măng và gạch, nhưng bạn vẫn phải xây toàn bộ ngôi nhà từng viên gạch một.

Điều tương tự cũng áp dụng cho phát triển phần mềm. Trước khi sử dụng, cần phải triển khai nhiều chức năng, bao gồm hệ thống người dùng, quản lý quyền, gọi thư viện biểu đồ, tham chiếu thư viện biểu mẫu...

Ngay khi ông Đổng tiếp tục khám phá các công cụ mã nguồn mở phù hợp trên GitHub, NocoBase đã thu hút sự chú ý của ông với những điểm nổi bật sau:

* Hướng theo mô hình dữ liệu: phù hợp với logic phát triển hệ thống, nơi mô hình hóa dữ liệu được ưu tiên hàng đầu.
* Trình chỉnh sửa WYSIWYG: giúp xây dựng biểu mẫu và trang một cách rất dễ dàng.
* Cắm và Chạy: các plugin mới có thể được phát triển và cài đặt để đáp ứng các yêu cầu mới.

Ông nghĩ rằng nếu nhóm của mình có thể phát triển hệ thống của SFCC dựa trên NocoBase, nó sẽ giúp giải quyết các vấn đề hiện tại và do đó giảm đáng kể khối lượng công việc và độ phức tạp của việc phát triển hệ thống.

Hãy xem lại phép so sánh về việc xây nhà. Các thành phần đúc sẵn và thiết bị xây dựng tự động đã thay đổi quy trình xây dựng. Thay vì từng viên gạch một, các bộ phận nhà đúc sẵn có thể được lắp ráp nhanh chóng bằng thiết bị tự động, dẫn đến xây dựng chính xác và hiệu quả. Cách tiếp cận này làm giảm đáng kể lao động thủ công và thời gian cần thiết để xây dựng.

![xây nhà, Hình ảnh được tạo bởi ChatGPT.](https://static-docs.nocobase.com/a93725c4ef24a8d05c8401f28b521ff5.PNG)

Tương tự, NocoBase là một nền tảng No-code cung cấp các thành phần được tạo sẵn và các công cụ xây dựng tự động để SFCC xây dựng phần mềm mà không cần viết mã từng dòng. Ngoài ra, ngăn xếp công nghệ mà NocoBase sử dụng rất phù hợp với các dự án của SFCC, cho phép ông Đổng và nhóm của mình nhanh chóng bắt đầu sử dụng NocoBase để chứng minh khái niệm.

Sử dụng trình chỉnh sửa WYSIWYG, các yêu cầu chung của SFCC cũng có thể được triển khai nhanh chóng thông qua phần no-code của NocoBase bằng cách kéo và thả đơn giản. Đối với các chức năng tùy chỉnh, nhóm của ông Đổng có thể phát triển các plugin mới dựa trên [tài liệu phát triển](https://docs.nocobase.com/development) chuyên dụng. **Tính linh hoạt này được kích hoạt bởi kiến trúc vi nhân và plugin của NocoBase.**

Sau khi xác nhận các khái niệm sản phẩm, nhóm của ông Đổng đã bắt đầu xây dựng toàn bộ hệ thống bằng NocoBase. Trong khi đó, ông Đổng đã tích cực đóng góp cho cộng đồng mã nguồn mở NocoBase trong hơn hai năm.

## 3. Tiến độ và Kết quả

Khi NocoBase phát triển trong hai năm qua, ông Đổng chịu trách nhiệm về đổi mới hệ thống và phát triển nội bộ tại các chi nhánh nước ngoài của SFCC. Trong thời gian này, ông đã dẫn dắt nhóm hoàn thành việc cải tiến hệ thống và thúc đẩy **dự án CRISP Singapore**, một trong những dự án quan trọng của SFCC.

Các thông số kỹ thuật thiết kế API **đơn giản** và **chuẩn mực** của NocoBase tạo điều kiện cho việc nhập và xuất nhanh chóng các tài nguyên dịch vụ thông qua HTTP RESTful API. Ngoài ra, NocoBase có thể nhanh chóng mở rộng quy mô và tích hợp các dịch vụ của bên thứ ba, cho phép tương tác và điều phối tài nguyên linh hoạt cả trong và ngoài hệ thống. Kết quả là, ông Đổng và nhóm của mình có thể xử lý hiệu quả các yêu cầu dữ liệu và logic nghiệp vụ, đồng thời chọn chế độ tương tác phù hợp nhất dựa trên nhu cầu của họ.

Hiện tại, hệ thống Quản lý Hiệu quả Công việc Nhân sự, một phần của dự án CRISP Singapore, đã được phát triển với NocoBase và hoạt động trơn tru. Trường hợp này đã mang lại các phương pháp hay nhất vô giá, sẽ nâng cao đáng kể sự thành công của việc triển khai trên toàn công ty.

### Kiến trúc kỹ thuật của hệ thống

**NocoBase - Trung tâm điều khiển và ứng dụng là một trung tâm** để xây dựng, phát triển và quản lý các ứng dụng cũng như tích hợp các hệ thống khác nhau.

* Plugin xác thực: chịu trách nhiệm xác thực và ủy quyền để đảm bảo an toàn hệ thống.
* Người dùng & Quyền: quản lý người dùng và quyền của họ để đảm bảo những người dùng khác nhau có quyền truy cập phù hợp.
* API tài nguyên: cung cấp giao diện truy cập tài nguyên bên ngoài và nội bộ, hỗ trợ RESTful API và các cuộc gọi dịch vụ nội bộ (RPC).
* Trực quan hóa dữ liệu: trực quan hóa dữ liệu để phân tích và ra quyết định.
* Quy trình làm việc tự động: tự động hóa các quy trình kinh doanh để nâng cao năng suất.
* Ứng dụng (ứng dụng kinh doanh): đáp ứng hiệu quả các nhu cầu đa dạng của các tình huống kinh doanh.

**Các nền tảng bên thứ ba được tích hợp:**

* Cloudflare Workers: Xử lý các yêu cầu HTTP để cải thiện tốc độ phân phối nội dung và thời gian phản hồi ứng dụng.
* Nền tảng tích hợp Lark: Tích hợp các dịch vụ Lark (một ứng dụng IM) để đạt được sự cộng tác và giao tiếp trong công ty.
* Supabase: Cung cấp lưu trữ cơ sở dữ liệu và xác thực như một dịch vụ back-end.
* Logto: Chịu trách nhiệm xác thực và ủy quyền để đảm bảo an toàn hệ thống.

![kiến trúc kỹ thuật](https://static-docs.nocobase.com/ed5586e6e972ff5beaa41548e55b844e.png)

Ông Đổng chia sẻ, "Tính năng tốt nhất của NocoBase là chuyển đổi chế độ cấu hình một cú nhấp chuột và hỗ trợ [HTTP API](https://docs.nocobase.com/handbook/api-doc) toàn diện."

NocoBase cho phép các nhà phát triển nhấp vào nút chuyển đổi chế độ ở góc trên bên phải để chuyển từ chế độ phát triển sang chế độ sản phẩm. Kết quả là, các nhà phát triển có thể xây dựng một trang chỉ trong vài phút.

Các nhà phát triển có thể dễ dàng tích hợp NocoBase vào các hệ thống hiện có của họ bằng cách tương tác với dữ liệu thông qua các yêu cầu API, cho phép khả năng xử lý dữ liệu có thể tùy chỉnh và mở rộng.

Ví dụ, nhóm của ông Đổng đã sử dụng NocoBase để phát triển các bảng điều khiển dữ liệu nhằm giám sát hiệu quả nguồn nhân lực của SFCC. Hệ thống được liên kết với khoảng 60 máy chấm công thông qua API NocoBase. Sau khi dữ liệu thô được thu thập qua API, nó được xử lý bằng cách sử dụng quản lý quy trình kinh doanh tự động trong NocoBase Workflow và sau đó được chuyển đến bảng điều khiển của các nhà quản lý.

Trước đây, tổng chi phí thu thập dữ liệu, xử lý tự động và trực quan hóa là hơn 1 triệu CNY (hoặc 140.000 đô la). **Sử dụng NocoBase có thể giảm chi phí tới 85%.**

![bảng điều khiển](https://static-docs.nocobase.com/a54b49b032513b3628ecb24909b0167d.jpeg)

Hiện tại, các phần khác của quá trình phát triển hệ thống cũng đang tiến triển ổn định. Ông Đổng ước tính sẽ mất tổng cộng 5 tháng để hoàn thành toàn bộ hệ thống và đưa vào vận hành, sớm hơn nửa năm so với thời gian lập kế hoạch ban đầu là 11 tháng, **giảm thời gian giao hàng xuống 55%.**

![bảng điều khiển](https://static-docs.nocobase.com/3d7ccb4af4f8c5ad8b1c1557ed838533.png)

Là một nhà phát triển front-end kỳ cựu, ông Đổng hiểu thách thức trong việc cân bằng giữa low-code, hiệu suất và tính linh hoạt. Tuy nhiên, dựa trên kinh nghiệm của mình, ông tin rằng NocoBase đã đạt được sự cân bằng tốt giữa ba tính năng này.

Việc hoàn thành xác minh dự án cho SFCC, một doanh nghiệp hàng đầu trong ngành công nghiệp hóa dầu, là một hành trình đáng ngạc nhiên đối với NocoBase. Các khả năng của sản phẩm không chỉ được nâng cao bởi dự án thực tế, mà nó còn chứng minh khả năng của NocoBase trong việc thúc đẩy chuyển đổi số cho một dự án công nghiệp phức tạp và chuyên sâu như vậy.

Với [việc phát hành NocoBase 1.0](https://www.nocobase.com/en/blog/release-v10), nhóm sản phẩm hiện đang tập trung vào **cải thiện tính ổn định và hiệu suất,** đáp ứng kỳ vọng của các nhà phát triển như ông Đổng. Nhóm sản phẩm NocoBase đặt mục tiêu giúp SFCC đẩy nhanh việc triển khai kinh doanh trong ngành công nghiệp hóa dầu và thúc đẩy hiệu quả kinh doanh tổng thể.
