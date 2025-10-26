Markdownブロックは、当システムで最も一般的に使用され、かつ強力なブロックの一つです。軽量なテキストプロンプトからシンプルなHTMLスタイリング、さらには基本的なビジネスロジックまで、柔軟かつ多彩な機能を提供します。

## 1. Markdownブロックの基本機能

Markdownブロックは、その柔軟でオープン、かつ容易に変更可能な特性により、システムのお知らせ表示に頻繁に利用されます。ビジネスモジュール、機能、ブロック、あるいはフィールドにおいても、付箋のようにちょっとしたヒントを表示することが可能です。

Markdownブロックを使用する前に、まずMarkdownの書式と記法に慣れておくことをお勧めします。詳細は [Vditorサンプル](https://docs.nocobase.com/api/field/markdown-vditor) をご参照ください。

> 注意：ページ上のMarkdownブロックは比較的軽量であるため、一部の機能（数学式やマインドマップなど）は現在レンダリングをサポートしていません。しかし、HTMLを用いて実装することができ、システムにはVditorフィールドコンポーネントも用意されていますので、お試しください。

### 1.1 ページ例

システムの「オンラインデモ」ページでMarkdownの使用例を確認できます。具体的な例は、ホームページ、注文ページ、及び「その他の例」セクションに掲載されています。

例えば、ホームページ上の警告やヒント：
![20250227085425](https://static-docs.nocobase.com/20250227085425.png)

注文モジュールでの計算ロジック：
![20250227085536](https://static-docs.nocobase.com/20250227085536.png)

「その他の例」セクション内のガイドや画像：
![20250227085730](https://static-docs.nocobase.com/20250227085730.png)

編集モードに切り替えることで、Markdownの内容を随時変更し、ページ上の変化を確認できます。
![20250227085855](https://static-docs.nocobase.com/20250227085855.png)

### 1.2 Markdownブロックの作成

ページ、ポップアップ、フォームなどで柔軟にMarkdownブロックを作成できます。

#### 1.2.1 作成方法

- **ポップアップ/ページでの作成:**

  ![Markdown Block in Pop-ups/Pages](https://static-docs.nocobase.com/20250227091156.png)
- **フォームブロックでの作成:**

  ![Markdown Block in Form Blocks](https://static-docs.nocobase.com/20250227091309.png)

#### 1.2.2 使用例

Markdown記法で `---` と入力することで、水平線（区切り線）を疑似的に作成し、シンプルなコンテンツの区切りを実現できます。以下はその例です:

![Separator Example 1](https://static-docs.nocobase.com/20250227092156.png)
![Separator Example 2](https://static-docs.nocobase.com/20250227092236.png)

---

## 2. パーソナライズされたコンテンツ表示

Markdownブロックのもう一つの大きな利点は、システム変数の補間をサポートしている点です。これにより、個々のユーザー向けにパーソナライズされたタイトルやヒントメッセージを生成し、各ユーザーがフォーム内で独自の表示を確認できるようになります。

![Personalized Display 1](https://static-docs.nocobase.com/20250227092400.png)
![Personalized Display 2](https://static-docs.nocobase.com/20250227092430.png)

さらに、フォームデータを組み合わせて簡単なコンテンツフォーマットを実現することも可能です。以下の例をご覧ください:

**ハイライトされたタイトルの例:** # #{{$nRecord.id}} {{$nPopupRecord.task_name}}

---

![Highlighted Title Effect](https://static-docs.nocobase.com/20250227164055.png)

**中央揃えの仕切りの例:**

![Centered Divider Effect](https://static-docs.nocobase.com/20250227164456.png)

## 3. 追加要素でコンテンツを豊かにする

Markdown記法や変数に慣れてくると、HTMLなどの追加コンテンツを用いてMarkdownブロックをさらに充実させることができます！

### 3.1 HTMLの例

HTML記法に不慣れな場合は、Deepseekに手伝ってもらうと良いでしょう（※ script タグはサポートされていないため、すべてのスタイルはローカルの div 内に記述することを推奨します）。

以下は、上品な告知の例です:<div style="font-family: 'Arial', sans-serif; background-color: #e9f5ff; margin: 20px; padding: 20px; border: 2px solid #007bff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
<h1 style="color: #007bff; text-align: center; font-size: 2em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">楽しいお出かけに参加しませんか？</h1>
<p style="font-size: 1.2em; line-height: 1.6; color: #333;">皆さん、こんにちは,</p>
<p style="font-size: 1.2em; line-height: 1.6;">笑いと冒険、そして素晴らしい雰囲気に満ちたグループお出かけへ、皆さんをご招待できることを大変嬉しく思います！</p>
<p style="font-size: 1.2em; line-height: 1.6;">2025年11月10日をカレンダーに印し、一緒に探検し、リラックスし、充実した時間を過ごす準備をしましょう。</p>
<p style="font-size: 1.2em; line-height: 1.6;">近日中に日程や集合場所の詳細をお知らせしますので、お楽しみに！</p>
<p style="font-size: 1.2em; line-height: 1.6; font-style: italic;">皆さんにお会いできるのを心待ちにしています！</p>
<p style="font-size: 1.2em; line-height: 1.6;">それでは、</p>
<p style="font-size: 1.2em; line-height: 1.6;">イベントチームより</p>

</div>
```


```![20250227092832](https://static-docs.nocobase.com/20250227092832.png)

![20250227093003](https://static-docs.nocobase.com/20250227093003.png)

### 3.2 アニメーション効果の例

CSSを組み合わせることで、スライドショーのようにコンテンツを動的に表示・非表示するシンプルなアニメーション効果を実現することも可能です。下記のコードをMarkdownに貼り付けて、その効果をお試しください！

```HTML
<div style="background-color: #f8e1e1; border: 2px solid #d14; border-radius: 10px; padding: 20px; text-align: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); animation: fadeInOut 3s infinite;">
    <h2 style="color: #d14; font-family: 'Arial', sans-serif;">🎉 特別なお知らせ 🎉</h2>
    <p style="color: #333; font-size: 18px; font-family: 'Georgia', serif;">ご支援とご注目に感謝いたします！来週の月曜日に特別なイベントを開催しますので、ぜひご期待ください！</p>
    <button style="background-color: #d14; color: white; border: none; border-radius: 5px; padding: 10px 20px; cursor: pointer;">詳細を確認する</button>
</div>

<style>
@keyframes fadeInOut {
    0%, 100% { opacity: 0; transform: translateY(-20px); }
    10%, 90% { opacity: 1; transform: translateY(0); }
}
</style>
```

![](https://static-docs.nocobase.com/202502270933fade-out.gif)
