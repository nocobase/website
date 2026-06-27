---
title: "Công bố NocoBase 2.1.0"
description: "NocoBase 2.1 giới thiệu CLI mới cho người dùng và AI Agent kết nối và quản lý ứng dụng. Nó cũng nâng cao khả năng xây dựng AI, Skills, phát triển plugin AI, AI Employees, cộng tác đa ứng dụng, quản lý phiên bản, quy trình làm việc và tương thích 2.0."
---

NocoBase 2.1 là bản nâng cấp lớn về **khả năng AI, đa ứng dụng và thích ứng 2.0**. Chúng tôi đã giới thiệu NocoBase CLI, giúp cả người dùng và AI Agent dễ dàng kết nối và quản lý các ứng dụng NocoBase. Từ việc tạo ứng dụng, xây dựng với sự hỗ trợ của AI đến AI Employees nâng cao và plugin phát triển AI, nó bao gồm toàn bộ quy trình từ thiết lập môi trường đến xây dựng hệ thống và cộng tác kinh doanh. Chúng tôi cũng đã nâng cao khả năng đa ứng dụng để tương tác và cộng tác giữa các ứng dụng dễ dàng hơn. Đồng thời, chúng tôi đã thêm kiểm soát phiên bản và tiếp tục hoàn thiện đáng kể hỗ trợ trang 2.0 và các khả năng cốt lõi — nhiều block, trường, hành động và plugin hơn hiện hỗ trợ 2.0.

## Có gì mới

### Giới thiệu NocoBase CLI

Trong bản phát hành này, NocoBase CLI (`nb`) là điểm vào cốt lõi cho cả người dùng thông thường và AI Agent để kết nối với NocoBase.

CLI được sử dụng để khởi tạo, kết nối và quản lý các ứng dụng NocoBase trong một workspace cục bộ. Nó bao gồm một số tình huống:

- Cài đặt một ứng dụng NocoBase mới qua Docker, npm hoặc Git, sau đó lưu nó dưới dạng môi trường CLI
- Kết nối đến một ứng dụng NocoBase hiện có và lưu nó dưới dạng môi trường CLI
- Cài đặt, tạo và kích hoạt plugin
- Vận hành, sao lưu và quản lý các ứng dụng NocoBase

