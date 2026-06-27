---
title: "NocoBase 2.0 正式發布"
description: "此版本在 AI 能力、應用架構、資料編輯體驗及前端事件流程上進行了系統性改進，並全面適配 V2 頁面與核心功能。"
---

NocoBase 2.0 是一次重大升級，專注於**構建複雜應用程式與擴展部署規模**。此版本在 AI 能力、應用程式架構、資料編輯體驗及前端事件流程方面帶來了系統性改進，並完整適配了 V2 頁面與核心功能。

## 新功能

### AI 員工

AI 能力現已作為一級公民內建於核心中，並可透過外掛系統進行擴展：

- 整合至核心，並以插件為基礎進行擴展
- 升級並優化 LangChain 依賴，提升穩定性與可擴展性
- 簡化 AI 員工互動流程，降低配置與使用門檻

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

**參考資料：**

- [AI 員工](https://v2.docs.nocobase.com/ai-employees)

### 應用程式管理員

應用程式管理員外掛提供了**對多個 NocoBase 應用程式實例的統一發現、排程與管理**，適用於多應用、多環境的部署場景。

- 應用程式自動發現與集中管理
- 共享記憶體機制，提升實例間協作效率
- 多環境混合部署，滿足複雜交付需求

**共享記憶體**

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

**多環境混合部署**

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

**參考資料：**

- [多應用管理](https://v2.docs.nocobase.com/multi-app/multi-app)

### 工作流程畫布增強

#### 拖曳節點重新排序

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### 複製與貼上節點

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### 子表格（內聯編輯 / 彈窗編輯）

為滿足不同複雜度的關聯資料編輯需求，NocoBase 提供兩種子表格編輯模式：

- **子表格（內聯編輯）**：直接在表格中編輯關聯資料，操作高效，適合快速資料輸入與批次更新
- **子表格（彈窗編輯）**：透過彈窗表單編輯資料，支援更複雜的欄位類型與驗證邏輯，適合高複雜度場景

**子表格（內聯編輯）**

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

**子表格（彈窗編輯）**

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

**參考資料：**

- [子表格（內聯編輯）](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table)
- [子表格（彈窗編輯）](https://v2.docs.nocobase.com/interface-builder/fields/specific/sub-table-popup)

### 欄位指派

新的欄位指派機制統一並增強了表單資料的**初始化與寫入邏輯**，提升了清晰度與一致性：

- **統一**欄位指派配置入口，降低分散配置的複雜度
- 欄位指派邏輯**不再依賴欄位元件類型**，使資料行為更穩定、可預測
- 支援**關聯欄位的欄位層級指派**，實現複雜關聯資料建模
- 同時支援**預設值**與**常數值**指派模式，涵蓋初始化與覆寫場景
- 舊版「欄位預設值」已棄用，請遷移至新的欄位指派機制

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

**參考資料：** 欄位指派（文件即將推出）

### 事件流程執行順序

事件流程嚴格按照**事件 → 流程 → 步驟**的層級執行，並在每個層級前後觸發對應的鉤子，以實現精細控制與擴展。

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

**參考資料：**

- [事件流程](https://v2.docs.nocobase.com/interface-builder/event-flow)

## 已適配 2.0 的功能

### 批次編輯

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

**參考資料：**

- [批次編輯](https://v2.docs.nocobase.com/interface-builder/actions/types/bulk-edit)

### 複製

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

**參考資料：**

- [複製](https://v2.docs.nocobase.com/interface-builder/actions/types/duplicate)

### 區塊高度

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

**參考資料：**

- [區塊高度](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/block-height)

### 表格行拖曳排序

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

**參考資料：**

- [拖曳排序](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/drag-sort)

### 資料載入方式

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

**參考資料：**

- [資料載入方式](https://v2.docs.nocobase.com/interface-builder/blocks/block-settings/data-loading-method)

### 在表單中顯示關聯欄位

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

**參考資料：**

- [表單](https://v2.docs.nocobase.com/interface-builder/blocks/data-blocks/form)

### 頁面 (V2) 本地化支援

V2 頁面現已完整支援**頁面、區塊、操作與欄位**的本地化。

啟用本地化外掛後，系統會自動收集遺漏的翻譯條目，並顯示在本地化管理清單中，方便集中維護。

在 JS 區塊中，使用 `ctx.t()` 來取得帶有變數插值的本地化文字：

```js
const label = ctx.t('您的名字是 {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### 審批 2.0

所有新建立的審批流程都使用 2.0 的區塊式佈局。現有的 1.x 配置仍受支援。若要將 1.x 的審批切換為 2.0 佈局，請選擇 v2 版本並重新配置介面。請注意，一旦切換，將無法恢復為 1.x。

#### 配置發起人介面

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### 配置審批人介面

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### 抄送 (CC) 2.0

所有新建立的抄送節點都使用 2.0 的區塊式佈局來顯示接收者視圖。現有的 1.x 配置仍受支援。若要將 1.x 的抄送切換為 2.0 佈局，請選擇 v2 版本並重新配置介面。請注意，一旦切換，將無法恢復為 1.x。

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## 2.0 中尚未提供的功能

以下功能在 2.0 中尚未提供，將在未來版本中升級：

| 功能                     | 當前替代方案       |
| ------------------------ | ------------------ |
| 自訂請求                 | 工作流程請求節點   |
| 瀏覽器列印               | JS 操作            |
| 多步驟表單               | JS 區塊            |
| 樹狀篩選區塊             | JS 區塊            |
| 日曆區塊                 | JS 區塊            |
| 自訂變數                 | 事件流程           |
| 甘特圖區塊               | JS 區塊            |
| 看板區塊                 | JS 區塊            |
| 文字複製                 | 事件流程           |
| 欄位設定                 | JS 操作            |
| 樣式聯動規則             | 事件流程           |
| 複製文字快捷鍵           | 事件流程           |
| QR Code 欄位             | JS 欄位            |
| 掃描輸入                 | 事件流程           |
| 嵌入 NocoBase            | —                  |
| 中國行政區劃欄位         | —                  |
| 程式碼欄位               | —                  |
| 公開表單                 | —                  |
| 工作流程手動節點待辦事項 | —                  |
| 提交成功後               | 事件流程           |
| 資料模板                 | 事件流程           |
