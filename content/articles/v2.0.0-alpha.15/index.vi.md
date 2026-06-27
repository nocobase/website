---
title: "NocoBase v2.0.0-alpha.15: Thêm nhà cung cấp LLM mới"
description: "Ghi chú phát hành của v2.0.0-alpha.15"
---

### 🚀 Cải tiến

- **[client]** hỗ trợ trường liên kết trong mô hình trường JS ([#7618](https://github.com/nocobase/nocobase/pull/7618)) của @gchust

- **[AI employees]**
  - Tái cấu trúc Nhà cung cấp LLM OpenAI thành hai nhà cung cấp riêng biệt để hỗ trợ API Completions và Responses của OpenAI. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) của @cgyrock

  - Thêm nhà cung cấp LLM mới Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) của @ReLaMi96

### 🐛 Sửa lỗi

- **[Workflow: Phê duyệt]**
  - Sửa lỗi số lượng nhiệm vụ không được cập nhật sau khi thêm người được chỉ định của @mytharcher

  - Sửa lỗi hết thời gian chờ giao dịch do các giao dịch không rollback đúng cách khi xảy ra lỗi cơ sở dữ liệu sau khi gửi phê duyệt của @mytharcher
