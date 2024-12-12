import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const client = postgres("postgresql://root:password@db:5432/database");

export const db = drizzle(client, {
  schema,
});
