---
title: "14 Nền tảng Low-Code hỗ trợ AI trên GitHub đáng theo dõi"
description: "Chúng tôi đã tổng hợp 14 nền tảng low-code phổ biến hỗ trợ AI trên GitHub — bao gồm quy trình làm việc, tác nhân, xây dựng hệ thống và cơ sở dữ liệu thông minh — giúp bạn xây dựng các hệ thống thông minh hơn và có khả năng mở rộng tốt hơn."
---

📝 Lưu ý: Bài viết này được cập nhật lần cuối vào ngày 21 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Gần đây tôi tình cờ thấy một bình luận khá thẳng thắn trên Reddit:

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> * "Các nền tảng AI no-code này sẽ không tồn tại được một năm. Nếu AI thực sự mạnh mẽ như vậy, thì nó không nên vẫn phải phụ thuộc vào việc kéo thả các khối quy trình làm việc để xây dựng tính năng."*

Quan điểm rất sắc bén, nhưng bình luận này đã được đăng cách đây tám tháng. Nhìn lại bây giờ, những công cụ này vẫn chưa biến mất. Nhiều công cụ đã trở nên hoàn thiện hơn và các dự án mới vẫn tiếp tục xuất hiện.

Vài ngày trước, chúng tôi cũng đã xem xét danh sách [các công cụ AI no-code mã nguồn mở phổ biến nhất trên GitHub](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools). Dựa trên số sao, hoạt động cộng đồng và mức độ hoàn thiện tính năng, nhiều dự án không chỉ hoạt động tích cực mà còn tiếp tục phát triển với khả năng AI mạnh mẽ hơn.

Một số người dùng Reddit vẫn cho rằng hầu hết các công cụ AI low-code đang ở giai đoạn đầu và một số tác nhân AI được gọi là chỉ đơn giản là các công cụ tự động hóa được kết nối với một LLM.

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển low-code/no-code hỗ trợ AI có khả năng mở rộng nhất để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

Theo quan sát của chúng tôi, hệ sinh thái low-code đang tiến triển đều đặn. Nhiều nền tảng đã hỗ trợ các kịch bản kinh doanh thực tế thông qua mô hình hóa dữ liệu, logic quy trình làm việc, tiện ích mở rộng plugin và cộng tác dựa trên AI.

Đối với bài viết này, chúng tôi đã khám phá chủ đề low-code trên GitHub và xác định mười bốn nền tảng đã tích hợp AI một cách thực tế. Chúng tôi đã sắp xếp chúng thành ba loại: trình xây dựng hệ thống kinh doanh, công cụ quy trình làm việc tác nhân và ứng dụng dựa trên bảng dữ liệu.

Trước khi đi vào chi tiết, bạn có thể sử dụng bảng so sánh sau đây để có cái nhìn tổng quan rõ ràng về cách mười bốn công cụ này định vị bản thân và ứng dụng AI.👇

**Bảng so sánh (Tổng quan về Tính năng AI × Định vị Công cụ)**


