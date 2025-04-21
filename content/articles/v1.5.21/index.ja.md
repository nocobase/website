### 🚀 改善

- **[ワークフロー]** 後置ノードの結果読み込みを遅延させることで実行記録キャンバスのパフォーマンスを向上 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

- **[ワークフロー：集計ノード]** 倍精度型に基づく集計済み数値の四捨五入処理を追加 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

### 🐛 バグ修正

- **[client]**
  - ラベルが非表示の場合、サブフォームのフィールドコンポーネントがメインフォーム内のコンポーネントと整列しない問題を修正 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh

  - コレクション継承時のポップアップ内で関連ブロックが表示されない問題を修正 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh

  - ファイルコレクション作成時に発生するエラーを修正 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher

- **[ワークフロー]** ジョブ取得時のACLの問題を修正 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher