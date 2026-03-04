const { MongoClient, ServerApiVersion } = require("mongodb");

// 1. Ensure your .env.local has MONGOURI (no quotes)
const uri = process.env.MONGOURI;
const dbName = process.env.DB_NAME;

// 2. Safety Check: This prevents the 'startsWith' crash and tells you exactly what's wrong
if (!uri) {
  throw new Error(
    "MONGOURI is not defined in .env.local. Check your variable names!",
  );
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// 3. Simple Connection Function
export const collections = (collectionName) => {
  if (!dbName)
    throw new Error("DB_NAME is not defined in environment variables.");
  return client.db(dbName).collection(collectionName);
};

// Next.js doesn't strictly need the run() function at the top level in this way,
// but it doesn't hurt. Usually, we connect on demand.
