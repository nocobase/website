import { Plugin, useSchemaInitializer } from '@nocobase/client';
import { createApp } from './app';

class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    const customItem = {
      name: 'custom',
      type: 'item',
      useComponentProps() {
        const { insert } = useSchemaInitializer();
        return {
          title: 'Custom',
          onClick: () => {
            insert({
              type: 'void',
              'x-decorator': 'CardItem',
              'x-component': 'h1',
              'x-content': 'Custom block',
            });
          },
        };
      },
    };

    this.schemaInitializerManager.addItem(
      'myInitializer', // Пример существующего schema initializer:
      'otherBlocks.custom', // Добавить custom в группу otherBlocks
      customItem,
    );
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoAddSchemaInitializerItem] });

export default app.getRootComponent();
