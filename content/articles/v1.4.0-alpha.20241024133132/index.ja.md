### 🎉 新機能

- **[クライアント]** フォームと詳細ブロックにグループを追加する機能をサポート ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh

- **[カレンダー]** プラグインカレンダーにデフォルトのビュー設定と国際化設定を追加 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038

- **[データソース: KingbaseES]** Kingbaseデータベースを主または外部データソース（pgモード）として使用する機能をサポート by @chareice
参考: [データソース - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 改善

- **[データベース]** プラグインの静的読み込みロジックをサポート ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice

- **[クライアント]** テーブルブロックのレンダリング性能を向上（初回レンダリング時間を約50%削減） ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe

- **[モバイル]** モバイルクライアントでフィルターフォームブロックをサポート ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh

- **[バックアップマネージャー]**
  - `バックアップローカルストレージファイル`のデフォルト設定をtrueに変更 by @gchust

  - 復元アクションが失敗した場合にデータベースのデータを元に戻す機能 by @gchust

### 🐛 バグ修正

- **[サーバー]** アプリのafterLoadイベントがインストール後にトリガーされなかった問題を修正 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos

- **[公開フォーム]** 公開フォームの登録ACLスニペット ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh

- **[バックアップマネージャー]** サブアプリを復元した後、サブアプリが異なるスキーマを使用しているとメインアプリがクラッシュする問題を修正 by @gchust

