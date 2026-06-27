---
title: "Công bố NocoBase 2.1-beta"
description: "Nâng cấp AI lớn: từ tích hợp CLI và xây dựng bằng AI đến NocoBase Skills, phát triển plugin AI và AI Employees nâng cao—bao trùm toàn bộ vòng đời xây dựng, mở rộng và vận hành hệ thống kinh doanh. Xây dựng và vận hành hệ thống kinh doanh thực tế nhanh hơn với AI."
---

Tài liệu này áp dụng cho NocoBase 2.1.0-beta.24 trở lên.

Đây là bản nâng cấp lớn **tập trung vào khả năng AI**. Bản phát hành này cho phép bạn đưa AI Agents vào NocoBase — bao gồm tích hợp CLI, xây dựng có hỗ trợ AI, AI Employees nâng cao và plugin phát triển AI — trải dài toàn bộ quy trình từ thiết lập môi trường đến xây dựng hệ thống và cộng tác kinh doanh. Chúng tôi cũng tiếp tục hoàn thiện hỗ trợ trang V2 và các khả năng cốt lõi.

## Có gì mới

### NocoBase CLI trở thành điểm vào chính thức cho AI Agents

Trong bản phát hành này, NocoBase CLI (`nb`) là điểm vào cốt lõi để AI Agents kết nối với NocoBase.

CLI được sử dụng để khởi tạo, kết nối và quản lý các ứng dụng NocoBase trong một không gian làm việc cục bộ. Nó bao gồm hai tình huống:

- Kết nối đến một ứng dụng NocoBase hiện có và lưu nó dưới dạng môi trường CLI
- Cài đặt một ứng dụng NocoBase mới qua Docker, npm hoặc Git, sau đó lưu nó dưới dạng môi trường CLI

