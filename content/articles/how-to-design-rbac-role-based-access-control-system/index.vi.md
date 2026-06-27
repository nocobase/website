---
title: "Cách thiết kế hệ thống RBAC (Kiểm soát truy cập dựa trên vai trò)"
description: "Giải thích chi tiết về các khái niệm cốt lõi, mẫu thiết kế và phương pháp triển khai của hệ thống RBAC, kèm các trường hợp thực tế từ NocoBase để giúp bạn xây dựng hệ thống phân quyền an toàn và hiệu quả."
---

📝 Lưu ý: Bài viết này được cập nhật lần cuối vào ngày 12 tháng 3 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

## Tại Sao RBAC Lại Quan Trọng

Trong các ứng dụng doanh nghiệp hiện đại, việc kiểm soát **ai có thể truy cập dữ liệu nào và thực hiện hành động nào** là một khả năng nền tảng nhưng quan trọng. Khi tổ chức phát triển, hệ thống trở nên phức tạp hơn, vai trò người dùng đa dạng hơn và các yêu cầu về bảo mật dữ liệu, kiểm soát truy cập và tuân thủ ngày càng khắt khe. Tại thời điểm này, một hệ thống kiểm soát truy cập rõ ràng, có thể bảo trì và mở rộng trở nên thiết yếu.

Một trong những mô hình được sử dụng rộng rãi và thực tế nhất cho mục đích này là **RBAC—Kiểm soát Truy cập Dựa trên Vai trò**.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển không-code/low-code mạnh mẽ nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

Ý tưởng cốt lõi đằng sau RBAC rất đơn giản: **quyền được gán cho các vai trò và người dùng có được quyền bằng cách được gán vai trò**. Nói cách khác, thay vì gán quyền cho từng người dùng riêng lẻ, bạn xác định một tập hợp các vai trò và quyền liên quan của chúng, sau đó gán người dùng vào các vai trò phù hợp.

Thiết kế này đặc biệt hiệu quả trong các tổ chức có nhiều vai trò, quyền được phân lớp và cộng tác đa hệ thống.

