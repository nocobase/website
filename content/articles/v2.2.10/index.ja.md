### 🚀 機能改善

* **[utils]** 新しい環境変数を追加し、サーバーから IP アドレスへの直接リクエストやリダイレクトを禁止できるように対応 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
* **[client-v2]** iOS 上での V2 フォームの QR コード読み取りの安定性を向上。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]** ワークフローのデータ追加・更新ノードのフィールド値設定で、サーバー側が対応していない組み込み日付変数を非表示に変更。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
* **[server]** サブアプリケーションのデプロイ環境が利用できないにもかかわらず、「準備中」と誤って表示される問題を修正 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
* **[ワークフロー：遅延ノード]** 遅延ノードの遅延時間変数の検証を修正し、変数の解析結果が無効な場合は直ちにエラーを返すことで、意図しない待機を防止。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
* **[アプリケーション監督]** ローリングアップデートまたはデプロイ環境の切り替え後に、サブアプリケーションへアクセスできなくなる問題を修正 by @2013xile
