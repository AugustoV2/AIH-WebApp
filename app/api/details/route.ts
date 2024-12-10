import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not defined");
}
const client = new MongoClient(databaseUrl); // MongoDB connection URL

export async function GET(request: NextRequest) {
  try {
    // Extract email from query parameters
    const email = request.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await client.connect();
    const database = client.db(); // Default database
    const participantsCollection = database.collection("participants");

    // Find participant by mailId
    const participant = await participantsCollection.findOne({
      mailId: email,
    });

    // Handle case where participant is not found
    if (!participant) {
      return NextResponse.json(
        { message: "Participant not found" },
        { status: 404 }
      );
    }

    // Respond with the participant details
    return NextResponse.json({ participant: participant }, { status: 200 });
  } catch (error) {
    /* eslint-disable no-console */
    console.error("Error fetching participant details:", error);

    return NextResponse.json(
      { error: "Error fetching participant details" },
      { status: 500 }
    );
  } finally {
    await client.close(); // Close the connection to the database
  }
}
