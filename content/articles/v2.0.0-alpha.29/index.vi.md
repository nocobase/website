---
title: "NocoBase v2.0.0-alpha.29: Sửa thứ tự middlewares của `resourceManager`"
description: "Ghi chú phát hành v2.0.0-alpha.29"
---

### 🐛 Sửa lỗi

- **[client]**
  - Đã khắc phục sự cố khiến biến trường liên kết trong biểu mẫu hiện tại không thể được nhận dạng chính xác, đảm bảo xử lý dữ liệu chính xác trong biểu mẫu. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) bởi @gchust

  - Đã khắc phục sự cố khi gán một mảng làm giá trị hoặc giá trị mặc định cho trường "toOne" dẫn đến lỗi. Điều này đảm bảo xử lý đúng đắn kết quả phân giải biến, cải thiện độ ổn định và độ chính xác của hệ thống. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) bởi @gchust

- **[Kiểm soát truy cập]** Sửa thứ tự middleware của `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) bởi @2013xile
