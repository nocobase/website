## Giới thiệu

Kết hợp AI agent yêu thích của bạn với NocoBase để nhanh chóng xây dựng hệ thống tự động hóa quy trình AI có thể tùy chỉnh, đáng tin cậy và liên tục phát triển — dùng để quản lý sự kiện kích hoạt kinh doanh, kiểm tra điều kiện, xử lý AI, cập nhật dữ liệu, kết quả thực thi và lịch sử chạy quy trình.

Bạn có thể sao chép prompt bên dưới và để AI agent tạo cấu trúc cơ bản của hệ thống tự động hóa quy trình AI trong NocoBase, sau đó điều chỉnh trực quan các trigger, điều kiện, node AI và hành động tiếp theo.

Hệ thống này phù hợp với các kịch bản như đề xuất bổ sung hàng tồn kho, phân loại ticket, phân tích điều khoản hợp đồng, tóm tắt cơ sở tri thức, xuất bản nội dung, đồng bộ tài sản, đề xuất onboarding nhân viên và bất kỳ trường hợp nào cần AI tham gia tự động vào quy trình kinh doanh.

**Danh sách quy trình AI:**

![](https://static-docs.nocobase.com/ai-workflow-automation-1-acl4wp-c-pv69l8.png)

**Kết quả thực thi quy trình:**

![](https://static-docs.nocobase.com/ai-workflow-automation-2-l0iqn5.png)

**Canvas quy trình trực quan:**

![](https://static-docs.nocobase.com/ai-workflow-automation-3-nvlnbj-c-o66xrw.png)

## Hệ thống tự động hóa quy trình AI giải quyết vấn đề gì?

Nhiều đội nhóm đã sử dụng AI để tạo nội dung, tóm tắt thông tin hoặc đưa ra đề xuất, nhưng những thao tác này thường dừng lại trong các cuộc trò chuyện một lần. Người dùng phải thủ công sao chép dữ liệu, gọi AI, kiểm tra kết quả và ghi kết quả ngược lại vào hệ thống kinh doanh — toàn bộ quy trình vẫn phụ thuộc vào thao tác thủ công.

Với hệ thống tự động hóa quy trình AI, AI có thể tham gia trực tiếp vào các quy trình kinh doanh hiện có. Ví dụ, khi hồ sơ tồn kho thay đổi, đề xuất bổ sung hàng được tạo tự động; khi bài viết cơ sở tri thức được tạo, tóm tắt được tạo tự động; khi ticket được gửi, loại được phân loại tự động; khi hợp đồng vào giai đoạn phê duyệt, thay đổi điều khoản được tóm tắt tự động.

Mỗi quy trình có thể được kích hoạt bởi một sự kiện kinh doanh và thực thi các bước tính toán, kiểm tra điều kiện, LLM, nhân viên AI, cập nhật dữ liệu hoặc tạo bản ghi theo thứ tự đã cấu hình. Đầu vào, hướng dẫn, đầu ra và trạng thái ghi ngược của AI đều được lưu trong hồ sơ thực thi.

Theo cách này, AI không chỉ là công cụ chat độc lập nữa — nó trở thành node thực thi tự động bên trong quy trình kinh doanh. Các đội nhóm có thể thấy rõ ràng tại sao mỗi quy trình được kích hoạt, AI đã xử lý gì, tạo ra kết quả gì và liệu dữ liệu có được cập nhật thành công không.

## Tính năng cốt lõi

### Quản lý quy trình AI

- **Quản lý quy trình tập trung:** Xem tên quy trình, loại trigger, trạng thái bật và tổng số lần thực thi tại một nơi.
- **Kiểm soát bật/tắt:** Nhanh chóng bật hoặc tắt các quy trình cụ thể theo nhu cầu kinh doanh.
- **Tổng quan dữ liệu chạy:** Theo dõi số quy trình đã bật, quy trình AI và tổng số lần thực thi để hiểu mức độ sử dụng tự động hóa.

### Sự kiện kinh doanh và chế độ thực thi

- **Trigger sự kiện dữ liệu:** Tự động khởi động quy trình khi bản ghi được tạo, cập nhật hoặc các sự kiện bộ sưu tập khác xảy ra.
- **Thực thi thủ công:** Chạy một quy trình cụ thể bằng tay để kiểm tra hoặc xử lý dữ liệu kinh doanh đặc biệt.
- **Chạy bất đồng bộ:** Chuyển các tác vụ AI chạy lâu sang nền để giảm ảnh hưởng đến thao tác hiện tại của người dùng.

### Sắp xếp quy trình trực quan

- **Canvas node:** Kết nối trigger, node xử lý và node kết thúc trên canvas trực quan để thấy toàn bộ quy trình một cái nhìn.
- **Nhánh điều kiện:** Quyết định có gọi AI không — và hành động tiếp theo nào sẽ chạy — dựa trên giá trị trường hoặc quy tắc kinh doanh.
- **Cấu hình thứ tự thực thi:** Linh hoạt kết hợp các node tính toán, điều kiện, xử lý AI và thao tác dữ liệu.

### Node AI và xử lý dữ liệu

- **Node LLM:** Xử lý các tác vụ được xác định rõ như tóm tắt nội dung, phân loại, trích xuất thông tin và tạo văn bản.
- **Node nhân viên AI:** Hoàn thành xử lý kinh doanh toàn diện hơn dựa trên vai trò, prompt và công cụ đã cài đặt sẵn.
- **Node thao tác dữ liệu:** Tạo bản ghi, cập nhật trường và ghi ngược kết quả AI vào dữ liệu kinh doanh.

### Kết quả thực thi và theo dõi lịch sử

- **Chi tiết thực thi đầy đủ:** Hiển thị đầu vào trigger, hướng dẫn AI, đầu ra mô hình, trạng thái node và kết quả ghi ngược cuối cùng.
- **Lọc lịch sử thực thi:** Xem lại thời gian chạy, thông số đầu vào và trạng thái của từng lần chạy theo quy trình.
- **Chẩn đoán vấn đề:** Dùng đầu vào và đầu ra cấp node để xác định lỗi xảy ra ở điều kiện, lệnh gọi AI hay bước cập nhật dữ liệu.

### Kiểm tra và bảo trì liên tục

- **Chạy kiểm tra thủ công:** Thực thi quy trình trước khi bật để xác minh điều kiện, đầu ra AI và ghi ngược dữ liệu.
- **Quản lý phiên bản quy trình:** Lưu các phiên bản cấu hình khác nhau để điều chỉnh liên tục và quay lại phiên bản cũ.
- **Mở rộng node linh hoạt:** Thêm điều kiện mới, khả năng AI và hành động tiếp theo khi kinh doanh phát triển, không cần xây dựng lại toàn bộ quy trình.

## Tại sao xây dựng hệ thống tự động hóa quy trình bằng AI và NocoBase?

Nếu xây dựng từ đầu bằng vibe coding đơn thuần, mỗi kịch bản tự động hóa AI mới thường phải triển khai lại lắng nghe sự kiện, truy vấn dữ liệu, gọi mô hình, logic điều kiện, xử lý lỗi và ghi ngược kết quả. Khi số quy trình tăng lên, code ngày càng phức tạp và việc theo dõi thực thi trở nên khó khăn.

NocoBase đã cung cấp các tính năng nền tảng của hệ thống kinh doanh — mô hình dữ liệu, quy trình làm việc, kiểm tra điều kiện, cập nhật bản ghi, phân quyền và lịch sử thao tác. Bạn có thể thả trực tiếp node LLM hoặc nhân viên AI vào những tính năng này, để AI làm việc với dữ liệu và quy trình kinh doanh thực tế thay vì đứng ngoài hệ thống.

Ví dụ, sau khi bản ghi tồn kho được tạo, đề xuất bổ sung tồn kho có thể được tạo tự động; sau khi bài viết cơ sở tri thức được thêm, tóm tắt có thể được tạo tự động; sau khi trạng thái hợp đồng thay đổi, AI có thể tóm tắt thay đổi giai đoạn rồi tạo bản ghi kiểm toán. Tất cả các quy trình này có thể được xem và điều chỉnh trên canvas trực quan.

Đầu vào, hướng dẫn AI, đầu ra và trạng thái cập nhật dữ liệu của mỗi lần thực thi đều được ghi lại, giúp đội nhóm dễ dàng xem xét kết quả và định vị vấn đề. Đối với các đội nhóm đề cao khả năng truy xuất, bảo trì và phát triển lâu dài, NocoBase là lựa chọn tốt hơn để xây dựng tự động hóa quy trình AI đưa vào sử dụng kinh doanh thực tế.

## FAQ

1. **Tự động hóa quy trình AI khác gì so với quy trình làm việc thông thường?**

Quy trình làm việc thông thường chủ yếu thực thi các quy tắc đã được xác định trước, như kiểm tra điều kiện, gửi thông báo, tạo bản ghi hoặc cập nhật trường.

Quy trình AI có thể thêm node LLM hoặc nhân viên AI vào quy trình, để hệ thống thực hiện tóm tắt, phân loại, trích xuất thông tin, tạo nội dung và đưa ra đề xuất dựa trên bối cảnh kinh doanh. AI xử lý các tác vụ phi cấu trúc, còn quy trình làm việc kiểm soát điều kiện trigger, thứ tự thực thi và ghi ngược kết quả.

2. **Quy trình AI khác gì so với script tự động hóa được tạo bằng vibe coding?**

Vibe coding có thể nhanh chóng tạo ra script tự động hóa, nhưng khi kịch bản kinh doanh tăng lên, trigger sự kiện, gọi mô hình, phân quyền dữ liệu, xử lý lỗi, ghi nhật ký và bảo trì phiên bản đều cần phát triển lại nhiều lần.

NocoBase đặt node AI bên trong mô hình dữ liệu và hệ thống quy trình làm việc hiện có. Các đội nhóm có thể cấu hình trigger, nhánh điều kiện, xử lý AI và thao tác dữ liệu trên canvas trực quan và xem lại từng lần thực thi — phù hợp hơn để quản lý tự động hóa kinh doanh chạy liên tục so với bảo trì các script một lần rời rạc.

3. **Những sự kiện kinh doanh nào có thể trigger quy trình AI?**

Quy trình AI có thể được trigger tự động bởi các sự kiện bộ sưu tập như tạo hoặc cập nhật bản ghi, hoặc được thực thi thủ công bởi người dùng.

Ví dụ, tạo đề xuất bổ sung hàng sau khi hồ sơ tồn kho được cập nhật, phân loại loại sự cố sau khi ticket được tạo, tạo tóm tắt sau khi bài viết cơ sở tri thức được thêm vào, hoặc tự động phân tích thay đổi điều khoản sau khi hợp đồng vào giai đoạn cụ thể.

4. **Có thể đặt điều kiện trước khi gọi AI không?**

Có. Bạn có thể kiểm tra trước xem dữ liệu có đáp ứng điều kiện được chỉ định không trước khi vào node LLM hoặc nhân viên AI.

Ví dụ, chỉ tạo đề xuất bổ sung khi tồn kho giảm xuống dưới mức an toàn, chỉ gọi phân tích AI cho ticket ưu tiên cao, hoặc chỉ tạo bản ghi kiểm toán sau khi hợp đồng vào giai đoạn phê duyệt. Điều này giảm các lệnh gọi mô hình không cần thiết và giữ quy trình phù hợp với quy tắc kinh doanh thực tế.

5. **Kết quả do AI tạo ra có thể được ghi ngược vào hệ thống kinh doanh trực tiếp không?**

Có. Sau khi AI hoàn thành xử lý, quy trình có thể tiếp tục với node cập nhật bản ghi hoặc tạo bản ghi, lưu tóm tắt, phân loại, đề xuất, thẻ hoặc kết quả phân tích vào các bảng tương ứng.

Ví dụ, ghi ngược đề xuất tồn kho vào hồ sơ tồn kho, lưu kết quả phân loại ticket vào trường ticket, hoặc tạo bản ghi kiểm toán mới dựa trên kết quả phân tích hợp đồng.

6. **Có thể xem AI đã dùng đầu vào nào và tạo kết quả gì mỗi lần không?**

Có. Chi tiết thực thi hiển thị đầu vào trigger, hướng dẫn được sử dụng bởi node AI, đầu ra mô hình, kết quả node tiếp theo và trạng thái ghi ngược dữ liệu cuối cùng.

Điều này có nghĩa là các đội nhóm không chỉ thấy quy trình có thành công không, mà còn biết tại sao AI tạo ra một kết quả cụ thể — hữu ích để xác minh đầu ra, tinh chỉnh prompt và xử lý sự cố bất thường.

7. **Làm thế nào để định vị vấn đề khi quy trình AI thất bại?**

Mỗi lần chạy lưu thời gian thực thi, trạng thái node, thông số đầu vào và kết quả đầu ra. Các đội nhóm có thể dùng lịch sử thực thi để xác định lỗi xảy ra ở bước trigger điều kiện, tính toán, kiểm tra điều kiện, gọi AI hay cập nhật dữ liệu.

So với các script độc lập chỉ hiển thị thông báo lỗi cuối cùng, hồ sơ thực thi cấp node này phù hợp hơn nhiều để gỡ lỗi các quy trình kinh doanh chạy lâu dài.

8. **Có thể dùng cả node LLM và nhân viên AI cùng lúc không?**

Có. Node LLM phù hợp cho các tác vụ nội dung được xác định rõ, mục đích đơn như tóm tắt, phân loại, trích xuất hoặc tạo văn bản.

Nhân viên AI có thể được cấu hình với vai trò, prompt và các công cụ có sẵn, phù hợp cho các tác vụ kết hợp dữ liệu kinh doanh với nhiều bước thao tác. Các đội nhóm có thể chọn một trong hai dựa trên độ phức tạp của quy trình, hoặc kết hợp cả hai trong các quy trình khác nhau.

9. **Claude Code, Codex, Cursor hoặc OpenCode có thể giúp xây dựng các quy trình này không?**

Có. AI coding agent như Claude Code, Codex, Cursor và OpenCode có thể kết nối với NocoBase và tạo cấu trúc dữ liệu, node quy trình, logic điều kiện và các trang liên quan từ prompt ngôn ngữ tự nhiên.

Sau khi quy trình được tạo, các đội nhóm vẫn có thể xem, kiểm tra và điều chỉnh trong giao diện trực quan của NocoBase thay vì phải dựa vào AI để tiếp tục viết lại code.

10. **Có thể kiểm soát ai có thể xem, chạy hoặc sửa đổi quy trình AI không?**

Có. NocoBase có thể kiểm soát theo vai trò hồ sơ thực thi nào người dùng có thể xem, quy trình nào họ có thể chạy thủ công và liệu họ có thể sửa đổi cấu hình quy trình không.

Ví dụ, người dùng kinh doanh thông thường chỉ có thể xem kết quả liên quan đến mình, quản trị viên quy trình có thể xem lịch sử thực thi và điều chỉnh node, còn quản trị viên hệ thống có thể quản lý cấu hình mô hình, phiên bản quy trình và phân quyền.

11. **Quy trình AI có thể được phát triển và bảo trì lâu dài không?**

Có. Khi quy tắc kinh doanh thay đổi, bạn có thể tiếp tục điều chỉnh điều kiện trigger, prompt, mô hình, logic nhánh và hành động tiếp theo, hoặc thêm node và thay thế phương pháp xử lý.

Phiên bản quy trình, lịch sử thực thi và kết quả node giúp các đội nhóm xác minh hiệu quả của các thay đổi, tránh phải xây dựng lại toàn bộ script tự động hóa mỗi khi yêu cầu thay đổi.

12. **Quy trình AI có phù hợp để sử dụng trong doanh nghiệp thực tế không?**

Có — đặc biệt phù hợp với các kịch bản tự động hóa cần vận hành ổn định, quy trình có thể truy xuất và kết quả có thể xác minh.

NocoBase có thể kết hợp quản lý phân quyền, phiên bản quy trình, lịch sử thực thi, nhật ký thao tác, nhật ký kiểm toán, SSO cấp doanh nghiệp, API và mở rộng plugin theo nhu cầu. So với các demo tự động hóa AI một lần, phù hợp hơn nhiều để đảm nhận các quy trình kinh doanh cần bảo trì liên tục và mở rộng dần dần.
