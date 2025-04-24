import {
  CardItem,
  Plugin,
  SchemaComponent,
  SchemaSettings,
} from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-decorator': 'CardItem',
        'x-decorator-props': {
          title: 'Карточка',
          bordered: true,
        },
        'x-settings': 'mySettings',
        'x-component': 'h1',
        'x-content': 'Hello, World!',
      }}
    />
  );
};

class PluginDemoAddSchemaSettings extends Plugin {
  async load() {
    // Регистрация глобальных компонентов.
    this.app.addComponents({ CardItem, HomePage });
    const mySettings = new SchemaSettings({
      name: 'mySettings',
      items: [
        {
          type: 'item',
          name: 'edit',
          useComponentProps() {
            // TODO: Добавить логику связанных настроек.
            return {
              title: 'Edit',
              onClick() {
                // todo
              },
            };
          },
        },
      ],
    });
    this.schemaSettingsManager.add(mySettings);
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoAddSchemaSettings] });

export default app.getRootComponent();
