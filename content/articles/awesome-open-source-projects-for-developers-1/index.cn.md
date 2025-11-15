开源项目已经彻底改变了开发者的创建、创新和协作方式。

[NocoBase](https://www.nocobase.com/en/blog/what-is-no-code) 作为一个极易扩展的开源无代码开发平台，在创造的过程中，我们也使用了许多优秀且成熟的开源项目。我们向这些优秀的开源项目表示感谢。

本文将介绍 [NocoBase 所使用的开源项目](https://docs-cn.nocobase.com/welcome/community/thanks)，分析它们的优势、缺点、使用场景和更多案例。

请收藏好这份推荐给开发者的优秀开源项目！

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---



## [Node.js](https://nodejs.org/en)

![Node.js.png](https://static-docs.nocobase.com/026a1c277a424ca087b3e9de6b71942a.png)

Node.js 是 NocoBase 的基石，提供了一个基于 Chrome V8 引擎的强大 JavaScript 运行时环境。它使 NocoBase 能够处理大量并发连接，具有高吞吐量，非常适合实时应用。作为一个成熟的开源项目，它在某些应用场景下表现出色，特别是在处理高并发、实时数据的场景。然而，它并不是万能的，开发者在选择使用 Node.js 时需要根据项目需求和特点做出权衡。

### **优势**

* 事件驱动、非阻塞 I/O 模型，适合 I/O 密集型应用
* JavaScript 全栈开发，降低学习成本
* npm 生态系统庞大，模块丰富
* 高性能，特别是在实时应用和流媒体方面
* 跨平台，可在多种操作系统上运行

### **缺点**

* 不适合 CPU 密集型任务
* 回调嵌套问题(可通过 Promise 和 async/await 缓解)
* 单线程模型可能导致未捕获的异常使整个应用崩溃
* 版本更新频繁可能引起兼容性问题
* 大型、复杂应用的代码组织和维护具有挑战性

### **使用场景**

* 实时应用(如聊天系统、游戏服务器)
* 流媒体应用
* 单页应用 (SPA) 后端
* RESTful API 服务
* 微服务架构
* 命令行工具

### **案例**

* LinkedIn 使用 Node.js 重建了他们的移动应用后端，将系统从 Ruby on Rails 迁移到 Node.js
* Netflix 使用 Node.js 来构建和定制他们的用户界面
* PayPal 使用 Node.js 重写了其账户概览页面，提高了页面响应速度
* NASA 使用 Node.js 构建了用于存储和分发数据的端到端系统，以减少数据访问时间
* Walmart 在假日购物季使用 Node.js 重新设计了他们的移动应用，以处理大量并发连接

## [Koa](https://koajs.com/)

![Koa.png](https://static-docs.nocobase.com/61e575e840d7e89de5fb535f26586d44.png)

Koa 是一个由 Express 团队开发的下一代 Node.js Web 框架。它采用中间件栈架构来构建健壮的 Web 应用程序和 API，增强了 NocoBase 的模块化和可扩展性。Koa 作为一个轻量级的 Web 框架，为开发者提供了极大的灵活性和控制力。它特别适合那些希望对应用架构有更多控制，同时又不想被庞大框架所束缚的开发者。Koa 的设计理念是"少即是多"，这使得它在某些场景下比 Express 更受欢迎，尤其是在构建小型到中型的 Web 应用和 API 时。

### **优势**

* 轻量级和极简设计，核心代码仅有约2000行
* 基于异步函数(async/await),避免回调嵌套
* 强大的中间件系统，易于扩展和定制
* 更好的错误处理机制
* 与Express相比，提供了更优雅的 API 设计
* 更小的学习曲线,特别是对于已经熟悉 Node.js 的开发者

### **缺点**

* 相比 Express，社区和生态系统较小
* 由于其极简设计，许多功能需要通过中间件实现，可能增加初始设置时间
* 不兼容旧版本 Node.js (需要 Node v7.6.0 或更高版本)
* 高度灵活性可能导致缺乏"固定"的解决方案

### **使用场景**

* RESTful API开发
* 微服务架构
* 实时 Web 应用
* 轻量级 Web 应用后端
* 作为更大型应用的一部分，处理特定路由或功能

### **案例**

* 阿里巴巴集团使用 Koa 作为其 Node.js Web 框架的标准
* Uber 在其某些微服务中使用 Koa
* Shopify 在某些内部工具和服务中使用 Koa
* Yahoo 在某些项目中采用 Koa 来构建 API
* 许多中小型创业公司选择 Koa 作为其后端框架，因为其简洁和灵活性

💡 阅读更多：[GitHub Star 数量前 5 的开源无代码/低代码应用开发平台](https://www.nocobase.com/cn/blog/app-builder-tools)

## [React](https://react.dev/)

![782311ee9183d056252e90da067bc4f6.png](https://static-docs.nocobase.com/782311ee9183d056252e90da067bc4f6.png)

React 是一个用于构建用户界面的 JavaScript 库，在 NocoBase 的前端开发中起着至关重要的作用。其基于组件的架构允许重用 UI 组件，确保一致和动态的用户体验。React 特别适合构建大型、复杂的单页应用，其组件化的思想使得开发团队能够更好地组织和管理代码。React 的虚拟 DOM 和高效的渲染机制使其在处理频繁更新的 UI 时表现出色。然而，对于简单的静态网站或小型项目，使用 React 可能会显得有些“杀鸡用牛刀”。

### **优势**

* 虚拟 DOM（Virtual DOM）提高了渲染性能
* 组件化开发，便于代码复用和维护
* 单向数据流，使得应用状态管理更加可预测
* JSX 语法，允许在 JavaScript 中直接写 HTML 式的代码
* 跨平台支持（Web、移动端通过 React Native）
* 高效的差异化算法（Reconciliation）
* 支持服务器端渲染（SSR）

### **缺点**

* 学习曲线可能较陡，特别是对不熟悉 JSX 和函数式编程的开发者
* 仅专注于 UI 层，需要与其他库（如Redux）配合来处理复杂的状态管理
* 相比于完整的框架，可能需要更多的初始配置和决策
* 对 SEO 不够友好（虽然可以通过SSR解决）
* 大型应用可能面临性能优化的挑战

### **使用场景**

* 单页应用（SPA）开发
* 大型、复杂的 Web 应用
* 需要高性能和响应式 UI 的应用
* 实时更新的数据密集型应用
* 跨平台应用开发（配合React Native）
* 企业级应用的前端开发
* 需要频繁 UI 更新的应用（如社交媒体feed）

### **案例**

* Facebook（React的创建者）在其主要产品中大量使用 React
* Instagram 和 WhatsApp 的 Web 版本使用 React 构建
* Airbnb 的前端架构基于 React
* Netflix 使用 React 来提升其用户界面的性能
* Dropbox 在其 Web 应用中采用 React

💡 阅读更多：[探索最佳无代码低代码工具：加速 Web 应用开发](https://www.nocobase.com/cn/blog/web-application-development)

## [Ant Design](https://ant.design/)

![Ant Design.png](https://static-docs.nocobase.com/c8e41b8e259afbc3215314551e11375e.png)

Ant Design 是一个企业级 UI 设计系统，提供了一套完整的高质量 React 组件，帮助开发者快速构建美观的用户界面。NocoBase 使用 Ant Design 提供了直观且一致的用户体验，使应用程序界面更加专业和用户友好。Ant Design 特别适合于需要快速开发、统一设计风格的中大型项目，尤其是企业级应用和后台管理系统。Ant Design的设计语言简洁现代，组件丰富且功能强大，可以大大提高开发效率。

### **优势**

* 丰富的组件库，覆盖大多数常见UI需求
* 设计精美，遵循统一的设计语言
* 完善的文档和示例，便于学习和使用
* 强大的 TypeScript 支持
* 响应式设计，适应不同屏幕尺寸
* 企业级应用友好，提供复杂组件如表格、表单等
* 支持服务端渲染（SSR）

### **缺点**

* 文件体积较大，可能影响初始加载速度
* 学习曲线可能较陡，特别是对于复杂组件
* 过于"Ant Design化"的UI可能缺乏独特性
* 某些组件可能过于复杂，对于简单需求来说有些重量级
* 与 React 深度绑定，不适用于其他框架（虽然有Vue版本）

### **使用场景**

* 企业级 Web 应用开发
* 后台管理系统
* 数据可视化应用
* 需要快速开发的中大型项目
* 需要统一设计语言的产品
* React 项目的 UI 层
* 需要丰富交互的 Web 应用

### **案例**

* 阿里巴巴集团的多个内部系统使用 Ant Design
* 蚂蚁金服的多个产品使用 Ant Design
* 腾讯云的部分控制台界面使用 Ant Design
* 字节跳动的一些内部工具使用 Ant Design
* 很多中小型公司的管理系统和 SaaS 产品使用 Ant Design

## [Dnd Kit](https://dndkit.com/)

![Dnd Kit.png](https://static-docs.nocobase.com/d2526f4c37b2f2f45ee2ac65042ab667.png)

Dnd Kit 是一个现代化的拖放库，支持 React。它提供了灵活且强大的 API，使得实现复杂的拖放交互变得简单而直观。在 NocoBase 中，Dnd Kit 被用来增强用户界面的交互性和可操作性，提高用户的使用体验。Dnd Kit 的轻量级和高性能特性使其成为需要实现流畅拖放体验的项目的理想选择。特别是对于那些需要处理大量可拖动项目或高度定制拖放行为的应用来说，Dnd Kit 提供了很大的优势。

### **优势**

* 轻量级，核心包仅有约 10KB（gzip压缩后）
* 高度模块化，可以只引入需要的功能
* 强大的定制能力，支持复杂的拖放交互
* 优秀的性能，使用虚拟化技术处理大量项目
* 框架无关，可以与React、Vue等框架配合使用
* 支持多种拖放传感器（鼠标、触摸、键盘）
* 提供了丰富的钩子（hooks）和实用函数
* 良好的 TypeScript 支持

### **缺点**

* 相比一些更成熟的拖放库，社区和生态系统相对较小
* 学习曲线可能较陡，特别是对于复杂的拖放需求
* 文档虽然全面，但对于初学者可能不够友好
* 某些高级功能可能需要额外的配置和代码
* 与一些特定的UI库集成可能需要额外的工作

### **使用场景**

* 需要拖放功能的 Web 应用
* 可排序列表或网格
* 看板风格的界面
* 复杂的拖放交互，如多列排序
* 需要高度定制拖放行为的应用
* 大规模数据的拖放操作（利用虚拟化）

### **案例**

* GitHub上有超过 12,000 颗星，被许多开发者和小型项目采用
* 一些开源项目和工具使用 Dnd Kit 实现拖放功能，如一些 React 组件库和开发工具
* 许多教育和培训平台的交互式编程环境中使用 Dnd Kit
* 在线简历构建器和可视化设计工具中也可以看到 Dnd Kit 的应用

## 结语

本文详细介绍了 NocoBase 深度使用的五个开源项目。其他几个项目如 Formily、i18next、Sequelize 和 UmiJS 将在后续文章中分享。希望这些信息能帮助开发者找到最适合自己项目的开源产品，提升开发效率。

**相关阅读：**

* [GitHub Star 数量前 11 的开源内部工具](https://www.nocobase.com/cn/blog/open-source-internal-tools)
* [GitHub 上 Stars 数量最多的 8 个开源 CRUD 项目](https://www.nocobase.com/cn/blog/crud-projects)
* [5大低代码开源平台案例研究](https://www.nocobase.com/cn/blog/top-5-success-cases-of-low-code-open-source-platforms)
* [GitHub Star 数量前 12 的开源无代码工具](https://www.nocobase.com/cn/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [探索最佳无代码低代码工具：加速 Web 应用开发](https://www.nocobase.com/cn/blog/web-application-development)
* [探索 RAD：5 个最佳实践案例解析](https://www.nocobase.com/cn/blog/rapid-application-development-best-application-cases)
