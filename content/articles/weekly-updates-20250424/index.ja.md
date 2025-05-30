週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.21](https://www.nocobase.com/en/blog/v1.6.21)

*リリース日：2025-04-17*

#### 🚀 機能改善

* **[クライアント]** 即時に開くシナリオに対して、遅延 API を追加（[#6681](https://github.com/nocobase/nocobase/pull/6681)） by @mytharcher
* **[create-nocobase-app]** 一部の依存関係を最新バージョンにアップグレードする（[#6673](https://github.com/nocobase/nocobase/pull/6673)） by @chenos

#### 🐛 不具合修正

* **[クライアント]**
  * 承認ノード設定において、参照されたテンプレートブロックにマウスを合わせたときに発生するエラーを修正（[#6691](https://github.com/nocobase/nocobase/pull/6691)） by @mytharcher
  * カスタム関連フィールドで、フィールドコンポーネントの設定が表示されない問題（[#6692](https://github.com/nocobase/nocobase/pull/6692)） by @katherinehhh
  * アップロードコンポーネントのロケールを修正（[#6682](https://github.com/nocobase/nocobase/pull/6682)） by @mytharcher
  * 遅延ロードで UI コンポーネントが見つからないと、レンダリングエラーが発生する問題（[#6683](https://github.com/nocobase/nocobase/pull/6683)） by @gchust
  * HoC Input にネイティブの Password コンポーネントを追加（[#6679](https://github.com/nocobase/nocobase/pull/6679)） by @mytharcher
  * 現在のコレクションのフィールド割り当てリストに継承されたフィールドが表示される問題（[#6666](https://github.com/nocobase/nocobase/pull/6666)） by @katherinehhh
* **[データベース]** ci ビルドエラーを修正（[#6687](https://github.com/nocobase/nocobase/pull/6687)） by @aaaaaajie
* **[ビルド]** プラグインがいくつかの AMD ライブラリに依存している場合、ビルド出力が正しくない問題（[#6665](https://github.com/nocobase/nocobase/pull/6665)） by @gchust
* **[アクション：レコードのインポート]** xlsx の日時フィールドをインポートするときのエラーを修正（[#6672](https://github.com/nocobase/nocobase/pull/6672)） by @aaaaaajie
* **[ワークフロー：手動ノード]** 手動タスクの状態定数を修正（[#6676](https://github.com/nocobase/nocobase/pull/6676)） by @mytharcher
* **[ブロック: iframe]** iframe ブロックがフルヘイトに設定されたときに垂直スクロールバーが表示される問題（[#6675](https://github.com/nocobase/nocobase/pull/6675)） by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** テストケースを修正 by @mytharcher
* **[バックアップマネージャー]** パスワードが設定された未暗号化のバックアップを復元しようとしたときにタイムアウトエラーが発生する問題 by @gchust

### [v1.6.22](https://www.nocobase.com/en/blog/v1.6.22)

*リリース日：2025-04-22*

#### 🚀 機能改善

* **[create-nocobase-app]** 依存関係をアップグレードし、SQLite のサポートを削除する（[#6708](https://github.com/nocobase/nocobase/pull/6708)） by @chenos
* **[ファイルマネージャー]** ユーティリティ API を公開する（[#6705](https://github.com/nocobase/nocobase/pull/6705)） by @mytharcher
* **[ワークフロー]** 変数タイプセットに日付タイプを追加する（[#6717](https://github.com/nocobase/nocobase/pull/6717)） by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * モバイル版の上部ナビゲーションバーのアイコンが削除しにくい問題（[#6734](https://github.com/nocobase/nocobase/pull/6734)） by @zhangzhonghe
  * 外部キーで接続した後、フィルターをクリックするとフィルター条件が空になる問題（[#6634](https://github.com/nocobase/nocobase/pull/6634)） by @zhangzhonghe
  * フィルターボタンの日付フィールドにおけるピッカーの切り替え問題（[#6695](https://github.com/nocobase/nocobase/pull/6695)） by @katherinehhh
  * 左メニューの折りたたみボタンがワークフローのポップアップウィンドウに隠れる問題（[#6733](https://github.com/nocobase/nocobase/pull/6733)） by @zhangzhonghe
  * 連携ルールを再開く際にアクションオプションの制約が欠落する問題（[#6723](https://github.com/nocobase/nocobase/pull/6723)） by @katherinehhh
  * エクスポート権限がない状態でエクスポートボタンが表示される問題（[#6689](https://github.com/nocobase/nocobase/pull/6689)） by @katherinehhh
  * 連携ルールによって隠された必須フィールドがフォームの送信に影響を与えないようにする（[#6709](https://github.com/nocobase/nocobase/pull/6709)） by @zhangzhonghe
* **[サーバー]** create - migration によって生成される appVersion が誤っている問題（[#6740](https://github.com/nocobase/nocobase/pull/6740)） by @chenos
* **[ビルド]** tar コマンドで発生するエラーを修正する（[#6722](https://github.com/nocobase/nocobase/pull/6722)） by @mytharcher
* **[ワークフロー]** サブフローでスケジュールイベントを実行する際に発生するエラーを修正する（[#6721](https://github.com/nocobase/nocobase/pull/6721)） by @mytharcher
* **[ワークフロー：カスタムアクションイベント]** 複数レコードモードでの実行をサポートする by @mytharcher
* **[ファイルストレージ: S3 (Pro)]** サーバー側のアップロード用に multer の作成ロジックを追加する by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.19](https://www.nocobase.com/en/blog/v1.7.0-beta.19)

*リリース日：2025-04-17*

#### 🎉 新機能

* **[クライアント]** 連携ルールの条件の左側において変数をサポートする（[#6609](https://github.com/nocobase/nocobase/pull/6609)） by @katherinehhh
* **[ワークフロー：日付計算ノード]** 書式設定のためにタイムゾーンの値を変更する `changeTimezone` 関数を追加 by @mytharcher

#### 🚀 機能改善

* **[クライアント]**
  * カスタムリクエストにおいて選択されたテーブルレコードをサポートする（[#6647](https://github.com/nocobase/nocobase/pull/6647)） by @katherinehhh
  * 即時に開くシナリオに対して、遅延 API を追加（[#6681](https://github.com/nocobase/nocobase/pull/6681)） by @mytharcher

#### 🐛 不具合修正

* **[データベース]** ci ビルドエラーを修正（[#6687](https://github.com/nocobase/nocobase/pull/6687)） by @aaaaaajie
* **[クライアント]**
  * 承認ノード設定において、参照されたテンプレートブロックにマウスを合わせたときに発生するエラーを修正（[#6691](https://github.com/nocobase/nocobase/pull/6691)） by @mytharcher
  * ワークフローにおけるフィールド説明の表示問題（[#6680](https://github.com/nocobase/nocobase/pull/6680)） by @katherinehhh
  * アップロードコンポーネントのロケールを修正（[#6682](https://github.com/nocobase/nocobase/pull/6682)） by @mytharcher
  * カスタム関連フィールドで、フィールドコンポーネントの設定が表示されない問題（[#6692](https://github.com/nocobase/nocobase/pull/6692)） by @katherinehhh
  * 連携ルールと旧データの互換性の問題（[#6686](https://github.com/nocobase/nocobase/pull/6686)） by @katherinehhh
  * 遅延ロードで UI コンポーネントが見つからないと、レンダリングエラーが発生する問題（[#6683](https://github.com/nocobase/nocobase/pull/6683)） by @gchust
  * HoC Input にネイティブの Password コンポーネントを追加（[#6679](https://github.com/nocobase/nocobase/pull/6679)） by @mytharcher
* **[ワークフロー：手動ノード]** 手動タスクの状態定数を修正（[#6676](https://github.com/nocobase/nocobase/pull/6676)） by @mytharcher
* **[アクション：レコードのインポート]** xlsx の日時フィールドをインポートするときのエラーを修正（[#6672](https://github.com/nocobase/nocobase/pull/6672)） by @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** テストケースを修正 by @mytharcher
* **[バックアップマネージャー]** パスワードが設定された未暗号化のバックアップを復元しようとしたときにタイムアウトエラーが発生する問題 by @gchust

### [v1.7.0-beta.20](https://www.nocobase.com/en/blog/v1.7.0-beta.20)

*リリース日：2025-04-18*

#### 🚀 機能改善

* **[バックアップマネージャー]** サブアプリのバックアップからメインアプリを復元できるようにする by @gchust

#### 🐛 不具合修正

* **[クライアント]** ワークフローの作成 / 更新ノードで発生するエラーを修正（[#6696](https://github.com/nocobase/nocobase/pull/6696)） by @mytharcher
* **[ワークフロー：手動ノード]** タスクセンターでの ACL エラーを修正（[#6693](https://github.com/nocobase/nocobase/pull/6693)） by @mytharcher
* **[ワークフロー：承認]** タスクセンターでの ACL エラーを修正 by @mytharcher

### [v1.7.0-beta.21](https://www.nocobase.com/en/blog/v1.7.0-beta.21)

*リリース日：2025-04-23*

#### 🚀 機能改善

* **[create-nocobase-app]** 依存関係をアップグレードし、SQLite のサポートを削除（[#6708](https://github.com/nocobase/nocobase/pull/6708)） by @chenos
* **[モバイル]** モバイル用日付ピッカーポップアップの開き速度を最適化（[#6735](https://github.com/nocobase/nocobase/pull/6735)） by @zhangzhonghe
* **[ブロック：テンプレート]** テンプレートブロックを通常ブロックに変換可能に（[#6662](https://github.com/nocobase/nocobase/pull/6662)） by @gchust
* **[テーマエディタ]** テーマ設定でサイドバーの幅を設定可能に（[#6720](https://github.com/nocobase/nocobase/pull/6720)） by @chenos
* **[ファイルマネージャー]** ユーティリティ API を公開（[#6705](https://github.com/nocobase/nocobase/pull/6705)） by @mytharcher
* **[ワークフロー]** 変数タイプセットに日付タイプを追加（[#6717](https://github.com/nocobase/nocobase/pull/6717)） by @mytharcher
* **[テンプレート印刷]** データソースアクション制御をクライアント側のロールベースアクセス制御に置き換え by @sheldon66

#### 🐛 不具合修正

* **[クライアント]**
  * 送信成功後のデータブロック更新問題（[#6748](https://github.com/nocobase/nocobase/pull/6748)） by @zhangzhonghe
  * 関連データ追加時の既関連データのフィルター欠落（[#6750](https://github.com/nocobase/nocobase/pull/6750)） by @katherinehhh
  * 左メニューの折りたたみボタンがワークフローポップアップに隠れる問題（[#6733](https://github.com/nocobase/nocobase/pull/6733)） by @zhangzhonghe
  * ツリーテーブルの「子追加」ボタン連携ルールに「現在のレコード」が含まれない問題（[#6752](https://github.com/nocobase/nocobase/pull/6752)） by @katherinehhh
  * 連携ルールにおける日時フィールド条件の不具合（[#6728](https://github.com/nocobase/nocobase/pull/6728)） by @katherinehhh
  * モバイル上部ナビゲーションバーのアイコン削除困難な問題（[#6734](https://github.com/nocobase/nocobase/pull/6734)） by @zhangzhonghe
  * 「インデックス列有効」の値表示誤り（[#6724](https://github.com/nocobase/nocobase/pull/6724)） by @katherinehhh
  * 連携ルールで隠された必須フィールドがフォーム送信に影響する問題（[#6709](https://github.com/nocobase/nocobase/pull/6709)） by @zhangzhonghe
  * サブテーブル / サブフォーム連携ルールの変数変換問題（[#6702](https://github.com/nocobase/nocobase/pull/6702)） by @katherinehhh
  * エクスポート権限なしでエクスポートボタン表示問題（[#6689](https://github.com/nocobase/nocobase/pull/6689)） by @katherinehhh
  * 連携ルール再開時のアクションオプション制約欠落（[#6723](https://github.com/nocobase/nocobase/pull/6723)） by @katherinehhh
  * フィルターボタン日付フィールドのピッカー切り替え問題（[#6695](https://github.com/nocobase/nocobase/pull/6695)） by @katherinehhh
  * 外部キー接続後のフィルター条件消失問題（[#6634](https://github.com/nocobase/nocobase/pull/6634)） by @zhangzhonghe
* **[cli]** アップグレード時に package.json を自動更新（[#6747](https://github.com/nocobase/nocobase/pull/6747)） by @chenos
* **[サーバー]** create-migration による appVersion 生成誤り（[#6740](https://github.com/nocobase/nocobase/pull/6740)） by @chenos
* **[ビルド]** tar コマンドで発生するエラー修正（[#6722](https://github.com/nocobase/nocobase/pull/6722)） by @mytharcher
* **[ブロック：ガントチャート]** 月ビューでカレンダーヘッダーの月が重なる問題（[#6753](https://github.com/nocobase/nocobase/pull/6753)） by @katherinehhh
* **[アクション：インポートレコード]** フィールド権限設定時のインポート / エクスポート例外修正（[#6677](https://github.com/nocobase/nocobase/pull/6677)） by @aaaaaajie
* **[ブロック：テンプレート]** MySQL 環境でブロックテンプレートが使用できない問題（[#6726](https://github.com/nocobase/nocobase/pull/6726)） by @gchust
* **[ワークフロー]** サブフローでスケジュールイベント実行時のエラー修正（[#6721](https://github.com/nocobase/nocobase/pull/6721)） by @mytharcher
* **[データビジュアライゼーション]** フィルターブロックで列挙型フィールドのオプションが空になる問題（[#6706](https://github.com/nocobase/nocobase/pull/6706)） by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストデータを JSON 形式に強制（[#6701](https://github.com/nocobase/nocobase/pull/6701)） by @chenos
* **[アクション：エクスポートレコード Pro]**
  * フィールド権限設定時のインポート / エクスポート例外修正 by @aaaaaajie
  * テーブル列ソート後のフィルターパラメータ消失問題修正 by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** 複数レコードモードでの実行サポート by @mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * サーバー側アップロード用の multer ロジック追加 by @mytharcher
  * アップロードファイルのレスポンスデータ修正 by @mytharcher
* **[ワークフロー：承認]** レコードの関連フィールドのプリロード処理修正 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.11](https://www.nocobase.com/ja/blog/v1.7.0-alpha.11)

*リリース日：2025-04-19*

#### 🎉 新機能

* **[クライアント]** 連携ルールの条件左側で変数をサポートする（[#6609](https://github.com/nocobase/nocobase/pull/6609)） by @katherinehhh
* **[部署（部門）]** 部署、添付ファイル URL、ワークフロー応答メッセージのプラグインを無料化する（[#6663](https://github.com/nocobase/nocobase/pull/6663)） by @chenos
* **[アクション：一括更新]**
  * データブロック内のデータ更新後、他のデータブロックのデータをリフレッシュする機能をサポートする（[#6591](https://github.com/nocobase/nocobase/pull/6591)） by @zhangzhonghe
* **[UI スキーマストレージ]** UISchema 用のローカライゼーションモジュールを追加し、スキーマのタイトルや説明のカスタム翻訳を可能にする（[#6574](https://github.com/nocobase/nocobase/pull/6574)） by @chenos
* **[ブロック：アクションパネル]** スキャン成功時のコールバック `onScanSuccess` を追加し、カメラ UI を終了する処理をサポートする（[#6580](https://github.com/nocobase/nocobase/pull/6580)） by @sheldon66
* **[コレクションフィールド：コード]** コード入力用のインターフェイスを追加する by @mytharcher
* **[ワークフロー：日付計算ノード]** 書式設定時のタイムゾーン変更のための `changeTimezone` 関数を追加する by @mytharcher
* **[テンプレート印刷]** 文書テンプレートで動的画像とバーコードのレンダリングをサポートする by @sheldon66

#### 🚀 機能改善

* **[クライアント]**
  * 即時開きシナリオ用の遅延 API を追加する（[#6681](https://github.com/nocobase/nocobase/pull/6681)） by @mytharcher
  * カスタムリクエストで選択されたテーブルレコードをサポートする（[#6647](https://github.com/nocobase/nocobase/pull/6647)） by @katherinehhh
  * `Variable.Input` のデフォルトタイプフォールバック API を追加する（[#6644](https://github.com/nocobase/nocobase/pull/6644)） by @mytharcher
  * 未設定ページのプロンプトを最適化する（[#6641](https://github.com/nocobase/nocobase/pull/6641)） by @zhangzhonghe
  * フィルターコンポーネント内でフィールド検索機能を追加する（[#6627](https://github.com/nocobase/nocobase/pull/6627)） by @mytharcher
  * `Input` と `Variable.TextArea` に `trim` API を追加する（[#6624](https://github.com/nocobase/nocobase/pull/6624)） by @mytharcher
  * デバイス種別（ページ幅ではなく）に基づいてモバイルコンポーネントの表示を制御する（[#6611](https://github.com/nocobase/nocobase/pull/6611), [#6600](https://github.com/nocobase/nocobase/pull/6600)） by @zhangzhonghe
  * フォームフィールドのラベルにコロンを表示するかどうかをレイアウトで設定可能にする（[#6561](https://github.com/nocobase/nocobase/pull/6561)） by @katherinehhh
* **[create-nocobase-app]** 一部の依存関係を最新バージョンにアップグレードする（[#6673](https://github.com/nocobase/nocobase/pull/6673)） by @chenos
* **[ユーティリティ]** dayjs に期間関連の拡張機能を追加する（[#6630](https://github.com/nocobase/nocobase/pull/6630)） by @mytharcher
* **[データベース]**
  * テキストフィールドに `trim` オプションを追加する（[#6603](https://github.com/nocobase/nocobase/pull/6603)） by @mytharcher
  * 文字列フィールドに `trim` オプションを追加する（[#6565](https://github.com/nocobase/nocobase/pull/6565)） by @mytharcher
* **[ワークフロー]**
  * ワークフロータスク用の固定ポップアップ URL をサポートする（[#6640](https://github.com/nocobase/nocobase/pull/6640)） by @mytharcher
  * ジョブの保存ロジックを最適化する（[#6613](https://github.com/nocobase/nocobase/pull/6613)） by @mytharcher
* **[ワークフロー：遅延ノード]** 遅延時間に変数を使用可能にする（[#6621](https://github.com/nocobase/nocobase/pull/6621)） by @mytharcher
* **[エラーハンドラ]** AppError コンポーネントでカスタムタイトルを表示可能にする（[#6409](https://github.com/nocobase/nocobase/pull/6409)） by @sheldon66
* **[ファイルマネージャ]** ストレージコレクションのテキストフィールドに `trim` オプションを追加する（[#6604](https://github.com/nocobase/nocobase/pull/6604)） by @mytharcher
* **[バックアップマネージャー]** サブアプリのバックアップからメインアプリを復元可能にする by @gchust
* **[ワークフロー：承認]** 承認プロセスのフォームにブロックテンプレートを適用可能にする by @mytharcher
* **[マイグレーションマネージャー]** マイグレーション時の自動バックアップと復元をスキップ可能にする by @gchust

#### 🐛 バグ修正

* **[クライアント]**
  * フィルターボタンの日付フィールドでのピッカー切り替え問題 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh
  * サブテーブル/サブフォーム連動ルール条件での変数変換 ([#6702](https://github.com/nocobase/nocobase/pull/6702)) by @katherinehhh
  * エクスポート権限がない場合にエクスポートボタンが表示される問題 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh
  * 外部キー経由で接続後、フィルタリングをトリガーするとフィルター条件が空になる問題 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe
  * ワークフローの作成/更新ノードでエラーが発生する問題を修正 ([#6696](https://github.com/nocobase/nocobase/pull/6696)) by @mytharcher
  * 承認ノード設定で参照テンプレートブロックにマウスをホバーするとエラーが発生する問題を修正 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher
  * カスタム関連フィールドのフィールドコンポーネント設定が表示されない問題 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh
  * 連動ルールとレガシーデータの互換性問題 ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh
  * UIコンポーネントの遅延読み込み不足によるレンダリングエラー ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust
  * アップロードコンポーネントのロケール修正 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher
  * HoC InputにネイティブPasswordコンポーネントを追加 ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher
  * ワークフローでのフィールド説明表示問題 ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh
  * 現在のコレクションフィールド割り当てリストに継承フィールドが表示される問題 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh
  * デフォルト値設定時の変数入力スタイル問題 ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh
  * グループメニューに切り替えた際にメニューで既に非表示になっているページにジャンプしないように修正 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
  * フィルターフォームで「未保存の変更」プロンプトが表示されないように修正 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  * フィルターフォームで、フィルターボタンをクリックした際に未検証のフィールドがある場合でもフィルタリングがトリガーされる問題 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  * 関連フィールドで「複数許可」オプションが機能しない問題 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  * プレビュー画像が隠れる問題を修正 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  * フォームブロックで、フィールド設定のデフォルト値が最初に元の変数字列として表示され、その後消える問題 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe
  * 変数入力スタイルの不具合 ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust
  * ワークフローノード編集ドロワータイトルに[object Object]が表示される問題 ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh
  * サブテーブルの説明が「新規追加」ボタンと重なる問題 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  * モーダル内の水平フォームレイアウトによる点線下線問題 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
  * 条件リストが空の場合に'any'条件のルールが有効にならない問題 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  * URLパラメータに中国語文字が含まれる場合の変数解析失敗問題 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
  * ブロックテンプレート設定ページのタイトルとメニューの間の空白領域問題 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust
  * フィルターフォームの関連フィールドで、ページ更新後にx-data-sourceが引き継がれないためエラーが報告される問題 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  * ツリーコレクションでのガントブロックのデータ問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  * コロンによる切り捨てを防ぐためのフィールドラベル表示問題 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
  * フォームフィールドでx-disabledプロパティが有効にならない問題 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  * `SchemaInitializerItem`に`items`がある場合に`disabled`プロパティが機能しない問題を修正 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  * 関連コレクションフィールドを公開する際に関連フィールド（選択）にN/Aが表示される問題 ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  * 送信および更新ボタンがアイコンのみモードで正しく表示されない問題 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh
  * 削除して再選択する際に「xxxの値は配列形式ではいけません」というカスケード問題 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  * 同じフォーム内の異なるサブテーブルにある同名の関連フィールド間の連動競合問題 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
* **[データベース]**
  * CIビルドエラーを修正 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie
  * 一対多レコードを削除する際に、`filter`と`filterByTk`の両方が渡され、`filter`に関連フィールドが含まれている場合、`filterByTk`が無視される問題 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile
  * レコード更新時に値が変更されていない場合に"datetimeNoTz"フィールドが変更されないように修正 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
* **[ビルド]** プラグインがAMDライブラリに依存している場合のビルド出力が不正になる問題 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust
* **[データ可視化]** フィルターブロックでEnumフィールドのオプションが空になる問題 ([#6706](https://github.com/nocobase/nocobase/pull/6706)) by @2013xile
* **[アクション: カスタムリクエスト]** カスタムリクエストデータがJSONであることを保証 ([#6701](https://github.com/nocobase/nocobase/pull/6701)) by @chenos
* **[ワークフロー: 手動ノード]**
  * タスクセンターでのACLエラーを修正 ([#6693](https://github.com/nocobase/nocobase/pull/6693)) by @mytharcher
  * 手動タスクステータス定数の修正 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher
* **[アクション: レコードのインポート]** xlsx時間フィールドのインポートエラーを修正 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie
* **[アクセス制御]**
  * ロールモデルをキャッシュにシリアライズする際に発生するエラーを修正 ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher
  * ロール結合計算ロジックの修正 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie
  * ログイン時の現在のロール割り当てが不正な問題 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie
* **[ブロック: iframe]** iframeブロックを全高に設定した際に垂直スクロールバーが表示される問題 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh
* **[ワークフロー]**
  * MySQLからのマイグレーションエラーを修正 ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher
  * アプリ起動時にワークフローの統計情報が読み込まれない問題を修正 ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher
  * 安全でない整数IDでのジョブ作成時のOOMを修正 ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher
  * 同期オプションが正しく表示されない問題を修正 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
* **[コレクションフィールド: 添付ファイル(URL)]** 公開URLアクセス可能なファイルコレクションのみを許可 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh
* **[ブロック: テンプレート]**
  * ページブロックで使用されている参照テンプレートが削除されている場合、テンプレートとして保存に失敗する問題 ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust
  * テンプレートとブロックから同じフィールドを変更および削除した後、テンプレートからブロックを作成するとレンダリングエラーが発生する問題 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust
* **[ユーザー]** ユーザープロファイルフォームスキーマの解析問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
* **[アクション: レコードのエクスポート]** ページネーション変更後のデータエクスポート時にフィルターパラメータが欠落する問題 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
* **[モバイル]** モバイルでの「含む」フィルター付き単一選択フィールドが複数選択をサポートしない問題 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
* **[コレクションフィールド: 多対多（配列）]** 多対多（配列）フィールドを持つ関連コレクションでのフィールドフィルタリング問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
* **[公開フォーム]** 表示権限にリストと取得を含める ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
* **[認証]** `AuthProvider`でのトークン割り当て問題 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
* **[カレンダー]** 週間カレンダービューでの境界日付のデータ欠落問題 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
* **[ブロック: マップ]** マップ管理の検証でスペース入力が許可される問題 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
* **[アクション: 一括編集]** 一括編集ボタンをクリックし、ポップアップを設定後、再度開くとポップアップが空白になる問題 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe
* **[ワークフロー: カスタムアクションイベント]** テストケースの修正 by @mytharcher
* **[メールマネージャー]**
  * 同期不可、件名表示なしなどの小バグを修正 by @jiannx
  * メール管理権限でメールリストを表示できない問題を修正 by @jiannx
  * next呼び出しのawait不足を修正 by @jiannx
* **[ファイルストレージ: S3(Pro)]**
  * next呼び出しのawait不足を修正 by @jiannx
  * 個別のbaseurlと公開設定、S3 Proストレージ設定のUX改善 by @jiannx
  * ロゴをS3 Proストレージ（デフォルト設定）にアップロードする際のユーザーへのエラー通知 by @mytharcher
  * 言語整理 by @jiannx
* **[認証: OIDC]** コールバックパスが文字列'null'の場合に不正なリダイレクトが発生する問題 by @2013xile
* **[ブロック: マルチステップフォーム]**
  * 送信ボタンのデフォルト色とハイライト色が同じ問題 by @jiannx
  * フィールドが他のフィールドと関連している場合のフォームリセットが無効になるバグを修正 by @jiannx
* **[バックアップマネージャー]** パスワード付きの非暗号化バックアップを復元しようとした際のタイムアウトエラー by @gchust
* **[ワークフロー: 承認]**
  * タスクセンターでのACLエラーを修正 by @mytharcher
  * タスクセンターでの承認項目の固定URLサポート by @mytharcher
  * `endOnReject`が`true`に設定されている場合のブランチモード修正 by @mytharcher
  * マイグレーション後の`updatedAt`変更問題を修正 by @mytharcher
  * スキーマ変更後の承認ノード設定が不正になる問題を修正 by @mytharcher
  * 承認フォームで使用するクライアント変数の修正 by @mytharcher
* **[マイグレーションマネージャー]**
  * 一部の環境でのマイグレーションログ作成時刻の不正表示問題 by @gchust
  * マイグレーション中の環境変数ポップアップ表示時にスキップ自動バックアップオプションが無効になる問題 by @gchust
