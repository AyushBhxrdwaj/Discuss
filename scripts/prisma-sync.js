/* Selects the right Prisma command for deployment.
 * If PRISMA_SCHEMA_PATH is set (e.g., prisma/schema.postgres.prisma), runs `prisma db push` against it.
 * Otherwise, falls back to `prisma migrate deploy` (uses prisma/schema.prisma).
 */
const { spawnSync } = require("child_process");

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (res.status !== 0) process.exit(res.status || 1);
}

const schema = process.env.PRISMA_SCHEMA_PATH;
if (schema) {
  console.log(`[prisma-sync] Using schema: ${schema}`);
  // For first-time deploys on Postgres, push schema without migrations
  run("npx", [
    "prisma",
    "db",
    "push",
    "--accept-data-loss",
    "--schema",
    schema,
  ]);
} else {
  console.log("[prisma-sync] Using migrate deploy with default schema");
  run("npx", ["prisma", "migrate", "deploy"]);
}
