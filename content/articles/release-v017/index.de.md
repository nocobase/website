---
title: "NocoBase 0.17: Neue SchemaInitializer und SchemaSettings"
description: "NocoBase 0.17 überarbeitet den UI-Schema-Designer mit neuen SchemaInitializer und SchemaSettings, reorganisiert die Dokumentation und führt mehrere Verbesserungen für eine bessere Frontend-Entwicklung ein."
---

## Neue Funktionen

Um die Lernkosten für die Entwicklung zu senken und eine bessere Frontend-Entwicklungserfahrung zu bieten, haben wir in den letzten Monaten eine schrittweise Neustrukturierung des Frontend-Kerns durchgeführt, darunter:

![nocobase-client](https://static-docs.nocobase.com/fab1903e1852480f8edce8213ac54a49.webp)

Dieses Mal hat v0.17 die UI-Schema-Designer-bezogenen SchemaInitializer und SchemaSettings überarbeitet.

![SchemaInitializer](https://static-docs.nocobase.com/ddeb33e3170cef3107a48edec4b07b55.webp)

![SchemaSettings](https://static-docs.nocobase.com/4afac0186699e0e49951ba84522c5754.webp)

Um die Einstiegshürde für Benutzer zu senken, haben wir auch verschiedene Abschnitte der Dokumentation neu organisiert:

* [Plugin-Entwicklung](https://docs.nocobase.com/development) (vollständig überarbeitet und veröffentlicht)
* [API-Referenz / Client](https://client.docs.nocobase.com/core/application/application) (neuer Abschnitt, bereits veröffentlicht)
* Benutzerhandbuch (vollständig überarbeitet, wird in ein bis zwei Wochen veröffentlicht)
* Plugin-Liste (neuer Abschnitt, einschließlich Einführungen, Nutzung und Erweiterungsentwicklungsanleitungen für alle vorhandenen Plugins, wird in ein bis zwei Wochen veröffentlicht)

## Inkompatible Änderungen

### Änderungen an SchemaInitializer

* `SchemaInitializerManager` hinzugefügt zum Registrieren von `SchemaInitializer`
* `useSchemaInitializerRender()` hinzugefügt, um das ursprüngliche `useSchemaInitializer()` `render()` zu ersetzen
* `useSchemaInitializerItem()` hinzugefügt zum Abrufen des Kontexts des aktuellen Initialisierungselements
* `SchemaInitializerItemGroup`-Komponente hinzugefügt als Standardkomponente für `type: 'itemGroup'`
* `SchemaInitializerSubMenu`-Komponente hinzugefügt als Standardkomponente für `type: 'subMenu'`
* `SchemaInitializerDivider`-Komponente hinzugefügt als Standardkomponente für `type: 'divider'`
* `SchemaInitializerChildren`-Komponente hinzugefügt für benutzerdefiniertes Rendern mehrerer Listenelemente
* `SchemaInitializerChild`-Komponente hinzugefügt für benutzerdefiniertes Rendern eines einzelnen Listenelements
* Verantwortlichkeiten von `SchemaInitializerContext` geändert zum Speichern des Kontexts des aktuellen Initialisierers
* Verantwortlichkeiten von `useSchemaInitializer()` geändert zum Abrufen des Kontexts des aktuellen Initialisierers
* `function SchemaInitializer` geändert zu `class SchemaInitializer` zum Definieren des Initialisierers
* Parameter von `SchemaInitializer` geändert
  * `name` als erforderlichen Parameter für den Wert von `x-initializer` hinzugefügt
  * `Component`-Parameter hinzugefügt für benutzerdefiniertes Rendern des Buttons. Standard ist `SchemaInitializerButton`.
  * `componentProps`, `style` hinzugefügt zum Konfigurieren der Eigenschaften und des Stils von `Component`
  * `ItemsComponent`-Parameter hinzugefügt für benutzerdefiniertes Rendern der Liste. Standard ist `SchemaInitializerItems`.
  * `itemsComponentProps`, `itemsComponentStyle` hinzugefügt zum Konfigurieren der Eigenschaften und des Stils von `ItemsComponent`
  * `popover`-Parameter hinzugefügt zum Konfigurieren, ob der `popover`-Effekt angezeigt werden soll
  * `useInsert`-Parameter hinzugefügt für den Fall, dass die `insert`-Funktion Hooks benötigt
  * `dropdown`-Parameter geändert zu `popoverProps`, Verwendung von `Popover` anstelle von `Dropdown`
* Parameter von `items` für `SchemaInitializer` geändert
  * `useChildren`-Funktion hinzugefügt zur dynamischen Steuerung von Unterelementen
  * `componentProps`-Funktion hinzugefügt für die Eigenschaften der Komponente selbst
  * `useComponentProps`-Funktion hinzugefügt zur dynamischen Verarbeitung der Props der Komponente
  * `key`-Parameter geändert zu `name` für die eindeutige Identifikation von Listenelementen
  * `visible`-Parameter geändert zu `useVisible`-Funktion zur dynamischen Steuerung der Anzeige
  * `component`-Parameter geändert zu `Component` zum Rendern von Listenelementen
* `SchemaInitializer.Button` geändert zu `SchemaInitializerButton`, dem Standardwert für den Component-Parameter von SchemaInitializer
* `SchemaInitializer.Item` geändert zu `SchemaInitializerItem`, mit unveränderten Parametern
* `SchemaInitializer.ActionModal` geändert zu `SchemaInitializerActionModal`, mit unveränderten Parametern
* `SchemaInitializer.SwitchItem` geändert zu `SchemaInitializer.Switch`, mit unveränderten Parametern
* `SchemaInitializerProvider` gelöscht, ersetzt durch `SchemaInitializerManager`
* `SchemaInitializer.itemWrap` gelöscht, die `item`-Komponente muss nicht mehr umschlossen werden

### Änderungen an SchemaSettings

* `SchemaSettingsManager` hinzugefügt zum Registrieren von `SchemaSettings`
* `useSchemaSettingsItem()` hinzugefügt
* `useSchemaSettingsRender()` hinzugefügt
* `x-settings`-Parameter hinzugefügt zum Konfigurieren von Schema-Einstellungen
* `x-toolbar`-Parameter hinzugefügt zum Konfigurieren der Schema-Symbolleiste
* `SchemaToolbar`-Komponente hinzugefügt zum Anpassen der Schema-Symbolleiste
* `useSchemaToolbarRender()` hinzugefügt, um das ursprüngliche `useDesigner()` zu ersetzen
* `function SchemaSettings` geändert zu `class SchemaSettings` zum Definieren von Einstellungen
* Das ursprüngliche `SchemaSettings` geändert zu `SchemaSettingsDropdown`
* `SchemaSettings.Item` geändert zu `SchemaSettingsItem`
* `SchemaSettings.ItemGroup` geändert zu `SchemaSettingsItemGroup`
* `SchemaSettings.SubMenu` geändert zu `SchemaSettingsSubMenu`
* `SchemaSettings.Divider` geändert zu `SchemaSettingsDivider`
* `SchemaSettings.Remove` geändert zu `SchemaSettingsRemove`
* `SchemaSettings.SelectItem` geändert zu `SchemaSettingsSelectItem`
* `SchemaSettings.CascaderItem` geändert zu `SchemaSettingsCascaderItem`
* `SchemaSettings.SwitchItem` geändert zu `SchemaSettingsSwitchItem`
* `SchemaSettings.ModalItem` geändert zu `SchemaSettingsModalItem`
* `SchemaSettings.ActionModalItem` geändert zu `SchemaSettingsActionModalItem`
* `x-designer`-Parameter gelöscht, veraltet, wird in Zukunft entfernt, stattdessen `x-toolbar` verwenden
* `useDesigner()` gelöscht, veraltet, wird in Zukunft entfernt, stattdessen `useSchemaToolbarRender()` verwenden

Weitere Details finden Sie unter [Inkompatible Änderungen in NocoBase 0.17](https://docs.nocobase.com/welcome/release/upgrade-to/v017)
