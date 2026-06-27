---
title: "如何在3个月内使用NocoBase交付复杂的OA系统"
description: "一个团队仅用3个月就使用NocoBase交付了复杂的OA系统，涵盖财务、行政和预算管理模块，实现了75%的时间缩减，同时探索了AI集成。"
---

**Lưu ý về Bảo mật**

Để bảo vệ quyền riêng tư và bảo mật của tổ chức và khách hàng, nghiên cứu điển hình này được trình bày dưới dạng ẩn danh. Tất cả các chi tiết đều dựa trên một triển khai thực tế.

## Bối cảnh & Ràng buộc

Dự án được dẫn dắt bởi một nhóm giàu kinh nghiệm trong các hệ thống quản lý doanh nghiệp và các ngành công nghiệp nặng về quy trình như hóa dầu. Họ đã quen thuộc với các môi trường nơi các yêu cầu phức tạp, liên tục thay đổi và các ràng buộc vận hành rất nghiêm ngặt.

Trong quá khứ, họ phụ thuộc vào phát triển tùy chỉnh truyền thống. Một dự án có quy mô tương tự thường mất gần một năm từ phân tích yêu cầu đến bàn giao.

---

💬 Xin chào, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển no-code/low-code mở rộng nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

Lần này, khách hàng đưa ra một loạt các ràng buộc bất di bất dịch:

* **Cách ly mạng**: Hệ thống phải chạy hoàn toàn trong mạng nội bộ, bị ngắt kết nối vật lý với internet
* **Quyền sở hữu dữ liệu**: Tất cả dữ liệu phải hoàn toàn nằm dưới sự kiểm soát của tổ chức
* **Mô hình triển khai**: Chỉ chấp nhận triển khai tự lưu trữ / tại chỗ

Đồng thời, hệ thống vẫn cần hỗ trợ các quy trình làm việc phức tạp, khối lượng dữ liệu lớn và tích hợp với các hệ thống hiện có.

Nhóm cần một nền tảng có thể đáp ứng các yêu cầu bảo mật nghiêm ngặt trong khi vẫn cho phép **bàn giao nhanh, lặp lại liên tục và khả năng mở rộng lâu dài**.

Họ đã chọn **NocoBase**.

## Giải pháp & Triển khai

### 1. Số hóa Quy trình Hành chính và Tài chính

Giai đoạn đầu tiên tập trung vào các tình huống quan trọng và thường xuyên được sử dụng nhất: quy trình hành chính và tài chính.

Trước đây, các quy trình này phụ thuộc nhiều vào các biểu mẫu giấy và luân chuyển thủ công. Nhóm đã dần dần chuyển chúng vào một hệ thống thống nhất.

Họ đã xây dựng gần **60 mô-đun** bao gồm các hoạt động hành chính hàng ngày.

Đây không phải là một nỗ lực "số hóa biểu mẫu" đơn giản. Thay vào đó, nhóm đã tái cấu trúc các quy trình làm việc:

* ánh xạ các phụ thuộc giữa các quy trình
* chuyển đổi các quy tắc ngoại tuyến ngầm thành logic hệ thống rõ ràng
* biến việc ra quyết định thủ công thành các quy tắc kinh doanh có thể cấu hình
* làm rõ các đường dẫn cộng tác giữa các phòng ban

Sử dụng khả năng mô hình hóa dữ liệu và quy trình làm việc của NocoBase, các quy trình phức tạp này đã được biến thành một hoạt động ổn định, do hệ thống điều khiển.

### 2. Nhúng Kiểm soát Ngân sách vào Quy trình làm việc

Trước đây, quản lý ngân sách được xử lý trong Excel, phân mảnh giữa các phòng ban và chỉ được xem xét sau khi chi tiêu.

Nhóm đã thiết kế lại điều này bằng cách nhúng logic ngân sách trực tiếp vào các quy trình kinh doanh như đi công tác, phê duyệt và hoàn ứng.

Sau khi triển khai:

