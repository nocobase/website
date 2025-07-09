## 新機能

### パスワードを忘れた場合 – メールによる回復をサポート

ユーザーはメールを使ってパスワードを回復できるようになりました。この機能は 設定 > 認証 > パスワードを忘れた場合 で有効にし、メール通知チャネルを設定し、パスワードリセットメールをカスタマイズできます（変数とHTML形式に対応）。

![20250707104631_rec_-ihynhs.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

参考ドキュメント：[パスワードを忘れた場合](https://docs-jp.nocobase.com/handbook/auth/user#%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%92%E5%BF%98%E3%82%8C%E3%81%9F%E5%A0%B4%E5%90%88)

### カスタム集計変数

カウント、合計、平均などの統計変数の作成をサポートします。

これらの変数はメニューバッジやページラベルなどで使用でき、インターフェースをより直感的で情報豊富にします。

![20250707110736_rec_-fzpk98.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

参考ドキュメント：[カスタム集計変数](https://docs-jp.nocobase.com/handbook/custom-variables)

### メール管理

メール管理モジュールが全面的にアップグレードされ、メールの削除、バッチ送信、同期間隔設定、AI生成コンテンツ、そしてさまざまなユーザー体験の改善をサポートするようになりました。

![image-9dyulg.png](https://static-docs.nocobase.com/image-9dyulg.png)

### データソース

外部データソースの SQL Server の BIT フィールドをサポートし、外部ソースからのデータテーブルのオンデマンド読み込みを可能にします。

![image-rml96b.png](https://static-docs.nocobase.com/image-rml96b.png)

### テキストコピー

テキストフィールドの内容をワンクリックでコピーする機能をサポートします。

![20250707105447_rec_-m25b6x.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### 【ワークフロー：HTTPリクエストノード】multipart/form-dataタイプのサポート

ワークフローのHTTPリクエストノードの設定時に、multipart/form-dataコンテンツタイプを選択できるようになりました。
有効にすると、リクエストボディはフォームデータの送信（fileフィールドを含む）を受け入れ、ファイルアップロードなどのシナリオをサポートします。

![image-gutu74.png](https://static-docs.nocobase.com/image-gutu74.png)

### 【ワークフロー：承認】承認ノード結果の承認記録変数生成サポート

承認ノードの実行結果を後続ノードで変数として利用できるようになり、ステータスや関連データが自動的に記録されます。

![20250614095052](https://static-docs.nocobase.com/20250614095052.png)

参考ドキュメント：[Node Results](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## 改善点

### スキャンで入力補完

汎用テキスト入力コンポーネントに「スキャン有効化」オプションが追加されました。
有効にすると、入力欄の右側にスキャンボタンが表示され、スキャン機器を使ってデータを入力できます。
また、手動入力の許可設定も可能です。

![image-u7gfro.png](https://static-docs.nocobase.com/image-u7gfro.png)

参考ドキュメント：[スキャン入力](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Markdownブロックのローカライズ対応

Markdownコンテンツが {{t 'xxx' }} 構文を使った多言語テキストの挿入に対応しました。

![20250707132207_rec_-a1fu68.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

参考ドキュメント：[ローカライズ](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### メニューリンクで新しいウィンドウで開く機能をサポート

メニューリンクに「新しいウィンドウで開く」オプションが追加され、リンクの開き方をカスタマイズできるようになりました。

![image-x0qfsq.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### カレンダーブロックで週の開始曜日を設定可能に

カレンダー表示の週の開始曜日を日曜日または月曜日から選択でき、地域ごとの習慣に合わせてカスタマイズ可能になりました。

![image-uu5ubi.png](https://static-docs.nocobase.com/image-uu5ubi.png)

参考ドキュメント：[週の開始曜日](https://docs-jp.nocobase.com/handbook/calendar#week-start-day)

### Markdown（Vditor）表示モードで画像のクリックズームをサポート

表示モードでMarkdownコンテンツ内の画像をクリックすると拡大表示され、読みやすさが向上します。

![20250707134351_rec_-zd0mvw.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### ワークフローモジュールの機能とパフォーマンスの包括的な強化

- より多くのフィールドによるワークフローのフィルタリングをサポートし、検索効率を向上
- モバイル表示スタイルを最適化し、ユーザー体験を向上
- JSONフィールドの読み込みを除外し、実行計画リストの読み込みパフォーマンスを大幅に改善
- ノードのテスト実行用の新しいログAPIを追加
- `getCollectionFieldOptions` メソッドのAPIインターフェースを調整し、柔軟性を強化

![image-5b3byb.png](https://static-docs.nocobase.com/image-5b3byb.png)

### 承認プロセス機能強化と体験向上

- 転署・加署の担当者選択リストに設定項目を追加し、より多くのフィールド情報の表示をサポートして、より正確な選択を支援
- タイムラインの時間表示を絶対時間に調整し、可読性を向上
- ワークフロープラグインから承認関連のデータテーブルをインポートし、ローカルテーブルの上書きを防止
- 変数APIインターフェース構造を調整し、柔軟性と一貫性を強化

![20250707141716_rec_-v2nc4q.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### 環境変数によるデータベース接続プールオプションの設定をサポート

環境変数を通じてデータベース接続プールのパラメータを柔軟に設定でき、デプロイの柔軟性を向上させます。

![image-tz87as.png](https://static-docs.nocobase.com/image-tz87as.png)

### コメントブロックでページネーションをサポート

大量データのシナリオにおいて、コメントのページ分け読み込みをサポートし、読み込み性能と閲覧体験を向上させます。

![20250707155143_rec_-ch7qvy.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### モバイル体験の改善

- 通知ポップアップをモバイルスタイルに対応
- モバイルレイアウト判定ロジックを最適化し、レスポンスの精度を向上
