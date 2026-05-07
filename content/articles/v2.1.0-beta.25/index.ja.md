### 🎉 新機能

* **[cli]** リリース関連コマンドを追加 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
* **[undefined]** インドネシア語とベトナム語のドキュメントを追加。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
* **[AI 社員]** LLM 接続サービスで Xiaomi MIMO プラットフォームに対応 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
* **[マイグレーション管理]** NocoBase CLI 専用 API を追加 by @Andrew1989Y
* **[バックアップマネージャー]** NocoBase CLI 専用 API を追加 by @Andrew1989Y

### 🚀 機能改善

* **[undefined]**
  * * ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
  * スペイン語、ポルトガル語、ロシア語、ドイツ語のドキュメントを英語版に合わせて更新。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  * フランス語ドキュメントを中国語版と同期。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
* **[IdP: OAuth]** OAuth セッションの有効期限をシステムの Token ポリシーに合わせて統一 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
* **[区块：看板]**
  * カンバンのデフォルト列幅を調整。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  * カレンダーおよびカンバンブロックの作成設定を改善。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
* **[AI 社員]** AI 社員の分類を調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
* **[ワークフロー：承認]** リレーションフィールドをデータベースから読み込む表示モードを非推奨とし、移行を促す案内を追加 by @mytharcher

### 🐛 不具合修正

* **[undefined]**
  * 依存関係とビルド検証パイプラインを修正し、独立した pro プラグインの checkout 失敗が見落とされ、ビルド成果物が欠落する問題を防止。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  * 翻訳ファイルの肥大化問題を修正し、多言語ドキュメントの構成を整合。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
* **[cli]** CLI のブールオプションを否定パラメータで無効化できない問題を修正 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
* **[client-v2]**
  * リモートプラグイン読み込み時に、すでに `.js` 拡張子が付いたプラグイン URL が重複した `.js.js` パスとして誤解析される問題を修正。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  * ワークフロー起動ボタンで紐付けるワークフローを設定できない問題を修正 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
* **[ai]** AI 社員登録時に `category` フィールドが設定されない問題を修正 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
* **[flow-engine]** フォーム関連変数で、システムの非表示フィールドを選択できてしまう問題を修正。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
* **[client]**
  * v2 テーブルブロックでフィルタやデータ更新後、JS フィールドのセルがまれに空白になる問題を修正。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  * v2 フォームの Data scope 変数で、依存フィールドに値がない場合に `null` が渡されない問題を修正。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  * リレーションフィールドのポップアップ選択画面で、フィルタフォームの項目が消える問題を修正 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  * JS カラムで、行データ変更時にレンダリングが再実行されない問題を修正 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
* **[database]** SQL Server 外部データソースで日時フィールドのフィルタに失敗する場合がある問題を修正 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
* **[AI 社員]**
  * deepseek v4 モデル利用時に、AI 社員でまれにエラーが発生する問題を修正 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  * ワークフロー AI 社員ノードで AI 社員を切り替えた際に、スキルが消えてしまう問題を修正 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  * 操作ボタンの AI 社員一覧に開発用社員が表示される問題を修正 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
* **[データソース：メインデータベース]** コレクション読み込み中に `fields` が未定義の場合でもクラッシュしないよう改善 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
* **[UI テンプレート]** ポップアップテンプレート一覧で利用可能なテンプレートが正しく読み込まれない問題を修正。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
* **[ファイルマネージャー]** プレビュー時のファイルダウンロードにおけるエラー処理を改善 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
* **[区块：树]** フィルタブロックのノード表示異常を修正 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
* **[区块：甘特图]** ガントチャートブロックに「ドラッグで再スケジュールを有効化」設定を追加。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
* **[区块：看板]** フィールド設定ポップオーバーが重複表示される問題を修正 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
* **[操作：导入记录]** インポートエラー時に失敗行インデックスが正しくない問題を修正 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
* **[操作：导出记录 Pro]** 同期／非同期の自動判定モードが機能しない问题を修正 by @mytharcher
* **[迁移管理]**`migration:create` が非同期タスク記録から `taskId` を返してしまう問題を修正。 by @Andrew1989Y
* **[ワークフロー：承認]**
  * 起票可能な承認一覧 API で、フィルタや他のクエリパラメータが機能しない問題を修正 by @mytharcher
  * 元の申請フォームブロックで、s3-pro に保存されたファイルが再読み込みされない問題を修正 by @mytharcher
  * 型エラーを修正 by @mytharcher
  * 承認関連操作で、一部のフロントエンド変数を解析できるよう改善 by @mytharcher
  * 承認 `execute` のトリガータイミングを修正し、承認トランザクションのコミット後に `latestExecutionId` が同期されるよう改善 by @mytharcher
