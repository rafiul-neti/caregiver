const uri = process.env.MONGOURI;
const dbName = process.env.DB_NAME;

const { MongoClient, ServerApiVersion } = require("mongodb");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
  } finally {
  }
}

run().catch(console.error);

export const collections = (collectionName) => {
  const collection = client.db(dbName).collection(collectionName);
  return collection;
};
