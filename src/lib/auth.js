import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("booklovers");

export const auth = betterAuth({
   baseURL: process.env.BETTER_AUTH_URL,
   trustedOrigins: [process.env.BETTER_AUTH_URL],
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});