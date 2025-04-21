## コア最適化

### シングルラインテキストフィールドでリンクを有効にする

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### 関連ブロックでの関連付け/解除操作のサポート

関連ブロック内で直接、関連付けおよび解除の操作を実行できるようになりました。

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### ワークフロートリガーのデバッグ

ワークフローの設定中に直接トリガーを実行し、デバッグが可能になりました。

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### モバイル向け日付コンポーネントの操作性向上

モバイルデバイス上の日付関連コンポーネントの操作体験が向上しました。

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### フロントエンドパフォーマンスの最適化

* 初期画面の読み込み速度を最適化しました。
* フロントエンドのビルドツールを **rspack** に変更しました。
* 各プラグインパッケージのエントリーファイルのバンドルサイズを削減しました。
* 大量データテーブルのレンダリングパフォーマンスを向上させました。
* メニュー切り替え時のカクつきを低減しました。
* 新たに `lazy` および `useLazy` ライブラリを用いたオンデマンド読み込み手法を導入しました。

以下は、`lazy` と `useLazy` の使用方法の簡単な紹介です:

```ts
import { lazy, useLazy } from '@nocobase/client';

// 単一コンポーネントのエクスポート:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// 複数コンポーネントのエクスポート:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// デフォルトコンポーネントのエクスポート:
const ThemeList = lazy(() => import('./components/ThemeList'));

// フックの返却:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// ライブラリの返却:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## 新しいプラグイン

### Import Pro

非同期のインポート操作をサポートし、別スレッドで実行されるようになりました。これにより、大量のデータを高パフォーマンスでインポートできるようになります。

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

参考: [Import Pro](https://docs-jp.nocobase.com/handbook/action-import-pro)

### Export Pro

非同期のエクスポート操作をサポートし、別スレッドで実行されます。大量データのエクスポートや添付ファイルのエクスポートが可能です。

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

参考: [Export Pro](https://docs-jp.nocobase.com/handbook/action-export-pro)

### テンプレート印刷

テンプレート印刷プラグインでは、Word、Excel、または PowerPoint（`.docx`、`.xlsx`、`.pptx` 形式に対応）を使用してテンプレートファイルを編集できます。テンプレート内にプレースホルダーや論理構造を設定することで、`.docx`、`.xlsx`、`.pptx`、さらには `.pdf` 形式など、あらかじめ決められたフォーマットのファイルを動的に生成できます。この機能は、見積書、請求書、契約書など、さまざまな業務文書の作成に広く活用できます。

**主な機能**

* **多形式対応**: Word、Excel、PowerPoint のテンプレートに対応し、多様な文書生成ニーズに応えます。
* **動的データ埋め込み**: 定義されたプレースホルダーと論理に基づき、文書の内容を自動的に埋め込みます。
* **柔軟なテンプレート管理**: テンプレートの追加、編集、削除、分類管理が容易になり、メンテナンスが効率的です。
* **豊富なテンプレート構文**: 基本的な置換、配列アクセス、ループ、条件出力など、複雑な文書生成に対応する構文をサポートします。
* **フォーマッター対応**: 条件付き出力、日付フォーマット、数字フォーマットなどを提供し、文書の可読性とプロフェッショナルさを向上させます。
* **効率的な出力オプション**: PDFを直接生成でき、共有や印刷が容易です。

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

参考: [テンプレート印刷](https://docs-jp.nocobase.com/handbook/action-template-print)

### Audit Logger

このプラグインは、システム内のユーザー活動およびリソース操作の履歴を記録・追跡します。

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

参考: [Audit Logger](https://docs-jp.nocobase.com/handbook/audit-logger)

### ワークフロー：サブフロー

この機能により、あるワークフローから別のプロセスを呼び出すことができます。現在のワークフローの変数をサブフローの入力として使用し、サブフローの出力を後続のノードで利用する変数として活用できます。

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

参考: [ワークフロー：サブフロー](https://docs-jp.nocobase.com/handbook/workflow-subflow)

### Email Manager

GoogleまたはMicrosoftのメールアカウントをNocoBaseに統合し、メールの送受信、閲覧、管理を行えるようになりました。また、メールをページ内に直接埋め込むことも可能です。

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

参考: [メール: 管理者設定](https://docs-jp.nocobase.com/handbook/email-manager/usage-admin)

### ファイルストレージ：S3 (Pro)

Amazon S3、Alibaba Cloud OSS、Tencent Cloud COS、MinIO など、S3プロトコルに対応したファイルストレージタイプをサポートします。また、直接ファイルアップロードやプライベートアクセスも可能です。

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

参考: [ファイルストレージ：S3(Pro)](https://docs-jp.nocobase.com/handbook/file-manager/storage/s3-pro)
