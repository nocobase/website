週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*リリース日：2025-05-23*

#### 🚀 機能改善

* **[未定義]** フル Docker イメージのビルド（[#6898](https://github.com/nocobase/nocobase/pull/6898)）@chenos
* **[クライアント]** 使用に伴いページが遅くなる問題を最適化（[#6888](https://github.com/nocobase/nocobase/pull/6888)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックにリフレッシュボタンの設定可能機能を追加（[#6920](https://github.com/nocobase/nocobase/pull/6920)）@katherinehhh
* **[ワークフロー：カスタムアクションイベント]** 中国語キーに基づく英語ロケールの修正 @mytharcher
* **[ワークフロー：承認]** ワークフロータスクセンターでの全ての未処理タスク一括処理をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 関連フィールド追加時の無効なスタイルフォーマットによるレンダリングエラー（[#6903](https://github.com/nocobase/nocobase/pull/6903)）@katherinehhh
  * 連携ルールにおける toMany 関連フィールドの空値チェックエラー（[#6905](https://github.com/nocobase/nocobase/pull/6905)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown (Vditor) フィールドのテーマ適応エラー（[#6919](https://github.com/nocobase/nocobase/pull/6919)）@katherinehhh
* **[コレクション：ツリー]** パス更新時の類似パスプレフィックスの誤更新を回避（[#6913](https://github.com/nocobase/nocobase/pull/6913)）@2013xile
* **[ファイルマネージャー]**
  * プレビューマッチルールの修正（[#6902](https://github.com/nocobase/nocobase/pull/6902)）@mytharcher
  * クライアントコレクションの注入とアップロードパラメータの修正（[#6909](https://github.com/nocobase/nocobase/pull/6909)）@mytharcher
  * 非画像ファイルのプレビュー URL の問題を修正（[#6889](https://github.com/nocobase/nocobase/pull/6889)）@mytharcher
* **[ワークフロー：メールノード]** 未定義の「宛先」フィールドの処理とメール受信者の処理を改善（[#6915](https://github.com/nocobase/nocobase/pull/6915)）@sheldon66
* **[ワークフロー：カスタムアクションイベント]**
  * 数回クリック後のボタン動作エラーの修正 @mytharcher
  * エラーハンドラがクラスでマッチしない問題の修正 @mytharcher
* **[ワークフロー：承認]** 関連付け追加計算の修正 @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*リリース日：2025-05-27*

#### 🎉 新機能

* **[アクション：レコードインポート Pro]**
  * インポート設定時に複数フィールドでユニークレコードを定義できるようにしました @aaaaaajie
  * インポート設定時に空白セルの上書き / 無視設定をサポートしました @aaaaaajie

#### 🚀 機能改善

* **[未定義]** CI 環境の Node バージョンを 20 にアップグレード（[#6927](https://github.com/nocobase/nocobase/pull/6927)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 連携ルールにおける noneOf 条件チェックの失敗（[#6934](https://github.com/nocobase/nocobase/pull/6934)）@katherinehhh
  * ブロックの高さ設定がリアルタイム適用されない問題（[#6904](https://github.com/nocobase/nocobase/pull/6904)）@katherinehhh
* **[未定義]** commander パッケージの要件により Node 20 を使用（[#6924](https://github.com/nocobase/nocobase/pull/6924)）@mytharcher
* **[データベース]** 多対多関連での uuid/nanoid 自動生成機能の不動作を修正（[#6912](https://github.com/nocobase/nocobase/pull/6912)）@aaaaaajie
* **[アクション：レコードエクスポート]** ネスト関連付けのエクスポートエラーを修正（[#6917](https://github.com/nocobase/nocobase/pull/6917)）@aaaaaajie
* **[データソースマネージャー]** ドラッグアンドドロップソート機能の不動作を解決（[#6937](https://github.com/nocobase/nocobase/pull/6937)）@chenos
* **[API ドキュメント]** req.headers に欠落していたサブアプリ情報を追加（[#6933](https://github.com/nocobase/nocobase/pull/6933)）@chenos
* **[通知：アプリ内メッセージ]** 「全て既読にする」アクションが他ユーザーのデータに影響を及ぼす問題を解決（[#6926](https://github.com/nocobase/nocobase/pull/6926)）@sheldon66
* **[ワークフロー：カスタムアクションイベント]** プラグインのロード順序に起因するエラーを回避 @mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * プレビュー URL とアップロードパラメータを修正 @mytharcher
  * 重複するアップロードパラメータを修正 @mytharcher
* **[ブロック：多段フォーム]** タイプ定義を修正 @mytharcher
* **[ワークフロー：承認]**
  * ViewAction のレコード ID 不正を修正 @mytharcher
  * 承認プロセス送信前のデータ追加・計算を修正 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*リリース日：2025-05-28*

#### 🎉 新機能

* **[未定義]** Gitpod を新たにサポート。クリック 1 回で開発環境を起動し、すぐに開発を開始できます。（[#6922](https://github.com/nocobase/nocobase/pull/6922)）@kerwin612
* **[アクション：レコードインポート Pro]**
  * インポート設定時に複数フィールドでユニークレコードを定義できるようにしました @aaaaaajie
  * インポート設定時に空白セルの上書き / 無視設定をサポートしました @aaaaaajie
* **[コレクションフィールド：コード]** コードエディタフィールドの高さ設定を追加 @mytharcher
* **[Email マネージャー]**
  * メールを ToDo としてマークし、メモを追加できるようにしました @jiannx
  * ラベルと設定の組み合わせをサポートしました @jiannx

#### 🚀 機能改善

* **[クライアント]**
  * 日付範囲フィルタコンポーネントのスタイルを改善（[#6939](https://github.com/nocobase/nocobase/pull/6939)）@katherinehhh
  * 隠したフォームコントロールが Tab キーをキャプチャする問題を修正し、フォーム操作効率を大幅に向上（[#6942](https://github.com/nocobase/nocobase/pull/6942)）@kerwin612
  * 確認ダイアログ表示前に必須フィールドの検証を行う（[#6931](https://github.com/nocobase/nocobase/pull/6931)）@katherinehhh
  * 日付フィルタオプションの表示内容を調整（[#6928](https://github.com/nocobase/nocobase/pull/6928)）@katherinehhh
* **[未定義]** CI 環境の Node バージョンを 20 にアップグレード（[#6927](https://github.com/nocobase/nocobase/pull/6927)）@mytharcher

#### 🐛 不具合修正

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/ja/blog/v1.7.0-alpha.15)

*リリース日：2025-05-28*

#### 🎉 新機能

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

#### 🚀 機能改善

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

#### 🐛 不具合修正

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

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
