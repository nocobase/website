---
title: "Cách sao lưu và khôi phục NocoBase"
description: "Việc sao lưu và khôi phục trong phiên bản mới nên được xử lý như thế nào? Bài viết này sẽ giới thiệu chi tiết về giải pháp sao lưu mới."
---

## Bối cảnh

Bắt đầu từ NocoBase v0.19, chúng tôi đã giới thiệu plugin `@nocobase/plugin-backup-restore` để sao lưu và phục hồi ứng dụng. Tuy nhiên, trải nghiệm người dùng thực tế chưa được lý tưởng, với các vấn đề chính sau:

1. Plugin không hỗ trợ sao lưu và phục hồi các siêu dữ liệu cấp cơ sở dữ liệu như giá trị mặc định, chỉ mục duy nhất, v.v.
2. Các thành phần như view cơ sở dữ liệu, stored procedure, function, trigger không thể được sao lưu hoặc phục hồi.
3. Mỗi biểu mẫu plugin yêu cầu cấu hình riêng `dumpRules`, và nhà phát triển plugin có thể cần triển khai logic tùy chỉnh. Nếu không, việc sao lưu và phục hồi dễ bị thất bại.
4. Thiết kế nhóm sao lưu phức tạp và có độ khó học cao. Việc lựa chọn không phù hợp có thể dẫn đến sao lưu thất bại hoặc mất dữ liệu.
5. Quá trình sao lưu và phục hồi diễn ra ở lớp ứng dụng. Nếu ứng dụng không khởi động được, việc sao lưu hoặc phục hồi cũng sẽ thất bại.

Sau khi cân nhắc kỹ lưỡng, bắt đầu từ phiên bản v1.4, chúng tôi đã quyết định ngừng sử dụng plugin này. Vậy, việc sao lưu và phục hồi nên được xử lý như thế nào trong phiên bản mới? Bài viết này sẽ giới thiệu chi tiết về giải pháp sao lưu mới.

## Dữ Liệu Nào Cần Được Sao Lưu?

Trong quá trình sao lưu và phục hồi NocoBase, các loại dữ liệu sau đây chủ yếu được liên quan:

* **Dữ liệu cơ sở dữ liệu chính**: Các loại cơ sở dữ liệu chính được hỗ trợ bao gồm PostgreSQL, MySQL, MariaDB và KingbaseES.
* **Dữ liệu cơ sở dữ liệu bên ngoài**: Các loại cơ sở dữ liệu bên ngoài được hỗ trợ bao gồm PostgreSQL, MySQL, MariaDB, MSSQL, Oracle và KingbaseES.
* **Dữ liệu cơ sở dữ liệu ứng dụng con**: Mỗi ứng dụng con là một cơ sở dữ liệu độc lập. Nếu sử dụng PostgreSQL, các ứng dụng con khác nhau cũng có thể được phân biệt bằng schemas.
* **Dữ liệu thư mục lưu trữ**: Bạn có thể sao lưu toàn bộ thư mục hoặc chỉ một số dữ liệu quan trọng cụ thể, chẳng hạn như:
  * **Dữ liệu tệp đính kèm**: Các tệp trong thư mục `./storage/uploads`, đây là bộ nhớ cục bộ cho trình quản lý tệp.
  * **Mã plugin**: Các plugin trong thư mục `./storage/plugins`, bao gồm plugin thương mại và plugin của bên thứ ba.

## Quy Trình Sao Lưu và Phục Hồi

### 1. Sao Lưu Dữ Liệu Cơ Sở Dữ Liệu

Các lệnh sao lưu cho các cơ sở dữ liệu khác nhau như sau:

#### PostgreSQL

```bash
pg_dump -U [tên-người-dùng] -h [máy-chủ] -p [cổng] -F c -b --quote-all-identifiers -f [đường-dẫn-tệp-sao-lưu] [tên-cơ-sở-dữ-liệu]
```

#### MySQL/MariaDB

```bash
mysqldump -u [tên-người-dùng] -p -h [máy-chủ] -P [cổng] --databases [tên-cơ-sở-dữ-liệu] --replace --single-transaction --column-statistics=0 --skip-lock-tables --routines --triggers > [đường-dẫn-tệp-sao-lưu].sql
```

### 2. Phục Hồi Bản Sao Lưu Vào Cơ Sở Dữ Liệu Của Ứng Dụng Đích

Các lệnh phục hồi cho các cơ sở dữ liệu khác nhau như sau:

#### PostgreSQL

```bash
pg_restore -U [tên-người-dùng] -h [máy-chủ] -p [cổng] -d [tên-cơ-sở-dữ-liệu] --clean --if-exists --no-owner [đường-dẫn-tệp-sao-lưu]
```

#### MySQL/MariaDB

```bash
mysql -u [tên-người-dùng] -p -h [máy-chủ] -P [cổng] [tên-cơ-sở-dữ-liệu] < [đường-dẫn-tệp-sao-lưu].sql
```

### 3. Ghi Đè Bộ Nhớ Lưu Trữ Của Ứng Dụng Đích Bằng Bộ Nhớ Lưu Trữ Sao Lưu

```bash
# 1. Sao lưu thư mục /app2/storage/ vào /app2/storage-bak/
mv /app2/storage /app2/storage-bak

# 2. Sao chép tất cả nội dung từ /app1/storage/ vào /app2/storage/
cp -r /app1/storage/. /app2/storage/
```

### 4. Thực Thi Lệnh Nâng Cấp và Khởi Động Ứng Dụng

```bash
# Nâng cấp ứng dụng
yarn nocobase upgrade

# Khởi động ứng dụng trong môi trường production
yarn start

# Khởi động ứng dụng trong môi trường phát triển cục bộ
yarn dev
```

Lưu ý:

* Nếu bạn đang sử dụng Docker, chỉ cần khởi động lại container.

## Plugin Quản Lý Sao Lưu

Bắt đầu từ NocoBase v1.4, người dùng phiên bản Professional hoặc Enterprise có thể trực tiếp sử dụng plugin [Quản Lý Sao Lưu](https://docs.nocobase.com/handbook/backups) hoàn toàn mới để dễ dàng quản lý việc sao lưu và phục hồi dữ liệu ứng dụng.
