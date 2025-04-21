## 背景

* ローカリゼーション管理プラグインは、オリジナルテキストを同じネームスペース（モジュール）に配置することによって同期を行います。異なるプラグイン間で同一のテキストが存在する場合、重複を削除し、[`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) にある翻訳を保持して再利用します。
* NocoBase クライアントは、オプション `fallbackNS: "client"` を用いて `i18n` インスタンスを作成します （[参照](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)）。その結果、プラグイン開発中に、`packages/core/client/src/locale` に既に存在するテキストは、プラグインのロケールファイルから省略可能になります。

しかし、この二つの設定には問題があります。同じオリジナルテキストは一つの翻訳にしか関連付けることができず、ネームスペース間で異なることはできません。例えば、ユーザーが既存の翻訳と同じテキストで内容を作成した場合（「Users」を中国語で「用户」とするなど）、それは「zh-CN」環境では「用户」として表示されます。これは、ユーザーが翻訳ではなくオリジナルテキストを表示したい場合でも同様です。

## 変更

翻訳テキストは、対応するモジュール（メニュー、コレクションおよびフィールド、異なるプラグイン）に基づいて分類され、重複はなくなります。ローカリゼーション管理ページでは、ドロップダウンメニューから対応するモジュールを選択することでテキストをフィルタリングできます。

![ローカリゼーション管理ページ](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## 移行方法

通常の[アップグレードプロセス](https://docs.nocobase.com/welcome/getting-started/upgrading) に従ってシステムをアップグレードしてください。次に、対応する言語環境に切り替え、ローカリゼーション管理ページで **「Sync」** ボタンをクリックして翻訳テキストを同期します。

![移行方法](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## 互換性のない変更

### 翻訳テキストが重複しなくなりました

モジュール間での重複テキストは、個別に翻訳を追加する必要があります。

![翻訳テキストが重複しなくなりました](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### `i18n` インスタンスから `fallbackNS` オプションが削除されました

クライアントの `i18n` インスタンスは `fallbackNS: "client"` オプションを含まなくなりました。

プラグイン開発者にとって、プラグイン内の言語ファイルで既に存在するテキストを省略した場合は補完する必要があります。もし `packages/core/client/src/locale` からの既存の内容を再利用したい場合は、使用時に適切なパラメータを渡してください。例えば：

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
