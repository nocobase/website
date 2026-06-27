---
title: "更新（本地化管理）：按模組組織文字命名空間"
description: "透過 NocoBase 基於模組的文字命名空間來優化您的本地化管理。本指南詳細介紹了按模組組織翻譯文字的新方法，消除了重複問題並增強了自訂性。了解變更內容、遷移步驟以及對開發流程的影響。"
---

## 背景

* 本地化管理外掛透過將原文放在同一個命名空間（模組）中來進行同步。當在不同外掛中遇到相同的原文時，會移除重複項目，並保留 [`packages/core/client/src/locale`](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/locale) 中的翻譯以供後續使用。
* NocoBase 客戶端在建立 `i18n` 實例時，會帶有 `fallbackNS: "client"` 選項（[參考資料](https://github.com/nocobase/nocobase/blob/8983eed3308d018a309f1d39f5c6988bbc632878/packages/core/client/src/i18n/i18n.ts#L20)）。因此，在外掛開發過程中，某些已存在於 `packages/core/client/src/locale` 中的文字可以省略，不需放入外掛的語言檔案中。

然而，這兩個設定會產生一個問題。相同的原文只能關聯到一個翻譯，無法在不同的命名空間中有所區別。例如，如果使用者建立的內容與現有翻譯的文字相同，例如「Users」對應的中文翻譯是「用户」，那麼在「zh-CN」環境下就會顯示為「用户」。即使使用者偏好顯示原文而非翻譯，結果依然如此。

## 變更

翻譯文字現在會根據其對應的模組（選單、資料集合與欄位、不同外掛）進行分類，不再進行去重。在本地化管理頁面上，可以透過下拉選單選擇對應的模組來篩選文字。

![本地化管理頁面](https://static-docs.nocobase.com/148e5cf34a8a761f7d16429f1c0338f1.jpg)

## 如何遷移

請依照正常的[升級流程](https://docs.nocobase.com/welcome/getting-started/upgrading)升級系統。然後切換到對應的語言環境，在本地化管理頁面上，點擊**「同步」**按鈕來同步翻譯文字。

![如何遷移](https://static-docs.nocobase.com/bb1c1563770b5c7bfc4f683fc8efaad9.jpg)

## 重大變更

### 翻譯文字不再去重

跨模組的重複文字需要分別進行翻譯。

![翻譯文字不再去重](https://static-docs.nocobase.com/c090ade730c7d71841cef340d865615b.jpg)

### 從 `i18n` 實例中移除了 `fallbackNS` 選項

客戶端的 `i18n` 實例不再包含 `fallbackNS: "client"` 選項。

對於外掛開發者來說，如果外掛中的語言檔案省略了核心客戶端中已有的某些文字，則需要進行補充。如果您仍想重複使用 `packages/core/client/src/locale` 中的內容，請在使用時傳入適當的參數，例如：

```
import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'localization-management';

export const useLocalTranslation = () => {
  return useTranslation([NAMESPACE, 'client'], { nsMode: 'fallback' });
};
```
