---
title: "Những công cụ mã nguồn mở nào hoạt động tốt với OpenCode? 5 dự án nên thử"
description: "Khám phá 5 dự án mã nguồn mở hoạt động tốt với OpenCode, bao gồm các công cụ nội bộ, API dữ liệu, BI, cơ sở tri thức và quản lý danh tính để phát triển hỗ trợ AI đáng tin cậy hơn."
---

## Giới thiệu

Năm nay, OpenCode đã trở thành một trong những AI Coding Agent mã nguồn mở được nhắc đến nhiều nhất.

![OpenCode.png](https://static-docs.nocobase.com/OpenCode-c2tqyc.png)

Nó mang lại cho nhà phát triển nhiều quyền kiểm soát hơn: bạn có thể chọn mô hình của riêng mình, sử dụng nó trong terminal và môi trường dự án của bạn, và kết nối nó với quy trình phát triển hiện có của bạn, thay vì hoàn toàn phụ thuộc vào một nền tảng đóng.

[Người dùng Reddit này cũng đã chia sẻ](https://www.reddit.com/r/opencodeCLI/comments/1rwbbbh/what_is_your_opinion_on_open_code/): **anh ấy muốn tự chọn công cụ AI của riêng mình. Anh ấy không tin tưởng các công ty nhốt người dùng bên trong một "bong bóng", và muốn một nơi mà anh ấy có thể tự do chuyển đổi nhà cung cấp.**

![reddit.png](https://static-docs.nocobase.com/reddit-021umn.png)

**Đây cũng là lý do tại sao các công cụ mã nguồn mở ngày càng trở nên quan trọng trong kỷ nguyên AI.**

Trước đây, chúng ta chọn công cụ mã nguồn mở chủ yếu vì chúng miễn phí, có thể tự lưu trữ và tùy chỉnh. Giờ đây, có một lớp giá trị khác: **các dự án mã nguồn mở dễ dàng hơn cho các công cụ AI để hiểu, sử dụng và mở rộng.**

Khi một dự án có cấu trúc mã, tài liệu, API, CLI hoặc hệ thống plugin rõ ràng, một AI Agent như OpenCode không chỉ đơn thuần là "giúp bạn viết vài đoạn mã". Nó thực sự có thể tham gia vào quá trình cài đặt, cấu hình, tích hợp, mở rộng và bảo trì.

Vì vậy, nếu bạn đang sử dụng OpenCode, bạn thường không cần yêu cầu nó viết mọi thứ từ đầu. Một cách tiếp cận tốt hơn là bắt đầu với các dự án mã nguồn mở trưởng thành và để OpenCode giúp bạn hoàn thành công việc phát triển thực tế nhanh hơn.

Bài viết này giới thiệu 5 dự án mã nguồn mở hoạt động tốt với OpenCode, bao gồm hệ thống kinh doanh, API dữ liệu, tự động hóa, phân tích dữ liệu, cơ sở tri thức, xác thực danh tính và kiểm soát truy cập. Đây đều là những dự án mã nguồn mở thân thiện với AI đã được kiểm chứng và đáng để thử.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển không-code/low-code mạnh mẽ nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó hoàn toàn tự lưu trữ, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

| Bạn muốn OpenCode giúp xây dựng điều gì                                                              | Dự án được đề xuất |
| ---------------------------------------------------------------------------------------------------- | ------------------ |
| CRM, hệ thống ticket, phê duyệt, quản lý tài sản, back-end vận hành và các công cụ nội bộ khác       | NocoBase           |
| API dữ liệu, Headless CMS, back-end nội dung                                                         | Directus           |
| Phân tích dữ liệu, báo cáo, bảng điều khiển                                                          | Metabase           |
| Tài liệu dự án, cơ sở tri thức, ngữ cảnh AI                                                          | Outline            |
| SSO, xác thực danh tính, kiểm soát truy cập                                                          | Keycloak           |

## 1. NocoBase: Hệ thống kinh doanh và công cụ nội bộ

Trang web chính thức: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Sao GitHub: 22.5k

Nếu bạn muốn xây dựng các hệ thống kinh doanh như CRM, hệ thống ticket, phê duyệt, quản lý tài sản, quản lý dự án hoặc back-end vận hành, NocoBase là một dự án mã nguồn mở mạnh mẽ để sử dụng với OpenCode. NocoBase là một nền tảng phát triển không-code được hỗ trợ bởi AI. Nó cung cấp cơ sở hạ tầng đã được kiểm chứng trong sản xuất và giao diện không-code WYSIWYG, giúp AI và con người cộng tác hiệu quả trong khi cân bằng tốc độ phát triển và độ tin cậy của hệ thống.

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-u2k53a.png)

Ví dụ: nếu bạn muốn xây dựng một hệ thống ticket nội bộ, OpenCode có thể giúp bạn:

* Khởi tạo một dự án NocoBase
* Thiết kế mô hình dữ liệu dựa trên yêu cầu của bạn
* Tạo cấu trúc dữ liệu cho khách hàng, ticket, người được giao, mức độ ưu tiên, v.v.
* Xây dựng các trang cho hệ thống ticket
* Cấu hình chuyển đổi trạng thái và luồng công việc thông báo
* Phát triển các plugin kinh doanh tùy chỉnh
* Kết nối API của hệ thống bên ngoài

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-x5mhwx.png)

NocoBase đảm nhận hệ thống cốt lõi, bao gồm các trang, quyền, luồng công việc tự động hóa và mối quan hệ dữ liệu. Điều này có nghĩa là OpenCode không cần phải tạo ra toàn bộ hệ thống từ đầu. Nó có thể hoạt động trong cấu trúc NocoBase hiện có.

Điều này rất quan trọng đối với các hệ thống kinh doanh thực tế, bởi vì các yêu cầu của hệ thống nội bộ doanh nghiệp thường xuyên thay đổi. Với NocoBase, các nhà phát triển có thể để OpenCode xử lý các phần mở rộng phức tạp, trong khi người dùng kinh doanh có thể tiếp tục điều chỉnh các trang, trường và luồng công việc trong giao diện không-code.

Đồng thời, vì NocoBase có sẵn khả năng AI Employee, AI có thể cộng tác một cách suôn sẻ sau khi hệ thống kinh doanh được xây dựng trong NocoBase.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-usmzfz.png)

