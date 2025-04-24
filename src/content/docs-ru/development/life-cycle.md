# Жизненный цикл

## Жизненный цикл серверного приложения

<img alt="Жизненный цикл серверного приложения" src="./server/image-1.png" style="width: 700px;" />

Запускается через `app.on()`, подробное использование см. в разделе [Сервер - События](/development/server/events).

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {
    this.app.on('beforeInstall', async () => {
      // код...
    });
  }
}
```

## Жизненный цикл серверного плагина

<img alt="Жизненный цикл серверного плагина" src="./server/image.png" style="width: 450px;" />

Записывается в классе плагина, подробное использование см. в разделе [Сервер - Обзор](/development/server).

```ts
class PluginSampleHelloServer extends Plugin {
  async beforeLoad() {}
}
```

## Жизненный цикл клиентского плагина

<img alt="Жизненный цикл клиентского плагина" src="./client/image.png" style="width: 550px;" />

Записывается в классе плагина, подробное использование см. в разделе [Клиент - Обзор](/development/client).