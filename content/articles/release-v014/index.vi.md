---
title: "NocoBase 0.14: Trình quản lý plugin mới, hỗ trợ thêm plugin qua giao diện"
description: "NocoBase 0.14 giới thiệu trình quản lý plugin mới cho phép thêm plugin qua giao diện, hỗ trợ tải xuống từ npm registry, tải lên cục bộ và tải xuống qua URL, nâng cao tính linh hoạt trong quản lý plugin."
---

Bản phát hành này cho phép sử dụng plugin dạng cắm và chạy trong môi trường sản xuất. Giờ đây bạn có thể thêm plugin trực tiếp qua giao diện người dùng, đồng thời hỗ trợ tải xuống từ kho lưu trữ npm (có thể là riêng tư), tải lên cục bộ và tải xuống qua URL.

## Tính năng mới

### Giao diện quản lý plugin mới

![Giao diện quản lý plugin mới](https://static-docs.nocobase.com/7d750847f55504f346d2a85968f88102.webp)

### Các plugin đã tải lên nằm trong thư mục storage/plugins.

Thư mục storage/plugins được sử dụng để tải lên các plugin và được tổ chức dưới dạng các gói npm.

```
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /@foo/
      |- /bar/
    |- /my-nocobase-plugin-hello/
```

### Cập nhật plugin

Hiện tại, chỉ có thể cập nhật các plugin nằm trong storage/plugins, như được hiển thị ở đây:

![Cập nhật plugin](https://static-docs.nocobase.com/af75d05d6e2c04222dbfd2b7f9009daf.gif)

Lưu ý: Để thuận tiện cho việc bảo trì và nâng cấp, đồng thời tránh tình trạng không khả dụng của các plugin trong storage do nâng cấp, bạn có thể đặt plugin mới trực tiếp vào storage/plugins và sau đó thực hiện thao tác nâng cấp.

## Các thay đổi không tương thích

### Thay đổi về tên plugin

* Biến môi trường PLUGIN\_PACKAGE\_PREFIX không còn được cung cấp.
* Tên plugin và tên gói được thống nhất, tên plugin cũ vẫn có thể tồn tại dưới dạng bí danh.

### Cải tiến đối với pm.add

```
# Sử dụng packageName thay vì pluginName, tìm kiếm cục bộ, báo lỗi nếu không tìm thấy
pm add packageName

# Chỉ tải xuống từ xa nếu có registry, cũng có thể chỉ định phiên bản
pm add packageName --registry=xx --auth-token=yy --version=zz

# Bạn cũng có thể cung cấp một tệp zip cục bộ, thêm nhiều lần và thay thế bằng lần cuối cùng
pm add /a/plugin.zip

# Zip từ xa, thay thế bằng cùng tên
pm add http://url/plugin.zip
```

### Thay đổi cấu hình Nginx

Thêm vị trí `/static/plugins/`

```
server {
    location ^~ /static/plugins/ {
        proxy_pass http://127.0.0.1:13000/static/plugins/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 600;
        proxy_send_timeout 600;
        proxy_read_timeout 600;
        send_timeout 600;
    }
}
```

Xem thêm phiên bản đầy đủ của [nocobase.conf](https://github.com/nocobase/nocobase/blob/main/docker/nocobase/nocobase.conf)

## Hướng dẫn phát triển plugin

[Phát triển plugin đầu tiên](https://docs.nocobase.com/development/your-fisrt-plugin)

* [  phát hành](https://blog.nocobase.com/tags/release)