Ví dụ: nó có thể tạo báo cáo thông tin chi tiết kinh doanh trực tiếp bên trong hệ thống. Sau khi hoàn thành, các báo cáo có thể được xuất dưới dạng PDF hoặc hiển thị bằng HTML.

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-7e0d9h.png)

Tài liệu liên quan: [OpenCode + NocoBase: một cách xây dựng với NocoBase mở, linh hoạt và không bị khóa](https://docs.nocobase.com/en/ai/opencode)

OpenCode hoạt động với NocoBase theo cách sau:

```text
Bạn (Terminal / VS Code / JetBrains / ...)
  │
  └─→ OpenCode
        │
        ├── NocoBase Skills (giúp Agent hiểu hệ thống cấu hình NocoBase)
        │
        └── NocoBase CLI (thực thi các thao tác tạo, sửa đổi, triển khai, v.v.)
              │
              └─→ NocoBase Service (hệ thống kinh doanh của bạn)
```

* NocoBase Skills: các gói kiến thức miền giúp OpenCode hiểu cách vận hành NocoBase
* NocoBase CLI: một công cụ dòng lệnh thực thi các tác vụ như mô hình hóa dữ liệu và xây dựng trang
* NocoBase Service: phiên bản NocoBase đang chạy của bạn

### Cài đặt AI một chạm

Sao chép prompt bên dưới vào OpenCode. Nó sẽ tự động cài đặt NocoBase CLI, khởi tạo dự án và cấu hình môi trường:

```text
Hãy giúp tôi cài đặt NocoBase CLI và hoàn tất khởi tạo: https://docs.nocobase.com/en/ai/ai-quick-start.md Vui lòng mở và đọc trực tiếp liên kết.
```

### Tài nguyên liên quan

Tài liệu: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Skills: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Directus: API dữ liệu và back-end quản lý nội dung

Trang web chính thức: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

Sao GitHub: 35k

Nếu dự án của bạn đã có cơ sở dữ liệu hoặc bạn muốn nhanh chóng thêm API dữ liệu, back-end quản lý nội dung và một lớp kiểm soát truy cập vào hệ thống kinh doanh, Directus là một dự án mã nguồn mở tốt để kết hợp với OpenCode.

![Directus1.png](https://static-docs.nocobase.com/Directus1-0a1hg8.png)

Khả năng cốt lõi của Directus là: **biến cơ sở dữ liệu SQL thành các nền tảng dữ liệu có thể quản lý được**. Nó có thể tự động tạo REST API và GraphQL API từ cơ sở dữ liệu, đồng thời cung cấp một Data Studio trực quan, nơi cả nhà phát triển và người dùng kinh doanh có thể quản lý dữ liệu, nội dung, tệp và quyền.

Ví dụ: giả sử bạn đang sử dụng OpenCode để phát triển một trang web hướng nội dung, cổng thông tin khách hàng, thư viện sản phẩm hoặc nền tảng dữ liệu nội bộ. Nếu bạn bắt đầu hoàn toàn từ đầu, OpenCode sẽ cần tạo ra các mô hình cơ sở dữ liệu, dịch vụ API, logic xác thực, bảng quản trị, quản lý tệp và kiểm soát truy cập. Điều đó tạo ra một khối lượng công việc lớn và khiến việc bảo trì lâu dài trở nên khó khăn hơn.

Với Directus, Directus cung cấp quản lý dữ liệu, API, quyền và giao diện quản trị, trong khi OpenCode xử lý việc phát triển dự án, tích hợp và mở rộng xoay quanh các khả năng này.

Sự kết hợp này đặc biệt phù hợp với các dự án nặng về nội dung và dữ liệu. Ví dụ: nếu bạn muốn xây dựng một thư viện sản phẩm, Directus có thể quản lý danh mục sản phẩm, thông số, hình ảnh, tài liệu và trạng thái xuất bản. OpenCode sau đó có thể nhanh chóng tạo các trang frontend, tính năng tìm kiếm và lọc, tập lệnh nhập dữ liệu và các endpoint tùy chỉnh dựa trên API của Directus.

![Directus2.png](https://static-docs.nocobase.com/Directus2-r78b4m.png)

Directus và OpenCode hoạt động đặc biệt tốt trong các tình huống sau:

* Headless CMS
* Hệ thống quản lý nội dung
* Thư viện sản phẩm
* Trung tâm case study khách hàng
* Nền tảng nội dung đa ngôn ngữ
* Back-end quản lý dữ liệu nội bộ
* Lớp API dữ liệu
* Quản lý tệp và tài sản truyền thông
* Cổng thông tin khách hàng / Cổng thông tin đối tác
* Back-end ứng dụng di động

Sự khác biệt giữa Directus và NocoBase cũng rất rõ ràng.

Directus phù hợp hơn với các dự án tập trung vào cơ sở dữ liệu và API nội dung, chẳng hạn như nền tảng nội dung, danh mục sản phẩm, trang web đa ngôn ngữ và cổng thông tin khách hàng. NocoBase phù hợp hơn để xây dựng các hệ thống kinh doanh hoàn chỉnh, chẳng hạn như CRM, hệ thống ticket, phê duyệt, quản lý tài sản và back-end vận hành. Các hệ thống này thường yêu cầu khả năng mối quan hệ dữ liệu, điều phối luồng công việc, kiểm soát quyền và cấu hình trang mạnh mẽ hơn.

## 3. Metabase: Phân tích dữ liệu và báo cáo nâng cao

Trang web chính thức: [https://www.metabase.com/](https://www.metabase.com/)

GitHub: [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

Sao GitHub: 47.4k

Nếu bạn đang sử dụng OpenCode để phát triển một hệ thống kinh doanh, công cụ nội bộ, back-end vận hành hoặc nền tảng dữ liệu, Metabase là một dự án mã nguồn mở mạnh mẽ để sử dụng cùng.

![Metabase1.png](https://static-docs.nocobase.com/Metabase1-hwifhf.png)

Metabase cung cấp khả năng phân tích dữ liệu và BI mã nguồn mở. Nó có thể kết nối với cơ sở dữ liệu và giúp các nhóm phân tích dữ liệu kinh doanh thông qua biểu đồ, truy vấn và bảng điều khiển. Metabase cũng hỗ trợ truy vấn dữ liệu bằng ngôn ngữ tự nhiên và có thể cung cấp khả năng phân tích dựa trên các chỉ số và quyền.

Ví dụ: giả sử bạn đã có một hệ thống ticket với dữ liệu như khách hàng, ticket, chủ sở hữu, mức độ ưu tiên, trạng thái xử lý và thời gian hoàn thành. OpenCode không cần phải viết một mô-đun báo cáo từ đầu. Thay vào đó, nó có thể giúp kết nối dữ liệu với Metabase và nhanh chóng tạo ra các khả năng phân tích.

Metabase cung cấp phân tích dữ liệu, biểu đồ, bảng điều khiển và hệ thống quyền. OpenCode xử lý các kết nối cơ sở dữ liệu, tạo truy vấn, thiết kế chỉ số, nhúng hệ thống và tích hợp tự động hóa xoay quanh các khả năng này.

Metabase và OpenCode hoạt động đặc biệt tốt trong các tình huống sau:

* Bảng điều khiển kinh doanh
* Phân tích bán hàng
* Phân tích khách hàng
* Phân tích hiệu quả ticket
* Phân tích tài sản CNTT
* Báo cáo vận hành
* Bảng điều khiển chỉ số tài chính
* Phân tích sử dụng sản phẩm
* Báo cáo quản lý
* BI nhúng

## 4. Outline: Cơ sở tri thức và cộng tác tài liệu

Trang web chính thức: [https://www.getoutline.com/](https://www.getoutline.com/)

GitHub: [https://github.com/outline/outline](https://github.com/outline/outline)

Sao GitHub: 38.5k

Hiệu quả của một AI Agent phụ thuộc rất nhiều vào ngữ cảnh.

Nếu một dự án không có tài liệu rõ ràng, Agent có thể dễ dàng hiểu sai yêu cầu. Nó có thể không hiểu các quy tắc hệ thống, bối cảnh kinh doanh, định nghĩa dữ liệu, mô tả API, phương pháp triển khai hoặc quy ước của nhóm.

Đây là lý do tại sao tài liệu ngày càng trở nên quan trọng trong phát triển có sự hỗ trợ của AI. Tài liệu không chỉ dành cho con người. Nó cũng trở thành ngữ cảnh làm việc cho các AI Agent.

Outline là một cơ sở tri thức mã nguồn mở dành cho nhóm để quản lý tài liệu nội bộ, ghi chú dự án, thông số kỹ thuật sản phẩm và kiến thức nhóm.

![Outline1.png](https://static-docs.nocobase.com/Outline1-yccehc.png)

Loại công cụ này dễ bị bỏ qua, nhưng nó rất quan trọng đối với các dự án dài hạn.

Các tình huống phù hợp:

* Cơ sở tri thức nhóm
* Tài liệu sản phẩm
* Tài liệu dự án
* Tài liệu kỹ thuật
* Tài liệu hướng dẫn nhân viên mới
* Tài liệu sẵn sàng cho AI
* Quản lý tiêu chuẩn nội bộ

Nếu bạn muốn OpenCode làm nhiều hơn là chỉ viết mã và tham gia đáng tin cậy vào cộng tác dự án, một hệ thống tài liệu là điều cần thiết.

## 5. Keycloak: Xác thực danh tính và kiểm soát truy cập

Trang web chính thức: [https://www.keycloak.org/](https://www.keycloak.org/)

GitHub: [https://github.com/keycloak/keycloak](https://github.com/keycloak/keycloak)

Sao GitHub: 34.5k

Nếu bạn đang sử dụng OpenCode để phát triển một dự án thực tế, Keycloak là một công cụ quản lý danh tính và truy cập mã nguồn mở mạnh mẽ để kết hợp. Nếu bạn yêu cầu OpenCode tạo ra tất cả các khả năng này từ đầu, nó có thể tạo ra một phiên bản đơn giản trong ngắn hạn, nhưng bảo mật, khả năng mở rộng và chi phí bảo trì sẽ nhanh chóng trở thành vấn đề.

![Keycloak1.png](https://static-docs.nocobase.com/Keycloak1-483p2p.png)

Keycloak cung cấp các khả năng quản lý danh tính và truy cập mã nguồn mở trưởng thành, bao gồm:

* Đăng ký và đăng nhập người dùng
* Đăng nhập một lần SSO
* Quản lý vai trò và quyền
* OAuth 2.0 / OpenID Connect
* Tích hợp hệ thống tài khoản doanh nghiệp
* Đăng nhập bằng nhà cung cấp danh tính bên thứ ba
* Xác thực hợp nhất trên nhiều hệ thống nội bộ
* Quản lý phiên người dùng và token
* Xác thực đa yếu tố

## FAQ

### 1. OpenCode là gì?

OpenCode là một AI Coding Agent mã nguồn mở. Nó có thể hoạt động trong terminal, IDE hoặc thư mục dự án của riêng nhà phát triển, giúp họ đọc mã, sửa đổi mã, tạo tập lệnh, xử lý cấu hình và hoàn thành các tác vụ phát triển. So với các công cụ lập trình AI đóng, OpenCode mang lại cho nhà phát triển nhiều lựa chọn hơn về mô hình, tích hợp công cụ và kiểm soát quy trình làm việc.

### 2. Tại sao OpenCode phù hợp để sử dụng với các dự án mã nguồn mở?

Bởi vì các dự án thực tế không chỉ là tạo mã. Chúng cũng yêu cầu các khả năng nền tảng như mô hình dữ liệu, API, quyền, luồng công việc, báo cáo, tài liệu và xác thực danh tính. Các dự án mã nguồn mở trưởng thành đã giải quyết một phần nền tảng hệ thống này và OpenCode có thể xử lý việc cài đặt, cấu hình, tích hợp, mở rộng và phát triển thứ cấp trên chúng.

### 3. OpenCode có thể xây dựng một ứng dụng hoàn chỉnh từ đầu không?

Có, nhưng đó có thể không phải là cách tiếp cận tốt nhất. Đối với các bản demo hoặc công cụ đơn giản, việc tạo mã từ đầu có thể nhanh chóng. Nhưng đối với các hệ thống kinh doanh vận hành lâu dài, tốt hơn là nên bắt đầu với các dự án mã nguồn mở trưởng thành và để OpenCode xử lý việc tùy chỉnh và mở rộng.

### 4. Dự án mã nguồn mở nào hoạt động tốt với OpenCode?

Nó phụ thuộc vào loại dự án của bạn. Ví dụ: NocoBase phù hợp cho các hệ thống kinh doanh và công cụ nội bộ. Directus phù hợp cho API dữ liệu và quản lý nội dung. Metabase phù hợp cho phân tích dữ liệu và báo cáo. Outline phù hợp cho cơ sở tri thức và tài liệu dự án. Keycloak phù hợp cho xác thực danh tính và kiểm soát truy cập.

### 5. OpenCode và NocoBase có thể làm gì cùng nhau?

NocoBase cung cấp các khả năng cốt lõi cho các hệ thống kinh doanh, bao gồm mô hình dữ liệu, trang, quyền, luồng công việc, plugin và AI Employee. OpenCode có thể giúp khởi tạo một dự án NocoBase, thiết kế mô hình dữ liệu, xây dựng trang, cấu hình luồng công việc, phát triển plugin và kết nối API bên ngoài. Cùng nhau, chúng phù hợp để xây dựng CRM, hệ thống ticket, hệ thống phê duyệt, quản lý tài sản, quản lý dự án, back-end vận hành và các hệ thống tương tự.

### 6. OpenCode chỉ dành cho nhà phát triển?

Bản thân OpenCode phù hợp hơn cho các nhà phát triển. Nhưng khi nó được kết hợp với các công cụ như NocoBase, Directus, Metabase, Outline và Keycloak, các hệ thống cuối cùng có thể được sử dụng bởi người dùng kinh doanh, nhóm vận hành, quản lý và các thành viên khác trong nhóm. Họ có thể hoàn thành công việc hàng ngày thông qua giao diện không-code, bảng điều khiển, cơ sở tri thức hoặc hệ thống đăng nhập hợp nhất.

### 7. Cách tốt nhất để sử dụng OpenCode xây dựng các dự án thực tế là gì?

Một cách tiếp cận tốt hơn là sử dụng OpenCode làm lớp Agent và các dự án mã nguồn mở làm lớp hệ thống. Đừng yêu cầu OpenCode tạo ra mọi thứ từ một kho lưu trữ trống. Thay vào đó, hãy để nó làm việc trên các dự án mã nguồn mở trưởng thành và sử dụng các mô hình dữ liệu, API, quyền, luồng công việc, báo cáo hoặc khả năng xác thực hiện có. Điều này cải thiện hiệu quả phát triển và giảm chi phí bảo trì lâu dài.

## Tổng kết: Chọn một Agent mã nguồn mở và chọn một nền tảng hệ thống mã nguồn mở

OpenCode mang lại cho các nhà phát triển một quy trình phát triển AI cởi mở và dễ kiểm soát hơn.

Nhưng Agent chỉ là một lớp.

Nếu bạn muốn xây dựng các dự án thực tế, bạn cũng cần một bộ nền tảng hệ thống có thể hỗ trợ các yêu cầu dài hạn. Các dự án mã nguồn mở như NocoBase, Directus, Metabase, Outline và Keycloak giải quyết các vấn đề về cơ sở hạ tầng hệ thống, API dữ liệu, phân tích, tài liệu, xác thực danh tính và kiểm soát truy cập.

Đối với các nhà phát triển chọn OpenCode, loại ngăn xếp công nghệ mã nguồn mở này phù hợp hơn với lý do tại sao họ chọn OpenCode ngay từ đầu:

* Tránh bị khóa vào một nền tảng duy nhất
* Giữ quyền kiểm soát mã và dữ liệu
* Hỗ trợ triển khai riêng tư
* Hỗ trợ mở rộng liên tục
* Cho phép AI Agent thực sự tham gia vào phát triển dự án dài hạn

**Bài viết liên quan**

* [Xây dựng Công cụ Nội bộ với Codex: 6 Dự án Mã nguồn mở dành cho Nhà phát triển](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Sau Claude Code: 6 Công cụ Mã nguồn mở Bạn Nên Biết](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Công cụ AI và No-Code Mã nguồn mở cho Phát triển Phần mềm Doanh nghiệp](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Nền tảng AI Agent Mã nguồn mở để Xây dựng Công cụ Nội bộ](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Tự lưu trữ Tốt nhất cho Doanh nghiệp với Hỗ trợ RBAC, AI và Open API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Công cụ Mã nguồn mở Tốt nhất để Thay thế Middleware Tích hợp Tùy chỉnh](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Thay thế Excel bằng NocoBase hay Airtable? So sánh Chi phí từng Khoản](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cách Xây dựng Ứng dụng Web Nhanh chóng từ Dữ liệu Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Không chỉ PostgreSQL: So sánh 5 Nền tảng No-Code/Low-Code có Hỗ trợ Cơ sở dữ liệu Bên ngoài](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Hướng dẫn Chọn Công cụ Quản lý Dự án Mã nguồn mở, Phiên bản 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [Cách Xây dựng CRM Tùy chỉnh với PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
