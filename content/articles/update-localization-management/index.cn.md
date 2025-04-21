## 背景

* 之前多语言管理插件在同步文本的时候，会将所有文本放到同一个命名空间，不同插件如果有相同的文本，只会保留一个，翻译会以 [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) 中的翻译为准。
* 之前客户端 `i18n` 在实例化的时候会配置 `fallbackNS: "client"` [(参考)](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20), 从而在开发插件的时候，可以省略一些 `packages/core/client/src/locale` 中已经存在的文本的翻译。

但是以上两个设定会导致一个问题，相同的文本只能应用同一个翻译，无法按命名空间（模块）区分。此时如果用户创建了和已有翻译原文相同的内容，该内容也会被翻译。例如：系统中有 “Users” - “用户” 的中文翻译，用户创建了一个 “Users” 菜单，在中文环境下会被显示为 “用户”，即使用户可能并不想展示翻译后的菜单内容。

## 改进

翻译文本按照对应模块（菜单、数据表和字段、不同插件）进行分类，不再去重。在管理界面可以通过下拉菜单选择对应模块，筛选翻译文本。

![localization management page](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## 如何升级

按照系统正常的[升级流程](https://docs-cn.nocobase.com/welcome/getting-started/upgrading)进行升级，然后切换到对应的语言环境，在管理界面上重新**同步**翻译文本。对于不同模块的重复文本，可能需要重新添加翻译。

![How to migrate](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## 不兼容的变化

### 翻译文本不去重

不同模块重复的文本不再只保留一个，需要分别添加对应的翻译

![Translation texts are no longer deduplicated](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### `i18n` 实例移除 `fallbackNS` 选项

客户端 `i18n` 实例化不再配置 `fallbackNS: "client"`. 对于插件开发者，如果插件的多语言文件中省略了部分内核客户端中已有的文本，需要进行补充。如果还是想复用 `packages/core/client/src/locale` 中已有的内容，需要在使用的时候传递参数，例如：

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