![Trình hướng dẫn trực quan NocoBase CLI](https://static-docs.nocobase.com/2026-04-29-15-55-19.png)

Cho dù bạn muốn cắm AI vào một hệ thống hiện có hay tạo một ứng dụng mới từ đầu, bạn đều có thể xử lý việc khởi tạo và quản lý liên tục thông qua CLI.

Đối với các nhóm, CLI cung cấp một điểm vào tiêu chuẩn mà AI Agents có thể hiểu và vận hành — khởi tạo môi trường, cấu hình kết nối và quản lý thời gian chạy đều chia sẻ cùng một quy trình.

Tài liệu liên quan:

- [Hướng dẫn tích hợp AI Agent](https://docs.nocobase.com/ai/quick-start)
- [Tài liệu tham khảo lệnh NocoBase CLI](https://docs.nocobase.com/api/cli/)

### Xây dựng có hỗ trợ AI: thay thế cấu hình thủ công bằng hội thoại

Xây dựng có hỗ trợ AI là một trong những trải nghiệm cốt lõi trong bản phát hành này. Bạn có thể mô tả nhu cầu kinh doanh của mình bằng ngôn ngữ tự nhiên và AI sẽ giúp hoàn thành việc mô hình hóa dữ liệu, cấu hình trang, thiết lập quyền và điều phối quy trình làm việc.

So với xây dựng low-code truyền thống, xây dựng có hỗ trợ AI có một số lợi thế rõ ràng:

- Rào cản gia nhập thấp hơn — bạn không cần phải làm quen với mọi khái niệm cấu hình ngay từ đầu
- Con đường ngắn hơn từ mô tả yêu cầu đến nguyên mẫu hoạt động
- Dữ liệu, giao diện người dùng và cấu hình quy trình làm việc có thể được AI hoàn thành liên tục

Ví dụ: "thiết kế cho tôi một mô hình dữ liệu CRM", "tạo cho tôi một trang quản lý khách hàng" hoặc "điều phối một quy trình làm việc tự động khấu trừ hàng tồn kho sau khi đơn hàng được tạo" — tất cả đều có thể được AI xử lý trong phạm vi khả năng của NocoBase.

Tài liệu liên quan:

- [Bắt đầu nhanh với xây dựng có hỗ trợ AI](https://docs.nocobase.com/ai-builder/)

### NocoBase Skills bao gồm toàn bộ quy trình xây dựng

Để giúp AI thực sự hiểu hệ thống cấu hình của NocoBase, bản phát hành này cung cấp một bộ gói kiến thức miền có thể được cài đặt vào AI Agents — NocoBase Skills.

Skills là các gói kiến thức và thao tác được tiêu chuẩn hóa, được tổ chức xoay quanh các lĩnh vực khả năng chính của NocoBase, giúp AI hiểu chính xác hơn về các mô hình đối tượng, cấu trúc cấu hình và ranh giới thực thi.

Chúng tôi hiện cung cấp 8 Skills bao gồm toàn bộ quy trình xây dựng:

- [Quản lý môi trường](https://docs.nocobase.com/ai-builder/env-bootstrap) — kiểm tra môi trường, cài đặt/triển khai, nâng cấp và khắc phục sự cố
- [Mô hình hóa dữ liệu](https://docs.nocobase.com/ai-builder/data-modeling) — tạo và quản lý bảng, trường và quan hệ
- [Xây dựng giao diện người dùng](https://docs.nocobase.com/ai-builder/ui-builder) — tạo và chỉnh sửa trang, khối, cửa sổ bật lên và phản hồi tương tác
- [Quản lý quy trình làm việc](https://docs.nocobase.com/ai-builder/workflow) — tạo, chỉnh sửa, bật và chẩn đoán quy trình làm việc
- [Cấu hình quyền](https://docs.nocobase.com/ai-builder/acl) — quản lý vai trò, chính sách quyền, liên kết người dùng và đánh giá rủi ro
- [Giải pháp](https://docs.nocobase.com/ai-builder/dsl-reconciler) — xây dựng hàng loạt toàn bộ hệ thống kinh doanh từ YAML (vẫn đang trong giai đoạn beta, với độ ổn định hạn chế)
- [Quản lý plugin](https://docs.nocobase.com/ai-builder/plugin-manage) — xem, bật và tắt plugin
- [Quản lý xuất bản](https://docs.nocobase.com/ai-builder/publish) — xuất bản đa môi trường, sao lưu/phục hồi và di chuyển

Với Skills, AI có thể hiểu chính xác hơn về hệ thống cấu hình của NocoBase và cung cấp hỗ trợ thông minh hơn khi xây dựng và quản lý hệ thống.

**Lưu ý**: NocoBase Skills vẫn đang được cải thiện tích cực. NocoBase Skills cũng được cài đặt tự động khi bạn cài đặt và khởi tạo NocoBase CLI, vì vậy trong hầu hết các trường hợp, bạn không cần phải cài đặt riêng.

Tài liệu liên quan:

- [NocoBase Skills](https://github.com/nocobase/skills)

### Plugin phát triển AI

Bản phát hành này bổ sung các khả năng nền tảng cần thiết cho việc phát triển plugin AI, để AI có thể tham gia không chỉ vào việc xây dựng ứng dụng mà còn vào việc phát triển plugin tùy chỉnh.

Điều này thể hiện ở ba lĩnh vực chính:

- Một quy trình xây dựng `rsbuild/rspack` thống nhất, hợp nhất quá trình phát triển plugin và hệ thống xây dựng frontend
- Khả năng `client-v2` và hệ thống định tuyến `/v2/` nhắm đến phát triển AI, chuẩn bị cho việc phát triển plugin client thế hệ tiếp theo
- Skills phát triển plugin AI giúp AI hiểu rõ hơn về cấu trúc plugin, tổ chức mã và các mẫu triển khai

Việc chuẩn bị xung quanh `client-v2` bao gồm:

- `@nocobase/app` hiển thị điểm vào `client-v2`
- Nhân hệ thống cung cấp gói `@nocobase/client-v2` với các thành phần cơ bản, tiện ích và định nghĩa kiểu
- Mỗi plugin có một thư mục `/src/client-v2`
- Một tuyến đường `/v2/` mới được thêm vào
- Nhân hệ thống đang dần chuyển sang V2
- Các plugin đang dần chuyển sang V2

Một quy trình xây dựng thống nhất giúp giảm chi phí phát triển và gỡ lỗi plugin frontend. Việc triển khai dần dần `client-v2` cũng cung cấp cho AI một cấu trúc mục tiêu ổn định hơn để tạo và duy trì mã plugin.

Trong thực tế: bạn có thể mô tả một yêu cầu plugin bằng ngôn ngữ tự nhiên và AI sẽ giúp tạo mã frontend và backend, bảng dữ liệu, API, cấu hình quyền và nội dung i18n.

**Lưu ý**: Phát triển plugin AI chỉ dành cho các plugin mới kiểu `client-v2`. Chúng tôi sẽ theo dõi bằng tài liệu di chuyển và Skills để chuyển từ plugin `client-v1` sang `client-v2`, nhằm giúp bạn đưa các plugin hiện có vào hệ thống mới.

Tài liệu liên quan:

- [Bắt đầu nhanh với plugin phát triển AI](https://docs.nocobase.com/ai-dev/)
- [Phát triển plugin](https://docs.nocobase.com/plugin-development/)

### Cải tiến AI Employees

Xây dựng có hỗ trợ AI trả lời câu hỏi "làm thế nào để tôi sử dụng AI để xây dựng một hệ thống"; AI Employees trả lời câu hỏi "làm thế nào để tôi để AI làm việc bên trong hệ thống để giải quyết các vấn đề kinh doanh cụ thể".

AI Employees đã tồn tại trong các bản phát hành trước, nhưng trong bản phát hành này, các khả năng liên quan đã được nâng cao và nhân AI đã được hoàn thiện:

- [Hỗ trợ MCP](https://docs.nocobase.com/ai-employees/features/mcp)
- [AI Employee Atlas mới](https://docs.nocobase.com/ai-employees/features/built-in-employee#default-ai-employee-atlas), đóng vai trò trưởng nhóm và điều phối các AI Employee khác để hoàn thành nhiệm vụ dựa trên ý định của người dùng
- [Nút quy trình làm việc AI Employee](https://docs.nocobase.com/ai-employees/workflow/nodes/employee/configuration)
- [Công cụ tìm kiếm web dựa trên LLM](https://docs.nocobase.com/ai-employees/features/web-search)
- [Công cụ truy vấn tổng hợp mới và công cụ tạo báo cáo](https://docs.nocobase.com/ai-employees/scenarios/business-report) để tạo báo cáo phân tích kinh doanh

Những cải tiến này đưa khả năng mở rộng, điều phối và thực thi của AI Employees trong các hệ thống kinh doanh lên một tầm cao mới. AI Employees có thể hiểu bối cảnh kinh doanh hiện tại, gọi các kỹ năng để thực hiện các nhiệm vụ cụ thể, tham gia vào các quy trình làm việc tự động và kết hợp thông tin bên ngoài để cung cấp phân tích và đầu ra.

Nếu nhóm của bạn cần đưa cộng tác thông minh, phân tích tự động và thực thi nhiệm vụ vào các hệ thống kinh doanh của mình, thì đây cũng là một trong những hướng đi đáng chú ý nhất trong bản cập nhật này.

Tài liệu liên quan:

- [AI Employees](https://docs.nocobase.com/ai-employees/)

### Thích ứng 2.0 và các tính năng mới

Ngoài AI, bản phát hành này tiếp tục di chuyển các mô-đun tính năng chính sang 2.0, đồng thời tung ra các tính năng mới cho các tình huống kinh doanh thực tế.

Tính năng mới

- [Trường chữ ký viết tay](https://docs.nocobase.com/data-sources/field-signature/)
- [Hành động mục JS](https://docs.nocobase.com/interface-builder/actions/types/js-item)

Thích ứng 2.0

- [Yêu cầu tùy chỉnh](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [Khối bộ lọc cây](https://docs.nocobase.com/interface-builder/blocks/filter-blocks/tree)
- [Khối lịch](https://docs.nocobase.com/data-sources/calendar/)
- [Khối Kanban](https://docs.nocobase.com/interface-builder/blocks/data-blocks/kanban)
