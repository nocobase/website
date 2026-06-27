---
title: "Top 6 Công cụ AI Mã nguồn mở theo Sao GitHub cho AI Agent mạnh mẽ hơn"
description: "Bài viết này đánh giá sáu công cụ AI mã nguồn mở có nhiều sao nhất trên GitHub từ danh sách ai-tools và giải thích cách chúng tăng cường AI Agent trong tự động hóa trình duyệt, lập trình, lời nhắc và hệ thống kinh doanh."
---

## Giới thiệu

Trong năm qua, số lượng công cụ AI mã nguồn mở đã tăng lên nhanh chóng. Trên GitHub, chủ đề [ai-tools](https://github.com/topics/ai-tools) đã tập hợp một số lượng lớn các dự án.

![AI tools.png](https://static-docs.nocobase.com/AI%20tools-xtlp52.png)

Chúng tôi nhận thấy rằng nhiều công cụ AI mã nguồn mở phổ biến được thiết kế để tăng cường khả năng của các hệ thống AI hiện có và AI Agent.

Chúng hoạt động như những bộ tăng cường năng lực cho AI Agent: một số giúp Agent vận hành các trang web, một số giúp Agent viết mã tốt hơn, một số cho phép Agent gọi các công cụ bên ngoài, một số làm cho đầu ra của AI ổn định hơn và một số giúp AI làm việc bên trong các hệ thống kinh doanh thực tế.

Vì vậy, trong bài viết này, chúng tôi bắt đầu từ các dự án mã nguồn mở phổ biến nhất dưới chủ đề `ai-tools` của GitHub. Dựa trên GitHub Stars, chúng tôi sẽ xem xét 6 công cụ AI mã nguồn mở phổ biến nhất hiện nay và giải thích chúng tăng cường khả năng AI nào.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển low-code/no-code mạnh mẽ nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó được tự lưu trữ hoàn toàn, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---



## Làm thế nào chúng tôi chọn các công cụ này?

Để giữ cho bài viết này khách quan nhất có thể, chúng tôi đã chọn các công cụ dựa trên dữ liệu GitHub công khai.

Việc lựa chọn này chủ yếu tuân theo các quy tắc sau:

1. **Nguồn dữ liệu:** GitHub Topics `ai-tools`
2. **Phương pháp sắp xếp:** Dựa trên GitHub Stars, hiển thị từ hạng 6 đến hạng 1


| Hạng | Công cụ           | GitHub Stars | Hướng chính                            | Phù hợp nhất với                                                                                |
| ---- | ----------------- | ------------ | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 6    | NocoBase          | 22,6k        | Hệ thống kinh doanh no-code hỗ trợ AI  | Xây dựng hệ thống nội bộ doanh nghiệp như CRM, phê duyệt, vé hỗ trợ và back-end vận hành        |
| 5    | OpenCLI           | 23,4k        | Giao diện công cụ AI / CLI             | Đóng gói các trang web, công cụ cục bộ hoặc phiên trình duyệt thành các lệnh mà AI Agent có thể gọi |
| 4    | OpenClaude        | 28,3k        | AI Coding Agent                        | Sử dụng AI Coding Agent đa mô hình trong terminal                                               |
| 3    | prompt-optimizer  | 30,3k        | Tối ưu hóa Prompt                      | Tối ưu hóa, kiểm tra và tái sử dụng prompt                                                      |
| 2    | cc-switch         | 90k          | Quản lý công cụ AI Coding              | Quản lý cấu hình cho các công cụ AI Coding như Claude Code, Codex và OpenCode                   |
| 1    | browser-use       | 96,8k        | Tự động hóa trình duyệt / AI Agent     | Cho phép AI vận hành các trang web và hoàn thành các tác vụ trình duyệt                          |

Dữ liệu được thu thập vào ngày 3 tháng 6 năm 2026. Vì GitHub Stars thay đổi theo thời gian, các con số thực tế có thể hơi khác khi bạn đọc bài viết này.

## NocoBase

**Trang web**: [https://www.nocobase.com/](https://www.nocobase.com/)

**Bản demo trực tuyến**: [demo.nocobase.com/new](https://demo.nocobase.com/new)

**Tài liệu**: [docs.nocobase.com](https://docs.nocobase.com)

**GitHub**: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**: 22,6k

**Mã nguồn mở lần đầu**: 2021

**Giấy phép**: Apache-2.0

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ovnjsn.png)

### Giới thiệu dự án

NocoBase là một nền tảng no-code mã nguồn mở được hỗ trợ bởi AI để nhanh chóng xây dựng các hệ thống kinh doanh nội bộ doanh nghiệp.

Trong NocoBase, AI có thể trực tiếp tham gia vào việc xây dựng ứng dụng. Bạn có thể mô tả các yêu cầu kinh doanh của mình bằng ngôn ngữ tự nhiên và để AI giúp tạo mô hình dữ liệu, cấu hình trang, điều phối quy trình làm việc và thậm chí hỗ trợ phát triển plugin.

Điều này có nghĩa là AI không chỉ đơn giản là tạo ra một đống mã từ đầu. Thay vào đó, nó xây dựng các hệ thống bên trong một nền tảng đã có sẵn các mô hình dữ liệu, trang, quyền, quy trình làm việc và hệ thống plugin. Sau khi tạo, người dùng có thể tiếp tục kiểm tra, điều chỉnh và duy trì hệ thống thông qua giao diện no-code của NocoBase.

### Nó giải quyết vấn đề gì?

"Làm thế nào AI có thể xây dựng các hệ thống kinh doanh bên trong một nền tảng có cấu trúc, thay vì tạm thời tạo mã trong một dự án trống?"

Trong NocoBase, AI có thể làm việc với các khả năng hệ thống kinh doanh hiện có của nền tảng, bao gồm mô hình dữ liệu, xây dựng trang, kiểm soát quyền, quy trình làm việc, mở rộng plugin và AI Employees. Điều này cho phép AI tăng tốc độ xây dựng hệ thống, trong khi con người xác nhận logic kinh doanh, điều chỉnh chi tiết và kiểm soát ranh giới.

Đối với các hệ thống nội bộ doanh nghiệp, cách tiếp cận này đáng tin cậy hơn. Nó bảo toàn hiệu quả của AI đồng thời tránh các vấn đề bảo trì thường đi kèm với việc tạo mã hoàn toàn từ đầu.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-4fun82.png)

### Cách sử dụng tốt nhất

NocoBase phù hợp nhất để xây dựng các hệ thống nội bộ doanh nghiệp có cấu trúc rõ ràng và nhu cầu lặp lại lâu dài.

Một cách sử dụng tốt hơn là:

1. **Bắt đầu với một tình huống kinh doanh cụ thể**

Đừng bắt đầu bằng cách yêu cầu AI "xây cho tôi một ERP hoàn chỉnh." Một cách tiếp cận tốt hơn là bắt đầu với một tình huống cụ thể, chẳng hạn như quản lý khách hàng, yêu cầu mua hàng, sổ cái thiết bị, vé hỗ trợ sau bán hàng, phê duyệt hợp đồng hoặc bảng điều khiển dự án.

2. **Sử dụng ngôn ngữ tự nhiên để AI xây dựng nền tảng hệ thống**

Trước tiên, bạn có thể mô tả các đối tượng kinh doanh, mối quan hệ trường, yêu cầu trang và quy tắc quy trình làm việc, sau đó để AI tạo mô hình dữ liệu, cấu hình trang và điều phối quy trình làm việc trong NocoBase. Ví dụ:

> Hãy giúp tôi xây dựng một hệ thống quản lý khách hàng, bao gồm khách hàng, liên hệ, cơ hội và hồ sơ theo dõi. Một khách hàng có thể được liên kết với nhiều liên hệ và cơ hội. Mỗi cơ hội nên bao gồm giai đoạn, số tiền, ngày dự kiến chốt và người phụ trách.

3. **Kiểm tra và điều chỉnh trong giao diện no-code**

Sau khi AI tạo ra hệ thống, đừng coi nó là phiên bản cuối cùng ngay lập tức. Hãy vào giao diện trực quan của NocoBase và kiểm tra xem các bảng dữ liệu, trường, mối quan hệ, bố cục trang, nút hành động và cấu hình quyền có phù hợp với nhu cầu kinh doanh thực tế hay không.

4. **Cấu hình quyền và ranh giới quy trình làm việc**

Đối với các hệ thống nội bộ, quyền và quy trình làm việc là không thể thiếu. Các vai trò khác nhau sẽ thấy dữ liệu khác nhau và thực hiện các hành động khác nhau. Các quy trình làm việc liên quan đến phê duyệt, thông báo, thay đổi trạng thái và xác thực dữ liệu cũng nên có các quy tắc rõ ràng.

5. **Để AI tham gia vào các hoạt động của hệ thống**

Sau khi hệ thống được xây dựng, AI có thể tiếp tục tham gia vào các hoạt động kinh doanh. Ví dụ: AI Employees có thể giúp phân tích dữ liệu, tạo báo cáo, dịch thuật, hỗ trợ ra quyết định, điền biểu mẫu, xử lý các nút quy trình làm việc, v.v.

6. **Tiếp tục lặp lại thay vì tạo một lần**

Sức mạnh của NocoBase không phải là "tạo mọi thứ một lần." Sau khi AI xây dựng hệ thống, các nhóm vẫn có thể điều chỉnh các trường, trang, quy trình làm việc và quyền theo cách no-code. Điều này làm cho nó phù hợp hơn với những thay đổi lâu dài của các hệ thống kinh doanh thực tế.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-uxqqph.png)

### Các tình huống phù hợp

NocoBase phù hợp với các tình huống sau:

* Hệ thống quản lý khách hàng CRM
* Hệ thống phê duyệt
* Hệ thống vé hỗ trợ
* Hệ thống quản lý dự án
* Các mô-đun ERP nhẹ như mua sắm, hàng tồn kho và đơn hàng
* Back-end vận hành và back-end quản trị
* Quản lý thiết bị, quản lý tài sản và quản lý lưu trữ
* Quản lý theo dõi khách hàng và dịch vụ
* Hệ thống nội bộ doanh nghiệp yêu cầu triển khai riêng tư
* Các ứng dụng kinh doanh yêu cầu quyền, quy trình làm việc, mô hình dữ liệu và cải tiến liên tục
* Các nhóm muốn xây dựng hệ thống với AI và no-code cùng nhau

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-ex094c.png)

### Ranh giới sử dụng

Sức mạnh cốt lõi của NocoBase là xây dựng hệ thống kinh doanh, nhưng nó không phù hợp cho mọi tình huống công cụ AI.

Các ranh giới quan trọng bao gồm:

* **Không lý tưởng cho các trang web một lần:** Nếu bạn chỉ muốn nhanh chóng tạo một trang hiển thị đơn giản, trang chiến dịch hoặc bản demo một lần, NocoBase không phải là lựa chọn trực tiếp nhất. Nó phù hợp hơn cho các hệ thống kinh doanh có mô hình dữ liệu, quyền, quy trình làm việc và nhu cầu bảo trì lâu dài.
* **Không phải là sự thay thế hoàn toàn cho các framework phát triển chuyên nghiệp:** Nếu bạn cần tương tác frontend tùy chỉnh cao, các sản phẩm hướng tới người tiêu dùng phức tạp hoặc các ứng dụng internet cho lượng người dùng lớn, các framework phát triển truyền thống vẫn phù hợp hơn.
* **Vẫn cần mô hình hóa kinh doanh trước:** NocoBase có thể tăng tốc độ xây dựng hệ thống, nhưng người dùng vẫn cần hiểu các đối tượng kinh doanh, mối quan hệ dữ liệu và ranh giới quy trình làm việc của họ. Nếu mô hình dữ liệu được thiết kế kém, hệ thống sẽ trở nên phức tạp hơn sau này.
* **Tùy chỉnh phức tạp vẫn yêu cầu kỹ năng phát triển:** Mặc dù nhiều chức năng có thể được cấu hình mà không cần mã, nhưng việc phát triển plugin chuyên sâu, tích hợp phức tạp và logic kinh doanh đặc biệt vẫn yêu cầu nhà phát triển.

Chính xác hơn, NocoBase phù hợp để xây dựng các hệ thống kinh doanh có thể bảo trì, mở rộng và quản lý được. Nó không nhằm mục đích thay thế tất cả các công cụ AI. Thay vào đó, nó cung cấp một nền tảng hệ thống ổn định để AI tham gia vào các quy trình kinh doanh thực tế.

### Prompt cài đặt

Bạn có thể sao chép Prompt sau vào Claude Code, Cursor, Codex, OpenCode hoặc các AI Coding Agent khác:

```text
Please help me install and initialize NocoBase locally.

Requirements:
1. Open the official GitHub repository:
   https://github.com/nocobase/nocobase

2. Read the official README and follow the AI Agent Access quickstart.

3. Check whether Node.js and npm are installed.

4. Install the NocoBase CLI beta version:
   npm install -g @nocobase/cli@beta

5. Create a new project directory:
   mkdir my-nocobase && cd my-nocobase

6. Initialize NocoBase with UI:
   nb init --ui

7. After initialization, explain what files and directories were created.

8. Start or restart the AI agent session inside this directory.
   For example:
   cd my-nocobase && codex
```

## OpenCLI

**Trang web**: [https://opencli.info/](https://opencli.info/)

**GitHub**: [https://github.com/jackwener/OpenCLI](https://github.com/jackwener/OpenCLI)

**GitHub Stars**: 23,4k

**Mã nguồn mở lần đầu**: Tháng 3 năm 2026

**Giấy phép**: Apache-2.0

![OpenCLI.png](https://static-docs.nocobase.com/OpenCLI-nkru1y.png)

### Giới thiệu dự án

OpenCLI là một dự án mã nguồn mở chuyển đổi các trang web, phiên trình duyệt, ứng dụng Electron và các công cụ cục bộ thành giao diện CLI. Nó có thể biến các công cụ dựa trên GUI thành các giao diện dòng lệnh dễ dự đoán hơn, để cả con người và AI Agent có thể hoàn thành các hành động thông qua các lệnh.

Ví dụ: nó có thể đóng gói các khả năng của trang web thành các lệnh:

```text
opencli hackernews top --limit 5
opencli bilibili hot --limit 5
```

Nó cũng có thể cho phép AI Agent sử dụng `opencli browser` để vận hành các trang Chrome nơi người dùng đã đăng nhập, hoàn thành các hành động như mở trang web, đọc trang, nhấp vào nút, điền biểu mẫu và trích xuất dữ liệu.

### Các tình huống phù hợp

OpenCLI phù hợp với các tình huống sau:

* Biến các khả năng của trang web phổ biến thành các lệnh CLI
* Cho phép AI Agent vận hành các trang Chrome đã đăng nhập
* Cung cấp các giao diện công cụ bên ngoài ổn định hơn cho Agent
* Đóng gói các thao tác cho các nền tảng nội dung, nền tảng cộng đồng, trang việc làm và nền tảng xã hội
* Trích xuất dữ liệu có cấu trúc từ các trang web
* Đăng ký các công cụ CLI cục bộ để Agent sử dụng
* Tạo bộ điều hợp cho các tác vụ web lặp đi lặp lại
* Cho phép các công cụ như Claude Code và Cursor gọi các khả năng của trang web bên ngoài

### Prompt cài đặt

Bạn có thể sao chép Prompt sau vào Claude Code, Cursor, Codex hoặc các AI Coding Agent khác:

```text
Please help me install and configure OpenCLI locally.

Requirements:
1. Check whether Node.js >= 20 is installed.
2. Install OpenCLI using the official command:
   npm install -g @jackwener/opencli

3. Verify the installation:
   opencli --version

4. Install the OpenCLI Browser Bridge extension for Chrome.
   Prefer the Chrome Web Store installation if available.
   If not, guide me to install it manually from GitHub Releases.

5. Run the environment check:
   opencli doctor

6. If I have multiple Chrome profiles, help me list and rename them:
   opencli profile list
   opencli profile rename  work
   opencli profile use work

7. Run a simple test command:
   opencli list
   opencli hackernews top --limit 5

8. Explain what each step does.

9. Do not access private pages, send messages, publish content, delete data, or submit forms during the initial test.

10. After setup, explain:
   - How OpenCLI connects to Chrome
   - Where OpenCLI stores local configuration
   - How to safely use it with AI agents
   - What actions should require manual confirmation
```

## OpenClaude

**Trang web**: [https://openclaude.gitlawb.com/](https://openclaude.gitlawb.com/)

**GitHub**: [https://github.com/Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

**GitHub Stars**: 28,3k

**Mã nguồn mở lần đầu**: Tháng 3 năm 2026

**Giấy phép**: Giấy phép tùy chỉnh

### Giới thiệu dự án

OpenClaude là một AI Coding Agent CLI mã nguồn mở. Nó cho phép các nhà phát triển sử dụng các mô hình và nhà cung cấp dịch vụ khác nhau trong terminal để hoàn thành các tác vụ liên quan đến mã, thay vì bị khóa vào một mô hình duy nhất hoặc một công cụ đóng.

OpenClaude hỗ trợ nhiều back-end mô hình, bao gồm các API tương thích với OpenAI, Gemini, GitHub Models, Codex, Ollama, Atomic Chat, v.v. Nó cũng hỗ trợ các khả năng của coding agent phổ biến, chẳng hạn như đọc tệp, sửa đổi tệp, chạy lệnh Bash, tìm kiếm mã, gọi công cụ, sử dụng MCP, thực thi lệnh gạch chéo và đầu ra luồng.

![OpenClaude.png](https://static-docs.nocobase.com/OpenClaude-6f81ig.png)

### Cách sử dụng tốt nhất

OpenClaude phù hợp nhất cho các nhà phát triển đã quen với phát triển dựa trên terminal và muốn có nhiều tính linh hoạt hơn khi sử dụng các mô hình khác nhau.

**Các tình huống phù hợp**

* Sử dụng AI Coding Agent trong terminal
* Sử dụng các mô hình khác nhau để xử lý các tác vụ mã hóa
* Cho phép AI hiểu và sửa đổi các cơ sở mã cục bộ
* Sử dụng AI để tạo các bài kiểm tra, tài liệu và đề xuất tái cấu trúc
* Kiểm tra các back-end khác nhau như API tương thích với OpenAI, Gemini, Codex và Ollama
* Kết hợp MCP, Bash, công cụ tệp và tìm kiếm mã
* Xây dựng quy trình làm việc AI coding mở hơn
* So sánh hiệu suất của các mô hình khác nhau trên các tác vụ mã hóa

Chính xác hơn, OpenClaude phù hợp như một không gian làm việc AI coding cho các nhà phát triển. Nó giúp bạn sử dụng các mô hình khác nhau một cách linh hoạt hơn cho các tác vụ mã hóa, nhưng nó vẫn yêu cầu các nhà phát triển cung cấp các mục tiêu rõ ràng, xem xét kết quả và kiểm soát rủi ro thực thi.

### Prompt cài đặt

Bạn có thể sao chép Prompt sau vào Claude Code, Cursor, Codex hoặc các AI Coding Agent khác:

```text
Please help me install and configure OpenClaude locally.

Requirements:
1. Check whether Node.js and npm are installed.
2. Install OpenClaude globally using the official command:
   npm install -g @gitlawb/openclaude@latest

3. Verify the installation:
   openclaude --version

4. Start OpenClaude:
   openclaude

5. Help me configure one model provider.
   Prefer OpenAI-compatible setup first.

6. Use environment variables for API keys.
   Do not hardcode or print any API key.

7. If I want to use a local model, help me check whether Ollama is installed.
   If Ollama is available, configure OpenClaude with:
   OPENAI_BASE_URL=http://localhost:11434/v1
   OPENAI_MODEL=qwen2.5-coder:7b

8. Create a small test task:
   - Open a simple local project
   - Ask OpenClaude to explain the project structure
   - Ask it to suggest one small improvement
   - Do not allow it to modify files until I confirm

9. After the test, explain:
   - Which provider is currently active
   - Where the configuration is stored
   - How to switch providers later
   - How to safely review file changes
```

## Prompt Optimizer

**Trang web**: [always200.com](https://always200.com)

**GitHub**: [https://github.com/linshenkx/prompt-optimizer](https://github.com/linshenkx/prompt-optimizer)

**GitHub Stars**: 30,3k

**Mã nguồn mở lần đầu**: Tháng 2 năm 2025

**Giấy phép**: Giấy phép tùy chỉnh

![Prompt Optimizer.png](https://static-docs.nocobase.com/Prompt%20Optimizer-zpgvc1.png)

### Giới thiệu dự án

Prompt Optimizer là một công cụ tối ưu hóa prompt mã nguồn mở giúp người dùng viết các prompt rõ ràng hơn, ổn định hơn và dễ tái sử dụng hơn.

### Cách sử dụng tốt nhất

Prompt Optimizer phù hợp nhất cho các trường hợp sử dụng AI có tần suất cao, có thể tái sử dụng và có yêu cầu về chất lượng đầu ra. Nó đặc biệt hữu ích cho việc tạo nội dung, phát triển ứng dụng AI, trả lời dịch vụ khách hàng, hỗ trợ mã hóa, tạo hình ảnh, giải thích phân tích dữ liệu, Hỏi đáp kiến thức nền tảng và các tình huống tương tự.

### Prompt cài đặt

Nếu bạn chỉ muốn dùng thử nhanh, bạn có thể sử dụng trực tiếp phiên bản trực tuyến.

Nếu bạn muốn triển khai nó cục bộ hoặc sử dụng riêng tư, bạn có thể sao chép Prompt sau vào Claude Code, Cursor, Codex hoặc các AI Coding Agent khác:

```text
Please help me deploy Prompt Optimizer locally.

Requirements:
1. Open the official GitHub repository:
   https://github.com/linshenkx/prompt-optimizer

2. Read the official README and choose the simplest local deployment method.

3. Prefer Docker deployment if Docker is installed:
   docker run -d -p 8081:80 --restart unless-stopped --name prompt-optimizer linshen/prompt-optimizer

4. If Docker is not installed, help me check whether Node.js and pnpm are available, then guide me through local development setup.

5. After deployment, open the web interface at:
   http://localhost:8081

6. Help me configure at least one AI model provider, such as OpenAI, Gemini, DeepSeek, or a custom OpenAI-compatible API.

7. Do not print or hardcode any API key in the terminal or source code.

8. Explain where the configuration is stored and how to update or remove API keys later.

9. Create a simple test:
   - Input a short prompt: "Help me write a product update email"
   - Optimize it
   - Compare the original and optimized prompt
   - Explain why the optimized version is better or worse

10. Make sure the final setup can be reused later.
```

## CC Switch

**Trang web**: [https://ccswitch.io](https://ccswitch.io)

**GitHub**: [https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)

**GitHub Stars**: 90k

**Mã nguồn mở lần đầu**: Tháng 8 năm 2025

**Giấy phép**: MIT

![CC Switch.png](https://static-docs.nocobase.com/CC%20Switch-1fge76.png)

### Giới thiệu dự án

CC Switch là một công cụ máy tính để bàn đa nền tảng để quản lý tập trung các nhà cung cấp mô hình, API Key, MCP, prompt và cấu hình Skills trên nhiều công cụ AI Coding / AI CLI.

Nó hỗ trợ các công cụ bao gồm Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw và Hermes.

CC Switch tập trung các cấu hình rải rác vào một ứng dụng máy tính để bàn, cho phép các nhà phát triển quản lý và chuyển đổi chúng thông qua giao diện đồ họa thay vì phải chỉnh sửa thủ công các tệp JSON, TOML hoặc `.env` nhiều lần.

### Cách sử dụng tốt nhất

CC Switch phù hợp nhất cho những người dùng nặng các công cụ AI Coding, đặc biệt là các nhà phát triển đã sử dụng nhiều công cụ CLI, nhiều nhà cung cấp mô hình hoặc nhiều API Key cùng một lúc.

CC Switch phù hợp với các tình huống sau:

* Sử dụng nhiều công cụ AI Coding cùng một lúc
* Thường xuyên chuyển đổi giữa các công cụ như Claude Code, Codex, Gemini CLI và OpenCode
* Quản lý nhiều nhà cung cấp mô hình và API Key
* Giảm rủi ro khi chỉnh sửa thủ công các tệp cấu hình
* Quản lý tập trung MCP, prompt và Skills
* Đồng bộ cấu hình công cụ AI trên nhiều thiết bị
* Quản lý quy trình làm việc AI Coding thông qua giao diện máy tính để bàn

### Prompt cài đặt

Bạn có thể sao chép Prompt sau trực tiếp vào Claude Code, Cursor, Codex hoặc các AI Coding Agent khác:

```text
Please help me install and configure CC Switch on my local machine.

Requirements:
1. Detect my operating system: macOS, Windows, or Linux.
2. Follow the official installation method from the CC Switch GitHub repository.
3. If I am on macOS, prefer installing via Homebrew:
   brew install --cask cc-switch
4. If I am on Windows or Linux, guide me to download the correct installer from GitHub Releases.
5. After installation, help me launch CC Switch.
6. Check whether my existing AI CLI tools are installed, such as Claude Code, Codex, Gemini CLI, OpenCode, or OpenClaw.
7. Help me import the existing configuration if available.
8. Create one test Provider configuration.
9. Explain where CC Switch stores its local data and backups.
10. Do not expose or print any API key in the terminal output.

Official GitHub repository:
farion1231/cc-switch

Official website:
ccswitch.io
```

## browser-use

* **Trang web chính thức**: [https://browser-use.com/](https://browser-use.com/)
* **GitHub**: [https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)
* **GitHub Stars**: 96,8k
* **Mã nguồn mở lần đầu**: Tháng 11 năm 2024
* **Giấy phép**: MIT

![browser-use1.png](https://static-docs.nocobase.com/browser-use1-b7i8fw.png)

### Giới thiệu dự án

browser-use là một công cụ mã nguồn mở cho phép AI Agent vận hành trình duyệt.

Hầu hết các trang web được thiết kế ban đầu cho con người, không phải cho AI Agent. Nếu AI muốn hoàn thành các tác vụ web, nó thường cần hiểu nội dung trang, xác định các nút và trường nhập liệu, nhấp vào các phần tử, điền biểu mẫu, điều hướng giữa các trang và thậm chí xử lý các quy trình làm việc nhiều bước.

browser-use có thể biến trình duyệt thành một môi trường thực thi cho AI Agent, cho phép AI hoàn thành các tác vụ trên các trang web giống như con người.

![browser-use2.gif](https://static-docs.nocobase.com/browser-use2-2uuy81.gif)

### Cách sử dụng tốt nhất

browser-use **hoạt động tốt nhất như một phần của chuỗi công cụ AI Agent**, thay vì là một sản phẩm độc lập hoàn chỉnh.

Một cách sử dụng tốt hơn là:

1. **Xác định một tác vụ web rất cụ thể trước**

Ví dụ: đăng nhập vào hệ thống back-end, tìm các đơn hàng từ 7 ngày qua và xuất kết quả.

2. **Để AI Agent sử dụng browser-use để vận hành web**

browser-use xử lý việc mở trang, xác định các phần tử, nhấp vào nút, điền nội dung và đọc trạng thái trang web.

3. **Thêm các hạn chế và kiểm tra cho các quy trình làm việc chính**

Ví dụ: không để AI gửi thanh toán, xóa dữ liệu hoặc sửa đổi cấu hình môi trường sản xuất mà không có sự kiểm soát. Đối với các hành động rủi ro cao, tốt nhất nên thêm xác nhận của con người.

4. **Biến các tình huống ổn định thành các quy trình làm việc tự động**

Đối với các tác vụ web lặp đi lặp lại nhiều, các quy trình làm việc thành công có thể được lưu lại và sau đó tối ưu hóa dần dần.

5. **Ưu tiên sự ổn định của trình duyệt trong môi trường sản xuất**

Nếu một tác vụ liên quan đến đồng thời cao, proxy, CAPTCHA, dấu vân tay trình duyệt hoặc quản lý trạng thái đăng nhập, bạn nên xem xét không chỉ thực thi cục bộ mà còn cả trình duyệt đám mây hoặc môi trường được lưu trữ.

**browser-use phù hợp với các tình huống sau:**

* Tự động hóa trình duyệt AI Agent
* Điền biểu mẫu web
* Vận hành tự động các hệ thống back-end
* Thu thập dữ liệu và truy vấn thông tin
* Mô phỏng các thao tác web của con người
* Kiểm tra khả năng thực hiện tác vụ trên web của AI Agent
* Thêm khả năng hành động trình duyệt vào các Agent hiện có

### Prompt cài đặt

Bạn có thể sao chép Prompt sau trực tiếp vào Claude Code, Cursor, Codex hoặc các AI Coding Agent khác:

```text
Please help me install and run browser-use locally.

Requirements:
1. Check whether Python 3.11 or above is installed.
2. Use uv to create a clean Python environment.
3. Install browser-use.
4. Install Chromium if it is not available.
5. Create a simple example script that uses browser-use to open a webpage and complete a basic task.
6. Use an environment variable for the LLM API key. Do not hardcode the API key in the script.
7. Add clear comments so I can understand each step.
8. After installation, run the example and help me verify whether browser-use works correctly.

Official GitHub repository:
browser-use/browser-use

Please follow the official quickstart as much as possible.
```

Nếu bạn muốn kiểm tra một tác vụ đơn giản trực tiếp, bạn có thể thay đổi tác vụ thành:

```text
Create a browser-use example that opens the browser-use GitHub repository, finds the current number of GitHub stars, and prints the result.
```

## Câu hỏi thường gặp

1. **Các công cụ AI mã nguồn mở này có phù hợp để sử dụng trong doanh nghiệp không?**

Điều đó phụ thuộc vào công cụ cụ thể và trường hợp sử dụng.

Các công cụ như browser-use và OpenCLI phù hợp hơn cho tự động hóa Agent và gọi công cụ bên ngoài. NocoBase phù hợp hơn để xây dựng các hệ thống kinh doanh nội bộ doanh nghiệp.

2. **Sự khác biệt giữa browser-use và OpenCLI là gì?**

Cả hai đều có thể tăng cường khả năng vận hành các trang web và công cụ bên ngoài của AI Agent, nhưng chúng thực hiện theo những cách khác nhau.

browser-use giống như để AI trực tiếp vận hành trình duyệt hơn. AI mở các trang web, đọc trang, nhấp vào nút, điền biểu mẫu và quyết định bước tiếp theo dựa trên trạng thái trang.

OpenCLI tập trung nhiều hơn vào việc đóng gói các trang web, công cụ cục bộ hoặc phiên trình duyệt thành các lệnh CLI. Điều này cho phép AI Agent gọi các công cụ thông qua các lệnh thay vì bắt đầu từ giao diện trang web mỗi lần.

3. **Nếu tôi muốn xây dựng các hệ thống nội bộ doanh nghiệp, tôi nên chọn loại công cụ AI nào?**

Nếu mục tiêu của bạn là xây dựng các hệ thống nội bộ doanh nghiệp như CRM, hệ thống phê duyệt, hệ thống vé hỗ trợ, quản lý dự án và back-end vận hành, chỉ riêng các công cụ AI Coding thường là không đủ.

Các hệ thống này thường yêu cầu mô hình dữ liệu, kiểm soát quyền, cấu hình trang, quy trình làm việc, triển khai riêng tư và bảo trì liên tục. AI có thể giúp tăng tốc độ xây dựng hệ thống, nhưng bản thân hệ thống vẫn cần một nền tảng ứng dụng kinh doanh ổn định.

Đây là lúc các nền tảng như NocoBase phát huy tác dụng. Nó không chỉ đơn giản là để AI tạo mã. Thay vào đó, nó cho phép AI xây dựng các hệ thống kinh doanh có thể bảo trì dựa trên các mô hình dữ liệu, trang, quyền và quy trình làm việc.

## Tổng kết

Trước đây, chúng ta chú ý nhiều hơn đến "AI có thể tạo ra cái gì." Nhưng trong các quy trình làm việc thực tế, các câu hỏi quan trọng hơn là: AI có thể vận hành các công cụ thực tế không? Nó có thể gọi các hệ thống bên ngoài không? Nó có thể tham gia vào các quy trình kinh doanh không? Kết quả được tạo ra có thể tiếp tục được duy trì không?

Đây chính xác là giá trị của các công cụ AI mã nguồn mở này.



**Bài đọc liên quan**

* [5 Công cụ Nội bộ Mã nguồn mở để Sử dụng với Hermes Agent](https://www.nocobase.com/en/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw và 5 Công cụ Mã nguồn mở để Giám sát Quy trình Kinh doanh](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Công cụ Mã nguồn mở nào hoạt động tốt với OpenCode? 5 Dự án để Thử](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Xây dựng Công cụ Nội bộ với Codex: 6 Dự án Mã nguồn mở cho Nhà phát triển](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Sau Claude Code: 6 Công cụ Mã nguồn mở Bạn Nên Biết](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Công cụ AI và No-Code Mã nguồn mở cho Phát triển Phần mềm Doanh nghiệp](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Nền tảng AI Agent Mã nguồn mở để Xây dựng Công cụ Nội bộ](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Tự lưu trữ Tốt nhất cho Doanh nghiệp với RBAC, AI và Hỗ trợ API Mở](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Công cụ Mã nguồn mở Tốt nhất để Thay thế Middleware Tích hợp Tùy chỉnh](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Thay thế Excel bằng NocoBase hay Airtable? So sánh Chi phí từng Khoản](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cách để Nhanh chóng Xây dựng Ứng dụng Web từ Dữ liệu Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Không chỉ PostgreSQL: So sánh 5 Nền tảng No-Code/Low-Code có Hỗ trợ Cơ sở dữ liệu Bên ngoài](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
