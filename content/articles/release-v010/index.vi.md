---
title: "NocoBase 0.10: Các tính năng mới trong quý hai"
description: "NocoBase 0.10 cải thiện thành phần trường quan hệ bằng cách hỗ trợ nhiều công tắc thành phần và thêm chức năng tạo nhanh dữ liệu quan hệ với hai chế độ tạo nhanh cùng các cập nhật khác."
---

## Tính năng mới trong quý 2

- Cải tiến thành phần trường liên kết, hỗ trợ chuyển đổi nhiều thành phần
  - Chọn
  - Trình chọn bản ghi
  - Biểu mẫu con/Chi tiết con
  - Bảng con
  - Trình quản lý tệp
  - Tiêu đề (chỉ đọc)
- Tạo nhanh dữ liệu quan hệ, hỗ trợ hai chế độ tạo nhanh
  - Thêm trong menu thả xuống để tạo nhanh bản ghi mới dựa trên trường tiêu đề
  - Thêm trong cửa sổ bật lên để cấu hình biểu mẫu thêm phức tạp
- Hành động sao chép, hỗ trợ hai chế độ
  - Sao chép trực tiếp
  - Sao chép vào biểu mẫu và tiếp tục điền
- Mẫu dữ liệu biểu mẫu
- Phạm vi dữ liệu lọc hỗ trợ biến
- Khối danh sách
- Khối thẻ lưới
- Plugin ứng dụng khách di động
- Plugin xác thực người dùng, hỗ trợ các phương thức xác thực khác nhau
  - Email/Mật khẩu
  - SMS
  - OIDC
  - SAML
- Nút quy trình làm việc
  - Nâng cấp nút thủ công, hỗ trợ thêm và chỉnh sửa từ các bộ sưu tập hiện có
  - Nút vòng lặp
  - Nút tổng hợp
- Trình quản lý tệp
  - Cung cấp mẫu bộ sưu tập tệp
  - Cung cấp thành phần trình quản lý tệp

## Nâng cấp ứng dụng

### Nâng cấp cho Docker compose

Không thay đổi, tham khảo nâng cấp [Nâng cấp cho Docker compose](https://docs.nocobase.com/welcome/getting-started/upgrading/docker-compose)

### Nâng cấp cho mã nguồn Git

v0.10 có bản nâng cấp lớn về phụ thuộc, vì vậy để tránh lỗi khi nâng cấp mã nguồn, bạn cần xóa các thư mục sau trước khi nâng cấp

```bash
# Xóa bộ nhớ đệm .umi
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Xóa tệp đã biên dịch
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Xóa phụ thuộc
yarn rimraf -rf node_modules
```

Xem [Nâng cấp cho mã nguồn Git](https://docs.nocobase.com/welcome/getting-started/upgrading/git-clone) để biết thêm chi tiết

### Nâng cấp cho create-nocobase-app

Khuyến nghị `yarn create` tải lại phiên bản mới và sửa đổi cấu hình `.env`, để biết thêm chi tiết, tham khảo [hướng dẫn nâng cấp phiên bản chính](https://docs.nocobase.com/welcome/getting-started/upgrading/create-nocobase-app#major-upgrade)

## Các thay đổi sắp không được dùng và có khả năng không tương thích

### Thành phần trường bảng con

Không tương thích với phiên bản mới, cần xóa và gán lại các trường khối (chỉ gán lại UI)

### Thay đổi API tải lên tệp đính kèm

Ngoài bảng tệp đính kèm tích hợp, người dùng cũng có thể tùy chỉnh bộ sưu tập tệp, API tải lên tệp đính kèm đã được thay đổi từ `/api/attachments:upload` thành `/api/<file-collection>:create`, tải lên không còn được dùng nữa, vẫn tương thích với v0.10 nhưng sẽ bị xóa.

### Thay đổi API signin/signup

Nhân NocoBase cung cấp [mô-đun auth](https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) mạnh mẽ hơn với các thay đổi sau đối với API đăng nhập, đăng ký, xác minh và đăng xuất của người dùng:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Lưu ý: Các giao diện người dùng trên, không còn được dùng nữa, vẫn tương thích với v0.10, nhưng sẽ bị xóa trong bản phát hành chính tiếp theo.

### Điều chỉnh lọc trường ngày

Nếu trước đây đã cấu hình lọc liên quan đến ngày trong phạm vi dữ liệu, cần xóa và cấu hình lại.

## Hướng dẫn nâng cấp plugin bên thứ ba

### Nâng cấp phụ thuộc

Các phụ thuộc chính bao gồm

- `react` nâng cấp lên v18
- `react-dom` nâng cấp lên v18
- `react-router` nâng cấp lên v6.11
- `umi` nâng cấp lên v4
- `dumi` nâng cấp lên v2

Các phụ thuộc trong `package.json` nên được thay đổi thành phiên bản mới nhất, ví dụ:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Thay đổi mã

Vì react-router đã được nâng cấp, mã liên quan cũng cần được thay đổi, các thay đổi chính bao gồm

### Thành phần Layout

Thành phần Layout cần sử dụng `<Outlet />` thay vì `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

nếu bạn sử dụng `React.cloneElement` để hiển thị thành phần route, bạn cần thay đổi như sau:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Thay đổi thành phần route để lấy giá trị từ `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Chuyển hướng

`<Redirect>` được thay đổi thành `<Navigate replace />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` được thay đổi thành `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` được thay đổi thành `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` được thay đổi thành `useSearchParams()`.

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### path

Tất cả các đường dẫn route sau đều hợp lệ trong v6:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Các đường dẫn route kiểu RegExp sau không hợp lệ trong v6:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Để biết thêm các thay đổi API, vui lòng tham khảo [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
