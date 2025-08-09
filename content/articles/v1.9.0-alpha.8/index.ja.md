### 🚀 機能改善

* **[クライアント]** ポップアップタブ切り替え時のパフォーマンスを最適化（[#7353](https://github.com/nocobase/nocobase/pull/7353)）@zhangzhonghe
* **[オフィスファイルプレビューワー]** `.odt`ファイルのプレビューをサポート（[#7347](https://github.com/nocobase/nocobase/pull/7347)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 個別に権限を設定する際に、以前に保存したデータ範囲が事前に選択されない問題を修正（[#7288](https://github.com/nocobase/nocobase/pull/7288)）@aaaaaajie
  * コレクションの一括削除エラーを修正（[#7345](https://github.com/nocobase/nocobase/pull/7345)）@aaaaaajie
* **[ワークフロー]** 停止時にイベントキューに発行することで引き起こされるエラーを回避（[#7348](https://github.com/nocobase/nocobase/pull/7348)）@mytharcher
* **[ワークフロー：並列ノード]** MySQL 環境下で、並列ノードが再開後に中断する問題を修正（[#7346](https://github.com/nocobase/nocobase/pull/7346)）@mytharcher
* **[ワークフロー：承認]**
  * ドラフトを送信する際の関連データ更新を修正 @mytharcher
  * 承認元の詳細ブロックにおいて連動規則が機能しない問題を修正 @mytharcher
