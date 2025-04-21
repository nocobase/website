## 新機能

### ブロックプラグイン：ワークベンチブロック

![20240612221218](https://static-docs.nocobase.com/20240612221218.png)

参考文献：

- [ワークベンチブロック](/handbook/block-workbench)

### フィルターブロックプラグイン：ツリー（商用プラグイン）

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240607144133_rec_.mp4" type="video/mp4">
</video>

参考文献：

- [ブロック - フィルターブロック - ツリー](/handbook/block-tree)

### アクションプラグイン：QRコードスキャンアクション

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

参考文献：

- [QRコードスキャンアクション](/handbook/action-qr-scan)

### 認証プラグイン：DingTalk（商用プラグイン）

![](https://static-docs.nocobase.com/202406120016896.png)

参考文献：

- [認証 - DingTalk](https://docs.nocobase.com/handbook/auth-dingtalk)

## 改善点

### 初回レンダリング時、フィルターフォームにデフォルト値がある場合は自動的にフィルタリングをトリガーする（<a href="https://github.com/nocobase/nocobase/pull/4622" target="_blank">#4622</a>）

![20240611192202](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240611192202.gif)

参考文献：

- [フォームフィルターブロック](https://docs-cn.nocobase.com/handbook/ui/blocks/filter-blocks/form#%E7%BB%99%E5%AD%97%E6%AE%B5%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC)

### Markdownで変数のサポート

![](https://static-docs.nocobase.com/20240612205857.png)

参考文献：

- [設定画面 / 変数](/handbook/ui/variables)

### MarkdownでQRコードラベルの使用がサポート

Markdown内でQRコードの設定がサポートされており、変数と組み合わせて使用できます。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```

参考文献：

- [Markdownブロック](/handbook/ui/blocks/other-blocks/markdown)

### ワークフロー：作成/更新ノードのフィールド値の割り当ての改善（<a href="https://github.com/nocobase/nocobase/pull/4546" target="_blank">#4546</a>）

![20240612225415](https://static-docs.nocobase.com/20240612225415.png)

### ポップアップウィンドウを開く際のURLの最適化（<a href="https://github.com/nocobase/nocobase/pull/4706" target="_blank">4706</a>）

ポップアップウィンドウを開くと、ブラウザのURLも変わります。この時にブラウザをリフレッシュすると、ポップアップウィンドウが閉じません。

![11e6293b407e630708ebd1ce99ee35c5.gif](https://static-docs.nocobase.com/11e6293b407e630708ebd1ce99ee35c5.gif)

### その他

- ワークフロー：条件ノード内で任意の変数のパスを選択できるようにする（<a href="https://github.com/nocobase/nocobase/pull/4571" target="_blank">#4571</a>）
- データ可視化：チャートのJSON設定で<a href="https://json5.org/" target="_blank">JSON5</a>構文を使用できるようにする。（<a href="https://github.com/nocobase/nocobase/pull/4668" target="_blank">#4668</a>）

## バグ修正

### xxx（<a href="" target="_blank">#</a>）

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

参考文献：

- []()

### その他

- 変数を使用して関連フィールドのデフォルト値を設定しようとしたときに保存エラーが発生する問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4590" target="_blank">#4590</a>）
- デフォルト値がない場合でもフィルターフォームが自動的にフィルタリングをトリガーする問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4627" target="_blank">#4627</a>）
- 変数コンポーネントで変数のテキストが長すぎるときにテキストがオーバーフローする問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4605" target="_blank">#4605</a>）
- 変数の遅延読み込みで誤ったsourceKeyを使用する問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4691" target="_blank">#4691</a>）
- 複製：クリック後にエラーが発生する問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4658" target="_blank">#4658</a>）
- ワークフロー：ワークフローでコレクションのIDフィールドを変数として選択できない問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4567" target="_blank">#4567</a>）
- ワークフロー：承認構成インターフェースでローカル添付ファイルの表示パスが間違っている問題を修正しました。
- データ可視化：チャートJSON構成でJS表現が保存されない問題を修正しました。
- データ可視化：フィルタリング時にカスタムフィルターフィールドが適用されない問題を修正しました。（<a href="https://github.com/nocobase/nocobase/pull/4671" target="_blank">#4671</a>）
- インポート：インポートテンプレートで説明情報を構成する際に多対多のリレーションシップデータが空でインポートできない問題を修正しました。 （<a href="https://github.com/nocobase/nocobase/pull/4623">#4623</a>）
- インポート：インポート時にリレーションフィールドとオプションフィールドのデータ検証を追加しました。 （<a href="https://github.com/nocobase/nocobase/pull/4643">#4643</a>）
- インポート：自動インクリメントシーケンスのリセットロジックを調整しました。ユーザーが自動インクリメントの主キーをインポートしない場合は実行されません。 （<a href="https://github.com/nocobase/nocobase/pull/4631">#4631</a>