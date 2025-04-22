### バグ修正

* **[クライアント]**
  * フォームフィールドにおける `x-disabled` プロパティが効果を発揮しない問題（[#6610](https://github.com/nocobase/nocobase/pull/6610)） 、修正者: @katherinehhh
  * フィールドラベルの表示において、コロンによる切り捨てを防ぐための問題修正（[#6599](https://github.com/nocobase/nocobase/pull/6599)） 、修正者: @katherinehhh
* **[データベース]** 一対多のレコードを削除する際、`filter` と `filterByTk` の両方が渡され、かつ `filter` に関連フィールドが含まれている場合、`filterByTk` が無視される問題（[#6606](https://github.com/nocobase/nocobase/pull/6606)） 、修正者: @2013xile