| Công cụ    | Danh mục            | Cách AI được sử dụng                          | Khả năng mở rộng quy trình làm việc | Hỗ trợ Mô hình hóa/Giao diện | Hỗ trợ Bảng/Dữ liệu | Khả năng đa miền                   |
| ---------- | ------------------- | --------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------- | ---------------------------------- |
| NocoBase   | Ứng dụng Kinh doanh | AI tạo mô hình dữ liệu, trang, logic          | ✅ Plugin + Tự động hóa             | ✅ Đầy đủ                     | ✅                  | ⭐ Mạnh (Dữ liệu + Hệ thống + Luồng) |
| ToolJet    | Ứng dụng Kinh doanh | AI Copilot tạo trang/tập lệnh API             | ⚠️ Luồng nhẹ                     | ✅                             | ⚠️                | Trung bình                         |
| Appsmith   | Ứng dụng Kinh doanh | AI tạo SQL và logic biểu mẫu                  | ⚠️                                 | ✅                             | ⚠️                | Trung bình                         |
| Budibase   | Ứng dụng Kinh doanh | AI điền trường, tạo văn bản biểu mẫu          | ⚠️                                 | ✅                             | ⚠️                | Yếu                                |
| refine     | Ứng dụng Kinh doanh | AI tạo logic CRUD và mã                       | ❌                                  | ✅ (tập trung vào mã)         | ❌                  | Không                              |
| n8n        | Quy trình/Tác nhân  | Tác vụ AI, gọi API                            | ✅                                  | ❌                             | ❌                  | Không                              |
| Dify       | Quy trình/Tác nhân  | Tác nhân, cơ sở tri thức, gọi công cụ         | ✅                                  | ❌                             | ⚠️                | Không                              |
| Flowise    | Quy trình/Tác nhân  | RAG, chuỗi LLM trực quan                      | ⚠️                                 | ❌                             | ⚠️                | Không                              |
| Kestra     | Quy trình/Tác nhân  | AI tạo quy trình làm việc YAML                | ✅                                  | ❌                             | ❌                  | Không                              |
| Node-RED   | Quy trình/IoT       | Nút AI + tự động hóa thiết bị/sự kiện         | ⚠️                                 | ❌                             | ❌                  | Không                              |
| Sim        | Quy trình/Tác nhân  | Quy trình làm việc cộng tác đa tác nhân       | ⚠️                                 | ❌                             | ❌                  | Không                              |
| NocoDB     | Bảng dữ liệu        | Điền AI, trường thông minh, thông tin chi tiết | ⚠️                                 | ❌                             | ✅                  | Yếu                                |
| Teable     | Bảng dữ liệu        | Trò chuyện AI và báo cáo tự động tạo          | ⚠️                                 | ❌                             | ✅                  | Yếu                                |
| Onlook     | Giao diện AI        | AI tạo Giao diện/Thành phần/Mã React          | ❌                                  | ⚠️ (tập trung vào Giao diện) | ❌                  | Đặc thù (tập trung vào Giao diện) |

## **Trình xây dựng ứng dụng kinh doanh hỗ trợ AI**

Những công cụ này không chỉ sử dụng AI để trả lời câu hỏi hoặc kích hoạt quy trình làm việc — AI trực tiếp tham gia vào việc xây dựng chính ứng dụng đó.

Chúng giúp người dùng nhanh chóng tạo mô hình dữ liệu, biểu mẫu, trang, quyền và hệ thống kinh doanh nội bộ, khiến chúng trở nên lý tưởng cho CRM, phê duyệt, ERP, bảng điều khiển quản trị và nền tảng nhập dữ liệu.

### **NocoBase**

⭐️ Sao: 20k

Trang web: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**Tổng quan**:

NocoBase bắt đầu như một nền tảng low-code mã nguồn mở được xây dựng trên kiến trúc hướng mô hình dữ liệu và hệ thống plugin.

Trong phiên bản 2.0, nó cho phép AI tham gia vào cả việc xây dựng hệ thống và vận hành hàng ngày. Nó có thể viết và chạy JavaScript bên trong nền tảng cho logic phức tạp và tự động hóa, và các nhân viên AI có thể được đặt ở bất kỳ phần nào của hệ thống để cải thiện trải nghiệm tổng thể.

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**Giai đoạn xây dựng**

Các nhân viên AI có thể tạo mô hình dữ liệu, mối quan hệ trường, cấu trúc trang và logic cơ bản từ ngôn ngữ tự nhiên. Các tác vụ từng yêu cầu nhiều bước cấu hình trở nên đơn giản hơn. Với sự hỗ trợ của AI, một hệ thống kinh doanh có thể hình thành nhanh hơn nhiều, cải thiện đáng kể hiệu quả phát triển.

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**Giai đoạn sử dụng**

AI có thể truy vấn và giải thích dữ liệu hệ thống, đồng thời cung cấp thông tin chi tiết hoặc đề xuất có liên quan, chẳng hạn như điền biểu mẫu, tóm tắt thông tin khách hàng hoặc hỗ trợ các tác vụ nghiên cứu.

**Người dùng mục tiêu**: Các nhóm xây dựng hệ thống kinh doanh — nhóm IT nội bộ, nhóm sản phẩm B2B, nhà tích hợp hệ thống.

**Trường hợp sử dụng**: CRM, quy trình phê duyệt, quản lý dự án, hệ thống đơn hàng và tài sản, với hỗ trợ plugin cho tự động hóa và mô hình hóa dựa trên AI.

### **ToolJet**

⭐️ Sao: 37k

