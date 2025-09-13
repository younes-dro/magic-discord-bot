


import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'


export async function POST(request){
    const body = await request.json();
    const { userId, getAuthToken, getHostName }  = body;

    if(!userId ) {
        return new NextResponse('Missing user ID Field', { status: 400 })
    }
    const settings = { 'getAuthToken' : getAuthToken, 'getHostName' : getHostName }

    const exist = await prisma.ApiSettings.findUnique({
        where: {
            userId : userId
        }
    });

    if(exist) {
        // Update the command for that user
        try{
        const updatedUser = await prisma.ApiSettings.update({
            where: {
                userId: userId
            },
            data: {
                settings: settings
            }
        });
            // console.log('Updated User:', updatedUser);
            return NextResponse.json(body)
        } catch(error){
            console.log('Error update : ', error)
        }
    }


    const user = await prisma.ApiSettings.create({
        data: {
            userId,
            settings

        }
    });
    // console.log(body)
    return NextResponse.json(body)
}