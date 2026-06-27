---
title: "NocoBase 1.3: Nguồn dữ liệu REST API, phiên bản di động v2 và nhiều tính năng khác"
description: "NocoBase 1.3 giới thiệu nguồn dữ liệu REST API và MSSQL, hỗ trợ mở pop-up qua URL, cấu hình động các thành phần trường, phiên bản di động nâng cao, xác thực WeCom, mảng nhiều-nhiều và nút tính toán ngày mới trong quy trình làm việc."
---

Bắt đầu từ phiên bản 1.3, NocoBase cung cấp hai nhánh chính: **main** và **next**.

- Nhánh **main** (phiên bản beta) tập trung vào sửa lỗi, đảm bảo phiên bản ổn định cho người dùng.
- Nhánh **next** (phiên bản alpha) chứa một số tính năng mới chưa được phát hành. Phiên bản này không ổn định và dành cho các nhà phát triển hoặc người thử nghiệm trải nghiệm sớm các tính năng mới hoặc tiến hành kiểm tra tương thích.

Các tính năng mới trong bản beta 1.3 bao gồm:

## Core

### Hỗ trợ mở pop-up qua URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Tài liệu tham khảo:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Hỗ trợ mở pop-up dưới dạng trang

Một tùy chọn "trang" mới đã được thêm vào cho các thao tác pop-up.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Tài liệu tham khảo:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Trường hỗ trợ cấu hình thuộc tính kiểu dáng

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Tài liệu tham khảo:

- [Cài đặt trường / Kiểu dáng](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown và iframe HTML hỗ trợ công cụ mẫu Handlebars

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Tài liệu tham khảo:

- [Công cụ mẫu Markdown Handlebars](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Công cụ mẫu Iframe HTML Handlebars](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Hỗ trợ cấu hình động các thành phần trường

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Tài liệu tham khảo:

- [Cài đặt trường / Thành phần trường](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Plugin mẫu / Thành phần trường có giá trị](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### Nguồn dữ liệu REST API

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Tài liệu tham khảo:

- [Nguồn dữ liệu / Nguồn dữ liệu REST API](https://docs.nocobase.com/handbook/data-source-rest-api)

### Nguồn dữ liệu ngoài MSSQL

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Tài liệu tham khảo:

- [Nguồn dữ liệu / Cơ sở dữ liệu ngoài / MSSQL ngoài](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Tài liệu tham khảo:

- [Mobile](https://docs.nocobase.com/handbook/mobile)

### Nhiều-nhiều (mảng)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Tài liệu tham khảo:

- [Nhiều-nhiều (mảng)](https://docs.nocobase.com/handbook/field-m2m-array)

### Xác thực: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Tài liệu tham khảo:

- [Xác thực: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Workflow: Nút tính toán ngày

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Tài liệu tham khảo:

- [Workflow: Nút tính toán ngày](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Các thay đổi quan trọng

### Biến môi trường `DB_TIMEZONE` đổi thành `TZ`

Biến môi trường `TZ` mới đã được thêm vào để đặt múi giờ của ứng dụng, mặc định là múi giờ của hệ điều hành. Biến `DB_TIMEZONE` cũ vẫn tương thích nhưng không còn được khuyến khích sử dụng.

Tham khảo:

- [Biến môi trường / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
