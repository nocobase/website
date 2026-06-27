---
title: "Hai Plugin Thương Mại Nay Đã Mã Nguồn Mở"
description: "Đề cập đến lý do mở mã nguồn, khả năng của plugin và các điều chỉnh cho khách hàng hiện tại."
---

Dựa trên phản hồi của người dùng, chúng tôi quyết định mã nguồn mở hai plugin workflow thương mại:

* [Tính toán JSON](https://v2.docs.nocobase.com/workflow/nodes/json-query)
* [Ánh xạ biến JSON](https://v2.docs.nocobase.com/workflow/nodes/json-variable-mapping)

## Tại sao lại mã nguồn mở?

Các plugin này là một trong những plugin được sử dụng thường xuyên nhất trong workflow và thường được yêu cầu sau các node SQL hoặc HTTP Request. Khi chúng là plugin thương mại, người dùng phiên bản cộng đồng không thể sử dụng đầy đủ node HTTP Request, điều này tạo ra trải nghiệm kém. Đó là lý do tại sao chúng tôi mã nguồn mở chúng.

## Tổng quan plugin

### Tính toán JSON

Xử lý JSON phức tạp được tạo ra bởi các node upstream, cho phép bạn tính toán, trích xuất hoặc định hình lại dữ liệu.

Các trường hợp sử dụng phổ biến bao gồm:

* Kết quả truy vấn SQL
* Dữ liệu trả về từ các yêu cầu HTTP  
Nó giúp chuyển đổi các đầu ra này thành các định dạng biến và giá trị trường cần thiết cho các node downstream.

### Ánh xạ biến JSON

Ánh xạ các cấu trúc JSON phức tạp thành các biến dễ sử dụng hơn trong các bước workflow tiếp theo.

Các trường hợp sử dụng phổ biến bao gồm:

* Trích xuất các trường chính từ JSON lồng nhau được trả về bởi API hoặc SQL
* Đổi tên trường hoặc điều chỉnh cấu trúc mảng
* Chuẩn bị các biến sạch hơn cho các node tiếp theo

Với plugin này, bạn tránh phải cấu hình lặp đi lặp lại các đường dẫn trường sâu trong mọi node.

## Điều chỉnh cho khách hàng hiện tại

Quyền lợi của bạn sẽ không thay đổi. Chúng tôi sẽ hoàn lại điểm plugin như sau:

* *Sử dụng trọn đời, nâng cấp 1 năm* → 2 điểm
* *Sử dụng & nâng cấp trọn đời* → 4 điểm

Những điều chỉnh này sẽ được hoàn tất cho tất cả khách hàng hiện tại trước ngày 23 tháng 11 năm 2025 và công ty mẹ của NocoBase sẽ đưa ra giải thích cuối cùng.

## Kết luận

Cảm ơn tất cả người dùng NocoBase và những người đóng góp mã nguồn mở. Phản hồi và vấn đề của bạn giúp chúng tôi cải thiện trong mỗi bản phát hành. Chúng tôi sẽ tiếp tục tiến nhanh hơn và cung cấp các khả năng mạnh mẽ hơn với mức giá thân thiện hơn.
