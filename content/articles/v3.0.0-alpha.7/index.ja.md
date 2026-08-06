### 🎉 新機能

* **[client-v2]** 独立設定アプリを、デフォルトのアプリケーションエントリとして設定できるようにしました。 ([#10267](https://github.com/nocobase/nocobase/pull/10267)) by @katherinehhh
* **[AIワーカー]**
  * AIワーカー設定ページで、プラグインが提供する Skill を各 AIワーカーに割り当てられるようにしました。 ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock
  * AI セッションと未読件数を Portal ごとに分離して管理できるようにしました。 ([#10266](https://github.com/nocobase/nocobase/pull/10266)) by @cgyrock
* **[Portal 管理]** 初期化時のデフォルト動作を更新しました。`latest` 以外のインストールでは新クライアントのエントリをデフォルトで使用し、AI、admin、mobile の各デフォルト Portal を作成します。また、CLI でクライアントのエントリモードを保存・更新できるようにしました。 ([#10281](https://github.com/nocobase/nocobase/pull/10281)) by @chenos

### 🚀 機能改善

* **[操作：一括更新]** v2 のレコード更新および一括更新操作で、送信成功後のメッセージ、閉じる動作、リダイレクト動作を設定できるようにしました。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
* **[操作：レコードエクスポート]** v2 のインポートボタンとエクスポートボタンで、フィールド設定を検索できるようにしました。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
* **[操作：レコードエクスポート Pro]** v2 のインポート Pro ボタンとエクスポート Pro ボタンで、フィールド設定を検索できるようにしました。 by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * ワークフロー承認設定モーダルに内側の余白がない問題を修正しました。 ([#10276](https://github.com/nocobase/nocobase/pull/10276)) by @zhangzhonghe
  * v2 JS 列のイベントフローにおいて、トリガー条件で「現在のレコード」変数を使用できない問題を修正しました。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
  * アプリケーションのアップグレード中は、メンテナンスモーダルと再試行ボタンを表示しないようにしました。 ([#10250](https://github.com/nocobase/nocobase/pull/10250)) by @zhangzhonghe
  * テーブル内の長い内容によって列幅が押し広げられ、テキストが自動改行されない問題を修正しました。 ([#10259](https://github.com/nocobase/nocobase/pull/10259)) by @zhangzhonghe
* **[database]** MSSQL で複数値リレーションを絞り込み、メインコレクションのフィールドで並べ替えてページネーションした際に、クエリエラーが発生する問題を修正しました。 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
* **[data-source-manager]** 外部データソースのデータテーブルを同期した後も、削除済みのデータテーブルがデータベースマネージャーに残る問題を修正しました。 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
* **[ローカライズ]** Lina AI アシスタントのエントリを含むローカライズ設定を開いた際に、画面がクラッシュする問題を修正しました。 ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock
* **[データソース管理]** フィールド設定画面のテーブルで、UI タイプを直接空にできてしまう問題を修正しました。 ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji
* **[バックアップ管理]** V2 のバックアップ復元処理中に、復元リクエストを重複送信できてしまう問題を修正しました。 ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh
* **[ファイルマネージャー]** ログイン済みのメンバーユーザーが、システムロゴなどの共有添付ファイルを読み込めない問題を修正しました。 ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher
* **[AIワーカー]** デフォルト以外の Portal に AIワーカーのエントリが表示されない問題を修正しました。 ([#10260](https://github.com/nocobase/nocobase/pull/10260)) by @cgyrock
* **[データソース：外部 MySQL]** 外部データベースのデータソースに新しいテーブルを追加した後、以前選択したテーブルがランタイムコレクションから消える問題を修正しました。 by @cgyrock
* **[AI: ナレッジベース]** PGVector ナレッジベース検索で不要な PostgreSQL 接続が占有される問題と、異なるベクトルテーブルごとに接続プールが重複作成される問題を修正しました。 by @cgyrock
* **[データソース：外部 SQL Server]** ユーザー向けの変更はありません。回帰テストカバレッジのみ追加しました。 by @cgyrock
* **[ワークフロー：承認]**
  * 承認申請の詳細で、サブテーブルフィールドの内容が表示されない問題を修正しました。 by @zhangzhonghe
  * 承認意見に RunJS を使用した場合、デフォルト値が反映されない問題を修正しました。 by @zhangzhonghe
  * 承認意見にデフォルト値を設定できるようにしました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** アプリケーション作成時、データベース名、schema、データテーブルのプレフィックスについて、英字以外の文字で始まる名前や不正な文字を含む名前を設定できてしまう問題を修正しました。 by @hongboji
* **[認証：LDAP]** LDAP ユーザー DN に UTF-8 エスケープと、カンマなどの構文エスケープが同時に含まれる場合、ログインできない問題を修正しました。 by @hongboji
