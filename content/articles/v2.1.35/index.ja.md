### 🚀 機能改善

* **[ワークフロー：HTTP リクエストノード]** 不安定だったテストケースを修正しました。 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher
* **[操作：一括更新]** v2 のレコード更新および一括更新操作で、送信成功後のメッセージ、閉じる動作、リダイレクト動作を設定できるようにしました。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
* **[操作：レコードエクスポート]** v2 のインポートボタンとエクスポートボタンで、フィールド設定を検索できるようにしました。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
* **[操作：レコードエクスポート Pro]** v2 のインポート Pro ボタンとエクスポート Pro ボタンで、フィールド設定を検索できるようにしました。 by @katherinehhh

### 🐛 不具合修正

* **[client-v2]** v2 JS 列のイベントフローにおいて、トリガー条件で「現在のレコード」変数を使用できない問題を修正しました。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
* **[database]** MSSQL で複数値リレーションを絞り込み、メインコレクションのフィールドで並べ替えてページネーションした際に、クエリエラーが発生する問題を修正しました。 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
* **[data-source-manager]** 外部データソースのデータテーブルを同期した後も、削除済みのデータテーブルがデータベースマネージャーに残る問題を修正しました。 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで、スクリプトが結果を返した後、または非同期ワークフローがタイムアウトした後も Worker が終了しない問題を修正しました。 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
* **[データテーブルフィールド：自動採番]** データ移行後、複数のレコードが同じ最新作成日時を持つ場合に、自動採番の値が重複する可能性がある問題を修正しました。 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
* **[データソース：外部 SQL Server]** ユーザー向けの変更はありません。回帰テストカバレッジのみ追加しました。 by @cgyrock
* **[AI: ナレッジベース]** PGVector ナレッジベース検索で不要な PostgreSQL 接続が占有される問題と、異なるベクトルテーブルごとに接続プールが重複作成される問題を修正しました。 by @cgyrock
* **[データソース：外部 MySQL]** 外部データベースのデータソースに新しいテーブルを追加した後、以前選択したテーブルがランタイムコレクションから消える問題を修正しました。 by @cgyrock
* **[ワークフロー：承認]**
  * 承認申請の詳細で、サブテーブルフィールドの内容が表示されない問題を修正しました。 by @zhangzhonghe
  * 承認意見にデフォルト値を設定できるようにしました。 by @zhangzhonghe
