---
title: "NocoBase 2.0: Gặp gỡ Nhân viên AI của Bạn"
description: "Bây giờ, đã đến lúc chính thức giới thiệu NocoBase 2.0-alpha!"
---

NocoBase 1.0-alpha được phát hành vào ngày 28 tháng 4 năm 2024, đánh dấu sự khởi đầu cho hành trình thương mại của chúng tôi.
Trong hơn một năm qua, chúng tôi đã nhận được phản hồi từ hàng nghìn người dùng, đóng góp mã nguồn từ các nhà phát triển trên toàn thế giới và các đơn đặt hàng thương mại từ hàng trăm công ty tại hơn 50 quốc gia.

Chúng tôi chân thành cảm ơn mọi người dùng, người đóng góp và khách hàng trả phí vì sự tin tưởng và ủng hộ của các bạn.

Trong sáu tháng qua, song song với việc liên tục cải tiến và nâng cấp phiên bản 1.x, chúng tôi cũng đã dành nhiều thời gian để suy nghĩ, thảo luận và phát triển thế hệ NocoBase tiếp theo.

Giờ đây, đã đến lúc chính thức giới thiệu **NocoBase 2.0-alpha!**

## Nhân viên AI

Năm vừa qua chứng kiến những bước tiến vượt bậc của AI, với các mô hình lớn thể hiện khả năng đáng kinh ngạc - thậm chí là đáng ngạc nhiên - trong nhiều lĩnh vực.

Là những người sử dụng AI tích cực, chúng tôi đã đưa AI trực tiếp vào NocoBase 2.0 dưới dạng **Nhân viên AI** - những đồng nghiệp thông minh làm việc ngay trong hệ thống của bạn.

Nhân viên AI trong NocoBase **không phải là chatbot**, cũng không phải các tác nhân độc lập.

Chúng được **tích hợp liền mạch** vào hệ thống kinh doanh của bạn, có khả năng hiểu ngữ cảnh và thực thi nhiệm vụ trực tiếp.

* Chúng xuất hiện bất cứ nơi nào bạn cần - bên cạnh bảng biểu và biểu mẫu của bạn - sẵn sàng hỗ trợ.
* Chúng có thể tóm tắt email, phân tích dữ liệu, sắp xếp nội dung phi cấu trúc và tự động điền biểu mẫu, thiết kế mô hình dữ liệu, hoặc thậm chí viết mã JavaScript.
* Chúng tự động truy xuất dữ liệu ngữ cảnh và cấu trúc trang để thực hiện nhiệm vụ một cách thông minh.
* Mỗi nhân viên có các kỹ năng, công cụ và cơ sở kiến thức riêng.
* Bạn có thể tạo ra số lượng không giới hạn các Nhân viên AI để hình thành đội ngũ AI của riêng mình.

