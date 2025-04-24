**Типизация**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**Детали**

- `filter`: Указывает условие фильтрации для записей, которые нужно удалить. Подробнее о использовании `filter` можно узнать в методе [`find()`](#find).  
- `filterByTk`: Указывает условие фильтрации по TargetKey для записей, которые нужно удалить.  
- `truncate`: Определяет, следует ли очистить данные таблицы. Этот параметр действителен, только если не переданы параметры `filter` или `filterByTk`.  
- `transaction`: Объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.
