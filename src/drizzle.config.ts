import { defineConfig } from "drizzle-kit"
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    ssl: false,
    host: 'db',
    user: 'root',
    password: 'password',
    port: 5432,
    database: 'database',
  },
});