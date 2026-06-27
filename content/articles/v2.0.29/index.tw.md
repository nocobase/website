---
title: "NocoBase v2.0.29：透過靜默解壓縮 LibreOffice 和 Oracle Instant Client 的指令，減少伺服器啟動時的日誌噪音"
description: "v2.0.29 版本發行說明"
---

### 🚀 改善

- **[undefined]** 在伺服器啟動時，透過靜音 LibreOffice 與 Oracle Instant Client 的 unzip 指令，減少日誌雜訊 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) - 感謝 @Rishabh1925

### 🐛 錯誤修復

- **[client]** 修正變數表達式中空格導致標籤無法顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) - 感謝 @mytharcher

- **[flow-engine]** 修正配置狀態下 UI 元件寬度過小時，無法選取選單項目的問題。([#8954](https://github.com/nocobase/nocobase/pull/8954)) - 感謝 @gchust

- **[資料視覺化]** 使用基於變數的篩選器時，圖表在初次渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) - 感謝 @2013xile
