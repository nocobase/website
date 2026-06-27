---
title: "Làm thế nào để xây dựng ứng dụng với NocoBase?"
description: "Hãy khám phá cách xây dựng ứng dụng theo dõi thú cưng với NocoBase!"
---

📝 Lưu ý: Bài viết này được cập nhật lần cuối vào ngày 23 tháng 1 năm 2026. Chúng tôi thường xuyên cập nhật thông tin để đảm bảo bạn có những hiểu biết mới nhất! 😊

Bài blog này được sản xuất bởi Don Freeman từ [Freeman Tech Consulting](https://freemantechconsulting.com/) và được xuất bản lần đầu trên [nocodefounders.com](https://www.aidutu.cn/info/link?url=http://nocodefounders.com). Freeman Tech Consulting là một công ty kỹ thuật phần mềm cung cấp dịch vụ trọn gói, có thể hỗ trợ triển khai No Code, phát triển ứng dụng web, thiết kế/xây dựng hạ tầng đám mây, quản lý GRC, phân tích dữ liệu và nhiều hơn nữa.

## 🌟NocoBase là gì?

**NocoBase** là một nền tảng AI không-code (zero-code) / low-code được thiết kế để giúp việc xây dựng các ứng dụng dựa trên dữ liệu trở nên dễ dàng. Họ cung cấp các phiên bản trả phí, nơi logo NocoBase được loại bỏ. Nó là mã nguồn mở, vì vậy nếu bạn muốn đóng góp, bạn có thể dễ dàng thực hiện trên GitHub. Họ cung cấp một hệ thống plugin để mở rộng chức năng của nền tảng khi cần.

## 🚀 Triển khai NocoBase cục bộ

### **Cần những gì để chạy NocoBase cục bộ?**

* **Docker**
* **Docker compose**
* **Một cơ sở dữ liệu PostgreSQL** Trong blog này, chúng ta sẽ chạy một cơ sở dữ liệu với docker compose nhưng trong môi trường sản xuất thực tế, bạn sẽ muốn có một cơ sở dữ liệu PostgreSQL chuyên dụng.

### **Chạy NocoBase cục bộ**

* Có các bước để chạy NocoBase cục bộ trên trang web của họ [tại đây](https://docs.nocobase.com/welcome/getting-started/installation/docker-compose)

Đầu tiên, tạo một thư mục nơi bạn sẽ làm việc. Trong terminal của bạn, chuyển vào thư mục đó. Sau đó, bạn cần tạo một tệp docker compose. Tôi đã sử dụng tệp từ hướng dẫn bắt đầu ở trên trên trang web NocoBase và sửa đổi một chút.

---

💬 Này, bạn đang đọc blog NocoBase. NocoBase là nền tảng phát triển low-code/không-code mở rộng nhất được hỗ trợ bởi AI để xây dựng các ứng dụng doanh nghiệp, công cụ nội bộ và tất cả các loại hệ thống. Nó hoàn toàn tự lưu trữ, dựa trên plugin và thân thiện với nhà phát triển. →[ Khám phá NocoBase trên GitHub](https://github.com/nocobase/nocobase)

---

***Docker compose bên dưới hiển thị việc chạy cơ sở dữ liệu PostgreSQL cục bộ nhưng nên có một cơ sở dữ liệu chuyên dụng trong môi trường sản xuất thực tế.***

![docker compose.png](https://static-docs.nocobase.com/8c25f1c572a1330beb04376b5053dcd4.png)

Sau khi tạo tệp này trong thư mục cục bộ, hãy chạy lệnh sau để kéo các image cần thiết.

![pull the needed images.png](https://static-docs.nocobase.com/222cba9fddfe376ee2d031bfb1aa1708.png)

Bây giờ chạy lệnh sau để khởi động các container ở chế độ nền.

![start the containers.png](https://static-docs.nocobase.com/7fc3c0958673e3264b2881c18a5e949d.png)

Bây giờ bạn có thể truy cập NocoBase tại http://localhost:13000

## 🐶 Xây dựng ứng dụng NocoBase: Ứng dụng theo dõi thú cưng

![Pet Tracking Application.png](https://static-docs.nocobase.com/0960fcf248fce60c67d186aaa5b1e8fe.png)

Trong ví dụ này, chúng ta sẽ xây dựng một ứng dụng theo dõi thú cưng 🐕 🐈! Ứng dụng này sẽ theo dõi chủ sở hữu thú cưng và thông tin về thú cưng của họ. Đầu tiên, chúng ta cần xác định mô hình dữ liệu cho ứng dụng của mình. Điều này cực kỳ dễ dàng trong NocoBase.

### **Mô hình dữ liệu NocoBase**

**🔍 Tìm trình chỉnh sửa mô hình dữ liệu**

Trong giao diện NocoBase, bạn có thể nhấp vào bánh răng nhỏ ⚙️ ở góc trên cùng bên phải, sau đó nhấp vào `Data Sources`. Thao tác này sẽ mở trình chỉnh sửa mô hình dữ liệu. Khi đó, bạn sẽ thấy nguồn dữ liệu mặc định có tên là main. Nhấp vào `Configure` cho nguồn dữ liệu main.

**Tạo Collections**

Bây giờ chúng ta có thể tạo các collection trong nguồn dữ liệu main. Các collection này sẽ lưu trữ dữ liệu cho ứng dụng của chúng ta. Trong ví dụ này, chúng ta sẽ tạo hai collection. Một cho chủ sở hữu thú cưng và một cho thú cưng.

**Collection Pet Owner**

Trên màn hình Collection, nhấp vào nút `New Collection`. Sau đó đặt cho collection `Collection Display Name` là Pet Owner và `Collection Name` là petowner.

Bây giờ hãy thêm các trường chúng ta cần vào collection pet owner. Từ màn hình collection, nhấp vào `Configure Fields` bên cạnh collection Pet Owner. Với nút `Add Field`, bạn có thể thêm các trường chúng ta cần vào collection. Collection pet owner sẽ có các trường sau.

* **First Name** *Giao diện trường văn bản một dòng*
* **Last Name** *Giao diện trường văn bản một dòng*
* **Email** *Giao diện trường Email*

**Collection Pet**

Bây giờ chúng ta có thể lặp lại các bước tương tự cho collection pet. Collection pet sẽ có các trường sau.

* **Name** *Giao diện trường văn bản một dòng*
* **Pet Type** *Giao diện trường chọn nhiều*
* **Birthdate** *Giao diện trường ngày giờ*

**🔗 Liên kết Collection Pet Owner với Collection Pet**

Để liên kết collection Pet Owner với collection Pet, hãy quay lại collection **Pet** và nhấp vào nút `Add Field` trong màn hình cấu hình collection. Tìm loại giao diện One to Many. Đặt tên hiển thị cho mối quan hệ, chọn pet làm `Target Collection`, và sau đó chọn ID làm `Target Key`.

**🥳 Mô hình dữ liệu đã hoàn thành!!!**

Đó là tất cả cho việc thiết lập mô hình dữ liệu. Đây là ví dụ của tôi cho mô hình dữ liệu pet.

![pet data model.png](https://static-docs.nocobase.com/5b683b9ddaeab7c644512fa7dbdbbeb6.png)

### **Xây dựng giao diện NocoBase**

**🏠 Tạo trang chủ**

Bây giờ chúng ta đã hoàn thành mô hình dữ liệu, chúng ta có thể nhanh chóng xây dựng một giao diện để tương tác với mô hình dữ liệu đó. Quay lại trang chính của ứng dụng và bạn sẽ thấy mục `Add New Menu` ở đầu trang. Nhấp vào nó và sau đó nhấp vào `page`. Đặt tên cho trang là Home, sau đó bạn sẽ thấy một cái gì đó tương tự như thế này.

![Create the Home Page.png](https://static-docs.nocobase.com/06081448ef1a5b90c1703905e42bb727.png)

**📜 Tạo danh sách chủ sở hữu thú cưng**

Bây giờ chúng ta sẽ thêm một danh sách các thẻ để cho phép chúng ta tương tác với collection chủ sở hữu thú cưng của mình. Nhấp vào `Add Block` → `Grid Card` → `PetOwner`. Điều này cho phép chúng ta hiển thị chủ sở hữu thú cưng trong một lưới các thẻ. Nhấp vào `Configure Fields` để thêm các trường First Name, Last Name và Email.

**➕ Thêm chủ sở hữu thú cưng**

Bây giờ chúng ta cần có khả năng tạo chủ sở hữu thú cưng. Nhấp vào `Configure Action` ở góc trên cùng bên phải của block (**không phải** `Configure Action` trong Thẻ). Sau đó nhấp vào `Add New`. Thao tác này tạo một nút có nội dung Add New. Nhấp vào nút đó để cấu hình những gì có thể được thực hiện khi thêm chủ sở hữu thú cưng.

**🍿 Cửa sổ bật lên Thêm chủ sở hữu thú cưng mới**

Bên trong cửa sổ bật lên, nhấp vào `Add Block` → `Form` → `Current Collection`. Nhấp vào `Configure Fields` và thêm First Name, Last Name và Email. Điều này cho phép bạn điền các giá trị này khi tạo chủ sở hữu thú cưng mới. Cuối cùng, nhấp vào `Configure Action` → `Submit`. Nhấp ra ngoài cửa sổ bật lên để đóng nó.

**➕ Thêm thú cưng mới**

Bây giờ chúng ta đã có khả năng xem và tạo chủ sở hữu thú cưng mới, chúng ta cần có thể thêm thú cưng của họ. Bây giờ quay lại **Trang chủ**, nhấp vào `Configure Action` *bên trong thẻ* và nhấp vào popup. Thao tác này sẽ tạo một liên kết trong thẻ có tên là popup, nhấp vào nó. Bên trong cửa sổ bật lên, nhấp vào `Add Block` → `Form (add new)` → `Associated Records` → `Pets`. Bên trong block mới này, nhấp vào `Configure Fields` và thêm Name, Pet Type, Birthdate. Điều này cho phép bạn điền các giá trị này khi tạo thú cưng mới. Cuối cùng, nhấp vào `Configure Action` → `Submit`.

**📜 Danh sách thú cưng hiện có**

Bây giờ ngay bên dưới block mới này, nhấp vào `Add Block` → `List` → `Associated Records` → `Pets`. Bên trong block mới này, nhấp vào `Configure Fields` và thêm Name, Pet Type và Birthdate. Cửa sổ bật lên sẽ trông giống như thế này. Tôi đã có một thú cưng trong cơ sở dữ liệu của mình, vì vậy nó có thể trông hơi khác một chút.

![List Existing Pets.png](https://static-docs.nocobase.com/3cfc6fadf38b4f88dcee4478aa1b65cb.png)

Nhấp ra ngoài cửa sổ bật lên để đóng nó. Bây giờ chúng ta có khả năng tạo và xem thú cưng. Giao diện của bạn bây giờ sẽ trông giống như thế này.

![UI.png](https://static-docs.nocobase.com/97149b76b62c72ccc9d484ceffd50208.png)

**🧪 Kiểm tra**

Bây giờ nhấp vào nút UI Editor màu cam để thoát khỏi trình chỉnh sửa giao diện. Bạn có thể chơi với giao diện và tạo Thú cưng và Chủ sở hữu thú cưng.

Blog này còn thiếu nhiều phần bao gồm Xác thực người dùng, giao diện phức tạp hơn, triển khai môi trường sản xuất, v.v. Tôi có thể đề cập đến những điều này trong các blog sau.

💡 Đọc thêm:

* [Xây dựng trợ lý AI với Langflow và AstraDB: Từ kiến trúc đến tích hợp với NocoBase](https://www.nocobase.com/en/blog/building-ai-assistant-langflow-astradb-nocobase)
* [Phát triển plugin gửi tin nhắn WhatsApp trong NocoBase](https://www.nocobase.com/en/blog/developing-a-plugin-to-send-whatsapp-messages)
* [Quản trị kiến trúc đơn giản hóa: Xây dựng danh mục ứng dụng với NocoBase](https://www.nocobase.com/en/blog/building-an-application-catalog-with-nocobase)
