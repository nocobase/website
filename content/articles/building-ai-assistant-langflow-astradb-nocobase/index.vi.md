---
title: "Xây dựng Trợ lý AI với Langflow và AstraDB: Từ Kiến trúc đến Tích hợp với NocoBase"
description: "Bài viết này hướng dẫn cách tích hợp NocoBase, LangFlow và AstraDB để tạo một trợ lý AI, tạo ra thông tin chi tiết thông qua vector hóa dữ liệu và tìm kiếm ngữ nghĩa, đồng thời tối ưu hóa kết quả bằng công nghệ RAG nhằm nâng cao khả năng quản lý dữ liệu và truy xuất thông minh."
---

📝 **Lưu ý:** Bài viết này được cập nhật lần cuối vào ngày 23 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Bài blog này được sản xuất bởi Leandro Martins và được xuất bản lần đầu tại [Xây dựng Trợ lý AI với Langflow và AstraDB: Từ Kiến trúc đến Tích hợp với NocoBase](https://leandromartins.hashnode.dev/building-an-ai-assistant-with-langflow-and-astradb-from-architecture-to-integration-with-nocobase).

## **Giới thiệu**

Mục tiêu của bài viết này là trình bày việc tạo ra một trợ lý AI tích hợp các công cụ **NocoBase, LangFlow và VectorDB**. Làm nền tảng, tôi sẽ sử dụng hệ thống mà tôi đang phát triển trong **NocoBase**, được dùng để quản lý dữ liệu kiến trúc, thêm một trợ lý AI để tạo ra các thông tin chi tiết từ dữ liệu chứa trong hệ thống này, chẳng hạn như **Ứng dụng, Danh mục API, Thiết kế Giải pháp và Câu chuyện (Stories)**.

Đối với bài viết này, chúng ta sẽ sử dụng các công nghệ sau:

* **NocoBase, PostgreSQL và Docker**, đã được cấu hình trước (trong bài viết này, tôi sẽ chỉ cách cài đặt chúng).
* **LangFlow**, sử dụng cục bộ, có thể tìm thấy hướng dẫn cài đặt tại đây qua Docker.
* **Cơ sở dữ liệu vector**, bằng cách mở tài khoản tại **AstraDB**, đây sẽ là cơ sở dữ liệu vector được sử dụng trong bài viết này.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển ứng dụng no-code/low-code mở rộng nhất, hỗ trợ AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

## **Tổng quan Kiến trúc**

![Tổng quan Kiến trúc.png](https://static-docs.nocobase.com/c22d65bc1b29655b4384722d666d3a8a.png)

Sơ đồ này cho thấy dữ liệu mới (hoặc dữ liệu đã cập nhật) được chuyển đổi thành **embeddings** và lưu trữ trong **cơ sở dữ liệu vector** như thế nào.

1. **Người dùng → Nền tảng NocoBase**
   Người dùng tương tác với nền tảng NocoBase (ví dụ: thêm hoặc cập nhật một bản ghi trong collection).
2. **Kích hoạt CRUD**
   Một hành động CRUD (Tạo, Đọc, Cập nhật, Xóa) trong NocoBase kích hoạt một sự kiện hoặc một workflow nội bộ.
3. **Workflow (NocoBase)**
   NocoBase có một workflow được cấu hình để phản hồi các thay đổi dữ liệu. Khi phát hiện việc tạo hoặc sửa đổi một bản ghi, nó sẽ bắt đầu bước tiếp theo.
4. **Luồng API: Tải Dữ liệu**
   Workflow của NocoBase gọi một API hoặc dịch vụ bên ngoài từ LangFlow để gửi dữ liệu sẽ được chuyển đổi thành embeddings.
5. **LangFlow — Dữ liệu thành Embedding**
   LangFlow nhận dữ liệu và, sử dụng các mô hình ngôn ngữ, chuyển đổi nội dung thành các vector (embeddings). Các embeddings này biểu diễn ý nghĩa hoặc ngữ cảnh của văn bản dưới dạng số, cho phép tìm kiếm ngữ nghĩa.
6. **Vector DB (AstraDB)**
   Các embeddings sau đó được lưu trữ trong cơ sở dữ liệu vector (AstraDB), liên kết mỗi embedding với nội dung gốc (ví dụ: một tài liệu, một bản ghi, một văn bản).

![sơ đồ.png](https://static-docs.nocobase.com/1d2495aef2ffb7901260d028ab3e00fe.png)

Sơ đồ này cũng minh họa cách người dùng thực hiện các truy vấn ngữ nghĩa trên cơ sở dữ liệu vector và nhận được kết quả phù hợp.

1. **Người dùng → Nền tảng NocoBase**
   Người dùng tương tác lại với nền tảng NocoBase, nhưng lần này sử dụng một Widget Chat Nhúng (hoặc giao diện tìm kiếm khác).
2. **Widget Chat Nhúng**
   Người dùng nhập một câu hỏi hoặc lời nhắc. Ví dụ: *"Hiển thị thông tin về ứng dụng X."* Widget này gửi một yêu cầu đến LangFlow, nơi xử lý truy vấn.
3. **LangFlow — Dữ liệu thành Embedding**
   LangFlow chuyển đổi lời nhắc của người dùng thành một embedding, đại diện cho ý định tìm kiếm ở định dạng vector.
4. **Vector DB (AstraDB) — Tìm kiếm Tương tự**
   Embedding từ lời nhắc được sử dụng để tìm kiếm trong AstraDB các vector tương tự nhất (tức là các nội dung gần nhất về mặt ngữ nghĩa).
5. **Tinh chỉnh Kết quả Tìm kiếm trong Mô hình**
   Dựa trên kết quả trả về từ AstraDB, LangFlow tinh chỉnh kết quả tìm kiếm bằng cách sử dụng các mô hình OpenAI (hoặc một LLM khác).
6. **Phản hồi cho Người dùng**
   Kết quả cuối cùng (văn bản, tài liệu hoặc phản hồi được tạo) được trả về widget chat NocoBase, hiển thị phản hồi cho người dùng.

## **Ứng dụng Sử dụng NocoBase**

Đối với bài viết này, tôi sẽ sử dụng cùng một ứng dụng đã được tạo trước đó. Đây là một ứng dụng được phát triển để chứng minh các tính năng của NocoBase, trong đó tôi sẽ triển khai trợ lý AI. Dưới đây là hình ảnh minh họa cách trợ lý sẽ hoạt động.

Ý tưởng là có được những thông tin chi tiết về các chức năng thông qua các câu hỏi. Các chức năng có sẵn là: Ứng dụng, Danh mục API, Thiết kế Giải pháp và Câu chuyện (Stories).

![Ứng dụng Sử dụng NocoBase.webp](https://static-docs.nocobase.com/6e9829438c1354b2869e7fdf5628735a.webp)

## **LangFlow và AstraDB là gì?**

LangFlow là một công cụ mã nguồn mở được tạo ra bởi các nhà phát triển người Brazil, cung cấp giao diện đồ họa để xây dựng, trực quan hóa và gỡ lỗi các workflow liên quan đến mô hình ngôn ngữ. Dựa trên hệ sinh thái LangChain, LangFlow tạo điều kiện thuận lợi cho việc tạo ra các pipeline xử lý ngôn ngữ tự nhiên (NLP) và các ứng dụng AI tổng quát một cách tương tác, cho phép các nhà phát triển kết nối các thành phần khác nhau — chẳng hạn như gọi API, chuyển đổi văn bản và logic kinh doanh — mà không cần viết mã nhiều.

![LangFlow và AstraDB.png](https://static-docs.nocobase.com/f96b8c2117c91fa90e83e7029edc905d.png)

Trong bài viết này, chúng ta sẽ sử dụng AstraDB, nơi chúng ta sẽ lưu trữ dữ liệu đã được vector hóa của mình. Để hiểu rõ hơn về cơ sở dữ liệu vector, đây là một [bài viết](https://medium.com/@leandro.jm/uma-abordagem-agn%C3%B3stica-a-llm-db-vector-e-embedding-para-busca-sem%C3%A2ntica-ac1ed4c4b681) tôi đã viết. Ngoài ra, hãy nhớ rằng LangFlow cho phép chuyển đổi sang các cơ sở dữ liệu vector khác.

**AstraDB**, ban đầu được biết đến như một dịch vụ cơ sở dữ liệu phân tán dựa trên Apache Cassandra, đã mở rộng khả năng của mình để xử lý việc lưu trữ dữ liệu phi cấu trúc và tìm kiếm vector. Chức năng cơ sở dữ liệu vector này đặc biệt hữu ích cho các ứng dụng học máy, tìm kiếm ngữ nghĩa, hệ thống đề xuất và các tác vụ dữ liệu có chiều cao.

![AstraDB.png](https://static-docs.nocobase.com/90e95b53095b9bf6a63244bb1b604275.png)

## **Cài đặt LangFlow**

Để cài đặt **LangFlow** qua Docker, chỉ cần chạy lệnh sau và sau đó truy cập hệ thống tại **[localhost:7860](http://localhost:7860/)** :

```
docker run -it --rm -p 7860:7860 langflowai/langflow:latest
```

![Cài đặt LangFlow.png](https://static-docs.nocobase.com/a89abb9aa32bbc7a577f974b97f4aca1.png)

## **Cấu hình AstraDB**

Sau khi tạo tài khoản trên AstraDB, bạn có thể thiết lập cơ sở dữ liệu và collection với dữ liệu, như được hiển thị bên dưới.

Quy trình khá đơn giản:

1. Chọn một **nhà cung cấp**
2. Chọn một **khu vực**
3. Tạo **cơ sở dữ liệu**

![Cấu hình AstraDB.png](https://static-docs.nocobase.com/a1e061ed6c29b261adb68fe8d8906bce.png)

Đối với collection, vì nó lưu trữ dữ liệu đã được vector hóa, điều quan trọng là phải cấu hình tính năng Embedding, tương ứng với mô hình LLM chịu trách nhiệm vector hóa dữ liệu.

Có một số mô hình để tạo embedding, chẳng hạn như từ OpenAI, Nvidia và Google. Trong trường hợp này, chúng ta sẽ sử dụng mô hình text-embedding-ada-002 để chuyển đổi dữ liệu.

![Cấu hình AstraDB.png](https://static-docs.nocobase.com/2f94c8c7ef4c4356aae987f3bdeb1e7a.png)

## **Tải Dữ liệu vào Cơ sở dữ liệu Vector**

Bước này cung cấp dữ liệu cho cơ sở dữ liệu vector của chúng ta để có thể tìm kiếm.

1. Workflow LangFlow nhận dữ liệu qua một URL.
2. Xử lý văn bản
3. Chuyển đổi nó sang định dạng vector bằng text-embedding-ada-002
4. Lưu trữ nó trong AstraDB trong collection đã được cấu hình.

![Tải Dữ liệu vào Cơ sở dữ liệu Vector.png](https://static-docs.nocobase.com/b4477ee884a88ee7a3322e7650df3b4c.png)

## **Các Điểm Quan trọng**

* Cần phải xác định AstraDB Token trong thành phần chịu trách nhiệm kết nối cơ sở dữ liệu. Để tạo token, chỉ cần truy cập collection trong AstraDB và nhấp vào Generate Token. Hình ảnh dưới đây hiển thị màn hình với nút tương ứng.

![Các Điểm Quan trọng.png](https://static-docs.nocobase.com/763d524e462a8ac4454b43e1558cbe3b.png)

* **Tổng quan Cơ sở dữ liệu**: Tệp nguồn có thể được tìm thấy trong [kho lưu trữ của tôi](https://github.com/leandro-jm).
* Đối với mô hình chúng tôi đang sử dụng, cần phải thêm tín dụng để truy cập API OpenAI. Tài liệu sau giải thích cách hoàn tất quy trình này. Sau khi thêm tín dụng, bạn phải tạo một token và xác định nó trong thành phần chịu trách nhiệm tạo embedding. Đây là một liên kết có hướng dẫn về quy trình này. Hãy nhớ rằng có nhiều mô hình khác nhau để tạo embedding.

Để kiểm tra, chỉ cần sử dụng Postman, gọi URL có thể lấy từ API > cURL trong LangFlow. Dưới đây là một ví dụ về yêu cầu sử dụng Postman.

![Các Điểm Quan trọng.png](https://static-docs.nocobase.com/16ae6e4697b7a8349955831370e39e47.png)

## Tiến hành Nghiên cứu Sử dụng Mô hình

Bước này chịu trách nhiệm truy xuất dữ liệu từ cơ sở dữ liệu vector và tinh chỉnh nó thông qua **RAG (Retrieval-Augmented Generation).**

![Tiến hành Nghiên cứu Sử dụng Mô hình.png](https://static-docs.nocobase.com/aec6663ed0a2f2d8a1a01afb89140dc5.png)

Ở giai đoạn này, cũng cần xác định các token OpenAI và AstraDB trong các thành phần tương ứng của chúng. Tệp nguồn có thể được tìm thấy trong [kho lưu trữ của tôi](https://github.com/leandro-jm).

Để kiểm tra, chỉ cần sử dụng Chat, có sẵn trong LangFlow trong tab Playground.

## **Cấu hình Workflow trong NocoBase**

Trong bước này, chúng ta sẽ tạo các trình kích hoạt trong ứng dụng của mình để gửi dữ liệu cần được vector hóa. Nói cách khác, bất cứ khi nào dữ liệu mới được chèn vào, nó sẽ được gửi đến API LangFlow để xử lý.

Để đạt được điều này, chúng ta sẽ sử dụng tính năng Workflow của NocoBase. Để biết thêm chi tiết về workflow, hãy truy cập [liên kết](https://docs.nocobase.com/handbook/workflow).

![Cấu hình Workflow trong NocoBase.png](https://static-docs.nocobase.com/e035bb1b812c53d6a96e5bcbf900a02d.png)

Chúng ta sẽ tạo một workflow để gửi dữ liệu từ collection của ứng dụng đến collection đã được vector hóa.

**Các bước:**

Tạo một workflow mới như hình dưới đây, Sự kiện Collection.

![Cấu hình Workflow trong NocoBase.png](https://static-docs.nocobase.com/4e97564ec88cb1f2721016dbff94023d.png)

Xác định **Trình kích hoạt** là một lần chèn vào collection **Ứng dụng**, như hình dưới đây.

![Cấu hình Workflow trong NocoBase.png](https://static-docs.nocobase.com/c7f5a312533558914de9053861bde66a.png)

Tạo một **nút Yêu cầu** mới để gửi dữ liệu của ứng dụng đi vector hóa. Trong bài viết này, chúng ta sẽ sử dụng **Tiêu đề** và **Mô tả** làm ví dụ, nhưng bất kỳ thông tin nào cũng có thể được gửi theo các quy tắc kinh doanh.

![Cấu hình Workflow trong NocoBase.png](https://static-docs.nocobase.com/2da29b9ebb3afe6306f785cb0dcbc7e7.png)

**Bước Thông báo** là tùy chọn và không cần phải thực thi.

## **Thêm Widget Chat trong NocoBase**

Đầu tiên, truy cập LangFlow và sao chép mã Widget Chat từ tùy chọn API, như được hiển thị trong hình ảnh dưới đây.

![Thêm Widget Chat trong NocoBase.png](https://static-docs.nocobase.com/37bc9b9f48a4803639b54707e5b3fd25.png)

Trong bước thứ hai, chỉ cần tạo một trang và thêm một thành phần iframe. Để biết thêm chi tiết về thành phần này, bạn có thể xem [liên kết](https://docs.nocobase.com/handbook/block-iframe).

**Trong đó:**

* **Chế độ:** HTML
* **HTML:** Mã bên dưới, thay thế **flow\_id** và **host\_url** theo các giá trị từ LangFlow.

![Thêm Widget Chat trong NocoBase.png](https://static-docs.nocobase.com/d03e4e25fd4241263c332f9c00dcf1c3.png)

## **Kiểm tra Chat**

Bây giờ, hãy quay lại menu đã tạo, kiểm tra Trợ lý của chúng ta và xem phản hồi, như trong ví dụ dưới đây.

![Kiểm tra Chat.png](https://static-docs.nocobase.com/8c43434a510ec2b80a61aca44d939249.png)

## **Kết luận**

Trong bài viết này, chúng tôi đã trình bày việc tạo ra một trợ lý AI tích hợp với NocoBase, LangFlow và AstraDB, cho phép vector hóa và truy xuất dữ liệu thông minh.

Với cách tiếp cận này, chúng tôi đã có thể triển khai một trợ lý có khả năng tạo ra những thông tin chi tiết có giá trị từ dữ liệu đã đăng ký, sử dụng các kỹ thuật RAG (Retrieval-Augmented Generation) để tinh chỉnh kết quả tìm kiếm.

Đây chỉ là sự khởi đầu cho những gì kiến trúc này có thể mang lại. Với những điều chỉnh nhỏ, có thể mở rộng các chức năng, tích hợp các mô hình AI mới và nâng cao trải nghiệm người dùng. 🚀

**Bài đọc liên quan:**

* [Phát triển Plugin để Gửi Tin nhắn WhatsApp trong NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Quản trị Kiến trúc Đơn giản hóa: Xây dựng Danh mục Ứng dụng với NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
* [Cách Sao lưu và Phục hồi NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
* [Cách xây dựng ứng dụng với NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Cách tải hình ảnh Docker lên máy chủ mạng nội bộ](https://www.nocobase.com/en/blog/load-docker-image)
