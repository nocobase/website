Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/en/blog/v1.5.7)

*Release date: 2025-02-14*

#### 🚀 Improvements

- **[Notification: In-app message]** Remove console error logging for SSE connection retries. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

#### 🐛 Bug Fixes

- **[client]**

  - missing drag setting in relation data quick-create operation modal ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh
  - issue with high precision number formatting not applying ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh
  - Fix an issue where clearing a association field in a form doesn't actually clear the field value when submitting the form ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe
  - Block does not refresh after form submission ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe
  - linked field value persisting on submission after relation field reset ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh
  - update action displaying for rows without update permissions in table ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh
- **[Collection field: Sort]** Fix sort field type not registered in external data source ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher
- **[Authentication]** WebSocket authentication issue ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile
- **[Collection field: Attachment(URL)]** Fix deprecated request URL in hook by @mytharcher

### [v1.5.8](https://www.nocobase.com/en/blog/v1.5.8)

*Release date: 2025-02-17*

#### 🐛 Bug Fixes

- **[client]**

  - Can't open field link popup in embed page ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  - In the edit form, the displayed association field value does not change when the associated field updates ([#6210](https://github.com/nocobase/nocobase/pull/6210)) by @Cyx649312038
- **[Mobile]** Mobile menu data is incomplete in permission configuration table ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/en/blog/v1.5.9)

*Release date: 2025-02-17*

#### 🐛 Bug Fixes

- **[client]**

  - horizontal scrollbar issue on the page ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  - When closing the sub-page, multiple block data requests are triggered ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  - Missing unique key for association fields submenu in UI ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
- **[Data visualization]** Filterting error occurs when the data source name contains a hyphen `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile

### [v1.5.10](https://www.nocobase.com/en/blog/v1.5.10)

*Release date: 2025-02-18*

#### 🚀 Improvements

- **[Collection field: Markdown(Vditor)]** Vditor CDN use local resources ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos

#### 🐛 Bug Fixes

- **[Workflow: Loop node]** Fix loop exit earlier when node inside pending ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/en/blog/v1.6.0-beta.7)

*Release date: 2025-02-14*

#### 🐛 Bug Fixes

- **[Authentication]** Enhance token concurrent update and auth error handling logic. ([#6208](https://github.com/nocobase/nocobase/pull/6208)) by @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/en/blog/v1.6.0-beta.8)

*Release date: 2025-02-15*

#### 🐛 Bug Fixes

- **[WeCom]** Auto login issue in WeCom client by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/en/blog/v1.6.0-alpha.26)

*Release date: 2025-02-16*

#### 🎉 New Features

- **[client]** Support extending frontend filter operators ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[Workflow: Custom action event]** Support global or batch records triggering custom action event by @mytharcher

#### 🚀 Improvements

- **[Workflow]** Move bind workflow settings to plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/en/blog/v1.6.0-alpha.27)

*Release date: 2025-02-16*

#### 🎉 New Features

- **[client]** support the extension of preset fields in collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
- **[Calendar]** Support for the extension of optional fields for Kanban, Calendar, and Formula Field plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
