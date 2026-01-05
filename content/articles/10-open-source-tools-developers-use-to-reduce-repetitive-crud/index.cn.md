## 写在开头

所有业务系统，都离不开 CRUD。

如果你做过 CRM、内部管理系统、审批流程、后台管理界面这类项目，大概会有一种很熟悉的感觉。每一次都要从头开始，把整套 CRUD 再实现一遍。

在企业内部系统中：不同部门、不同项目、不同阶段，各自维护着结构高度相似的系统，却彼此割裂。系统越多，重复的 CRUD 也越多，维护成本随之累积。

在外包和集成场景里，这个问题尤其明显。项目之间看起来相似，却无法真正复用；客户觉得改动不大，交付方却需要付出成倍的维护成本。每一个新客户，几乎都意味着一套新的 CRUD 生命周期。

今天这篇文章，我会按照不同思路给开发者推荐可以有效减少重复 CRUD 的开源工具。

💡 推荐阅读：[GitHub 上 Stars 数量最多的 8 个开源 CRUD 项目](https://www.nocobase.com/cn/blog/crud-projects)

---

💬 嗨！你正在阅读 NocoBase 博客。NocoBase 是一个极易扩展的 AI 无代码/低代码开发平台，用于构建企业应用、内部工具和各类系统。它完全支持自托管，基于插件架构设计，开发者友好。→ [欢迎在 GitHub 上了解我们](https://github.com/nocobase/nocobase)

---

## 减少 CRUD 重复的思路

减少重复 CRUD，可以从不同层面入手。

**第一种方式：更快地把 CRUD 写完**

这是最常见的做法。用脚手架、代码生成、模板工程，把基础的增删改查尽快搭出来，减少手写样板代码的时间。

**第二种方式：减少后台和管理界面的重复**

把常见的后台能力抽出来复用，比如通用的列表、表单、权限、基础配置界面。这种方式的核心在于**减少界面和管理功能的重复开发**，但数据结构和业务规则仍然由代码定义。每个项目依然有自己的一套模型，只是后台实现方式更加统一。

**第三种方式：降低项目之间的差异成本**

当重复开始出现在需求结构层面时，单纯复用后台代码已经不够了。于是有些方案选择把字段、关系、权限、流程从代码中抽离出来，用配置或数据模型来描述。在这种模式下，不同项目之间的差异，更多体现在**模型配置的不同**，而不是代码结构的不同。

**第四种方式：避免反复交付相似系统**

数据模型、权限和扩展机制围绕同一套核心结构。新增需求更像是扩展系统，而不是重新交付系统。这种方式成本更高，但解决的也是最根本的问题：为什么相似的系统，总是要从头再来。

## 工具推荐

下面我从四种方式分别推荐能解决对应问题的产品和工具。你可以根据自己的项目的实际情况，选择最适合的工具。让我们从第四种方式先开始。

## 把 CRUD 当成长期系统能力

### NocoBase

官网：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star 数：21k

NocoBase 是一款开源的无代码/低代码开发平台，可以帮助将企业的 CRUD 能力从一次性开发转变为系统能力。它通过数据模型驱动的方式，让业务人员和技术人员能够协同构建复杂的业务系统，而无需每次都从零开始编写增删改查代码。

![NocoBase1.PNG](https://static-docs.nocobase.com/NocoBase1-w8gcmp.PNG)

**核心能力**：

* **数据模型驱动的 CRUD**：通过可视化界面定义数据表、字段和关联关系，系统自动生成完整的创建、读取、更新、删除界面和 API，无需手写任何代码。NocoBase 支持直接连接 PostgreSQL、MySQL、MariaDB 等主流数据库，在不迁移、不改造原有数据结构的前提下，将已有数据快速接入并构建业务系统。

![NocoBase2.PNG](https://static-docs.nocobase.com/NocoBase2-qica0c.PNG)

* **灵活的前端配置**：支持各种字段类型、表单验证、动态显隐、联动规则，可以配置出符合业务逻辑的数据录入界面，减少前端开发工作。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-f78boi.png)

* **强大的查询和列表能力**：内置不同类型的区块，支持筛选、排序、分页、导出等功能，可以通过配置实现复杂的数据展示需求。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-uznhdh.png)

* **细粒度权限控制**：不仅支持角色和用户权限，还可以控制到字段级别（谁能查看/编辑哪些字段）和数据级别（谁能操作哪些数据行），在 CRUD 层面保证数据安全。

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-qegojj.png)

* **可扩展的工作流**：通过工作流引擎配置业务流程，比如数据提交后的审批、状态变更、自动通知等，让 CRUD 操作融入业务流程而非孤立的数据操作。

![NocoBase6.png](https://static-docs.nocobase.com/NocoBase6-w400bs.png)

* **插件化架构**：对于复杂的 CRUD 逻辑，可以通过插件扩展系统功能，一次开发、多次复用，不同项目可以共享自定义插件。

**适用场景**：需要长期维护的企业内部系统、多个相似项目、同时希望将业务配置权交给非技术人员的团队。

### Odoo

官网：[https://www.odoo.com/](https://www.odoo.com/)

GitHub：[https://github.com/odoo/odoo](https://github.com/odoo/odoo)

GitHub Star 数：48.1k

Odoo 是高度模块化的企业资源规划（ERP）和业务管理平台，通过统一的数据库模型和应用框架，将各类业务场景的 CRUD 操作标准化、模块化。从 CRM 到库存管理，从会计到人力资源，所有模块都基于同一套数据模型和权限体系，避免了不同系统之间的重复开发和数据割裂。

![Odoo.png](https://static-docs.nocobase.com/Odoo-haoe9b.png)

**核心能力**：

* **统一的 CRUD 框架**：所有 Odoo 模块都基于同一套 ORM 框架和视图系统，定义一个数据模型后，列表视图、表单视图、搜索视图自动生成，大幅减少重复的界面开发。
* **模块化的业务逻辑复用**：每个业务模块都是独立的 CRUD 应用，可以单独安装或组合使用，新增业务需求时往往只需安装或配置模块，而不是重新开发。
* **关联数据自动打通**：由于所有模块共享同一数据库，一个模块的 CRUD 操作可以自动关联到其他模块，比如创建销售订单时自动扣减库存、更新客户信息，避免了跨系统集成的 CRUD 开发。
* **自动化和规则引擎**：通过自动化动作（Automation）和业务规则，可以在数据的创建、更新、删除时触发自定义逻辑，比如状态流转、自动计算字段、发送通知等，无需编写代码即可扩展 CRUD 行为。

**适用场景**：中小企业的一体化业务管理、需要标准业务流程的行业、希望开箱即用的团队

## 把 CRUD 从代码变成配置

### Directus

官网：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star 数：33.8k

Directus 是一个将现有数据库转化为完整的后端平台和 CRUD 应用的工具。它连接到你已有的 SQL 数据库，自动生成 RESTful 和 GraphQL API，同时提供可视化的管理界面和数据模型配置能力，让你无需编写任何后端代码，就能为任意数据库提供完整的增删改查能力。

![Directus.png](https://static-docs.nocobase.com/Directus-1k9u7k.png)

**核心能力**：

* **自动生成 CRUD API**：连接到数据库后，Directus 自动扫描表结构，为每张表生成标准的增删改查 API（Create、Read、Update、Delete），同时支持 RESTful 和 GraphQL 两种查询方式，前端可以直接调用而无需开发后端。
* **可视化的数据模型管理**：通过界面管理表结构、字段类型、关联关系，所有修改都会同步到数据库，无需手写 SQL 迁移脚本，数据模型的变化直接反映在 API 和管理界面。
* **声明式权限控制**：通过配置界面定义不同角色的 CRUD 权限，可以精确到字段级别（哪些角色能读取/编辑哪些字段）和数据级别（行级权限，基于动态规则过滤数据），权限配置自动应用到 API 和管理界面。
* **即时可用的管理后台**：为每张表自动生成列表和表单界面，支持搜索、筛选、排序、分页，可以直接用于内部管理或作为快速原型，大幅减少后台开发时间。

**适用场景**：已有数据库需要快速构建管理后台、需要统一的 API 和权限层、希望将业务配置从代码中解耦。

### Hasura

官网：[https://hasura.io/](https://hasura.io/)

GitHub：[https://github.com/hasura/graphql-engine](https://github.com/hasura/graphql-engine)

GitHub Star 数：31.9k

**定位**：一个即时的 GraphQL 引擎，连接到现有数据库后，在几秒钟内为你生成高性能的 CRUD GraphQL API。它通过配置化的方式控制权限、验证和业务逻辑，让你无需编写后端代码，就能为任何应用提供完整的数据查询和变更能力。

![Hasura.png](https://static-docs.nocobase.com/Hasura-f48vc6.png)

**核心能力**：

* **秒级生成 GraphQL CRUD API**：连接数据库后，Hasura 自动为每张表生成查询、插入、更新、删除的 GraphQL 操作，所有 CRUD 操作通过统一的 GraphQL 端点完成，无需手写 REST API。
* **强大的查询能力**：支持过滤、分页、排序、聚合、嵌套关联查询，一次请求可以完成多个 CRUD 操作，减少网络往返，前端可以灵活获取所需数据。
* **实时订阅**：基于数据库的变更数据捕获（CDC）功能，可以对任何 CRUD 操作建立实时订阅，当数据发生变化时自动推送给客户端，无需手动实现 WebSocket。
* **远程 Schema 联合**：可以将 Hasura 生成的 CRUD API 与其他 GraphQL 服务联合起来，形成统一的 API 网关，在一个 GraphQL 查询中同时操作多个数据源。
* **事件触发器**：当数据库发生 CRUD 操作时，可以触发 Webhook 调用外部服务，实现数据变更后的通知、同步、清理等业务逻辑。

**适用场景**：需要高性能 GraphQL API 的项目、前端团队希望直接控制数据获取逻辑、微服务架构中的 BFF 层。

### Supabase

官网：[https://supabase.com/](https://supabase.com/)

GitHub：[https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Star 数：95.4k

作为开源的 Firebase 替代方案，Supabase 提供 PostgreSQL 数据库、即时 CRUD API、身份验证、实时订阅、文件存储等完整后端功能。你只需要定义数据库结构，Supabase 会自动生成相应的增删改查能力，让你在几分钟内启动一个完整的全栈应用，无需编写任何后端代码。

![Supabase.png](https://static-docs.nocobase.com/Supabase-93lygj.png)

**核心能力**：

* **自动生成 CRUD API**：创建表后，Supabase 自动生成 RESTful API，支持所有标准的增删改查操作，并提供多语言 SDK（JavaScript、TypeScript、Python 等），几行代码即可完成数据操作
* **行级安全策略（RLS）**：在 PostgreSQL 原生的行级安全策略基础上，通过 SQL 规则定义谁能对哪些数据执行 CRUD 操作，权限逻辑直接在数据库层执行，无法绕过，安全性高
* **实时数据同步**：基于 PostgreSQL 的逻辑复制功能，可以为任何表的 CRUD 操作建立实时订阅，当数据被插入、更新或删除时，自动推送给所有订阅的客户端，无需额外开发
* **内置身份认证**：提供完整的用户认证系统（邮箱、密码、OAuth、手机号等），并且与 RLS 集成，用户只能 CRUD 自己的数据，开箱即用的多租户能力
* **可视化的表管理**：提供在线的表编辑器，可以创建表、定义字段、设置关联关系、插入和修改数据，无需 SQL 也能管理数据库结构

**适用场景**：需要快速启动的 SaaS 产品、希望减少后端搭建时间的初创团队、需要实时功能的应用

## 减少后台和管理界面的重复

### Appsmith

官网：[https://appsmith.com/](https://appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star 数：38.8k

Appsmith可以让开发者能够通过可视化方式快速构建 CRUD 界面。与 Retool 类似，但完全开源且可自托管，你可以将它部署在自己的服务器上，数据无需经过第三方服务，非常适合对数据安全有要求的场景。

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-6js1ku.png)

**核心能力**：

* **可视化构建 CRUD 应用**：提供表格、表单、按钮、图表等组件，拖拽即可搭建完整的数据管理界面，表格支持内联编辑、批量操作，表单支持多步提交、文件上传等复杂场景。
* **连接多种数据源**：支持连接 SQL/NoSQL 数据库、REST API、GraphQL、SaaS 服务等多种数据源，可以在一个应用中整合多个数据来源的 CRUD 操作。
* **JS 代码增强**：每个组件的动作可以编写 JavaScript 代码，比如提交前校验、成功后的跳转、错误处理等，灵活处理各种 CRUD 业务逻辑。
* **响应式布局和主题定制**：支持响应式设计，界面可以适配不同屏幕尺寸，提供主题编辑器，可以自定义品牌色、字体、间距等，让 CRUD 界面符合企业 VI 规范。
* **API 支持**：构建的应用可以暴露为 REST API，将手动操作的 CRUD 界面转化为可调用的服务。

**适用场景**：需要构建定制化后台的团队、希望代码可控的开源优先项目、需要频繁调整内部工具的业务、对数据安全有高要求的行业

### AdminJS

官网：[https://adminjs.co/](https://adminjs.co/)

GitHub：[https://github.com/softwarebrothers/adminjs](https://github.com/softwarebrothers/adminjs)

GitHub Star 数：8.9k

**定位**：一个基于 Node.js 的自动管理后台生成工具，它能够连接到现有的后端应用，根据数据模型自动生成完整的 CRUD 管理界面。你只需要提供数据模型定义（比如 TypeORM 实体、Prisma schema），AdminJS 会自动生成列表页、表单页、筛选器等所有标准功能。

![AdminJS.png](https://static-docs.nocobase.com/AdminJS-csg1n8.png)

**核心能力**：

* **完整 CRUD 功能开箱即用**：自动生成的界面包含列表展示、搜索、筛选、排序、分页、创建表单、编辑表单、删除确认等功能，无需任何前端开发即可使用。
* **灵活的界面定制**：可以通过配置自定义每个模型的显示字段、表单布局、验证规则、操作按钮，也可以编写自定义组件实现特殊的 CRUD 交互。
* **权限控制集成**：支持基于角色的访问控制，可以限制不同用户对哪些模型有 CRUD 权限，也可以在配置中通过函数动态决定权限逻辑。
* **易于集成**：只需几行代码就能将 AdminJS 集成到现有 Express、Hapi、NestJS 应用中，不会改变现有的代码结构，可以作为管理后台的快速方案。

**适用场景**：已有 Node.js 后端的项目、需要快速添加管理界面的场景、希望自动生成而非从零开发

## 更快地把 CRUD 写完

### Rails Generators

官网：[https://rubyonrails.org/](https://rubyonrails.org/)

GitHub：[https://github.com/rails/rails](https://github.com/rails/rails)

GitHub Star 数：58k

**定位**：Ruby on Rails 框架内置的代码生成工具，通过约定优于配置的理念和脚手架机制，能够快速生成完整的 CRUD 代码。你只需要定义数据模型，一条命令就能生成模型类、数据库迁移、控制器、视图、路由、测试等所有必要的代码，大幅减少重复的样板代码编写。

![Rails Generators.png](https://static-docs.nocobase.com/Rails%20Generators-cz4prn.png)

**核心能力**：

* **Scaffold 脚手架**：一条命令（如 `rails generate scaffold Post title:string body:text`）即可生成完整的 CRUD 功能，包括模型、迁移文件、控制器（包含 index、show、new、edit、create、update、destroy 七个标准动作）、视图文件（列表、详情、新建、编辑表单）和路由配置。
* **资源路由**：声明 `resources :posts` 后，自动生成所有标准的 CRUD 路由（GET /posts、GET /posts/:id、POST /posts、PATCH/PUT /posts/:id、DELETE /posts/:id），无需逐个定义
* **Strong Parameters**：通过参数白名单机制自动过滤表单提交的数据，只有允许的字段才会被赋值给模型，防止批量赋值漏洞，同时减少手动参数处理代码。
* **测试框架集成**：生成 CRUD 代码时，同时生成对应的测试文件（单元测试和功能测试），包含基本的 CRUD 操作测试用例，鼓励测试驱动开发。

**适用场景**：使用 Ruby 技术栈的团队、需要快速启动的 CRUD 项目、重视开发体验和代码规范的团队。

### JHipster

官网：[https://www.jhipster.tech/](https://www.jhipster.tech/)

GitHub：[https://github.com/jhipster/generator-jhipster](https://github.com/jhipster/generator-jhipster)

GitHub Star 数：22.3k

**定位**：一个为 Java / Spring Boot 生态打造的应用脚手架，能够快速生成包含实体、CRUD API、前端界面、安全配置等完整功能的企业级应用。它生成符合行业标准、可维护性高的代码，让 Java 开发者从繁琐的配置和样板代码中解放出来，专注于业务逻辑。

![JHipster.png](https://static-docs.nocobase.com/JHipster-3ruve9.png)

**核心能力**：

* **实体驱动的 CRUD 生成**：通过定义实体（Entity）和字段（Field），JHipster 自动生成后端的 JPA 实体类、Repository、Service、REST Controller（包含 CRUD 端点），以及前端的列表页、表单页、详情页。
* **完整的技术栈集成**：后端使用 Spring Boot、Spring Security、Spring Data JPA，前端支持 Angular、React、Vue 三种选择，生成的代码包含数据库连接、事务管理、异常处理、日志记录等所有企业级配置。
* **权限和安全**：集成了 Spring Security，生成的 CRUD 端点默认需要认证，可以通过注解配置角色权限（@PreAuthorize），前端自动处理登录、登出、权限检查。
* **微服务支持**：可以选择生成单体应用或微服务架构，微服务模式下包含服务注册、配置中心、网关等组件，生成的 CRUD 服务可以直接注册到集群。

**适用场景**：Java 企业级应用开发、需要标准化项目结构的团队、希望前后端一体化生成的项目。

### Yeoman

官网：[https://yeoman.io/](https://yeoman.io/)

GitHub：[https://github.com/yeoman/yeoman](https://github.com/yeoman/yeoman)

GitHub Star 数：10.1k

**定位**：一个通用的项目脚手架工具，通过 Generator（生成器）生态系统，为各种技术栈和项目类型提供快速初始化 CRUD 项目的能力。它本身不生成代码，而是提供一个运行 Generator 的框架，开发者可以创建或复用社区 Generator，快速搭建项目基础结构。

![Yeoman.png](https://static-docs.nocobase.com/Yeoman-n8kalu.png)

**核心能力**：

* **交互式项目初始化**：运行 Generator 时，通过问答形式收集项目配置（技术栈、包管理器、构建工具、是否需要认证、数据库类型等），根据选择生成定制化的项目结构。
* **丰富的 Generator 生态**：社区提供了数千个 Generator，涵盖各种 CRUD 应用场景，比如 `generator-node-express-mongo`（生成 Node + Express + MongoDB 的 CRUD 后端）、`generator-gulp-webapp`（生成前端应用）、`generator-jhipster`（JHipster 也基于 Yeoman）。
* **自定义团队 Generator**：可以将团队常用的 CRUD 项目结构、代码规范、依赖版本固化为自定义 Generator，新项目通过一条命令即可生成统一结构的代码，避免不同开发者"各自发挥"。
* **模块化和组合**：Generator 可以继承和组合其他 Generator，比如一个业务系统的 Generator 可以复用基础的 CRUD Generator，再添加业务特定的配置和代码。
* **与构建工具集成**：生成的项目通常包含完整的构建配置（Webpack、Vite、Gradle 等），npm install 后即可运行，无需额外配置。
* **更新和版本管理**：Generator 本身可以独立升级，团队可以使用最新版本的 Generator 生成新项目，而不需要手动复制和修改旧项目。

**适用场景**：需要自定义项目脚手架的团队、多种技术栈共存的组织、希望统一团队项目结构

## 写在最后

减少重复 CRUD，本质上是在不同层面建立复用能力。

从脚手架、代码生成，到配置平台和系统架构，每种方式都有它适合解决的问题，也都有它的边界。

所以在选工具之前，值得认真想清楚三件事：

1. 这个问题，会不会在下一个项目里再次出现？
2. 是现在多花一点时间，还是以后一遍遍重写？
3. 当系统从 10 个表变成 100 个表时，这个工具还能不能撑住？

工具只是起点。能否建立一套不会被需求变化轻易推翻的系统能力，才是长期效率的分水岭。

如果你觉得这篇文章有帮助，欢迎分享给更多的朋友！❤️

声明：本文由 AI 协助撰写，真人添加观点、数据与图片。


相关阅读：

* [GitHub Star 数量前 12 的 AI 工作流项目](https://www.nocobase.com/cn/blog/top-12-ai-workflows-projects-with-the-most-github-stars)
* [最适合外包交付的 6 个开源无代码与低代码](https://www.nocobase.com/cn/blog/6-open-source-no-code-low-code-tools-for-software-agencies)
* [GitHub 上星星数量前 10 的 AI CRM 开源项目 ](https://www.nocobase.com/cn/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars)
* [如何快速搭建一个替换 Excel 的系统？（完整指南）](https://www.nocobase.com/cn/blog/how-to-quickly-build-a-real-system-to-replace-excel)
* [GitHub Star 数量前 5 的开源 AI 内部工具](https://www.nocobase.com/cn/blog/top-5-open-source-ai-internal-tools-on-github)
* [8 个最佳 Google Sheets 替代方案（附成本与能力分析）](https://www.nocobase.com/cn/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [6个适合做 PoC 的开源无代码/低代码工具推荐](https://www.nocobase.com/cn/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [给开发者的无代码/低代码技术决策指南（2026）](https://www.nocobase.com/cn/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
