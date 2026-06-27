---
title: "8 dự án MCP mã nguồn mở có nhiều sao GitHub nhất"
description: "Bài viết này giới thiệu 8 dự án MCP mã nguồn mở phổ biến nhất trên GitHub, bao gồm tự động hóa AI, trợ lý thông minh và quy trình trực quan, giúp bạn xây dựng hệ thống tích hợp AI mạnh mẽ nhanh hơn."
---

📝 **Lưu ý:** Bài viết này được cập nhật lần cuối vào ngày 21 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Thuật ngữ MCP thực sự đã thu hút được sự chú ý rộng rãi vào đầu năm 2025, đặc biệt là trong cộng đồng phát triển công cụ AI.

Vào tháng 3, một cuộc tranh luận sôi nổi về "MCP - hiện tượng nhất thời hay tiêu chuẩn tương lai?" đã châm ngòi cho các cuộc thảo luận. Các thành viên cốt cán từ LangChain và LangGraph đã có những cuộc tranh luận gay gắt trên X, và các dự án liên quan đến MCP trên GitHub bắt đầu nổi lên liên tiếp.

✨ Xem bản tổng hợp cập nhật năm 2026 của chúng tôi về các dự án AI nguồn mở trên GitHub: [https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026](https://www.nocobase.com/en/blog/best-open-source-ai-projects-github-2026)

![MCP - hiện tượng nhất thời hay tiêu chuẩn tương lai?](https://static-docs.nocobase.com/1-n6gfmb.png)

Nguồn hình ảnh: https://blog.langchain.com/mcp-fad-or-fixture/

**Tại sao MCP lại trở nên phổ biến?**

Về cốt lõi, các nhà phát triển cuối cùng đã nhận ra điều này: ChatGPT có thể tạo nội dung nhưng không thể tự động tìm nạp trang web; Claude có thể hiểu PDF nhưng không thể gọi API. Mặc dù các mô hình rất mạnh mẽ, nhưng chúng thiếu một vòng lặp thực thi khép kín và việc tích hợp công cụ vẫn là một nút thắt cổ chai.

MCP nhằm giải quyết vấn đề "chặng cuối" này. Nó hoạt động giống như một cổng USB-C cho các mô hình, giúp AI thống nhất quyền truy cập vào trình duyệt, cơ sở dữ liệu, hệ thống plugin, v.v., cho phép các mô hình không chỉ nói mà còn có thể hành động.

![MCP](https://static-docs.nocobase.com/2-hk5wm2.png)

Nguồn hình ảnh: https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/

Chúng tôi liên tục theo dõi các dự án nguồn mở chất lượng trên GitHub và nhận thấy nhiều công cụ lấy cảm hứng từ khái niệm MCP đang cố gắng giải quyết những vấn đề này. Một số tập trung vào quy trình làm việc tự động hóa, số khác tập trung vào tiện ích mở rộng plugin, và một số khám phá sự cộng tác đa mô hình.

Bài viết này tóm tắt 8 dự án [MCP phổ biến nhất trên GitHub](https://github.com/topics/mcp), phân tích ngắn gọn phần giới thiệu, tính năng cốt lõi, phương pháp triển khai và tích hợp cũng như các tình huống ứng dụng của chúng để bạn tham khảo thực tế.

💡 Mời bạn xem thêm loạt bài viết về các dự án GitHub phổ biến trước đây của chúng tôi:

* [Top 40 Công cụ dành cho nhà phát triển nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Dự án Low-Code nguồn mở phát triển nhanh nhất trên GitHub năm 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 7 Ứng dụng Web nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-web-applications)

---

💬 Xin chào, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển low-code/no-code hỗ trợ AI có khả năng mở rộng nhất để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

## Số 1: n8n

![n8n](https://static-docs.nocobase.com/3-r88s0s.PNG)

Sao GitHub: 124k

GitHub: https://github.com/n8n-io/n8n

Trang web: https://n8n.io/

![n8n](https://static-docs.nocobase.com/4-jy32yq.png)

**Giới thiệu:**

Trong năm qua, **n8n** đã nhanh chóng vươn lên từ một công cụ tự động hóa nguồn mở ít người biết đến trở nên phổ biến rộng rãi. Ban đầu được định vị là giải pháp thay thế nguồn mở cho các nền tảng như Zapier và Make, nó hỗ trợ kết nối trực quan các API và dịch vụ khác nhau với sự linh hoạt vượt trội so với các công cụ tự động hóa truyền thống.

Nhưng n8n còn hơn thế nữa. Sự tăng trưởng bùng nổ của nó là kết quả của nhu cầu kết hợp về nguồn mở, quyền tự chủ và AI. Với OpenAI, Hugging Face và các mô hình khác nhanh chóng được đưa vào sử dụng trong doanh nghiệp, n8n đã trở thành lựa chọn lý tưởng cho các nhà phát triển để xây dựng chuỗi gọi AI, tác nhân thông minh và trợ lý kinh doanh. Nó có thể dễ dàng tích hợp các dịch vụ mô hình của bên thứ ba và nhúng AI vào quy trình làm việc kinh doanh thông qua logic tùy chỉnh, thúc đẩy tự động hóa thông minh thực tế.

**Tính năng cốt lõi:**

* **Trình xây dựng quy trình làm việc trực quan:** Xây dựng chuỗi thực thi tự động hóa bằng cách kéo và kết nối các nút.
* **Hỗ trợ Webhook và API:** Các nút webhook tích hợp sẵn nhận các yêu cầu có cấu trúc từ tác nhân AI; các nút API gửi yêu cầu đến các hệ thống bên ngoài.
* **Xử lý dữ liệu và logic:** Các nút Function cho phép logic điều kiện, vòng lặp và chuyển đổi dữ liệu để kiểm soát tác vụ linh hoạt.

**Triển khai và tích hợp:**

* **Triển khai linh hoạt:** Hỗ trợ chạy cục bộ, Docker, cài đặt một chạm và triển khai đám mây cho môi trường cá nhân hoặc doanh nghiệp.
* **Tích hợp hệ thống mạnh mẽ:** Hơn 500 tích hợp có sẵn bao gồm cơ sở dữ liệu, API bên thứ ba, GPT, dịch vụ tệp, v.v.

**Bạn có thể làm gì với n8n?**

1. **Trợ lý AI gọi các dịch vụ bên ngoài:** Gõ "Lên lịch cuộc họp cho chiều mai" trong chat; n8n nhận yêu cầu, trích xuất ngữ cảnh, gửi đến OpenAI, và sau khi nhận dạng ý định, tự động gọi Google Calendar để tạo sự kiện và trả về xác nhận.
2. **Hệ thống hỏi đáp cơ sở tri thức doanh nghiệp:** Khi được hỏi "Sản phẩm của chúng ta hỗ trợ những phương thức thanh toán nào?", n8n truy vấn cơ sở dữ liệu vector tài liệu nội bộ, trích xuất nội dung liên quan, xây dựng ngữ cảnh, tạo câu trả lời chính xác thông qua mô hình và trả lời qua Slack.
3. **Tự động nhập nội dung do mô hình tạo:** Kích hoạt GPT hàng ngày để tóm tắt các cuộc gọi bán hàng ngày hôm trước; n8n xử lý phản hồi, trích xuất từ khóa, khách hàng tiềm năng, các bước tiếp theo, ghi vào CRM và đăng bản tóm tắt báo cáo hàng ngày trong nhóm chat.

## Số 2: dify

![dify](https://static-docs.nocobase.com/5-uwta9l.PNG)

Sao GitHub: 109k

GitHub: https://github.com/langgenius/dify

Trang web: https://dify.ai/

![dify](https://static-docs.nocobase.com/6-jpb7a7.png)

**Giới thiệu:**

**Dify** là một nền tảng ứng dụng AI nguồn mở khác đang phát triển nhanh chóng trong năm qua. Ban đầu được tiếp thị như một "framework phát triển ứng dụng LLM cắm và chạy", nó đã phát triển thành một **không gian làm việc AI** hỗ trợ nhiều mô hình và hình thức ứng dụng — cho phép bạn xây dựng chatbot, quy trình làm việc tác nhân, hệ thống RAG hoặc AI copilot mà không cần bắt đầu từ đầu.

Dify cung cấp các giải pháp gần như "cắm và chạy": hỗ trợ OpenAI, Claude, Gemini và các mô hình lớn khác, cài đặt ngữ cảnh phức tạp và đầu vào biến, với bộ dữ liệu, quy trình làm việc và plugin tích hợp sẵn — cho phép bạn xây dựng các ứng dụng LLM dễ dàng như các hệ thống low-code.

**Tính năng cốt lõi:**

* **Hỗ trợ MCP hai chiều:** Có thể kết nối với máy chủ MCP hoặc hoạt động như một máy chủ MCP, trực tiếp giải quyết vấn đề tương tác lệnh giữa AI và hệ thống.
* **Trình xây dựng quy trình làm việc trực quan:** Kéo và thả để tạo các ứng dụng và quy trình làm việc AI, giúp thiết kế tác vụ MCP trực quan và hiệu quả.
* **Tích hợp đa mô hình và công cụ:** Hỗ trợ các mô hình ngôn ngữ lớn toàn cầu, tích hợp plugin và đường ống RAG để mở rộng khả năng tác vụ MCP.

**Triển khai và tích hợp:** Hỗ trợ triển khai một chạm Docker và AWS AMI, cung cấp phiên bản SaaS, thích ứng với các môi trường quy mô khác nhau, với giao diện API và Webhook.

**Bạn có thể làm gì với Dify?**

1. **Trợ lý thông minh nội bộ:** Tải lên tài liệu công ty, kết nối OpenAI hoặc Claude, cấu hình các câu hỏi và biến thường gặp, nhanh chóng xây dựng một trợ lý nội bộ có hiểu biết về kinh doanh và khả năng ghi nhớ. SDK giao diện người dùng và API cho phép nhúng vào trang web hoặc hệ thống của bạn chỉ với vài dòng mã.
2. **Xây dựng ứng dụng RAG đa lượt:** Khả năng quản lý bộ dữ liệu và kiểm soát ngữ cảnh của Dify cho phép nhanh chóng xây dựng các hệ thống đối thoại đa lượt dựa trên tìm kiếm vector, không cần xây dựng kho vector hay tinh chỉnh prompt. Tải lên dữ liệu, cấu hình mô hình, xây dựng hệ thống hỏi đáp có bộ nhớ cho hỗ trợ, cơ sở tri thức hoặc AI copilot.
3. **Điều phối các mô hình và plugin thông qua quy trình làm việc:** Sử dụng quy trình làm việc của Dify để xâu chuỗi nhiều lệnh gọi mô hình, thực thi plugin, yêu cầu API — cho phép logic tác nhân phức tạp như nhận dạng ý định → truy vấn cơ sở dữ liệu → xử lý kết quả → phản hồi người dùng trong một giao diện trực quan.

## Số 3: Open WebUI

![Open WebUI](https://static-docs.nocobase.com/7-uo7z3x.PNG)

Sao GitHub: 104k

GitHub: https://github.com/open-webui/open-webui

Trang web: https://openwebui.com/

![Open WebUI](https://static-docs.nocobase.com/8-6ypb5p.png)

**Giới thiệu:**

**Open WebUI** là một **giao diện chat LLM** triển khai cục bộ thân thiện, kết nối liền mạch với OpenAI API, LM Studio, Ollama và các backend khác. Nó là nguồn mở, nhẹ, hỗ trợ chuyển đổi đa mô hình, ngữ cảnh phiên, hỗ trợ đa người dùng và hệ thống plugin. Hãy nghĩ về nó như một "giao diện ChatGPT cắm và chạy" hoặc một điểm khởi đầu để xây dựng AI copilot.

Open WebUI được các nhà phát triển và nhóm ưa chuộng vì dễ triển khai, trải nghiệm tương tác tốt và khả năng mở rộng cho các ứng dụng AI nội bộ.

**Tính năng cốt lõi:**

* **Tích hợp đa mô hình và API:** Hỗ trợ Ollama và các API tương thích với OpenAI thông qua giao diện thống nhất cho các yêu cầu mô hình AI.
* **Khung plugin (Pipelines):** Tải logic Python tùy chỉnh hoặc plugin để xử lý trước/sau tác vụ và gọi công cụ.
* **Hỗ trợ RAG cục bộ và từ xa:** Công cụ suy luận tích hợp hỗ trợ trích xuất tài liệu cục bộ, tích hợp web từ xa và xây dựng đường ống RAG cho các tác vụ AI theo ngữ cảnh.

**Triển khai và tích hợp:** Cung cấp triển khai Docker và Kubernetes, phù hợp cho máy đơn hoặc cụm doanh nghiệp, hỗ trợ REST API cho các lệnh gọi giao diện mô hình và plugin.

**Bạn có thể làm gì với Open WebUI?**

1. **Triển khai một bản sao ChatGPT riêng tư:** Kết nối Open WebUI với các LLM được triển khai cục bộ (ví dụ: Llama3, Mistral, Qwen) để sử dụng đầy đủ các tính năng của ChatGPT trên mạng LAN. Giao diện đơn giản, ngữ cảnh và đối thoại đa lượt, chuyển đổi mô hình một chạm — lý tưởng cho hỏi đáp kiến thức nội bộ hoặc trợ lý công việc.
2. **Xây dựng hộp công cụ AI cho nhóm phát triển:** Tập trung cấu hình mô hình, thống nhất các mẫu ngữ cảnh, quản lý phiên đa người dùng với cài đặt vai trò. Cung cấp một trợ lý AI nhất quán về phong cách cho mọi người, tránh trùng lặp môi trường.
3. **Sử dụng như giao diện người dùng tương tác cho các ứng dụng LLM:** Sửa đổi Open WebUI như một vỏ giao diện người dùng kết nối backend suy luận, cơ sở dữ liệu và hệ thống kinh doanh. Cơ chế plugin và hỗ trợ API cho phép xử lý hỏi đáp, tìm kiếm và thực thi lệnh, biến nó thành một mặt tiền copilot nhẹ.

## Số 4: Netdata

![Netdata](https://static-docs.nocobase.com/9-18kgep.png)

Sao GitHub: 75.2k

GitHub: https://github.com/netdata/netdata

Trang web: https://www.netdata.cloud/

![Netdata](https://static-docs.nocobase.com/10-akbrty.png)

**Giới thiệu:**

**Netdata** là một nền tảng giám sát hệ thống thời gian thực, nguồn mở, cung cấp thông tin chi tiết về hiệu suất của máy chủ, container, cơ sở dữ liệu và ứng dụng với cấu hình gần như bằng không. So với các công cụ giám sát truyền thống, nó **nhẹ, cực kỳ phản hồi** và vượt trội trong việc thu thập và trực quan hóa dữ liệu tần suất cao.

Khi việc triển khai LLM và quy trình làm việc tác nhân ngày càng phức tạp, Netdata đang trở thành một "**thành phần quan sát cốt lõi**" cho nhiều nhóm xây dựng hệ thống MCP. Bạn có thể sử dụng nó không chỉ để giám sát tài nguyên cơ sở hạ tầng, mà còn để trực quan hóa độ trễ suy luận, kích thước ngữ cảnh, lỗi gọi, v.v. — đảm bảo toàn bộ chuỗi tác vụ của bạn luôn ổn định và có thể gỡ lỗi.

**Tính năng cốt lõi:**

* **Khả năng máy chủ MCP:** Các tác nhân Netdata và mô-đun Cloud hoạt động như các máy chủ MCP, cho phép AI tương tác trực tiếp với dữ liệu giám sát hệ thống.
* **Giám sát thời gian thực & phát hiện bất thường:** Cung cấp các số liệu hiệu suất thời gian thực, nhật ký, cảnh báo và phát hiện bất thường tự động.
* **Trò chuyện vận hành hỗ trợ AI:** Hỗ trợ truy vấn trạng thái cơ sở hạ tầng bằng ngôn ngữ tự nhiên, cho phép các trợ lý DevOps hỗ trợ AI.

**Triển khai và tích hợp:**

* Cài đặt dễ dàng qua Docker, trình quản lý gói hoặc tập lệnh tùy chỉnh trên các máy chủ, container và máy ảo đám mây.
* Hơn 800+ tích hợp với các giao diện MCP tiêu chuẩn; các tác nhân AI có thể truy vấn dữ liệu giám sát theo thời gian thực.

**Bạn có thể làm gì với Netdata?**

1. **Giám sát mức sử dụng tài nguyên LLM cục bộ theo thời gian thực:** Netdata có thể theo dõi GPU, CPU, bộ nhớ, đĩa và các số liệu chính khác ở mức độ chi tiết từng giây — lý tưởng để đảm bảo các mô hình triển khai cục bộ chạy trơn tru.
2. **Xây dựng bảng điều khiển cho quy trình làm việc AI:** Nhúng Netdata vào các dịch vụ suy luận hoặc đường ống tác nhân để trực quan hóa các lệnh gọi API, thời gian phản hồi, mức sử dụng ngữ cảnh, v.v. Bạn thậm chí có thể thiết lập cảnh báo tự động cho các lỗi như mô hình bị treo lâu hoặc đột biến lỗi.
3. **Cung cấp cho hệ thống AI của bạn một "hộp đen" có thể quan sát được:** Các dấu vết cuộc gọi chi tiết và biểu đồ lịch sử của Netdata giúp tái tạo chính xác môi trường nơi xảy ra lỗi — cho dù đó là liên kết RAG bị hỏng, lệnh gọi plugin thất bại hay GPU bị điều tiết.

## Số 5: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/11-w7o72g.png)

Sao GitHub: 63.9k

GitHub: https://github.com/lobehub/lobe-chat

Trang web: https://lobechat.com/

![Lobe Chat](https://static-docs.nocobase.com/12-o8ky3v.png)

**Giới thiệu:**

**Lobe Chat** là một hệ thống chat LLM nguồn mở, được trau chuốt về mặt hình ảnh, giàu tính năng. Nó hỗ trợ nhiều mô hình, hội thoại và plugin — hoàn toàn tương thích với OpenAI, Claude, Gemini, Ollama và các mô hình khác. So với các công cụ khác, Lobe Chat nhấn mạnh vào trải nghiệm người dùng và khả năng mở rộng, cung cấp các tính năng nâng cao như biến hội thoại, mẫu prompt và cài đặt vai trò. Nó hoạt động tốt cho cả thiết lập Copilot cá nhân và nhóm.

Với sự trỗi dậy của kiến trúc MCP trong các ứng dụng AI, Lobe Chat đang trở thành "lớp tương tác của con người" cho các nhà phát triển — một trung tâm giao diện người dùng để quản lý các trải nghiệm nhận biết ngữ cảnh, đa mô hình, hỗ trợ plugin.

**Tính năng cốt lõi:**

* **Hỗ trợ đa mô hình & RAG:** Tích hợp OpenAI, Claude, Gemini, các mô hình cục bộ và hỗ trợ tìm kiếm cơ sở tri thức với phản hồi nhận biết ngữ cảnh.
* **Chợ plugin MCP:** Đi kèm với một cửa hàng plugin MCP tích hợp để nhập các công cụ và hành động tác nhân chỉ bằng một cú nhấp chuột.
* **Hệ thống gọi hàm:** Hỗ trợ thực thi các hàm bên ngoài đa mô hình thông qua các giao thức plugin.

**Triển khai và tích hợp:** Triển khai riêng tư chỉ với một cú nhấp chuột qua Docker, Vercel, v.v. Dễ dàng nhúng vào ứng dụng hoặc tích hợp với các hệ thống bên ngoài qua API.

**Bạn có thể làm gì với Lobe Chat?**

1. **Triển khai trợ lý đa mô hình của riêng bạn:** Kết nối Llama3, GPT-4, Claude, Qwen, v.v. — chuyển đổi liền mạch giữa chúng. Cấu hình bộ nhớ, vai trò, lệnh gọi plugin. Linh hoạt hơn ChatGPT và hoàn toàn riêng tư.
2. **Xây dựng AI Copilot với chuỗi plugin:** Kết nối API cơ sở dữ liệu, công cụ tìm kiếm hoặc các công cụ khác thông qua plugin. Trợ lý có thể xử lý các tác vụ phức tạp như "nhập bảng tính này vào Notion và tóm tắt" thông qua thực thi tự động.
3. **Tạo giao diện người dùng ứng dụng AI có thể chia sẻ:** Lobe Chat cho phép bạn xây dựng các công cụ prompt nhẹ hoặc quy trình làm việc tác nhân có thể chia sẻ. Chia sẻ liên kết hoặc nhúng vào trang — lý tưởng cho các công cụ nội bộ hoặc sản phẩm vi mô hướng tới khách hàng.

## Số 6: Glama

![Glama](https://static-docs.nocobase.com/13-4jq2qy.png)

Sao GitHub: 63.6k

GitHub: https://github.com/punkpeye/awesome-mcp-servers

Trang web: https://glama.ai/mcp/servers

![Glama](https://static-docs.nocobase.com/14-p1734h.png)

**Giới thiệu:**

Không giống như các công cụ trước, **Glama** là một client nguồn mở được xây dựng dành riêng cho các giao thức MCP. Nó kết nối và tương tác với nhiều dịch vụ tương thích MCP (như LobeChat, Open WebUI) trong một giao diện duy nhất. Nó không tự chạy các mô hình — thay vào đó, nó hoạt động như một "**giao diện tổng hợp**" nơi bạn có thể chuyển đổi giữa các mô hình, plugin và nhà cung cấp ngữ cảnh giống như chuyển đổi tab trong ChatGPT.

Glama cung cấp một "trải nghiệm mô-đun" mới — chọn bất kỳ backend tương thích MCP nào, đính kèm nhiều công cụ plugin, thậm chí kết hợp các mô hình từ các nhà cung cấp khác nhau. Đối với các nhà phát triển và kỹ sư AI, đó là một cửa sổ thống nhất để quan sát, kiểm tra và điều phối nhiều dịch vụ AI.

**Tính năng cốt lõi:**

* **Tổng hợp máy chủ MCP phong phú:** Bao gồm Kong Konnect, Powerdrill, YingDao RPA, StarTree, v.v. — bao gồm cổng, phân tích, RPA, cơ sở dữ liệu, v.v.
* **Lớp tương tác tiêu chuẩn hóa:** Tất cả các máy chủ đều tuân theo Giao thức ngữ cảnh mô hình (Model Context Protocol), đảm bảo định dạng thống nhất cho các hướng dẫn tác nhân.
* **Tìm kiếm tài nguyên theo mục tiêu:** Nhanh chóng tìm các công cụ và dịch vụ thông qua tìm kiếm từ khóa để phù hợp với trường hợp sử dụng của bạn.

**Triển khai và tích hợp:** Có sẵn dưới dạng ứng dụng web với quyền truy cập API. Người dùng doanh nghiệp có thể tích hợp trực tiếp vào hệ thống kinh doanh hoặc cơ sở dữ liệu, nhận hướng dẫn tác vụ qua MCP.

**Bạn có thể làm gì với Glama?**

1. **Bảng điều khiển dịch vụ MCP tập trung:** Kết nối với nhiều ứng dụng chat (LobeChat, Open WebUI) và máy chủ plugin (AI-Plugin Server), sau đó chuyển đổi giữa chúng với ngữ cảnh và trải nghiệm người dùng dùng chung.
2. **Kiểm tra tương tác tác nhân + plugin:** Nhanh chóng xác minh cách các backend khác nhau xử lý các lệnh gọi plugin. Ví dụ: xem liệu một plugin cơ sở dữ liệu có chạy nhất quán trên các mô hình hay không hoặc kiểm tra các biến thể phản hồi để tối ưu hóa hành vi.
3. **Tạo nguyên mẫu sản phẩm AI Copilot:** Sử dụng Glama để tạo mô hình giao diện người dùng cho một sản phẩm AI — bộ chọn mô hình bên trái, chat ở giữa, nhật ký plugin bên phải. Một vòng lặp MCP hoạt động trong vài phút.

## Số 7: **RAGFlow**

![RAGFlow](https://static-docs.nocobase.com/15-7kvvqp.png)

Sao GitHub: 61.1k

GitHub: https://github.com/infiniflow/ragflow

Trang web: https://ragflow.io/

![RAGFlow](https://static-docs.nocobase.com/16-dvstzn.png)

**Giới thiệu:**

**RAGFlow**, từ nhóm infiniflow, là một framework nguồn mở để xây dựng các hệ thống Tạo sinh tăng cường truy xuất (RAG). Nó nhấn mạnh các phẩm chất kỹ thuật như thiết kế đường ống mô-đun, truy xuất/tạo sinh tách rời và khả năng hiển thị/gỡ lỗi chuỗi ngữ cảnh. Hãy nghĩ về nó như một công cụ đường ống để **xây dựng các hệ thống hỏi đáp tri thức ổn định, có thể theo dõi và đạt tiêu chuẩn sản xuất**.

Không giống như các framework tổng quát như LangChain hay LlamaIndex, RAGFlow tập trung nhiều hơn vào "cơ sở hạ tầng backend" — nhắm mục tiêu vào khả năng tái tạo, khả năng kiểm thử và khả năng quan sát cho việc sử dụng ở cấp doanh nghiệp.

**Tính năng cốt lõi:**

* **Phân tích tài liệu chuyên sâu:** Xử lý các định dạng phức tạp (tệp đa định dạng, nội dung có cấu trúc) và trích xuất ngữ cảnh chất lượng cao cho LLM.
* **Quản lý cơ sở tri thức:** Tạo và quản lý các kho tri thức nội bộ với khả năng phân tích và lưu trữ.
* **Tạo sinh RAG có trích dẫn:** Tạo câu trả lời dựa trên tri thức đã truy xuất, với hỗ trợ tham chiếu.

**Triển khai và tích hợp:** Có sẵn qua Docker Compose. Dễ dàng tích hợp với các LLM bên ngoài.

**Bạn có thể làm gì với RAGFlow?**

1. **Xây dựng hệ thống hỏi đáp doanh nghiệp mô-đun:** Cấu hình mọi bước — từ tiền xử lý tài liệu đến nhúng và lập chỉ mục — bằng cách sử dụng các thành phần có thể thay thế. Điều chỉnh đường ống để phù hợp với doanh nghiệp của bạn.
2. **Gỡ lỗi chuỗi RAG hiệu quả:** Xác định chính xác lý do tại sao hệ thống RAG thất bại — đó là do truy xuất? Tràn ngữ cảnh? Các công cụ theo dõi trực quan của RAGFlow giúp cô lập và khắc phục sự cố nhanh chóng.
3. **Kết hợp RAG với quy trình làm việc tác nhân:** Tích hợp RAGFlow vào các hệ thống tác nhân lớn hơn (ví dụ: qua Dify hoặc Lobe Chat) bằng cách sử dụng API hoặc plugin để xây dựng các vòng lặp phát hiện ý định → truy xuất → phản hồi. Hoàn hảo cho trợ lý tài chính, tác nhân hỗ trợ, v.v.

## Số 8: AnythingLLM

![AnythingLLM](https://static-docs.nocobase.com/17-8m9ws2.png)

Sao GitHub: 47.1k

GitHub: https://github.com/Mintplex-Labs/anything-llm

Trang web: https://anythingllm.com/

![AnythingLLM](https://static-docs.nocobase.com/18-2uykf1.png)

**Giới thiệu:**

**AnythingLLM** là một ứng dụng nguồn mở full-stack để triển khai trên máy tính để bàn và Docker. Nó kết hợp RAG, tác nhân AI, đường ống tác nhân trực quan/không cần mã và **khả năng tương thích MCP gốc**. Nó hỗ trợ nhiều mô hình và kho vector cục bộ/đám mây, cung cấp quyền truy cập đa người dùng và có thể được nhúng — tuyệt vời cho các trường hợp sử dụng cá nhân và nhóm.

**Tính năng cốt lõi:**

* **Tương tác mô hình + tài liệu:** Chạy các mô hình cục bộ hoặc kết nối với OpenAI/Azure; xử lý PDF, tài liệu Word, CSV, v.v.
* **Kỹ năng tác nhân tùy chỉnh với MCP:** Mở rộng khả năng của tác nhân với "kỹ năng" và tích hợp các hành động công cụ tự động thông qua MCP.
* **Kiến trúc riêng tư, ưu tiên cục bộ:** Tất cả các thành phần LLM, vector và lưu trữ đều chạy cục bộ theo mặc định. Kiểm soát hoàn toàn dữ liệu và thực thi.

**Triển khai và tích hợp:** Có sẵn dưới dạng ứng dụng máy tính để bàn hoặc qua Docker. Cung cấp API cho nhà phát triển để tích hợp sản phẩm.

**Bạn có thể làm gì với AnythingLLM?**

1. **Xây dựng ChatGPT riêng tư + cơ sở tri thức:** Kéo và thả PDF và trang web vào Workspaces. Hệ thống nhúng, lập chỉ mục và phản hồi với trích dẫn — đám mây hoặc cục bộ, bạn luôn kiểm soát.
2. **Chạy chuỗi công cụ tác nhân + MCP:** Cấu hình một máy chủ MCP trong giao diện người dùng và để tác nhân gọi các công cụ bên ngoài — để tìm nạp dữ liệu, thu thập thông tin, thao tác cơ sở dữ liệu — tất cả trong một vòng lặp khép kín mà không cần mã.
3. **Kết hợp linh hoạt các mô hình và cơ sở dữ liệu vector:** Sử dụng OpenAI, Claude, Gemini hoặc Ollama cục bộ. Chọn từ LanceDB, PGVector, Pinecone, Milvus, Qdrant. Nhúng thành phần chat vào giao diện người dùng của bạn để phân phối full-stack.

## Kết luận

Chỉ trong vài tháng, MCP đã đi từ một khái niệm ngách trở thành chủ đề nóng trong giới phát triển. Tiêu chuẩn vẫn đang phát triển và các công cụ vẫn đang hoàn thiện — nhưng ngày càng có nhiều dự án chứng minh rằng AI không chỉ nên nói, mà còn nên hành động.

Đối với các nhà phát triển làm việc về tích hợp và tự động hóa AI, MCP cung cấp một góc nhìn mới: chỉ thông minh thôi là chưa đủ. Giá trị thực sự đến khi AI có thể kết nối với các hệ thống trong thế giới thực và thúc đẩy hành động có ý nghĩa.

Hy vọng rằng, hướng dẫn này cung cấp cho bạn một cái nhìn tổng quan hữu ích về hệ sinh thái đang nổi lên — và có thể khơi dậy ý tưởng cho bản dựng AI tiếp theo của bạn.

**Bài đọc liên quan:**

* [Top 7 Ứng dụng Web nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 Công cụ dành cho nhà phát triển nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Dự án Low-Code nguồn mở phát triển nhanh nhất trên GitHub năm 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [Top 11 Dự án CRM nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-crm-projects)
* [Top 11 Dự án Bảng điều khiển Quản trị Nguồn mở trên GitHub](https://www.nocobase.com/en/blog/top-11-open-source-admin-dashboard-projects-on-github)
* [Top 10 Dự án Workflows Nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)
