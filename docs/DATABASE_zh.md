# 数据库文档

本文档旨在帮助您理解和管理本项目的数据库。

## 1. 概述

我们的数据库采用 **PostgreSQL** 作为数据库引擎，并使用 **Drizzle ORM** 作为类型安全的对象关系映射器（ORM）。这一组合提供了强大的性能和从数据库到应用代码的端到端类型安全。

- **数据库引擎**: PostgreSQL
- **ORM**: Drizzle ORM
- **Schema 定义文件**: `src/server/db/schema.ts`
- **配置**: 数据库连接字符串在 `.env` 文件中的 `DATABASE_URL` 变量中进行管理。

## 2. Schema 定义

所有的数据表、列和它们之间的关系都在 `src/server/db/schema.ts` 这一个文件中定义，它是唯一的真实来源。Drizzle ORM 使用这个文件来生成和执行 SQL 查询。

### 如何修改 Schema

如需修改 schema（例如，为一个表添加新字段），您应该直接编辑 `schema.ts` 文件。

**示例：为 `user` 表添加一个 `bio` 字段**

```typescript
// src/server/db/schema.ts

export const user = createTable("user", {
 id: text("id").primaryKey(),
 name: text("name").notNull(),
 email: text("email").notNull().unique(),
 // ... 其他字段
 bio: text("bio"), // <-- 在这里添加新字段
 createdAt: timestamp("created_at")
  .$defaultFn(() => new Date())
  .notNull(),
 // ...
});
```

## 3. 应用 Schema 变更

在修改 `schema.ts` 文件后，您需要将这些变更同步到数据库。**绝对不要手动修改数据库**，请使用项目提供的 `pnpm` 脚本。

应用变更主要有两种工作流：

### 开发环境: `db:push`

此命令会将您的 schema 变更直接"推送"到数据库，修改数据表以匹配您 `schema.ts` 文件的最新定义。它速度快，是开发阶段的理想选择。

```bash
pnpm db:push
```

> **警告**: 此方法不会创建迁移文件，并且是破坏性的。**不推荐在生产环境中使用**，因为它可能导致数据丢失。

### 生产环境: `db:generate` + `db:migrate`

这是生产环境和团队协作时的推荐工作流。它会创建带有版本控制的 SQL 迁移文件，这些文件可以被审查和安全地执行。

#### 第一步: 生成迁移文件

此命令会将 `schema.ts` 与数据库的当前状态进行比较，并在 `src/server/db/migrations` 目录下生成一个新的 SQL 迁移文件。

```bash
pnpm db:generate
```

#### 第二步: 应用迁移

当迁移文件生成并审查通过后，您可以将其应用到数据库。Drizzle 会执行所有待处理的迁移文件。

```bash
pnpm db:migrate
```

## 4. 使用 Drizzle Studio 查看数据

Drizzle Kit 包含一个名为 **Drizzle Studio** 的Web图形界面，您可以用它来浏览、查询和编辑数据，而无需编写 SQL。这是一个强大的开发和调试工具。

要启动 Drizzle Studio，请运行：

```bash
pnpm db:studio
```

这将在您的浏览器中打开一个新标签页，其中包含一个完整的数据库操作界面。
