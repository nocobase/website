---
title: "NocoBase 0.18：建立完善的測試系統"
description: "NocoBase 0.18 通過全面的端到端測試、優化的身份驗證插件以及將模塊分解為插件來增強穩健性，提升了靈活性和性能。"
---

## 新功能

為了增強 NocoBase 的穩健性，我們在第四季度持續補充 E2E（端到端）測試。同時，我們也在持續完善整個測試系統。

### @nocobase/test

NocoBase 測試套件，包含：

* `@nocobase/test/server` 伺服器端測試
  * 整合了 `supertest` 用於介面測試。
  * 內建了 `mockDatabase` 和 `mockServer`。
* `@nocobase/test/client` 客戶端測試
  * 整合了 `@testing-library/react` 和 `@testing-library/user-event`。
* `@nocobase/test/e2e` E2E 測試
  * 整合了 `@playwright/test`。
  * 內建了常用的 mock 方法

### 測試框架

* 伺服器端測試，使用 Vitest 框架
* 客戶端測試，使用 Vitest 框架
* E2E 測試，使用 Playwright 框架

### 撰寫測試

#### 伺服器端測試

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

#### 客戶端測試

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

#### E2E 測試

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

### 執行 Vitest 測試

```
# 使用兩個並行的 Vitest 程序同時執行前後端所有測試。
yarn test

# 執行客戶端測試案例。
yarn test --client
# 等同於
yarn cross-env TEST_ENV=client-side vitest

# 執行伺服器端測試案例。
yarn test --server
# 等同於
yarn cross-env TEST_ENV=server-side vitest

# 指定目錄或檔案。
yarn test your/path/src/__tests__/test-file.test.ts
# 客戶端檔案必須包含 /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 與直接執行 vitest 的差異

* 當你指定路徑時，可以自動識別前端和後端，前端必須包含 `/client/`。
* 後端測試預設為 `-single-thread`，如需關閉，可添加 `-single-thread=false`。
* 預設為 `--run`，如需監聽，請添加 `--watch`。

### 執行 Playwright 測試

```
# 安裝依賴
yarn e2e install-deps

# 執行測試
yarn e2e test

# UI 模式
yarn e2e test --ui

# 指定應用程式的 URL
yarn e2e test --url=http://localhost:20000

# 啟動應用程式。每次都會重新安裝。
yarn e2e start-app
```

## 其他變更

### 認證外掛最佳化

* 認證擴展開發指南 [https://docs.nocobase.com/handbook/auth/dev/guide](https://docs.nocobase.com/handbook/auth/dev/guide)
* 重大變更 [https://docs-cn.nocobase.com/handbook/auth/dev/api](https://docs-cn.nocobase.com/handbook/auth/dev/api)

### 模組化拆分為外掛

為了精煉核心並使其更簡潔，某些功能已進行模組化分離。近期完成模組化的外掛包括：


| 外掛名稱                     | 套件名稱                                      |
| ---------------------------- | --------------------------------------------- |
| 操作 - 大量編輯              | @nocobase/plugin-action-bulk-edit             |
| 操作 - 大量更新              | @nocobase/plugin-action-bulk-update           |
| 操作 - 複製                  | @nocobase/plugin-action-duplicate             |
| 看板                         | @nocobase/plugin-kanban                       |
| 甘特圖                       | @nocobase/plugin-gantt                        |
| 工作流 - 聚合                | @nocobase/plugin-workflow-aggregate           |
| 工作流 - 審批                | @nocobase/plugin-workflow-approval            |
| 工作流 - 延遲                | @nocobase/plugin-workflow-delay               |
| 工作流 - 動態計算            | @nocobase/plugin-workflow-dynamic-calculation |
| 工作流 - 表單觸發            | @nocobase/plugin-workflow-form-trigger        |
| 工作流 - JSON 查詢           | @nocobase/plugin-workflow-json-query          |
| 工作流 - 循環                | @nocobase/plugin-workflow-loop                |
| 工作流 - 人工                | @nocobase/plugin-workflow-manual              |
| 工作流 - 並行                | @nocobase/plugin-workflow-parallel            |
| 工作流 - 請求                | @nocobase/plugin-workflow-request             |
| 工作流 - SQL                 | @nocobase/plugin-workflow-sql                 |

詳情請參閱[完整外掛列表](https://www.nocobase.com/en/plugins)。文件目前正在建置中，部分內容可能缺失或等待翻譯。您可以關注 [nocobase/docs](https://github.com/nocobase/docs) 以獲取更新。
