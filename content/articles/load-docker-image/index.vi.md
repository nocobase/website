---
title: "Cách tải lên hình ảnh Docker lên máy chủ nội bộ"
description: "Bài viết hướng dẫn người dùng cách tải hình ảnh Docker trong NocoBase để dễ dàng di chuyển phiên bản và triển khai ngoại tuyến."
---

## 1. Tải xuống Docker image

Chạy lệnh sau trong terminal cục bộ của bạn:

```bash
docker pull registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 2. Lưu Docker image dưới dạng file tar

Sau khi quá trình tải xuống hoàn tất, chạy lệnh sau để lưu image dưới dạng file tar:

```bash
docker save -o nocobase-latest.tar registry.cn-shanghai.aliyuncs.com/nocobase/nocobase:latest
```

## 3. Tải file tar lên máy chủ

Chạy lệnh sau trong terminal cục bộ của bạn để tải `nocobase-latest.tar` lên máy chủ:

```bash
scp nocobase-latest.tar user@ip:/home/user/
```

## 4. Nạp Docker image trên máy chủ

Kết nối đến máy chủ qua SSH và nạp Docker image:

```bash
ssh user@ip
docker load -i /home/user/nocobase-latest.tar
```

Sau khi hoàn thành các bước này, Docker image sẽ được nhập thành công vào máy chủ nội bộ.
