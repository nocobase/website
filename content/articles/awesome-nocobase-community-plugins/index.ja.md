NocoBase は誕生当初から、一貫してプラグインベースのアーキテクチャを採用してきました。

このアーキテクチャにより、NocoBase は高い柔軟性と拡張性を備えています。開発者はコアシステムを変更することなく、さまざまな業務要件に合わせて新しい機能を継続的に追加できます。

AI コーディングツールの発展により、プラグイン開発はさらに手軽になっています。Claude Code、Codex、Cursor などのツールに加え、[NocoBase が提供する AI プラグイン開発機能](https://docs.nocobase.com/ja/ai-dev)を活用することで、より多くの開発者が独自のプラグインを短期間で作成できるようになりました。

現在は、[Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) でコミュニティプラグインを探したり、自分で開発した拡張機能を共有したりしながら、NocoBase のプラグインエコシステムづくりに参加できます。

![Frame 94-kkiivw.jpg](https://static-docs.nocobase.com/Frame%2094-kkiivw.jpg)

## 収録済みのコミュニティプラグイン

現在、[Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) には、コミュニティ開発者が作成した複数のプラグインが収録されています。これらは実際のプロジェクトから生まれたもので、一般的な課題を解決するもの、NocoBase の基本機能を拡張するもの、特定の業務シーンに対応するものがあります。

### [NocoBase Hooks](https://github.com/Bunnarin/nocobase-plugin-hooks)

**作者**：[Bunnarin](https://github.com/Bunnarin)

NocoBase Hooks は、PocketBase の `pb_hooks` に似た拡張方法を提供します。開発者は `storage/hooks/` ディレクトリにサーバー側の拡張を直接記述し、データベースイベント、ミドルウェア、カスタム API、ACL、ログなどの NocoBase 機能を利用できます。自動読み込み、開発環境でのホットリロード、TypeScript、独立した依存関係管理にも対応しています。

### [Global Search](https://github.com/trumanharry/nocobase-globalsearch-plugin)

**作者**：[trumanharry](https://github.com/trumanharry)

Global Search は、NocoBase の管理画面に複数のデータテーブルを横断して検索できる入口を追加します。顧客、注文、プロジェクト、連絡先など、複数種類のデータを同時に管理するシステムに適しています。

### [Office File Previewer](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-file-previewer-office)

**作者**：[OneTwoSmall](https://github.com/OneTwoSmall)

Office File Previewer は、NocoBase により柔軟なファイルプレビュー機能を追加し、Office 文書やその他のファイル形式を複数の方法で表示できます。

ナレッジベース、契約管理、文書管理、社内ファイルシステムなどで、NocoBase のページ上から直接ファイル内容を確認できるため、ダウンロードやアプリの切り替えを減らせます。

### [Enhanced Table Block](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-enhanced-table-block)

**作者**：[OneTwoSmall](https://github.com/OneTwoSmall)

Enhanced Table Block は、NocoBase のテーブルブロックを拡張し、より豊富なデータ表示と操作機能を提供します。

レポート、在庫、注文、財務データなど、表形式の操作が重要な場面に適しており、スプレッドシートに近い感覚でデータを確認・処理できます。

### [Auth: Email](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-auth-email)

**作者**：[OneTwoSmall](https://github.com/OneTwoSmall)

メール認証コードによる本人認証に対応します。

### [Custom Login Page](https://github.com/taichuy/nocobase-plugin-login-lite)

**作者**：[JAVA-LW](https://github.com/JAVA-LW)

Custom Login Page を使うと、管理者は NocoBase のログインページのテーマ、スタイル、表示内容を管理画面から直接設定できます。

企業ブランドを統一したいプロジェクトや、顧客、従業員、パートナー向けに独立したログイン画面を提供したい場合に適しています。

### [Block: Tabs](https://github.com/vokylin/plugin-block-tabs)

**作者**：[zoudeming-vk](https://github.com/zoudeming-vk)

Block: Tabs は、複数の NocoBase ブロックを同じタブ形式の画面内にまとめられるタブブロックを提供します。

情報量の多い詳細ページや管理ページでスクロール量を減らし、関連する内容をタブごとに分けて表示できるため、ページ構成がより分かりやすくなります。

### [Watermark](https://github.com/fengwenkai168/nocobase-plugin/)

**作者**：[fengwenkai168](https://github.com/fengwenkai168)

Watermark は、NocoBase のページに半透明の透かしを追加し、現在ログインしているユーザーの情報を表示できます。

管理者は透かしの文字、透明度、フォントサイズも調整できます。契約書、顧客情報、社内の機密データなど、スクリーンショットによる情報漏えいリスクを抑えたい場面に適しています。

### [Role Switcher](https://github.com/michaelxmn/plugin-role-switcher)

**作者**：[michaelxmn](https://github.com/michaelxmn)

Role Switcher は、上部ナビゲーションバーにロールをすばやく切り替えるための入口を追加します。

複数のロールを持つユーザーや、異なる権限設定を繰り返し確認する管理者・開発者にとって、ロール切り替えをより直感的かつ迅速に行えます。

### [Per-User Column Settings](https://github.com/Albert-mah/nocobase-plugin-user-columns)

**作者**：[Albert-mah](https://github.com/Albert-mah)

Per-User Column Settings は、ユーザーごとに独自のテーブル列設定を保存できるようにします。

各ユーザーは、他のユーザーが見るページ設定に影響を与えることなく、フィールドの表示・非表示、ドラッグによる並べ替え、列の固定、列幅の変更を行えます。フィールド数が多く、ロールごとに重視する情報が異なる業務システムに特に適しています。

### [Field Sequence Pro](https://github.com/ericto888/nocobase-plugin-field-sequence-pro)

**作者**：[ericto888](https://github.com/ericto888)

Field Sequence Pro は、公式の自動採番フィールドを拡張し、フォーム変数の取得、値マッピング辞書、多次元ごとの独立カウントという 3 つの機能を追加しています。既存の自動採番機能もそのまま利用できます。

注文番号、契約番号、取引番号など、複数のルールに基づいて一意のコードを生成する必要がある業務に適しています。

### [HTTP Error Handler](https://github.com/Albert-mah/plugin-http-error-handler)

**作者**：[Albert-mahmahuantest](https://github.com/Albert-mah)

HTTP Error Handler は、NocoBase にグローバルな 4xx／5xx エラー処理機能を追加します。

管理者は JS 式でエラー処理ルールを設定し、未処理の API エラーをカスタムエラーページに表示したり、指定ページへ自動的にリダイレクトしたりできます。エラーメッセージを統一し、ユーザー体験を改善したい業務システムに適しています。

### [Workflow: URL Trigger](https://github.com/Albert-mah/plugin-workflow-url-trigger)

**作者**：[Albert-mah](https://github.com/Albert-mah)

Workflow: URL Trigger は、外部 HTTP リクエストをワークフローの入口として利用できる URL イベントトリガーを追加します。

リクエスト URL のワイルドカードと正規表現によるマッチングに対応し、リクエストパラメータをワークフロー変数として利用できます。HTTP Response ノードと組み合わせることで、Webhook、API 連携、自動化フローを構築できます。

### [Workflow: Crypto](https://github.com/Albert-mah/plugin-workflow-crypto)

**作者**：[Albert-mah](https://github.com/Albert-mah)

Workflow: Crypto は、AES 暗号化・復号用のワークフローノードを提供します。

変数入力に対応し、復号後に JSON データを自動解析することもできます。外部システムと暗号化データを交換する必要がある場面に適しています。

### [Workflow: Auth Token](https://github.com/Albert-mah/plugin-workflow-auth-token)

**作者**：[Albert-mah](https://github.com/Albert-mah)

Workflow: Auth Token は、ワークフロー内で実際の NocoBase ログイン JWT を生成できます。

SSO 自動ログインリンクやプログラムから利用するアクセストークンの作成に使用でき、URL Trigger と Crypto を組み合わせることで、完全なシングルサインオンフローも実現できます。

## NocoBase のプラグインエコシステムを一緒に育てる

NocoBase プラグインを開発している場合は、ぜひ [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) に投稿してください。

より多くのユーザーに価値あるプラグインを見つけてもらい、優れたプラグインと開発者がさらに注目されることを目指しています。

今後も、優れたコミュニティプラグインと、その開発者を定期的に紹介していきます。
