---
title: "KIGLAND đã mở rộng sản xuất mặt nạ anime tùy chỉnh như thế nào với các công cụ mã nguồn mở"
description: "Làm thế nào một studio mặt nạ anime ngách mở rộng sản xuất tùy chỉnh của họ với các công cụ mã nguồn mở? KIGLAND đã xây dựng một hệ thống sản xuất linh hoạt chỉ trong 3 tuần—tăng gấp ba hiệu quả và định nghĩa lại những gì các nhóm nhỏ có thể đạt được với cơ sở hạ tầng mã nguồn mở."
---

## Giới thiệu

Tại Tô Châu, Trung Quốc, một nhóm đang âm thầm tái định nghĩa thế giới sản xuất cá nhân hóa. Họ không sản xuất hàng thời trang nhanh hay chạy theo sản xuất hàng loạt, nhưng đã xây dựng được một lượng người theo dõi trung thành trên toàn cầu trong cộng đồng cosplay.

![KIGLAND.PNG](https://static-docs.nocobase.com/e8d57071ce452ab9b8ebeb759f6b3b1a.PNG)

Hãy gặp [KIGLAND](https://www.kigland.cn/) — một studio chế tác mặt nạ nhân vật phong cách 2D, được gọi là KIGURUMI. Những chiếc mặt nạ này có tính cá nhân hóa cao, khó tùy chỉnh và đòi hỏi sự khéo léo chính xác — một ví dụ hoàn hảo về sản xuất khối lượng thấp, đa dạng chủng loại.

Thoạt nhìn, họ có vẻ giống như một nhóm thợ thủ công ngách.

Nhưng thực tế, họ giống một phòng thí nghiệm sản xuất linh hoạt cho các sản phẩm giải trí hơn. Bằng cách kết hợp sản xuất kỹ thuật số, quy trình làm việc chuẩn hóa và đổi mới chuỗi cung ứng do AI thúc đẩy, **họ đang biến những sáng tạo thủ công thành các sản phẩm gần như công nghiệp.**

## Từ GitHub Issues đến Lark's Base

Trong những ngày đầu, KIGLAND vận hành như một startup kiểu hacker thực thụ:

* Đơn hàng của khách hàng được theo dõi trong GitHub Issues
* Tiến độ sản xuất được cập nhật trong Lark's Base
* Phản hồi và trao đổi nằm rải rác trong các bình luận, ảnh chụp màn hình và luồng trò chuyện

**Sử dụng GitHub Issues để quản lý đơn hàng thời kỳ đầu:**

![GitHub Issues.PNG](https://static-docs.nocobase.com/fdc4f9c72c572fc824f0ad0c82158f14.PNG)

**Quản lý đơn hàng qua Lark's Base:**

![Lark's Base.PNG](https://static-docs.nocobase.com/178e19fde0b964a6b02bd69dfc97c53c.PNG)

> "Khi còn nhỏ, mọi thứ đều có thể quản lý được - nhưng ngay khi khối lượng tăng lên, toàn bộ hệ thống bắt đầu đổ vỡ."

Những vấn đề này sẽ quen thuộc với bất kỳ ai đã từng mở rộng quy mô từ một dự án phụ lên một hoạt động thực thụ:

* **Cấu trúc hạn chế** – Danh sách Issue truyền thống không thể xử lý số lượng trường tùy chỉnh ngày càng tăng hoặc nhu cầu dữ liệu theo từng giai đoạn giữa các phòng ban.
* **Điểm mù trong quy trình** – Các bình luận và thảo luận khó tìm kiếm và không có cấu trúc, gây khó khăn cho việc theo dõi tiến độ.
* **Sự cố trong cộng tác** – Các thành viên phi kỹ thuật gặp khó khăn với các công cụ hướng đến nhà phát triển của GitHub, và việc thiết lập bảng tính đòi hỏi quản lý phân quyền ngày càng phức tạp.

Khi chi phí giao tiếp tăng theo cấp số nhân, KIGLAND biết đã đến lúc không thể vá víu thêm nữa — và bắt đầu tìm kiếm một hệ thống thực sự được xây dựng cho nhu cầu riêng của họ.

## Tìm kiếm một Hệ thống Họ Thực sự Có thể Làm Chủ

Là những cựu binh mã nguồn mở với nền tảng kỹ thuật vững chắc, đội ngũ sáng lập KIGLAND không tìm kiếm một nền tảng SaaS phình to nào khác. Họ cần một thứ gì đó khác biệt — thứ mà họ có thể định hình theo doanh nghiệp của mình, chứ không phải ngược lại.

> "Chúng tôi muốn một công cụ có thể phát triển cùng chúng tôi — chứ không phải một nền tảng cứng nhắc mà chúng tôi phải liên tục xoay xở."

Vì vậy, họ bắt đầu khám phá các giải pháp thay thế cho các công cụ truyền thống như Airtable. Sau khi thử nghiệm một số lựa chọn, họ đã chọn **NocoBase**.

Lý do rất rõ ràng:

* **Mô hình hóa dữ liệu linh hoạt** để xử lý sự phức tạp của các đơn hàng tùy chỉnh
* **Kiến trúc dựa trên plugin với API mở**, cho phép nhóm tự do mở rộng chức năng
* **Giao diện thân thiện với người dùng** với đường cong học tập nông, ngay cả với người không phải nhà phát triển
* **Một cộng đồng mã nguồn mở năng động, hoạt động tích cực**
* Và trên hết: **có thể tự lưu trữ và hoàn toàn mở**, cho họ toàn quyền kiểm soát hệ thống

## Một Hệ thống Quản lý Tùy chỉnh — Được Xây dựng Chỉ trong Ba Tuần

Trong vòng chưa đầy ba tuần, KIGLAND đã có một hệ thống quản lý nội bộ hoàn chỉnh được xây dựng hoàn toàn trên NocoBase. Nó được thiết kế để phù hợp chính xác với quy trình làm việc của họ, không có sự thỏa hiệp.

Thiết lập của họ bao gồm:

* **Quản lý vòng đời đơn hàng từ đầu đến cuối** – bao gồm mọi bước từ tiếp nhận đơn hàng, thiết kế, sản xuất, đến kiểm soát chất lượng và vận chuyển
* **Cộng tác đa vai trò** – với các quyền được xác định rõ ràng cho nhóm bán hàng, thiết kế và sản xuất, đảm bảo bàn giao suôn sẻ và trách nhiệm giải trình
* **Theo dõi trách nhiệm dựa trên nhật ký** – cho phép truy xuất nguồn gốc đầy đủ và giải quyết vấn đề nhanh hơn
* **Theo dõi vật liệu và hàng tồn kho linh hoạt** – với các danh mục tùy chỉnh, bản ghi được liên kết và hiển thị thời gian thực

**Danh sách đơn hàng được quản lý trong NocoBase:**

![Order list managed in NocoBase.png](https://static-docs.nocobase.com/4b5ac21069bdd25c928403455c2636cd.png)

**Chi tiết đơn hàng và các bước sản xuất:**

![Order details and production steps.png](https://static-docs.nocobase.com/a5b09d907305ae1f594d19b06242d6a6.png)

**Nhật ký hoạt động và khả năng truy xuất:**

![Activity logs and traceability.png](https://static-docs.nocobase.com/4c47d7ee6976759b5923db9624ec5b5d.png)

**Liên kết nhật ký với các đơn hàng cụ thể:**

![Linking logs to specific orders.png](https://static-docs.nocobase.com/7ed0cd8c3d18698306cedf7969ab1dae.png)

Sau khi hệ thống cốt lõi hoạt động, nhóm tiếp tục phát triển nó song song với các bản cập nhật thường xuyên của NocoBase — thích ứng với các tính năng mới khi chúng ra mắt và đóng góp phản hồi cho cộng đồng.

## Ba Quý Sau, Kết quả Tự Nói Lên Tất Cả

> "Sau khi áp dụng NocoBase, chúng tôi đã đi từ một studio nhỏ vất vả trở thành một trong những đội ngũ hàng đầu trong lĩnh vực ngách của mình."

Và những con số đã chứng minh điều đó:

* 📦 **Tăng gấp 3 lần** năng lực xử lý đơn hàng
* ❌ **Giảm 80%** lỗi liên quan đến cộng tác
* 😊 **Sự hài lòng của khách hàng tăng đáng kể**
* 🔧 **Tự chủ hơn** cho nhóm kỹ thuật, với việc phát triển và lặp lại nội bộ liên tục

Nhưng chiến thắng lớn nhất? Nhóm cuối cùng đã thoát khỏi guồng quay hàng ngày và bắt đầu tập trung vào việc phát triển kinh doanh và cải thiện trải nghiệm người dùng.

Đây là những gì khách hàng của họ nói:

![customers.png](https://static-docs.nocobase.com/2499e3b040253747de352eca2c9a8913.png)

![customers2.png](https://static-docs.nocobase.com/265a9222e67bb37c77cfd390db76281b.png)

## Mở rộng Quy mô Vượt ra Ngoài Hệ thống

Với NocoBase làm nền tảng, KIGLAND tiếp tục mở rộng những gì hệ thống nội bộ của họ có thể làm — tiến thêm một bước gần hơn đến việc xây dựng một quy trình sản xuất hoàn toàn tự động, hoàn toàn tùy chỉnh.

Lộ trình của họ bao gồm:

* **Lập kế hoạch sản xuất do AI hỗ trợ** sử dụng LLM tự lưu trữ và nền tảng kiểm soát mô-đun (MCP)
* **Mô hình sản xuất dự đoán** dựa trên dữ liệu đơn hàng lịch sử, cho phép điều phối thời gian thực đến các nhà cung cấp
* **Tích hợp đặt hàng phía khách hàng** cho một quy trình tùy chỉnh hoàn toàn chuẩn hóa, từ đầu đến cuối

Đối với KIGLAND, đây không chỉ là việc áp dụng các công cụ tốt hơn — đó là một sự thay đổi chiến lược trong cách họ mở rộng quy mô.

> "Trong sản xuất cá nhân hóa, hệ thống hóa không còn là một 'thứ tốt để có'. Nó là nền tảng cho sự tăng trưởng." —Remi, Đồng sáng lập KIGLAND

## Suy nghĩ Cuối cùng

Hành trình của KIGLAND là một lời nhắc nhở về một sự thật đơn giản nhưng mạnh mẽ:

**Doanh nghiệp của bạn càng phức tạp và cá nhân hóa, bạn càng cần nhiều cấu trúc bên dưới. Và nếu bạn muốn mở rộng quy mô, bạn không thể chỉ dựa vào các quy trình thủ công.**

Sự chuyển đổi của họ không được thúc đẩy bởi một giải pháp có sẵn — nó được thực hiện nhờ một hệ thống mà họ có thể định hình, mở rộng và phát triển song song với doanh nghiệp của mình.

Đối với các nhóm đang điều hướng chuyển đổi số, bước đột phá thực sự có thể không đến từ việc tìm kiếm một nền tảng tất cả trong một hoàn hảo — mà đến từ việc xây dựng trên một thứ gì đó như **NocoBase**: một nền tảng mở, linh hoạt, phát triển cùng bạn.

* [Vượt ra ngoài Bảng tính: Quản lý Dữ liệu Nhân viên của Classmethod với NocoBase](https://www.nocobase.com/en/blog/classmethod)
* [Cách một Nhà máy Nội thất Tự xây dựng Hệ thống ERP — Không cần Viết Code](https://www.nocobase.com/en/blog/olmon)
* [Từ Nhà thiết kế đến Người xây dựng: Chuyển đổi Số của L&A với NocoBase](https://www.nocobase.com/en/blog/l-a)
* [Cách một Công ty Luật hơn 400 Luật sư Hợp lý hóa Quản lý Hoa hồng với NocoBase](https://www.nocobase.com/en/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [Phát triển Nhanh với NocoBase: Thúc đẩy Chuyển đổi Số trong Xây dựng](https://www.nocobase.com/en/blog/rapid-development-with-nocobase)
* [Nâng cấp Sản xuất Thông minh của Orchisky: Tại sao Họ Chọn NocoBase](https://www.nocobase.com/en/blog/Orchisky)
