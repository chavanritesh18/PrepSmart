/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:4cpO1JXCatwB@ep-late-math-a5vedj5c.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
  };
  