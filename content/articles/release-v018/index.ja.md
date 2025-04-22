## 新機能

NocoBaseの堅牢性を高めるために、私たちは第4四半期全体にわたりE2E（エンドツーエンド）テストを補充してきました。同時に、全体的なテストシステムも洗練させています。

### @nocobase/test

NocoBaseテストキットには、以下が含まれています：

* `@nocobase/test/server` サーバーサイドのテスト
  * インターフェイステストのために`supertest`を統合しました。
  * `mockDatabase`と`mockServer`が内蔵されています。
* `@nocobase/test/client` クライアントサイドのテスト
  * `@testing-library/react`と`@testing-library/user-event`が統合されています。
* `@nocobase/test/e2e` E2Eテスト
  * `@playwright/test`を統合しました。
  * 一般的なモックメソッドが内蔵されています。

### テストフレームワーク

* サーバーサイドテストはVitestフレームワークを使用
* クライアントサイドテストはVitestフレームワークを使用
* E2EテストはPlaywrightフレームワークを使用

### テストの記述

#### サーバーサイドテスト

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

#### クライアントサイドテスト

```
import { render, screen, userEvent, waitFor } from '@nocobase/test/client';

it('ユーザー入力の値を表示する必要があります', async () => {
  const { container } = render(<App1 />);
  const input = container.querySelector('input');
  await userEvent.type(input, 'Hello World');
  await waitFor(() => {
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

#### E2Eテスト

```
import { test } from '@nocobase/test/e2e';

test('サインイン', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('ユーザー名/メール').click();
  await page.getByPlaceholder('ユーザー名/メール').fill('admin@nocobase.com');
  await page.getByPlaceholder('パスワード').click();
  await page.getByPlaceholder('パスワード').fill('admin123');
  await page.getByRole('button', { name: 'サインイン' }).click();
  await expect(
      page.getByTestId('user-center-button').getByText('スーパ管理者')
    ).toBeVisible();
});
```

### Vitestテストの実行

```
# フロントエンドとバックエンドのために、並行して2つのVitestプロセスで全テストを実行します。
yarn test

# クライアントに関連するテストケースを実行します。
yarn test --client
# 同等のコマンドは

# サーバーに関連するテストケースを実行します。
yarn test --server
# 同等のコマンドは

# ディレクトリまたはファイルを指定します。
yarn test your/path/src/__tests__/test-file.test.ts
# クライアントサイドのファイルは`/client/`を含む必要があります。
yarn test your/path/client/src/__tests__/test-file.test.ts
```

📢 Vitestを直接実行する場合との違い

* パスを指定すると、フロントエンドとバックエンドを自動的に認識します。フロントエンドは`/client/`を含む必要があります。
* バックエンドテストはデフォルトで`-single-thread`です。これを無効にしたい場合は、`-single-thread=false`を追加できます。
* デフォルトは`--run`ですが、リスニングが必要な場合は`--watch`を追加します。

### Playwrightテストの実行

```
# 依存関係をインストールします。
yarn e2e install-deps

# テストを実行します。
yarn e2e test

# UIモードを指定します。
yarn e2e test --ui

# アプリケーションのURLを指定します。
yarn e2e test --url=http://localhost:20000

# アプリを開始します。毎回再インストールします。
yarn e2e start-app
```

## その他の変更

### 認証プラグインの最適化

* 認証拡張の開発ガイド [https://docs.nocobase.com/plugins/auth/dev/guide](https://docs.nocobase.com/plugins/auth/dev/guide)
* 破壊的変更に関する情報 [https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1](https://docs.nocobase.com/breaking-changes/v0-18-0-alpha-1)

### プラグインへのモジュール化分解

カーネルを精緻にし、よりスリムにするため、特定の機能がモジュール化された分離を経ています。最近、このモジュール化が完了したプラグインは以下のとおりです：


| プラグイン名                    | パッケージ名                                  |
| ------------------------------ | --------------------------------------------- |
| アクション - 一括編集             | @nocobase/plugin-action-bulk-edit             |
| アクション - 一括更新             | @nocobase/plugin-action-bulk-update           |
| アクション - 複製                | @nocobase/plugin-action-duplicate             |
| カンバン                         | @nocobase/plugin-kanban                       |
| ガントチャート                     | @nocobase/plugin-gantt                        |
| ワークフロー - 集計             | @nocobase/plugin-workflow-aggregate           |
| ワークフロー - 承認              | @nocobase/plugin-workflow-approval            |
| ワークフロー - 遅延              | @nocobase/plugin-workflow-delay               |
| ワークフロー - 動的計算         | @nocobase/plugin-workflow-dynamic-calculation |
| ワークフロー - フォームトリガー | @nocobase/plugin-workflow-form-trigger        |
| ワークフロー - JSONクエリ       | @nocobase/plugin-workflow-json-query          |
| ワークフロー - ループ            | @nocobase/plugin-workflow-loop                |
| ワークフロー - 手動              | @nocobase/plugin-workflow-manual              |
| ワークフロー - 並列              | @nocobase/plugin-workflow-parallel            |
| ワークフロー - リクエスト        | @nocobase/plugin-workflow-request             |
| ワークフロー - SQL               | @nocobase/plugin-workflow-sql                 |

詳細は [プラグインの完全なリスト](https://docs.nocobase.com/plugins) を参照してください。文書は現在作成中であり、一部の内容が欠落しているか、翻訳が待たれている可能性があります。最新情報については [nocobase/docs](https://github.com/nocobase/docs) をフォローしてください。