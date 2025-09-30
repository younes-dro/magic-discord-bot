import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  if (!params.userId) {
    return new NextResponse("Missing user ID Field", { status: 400 });
  }

  try {
    const userBotCommands = await prisma.Commands.findUnique({
      where: {
        userId: params.userId,
      },
    });

    if (userBotCommands) {
      console.log(userBotCommands);
      return NextResponse.json(userBotCommands);
    } else {
      // console.log('none')
      return NextResponse.json({
        prefixCommand: "",
        customCommands: {
          getAllMemberships: "",
          getHelp: "",
        },
      });
    }
  } catch (error) {
    console.error("Error fetching user bot commands:", error);
    return new Response("Failed to fetch user bot commands", { status: 500 });
  }
};
