/**
 * defaultShowCode: true
 */
import { ISchema } from '@formily/react';
import { Plugin, SchemaSettingsModalItem, useSchemaSettings } from '@nocobase/client';
import React from 'react';
import { createApp } from './app';

export const SchemaSettingsBlockTitleItem: any = () => {
  // 设计器的 Designable 实例
  const { dn } = useSchemaSettings();

  return (
    <SchemaSettingsModalItem
      title={'Edit block title'}
      schema={
        {
          type: 'object',
          title: 'Edit block title',
          properties: {
            title: {
              title: 'Block title',
              type: 'string',
              // Получить значение по умолчанию для схемы (schema).
              default: dn.getSchemaAttribute('x-decorator-props.title'),
              'x-decorator': 'FormItem',
              'x-component': 'Input',
              'x-compile-omitted': ['default'],
            },
          },
        } as ISchema
      }
      onSubmit={({ title }) => {
        // Переопределение параметров
        dn.deepMerge({
          'x-decorator-props': {
            title,
          },
        });
      }}
    />
  );
};

class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    this.schemaSettingsManager.addItem('mySettings', 'blockTitle', {
      Component: SchemaSettingsBlockTitleItem,
    });
  }
}

// Экземпляр Designable для дизайнера.
const app = createApp({ plugins: [PluginDemoAddSchemaInitializerItem] });

export default app.getRootComponent();
