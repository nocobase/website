### 🐛 不具合修正

* **[undefined]** 中国語以外のバージョン管理ドキュメントで、Pro 版ラベルが表示されない問題を修正しました。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
* **[AIワーカー]** ワークフローの AIワーカータスクで、連続したツール呼び出しによってグラフ再帰制限に達した後、実行に失敗する問題を修正しました。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエストで、実行時オプションによって保存済みのリクエストターゲットが上書きされてしまう問題を修正しました。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
* **[データソース管理]** v2 のデータテーブルフィールド管理で、テンプレートで保護されたフィールドを削除できてしまう問題を修正しました。また、継承フィールドの表示、確認、上書きの挙動が v1 と一致しない問題も修正しました。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
* **[マイグレーション管理]** MySQL の非 ASCII 文字を含む内容をマイグレーションする際、文字化けが発生する可能性がある問題を修正しました。 by @2013xile
* **[ワークフロー：承認]** 承認ノードで Original application content ブロックを追加する際にエラーが発生する問題を修正しました。 by @zhangzhonghe
