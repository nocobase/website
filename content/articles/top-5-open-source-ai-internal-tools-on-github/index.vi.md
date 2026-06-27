---
title: "Top 5 Công cụ Nội bộ AI Mã nguồn Mở trên GitHub"
description: "Đánh giá năm công cụ nội bộ mã nguồn mở với hơn 20k sao, cùng với phân tích khả năng AI và các trường hợp sử dụng chính."
---

📝 **Lưu ý:** Bài viết này được cập nhật lần cuối vào ngày 21 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Trước đây, chúng tôi đã tổng hợp một loạt các tài nguyên dự án AI mã nguồn mở, bao gồm đánh giá về [11 nền tảng AI no code mã nguồn mở trên GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools) và [một số bản tóm tắt về các công cụ AI low code](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github). Khi công nghệ AI tiến bộ nhanh chóng, ngày càng nhiều dự án mã nguồn mở bắt đầu tích cực áp dụng các khả năng AI.

Một sự thay đổi tương tự cũng đang diễn ra trong lĩnh vực công cụ nội bộ. Năm ngoái, chúng tôi đã giới thiệu một số [dự án công cụ nội bộ mã nguồn mở nổi bật](https://www.nocobase.com/en/blog/open-source-internal-tools), và đến năm 2025, hầu hết chúng đã bổ sung các tính năng AI, khiến toàn bộ hệ sinh thái trở nên mới mẻ. Điều này thúc đẩy chúng tôi tạo ra một bản tổng quan cập nhật và có hệ thống hơn.

😄[ Nếu bạn mới làm quen với các công cụ nội bộ và giá trị mà chúng mang lại, bạn có thể muốn đọc hướng dẫn giới thiệu trước.](https://www.nocobase.com/en/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#what-are-the-benefits-of-internal-tools)

Trong bản cập nhật này, chúng tôi đã chọn lọc các công cụ nội bộ mã nguồn mở từ chủ đề [GitHub Internal Tools](https://github.com/topics/internal-tools) có hơn 20k Stars và sức hút mạnh mẽ từ cộng đồng, đồng thời tóm tắt các đặc điểm kỹ thuật và trường hợp sử dụng lý tưởng của chúng.

---

💬 Xin chào, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển no-code/low-code hỗ trợ AI có khả năng mở rộng nhất để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và đủ loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

Mục tiêu của chúng tôi là giúp bạn nhanh chóng hiểu được công cụ nội bộ nào vẫn đáng để đầu tư trong kỷ nguyên AI, đồng thời cung cấp định hướng rõ ràng cho các nhóm kỹ thuật đang xây dựng hệ thống nội bộ của riêng họ.

Dưới đây là bản xem trước nhanh về 5 công cụ nội bộ mã nguồn mở mà chúng tôi sẽ đề cập.

* **NocoBase**: một nền tảng no code dựa trên mô hình dữ liệu được thiết kế cho các công cụ nội bộ, có hệ thống plugin có khả năng mở rộng cao. Các tác nhân AI của nó có thể hỗ trợ chuẩn bị dữ liệu, mô hình hóa, xây dựng biểu đồ và tạo mã.
* **Budibase**: một trình xây dựng công cụ nội bộ low code cung cấp cơ sở dữ liệu tích hợp, tạo UI kéo và thả, CRUD tự động tạo, AI Columns và thiết kế bảng hỗ trợ AI.
* **Refine**: một meta framework dựa trên React được xây dựng cho các hệ thống quản trị chuyên sâu về CRUD, hiện hỗ trợ bố cục, cấu trúc và mã do AI tạo.
* **ToolJet**: một nền tảng kết hợp low code với các khả năng AI gốc, cho phép người dùng tạo giao diện và logic thông qua ngôn ngữ tự nhiên.
* **Appsmith**: một nền tảng low code mã nguồn mở trưởng thành kết nối với nhiều nguồn dữ liệu, lý tưởng để xây dựng bảng điều khiển quản trị, luồng phê duyệt và công cụ vận hành, hiện được tăng cường với các hành động do AI điều khiển.

### NO.5 NocoBase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub        | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)           |
| ------------- | -------------------------------------------------------------------------------------- |
| Website       | [https://www.nocobase.com/](https://www.nocobase.com/)                                 |
| License       | AGPL-3.0                                                                               |
| GitHub Stars  | 20.5k                                                                                  |
| Forks         | 2.3k                                                                                   |
| Issues        | 129                                                                                    |
| Pull Requests | 125                                                                                    |
| Contributors  | 101                                                                                    |
| Last updated  | updated today                                                                          |
| Documentation | [https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees) |

**Tổng quan**

NocoBase là một nền tảng phát triển no code dựa trên mô hình dữ liệu được thiết kế để xây dựng các công cụ nội bộ. Kiến trúc dựa trên plugin của nó có khả năng mở rộng cao, hỗ trợ xây dựng bảng quản trị, hệ thống kinh doanh, CRM, luồng phê duyệt và nhiều ứng dụng nội bộ khác. Nó cung cấp trình xây dựng giao diện WYSIWYG trực quan và hỗ trợ các mối quan hệ dữ liệu phức tạp, mô hình phân quyền và logic tùy chỉnh, lý tưởng cho các nhóm cần cung cấp các công cụ kinh doanh một cách nhanh chóng.

Trong NocoBase, AI không phải là một mô-đun riêng biệt. Thay vào đó, nó được đan xen trực tiếp vào các bảng, biểu mẫu, mô hình dữ liệu và quy trình làm việc. Khung AI Employees tích hợp AI vào các hoạt động kinh doanh, cho phép cộng tác với các mô hình, biểu mẫu, bảng và quy trình làm việc. Các loại nhân viên AI được tích hợp sẵn bao gồm làm sạch dữ liệu, mô hình hóa lược đồ, tìm kiếm kiến thức, tạo biểu đồ và tạo mã, giúp người dùng giảm chi phí xử lý dữ liệu, thiết lập giao diện và xây dựng logic.

**Trường hợp sử dụng**

**Làm sạch dữ liệu (Dex, Chuyên gia xử lý dữ liệu)**

Nhân viên AI trích xuất thông tin có cấu trúc từ nội dung phi cấu trúc như dữ liệu khách hàng, vé hỗ trợ hoặc văn bản hợp đồng và có thể tự động điền vào biểu mẫu.

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**Phân tích dữ liệu (Viz, Nhà phân tích thông tin chi tiết)**

Trên các trang như Khách hàng tiềm năng, Cơ hội hoặc Tài khoản, nhân viên AI có thể phân tích tập dữ liệu hiện tại và tự động tạo biểu đồ xu hướng, so sánh, thẻ KPI và thông tin chi tiết ngắn gọn.

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**Cấu hình giao diện người dùng (Nathan, Kỹ sư Frontend)**

Khi làm việc với JSBlock, JSField, JSItem, JSColumn, JSAction hoặc Event Flow, nhân viên AI có thể xem xét ngữ cảnh mã và tạo hoặc tinh chỉnh JavaScript dựa trên lời nhắc ngôn ngữ tự nhiên.

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**Mô hình hóa dữ liệu (Orin, Người mô hình hóa dữ liệu)**

Khi tạo các hệ thống nội bộ như CRM, hệ thống vé hỗ trợ, hàng tồn kho hoặc quản lý dự án, nhân viên AI có thể giúp tạo hoặc cập nhật các bảng dữ liệu.

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 Budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub        | [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Website       | [https://budibase.com/](https://budibase.com/)                                                                 |
| License       | GPL-v3                                                                                                         |
| Stars         | 27.4k                                                                                                          |
| Forks         | 2k                                                                                                             |
| Issues        | 294                                                                                                            |
| Pull Requests | 12                                                                                                             |
| Contributors  | 112                                                                                                            |
| Last updated  | updated today                                                                                                  |
| Documentation | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai) |

**Tổng quan**

Budibase là một nền tảng low code mã nguồn mở để xây dựng các công cụ nội bộ. Nó hỗ trợ kết nối cơ sở dữ liệu, nhiều nguồn dữ liệu, tạo UI kéo và thả, tự động tạo CRUD và quy trình làm việc, phù hợp để xây dựng back-end doanh nghiệp, luồng phê duyệt, hệ thống biểu mẫu và bảng quản trị. Với cơ sở dữ liệu tích hợp, hỗ trợ REST API và trình xây dựng trực quan, các nhóm không có nhiều kinh nghiệm frontend vẫn có thể tạo ra các ứng dụng nội bộ hoàn chỉnh.

Budibase cũng đã tích hợp AI như một khả năng nền tảng gốc. Với Budibase AI được kích hoạt, người dùng có thể tạo AI Columns cho các thao tác dữ liệu thông minh, tạo logic JavaScript từ ngôn ngữ tự nhiên, tự động tạo lược đồ cơ sở dữ liệu và sử dụng tự động hóa dựa trên AI để làm sạch, phân loại, chuyển đổi và tạo dữ liệu.

**Trường hợp sử dụng**

**Làm sạch dữ liệu thông minh và chuẩn bị nội dung**

AI Columns có thể tự động làm sạch, chuẩn hóa và phân loại dữ liệu, hữu ích cho phản hồi của khách hàng, kiểm duyệt nội dung, xử lý vé hỗ trợ và các quy trình làm việc tương tự.

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**Tự động tạo lược đồ cơ sở dữ liệu**

Khi xây dựng các mô-đun mới như quản lý khách hàng, quy trình hợp đồng hoặc hệ thống tác vụ, Budibase AI có thể tạo cấu trúc bảng phù hợp và các bản ghi mẫu từ một lời nhắc ngôn ngữ tự nhiên duy nhất.

![数据库表结构.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-li9il9.png](https://static-docs.nocobase.com/refine-li9il9.png)


| GitHub        | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------- | -------------------------------------------------------------------------- |
| Website       | [https://refine.dev/](https://refine.dev/)                                 |
| License       | MIT                                                                        |
| Stars         | 33.5k                                                                      |
| Forks         | 2.9k                                                                       |
| Issues        | 17                                                                         |
| Pull Requests | 11                                                                         |
| Contributors  | 311                                                                        |
| Last updated  | 2 days ago                                                                 |
| Documentation | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**Tổng quan**

Refine là một meta framework React mã nguồn mở được xây dựng cho các ứng dụng web nặng về CRUD, hệ thống quản trị doanh nghiệp, bảng điều khiển và các công cụ B2B nội bộ khác.

Refine AI đưa AI vào quy trình phát triển. Với ngôn ngữ tự nhiên, tài liệu hoặc thông số kỹ thuật API làm đầu vào, Refine AI có thể tạo ra một khung ứng dụng React sẵn sàng cho sản xuất hoàn chỉnh, bao gồm các trang CRUD, định tuyến, xác thực, quản lý trạng thái và tìm nạp dữ liệu. Đầu ra là mã React sạch, tiêu chuẩn mà các nhà phát triển có thể tự do mở rộng hoặc điều chỉnh.

**Trường hợp sử dụng**

**Tạo hệ thống quản trị**

Dựa trên API hoặc mô hình dữ liệu, Refine AI có thể tạo giao diện CRUD với các trang danh sách, biểu mẫu và chi tiết, lý tưởng để khởi tạo nhanh các hệ thống như hàng tồn kho, đơn hàng hoặc quản lý dự án.

![后台管理系统生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**Tái cấu trúc và bảo trì các codebase hiện có**

Vì Refine AI tạo mã tuân theo các mẫu và thực tiễn tốt nhất cấp doanh nghiệp, nó cũng có thể được sử dụng để tái cấu trúc các hệ thống cũ thành các thành phần mô-đun hoặc để thêm nhanh các mô-đun kinh doanh mới trên nền tảng dự án hiện có, cải thiện cả tốc độ phát triển và khả năng bảo trì lâu dài.

![代码重构与维护.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡 Bài đọc được đề xuất: [NocoBase vs Refine](https://www.nocobase.com/cn/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub        | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Website       | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| License       | AGPL-3.0                                                                                                     |
| Stars         | 37k                                                                                                          |
| Forks         | 4.9k                                                                                                         |
| Issues        | 646                                                                                                          |
| Pull Requests | 313                                                                                                          |
| Contributors  | 651                                                                                                          |
| Last updated  | one day ago                                                                                                  |
| Documentation | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**Tổng quan**

ToolJet là một nền tảng low code và AI gốc mã nguồn mở để xây dựng các công cụ nội bộ doanh nghiệp, bảng điều khiển, hệ thống quản trị và ứng dụng kinh doanh. Nó cung cấp trình xây dựng trực quan kéo và thả, cơ sở dữ liệu tích hợp, tích hợp nguồn dữ liệu và SaaS phong phú, cùng các tính năng phân quyền và cộng tác tích hợp. Nó được thiết kế cho các nhóm cần cung cấp các hệ thống nội bộ một cách nhanh chóng.

Trong ToolJet, AI được đan xen trực tiếp vào quy trình xây dựng ứng dụng. Các nhà phát triển có thể mô tả yêu cầu của họ bằng ngôn ngữ tự nhiên và ToolJet sẽ tự động tạo giao diện ban đầu, cấu trúc dữ liệu và logic truy vấn.

**Trường hợp sử dụng**

**Tạo ứng dụng kinh doanh bằng ngôn ngữ tự nhiên**

ToolJet cho phép các nhóm tạo các công cụ nội bộ bằng cách mô tả yêu cầu bằng ngôn ngữ tự nhiên. Nó có thể xây dựng UI, cấu trúc dữ liệu và logic từ đầu hoặc sửa đổi các ứng dụng hiện có. Điều này giúp dễ dàng tạo ra các hệ thống nội bộ phổ biến như quản lý hàng tồn kho trong một khoảng thời gian ngắn.

![自然语言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**Trợ lý tài liệu AI**

Trợ lý tài liệu AI tích hợp trả lời các câu hỏi về các thành phần, tính năng và tích hợp, giúp người dùng làm quen với ToolJet nhanh hơn. Đối với các nhóm không có kinh nghiệm frontend, trợ lý này giúp giảm độ dốc học tập và tăng tốc độ phát triển.

![AI 文档助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 Appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub        | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ------------- | ---------------------------------------------------------------------------------- |
| Website       | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| License       | Apache-2.0                                                                         |
| Stars         | 38.6k                                                                              |
| Forks         | 4.4k                                                                               |
| Issues        | 4.4k                                                                               |
| Pull Requests | 38                                                                                 |
| Contributors  | 335                                                                                |
| Last updated  | one day ago                                                                        |
| Documentation | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**Tổng quan**

Appsmith là một nền tảng low code mã nguồn mở được xây dựng để giúp các nhóm tạo các ứng dụng nội bộ một cách nhanh chóng và với lượng mã tối thiểu. Nó hỗ trợ nhiều loại cơ sở dữ liệu và API, cung cấp thư viện toàn diện các thành phần UI trực quan và cho phép các nhà phát triển mở rộng chức năng bằng JavaScript. Điều này làm cho nó phù hợp để xây dựng các hệ thống quản trị, bảng điều khiển dữ liệu, quy trình phê duyệt, CRM và các công cụ phân tích.

Bản phát hành mới nhất giới thiệu hỗ trợ AI gốc. Appsmith có thể kết nối với các LLM hàng đầu như OpenAI, Google AI và Anthropic, cho phép các tính năng như phân tích văn bản, tóm tắt, tìm kiếm ngữ nghĩa và phân loại được hỗ trợ bởi các hành động AI.

**Trường hợp sử dụng**

**Tăng tốc phát triển với AI**

Trợ lý AI của Appsmith cung cấp hỗ trợ theo ngữ cảnh trong quá trình phát triển, đưa ra hướng dẫn về các thao tác, tính năng nền tảng, xây dựng truy vấn, logic JavaScript và tùy chỉnh UI. Thông qua trợ lý thanh bên Appy, các nhà phát triển có thể nhận được trợ giúp liên quan trực tiếp trên trang họ đang chỉnh sửa, giảm thời gian tra cứu tài liệu và tăng tốc độ lặp lại.

![借助 AI 提升构建速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**Nhúng AI vào quy trình làm việc nội bộ**

Các nhóm có thể xây dựng các công cụ nội bộ được tăng cường AI, chẳng hạn như bảng điều khiển phân tích đánh giá của khách hàng. Appsmith có thể tìm nạp dữ liệu đánh giá, hiển thị dữ liệu đó trong bảng, chạy phân tích tình cảm thông qua nguồn dữ liệu Appsmith AI và sử dụng JS Objects để ghi kết quả trở lại UI. Điều này cho phép các nhóm tự động phân loại phản hồi và ưu tiên các vấn đề hiệu quả hơn.

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡 Bài đọc được đề xuất: [NocoBase vs. Appsmith: Nền tảng Low-Code Mã nguồn mở nào phù hợp với bạn?](https://www.nocobase.com/en/blog/nocobase-vs-appsmith)

Ngoài ra, ngoài năm dự án có số sao cao lớn ở trên, các công cụ mã nguồn mở như [Yao](https://github.com/YaoApp/yao) và [ILLA Builder](https://github.com/illacloud/illa-builder) cũng duy trì hoạt động cộng đồng mạnh mẽ. [Yao](https://github.com/YaoApp/yao) cung cấp một công cụ ứng dụng full-stack cho phép xây dựng nhanh chóng các mô hình, quy trình làm việc và API cho các hệ thống nội bộ. [ILLA Builder](https://github.com/illacloud/illa-builder) tập trung vào xây dựng giao diện trực quan, phù hợp để nhanh chóng tạo các bảng quản trị và công cụ dữ liệu. Cả hai dự án cũng cung cấp các tiện ích mở rộng AI cơ bản và có thể là các lựa chọn bổ sung hữu ích khi các nhóm đang xây dựng các công cụ nội bộ.

### Kết luận

Khi lựa chọn công cụ nội bộ, việc đánh giá các giải pháp trên một số khía cạnh là hữu ích.

1. Mức độ trưởng thành của các tính năng AI, chẳng hạn như hỗ trợ tạo trang, tạo SQL hoặc logic kinh doanh, tạo biểu đồ và trợ lý thông minh.
2. Hoạt động của cộng đồng và hệ sinh thái, bao gồm Stars, Issues, Commits và cập nhật tài liệu, tất cả đều báo hiệu độ tin cậy và tính bền vững lâu dài của dự án.
3. Khả năng tự lưu trữ và bảo mật, ảnh hưởng đến việc triển khai nội bộ và tuân thủ dữ liệu.
4. Khả năng mở rộng và dễ dàng tùy chỉnh, ảnh hưởng trực tiếp đến chi phí liên tục của việc điều chỉnh hệ thống theo nhu cầu kinh doanh đang phát triển.

Chúng tôi hy vọng hướng dẫn này cung cấp thông tin chi tiết kỹ thuật hữu ích và giúp bạn đưa ra quyết định sáng suốt hơn khi xây dựng các công cụ nội bộ.

Khi AI tạo sinh tiếp tục phát triển, các dự án mã nguồn mở này cũng sẽ tiếp tục phát triển, mang lại những khả năng mới theo thời gian.

Chúng tôi mong muốn được thấy những công cụ này giúp nhóm của bạn xây dựng các hệ thống nội bộ hiệu quả và thông minh hơn trong tương lai.

**Bài đọc liên quan:**

* [Top 5 Công cụ AI Nội bộ Mã nguồn mở trên GitHub](https://www.nocobase.com/en/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 Giải pháp Thay thế Google Sheets Tốt nhất (Thông số kỹ thuật & Giá cả)](https://www.nocobase.com/en/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6 Công cụ No/Low-Code Mã nguồn mở để Xây dựng PoC](https://www.nocobase.com/en/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [Hướng dẫn Quyết định Kỹ thuật dành cho Nhà phát triển về No-Code và Low-Code (2026)](https://www.nocobase.com/en/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [So sánh Chuyên sâu về RBAC trong 6 Nền tảng No-Code/Low-Code Cấp Doanh nghiệp](https://www.nocobase.com/en/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [14 Nền tảng Low-Code hỗ trợ AI trên GitHub đáng theo dõi](https://www.nocobase.com/en/blog/14-ai-low-code-platforms-github)
* [Top 11 Công cụ AI No-Code Mã nguồn mở có nhiều GitHub Stars nhất](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 Dự án AI Agent Mã nguồn mở có nhiều GitHub Stars nhất](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
