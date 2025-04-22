週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*リリース日：2025-02-27*

#### 🐛 バグ修正

- **[client]**

  - コメントコレクションが存在しない状態でコメントブロックを作成するとエラーが発生 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - ツリーブロックのノードをクリックするとエラーが発生 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 左側メニューをクリックするとサブページが異常に閉じられる ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 式の値が空の場合、フィールドの値をクリアしない ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
- **[Collection field: Sequence]**

  - 読み取り専用モード時にシーケンスフィールドが無効化されない問題を修正 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[File manager]**

  - 継承コレクションのマイグレーション問題を修正 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
- **[Access control]**

  - コレクション権限において、多対多フィールドをデータスコープとして使用すると返されるデータレコードが正しくない問題を修正 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[Block: Kanban]**

  - ポップアップ内の看板ブロックで、ポップアップレコード変数を使用してデータをフィルタリングする際に誤った結果となる問題を修正 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[Block: Tree]**

  - ツリーブロックのノードをクリックするとエラーが発生 by @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*リリース日：2025-02-27*

#### 🐛 バグ修正

- **[ブロック：アクションパネル]** アクションパネルの高さの設定が無効です ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*リリース日：2025-03-01*

#### 🐛 バグ修正

- **[client]** 関連フィールドの読み取り専用モードでホバー時に新規追加ボタンが表示される ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[Action: Export records Pro]** エクスポート添付ボタンの設定から「追加ブロック」オプションを削除する by @katherinehhh
- **[Action: Import records Pro]** 関連ブロックのインポートボタンで、重複レコード検出時にフィールドのドロップダウンにデータが表示されない by @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*リリース日：2025-03-03*

#### 🐛 バグ修正

- **[client]** カスタム favicon を設定したページは、読み込み中に一瞬 NocoBase の favicon が表示される ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
- **[Block: Map]** 地図フィールドの設定項目が表示されない ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[Custom brand]** カスタム favicon を設定したページは、読み込み中に一瞬 NocoBase の favicon が表示される by @zhangzhonghe
- **[Template print]** アクションテンプレートプリントプラグインとバックアップマネージャープラグインが両方有効な場合、ローカルからの復元に失敗する by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*リリース日：2025-02-27*

#### 🐛 バグ修正

- **[client]**

  - コメントコレクションがない場合、コメントブロック作成時にエラーが発生 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - メニューをドラッグした後、位置がずれる ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
- **[ワークフロー：カスタムアクションイベント]** ビルドエラーを修正 by @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*リリース日：2025-03-04*

#### 🎉 新機能

- **[client]** 時間フィールドがフォーマットに対応 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

#### 🚀 改善

- **[server]** koa を 2.15.4 にアップグレード；@koa/cors を 5.0.0 にアップグレード ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[Workflow]** 後置ノードの結果を遅延読み込みして、実行記録キャンバスのパフォーマンスを向上 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

#### 🐛 修正

- **[auth]** WebSocket 認証中にトークンの更新を回避 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[client]**

  - カスタム favicon を設定したページで、読み込み時に一瞬 NocoBase の favicon が表示される ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 関連フィールドの読み取り専用モードで、ホバー時に新規追加ボタンが表示される ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[devtools]** req.ip が undefined でない場合にのみ、X-Forwarded-For ヘッダーを設定 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[Block: Map]** 地図フィールドの設定が欠落または表示されない ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[Mobile]** ページエラー：Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[Users]** ユーザー権限管理テーブルが初回読み込み時に、エラーUIが一瞬表示される ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[Block: Action panel]** アクションパネルの高さ設定が無効 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[Action: Import records Pro]** 関連ブロックのインポートボタンで、重複レコード検出用のフィールド選択ドロップダウンにデータが表示されない by @katherinehhh
- **[Action: Export records Pro]** エクスポート添付ボタンの設定から「ブロック追加」オプションを削除 by @katherinehhh
- **[Workflow: Custom action event]** カスタムアクションイベントにバインドされた旧ボタンのマイグレーションスクリプトを修正 by @mytharcher
- **[Custom brand]** カスタム favicon を設定したページで、読み込み時に一瞬 NocoBase の favicon が表示される by @zhangzhonghe
- **[Template print]** アクションテンプレート印刷プラグインとバックアップマネージャープラグインが同時に有効な場合、ローカルからの復元が失敗する by @gchust
- **[Workflow: Approval]**

  - `.toJSON()` によるエラーを修正 by @mytharcher
  - バージョン番号が原因でマイグレーションが実行されなかった問題を修正 by @mytharcher
  - 旧ブロックのマイグレーションを修正 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/ja/blog/v1.6.0-alpha.29)

*リリース日：2025-02-27*

#### 🎉 新機能

- **[client]** アクションの権限設定をサポート ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh
- **[Block: template]** ブロック向けに、継承メカニズムに基づくテンプレートサポートを提供する `Block: template` プラグインを追加 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[Workflow: Custom action event]** ワークフローアクションのトリガーがアクセス制御をサポート by @katherinehhh

#### 🚀 改善

