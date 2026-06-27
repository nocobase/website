---
title: "NocoBase 0.18: Thiết lập hệ thống kiểm thử vững chắc"
description: "NocoBase 0.18 tăng cường độ tin cậy với kiểm thử E2E toàn diện, plugin xác thực được tối ưu hóa và phân tách mô-đun thành các plugin, cải thiện tính linh hoạt và hiệu suất."
---

## Tính năng mới

Để tăng cường độ ổn định của NocoBase, chúng tôi đã bổ sung các bài kiểm thử E2E (end-to-end) trong suốt quý 4. Đồng thời, chúng tôi cũng đang hoàn thiện toàn bộ hệ thống kiểm thử.

### @nocobase/test

Bộ công cụ kiểm thử NocoBase, bao gồm:

* `@nocobase/test/server` Kiểm thử phía máy chủ
  * Tích hợp `supertest` để kiểm thử giao diện.
  * Tích hợp sẵn `mockDatabase` và `mockServer`.
* `@nocobase/test/client` Kiểm thử phía máy khách
  * Tích hợp `@testing-library/react` và `@testing-library/user-event`.
* `@nocobase/test/e2e` Kiểm thử E2E
  * Tích hợp `@playwright/test`.
  * Tích hợp sẵn các phương thức giả lập (mock) thông dụng.

### Khung kiểm thử

* Kiểm thử phía máy chủ, sử dụng khung Vitest
* Kiểm thử phía máy khách, sử dụng khung Vitest
* Kiểm thử E2E, sử dụng khung Playwright

### Viết bài kiểm thử

#### Kiểm thử phía máy chủ

```
import { mockDatabase } from '@nocobase/test/server';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

#### Kiểm thử phía máy khách

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('should display the value of user input', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

#### Kiểm thử E2E

```
import { test } from '@nocobase/test/e2e';

test('sign in', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username/Email').click();
  await page.getByPlaceholder('Username/Email').fill('admin@nocobase.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('Super Admin')
    ).toBeVisible();
});
```

### Chạy kiểm thử Vitest

```
# Chạy tất cả các bài kiểm thử với hai tiến trình Vitest song song cho cả frontend và backend.
yarn test

# Chạy các bài kiểm thử phía máy khách.
yarn test --client
# tương đương với
yarn cross-env TEST_ENV=client-side vitest

# Chạy các bài kiểm thử phía máy chủ.
yarn test --server
# tương đương với
yarn cross-env TEST_ENV=server-side vitest

# Chỉ định một thư mục hoặc tệp tin.
yarn test your/path/src/__tests__/test-file.test.ts
# Các tệp phía máy khách phải bao gồm /client/ 
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Sự khác biệt khi chạy trực tiếp vitest

* Khi bạn chỉ định đường dẫn, có thể tự động nhận biết front-end và back-end, front-end phải bao gồm `/client/`.
* Kiểm thử backend mặc định là `-single-thread`, nếu muốn tắt, bạn có thể thêm `-single-thread=false`.
* Mặc định là `--run`, nếu cần lắng nghe, hãy thêm `--watch`.

### Chạy kiểm thử Playwright

```
# Cài đặt phụ thuộc
yarn e2e install-deps

# Chạy kiểm thử
yarn e2e test

# Chế độ UI
yarn e2e test --ui

# Chỉ định URL của ứng dụng
yarn e2e test --url=http://localhost:20000

# Khởi động một ứng dụng. Nó sẽ cài đặt lại mỗi lần.
yarn e2e start-app
```

## Các thay đổi khác

### Tối ưu hóa plugin auth

* Hướng dẫn phát triển mở rộng Auth [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* Các thay đổi phá vỡ (Breaking changes) [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### Phân tách mô-đun thành plugin

Để tinh gọn kernel và làm cho nó gọn nhẹ hơn, một số chức năng nhất định đã được tách riêng theo mô-đun. Các plugin đã trải qua quá trình mô-đun hóa gần đây bao gồm:

| Tên plugin                    | Tên gói                                      |
| ----------------------------- | --------------------------------------------- |
| Hành động - Chỉnh sửa hàng loạt | @nocobase/plugin-action-bulk-edit             |
| Hành động - Cập nhật hàng loạt | @nocobase/plugin-action-bulk-update           |
| Hành động - Nhân bản          | @nocobase/plugin-action-duplicate             |
| Kanban                        | @nocobase/plugin-kanban                       |
| Gantt                         | @nocobase/plugin-gantt                        |
| Workflow - Tổng hợp           | @nocobase/plugin-workflow-aggregate           |
| Workflow - Phê duyệt          | @nocobase/plugin-workflow-approval            |
| Workflow - Trì hoãn           | @nocobase/plugin-workflow-delay               |
| Workflow - Tính toán động     | @nocobase/plugin-workflow-dynamic-calculation |
| Workflow - Kích hoạt biểu mẫu | @nocobase/plugin-workflow-form-trigger        |
| Workflow - Truy vấn JSON      | @nocobase/plugin-workflow-json-query          |
| Workflow - Vòng lặp           | @nocobase/plugin-workflow-loop                |
| Workflow - Thủ công           | @nocobase/plugin-workflow-manual              |
| Workflow - Song song          | @nocobase/plugin-workflow-parallel            |
| Workflow - Yêu cầu            | @nocobase/plugin-workflow-request             |
| Workflow - SQL                | @nocobase/plugin-workflow-sql                 |

Xem [danh sách đầy đủ các plugin](https://www.nocobase.com/en/plugins) để biết chi tiết. Tài liệu hiện đang được xây dựng, có thể còn thiếu một số nội dung hoặc chờ dịch thuật. Bạn có thể theo dõi [nocobase/docs](https://github.com/nocobase/docs) để cập nhật.
