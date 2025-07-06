# Database Documentation

This document provides a guide to understanding and managing the database for this project.

## 1. Overview

Our database setup uses **PostgreSQL** as the database engine and **Drizzle ORM** as the type-safe Object-Relational Mapper. This combination provides robust performance and end-to-end type safety from the database to your application code.

- **Database Engine**: PostgreSQL
- **ORM**: Drizzle ORM
- **Schema Location**: `src/server/db/schema.ts`
- **Configuration**: The database connection string is managed in the `.env` file under the `DATABASE_URL` variable.

## 2. Schema Definition

All database tables, columns, and relations are defined in a single source of truth: `src/server/db/schema.ts`. Drizzle uses this file to generate and execute SQL queries.

### How to Modify the Schema

To modify the schema (e.g., add a new field to a table), you should directly edit the `schema.ts` file.

**Example: Adding a `bio` field to the `user` table**

```typescript
// src/server/db/schema.ts

export const user = createTable("user", {
 id: text("id").primaryKey(),
 name: text("name").notNull(),
 email: text("email").notNull().unique(),
 // ... other fields
 bio: text("bio"), // <-- Add the new field here
 createdAt: timestamp("created_at")
  .$defaultFn(() => new Date())
  .notNull(),
 // ...
});
```

## 3. Applying Schema Changes

After modifying the `schema.ts` file, you need to sync these changes with your database. **Never alter the database manually**. Use the provided `pnpm` scripts.

There are two primary workflows for applying changes:

### For Development: `db:push`

This command directly "pushes" your schema changes to the database, altering tables to match your `schema.ts` file. It's fast and ideal for the development phase.

```bash
pnpm db:push
```

> **Warning**: This method does not create migration files and is destructive. It is **not recommended for production environments** as it can lead to data loss.

### For Production: `db:generate` + `db:migrate`

This is the recommended workflow for production and collaborative environments. It creates version-controlled SQL migration files that can be reviewed and executed safely.

#### Step 1: Generate a migration file

This command compares your `schema.ts` with the current state of the database and generates a new SQL migration file in the `src/server/db/migrations` directory.

```bash
pnpm db:generate
```

#### Step 2: Apply migrations

Once the migration file is generated and reviewed, you can apply it to the database. Drizzle will execute any pending migration files.

```bash
pnpm db:migrate
```

## 4. Viewing Your Data with Drizzle Studio

Drizzle Kit includes a web-based GUI called **Drizzle Studio**, which you can use to browse, query, and edit your data without writing SQL. It's a powerful tool for debugging and development.

To launch Drizzle Studio, run:

```bash
pnpm db:studio
```

This will open a new tab in your browser with a complete interface for your database.
