## 新機能

### クラスター・モード

エンタープライズ版は関連プラグインを通じてクラスター・モードでのデプロイをサポートします。アプリケーションがクラスター・モードで動作する際、複数のインスタンスとマルチコア処理を活用して、同時アクセス処理のパフォーマンスを向上させることができます。

![20241231010814](https://static-docs.nocobase.com/20241231010814.png)

参考ドキュメント：[クラスター導入](https://docs-jp.nocobase.com/welcome/getting-started/deployment/cluster-mode)

### パスワードポリシー

すべてのユーザーに対してパスワードルール、パスワードの有効期限およびログインセキュリティポリシーを設定し、ロックされたユーザーを管理します。

![](https://static-docs.nocobase.com/202412281329313.png)

参考ドキュメント：[パスワードポリシーとユーザーロック](https://docs-jp.nocobase.com/handbook/password-policy)

### トークンセキュリティポリシー

トークンセキュリティポリシーは、システムの安全性とユーザーエクスペリエンスを保護するための機能設定です。主に「セッション有効期限」、「トークンの有効期間」、および「期限切れトークンのリフレッシュ制限」という3つの主要な設定項目を含みます。

![20250105111821-2025-01-05-11-18-24](https://static-docs.nocobase.com/20250105111821-2025-01-05-11-18-24.png)

参考ドキュメント：[トークンセキュリティポリシー](https://docs-jp.nocobase.com/handbook/token-policy)

### IP 制限

NocoBaseは、管理者がユーザーアクセスのIPアドレスに対してホワイトリストまたはブラックリストを設定し、未承認の外部ネットワーク接続を制限するか既知の悪意のあるIPアドレスをブロックしてセキュリティリスクを低減できるようにします。また、管理者がアクセス拒否ログを照会してリスクのあるIPを特定することもサポートします。

![2025-01-23-10-07-34-20250123100733](https://static-docs.nocobase.com/2025-01-23-10-07-34-20250123100733.png)

参考ドキュメント：[IP 制限](https://docs-jp.nocobase.com/handbook/IP-restriction)

### 環境変数とシークレット

環境変数とシークレットを一元管理し、センシティブなデータの保存、設定データの再利用、および環境の分離などに利用します。

![1ee6c3fa09533b19f4d6038f53b06006.png](https://static-docs.nocobase.com/1ee6c3fa09533b19f4d6038f53b06006.png)

参考ドキュメント：[環境変数とシークレット](https://docs-jp.nocobase.com/handbook/environment-variables)

### 移行管理

アプリケーションの設定をある環境から別の環境へ移行するために使用されます。

![20250107105005](https://static-docs.nocobase.com/20250107105005.png)

参考ドキュメント：

- [Migration Manager](https://docs-jp.nocobase.com/handbook/migration-manager)
- [リリース管理](https://docs-jp.nocobase.com/handbook/release-management)

### ルート管理

* **メニューのデータが分離され「ルート」に名称変更**：メニューのデータはUIスキーマから分離され、「ルート」と改名され、`desktopRoutes` と `mobileRoutes` の2つのテーブルに分けられ、デスクトップ用ルートとモバイル用ルートに対応します。
* **フロントエンドのメニューが最適化され、折りたたみおよびレスポンシブに対応**：メニューはフロントエンドで折りたたみとレスポンシブデザインを実現し、ユーザーエクスペリエンスを向上させました。

![20250107115449](https://static-docs.nocobase.com/20250107115449.png)

参考ドキュメント：[ルート管理](https://docs-jp.nocobase.com/handbook/routes)

### ロールと権限

* ポップアップ、リンク、QRコードスキャン、ワークフローのトリガーなど、より多くの操作ボタン権限の設定をサポートします。

  ![b0a7905d9fd4beaaf21592b1f56fe752.png](https://static-docs.nocobase.com/b0a7905d9fd4beaaf21592b1f56fe752.png)
* タブ権限の設定もサポートします。

  ![4fd3a5144a2301638b9f24b033d33add.png](https://static-docs.nocobase.com/4fd3a5144a2301638b9f24b033d33add.png)

### ユーザー管理

ユーザーのプロフィールフォームの設定をサポートします。

![171e5a4c61033afb237c9ae1a3d89000.png](https://static-docs.nocobase.com/171e5a4c61033afb237c9ae1a3d89000.png)

### ワークフロー

グローバルツールバーにプロセスのToDoセンターのエントリを追加し、手動ノードや承認に関する未処理タスクの数をリアルタイムで表示します。

![855c58536f9fd29ae353dd19b3aff73f.png](https://static-docs.nocobase.com/855c58536f9fd29ae353dd19b3aff73f.png)

### ワークフロー：カスタム操作イベント

グローバルおよびバッチデータに対してカスタム操作イベントのトリガーをサポートします。

![106ae1296d180718799eb6d7f423805c.png](https://static-docs.nocobase.com/106ae1296d180718799eb6d7f423805c.png)

### ワークフロー：承認

* 転署および追署をサポートします。

  ![审批节点_界面配置_操作表单区块](https://static-docs.nocobase.com/20241226232013.png)
* 承認者が承認提出時に申請内容を変更できることをサポートします。

  ![审批节点_界面配置_操作表单_修改审批内容字段](https://static-docs.nocobase.com/20241226232124.png)
* 承認画面において基本情報ブロックの設定をサポートします。
* 承認開始およびToDoブロックのスタイルとインタラクションを最適化し、グローバルなプロセスToDoセンターにも統合しています。

  ![待办中心-审批](https://static-docs.nocobase.com/20250310161203.png)
* 承認の開始位置を区別せず、承認センターブロックで全ての承認を発起・処理可能です。

### ワークフロー：JSON 変数マッピングノード

上流ノードの結果からJSONデータを変数にマッピングする専用ノードを新たに追加しました。

![创建节点](https://static-docs.nocobase.com/20250113173635.png)

参考ドキュメント：[JSON 変数マッピング](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-variable-mapping)

### 拡張機能の強化とプラグイン例


| 拡張項目                                     | プラグイン例                                                    | <br/> |
| -------------------------------------------- | --------------------------------------------------------------- | ----- |
| データテーブルのプリセットフィールド拡張     | @nocobase-sample/plugin-data-source-main-custom-preset-fields   | <br/> |
| カレンダーのカラー フィールドオプション拡張  | @nocobase-sample/plugin-calendar-register-color-field           | <br/> |
| カレンダーのタイトルフィールドオプション拡張 | @nocobase-sample/plugin-calendar-register-title-field           | <br/> |
| 数式フィールドオプション拡張                 | @nocobase-sample/plugin-field-formula-register-expression-field | <br/> |
| カンバンのグループフィールド拡張             | @nocobase-sample/plugin-kanban-register-group-field             | <br/> |
| フィルター演算子拡張                         | @nocobase-sample/plugin-register-filter-operator                | <br/> |
| ファイルストレージ拡張                       | @nocobase-sample/plugin-file-storage-demo                       | <br/> |

## 非互換変更

### トークンセキュリティポリシーの更新

バージョン1.6では[トークンセキュリティポリシー](https://docs-jp.nocobase.com/handbook/token-policy)が新たに追加されました。Auth認証チェックに失敗した場合、401エラーが返され、ログインページにリダイレクトされます。この挙動は以前のバージョンとは異なります。チェックをスキップするには、以下の例を参照してください：

フロントエンドのリクエスト

```javascript
useRequest({
  url: '/test',
  skipAuth: true,
});

api.request({
  url: '/test',
  skipAuth: true,
});
```

バックエンドミドルウェア

```javascript
class PluginMiddlewareExampleServer extends plugin {
  middlewareExample = (ctx, next) => {
    if (ctx.path === '/path/to') {
      ctx.skipAuthCheck = true;
    }
    await next();
  };
  async load() {
    this.app.dataSourceManager.afterAddDataSource((dataSource) => {
      dataSource.resourceManager.use(this.middlewareExample, {
        before: 'auth',
      });
    });
  }
}
```

### ユニットテスト関数 agent.login が同期から非同期に変更

認証プロセスでは非同期操作が必要なため、テスト関数loginが非同期に変更されました。例：

```TypeScript
import { createMockServer } from '@nocobase/test';

describe('my db suite', () => {
  let app;
  let agent;

  beforeEach(async () => {
    app = await createMockServer({
      registerActions: true,
      acl: true,
      plugins: ['users', 'auth', 'acl'],
    });
    agent = await app.agent().login(1);
  });

  test('case1', async () => {
    await agent.get('/examples');
    await agent.get('/examples');
    await agent.resource('examples').create();
  });
});
```

### 全く新しいユーザーセンター設定項目の拡張 API の提供

API

```ts
type UserCenterSettingsItemOptions = SchemaSettingsItemType & { aclSnippet?: string };

class Application {
  addUserCenterSettingsItem(options: UserCenterSettingsItemOptions);
}
```

例

```javascript
class PluginUserCenterSettingsExampleClient extends plugin {
  async load() {
    this.app.addUserCenterSettingsItem({
      name: 'nickName',
      Component: NickName,
      sort: 0,
    });
  }
}
```
