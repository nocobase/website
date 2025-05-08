週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*リリース日：2025-05-07*

#### 🎉 新機能

* **[ブロック: iframe]** iframe ブロックが allow 属性の設定をサポートするようになりました（[#6824](https://github.com/nocobase/nocobase/pull/6824)）by @zhangzhonghe
* **[テンプレート印刷]** 機能：テンプレート印刷で `{ ラベル, 値 }` 形式のセレクトオプションをサポートします。by @sheldon66

#### 🐛 不具合修正

* **[クライアント]**
  * ネストされたサブページで、「ブロックを追加」ボタンにマウスをホバーしてもブロックリストが表示されない問題を修正しました（[#6832](https://github.com/nocobase/nocobase/pull/6832)）by @zhangzhonghe
  * フィルターフォームのリレーションフィールドコンポーネントをデータセレクターに変更した際に、「複数選択を許可」の設定項目がない問題を修正しました（[#6656](https://github.com/nocobase/nocobase/pull/6656)）by @zhangzhonghe
  * フォームフィールドで検証ルールに違反したときに複数のエラーメッセージが表示される問題を修正しました（[#6805](https://github.com/nocobase/nocobase/pull/6805)）by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）で連動ルールを設定する際の問題を修正しました（[#6803](https://github.com/nocobase/nocobase/pull/6803)）by @katherinehhh
  * フィルターフォームで 1 対多フィールドのサブフィールドをフィルタリングオプションとして選択できない問題を修正しました（[#6809](https://github.com/nocobase/nocobase/pull/6809)）by @zhangzhonghe
  * 読み取り専用モードでのサブテーブルページネーションバーのスタイル問題を修正しました（[#6830](https://github.com/nocobase/nocobase/pull/6830)）by @katherinehhh
  * フィルターフォーム内のテーブルセレクターのスタイルが異常な問題を修正しました（[#6827](https://github.com/nocobase/nocobase/pull/6827)）by @zhangzhonghe
* **[データベース]**
  * MariaDB で外部キーが bigInt の場合、appends で belongs-to 関連が読み込まれない問題を修正しました（[#6823](https://github.com/nocobase/nocobase/pull/6823)）by @mytharcher
  * テストケースを修正しました（[#6811](https://github.com/nocobase/nocobase/pull/6811)）by @mytharcher
* **[コレクションフィールド：添付ファイル (URL)]** 添付ファイル (URL) フィールドで連動ルールにおける値の設定を許可しないように修正しました（[#6831](https://github.com/nocobase/nocobase/pull/6831)）by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** トリガーされたワークフローアクションの連携問題を修正しました by @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*リリース日：2025-05-08*

#### 🐛 不具合修正

* **[クライアント]**
  * 複製ボタン上に他のボタンをドラッグできない問題を修正しました（[#6822](https://github.com/nocobase/nocobase/pull/6822)）by @katherinehhh
  * 関連コレクションのフィールドを表示する際に、複数の関連フィールドの送信に失敗する問題を修正しました（[#6833](https://github.com/nocobase/nocobase/pull/6833)）by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*リリース日：2025-05-04*

#### 🎉 新機能

* **[クライアント]** 二次確認のタイトルと内容に変数をサポートする（[#6787](https://github.com/nocobase/nocobase/pull/6787)） by @katherinehhh
* **[テンプレート印刷]**
  * 文書テンプレートにおけるダイナミック画像とバーコードレンダリングをサポートする。by @sheldon66
  * 機能：テンプレート印刷において`{ label, value }`形式の Select オプションをサポートする。by @sheldon66
* **[ブロック：ツリー]** ツリーブロックのフィルターに連携ルールをサポートする by @katherinehhh
* **[データビジュアライゼーション: ECharts]** 棒グラフに「Y 軸反転」設定を追加する by @2013xile

#### 🚀 機能改善

* **[クライアント]** サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同行に配置する（[#6790](https://github.com/nocobase/nocobase/pull/6790)） by @katherinehhh
* **[ファイルマネージャー]** OSS のタイムアウトオプションを追加し、デフォルトを 10 分に設定する（[#6795](https://github.com/nocobase/nocobase/pull/6795)） by @mytharcher
* **[パスワードポリシー]** デフォルトのパスワード有効期限を「永遠有効」に変更する by @2013xile

#### 🐛 不具合修正

* **[データベース]**
  * テストケースを修正する（[#6811](https://github.com/nocobase/nocobase/pull/6811)） by @mytharcher
  * データ型が文字列でない場合に発生するエラーを回避する（[#6797](https://github.com/nocobase/nocobase/pull/6797)） by @mytharcher
* **[クライアント]**
  * 変数選択が非同期ロードを必要とする場合、最後に選択したメニューが失われる問題を修正する。（[#6802](https://github.com/nocobase/nocobase/pull/6802)） by @gchust
  * フィルターフォームにおいて、一対多フィールドのサブフィールドがフィルタリングオプションとして選択できない問題を修正する（[#6809](https://github.com/nocobase/nocobase/pull/6809)） by @zhangzhonghe
  * サブテーブル内のサブフォーム（ポップアップ）における連携ルールの設定問題を修正する（[#6803](https://github.com/nocobase/nocobase/pull/6803)） by @katherinehhh
  * フォームフィールドにおいて、バリデーションルールに違反したときに複数のエラーメッセージが表示される問題を修正する（[#6805](https://github.com/nocobase/nocobase/pull/6805)） by @katherinehhh
  * 関連コレクションのフィールドを表示する際に、関連フィールドがデータを送信しない問題を修正する（[#6798](https://github.com/nocobase/nocobase/pull/6798)） by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）の連携ルールにおいて、フィールド属性の設定が欠落する問題を修正する（[#6800](https://github.com/nocobase/nocobase/pull/6800)） by @katherinehhh
* **[認証]** 認証器名の変更を禁止する（[#6808](https://github.com/nocobase/nocobase/pull/6808)） by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストのレスポンスを変数に設定した際に正しく表示されない問題を修正する（[#6793](https://github.com/nocobase/nocobase/pull/6793)） by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*リリース日：2025-05-06*

#### 🚀 機能改善

* **[クライアント]** RichText コンポーネントが modules と formats の props をサポートするようにしました（[#6807](https://github.com/nocobase/nocobase/pull/6807)）by @jiannx

#### 🐛 不具合修正

* **[検証]** マイグレーションスクリプトの問題を修正しました（[#6820](https://github.com/nocobase/nocobase/pull/6820)）by @2013xile
* **[ワークフロー：カスタムアクションイベント]** トリガーされたワークフローアクションの連携問題を修正しました by @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*リリース日：2025-05-07*

#### 🎉 新機能

* **[ブロック: iframe]** iframe ブロックが allow 属性の設定をサポートするようになりました（[#6824](https://github.com/nocobase/nocobase/pull/6824)）by @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*リリース日：2025-05-08*

#### 🐛 不具合修正

* **[クライアント]**
  * フィルターフォームのリレーションフィールドコンポーネントをデータセレクターに変更した際に、「複数選択を許可」の設定項目がない問題を修正しました（[#6656](https://github.com/nocobase/nocobase/pull/6656)）by @zhangzhonghe
  * フィルターフォーム内のテーブルセレクターのスタイルが異常な問題を修正しました（[#6827](https://github.com/nocobase/nocobase/pull/6827)）by @zhangzhonghe
  * ネストされたサブページで、「ブロックを追加」ボタンにマウスをホバーしてもブロックリストが表示されない問題を修正しました（[#6832](https://github.com/nocobase/nocobase/pull/6832)）by @zhangzhonghe
  * 関連コレクションのフィールドを表示する際に、複数の関連フィールドの送信に失敗する問題を修正しました（[#6833](https://github.com/nocobase/nocobase/pull/6833)）by @katherinehhh
  * 複製ボタン上に他のボタンをドラッグできない問題を修正しました（[#6822](https://github.com/nocobase/nocobase/pull/6822)）by @katherinehhh
  * 読み取り専用モードでのサブテーブルページネーションバーのスタイル問題を修正しました（[#6830](https://github.com/nocobase/nocobase/pull/6830)）by @katherinehhh
* **[データベース]** MariaDB で外部キーが bigInt の場合、appends で belongs-to 関連が読み込まれない問題を修正しました（[#6823](https://github.com/nocobase/nocobase/pull/6823)）by @mytharcher
* **[コレクションフィールド：添付ファイル (URL)]** 添付ファイル (URL) フィールドで連動ルールにおける値の設定を許可しないように修正しました（[#6831](https://github.com/nocobase/nocobase/pull/6831)）by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/ja/blog/v1.7.0-alpha.13)

*リリース日：2025-05-08*

#### 🎉 新機能

* **[クライアント]**
  * 二次確認のタイトルとコンテンツに変数をサポートする（[#6787](https://github.com/nocobase/nocobase/pull/6787)）by @katherinehhh
  * ブロック内で連動ルールを設定して、動的に表示 / 非表示を行えるようにする（[#6636](https://github.com/nocobase/nocobase/pull/6636)）by @katherinehhh
* **[未定義]** ライセンスキットのために publish ci を追加する（[#6786](https://github.com/nocobase/nocobase/pull/6786)）by @jiannx
* **[ブロック: iframe]** iframe ブロックが allow 属性の設定をサポートする（[#6824](https://github.com/nocobase/nocobase/pull/6824)）by @zhangzhonghe
* **[認証]** “パスワードを忘れた” 機能をサポートする（[#6616](https://github.com/nocobase/nocobase/pull/6616)）by @zhangzhonghe
  参照: [パスワードを忘れた](https://docs.nocobase.com/handbook/auth/user#forgot-password)
* **[ファイルマネージャー]** 機能：ファイルストリーミングをサポートする`getFileStream` API を追加する。（[#6741](https://github.com/nocobase/nocobase/pull/6741)）by @sheldon66
* **[アクション：カスタムリクエスト]** カスタムリクエストアクションの成功メッセージにレスポンス変数をサポートする（[#6694](https://github.com/nocobase/nocobase/pull/6694)）by @katherinehhh
* **[テンプレート印刷]** 機能：テンプレート印刷で`{ ラベル, 値 }`形式のセレクトオプションをサポートする。by @sheldon66
* **[ブロック：ツリー]** フィルターツリーブロックが連動ルールをサポートする by @katherinehhh
* **[データ可視化: ECharts]** 棒グラフに “Y 軸反転” 設定を追加する by @2013xile

#### 🚀 機能改善

* **[クライアント]**
  * RichText コンポーネントが modules と formats の props をサポートする（[#6807](https://github.com/nocobase/nocobase/pull/6807)）by @jiannx
  * サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同じ行に整列させる（[#6790](https://github.com/nocobase/nocobase/pull/6790)）by @katherinehhh
  * アクションアイコンにマウスをホバーした際に、ボタンのタイトルをツールチップで表示する（[#6761](https://github.com/nocobase/nocobase/pull/6761)）by @katherinehhh
  * 参照テンプレートの機能を維持する（[#6743](https://github.com/nocobase/nocobase/pull/6743)）by @gchust
  * アップロードメッセージを調整する（[#6757](https://github.com/nocobase/nocobase/pull/6757)）by @mytharcher
* **[ユーティリティ]** フィルターボタンのフィールドリストの高さを増やし、フィールドをソートとカテゴリ分けする（[#6779](https://github.com/nocobase/nocobase/pull/6779)）by @zhangzhonghe
* **[ファイルマネージャー]** OSS タイムアウトオプションを追加し、デフォルトを 10 分に設定する（[#6795](https://github.com/nocobase/nocobase/pull/6795)）by @mytharcher
* **[データ可視化]** フィールドインターフェイス設定の拡張 API を追加する（[#6742](https://github.com/nocobase/nocobase/pull/6742)）by @2013xile
* **[パスワードポリシー]** デフォルトのパスワード有効期限を「永遠有効」に変更する by @2013xile
* **[WeCom]** ユーザーのメールを更新する際に、企業用メールを個人名義のメールよりも優先する by @2013xile

#### 🐛 不具合修正

* **[データベース]**

  * テキストフィールドの値のためにインポートが失敗する問題を修正する（[#6699](https://github.com/nocobase/nocobase/pull/6699)）by @aaaaaajie
  * MariaDB で外部キーが bigInt の場合、appends で belongs-to 関連が読み込まれない問題を修正する（[#6823](https://github.com/nocobase/nocobase/pull/6823)）by @mytharcher
  * テストケースを修正する（[#6811](https://github.com/nocobase/nocobase/pull/6811)）by @mytharcher
  * データ型が文字列でない場合に発生するエラーを回避する（[#6797](https://github.com/nocobase/nocobase/pull/6797)）by @mytharcher
  * sql コレクションとビューコレクションに unavailableActions を追加する（[#6765](https://github.com/nocobase/nocobase/pull/6765)）by @katherinehhh
* **[クライアント]**

  * 関連コレクションのフィールドを表示する際に、複数の関連フィールドの送信に失敗する問題を修正する（[#6833](https://github.com/nocobase/nocobase/pull/6833)）by @katherinehhh
  * 複製ボタン上に他のボタンをドラッグできない問題を修正する（[#6822](https://github.com/nocobase/nocobase/pull/6822)）by @katherinehhh
  * フィルターフォーム内のテーブルセレクターのスタイルが異常な問題を修正する（[#6827](https://github.com/nocobase/nocobase/pull/6827)）by @zhangzhonghe
  * フィルターフォームのリレーションフィールドコンポーネントをデータセレクターに変更した際に、「複数選択を許可」の設定項目がない問題を修正する（[#6656](https://github.com/nocobase/nocobase/pull/6656)）by @zhangzhonghe
  * ネストされたサブページで、「ブロックを追加」ボタンにマウスをホバーしてもブロックリストが表示されない問題を修正する（[#6832](https://github.com/nocobase/nocobase/pull/6832)）by @zhangzhonghe
  * 読み取り専用モードでのサブテーブルページネーションバーのスタイル問題を修正する（[#6830](https://github.com/nocobase/nocobase/pull/6830)）by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）で連動ルールを設定する際の問題を修正する（[#6803](https://github.com/nocobase/nocobase/pull/6803)）by @katherinehhh
  * 変数選択が非同期ロードを必要とする場合、最後に選択したメニューが失われる問題を修正する（[#6802](https://github.com/nocobase/nocobase/pull/6802)）by @gchust
  * フォームフィールドで検証ルールに違反したときに複数のエラーメッセージが表示される問題を修正する（[#6805](https://github.com/nocobase/nocobase/pull/6805)）by @katherinehhh
  * フィルターフォームで 1 対多フィールドのサブフィールドをフィルタリングオプションとして選択できない問題を修正する（[#6809](https://github.com/nocobase/nocobase/pull/6809)）by @zhangzhonghe
  * 他の props を Variable.Input コンポーネントに渡す（[#6670](https://github.com/nocobase/nocobase/pull/6670)）by @sheldon66
  * 子テーブルの子フォーム（ポップアップ）の連動ルールにフィールド属性設定が不足している問題（[#6800](https://github.com/nocobase/nocobase/pull/6800)）by @katherinehhh
  * 関連コレクションのフィールドを表示する際に、関連フィールドのデータが送信されない問題を修正する（[#6798](https://github.com/nocobase/nocobase/pull/6798)）by @katherinehhh
  * フィルターフォームでフィールド演算子を切り替えた後にページをリフレッシュするとエラーが発生する問題を修正する（[#6781](https://github.com/nocobase/nocobase/pull/6781)）by @zhangzhonghe
  * コラプスブロックで、関係フィールドの検索ボックスのクリアボタンをクリックしてもデータ範囲が削除されないようにする（[#6782](https://github.com/nocobase/nocobase/pull/6782)）by @zhangzhonghe
  * ツリーテーブルの子レコード追加ボタンの位置合わせの問題を修正する（[#6791](https://github.com/nocobase/nocobase/pull/6791)）by @katherinehhh
  * ページタブの前後でメニューを移動できないようにする（[#6777](https://github.com/nocobase/nocobase/pull/6777)）by @zhangzhonghe
  * テーブルブロックがフィルタリング時に重複データを表示する問題を修正する（[#6792](https://github.com/nocobase/nocobase/pull/6792)）by @zhangzhonghe
  * url のクエリパラメータ演算子の問題を修正する（[#6770](https://github.com/nocobase/nocobase/pull/6770)）by @katherinehhh
  * writableView が false のとき、ビューコレクションでエクスポートアクションのみをサポートする（[#6763](https://github.com/nocobase/nocobase/pull/6763)）by @katherinehhh
  * フォーム内で多対多の配列フィールドのデータが誤って取得される問題を修正する（[#6744](https://github.com/nocobase/nocobase/pull/6744)）by @2013xile
  * 作成フォームでサブフォーム / サブテーブルの下にある関連フィールドを表示する際に、予期せぬ関連データの作成が発生する問題を修正する（[#6727](https://github.com/nocobase/nocobase/pull/6727)）by @katherinehhh
* **[create-nocobase-app]** mariadb の問題を一時的に修正するために 2.5.6 にダウングレードする（[#6762](https://github.com/nocobase/nocobase/pull/6762)）by @chenos
* **[アクション：レコードのエクスポート]** 長いテキストをエクスポートする際のエラーを修正する（[#6713](https://github.com/nocobase/nocobase/pull/6713)）by @aaaaaajie
* **[コレクションフィールド：添付ファイル (URL)]** 添付ファイル (URL) フィールドで連動ルールにおける値の設定を許可しないように修正する（[#6831](https://github.com/nocobase/nocobase/pull/6831)）by @katherinehhh
* **[検証]** マイグレーションスクリプトの問題を修正する（[#6820](https://github.com/nocobase/nocobase/pull/6820)）by @2013xile
* **[認証]** 認証子名の変更を許可しない（[#6808](https://github.com/nocobase/nocobase/pull/6808)）by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストのレスポンスを変数に設定すると正しく表示されない問題を修正する（[#6793](https://github.com/nocobase/nocobase/pull/6793)）by @katherinehhh
* **[ブロック：アクションパネル]** アイコンのみ表示が有効な場合、アクションパネルのアイコンが欠落する問題を修正する（[#6773](https://github.com/nocobase/nocobase/pull/6773)）by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** トリガーされたワークフローアクションの連携問題を修正する by @katherinehhh
* **[ワークフロー：日付計算ノード]** `Intl` API がない古いブラウザでのエラーを修正する by @mytharcher
* **[テンプレート印刷]** 修正：不正なアクションを防ぐために、正しい権限検証ロジックを設定する。by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** アクセス URL の有効期限が無効になる問題を修正する by @jiannx
* **[ブロック：ツリー]** 外部キーで接続した後、クリックしてフィルタリングをトリガーするとフィルタ条件が空になる問題を修正する by @zhangzhonghe

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