* **Ban lãnh đạo** có được khả năng hiển thị theo thời gian thực về tình hình thực hiện ngân sách tổng thể
* **Trưởng bộ phận** có thể theo dõi việc sử dụng một cách linh hoạt
* **Nhân viên** có thể xác thực hạn mức ngân sách tại thời điểm gửi yêu cầu

Quản lý ngân sách đã chuyển từ **báo cáo hậu kỳ** sang:

* kiểm soát trước
* thực thi trong quy trình
* xác thực theo thời gian thực

Điều này được thực hiện nhờ khả năng của NocoBase trong việc tích hợp logic kinh doanh trực tiếp vào các quy trình làm việc.

### 3. Tự động hóa Tích hợp Tài chính với ERP

Đối với xử lý hoàn ứng và tài chính, nhóm đã tích hợp hệ thống với **Yonyou ERP** thông qua các plugin tùy chỉnh.

Sử dụng một công cụ chuyển đổi tích hợp sẵn, hệ thống tự động chuyển đổi dữ liệu kinh doanh (yêu cầu đi công tác, tạm ứng, dữ liệu thuế, v.v.) thành các bản ghi tài chính tương thích với yêu cầu của ERP.

Công cụ này xử lý logic kế toán phức tạp, bao gồm:

* Tách thuế VAT
* bù trừ công nợ nhân viên
* ánh xạ tài khoản theo từng phòng ban

Sau khi xử lý, các chứng từ kế toán được tự động tạo và đẩy vào sổ cái tổng hợp.

Điều này thay thế việc nhập liệu thủ công khoảng **1.400 bản ghi tài chính mỗi tháng**.

Thách thức chính không phải là bản thân việc tích hợp API, mà là cấu trúc logic kinh doanh.