- **[client]**
  - React型定義をアップグレード ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust
  - ユーザー個人センターの拡張と改善 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
- **[File manager]**
  - URLの長さを1024に拡大 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - ファイルプレビューURLを生成するバックエンドコードを追加 ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx
  - アップロード時のファイル名を、ランダムな名前から元の名前にランダムな接尾辞を付与したものに変更 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
  - ファイルプレビューURLを生成するバックエンドコードを追加 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - ストレージタイプAPIを変更し、プラグインAPIを追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
  - ストレージタイプAPIを変更し、プラグインAPIを追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[Block: Action panel]** モバイルスタイルを最適化 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe
- **[Workflow]** ワークフローカンバス上のノードカードからノードIDを非表示 ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
- **[File storage: S3(Pro)]**
  - メインリポジトリに基づいてストレージAPIを調整 by @mytharcher
  - thumbnailRuleオプション設定をサポート by @jiannx
- **[Backup manager]** 一部プラグインが欠落しているアプリケーションでもバックアップを復元可能にする by @gchust

#### 🐛 バグ修正

- **[devtools]** req.ipがundefinedでない場合にのみX-Forwarded-Forヘッダーを設定 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[client]**
  - メニューをドラッグ後、位置が正しく表示されない問題を修正 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
  - コメントコレクションがない状態でコメントブロック作成時に発生するエラーを修正 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - ツリーブロックのノードをクリックした際に発生するエラーを修正 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 左側メニュークリック後にサブページが異常に閉じられる問題を修正 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 式の値が空の場合にフィールド値がクリアされるのを防止 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
  - リッチテキストフィールドコンポーネントが完全にクリアできない問題を修正 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
  - ページをグループに移動できない問題を修正 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe
  - CurrentUserProviderでの認証エラーをスキップ ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
  - 1つずつアップロード時にファイルが抜け落ちる問題を修正 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
  - メールチャネル設定フォームの入力でHTMLタグの文字が誤って処理される問題を修正 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - 複数ファイルアップロード後にファイルが消失する問題を修正 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - フィルターフォームフィールドのピッカーフォーマット不一致の問題を修正 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 無効状態でも<Variable.TextArea />コンポーネントを正しく表示 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
- **[create-nocobase-app]** `create-nocobase-app`実行後、`yarn dev`でウェブクライアントにエラーが発生する問題を修正 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust
- **[auth]** トークンがAPIキーの場合、ユーザー認証をスキップ ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66
- **[cli]** nocobase upgradeコマンドの内部ロジックを改善 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos
- **[File manager]**
  - 継承コレクションのマイグレーションを修正 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
  - マイグレーションを修正しテストケースを追加 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - マイグレーションを修正しテストケースを追加 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - ファイルコレクションの`path`カラム型を修正 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - AWS SDKのバージョンをアップグレードしてMinIOアップロードバグを修正 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[Block: template]** 公開フォームアクセス時にログインを必須とする ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[Access control]** コレクション権限で多対多フィールドをデータ範囲として使用した際に誤ったデータレコードが返される問題を修正 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[Block: Kanban]** ポップアップレコード変数を用いる看板ブロックでのデータフィルタリング不具合を修正 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[Collection field: Sequence]** 読み取り専用モード時にシーケンスフィールドが無効化されない問題を修正 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[Workflow: test kit]** 新機能に基づくE2Eテストケースを修正 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher
- **[Public forms]** 公開フォームでの認証チェックをスキップ ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos
- **[Authentication]** AdminProviderから不要なNavigateIfNotSignInラッパーを削除 ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66
- **[Workflow]**
  - ワークフローカンバスのスタイル詳細を修正 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - パスワード変更時にワークフローをトリガーする機能を追加 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[Workflow: Custom action event]**
  - ビルドエラーを修正 by @mytharcher
  - E2Eテストケースを修正 by @mytharcher
  - ワークフロー初期化トリガーの不具合を修正 by @mytharcher
  - ビルドエラーを修正 by @mytharcher
- **[Workflow: Pre-action event]** レスポンスメッセージノードでエラーメッセージが表示されない問題を修正 by @mytharcher
- **[Workflow: JavaScript]** NocoBaseモジュールのrequireをサポート by @mytharcher
- **[Email manager]** 公開メールメッセージコレクションおよびメールインターフェースによるモーダルデータ消失を修正 by @jiannx
- **[File storage: S3(Pro)]**
  - AWS SDKのバージョンをアップグレードしてMinIOアップロードバグを修正 by @mytharcher
  - forcePathStyleForAccessのデフォルト値をvirtualに設定 by @jiannx
- **[Block: Multi-step form]** ドラッグ後の項目並び順エラーを修正 by @jiannx
- **[Block: Tree]** ツリーブロックのノードクリック時に発生するエラーを修正 by @zhangzhonghe
- **[Backup manager]** ローカルバックアップ復元ダイアログの削除アイコンが動作しない問題を修正 by @gchust
- **[Workflow: Approval]**
  - バージョン番号の関係でマイグレーションが実行されない問題を修正 by @mytharcher
  - 新機能に基づくE2Eテストケースを修正 by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
