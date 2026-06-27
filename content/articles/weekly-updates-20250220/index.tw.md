---
title: "NocoBase 每週更新：支援全域或批次觸發自訂動作事件"
description: "本週更新包括：支援全域或批次觸發自訂動作、擴充集合中的預設欄位等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*發布日期：2025-02-14*

#### 🚀 改進

- **[通知：應用內訊息]** 移除 SSE 連線重試時的主控台錯誤日誌。([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

#### 🐛 錯誤修復

- **[client]**

  - 關聯資料快速建立操作模態框中缺少拖曳設定 ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh
  - 高精度數字格式未套用的問題 ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh
  - 修正在表單中清除關聯欄位後，提交表單時欄位值未實際清除的問題 ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe
  - 表單提交後區塊未重新整理 ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe
  - 關聯欄位重置後，提交時連結欄位值仍保留 ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh
  - 表格中對無更新權限的行顯示了更新操作 ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh
- **[集合欄位：排序]** 修復外部資料來源中排序欄位類型未註冊的問題 ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher
- **[認證]** WebSocket 認證問題 ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile
- **[集合欄位：附件(URL)]** 修復 hook 中已棄用的請求 URL by @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*發布日期：2025-02-17*

#### 🐛 錯誤修復

- **[client]**

  - 在嵌入頁面中無法開啟欄位連結彈窗 ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  - 在編輯表單中，當關聯欄位更新時，顯示的關聯欄位值未改變 ([#6210](https://github.com/nocobase/nocobase/pull/6210)) by @Cyx649312038
- **[行動端]** 權限設定表格中行動端選單資料不完整 ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*發布日期：2025-02-17*

#### 🐛 錯誤修復

- **[client]**

  - 頁面出現水平捲軸問題 ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  - 關閉子頁面時，觸發了多次區塊資料請求 ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  - UI 中關聯欄位子選單缺少唯一鍵 ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
- **[資料視覺化]** 當資料來源名稱包含連字號 `-` 時，篩選會出錯 ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*發布日期：2025-02-18*

#### 🚀 改進

- **[集合欄位：Markdown(Vditor)]** Vditor CDN 使用本地資源 ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos

#### 🐛 錯誤修復

- **[工作流：循環節點]** 修復當節點內部處於待處理狀態時，循環提前退出的問題 ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*發布日期：2025-02-14*

#### 🐛 錯誤修復

- **[認證]** 增強 Token 並發更新和認證錯誤處理邏輯。([#6208](https://github.com/nocobase/nocobase/pull/6208)) by @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*發布日期：2025-02-15*

#### 🐛 錯誤修復

- **[企業微信]** 企業微信客戶端中的自動登入問題 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*發布日期：2025-02-16*

#### 🎉 新功能

- **[client]** 支援擴展前端篩選運算子 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[工作流：自訂操作事件]** 支援全域或批次記錄觸發自訂操作事件 by @mytharcher

#### 🚀 改進

- **[工作流]** 將綁定工作流程設定移至插件 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*發布日期：2025-02-16*

#### 🎉 新功能

- **[client]** 支援集合中預設欄位的擴展 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
- **[日曆]** 支援看板、日曆和公式欄位插件的可選欄位擴展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
