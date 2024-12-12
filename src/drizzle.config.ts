import { defineConfig } from "drizzle-kit"
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: 'db',
    user: 'root',
    password: 'password',
    port: 5432,
    database: 'database',
  },
});