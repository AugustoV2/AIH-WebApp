import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

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

    // Find participant by mailId
    const participant = await prisma.participants.findUnique({
      where: { mailId: email },
    });

    // Handle case where participant is not found
    if (!participant) {
      return NextResponse.json(
        { message: "Participant not found" },
        { status: 404 }
      );
    }

    // Respond with the participant details
    return NextResponse.json({ participant }, { status: 200 });
  } catch (error) {
    console.error("Error fetching participant details:", error);
    return NextResponse.json(
      { error: "Error fetching participant details" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
