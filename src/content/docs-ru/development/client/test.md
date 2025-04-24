# Тестирование

## Модульное тестирование

На базе тестового фреймворка [Vitest](https://vitest.dev/).

```ts
describe('my suite', () => {
  beforeEach(async () => {});

  afterEach(async () => {});

  test('my case', async () => {});
});
```

## E2E тестирование

На базе тестового фреймворка [Playwright](https://playwright.dev/).

```ts
import { expect, test } from '@nocobase/test/e2e';

test.describe('my suite', () => {
  test('my case', async ({ page, mockPage }) => {});
});
```
