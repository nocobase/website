## Giới thiệu

Sử dụng AI agent yêu thích của bạn cùng với NocoBase để nhanh chóng xây dựng một hệ thống quản lý SLA có thể tùy chỉnh, đáng tin cậy và phát triển liên tục — theo dõi thời gian phản hồi phiếu, thời gian giải quyết, trạng thái vi phạm, phiếu có rủi ro, tỷ lệ đạt SLA và hiệu suất dịch vụ theo mức ưu tiên.

Bạn có thể sao chép prompt bên dưới và để AI agent tạo cấu trúc cơ bản của hệ thống quản lý SLA trong NocoBase, sau đó điều chỉnh trường dữ liệu, trang, quy tắc giới hạn thời gian và tiêu chuẩn mức ưu tiên thông qua giao diện no-code.

Hệ thống này phù hợp với các nhóm hỗ trợ khách hàng, hỗ trợ kỹ thuật, bộ phận dịch vụ IT, nhóm vận hành, nhóm hạ tầng và nhóm dịch vụ nội bộ — những đơn vị cần theo dõi xem phiếu có được phản hồi và giải quyết trong khung thời gian cam kết hay không.

**Bảng điều khiển giám sát SLA thời gian thực:**

![](https://static-docs.nocobase.com/sla-management-1-srd4fv-c-lpaoet.png)

**Danh sách chi tiết SLA phiếu:**

![](https://static-docs.nocobase.com/sla-management-2-xrr54k-c-3i60zi.png)

**AI agent phân tích dữ liệu và tạo báo cáo:**

![](https://static-docs.nocobase.com/sla-management-3-3exg24-c-whyhmu.png)

## Hệ thống quản lý SLA giải quyết vấn đề gì?

Cốt lõi của quản lý SLA là xác định liệu mỗi phiếu có được phản hồi lần đầu và giải quyết hoàn toàn trong thời gian cam kết hay không.

Khi số lượng phiếu tăng lên, nhóm khó có thể chỉ dựa vào phán đoán thủ công để phát hiện phiếu nào sắp hết thời hạn, phiếu nào đã vi phạm, và liệu xử lý theo các mức ưu tiên có còn đạt mục tiêu hay không. Không có trang giám sát SLA thống nhất, các vấn đề rủi ro cao thường chỉ được phát hiện sau khi thực sự hết thời hạn.

Với hệ thống này, bạn có thể đặt giới hạn thời gian phản hồi và giải quyết cho các mức ưu tiên khác nhau, đồng thời liên tục tính toán thời gian còn lại trước khi mỗi phiếu đến hạn SLA.

Hệ thống có thể phân loại phiếu thành các trạng thái như Đã đạt, Có rủi ro và Đã vi phạm. Người quản lý có thể xem số phiếu có rủi ro, số vi phạm trong ngày, tỷ lệ đạt SLA tổng thể và thời gian phản hồi lần đầu trung bình trên bảng điều khiển thời gian thực.

Đối với các phiếu đã vi phạm hoặc sắp vi phạm, hệ thống có thể trình bày chúng tập trung theo mức ưu tiên, hàng đợi, thời gian đã trôi qua và thời gian mục tiêu — giúp nhóm xử lý các vấn đề cấp bách nhất trước.

Danh sách chi tiết phiếu cũng có thể hiển thị tiêu đề, hàng đợi, mức ưu tiên, trạng thái, cờ vi phạm, hạn phản hồi, hạn giải quyết và thời hạn SLA mục tiêu — giúp người quản lý dễ dàng kiểm tra thêm cách xử lý từng phiếu.

## Tính năng cốt lõi

### Bảng điều khiển giám sát SLA thời gian thực

- **Tổng quan chỉ số chính:** Hiển thị tập trung số phiếu có rủi ro, số vi phạm trong ngày, tỷ lệ đạt SLA và thời gian phản hồi lần đầu trung bình.
- **Chỉ báo khoảng cách mục tiêu:** So sánh tỷ lệ đạt SLA hiện tại với mục tiêu để nhanh chóng đánh giá hiệu suất dịch vụ tổng thể có đang đúng hướng hay không.
- **Giám sát trạng thái thời gian thực:** Liên tục làm mới rủi ro phiếu hiện tại và trạng thái xử lý để nhóm có thể điều chỉnh ưu tiên kịp thời.

### Quản lý phiếu có rủi ro và vi phạm

- **Phiếu vi phạm nghiêm trọng:** Đưa ra tập trung các vấn đề quan trọng đã vượt quá giới hạn SLA, bao gồm tiêu đề phiếu, mức ưu tiên, hàng đợi và thời gian đã trôi qua.
- **Cảnh báo vi phạm sắp xảy ra:** Xác định sớm các phiếu At Risk đang tiếp cận hạn cuối để ngăn leo thang thêm.
- **Trực quan hóa tiến độ:** Dùng thanh tiến độ để hiển thị thời hạn mục tiêu so với thời gian đã trôi qua — giúp đọc nhanh mức độ rủi ro của phiếu.

### Quản lý thông tin SLA phiếu

- **Hạn phản hồi và giải quyết:** Ghi lại riêng hạn phản hồi lần đầu và hạn giải quyết cuối cùng.
- **Mức ưu tiên nhiều cấp:** Hỗ trợ các mức ưu tiên như P1 Critical, P2 High, P3 Medium và P4 Low, mỗi cấp có mục tiêu SLA riêng.
- **Phân loại trạng thái tự động:** Dùng các trạng thái như At Risk, Breached và Met để đánh dấu hiệu suất SLA hiện tại của mỗi phiếu.

### Hàng đợi dịch vụ và danh sách phiếu

- **Quản lý đa hàng đợi:** Tổ chức phiếu theo các hàng đợi dịch vụ như Customer Success, Technical Support, Infrastructure và Billing.
- **Danh sách chi tiết phiếu:** Hiển thị tiêu đề, hàng đợi, mức ưu tiên, trạng thái, cờ vi phạm, hạn phản hồi và hạn giải quyết.
- **Lọc và bảo trì:** Hỗ trợ lọc, tạo mới, xem, chỉnh sửa và xóa phiếu để nhóm duy trì hồ sơ dịch vụ cập nhật.

### Phân tích hiệu suất SLA

- **Điểm SLA tổng thể:** Tổng hợp mức độ đạt dịch vụ trên tất cả phiếu thành điểm tổng thể trực quan.
- **Phân tích theo mức ưu tiên:** So sánh tỷ lệ đạt SLA và số lượng chưa đạt trên các mức ưu tiên như P1, P2 và P3.
- **Phân tích phân bổ trạng thái:** Thống kê phiếu ở trạng thái At Risk, Breached, On Track và Met đồng thời hiển thị tỷ lệ của chúng.

### Phân tích được hỗ trợ bởi AI

- **AI xác định rủi ro dịch vụ:** Tự động phát hiện các mức ưu tiên có tỷ lệ vi phạm cao, hàng đợi dịch vụ bất thường và các cụm phiếu rủi ro cao.
- **AI tạo báo cáo SLA:** Tóm tắt sức khỏe tổng thể, phân bổ trạng thái phiếu, hiệu suất theo mức ưu tiên và rủi ro hàng đợi.
- **AI đưa ra đề xuất xử lý:** Tạo các ưu tiên giai đoạn tiếp theo dựa trên dữ liệu hiện tại, chẳng hạn như phục hồi phiếu P1 trước, ổn định hàng đợi rủi ro cao hoặc xử lý sớm rủi ro P2.
- **Xem trước và xuất báo cáo:** Xem báo cáo ở định dạng Preview, Markdown và HTML, đồng thời tải xuống hoặc in ra PDF.

## Tại sao nên xây dựng hệ thống quản lý SLA bằng AI và NocoBase?

Phần thực sự khó khăn của quản lý SLA không phải là đặt một hạn chót, mà là liên tục tính toán rủi ro dựa trên mức ưu tiên, hàng đợi và trạng thái hiện tại của phiếu, đồng thời cảnh báo nhóm trước khi phiếu thực sự vi phạm.

Nếu bạn xây dựng từ đầu bằng vibe coding thông thường, thường chỉ có được một danh sách phiếu trước. Sau đó phải tiếp tục bổ sung tính toán thời gian, logic trạng thái, quy tắc vi phạm, bảng điều khiển thời gian thực, phân quyền và theo dõi lịch sử — và càng thêm nhiều quy tắc, hệ thống càng khó bảo trì.

NocoBase có thể liên kết phiếu, mức ưu tiên, hàng đợi, hạn phản hồi và hạn giải quyết với nhau, đồng thời trình bày trạng thái SLA của mỗi phiếu qua các trường tính toán, quy trình làm việc, bộ lọc và bảng điều khiển.

Các nhóm có thể cấu hình các mục tiêu phản hồi và giải quyết khác nhau cho phiếu P1, P2, P3 và P4 theo tiêu chuẩn dịch vụ của mình, đồng thời đặt quy tắc độc lập cho các hàng đợi dịch vụ khác nhau.

AI tiếp tục giảm chi phí xây dựng và phân tích. Bạn có thể để AI agent tạo bảng phiếu, quy tắc SLA, trạng thái rủi ro, bảng điều khiển giám sát và trang thống kê, sau đó tiếp tục điều chỉnh giới hạn thời gian, mức ưu tiên và logic hiển thị thông qua giao diện no-code của NocoBase.

Một hệ thống quản lý SLA được xây dựng theo cách này không phải là trang giám sát một lần, mà là một hệ thống quản lý dịch vụ tiếp tục phát triển theo nhóm hỗ trợ, tiêu chuẩn dịch vụ và cam kết với khách hàng của bạn.

## FAQ

1. **Có thể đồng thời theo dõi cả SLA phản hồi lần đầu và SLA giải quyết không?**

Có. Mỗi phiếu có thể ghi lại riêng hạn phản hồi và hạn giải quyết.

Dựa trên thời gian tạo phiếu, thời gian phản hồi lần đầu và thời gian giải quyết cuối cùng, hệ thống có thể xác định liệu nhóm hỗ trợ hoặc kỹ thuật có phản hồi và giải quyết trong thời gian thỏa thuận hay không — thay vì chỉ đếm "đã đóng hay chưa" trong khi bỏ qua phản hồi lần đầu có kịp thời hay không.

2. **Hệ thống xác định phiếu là lành mạnh, có rủi ro hay đã vi phạm như thế nào?**

Hệ thống có thể đánh dấu phiếu là Met, On Track, At Risk hoặc Breached dựa trên thời gian hiện tại, mục tiêu SLA và tiến độ thực tế của phiếu.

Ví dụ, phiếu chưa hoàn thành có ít hơn hai giờ trước hạn chót có thể chuyển vào vùng At Risk; khi vượt quá hạn phản hồi hoặc giải quyết, phiếu sẽ tự động được đánh dấu là Breached.

3. **Có thể xem các vấn đề rủi ro cao trước khi phiếu thực sự vi phạm không?**

Có. Bảng điều khiển SLA đưa ra tập trung các phiếu At Risk đang tiếp cận hạn cuối, hiển thị mức ưu tiên, hàng đợi, thời gian đã trôi qua và thời gian còn lại.

Điều này giúp nhóm phân bổ lại nguồn lực trước khi thực sự vi phạm, thay vì chỉ phát hiện vấn đề sau khi khách hàng phàn nàn.

4. **Có thể đặt mục tiêu SLA khác nhau cho các mức ưu tiên khác nhau không?**

Có. P1 Critical, P2 High, P3 Medium và P4 Low đều có thể dùng mục tiêu phản hồi và giải quyết khác nhau.

Ví dụ, phiếu P1 có thể có thời gian phản hồi ngắn hơn, trong khi phiếu P3 hoặc P4 cho phép chu kỳ xử lý dài hơn. Các quy tắc cũng có thể tiếp tục phát triển theo cam kết với khách hàng và mức độ dịch vụ của riêng bạn.

5. **AI có thể phân tích rủi ro SLA và tạo đề xuất cho giai đoạn tiếp theo không?**

Có. AI có thể đọc trạng thái, mức ưu tiên, hàng đợi, thời gian phản hồi và thời gian giải quyết của phiếu để xác định các rủi ro SLA nghiêm trọng nhất hiện tại.

Ví dụ, báo cáo trong ảnh chụp màn hình có thể phát hiện tỷ lệ vi phạm quá cao đối với phiếu P1 và hàng đợi Infrastructure có nhiều phiếu không lành mạnh, sau đó đề xuất ưu tiên phục hồi P1, ổn định hạ tầng và giảm thiểu rủi ro P2 trong giai đoạn tiếp theo.

6. **Báo cáo phân tích SLA có thể xem trước và xuất ra không?**

Có. Sau khi AI tạo báo cáo, bạn có thể xem ở định dạng Preview, Markdown và HTML.

Báo cáo cũng có thể tải xuống dưới dạng Markdown hoặc HTML, hoặc in ra PDF — hữu ích cho retrospective dịch vụ, báo cáo khách hàng, họp hàng tuần nội bộ và giao tiếp với quản lý.

7. **Quy tắc SLA có thể tiếp tục phát triển khi chính sách dịch vụ thay đổi không?**

Có. Các nhóm có thể tiếp tục sửa đổi thời hạn mục tiêu theo mức ưu tiên, ngưỡng rủi ro, tiêu chí trạng thái và quy tắc hàng đợi.

Khi hợp đồng khách hàng, kế hoạch dịch vụ hoặc nhóm hỗ trợ thay đổi, bạn có thể điều chỉnh hệ thống hiện tại mà không cần phát triển lại toàn bộ logic SLA.

8. **Có thể theo dõi ai đã thay đổi trạng thái SLA không?**

Có. Bạn có thể bật lịch sử thao tác và nhật ký kiểm toán theo yêu cầu để ghi lại các thay đổi về mức ưu tiên, hạn chót, hàng đợi, trạng thái và cờ vi phạm của phiếu.

Khi hạn chót của phiếu bị gia hạn, mức ưu tiên được điều chỉnh hoặc hàng đợi được tái phân công, người quản lý có thể truy vết ai đã thực hiện thay đổi, khi nào và chính xác những gì đã thay đổi — ngăn dữ liệu SLA bị sửa đổi mà không có hồ sơ.

9. **Có thể hạn chế nhóm nào có thể xem và sửa dữ liệu SLA nào không?**

Có. NocoBase hỗ trợ cấu hình phân quyền theo vai trò, hàng đợi dịch vụ và phạm vi dữ liệu.

Ví dụ, nhân viên tuyến đầu chỉ có thể xử lý phiếu được giao cho mình; trưởng hàng đợi có thể xem rủi ro SLA trong hàng đợi của mình; người giám sát hỗ trợ có thể xem toàn bộ dữ liệu dịch vụ; và chỉ quản trị viên được ủy quyền mới có thể sửa đổi mục tiêu SLA và quy tắc đánh giá.

10. **Claude Code, Codex, Cursor hoặc OpenCode có thể giúp xây dựng hệ thống quản lý SLA không?**

Có. Các AI coding agent như Claude Code, Codex, Cursor và OpenCode có thể kết nối với NocoBase và tạo bảng phiếu, quy tắc mức ưu tiên, hạn phản hồi và giải quyết, trạng thái rủi ro và bảng điều khiển SLA từ các prompt ngôn ngữ tự nhiên.

Sau khi tạo xong, nhóm vẫn có thể điều chỉnh trường dữ liệu, quy tắc, trang và phân quyền thông qua giao diện no-code của NocoBase — mà không cần yêu cầu AI viết lại mọi thứ từ đầu mỗi khi có thay đổi.

11. **Điều này khác gì so với bảng điều khiển SLA được tạo bằng vibe coding thông thường?**

Vibe coding thông thường có thể nhanh chóng tạo ra một bộ thẻ chỉ số hay trang giám sát, nhưng khi đưa vào quản lý dịch vụ thực tế, vẫn cần tính toán hạn chót liên tục, cập nhật trạng thái rủi ro tự động, phân quyền thay đổi, lưu giữ lịch sử và hỗ trợ quy tắc phát triển lâu dài.

NocoBase giữ dữ liệu phiếu, tính toán thời gian, quy trình làm việc, phân quyền và báo cáo phân tích trong một hệ thống. AI xác định rủi ro và tạo đề xuất, trong khi NocoBase đảm bảo quy trình SLA vận hành ổn định, liên tục.

12. **Hệ thống này có phù hợp để quản lý SLA doanh nghiệp cấp sản xuất không?**

Có. Các kịch bản SLA đặc biệt cần giám sát thời gian thực, đánh giá tự động, kiểm soát truy cập và truy vết thay đổi — không chỉ là một báo cáo tĩnh.

Doanh nghiệp có thể bật quy trình làm việc, thông báo, lịch sử thao tác, nhật ký kiểm toán, SSO, API và tiện ích mở rộng plugin theo nhu cầu. So với bản demo SLA một lần, nó phù hợp hơn nhiều cho việc quản lý lâu dài hỗ trợ khách hàng, dịch vụ kỹ thuật và cam kết dịch vụ nội bộ.
