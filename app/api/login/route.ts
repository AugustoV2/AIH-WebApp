import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    if (request.method === "POST") {
      const formData = await request.json();

      if (!formData.email || !formData.password) {
        return NextResponse.json(
          { error: "Email and password are required" },
          { status: 400 }
        );
      }

      try {
        const user = await db.user.findUnique({
          where: { email: formData.email },
        });

        if (!user) {
          return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        if (user.password !== formData.password) {
          return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        return NextResponse.json(user, { status: 200 });
      } catch (dbError) {
        console.error("Error fetching user from the database:", dbError);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    }
  } catch (error) {
    console.error("Error processing the login request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get("email") || "";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      const user = await db.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }

      return NextResponse.json(user, { status: 200 });
    } catch (dbError) {
      console.error("Error fetching user from the database:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
