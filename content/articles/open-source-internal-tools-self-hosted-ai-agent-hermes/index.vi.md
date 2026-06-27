---
title: "5 công cụ nội bộ mã nguồn mở để sử dụng với Hermes Agent"
description: "Tìm hiểu cách NocoBase, Appsmith, Budibase, Directus và Baserow có thể hoạt động với Hermes Agent để cải thiện việc xây dựng, cấu hình và bảo trì công cụ nội bộ."
---

AI Agents không còn chỉ phổ biến trong các kịch bản phát triển nữa.

Bên cạnh các công cụ như Claude Code và OpenClaw, Hermes Agent gần đây cũng bắt đầu nhận được nhiều sự chú ý hơn.

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[Trên Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/), một người dùng đề cập rằng sau khi thử một vài công cụ Agent, bao gồm OpenClaw, Nanobot và Nanoclaw, cuối cùng họ vẫn thích Hermes Agent hơn. Nó giữ lại những khả năng thực sự cần thiết mà không có chi phí không cần thiết. Đối với các kịch bản như mô hình cục bộ, máy chủ tự lưu trữ, truy cập SSH và các thao tác dựa trên Telegram, nó cũng phù hợp với một thiết lập nhẹ nhàng và dễ kiểm soát hơn.

> 💡Đọc thêm:
>
> [Làm thế nào để sử dụng OpenClaw trong kinh doanh thực tế? 5 công cụ mã nguồn mở được đề xuất](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
>
> [Sau khi sử dụng Claude Code, bạn cần 6 công cụ mã nguồn mở này](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)

Đối với các nhóm đang có kế hoạch xây dựng hệ thống kinh doanh tự lưu trữ hoặc công cụ nội bộ, Hermes Agent là một lựa chọn phù hợp nếu AI Agent cần được sử dụng bên trong các hệ thống kinh doanh thực tế để xử lý truy vấn dữ liệu, cấu hình hệ thống, bảo trì quy trình làm việc và thực thi tác vụ.

Nền tảng công cụ nội bộ cung cấp nền tảng cho hệ thống kinh doanh, trong khi Hermes hoạt động như một Agent tự lưu trữ giúp các nhóm truy vấn, cấu hình và bảo trì hệ thống bằng ngôn ngữ tự nhiên, đồng thời ghi lại các thao tác có thể lặp lại dưới dạng các Kỹ năng (Skills) có thể tái sử dụng.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển no-code/low-code mở rộng nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó hoàn toàn tự lưu trữ, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

Bài viết này tập trung vào các nền tảng công cụ nội bộ như NocoBase, Appsmith, Budibase, Directus và Baserow, đồng thời giải thích cách chúng có thể được sử dụng với Hermes Agent trong các tình huống khác nhau.

Đầu tiên, đây là bảng tổng quan về các công cụ được đề cập trong bài viết, các hệ thống kinh doanh phổ biến mà chúng phù hợp và các khả năng mà Hermes Agent có thể bổ sung.

| Công cụ    | Hệ thống kinh doanh / công cụ nội bộ được đề xuất                                                                                                             | Hermes Agent có thể bổ sung những gì                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NocoBase   | CRM, ERP, hệ thống phê duyệt, hệ thống ticket, quản lý dự án, quản lý nhà cung cấp, quản lý tài sản, back-end vận hành và các hệ thống kinh doanh khác         | Sử dụng ngôn ngữ tự nhiên để lập kế hoạch mô hình dữ liệu, cấu hình trang và quyền, bảo trì quy trình làm việc và ghi lại các mô-đun kinh doanh tần suất cao dưới dạng Kỹ năng có thể tái sử dụng |
| Appsmith   | Bảng quản trị, bảng điều khiển dữ liệu, back-end dịch vụ khách hàng, bảng đánh giá, công cụ vận hành, giao diện quản lý cơ sở dữ liệu                                 | Làm rõ cấu trúc trang, tổ chức logic truy vấn và bộ lọc, giải thích mối quan hệ giữa các thành phần và nguồn dữ liệu, và tái sử dụng các mẫu trang quản trị phổ biến    |
| Budibase   | Hệ thống biểu mẫu, quy trình phê duyệt, yêu cầu của nhân viên, bàn dịch vụ IT, ứng dụng quy trình vận hành, công cụ quy trình làm việc nội bộ                              | Làm rõ các trường biểu mẫu, nút phê duyệt và chuyển đổi trạng thái, tạo mẫu quy trình làm việc và ghi lại các Kỹ năng xử lý yêu cầu                                 |
| Directus   | Back-end cơ sở dữ liệu, quản lý API, hệ thống quản lý nội dung, nền tảng quản lý dữ liệu có cấu trúc, back-end thao tác dữ liệu                             | Giải thích cấu trúc dữ liệu, tổ chức mối quan hệ trường, hỗ trợ truy vấn ngôn ngữ tự nhiên và ghi lại quy trình quản lý dữ liệu và bảo trì nội dung                        |
| Baserow    | Cơ sở dữ liệu dạng bảng, CRM nhẹ, danh sách nhà cung cấp, kế hoạch nội dung, bảng tiến độ dự án, danh sách hàng tồn kho                                           | Lập kế hoạch cấu trúc bảng và chế độ xem, tổ chức quy tắc bộ lọc, tạo trường danh mục và trạng thái, và tái sử dụng các mẫu ứng dụng nhẹ                              |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

Trang web chính thức: [https://www.nocobase.com/](https://www.nocobase.com/)

GitHub: [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star: 22.6k

### Giới thiệu

NocoBase là một nền tảng no-code / low-code AI mã nguồn mở để xây dựng các hệ thống kinh doanh nội bộ doanh nghiệp và back-end quản trị.

Cốt lõi của NocoBase là giúp các nhóm xây dựng các hệ thống kinh doanh vận hành lâu dài thông qua mô hình dữ liệu, cấu hình trang, quản lý quyền, quy trình làm việc và tiện ích mở rộng plugin. Các hệ thống này thường thay đổi theo thời gian: các trường cần được điều chỉnh, các trang cần được tối ưu hóa, quyền cần được xác định lại và các quy trình phê duyệt và thông báo cần được cập nhật khi hoạt động kinh doanh thay đổi.

NocoBase rất phù hợp cho các hệ thống dài hạn này, trong khi Hermes Agent có thể tham gia sâu hơn vào việc xây dựng, cấu hình và bảo trì hệ thống.

Về khả năng AI, NocoBase đã cung cấp AI Employees, AI Skills, CLI, MCP và hỗ trợ liên quan. AI Employees có thể hoạt động như trợ lý thông minh bên trong hệ thống và hỗ trợ truy vấn dữ liệu, tạo nội dung, xử lý tác vụ, v.v. AI Skills giúp các Agent bên ngoài hiểu cách NocoBase được cấu hình và những gì chúng có thể và không thể thao tác. CLI cho phép Agent thực hiện các thao tác cài đặt, tạo, sửa đổi, v.v. thông qua các lệnh. MCP cung cấp một điểm truy cập tiêu chuẩn hơn để các công cụ AI bên ngoài kết nối với NocoBase.

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### Nó có thể làm gì với Hermes?

Sau khi Hermes được kết nối với NocoBase, nó có thể hiểu hệ thống cấu hình NocoBase thông qua NocoBase Skills và thực hiện các thao tác tạo, sửa đổi, triển khai, v.v. thông qua NocoBase CLI.

**1. Tạo các mô-đun kinh doanh bằng ngôn ngữ tự nhiên**

Ví dụ: khi tạo một mô-đun quản lý gia hạn khách hàng, trước tiên bạn có thể để Hermes tổ chức các cấu trúc dữ liệu cho khách hàng, hợp đồng, hồ sơ gia hạn, nhiệm vụ theo dõi, v.v. Sau đó, nó có thể lập kế hoạch cho các trang danh sách, trang chi tiết, bảng điều khiển và quyền cơ bản.

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. Giúp duy trì quyền và quy trình làm việc**

Ví dụ: nếu quy tắc là "nhân viên bán hàng chỉ có thể xem khách hàng họ sở hữu, người giám sát có thể xem khách hàng của nhóm họ và bộ phận tài chính chỉ có thể xem số tiền hợp đồng", Hermes có thể chuyển đổi mô tả kinh doanh này thành logic cấu hình quyền và quy trình làm việc cụ thể hơn.

**3. Ghi lại các thao tác tần suất cao dưới dạng Kỹ năng**

Sau khi hoàn thành mô-đun CRM, quy trình phê duyệt hoặc quản lý nhà cung cấp lần đầu tiên, Hermes có thể ghi lại các thực tiễn như đặt tên trường, cấu trúc trang và quy tắc quyền. Sau đó, chúng có thể được tái sử dụng khi xây dựng các mô-đun tương tự sau này.

### Ví dụ hướng dẫn tác vụ

```text
Hãy giúp tôi tạo một mô-đun quản lý gia hạn khách hàng trong NocoBase.

Nó cần bao gồm thông tin khách hàng, ngày hết hạn hợp đồng, trạng thái gia hạn, người phụ trách, hồ sơ theo dõi và quy trình phê duyệt.

Về quyền:
Nhân viên bán hàng chỉ có thể xem khách hàng họ sở hữu.
Giám sát viên bán hàng có thể xem khách hàng của nhóm.
Bộ phận tài chính có thể xem số tiền hợp đồng và trạng thái thanh toán.
Quản trị viên có thể xem và chỉnh sửa tất cả nội dung.

Về quy trình làm việc:
Tự động tạo lời nhắc gia hạn 30 ngày trước khi hợp đồng hết hạn.
Khi số tiền gia hạn vượt quá 100.000 nhân dân tệ, cần có sự phê duyệt của giám sát viên và bộ phận tài chính.
Sau khi phê duyệt, cập nhật trạng thái gia hạn và tạo nhiệm vụ theo dõi tiếp theo.

Sau khi hoàn thành, hãy tổ chức quy trình xây dựng mô-đun này thành một Kỹ năng có thể tái sử dụng, để sau này có thể sử dụng để tạo các mô-đun quản lý nhà cung cấp, quản lý hợp đồng hoặc quản lý dự án.
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### Tài nguyên liên quan

Tài liệu: [https://docs.nocobase.com/](https://docs.nocobase.com/)

Tài liệu AI: [https://docs.nocobase.com/en/ai/](https://docs.nocobase.com/en/ai/)

CLI: [https://docs.nocobase.com/en/api/cli/](https://docs.nocobase.com/en/api/cli/)

Kỹ năng: [https://docs.nocobase.com/en/ai-builder#nocobase-skills](https://docs.nocobase.com/en/ai-builder#nocobase-skills)

MCP: [https://docs.nocobase.com/en/ai/mcp/](https://docs.nocobase.com/en/ai/mcp/)

Hermes Agent: [https://docs.nocobase.com/en/ai/hermes-agent](https://docs.nocobase.com/en/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

Trang web chính thức: [https://www.appsmith.com/](https://www.appsmith.com/)

GitHub: [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star: 39.9k

### Giới thiệu

Appsmith là một nền tảng low-code mã nguồn mở chủ yếu được sử dụng để xây dựng các ứng dụng nội bộ như bảng quản trị, bảng điều khiển dữ liệu, back-end hỗ trợ khách hàng, công cụ đánh giá và công cụ CNTT. Nó có thể kết nối với cơ sở dữ liệu, API và các dịch vụ của bên thứ ba, đồng thời nhanh chóng xây dựng giao diện cho các nhóm nội bộ thông qua các thành phần kéo và thả, cấu hình truy vấn và tiện ích mở rộng JavaScript.

Appsmith cung cấp Appsmith AI, có thể thêm các khả năng như truy vấn AI, tạo văn bản, phân loại, tóm tắt, v.v. vào các ứng dụng. Nó cũng có thể xây dựng các tương tác AI xoay quanh dữ liệu nội bộ. Appsmith cũng đang phát triển Appsmith Agents để mang khả năng AI vào các công cụ và hệ thống mà các nhóm sử dụng hàng ngày.

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### Nó có thể làm gì với Hermes?

Appsmith xây dựng các trang cụ thể và giao diện thao tác dữ liệu, trong khi Hermes giúp các nhóm chuyển đổi các yêu cầu ngôn ngữ tự nhiên thành cấu trúc trang, logic truy vấn và quy tắc thao tác rõ ràng hơn.

1. Lập kế hoạch giao diện quản trị nội bộ

Ví dụ: khi xây dựng một bảng xử lý ngoại lệ đơn hàng, trước tiên bạn có thể yêu cầu Hermes làm rõ những trường nào nên được hiển thị, những bộ lọc nào cần thiết, những nút hành động nào được yêu cầu và trang nên được chia thành các phần như thế nào. Sau đó, Appsmith có thể xử lý việc xây dựng giao diện cụ thể và kết nối dữ liệu.

2. Tổ chức logic truy vấn và bộ lọc

Một vấn đề phổ biến với các công cụ nội bộ không phải là một trang có tồn tại hay không, mà là logic dữ liệu đằng sau trang có rõ ràng hay không. Hermes có thể giúp các nhóm chuyển đổi các mô tả như "tôi muốn xem đơn hàng nào", "ngoại lệ nên được xác định như thế nào" và "bản ghi nào nên được ưu tiên" thành các điều kiện truy vấn và quy tắc thao tác.

3. Ghi lại các mẫu trang quản trị

Back-end hỗ trợ khách hàng, bảng đánh giá, bảng điều khiển vận hành và trang truy vấn tài chính thường xuất hiện lặp đi lặp lại. Hermes có thể ghi lại các trường phổ biến, bố cục thành phần, bộ lọc và logic thao tác dưới dạng Kỹ năng, để các trang tương tự có thể được tái sử dụng sau này.

### Ví dụ hướng dẫn tác vụ

```text
Hãy giúp tôi lập kế hoạch một bảng xử lý ngoại lệ đơn hàng, sau này sẽ được xây dựng trong Appsmith.

Trang cần hiển thị các đơn hàng bất thường, tên khách hàng, số tiền đơn hàng, người phụ trách, lý do ngoại lệ, trạng thái xử lý và bản ghi liên lạc gần đây nhất.

Các bộ lọc bao gồm:
Khu vực.
Số tiền đơn hàng.
Trạng thái xử lý.
Người phụ trách.
Loại ngoại lệ.

Về thao tác:
Nhân viên vận hành có thể cập nhật trạng thái xử lý.
Người giám sát có thể chỉ định người phụ trách hàng loạt.
Bộ phận tài chính chỉ có thể xem số tiền đơn hàng và trạng thái thanh toán.

Hãy tổ chức cấu trúc trang, logic truy vấn dữ liệu và bố cục thành phần, đồng thời ghi lại chúng dưới dạng một mẫu trang công cụ nội bộ có thể tái sử dụng.
```

### Tài nguyên liên quan

Tài liệu: [https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI: [https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

Trang web chính thức: [https://budibase.com/](https://budibase.com/)

GitHub: [https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star: 28k

### Giới thiệu

Budibase là một nền tảng vận hành mã nguồn mở chủ yếu được sử dụng để xây dựng các ứng dụng nội bộ, quy trình làm việc tự động hóa và AI Agents. Nó tập trung nhiều hơn vào các kịch bản kinh doanh dựa trên quy trình, chẳng hạn như yêu cầu của nhân viên, xử lý phê duyệt, bàn dịch vụ IT, định tuyến biểu mẫu, cập nhật dữ liệu và tự động hóa vận hành.

Budibase hỗ trợ tạo mã, tạo bảng cơ sở dữ liệu và tạo quy trình làm việc tự động hóa được hỗ trợ bởi các mô hình ngôn ngữ lớn. Budibase Agents cũng đang được phát triển, cho phép các nhóm xác định hành vi của Agent thông qua ngôn ngữ tự nhiên và kết nối nó với dữ liệu và API nội bộ.

### Nó có thể làm gì với Hermes?

Budibase phù hợp hơn cho các ứng dụng dựa trên biểu mẫu, phê duyệt và quy trình làm việc. Hermes có thể giúp các nhóm làm rõ các quy tắc trong giai đoạn đầu của thiết kế quy trình làm việc và ghi lại các phương pháp xử lý yêu cầu tần suất cao sau này.

1. Làm rõ biểu mẫu và quy trình phê duyệt

Đối với các quy trình như yêu cầu thiết bị, hoàn trả chi phí, hỗ trợ khách hàng và phê duyệt hợp đồng, Hermes trước tiên có thể giúp các nhóm phân tích các trường, nút phê duyệt, điều kiện kích hoạt và quy tắc thông báo. Sau đó, Budibase có thể xử lý việc xây dựng ứng dụng thực tế.

2. Tạo mẫu xử lý quy trình làm việc

Nhiều yêu cầu nội bộ tuân theo các mẫu xử lý cố định. Hermes có thể tổ chức các quy trình làm việc như "nhân viên gửi yêu cầu, người giám sát phê duyệt, bộ phận liên quan xử lý, cập nhật trạng thái và thông báo cho người nộp đơn" thành các mẫu để tái sử dụng nhanh chóng sau này.

3. Ghi lại các quy tắc thao tác

Các ứng dụng dựa trên quy trình làm việc thường cần thay đổi khi các quy tắc tổ chức thay đổi. Hermes có thể ghi lại trình tự phê duyệt, phương pháp xử lý ngoại lệ, trách nhiệm vai trò và quy tắc thông báo, biến chúng thành các Kỹ năng có thể tái sử dụng.

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### Ví dụ hướng dẫn tác vụ

```text
Hãy giúp tôi thiết kế một quy trình yêu cầu thiết bị của nhân viên, sau này sẽ được xây dựng trong Budibase.

Quy trình bao gồm:
Nhân viên gửi yêu cầu thiết bị.
Người giám sát phê duyệt.
IT xác nhận hàng tồn kho.
Sau khi phê duyệt, trạng thái thiết bị được cập nhật.
Hệ thống thông báo cho người nộp đơn đến nhận thiết bị.

Các trường biểu mẫu bao gồm:
Người nộp đơn.
Phòng ban.
Loại thiết bị.
Mô tả mục đích.
Thời gian nhận dự kiến.
Trạng thái phê duyệt.
Người xử lý.

Hãy tổ chức các trường biểu mẫu, nút phê duyệt, chuyển đổi trạng thái và quy tắc thông báo, đồng thời ghi lại quy trình yêu cầu thiết bị này dưới dạng một Kỹ năng có thể tái sử dụng.
```

### Tài nguyên liên quan

Tài liệu: [https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI: [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

Trang web chính thức: [https://directus.io/](https://directus.io/)

GitHub: [https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star: 35.9k

### Giới thiệu

Directus là một API thời gian thực và back-end ứng dụng để quản lý nội dung cơ sở dữ liệu SQL. Nó có thể tạo REST / GraphQL API và giao diện quản trị trên các cơ sở dữ liệu hiện có. Nó hỗ trợ PostgreSQL, MySQL, SQLite, OracleDB, MariaDB, MS SQL và các cơ sở dữ liệu khác, cũng như triển khai cục bộ, triển khai riêng tư và dịch vụ đám mây.

Về khả năng AI, Directus cung cấp Directus MCP, cho phép các công cụ AI như Claude và ChatGPT đọc, tạo và quản lý dữ liệu Directus. Directus MCP tuân theo hệ thống quyền hiện có, do đó các hành động truy cập và sửa đổi của AI cần phải trải qua cùng một lớp xác thực và ủy quyền.

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### Nó có thể làm gì với Hermes?

Directus tập trung nhiều hơn vào back-end dữ liệu và quản lý API. Khi Hermes được sử dụng với Directus, trọng tâm không phải là tạo trang, mà là giúp các nhóm hiểu cấu trúc dữ liệu, truy vấn dữ liệu kinh doanh và ghi lại các hành động quản lý dữ liệu phổ biến.

1. Giải thích cấu trúc dữ liệu

Đối với các cơ sở dữ liệu hiện có, người dùng kinh doanh thường không hiểu các trường liên quan với nhau như thế nào. Hermes có thể giúp tổ chức các bộ sưu tập, trường, mối quan hệ và ranh giới quyền, làm cho cấu trúc dữ liệu dễ hiểu hơn.

2. Hỗ trợ truy vấn và tổ chức dữ liệu

Ví dụ: khi truy vấn nhà cung cấp, hợp đồng, thanh toán, trạng thái nội dung, hồ sơ khách hàng và thông tin tương tự, Hermes có thể chuyển đổi các yêu cầu ngôn ngữ tự nhiên thành logic truy vấn dữ liệu cụ thể hơn.

3. Ghi lại các hành động quản lý dữ liệu

Các hành động như đánh giá nội dung, bảo trì hồ sơ nhà cung cấp, tổ chức dữ liệu khách hàng và kiểm tra trạng thái hợp đồng thường lặp lại. Hermes có thể tổ chức các quy trình thao tác dữ liệu này thành các Kỹ năng, để chúng có thể được thực thi theo cùng một quy tắc sau này.

### Ví dụ hướng dẫn tác vụ

```text
Hãy giúp tôi tổ chức cấu trúc dữ liệu nhà cung cấp trong Directus.

Nó cần phân biệt:
Thông tin cơ bản của nhà cung cấp.
Danh bạ.
Hồ sơ hợp đồng.
Trạng thái thanh toán.
Trạng thái hợp tác.
Bản ghi liên lạc gần đây nhất.

Hãy giải thích các bộ sưu tập này nên được liên quan với nhau như thế nào và tổ chức một quy trình kiểm tra trạng thái nhà cung cấp.

Sau này, tôi hy vọng có thể sử dụng ngôn ngữ tự nhiên để truy vấn:
Hợp đồng của nhà cung cấp nào sắp hết hạn.
Nhà cung cấp nào có trạng thái thanh toán bất thường.
Nhà cung cấp nào chưa cập nhật bản ghi liên lạc trong hơn 30 ngày.

Hãy ghi lại phương pháp tổ chức dữ liệu và truy vấn này dưới dạng một Kỹ năng có thể tái sử dụng.
```

### Tài nguyên liên quan

Tài liệu: [https://directus.io/docs](https://directus.io/docs)

Directus MCP: [https://directus.io/mcp](https://directus.io/mcp)

Tài liệu MCP: [https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

Trang web chính thức: [https://baserow.io/](https://baserow.io/)

GitHub: [https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star: 4.9k

### Giới thiệu

Baserow là một nền tảng no-code mã nguồn mở có thể được sử dụng để xây dựng cơ sở dữ liệu, ứng dụng, tự động hóa và AI Agents. Nó thường được xem như một giải pháp thay thế mã nguồn mở cho Airtable. Nó hỗ trợ cả triển khai đám mây và tự lưu trữ, và phù hợp để quản lý dữ liệu có cấu trúc và các ứng dụng kinh doanh nhẹ.

Baserow 2.0 đã giới thiệu trợ lý AI Kuma, có thể tạo cơ sở dữ liệu, viết công thức và xây dựng tự động hóa bằng ngôn ngữ tự nhiên. Nó cũng cung cấp các trường AI, trình xây dựng tự động hóa, tìm kiếm không gian làm việc và các khả năng khác.

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### Nó có thể làm gì với Hermes?

Baserow phù hợp hơn để xây dựng các ứng dụng nhẹ bắt đầu từ dữ liệu dạng bảng. Khi được sử dụng với Baserow, Hermes có thể giúp các nhóm chuyển từ "tổ chức bảng" sang "ghi lại thói quen quản lý dữ liệu".

1. Tạo cấu trúc bảng và chế độ xem

Đối với danh sách khách hàng, danh sách nhà cung cấp, kế hoạch nội dung, tiến độ dự án, hồ sơ hàng tồn kho và các trường hợp sử dụng tương tự, Hermes trước tiên có thể lập kế hoạch cấu trúc bảng, trường và chế độ xem dựa trên mô tả kinh doanh. Sau đó, Baserow xử lý quản lý dữ liệu.

2. Tổ chức bộ lọc và quy tắc phân loại

Các ứng dụng nhẹ thường dựa vào các chế độ xem khác nhau. Hermes có thể chuyển đổi các quy tắc kinh doanh như "đang chờ xem xét", "đang hợp tác", "sắp hết hạn" và "ưu tiên cao" thành các điều kiện bộ lọc và cài đặt chế độ xem.

3. Ghi lại các mẫu ứng dụng nhẹ

Nếu một nhóm thường xuyên sử dụng Baserow để quản lý dữ liệu kinh doanh tương tự, Hermes có thể ghi lại cấu trúc trường, quy tắc chế độ xem và danh mục trạng thái dưới dạng Kỹ năng, sau đó tái sử dụng chúng khi tạo bảng mới sau này.

### Ví dụ hướng dẫn tác vụ

```text
Hãy giúp tôi lập kế hoạch một bảng quản lý nhà cung cấp, sau này sẽ được tạo trong Baserow.

Các trường bao gồm:
Tên nhà cung cấp.
Người liên hệ.
Thông tin liên hệ.
Trạng thái hợp tác.
Ngày hết hạn hợp đồng.
Trạng thái thanh toán.
Người phụ trách.
Thời gian liên lạc gần đây nhất.
Ghi chú.

Cần tạo ba chế độ xem:
Nhà cung cấp đang chờ xem xét.
Nhà cung cấp đang hợp tác.
Nhà cung cấp có hợp đồng sắp hết hạn.

Hãy thiết kế các điều kiện bộ lọc cho mỗi chế độ xem và ghi lại cấu trúc bảng nhà cung cấp và quy tắc chế độ xem này dưới dạng một Kỹ năng có thể tái sử dụng, để sau này sẽ dễ dàng hơn khi tạo bảng khách hàng, bảng kênh hoặc bảng đối tác.
```

### Tài nguyên liên quan

Tài liệu: [https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI: [https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## Câu hỏi thường gặp

### 1. Nếu các nền tảng này đã có khả năng AI, tại sao vẫn cần Hermes?

AI tích hợp sẵn trong các nền tảng này thường giỏi hơn trong việc hoàn thành các tác vụ cụ thể trong sản phẩm, chẳng hạn như tạo trang, SQL, logic biểu mẫu hoặc cấu hình thành phần.

Giá trị của Hermes nằm ở khả năng tự lưu trữ, bộ nhớ dài hạn và tích lũy Kỹ năng. Nó phù hợp hơn để ghi nhớ các quy tắc kinh doanh, thói quen về quyền và phương pháp cấu hình hệ thống trong suốt các tác vụ và cuộc trò chuyện.

### 2. Nền tảng công cụ nội bộ nào hoạt động tốt nhất với Hermes?

Các nền tảng phù hợp hơn với Hermes là các nền tảng hệ thống kinh doanh vận hành lâu dài yêu cầu bảo trì liên tục, chẳng hạn như NocoBase, Budibase, Appsmith, Directus và Baserow.

Trong số đó, NocoBase phù hợp hơn để duy trì các hệ thống kinh doanh hoàn chỉnh. Appsmith phù hợp hơn cho các giao diện nội bộ và bảng dữ liệu. Budibase phù hợp hơn cho các biểu mẫu và quy trình làm việc. Directus và Baserow phù hợp hơn cho các kịch bản quản lý dữ liệu.

### 3. Hermes Agent phù hợp với loại nhóm nào?

Hermes phù hợp hơn với các nhóm đã sử dụng các công cụ tự lưu trữ, coi trọng bảo mật dữ liệu, cần duy trì các hệ thống kinh doanh trong thời gian dài và muốn AI ghi nhớ các thói quen cấu hình và ghi lại kinh nghiệm vận hành.

### 4. Tại sao AI Agents tự lưu trữ lại quan trọng đối với các công cụ nội bộ doanh nghiệp?

Bởi vì các công cụ nội bộ thường chứa dữ liệu kinh doanh nhạy cảm, chẳng hạn như khách hàng, đơn hàng, hợp đồng, phê duyệt, nhân viên và tài chính.

Khi một AI Agent cần truy cập dữ liệu này và tham gia vào các hoạt động của hệ thống, các nhóm sẽ chú ý nhiều hơn đến nơi dữ liệu được lưu trữ, cách kiểm soát quyền, cách xem xét các hoạt động và cách quản lý bộ nhớ dài hạn. Các Agent tự lưu trữ phù hợp hơn cho các nhóm yêu cầu kiểm soát chặt chẽ hơn.

Có nhiều sản phẩm AI Agent, nhưng nếu nhóm của bạn đã sử dụng các nền tảng công cụ nội bộ mã nguồn mở và muốn đưa AI Agents vào các hệ thống nội bộ doanh nghiệp một cách an toàn và dễ kiểm soát hơn, thì Hermes Agent đáng để thử. Nếu bài viết này hữu ích, hãy chia sẻ nó với những người bạn đang theo dõi AI Agents tự lưu trữ và xây dựng công cụ nội bộ.


**Đọc thêm**

* [OpenClaw và 5 Công cụ Mã nguồn mở để Giám sát Quy trình Kinh doanh](https://www.nocobase.com/en/blog/openclaw-open-source-enterprise-tools)
* [Công cụ Mã nguồn mở nào hoạt động tốt với OpenCode? 5 Dự án để Thử](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
* [Xây dựng Công cụ Nội bộ với Codex: 6 Dự án Mã nguồn mở dành cho Nhà phát triển](https://www.nocobase.com/en/blog/building-internal-tools-with-codex)
* [Sau Claude Code: 6 Công cụ Mã nguồn mở Bạn Nên Biết](https://www.nocobase.com/en/blog/open-source-tools-after-claude-code)
* [Top 10 Công cụ AI và No-Code Mã nguồn mở để Phát triển Phần mềm Doanh nghiệp](https://www.nocobase.com/en/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [8 Nền tảng AI Agent Mã nguồn mở để Xây dựng Công cụ Nội bộ](https://www.nocobase.com/en/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [CRM Tự lưu trữ Tốt nhất cho Doanh nghiệp với Hỗ trợ RBAC, AI và API Mở](https://www.nocobase.com/en/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [6 Công cụ Mã nguồn mở Tốt nhất để Thay thế Middleware Tích hợp Tùy chỉnh](https://www.nocobase.com/en/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Thay thế Excel bằng NocoBase hay Airtable? So sánh Chi phí từng Khoản](https://www.nocobase.com/en/blog/airtable-vs-nocobase-migration-cost-comparison)
* [4 Cách Nhanh chóng Xây dựng Ứng dụng Web từ Dữ liệu Excel](https://www.nocobase.com/en/blog/excel-to-web-app-4-methods)
* [Không chỉ PostgreSQL: So sánh 5 Nền tảng No-Code/Low-Code có Hỗ trợ Cơ sở dữ liệu Bên ngoài](https://www.nocobase.com/en/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [Hướng dẫn Lựa chọn Công cụ Quản lý Dự án Mã nguồn mở, Phiên bản 2026](https://www.nocobase.com/en/blog/open-source-project-management-tool-selection-guide-2026-edition)
