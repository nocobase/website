### 🎉 新機能

* **[クライアント]** カスタム集計変数のサポート（[#6916](https://github.com/nocobase/nocobase/pull/6916)）@zhangzhonghe
  参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[ユーティリティ]** 日付フィールドフィルタでカスタムオフセットをサポート（[#6854](https://github.com/nocobase/nocobase/pull/6854)）@katherinehhh
* **[コレクションフィールド：コード]** コードエディタフィールドの高さ設定を追加 @mytharcher
* **[アクション：レコードインポート Pro]**
  * インポート設定時に複数フィールドでユニークレコードを定義できるようにしました @aaaaaajie
  * インポート設定時に空白セルの上書き / 無視設定をサポートしました @aaaaaajie
* **[カスタム変数]** カスタム集計変数のサポート @zhangzhonghe
  参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[Email マネージャー]**
  * メールを ToDo としてマークし、メモを追加できるようにしました @jiannx
  * ラベルと設定の組み合わせをサポートしました @jiannx

### 🚀 機能改善

* **[クライアント]** 日付フィルタオプションの表示内容を調整（[#6928](https://github.com/nocobase/nocobase/pull/6928)）@katherinehhh
* **[未定義]** CI 環境の Node バージョンを 20 にアップグレード（[#6927](https://github.com/nocobase/nocobase/pull/6927)）@mytharcher
* **[カレンダー]** カレンダーブロックにリフレッシュボタンの設定可能機能を追加（[#6920](https://github.com/nocobase/nocobase/pull/6920)）@katherinehhh
* **[アクション：レコードインポート]**
  * xlsx インポートのパフォーマンスを最適化（[#6850](https://github.com/nocobase/nocobase/pull/6850)）@aaaaaajie
  * xlsx インポートのパフォーマンスを最適化（[#6850](https://github.com/nocobase/nocobase/pull/6850)）@aaaaaajie
* **[アクション：レコードエクスポート]** XLSX 形式へのエクスポート時のパフォーマンス最適化（[#6729](https://github.com/nocobase/nocobase/pull/6729)）@aaaaaajie
* **[ブロック: iframe]** 日付変数の割り当てロジックを改善（[#6828](https://github.com/nocobase/nocobase/pull/6828)）@katherinehhh
* **[ワークフロー：カスタムアクションイベント]** 中国語キーに基づく英語ロケールの修正 @mytharcher
* **[アクション：レコードエクスポート Pro]** XLSX 形式へのエクスポート時のパフォーマンス最適化 @aaaaaajie
* **[ワークフロー：承認]** ワークフロータスクセンターでの全ての未処理タスク一括処理をサポート @mytharcher
* **[Email マネージャー]** スキーマ実装後のメール送信と AI 機能をサポート @jiannx

### 🐛 不具合修正

* **[データベース]** 多対多関連での uuid/nanoid 自動生成機能の不動作を修正（[#6912](https://github.com/nocobase/nocobase/pull/6912)）@aaaaaajie
* **[クライアント]**
  * 連携ルールにおける noneOf 条件チェックの失敗（[#6934](https://github.com/nocobase/nocobase/pull/6934)）@katherinehhh
  * ブロックの高さ設定がリアルタイム適用されない問題（[#6904](https://github.com/nocobase/nocobase/pull/6904)）@katherinehhh
  * 連携ルール内のネスト条件変数の正しくレンダリングされない問題（[#6929](https://github.com/nocobase/nocobase/pull/6929)）@katherinehhh
  * 日付範囲制限における日付変数の解析エラー（[#6930](https://github.com/nocobase/nocobase/pull/6930)）@katherinehhh
  * 連携ルールにおける toMany 関連フィールドの空値チェックエラー（[#6905](https://github.com/nocobase/nocobase/pull/6905)）@katherinehhh
  * 関連フィールド追加時の無効なスタイルフォーマットによるレンダリングエラー（[#6903](https://github.com/nocobase/nocobase/pull/6903)）@katherinehhh
  * サブテーブル内の連携ルールにおける現在オブジェクト変数の欠落（[#6907](https://github.com/nocobase/nocobase/pull/6907)）@katherinehhh
* **[未定義]** commander パッケージの要件により Node 20 を使用（[#6924](https://github.com/nocobase/nocobase/pull/6924)）@mytharcher
* **[データソースマネージャー]** ドラッグアンドドロップソート機能の不動作を解決（[#6937](https://github.com/nocobase/nocobase/pull/6937)）@chenos
* **[API ドキュメント]** req.headers に欠落していたサブアプリ情報を追加（[#6933](https://github.com/nocobase/nocobase/pull/6933)）@chenos
* **[通知：アプリ内メッセージ]** 「全て既読にする」アクションが他ユーザーのデータに影響を及ぼす問題を解決（[#6926](https://github.com/nocobase/nocobase/pull/6926)）@sheldon66
* **[アクション：レコードエクスポート]** ネスト関連付けのエクスポートエラーを修正（[#6917](https://github.com/nocobase/nocobase/pull/6917)）@aaaaaajie
* **[コレクションフィールド: Markdown (Vditor)]** Markdown (Vditor) フィールドのテーマ適応エラー（[#6919](https://github.com/nocobase/nocobase/pull/6919)）@katherinehhh
* **[コレクション：ツリー]** パス更新時の類似パスプレフィックスの誤更新を回避（[#6913](https://github.com/nocobase/nocobase/pull/6913)）@2013xile
* **[ワークフロー：メールノード]** 未定義の「宛先」フィールドの処理とメール受信者の処理を改善（[#6915](https://github.com/nocobase/nocobase/pull/6915)）@sheldon66
* **[検証]** 誤った英語表記「verificators」→「verifiers」を修正（[#6834](https://github.com/nocobase/nocobase/pull/6834)）@2013xile
* **[ファイルマネージャー]**
  * クライアントコレクションの注入とアップロードパラメータの修正（[#6909](https://github.com/nocobase/nocobase/pull/6909)）@mytharcher
  * プレビューマッチルールの修正（[#6902](https://github.com/nocobase/nocobase/pull/6902)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]**
  * プラグインのロード順序に起因するエラーを回避 @mytharcher
  * エラーハンドラがクラスでマッチしない問題の修正 @mytharcher
  * 数回クリック後のボタン動作エラーの修正 @mytharcher
* **[マルチキーワードフィルタ]** 各キーワードの前後の空白を削除 @zhangzhonghe
* **[2 段階認証 (2FA)]** 2FA 有効化時に検証機能の設定を必須とする @2013xile
* **[ファイルストレージ: S3 (Pro)]**
  * 重複するアップロードパラメータを修正 @mytharcher
  * プレビュー URL とアップロードパラメータを修正 @mytharcher
* **[テンプレート印刷]** useFieldsTree 内の hasChildren ロジックを強化し、uiSchema の enum チェックを含める @sheldon66
* **[ブロック：多段フォーム]** タイプ定義を修正 @mytharcher
* **[ワークフロー：承認]**
  * ロケールの修正 @mytharcher
  * 承認プロセス送信前のデータ追加・計算を修正 @mytharcher
  * 関連付け追加計算の修正 @mytharcher
  * ViewAction のレコード ID 不正を修正 @mytharcher
* **[Email マネージャー]**
  * mailMessageNotes と mailMessageLabels コレクションの API アクセス許可を修正 @jiannx
  * メモ追加モーダルのエラーを修正 @jiannx
  * アクションカラムの削除 @jiannx
