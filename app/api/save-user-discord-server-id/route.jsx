import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { userId, serverId } = body;

  if (!userId) {
    return new NextResponse("Missing user ID Field", { status: 400 });
  }

  const exist = await prisma.Server.findUnique({
    where: {
      userId: userId,
    },
  });

  if (exist) {
    // Update the command for that user
    try {
      const updatedUser = await prisma.Server.update({
        where: {
          userId: userId,
        },
        data: {
          serverId: serverId,
        },
      });
      // console.log('Updated User:', updatedUser);
      return NextResponse.json(body);
    } catch (error) {
      console.log("Error update : ", error);
    }
  }

  const user = await prisma.Server.create({
    data: {
      userId,
      serverId,
    },
  });
  // console.log(body)
  return NextResponse.json(body);
}
