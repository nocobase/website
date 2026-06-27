---
title: "NocoBase 0.16: Trình quản lý bộ nhớ đệm mới"
description: "NocoBase 0.16 giới thiệu trình quản lý bộ nhớ đệm mới hỗ trợ lưu trữ bộ nhớ và Redis, yêu cầu Node v18, đồng thời cập nhật các phương thức tạo bộ nhớ đệm và biến môi trường."
---

## Tính năng mới

Phiên bản cache trước đây có khả năng sử dụng kém (chỉ hỗ trợ cache bộ nhớ), v0.16 đã được tái cấu trúc, tích hợp sẵn bộ nhớ và redis store, đồng thời hỗ trợ custom store. Vui lòng tham khảo [tài liệu API](https://docs.nocobase.com/api/cache/cache-manager) để biết chi tiết cách sử dụng.

## Thay đổi phá vỡ

### Phiên bản Node tối thiểu thay đổi thành 18

Node v16 không còn được duy trì, phiên bản tối thiểu đã được thay đổi thành v18.

```
{
  "engines": {
    "node": ">=18"
  }
}
```

### Cập nhật phương thức tạo cache

Không dùng nữa: Sử dụng `createCache` để tạo cache.

```
import { createCache } from "@nocobase/cache";

const cache = createCache();
```

Cache hiện được quản lý bởi `CacheManager` và được tạo bằng `app.cacheManager`.

```
const cache = await app.cacheManager.createCache({
  name: "memory", // tên duy nhất của cache
  store: "memory", // tên duy nhất của phương thức cache
  // cấu hình khác
  max: 2000,
  ttl: 60 * 1000,
});
```

### Cập nhật biến môi trường

Các biến môi trường cache trước đây yêu cầu một chuỗi JSON để cấu hình.

```
CACHE_CONFIG={"storePackage":"cache-manager-fs-hash","ttl":86400,"max":1000}
```

Các biến môi trường mới để cấu hình cache:

```
# Tên duy nhất của phương thức cache mặc định, memory hoặc redis
CACHE_DEFAULT_STORE=memory
# Số lượng tối đa các mục trong cache bộ nhớ
CACHE_MEMORY_MAX=2000
# Redis, tùy chọn
CACHE_REDIS_URL=redis://localhost:6379
```

## Nhật ký thay đổi đầy đủ

* refactor(cache): cải thiện cache [`#3004`](https://github.com/nocobase/nocobase/pull/3004)
* fix: local storage base url [`#3063`](https://github.com/nocobase/nocobase/pull/3063)
* feat: hiển thị định nghĩa bảng [`#3061`](https://github.com/nocobase/nocobase/pull/3061)
* feat: hỗ trợ mariadb [`#3052`](https://github.com/nocobase/nocobase/pull/3052)
* fix(plugin-workflow): sửa lỗi nhỏ phía client [`#3062`](https://github.com/nocobase/nocobase/pull/3062)
* chore: suy luận view [`#3060`](https://github.com/nocobase/nocobase/pull/3060)
* fix: sắp xếp theo collection liên kết [`#3058`](https://github.com/nocobase/nocobase/pull/3058)
* feat: node >= 18 [`#3066`](https://github.com/nocobase/nocobase/pull/3066)
