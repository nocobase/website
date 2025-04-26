import { useFieldSchema } from '@formily/react';
import {
  Plugin,
  SchemaComponent,
  useSchemaSettingsRender
} from '@nocobase/client';
import { Space } from 'antd';
import React from 'react';
import { createApp } from './app';

// Пользовательский компонент Hello.
const Hello = (props) => {
  return (
    <Space>
      {props.children}
      <HelloSettings />
    </Space>
  );
};

// Для поддержки рендеринга `x-settings` используется `useSchemaSettingsRender`.
const HelloSettings = () => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaSettingsRender(fieldSchema['x-settings']);
  return render();
};

const HomePage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-decorator': 'Hello',
        'x-decorator-props': {
          title: '卡片',
          bordered: true,
        },
        'x-settings': 'mySettings',
        'x-component': 'h1',
        'x-content': 'Hello, World!',
      }}
    />
  );
};

class PluginDemoUseSchemaInitializerRender extends Plugin {
  async load() {
    // 注册全局组件
    this.app.addComponents({ Hello, HomePage });
  }
}

// 快捷模拟一个 App
const app = createApp({ plugins: [PluginDemoUseSchemaInitializerRender] });

export default app.getRootComponent();
