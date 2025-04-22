### 🎉 新機能

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

### 🚀 改善

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

### 🐛 バグ修正

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