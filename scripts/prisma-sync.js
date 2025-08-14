/* Selects the right Prisma command for deployment.
 * If PRISMA_SCHEMA_PATH is set (e.g., prisma/schema.postgres.prisma), runs `prisma db push` against it.
 * Otherwise, falls back to `prisma migrate deploy` (uses prisma/schema.prisma).
 */
const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (res.status !== 0) process.exit(res.status || 1);
}

const schemaEnv = (process.env.PRISMA_SCHEMA_PATH || "").trim();
if (schemaEnv) {
  const abs = path.isAbsolute(schemaEnv)
    ? schemaEnv
    : path.resolve(process.cwd(), schemaEnv);
  console.log(`[prisma-sync] Using schema: ${schemaEnv} -> ${abs}`);
  if (!fs.existsSync(abs)) {
    console.warn(`[prisma-sync] Schema not found at ${abs}. Falling back to migrate deploy.`);
    run("npx", ["prisma", "migrate", "deploy"]);
  } else {
    // For first-time deploys on Postgres, push schema without migrations.
    run("npx", ["prisma", "db", "push", "--accept-data-loss", `--schema=${abs}`]);
  }
} else {
  console.log("[prisma-sync] Using migrate deploy with default schema");
  run("npx", ["prisma", "migrate", "deploy"]);
}
