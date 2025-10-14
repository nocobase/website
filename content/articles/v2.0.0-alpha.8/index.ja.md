### 🎉 新機能

* **[AIスタッフ]** AIプラグインのオンライン検索機能を改善（[#7580](https://github.com/nocobase/nocobase/pull/7580)）@cgyrock

### 🚀 機能改善

* **[クライアント]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に取得できるよう改善（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[フローエンジン]**
  * ポップアップ変数をサポート（[#7583](https://github.com/nocobase/nocobase/pull/7583)）@gchust
  * コードエディタのユーザー体験を改善し、コードスニペットを追加、異なるシナリオで動的にコード補完を表示（[#7559](https://github.com/nocobase/nocobase/pull/7559)）@gchust
  * 自動フローを標準化し、"beforeRender" イベントで統一的にトリガーすることで、フローの実行の一貫性と予測可能性を向上（[#7577](https://github.com/nocobase/nocobase/pull/7577)）@gchust
* **[ワークフロー]** ノード削除時に「分岐を保持」オプションを追加（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[データ可視化]** グラフ種類を拡張し、UIと操作体験を改善（[#7581](https://github.com/nocobase/nocobase/pull/7581)）@heziqiang
* **[ワークフロー：承認]** 内核変更に対応するためブランチ設定を再構築 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 表のページ切り替え時の表示乱れを修正（[#7572](https://github.com/nocobase/nocobase/pull/7572)）@zhangzhonghe
  * `一括更新` および `更新` 操作でフィールドの割り当てができない問題を修正（[#7565](https://github.com/nocobase/nocobase/pull/7565)）@gchust
  * 画像プレビューで回転とズームを同時に行う際の表示乱れを修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
* **[ワークフロー：承認]** アプリ未インストール時にテーブルが存在せず発生するマイグレーションスクリプトのエラーを修正 @mytharcher
* **[認証：LDAP]** 非ASCII文字（UTF-8）を含むADでのログイン失敗問題を修正 @2013xile