[Tìm hiểu thêm về Nhân viên AI](https://v2.docs.nocobase.com/ai-employees)

[Dùng thử bản Demo](https://demo.nocobase.com/new)

<video controls>
  <source src="https://static-docs.nocobase.com/Meet-Your-AI-Employee-EN.mp4" type="video/mp4">
</video>

## Hệ thống Trang 2.0 Hoàn toàn Mới

Mặc dù NocoBase luôn dựa trên plugin, nhưng phiên bản 1.x có những hạn chế khi xử lý các tương tác động, bố cục linh hoạt hoặc logic tùy chỉnh ở giao diện người dùng.

Rất khó để đạt được những yêu cầu đó mà không tốn kém chi phí đáng kể.

NocoBase 2.0 giới thiệu một **hệ thống trang được tái cấu trúc hoàn toàn** được thiết kế để đáp ứng hiệu quả các nhu cầu giao diện người dùng phức tạp và cá nhân hóa.

### RUNJS

**RunJS** cung cấp một cách nhẹ nhàng để mở rộng và tùy chỉnh logic hoặc kiểu dáng giao diện người dùng - mà không cần tạo plugin hay sửa đổi mã nguồn.

Trong trình thiết kế trang, bạn có thể viết JavaScript trực tiếp để:

* Tùy chỉnh nội dung được hiển thị (trường, khối, cột, mục, v.v.)
* Định nghĩa các tương tác tùy chỉnh (hành động nút, kích hoạt sự kiện)
* Kết hợp với dữ liệu ngữ cảnh cho các hành vi động

RunJS được hỗ trợ trong:

* Khối JS
* Hành động JS
* Trường JS
* Mục JS
* Quy tắc liên kết
* Luồng sự kiện

[Tìm hiểu thêm về RUNJS](https://v2.docs.nocobase.com/interface-builder/runjs)

![20251102213506-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251102213506-2025-11-02-21-35-08.png)

### Luồng Sự kiện

Trong NocoBase 1.x, hệ thống quy tắc liên kết cho phép sắp xếp logic hạn chế, bị giới hạn trong một khối duy nhất.

NocoBase 2.0 giới thiệu **Luồng Sự kiện**, một cải tiến lớn cho cấu hình logic giao diện người dùng.

Một Luồng Sự kiện bao gồm:

* **Sự kiện kích hoạt**, chẳng hạn như trước khi hiển thị, khi nhấp chuột hoặc khi giá trị thay đổi
* **Điều kiện kích hoạt**
* **Các bước hành động**, chẳng hạn như hiển thị thông báo, làm mới các khối mục tiêu hoặc thực thi JavaScript

[Tìm hiểu thêm về Luồng Sự kiện](https://v2.docs.nocobase.com/interface-builder/event-flow)

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251031093341.png)

### Bố cục Lưới

Trong phiên bản 1.x, các khối và trường sử dụng bố cục kéo thả linh hoạt toàn chiều rộng, điều này hạn chế độ chính xác và tính thẩm mỹ.

NocoBase 2.0 giới thiệu **hệ thống bố cục lưới mới**, cho phép mọi phần tử căn chỉnh theo các đơn vị lưới để kiểm soát tinh tế hơn.

![20251031093341-2025-11-02-21-35-08](https://static-docs.nocobase.com/20251029201501.gif)

### Khối và Cửa sổ Modal Có thể Tái sử dụng

Trong 1.x, các tính năng sao chép/tham chiếu cho khối còn hạn chế và dễ gây lỗi, và toàn bộ cửa sổ modal không thể được tham chiếu.

NocoBase 2.0 định nghĩa lại hoàn toàn điều này - cho phép **tham chiếu và sao chép linh hoạt** cả khối và cửa sổ modal, giảm đáng kể công sức cấu hình.

[Tìm hiểu thêm về Tham chiếu & Sao chép Khối](https://v2.docs.nocobase.com/interface-builder/blocks/other-blocks/block-reference)

[Tìm hiểu thêm về Tham chiếu Modal](https://v2.docs.nocobase.com/interface-builder/actions/action-settings/edit-popup)

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102211459_rec_.gif)

### Trải nghiệm Khối được Cải thiện

Dựa trên phản hồi của người dùng, NocoBase 2.0 mang đến nhiều cải tiến cho các thành phần khối.

Ví dụ: bảng hiện hỗ trợ **chỉnh sửa nội tuyến** trực tiếp trong ô - không cần cửa sổ popup.

Nhiều cải tiến hơn nữa đang được thực hiện.

![20251102215026-2025-11-02-21-50-28](https://static-docs.nocobase.com/20251102215026-2025-11-02-21-50-28.png)

### Hiệu suất Tốt hơn

NocoBase 2.0 mang lại hiệu suất giao diện người dùng được cải thiện đáng kể so với 1.x.

## FlowEngine

Hệ thống trang mới trong 2.0 được hỗ trợ bởi **FlowEngine** - một công cụ frontend low-code thế hệ mới kết hợp **Models** và **Flows**.

Nó đơn giản hóa logic giao diện người dùng, tăng cường khả năng tái sử dụng và cải thiện khả năng bảo trì.

Bằng cách tận dụng bản chất có thể cấu hình của Flow, nó mang khả năng sắp xếp no-code đến các thành phần giao diện người dùng và logic nghiệp vụ.

Việc phát triển frontend plugin trong 1.x thường gặp nhiều thách thức phức tạp. Với FlowEngine, những điều này nay đã được đơn giản hóa rất nhiều.

[Tìm hiểu thêm về FlowEngine](https://v2.docs.nocobase.com/flow-engine/what-is-flow-engine)

## Đa Ứng dụng và Đa Không gian

Phiên bản 1.x hỗ trợ khả năng đa ứng dụng cơ bản, nhưng tất cả các ứng dụng đều chia sẻ một tiến trình duy nhất và không thể được giám sát hoặc quản lý riêng lẻ.

NocoBase 2.0 giới thiệu **kiến trúc Đa Ứng dụng và Đa Không gian hoàn toàn mới**.

* **Plugin Đa Ứng dụng** *(đang phát triển)*
  Cho phép tạo và quản lý động nhiều ứng dụng độc lập mà không cần triển khai riêng biệt.
  Mỗi ứng dụng chạy như một thực thể độc lập với cơ sở dữ liệu, plugin và cấu hình riêng - trong các tiến trình biệt lập hoặc chia sẻ.
  Ứng dụng cha có thể giám sát và quản lý việc sử dụng tài nguyên cũng như trạng thái của các ứng dụng con, lý tưởng cho các tình huống đa đối tác (multi-tenant).
* **Plugin Đa Không gian**
  Cho phép cách ly logic trong một thực thể duy nhất - hoàn hảo cho các tình huống như đa chi nhánh hoặc đa nhà máy.
  Logic nghiệp vụ, quy trình làm việc và cấu hình vẫn nhất quán, trong khi dữ liệu được cách ly hoàn toàn.

[Tìm hiểu thêm về Đa Không gian](https://v2.docs.nocobase.com/multi-app/multi-space)

![20251102220714-2025-11-02-22-07-16](https://static-docs.nocobase.com/20251102220714-2025-11-02-22-07-16.png)

## Trực quan hóa Dữ liệu Mới

Plugin biểu đồ 1.x dựa trên Ant Design Charts và ECharts, phù hợp cho các trường hợp đơn giản nhưng bị hạn chế đối với các biểu đồ phức tạp, tương tác hoặc có liên kết.

NocoBase 2.0 giới thiệu **Plugin Trực quan hóa Dữ liệu mới** được xây dựng hoàn toàn trên ECharts, hỗ trợ:

* Chế độ cấu hình trực quan
* Chế độ SQL và JSON
* Tương tác dựa trên sự kiện
* Liên kết đa biểu đồ và khoan xuống (drill-down)

Và nếu SQL hoặc JSON có vẻ quá phức tạp - Nhân viên AI **Nathan** của bạn có thể giúp đỡ.

[Tìm hiểu thêm về Trực quan hóa Dữ liệu](https://v2.docs.nocobase.com/data-visualization)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/20251102221207-2025-11-02-22-12-09.png)

## Đồng bộ Cấu trúc Cơ sở dữ liệu & Thay đổi Loại Trường

Trong phiên bản 1.x, các bảng và trường chỉ có thể được tạo thông qua Trình quản lý Nguồn dữ liệu của NocoBase và loại trường không thể thay đổi sau đó.

NocoBase 2.0 hiện cho phép:

* Đồng bộ các bảng và trường hiện có từ cơ sở dữ liệu chính của bạn
* Thay đổi loại trường sau khi tạo

Điều này có nghĩa là bạn có thể sử dụng trực tiếp lược đồ cơ sở dữ liệu hiện có làm nguồn dữ liệu chính của mình.

![20251102222325-2025-11-02-22-23-27](https://static-docs.nocobase.com/20251102222325-2025-11-02-22-23-27.png)

## Các Plugin Bổ sung

### Lịch sử Bản ghi

Plugin Lịch sử Bản ghi tự động theo dõi các thay đổi dữ liệu - chèn, cập nhật, xóa - lưu ảnh chụp nhanh và sự khác biệt (diff) cho mục đích kiểm toán và khôi phục.

[Tìm hiểu thêm về Lịch sử Bản ghi](https://v2.docs.nocobase.com/record-history/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/202511011346400.png)

### Bản nháp Biểu mẫu

Plugin Bản nháp Biểu mẫu tự động lưu dữ liệu nháp trong khi người dùng điền vào biểu mẫu, ngăn ngừa mất dữ liệu ngoài ý muốn.

### Trình quản lý Email Mới

Được xây dựng lại với FlowEngine, Trình quản lý Email mới tích hợp liền mạch các Nhân viên AI để tóm tắt, phân tích và soạn thảo email.

Nó cũng giới thiệu tính năng tự động lưu nháp và các cải tiến khác.

[Tìm hiểu thêm về Trình quản lý Email](https://v2.docs.nocobase.com/email-manager/)

![20251102221207-2025-11-02-22-12-09](https://static-docs.nocobase.com/email-manager/Loading--10-31-2025_08_31_PM.png)

## Nâng cấp từ 1.x lên 2.0

Việc nâng cấp từ 1.x lên 2.0 rất đơn giản - chỉ cần làm theo [hướng dẫn chính thức](https://v2.docs.nocobase.com/get-started/upgrading/docker).

Tuy nhiên, xin lưu ý rằng **NocoBase 2.0 hiện đang ở giai đoạn alpha**, vì vậy có thể có một số sự không ổn định.

Nhờ **kiến trúc tách rời giữa giao diện người dùng và dữ liệu** của NocoBase, các ứng dụng 1.x hiện tại của bạn sẽ vẫn hoàn toàn nguyên vẹn.

Khi tạo trang mới, giờ đây bạn có thể chọn giữa loại **v1** và **v2** - chọn v2 để truy cập các tính năng mới của NocoBase 2.0.

![20251102222729-2025-11-02-22-27-31](https://static-docs.nocobase.com/20251102222729-2025-11-02-22-27-31.png)
