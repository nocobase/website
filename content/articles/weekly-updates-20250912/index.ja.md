週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/ja/blog/v1.9.0-beta.7)

*リリース日：2025-09-11*

#### 🎉 新機能

* **[ワークフロー：承認]** 承認プロセス内の任意のノードに戻る機能をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** ファイルリストから省略記号のポップオーバーを削除（[#7479](https://github.com/nocobase/nocobase/pull/7479)）@mytharcher
* **[サーバー]** メッセージキューに標準的なシステムロガーを使用（[#7480](https://github.com/nocobase/nocobase/pull/7480)）@mytharcher
* **[データベース]** リスト API の件数クエリを最適化し、リソース消費を削減（[#7453](https://github.com/nocobase/nocobase/pull/7453)）@aaaaaajie
* **[通知：アプリ内メッセージ]** アプリ内メッセージ通知の自動閉鎖遅延時間を設定する機能をサポート（[#7472](https://github.com/nocobase/nocobase/pull/7472)）@mytharcher
* **[ワークフロー]**
  * ワークフロー準備プロセスを最適化し、事前読み込みされたノードデータの使用をサポート（[#7476](https://github.com/nocobase/nocobase/pull/7476)）@mytharcher
  * 個別のフィールドとインデックスを使用して、キューイング中の実行を取得するクエリパフォーマンスを最適化（[#7448](https://github.com/nocobase/nocobase/pull/7448)）@mytharcher
  * ワークフロー変数 API を調整し、追加の変数リストをプリセットする機能をサポート（[#7439](https://github.com/nocobase/nocobase/pull/7439)）@mytharcher
* **[ワークフロー：通知ノード]** 通知ノードのテスト機能をサポート（[#7470](https://github.com/nocobase/nocobase/pull/7470)）@mytharcher
* **[ワークフロー：承認]**
  * カスタム通知内で承認関連の変数を使用する機能をサポート @mytharcher
  * 終了ノードが実行を終了した後、承認ステータスを更新する機能をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * リンケージルールにおける数値フィールドの「空でない」チェックが不正確になる問題（[#7477](https://github.com/nocobase/nocobase/pull/7477)）@katherinehhh
  * 編集フォームブロックでタグコンポーネントに切り替えた際、関連フィールドが表示エラーになる問題（[#7468](https://github.com/nocobase/nocobase/pull/7468)）@katherinehhh
  * パブリックフォームで読み取り専用の選択肢 / 複数選択 / 日付 / リッチテキストが依然として編集可能になる問題（[#7484](https://github.com/nocobase/nocobase/pull/7484)）@katherinehhh
  * 選択した日付が最小日付（minDate）と一致する場合の時間制限異常問題（[#7461](https://github.com/nocobase/nocobase/pull/7461)）@katherinehhh
  * サブテーブルの添付フィールドにおいて必須検証が機能しない問題（[#7431](https://github.com/nocobase/nocobase/pull/7431)）@katherinehhh
  * 特定のシナリオで、モバイル端末のレコードピッカーポップアップでレコードを編集するとエラーが発生する問題を修正（[#7444](https://github.com/nocobase/nocobase/pull/7444)）@zhangzhonghe
* **[未定義（undefined）]** MySQL 外部データソースで日付フィールドのみでフィルタリングする際の問題を修正（[#7422](https://github.com/nocobase/nocobase/pull/7422)）@aaaaaajie
* **[データベース]**
  * アプリ内メッセージの「もっと読む」機能使用時に発生する MySQL 構文エラーを修正（[#7438](https://github.com/nocobase/nocobase/pull/7438)）@aaaaaajie
  * エクスポートされた Number フィールドの精度問題を修正（[#7421](https://github.com/nocobase/nocobase/pull/7421)）@aaaaaajie
* **[モバイル]** タイムゾーンが設定されていないモバイル端末の日付フィールドで、日時が正しく表示されない問題（[#7473](https://github.com/nocobase/nocobase/pull/7473)）@katherinehhh
* **[パブリックフォーム]** パブリックフォームのフィールドで変数を使用する場合、デフォルト値が適用されない問題（[#7467](https://github.com/nocobase/nocobase/pull/7467)）@katherinehhh
* **[コレクション：ツリー]** ツリー型コレクションを削除した後、当該コレクションに関連するデータベースイベントを削除（[#7459](https://github.com/nocobase/nocobase/pull/7459)）@2013xile
* **[ファイルマネージャー]** ファイルコレクションの`storage`フィールド編集時に発生するエラーを修正（[#7393](https://github.com/nocobase/nocobase/pull/7393)）@mytharcher
* **[アクション：レコードインポート]**
  * 重複データをインポートした際に表示される行番号が不正確になる問題を修正（[#7440](https://github.com/nocobase/nocobase/pull/7440)）@aaaaaajie
  * テーブルのプライマリキーが単一行テキストの場合、インポートに失敗する問題を修正（[#7416](https://github.com/nocobase/nocobase/pull/7416)）@aaaaaajie
* **[ワークフロー]**
  * ワークフロー実行状態の自動削除オプションを完備（[#7436](https://github.com/nocobase/nocobase/pull/7436)）@mytharcher
  * タスクセンターのルート設定が不正確で詳細ポップアップが表示されない問題を修正（[#7452](https://github.com/nocobase/nocobase/pull/7452)）@mytharcher
  * ワークフロータスクにおけるモバイル端末メニュー関連の問題を修正（[#7419](https://github.com/nocobase/nocobase/pull/7419)）@mytharcher
* **[ワークフロー：並列ノード]** 「すべてのブランチを実行」モード下で、並列ブランチノードのステータス判定が不正確で早期に完了してしまう問題を修正（[#7445](https://github.com/nocobase/nocobase/pull/7445)）@mytharcher
* **[アクション：レコードインポート Pro]** xlsx ファイルのインポート時に文字列型プライマリキーを使用すると、予期しない更新結果になる問題を修正 @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** カスタムアクションイベントの初期化直後に手動実行できない問題を修正 @mytharcher
* **[ワークフロー：サブフロー]** サブプロセスが再開された際に複数回実行される問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認完了通知内のステータステキストが翻訳されない問題を修正 @mytharcher
  * 現在の承認者ではないユーザーに対し、プロセスフローテーブルの対応する表示ボタンを非表示にする対応 @mytharcher
  * 承認完了通知のカスタムテンプレートにステータス変数を追加 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/ja/blog/v1.9.0-alpha.14)

*リリース日：2025-09-10*

#### 🚀 機能改善

* **[メールマネージャー]** 一括同期機能をサポート @jiannx

#### 🐛 不具合修正

* **[ワークフロー：承認]** 承認完了通知内のステータステキストが翻訳されない問題を修正 @mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/ja/blog/v1.9.0-alpha.13)

*リリース日：2025-09-09*

#### 🎉 新機能

* **[ワークフロー：承認]** 承認プロセス内の任意のノードに戻る機能をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** ファイルリストから省略記号のポップオーバーを削除（[#7479](https://github.com/nocobase/nocobase/pull/7479)）@mytharcher
* **[データベース]** リスト API の件数クエリを最適化し、リソース消費を削減（[#7453](https://github.com/nocobase/nocobase/pull/7453)）@aaaaaajie
* **[ワークフロー]**
  * ワークフロー準備プロセスを最適化し、事前読み込みされたノードデータの使用をサポート（[#7476](https://github.com/nocobase/nocobase/pull/7476)）@mytharcher
  * 個別のフィールドとインデックスを使用して、キューイング中の実行を取得するクエリパフォーマンスを最適化（[#7448](https://github.com/nocobase/nocobase/pull/7448)）@mytharcher
  * ワークフロー変数 API を調整し、追加の変数リストをプリセットする機能をサポート（[#7439](https://github.com/nocobase/nocobase/pull/7439)）@mytharcher
* **[通知：アプリ内メッセージ]** アプリ内メッセージ通知の自動閉鎖遅延時間を設定する機能をサポート（[#7472](https://github.com/nocobase/nocobase/pull/7472)）@mytharcher
* **[ワークフロー：通知ノード]** 通知ノードのテスト機能をサポート（[#7470](https://github.com/nocobase/nocobase/pull/7470)）@mytharcher
* **[ワークフロー：承認]**
  * カスタム通知内で承認関連の変数を使用する機能をサポート @mytharcher
  * 終了ノードが実行を終了した後、承認ステータスを更新する機能をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * リンケージルールにおける数値フィールドの「空でない」チェックが不正確になる問題（[#7477](https://github.com/nocobase/nocobase/pull/7477)）@katherinehhh
  * 編集フォームブロックでタグコンポーネントに切り替えた際、関連フィールドが表示エラーになる問題（[#7468](https://github.com/nocobase/nocobase/pull/7468)）@katherinehhh
  * 選択した日付が最小日付（minDate）と一致する場合の時間制限異常問題（[#7461](https://github.com/nocobase/nocobase/pull/7461)）@katherinehhh
  * 特定のシナリオで、モバイル端末のレコードピッカーポップアップでレコードを編集するとエラーが発生する問題を修正（[#7444](https://github.com/nocobase/nocobase/pull/7444)）@zhangzhonghe
  * サブテーブルの添付フィールドにおいて必須検証が機能しない問題（[#7431](https://github.com/nocobase/nocobase/pull/7431)）@katherinehhh
  * 添付ファイル URL フィールドの URL にクエリパラメータが含まれる場合、アイコンが不正に表示される問題を修正（[#7432](https://github.com/nocobase/nocobase/pull/7432)）@mytharcher
* **[データベース]**
  * エクスポートされた Number フィールドの精度問題を修正（[#7421](https://github.com/nocobase/nocobase/pull/7421)）@aaaaaajie
  * アプリ内メッセージの「もっと読む」機能使用時に発生する MySQL 構文エラーを修正（[#7438](https://github.com/nocobase/nocobase/pull/7438)）@aaaaaajie
* **[未定義（undefined）]** MySQL 外部データソースで日付フィールドのみでフィルタリングする際の問題を修正（[#7422](https://github.com/nocobase/nocobase/pull/7422)）@aaaaaajie
* **[モバイル]** タイムゾーンが設定されていないモバイル端末の日付フィールドで、日時が正しく表示されない問題（[#7473](https://github.com/nocobase/nocobase/pull/7473)）@katherinehhh
* **[コレクション：ツリー]** ツリー型コレクションを削除した後、当該コレクションに関連するデータベースイベントを削除（[#7459](https://github.com/nocobase/nocobase/pull/7459)）@2013xile
* **[パブリックフォーム]** パブリックフォームのフィールドで変数を使用する場合、デフォルト値が適用されない問題（[#7467](https://github.com/nocobase/nocobase/pull/7467)）@katherinehhh
* **[アクション：レコードインポート]**
  * 重複データをインポートした際に表示される行番号が不正確になる問題を修正（[#7440](https://github.com/nocobase/nocobase/pull/7440)）@aaaaaajie
  * テーブルのプライマリキーが単一行テキストの場合、インポートに失敗する問題を修正（[#7416](https://github.com/nocobase/nocobase/pull/7416)）@aaaaaajie
* **[ワークフロー]**
  * タスクセンターのルート設定が不正確で詳細ポップアップが表示されない問題を修正（[#7452](https://github.com/nocobase/nocobase/pull/7452)）@mytharcher
  * ワークフロー実行状態の自動削除オプションを完備（[#7436](https://github.com/nocobase/nocobase/pull/7436)）@mytharcher
  * ワークフロータスクにおけるモバイル端末メニュー関連の問題を修正（[#7419](https://github.com/nocobase/nocobase/pull/7419)）@mytharcher
* **[ファイルマネージャー]** ファイルコレクションの`storage`フィールド編集時に発生するエラーを修正（[#7393](https://github.com/nocobase/nocobase/pull/7393)）@mytharcher
* **[ワークフロー：並列ノード]** 「すべてのブランチを実行」モード下で、並列ブランチノードのステータス判定が不正確で早期に完了してしまう問題を修正（[#7445](https://github.com/nocobase/nocobase/pull/7445)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** カスタムアクションイベントの初期化直後に手動実行できない問題を修正 @mytharcher
* **[アクション：レコードインポート Pro]** xlsx ファイルのインポート時に文字列型プライマリキーを使用すると、予期しない更新結果になる問題を修正 @aaaaaajie
* **[ワークフロー：サブフロー]** サブプロセスが再開された際に複数回実行される問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認完了通知のカスタムテンプレートにステータス変数を追加 @mytharcher
  * 現在の承認者ではないユーザーに対し、プロセスフローテーブルの対応する表示ボタンを非表示にする対応 @mytharcher