![Trình hướng dẫn trực quan NocoBase CLI](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Cho dù bạn muốn tích hợp AI vào một hệ thống hiện có hay tạo một ứng dụng mới từ đầu, bạn có thể xử lý việc khởi tạo và quản lý liên tục thông qua CLI.

Đối với các nhóm, CLI cung cấp một điểm vào tiêu chuẩn mà AI Agent có thể hiểu và vận hành — khởi tạo môi trường, cấu hình kết nối và quản lý thời gian chạy đều chia sẻ cùng một luồng.

Bản phát hành chính thức cũng bổ sung một bộ lệnh liên quan đến vận hành:

- `nb api`: Gọi API NocoBase thông qua CLI.
- `nb app`: Quản lý trạng thái thời gian chạy của ứng dụng: khởi động, dừng, khởi động lại, nhật ký và nâng cấp.
- `nb backup`: Tạo bản sao lưu và tải xuống cục bộ, hoặc khôi phục tệp sao lưu cục bộ vào môi trường đích.
- `nb config`: Quản lý cấu hình mặc định của CLI.
- `nb db`: Quản lý cơ sở dữ liệu tích hợp của môi trường đã chọn.
- `nb env`: Quản lý môi trường dự án NocoBase, môi trường hiện tại, trạng thái, chi tiết và lệnh thời gian chạy.
- `nb license`: Quản lý giấy phép thương mại và plugin được cấp phép.
- `nb plugin`: Quản lý plugin của môi trường NocoBase đã chọn.
- `nb scaffold`: Tạo khung phát triển plugin NocoBase.
- `nb self`: Kiểm tra hoặc cập nhật chính NocoBase CLI.
- `nb source`: Quản lý các dự án nguồn cục bộ: tải xuống, phát triển, xây dựng và kiểm thử.

Tài liệu liên quan:

- [Cài đặt NocoBase với CLI](https://docs.nocobase.com/quickstart/installation/cli)
- [Hướng dẫn tích hợp AI Agent](https://docs.nocobase.com/ai/quick-start)
- [Tham khảo lệnh NocoBase CLI](https://docs.nocobase.com/api/cli/)

### Xây dựng với sự hỗ trợ của AI: thay thế cấu hình thủ công bằng hội thoại

Xây dựng với sự hỗ trợ của AI là một trong những trải nghiệm cốt lõi trong bản phát hành này. Bạn có thể mô tả nhu cầu kinh doanh của mình bằng ngôn ngữ tự nhiên và AI sẽ giúp hoàn thành mô hình hóa dữ liệu, cấu hình trang, thiết lập quyền và điều phối quy trình làm việc.

So với xây dựng low-code truyền thống, xây dựng với sự hỗ trợ của AI có một số lợi thế rõ ràng:

- Rào cản gia nhập thấp hơn — bạn không cần phải làm quen với mọi khái niệm cấu hình trước
- Con đường ngắn hơn từ mô tả yêu cầu đến nguyên mẫu hoạt động
- Dữ liệu, giao diện người dùng và cấu hình quy trình làm việc có thể được AI hoàn thành liên tục

Ví dụ: "thiết kế cho tôi một mô hình dữ liệu CRM", "tạo cho tôi một trang quản lý khách hàng" hoặc "điều phối một quy trình làm việc tự động khấu trừ tồn kho sau khi đơn hàng được tạo" — tất cả đều có thể được AI xử lý trong phạm vi khả năng của NocoBase.

Tài liệu liên quan:

- [Bắt đầu nhanh xây dựng với sự hỗ trợ của AI](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills bao gồm toàn bộ quy trình xây dựng

Để giúp AI thực sự hiểu hệ thống cấu hình của NocoBase, bản phát hành này cung cấp một bộ gói kiến thức miền có thể được cài đặt vào AI Agent — NocoBase Skills.

Skills là các gói kiến thức và thao tác được tiêu chuẩn hóa được tổ chức xung quanh các miền khả năng chính của NocoBase, giúp AI hiểu chính xác hơn các mô hình đối tượng, cấu trúc cấu hình và ranh giới thực thi.

Chúng tôi hiện cung cấp 8 Skills bao gồm toàn bộ quy trình xây dựng:

- [Quản lý môi trường](https://docs.nocobase.com/ai-builder/env-bootstrap) — kiểm tra môi trường, cài đặt/triển khai, nâng cấp và khắc phục sự cố
- [Mô hình hóa dữ liệu](https://docs.nocobase.com/ai-builder/data-modeling) — tạo và quản lý bảng, trường và quan hệ
- [Xây dựng giao diện người dùng](https://docs.nocobase.com/ai-builder/ui-builder) — tạo và chỉnh sửa trang, block, popup và phản hồi tương tác
- [Quản lý quy trình làm việc](https://docs.nocobase.com/ai-builder/workflow) — tạo, chỉnh sửa, bật và chẩn đoán quy trình làm việc
- [Cấu hình quyền](https://docs.nocobase.com/ai-builder/acl) — quản lý vai trò, chính sách quyền, liên kết người dùng và đánh giá rủi ro
- [Giải pháp](https://docs.nocobase.com/ai-builder/dsl-reconciler) — xây dựng hàng loạt toàn bộ hệ thống kinh doanh từ YAML (vẫn đang trong giai đoạn beta, với độ ổn định hạn chế)
- [Quản lý plugin](https://docs.nocobase.com/ai-builder/plugin-manage) — xem, bật và tắt plugin
- [Quản lý xuất bản](https://docs.nocobase.com/ai-builder/publish) — xuất bản đa môi trường, sao lưu/khôi phục và di chuyển

Với Skills, AI có thể hiểu chính xác hơn hệ thống cấu hình của NocoBase và cung cấp hỗ trợ thông minh hơn khi xây dựng và quản lý hệ thống.

**Lưu ý**: NocoBase Skills vẫn đang được cải thiện tích cực. NocoBase Skills cũng được cài đặt tự động khi bạn cài đặt và khởi tạo NocoBase CLI, vì vậy trong hầu hết các trường hợp, bạn không cần cài đặt riêng.

Tài liệu liên quan:

- [NocoBase Skills](https://github.com/nocobase/skills)

### Plugin phát triển AI

Bản phát hành này bổ sung các khả năng nền tảng cần thiết cho phát triển plugin AI, để AI có thể tham gia không chỉ vào việc xây dựng ứng dụng mà còn vào phát triển plugin tùy chỉnh.

Điều này thể hiện ở ba lĩnh vực chính:

- Một đường ống xây dựng `rsbuild/rspack` thống nhất, hợp nhất phát triển plugin và hệ thống xây dựng frontend
- Khả năng `client-v2` và hệ thống định tuyến `/v/` nhắm đến phát triển AI, chuẩn bị cho phát triển plugin client thế hệ tiếp theo
- Skills phát triển plugin AI giúp AI hiểu rõ hơn về cấu trúc plugin, tổ chức mã và các mẫu triển khai

Chuẩn bị xung quanh `client-v2` bao gồm:

- `@nocobase/app` hiển thị điểm vào `client-v2`
- Nhân cung cấp gói `@nocobase/client-v2` với các thành phần cơ bản, tiện ích và định nghĩa kiểu
- Mỗi plugin có một thư mục `/src/client-v2`
- Một tuyến `/v/` mới được thêm vào — vẫn đang được cải thiện tích cực, có sẵn cho những người áp dụng sớm
- Nhân đang dần chuyển sang V2
- Các plugin đang dần chuyển sang V2

Một đường ống xây dựng thống nhất giúp giảm chi phí phát triển và gỡ lỗi plugin frontend. Việc triển khai dần dần `client-v2` cũng cung cấp cho AI một cấu trúc mục tiêu ổn định hơn để tạo và duy trì mã plugin.

Trong thực tế: bạn có thể mô tả một yêu cầu plugin bằng ngôn ngữ tự nhiên và AI sẽ giúp tạo mã frontend và backend, bảng dữ liệu, API, cấu hình quyền và nội dung i18n.

**Lưu ý**: Phát triển plugin AI chỉ dành cho các plugin mới kiểu `client-v2`. Chúng tôi sẽ theo dõi bằng tài liệu di chuyển và Skills để chuyển từ plugin `client-v1` sang `client-v2`, giúp bạn đưa các plugin hiện có vào hệ thống mới.

Tài liệu liên quan:

- [Bắt đầu nhanh plugin phát triển AI](https://docs.nocobase.com/ai-dev/)
- [Phát triển plugin](https://docs.nocobase.com/plugin-development/)

### Cải tiến AI Employees

Xây dựng với sự hỗ trợ của AI trả lời "làm thế nào để tôi sử dụng AI để xây dựng một hệ thống"; AI Employees trả lời "làm thế nào để tôi để AI làm việc trong hệ thống để giải quyết các vấn đề kinh doanh cụ thể".

AI Employees đã tồn tại trong các bản phát hành trước, nhưng trong bản phát hành này, các khả năng liên quan đã được nâng cao và nhân AI đã được hoàn thiện:

- [Hỗ trợ MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [Atlas AI Employee mới](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), đóng vai trò trưởng nhóm và điều phối các AI Employee khác để hoàn thành nhiệm vụ dựa trên ý định của người dùng
- [Nút quy trình làm việc AI Employee](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Công cụ tìm kiếm web dựa trên LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Công cụ truy vấn tổng hợp mới và công cụ tạo báo cáo](https://docs.nocobase.com/ai-employees/scenarios/business-report) để tạo báo cáo phân tích kinh doanh
- [Kỹ sư bản địa hóa mới Lina](https://docs.nocobase.com/ai-employees/built-in/lina), một AI Employee tích hợp từ plugin bản địa hóa được sử dụng để dịch thuật bản địa hóa hệ thống, hỗ trợ các phạm vi dịch tăng dần, chọn lọc và toàn bộ

Những cải tiến này đưa khả năng mở rộng, điều phối và thực thi của AI Employees trong các hệ thống kinh doanh lên một tầm cao mới. AI Employees có thể hiểu bối cảnh kinh doanh hiện tại, gọi các kỹ năng để thực hiện các nhiệm vụ cụ thể, tham gia vào các quy trình làm việc tự động và kết hợp thông tin bên ngoài để cung cấp phân tích và đầu ra.

Bản phát hành chính thức cũng bổ sung hỗ trợ cho AI Employees để tải tệp từ các trường đính kèm quy trình làm việc và xử lý nhiều cuộc hội thoại song song, cải thiện hơn nữa khả năng sử dụng của AI Employees trong các quy trình kinh doanh thực tế.

Tài liệu liên quan:

- [AI Employees](https://docs.nocobase.com/ai-employees/)
- [Lina: Kỹ sư bản địa hóa](https://docs.nocobase.com/ai-employees/built-in/lina)
- [Dịch thuật ngữ bản địa hóa với Lina và mô hình HY-MT1.5-1.8B cục bộ](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)

### Kiểm soát phiên bản

Kiểm soát phiên bản giúp bạn quản lý tốt hơn các lần lặp phiên bản và lịch sử thay đổi của ứng dụng. Bạn có thể tạo, xem và khôi phục các phiên bản khác nhau của một ứng dụng, giúp dễ dàng chuyển đổi phiên bản và khắc phục sự cố trong quá trình phát triển và vận hành. **Lưu ý: Tính năng này yêu cầu phiên bản Professional trở lên.**

![](https://static-docs.nocobase.com/20260526220510.png)

Tài liệu liên quan:

- [Kiểm soát phiên bản](https://docs.nocobase.com/ops-management/version-control/)
- [Trình quản lý sao lưu](https://docs.nocobase.com/ops-management/backup-manager/)

### Cải tiến đa ứng dụng

Trong bản phát hành này, chúng tôi đã thực hiện một số cải tiến quan trọng đối với việc triển khai đa ứng dụng, chủ yếu ở ba lĩnh vực:

- [Block ứng dụng mới và trình chuyển đổi ứng dụng](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher), cho phép bạn hiển thị các điểm vào của các ứng dụng phụ khác trên một trang, giúp người dùng dễ dàng chuyển đổi giữa ứng dụng chính và ứng dụng phụ.

![](https://static-docs.nocobase.com/202605271403304.png)

- [Đăng nhập một lần ứng dụng mới](https://docs.nocobase.com/multi-app/multi-app/app-sso). Khi người dùng vào một ứng dụng phụ từ ứng dụng chính hoặc chuyển đổi giữa các ứng dụng phụ, hệ thống sẽ cố gắng tự động đăng nhập họ vào ứng dụng phụ đích bằng người dùng hiện đang đăng nhập. Người dùng không cần phải nhập lại thông tin đăng nhập trong mỗi ứng dụng phụ.

![](https://static-docs.nocobase.com/202605271406542.png)

- [Gọi API ứng dụng phụ](https://docs.nocobase.com/multi-app/multi-app/sub-app-api). Trong các tình huống đa ứng dụng, mỗi ứng dụng phụ có API độc lập riêng, được phân biệt bằng tiền tố đường dẫn, tham số, v.v., giúp dễ dàng gọi API của ứng dụng phụ.

Những cải tiến này rất thiết thực cho người dùng triển khai đa ứng dụng, giúp trao đổi dữ liệu và vận hành trên nhiều ứng dụng dễ dàng hơn và cải thiện hiệu quả cộng tác tổng thể của các hệ thống đa ứng dụng.

Tài liệu liên quan:

- [Block ứng dụng và trình chuyển đổi ứng dụng](https://docs.nocobase.com/multi-app/multi-app/app-block-and-switcher)
- [Đăng nhập một lần ứng dụng](https://docs.nocobase.com/multi-app/multi-app/app-sso)
- [Gọi API ứng dụng phụ](https://docs.nocobase.com/multi-app/multi-app/sub-app-api)

### Cải tiến quy trình làm việc

Bản phát hành này nâng cao **khả năng kiểm soát và quan sát** của quy trình làm việc:

- Đã thêm kiểm soát thời gian chờ — các quy trình làm việc chạy quá lâu sẽ tự động bị chấm dứt (các quy trình con cũng hỗ trợ cấu hình thời gian chờ)
- Đã thêm trường người tạo và người cập nhật
- Đã thêm trường nhật ký vào các công việc nút, giúp xem nhật ký nút dễ dàng hơn khi gỡ lỗi
- Trình kích hoạt Webhook (chế độ đồng bộ) trả về mã trạng thái phản hồi 408 khi hết thời gian chờ

Tài liệu liên quan:

- [Quy trình làm việc](https://docs.nocobase.com/workflow/)

### Trường chữ ký viết tay

Đã thêm trường chữ ký viết tay cho phép bạn vẽ và lưu chữ ký trong biểu mẫu, phù hợp cho các tình huống phê duyệt, phiếu xác nhận, biên lai, v.v.

Tài liệu liên quan:

- [Trường chữ ký viết tay](https://docs.nocobase.com/data-sources/field-signature/)

### Hành động JS Item

Đã thêm hành động JS Item, cho phép bạn chạy logic tùy chỉnh trong một hành động bằng cách viết JS, hoạt động cùng với các luồng sự kiện để đáp ứng các nhu cầu tương tác linh hoạt hơn.

Tài liệu liên quan:

- [Hành động JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

### Thích ứng 2.0 và các tính năng mới

Ngoài AI, bản phát hành này tiếp tục di chuyển các mô-đun tính năng chính sang 2.0, đồng thời tung ra các tính năng mới cho các tình huống kinh doanh thực tế.

Tính năng mới

- [Trường chữ ký viết tay](https://docs.nocobase.com/data-sources/field-signature/)
- [Hành động JS Item](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Thích ứng 2.0

- [Yêu cầu tùy chỉnh](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Block bộ lọc cây](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Block lịch](https://docs.nocobase.com/data-sources/calendar/)
- [Block Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
- [Block Gantt](https://docs.nocobase.com/plugins/@nocobase/plugin-gantt)
- [Block danh sách](https://docs.nocobase.com/interface-builder/blocks/data-blocks/list)
- [Block thẻ lưới](https://docs.nocobase.com/interface-builder/blocks/data-blocks/grid-card)
- [Block bản đồ](https://docs.nocobase.com/plugins/@nocobase/plugin-map)
- [Block Markdown](https://docs.nocobase.com/interface-builder/blocks/other-blocks/markdown)
- [Block iframe](https://docs.nocobase.com/integration/embed)
- [Block biểu đồ / Trực quan hóa dữ liệu](https://docs.nocobase.com/data-visualization)

## Tài liệu đa ngôn ngữ

- Đã thêm tài liệu tiếng Indonesia và tiếng Việt
