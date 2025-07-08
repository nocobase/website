### 🎉 新機能

* **[クライアント]**
  * 外部データソースの SQL Server における BIT フィールドをサポート（[#7058](https://github.com/nocobase/nocobase/pull/7058)）@aaaaaajie
  * カスタム集計変数をサポート（[#6916](https://github.com/nocobase/nocobase/pull/6916)）@zhangzhonghe
    参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[build]** 商用認証をサポート（[#6554](https://github.com/nocobase/nocobase/pull/6554)）@jiannx
* **[データソースマネージャー]** ✨ 外部データソースからのコレクションの必要時読み込みをサポート（[#6979](https://github.com/nocobase/nocobase/pull/6979)）@aaaaaajie
* **[ライセンス設定]** ライセンス設定を追加し、プラグインダウンロード前にライセンス検証を行う（[#7026](https://github.com/nocobase/nocobase/pull/7026)）@jiannx
* **[認証]** 「パスワードを忘れた」機能をサポート（[#6616](https://github.com/nocobase/nocobase/pull/6616)）@zhangzhonghe
  参照：[パスワードを忘れた](https://docs.nocobase.com/handbook/auth/user#forgot-password)
* **[アクション：一括更新]** ブロック内のデータ更新後に他のデータブロックのデータを更新する機能をサポート（[#6591](https://github.com/nocobase/nocobase/pull/6591)）@zhangzhonghe
* **[データソース：外部 SQL Server]**
  * 外部データソースの SQL Server BIT フィールドをサポート @aaaaaajie
  * 外部データソースからのコレクションの必要時読み込みをサポート @aaaaaajie
* **[カスタム変数]** カスタム集計変数をサポート @zhangzhonghe
  参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[メールマネージャー]**
  * メール削除をサポート @jiannx
  * メール同期間隔設定をサポート @jiannx
  * 一括送信をサポート @jiannx

### 🚀 機能改善

* **[クライアント]**
  * QR コードスキャンによる入力フィールドの入力をサポート（[#6943](https://github.com/nocobase/nocobase/pull/6943)）@katherinehhh
  * デバイスタイプに基づいてモバイルコンポーネントの表示を判断（ページ幅ではなく）（[#6611](https://github.com/nocobase/nocobase/pull/6611)）@zhangzhonghe
  * Markdown ブロックコンテンツのローカリゼーションをサポート（[#6941](https://github.com/nocobase/nocobase/pull/6941)）@katherinehhh
  * デバイスタイプに基づいてモバイルレイアウトの表示を判断（ページ幅ではなく）（[#6600](https://github.com/nocobase/nocobase/pull/6600)）@zhangzhonghe
* **[非同期タスクマネージャー]** エクスポート時のタスク作成パフォーマンスを改善（[#7078](https://github.com/nocobase/nocobase/pull/7078)）@aaaaaajie
* **[モバイル]** モバイルデバイス用の通知ポップアップのスタイルを適応（[#6557](https://github.com/nocobase/nocobase/pull/6557)）@zhangzhonghe
* **[メールマネージャー]**
  * 同じ件名内でのメール個別返信と転送をサポート @jiannx
  * スキーマ実装によるメール送信と AI サポート @jiannx
  * ポップアップ内のデフォルト送信値をサポート、受信者のファジー検索をサポート、問題を修正 @jiannx
  * 一括送信機能を完了 @jiannx
  * 機能改善と問題修正 @jiannx

### 🐛 不具合修正

* **[cli]**
  * プラグインインストール時のライセンスコピー処理を調整（[#7135](https://github.com/nocobase/nocobase/pull/7135)）@jiannx
  * プラグインダウンロード時の未定義エラー（[#7143](https://github.com/nocobase/nocobase/pull/7143)）@jiannx
* **[クライアント]**
  * バッジ値をクリア後、UI が更新されない問題（[#7055](https://github.com/nocobase/nocobase/pull/7055)）@zhangzhonghe
  * フィルターボタンをクリック時のエラー（[#7100](https://github.com/nocobase/nocobase/pull/7100)）@zhangzhonghe
  * 現在のユーザーデータが空になる問題を修正（[#7016](https://github.com/nocobase/nocobase/pull/7016)）@zhangzhonghe
  * ポップアップリンクを通じて開いたページで内容が誤って表示される問題（[#6990](https://github.com/nocobase/nocobase/pull/6990)）@zhangzhonghe
  * その他の props を Variable.Input コンポーネントに渡す（[#6670](https://github.com/nocobase/nocobase/pull/6670)）@sheldon66
  * 関連フィールドを含む場合、テンプレートとして保存するアクションが失敗する問題（[#6543](https://github.com/nocobase/nocobase/pull/6543)）@gchust
* **[データベース]** 文字列フィールドの eq 演算子を数値型と互換性あるように修正（[#7062](https://github.com/nocobase/nocobase/pull/7062)）@chenos
* **[build]** plugin-workflow-javascript におけるクライアント実行時エラー、未定義エラーの処理を修正（[#6859](https://github.com/nocobase/nocobase/pull/6859)）@jiannx
* **[データ可視化]** テーブルページネーションの問題（[#7151](https://github.com/nocobase/nocobase/pull/7151)）@2013xile
* **[データソースマネージャー]** 必要時データソース読み込みとテーブルプレフィックス設定の組み合わせにより「ConnectionManager.getConnection was called after the connection manager was closed」エラーが発生する問題を修正（[#7150](https://github.com/nocobase/nocobase/pull/7150)）@aaaaaajie
* **[plugin-service-platform]** ライセンステキストを調整 @jiannx
* **[カスタム変数]** バッジ値をクリア後、UI が更新されない問題 @zhangzhonghe
* **[メールマネージャー]**
  * 添付ファイルが表示されない問題 @jiannx
  * メール削除時のエラー @jiannx
  * メール削除失敗 @jiannx
  * 設定ポップアップが表示されない問題 @jiannx
  * 返信ドロワーが表示されない問題 @jiannx
  * 受信者ファジー検索が関連フィールドをサポート @jiannx
  * mailmessagelabelsMailmessages に「id」フィールドを追加 @jiannx
  * メールファジー検索にユニークフィルターを追加 @jiannx
  * テーブル「mailmessagelabels\_mailmessages」の複数主キー設定 @jiannx
