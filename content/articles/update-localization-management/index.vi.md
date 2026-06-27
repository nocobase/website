---
title: "Cập nhật (quản lý bản địa hóa): Sắp xếp không gian tên văn bản theo mô-đun"
description: "Tối ưu hóa quản lý bản địa hóa của bạn với không gian tên văn bản dựa trên mô-đun của NocoBase. Hướng dẫn này trình bày chi tiết cách tiếp cận mới để tổ chức các văn bản dịch theo mô-đun, loại bỏ các vấn đề trùng lặp và tăng cường tùy chỉnh. Tìm hiểu về các thay đổi, các bước di chuyển và tác động đến quy trình phát triển của bạn."
---

## Bối cảnh

* Plugin quản lý bản địa hóa đồng bộ hóa văn bản gốc bằng cách đặt chúng trong cùng một không gian tên (module). Khi gặp các văn bản giống hệt nhau trong các plugin khác nhau, nó sẽ loại bỏ các bản sao và giữ lại bản dịch được tìm thấy trong [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) để sử dụng tiếp.
* NocoBase client tạo một phiên bản `i18n` với tùy chọn `fallbackNS: "client"` ([tham khảo](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)). Do đó, trong quá trình phát triển plugin, một số văn bản đã tồn tại trong `packages/core/client/src/locale` có thể được bỏ qua khỏi các tệp ngôn ngữ của plugin.

Tuy nhiên, hai cài đặt này lại gây ra một vấn đề. Các văn bản gốc giống nhau chỉ có thể được liên kết với một bản dịch và không thể khác nhau giữa các không gian tên. Ví dụ: nếu người dùng tạo nội dung có cùng văn bản với bản dịch hiện có, chẳng hạn như "Users" với bản dịch tiếng Trung là "用户", nó sẽ được hiển thị là "用户" trong môi trường "zh-CN". Điều này xảy ra ngay cả khi người dùng muốn hiển thị văn bản gốc thay vì bản dịch.

## Thay đổi

Văn bản dịch được phân loại dựa trên các module tương ứng của chúng (menu, bộ sưu tập & trường, các plugin khác), không có loại bỏ trùng lặp. Trên trang quản lý bản địa hóa, văn bản có thể được lọc bằng menu thả xuống bằng cách chọn module tương ứng.

![trang quản lý bản địa hóa](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## Cách di chuyển

Thực hiện theo [quy trình nâng cấp](https://docs.nocobase.com/welcome/getting-started/upgrading) thông thường để nâng cấp hệ thống. Sau đó, chuyển sang môi trường ngôn ngữ tương ứng và trên trang quản lý bản địa hóa, đồng bộ hóa văn bản dịch bằng cách nhấp vào nút **"Đồng bộ"**.

![Cách di chuyển](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## Thay đổi mang tính phá vỡ

### Văn bản dịch không còn được loại bỏ trùng lặp

Các văn bản trùng lặp giữa các module yêu cầu bản dịch riêng biệt.

![Văn bản dịch không còn được loại bỏ trùng lặp](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### Đã xóa tùy chọn `fallbackNS` khỏi phiên bản `i18n`

Phiên bản `i18n` của client không còn bao gồm tùy chọn `fallbackNS: "client"`.

Đối với các nhà phát triển plugin, nếu các tệp ngôn ngữ trong một plugin bỏ qua một số văn bản đã có trong client lõi, thì cần phải bổ sung chúng. Nếu bạn vẫn muốn sử dụng lại nội dung từ `packages/core/client/src/locale`, hãy truyền các tham số thích hợp khi sử dụng, ví dụ:

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