💡 Đọc thêm: [Làm thế nào để xây dựng các ứng dụng CRUD hiệu quả?](https://www.nocobase.com/en/blog/how-to-build-efficient-crud-apps)

## Các Khái Niệm Cốt Lõi của RBAC

Về cốt lõi, mô hình RBAC trả lời một câu hỏi duy nhất:

> **Ai (Người dùng) có thể làm gì (Quyền) với tài nguyên nào (Tài nguyên)?**

Để giải quyết vấn đề này, RBAC chia nhỏ kiểm soát truy cập thành bốn yếu tố chính:

### 1. **Người dùng (User)**

Một cá nhân sử dụng hệ thống. Đây có thể là nhân viên, đối tác bên ngoài hoặc tài khoản hệ thống. Một người dùng có thể được gán một hoặc nhiều vai trò.

### 2. **Vai trò (Role)**

Một vai trò đại diện cho một chức năng công việc hoặc trách nhiệm—chẳng hạn như Nhân viên Bán hàng, Quản lý Bán hàng hoặc Quản trị viên. Một vai trò không phải là một người mà là một **nhóm quyền trừu tượng**.

Ví dụ:

* Một **Quản lý Bán hàng** có thể có quyền:
  * Xem tất cả dữ liệu khách hàng
  * Cập nhật trạng thái bán hàng
  * Gán khách hàng tiềm năng cho các nhân viên bán hàng khác
* Một **Nhân viên Bán hàng**, mặt khác, chỉ có thể:
  * Xem hồ sơ khách hàng của riêng họ
  * Thêm ghi chú theo dõi

### 3. **Quyền (Permission)**

Một quyền xác định hành động nào có thể được thực hiện trên một tài nguyên. Các hành động phổ biến bao gồm:

* Đọc (xem)
* Tạo
* Chỉnh sửa / Cập nhật
* Xóa
* Phê duyệt, xuất, in hoặc các hành động tùy chỉnh khác

### 4. **Tài nguyên (Resource)**

Đối tượng được truy cập hoặc kiểm soát. Đây có thể là:

* Cơ sở dữ liệu khách hàng
* Hợp đồng
* Báo cáo tài chính
* Tệp, hồ sơ hoặc mô-đun giao diện người dùng

Quyền chỉ có ý nghĩa khi được gắn với các tài nguyên cụ thể.

**Một cấu trúc RBAC điển hình có thể trông như thế này:**


| Người dùng | Vai trò         | Quyền                 | Tài nguyên          |
| ---------- | --------------- | --------------------- | ------------------- |
| Alice      | Bán hàng        | Xem, Tạo              | Hồ sơ Khách hàng    |
| Bob        | Quản lý         | Xem, Sửa, Phê duyệt   | Hồ sơ Khách hàng    |
| Charlie    | Quản trị Nhân sự| Xem, Sửa              | Hồ sơ Nhân viên     |
| David      | Nhóm Tài chính  | Xem, Xuất             | Báo cáo Tài chính   |

Cấu trúc này tách biệt tài khoản người dùng khỏi các quyền cụ thể. Thay vì quản lý quyền truy cập theo từng người dùng, bạn chỉ cần duy trì **mối quan hệ giữa vai trò và quyền**. Điều này làm cho hệ thống kiểm soát truy cập trở nên **rõ ràng, nhất quán và dễ bảo trì**.

## Các Mẫu Thiết Kế Phổ Biến trong RBAC

Mặc dù khái niệm RBAC rất đơn giản, nhưng **các hệ thống quyền thường trở nên lộn xộn trong các triển khai thực tế**—và cuối cùng có thể trở thành một trong những phần khó bảo trì nhất.

Để tránh nhầm lẫn và đảm bảo khả năng mở rộng lâu dài, chúng tôi khuyên bạn nên làm theo bốn bước sau khi thiết kế một hệ thống RBAC rõ ràng và có thể mở rộng:

### 1. Xác định Vai trò

Vai trò là xương sống của bất kỳ hệ thống RBAC nào. Mỗi vai trò đại diện cho một nhóm người dùng có trách nhiệm và yêu cầu truy cập tương tự.

Các cách phổ biến để xác định vai trò:

* **Theo cấu trúc tổ chức** (ví dụ: Bán hàng, Tài chính, Nhân sự)
* **Theo trách nhiệm chức năng** (ví dụ: Nhập liệu, Người đánh giá, Quản trị viên)

Ví dụ về vai trò:

* Nhân viên Bán hàng
* Trưởng nhóm
* Quản lý Nhân sự
* Nhân viên Tài chính
* Quản trị viên Hệ thống

**Khuyến nghị**: Giữ số lượng vai trò ở mức có thể quản lý được. Tránh các mẫu "một người dùng, một vai trò". Mỗi vai trò nên đại diện cho một **tập hợp quyền chung** cho một loại người dùng.

### 2. Xác định Tài nguyên và Hành động

Tiếp theo, xác định các tài nguyên trong hệ thống của bạn yêu cầu kiểm soát truy cập và các hành động có thể được thực hiện trên chúng.

**Ví dụ về tài nguyên**:

* Dữ liệu Khách hàng
* Quản lý Hợp đồng
* Quy trình Phê duyệt
* Báo cáo Tài chính

**Ví dụ về hành động**:

* Xem (Đọc)
* Tạo
* Chỉnh sửa (Cập nhật)
* Xóa
* Phê duyệt
* Xuất

Các tài nguyên và hành động này tạo thành **trục ngang** của mô hình quyền của bạn.

### 3. Ánh xạ Quyền vào Vai trò

Khi các vai trò, tài nguyên và hành động đã được xác định, bạn có thể ánh xạ quyền vào các vai trò.

**Các câu hỏi chính cần xem xét**:

* Mỗi vai trò có thể truy cập những tài nguyên nào?
* Những hành động nào được phép trên các tài nguyên đó?
* Hệ thống của bạn có hỗ trợ **gán nhiều vai trò** (người dùng có nhiều vai trò) không?
* Bạn có hỗ trợ **kế thừa vai trò** (ví dụ: Nhân viên Bán hàng Cấp cao kế thừa từ Nhân viên Bán hàng) không?

**Ví dụ**:

* Nhân viên Bán hàng: có thể xem và tạo khách hàng của riêng họ
* Trưởng nhóm: có thể xem tất cả khách hàng, gán khách hàng tiềm năng và phê duyệt giao dịch
* Quản trị viên: truy cập không hạn chế vào tất cả các tài nguyên

Ở giai đoạn này, nhiều nhóm tạo ra một **ma trận Vai trò–Tài nguyên–Hành động**, trở thành nền tảng cho cấu hình và kiểm toán.

**Ví dụ về ma trận quyền**:


| Vai trò / Tài nguyên | Dữ liệu Khách hàng                       | Quản lý Hợp đồng              | Quy trình Phê duyệt   | Báo cáo Tài chính           |
| -------------------- | ---------------------------------------- | ----------------------------- | --------------------- | --------------------------- |
| Nhân viên Bán hàng   | Xem (riêng) / Tạo / Sửa (riêng)          | Xem (riêng) / Tạo / Sửa (riêng)| —                    | —                          |
| Trưởng nhóm          | Xem (tất cả) / Tạo / Sửa / Xuất          | Xem / Sửa                     | Gửi để phê duyệt     | —                          |
| Quản lý Nhân sự      | —                                        | —                             | Người phê duyệt       | Xem / Sửa (dữ liệu nhân viên) |
| Nhân viên Tài chính  | —                                        | Xem                           | —                    | Xem / Xuất                  |
| Quản trị viên Hệ thống| Toàn quyền Truy cập                      | Toàn quyền Truy cập            | Toàn quyền Truy cập   | Toàn quyền Truy cập         |

### 4. Triển khai Quyền Cấp Trường và Quyền Có Điều kiện

RBAC cơ bản thường kiểm soát truy cập ở cấp độ tài nguyên. Tuy nhiên, nhiều hệ thống thực tế yêu cầu **kiểm soát chi tiết hơn**, chẳng hạn như quyền cấp trường hoặc dựa trên điều kiện.

✅ **Quyền Cấp Trường**:

* Nhân sự có thể xem tất cả hồ sơ nhân viên nhưng **chỉ có thể chỉnh sửa trường lương cho bộ phận của họ**
* Nhân viên Tài chính có thể xuất số hóa đơn nhưng **không thể xem bình luận nội bộ**

✅ **Quyền Có Điều kiện**:

* Nhân viên Bán hàng chỉ có thể xem hoặc chỉnh sửa **các bản ghi do họ tạo**
* Trong quy trình phê duyệt, chỉ các bản ghi có trạng thái **"Chờ phê duyệt"** mới có thể được sửa đổi

Các khả năng nâng cao này thường là thứ **phân biệt các triển khai cơ bản với hỗ trợ RBAC thực sự mạnh mẽ** trong bất kỳ công cụ hoặc nền tảng nào.

## Cách Triển khai RBAC trong Các Dự án Thực tế: Ví dụ với NocoBase

Giả sử bạn đang xây dựng một hệ thống CRM và cần gán các cấp độ truy cập dữ liệu và quyền thao tác khác nhau cho các thành viên trong nhóm. Dưới đây là quy trình triển khai RBAC điển hình—được trình bày từng bước bằng cách sử dụng hệ thống CRM của **NocoBase**.

### 1. **Ai Sẽ Sử Dụng Hệ Thống?**

Bắt đầu bằng cách quản lý tất cả người dùng tập trung trong mô-đun **Người dùng & Quyền**. Trong NocoBase, bạn có thể sắp xếp người dùng thành các phòng ban—ví dụ: đặt tất cả nhân viên bán hàng vào phòng ban "Bán hàng". Điều này đặt nền tảng cho **phân đoạn dữ liệu** và **định tuyến phê duyệt** dựa trên cấu trúc tổ chức.

![Ai Sẽ Sử Dụng Hệ Thống?](https://static-docs.nocobase.com/11-sl6keh.png)

![Ai Sẽ Sử Dụng Hệ Thống?](https://static-docs.nocobase.com/12-fut1wu.png)

### 2. **Vai Trò Của Họ Là Gì?**

Tiếp theo, xác định vai trò cho các loại người dùng khác nhau trong phần **Vai trò & Quyền**. Ví dụ:

* **Bán hàng** – nhân viên bán hàng thông thường quản lý khách hàng của riêng họ
* **Quản lý Bán hàng** – giám sát toàn bộ nhóm và có đặc quyền phê duyệt
* **Quản trị viên** – toàn quyền truy cập để bảo trì hệ thống

Mỗi vai trò có thể được gán cho một hoặc nhiều người dùng.

![Vai Trò Của Họ Là Gì?](https://static-docs.nocobase.com/13-zeboed.png)

### 3. **Họ Có Thể Truy Cập và Sửa Đổi Dữ Liệu Nào?**

Cấu hình quyền cho từng vai trò trên các bộ sưu tập dữ liệu chính như **Khách hàng**, **Khách hàng tiềm năng** và **Cơ hội**. Bạn có thể đặt các kiểm soát chi tiết như:

* Họ có thể thêm, xem, sửa, xóa, nhập hoặc xuất dữ liệu không?
* Họ **chỉ có thể truy cập các bản ghi do họ tạo**?

![Họ Có Thể Truy Cập và Sửa Đổi Dữ Liệu Nào?](https://static-docs.nocobase.com/14-g02514.png)

### 4. **Họ Nên Thấy Mô-đun Nào?**

Không phải ai cũng cần truy cập vào mọi phần của CRM. Trong NocoBase, bạn có thể kiểm soát **mô-đun trang nào hiển thị cho từng vai trò**—cả trên máy tính để bàn và thiết bị di động.

Ví dụ:

* **Bán hàng** chỉ có thể thấy quản lý khách hàng và hồ sơ theo dõi
* **Quản lý Bán hàng** có thể truy cập bảng điều khiển và trung tâm phê duyệt

![Họ Nên Thấy Mô-đun Nào?](https://static-docs.nocobase.com/15-tngndo.png)

### 5. **Quyền Nên Phản Ứng Thế Nào Với Cấu Trúc Tổ Chức?**

Với các vai trò và phòng ban đã được thiết lập, bạn có thể xác định **quyền có điều kiện** để kiểm soát linh hoạt hơn. Ví dụ:

* Người dùng chỉ có thể xem dữ liệu từ phòng ban của họ
* Quản lý chỉ có thể phê duyệt khách hàng tiềm năng do cấp dưới trực tiếp gửi
* Sau khi phê duyệt, một bản ghi tự động được chuyển giao cho quản lý

![Quyền Nên Phản Ứng Thế Nào Với Cấu Trúc Tổ Chức?](https://static-docs.nocobase.com/16-i5mddu.png)

Bằng cách làm theo năm bước này, bạn có thể nhanh chóng triển khai một **hệ thống RBAC sẵn sàng cho thực tế** trong NocoBase. Từ danh tính người dùng → truy cập trang → thao tác dữ liệu → quy tắc động, mọi bước đều có thể được cấu hình trực quan **mà không cần viết một dòng mã nào**. Cách tiếp cận này hoạt động cho cả các trường hợp sử dụng đơn giản và các quy trình kinh doanh phức tạp.

## Tổng kết

Trong các hệ thống doanh nghiệp hiện đại, **RBAC là một cơ chế cơ bản để đảm bảo an toàn dữ liệu, trách nhiệm rõ ràng và cộng tác suôn sẻ**.

Một hệ thống quyền được thiết kế tốt nên cung cấp:

* **Cấu trúc rõ ràng** – ai có thể truy cập cái gì và họ có thể thực hiện hành động nào, cần dễ hiểu
* **Cấu hình linh hoạt** – có thể thích ứng với những thay đổi của tổ chức và nhu cầu kinh doanh đang phát triển
* **Khả năng bảo trì** – có thể truy cập được cho những người không phải là nhà phát triển để cấu hình và quản lý

Với các công cụ phù hợp, quyền không còn cần phải được viết cứng nữa. Chúng có thể được **mô hình hóa trực quan, quản lý tập trung và cải tiến liên tục**. Điều này không chỉ tăng cường bảo mật mà còn hợp lý hóa sự cộng tác và tăng tốc độ phát triển.

![NocoBase CRM](https://static-docs.nocobase.com/17-9bcgd6.png)

📌 Bạn muốn xem RBAC hoạt động như thế nào trong thực tế? Chúng tôi đã cấu hình sẵn một bộ đầy đủ các vai trò, quyền dữ liệu, kiểm soát trang và quy tắc có điều kiện trong **bản demo CRM của NocoBase**.

👉 [Nhấp vào đây để dùng thử hệ thống RBAC của NocoBase.](https://www.nocobase.com/en/solutions/crm)

**Đọc thêm:**

* [6 Hệ thống Ticketing Mã nguồn Mở Tốt nhất cho 2025](https://www.nocobase.com/en/blog/open-source-ticketing-systems)
* [Top 8 Công cụ Mã nguồn Mở để Phát triển Ứng dụng Web](https://www.nocobase.com/en/blog/top-8-open-source-tools-for-web-application-development)
* [6 Hệ thống Quản lý Nhân viên Tốt nhất cho 2025](https://www.nocobase.com/en/blog/employee-management-system)
* [Top 5 Phần mềm Kinh doanh Tất cả trong Một cho 2025](https://www.nocobase.com/en/blog/all-in-one-business-software)
* [Top 8 Phần mềm Quản lý Tài sản CNTT Mã nguồn Mở cho 2025](https://www.nocobase.com/en/blog/it-asset-management-software)
* [Top 7 Nền tảng Phát triển Nhanh Mã nguồn Mở](https://www.nocobase.com/en/blog/rapid-development-platform)
