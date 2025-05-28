### 🎉 新機能

* **[未定義]** Gitpod を新たにサポート。クリック 1 回で開発環境を起動し、すぐに開発を開始できます。（[#6922](https://github.com/nocobase/nocobase/pull/6922)）@kerwin612
* **[アクション：レコードインポート Pro]**
  * インポート設定時に複数フィールドでユニークレコードを定義できるようにしました @aaaaaajie
  * インポート設定時に空白セルの上書き / 無視設定をサポートしました @aaaaaajie
* **[コレクションフィールド：コード]** コードエディタフィールドの高さ設定を追加 @mytharcher
* **[Email マネージャー]**
  * メールを ToDo としてマークし、メモを追加できるようにしました @jiannx
  * ラベルと設定の組み合わせをサポートしました @jiannx

### 🚀 機能改善

* **[クライアント]**
  * 日付範囲フィルタコンポーネントのスタイルを改善（[#6939](https://github.com/nocobase/nocobase/pull/6939)）@katherinehhh
  * 隠したフォームコントロールが Tab キーをキャプチャする問題を修正し、フォーム操作効率を大幅に向上（[#6942](https://github.com/nocobase/nocobase/pull/6942)）@kerwin612
  * 確認ダイアログ表示前に必須フィールドの検証を行う（[#6931](https://github.com/nocobase/nocobase/pull/6931)）@katherinehhh
  * 日付フィルタオプションの表示内容を調整（[#6928](https://github.com/nocobase/nocobase/pull/6928)）@katherinehhh
* **[未定義]** CI 環境の Node バージョンを 20 にアップグレード（[#6927](https://github.com/nocobase/nocobase/pull/6927)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * フォームラベルのコロン表示設定が機能しない問題（[#6947](https://github.com/nocobase/nocobase/pull/6947)）@katherinehhh
  * ドラッグによるブロックサイズ変更が機能しない問題（[#6944](https://github.com/nocobase/nocobase/pull/6944)）@chenos
  * フィールド割り当てコンポーネントの i18n 機能不動作（[#6945](https://github.com/nocobase/nocobase/pull/6945)）@katherinehhh
  * 連携ルールにおける noneOf 条件チェックの失敗（[#6934](https://github.com/nocobase/nocobase/pull/6934)）@katherinehhh
  * 連携ルール内のネスト条件変数の正しくレンダリングされない問題（[#6929](https://github.com/nocobase/nocobase/pull/6929)）@katherinehhh
  * ブロックの高さ設定がリアルタイム適用されない問題（[#6904](https://github.com/nocobase/nocobase/pull/6904)）@katherinehhh
  * エラーポップアップ内のコピーボタンが「[object Object]」としてコピーされる問題を修正（[#6908](https://github.com/nocobase/nocobase/pull/6908)）@kerwin612
  * 日付範囲制限における日付変数の解析エラー（[#6930](https://github.com/nocobase/nocobase/pull/6930)）@katherinehhh
* **[データベース]** 多対多関連での uuid/nanoid 自動生成機能の不動作を修正（[#6912](https://github.com/nocobase/nocobase/pull/6912)）@aaaaaajie
* **[未定義]** commander パッケージの要件により Node 20 を使用（[#6924](https://github.com/nocobase/nocobase/pull/6924)）@mytharcher
* **[コレクションフィールド: Markdown (Vditor)]** markdown-vditor フィールドコンポーネントのズーム後の幅問題（[#6946](https://github.com/nocobase/nocobase/pull/6946)）@katherinehhh
* **[API ドキュメント]** req.headers に欠落していたサブアプリ情報を追加（[#6933](https://github.com/nocobase/nocobase/pull/6933)）@chenos
* **[通知：アプリ内メッセージ]** 「全て既読にする」アクションが他ユーザーのデータに影響を及ぼす問題を解決（[#6926](https://github.com/nocobase/nocobase/pull/6926)）@sheldon66
* **[データソースマネージャー]** ドラッグアンドドロップソート機能の不動作を解決（[#6937](https://github.com/nocobase/nocobase/pull/6937)）@chenos
* **[アクション：レコードエクスポート]** ネスト関連付けのエクスポートエラーを修正（[#6917](https://github.com/nocobase/nocobase/pull/6917)）@aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** プラグインのロード順序に起因するエラーを回避 @mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * 重複するアップロードパラメータを修正 @mytharcher
  * プレビュー URL とアップロードパラメータを修正 @mytharcher
* **[ブロック：多段フォーム]** タイプ定義を修正 @mytharcher
* **[ワークフロー：承認]**
  * ViewAction のレコード ID 不正を修正 @mytharcher
  * ロケールの修正 @mytharcher
  * 承認プロセス送信前のデータ追加・計算を修正 @mytharcher
* **[Email マネージャー]**
  * アクションカラムの削除 @jiannx
  * メモ追加モーダルのエラーを修正 @jiannx
  * mailMessageNotes と mailMessageLabels コレクションの API アクセス許可を修正 @jiannx
