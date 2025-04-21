### 🎉 新機能

- **[認証：OIDC]** @2013xileによるSSL検証スキップオプションの追加

### 🚀 改善

- **[クライアント]** 選択されていないフィールドのために無効なチェックボックスを表示する ([#5503](https://github.com/nocobase/nocobase/pull/5503)) @katherinehhhによる

### 🐛 バグ修正

- **[データベース]** 文字列演算子「含む」と「含まない」が`null`値を正しく処理しない問題を修正 ([#5509](https://github.com/nocobase/nocobase/pull/5509)) @2013xileによる

- **[クライアント]** リンクルールを修正し、URLパラメータ変数を正しく評価するようにする ([#5504](https://github.com/nocobase/nocobase/pull/5504)) @katherinehhhによる

- **[ブロック：地図]** AMapの`load`メソッドを複数回呼び出すことにより、複数の地図が存在する場合に一部の地図が正しく表示されない問題を修正 ([#5490](https://github.com/nocobase/nocobase/pull/5490)) @Cyx649312038による
