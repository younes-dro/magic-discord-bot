import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { userId, getPrefix, getAllMemberships, getHelp } = body;

  if (!userId) {
    return new NextResponse("Missing user ID Field", { status: 400 });
  }
  const prefixCommand = getPrefix;
  const customCommand = {
    getAllMemberhips: getAllMemberships,
    getHelp: getHelp,
  };

  const exist = await prisma.Commands.findUnique({
    where: {
      userId: userId,
    },
  });

  if (exist) {
    // Update the command for that user
    try {
      const updatedUser = await prisma.Commands.update({
        where: {
          userId: userId,
        },
        data: {
          prefixCommand: prefixCommand,
          customCommand: customCommand,
        },
      });
      // console.log('Updated User:', updatedUser);
      return NextResponse.json(body);
    } catch (error) {
      console.log("Error update : ", error);
    }
  }

  const user = await prisma.Commands.create({
    data: {
      userId,
      prefixCommand,
      customCommand,
    },
  });
  // console.log(body)
  return NextResponse.json(body);
}
