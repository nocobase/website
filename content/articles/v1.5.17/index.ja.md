### 🐛 バグ修正

- **[client]**
  - コメントコレクションが存在しない状態でコメントブロックを作成するとエラーが発生 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - ツリーブロックのノードをクリックするとエラーが発生 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 左側メニューをクリックするとサブページが異常に閉じられる ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 式の値が空の場合、フィールドの値をクリアしない ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe

- **[Collection field: Sequence]**
  - 読み取り専用モード時にシーケンスフィールドが無効化されない問題を修正 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher

- **[File manager]**
  - 継承コレクションのマイグレーション問題を修正 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher

- **[Access control]**
  - コレクション権限において、多対多フィールドをデータスコープとして使用すると返されるデータレコードが正しくない問題を修正 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile

- **[Block: Kanban]**
  - ポップアップ内の看板ブロックで、ポップアップレコード変数を使用してデータをフィルタリングする際に誤った結果となる問題を修正 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh

- **[Block: Tree]**
  - ツリーブロックのノードをクリックするとエラーが発生 by @zhangzhonghe