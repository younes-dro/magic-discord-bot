

import prisma from '../../../libs/prismadb'
import { NextResponse } from 'next/server'


export const GET = async (request, { params }) => {
    

    if(!params.userId ) {
        return new NextResponse('Missing user ID Field', { status: 400 })
    }

    try{

        const userApiSettings = await prisma.ApiSettings.findUnique({
            where: {
                userId : params.userId
            }
        });
    
        if(userApiSettings) {
            console.log(userApiSettings.settings)
            return NextResponse.json(userApiSettings.settings)
            
        } else{
            return NextResponse.json({ getAuthToken: '', getHostName: '' })
        }

    } catch(error){
        console.error('Error fetching user api settings:', error);
        return new Response("Failed to fetch user api settings", { status: 500 });
    }
}