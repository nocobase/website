### 🚀 機能改善

* **[ワークフロー]** ノード選択メニューを更新し、2 カラムレイアウトでオプションを表示するようにした。情報密度を高め、ユーザーが一度に更多のオプションを確認できるように（[#7396](https://github.com/nocobase/nocobase/pull/7396)）@mytharcher
* **[ライセンス設定]** ライセンス設定では、毎回最新のインスタンス ID をコピーするように（[#7387](https://github.com/nocobase/nocobase/pull/7387)）@jiannx

### 🐛 不具合修正

* **[クライアント]**
  * 連動ルールの空値検証時に数値 0 を空として扱う（[#7404](https://github.com/nocobase/nocobase/pull/7404)）@katherinehhh
  * リンクボタンのテキストが改行される問題を修正（[#7406](https://github.com/nocobase/nocobase/pull/7406)）@mytharcher
* **[モバイル]** モバイル端末での日付フィールドの表示形式が不正確な問題（[#7412](https://github.com/nocobase/nocobase/pull/7412)）@katherinehhh
* **[オフィスファイルプレビューワー]** 添付ファイル URL フィールドにファイルをアップロードする際にエラーが発生する問題を修正（[#7405](https://github.com/nocobase/nocobase/pull/7405)）@mytharcher
* **[ワークフロー]** ワークフローカテゴリを編集するとエラーが発生し、フォームデータが消失する問題を修正（[#7408](https://github.com/nocobase/nocobase/pull/7408)）@mytharcher
* **[ワークフロー：メーラーノード]** メールノードが正しく実行を再開できない場合がある問題を修正（[#7409](https://github.com/nocobase/nocobase/pull/7409)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** 複数レコードでアクションのトリガーに成功後、選択した行をクリアする @mytharcher
* **[テンプレート印刷]** 複数行のデータにおけるラジオ選択フィールドの印刷問題を修正 @jiannx
* **[ワークフロー：承認]** 承認レコードで外部データソースのデータを読み込むと 404 エラーが発生する問題を修正 @mytharcher
