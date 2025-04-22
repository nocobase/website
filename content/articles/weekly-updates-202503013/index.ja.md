週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**今週、[NocoBase 1.6.0バージョン](https://www.nocobase.com/ja/blog/nocobase-1-6-0)をリリースしました。クラスターモードの展開、セキュリティポリシーの最適化、性能、セキュリティ、そしてユーザー体験が全面的に向上しました。**

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*リリース日：2025-03-05*

#### 🚀 改善

- **[ワークフロー]** 後置ノードの結果読み込みを遅延させることで実行記録キャンバスのパフォーマンスを向上 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[ワークフロー：集計ノード]** 倍精度型に基づく集計済み数値の四捨五入処理を追加 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

#### 🐛 バグ修正

- **[client]**

  - ラベルが非表示の場合、サブフォームのフィールドコンポーネントがメインフォーム内のコンポーネントと整列しない問題を修正 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - コレクション継承時のポップアップ内で関連ブロックが表示されない問題を修正 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - ファイルコレクション作成時に発生するエラーを修正 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[ワークフロー]** ジョブ取得時のACLの問題を修正 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*リリース日：2025-03-06*

#### 🚀 改善

- **[client]** ボタンにデバウンス処理を追加 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

#### 🐛 バグ修正

- **[database]** 関係フィールドのソースキーが数字の文字列である場合、関係コレクションレコードの取得中に発生するエラーを修正 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*リリース日：2025-03-06*

#### 🐛 バグ修正

- **[client]**
  - タイムゾーン関連の問題により、日付ピッカーで1時間不足する ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 親テーブルから継承されたフィールドにテーブル上でのソート設定が欠落している ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*リリース日：2025-03-07*

#### 🎉 新機能

- **[データ可視化]** チャートクエリにおけるNULLSソートをサポート ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

#### 🚀 改善

- **[ワークフロー]** データベースイベントにおいて、スキップオプションを使用してワークフローの発動を抑制できるように変更 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

#### 🐛 バグ修正

- **[アクション：インポートレコード Pro]** 追加オプションで、ワークフローの発動有無を判定できるように変更 by @mytharcher
- **[アクション：エクスポートレコード Pro]** Proエクスポート操作で、ソートパラメータが欠落していた問題を修正 by @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*リリース日：2025-03-09*

#### 🐛 バグ修正

- **[server]** `yarn start` 実行後、ブラウザキャッシュが更新されない ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[Workflow: Approval]** 誤った承認者設定により全ユーザーが検索されるのを防ぐ by @mytharcher
- **[WeCom]** ログインプロンプトのリンクとDingTalkログインエラーを修正 by @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*リリース日：2025-03-11*

#### 🐛 バグ修正

- **[client]**

  - '$anyOf' オペレーター使用時、連動ルールが無効になる ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - リンクボタンから開かれるポップアップウィンドウでデータが更新されない ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
  - サブテーブルのレコード削除時に、複数選択フィールドの値が変化しオプションが失われる ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
- **[通知：アプリ内メッセージ]** アプリ内メッセージリストの背景色をメッセージカードと区別し、視覚的な階層性と可読性を向上させる ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*リリース日：2025-03-07*

#### 🎉 新機能

- 【client】メニュー項目およびテーブルヘッダーにツールチップ設定を追加 ([#6346]) by @Cyx649312038
- 【データ可視化】チャートクエリにおけるNULL値のソートをサポート ([#6383]) by @2013xile
- 【AI統合】新プラグイン：AI統合 ([#6283]) by @2013xile
  　参照: [AI統合](https://docs.nocobase.com/handbook/ai/service)
- 【AI統合（EE）】新プラグイン：AI統合（EE） by @2013xile
  　参照: [AI統合](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 改善

- 【client】
  - ボタンにデバウンス処理を追加 ([#6351]) by @Cyx649312038
  - メニューを画面幅に応じて自動調整可能に変更 ([#6331]) by @zhangzhonghe
- 【ワークフロー】データベースイベントでコレクションワークフローのトリガーをスキップ可能に ([#6379]) by @mytharcher
- 【ワークフロー：集計ノード】倍精度数値の集計結果に四捨五入処理を追加 ([#6358]) by @mytharcher
- 【操作：インポートレコード Pro】Proインポートボタンに高度なオプションをサポート by @katherinehhh
- 【ワークフロー：JavaScript】絶対パスからパッケージをrequire可能にするサポートを追加 by @mytharcher
- 【ファイルストレージ：S3 (Pro)】ストレージが見つからない場合に再読み込みを試みる by @jiannx

#### 🐛 バグ修正

- 【client】
  - メニュータイトルのカスタム翻訳が無効 ([#6377]) by @zhangzhonghe
  - 日付ピッカーで1時間短く表示されるタイムゾーン関連の問題を修正 ([#6359]) by @katherinehhh
  - 継承されたコレクションフィールドにソート設定がない問題を修正 ([#6372]) by @katherinehhh
  - 添付フィールドのストレージ設定ドロップダウンでオプションが表示されない問題を修正 ([#6365]) by @katherinehhh
  - ラベル非表示時にサブフォームのコンポーネントがメインフォームと揃わない問題を修正 ([#6357]) by @katherinehhh
  - コレクション継承内のポップアップで関連ブロックが表示されない問題を修正 ([#6303]) by @katherinehhh
  - 全高ブロックを含むページタブを開く際にスクロールバーが表示される問題を修正 ([#6347]) by @katherinehhh
  - ファイルコレクション作成時のエラーを修正 ([#6363]) by @mytharcher
- 【database】関連フィールドのソースキーが数値型文字列の場合に、関連コレクションのレコード取得で発生するエラーを修正 ([#6360]) by @2013xile
- 【WEBクライアント】
  - ルート管理テーブルでタブページの追加が反映されない問題を修正 ([#6362]) by @zhangzhonghe
  - ルートテーブルにページを追加後、ページが空白になる問題を修正 ([#6366]) by @zhangzhonghe
- 【ユーザー】
  - ユーザー管理権限のないユーザーが自身のプロファイルにアクセスすると「権限なし」エラーが表示される問題を修正 ([#6382]) by @2013xile
  - ユーザー管理画面でシステム設定更新時に「権限なし」エラーが発生する問題を修正 ([#6380]) by @2013xile
- 【アクセス制御】アクセス権管理テーブルでタブページの名称が空欄になる問題を修正 ([#6364]) by @zhangzhonghe
- 【AI統合】LLMプロバイダーのデフォルトbaseURLがundefinedとなる問題を修正 ([#6367]) by @2013xile
- 【ワークフロー】ジョブ取得時のACL問題を修正 ([#6352]) by @mytharcher
- 【ワークフロー：カスタム操作イベント】実行後にロケールおよびコレクションが変更可能な問題を解決 by @mytharcher
- 【操作：インポートレコード Pro】インポート時にワークフローをトリガーするか否かを判断する追加オプションを使用 by @mytharcher
- 【操作：エクスポートレコード Pro】Proエクスポートアクションでソートパラメータが欠落する問題を修正 by @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*リリース日：2025-03-10*

#### 🚀 改善

- **[認証：APIキー]** APIキー認証用のトークンセキュリティ設定テストを追加。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

#### 🐛 バグ修正

- **[サーバー]** `yarn start` コマンド実行後、ブラウザキャッシュが正しく更新されない。 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[認証]** 存在しないユーザーに対して401エラーを返し、ローカライズメッセージを更新。 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[WEBクライアント]** ロール切替後にページが空白になる。 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[テーマエディター]** 複数回の連続切替後、テーマの切り替えが失敗する。 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[ワークフロー：承認]**

  - 承認者追加時の順序パラメーターを修正 by @mytharcher
  - 誤った承認者設定により全ユーザーがクエリされるのを回避 by @mytharcher
- **[WeCom]** ログインプロンプトのリンクとDingTalkログインエラーを修正 by @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*リリース日：2025-03-11*

#### 🎉 新機能

- **[client]** 従来のボタンアクセス制御設定に対応 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[ワークフロー：操作後イベント]** 終了ノードで結果状態を決定できるようにサポート ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher
- **[ワークフロー：応答メッセージ]** アクショントリガーで使用できるようにサポート by @mytharcher

#### 🚀 改善

- **[ワークフロー]** ログインしていない場合の API 401 エラーを修正 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[ワークフロー：手動ノード]** ワークフロータスクセンターのUIを調整 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher
- **[メール管理]** ツールバーのボタンにグローバルで統一された要素構造とスタイルを採用 by @mytharcher
- **[ワークフロー：承認]** 承認タスクのタスクセンターUIを調整 by @mytharcher

#### 🐛 バグ修正

- **[client]**

  - ページをグループ内に移動できない問題を修正 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深い階層のメニューでアイコンが表示されない問題を修正 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
  - FormDrawer のテーマコンテキストの問題を修正 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
- **[ワークフロー：手動ノード]** ユニークキーの衝突を回避 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[データソース管理]** 外部データソースでフィールド編集時に発生するエラーを修正 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[ユーザー認証]** ロールを持たないユーザーはエラー情報ページへリダイレクトする ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[ワークフロー：カスタムアクションイベント]** 「ワークフローのトリガー」ボタンに連動ルール設定が欠如している問題を修正 by @katherinehhh
- **[バックアップ管理]** バックアップ復元時に暗号化キーのデータが欠落している問題を修正 by @gchust
- **[ワークフロー：承認]** ユニークキーの衝突を回避 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/ja/blog/v1.6.0-alpha.30)

*リリース日：2025-03-07*

#### 🎉 新機能

- **[client]**

  - メニュー項目およびテーブルヘッダーにツールチップ設定を追加 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
  - 時間フィールドが時刻フォーマットに対応 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh
- **[データビジュアライゼーション]** チャートクエリにおけるNULL値ソートをサポート ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI統合]** 新プラグイン：AI統合 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  参考： [AI統合](https://docs.nocobase.com/handbook/ai/service)
- **[認証]** SMSやTOTP認証器など、様々な認証タイプのユーザー紐付けおよび必要なシーンでの本人確認をサポート。認証方法の開発・拡張を可能にする。 ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  参考： [認証](https://docs.nocobase.com/handbook/verification)
- **[AI統合（EE）]** 新プラグイン：AI統合（EE） by @2013xile
  参考： [AI統合](https://docs.nocobase.com/handbook/ai/service)
- **[二要素認証 (2FA)]** 新プラグイン：二要素認証および認証：TOTP認証器 by @2013xile
  参考： [二要素認証 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[認証：TOTP認証器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 改善

- **[client]**

  - ボタンにデバウンス処理を追加 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - メニューを画面幅に合わせて自動調整するように改善 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[server]** koaを2.15.4に、@koa/corsを5.0.0にアップグレード ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[ワークフロー]**

  - データベースイベントにおけるスキップ操作でコレクションワークフローを起動可能にする ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
  - パフォーマンス向上のため、ジョブ結果をレイジーロードに変更 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[ブロック：テンプレート]** ページ上のデータブロックをブロックテンプレートとして保存可能にする ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[ワークフロー：集計ノード]** double型に基づいた集計数値の四捨五入処理を追加 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[操作：レコードインポート Pro]** Proインポートボタンに高度なオプションをサポート by @katherinehhh
- **[ワークフロー：JavaScript]** 絶対パスからのパッケージ読み込みをサポート by @mytharcher
- **[ファイルストレージ：S3(Pro)]** ストレージが見つからない場合、再読み込みを試行 by @jiannx

#### 🐛 バグ修正

- **[client]**

  - メニュータイトルのカスタム翻訳が無効 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - 継承されたコレクションフィールドのソート設定が不足 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - フィルタフォームにおける時間フィールドのフォーマットが不正 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - タイムゾーンの問題で、日付ピッカーで1時間分短く表示される ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 添付ファイルフィールドのストレージ設定ドロップダウンがオプションを表示しない ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - ラベル非表示時にサブフォームのコンポーネントがメインフォームと揃わない ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - ファイルコレクション作成時のエラーを修正 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
  - 全高ブロックを含むページタブを開いた際のスクロールバー問題を解消 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - カスタムfavicon設定ページで、読み込み時に一瞬NocoBaseのfaviconが表示される問題を修正 ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - コレクション継承内のポップアップでアソシエーションブロックが表示されない問題を修正 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - アソシエーションフィールド読み取り専用時、ホバーで「新規追加」ボタンが現れる問題を修正 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[認証]** WebSocket認証中にトークンを再更新しないように修正 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[データベース]** リレーションフィールドのソースキーが数字の文字列の場合、リレーションコレクションレコード取得時に発生するエラーを修正 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEBクライアント]**

  - ルートテーブルにページを追加後、ページが空白表示になる問題を修正 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
  - ルート管理テーブルでタブページ追加が反映されない問題を修正 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
- **[アクセス制御]** 権限管理テーブルでタブページ名が空欄になる問題を修正 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[ユーザー]**

  - ユーザー管理権限を持たないユーザーが自分のプロフィールを閲覧すると「権限なし」エラーが発生する問題を修正 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - ユーザー管理でシステム設定更新時に「権限なし」エラーが発生する問題を修正 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
  - ユーザー権限管理テーブル初回読み込み時に、一瞬エラーUIが表示される問題を修正 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[AI統合]** LLMプロバイダーのデフォルト`baseURL`が`undefined`になる問題を修正 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[ワークフロー]** ジョブ取得時のACLを修正 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[ブロック：マップ]** マップフィールドの設定オプションが表示されない問題を修正 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[モバイル]** ページエラー：nullのプロパティ（'match'）を読み取れない問題を修正 ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[ブロック：アクションパネル]** アクションパネルの高さ設定が反映されない問題を修正 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[ワークフロー：カスタムアクションイベント]**

  - 実行後にロケールおよびコレクションが変更可能になってしまう問題を修正 by @mytharcher
  - カスタムアクションワークフローに紐付けられた旧ボタンのマイグレーションを修正 by @mytharcher
- **[カスタムブランド]** カスタムfavicon設定ページで、読み込み時に一瞬NocoBaseのfaviconが表示される問題を修正 by @zhangzhonghe
- **[操作：レコードインポート Pro]**

  - 追加オプションを用いて、ワークフローのトリガー有無を判定できるように修正 by @mytharcher
  - アソシエーションブロックのインポートボタンで、重複レコード検出時にフィールドドロップダウンにデータが表示されない問題を修正 by @katherinehhh
- **[操作：レコードエクスポート Pro]**

  - Proエクスポートアクションでソートパラメータが欠落している問題を修正 by @katherinehhh
  - エクスポート添付ファイルボタン設定から「ブロック追加」オプションを削除 by @katherinehhh
- **[テンプレート印刷]** アクションテンプレート印刷とバックアップマネージャープラグインが同時有効時、ローカルからの復元に失敗する問題を修正 by @gchust
- **[ワークフロー：承認]**

  - 旧ブロックのマイグレーションを修正 by @mytharcher
  - `.toJSON()`によるエラーを修正 by @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/ja/blog/v1.6.0-alpha.31)

*リリース日：2025-03-11*

#### 🎉 新機能

- **[client]** 従来のボタンアクセス制御設定に対応 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[Workflow: Response message]** アクショントリガーでの使用をサポート by @mytharcher

#### 🚀 改善

- **[Auth: API keys]** APIキー認証のためのトークンセキュリティ設定テストを追加 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66
- **[Workflow: Manual node]** ワークフロータスクセンターのUIを調整 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

#### 🐛 バグ修正

- **[server]** `yarn start` 実行後、ブラウザキャッシュが正しく更新されない ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[client]**
  - FormDrawerのテーマコンテキストの問題を修正 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
  - 「$anyOf」オペレーター使用時に連動ルールが無効になる問題を修正 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
- **[auth]** 存在しないユーザーに対して401エラーを返し、ローカライズメッセージを更新 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[Block: template]** ページデータブロックでテンプレート保存オプションが表示されない問題を修正 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
- **[Workflow: Manual node]** ユニークキーの衝突を回避 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[Data source manager]** 外部データソースでフィールド編集時にエラーが発生する問題を修正 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[Theme editor]** テーマを連続して切り替えた場合に切替が失敗する問題を修正 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[WEB client]** ロール切替後にページが空白になる問題を修正 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[Workflow: Approval]**
  - 誤った承認者設定により全ユーザーが検索される問題を防止 by @mytharcher
  - アサイン追加時の順序パラメータを修正 by @mytharcher
- **[WeCom]** ログインプロンプトリンクとDingTalkログインエラーを修正 by @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/ja/blog/v1.7.0-alpha.1)

*リリース日：2025-03-11*

#### 🎉 新機能

- **[ワークフロー：操作後イベント]** 終了ノードを使用して状態を決定する機能をサポート ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

#### 🚀 改善

- **[ワークフロー]** 未ログイン時に発生するAPIリクエストの401エラーを修正 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[メール管理]** ツールバーのボタンでグローバルに同じ要素構造とスタイルを使用 by @mytharcher
- **[ワークフロー：承認]** タスクセンターのUIを調整 by @mytharcher

#### 🐛 バグ修正

- **[client]**

  - ページをグループに移動できない ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深層階層のメニューでアイコンが表示されない ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
- **[ユーザー認証]** ロールを持たないユーザーはエラーメッセージページへリダイレクトする ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[ワークフロー：カスタム操作イベント]** 「ワークフローをトリガー」ボタンに連動ルールの設定が欠如している by @katherinehhh
- **[バックアップ管理]** バックアップ復元時に暗号化キーのデータが欠落している by @gchust
- **[ワークフロー：承認]** ユニークキーの衝突を回避する by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
