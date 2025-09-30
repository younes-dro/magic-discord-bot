import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  if (!params.userId) {
    return new NextResponse("Missing user ID Field", { status: 400 });
  }

  try {
    const server = await prisma.Server.findUnique({
      where: {
        userId: params.userId,
      },
    });

    if (server) {
      console.log("server : ", server);
      return NextResponse.json(server);
    } else {
      return NextResponse.json({ serverId: "" });
    }
  } catch (error) {
    console.error("Error fetching server id:", error);
    return new Response("Failed to fetch user server id", { status: 500 });
  }
};
