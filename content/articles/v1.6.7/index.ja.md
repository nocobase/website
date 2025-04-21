### 🚀 改善

- **[ワークフロー：メール送信ノード]** セキュリティフィールド設定の説明を追加。（[#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[通知：電子メール]** セキュリティフィールド設定の説明を追加。（[#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[カレンダー]** クイックイベント作成の有効化または無効化のオプション設定を追加。（[#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

### 🐛 バグ修正

- **[client]** 中国語ロケールでの時間フィールド送信時に「invalid input syntax for type time」エラーが発生する問題を修正。（[#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
- **[ファイルマネージャー]** COSに保存されたファイルへアクセスできない問題を修正。（[#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[ブロック：マップ]** マップ管理において、シークレットキーのフィールドがバリデーションを発動しない問題を修正。（[#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[WEBクライアント]** ルート管理テーブル上のパスが実際のパスと異なる問題を修正。（[#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[アクション：レコードエクスポート Pro]** 添付ファイルをエクスポートできない問題を修正 by @chenos
- **[ワークフロー：承認]**
  - nullユーザーが原因で発生するクラッシュを修正 by @mytharcher
  - クエリノードの結果追加時に発生するエラーを修正 by @mytharcher