Sử dụng [mô hình dữ liệu](https://docs.nocobase.com/data-sources) và [kiến trúc plugin](https://docs.nocobase.com/plugins/) của NocoBase, nhóm đã biến các quy tắc kế toán thủ công thành logic cấp hệ thống, cho phép tự động hóa đầu cuối ổn định.

### 4. Tích hợp Hệ thống & Nhận dạng Thống nhất

Để hỗ trợ mở rộng hệ thống trong tương lai, nhóm trước tiên đã thiết lập một [hệ thống nhận dạng](https://docs.nocobase.com/auth-verification/auth/) thống nhất:

* tích hợp với các dịch vụ xác thực hiện có
* sử dụng NocoBase làm lớp quản lý người dùng tập trung
* đảm bảo tính nhất quán của dữ liệu người dùng trên các hệ thống

Đối với giao tiếp, một hệ thống IM riêng tư đã được giới thiệu:

* thông báo phê duyệt và nhiệm vụ được đẩy trực tiếp đến IM
* người dùng có thể truy cập nhiệm vụ mà không cần đăng nhập nhiều lần vào hệ thống
* điều hướng một cú nhấp chuột từ tin nhắn đến trang phê duyệt

Điều này làm giảm đáng kể thời gian phản hồi và cải thiện hiệu quả hoạt động.

### 5. Lặp lại trong Môi trường Cách ly Mạng

Dự án được triển khai trong một môi trường bị cô lập hoàn toàn.

Để duy trì hiệu quả phát triển, nhóm đã áp dụng một cách tiếp cận kết hợp:

* phát triển và thử nghiệm được thực hiện bên ngoài
* các cấu hình đã được xác thực được triển khai vào mạng nội bộ

Sử dụng cơ chế di chuyển cấu hình của NocoBase, hệ thống có thể được triển khai như một tổng thể mà không cần phát triển lại nhiều lần trong môi trường bị cô lập.

Điều này cho phép các [chu kỳ lặp lại hàng tuần hoặc thậm chí nhanh hơn](https://docs.nocobase.com/ops-management/migration-manager/), bất chấp các ràng buộc bảo mật nghiêm ngặt.

## Tiến độ Bàn giao

Dự án tiến triển như sau:

* **Đầu tháng 9**: Khởi động dự án
* **Giữa tháng 10**: Hoàn thiện yêu cầu Giai đoạn 1
* **Giữa tháng 11**: Ra mắt loạt mô-đun hành chính đầu tiên
* **Giữa tháng 12**: Ra mắt toàn bộ hệ thống hành chính + tài chính

Với độ phức tạp, phạm vi tích hợp và các ràng buộc triển khai, tốc độ bàn giao này nhanh hơn đáng kể so với các dự án doanh nghiệp điển hình.

## Chuẩn bị cho Tích hợp AI

Sau giai đoạn đầu tiên, khách hàng bắt đầu khám phá các khả năng AI:

* **Tự động hóa hóa đơn**: Nhận dạng OCR và xác thực tuân thủ
* **Truy xuất kiến thức**: vector hóa các tài liệu nội bộ và xây dựng cơ sở kiến thức riêng tư

Nhóm hiện đang thử nghiệm tích hợp các mô hình riêng tư nhẹ vào NocoBase.

Với kiến trúc plugin và khả năng AI của NocoBase 2.0, AI có thể dần dần được nhúng vào các quy trình làm việc và cấu trúc dữ liệu hiện có, làm cho nó trở nên thiết thực trong các tình huống kinh doanh thực tế.

## Kết quả

Từ khi xác nhận yêu cầu đến khi triển khai đầy đủ các hệ thống hành chính và tài chính, toàn bộ dự án đã được hoàn thành trong **3 tháng**, thể hiện mức **giảm 75% thời gian bàn giao**.

Điều này không chỉ giảm chi phí phát triển mà còn cho phép nhóm xử lý song song nhiều dự án phức tạp.

Nghiên cứu điển hình này làm nổi bật một điểm chính:

Trong các môi trường doanh nghiệp phức tạp, thành công không chỉ phụ thuộc vào nền tảng, mà còn phụ thuộc vào khả năng:

* cấu trúc các quy trình làm việc phức tạp
* tích hợp các hệ thống một cách hiệu quả
* chính thức hóa logic kinh doanh

NocoBase cung cấp nền tảng làm cho điều này trở nên khả thi.

Nó cho phép các nhóm giàu kinh nghiệm bàn giao nhanh hơn, thích ứng liên tục và phát triển các hệ thống theo thời gian, ngay cả dưới các ràng buộc nghiêm ngặt.

Nhóm dự định tham gia [hệ sinh thái đối tác NocoBase](https://www.nocobase.com/en/partner) và nhân rộng mô hình bàn giao này trên nhiều dự án doanh nghiệp hơn.

**Các Câu chuyện Khách hàng Khác:**

* [Nghiên cứu điển hình: Số hóa Quy trình Sản xuất Thiết bị Y tế với NocoBase](https://www.nocobase.com/en/blog/medical-device-manufacturer-builds-self-hosted-management-system-with-nocobase)
* [Nhà cung cấp Phần mềm Tăng Hiệu quả Bàn giao lên 70% với NocoBase](https://www.nocobase.com/en/blog/software-vendor-boosts-delivery-efficiency-with-nocobase)
* [Điểm sáng Cộng đồng: Xây dựng một ERP Thực tế với NocoBase](https://www.nocobase.com/en/blog/an-erp-built-with-nocobase)
* [Bên trong: Một Nhóm 8 Người Bàn giao với Tốc độ Doanh nghiệp như thế nào](https://www.nocobase.com/en/blog/shenzhen-chuanglianyun-tech-development-methodology)
* [Đã xây dựng Nền tảng R&D Đa phương thức AI trong vài ngày — với NocoBase](https://www.nocobase.com/en/blog/ai-multimodal-platform)
* [NocoBase tại Nga: Các Giải pháp Số Đa Tình huống trong Hành động](https://www.nocobase.com/en/blog/nocobase-in-russia)
* [NocoBase Gia nhập Các Lớp học Đại học Đức](https://www.nocobase.com/en/blog/university-course)
* [NocoBase là Nền tảng Công nghệ của ED: Từ Hệ thống Nội bộ đến Sản phẩm Thương mại](https://www.nocobase.com/en/blog/ed)
