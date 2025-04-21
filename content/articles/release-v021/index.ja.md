## お知らせ

![v1.0](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/img_v3_029o_3dd91ba0-bb96-4315-a273-208f06d432fg.png)

## 新機能

### チャートのためのマルチデータソースのサポート

![20240407222304](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222304.png)

[詳細については、[データビジュアライゼーション]ドキュメントを参照してください](https://docs.nocobase.com/handbook/data-visualization)

### ワークフローのためのマルチデータソースのサポート

![20240407222523](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222523.png)

[詳細については、[ワークフロー]ドキュメントを参照してください](https://docs.nocobase.com/handbook/workflow)

### ワークフローのトリガーイベントの最適化

トリガー名の変更：


| 元の名前                       | 変更後               |
| ------------------------------ | -------------------- |
| フォームイベント、操作イベント | 操作後イベント       |
| スケジュールされたタスク       | スケジュールイベント |
| リクエストインターセプター     | 操作前イベント       |
| 承認                           | 承認イベント         |

次のイベントのトリガーモード構成の強化：

#### 操作後イベント

![20240407222652](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222652.png)

[詳細については、[ワークフロー - 操作後イベント]ドキュメントを参照してください](https://docs.nocobase.com/handbook/workflow-custom-action-trigger)

#### 操作前イベント

![20240407222834](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222834.png)

[詳細については、[ワークフロー - 操作前イベント]ドキュメントを参照してください](https://docs-jp.nocobase.com/handbook/workflow-request-interceptor)

### カスタムブランドプラグイン

![20240407222949](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407222949.png)

[詳細については、[カスタムブランディング]ドキュメントを参照してください](https://docs.nocobase.com/handbook/custom-brand)

### nanoidフィールドのサポート

![20240407223221](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223221.png)

[詳細については、[nanoidフィールド]ドキュメントを参照してください](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/nano-id)

### uuidフィールドのサポート

![20240407223431](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223431.png)

[詳細については、[uuidフィールド]ドキュメントを参照してください](https://docs.nocobase.com/handbook/data-modeling/collection-fields/advanced/uuid)

### unixタイムスタンプフィールドのサポート

![20240407223512](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223512.png)

[詳細については、[Unixタイムスタンプフィールド]ドキュメントを参照してください](https://docs.nocobase.com/handbook/data-modeling/collection-fields/datetime/unix-timestamp)

### 数字タイプフィールドのフォーマット設定のサポート

![20240407223736_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407223736_rec_.gif)

[詳細については、[フィールド設定 / 特定のプロパティ設定 / 数値コンポーネント]ドキュメントを参照してください](https://docs.nocobase.com/handbook/ui/fields/field-settings/number-format)

### サブパスデプロイメントのサポート

`APP_PUBLIC_PATH`環境変数が追加され、サブパスのデプロイメントをサポートします。例：

```
APP_PUBLIC_PATH=/nocobase/
```

ローカルでのアクセス：URL [http://localhost:13000/nocobase/](http://localhost:13000/nocobase/)

nginxプロキシの例：

```
server {
    listen 80;
    server_name your_domain.com;  # your_domain.comをあなたのドメインに置き換えてください

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

今すぐ、http://your\_domain.com/nocobase/にアクセスできます。

### ブロックパフォーマンスの最適化

#### スケルトンスクリーン効果のサポート

ブロックカード

![20240407224956](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224956.png)

カンバンカード

![20240407224811](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407224811.png)

テーブルセル

![20240407230028](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240407230028.png)

#### ブロック構成の分散処理

以前は、ページ全体のあらゆるスキーマの変更がページ全体の再レンダリングを引き起こしていましたが、今では各ブロックのスキーマは独立しています。

```
<SchemaComponent distributed schema={} />
```

グリッドコンポーネントも分散処理をサポートします。

```
{
  'x-component': 'Grid',
  'x-component-props': {
    distributed: true,
  },
}
```

## 非互換性のある変更

### UIスキーマのさまざまなusePropsをx-use-decorator-propsおよびx-use-component-propsに置き換え

x-use-decorator-propsおよびx-use-component-propsは非侵入型であり、すべてのコンポーネントがサポートしています。
