週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*リリース日：2025-03-20*

#### 🚀 改善

- **[ワークフロー：メール送信ノード]** セキュリティフィールド設定の説明を追加。（[#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[通知：電子メール]** セキュリティフィールド設定の説明を追加。（[#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[カレンダー]** クイックイベント作成の有効化または無効化のオプション設定を追加。（[#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 バグ修正

- **[client]** 中国語ロケールでの時間フィールド送信時に「invalid input syntax for type time」エラーが発生する問題を修正。（[#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
- **[ファイルマネージャー]** COSに保存されたファイルへアクセスできない問題を修正。（[#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[ブロック：マップ]** マップ管理において、シークレットキーのフィールドがバリデーションを発動しない問題を修正。（[#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[WEBクライアント]** ルート管理テーブル上のパスが実際のパスと異なる問題を修正。（[#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[アクション：レコードエクスポート Pro]** 添付ファイルをエクスポートできない問題を修正 by @chenos
- **[ワークフロー：承認]**
  - nullユーザーが原因で発生するクラッシュを修正 by @mytharcher
  - クエリノードの結果追加時に発生するエラーを修正 by @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*リリース日：2025-03-22*

#### 🐛 バグ修正

- **[server]** アップグレードコマンドはワークフローエラーを引き起こす可能性があります ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[client]** フォーム内のサブテーブルの高さは、フォームの高さに合わせて設定されます ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
- **[Authentication]**

  - X-Authenticator が欠落しています ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
  - オーセンティケーターのオプションの前後の空白および改行を除去 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
- **[Block: Map]** マップブロックのキー管理において、不可視文字によりリクエストが失敗する問題 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
- **[Backup manager]** 復元によりワークフローの実行エラーが発生する可能性があります by @gchust
- **[WeCom]** 通知設定の取得時に、環境変数およびシークレットを解析します by @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*リリース日：2025-03-23*

#### 🐛 バグ修正

* **[クライアント]** アクションボタンの透明度がホバー時に設定表示の問題を引き起こす ([#6529](https://github.com/nocobase/nocobase/pull/6529)) @katherinehhh による

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*リリース日：2025-03-25*

#### 🐛 バグ修正

- **[client]**

  - リンクページ追加時に「現在のユーザー」変数が使用できない ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - フィールドへの空値の割り当てが無効 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - 「yarn doc」コマンドでエラーが発生 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - フィルタフォームのドロップダウン単一選択フィールドから「複数選択を許可」オプションを削除 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - リレーションフィールドのデータ範囲連動が有効でない ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
- **[コレクション: ツリー]** plugin-collection-tree のマイグレーション問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[操作: カスタムリクエスト]** UTF-8エンコードされたファイルがダウンロードできない ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*リリース日：2025-03-19*

#### 🚀 改善

- **[カレンダー]** クイックイベント作成のオン/オフ切替が可能なオプション設定を追加したカレンダープラグイン ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 修正

- **[client]**

  - 子レコード追加ボタンのアイコンのみ表示モード設定が機能しない ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
  - 連動ルールフィールドのデフォルト設定「非表示（値を保持）」が機能しない ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
- **[ブロック：アクションパネル]** 権限制御によりボタンを非表示にした後、モバイルアクションパネルのレイアウトに問題が発生 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[WEB クライアント]** ルーティング管理テーブル内のパスが実際のパスと異なる ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*リリース日：2025-03-23*

#### 🎉 新機能

* **[クライアント]** フォントサイズ、フォントウェイト、フォントスタイルのフィールドスタイル設定をサポート ([#6489](https://github.com/nocobase/nocobase/pull/6489)) @katherinehhh による
* **[変数とシークレット]** リンクボタンURLでの環境変数のサポート ([#6494](https://github.com/nocobase/nocobase/pull/6494)) @katherinehhh による

#### 🚀 改善

* **[クライアント]** フィルターボタンで選択したフィールドのファジーマッチングをサポート ([#6496](https://github.com/nocobase/nocobase/pull/6496)) @katherinehhh による
* **[ワークフロー: メール配信ノード]** セキュアフィールド構成説明を追加 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) @sheldon66 による
* **[WEBクライアント]** キャッシュをクリアするための二次確認プロンプトを追加 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) @katherinehhh による
* **[通知: メール]** セキュアフィールド構成説明を追加 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) @sheldon66 による
* **[メールマネージャー]** メール送信時の再認可と自動アカウント選択をサポート (@jiannx)

#### 🐛 バグ修正

* **[サーバー]** アップグレードコマンドがワークフローのエラーを引き起こす可能性がある ([#6524](https://github.com/nocobase/nocobase/pull/6524)) @gchust による
* **[クライアント]**
  * フォーム内のサブテーブルの高さがフォームの高さに設定される ([#6518](https://github.com/nocobase/nocobase/pull/6518)) @katherinehhh による
  * 中国語ロケールでのタイムフィールド送信エラー（type time の無効な入力構文） ([#6511](https://github.com/nocobase/nocobase/pull/6511)) @katherinehhh による
  * アクションボタンの透明度がホバー時に設定表示の問題を引き起こす ([#6529](https://github.com/nocobase/nocobase/pull/6529)) @katherinehhh による
* **[認証]**
  * 認証オプションのトリム ([#6527](https://github.com/nocobase/nocobase/pull/6527)) @2013xile による
  * X-Authenticator が見つからない ([#6526](https://github.com/nocobase/nocobase/pull/6526)) @chenos による
* **[ブロック: マップ]**
  * マップブロックのキー管理の問題がリクエストの失敗を引き起こす（見えない文字のため） ([#6521](https://github.com/nocobase/nocobase/pull/6521)) @katherinehhh による
  * マップ管理でのシークレットキーフィールドがバリデーションを引き起こさない ([#6509](https://github.com/nocobase/nocobase/pull/6509)) @katherinehhh による
* **[ファイルマネージャー]** COS に保存されたファイルにアクセスできない ([#6512](https://github.com/nocobase/nocobase/pull/6512)) @chenos による
* **[アクション: レコードのエクスポート Pro]** 添付ファイルをエクスポートできない (@chenos)
* **[バックアップマネージャー]** 復元がワークフローの実行エラーを引き起こす可能性がある (@gchust)
* **[WeCom]** 通知構成を取得する際に環境変数とシークレットを解決する (@2013xile)
* **[ワークフロー: 承認]**
  * ジョブが削除されたときにプロセステーブルのエラーを修正 (@mytharcher)
  * クエリノード結果を追加するときにスローされるエラーを修正 (@mytharcher)
  * NULL のユーザーがクラッシュを引き起こすのを修正 (@mytharcher)

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*リリース日：2025-03-25*

#### 🎉 新機能

- **[acl]** ユーザーロールの統合をサポート ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[client]**
  - コレクションのプリセットフィールド拡張をサポート ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  - フロントエンドのフィルター演算子拡張をサポート ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[Verification]** SMSやTOTP認証器など、さまざまな認証タイプへのユーザーバインディングおよび必要な場面での本人確認をサポートし、認証手法の開発・拡張を可能にします ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  参考: [Verification](https://docs.nocobase.com/handbook/verification)
- **[Calendar]** カンバン、カレンダー、フォーミュラフィールドプラグインの任意フィールド拡張をサポート ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
- **[Block: template]** 継承機能に基づくブロックのテンプレート機能を提供する `Block: template` プラグインを追加 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[plugin-demo-platform]** "/new" ルートの skipAuthCheck を true に設定 by @sheldon66
- **[Two-factor authentication (2FA)]** 新プラグイン：二要素認証（2FA）および認証：TOTP認証器 by @2013xile
  参考: [Two-factor authentication (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)
  [Verification: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 改善

- **[client]**
  - 公開ページでログインページにリダイレクトされないよう、router.add に skipAuthCheck を追加 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
  - Ant Design 関連の依存関係を 5.24.2 にアップグレード ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust
- **[utils]** デスクトップページのモバイル対応を実施 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[Public forms]** 公開フォームのページタイトルを、作成時に設定したタイトルにする ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[File manager]**
  - ファイルプレビューURL生成用のバックエンドコードを追加 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - ストレージタイプ API を変更し、プラグイン API を追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[Block: template]** ページのデータブロックをブロックテンプレートとして保存する機能をサポート ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[Workflow]** ワークフローのバインド設定をプラグインへ移行 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

#### 🐛 バグ修正

- **[client]**
  - テーブル行ボタンのドラッグ＆ドロップ問題を修正 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
  - リンクページ追加時に「Current User」変数が使用できない問題を修正 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - リレーショナルフィールドのデータ範囲連動が機能していない問題を修正 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - フィルターフォームのドロップダウン単一選択フィールドから「複数選択を許可」オプションを削除 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - `yarn doc` コマンドのエラーを修正 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 連動ルール設定で一部フィールドが表示されない問題を修正 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - モバイルブラウザでコンテンツが完全に表示されない問題を修正 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - '$anyOf' 演算子使用時に連動ルールが無効となる問題を修正 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
  - フィルターフォーム内の時間フィールドの書式が正しくない問題を修正 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - フォーム初期値設定時の入力スタイルが正しくない問題を修正 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
- **[utils]** 既知のデスクトップ向けレスポンシブバグを修正 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[acl]** ロール統合時にリレーションシップフィールドが表示されない問題を修正 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[Collection: Tree]** plugin-collection-tree のマイグレーション問題を修正 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[Action: Custom request]** UTF-8 エンコードファイルのダウンロードができない問題を修正 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[Variables and secrets]** 新規変数作成ドロワーでボタンが表示されない問題を修正 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[WEB client]** ctx.state.currentRole（単一ロール）を ctx.state.currentRoles（複数ロール対応）に置換 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[Access control]**
  - データスコープが自分のデータに設定され、テーブルに作成者フィールドが存在しない場合にエラーが発生する問題を修正 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
  - ロール切替が反映されない問題を修正 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
- **[Block: template]**
  - ページデータブロックで「テンプレートとして保存」オプションが表示されない問題を修正 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
  - モバイルクライアントでの「テンプレートとして保存」動作が正しくない問題を修正 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
  - 公開フォームアクセス時にログインが要求される問題を修正 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[Auth: API keys]** APIキー プラグインのロール一覧における結合解除を修正 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[Block: Multi-step form]** マルチステップフォームの送信ボタンがデフォルト時とハイライト時で同じ色になっている問題を修正 by @jiannx
- **[Workflow: Approval]** 「新規申請を行う」ポップアップダイアログのスタイル問題を修正 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/ja/blog/v1.7.0-alpha.4)

*リリース日：2025-03-23*

#### 🎉 新機能

* **[クライアント]**
  * 関連フィールドのタイトルフィールドとして長テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) @katherinehhh による
  * フォントサイズ、フォントウェイト、フォントスタイルのフィールドスタイル設定をサポート ([#6489](https://github.com/nocobase/nocobase/pull/6489)) @katherinehhh による
* **[変数とシークレット]** リンクボタンURLでの環境変数のサポート ([#6494](https://github.com/nocobase/nocobase/pull/6494)) @katherinehhh による
* **[ワークフロー: アグリゲートノード]** アグリゲーション結果の精度設定をサポート ([#6491](https://github.com/nocobase/nocobase/pull/6491)) @mytharcher による

#### 🚀 改善

* **[クライアント]** フィルターボタンで選択したフィールドのファジーマッチングをサポート ([#6496](https://github.com/nocobase/nocobase/pull/6496)) @katherinehhh による
* **[通知: メール]** セキュアフィールド構成説明を追加 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) @sheldon66 による
* **[ワークフロー: メール配信ノード]** セキュアフィールド構成説明を追加 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) @sheldon66 による
* **[カレンダー]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) @Cyx649312038 による
* **[WEBクライアント]** キャッシュをクリアするための二次確認プロンプトを追加 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) @katherinehhh による
* **[メールマネージャー]** メール送信時の再認可と自動アカウント選択をサポート (@jiannx)

#### 🐛 バグ修正

* **[クライアント]**
  * アクションボタンの透明度がホバー時に設定表示の問題を引き起こす ([#6529](https://github.com/nocobase/nocobase/pull/6529)) @katherinehhh による
  * 中国語ロケールでのタイムフィールド送信エラー（type time の無効な入力構文） ([#6511](https://github.com/nocobase/nocobase/pull/6511)) @katherinehhh による
  * フォーム内のサブテーブルの高さがフォームの高さに設定される ([#6518](https://github.com/nocobase/nocobase/pull/6518)) @katherinehhh による
  * 連携ルールフィールドのデフォルト非表示に値が残っている場合に動作しない ([#6503](https://github.com/nocobase/nocobase/pull/6503)) @katherinehhh による
  * 子ボタンがアイコンのみモードで表示されない ([#6504](https://github.com/nocobase/nocobase/pull/6504)) @katherinehhh による
* **[サーバー]** アップグレードコマンドがワークフローのエラーを引き起こす可能性がある ([#6524](https://github.com/nocobase/nocobase/pull/6524)) @gchust による
* **[utils]** 既知の「デスクトップレスポンシブ」バグ ([#6476](https://github.com/nocobase/nocobase/pull/6476)) @zhangzhonghe による
* **[評価者]** 小数点以下の桁数を9に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) @mytharcher による
* **[認証]**
  * 認証オプションのトリム ([#6527](https://github.com/nocobase/nocobase/pull/6527)) @2013xile による
  * X-Authenticator が見つからない ([#6526](https://github.com/nocobase/nocobase/pull/6526)) @chenos による
* **[ブロック: マップ]**
  * マップブロックのキー管理の問題がリクエストの失敗を引き起こす（見えない文字のため） ([#6521](https://github.com/nocobase/nocobase/pull/6521)) @katherinehhh による
  * マップ管理でのシークレットキーフィールドがバリデーションを引き起こさない ([#6509](https://github.com/nocobase/nocobase/pull/6509)) @katherinehhh による
* **[ファイルマネージャー]**
  * COS に保存されたファイルにアクセスできない ([#6512](https://github.com/nocobase/nocobase/pull/6512)) @chenos による
  * URL をエンコードする ([#6497](https://github.com/nocobase/nocobase/pull/6497)) @chenos による
* **[WEBクライアント]** ルート管理テーブルのパスが実際のパスと異なる ([#6483](https://github.com/nocobase/nocobase/pull/6483)) @zhangzhonghe による
* **[ブロック: アクションパネル]** 権限コントロールでボタンを隠した後のモバイルアクションパネルのレイアウト問題 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) @katherinehhh による
* **[データソース: メイン]** MySQL ビューを作成できない ([#6477](https://github.com/nocobase/nocobase/pull/6477)) @aaaaaajie による
* **[ワークフロー]** ワークフローを削除した後の未処理タスク数の修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) @mytharcher による
* **[アクション: エクスポートレコードPro]** 添付ファイルをエクスポートできない (@chenos)
* **[バックアップマネージャー]**
  * バックアップテンプレートからサブアプリを作成した際にファイルが復元されていない (@gchust)
  * 復元がワークフローの実行エラーを引き起こす可能性がある (@gchust)
  * GTID セットの重複による MySQL データベース復元エラー (@gchust)
* **[WeCom]** 通知構成を取得する際に環境変数とシークレットを解決する (@2013xile)
* **[ワークフロー: 承認]**
  * ジョブが削除されたときにプロセステーブルのエラーを修正 (@mytharcher)
  * 戻り値の承認を承認済みとして処理 (@mytharcher)
  * クエリノード結果を追加するときにスローされるエラーを修正 (@mytharcher)
  * プロセステーブルにアクションボタンが表示されない問題を修正 (@mytharcher)
  * 「新規適用」ポップアップダイアログのスタイル問題 (@zhangzhonghe)

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
