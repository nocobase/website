週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/ja/blog/v2.0.49)

*リリース日：2026-05-06*

### 🚀 機能改善

* **[undefined]** 手動リリースワークフローに Feishu への失敗時通知を追加 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn

### 🐛 不具合修正

* **[データソース：メインデータベース]** コレクション読み込み中に `fields` が未定義の場合でもクラッシュしないよう改善 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
* **[UI テンプレート]** ポップアップテンプレート一覧で利用可能なテンプレートが正しく読み込まれない問題を修正。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
* **[AI 社員]** deepseek v4 モデル利用時に、AI 社員でまれにエラーが発生する問題を修正 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
* **[ファイルマネージャー]** プレビュー時のファイルダウンロードにおけるエラー処理を改善 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
* **[ワークフロー：承認]** 起票可能な承認一覧 API で、フィルタや他のクエリパラメータが機能しない問題を修正 by @mytharcher

### [v2.0.48](https://www.nocobase.com/ja/blog/v2.0.48)

*リリース日：2026-05-04*

### 🐛 不具合修正

* **[AI 社員]** 操作ボタンの AI 社員リストに開発用社員が表示される問題を修正 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
* **[ワークフロー：承認]**
  * 元の申請フォームブロックで、s3-pro に保存されたファイルが再読み込みされない問題を修正 by @mytharcher
  * 承認関連操作で、一部のフロントエンド変数を解析できるように改善 by @mytharcher

### [v2.0.47](https://www.nocobase.com/ja/blog/v2.0.47)

*リリース日：2026-05-01*

### 🎉 新機能

* **[AI 社員]** LLM 接続サービスが Xiaomi MIMO プラットフォームのサポートを追加 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

### 🚀 機能改善

* **[flow-engine]** v2 ページブロックのドラッグレイアウトの操作表現を最適化 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe
* **[AI 社員]** AI 社員の分類を調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
* **[ワークフロー：承認]** リレーションフィールドをデータベースから読み込む表示モードを廃止予定機能としてマークし、ユーザーに移行を促す by @mytharcher

### 🐛 不具合修正

* **[database]** SQL Server の外部データソースで日時フィールドのフィルタリングに失敗する可能性がある問題を修正 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
* **[client]**
  * v2 フォームの Data scope 変数で、依存フィールドに値がない場合に null が渡されない問題を修正。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  * JS column が行データの変更時にレンダリング処理を再実行 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
  * リレーションフィールドのポップアップ選択ページで、フィルタフォームのフィールドが消える問題を修正 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  * v2 テーブルブロックでデータをフィルタまたは更新した後、JS フィールドのセルがまれに空白になる問題を修正。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
* **[flow-engine]** フォーム関連の変数で、システムの非表示フィールドを選択できてしまう問題を修正。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
* **[操作：レコードをインポート]** インポートエラー時に失敗行インデックスが誤っている問題を修正 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
* **[ブロック：ガントチャート]** ガントチャートブロックに「ドラッグで再スケジュールを有効化」設定を追加。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
* **[AI 社員]** AI 社員で deepseek v4 接続時にエラーが発生する問題を修正 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock
* **[操作：レコードをエクスポート Pro]** 同期／非同期を自動判定するモードが有効にならない問題を修正 by @mytharcher
* **[ワークフロー：承認]**
  * 型エラーを修正 by @mytharcher
  * 承認 `execute` のトリガータイミングを修正し、承認トランザクションのコミット後に `latestExecutionId` を同期することを保証 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/ja/blog/v2.1.0-beta.25)

*リリース日：2026-05-06*

### 🎉 新機能

* **[cli]** リリース関連コマンドを追加 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
* **[undefined]** インドネシア語とベトナム語のドキュメントを追加。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
* **[AI 社員]** LLM 接続サービスで Xiaomi MIMO プラットフォームに対応 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
* **[マイグレーション管理]** NocoBase CLI 専用 API を追加 by @Andrew1989Y
* **[バックアップマネージャー]** NocoBase CLI 専用 API を追加 by @Andrew1989Y

### 🚀 機能改善

* **[undefined]**
  * 手動リリースワークフローに Feishu への失敗時通知を追加([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/ja/blog/v2.1.0-alpha.30)

*リリース日：2026-05-06*

### 🚀 機能改善

* **[undefined]** 手動リリースワークフローに Feishu への失敗時通知を追加 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
* **[IdP: OAuth]** OAuth セッションの有効期限をシステムの Token ポリシーに合わせて統一 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 不具合修正

* **[client-v2]** リモートプラグイン読み込み時に、すでに `.js` 拡張子が付いたプラグイン URL が重複した `.js.js` パスとして誤解析される問題を修正。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
* **[cli]** CLI のブールオプションを否定パラメータで無効化できない問題を修正 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
* **[AI 社員]**
  * deepseek v4 モデル利用時に、AI 社員でまれにエラーが発生する問題を修正 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  * ワークフロー AI 社員ノードで AI 社員を切り替えた際に、スキルが消えてしまう問題を修正 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
* **[データソース：メインデータベース]** コレクション読み込み中に `fields` が未定義の場合でもクラッシュしないよう改善 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
* **[UI テンプレート]** ポップアップテンプレート一覧で利用可能なテンプレートが正しく読み込まれない問題を修正。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
* **[区块：看板]** ポップアップまたはサブページ内の関連カンバンブロックで、未解析のランタイムリソースパラメータが使われる問題を修正。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
* **[ワークフロー：承認]** 起票可能な承認一覧 API で、フィルタや他のクエリパラメータが機能しない問題を修正 by @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/ja/blog/v2.1.0-alpha.29)

*リリース日：2026-05-04*

### 🐛 不具合修正

* **[ファイルマネージャー]** プレビュー時のファイルダウンロードにおけるエラーハンドリングを改善 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
* **[ワークフロー：承認]** 承認関連操作で、一部のフロントエンド変数を解析できるように改善 by @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/ja/blog/v2.1.0-alpha.28)

*リリース日：2026-05-04*

### 🐛 不具合修正

* **[ワークフロー：承認]** 元の申請フォームブロックで、s3-pro に保存されたファイルが再読み込みされない問題を修正 by @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/ja/blog/v2.1.0-alpha.27)

*リリース日：2026-05-03*

### 🎉 新機能

* **[cli]** リリース関連コマンドを追加 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
* **[undefined]** インドネシア語とベトナム語のドキュメントを追加。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
* **[server]** AI 社員が Bash コマンドで組み込みドキュメントを検索可能に ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
* **[AI 社員]** LLM 接続サービスが Xiaomi MIMO プラットフォームのサポートを追加 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
* **[マイグレーション管理]** NocoBase CLI 専用 APIs を追加 by @Andrew1989Y
* **[バックアップマネージャー]** NocoBase CLI 専用 APIs を追加 by @Andrew1989Y

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
