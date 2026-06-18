import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// This app runs as a long-running Node server, so prefer the Supabase session
// pooler / direct connection (DIRECT_URL, port 5432) over the transaction
// pooler (DATABASE_URL, port 6543). The transaction pooler is built for
// short-lived serverless connections and intermittently kills a persistent
// pool — surfacing as "write CONNECTION_CLOSED" / "Invalid startup message:
// :missing_user", which makes Corsair's gmail.db.* reads fail.
const connectionString = env.DIRECT_URL ?? env.DATABASE_URL;

export const conn =
  globalForDb.conn ??
  postgres(connectionString, {
    // Harmless on session mode; required if DATABASE_URL (PgBouncer) is used.
    prepare: false,
    max: 10,
    idle_timeout: 20,
    connect_timeout: 15,
  });
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
