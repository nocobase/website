---
title: "Kiến trúc quản trị đơn giản hóa: Xây dựng danh mục ứng dụng với NocoBase"
description: "Mục tiêu là chứng minh tiềm năng và sự dễ dàng của NocoBase trong việc phát triển ứng dụng web mà không cần viết mã."
---

📝 **Lưu ý:** Bài viết này được cập nhật lần cuối vào ngày 23 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Bài blog này được sản xuất bởi Leandro Martins và được xuất bản lần đầu tại [Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#).

Mục tiêu là chứng minh tiềm năng và sự dễ dàng của [NocoBase](https://www.nocobase.com/) trong việc phát triển các ứng dụng web mà không cần viết code. Là một nghiên cứu điển hình, tôi sẽ tạo một danh mục ứng dụng để hỗ trợ quản trị kiến trúc. Trường hợp này sẽ bao gồm việc mô hình hóa, cài đặt, tạo bảng, menu, biểu mẫu, biểu đồ và luồng công việc sử dụng các tính năng của NocoBase.

Đối với bài viết này, chúng tôi sẽ sử dụng các công nghệ sau: NocoBase, Postgres và Docker.

---

💬 Này, bạn đang đọc blog của NocoBase. NocoBase là nền tảng phát triển không-code/low-code mạnh mẽ nhất, được hỗ trợ bởi AI, để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó hoàn toàn tự lưu trữ, dựa trên plugin và thân thiện với nhà phát triển. → [Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

## **NocoBase là gì?**

[NocoBase](https://www.nocobase.com/) là một nền tảng mã nguồn mở được viết bằng JavaScript, sử dụng NodeJS, TypeScript và AntDesign, được thiết kế để tạo các ứng dụng tùy chỉnh mà không cần viết code. Đây là một giải pháp backend low-code cho phép tạo trực quan các bảng, biểu mẫu tùy chỉnh, tự động hóa luồng công việc và giao diện phù hợp.

![NocoBase là gì?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **Các điểm nổi bật chính của NocoBase**:

* **Cộng đồng năng động**: Một diễn đàn rất năng động để hỗ trợ phát triển plugin và khắc phục sự cố.
* **Mã nguồn được xem xét liên tục**: Các bản cập nhật thường xuyên với sự đóng góp trên GitHub, tự hào với hơn 13k sao.
* **Khả năng tương thích cơ sở dữ liệu**: Hỗ trợ các cơ sở dữ liệu quan hệ chính như Postgres và MySQL.
* **Mô hình hóa dữ liệu trực quan**: Xác định bảng và dữ liệu một cách trực quan bằng plugin Cơ sở dữ liệu chính.
* **Thư viện plugin phong phú**: Cung cấp nhiều plugin miễn phí và trả phí, với khả năng phát triển các plugin tùy chỉnh.

* **Nhân viên AI được nhúng trong hệ thống**: Tích hợp liền mạch các khả năng AI vào giao diện người dùng, luồng công việc kinh doanh và bối cảnh dữ liệu, cho phép AI được áp dụng thực tế trong các tình huống doanh nghiệp thực tế.

![Các điểm nổi bật chính của NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **Tổng quan nghiên cứu điển hình**

Để giới thiệu một số tính năng của NocoBase, chúng tôi sẽ tạo một nghiên cứu điển hình có tên *Cổng thông tin Kiến trúc*. Cổng thông tin này được thiết kế để tổ chức dữ liệu về các ứng dụng của một tổ chức, với các chức năng sau:

* **Danh mục ứng dụng**.
* **Lời nhắc cập nhật**, chẳng hạn như nâng cấp phiên bản và gia hạn chứng chỉ.
* **Danh mục API** cho các hệ thống của tổ chức.
* **Biểu đồ** để trực quan hóa dữ liệu sâu sắc.

![Tổng quan nghiên cứu điển hình.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **Các giai đoạn phát triển**

### **Mô hình hóa dữ liệu**

Bước đầu tiên là ánh xạ và xác định các trường chúng tôi sẽ đưa vào Cổng thông tin Kiến trúc. Dưới đây là một ví dụ:

```
1. Danh mục ứng dụng

Ứng dụng:
id: Định danh duy nhất.
name: Tên ứng dụng.
description: Mô tả chi tiết về ứng dụng.
stack: Công nghệ được sử dụng.
owner: Người hoặc nhóm chịu trách nhiệm.
created_at: Ngày tạo.
last_updated: Ngày cập nhật lần cuối.

Lời nhắc (Liên kết với Ứng dụng):
id: Định danh duy nhất.
application_id: Tham chiếu đến ứng dụng.
type: Loại lời nhắc (ví dụ: cập nhật phiên bản, gia hạn chứng chỉ).
description: Mô tả lời nhắc.
scheduled_date: Ngày dự kiến cho lời nhắc.
status: Trạng thái (ví dụ: Đang chờ, Đã hoàn thành).

2. Danh mục API

API:
id: Định danh duy nhất.
Application_id: Tham chiếu đến hệ thống tương ứng.
name: Tên API.
description: Mô tả chức năng của API.
documentation_url: Liên kết đến tài liệu chính thức.
last_updated: Ngày cập nhật lần cuối.
version: Phiên bản hiện tại.
```

### **Cài đặt NocoBase**

Để [cài đặt](https://docs.nocobase.com/welcome/getting-started/installation) và cấu hình, tôi đã chọn sử dụng phiên bản Docker cục bộ. Các tùy chọn cài đặt khác bao gồm npm hoặc nguồn Git.

Dưới đây là mã YAML cho Docker Compose. Sau khi cài đặt Docker, điều hướng đến thư mục tệp YAML và chạy lệnh sau:

```
docker compose up -d
```

Thao tác này sẽ khởi chạy NocoBase trên máy của bạn tại cổng `13000`. Mở [`http://localhost:13000`](http://localhost:13000/) trong trình duyệt web của bạn. Thông tin đăng nhập mặc định là [`admin@nocobase.com`](mailto:admin@nocobase.com) và `admin123`.

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # Khóa bí mật của ứng dụng, được sử dụng để tạo mã thông báo người dùng, v.v.
      # Nếu APP_KEY bị thay đổi, các mã thông báo cũ cũng sẽ không còn hiệu lực.
      # Nó có thể là bất kỳ chuỗi ngẫu nhiên nào và đảm bảo nó không bị lộ.
      - APP_KEY=your-secret-key
      # Loại cơ sở dữ liệu, hỗ trợ postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Máy chủ cơ sở dữ liệu, có thể được thay thế bằng IP của máy chủ cơ sở dữ liệu hiện có
      - DB_HOST=postgres
      # Tên cơ sở dữ liệu
      - DB_DATABASE=nocobase
      # Người dùng cơ sở dữ liệu
      - DB_USER=nocobase
      # Mật khẩu cơ sở dữ liệu
      - DB_PASSWORD=nocobase
      # Múi giờ
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # Nếu sử dụng máy chủ cơ sở dữ liệu hiện có, dịch vụ postgres có thể được bỏ qua
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **Tạo bảng và dữ liệu**

Sử dụng plugin **Trình quản lý nguồn dữ liệu**, chúng ta có thể tạo các bộ sưu tập (bảng) và xác định các trường. Quy trình rất đơn giản và tuân theo mô hình đã nêu ở trên. Dưới đây là một số tham chiếu và liên kết để biết thêm chi tiết về plugin [tại đây](https://www.nocobase.com/en/plugins)).

![Tạo bảng và dữ liệu.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Tạo bảng và dữ liệu.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **Tạo menu**

Bằng cách nhấp vào biểu tượng giống cây bút chì ở phía bên phải màn hình, bạn có thể tạo menu trên cùng và menu bên, như trong hình. Hãy sao chép nó như được minh họa trong hình.

![Tạo menu.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **Tạo biểu mẫu**

Việc tạo biểu mẫu (CRUD) cũng rất đơn giản. NocoBase sử dụng các khối để tạo bảng, biểu mẫu, chi tiết, danh sách, biểu đồ, thẻ, v.v. Sau khi chọn loại khối, chỉ cần chọn bộ sưu tập (bảng) nào bạn muốn liên kết với khối này và thành phần (khối) được liên kết với bộ sưu tập sẽ xuất hiện một cách kỳ diệu. Mỗi khối có cài đặt tùy chỉnh riêng. Để biết thêm chi tiết về các khối, hãy xem tại đây.

![Tạo biểu mẫu.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **Tạo biểu đồ**

Xây dựng biểu đồ cũng rất đơn giản. Chỉ cần thêm một khối có tên *Biểu đồ* và chọn bộ sưu tập bạn muốn sử dụng làm nguồn dữ liệu, như trong hình bên dưới.

![Tạo biểu đồ.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

Sau khi chọn khối, bạn có thể cấu hình các thuộc tính của biểu đồ. Hình ảnh bên dưới hiển thị các tùy chọn cấu hình biểu đồ, cho phép bạn xác định các chỉ số, nhóm, bộ lọc, các loại biểu đồ khác nhau và tiêu đề, cùng với các thuộc tính khả dụng khác. Tại đây, bạn có thể khám phá tất cả các khả năng cấu hình.

![Tạo biểu đồ.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **Tạo luồng công việc theo lịch trình cho lời nhắc**

NocoBase cho phép bạn tạo các luồng công việc tự động để thực hiện nhiều loại tác vụ khác nhau thông qua các sự kiện. Ba loại trình kích hoạt là: *Sự kiện bộ sưu tập, Sự kiện theo lịch trình và Sự kiện sau hành động.* Sử dụng các trình kích hoạt này, bạn có thể tạo các hành động trong hệ thống, chẳng hạn như gửi thông báo, chèn dữ liệu vào các bảng khác hoặc thực hiện các yêu cầu đến API bên ngoài. Dưới đây là một ví dụ về luồng công việc để gửi thông báo trong ứng dụng.

![Luồng công việc.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

Trong trường hợp của chúng tôi, chúng tôi sẽ tạo một luồng công việc để gửi thông báo vào ngày một lời nhắc được lên lịch. Đây sẽ là một **Sự kiện theo lịch trình** để chạy hàng ngày vào một thời điểm cụ thể, như trong các hình ảnh bên dưới.

![Luồng công việc.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Luồng công việc.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

Ngoài việc cấu hình lịch trình, bạn cần thiết lập luồng công việc để truy vấn bộ sưu tập **Lời nhắc**, lấy các lời nhắc trong ngày, lặp qua từng lời nhắc và gửi thông báo cho mỗi lời nhắc, như trong hình bên dưới. Quy trình rất đơn giản: chỉ cần thêm các hành động này bằng cách nhấp vào nút "+" và cấu hình chúng.

![Luồng công việc.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

Sau khi hoàn tất cấu hình, chỉ cần kích hoạt luồng công việc bằng cách nhấp vào nút "Bật" ở góc trên bên phải. Để xem kết quả thực thi, nhấp vào "…" ở góc trên bên phải và chọn **Lịch sử thực thi**, như trong hình bên dưới.

![Luồng công việc.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **Kết luận**

Như đã trình bày, NocoBase cung cấp nhiều tính năng để đẩy nhanh quá trình phát triển ứng dụng. Tùy thuộc vào quy mô và yêu cầu, nó cung cấp sự linh hoạt để xây dựng các ứng dụng, với các khả năng bổ sung như quản lý tệp, quốc tế hóa, hỗ trợ thiết bị di động và chỉnh sửa chủ đề. Bạn thậm chí có thể phát triển các plugin của riêng mình hoặc mua các plugin thương mại có sẵn trên thị trường.

Đọc thêm:

* [Làm thế nào để xây dựng ứng dụng với NocoBase?](https://www.nocobase.com/en/blog/build-apps-with-nocobase)
* [Top 8 Nền tảng phát triển No-Code mạnh mẽ năm 2025](https://www.nocobase.com/en/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [Top 12 Công cụ No-Code mã nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [Top 15 Dự án Low-Code mã nguồn mở có nhiều sao GitHub nhất](https://www.nocobase.com/en/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [Top 6 Công cụ No-Code dành cho nhà phát triển](https://www.nocobase.com/en/blog/top-6-no-code-tools-for-developers)
* [Top 7 Nền tảng phát triển nhanh mã nguồn mở](https://www.nocobase.com/en/blog/rapid-development-platform)
