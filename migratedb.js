// run tis file so that to migrate the data from Praticipates collection to User collection
// run:-  node migratedb.js

const { PrismaClient } = require("@prisma/client");
const { MongoClient } = require("mongodb");

const prisma = new PrismaClient();

const MONGO_URI =
  "mongodb+srv://avinjoshy21:99BHmY4k5pzTPFf4@cluster0.792ku.mongodb.net/SIH24AJCE?retryWrites=true&w=majority"; // Ensure database name is added

async function migrateParticipants() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();

    const db = client.db("SIH24AJCE");
    const participantsCollection = db.collection("participants");

    const participants = await participantsCollection.find({}).toArray();

    for (const participant of participants) {
      const { mailId, name } = participant;

      console.log(participant);

      if (!mailId || !name) {
        console.log(
          `Skipping participant with ID ${participant._id}: Missing mailId or name.`,
        );
        continue;
      }

      const password = mailId.split("@")[0];

      await prisma.user.create({
        data: {
          email: mailId,
          name,
          password,
        },
      });

      console.log(`User created: ${name} (${mailId})`);
    }

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Error migrating participants:", error);
  } finally {
    await client.close();
    await prisma.$disconnect();
  }
}

migrateParticipants();
