---
title: "NocoBase 0.20：Hỗ trợ nhiều nguồn dữ liệu"
description: "NocoBase 0.20 giới thiệu hỗ trợ nhiều nguồn dữ liệu, điều chỉnh quản lý bộ sưu tập, khóa chính không phải ID, cải thiện giao diện người dùng và quyền, cùng các nút quy trình làm việc mới để tăng cường tính linh hoạt và hiệu suất."
---

## Tính năng mới

### Hỗ trợ nhiều nguồn dữ liệu

Đã thêm plugin "[Data Source Manager](https://docs.nocobase.com/handbook/data-source-manager)", dùng để quản lý tất cả các collection và trường của nguồn dữ liệu. Plugin Data Source Manager cung cấp giao diện tập trung để quản lý nguồn dữ liệu và không cung cấp khả năng truy cập vào nguồn dữ liệu. Nó cần được sử dụng kết hợp với các plugin nguồn dữ liệu khác. Các nguồn dữ liệu hiện được hỗ trợ bao gồm:

* [Cơ sở dữ liệu chính](https://docs.nocobase.com/handbook/data-source-main): Cơ sở dữ liệu chính của NocoBase, hỗ trợ các cơ sở dữ liệu quan hệ như MySQL, PostgreSQL, SQLite, v.v.
* [Nguồn dữ liệu MySQL bên ngoài](https://docs.nocobase.com/handbook/data-source-external-mysql): Truy cập cơ sở dữ liệu MySQL hiện có như một nguồn dữ liệu.
* [Nguồn dữ liệu MariaDB bên ngoài](https://docs.nocobase.com/handbook/data-source-external-mariadb): Truy cập cơ sở dữ liệu MariaDB hiện có như một nguồn dữ liệu.
* [Nguồn dữ liệu PostgreSQL bên ngoài](https://docs.nocobase.com/handbook/data-source-external-postgres): Truy cập cơ sở dữ liệu PostgreSQL hiện có như một nguồn dữ liệu.

Ngoài ra, có thể mở rộng thêm nhiều nguồn dữ liệu khác, có thể là các loại cơ sở dữ liệu phổ biến hoặc các nền tảng cung cấp API (SDK).

![Data Source Manager](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### Điều chỉnh quản lý Collection

Đã di chuyển "Collection Manager" ban đầu đến "Data Source > Main Database > Configuration".

![Cấu hình cơ sở dữ liệu chính](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### Hỗ trợ trường không phải ID làm khóa chính và ràng buộc quan hệ

Khi tạo collection, bạn có thể chọn không tạo trường ID.

![Trường được xác định trước](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

Trường số nguyên có thể được sử dụng làm khóa chính.

![Trường số nguyên có thể được sử dụng làm khóa chính](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

Trường văn bản một dòng cũng có thể được sử dụng làm khóa chính.

![Trường văn bản một dòng cũng có thể được sử dụng làm khóa chính](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

Ràng buộc quan hệ hỗ trợ chọn các trường khác có chỉ mục Unique được đặt làm trường không phải khóa chính.

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### Điều chỉnh sắp xếp kéo và thả

Đã thêm trường loại "Sort". Các trường sắp xếp không còn được tự động tạo khi tạo collection và cần được tạo thủ công.

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

Khi chọn một trường làm nhóm, việc phân nhóm sẽ được thực hiện trước khi sắp xếp.

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

Khi bật sắp xếp kéo và thả trong khối bảng, bạn cần chọn trường sắp xếp.

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

Khi tạo khối Kanban, bạn cần chọn trường sắp xếp.

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### Điều chỉnh giao diện Người dùng và Quyền

Đã thêm giao diện quản lý người dùng và hợp nhất quản lý người dùng và vai trò trong một menu.

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

Đã điều chỉnh giao diện quản lý vai trò để thuận tiện cho việc quản lý vai trò, quyền, phòng ban, v.v. liên quan đến người dùng.

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

Đã di chuyển "Action Permissions" ban đầu đến tab "Data Source".

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### Plugin Phòng ban

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

Tổ chức người dùng theo phòng ban, thiết lập quan hệ phân cấp, liên kết vai trò để kiểm soát quyền và sử dụng phòng ban làm biến trong quy trình làm việc và biểu thức.

### Quy trình làm việc: Phê duyệt

Plugin phê duyệt cung cấp các loại quy trình làm việc chuyên dụng (triggers) "Khởi tạo phê duyệt" và các nút "Phê duyệt" cho quy trình này. Kết hợp với các bảng dữ liệu tùy chỉnh và khối tùy chỉnh độc đáo của NocoBase, có thể nhanh chóng và linh hoạt tạo và quản lý các tình huống phê duyệt khác nhau.

Cấu hình phê duyệt

![Cấu hình phê duyệt](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

Quy trình phê duyệt

![Quy trình phê duyệt](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

Thông tin chi tiết có thể được tìm thấy trong tài liệu: [Phê duyệt quy trình làm việc](https://docs.nocobase.com/handbook/workflow-approval)

### Quy trình làm việc: Nút kết thúc quy trình

Nút này ngay lập tức kết thúc quá trình thực thi hiện tại của quy trình làm việc khi được thực thi và kết thúc với trạng thái được cấu hình trong nút. Nó thường được sử dụng để kiểm soát luồng logic cụ thể, thoát khỏi quy trình làm việc hiện tại sau khi đáp ứng các điều kiện logic nhất định mà không tiếp tục xử lý tiếp theo. Nó có thể được ví như lệnh return trong các ngôn ngữ lập trình, được sử dụng để thoát khỏi hàm đang thực thi.

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

Thông tin chi tiết có thể được tìm thấy trong tài liệu: [Nút kết thúc quy trình](https://docs.nocobase.com/handbook/workflow/nodes/end)

### Quy trình làm việc: Nút biến tùy chỉnh

Các biến có thể được khai báo trong quy trình làm việc hoặc gán giá trị cho các biến đã khai báo trước đó, thường được sử dụng để lưu trữ dữ liệu tạm thời trong quy trình làm việc. Nó phù hợp cho các tình huống cần lưu trữ kết quả tính toán để sử dụng sau bên ngoài nhánh (chẳng hạn như vòng lặp, song song, v.v.).

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

Thông tin chi tiết có thể được tìm thấy trong tài liệu: [Nút biến tùy chỉnh](https://docs.nocobase.com/handbook/workflow-variable)

### Quy trình làm việc: Trình chặn yêu cầu

Plugin trình chặn yêu cầu cung cấp cơ chế chặn các thao tác trên biểu mẫu, trong đó sự kiện chặn được kích hoạt sau khi thao tác biểu mẫu tương ứng được gửi và trước khi nó được xử lý. Nếu một nút "Kết thúc quy trình" được thực thi trong luồng quy trình tiếp theo sau khi kích hoạt hoặc nếu các nút khác không thực thi được (lỗi hoặc thực thi không hoàn chỉnh khác), thao tác biểu mẫu sẽ bị chặn, nếu không thao tác đã lên lịch sẽ được thực thi bình thường. Nó có thể được sử dụng để xác thực nghiệp vụ hoặc kiểm tra logic nhằm phê duyệt hoặc chặn các thao tác tạo, cập nhật và xóa do máy khách gửi.

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

Thông tin chi tiết có thể được tìm thấy trong tài liệu: [Trình chặn yêu cầu](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### Quy trình làm việc: Nút tin nhắn phản hồi

Nút tin nhắn phản hồi được sử dụng để cung cấp phản hồi cho máy khách với các tin nhắn tùy chỉnh trong các loại quy trình làm việc cụ thể (chẳng hạn như chặn yêu cầu và sự kiện biểu mẫu).

Cấu hình nút

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

Tin nhắn nhắc nhở

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

Thông tin chi tiết có thể được tìm thấy trong tài liệu: [Nút tin nhắn phản hồi](https://docs.nocobase.com/handbook/workflow-response-message)

## Các thay đổi không tương thích

### Các API trùng tên

Trong thay đổi kernel này, một số API phiên bản mới xung đột với tên phiên bản cũ. Các API phiên bản cũ xung đột này sẽ được giữ lại trong phiên bản này nhưng sẽ được thêm hậu tố `_deprecated` thống nhất.

| API gốc                             | API không được khuyến khích      | API mới                                                                                                     |
| ----------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| CollectionProvider                  | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                 |
| useCollection                       | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                |
| useCollectionField                  | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)              |
| useCollectionManager                | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks) |

Nếu bạn đang sử dụng các API liên quan ở trên, bạn có hai cách để thay đổi:

* Thay thế đơn giản: Thay thế API gốc bằng API có hậu tố `_deprecated`, ví dụ: thay thế `useCollection()` bằng `useRecord_deprecated()`.
* Sử dụng API mới theo tài liệu mới: Mặc dù tên của API mới giống với API cũ, nhưng có sự khác biệt về tham số và giá trị trả về. Bạn cần tham khảo tài liệu mới để điều chỉnh mã tương ứng.

### Các API khác cần điều chỉnh

* `registerTemplate()` đổi thành `app.dataSourceManager.addCollectionTemplates()`
* `registerField()` đổi thành `app.dataSourceManager.addFieldInterfaces()`
* `registerGroup()` đổi thành `app.dataSourceManager.addFieldInterfaceGroups()`
* `useContext(CollectionManagerContext)` đổi thành `useCollectionManager_deprecated()`
* Mở rộng collection bằng `ExtendCollectionsProvider`
* `RecordProvider` yêu cầu phải truyền rõ ràng tham số parent khi cần

## Ví dụ thay đổi

### Mở rộng mẫu Collection

#### Định nghĩa

Trước đây được định nghĩa là một đối tượng, bây giờ cần thay đổi thành một lớp. Ví dụ:

Trước đây:

```
import { ICollectionTemplate } from '@nocobase/client';

const calendar: ICollectionTemplate = {
  name: 'calendar',
  title: 'Calendar collection',
  order: 2,
  color: 'orange',
  // ...
}
```

Bây giờ:

```
import { CollectionTemplate } from '@nocobase/client';

class CalendarCollectionTemplate extends CollectionTemplate {
  name = 'calendar';
  title = 'Calendar collection';
  order = 2;
  color = 'orange';
}
```

Các thuộc tính đối tượng ban đầu trở thành thành viên của lớp.

#### Đăng ký

Trước đây được đăng ký thông qua `registerTemplate`, bây giờ cần được đăng ký thông qua `dataSourceManager.addCollectionTemplates` của plugin. Ví dụ:

Trước đây:

```
import { registerTemplate } from '@nocobase/client';
import { calendar } from './calendar'

registerTemplate('calendar', calendar);
```

Bây giờ:

```
import { Plugin } from '@nocobase/client';
import { CalendarCollectionTemplate } from './calendar'

export class CalendarPluginClient extends Plugin {
  async load() {
    this.app.dataSourceManager.addCollectionTemplates([CalendarCollectionTemplate]);
  }
}
```

### Mở rộng giao diện trường

#### Định nghĩa

Trước đây được định nghĩa là một đối tượng, bây giờ cần thay đổi thành một lớp. Ví dụ:

Trước đây:

```
import { IField } from '@nocobase/client';

const attachment: IField = {
  name: 'attachment',
  type: 'object',
  group: 'media',
  title: 'Attachment',
  // ...
}
```

Bây giờ:

```
import { CollectionFieldInterface } from '@nocobase/client';

class AttachmentFieldInterface extends CollectionFieldInterface {
  name = 'attachment';
  type = 'object';
  group = 'media';
  title = 'Attachment';
  // ...
}
```

Các thuộc tính đối tượng ban đầu trở thành thành viên của lớp.

#### Đăng ký

Trước đây được đăng ký thông qua `registerField`, bây giờ cần được đăng ký thông qua `dataSourceManager.addFieldInterfaces` của plugin và không cần truyền `CollectionManagerProvider` nữa. Ví dụ:

Trước đây:

```
import { registerField } from '@nocobase/client';
import { attachment } from './attachment'

- registerField(attachment.group, 'attachment', attachment);

export const FileManagerProvider: FC = (props) => {
  return (
-   <CollectionManagerProvider interfaces={{ attachment }}>
      <SchemaComponentOptions scope={hooks} components={{ UploadActionInitializer }}>
        {props.children}
      </SchemaComponentOptions>
-   </CollectionManagerProvider>
  );
};
```

Bây giờ:

```
import { Plugin } from '@nocobase/client';
import { AttachmentFieldInterface } from './attachment'

export class FilPlugin extends Plugin {
  async load() {
    this.app.dataSourceManager.addFieldInterfaces([AttachmentFieldInterface]);
  }
}
```

### Mở rộng nhóm giao diện trường

Trước đây được đăng ký thông qua `registerGroup`, bây giờ cần được đăng ký thông qua `dataSourceManager.addFieldInterfaceGroups` của plugin. Ví dụ:

```
- import { registerGroup, Plugin } from '@nocobase/client';
+ import { Plugin } from '@nocobase/client';

- registerGroup('map', {
-        label: 'Map-based geometry',
-        order: 10
- })

export class MapPlugin extends Plugin {
  async load() {
+    this.app.dataSourceManager.addFieldInterfaceGroups({
+      map: {
+        label: generateNTemplate('Map-based geometry'),
+        order: 51,
+      },
+    });
  }
}
```

### `useContext(CollectionManagerContext)` đổi thành `useCollectionManager_deprecated()`

```
- const ctx = useContext(CollectionManagerContext);
+ const ctx = useCollectionManager_deprecated();
```

### Mở rộng Collection, sử dụng `ExtendCollectionsProvider` thay vì `CollectionManagerProvider`

```
const Demo = () => {
-  <CollectionManagerProvider collections={[apiKeysCollection]}>
+  <ExtendCollectionsProvider collections={[apiKeysCollection]}>
...
-  </CollectionManagerProvider>
+  </ExtendCollectionsProvider>
}
```

### Thay đổi đối với RecordProvider

Trước đây, khi không truyền thuộc tính parent, giá trị của RecordProvider cuối cùng sẽ tự động được lấy làm parent. Bây giờ, cần phải truyền rõ ràng parent và khi không truyền parent, giá trị của parent sẽ là undefined.

```
- <RecordProvider record={recordData}>
+ <RecordProvider record={recordData} parent={parentRecordData}>
...
</RecordProvider>
```

Nếu không có ràng buộc lịch sử, bạn cũng có thể trực tiếp sử dụng CollectionRecordProvider để thay thế.

```
- <RecordProvider record={recordData}>
+ <CollectionRecordProvider record={recordData} parent={parentRecordData}>
...
- </RecordProvider>
+ </CollectionRecordProvider>
```

> ⚠️Sự khác biệt giữa RecordProvider và CollectionRecordProvider
>
> * RecordProvider không được khuyến khích sử dụng và sẽ bị xóa trong tương lai.
> * RecordProvider mang RecordContext cũ, trong khi CollectionRecordProvider thì không.
