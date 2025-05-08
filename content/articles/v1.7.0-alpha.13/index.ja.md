### 🎉 新機能

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

### 🚀 機能改善

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

### 🐛 不具合修正

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
