---
title: "NocoBase 0.17: SchemaInitializer và SchemaSettings mới"
description: "NocoBase 0.17 tái cấu trúc trình thiết kế UI Schema với SchemaInitializer và SchemaSettings mới, tổ chức lại tài liệu và giới thiệu một số cải tiến để phát triển frontend tốt hơn."
---

## Tính năng mới

Để giảm chi phí học tập phát triển và mang lại trải nghiệm phát triển frontend tốt hơn, chúng tôi đã tiến hành tái cấu trúc core frontend trong vài tháng qua, bao gồm:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

Lần này, v0.17 đã tái cấu trúc SchemaInitializer và SchemaSettings liên quan đến UI Schema designer.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Để giải quyết khó khăn cho người dùng khi bắt đầu, chúng tôi cũng đã sắp xếp lại các phần khác nhau của tài liệu:

* [Phát triển Plugin](https://docs.nocobase.com/development) (đã sửa đổi hoàn toàn và xuất bản)
* [API Reference / Client](https://client.docs.nocobase.com/core/application/application) (phần mới, đã xuất bản)
* Hướng dẫn sử dụng (đã sửa đổi hoàn toàn, sẽ phát hành trong một đến hai tuần tới)
* Danh sách Plugin (phần mới, bao gồm giới thiệu, cách sử dụng và hướng dẫn phát triển mở rộng cho tất cả các plugin hiện có, sẽ phát hành trong một đến hai tuần tới)

## Các thay đổi không tương thích

### Thay đổi đối với SchemaInitializer

* Thêm `SchemaInitializerManager` để đăng ký `SchemaInitializer`
* Thêm `useSchemaInitializerRender()` để thay thế `useSchemaInitializer()` `render()` gốc
* Thêm `useSchemaInitializerItem()` để lấy ngữ cảnh của mục khởi tạo hiện tại
* Thêm component `SchemaInitializerItemGroup` làm component mặc định cho `type: 'itemGroup'`
* Thêm component `SchemaInitializerSubMenu` làm component mặc định cho `type: 'subMenu'`
* Thêm component `SchemaInitializerDivider` làm component mặc định cho `type: 'divider'`
* Thêm component `SchemaInitializerChildren` để tùy chỉnh hiển thị nhiều mục danh sách
* Thêm component `SchemaInitializerChild` để tùy chỉnh hiển thị một mục danh sách
* Thay đổi trách nhiệm của `SchemaInitializerContext` để lưu trữ ngữ cảnh của initializer hiện tại
* Thay đổi trách nhiệm của `useSchemaInitializer()` để lấy ngữ cảnh của initializer hiện tại
* Thay đổi `function SchemaInitializer` thành `class SchemaInitializer` để định nghĩa initializer
* Thay đổi tham số của `SchemaInitializer`
  * Thêm tham số bắt buộc `name` cho giá trị của `x-initializer`
  * Thêm tham số `Component` để tùy chỉnh hiển thị nút. Mặc định là `SchemaInitializerButton`.
  * Thêm `componentProps`, `style` để cấu hình thuộc tính và kiểu của `Component`
  * Thêm tham số `ItemsComponent` để tùy chỉnh hiển thị danh sách. Mặc định là `SchemaInitializerItems`.
  * Thêm `itemsComponentProps`, `itemsComponentStyle` để cấu hình thuộc tính và kiểu của `ItemsComponent`
  * Thêm tham số `popover` để cấu hình có hiển thị hiệu ứng `popover` hay không
  * Thêm tham số `useInsert` khi hàm `insert` cần sử dụng hooks
  * Thay đổi tham số `dropdown` thành `popoverProps`, sử dụng `Popover` thay vì `Dropdown`
* Thay đổi tham số của `items` cho `SchemaInitializer`
  * Thêm hàm `useChildren` để điều khiển động các mục con
  * Thêm hàm `componentProps` cho thuộc tính của component
  * Thêm hàm `useComponentProps` để xử lý động props của component
  * Thay đổi tham số `key` thành `name` để định danh duy nhất các mục danh sách
  * Thay đổi tham số `visible` thành hàm `useVisible` để điều khiển động việc hiển thị
  * Thay đổi tham số `component` thành `Component` để hiển thị các mục danh sách
* Thay đổi `SchemaInitializer.Button` thành `SchemaInitializerButton`, giá trị mặc định cho tham số Component của SchemaInitializer
* Thay đổi `SchemaInitializer.Item` thành `SchemaInitializerItem`, tham số không thay đổi
* Thay đổi `SchemaInitializer.ActionModal` thành `SchemaInitializerActionModal`, tham số không thay đổi
* Thay đổi `SchemaInitializer.SwitchItem` thành `SchemaInitializer.Switch`, tham số không thay đổi
* Xóa `SchemaInitializerProvider`, thay thế bằng `SchemaInitializerManager`
* Xóa `SchemaInitializer.itemWrap`, không cần bọc component `item` nữa

### Thay đổi đối với SchemaSettings

* Thêm `SchemaSettingsManager` để đăng ký `SchemaSettings`
* Thêm `useSchemaSettingsItem()`
* Thêm `useSchemaSettingsRender()`
* Thêm tham số `x-settings` để cấu hình schema settings
* Thêm tham số `x-toolbar` để cấu hình schema toolbar
* Thêm component `SchemaToolbar` để tùy chỉnh schema toolbar
* Thêm `useSchemaToolbarRender()` để thay thế `useDesigner()` gốc
* Thay đổi `function SchemaSettings` thành `class SchemaSettings` để định nghĩa settings
* Thay đổi `SchemaSettings` gốc thành `SchemaSettingsDropdown`
* Thay đổi `SchemaSettings.Item` thành `SchemaSettingsItem`
* Thay đổi `SchemaSettings.ItemGroup` thành `SchemaSettingsItemGroup`
* Thay đổi `SchemaSettings.SubMenu` thành `SchemaSettingsSubMenu`
* Thay đổi `SchemaSettings.Divider` thành `SchemaSettingsDivider`
* Thay đổi `SchemaSettings.Remove` thành `SchemaSettingsRemove`
* Thay đổi `SchemaSettings.SelectItem` thành `SchemaSettingsSelectItem`
* Thay đổi `SchemaSettings.CascaderItem` thành `SchemaSettingsCascaderItem`
* Thay đổi `SchemaSettings.SwitchItem` thành `SchemaSettingsSwitchItem`
* Thay đổi `SchemaSettings.ModalItem` thành `SchemaSettingsModalItem`
* Thay đổi `SchemaSettings.ActionModalItem` thành `SchemaSettingsActionModalItem`
* Xóa tham số `x-designer`, không còn được khuyến khích, sẽ bị xóa trong tương lai, sử dụng `x-toolbar` thay thế
* Xóa `useDesigner()`, không còn được khuyến khích, sẽ bị xóa trong tương lai, sử dụng `useSchemaToolbarRender()` thay thế

Để biết thêm chi tiết, xem [Các thay đổi không tương thích trong NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
