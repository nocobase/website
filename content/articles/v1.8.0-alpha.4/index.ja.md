### 🚀 機能改善

* **[ワークフロー]** ワークフローのより多くのフィールドをフィルタリングできるようにサポート（[#6995](https://github.com/nocobase/nocobase/pull/6995)）@mytharcher
* **[Email マネージャー]** ポップアップでのデフォルト送信値のサポート、受信者の曖昧検索機能の追加、および諸問題の修正 @jiannx

### 🐛 不具合修正

* **[データベース]** 修正: XLSX インポート時に欠落していた作成者と更新者フィールドを追加（[#7011](https://github.com/nocobase/nocobase/pull/7011)）@aaaaaajie
* **[クライアント]**
  * 割り当てコンポーネントで変数を設定する際にフィールドタイトルが欠落する問題（[#7001](https://github.com/nocobase/nocobase/pull/7001)）@katherinehhh
  * 閲覧モードで関連フィールドにマウスを合わせるとサブテーブルとサブフォームが表示される問題（[#7002](https://github.com/nocobase/nocobase/pull/7002)）@zhangzhonghe
  * ポップアップアクションでトリガーされた場合、markdown ブロックの連携ルールが機能しない問題（[#7007](https://github.com/nocobase/nocobase/pull/7007)）@katherinehhh
  * モーダル内の詳細ブロックのサブテーブルでページを切り替えると未保存の変更警告が表示される問題（[#7004](https://github.com/nocobase/nocobase/pull/7004)）@katherinehhh
  * フィールドスタイル連携ルールが機能しない問題（[#7003](https://github.com/nocobase/nocobase/pull/7003)）@katherinehhh
* **[非同期タスクマネージャー]** 非同期インポート中の多重実行問題を修正（[#7006](https://github.com/nocobase/nocobase/pull/7006)）@aaaaaajie
* **[ローカリゼーション]** 空テキストに起因するエラーを解決（[#7010](https://github.com/nocobase/nocobase/pull/7010)）@2013xile
* **[アクション：レコードエクスポート Pro]** 非同期インポート中の多重実行問題を修正 @aaaaaajie
* **[ワークフロー：承認]** 代理承認時に他者による承認後に処理が続かない問題を修正 @mytharcher
* **[Email マネージャー]**
  * テーブル "mailmessagelabels\_mailmessages" の複数主キー問題 @jiannx
  * 設定ポップアップが表示されない問題 @jiannx
  * メール曖昧検索に一意フィルターを適用 @jiannx
  * 受信者曖昧検索に関連フィールドをサポート @jiannx
  * mailmessagelabelsMailmessages に "id" フィールドを追加 @jiannx