Trang web: [https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub: [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**Tổng quan**: ToolJet từ lâu đã là một công cụ hiệu quả để xây dựng các ứng dụng doanh nghiệp nội bộ. Với AI được thêm vào, quy trình phát triển càng trở nên hiệu quả hơn. AI Copilot tạo bố cục trang, logic thành phần và tương tác cơ bản từ ngôn ngữ tự nhiên, giúp loại bỏ nhu cầu các nhà phát triển phải chuyển đổi qua lại giữa các thành phần, tập lệnh và API. Quy trình mô tả-và-tạo này giảm bớt công việc thiết lập thủ công và viết kịch bản, đồng thời giúp các nhóm xây dựng các công cụ nội bộ một cách tập trung và tiết kiệm chi phí hơn.

**Người dùng mục tiêu**: Nhóm kỹ thuật, vận hành hoặc dữ liệu cần bảng điều khiển nội bộ nhanh chóng.

**Trường hợp sử dụng**: Bảng quản trị, công cụ nội bộ, ứng dụng dựa trên API nơi AI có thể giúp viết SQL, tạo bố cục hoặc tập lệnh.

### **Appsmith**

⭐️ Sao: 38k

Trang web: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**Tổng quan**: Appsmith là một nền tảng low-code mã nguồn mở được thiết kế để phát triển công cụ nội bộ, cung cấp hệ thống thành phần mạnh mẽ, kết nối nguồn dữ liệu đáng tin cậy và khả năng CRUD phát triển tốt. Với AI được giới thiệu, trải nghiệm phát triển trở nên mượt mà hơn. AI tạo truy vấn SQL, logic xác thực biểu mẫu và tập lệnh cơ bản từ ngôn ngữ tự nhiên và có thể tự động hoàn thành cấu hình trang phổ biến. Điều này làm giảm nhu cầu chuyển đổi giữa mã và cài đặt thành phần, đồng thời tăng tốc độ phát triển công cụ nội bộ đồng thời hạ thấp rào cản cho các ứng dụng tập trung vào dữ liệu.

**Người dùng mục tiêu**: Nhà phát triển front-end, người xây dựng công cụ dữ liệu, nhóm tạo hệ thống CRUD.

**Trường hợp sử dụng**: Bảng điều khiển truy vấn, công cụ quản trị nội bộ, tiện ích cơ sở dữ liệu — ví dụ: ngôn ngữ tự nhiên → AI tạo SQL → đầu ra bảng.

### **Budibase**

⭐️ Sao: 27k

Trang web: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**Tổng quan**: Budibase là một nền tảng low-code mã nguồn mở được thiết kế cho các ứng dụng kinh doanh nội bộ. Nó tập trung vào mô hình hóa dữ liệu, tạo biểu mẫu và quy trình làm việc cơ bản, phù hợp với nhu cầu của doanh nghiệp vừa và nhỏ. Với AI được thêm vào, Budibase nâng cao quá trình xây dựng bằng cách hỗ trợ các tác vụ thường ngày.

AI giúp tạo nội dung trường, điền dữ liệu và tạo bố cục trang đơn giản, cắt giảm công việc lặp đi lặp lại trong việc thiết lập biểu mẫu và nhập dữ liệu. Mặc dù vẫn còn hỗ trợ hạn chế cho logic phức tạp, AI làm cho Budibase hiệu quả hơn cho các hệ thống nhẹ, công cụ biểu mẫu nội bộ và ứng dụng nhập dữ liệu.

**Người dùng mục tiêu**: Nhóm nhỏ và vừa, hệ thống nội bộ nhẹ, những người đam mê no-code.

**Trường hợp sử dụng**: Ứng dụng biểu mẫu, công cụ văn phòng nội bộ, nền tảng nhập dữ liệu. AI giúp điền trường hoặc tạo dữ liệu mẫu, nhưng hỗ trợ logic phức tạp còn hạn chế.

### **Refine**

⭐️ Sao: 33k

Trang web: [https://refine.dev/](https://refine.dev/)

GitHub: [https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**Tổng quan**: Refine là một framework dựa trên React để xây dựng bảng quản trị và công cụ nội bộ. Nó xử lý tốt các luồng CRUD phổ biến, định tuyến, quyền và kết nối dữ liệu. Các nhà phát triển có thể mô tả giao diện hoặc tính năng bằng ngôn ngữ tự nhiên và AI sẽ tạo bố cục, tương tác và mã cơ bản dưới dạng một dự án React sẵn sàng sử dụng.

**Người dùng mục tiêu**: Nhà phát triển Frontend và nhóm kỹ thuật cần sự linh hoạt hơn là các công cụ kéo thả.

**Trường hợp sử dụng**: Bảng điều khiển quản trị và công cụ dữ liệu nơi cần kiểm soát ở cấp độ mã, nhưng tốc độ phát triển vẫn quan trọng. Không bao gồm mô hình hóa backend.

## **Điều phối Quy trình làm việc / Tác nhân AI**

Những công cụ này nổi bật vì AI không chỉ tạo nội dung — nó còn tích cực tham gia vào việc thực thi quy trình làm việc. AI có thể gọi công cụ, kích hoạt hành động và thúc đẩy tự động hóa kinh doanh.

Hãy nghĩ về chúng như các công cụ quy trình làm việc tăng cường AI hoặc nền tảng thực thi tác nhân, thay vì các trình xây dựng hệ thống kinh doanh low-code đầy đủ.

Chúng vượt trội trong tự động hóa và thực thi, nhưng thường thiếu mô hình hóa dữ liệu phức tạp, hệ thống quyền hoặc khả năng xây dựng giao diện/trang.

### **n8n**

⭐️ Sao: 157k

Trang web: [https://n8n.io/](https://n8n.io/)

GitHub: [https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**Tổng quan**: n8n là một nền tảng tự động hóa low-code mã nguồn mở kết nối các hệ thống, API và dịch vụ thông qua giao diện trực quan. Với các nút AI được thêm vào, n8n có thể cho phép LLM phân tích dữ liệu, tạo nội dung, đưa ra quyết định và gọi API bên ngoài bên trong một quy trình làm việc thay vì chỉ tuân theo các quy tắc đặt trước.

**Người dùng mục tiêu**: Nhóm vận hành, kỹ sư hỗ trợ, chuyên gia tự động hóa, doanh nghiệp vừa và nhỏ.

**Trường hợp sử dụng**: Tạo nội dung tự động, đồng bộ dữ liệu, trả lời email, quy trình làm việc ra quyết định hỗ trợ AI (ví dụ: AI trả lời khách hàng → ghi nhật ký vào cơ sở dữ liệu → gửi email).

### **Dify**

⭐️ Sao: 119k

Trang web: [https://dify.ai/](https://dify.ai/)

GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**Tổng quan**: Dify là một nền tảng mã nguồn mở để xây dựng các ứng dụng AI và Tác nhân. Nó cung cấp quản lý mô hình, cơ sở tri thức, điều phối hội thoại và tích hợp công cụ. Với những khả năng này, Dify hỗ trợ suy luận đa bước, gọi API, truy cập dữ liệu và xây dựng quy trình làm việc Tác nhân trực quan để các nhóm có thể chuyển đổi suôn sẻ từ hội thoại sang các hành động hệ thống.

**Người dùng mục tiêu**: Nhóm sản phẩm và nhà phát triển xây dựng trợ lý AI, bot tri thức hoặc nguyên mẫu.

**Trường hợp sử dụng**: Chatbot cơ sở tri thức, xử lý vé tự động, tác nhân AI thực thi các hành động API.

### **Flowise**

⭐️ Sao: 47k

Trang web: [https://flowiseai.com/](https://flowiseai.com/)

GitHub: [https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**Tổng quan**: Flowise là một nền tảng trực quan low-code mã nguồn mở để xây dựng các tác nhân AI và quy trình làm việc LLM. Nó cung cấp trình xây dựng trực quan, theo dõi thực thi, tích hợp API và SDK, và triển khai cục bộ. Với các khả năng AI được bao gồm, Flowise hỗ trợ các tác nhân đa bước, sử dụng công cụ và truy xuất tri thức. Các nhóm có thể thiết kế cộng tác giữa con người và AI và logic quy trình làm việc chỉ bằng cách kéo và kết nối các nút.

**Người dùng mục tiêu**: Nhà phát triển AI, nhóm nguyên mẫu, startup giai đoạn đầu.

**Trường hợp sử dụng**: Hỏi đáp tri thức, chatbot nhẹ, demo suy luận đa bước — không phù hợp cho các hệ thống kinh doanh đầy đủ.

### **Kestra**

⭐️ Sao: 23k

Trang web: [https://kestra.io/](https://kestra.io/)

GitHub: [https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**Tổng quan**: Kestra là một nền tảng mã nguồn mở để điều phối và lập lịch tác vụ được thiết kế cho các quy trình làm việc trực quan, kế hoạch thực thi và giám sát. Nó hỗ trợ tạo quy trình làm việc YAML hỗ trợ AI, gọi mô hình và logic có điều kiện. Người dùng có thể tạo các chuỗi tác vụ phức tạp bằng ngôn ngữ tự nhiên hoặc mẫu và theo dõi thực thi với nhật ký chi tiết.

**Người dùng mục tiêu**: Kỹ sư dữ liệu, nhà phát triển backend, nhóm DevOps.

**Trường hợp sử dụng**: Công việc theo lịch do AI tạo, đường ống dữ liệu, chuỗi tác vụ API — tập trung vào thực thi backend.

### **Node-RED**

⭐️ Sao: 22k

Trang web: [https://nodered.org/](https://nodered.org/)

GitHub: [https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**Tổng quan**: Node-RED là một công cụ luồng trực quan hướng sự kiện kết nối các thiết bị, dịch vụ và API thông qua các nút để xây dựng logic tự động hóa và đường ống dữ liệu. Nền tảng này cung cấp nhiều nút AI khác nhau để suy luận mô hình, tạo nội dung, phân tích thông tin và ra quyết định có điều kiện. Các luồng có thể thực thi các hành động linh hoạt hơn dựa trên đầu ra của mô hình. Các nút cũng có thể tích hợp với các thiết bị IoT, webhook hoặc sự kiện hệ thống để tạo ra các quy trình làm việc xử lý đầu cuối.

**Người dùng mục tiêu**: Kỹ sư tự động hóa, nhà phát triển phần cứng, nhóm nhà thông minh/IoT.

**Trường hợp sử dụng**: Camera phát hiện chuyển động → AI đưa ra quyết định → kích hoạt công tắc; bất thường thiết bị → AI phân tích → gửi cảnh báo.

### **Sim**

⭐️ Sao: 18k

Trang web: [https://www.sim.ai/](https://www.sim.ai/)

GitHub: [https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**Tổng quan**: Sim là một nền tảng mã nguồn mở để xây dựng các quy trình làm việc cộng tác đa tác nhân. Nó tổ chức các mô hình, công cụ và các bước tác vụ thông qua giao diện trực quan. Nền tảng này hỗ trợ hợp tác đa mô hình, gọi công cụ, phân rã tác vụ và thực thi luồng. Các tác nhân có thể giao tiếp, phân chia công việc và hoàn thành suy luận hoặc hành động trong cùng một quy trình làm việc. Người dùng có thể cấu hình vai trò, khả năng và chuỗi tác vụ khi cần để tạo ra các hệ thống đa tác nhân có thể thực thi.

**Người dùng mục tiêu**: Nhóm AI xây dựng tác nhân đa vai trò, startup trợ lý thông minh.

**Trường hợp sử dụng**: Trợ lý AI, tạo báo cáo tự động, thực thi tác vụ thông minh — mặc dù chưa hoàn thiện như n8n hoặc Dify.

## **AI + Bảng tính thông minh / Công cụ cơ sở dữ liệu**

Những công cụ này không tập trung vào thực thi quy trình làm việc hoặc hệ thống kinh doanh đầy đủ — giá trị cốt lõi của chúng nằm ở việc làm cho dữ liệu và bảng tính trở nên thông minh hơn.

Ở đây, AI chủ yếu được sử dụng để tạo, hoàn thành, truy vấn và phân tích dữ liệu — không phải để xử lý logic kinh doanh phức tạp.

Chúng có thể được xem như "Airtable / Notion Database được tăng cường AI", lý tưởng cho các nhóm hướng dữ liệu, vận hành nội dung hoặc quản lý tri thức — thay vì các hệ thống kinh doanh nặng hoặc tự động hóa quy trình làm việc.

### **NocoDB**

⭐️ Sao: 59k

Trang web: [https://nocodb.com/](https://nocodb.com/)

GitHub: [https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**Tổng quan**: Một giải pháp thay thế Airtable mã nguồn mở cung cấp cấu hình trường, quản lý chế độ xem và tự động hóa cơ bản. Các tính năng AI của nó hỗ trợ tạo nội dung, hoàn thành dữ liệu, phân tích bảng và đề xuất thông minh.

**Người dùng mục tiêu**: Các nhóm quản lý dữ liệu có cấu trúc — nhóm vận hành, nhóm cộng tác nội bộ, người dùng CRM nhẹ.

**Trường hợp sử dụng**: Kho lưu trữ nội dung, bảng khách hàng, quản lý hàng tồn kho, bảng tính cộng tác nhóm. Các tính năng AI bao gồm đề xuất trường, tạo nội dung, tự động hoàn thành và thông tin chi tiết thông minh để phân tích dữ liệu.

### **Teable**

⭐️ Sao: 20k

Trang web: [https://teable.ai/](https://teable.ai/)

GitHub: [https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**Tổng quan**: Một nền tảng quản lý dữ liệu tương tự Airtable với hỗ trợ các loại trường, chế độ xem và cộng tác nhóm. Các tính năng AI của nó có thể tạo nội dung bảng thông qua hội thoại, xử lý dữ liệu, tạo báo cáo và thực thi các lệnh dựa trên văn bản, với các mô hình hoạt động trực tiếp bên trong bảng.

**Người dùng mục tiêu**: Người dùng Airtable/Notion hoặc các nhóm cần cộng tác dữ liệu với sự hỗ trợ của AI.

**Trường hợp sử dụng**: Quản lý nội dung, kho dữ liệu nhẹ, bảng dự án nhóm. Hỗ trợ tương tác dữ liệu đàm thoại — chẳng hạn như truy vấn bản ghi qua ngôn ngữ tự nhiên, tạo dữ liệu bảng hàng loạt hoặc tự động tạo báo cáo.

## **Các công cụ không hoàn toàn phù hợp với các danh mục trên**

Trong quá trình nghiên cứu, chúng tôi cũng tìm thấy các công cụ không hoàn toàn thuộc bất kỳ danh mục chính nào trong ba danh mục — chẳng hạn như **Onlook**.

⭐️ Sao: 23k

Trang web: [https://onlook.com/](https://onlook.com/)

GitHub: [https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Điều làm nên sự khác biệt của Onlook là khả năng cốt lõi của nó là "Giao diện người dùng do AI tạo ra."

Bạn có thể mô tả một trang bằng ngôn ngữ tự nhiên hoặc cung cấp một wireframe, và nền tảng sẽ tạo ra cấu trúc trang và bố cục thành phần. Nó tạo mã React, quản lý kiểu dáng và mối quan hệ bố cục, đồng thời cung cấp tính năng chỉnh sửa trực quan để bạn có thể tinh chỉnh giao diện và điều chỉnh hệ thống phân cấp thành phần. Công cụ này được thiết kế để xây dựng giao diện với thiết kế hỗ trợ AI, nằm giữa một công cụ thiết kế và một nền tảng front-end low-code.

## **Suy nghĩ cuối cùng**

Chúng ta từng xây dựng hệ thống bằng cách viết mã. Sau đó là giao diện kéo thả. Bây giờ, ngày càng nhiều người bắt đầu mô tả cách một hệ thống nên hoạt động — và để AI giúp xây dựng nó.

> *"AI không loại bỏ công việc — nó chỉ di chuyển công việc."*

Thách thức thực sự không còn là liệu chúng ta có đang sử dụng AI hay không, mà là liệu chúng ta có thể tích hợp sâu AI với logic kinh doanh, dữ liệu và quy trình làm việc, và biến nó thành một phần của chính hệ thống hay không.

AI đang chuyển từ một công cụ trò chuyện thành một công cụ xây dựng. Nó chưa hoàn hảo, nhưng hướng đi đã rõ ràng.
Trong tương lai, các hệ thống có thể không được "phát triển" — chúng có thể được mô tả. Và chúng ta sẽ bắt đầu từ các vấn đề kinh doanh thực tế, không chỉ từ một trình soạn thảo mã.

Nếu bạn đã đọc đến đây và cảm thấy cùng một sự thay đổi đang diễn ra, hãy chia sẻ danh sách này với những người khác quan tâm đến **AI × low-code**.👍

**Bài đọc liên quan:**

* [Top 11 Công cụ AI No-Code Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/top-11-github-open-source-no-code-ai-tools)
* [Top 18 Dự án Tác nhân AI Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-ai-agent-projects)
* [Top 20 Dự án AI Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-ai-projects)
* [Top 8 Dự án MCP Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-mcp-projects)
* [Top 7 Ứng dụng Web Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-web-applications)
* [Top 40 Công cụ Nhà phát triển Mã nguồn mở có nhiều Sao GitHub nhất](https://www.nocobase.com/en/blog/github-open-source-developer-tools)
* [Top 15 Dự án Low-Code Mã nguồn mở Phát triển Nhanh nhất trên GitHub năm 2025](https://www.nocobase.com/en/blog/github-top15-fastest-growing-open-source-low-code-projects)
