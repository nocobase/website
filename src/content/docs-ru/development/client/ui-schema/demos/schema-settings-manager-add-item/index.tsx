import { Plugin } from '@nocobase/client';
import { createApp } from './app';

class PluginDemoAddSchemaSettingsItem extends Plugin {
  async load() {
    const customItem = {
      name: 'custom',
      type: 'item',
      useComponentProps() {
        return {
          title: 'Custom',
          onClick: () => {},
        };
      },
    };

    this.schemaSettingsManager.addItem(
      'mySettings', // Пример существующего имени настроек схемы (schema settings name).
      'customItem', // Имя добавленного элемента (item name).
      customItem,
    );
  }
}

// Быстрое создание модели приложения (Quickly simulate an App).
const app = createApp({ 
  plugins: [PluginDemoAddSchemaSettingsItem],
});

export default app.getRootComponent();
