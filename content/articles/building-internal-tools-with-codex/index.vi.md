---
title: "Xây dựng Công cụ Nội bộ với Codex: 6 Dự án Mã nguồn Mở cho Nhà phát triển"
description: "Khám phá các dự án mã nguồn mở như NocoBase, Refine và Payload CMS giúp Codex xây dựng các công cụ nội bộ ổn định và dễ bảo trì hơn."
---

## Bối cảnh

Gần đây, tôi tình cờ thấy một cuộc thảo luận về AI Coding Agents trên [Hacker News](https://news.ycombinator.com/item?id=47796469): **yêu cầu AI xây dựng một ứng dụng từ đầu thường không phải là cách đáng tin cậy nhất để sử dụng nó.**

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

Nhà phát triển chỉ ra rằng nếu bạn chỉ đơn giản nói với AI, "Hãy giúp tôi xây dựng một ứng dụng," nó thường tạo ra thứ gì đó **trông có vẻ ổn lúc đầu, nhưng cấu trúc bên dưới lại không đáng tin cậy.**

AI rất giỏi trong việc cải thiện tốc độ thực thi, nhưng nó hoạt động tốt nhất khi nằm trong một cấu trúc rõ ràng.

Đối với các công cụ nội bộ doanh nghiệp thực sự, trước tiên bạn cần một nền tảng kỹ thuật đáng tin cậy, sau đó sử dụng Coding Agent để nâng cao hiệu quả phát triển.

Trong bài viết này, chúng tôi sẽ tập trung vào các công cụ nội bộ doanh nghiệp và giới thiệu một số dự án mã nguồn mở hoạt động tốt với Codex, giúp các nhà phát triển xây dựng hệ thống và công cụ nội bộ hiệu quả hơn.

---

💬 Xin chào, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển không-code/ít-code mạnh mẽ nhất, hỗ trợ AI, dùng để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và đủ loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

| Dự án       | Phù hợp nhất cho                                                                          | Phù hợp nhất với                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| NocoBase    | Xây dựng các hệ thống nghiệp vụ nội bộ như CRM, ticketing, phê duyệt và quản lý tài sản | Các nhà phát triển cần nhanh chóng xây dựng các hệ thống nghiệp vụ có thể bảo trì được          |
| Refine      | Xây dựng bảng điều khiển quản trị React, dashboard và ứng dụng B2B                        | Các nhà phát triển quen thuộc với React muốn kiểm soát hoàn toàn mã nguồn                       |
| Payload CMS | Xây dựng backend dữ liệu và hệ thống quản trị bằng TypeScript / Next.js                   | Các nhà phát triển ưa thích backend và Admin Panel ưu tiên TypeScript                           |
| Directus    | Tạo API và bảng quản trị cho các cơ sở dữ liệu SQL hiện có                                | Các nhóm có cơ sở dữ liệu hiện tại cần nhanh chóng có bảng quản trị và lớp API                  |
| Supabase    | Xây dựng backend Postgres cho các công cụ nội bộ                                          | Các nhà phát triển cần các tính năng xác thực, cơ sở dữ liệu, lưu trữ, thời gian thực và hàm backend |
| Windmill    | Biến các script thành công cụ nội bộ, tác vụ và quy trình làm việc                        | Các nhóm kỹ thuật có nhiều script nội bộ và tác vụ tự động hóa                                  |

## 1. NocoBase

Trang web chính thức: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

Sao GitHub: 22.4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase là một nền tảng không-code AI mã nguồn mở để xây dựng các hệ thống nội bộ doanh nghiệp như CRM, hệ thống ticketing, hệ thống phê duyệt, quản lý dự án, quản lý tài sản và backend vận hành.

Giá trị cốt lõi của NocoBase **là nó cung cấp một khung hệ thống hoàn chỉnh cho các công cụ nội bộ**, bao gồm mô hình dữ liệu, cấu hình trang, kiểm soát quyền, quy trình làm việc, tiện ích mở rộng plugin và khả năng AI. Đối với các nhà phát triển, nó không chỉ là một trình xây dựng trang kéo-thả. Nó là cơ sở hạ tầng hệ thống nghiệp vụ vẫn có thể được mở rộng bằng mã.

NocoBase cung cấp tài liệu Codex chính thức: [Sử dụng Codex với NocoBase cho cả xây dựng và phát triển](https://docs.nocobase.com/en/ai/codex)

Sau khi kết nối Codex, Codex có thể sử dụng [Kỹ năng NocoBase](https://docs.nocobase.com/en/ai-builder#nocobase-skills) và [CLI](https://docs.nocobase.com/en/api/cli/) để hiểu cách NocoBase được cấu hình và phát triển. Nó có thể giúp các nhà phát triển tạo bảng dữ liệu, cấu hình trang, thiết kế quy trình làm việc, thiết lập quyền và xử lý thêm việc phát triển plugin, mở rộng tính năng và khắc phục sự cố thông qua ngôn ngữ tự nhiên.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**So với việc yêu cầu Codex tạo một hệ thống nội bộ từ đầu, NocoBase cung cấp cho nó một khung hệ thống ổn định hơn để hoạt động.** Kết quả không phải là mã dùng một lần khó bảo trì, mà là một hệ thống chạy trong khung NocoBase và có thể được cải tiến liên tục.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

Ngoài giai đoạn xây dựng ban đầu, NocoBase còn cung cấp khả năng Nhân viên AI. Nhân viên AI có thể làm việc với các trang nghiệp vụ, bảng dữ liệu và bối cảnh quy trình làm việc để giúp tổ chức dữ liệu, phân tích dữ liệu, dịch thuật, nghiên cứu, xử lý email, mô hình hóa dữ liệu, cấu hình biểu đồ, v.v. Nói cách khác, Codex phù hợp hơn để giúp các nhà phát triển xây dựng và mở rộng hệ thống, trong khi Nhân viên AI của NocoBase có thể tham gia vào các hoạt động nghiệp vụ hàng ngày sau khi hệ thống đi vào hoạt động.

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

Bằng cách cấu hình các dịch vụ LLM, Kỹ năng, cơ sở kiến thức và tác vụ nhanh, Nhân viên AI có thể phù hợp hơn với các hoạt động nghiệp vụ thực tế, giúp các nhóm nâng cao hiệu quả trong cả việc xây dựng hệ thống và sử dụng hàng ngày.

### Những gì bạn có thể xây dựng với Codex và NocoBase

Codex và NocoBase có thể giúp các nhà phát triển xây dựng các hệ thống nội bộ doanh nghiệp có thể bảo trì nhanh hơn, chẳng hạn như:

* CRM
* Hệ thống Ticketing
* Hệ thống phê duyệt
* Quản lý dự án
* Quản lý tài sản
* Backend vận hành
* Bảng điều khiển dữ liệu

Codex xử lý việc hiểu yêu cầu, phân tích cấu trúc nghiệp vụ và tạo ra các triển khai. NocoBase cung cấp các mô hình dữ liệu, quyền, trang, quy trình làm việc và tiện ích mở rộng plugin. Thay vì yêu cầu AI tạo mã khó bảo trì từ đầu, các nhà phát triển có thể để Codex xây dựng và phát triển trong khung hệ thống hiện có của NocoBase.

### Gợi ý Prompt

#### Cài đặt NocoBase

Sao chép prompt bên dưới vào Codex để tự động cài đặt và cấu hình NocoBase:

```text
Hãy giúp tôi cài đặt CLI của NocoBase và hoàn tất khởi tạo: https://docs.nocobase.com/en/ai/ai-quick-start.md Vui lòng mở và đọc trực tiếp liên kết.
```

#### Thiết kế một hệ thống

```text
Hãy giúp tôi sử dụng kỹ năng nocobase-dsl-reconciler để xây dựng một hệ thống quản lý ticket, bao gồm bảng điều khiển, danh sách ticket, quản lý người dùng và cấu hình SLA.
```

#### Kết quả thực tế

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### Tài nguyên liên quan

Bạn có thể sao chép các liên kết này và gửi chúng cho Codex để sử dụng trực tiếp.

Tài liệu: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Kỹ năng: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

## 2. Refine

Trang web chính thức: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

Sao GitHub: 34.7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine là một framework React mã nguồn mở dành cho các nhà phát triển. Nó chủ yếu được sử dụng để xây dựng các công cụ nội bộ, bảng quản trị, dashboard và ứng dụng B2B. Nó cung cấp các khả năng cốt lõi như xác thực, kiểm soát quyền, định tuyến, tìm nạp dữ liệu, quản lý trạng thái và quốc tế hóa, phù hợp để nhanh chóng xây dựng các ứng dụng thiên về CRUD.

Refine cũng đang tăng cường hỗ trợ cho các kịch bản AI Agent. Nó cung cấp một quy trình làm việc được thiết kế cho các ứng dụng do AI tạo ra: kết nối với REST API hoặc dự án Supabase hiện có, phân tích cấu trúc backend và tạo bản thiết kế cho các tác nhân AI để kết quả tạo ra phù hợp hơn với các mô hình dữ liệu thực tế.

Đây là lý do tại sao Refine hoạt động tốt với Codex. Codex không cần phải đoán cách xây dựng một công cụ nội bộ từ đầu. Nó có thể tạo các trang danh sách, trang chi tiết, trang chỉnh sửa, biểu mẫu, bộ lọc, kiểm tra quyền và logic gọi API dựa trên cấu trúc dự án, mô hình tài nguyên và cấu hình nguồn dữ liệu của Refine.

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine cũng cung cấp CLI để tạo tài nguyên, quản lý cập nhật, swizzle các thành phần và chạy các tác vụ dự án như build, start và dev. Đối với các Coding Agent như Codex, các điểm vào dòng lệnh rõ ràng này dễ dàng tự động hóa hơn và phù hợp hơn cho việc lặp lại liên tục trong các dự án hiện có.

### Những gì bạn có thể xây dựng với Codex và Refine

Codex và Refine đặc biệt phù hợp để phát triển nhanh các giao diện quản trị nội bộ trong stack React, chẳng hạn như backend CRM, backend quản lý đơn hàng, nền tảng xem xét vận hành, không gian làm việc dịch vụ khách hàng, bảng quản lý dữ liệu và cổng thông tin quản trị B2B SaaS.

Ví dụ: nếu bạn muốn xây dựng một backend quản lý đơn hàng, Codex có thể tạo danh sách đơn hàng, trang chi tiết đơn hàng, biểu mẫu chỉnh sửa, bộ lọc, nút cập nhật trạng thái và logic quyền dựa trên các cấu trúc dữ liệu như đơn hàng, khách hàng, sản phẩm và trạng thái thanh toán. Refine cung cấp cấu trúc cơ bản cho các công cụ nội bộ React, trong khi Codex tăng tốc độ phát triển các trang nghiệp vụ cụ thể.

Thiết lập này tốt hơn cho các nhà phát triển muốn kiểm soát hoàn toàn mã nguồn. Đầu ra cuối cùng là một dự án React, chứ không phải cấu hình bị khóa trong một nền tảng đóng. Bạn có thể tiếp tục sử dụng Codex sau này để sửa đổi các thành phần, tái cấu trúc logic, kết nối API mới hoặc mở rộng các mô-đun nghiệp vụ.

### Gợi ý Prompt

```text
Hãy giúp tôi tạo một backend quản lý đơn hàng dựa trên Refine, sử dụng REST API làm nguồn dữ liệu. Nó nên bao gồm danh sách đơn hàng, chi tiết đơn hàng, biểu mẫu chỉnh sửa đơn hàng, bộ lọc khách hàng, cập nhật trạng thái đơn hàng và kiểm soát quyền cơ bản.
```

## 3. Payload CMS

Trang web chính thức: [https://payloadcms.com/](https://payloadcms.com/)

GitHub: [https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

Sao GitHub: 42.5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS là một framework full-stack Next.js mã nguồn mở để xây dựng CMS, bảng quản trị, ứng dụng dựa trên dữ liệu và các công cụ nội bộ doanh nghiệp. Nó cung cấp cấu hình TypeScript, bộ sưu tập dữ liệu, kiểm soát quyền, Admin Panel, REST / GraphQL APIs, Hooks, plugin, quản lý tệp, v.v.

Payload xác định các mô hình dữ liệu và logic nghiệp vụ thông qua mã. Bạn có thể cấu hình các bộ sưu tập, trường, kiểm soát truy cập, hooks và giao diện quản trị trong TypeScript, giữ backend, API và giao diện quản trị của một công cụ nội bộ trong một cơ sở mã duy nhất.

Payload cũng đã bắt đầu hỗ trợ các kịch bản AI Agent. Tài liệu chính thức của nó cung cấp MCP Plugin cho phép các nhà phát triển kiểm soát các bộ sưu tập và globals mà AI có thể sử dụng cho các thao tác như tìm, tạo, cập nhật và xóa. Các nhà phát triển cũng có thể xác định prompts, công cụ và tài nguyên của riêng họ.

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Những gì bạn có thể xây dựng với Codex và Payload

Codex và Payload phù hợp để phát triển nhanh các backend dữ liệu, hệ thống quản lý nội dung, cổng thông tin khách hàng, backend đơn hàng, hệ thống quản lý tài sản và công cụ quản lý vận hành dựa trên TypeScript / Next.js.

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

Ví dụ: nếu bạn muốn xây dựng một backend quản lý tài sản, Codex có thể tạo các bộ sưu tập Payload, cấu hình trường, quyền truy cập và hooks dựa trên các yêu cầu như thiết bị, nhân viên, phòng ban, hồ sơ sử dụng, hồ sơ bảo trì và trạng thái phê duyệt. Payload cung cấp giao diện quản lý dữ liệu, API và thực thi quyền. Nếu bạn cần thêm logic nghiệp vụ sau này, bạn có thể tiếp tục sử dụng Codex để sửa đổi cấu hình TypeScript và mã mở rộng.

### Gợi ý Prompt

```text
Hãy giúp tôi tạo một backend quản lý tài sản dựa trên Payload CMS, bao gồm các bộ sưu tập cho thiết bị, nhân viên, phòng ban, hồ sơ sử dụng và hồ sơ bảo trì. Đồng thời cấu hình các trường cơ bản, quyền truy cập, trường hiển thị của Admin Panel và các hooks thông dụng.
```

## 4. Directus

Trang web chính thức: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

Sao GitHub: 35.7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus là một nền tảng backend dữ liệu mã nguồn mở có thể nhanh chóng biến các cơ sở dữ liệu SQL như PostgreSQL, MySQL, SQLite, MariaDB, MS SQL và OracleDB thành REST / GraphQL APIs và một bảng quản trị trực quan. Nó phù hợp để xây dựng backend quản lý dữ liệu, hệ thống quản lý nội dung, backend vận hành, backend dữ liệu khách hàng, lớp API nội bộ và các dự án tương tự.

Directus đặc biệt thân thiện với các cơ sở dữ liệu hiện có. Nhiều công cụ nội bộ không bắt đầu từ con số không. Một cơ sở dữ liệu nghiệp vụ có thể đã tồn tại, nhưng nhóm vẫn thiếu một bảng quản trị, quản lý quyền và lớp API có thể sử dụng được. Directus có thể kết nối trực tiếp với cơ sở dữ liệu SQL hiện có và cung cấp quản lý mô hình dữ liệu, quyền vai trò, quản lý tệp, quy trình làm việc tự động hóa và khả năng mở rộng trên đó.

Directus đã cung cấp MCP Server, cho phép các công cụ AI như Claude, ChatGPT và Cursor kết nối với Directus. AI có thể tạo, chỉnh sửa và quản lý nội dung trong hệ thống quyền hiện có, mà không cần sao chép dữ liệu đi nơi khác hoặc bỏ qua các kiểm soát quyền của Directus.

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Những gì bạn có thể xây dựng với Codex và Directus

Codex và Directus phù hợp để nhanh chóng xây dựng các backend dữ liệu nội bộ và lớp API trên các cơ sở dữ liệu hiện có, chẳng hạn như quản lý dữ liệu khách hàng, quản lý dữ liệu đơn hàng, quản lý nội dung, quản lý danh mục sản phẩm, backend cấu hình vận hành và hệ thống xem xét dữ liệu.

Giá trị của sự kết hợp này rất rõ ràng: Directus kết nối cơ sở dữ liệu, tạo API, cung cấp bảng quản trị và xử lý quyền. Codex hiểu các yêu cầu nghiệp vụ, thiết kế cấu trúc dữ liệu, viết logic mở rộng, Hooks, Custom Endpoints, script dữ liệu và mã tích hợp frontend.

Ưu điểm là các nhà phát triển không cần phải viết lại các cơ sở dữ liệu hoặc backend hiện có. Directus cung cấp lớp dữ liệu và bảng quản trị, trong khi Codex tăng tốc logic nghiệp vụ và phát triển mở rộng. Điều này làm cho sự kết hợp phù hợp với các nhóm đã có cơ sở dữ liệu nhưng cần nhanh chóng thêm các khả năng công cụ nội bộ.

### Gợi ý Prompt

```text
Hãy giúp tôi thiết kế một bảng quản trị nội bộ cho cơ sở dữ liệu đơn hàng hiện có dựa trên Directus. Nó nên bao gồm bốn loại dữ liệu: đơn hàng, khách hàng, sản phẩm và hồ sơ thanh toán. Đồng thời cấu hình quyền cơ bản, chế độ xem danh sách, quy trình làm việc cập nhật trạng thái và Hook thông báo sau khi trạng thái đơn hàng thay đổi.
```

## 5. Supabase

Trang web chính thức: [https://supabase.com/](https://supabase.com/)

GitHub: [https://github.com/supabase/supabase](https://github.com/supabase/supabase)

Sao GitHub: 103k

Supabase có lẽ không cần giới thiệu nhiều.

Supabase cung cấp Supabase MCP Server chính thức cho phép các công cụ AI kết nối với các dự án Supabase và truy vấn hoặc thao tác trên chúng trong phạm vi quyền được phép. Supabase cũng cung cấp các kỹ năng cho các tác nhân AI, bao gồm cơ sở dữ liệu, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues, CLI, MCP, thay đổi lược đồ, di chuyển, chính sách RLS, kiểm tra bảo mật, v.v.

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Những gì bạn có thể xây dựng với Codex và Supabase?

Codex và Supabase phù hợp để nhanh chóng xây dựng lớp backend của các công cụ nội bộ. Supabase cung cấp cơ sở dữ liệu, xác thực, API, lưu trữ và môi trường chạy hàm. Codex thiết kế lược đồ dựa trên yêu cầu nghiệp vụ, viết SQL, cấu hình quyền RLS, tạo Edge Functions và giúp frontend gọi các API của Supabase.

Ví dụ: nếu bạn muốn xây dựng một backend quản lý khách hàng, Codex có thể thiết kế các bảng Postgres, mối quan hệ trường, chỉ mục và chính sách RLS dựa trên các yêu cầu như khách hàng, liên hệ, hồ sơ theo dõi, cơ hội bán hàng, hợp đồng và tệp đính kèm. Supabase cung cấp cơ sở dữ liệu, xác thực, API tự động và thực thi quyền. Sau này, nếu bạn cần tự động phân bổ khách hàng, đồng bộ dữ liệu bên ngoài hoặc tạo bản tóm tắt AI, bạn có thể tiếp tục sử dụng Codex để viết Edge Functions hoặc các hàm cơ sở dữ liệu.

### Gợi ý Prompt

```text
Hãy giúp tôi thiết kế backend cho một hệ thống quản lý khách hàng dựa trên Supabase. Nó nên bao gồm các bảng cho khách hàng, liên hệ, cơ hội, hợp đồng, follow_ups và tệp đính kèm. Vui lòng tạo SQL migration, các chỉ mục cơ bản, chính sách RLS, thiết kế xác thực và quyền, và một Edge Function để tự động phân bổ chủ sở hữu bán hàng.
```

## 6. Windmill

Trang web chính thức: [https://www.windmill.dev/](https://www.windmill.dev/)

GitHub: [https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

Sao GitHub: 16.5k

Windmill là một nền tảng mã nguồn mở dành cho các nhà phát triển. Nó có thể nhanh chóng biến các script được viết bằng Python, TypeScript, Go, Bash, SQL và các ngôn ngữ khác thành API, tác vụ nền, quy trình làm việc và ứng dụng nội bộ. Nó phù hợp để xây dựng các quy trình làm việc tự động hóa, tác vụ xử lý dữ liệu, công cụ vận hành, quản lý tác vụ nền, nền tảng script nội bộ và giao diện quản trị nhẹ.

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Với CLI và các kỹ năng AI tích hợp, Windmill cho phép các nhà phát triển sử dụng Claude Code hoặc Codex cục bộ, sau đó triển khai đến một không gian làm việc từ xa thông qua `wmill sync push`. Trong thiết lập này, Codex viết script và logic quy trình làm việc, trong khi Windmill xử lý việc thực thi, lập lịch, quyền, nhật ký và giao diện vận hành trực quan.

### Những gì bạn có thể xây dựng với Codex và Windmill

Codex và Windmill đặc biệt phù hợp để biến các script do nhà phát triển viết thành các công cụ nội bộ mà cả nhóm có thể sử dụng. Ví dụ bao gồm đồng bộ dữ liệu, tạo báo cáo, nhập xuất hàng loạt, xử lý Webhook, tác vụ định kỳ, làm sạch dữ liệu khách hàng, đồng bộ trạng thái đơn hàng, thông báo Slack / Email và quy trình làm việc xử lý dữ liệu AI.

Ví dụ: nếu bạn muốn xây dựng một quy trình làm việc nội bộ để đồng bộ dữ liệu khách hàng CRM mỗi đêm và tạo báo cáo ngoại lệ, Codex có thể giúp viết các script để đọc, làm sạch, so sánh và báo cáo dữ liệu. Windmill có thể cấu hình quy trình làm việc như một tác vụ định kỳ, ghi lại nhật ký thực thi và cung cấp một trang nội bộ nơi nhóm có thể kích hoạt thủ công quy trình làm việc hoặc xem kết quả.

### Gợi ý Prompt

```text
Hãy giúp tôi tạo một quy trình làm việc đồng bộ dữ liệu khách hàng dựa trên Windmill: đọc dữ liệu khách hàng từ PostgreSQL mỗi đêm, làm sạch các bản ghi trùng lặp, xác định các email bất thường, tạo báo cáo ngoại lệ và thông báo cho nhóm vận hành qua Slack. Vui lòng viết script bằng TypeScript và giải thích cách cấu hình tác vụ định kỳ và các tham số đầu vào.
```

## Suy nghĩ cuối cùng

Các AI Coding Agent như Codex đang thay đổi cách các nhà phát triển xây dựng các công cụ nội bộ.

NocoBase, Refine, Payload, Directus, Supabase và Windmill, mỗi nền tảng cung cấp một nền tảng kỹ thuật rõ ràng hơn từ các góc độ khác nhau, bao gồm hệ thống nghiệp vụ, framework frontend, backend dữ liệu, dịch vụ backend và tự động hóa script.

Giá trị của Codex là nó nâng cao hiệu quả phát triển trên các nền tảng này: nó giúp bạn phân tích yêu cầu, tạo mã, cấu hình tài nguyên, viết script, thiết kế quy trình làm việc, xử lý tích hợp và khắc phục sự cố.

Một cách tiếp cận phát triển tốt hơn là:

> Chọn cơ sở hạ tầng mã nguồn mở phù hợp trước, sau đó để Codex hoàn thành việc triển khai cụ thể trong một cấu trúc rõ ràng.

Các công cụ nội bộ được xây dựng theo cách này dễ bảo trì, mở rộng và đưa vào sử dụng thực tế hơn.

**Bài viết liên quan**

* [Sau Claude Code: 6 Công Cụ Mã Nguồn Mở Bạn Nên Biết](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Công Cụ AI Và No-Code Mã Nguồn Mở Cho Phát Triển Phần Mềm Doanh Nghiệp](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Nền Tảng AI Agent Mã Nguồn Mở Để Xây Dựng Công Cụ Nội Bộ](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Tự Lưu Trữ Tốt Nhất Cho Doanh Nghiệp Với Hỗ Trợ RBAC, AI Và Open API](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Công Cụ Mã Nguồn Mở Tốt Nhất Để Thay Thế Middleware Tích Hợp Tùy Chỉnh](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Thay Thế Excel Bằng NocoBase Hay Airtable? So Sánh Chi Phí Từng Khoản](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cách Nhanh Chóng Xây Dựng Ứng Dụng Web Từ Dữ Liệu Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Không Chỉ PostgreSQL: So Sánh 5 Nền Tảng No-Code/Low-Code Hỗ Trợ Cơ Sở Dữ Liệu Bên Ngoài](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Hướng Dẫn Chọn Công Cụ Quản Lý Dự Án Mã Nguồn Mở, Phiên Bản 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [Cách Xây Dựng CRM Tùy Chỉnh Với PostgreSQL](https://www.nocobase.com/en/blog/how-to-build-a-custom-crm-with-postgresql)
* [Top 20 Dự Án AI Trên GitHub Đáng Xem Trong Năm 2026: Không Chỉ OpenClaw](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)
