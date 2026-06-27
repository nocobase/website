---
title: "NocoBase v1.6.0-alpha.18: Hỗ trợ giới hạn IP"
description: "Ghi chú phát hành phiên bản v1.6.0-alpha.18"
---

### 🎉 Tính năng mới

- **[WEB client]** Hỗ trợ cấu hình quyền cho các tab trang và thêm trang quản lý route ([#5955](https://github.com/nocobase/nocobase/pull/5955)) bởi @zhangzhonghe
Tham khảo: [Routes](https://docs.nocobase.com/handbook/routes)
- **[IP restriction]** Hỗ trợ giới hạn IP. bởi @sheldon66
Tham khảo: [IP restriction](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Cải tiến

- **[server]**
  - Di chuyển AesEncryptor vào core ([#6132](https://github.com/nocobase/nocobase/pull/6132)) bởi @chenos

  - 1. Thêm middleware máy chủ để trích xuất địa chỉ IP của client.<br />2. Khắc phục sự cố tải lại vô hạn khi một IP bị chặn.<br />3. Thêm tiêu đề HTTP `X-Forwarded-For` trong proxy để cho phép chuyển tiếp cho việc gỡ lỗi cục bộ. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) bởi @sheldon66

### 🐛 Sửa lỗi

- **[Authentication]** Cập nhật quy tắc di chuyển cho token đã cấp và cấu hình chính sách token. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) bởi @sheldon66
