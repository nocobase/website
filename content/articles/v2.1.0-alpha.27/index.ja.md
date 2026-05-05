### 🎉 新機能

* **[cli]** リリース関連コマンドを追加 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
* **[undefined]** インドネシア語とベトナム語のドキュメントを追加。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
* **[server]** AI 社員が Bash コマンドで組み込みドキュメントを検索可能に ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
* **[AI 社員]** LLM 接続サービスが Xiaomi MIMO プラットフォームのサポートを追加 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
* **[マイグレーション管理]** Nocobase CLI 専用 APIs を追加 by @Andrew1989Y
* **[バックアップマネージャー]** Nocobase CLI 専用 APIs を追加 by @Andrew1989Y

### 🚀 機能改善

* **[flow-engine]** v2 ページブロックのドラッグレイアウトの操作表現を最適化 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe
* **[undefined]**
  * スペイン語、ポルトガル語、ロシア語、ドイツ語のドキュメントを英語ドキュメントに合わせて整合。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  * フランス語ドキュメントを中国語ドキュメントと同期。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
* **[AI 社員]**
  * Nathan の RunJS 編集ツールを最適化し、長い AI 会話でのカクつきを軽減 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
  * AI 社員の分類を調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
* **[ブロック：カンバン]**
  * カンバンのデフォルト列幅を調整。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  * カレンダーとカンバンブロックの作成設定を最適化。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
* **[ワークフロー：承認]** リレーションフィールドをデータベースから読み込む表示モードを廃止予定機能としてマークし、ユーザーに移行を促す by @mytharcher

### 🐛 不具合修正

* **[undefined]**
  * 依存関係とビルド検証パイプラインを修正し、独立した pro プラグインの checkout 失敗時に静かにスキップされてビルド成果物が欠落する問題を回避。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  * 翻訳肥大化ファイルを修正し、多言語ドキュメント構造を整合。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
* **[client-v2]** ワークフロートリガーボタンでバインドするワークフローを設定できない問題を修正 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
* **[flow-engine]** フォーム関連の変数で、システムの非表示フィールドを選択できてしまう問題を修正。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
* **[ai]** AI 社員登録時に category フィールド設定が不足している問題を修正 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
* **[client]**
  * v2 テーブルブロックでデータをフィルタまたは更新した後、JS フィールドのセルがまれに空白になる問題を修正。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  * リレーションフィールドのポップアップ選択ページで、フィルタフォームのフィールドが消える問題を修正 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  * v2 フォームの Data scope 変数で、依存フィールドに値がない場合に null が渡されない問題を修正。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  * JS column が行データの変更時にレンダリング処理を再実行 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
* **[database]** SQL Server の外部データソースで日時フィールドのフィルタリングに失敗する可能性がある問題を修正 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
* **[AI 社員]**
  * 操作ボタンの AI 社員リストに開発用社員が表示される問題を修正 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
  * AI 社員で deepseek v4 接続時にエラーが発生する問題を修正 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock
* **[ブロック：ガントチャート]** ガントチャートブロックに「ドラッグで再スケジュールを有効化」設定を追加。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
* **[ブロック：ツリー]** フィルタブロックのノード表示異常を修正 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
* **[操作：レコードをインポート]** インポートエラー時に失敗行インデックスが誤っている問題を修正 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
* **[ブロック：カンバン]** フィールド設定ポップオーバーが重複表示される問題を修正 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
* **[操作：レコードをエクスポート Pro]** 同期／非同期を自動判定するモードが有効にならない問題を修正 by @mytharcher
* **[マイグレーション管理]** migration:create が非同期タスク記録から taskId を返してしまう問題を修正。 by @Andrew1989Y
* **[ワークフロー：承認]**
  * 承認 `execute` のトリガータイミングを修正し、承認トランザクションのコミット後に `latestExecutionId` を同期することを保証 by @mytharcher
  * 型エラーを修正 by @mytharcher
